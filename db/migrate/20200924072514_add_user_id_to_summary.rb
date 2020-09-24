class AddUserIdToSummary < ActiveRecord::Migration[6.0]
  def change
    add_column :summaries, :user_id, :integer
  end
end
