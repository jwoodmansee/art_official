class Profile < ApplicationRecord
  belongs_to :user
  has_many :projects, dependent: :destroy
  has_one :category, as: :cat
  after_create :create_profile_category
  has_attached_file :avatar, styles: {medium: "300x300>", thumb: "100x100>"}, default_url: "images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  private

  def create_profile_category
    Category.create(cat_type: 'Profile', cat_id: self.id)
  end
end
