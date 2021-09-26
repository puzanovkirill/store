# frozen_string_literal: true

class Category < ApplicationRecord
  has_ancestry
  has_many :products, dependent: :destroy
  validates_presence_of :name

  scope :filter_by_ids, -> (ids) { where id: ids }
end
