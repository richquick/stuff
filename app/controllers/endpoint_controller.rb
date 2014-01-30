class EndpointController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  def true
    @response = {
      'success' => true,
      'allowed' => true
    }
    render json: @response
  end

  def false
    @response = {
      'success' => false,
      'allowed' => true
    }
    render json: @response
  end
end
