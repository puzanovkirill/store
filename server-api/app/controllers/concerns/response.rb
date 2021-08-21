module Response
  def json_response(obj, status = :ok)
    render json: { payload: obj }, status: status
  end
end
