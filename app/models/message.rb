# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  content    :string           not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Message < ApplicationRecord
  validates :content, :author_id, :channel_id, null: false
  validates :content, length: { maximum: 40000 } #experimental

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User


  after_initialize :ensure_default_channel, :attach_author_ownership

  def ensure_default_channel
    self.channel_id ||= 1
  end

  def attach_author_ownership #experimental
    self.author_id = current_user.id
  end
end
