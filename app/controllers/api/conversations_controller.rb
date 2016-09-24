class Api::ConversationsController < ApiController
  before_action :set_user, except: [:index, :update, :destroy]
  before_action :set_conversation, except: [:index, :create]
  def index
    render json: Conversations.all
  end

  def show
    render json: @conversation
  end

  def create
    conversation = @user.conversation.new(converation_params)
    if converation.save
      render json: converation
    else
      render json: {errors: conversation.errors, status: 401, message: 'Invaild input'}
    end
  end

  def update
    if @conversation.update(conversation_params)
      render json: @conversation
    else
      render json: {errors: conversation.errors} status: 401
    end
  end

  def destroy
    @convestaion.destrory
    render json: {message: 'Deleted'}

  end

  private

  def converastion_params
    params.require(:conversation).permit(:subject, :user_id)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

  def set_conversation
    @conversation = User.converastion.find(params[:id])
  end

end
