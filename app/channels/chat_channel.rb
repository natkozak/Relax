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
      socket = { 
        message: message,
        type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
    # messages = Message.all.collect(&:content)
    messages = Message.all
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def edit(data)
    message = Message.find_by(id: data['messageId'])
    if message.update(content: data['contentUpdate'])
      # socket = { message: message, type: 'editMessage', id: data['messageId']}
      # ChatChannel.broadcast_to('chat_channel', socket)
      messages = Message.all
      socket = { messages: messages, type: 'messages' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def destroy(data)
    message = Message.find_by(id: data['messageId'])
    message.destroy
    
    messages = Message.all
    socket = { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

 def unsubscribed; end

end
