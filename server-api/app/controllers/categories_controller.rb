class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    json_response(@categories)
  end

  def show
    @category = Category.find(params[:id])
    json_response(@category)
  end
end
