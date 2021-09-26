# frozen_string_literal: true

class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  attribute :ancestry, key: :parent_id
end
