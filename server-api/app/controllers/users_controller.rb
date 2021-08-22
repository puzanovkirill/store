# frozen_string_literal: true

class UsersController < ApplicationController
  def create
    user = User.create!(user_params)
    Cart.create(user_id: user.id)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    json_response obj: { token: auth_token }, status: :created
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
