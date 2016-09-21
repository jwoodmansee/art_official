class Profile < ApplicationRecord
  belongs_to :user
  has_many :projects, dependent: :destroy
  has_many :profile_categories, dependent: :destroy
end
