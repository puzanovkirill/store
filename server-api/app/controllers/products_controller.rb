# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @products = Product.all

    if params[:categories]
      @products = @products.where(category_id: params[:categories])
    end

    if params[:brands]
      @products = @products.where(brand_id: params[:brands])
    end

    if params[:search]
      @products = @products.joins(:brand).where(
        'products.name ILIKE :search OR brands.name ILIKE :search',
        search: "%#{params[:search]}%"
      )
    end
    
    json_response obj: @products
  end

  def show
    @product = Product.find(params[:id])
    json_response obj: @product
  end
end
