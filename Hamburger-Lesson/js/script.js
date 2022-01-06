$(function () {
  $('.menu-trigger').on('click', function (event) {
    //トグル処理では、該当のclass属性('active')がある場合にはclassが削除され、ない場合にはclassが追加されます
    $(this).toggleClass('active');
    //.fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});