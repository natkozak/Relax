class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      user_in_general = ChannelMember.create(user_id: @user.id, channel_id: 1)
      user_in_random = ChannelMember.create(user_id: @user.id, channel_id: 2)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
