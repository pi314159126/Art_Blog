"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var e=$("#m_search"),m=$("#header"),p=$("#aircraft"),n=$("#os-herder"),t=$("#nav_list > li"),g=$("#continar-right"),v=$(document).scrollTop(),y=$("#continar-left"),i=$("#piano ul li"),r=$(".mod-header_music-icon"),o=$(".os-headertop .site-search");function s(){}s.prototype={init:function(){window.screen.width<1200?(this.mobileFnAll(),this.mobileLabelSlideTab()):(this.pcFnAll(),this.articleReward(),this.stringEffect(),this.pcLabelSlideTab()),this.crumbsRestructure(),this.loadBar(),this.informationLazy_load(),this.navReform(),this.navPianoEffect(),this.isNotResources(),this.websiteRunningTime(),this.imagesEnlarge(),this.pageDetailsFabulous(),this.paperPlane(),this.customerService(),this.friendshipLink(),this.smiliesEmoticon(),this.randomArticles(),this.commentStyle()},inintMusicNav:function(){1!=localStorage.getItem("off_y")?r.removeClass("hover"):r.addClass("hover")},mobileLabelSlideTab:function(){var i,e,n,o,s,a,r;i=document.querySelector("#tagCollection"),e=function(t){$(".page_switch span").eq(1).addClass("active").siblings("span").removeClass("active"),$("#tagCollection").css({transform:"translateX(-".concat($("#tagCollection").outerWidth(!0)/2,"px)")})},n=function(t){$(".page_switch span").eq(0).addClass("active").siblings("span").removeClass("active"),$("#tagCollection").css({transform:"translateX(0)"})},i&&(o=!1,r=a=s=0,i.addEventListener("touchstart",function(t){s=t.touches[0].pageX,r="none"==$(i).css("transform")?0:$(i).css("transform").split(/[()]/)[1].split(",")[4]}),i.addEventListener("touchmove",function(t){o=!0;var e=t.touches[0].pageX;a=e-s,$(i).css({transform:"translateX(".concat(parseInt(r)+a,"px)")}),25<parseInt(a)&&t.preventDefault()},{passive:!1}),i.addEventListener("touchend",function(t){o&&15<=Math.abs(a)?0<a?n&&n.call(this,t):e&&e.call(this,t):$(i).css({transform:"translateX(".concat(parseInt(r),"px)")}),o=!1,a=s=0}))},pcLabelSlideTab:function(){$(".page_switch span").mousemove(function(){var t=$(this).index();$(this).addClass("active").siblings("span").removeClass("active"),$("#tagCollection").css({transform:"translateX(".concat(0==t?0:-340,"px)")})})},crumbsRestructure:function(){var t=$(".mod-breadcrumb").html()?$(".mod-breadcrumb").html().trim():"";$(".mod-breadcrumb").html(">"==t.charAt(t.length-1)?t.slice(0,-11):t)},loadBar:function(){window.onload=function(){$("header .speed_bar").css({animation:"speed_bar_animation_complete .5s ease-out","animation-fill-mode":"forwards"})}},elementInView:function(t){var t=t.getBoundingClientRect(),e=t.top<window.innerHeight&&0<t.bottom,t=t.left<window.innerWidth&&0<t.right;return e&&t},informationLazy_load:function(){var i=this;function t(){for(var t=document.querySelectorAll("#continar-left .article_list article .Lazy_load"),e=0;e<t.length;e++)i.elementInView(t[e])&&t[e].getAttribute("data-original")&&(t[e].setAttribute("src",t[e].getAttribute("data-original")),t[e].removeAttribute("data-original"))}t(),$(document).scroll(function(){t()})},navReform:function(){for(var t=$("#header .music-nav").children("li"),e=0;e<t.length;e++){var i=t.eq(e).children("a").html();t.eq(e).children("a").text("").append("<span>"+i+"</span><span>"+i+"</span>"),t.eq(e).hasClass("current-menu-item")&&t.eq(e).addClass("action"),(0<t.eq(e).find("i").length||0<t.eq(e).find("ul").length)&&t.eq(e).children("a").addClass("icon_show"),t.eq(e).append("<audio src='/wp-content/themes/Art_Blog/music/nav_".concat(e+1,".mp3' preload='meta'></audio>"))}$("#nav_list .sub-menu").siblings("a").attr("href","javascript:void(0);"),$("#nav_list .sub-menu").siblings("a").find("span").append("<i class='iconfont icon-jiantou menu_arrow'></i>"),$("#os-herder .sub-menu").siblings("a").append("<i class='iconfont iconfont_click icon-xiajiantou'></i>"),$("#header .sub-menu").addClass("nav-min"),$("#os-herder .sub-menu").addClass("slide_slect");var n="<li id='backstage' style='display:none'><a href='/wp-admin/' target='_blank'><span>后台管理</span><span>后台管理</span></a>"+"<audio src='/wp-content/themes/Art_Blog/music/nav_".concat(t.length+1,".mp3' preload='meta'></audio>")+"</li><li class='js_piano_nav_icon mod-header_music-icon'><audio src='' preload='meta'></audio><i></i><i></i><i></i><i></i><i></i></li>";$("#header .music-nav").append(n)},navPianoEffect:function(){var e=this,t=null,i=null,n=$(".nav ul.music-nav > li:not(.mod-header_music-icon)"),o=(m.hover(function(){$(this).css("z-index","12")},function(){t||$(".site-search").is(":visible")?m.css("z-index","12"):m.css("z-index","10")}),[]);n.mouseenter(function(){clearTimeout(t),$(this).addClass("active"),o.push({index:$(this).index(),element:n.eq(i).find("audio")}),m.css("z-index","12"),i=$(this).index(),1==localStorage.getItem("off_y")&&(o[o.length-1].element.get(0).load(),o[o.length-1].element.get(0).play())}),n.mouseleave(function(){0<o.length&&setTimeout(function(){n.eq(o[0].index).removeClass("active"),o.shift()},250),t=setTimeout(function(){$(".site-search").is(":visible")||m.css("z-index","10")},1e3)});var s=[65,83,68,70,71,72,74,75,76],a=($(document).keydown(function(t){1==localStorage.getItem("off_y")&&0<=(t=s.indexOf(t.keyCode))&&(t=t+1)<=n.length&&(n.eq(t-1).addClass("active keyboard_color"),n.eq(t-1).find("audio").get(0).play())}),$(document).keyup(function(t){var e=s.indexOf(t.keyCode);0<=e&&(setTimeout(function(){n.removeClass("active keyboard_color")},600),setTimeout(function(){n.eq(e).find("audio").get(0).load()},450))}),(r=$(".mod-header_music-icon")).click(function(t){1!=localStorage.getItem("off_y")?(r.addClass("hover"),localStorage.setItem("off_y",1),layer.msg("菜单音乐已开启~",{time:2e3},function(){layer.msg("无需鼠标，导航音乐键盘A-K也可以体验哦~~")})):(r.removeClass("hover"),localStorage.setItem("off_y",0),layer.msg("菜单音乐已关闭，期待您的下次体验！",{time:4e3})),t.stopPropagation()}),$(".js_piano_nav_icon").mouseenter(function(){1!=localStorage.getItem("off_y")?layer.tips("开启菜单音乐",".js_piano_nav_icon",{tips:3,tipsMore:!1,time:2e3}):layer.tips("关闭菜单音乐",".js_piano_nav_icon",{tips:3,tipsMore:!1,time:2e3})}),!0);$(".navto-search a").click(function(){a?m.css("z-index","11"):m.css("z-index","10"),a=!a,$(".site-search.active.pc").toggle(),$(".site-search.active.pc").find("input").focus(),$(".site-search.active.pc").is(":visible")?($(this).find("i").addClass("icon-guanbi"),$(this).find("i").removeClass("icon-sousuo")):($(this).find("i").addClass("icon-sousuo"),$(this).find("i").removeClass("icon-guanbi"))}),m.addClass("Top"),e.inintMusicNav(),window.onstorage=function(t){e.inintMusicNav()}},isNotResources:function(){0<$("#continar-left .article_not").length&&$("body").css({background:"#fff"})},websiteRunningTime:function(){setInterval(function(){var t=Math.round(new Date(Date.UTC(2016,10,16,0,0,0)).getTime()/1e3),t=(t=function(t){if(!t)return 0;var e=new Array(0,0,0,0,0);return 31536e3<=t&&(e[0]=parseInt(t/31536e3),t%=31536e3),86400<=t&&(e[1]=parseInt(t/86400),t%=86400),3600<=t&&(e[2]=parseInt(t/3600),t%=3600),60<=t&&(e[3]=parseInt(t/60),t%=60),0<t&&(e[4]=t),e}(Math.round(((new Date).getTime()+288e5)/1e3)-t))[0]+"年"+t[1]+"天"+t[2]+"时"+t[3]+"分"+t[4]+"秒";$("#htmer_time").html(t)},1e3)},imagesEnlarge:function(){function t(i,n){var o;return["webkit","moz","ms","o",""].forEach(function(t){var e;o||(""===t&&(n=n.slice(0,1).toLowerCase()+n.slice(1)),(e=_typeof(i[t+n]))+""!="undefined"&&(o="function"===e?i[t+n]():i[t+n]))}),o}if("number"==typeof window.screenX)for(var e=document.querySelectorAll(".log-text img"),i=0;i<e.length;i++)e[i].addEventListener("click",function(){t(document,"FullScreen")||t(document,"IsFullScreen")?(t(document,"CancelFullScreen"),this.title=this.title.replace("退出","")):t(this,"RequestFullScreen")&&(this.title=this.title.replace("点击","点击退出"))});else layer.alert("亲，这都什么年代了，您还在用这么土的浏览器吗~~",{skin:"layui",title:"请更换浏览器",closeBtn:0,shade:.5,shadeClose:!0,anim:4})},pageDetailsFabulous:function(){setTimeout(function(){$(".page-reward .page-reward-btn .tooltip-item font,.page-reward .page-reward-btn .tooltip-item a").toggleClass("s_show")},2e3),$.fn.postLike=function(){var t,e,i;return $(this).hasClass("done")||($(this).addClass("done"),t=$(this).data("id"),e=$(this).data("action"),i=$(this).children(".count"),$.post("/wp-admin/admin-ajax.php",{action:"bigfa_like",um_id:t,um_action:e},function(t){$(i).html(t)})),!1},$(document).on("click",".favorite",function(){$(this).postLike()})},paperPlane:function(){var e,i,n,o,s,a,t,r,c,l,u,d,f=this;function h(){var t;500<(v=$(document).scrollTop())?p.css({display:"block",opacity:"1"}):p.css({display:"none",opacity:"0"}),v<=0?(m.addClass("Top"),m.removeClass("hover")):(m.removeClass("Top"),m.addClass("hover")),1200<$(window).width()&&g.length&&(f.elementInView($(".footer")[0])?f.elementInView($(".footer")[0])&&i<=n?(t=e-(n+(y.offset().top-$(document).scrollTop())),g.css({position:"fixed",bottom:t+"px",left:a+"px"})):g.css({position:"static",bottom:"auto",left:"auto"}):i-e<v-(2*o-10)&&s?g.css({position:"fixed",bottom:"10px",left:a+"px"}):g.css({position:"static",bottom:"auto",left:"auto"}))}p.click(function(){$(this).animate({bottom:"0",opacity:"1"},100,function(){setTimeout(function(){$("body,html").animate({scrollTop:0},1200),p.animate({top:"0",bottom:"auto",opacity:"0"},700,function(){setTimeout(function(){p.css({bottom:"60px",top:"auto",opacity:"1"})},500)})},300)})}),500<v&&p.css({display:"block",opacity:"1"}),$("#continar-left").length&&(a=s=o=n=i=e=0,h(),r=function(){e=$(window).height(),i=g.outerHeight(),n=y.outerHeight(!0),o=$("#continar-right > div:last-of-type").outerHeight(!0),s=i<=n,a=y.offset().left+y.outerWidth()+10},c=1e3,l=2e3,d=new Date,t=function(t){var e=new Date;clearTimeout(u),e-d<l?u=setTimeout(function(){r(t),d=e},c):(r(t),d=e)},$(document).scroll(function(){t(),h()}),window.onresize=function(){t(),h()})},customerService:function(){$(".communication").hover(function(){$(this).stop().animate({right:"0"},350)},function(){$(this).stop().animate({right:"-85px"},350)})},articleReward:function(){$(".js_reward").click(function(){layer.open({content:$("#reward-popup"),type:1,title:!1,skin:"layui-layer-demo",area:["500px","360px"],shadeClose:!0,success:function(t,e){t=t[0].childNodes[1];t.childNodes[0].removeAttribute("href"),t.classList.add("cursorStyle"),t.childNodes[0].classList.remove("layui-layer-close2"),t.childNodes[0].classList}})})},stringEffect:function(){String.prototype.gblen=function(){for(var t=0,e=0;e<this.length;e++)127<this.charCodeAt(e)||94==this.charCodeAt(e)?t+=2:t++;return t},$.extend($.easing,{easeOutElastic:function(t,e,i,n,o){var s=1.70158,a=0,r=n;return 0==e?i:1==(e/=o)?i+n:(a=a||.3*o,s=r<Math.abs(n)?(r=n,a/4):a/(2*Math.PI)*Math.asin(n/r),r*Math.pow(2,-10*e)*Math.sin((e*o-s)*(2*Math.PI)/a)+n+i)}}),$.fn.qin=function(t){var h=$.extend({},{offset:22,duration:500,recline:.1},t);return this.each(function(){var i,a,r,c,t=$(this),e=t,n="",o=0;if(e.text().trim().gblen()<41)n=e.text().trim();else for(var s=0;s<41&&n.gblen()<41;s++)n=e.text().trim().slice(0,o)+"...",o++;for(var l="",u=0,d=n.length;u<d;u++)l+="<span>"+n.substr(u,1)+"</span>";e.html(l);var f=[];e.children("span").each(function(){var t=$(this),e=t.position();f.push(e),t.css({top:"0px",left:e.left+"px"}),setTimeout(function(){t.css("position","absolute")},0)}),e.data("stringPosition",f),a=h,r=(i=t).data("stringPosition"),c=0,i.mouseenter(function(t){var e=i.offset();t.pageX,e.left,c=t.pageY-e.top}),i.mousemove(function(t){var n,e=i.offset(),o=t.pageX-e.left,s=t.pageY-e.top-c;Math.abs(s)>a.offset||(n=0<s,i.children("span").each(function(t){var e=$(this),t=r[t],i=Math.abs(o-t.left)*a.recline,i=t.top+s-(i*=n?1:-1);(n&&i<t.top||!n&&i>t.top)&&(i=t.top),e.css({top:i+"px"})}))}),i.mouseleave(function(){i.children("span").each(function(t){$(this).stop(!0,!1).animate({top:"0px"},{duration:a.duration,easing:"easeOutElastic"})})})})},i.find("a").qin({offset:20,duration:500,recline:.1})},friendshipLink:function(){for(var t=$(".friendship .daily-list ul li"),e=0;e<t.length;e++)t.eq(e).addClass("color-"+(parseInt(8*Math.random(),10)+1))},smiliesEmoticon:function(){$("#commentform .expression").click(function(){$("#smilies_modal").toggle(),$("#smilies_modal img").each(function(){$(this).attr("src",$(this).attr("data-src"))})})},randomArticles:function(){for(var t=0;t<=i.length;t++)i.eq(t).find("em").html(t+1)},commentStyle:function(){"none"!=$("#cancel-comment-reply-link").css("display")?$("#reply-title").show():$("#reply-title").hide()},mobileFnAll:function(){var t=!0;$(".btn_menu,.cover").on("touchmove",function(t){t.preventDefault()}),$(".btn_menu,.cover").on("touchstart",function(){n.css("transition","all 0.25s"),$(".cover").toggle(),t?(n.css({transform:"translateX(0)"}),$(".continar,.os-headertop").css({transform:"translateX(3.2rem)"}),$(".weipxiu_nav").attr("href","javascript:void(0);")):(n.css({transform:"translateX(-3.21rem)"}),$(".continar,.os-headertop").css({transform:"translateX(0)"}),setTimeout(function(){$(".weipxiu_nav").attr("href","/")},800));t=!t,$(".site-search").is(":visible")&&(o.slideToggle(100),e.find("i").addClass("icon-sousuo"),e.find("i").removeClass("icon-guanbi"))}),$("#os-herder,.site-search").on("touchmove",function(t){t.preventDefault()}),document.addEventListener("touchstart",function(t){1<t.touches.length&&t.preventDefault()});var i=0;document.addEventListener("touchend",function(t){var e=(new Date).getTime();e-i<=300&&t.preventDefault(),i=e},!1),e.on("touchstart",function(){o.toggle(),o.is(":visible")?($(this).find("i").addClass("icon-guanbi"),$(this).find("i").removeClass("icon-sousuo")):($(this).find("i").addClass("icon-sousuo"),$(this).find("i").removeClass("icon-guanbi"))}),n.on("touchstart","ul.slide-left li:has(.slide_slect) > a",function(t){$(this).parent().siblings("li").find(".slide_slect").slideUp(),$(this).parent().siblings("li").find(".iconfont_click").removeClass("icon-shangjiantou").addClass("icon-xiajiantou"),$(this).siblings(".slide_slect").stop().slideToggle(),$(this).parent().find(".iconfont_click").toggleClass("icon-xiajiantou icon-shangjiantou"),t.stopPropagation()})},pcFnAll:function(){$(".login_alert_close").click(function(){$(".login_alert").slideUp()});t.find(".sub-menu").each(function(t){$(this).find("li").each(function(t){$(this).css("transition-delay",45*t+"ms")})}),t.hover(function(){var e=$(this);$(this).find(".sub-menu li").each(function(t){$(this).css("transition-delay",45*e.find(".sub-menu li").length-45*t+"ms")})},function(){$(this).find(".sub-menu li").each(function(t){$(this).css("transition-delay",45*t+"ms")})}),0<$("#continar-left .article_not").length&&$("body > .continar").css({height:"calc(100% - 280px)"}),document.oncontextmenu=function(t){return layer.msg("别看啦，宝宝好羞涩*^_^*"),!1}}},$(function(){(new s).init()})}(),$(function(){var i=window.location.protocol+"//"+window.location.host+"/",u="continar-left",e="searchform",n=new String("/page/").split(", "),o="error",d=!1,f=!1,h=!1,s=!1,a=null;jQuery.browser;function m(t){jQuery(t+"a").click(function(t){if(0<=this.href.indexOf(i)&&1==c(this.href)){t.preventDefault(),this.blur();this.title||this.name,this.rel;try{e=this,jQuery("ul.nav li").each(function(){jQuery(this).removeClass("current-menu-item")}),jQuery(e).parents("li").addClass("current-menu-item")}catch(t){}r(this.href)}var e}),jQuery("."+e).each(function(t){jQuery(this).attr("action")&&(a=jQuery(this).attr("action"),jQuery(this).submit(function(){var t;return t=jQuery(this).serialize(),h||r(a,0,t),!1}))}),jQuery("."+e).attr("action")}function r(t,e,c){var i,l,n;h||(s=h=!0,i=(n=t.replace("http://","").replace("https://","")).indexOf("/"),n=t.indexOf(n),l=t.substring(n+i),1!=e&&"function"==typeof window.history.pushState&&(n={foo:1e3+1001*Math.random()},history.pushState(n,"ajax page loaded...",l)),jQuery("#loading").show(),jQuery("#"+u).fadeTo("slow",1,function(){jQuery("#"+u).fadeIn("slow",function(){jQuery.ajax({type:"GET",url:t,data:c,cache:!1,dataType:"html",success:function(t){h=!1;for(var e=t.split("<title>"),i=t.split("</title>"),n=(jQuery("#loading").hide(),jQuery(".continar").css({scrollTop:0}),jQuery("html,body,.continar").animate({scrollTop:0},600),2!=e.length&&2!=i.length||(e=(t=t.split("<title>")[1]).split("</title>")[0],jQuery(document).attr("title",jQuery("<div/>").html(e).text())),1==f&&"undefined"!=typeof _gaq&&(c=void 0===c?"":"?"+c,_gaq.push(["_trackPageview",l+c])),t=(t=t.split('id="'+u+'"')[1]).substring(t.indexOf(">")+1),1),o="";0<n;){for(var s=t.split("</div>")[0],a=0,r=s.indexOf("<div");-1!=r;)a++,r=s.indexOf("<div",r+1);n=n+a-1,o=o+t.split("</div>")[0]+"</div>",t=t.substring(t.indexOf("</div>")+6)}document.getElementById(u).innerHTML=o,jQuery("#"+u).css("position","absolute"),jQuery("#"+u).css("left","20000px"),jQuery("#"+u).show(),m("#"+u+" "),1==d&&jQuery(document).trigger("ready");try{jQuery(".mod-index__feature .img_list_6pic a").removeClass("word_display")}catch(t){}jQuery("#"+u).hide(),jQuery("#"+u).css("position",""),jQuery("#"+u).css("left",""),jQuery("#"+u).fadeTo("slow",1,function(){})},error:function(t,e,i){h=!1,document.title="Error loading requested page!",document.getElementById(u).innerHTML=o}})})}))}function c(t){for(var e in n)return 0<=t.indexOf(n[e])}jQuery("#"+u).length&&(jQuery(document).ready(function(){m("")}),window.onpopstate=function(t){!0===s&&1==c(document.location.toString())&&r(document.location.toString(),1)})});