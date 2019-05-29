
var already=0;
function kakikae(){
  $('.kakikae').t({
    delay:0, //アニメーションの遅延
    speed:150, //アニメーションの速度
    speed_vary:false, //リアルなタイピングのスピード
    beep:false, //タイピング音の有無
    mistype:true, //ミスタイプの有無
    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
    caret:false, //カーソル
    blink:false, //カーソルの点滅の有無
    blink_perm:false, //カーソルの点滅の継続
    repeat:0, //繰り返し
    tag:'span', //要素を内包するタグ
    pause_on_click:false, //クリックで一時停止
    init:function(elm){}, //タイピング開始時のコールバック
    typing:function(elm,chr_or_elm,left,total){}, //タイピング毎のコールバック
    fin:function(elm){} //タイピング終了時のコールバック
});
};


  // $(function(){
  //   $(window).scroll(function(){
  //       $(".scrollF").each(function(){
  //           var imgPos=$(this).offset().top;
  //           var scroll=$(window).scrollTop();
  //           var windowHeight=$(window).height();
  //           if((scroll>imgPos-windowHeight+windowHeight/2)&&(already==0)){
  //               already++;
  //               $("body").css('overflow','hidden');
  //               $("html,body").animate({scrollTop:$('.title').offset().top},2000);
  //               $('.bousou').t({
  //               delay:7, //アニメーションの遅延
  //               speed:30, //アニメーションの速度
  //               speed_vary:false, //リアルなタイピングのスピード
  //               beep:false, //タイピング音の有無
  //               mistype:true, //ミスタイプの有無
  //               locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
  //               caret:true, //カーソル
  //               blink:true, //カーソルの点滅の有無
  //               blink_perm:false, //カーソルの点滅の継続
  //               repeat:0, //繰り返し
  //               tag:'span', //要素を内包するタグ
  //               pause_on_click:false, //クリックで一時停止
  //               init:function(elm){}, //タイピング開始時のコールバック
  //               typing:function(elm,chr_or_elm,left,total){}, //タイピング毎のコールバック
  //               fin:function(elm){} //タイピング終了時のコールバック
  //           });


  //               setTimeout(function(){
  //                   kakikae();
  //               },2400)
  //               setTimeout(function(){
  //                   $("body").css('overflow','auto');
  //               },3000)
  //               setTimeout(function(){
  //                   $('.shoukyo').fadeOut(1000);
  //                   $('.after').fadeIn(100);
  //               },1500)
  //           }
  //       });
  //   });
  // });

  $(function(){
    $(window).scroll(function(){
        $(".headline").each(function(){
            var imgPos=$(this).offset().top;
            var scroll=$(window).scrollTop();
            var windowHeight=$(window).height();
            if(scroll>=imgPos){
                $(".adBox").addClass('fixed');
            };
        });
    });
});
  $(function(){
    $(window).scroll(function(){
        $(".headline").each(function(){
            var imgPos=$(this).offset().top;
            var scroll=$(window).scrollTop();
            var windowHeight=$(window).height();
            if(scroll<imgPos){
                $(".adBox").removeClass('fixed');
            };
        });
    });
});
  $(function(){
    $(window).on("load scroll resize",function(){
        $(".scrollF").each(function(){
            var imgPos=$(this).offset().top;
            var scroll=$(window).scrollTop();
            var windowHeight=$(window).height();
            if((scroll>imgPos-windowHeight+windowHeight/2)&&(already==0)){
                already++;
                $("html,body").animate({scrollTop:$('.imgZZZ').offset().top},2000);
                $('.bousou1').t({
                delay:0, //アニメーションの遅延
                speed:25, //アニメーションの速度
                speed_vary:false, //リアルなタイピングのスピード
                beep:false, //タイピング音の有無
                mistype:true, //ミスタイプの有無
                locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                caret:false, //カーソル
                blink:false, //カーソルの点滅の有無
                blink_perm:false, //カーソルの点滅の継続
                repeat:0, //繰り返し
                tag:'span', //要素を内包するタグ
                pause_on_click:false, //クリックで一時停止
                init:function(elm){}, //タイピング開始時のコールバック
                typing:function(elm,chr_or_elm,left,total){}, //タイピング毎のコールバック
                fin:function(){
                    $('.bousou2').t({
                delay:0, //アニメーションの遅延
                speed:10, //アニメーションの速度
                speed_vary:false, //リアルなタイピングのスピード
                beep:false, //タイピング音の有無
                mistype:true, //ミスタイプの有無
                locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                caret:false, //カーソル
                blink:false, //カーソルの点滅の有無
                blink_perm:false, //カーソルの点滅の継続
                repeat:0, //繰り返し
                tag:'span', //要素を内包するタグ
                pause_on_click:false, //クリックで一時停止
                init:function(elm){}, //タイピング開始時のコールバック
                typing:function(elm,chr_or_elm,left,total){}, //タイピング毎のコールバック
                fin:function(){

                } //タイピング終了時のコールバック
            });
                } //タイピング終了時のコールバック
            });
            };
        });
    });
});

  $(function(){
    $('.resetB').on('click',function(){
        $("html,body").animate({scrollTop:$('.headline').offset().top},5000);
        $(".reset").fadeIn(5010);
        $('.bousou2').t({
                delay:0, //アニメーションの遅延
                speed:10, //アニメーションの速度
                speed_vary:false, //リアルなタイピングのスピード
                beep:false, //タイピング音の有無
                mistype:true, //ミスタイプの有無
                locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                caret:false, //カーソル
                blink:false, //カーソルの点滅の有無
                blink_perm:false, //カーソルの点滅の継続
                repeat:0, //繰り返し
                tag:'span', //要素を内包するタグ
                pause_on_click:false, //クリックで一時停止
                init:function(elm){}, //タイピング開始時のコールバック
                typing:function(elm,chr_or_elm,left,total){}, //タイピング毎のコールバック
                fin:function(){} //タイピング終了時のコールバック
            });
        setTimeout(function(){
            window.location.href="CircleNews2.html";
           
        },5000)
    });
});