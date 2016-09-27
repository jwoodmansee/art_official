json.profile do
  json.id @profile.id
  json.bio @profile.bio
  json.zip_code @profile.zip_code
  json.inspirations @profile.inspirations
  json.url api_profile_url(@profile)
  json.profile_categories @profile.profile_category
end




json.user do
  user = @profile.user
  json.username user.username
  json.email user.email
  json.first_name user.first_name
  json.last_name user.last_name
end