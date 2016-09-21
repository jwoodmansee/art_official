class Project < ApplicationRecord
  belongs_to :profile
  has_many :project_categories
end
