u = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'password', username: Faker::Internet.user_name)
profile = Profile.create(user_id: u.id)
30.times do
  if project = profile.projects.create!(name: Faker::Name.name)
    puts 'success'
  else
    binding.pry
  end
end