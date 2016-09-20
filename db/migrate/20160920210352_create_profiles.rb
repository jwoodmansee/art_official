class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :zip_code
      t.text :bio
      t.string :inspirations

      t.timestamps
    end
  end
end
