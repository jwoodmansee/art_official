class Project < ApplicationRecord
  belongs_to :profile
  has_one :category, as: :cat
  after_create :create_project_category

  private

  def create_project_category
    Category.create(cat_type: 'Project', cat_id: self.id)
  end
end
