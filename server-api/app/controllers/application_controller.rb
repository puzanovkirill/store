# frozen_string_literal: true

class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler

  before_action :params_to_snake_case
  attr_reader :current_user

  def authorize_request
    @current_user = (AuthorizeRequest.new(request.headers).call)[:user]
  end

  private

  def params_to_snake_case
    request.parameters.deep_transform_keys!(&:underscore)
  end
end
