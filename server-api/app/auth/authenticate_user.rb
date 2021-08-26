# frozen_string_literal: true

class AuthenticateUser
  def initialize(email, password)
    @email = email
    @password = password
  end

  def call
    auth_user = user
    JsonWebToken.encode({ id: auth_user.id, email: auth_user.email, firstName: auth_user.first_name,
                          lastName: auth_user.last_name }) while auth_user
  end

  private

  attr_reader :email, :password

  def user
    user = User.find_by email: email
    return user if user&.authenticate(password)

    raise(ExceptionHandler::AuthenticationError, Message.invalid_credentials)
  end
end
