class ApplicationController < ActionController::Base
  before_action :current_user
  before_action :detect_devise_variant

  private

  def current_user
    return unless session[:user_id]
    @current_user = User.find_by(id: session[:user_id])
  end

  def user_logged_in?
    if @current_user.nil?
      redirect_to users_login_path
      flash[:notice] = "日記の作成にはログインが必要です"
    end
  end

  def detect_devise_variant
    # いけてる
    case request.user_agent
    when /iPad/
      request.variant = :tablet
      p "tabletだぜ"
    when /iPhone/
      request.variant = :mobile
      p "mobileだぜ"
    else
      p "hogehogeだぜ"
    end
  end
end