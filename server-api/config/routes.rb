# frozen_string_literal: true

Rails.application.routes.draw do
  scope path: '/api' do
    resources :categories, only: %i[index show]
    resources :products, only: %i[index show] do
      resources :properties, only: []
    end
  end
end
