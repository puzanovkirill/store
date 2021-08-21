# frozen_string_literal: true

module Response
  def json_response(obj: nill, status: :ok, include: nil)
    render json: { payload: obj }, status: status, include: include, except: %i[created_at updated_at]
  end
end
