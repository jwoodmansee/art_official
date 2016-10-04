class Api::ProjectsController < ApiController
  before_action :set_profile, except: [:all_projects]
  before_action :set_project, only: [:show, :update, :destroy]

  def index
    render json: @profile.projects.all
  end

  def all_projects
    @projects = Project.order(created_at: :desc)
  end

  def show
  end

  def create
    project = @profile.projects.new(project_params)
    if project.save
      render json: project
    else
      render json: {errors: project.errors}, status: 401
    end
  end

  def update
    if @project.update(project_params)
      render json: @project
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

end
