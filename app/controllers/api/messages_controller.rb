class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render :index
  end

  def show
    @message = Message.find_by(id: params[:id])
    render :show
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render :show
    else # not sure if I need this
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    # todo: only allow users to update their own messages
    @message = Message.find_by(id: params[:id])
    if @message.update(message_params)
      render :show
    else # not sure if I need this
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    # todo: only allow users to delete their own messages
    @message = Message.find_by(id: params[:id])
    @message.destroy

    render :index
  end

  def message_params
    params.require(:message).permit(:content, :author_id, :channel_id)
  end
end