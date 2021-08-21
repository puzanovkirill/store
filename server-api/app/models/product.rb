class Product < ApplicationRecord
  has_many :properties, dependent :destroy
  validates_presence_of :name, :price
end
