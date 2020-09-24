class UsersController < ApplicationController
  def new
    @user = User.new(flash[:user])
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to mypage_path
    else
      redirect_to new_user_path, flash: {
        user: user,
        error_messages: user.errors.full_messages
      }
      
    end
  end

  def me
    @summary = Summary.new
    @summaries = Summary.where(user_id: @current_user.id).order(id: "DESC" )
  end

  def login
  end

  private
  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation)
  end
end