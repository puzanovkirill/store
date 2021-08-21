Rails.application.routes.draw do
  resources :categories, only: [:index, :show]
  resources :products, only: [:index, :show] do
    resources :properties, only: []
  end
end
