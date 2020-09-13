class DestroyJapanese < ActiveRecord::Migration[6.0]
  def change
    drop_table :japaneses
  end
end
