class Api::ProfilesController < ApiController
  # before_action require: :user
  before_action :set_profile, except: [:index, :create]

  def index
    @profiles = Profile.all
  end

  def show
    @conversations = Conversation.where('sent_to = ? OR sent_from = ?', current_user.id, current_user.id)
  end

  def update
    if file = params[:file]
      s3 = Aws::S3::Resource.new(region: ENV['AWS_REGION'])
      s3_bucket = ENV['S3_BUCKET_NAME']
      name = file.original_filename
      begin
        obj = s3.bucket(s3_bucket).object(name)
        obj.upload_file(file.tempfile)
        obj.acl.put({ acl: 'public-read' })
        url = obj.public_url
        params[:profile] = params[:profile] || {}
        params[:profile][:image_url] = url
      rescue => e
      end
    end

    if @profile.update(profile_params)
      if params[:cat]
        @profile.category.update(category_params)
      end
      render :show
    else
      render json: {errors: @profile.errors}, status: 401
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:zip_code, :bio, :inspirations, :image_url)
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
