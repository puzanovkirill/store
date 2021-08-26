# frozen_string_literal: true

class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :category_id, :brand_id, :image
  has_many :properties
end
