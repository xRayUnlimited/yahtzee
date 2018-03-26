Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :scores, only: [:index, :create]
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
