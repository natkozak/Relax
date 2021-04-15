@comments.each do |comment|
  user = comment.author
  json.set! comment.id do
    json.extract! comment, :id, :content, :author_id, :channel_id, :created_at, :updated_at, :top_id
    json.extract! user, :full_name
  end
end