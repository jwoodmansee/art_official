class Category < ApplicationRecord
  belongs_to :cat, polymorphic: true
end
