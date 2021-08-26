# frozen_string_literal: true

class Brand < ApplicationRecord
  has_many :products, dependent: :destroy
  validates_presence_of :name
end
