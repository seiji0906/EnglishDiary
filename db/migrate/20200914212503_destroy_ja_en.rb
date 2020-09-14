class DestroyJaEn < ActiveRecord::Migration[6.0]
  def change
    drop_table :ja_diaries
    drop_table :en_diaries
  end
end
