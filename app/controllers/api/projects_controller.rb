class Api::ProjectsController < ApiController
  before_action :set_profile, except: [:browse_all, :all_projects]
  before_action :set_project, only: [:show, :update, :destroy]

  def index
    @profile = @profile.projects.all.order(created_at: :desc)
  end

  def all_projects
    @projects = Project.order(created_at: :desc)
  end

  def browse_all
    @projects = Project.order(created_at: :desc)
    @profiles = Profile.all
    render json: {projects: @projects, profiles: @profiles}
  end

  def search
    search = params[:search]
    seach_results = Project.where('category LIKE ?', search)
    render json: {projects: search_results }
  end

  def show
  end

  def create
    project = @profile.projects.new(project_params)
    if project.save
      if params[:cat]
        project.category.update(category_params)
      end
      render json: project
    else
      render json: {errors: project.errors}, status: 401
    end
  end

  def update
    if @project.update(project_params)
      if params[:cat]
        @project.category.update(category_params)
      end
      render :show
    else
      render json: {errors: @project.errors}, status: 401
    end
  end

  def destroy
    @project.destroy
    render json: {message: 'Destroyed!'}
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :category, :collab, :active)
  end

  def set_profile
    @profile = Profile.find(params[:profile_id])
  end

  def set_project
    @project = @profile.projects.find(params[:id])
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

end
