$(function(){
   $(".space").blur(function(){
   if($(this).val().match(/^[ 　\r\n\t]*$/)){
   alert("スペースのみを登録することはできません");
   }
   });
});
