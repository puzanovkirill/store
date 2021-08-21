class Product < ApplicationRecord
  has_many :properties, dependent :destroy
  validate_presence_of :name, :price
end
