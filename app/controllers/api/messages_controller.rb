class Api::MessagesController < ApiController
  before_action :set_converation, only: :create
  before_action :set_message, except: [:index, :create]
  def index
    render json: Messages.all
  end

  def show
    render json: @messages
  end

  def create
    messages = @conversation.message.new(message_params)
    if message.save
      render json: message
    else
      render json: {errors: message.errors, status: 401, message: 'Unable to Send!'}
    end
  end

  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: {errors: message.errors, message: 'Unable to Send!'}
    end
  end

  def destroy
    @message.destroy 
    render json: {message: 'Message Destroyed!'}
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id, :conversation_id)
  end

  def set_converation
    @conversation = Converation.find(params[:conversation_id])
  end

  def set_message
    @message = Converation.message.find(params[:id])
  end
end
