Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :summaries 
  get 'ja_diary/new', to: 'summaries#new_ja_diary', as: 'new_ja_diary'
  get 'en_diary/new', to: 'summaries#new_en_diary', as: 'new_en_diary'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
