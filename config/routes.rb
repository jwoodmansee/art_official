Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, controller: {
    registrations: 'users/registrations'
  }

  namespace :api do
    resources :profiles do
      resources :profile_categories
      resources :projects do
        resources :project_categories
      end
    end

    resources :conversations do
      resources :messages
    end
  end # End of namespace

  # Leave this as the last route at the bottom
  get '#unmatched_route', to: 'home#index'
end
