class SummariesController < ApplicationController
  def new
    @en_diary = params[:en_diary][:body]
    @summary = Summary.new
  end

  def create
    @summary = Summary.new(summaries_params)
    if @summary.save
      redirect_to summaries_path
    end
  end

  def index
    @summaries = Summary.all
    @summary_1 = Summary.find(1)
    @summary_2 = Summary.find(2)
    @summary_3 = Summary.find(3)
  end

  def summaries_params
    params.require(:summary).permit(:body)
  end
end
