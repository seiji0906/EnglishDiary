class AddColumnsToSummary < ActiveRecord::Migration[6.0]
  def change
    add_column :summaries, :ja_diary, :text
    add_column :summaries, :en_diary, :text
  end
end
