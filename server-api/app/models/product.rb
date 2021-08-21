class Product < ApplicationRecord
  belongs_to :category
  has_many :properties, dependent: :destroy
  validates_presence_of :name, :price
end
