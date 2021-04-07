class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      render :index
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    # only allow users to update their own messages
    @message = Message.find_by(id: params[:id])
    if @message.update(event_params)
      render :index
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    # only allow users to delete their own messages
    @message = Message.find_by(id: params[:id])
    @message.destroy

    render :index
  end

  def message_params
    params.require(:message).permit(:content)
  end
end
