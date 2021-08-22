class AuthenticateUser
  def initialize(email, password)
    @email = email
    @password = password
  end

  def call
    auth_user = user
    JsonWebToken.encode({ id: auth_user.id , email: auth_user.email, first_name: auth_user.first_name, last_name: auth_user.last_name }) if auth_user
  end

  private

  attr_reader :email, :password

  def user
    user = User.find_by email: email
    return user if user && user.authenticate(password)
    raise(ExceptionHandler::AuthenticationError, Message.invalid_credentials)
  end
end
