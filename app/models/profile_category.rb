class ProfileCategory < ApplicationRecord
  belongs_to :profile

  # def self.categories
  #   { music:  { 'Hip-Hop', 'Rock', 'Country' } }
  # end
end
