class Api::ProfilesController < ApplicationController
  before_action :set_profile, except: [:index, :create]

  def index
    render json: Profile.all
  end

  def show
    binding.pry
    render json: @profile
  end

  def create
    profile = Profile.new(profile_params)
    if profile.save
      render json: profile
    else
      render json: {errors: profile.errors}, status: 401
    end
  end

  def update
    if @profile.update(profile_params)
      render json: @profile
    else
      render json: {errors: profile.errors}, status: 401
    end
  end

  def destroy
    @profile.destroy
    render json: {message: 'Destroyed!'}
  end

  private

  def profile_params
    params.require(:movie).permit(:zip_code, :bio, :inspirations, :user_id)
  end

  def set_profile
    @profile = Profile.find(params[:id])
  end

end
