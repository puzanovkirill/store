class ProductsController < ApplicationController
  def index
    @products = Product.all
    json_response(@products)
  end

  def show
    @product = Product.find(params[:id])
    json_response(@product)
  end
end
