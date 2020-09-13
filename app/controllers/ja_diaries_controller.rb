class JaDiariesController < ApplicationController  
  def new
    @ja_diary = JaDiary.new
  end

  def create
    @ja_diary = JaDiary.new(ja_diary_params)
    if @ja_diary.save
      redirect_to "/"
    end
  end

  def ja_diary_params
    params.require(:ja_diary).permit(:body)
  end
end
