# frozen_string_literal: true

class CartController < ApplicationController
  before_action :authorize_request

  def index
    json_response obj: cart_res
  end

  def add_item
    product = Product.find(params[:id])
    CartItem.create(cart_id: current_user.cart.id, product_id: product.id)
    json_response obj: cart_res
  end

  def remove_item
    CartItem.find_by(product_id: params[:id], cart_id: current_user.cart.id).destroy
    json_response obj: cart_res
  end

  private

  def cart_res
    {
      products: current_user.cart.cart_items.map(&:product_id),
      total: current_user.cart.cart_items.reduce(0) { |sum, item| sum + item.product.price }
    }
  end
end
