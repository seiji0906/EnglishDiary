class SummariesController < ApplicationController
  def new
    @en_diary = params[:en_diary][:body]
    @summary = Summary.new
  end

  def create
    @summary = Summary.new(summaries_params)
    if @summary.save
      redirect_to "/"
    end
  end

  def index
    @summaries = Summary.all
  end

  def summaries_params
    params.require(:summary).permit(:body)
  end
end
