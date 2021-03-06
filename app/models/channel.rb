class Channel < ApplicationRecord
  validates :name, presence: true
  validates_inclusion_of :is_private, :in => [true, false]
  validates_inclusion_of :is_direct, :in => [true, false]
  validates :name, length: { minimum: 1 }
  # can I validate that direct messages are always private here?

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

  has_many :channel_memberships,
    foreign_key: :channel_id,
    class_name: :ChannelMember

  has_many :users,
    through: :channel_memberships,
    source: :user
end

