class CartController < ApplicationController
  before_action :authorize_request

  def index
    json_response obj: { products: cart_products }
  end

  def add_item
    product = Product.find(params[:id])
    CartItem.create(cart_id: current_user.cart.id, product_id: product.id)
    json_response obj: { products: cart_products }
  end

  def remove_item
    CartItem.find_by(product_id: params[:id], cart_id: current_user.cart.id).destroy
    json_response obj: { products: cart_products }
  end

  private

  def cart_products
    current_user.cart.cart_items.map { |item| item.product_id }  
  end
end
