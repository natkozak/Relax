
# @messages.each do |message|
#   json.set! message.id do
#     json.partial! 'message', message: message
#   end
# end

@messages.each do |message|
  user = message.author
  json.set! message.id do
    json.extract! message, :id, :content, :author_id, :channel_id, :created_at, :updated_at, :top_id
    json.extract! user, :full_name
  end
end

# json.set! "users" do 
#   @messages.each do |message|
#     user = message.author
#     json.set! user.id do
#       json.extract! user, :id, :full_name
#     end
#   end
# end



