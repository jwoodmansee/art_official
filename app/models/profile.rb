class Profile < ApplicationRecord
  belongs_to :user
  has_many :projects, dependent: :destroy
  has_one :profile_category
  after_create :create_profile_category

  private

  def create_profile_category
    self.profile_category = ProfileCategory.create
  end
end
