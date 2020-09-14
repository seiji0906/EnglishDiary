Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :ja_diaries
  resources :en_diaries
  resources :summaries
  get 'ja_diary_summaries/new', to: 'summaries#new_ja_diary', as: 'new_ja_diary_summary'
  get 'en_diary_summaries/new', to: 'summaries#new_en_diary', as: 'new_en_diary_summary'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
