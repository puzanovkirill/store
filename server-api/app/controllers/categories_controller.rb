# frozen_string_literal: true

class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    json_response obj: @categories
  end

  def show
    @category = Category.find(params[:id])
    json_response obj: @category
  end
end
