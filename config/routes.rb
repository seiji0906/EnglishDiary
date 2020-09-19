Rails.application.routes.draw do
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  get 'mypage', to: 'users#me'
  get 'login', to: 'users#login', as: 'users_login'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :summaries 
  resources :users, :only => [:new, :create]
  get 'sample', to: 'summaries#sample', as: 'sample'
  root to: 'summaries#sample'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
