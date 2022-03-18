// TAB1のコンテンツ以外を非表示
$('#tab-contents .tab[id != "tab1"]').hide();
// ↑　$('要素[属性]') 特定の属性を持つ要素や属性値を絞り込む。!= "値"　属性値が特定の値に等しくない要素だけを取得

// それぞれのタブがクリックされた時のイベント
$('#tab-menu a').on('click', function (event) {
  // タブ内のコンテンツを一旦非表示
  $("#tab-contents .tab").hide();
  // .activeクラスを削除
  $("#tab-menu .active").removeClass("active");
  // クリックされたタブに.activeを付与
  $(this).addClass("active");
  // クリックされたタブにhref属性を取得
  $($(this).attr("href")).show();
  //↑　.attr() html要素の属性を取得or設定できる
  event.preventDefault();
});