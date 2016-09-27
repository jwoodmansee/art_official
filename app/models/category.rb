class Category < ApplicationRecord
  belongs_to :cat, polymorphic: true
  
  serialize :music, Array
  serialize :photography, Array
  serialize :videography, Array
  serialize :muralist, Array
  serialize :painting, Array
  serialize :drawing, Array
  serialize :sculpture, Array
  serialize :graphic_design, Array
  serialize :performance, Array
  serialize :literature, Array
  serialize :hand_made, Array
end
