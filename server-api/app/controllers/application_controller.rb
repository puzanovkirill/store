# frozen_string_literal: true

class ApplicationController < ActionController::API
  include Response
  include ExceptionHandler

  before_action :params_to_snake_case

  private

  def params_to_snake_case
    request.parameters.deep_transform_keys!(&:underscore)
  end
end
