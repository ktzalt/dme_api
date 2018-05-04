require 'test_helper'

class DmeControllerTest < ActionDispatch::IntegrationTest
  test 'should return all domains' do
    get '/api/domains'
    expect(response.status).to eq 200
  end
end
