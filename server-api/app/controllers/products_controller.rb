# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @products = Product.all
    filters.each do |key, value|
      @products = @products.public_send("filter_by_#{key}", value) if value.present?
    end
    json_response obj: @products
  end

  def show
    @product = Product.find params[:id]
    json_response obj: @product
  end

  private

  def filters
    params.slice :categories, :brands, :search
  end
end
