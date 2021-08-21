class Property < ApplicationRecord
  belongs_to :product
  validate_presence_of :name, :value
end
