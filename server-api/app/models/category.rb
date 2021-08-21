# frozen_string_literal: true

class Category < ApplicationRecord
  has_many :products
  validates_presence_of :name
end
