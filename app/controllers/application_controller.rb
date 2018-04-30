class ApplicationController < ActionController::API
  def dme
    @dme ||= Dme.new
  end
end
