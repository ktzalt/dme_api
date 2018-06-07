Rails.application.routes.draw do

  # DOMAIN
  get '/api/domain/:domain' => 'dme#show_domain'
  get '/api/domains' => 'dme#show_domains'

  # AGENT DOMAIN 
  post '/api/domain' => 'dme#create_agent_domain'
  delete '/api/domain' => 'dme#delete_agent_domain'
    
end