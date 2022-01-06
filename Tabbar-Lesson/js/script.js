//属性値(id)が特定の値(tab1)に等しくない要素だけを取得し非表示にする
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function (event) {
  //"tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  $("#tab-contents .tab").hide();
  //クラス属性が設定されているHTML要素から、クラス(active)を削除する
  $("#tab-menu .active").removeClass("active");
  //タブがクリックされたときそのHTML要素にクラス属性(active)を追加できるメソッド
  $(this).addClass("active");
  //HTML要素の属性("href")を取得したり設定できるメソッド。.show()は要素を表示するメソッド
  $($(this).attr("href")).show();
  event.preventDefault();
});