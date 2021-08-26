# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @products = if params[:categories] && params[:brands]
                  Product.where(category_id: params[:categories]).where(brand_id: params[:brands])
                elsif params[:categories]
                  Product.where(category_id: params[:categories])
                elsif params[:brands]
                  Product.where(brand_id: params[:brands])
                else
                  Product.all
                end

    json_response obj: @products
  end

  def show
    @product = Product.find(params[:id])
    json_response obj: @product
  end
end
