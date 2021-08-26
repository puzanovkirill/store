# frozen_string_literal: true

class Product < ApplicationRecord
  belongs_to :category
  belongs_to :brand
  has_many :properties, dependent: :destroy
  has_many :cart_items, dependent: :destroy
  validates_presence_of :name, :price

  scope :filter_by_categories, -> (categories) { where category_id: categories }
  scope :filter_by_brands, -> (brands) { where brand_id: brands }
  scope :filter_by_search, -> (search) {
    joins(:category)
      .joins(:brand)
      .where(
        'products.name ILIKE :search OR brands.name ILIKE :search OR categories.name ILIKE :search',
        search: "%#{search}%"
      )
  }
end
