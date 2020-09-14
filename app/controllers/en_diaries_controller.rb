class EnDiariesController < ApplicationController
  def new
    @ja_diary = params[:ja_diary]
    @en_diary = EnDiary.new
  end

  def create
    @en_diary = params[:en_diary][:body]
    redirect_to new_summary_path(en_diary: @en_diary)
  end

  def en_diaries_params
    params.require(:en_diary).permit(:body)
  end
end


    # if params[:body].present? && params[:ja_diary].nil?

    #   @ja_diary = params[:body]

    # elsif params[:ja_diary][:body].present?

    #   @en_diary = params[:ja_diary][:body]
      
    # end
