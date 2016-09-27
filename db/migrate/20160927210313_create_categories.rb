class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.text :music, array: true, default: []
      t.text :photography, array: true, default: []
      t.text :videography, array: true, default: []
      t.text :muralist, array: true, default: []
      t.text :painting, array: true, default: []
      t.text :drawing, array: true, default: []
      t.text :sculpture, array: true, default: []
      t.text :graphic_design, array: true, default: []
      t.text :performance, array: true, default: []
      t.text :literature, array: true, default: []
      t.text :hand_made, array: true, default: []

      t.references :cat, polymorphic: :true, index: true
      t.timestamps
    end
  end
end
