$(function () {
  //$('#id名 要素名') idの子要素に対してのみ指定
  $('#back a').on('click', function (event) {
  //aタグがクリックされたときの処理
    $('body, html').animate({
      scrollTop: 0
    }, 800);
    event.preventDefault();
  });
});