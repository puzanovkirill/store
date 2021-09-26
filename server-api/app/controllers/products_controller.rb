# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @products = Product.all

    if params[:categories].present?
      parents = Category.filter_by_ids(params[:categories])
      @categories = parents.map { |category| category.descendants }
      @categories = @categories.flatten
      parents.each { |parent| @categories.push(parent.id)}
      @products = @products.where(category_id: @categories)
    end

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
    params.slice :brands, :search
  end
end
