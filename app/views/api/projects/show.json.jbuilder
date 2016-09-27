json.project do
  json.id @project.id
  json.name @project.name
  json.description @project.description
  json.collab @project.collab
  json.active @project.active
  json.url api_project_url(@project)
  json.categories @project.category
end

json.user do
  user = @profile.user
  json.username user.username
  json.email user.email
  json.first_name user.first_name
  json.last_name user.last_name
end
