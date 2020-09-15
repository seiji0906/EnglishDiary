class SummariesController < ApplicationController
  before_action :detect_devise_variant
  def new
    # @ja_diary = params[:summary][:ja_diary]
    # @en_diary = params[:summary][:en_diary]
    @summary = Summary.new
  end

  def new_ja_diary
    @ja_diary = Summary.new
  end

  def new_en_diary
    @ja_diary = params[:summary][:ja_diary]
    @en_diary = Summary.new
  end

  def create
    @summary = Summary.new(summaries_params)
    if @summary.save
      flash[:notice] = "日記ができました！"
      redirect_to summaries_path
    else
      redirect_to new_ja_diary_path
      flash[:notice] = "日記の作成に失敗しました。"
    end
  end

  def index
    @summaries = Summary.all
  end

  def edit
    @summary = Summary.find(params[:id])
  end

  def update
    @summary = Summary.find(params[:id])
    if @summary.update(summaries_params)
      redirect_to summaries_path
    end
  end  

  def summaries_params
    params.require(:summary).permit(:body, :ja_diary, :en_diary)
  end

  private


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


















