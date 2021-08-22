# frozen_string_literal: true

class AddKeysToCartItem < ActiveRecord::Migration[6.1]
  def change
    add_reference :cart_items, :cart, foreign_key: true
    add_reference :cart_items, :product, foreign_key: true
  end
end
