class Category < ApplicationRecord
  has_many :products
  validate_presence_of :name
end
