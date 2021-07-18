class CreateChannelMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_members do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      
      t.timestamps
    end

    add_index :channel_members, :user_id
    add_index :channel_members, :channel_id
  end
end
