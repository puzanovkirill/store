# frozen_string_literal: true

class Property < ApplicationRecord
  belongs_to :product
  validates_presence_of :name, :value
end
