class Summary < ApplicationRecord
  validates :body, {presence: true, length: {maximum: 1000}}
  validates :ja_diary, {presence: true, length: {maximum: 800}}
  validates :en_diary, {presence: true, length: {maximum: 1200}}
end
