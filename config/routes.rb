Rails.application.routes.draw do
  resources :ja_diaries
  resources :en_diaries
  resources :summaries
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
