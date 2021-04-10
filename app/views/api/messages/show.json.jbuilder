json.set! @message.id do
  json.partial! 'message', message: @message
end

