$(function(){
   $(".space").blur(function(){
   if($(this).val().match(/^[ 　\r\n\t]*$/)){
   alert("スペースのみを登録することはできません");
   }
   });
});

//リアルタイム更新

$(function() {
  //editの場合の初期のテキスト内の文字を表示
  $('.js_realtime_ja').text($('.js_realtime_ja_diary').val());


 
  //テキストボックスに変更を加えたら発動
  $('.js_realtime_ja_diary').change(function() {
 
    //入力したvalue値を変数に格納
    var val = $(this).val();
 
    //選択したvalue値をp要素に出力
    $('.js_realtime_ja').text(val);
  });
});


$(function() {

  $('.js_realtime_en').text($('.js_realtime_en_diary').val());
 
  //テキストボックスに変更を加えたら発動
  $('.js_realtime_en_diary').change(function() {
 
    //入力したvalue値を変数に格納
    var val = $(this).val();
 
    //選択したvalue値をp要素に出力
    $('.js_realtime_en').text(val);
  });
});