class ChatChannel < ApplicationCable::Channel
  def subscribed
    # when implementing channels: stream_for instance of class "Channel". Also change this in every broadcast_to in my methods below.
    stream_for 'chat_channel'
  end

  def create(data)
    message = Message.new(
      content: data['contentCreate'], 
      author_id: data['authorCreate']
    )
    if message.save
      author = User.find_by(id: data['authorCreate'])
      message_hash = Hash.new
      message_hash[message.id] = message.attributes.deep_transform_keys! { |key| key.camelize(:lower) }
      message_hash[message.id]["fullName"] = author.full_name
      socket = { message: message_hash, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
  ChatChannel.broadcast_to('chat_channel', load_socket)
  end

# refactor edit to be similar to create: only send up one message, of type "message" (maybe factor out types?)

  def edit(data)
    message = Message.find_by(id: data['messageId'])
    if message.update(content: data['contentUpdate'])
      author = message.author
      message_hash = Hash.new
      message_hash[message.id] = message.attributes.deep_transform_keys! { |key| key.camelize(:lower) }
      message_hash[message.id]["fullName"] = author.full_name
      socket = { message: message_hash, type: 'message' }

      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  # doesn't need to send up an entire message: just an id.
  # reducer should just take the id and delete the message from the redux state (I'll need to make a regular action creator)
  def destroy(data)
    message = Message.find_by(id: data['messageId'])
    message.destroy
    socket = {messageId: data['messageId'], type: 'deleteMessage'}
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end

  private
  def load_socket
    m_with_authors = Message.all.includes(:author)
    authors = m_with_authors.collect(&:author)
    messages = Message.all
    messages_hash = Hash.new

    messages.each.with_index do |message, idx|
      messages_hash[message.id] = message.as_json
      messages_hash[message.id]["author_name"] = authors[idx].full_name
    end

    return { messages: messages_hash, type: 'messages' }
  end

end