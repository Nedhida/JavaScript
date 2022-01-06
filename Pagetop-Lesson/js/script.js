$(function () {
  // #back内のaタグがクリックされたときの処理
  $('#back a').on('click', function (event) {
    //ページ全体に対して処理を実行するため
    $('body, html').animate({
      //最上部に移動する
      scrollTop: 0
      //0.8s
    }, 800);
    //aタグの保持機能を無効化する
    event.preventDefault();
  });
});