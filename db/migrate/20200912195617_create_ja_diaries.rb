class CreateJaDiaries < ActiveRecord::Migration[6.0]
  def change
    create_table :ja_diaries do |t|
      t.text :body

      t.timestamps
    end
  end
end
