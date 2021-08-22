# frozen_string_literal: true

Rails.application.routes.draw do
  scope path: '/api' do
    resources :categories, only: %i[index show]
    resources :products, only: %i[index show] do
      resources :properties, only: []
    end
    post 'sign-up', to: 'users#create'
    post 'login', to: 'auth#authenticate'
  end
end
