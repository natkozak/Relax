Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do

    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]

    resources :channels, only: [:index, :show, :create, :update, :destroy] do
      resources :messages, only: [:index]
      resources :messages, only: [:show] do
        get :comments
      end 
    end
    
  end


  root "static_pages#root"
  mount ActionCable.server, at: '/cable'
end
