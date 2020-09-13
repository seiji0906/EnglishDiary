class EnDiariesController < ApplicationController
  def new
    @en_diary = EnDiary.new
  end

  def create
    @en_diary = EnDiary.new(en_diaries_params)
    if @en_diary.save
      redirect_to "/"
    end
  end

  def en_diaries_params
    params.require(:en_diary).permit(:body)
  end
end
