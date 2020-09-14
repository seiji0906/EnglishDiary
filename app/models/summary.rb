class Summary < ApplicationRecord
  validates :body, presence: true
  validates :ja_diary, presence: true
  validates :en_diary, presence: true
end
