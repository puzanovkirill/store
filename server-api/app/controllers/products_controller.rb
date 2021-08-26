# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    if params[:categories] and params[:brands]
      @products = Product.where(category_id: params[:categories]).where(brand_id: params[:brands])
    elsif params[:categories]
      @products = Product.where(category_id: params[:categories])
    elsif params[:brands]
      @products = Product.where(brand_id: params[:brands])
    else
      @products = Product.all 
    end

    json_response obj: @products
  end

  def show
    @product = Product.find(params[:id])
    json_response obj: @product
  end
end
