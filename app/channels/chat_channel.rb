class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    message = Message.new(content: data['message'])
    if message.save
      socket = { message: message.content, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
    @messages = Message.all.collect(&:content)
    # channel = Channel.find(params[:id])
    # messages = channel.messages.all
    socket = { messages: @messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end
end
