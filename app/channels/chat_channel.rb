class ChatChannel < ApplicationCable::Channel
  def subscribed
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
      message_hash[message.id] = message.as_json
      message_hash[message.id]["author_name"] = author.full_name
      socket = { message: message_hash, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

 def load
  # m_with_authors = Message.all.includes(:author)
  # authors = m_with_authors.collect(&:author)
  # messages = Message.all
  # messages_hash = Hash.new
  # messages.each.with_index do |message, idx|
  #   messages_hash[message.id] = message.as_json
  #   messages_hash[message.id]["author_name"] = authors[idx].full_name
  # end
  # socket = { messages: messages_hash, type: 'messages' }
  ChatChannel.broadcast_to('chat_channel', load_socket)
  end

  def edit(data)
    message = Message.find_by(id: data['messageId'])
    if message.update(content: data['contentUpdate'])
      # socket = { message: message, type: 'editMessage', id: data['messageId']}
      # ChatChannel.broadcast_to('chat_channel', socket)
      # messages = Message.all
      # socket = { messages: messages, type: 'messages' }
      # ChatChannel.broadcast_to('chat_channel', socket)

      # load

        ChatChannel.broadcast_to('chat_channel', load_socket)
    end
  end

  def destroy(data)
    message = Message.find_by(id: data['messageId'])
    message.destroy
    ChatChannel.broadcast_to('chat_channel', load_socket)
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