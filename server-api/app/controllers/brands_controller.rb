class BrandsController < ApplicationController
  def index
    @brands = Brand.all
    json_response obj: @brands
  end

  def show
    @brand = Brand.find(params[:id])
    json_response obj: @brand
  end
end
