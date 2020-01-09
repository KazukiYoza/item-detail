// slick-slider
$('.thumbnail').slick({
    infinite: true, //スライドのループ有効化
    arrows: true, //矢印表示
    fade: true, //フェードの有効化
    draggable: false, //ドラッグ操作の無効化
    adaptiveHeight: true,
    // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    // nextArrow: '<button class="slide-arrow next-arrow"></button>'
  });
  $('.thumbnail-thumb').slick({
    infinite: true, //スライドのループ有効化
    slidesToShow: 4, //表示するスライドの数
    focusOnSelect: true, //フォーカスの有効化
    arrows: false,
    asNavFor: '.thumbnail', //thumbnailクラスのナビゲーション
  });

// タブ切り替え
jQuery(function(){
    $('.tab').click(function(){
        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.panel').eq(index).addClass('is-show');
    });
});
