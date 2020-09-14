class SummariesController < ApplicationController
  def new
    @summary = Summary.new
    @en_diary = params[:en_diary]
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
    params.require(:summary).permit(:body)
  end
end
