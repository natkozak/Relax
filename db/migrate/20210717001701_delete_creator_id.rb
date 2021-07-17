class DeleteCreatorId < ActiveRecord::Migration[5.2]
  def change
        remove_column :channels, :creator_id
  end
end
