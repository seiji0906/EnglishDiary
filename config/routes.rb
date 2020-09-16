Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :summaries 
  get 'sample', to: 'summaries#sample', as: 'sample'
  root to: 'summaries#sample'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
