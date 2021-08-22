# frozen_string_literal: true

class AuthorizeRequest
  def initialize(headers = {})
    @headers = headers
  end

  def call
    { user: user }
  end

  private

  attr_reader :headers

  def user
    @user ||= User.find(decoded_payload[:id]) if decoded_payload
  rescue ActiveRecord::RecordNotFound => e
    raise(ExceptionHandler::InvalidToken, "#{Message.invalid_token} #{e.message}")
  end

  def decoded_payload
    @decoded_payload ||= JsonWebToken.decode(encoded_token)
  end

  def encoded_token
    return headers['Authorization'].split(' ').last if headers['Authorization'].present?

    raise(ExceptionHandler::MisingToken, Message.missing_token)
  end
end
