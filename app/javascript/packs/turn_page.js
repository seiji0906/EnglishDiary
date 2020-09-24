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
});


$(function(){

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








