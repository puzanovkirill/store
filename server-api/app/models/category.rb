# frozen_string_literal: true

class Category < ApplicationRecord
  has_many :products, dependent: :destroy
  validates_presence_of :name
end
