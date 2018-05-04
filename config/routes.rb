Rails.application.routes.draw do

  # DOMAIN
  get '/api/domains' => 'dme#show_domains'

  # ZONE
  post '/api/zone' => 'dme#create_zone'
  
end
