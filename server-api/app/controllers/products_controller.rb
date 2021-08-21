class ProductsController < ApplicationController
  def index
    @products = Product.all
    json_response obj: @products, include: properties
  end

  def show
    @product = Product.find(params[:id])
    json_response obj: @product, include: properties
  end

  private

  def properties
    { properties: { except: [:created_at, :updated_at, :product_id] } }
  end
end
