$(function () {
  $('.menu-trigger').on('click', function (event) {
    // 指定されているclass（active）をトグル処理するメソッド　トグル処理：該当classがある場合は削除、無い場合は追加する処理
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});