class JaDiariesController < ApplicationController  
  def new
    @ja_diary = JaDiary.new
  end

  def create
    @ja_diary = params[:ja_diary][:body]
    redirect_to new_en_diary_path(ja_diary: @ja_diary)
  end

  def ja_diary_params
    params.require(:ja_diary).permit(:body)
  end
end
