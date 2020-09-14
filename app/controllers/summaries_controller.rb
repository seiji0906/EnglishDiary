class SummariesController < ApplicationController
  def new
    @ja_diary = params[:summary][:ja_diary]
    @en_diary = params[:summary][:en_diary]
    @summary = Summary.new
  end

  def new_ja_diary
    @ja_diary_summary = Summary.new
  end

  def new_en_diary
    @ja_diary = params[:summary][:ja_diary]
    @en_diary_summary = Summary.new
  end

  def create
    @summary = Summary.new(summaries_params)
    if @summary.save
      redirect_to summaries_path
    end
  end

  def index
    @summaries = Summary.all
  end

  def summaries_params
    params.require(:summary).permit(:body, :ja_diary, :en_diary)
  end
end
