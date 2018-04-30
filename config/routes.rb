Rails.application.routes.draw do
  get 'domains' => 'dme#show_domains'
  post 'zone' => 'dme#create_zone'
end
