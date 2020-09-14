class Summary < ApplicationRecord
  validates :body, presence: true
  attr_accessor :en_diary
end
