class Api::ProfilesController < ApiController
  # before_action require: :user

  before_action :set_profile, except: [:index, :create]

  def index
    render json: Profile.all
  end

  def show
  end

  def update
    if @profile.update(profile_params)
      @profile.category.update(category_params)
      render :show
    else
      render json: {errors: @profile.errors}, status: 401
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:avatar, :zip_code, :bio, :inspirations)
  end

  def category_params
    params.require(:cat).permit(
      :music => [],
      :photography => [],
      :videography => [],
      :muralist => [],
      :painting => [],
      :drawing => [],
      :sculpture => [],
      :graphic_design => [],
      :performance => [],
      :literature => [],
      :hand_made => [])
  end

  def set_profile
    @profile = Profile.includes(:user).find(params[:id])
  end

end
