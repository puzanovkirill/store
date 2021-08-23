# frozen_string_literal: true

class Product < ApplicationRecord
  belongs_to :category
  has_many :properties, dependent: :destroy
  has_many :cart_items, dependent: :destroy
  validates_presence_of :name, :price
end
