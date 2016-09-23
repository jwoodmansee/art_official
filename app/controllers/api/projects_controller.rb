class Api::ProjectsController < ApplicationController
  before_action :set_profile, except: [:index, :update, :destroy, :all_projects]
  before_action :set_project, except: [:index, :create, :all_projects]

  def index
    render json: @profile.projects.all
  end

  def all_projects
    render json: Project.all
  end

  def show
    render json: @project
  end

  def create
    project = @profile.project.new(project_params)
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
      render json: {errors: project.errors}, status: 401
    end
  end

  def destroy
    @project.destroy
    render json: {message: 'Destroyed!'}
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :category, :collab, :active, :profile_id)
  end

  def set_profile
    @profile = Profile.find(params[:profile_id])
  end

  def set_project
    @project = Profile.project.find(params[:id])
  end

end
