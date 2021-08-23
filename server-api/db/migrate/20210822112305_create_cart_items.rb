# frozen_string_literal: true

class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items, &:timestamps
  end
end
