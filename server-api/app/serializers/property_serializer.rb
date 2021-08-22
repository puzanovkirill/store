# frozen_string_literal: true

class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :value
end
