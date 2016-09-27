class CreateProfileCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :profile_categories do |t|
      t.string :music
      t.string :photography
      t.string :videography
      t.string :muralist
      t.string :painting
      t.string :drawing
      t.string :sculpture
      t.string :graphic_design
      t.string :performance
      t.string :literature
      t.string :hand_made
      t.belongs_to :profile, foreign_key: true

      t.timestamps
    end
  end
end
