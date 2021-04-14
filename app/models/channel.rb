class Channel < ApplicationRecord
  validates :name, :is_private, :is_direct, presence: true
  validates :name, length: { minimum: 1 }
  # can I validate that direct messages are always private here?

  # has_many :channel_memberships,
  #   foreign_key: :channel_id,
  #   class_name: :ChannelMember

  # has_many :users,
  #   through: :channel_memberships,
  #   source: :user
  # has_many :messages,
  #   foreign_key: :channel_id,
  #   class_name: :Message
end

