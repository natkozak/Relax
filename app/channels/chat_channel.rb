class ChatChannel < ApplicationCable::Channel
  def subscribed
    # when implementing channels: stream_for instance of class "Channel". Also change this in every broadcast_to in my methods below.
    stream_for 'chat_channel'
  end

  def create(data)
    # comments
    if data['topCreate']
      comment = Message.new(
        content: data['contentCreate'], 
        author_id: data['authorCreate'],
        top_id: data['topCreate']
      )
      if comment.save
        author = User.find_by(id: data['authorCreate'])
        comment_hash = Hash.new
        comment_hash[comment.id] = comment.attributes.deep_transform_keys! { |key| key.camelize(:lower) }
        comment_hash[comment.id]["fullName"] = author.full_name
        socket = { comment: comment_hash, type: 'comment' }
        ChatChannel.broadcast_to('chat_channel', socket)
      end

    # top-level messages
    else
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


  end

  def load
  ChatChannel.broadcast_to('chat_channel', load_socket)
  end

  def edit(data)
    if data['commentId']
      comment = Message.find_by(id: data['commentId'])
      if comment.update(content: data['contentUpdate'])
        author = comment.author
        message_hash = Hash.new
        message_hash[comment.id] = comment.attributes.deep_transform_keys! { |key| key.camelize(:lower) }
        message_hash[comment.id]["fullName"] = author.full_name
        socket = { comment: message_hash, type: 'comment' }
        ChatChannel.broadcast_to('chat_channel', socket)
      end
    elsif data['messageId']
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
  end

  def destroy(data)
    if data['commentId']
      comment = Message.find_by(id: data['commentId'])
      comment.destroy
      socket = {commentId: data['commentId'], type: 'deleteComment'}
    else 
      message = Message.find_by(id: data['messageId'])
      message.destroy
      socket = {messageId: data['messageId'], type: 'deleteMessage'}
    end
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