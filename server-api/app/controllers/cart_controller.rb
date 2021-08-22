class CartController < ApplicationController
  before_action :authorize_request

  def index
    products = current_user.cart.cart_items.map { |item| item.product_id }
    json_response obj: products
  end
end
