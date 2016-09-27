class Project < ApplicationRecord
  belongs_to :profile
  has_one :project_category
end
