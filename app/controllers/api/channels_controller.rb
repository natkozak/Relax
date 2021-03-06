class Api::ChannelsController < ApplicationController
 # todo: make a factory method that automatically adds all users to the channel with id: 1, with name: "general"
 
  def index
    #todo: search function will need to get a list of all channels that are not private, not just all channels that a user has membership in. make this another function?

    @user = User.find_by(id: params[:userId])
    @channels = @user.channels
    render :index
  end
 
  def create
    # make sure all direct messages are automatically private on the frontend
    @channel = Channel.new(channel_params)
    if @channel.save
      if @channel.is_direct
        # check to make sure direct message is private
        # make a new message with one other email selected
        # while loop to continue adding members until there are no more from params
        # direct channels' names are the members' full names
      elsif @channel.is_private
        # private channels can only be joined by invitees who are already in the channel. show up in the main channel list
        @creator_membership = ChannelMember.create(user_id: @channel.creator_id, channel_id: @channel.id)
      else # public channel
        ids = User.all.pluck(:id)
        ids.each do |id|
          ChannelMember.create(user_id: id, channel_id: @channel.id)
        end
        # automatically joined by everyone until search is implemented
      end
      render :show
    end
  end
 
  def show
    @channel = Channel.find(params[:id])

    render :show
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render :show
    else 
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @channel = Channel.find(params[:id])
    @channel.destroy
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description, :is_direct, :is_private, :creator_id)
  end
end

