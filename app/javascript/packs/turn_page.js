$(function(){
  $('#page_turn').turn(
    {
      //自動でページをめくった時の高さ
      elevation: 50,
      //ページをめくる時の影
      gradients: true,
      //自動中央揃え
      autoCenter: false,
      //右開きか左開きかの設定（右）
      direction: 'rtl',
    }
  );
  //more_prevpageは、turn.jsで定義
  $('#more_prevpage').click(function(){
    $('#page_turn').turn('more_previous');
  });  
  $('#prevpage').click(function(){
    $('#page_turn').turn('previous');
  });
  // 次のページが押された時
  $('#nextpage').click(function(){
    $('#page_turn').turn('next');
  });

  $('#more_nextpage').click(function(){
    $('#page_turn').turn('more_next');
  });
});

$(function(){
//edit page
  $('#edit_page_turn').turn(
    {
      //自動でページをめくった時の高さ
      elevation: 50,
      //ページをめくる時の影
      gradients: true,
      //自動中央揃え
      autoCenter: false,
      //右開きか左開きかの設定（右）
      direction: 'ltr',
    }
  );
  // 前のページが押された時
  $('#prevpage').click(function(){
    $('#page_turn').turn('previous');
  });
  // 次のページが押された時
  $('#nextpage').click(function(){
    $('#page_turn').turn('next');
  });
});

//sample indexに表示
$(function(){
  $('.sample_submit').click(function(){
    $('.js_realtime_sample').text($('.sample_summary').val());
  });
});

$(function(){
//new page
  $('#new_page_turn').turn(
    {
      //自動でページをめくった時の高さ
      elevation: 50,
      //ページをめくる時の影
      gradients: true,
      //自動中央揃え
      autoCenter: false,
      //右開きか左開きかの設定（右）
      direction: 'ltr',
    }
  );
  // 前のページが押された時
  $('#prevpage').click(function(){
    $('#page_turn').turn('previous');
  });
  // 次のページが押された時
  $('#nextpage').click(function(){
    $('#page_turn').turn('next');
  });
});

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



