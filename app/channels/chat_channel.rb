class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = Channel.find_by(id: params[:id])
    stream_for @channel
  end

  def create(data)
    # comments
    if data['topCreate']
      comment = Message.new(
        content: data['contentCreate'], 
        author_id: data['authorCreate'],
        channel_id: data['channelCreate'],
        top_id: data['topCreate']
      )
      if comment.save
        author = User.find_by(id: data['authorCreate'])
        comment_hash = Hash.new
        comment_hash[comment.id] = comment.attributes.deep_transform_keys! { |key| key.camelize(:lower) }
        comment_hash[comment.id]["fullName"] = author.full_name
        socket = { comment: comment_hash, type: 'comment' }
      end

    # top-level messages
    else
      message = Message.new(
        content: data['contentCreate'], 
        author_id: data['authorCreate'],
        channel_id: data['channelCreate']
      )
      if message.save
        author = User.find_by(id: data['authorCreate'])
        message_hash = Hash.new
        message_hash[message.id] = message.attributes.deep_transform_keys! { |key| key.camelize(:lower) }
        message_hash[message.id]["fullName"] = author.full_name
        socket = { message: message_hash, type: 'message' }
      end
    end

    ChatChannel.broadcast_to(@channel, socket)
  end

  def edit(data)
    # comment
    if data['commentId']
      comment = Message.find_by(id: data['commentId'])
      if comment.update(content: data['contentUpdate'])
        author = comment.author
        comment_hash = Hash.new
        comment_hash[comment.id] = comment.attributes.deep_transform_keys! { |key| key.camelize(:lower) }
        comment_hash[comment.id]["fullName"] = author.full_name
        socket = { comment: comment_hash, type: 'comment' }
      end
    
    # message
    elsif data['messageId']
      message = Message.find_by(id: data['messageId'])
      if message.update(content: data['contentUpdate'])
        author = message.author
        message_hash = Hash.new
        message_hash[message.id] = message.attributes.deep_transform_keys! { |key| key.camelize(:lower) }
        message_hash[message.id]["fullName"] = author.full_name
        socket = { message: message_hash, type: 'message' }
      end
    end

    ChatChannel.broadcast_to(@channel, socket)
  end

  def destroy(data)

    # comment
    if data['commentId']
      comment = Message.find_by(id: data['commentId'])
      comment.destroy
      socket = {commentId: data['commentId'], type: 'deleteComment'}

    # message
    else 
      message = Message.find_by(id: data['messageId'])
      message.destroy
      socket = {messageId: data['messageId'], type: 'deleteMessage'}
    end

    ChatChannel.broadcast_to(@channel, socket)
  end

  def unsubscribed; end

end