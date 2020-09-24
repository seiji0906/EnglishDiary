$(function(){
   $(".space").blur(function(){
   if($(this).val().match(/^[ 　\r\n\t]*$/)){
   alert("スペースのみを登録することはできません");
   }
   });
});

//リアルタイム更新



//sample indexに表示
$(function(){
  $('.sample_submit').click(function(){
    $('.js_realtime_summary').text($('.sample_summary').val());
    var now = new Date();
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var h = now.getHours();
    var mi = now.getMinutes();
    $('.js_realtime_nowtime').text(y + '年 ' + m + '月 ' + d + '日 ' + h + '時 ' + mi + '分');
  });

});

//indexの文字をeditのtextareaに表示
$(function(){
  $('.sample_edit_submit').click(function(){
    $('.edit_sample_ja').text($('.new_sample_ja').val());
    $('.edit_sample_en').text($('.new_sample_en').val());
    $('.edit_sample_summary').text($('.new_sample_summary').val());

    $('.edit_sample_ja_text').text($('.new_sample_ja').val());
    $('.edit_sample_en_text').text($('.new_sample_en').val());
    $('.edit_sample_summary_text').text($('.new_sample_summary').val());
  });

});


//editのformの文字をindexに表示
$(function(){
  $('.sample_edit_submit_save').click(function(){
    $('.js_realtime_summary').text($('.edit_sample_summary').val());
      var now = new Date();
      var y = now.getFullYear();
      var m = now.getMonth() + 1;
      var d = now.getDate();
      var h = now.getHours();
      var mi = now.getMinutes();
      $('.js_realtime_nowtime').text(y + '年 ' + m + '月 ' + d + '日 ' + h + '時 ' + mi + '分');
  });

});

//sample indexに表示
$(function(){
  $('.sample_submit').click(function(){
    $('.js_realtime_sample').text($('.sample_summary').val());
  });
});

//new リアルタイム更新
// ja
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

//en
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

//edit リアルタイム更新
// ja
$(function() {
  //editの場合の初期のテキスト内の文字を表示
  $('.edit_sample_ja_text').text($('.edit_sample_ja').val());


 
  //テキストボックスに変更を加えたら発動
  $('.edit_sample_ja').change(function() {
 
    //入力したvalue値を変数に格納
    var val = $(this).val();
 
    //選択したvalue値をp要素に出力
    $('.edit_sample_ja_text').text(val);
  });
});

//en
$(function() {

  $('.edit_sample_en_text').text($('.edit_sample_en').val());
 
  //テキストボックスに変更を加えたら発動
  $('.edit_sample_en').change(function() {
 
    //入力したvalue値を変数に格納
    var val = $(this).val();
 
    //選択したvalue値をp要素に出力
    $('.edit_sample_en_text').text(val);
  });
});


$(function(){
    // 「id="clcbtn"」がクリックされた場合
    $('#show').hide();
    $("#show-botton").click(function(){
        // 「class="listtext"」の表示、非表示を切り替える
        $("#show").toggle();
    });
});














