# frozen_string_literal: true

class AuthController < ApplicationController
  def authenticate
    auth_token = AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    json_response obj: { token: auth_token }
  end

  private

  def auth_params
    params.permit(:email, :password)
  end
end
