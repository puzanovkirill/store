class AddPropsToProducts < ActiveRecord::Migration[6.1]
  def change
    add_reference :properties, :product, foreign_key: true
  end
end
