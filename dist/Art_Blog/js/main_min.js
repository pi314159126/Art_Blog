"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){function e(){}e.prototype={init:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?this.mobileFnAll():(this.pcFnAll(),this.articleReward(),this.stringEffect()),this.navReform(),this.navPianoEffect(),this.isNotResources(),this.websiteRunningTime(),this.imagesEnlarge(),this.pageDetailsFabulous(),this.paperPlane(),this.playVideo(),this.customerService(),this.friendshipLink(),this.smiliesEmoticon(),this.randomArticles(),this.commentStyle()},navReform:function(){for(var e=$(".header .music-nav").children("li"),t=0;t<e.length;t++){var i=e.eq(t).children("a").text();e.eq(t).children("a").text(""),e.eq(t).children("a").append("<span>"+i+"</span>"),e.eq(t).children("a").append("<span>"+i+"</span>"),e.eq(t).hasClass("current-menu-item")&&e.eq(t).addClass("action")}e.append("<audio src='' autoplay='autoplay'></audio><p></p>"),$("#nav_list .sub-menu").siblings("a").attr("href","javascript:void(0);"),$("#nav_list .sub-menu").siblings("a").find("span").append("<i class='iconfont icon-jiantou'></i>"),$(".os-herder .sub-menu").siblings("a").append("<i class='iconfont iconfont_click icon-xiajiantou'></i>"),$(".header .sub-menu").addClass("nav-min"),$(".os-herder .sub-menu").addClass("slide_slect");$(".header .music-nav").append("<li><a class='backstage' href='/wp-admin/'><span>后台管理</span><span>后台管理</span></a><p></p><audio src='' autoplay='autoplay'></audio></li><li class='js_piano_nav_icon mod-header_music-icon'><audio src='' autoplay='autoplay'></audio><i></i><i></i><i></i><i></i><i></i></li>")},navPianoEffect:function(){var e=this,t=null,i=null,n=null,o=null,a=$(".nav ul.music-nav > li:not(.mod-header_music-icon)");$(".header").hover(function(){$(this).css("z-index","12")},function(){clearTimeout(t),i||$(".site-search").is(":visible")||(t=setTimeout(function(){$(".header").css("z-index","10")},500))});var s=[];a.mouseenter(function(){clearTimeout(i),$(this).addClass("active"),s.push($(this).index()),$(".header").css("z-index","12"),n=$(this).index(),o=a.eq(n).find("audio"),1==localStorage.getItem("off_y")?($(this).addClass("active"),o.get(0).src="/wp-content/themes/Art_Blog/music/nav_"+parseInt(n+1)+".mp3"):o.get(0).src=""}),a.mouseleave(function(){0<s.length&&setTimeout(function(){a.eq(s[0]).removeClass("active"),s.shift()},250),$(".site-search").is(":visible")||(i=setTimeout(function(){$(".header").css("z-index","10")},1e3))}),$(document).keydown(function(e){if(1==localStorage.getItem("off_y")){var t=[65,83,68,70,71,72,74,75,76].indexOf(e.keyCode);0<=t&&(i=t+1)<=a.length&&(a.eq(i-1).find("audio").get(0).src="/wp-content/themes/Art_Blog/music/nav_"+i+".mp3",a.eq(i-1).addClass("active"),a.eq(i-1).addClass("keyboard_color"))}var i}),$(document).keyup(function(){setTimeout(function(){a.removeClass("active"),a.removeClass("keyboard_color")},150)}),$(".mod-header_music-icon").click(function(){1!=localStorage.getItem("off_y")?($(this).addClass("hover"),$(".nav ul.music-nav > li").addClass("on"),$(".nav ul.music-nav > li").removeClass("off"),localStorage.setItem("off_y",1),layer.msg("全站音频已开启~",{time:2e3},function(){layer.msg("无需鼠标，导航音乐键盘A-K也可以体验哦~~")}),e.readingAloud("全站音频已开启~")):($(this).removeClass("hover"),$(".nav ul.music-nav li").addClass("off"),$(".nav ul.music-nav li").removeClass("on"),localStorage.setItem("off_y",0),layer.msg("全站音频已关闭，期待您的下次体验！",{time:4e3}),e.readingAloud("全站音频已关闭，期待您的下次体验！"))}),$(".js_piano_nav_icon").mouseenter(function(){1!=localStorage.getItem("off_y")?layer.tips("开启全站音频",".js_piano_nav_icon",{tips:3,tipsMore:!1,time:2e3}):layer.tips("关闭全站音频",".js_piano_nav_icon",{tips:3,tipsMore:!1,time:2e3})});var r=!0;$(".navto-search a").click(function(){r=r?($(".header").css("z-index","11"),!1):($(".header").css("z-index","10"),!0),$(".site-search.active.pc").toggle(),$(".site-search.active.pc").find("input").focus()}),$(".xis,.navto-search a").click(function(){$(this).find("i").toggleClass("icon-sousuo icon-guanbi3")}),$(".header").addClass("Top"),1!=localStorage.getItem("off_y")?localStorage.setItem("off_y",0):(localStorage.setItem("off_y",1),$(".nav ul.music-nav > li").addClass("on"),$(".mod-header_music-icon").addClass("hover"))},readingAloud:function(e){new Audio("https://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex="+e).play()},isNotResources:function(){0<$(".continar-left .article_not").length&&$("body").css({background:"#fff"})},websiteRunningTime:function(){setInterval(function(){var e=Math.round(new Date(Date.UTC(2016,10,16,0,0,0)).getTime()/1e3),t=function(e){if(!e)return 0;var t=new Array(0,0,0,0,0);return 31536e3<=e&&(t[0]=parseInt(e/31536e3),e%=31536e3),86400<=e&&(t[1]=parseInt(e/86400),e%=86400),3600<=e&&(t[2]=parseInt(e/3600),e%=3600),60<=e&&(t[3]=parseInt(e/60),e%=60),0<e&&(t[4]=e),t}(Math.round(((new Date).getTime()+288e5)/1e3)-e),i=t[0]+"年"+t[1]+"天"+t[2]+"时"+t[3]+"分"+t[4]+"秒";$("#htmer_time").html(i)},1e3)},imagesEnlarge:function(){var e=function(i,n){var o;return["webkit","moz","ms","o",""].forEach(function(e){if(!o){""===e&&(n=n.slice(0,1).toLowerCase()+n.slice(1));var t=_typeof(i[e+n]);t+""!="undefined"&&(o="function"===t?i[e+n]():i[e+n])}}),o};if("number"==typeof window.screenX)for(var t=document.querySelectorAll(".log-text img"),i=0;i<t.length;i++)t[i].addEventListener("click",function(){e(document,"FullScreen")||e(document,"IsFullScreen")?(e(document,"CancelFullScreen"),this.title=this.title.replace("退出","")):e(this,"RequestFullScreen")&&(this.title=this.title.replace("点击","点击退出"))});else layer.alert("亲，这都什么年代了，您还在用这么土的浏览器吗~~",{skin:"layui",title:"请更换浏览器",closeBtn:0,anim:4})},pageDetailsFabulous:function(){setTimeout(function(){$(".page-reward .page-reward-btn .tooltip-item font,.page-reward .page-reward-btn .tooltip-item a").toggleClass("s_show")},2e3),$.fn.postLike=function(){if($(this).hasClass("done"))return!1;$(this).addClass("done");var e=$(this).data("id"),t=$(this).data("action"),i=$(this).children(".count"),n={action:"bigfa_like",um_id:e,um_action:t};return $.post("/wp-admin/admin-ajax.php",n,function(e){$(i).html(e)}),!1},$(document).on("click",".favorite",function(){$(this).postLike()})},paperPlane:function(){$(".aircraft").click(function(){$(this).animate({bottom:"0",opacity:"1"},100,function(){setTimeout(function(){$("body,html").animate({scrollTop:0},1200),$(".aircraft").animate({top:"0",bottom:"auto",opacity:"0"},700,function(){setTimeout(function(){$(".aircraft").css({bottom:"50px",top:"auto",opacity:"1"})},500)})},300)})});var e=$(document).scrollTop();function t(){500<(e=$(document).scrollTop())?$(".aircraft").css({display:"block",opacity:"1"}):$(".aircraft").css({display:"none",opacity:"0"}),e<=0?($(".header").addClass("Top"),$(".header").removeClass("hover")):($(".header").removeClass("Top"),$(".header").addClass("hover"))}500<e&&$(".aircraft").css({display:"block",opacity:"1"}),t(),$(document).scroll(function(){t()})},customerService:function(){$("#wuyousujian-kefuDv").hover(function(){$("#wuyousujian-kefuDv").stop().animate({right:"-100px"},500)},function(){$("#wuyousujian-kefuDv").stop().animate({right:"-196px"},500)})},articleReward:function(){$(".js_reward").click(function(){layer.open({content:$("#reward-popup"),type:1,title:!1,skin:"layui-layer-demo",area:["500px","360px"],shadeClose:!0,success:function(e,t){e[0].childNodes[1].childNodes[0].removeAttribute("href"),e[0].childNodes[1].classList.add("cursorStyle"),e[0].childNodes[1].childNodes[0].classList.remove("layui-layer-close2"),e[0].childNodes[1].childNodes[0].classList.add("layui-layer-close1")}})})},stringEffect:function(){String.prototype.gblen=function(){for(var e=0,t=0;t<this.length;t++)127<this.charCodeAt(t)||94==this.charCodeAt(t)?e+=2:e++;return e},$.extend($.easing,{easeOutElastic:function(e,t,i,n,o){var a=1.70158,s=0,r=n;if(0==t)return i;if(1==(t/=o))return i+n;if(s||(s=.3*o),r<Math.abs(n)){r=n;a=s/4}else a=s/(2*Math.PI)*Math.asin(n/r);return r*Math.pow(2,-10*t)*Math.sin((t*o-a)*(2*Math.PI)/s)+n+i}}),$.fn.qin=function(e){var t=$.extend({},{offset:22,duration:500,recline:.1},e);return this.each(function(){var n,c,l,o,e=$(this);!function(e){var t="",i=0;if(e.text().trim().gblen()<38)t=e.text().trim();else for(var n=0;n<38&&t.gblen()<38;n++)t=e.text().trim().slice(0,i)+"...",i++;for(var o="",a=0,s=t.length;a<s;a++)o+="<span>"+t.substr(a,1)+"</span>";e.html(o);var r=[];e.children("span").each(function(){var e=$(this),t=e.position();r.push(t),e.css({top:"0px",left:t.left+"px"}),setTimeout(function(){e.css("position","absolute")},0)}),e.data("stringPosition",r)}(e),c=t,l=(n=e).data("stringPosition"),o=0,n.mouseenter(function(e){var t=n.offset();e.pageX,t.left,o=e.pageY-t.top}),n.mousemove(function(e){var t=n.offset(),a=e.pageX-t.left,i=e.pageY-t.top,s=i-o;if(!(Math.abs(s)>c.offset)){var r=0<s;n.children("span").each(function(e){var t=$(this),i=l[e],n=Math.abs(a-i.left)*c.recline;n*=r?1:-1;var o=i.top+s-n;r&&o<i.top?o=i.top:!r&&o>i.top&&(o=i.top),t.css({top:o+"px"})})}}),n.mouseleave(function(){n.children("span").each(function(e){$(this).stop(!0,!1).animate({top:"0px"},{duration:c.duration,easing:"easeOutElastic"})})})})},$(".mouseover ul li a").qin({offset:20,duration:500,recline:.1})},friendshipLink:function(){!function(e){for(var t=0;t<e.length;t++)e.eq(t).addClass("color-"+(parseInt(8*Math.random(),10)+1))}($(".friendship .daily-list ul li"))},smiliesEmoticon:function(){$("#commentform .iconfont").click(function(){$("#smilies_modal").toggle(),$("#smilies_modal img").each(function(){$(this).attr("src",$(this).attr("data-src"))})})},playVideo:function(){if($("#my-video").length){videojs("my-video");document.getElementById("my-video_html5_api").onerror=function(){layer.alert("通常是由于视频地址错误或未添加视频封面图引起，请检查！",{skin:"layui",title:"视频初始化失败",closeBtn:0,anim:4})}}},randomArticles:function(){for(var e=0;e<=$(".mouseover ul li").length;e++)$(".mouseover ul li").eq(e).find("em").html(e+1)},commentStyle:function(){setTimeout(function(){$("#reply-title a").is(":hidden")&&$("#reply-title").hide()})},mobileFnAll:function(){setTimeout(function(){$("img.Lazy_load").lazyload({container:$("body > .continar"),threshold:100,effects:"show"})},300);var e=!0;$(".btn_menu,.cover").on("touchmove",function(e){e.preventDefault()}),$(".btn_menu,.cover").on("touchstart",function(){$(".os-herder").css("transition","all 0.25s"),$(".cover").toggle(),e?($(".os-herder").css({transform:"translateX(0)"}),$(".continar,.os-headertop").css({transform:"translateX(3.2rem)"}),$(".weipxiu_nav").attr("href","javascript:void(0);")):($(".os-herder").css({transform:"translateX(-3.21rem)"}),$(".continar,.os-headertop").css({transform:"translateX(0)"}),setTimeout(function(){$(".weipxiu_nav").attr("href","/")},800));e=!e,$(".site-search").is(":visible")&&($(".os-headertop .site-search").slideToggle(100),$(".xis").find("i").toggleClass("icon-sousuo icon-guanbi3"))}),$(".os-herder,.site-search").on("touchmove",function(e){e.preventDefault()}),document.addEventListener("touchstart",function(e){1<e.touches.length&&e.preventDefault()});var i=0;document.addEventListener("touchend",function(e){var t=(new Date).getTime();t-i<=300&&e.preventDefault(),i=t},!1),$(".xis").on("touchstart",function(){$(".os-headertop .site-search").slideToggle(100),$(this).find("i").toggleClass("fa-search fa-remove")}),$("ul.slide-left li.menu-item-type-custom a").on("touchstart",function(e){$(this).parents("li").siblings("li").find(".slide_slect").slideUp(),$(this).parents("li").siblings("li").find(".iconfont_click").removeClass("icon-shangjiantou").addClass("icon-xiajiantou"),$(this).siblings(".slide_slect").stop().slideToggle(),$(this).parent().find(".iconfont_click").toggleClass("icon-xiajiantou icon-shangjiantou"),e.stopPropagation()})},pcFnAll:function(){$(".login_alert_close").click(function(){$(".login_alert").slideUp(),localStorage.setItem("off_login",1)}),0<$(".continar-left .article_not").length&&$("body > .continar").css({height:"calc(100% - 280px)"}),$("img.Lazy_load").lazyload({effect:"show"}),document.oncontextmenu=function(e){return layer.msg("别看啦，宝宝好羞涩*^_^*"),!1}}},$(function(){(new e).init()})}(),$(function(){var i=window.location.protocol+"//"+window.location.host+"/",d="ajax_centent",t="searchform",n=new String("/page/").split(", "),s="error",f=!1,h=!1,m=!1,r=!1,o=null;jQuery.browser;function p(e){jQuery(e+"a").click(function(e){if(0<=this.href.indexOf(i)&&1==c(this.href)){e.preventDefault(),this.blur();this.title||this.name,this.rel;try{t=this,jQuery("ul.nav li").each(function(){jQuery(this).removeClass("current-menu-item")}),jQuery(t).parents("li").addClass("current-menu-item")}catch(e){}a(this.href)}var t}),jQuery("."+t).each(function(e){jQuery(this).attr("action")&&(o=jQuery(this).attr("action"),jQuery(this).submit(function(){var e;return e=jQuery(this).serialize(),m||a(o,0,e),!1}))}),jQuery("."+t).attr("action")}function a(e,t,l){if(!m){r=m=!0;var i=e.replace("http://","").replace("https://",""),n=i.indexOf("/"),o=e.indexOf(i),u=e.substring(o+n);if(1!=t&&"function"==typeof window.history.pushState){var a={foo:1e3+1001*Math.random()};history.pushState(a,"ajax page loaded...",u)}jQuery("#"+d),jQuery("#loading").show(),jQuery("#"+d).fadeTo("slow",1,function(){jQuery("#"+d).fadeIn("slow",function(){jQuery.ajax({type:"GET",url:e,data:l,cache:!1,dataType:"html",success:function(e){m=!1;var t=e.split("<title>"),i=e.split("</title>");if(jQuery("#loading").hide(),jQuery(".continar").css({scrollTop:0}),jQuery("html,body,.continar").animate({scrollTop:0},600),2==t.length||2==i.length){var n=(e=e.split("<title>")[1]).split("</title>")[0];jQuery(document).attr("title",jQuery("<div/>").html(n).text())}1==h&&"undefined"!=typeof _gaq&&(l=void 0===l?"":"?"+l,_gaq.push(["_trackPageview",u+l])),e=(e=e.split('id="'+d+'"')[1]).substring(e.indexOf(">")+1);for(var o=1,a="";0<o;){for(var s=e.split("</div>")[0],r=0,c=s.indexOf("<div");-1!=c;)r++,c=s.indexOf("<div",c+1);o=o+r-1,a=a+e.split("</div>")[0]+"</div>",e=e.substring(e.indexOf("</div>")+6)}document.getElementById(d).innerHTML=a,jQuery("#"+d).css("position","absolute"),jQuery("#"+d).css("left","20000px"),jQuery("#"+d).show(),p("#"+d+" "),1==f&&jQuery(document).trigger("ready"),jQuery("#"+d).hide(),jQuery("#"+d).css("position",""),jQuery("#"+d).css("left",""),jQuery("#"+d).fadeTo("slow",1,function(){}),$("img.Lazy_load").lazyload({effect:"show"}),$("img.Lazy_load").lazyload({container:$("body > .continar")})},error:function(e,t,i){m=!1,document.title="Error loading requested page!",document.getElementById(d).innerHTML=s}})})})}}function c(e){for(var t in n)return 0<=e.indexOf(n[t])}jQuery(document).ready(function(){p("")}),window.onpopstate=function(e){!0===r&&1==c(document.location.toString())&&a(document.location.toString(),1)}});