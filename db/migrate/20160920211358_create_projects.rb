class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :category
      t.boolean :collab
      t.boolean :active

      t.timestamps
    end
  end
end
