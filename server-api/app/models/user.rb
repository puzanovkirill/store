# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_one :cart, dependent: :destroy

  validates_presence_of :first_name, :last_name, :email, :password_digest
end
