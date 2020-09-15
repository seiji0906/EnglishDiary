class Summary < ApplicationRecord
  validates :body, {presence: true, length: {maximum: 1200}}
  validates :ja_diary, presence: true
  validates :en_diary, presence: true
end
