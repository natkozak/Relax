class AddTopIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :top_id, :integer
    add_index :messages, :top_id
  end
end
