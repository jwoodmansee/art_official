Rails.application.routes.draw do
  get 'home/index'

  root 'home#index'

  resources :users
  
  devise_for :users, controller: {
    registrations: 'users/registrations'
  }
  # Leave this as the last route at the bottom
  get '#unmatched_route', to: 'home#index'
end
