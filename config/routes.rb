Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controller: {
    registrations: 'users/registrations'
  }

  namespace :api do 
    resources :profiles do
      resources :projects
    end
  end
  # Leave this as the last route at the bottom
  get '#unmatched_route', to: 'home#index'
end
