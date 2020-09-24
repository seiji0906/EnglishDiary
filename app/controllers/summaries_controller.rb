class SummariesController < ApplicationController
  before_action :user_logged_in?, only: [:new, :create, :edit, :update, :destroy]
  def new
    @summary = Summary.new
  end

  def create
    @summary = Summary.new(summaries_params)
    @summary.user_id = @current_user.id
    if @summary.save
      flash[:notice] = "日記ができました！"
      redirect_to mypage_path
    else
      redirect_to new_summary_path
      flash[:notice] = "日記の作成に失敗しました。"
    end
  end

  def edit
    @summary = Summary.find(params[:id])
  end

  def update
    @summary = Summary.find(params[:id])
    if @summary.update(summaries_params)
      redirect_to mypage_path
    end
  end

  def sample
    @summaries = Summary.all.order(id: "DESC")
  end

  def destroy
    @summary = Summary.find(params[:id])
    @summary.destroy
    redirect_to mypage_path
  end

  def summaries_params
    params.require(:summary).permit(:body, :ja_diary, :en_diary, :user_id)
  end
end


















