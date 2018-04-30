class CreateDmes < ActiveRecord::Migration[5.1]
  def change
    create_table :dmes do |t|

      t.timestamps
    end
  end
end
