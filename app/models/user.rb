# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  full_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password # why is it that when I try to add full_name as a reader, I can no longer display the user name in the search bar?

  validates :email, :password_digest, :session_token, :full_name, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token, :ensure_full_name

  has_many :messages,
    foreign_key: :author_id,
    class_name: :Message

  has_many :created_channels,
    foreign_key: :creator_id,
    class_name: :Channel

  has_many :channel_memberships,
    foreign_key: :user_id,
    class_name: :ChannelMember

  has_many :channels,
    through: :channel_memberships,
    source: :channel


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_full_name
    self.full_name ||= self.email.split('@')[0]
  end

end
