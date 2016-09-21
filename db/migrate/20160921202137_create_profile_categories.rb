class CreateProfileCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :profile_categories do |t|
      t.boolean :music
      t.boolean :photography
      t.boolean :videography
      t.boolean :muralist
      t.boolean :painting
      t.boolean :drawing
      t.boolean :sculpture
      t.boolean :graphic_design
      t.boolean :performance
      t.boolean :literature
      t.boolean :hand_made
      t.belongs_to :profile, foreign_key: true

      t.timestamps
    end
  end
end
