class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :category_id
  has_many :properties
end
