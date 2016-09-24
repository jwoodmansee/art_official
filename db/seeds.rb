
u = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, 
                email: 'dev4@art.com', password: 'password', 
                username: Faker::Internet.user_name)

u.profile.update(bio: Faker::Lorem.paragraph, zip_code: Faker::Address.zip_code, 
                        inspirations: Faker::Lorem.sentence)

puts 'User and Profile Seeded!'

# leave this for when you start doing projects react stuff
# 30.times do
#   profile.projects.create!(name: Faker::Name.name)
# end