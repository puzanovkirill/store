# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products
  end

  def show
    @product = Product.find(params[:id])
    json_response obj: @product
  end
end
