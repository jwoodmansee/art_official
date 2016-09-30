class Profile < ApplicationRecord
  belongs_to :user
  has_many :projects, dependent: :destroy
  has_one :category
  after_create :create_profile_category

  private

  def create_profile_category
    Category.create(cat_type: 'Profile', cat_id: self.id)
  end
end
