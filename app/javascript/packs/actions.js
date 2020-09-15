$(function() {
    //始めにjQueryで送信ボタンを無効化する
    $('.actions').prop("disabled", true);
    
    //始めにjQueryで必須欄を加工する
    $('form tex_area:required').each(function () {
        $(this).prev("label").addClass("required");
    });
    
    //入力欄の操作時
    $('form text_area:required').change(function () {
        //必須項目が空かどうかフラグ
        let flag = true;
        let check = true;
        //必須項目をひとつずつチェック
        $('form text_area:required').each(function(e) {
            //もし必須項目が空なら
            if ($('form text_area:required').eq(e).val() === "") {
                flag = false;
            }
            // var count = $(".actions").text().replace(/\n/g, "改行").length;
            // if (count > 1200) {
            //     check = false;
            // }
        });
        //全て埋まっていたら
        if (flag) {
            //送信ボタンを復活
            $('.actions').prop("disabled", false);
        }
        else {
            //送信ボタンを閉じる
            $('.actions').prop("disabled", true);
        }
    });


});