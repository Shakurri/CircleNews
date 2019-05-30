
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
                $("html,body").animate({scrollTop:$('.imgZZZ').offset().top},22000);
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
    $(window).on("load scroll resize",function(){
        $(".lastF").each(function(){
            var imgPos=$(this).offset().top;
            var scroll=$(window).scrollTop();
            var windowHeight=$(window).height();
            if((scroll>imgPos-windowHeight+windowHeight/5)&&(already==0)){
                already++;
                $("html,body").animate({scrollTop:$('.darkDL').offset().top},4000);
                    $('.bousou3').t({
                    delay:0, //アニメーションの遅延
                    speed:0.1, //アニメーションの速度
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
                        $('.lastMes1').t({
                    delay:0, //アニメーションの遅延
                    speed:50, //アニメーションの速度
                    speed_vary:false, //リアルなタイピングのスピード
                    beep:true, //タイピング音の有無
                    mistype:true, //ミスタイプの有無
                    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                    caret:false, //カーソル
                    blink:false, //カーソルの点滅の有無
                    blink_perm:false, //カーソルの点滅の継続
                    repeat:0, //繰り返し
                    tag:'span', //要素を内包するタグ
                    pause_on_click:false, //クリックで一時停止
                    });
                    },4000)
                    setTimeout(function(){
                        $('.lastMes1').fadeOut(200);
                        $('.lastMes2').t({
                    delay:0, //アニメーションの遅延
                    speed:50, //アニメーションの速度
                    speed_vary:false, //リアルなタイピングのスピード
                    beep:true, //タイピング音の有無
                    mistype:true, //ミスタイプの有無
                    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                    caret:false, //カーソル
                    blink:false, //カーソルの点滅の有無
                    blink_perm:false, //カーソルの点滅の継続
                    repeat:0, //繰り返し
                    tag:'span', //要素を内包するタグ
                    pause_on_click:false, //クリックで一時停止
                    });
                    },7000)
                    setTimeout(function(){
                        $('.lastMes2').fadeOut(200);
                        $('.lastMes3').t({
                    delay:0, //アニメーションの遅延
                    speed:50, //アニメーションの速度
                    speed_vary:false, //リアルなタイピングのスピード
                    beep:true, //タイピング音の有無
                    mistype:true, //ミスタイプの有無
                    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                    caret:false, //カーソル
                    blink:false, //カーソルの点滅の有無
                    blink_perm:false, //カーソルの点滅の継続
                    repeat:0, //繰り返し
                    tag:'span', //要素を内包するタグ
                    pause_on_click:false, //クリックで一時停止
                    });
                    },11000)
                    setTimeout(function(){
                        $('.lastMes3').fadeOut(200);
                        $('.lastMes4').t({
                    delay:0, //アニメーションの遅延
                    speed:50, //アニメーションの速度
                    speed_vary:false, //リアルなタイピングのスピード
                    beep:true, //タイピング音の有無
                    mistype:true, //ミスタイプの有無
                    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                    caret:false, //カーソル
                    blink:false, //カーソルの点滅の有無
                    blink_perm:false, //カーソルの点滅の継続
                    repeat:0, //繰り返し
                    tag:'span', //要素を内包するタグ
                    pause_on_click:false, //クリックで一時停止
                    });
                    },15000)
                    setTimeout(function(){
                        $('.lastMes4').fadeOut(200);
                        $('.lastMes5').t({
                    delay:0, //アニメーションの遅延
                    speed:50, //アニメーションの速度
                    speed_vary:false, //リアルなタイピングのスピード
                    beep:true, //タイピング音の有無
                    mistype:true, //ミスタイプの有無
                    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                    caret:false, //カーソル
                    blink:false, //カーソルの点滅の有無
                    blink_perm:false, //カーソルの点滅の継続
                    repeat:0, //繰り返し
                    tag:'span', //要素を内包するタグ
                    pause_on_click:false, //クリックで一時停止
                    });
                    },19000)
                    setTimeout(function(){
                        $('.lastMes5').fadeOut(200);
                        $('.lastMes6').t({
                    delay:0, //アニメーションの遅延
                    speed:50, //アニメーションの速度
                    speed_vary:false, //リアルなタイピングのスピード
                    beep:true, //タイピング音の有無
                    mistype:true, //ミスタイプの有無
                    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                    caret:false, //カーソル
                    blink:false, //カーソルの点滅の有無
                    blink_perm:false, //カーソルの点滅の継続
                    repeat:0, //繰り返し
                    tag:'span', //要素を内包するタグ
                    pause_on_click:false, //クリックで一時停止
                    });
                    },25000)
                    setTimeout(function(){
                        $('.lastMes6').fadeOut(200);
                        $('.lastMes7').t({
                    delay:0, //アニメーションの遅延
                    speed:50, //アニメーションの速度
                    speed_vary:false, //リアルなタイピングのスピード
                    beep:true, //タイピング音の有無
                    mistype:true, //ミスタイプの有無
                    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                    caret:false, //カーソル
                    blink:false, //カーソルの点滅の有無
                    blink_perm:false, //カーソルの点滅の継続
                    repeat:0, //繰り返し
                    tag:'span', //要素を内包するタグ
                    pause_on_click:false, //クリックで一時停止
                    });
                    },29000)
                    setTimeout(function(){
                        $("html,body").animate({scrollTop:$('.imgZZZ').offset().top},4000);
                    },31000)
                    setTimeout(function(){
                        $(".point").animate({right:"50vw",opacity:"1.0"},2000);
                        $('.lastMes8').t({
                    delay:0, //アニメーションの遅延
                    speed:200, //アニメーションの速度
                    speed_vary:false, //リアルなタイピングのスピード
                    beep:true, //タイピング音の有無
                    mistype:true, //ミスタイプの有無
                    locale:'en', //キーボードレイアウト。'en' (english) もしくは 'de' (german)
                    caret:false, //カーソル
                    blink:false, //カーソルの点滅の有無
                    blink_perm:false, //カーソルの点滅の継続
                    repeat:0, //繰り返し
                    tag:'span', //要素を内包するタグ
                    pause_on_click:false, //クリックで一時停止
                    });
                    },36000)
                    setTimeout(function(){
                        $("html,body").animate({scrollTop:$('.headline').offset().top},4000);
                        $(".resetL").fadeTo(4000,0.9);
                        $(".reset").fadeIn(5010);
                        setTimeout(function(){
                        window.location.href="CircleNews100.html";
                        },5000)
                        
                        
                    },41000)
            };
        });
    });
});















  $(function(){
    $('.resetB').on('click',function(){
        $("html,body").animate({scrollTop:$('.headline').offset().top},5000);
        $(".reset").fadeIn(5010);
        $(".article").addClass("noise");
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
  $(function(){
    $('.resetB2').on('click',function(){
        $("html,body").animate({scrollTop:$('.headline').offset().top},5000);
        $(".reset").fadeIn(5010);
        $(".article").addClass("noise");
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
            window.location.href="CircleNews3.html";
           
        },5000)
    });
});
  $(function(){
    $('.resetB3').on('click',function(){
        $("html,body").animate({scrollTop:$('.headline').offset().top},5000);
        $(".reset").fadeIn(5010);
        $(".article").addClass("noise");
        setTimeout(function(){
            window.location.href="CircleNews100.html";
           
        },5000)
    });
});