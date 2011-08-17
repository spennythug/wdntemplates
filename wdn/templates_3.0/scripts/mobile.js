/**
 * This file is part of the UNL WDN templates.
 * @see http://wdn.unl.edu/
 * $Id$
 */
var _gaq=_gaq||[],WDN=function(){var c={};return{loadedJS:{},template_path:"",loadJS:function(a,b,d,e){if(a.match(/^\/?wdn\/templates_3\.0/)){if(a.charAt(0)=="/")a=a.substring(1);a=WDN.template_path+a}if(arguments.length>2&&d===false||!WDN.loadedJS[a])if(a in c)b&&c[a].push(b);else{c[a]=[];var f=document.createElement("script");f.setAttribute("src",a);f.setAttribute("type","text/javascript");document.getElementsByTagName("head").item(0).appendChild(f);b&&c[a].push(b);var g=function(){WDN.loadedJS[a]=
1;if(c[a]){for(var j=0;j<c[a].length;j++)c[a][j]();delete c[a]}};f.onreadystatechange=function(){if(f.readyState=="loaded"||f.readyState=="complete")g()};f.onload=g}else arguments.length>3&&e===false||!b||b()},loadCSS:function(a){if(a.match(/^\/?wdn\/templates_3\.0/)){if(a.charAt(0)=="/")a=a.substring(1);a=WDN.template_path+a}var b=document.createElement("link");b.href=a;b.rel="stylesheet";b.type="text/css";document.getElementsByTagName("head")[0].appendChild(b)},initializeTemplate:function(){WDN.loadCSS("wdn/templates_3.0/css/script.css");
WDN.loadJS("wdn/templates_3.0/scripts/xmlhttp.js");WDN.loadJS("wdn/templates_3.0/scripts/global_functions.js");WDN.loadJQuery(WDN.jQueryUsage)},loadJQuery:function(a){WDN.loadJS("wdn/templates_3.0/scripts/jquery.js",function(){if(!WDN.jQuery)WDN.jQuery=jQuery.noConflict(true);WDN.jQuery(document).ready(function(){a()})})},jQueryUsage:function(){WDN.initializePlugin("analytics");if(!WDN.jQuery("body").hasClass("mobile")){WDN.initializePlugin("mobile_detect");WDN.initializePlugin("navigation");WDN.initializePlugin("search");
WDN.initializePlugin("feedback");WDN.initializePlugin("socialmediashare");WDN.contentAdjustments();WDN.initializePlugin("tooltip");WDN.initializePlugin("toolbar");WDN.initializePlugin("tabs");WDN.initializePlugin("unlalert");WDN.browserAdjustments();WDN.screenAdjustments()}},log:function(a){"console"in window&&"log"in console&&console.log(a)},browserAdjustments:function(){if(WDN.jQuery.browser.msie&&WDN.jQuery.browser.version=="6.0"&&!navigator.userAgent.match(/MSIE 8.0/)){WDN.jQuery("body").prepend('<div id="wdn_upgrade_notice"></div>');
fetchURLInto("http://www.unl.edu/wdn/templates_3.0/includes/browserupgrade.html","wdn_upgrade_notice");WDN.jQuery("head link[rel=stylesheet]").each(function(){this.disabled=true});WDN.jQuery("body").removeAttr("class");WDN.jQuery("body").addClass("document");WDN.loadCSS("wdn/templates_3.0/css/content/columns.css")}if(navigator.userAgent.match(/applewebkit/i)&&!navigator.userAgent.match(/Version\/[34]/)||navigator.userAgent.match(/firefox/i)&&(navigator.userAgent.match(/firefox\/[12]/i)||navigator.userAgent.match(/firefox\/3.[01234]/i))||
navigator.userAgent.match(/msie/i)){WDN.jQuery(".zentable tbody tr:nth-child(odd)").addClass("rowOdd");WDN.jQuery(".zentable tbody tr:nth-child(even)").addClass("rowEven")}},screenAdjustments:function(){if(screen.width<=1024){WDN.jQuery("body").css({background:"#e0e0e0"});WDN.jQuery.browser.msie&&WDN.jQuery("#wdn_wrapper").css({margin:"0 0 0 5px"})}},contentAdjustments:function(){WDN.jQuery("#footer_floater").css("zoom",1);WDN.jQuery("#maincontent p.caption, #footer p.caption").each(function(){WDN.jQuery(this).height()>
20&&WDN.jQuery(this).css({border:"1px solid #DDD",marginleft:"0"});var a=WDN.jQuery(this).prev("img").width();a&&WDN.jQuery(this).width(a)});WDN.jQuery("#maincontent a img, #footer a img").each(function(){WDN.jQuery(this).parent("a").addClass("imagelink")})},initializePlugin:function(a,b){b||(b=function(){"initialize"in WDN[a]&&WDN[a].initialize()});WDN.loadJS("wdn/templates_3.0/scripts/"+a+".js",b)},setCookie:function(a,b,d,e,f){var g="";if(d){g=new Date;g.setTime(g.getTime()+d*1E3);g=";expires="+
g.toUTCString()}if(e==null)e="/";else if(e.charAt(0)!=="/")e=WDN.toAbs(e,window.location.pathname);if(f==null)f=".unl.edu";document.cookie=a+"="+b+g+";path="+e+";domain="+f},getCookie:function(a){a=a+"=";for(var b=document.cookie.split(";"),d=0;d<b.length;d++){for(var e=b[d];e.charAt(0)===" ";)e=e.substring(1,e.length);if(e.indexOf(a)===0)return e.substring(a.length,e.length)}return null},toAbs:function(a,b){if(typeof a!="undefined"){var d=a.split("/");if(/http:|https:|ftp:/.test(d[0]))return a;b=
b.split("/");b.length>3&&b.pop();if(d[0]===""){b=b[0]+"//"+b[2];b=b.split("/");delete d[0]}for(a=0;a<d.length;a++){if(d[a]===".."){if(typeof d[a-1]!=="undefined")delete d[a-1];else b.length>3&&b.pop();delete d[a]}d[a]==="."&&delete d[a]}var e=[];for(a=0;a<d.length;a++)if(typeof d[a]!=="undefined")e[e.length]=d[a];return b.join("/")+"/"+e.join("/")}},stringToXML:function(a){var b;try{if(window.ActiveXObject){b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a)}else b=(new DOMParser).parseFromString(a,
"text/xml")}catch(d){}return b},request:function(a,b,d,e,f){var g=WDN.jQuery;if(!f||!/^(get|post)$/i.test(f))f="get";f=f.toLowerCase();try{g[f](a,b,d,e);if(window.opera&&Object.toString(window.opera.version).indexOf("[native code]")>0)throw"Opera";}catch(j){if(b&&g.isPlainObject(b)){var h="";for(var m in b)h=h+"&"+m+"="+b[m]}if(h&&f=="get"){/\?/.test(a)||(a+="?");a+=h.substr(1,h.length);h=null}if(window.XDomainRequest&&f!="post"){b=new XDomainRequest;b.open(f,a);b.onload=function(){var i=this.responseText,
k=(e||"").toLowerCase();if(typeof i=="string"&&k=="xml")i=WDN.stringToXML(i);d(i,"success",this)};b.send(h)}else try{var l=new WDN.proxy_xmlhttp;l.open(f.toUpperCase(),a,true);f=="post"&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.onreadystatechange=function(){var i="error",k="error";if(this.readyState==4&&this.status=="200"){i="success";k=this.responseText}d(k,i,this)};l.send(h)}catch(n){}}},get:function(a,b,d,e){WDN.request(a,b,d,e,"GET")},post:function(a,b,d,e){WDN.request(a,
b,d,e,"POST")}}}();WDN.template_path="/";WDN.loadedJS["/wdn/templates_3.0/scripts/wdn.js"]=1;_gaq=_gaq||[];
analytics=function(){return{initialize:function(){_gaq.push(["_setAccount","UA-3203435-1"],["_setDomainName",".unl.edu"],["_setAllowLinker",true],["_setAllowHash",false]);_gaq.push(["m._setAccount","UA-3203435-4"],["m._setDomainName",".unl.edu"],["m._setAllowLinker",true],["m._setAllowHash",false]);analytics.loadGA()},loadGA:function(){_gaq.push(["_trackPageview"],["m._trackPageview"]);(function(){var c=document.createElement("script");c.type="text/javascript";c.async=true;c.src=("https:"==document.location.protocol?
"https://ssl":"http://www")+".google-analytics.com/ga.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)})()}}}();analytics.initialize();WDN.loadedJS["/wdn/templates_3.0/scripts/mobile_analytics.js"]=1;
mobile_support=function(){return{initialize:function(){window.addEventListener("orientationchange",mobile_support.setOrientation,false);document.addEventListener("DOMContentLoaded",function(){mobile_support.enhanceNavigation.initialize();mobile_support.fixOrientation(document);document.getElementById("wdn_search_form").setAttribute("action","http://www1.unl.edu/search/")},false)},fixOrientation:function(c){function a(){e.content="width=device-width,minimum-scale="+d[0]+",maximum-scale="+d[1];c.removeEventListener(b,
a,true)}var b="gesturestart",d=[1,1],e="querySelectorAll"in c?c.querySelectorAll("meta[name=viewport]"):[];if((e=e[e.length-1])&&"addEventListener"in c){a();d=[0.25,1.6];c.addEventListener(b,a,true)}},updateSearch:function(){},enhanceNavigation:function(){return{initialize:function(){navigation=document.getElementById("navigation");primaryNav=navigation.getElementsByTagName("ul")[0];if(primaryNav==undefined)navigation.className="disabled";else{secondaryNavs=primaryNav.getElementsByTagName("ul");navigation.onclick=
function(){mobile_support.enhanceNavigation.showPrimary(navigation.getElementsByTagName("ul")[0])};primaryNavs=navigation.getElementsByTagName("ul")[0].children;var c=0;for(c=0;c<=primaryNavs.length;c++)if(primaryNavs[c]!=undefined){primaryNavs[c].onclick=function(){event.stopPropagation();mobile_support.enhanceNavigation.showSecondary(this)};if(primaryNavs[c].getElementsByTagName("ul").length>0)primaryNavs[c].className="hasSecondary"}}},showPrimary:function(c){c=c;c.style.left=0;mobile_support.enhanceNavigation.setupNavNav()},
showSecondary:function(c){c.getElementsByTagName("ul")[0].style.left=0;navNav.className="secondary"},setupNavNav:function(){navNav=document.createElement("a");navNav.setAttribute("id","navNav");navNav.innerHTML="Back";navNav.className="primary";document.getElementById("wdn_navigation_wrapper").insertBefore(navNav,navigation);navNav.onclick=function(){mobile_support.enhanceNavigation.traverseNavigation(navNav)}},traverseNavigation:function(){if(navNav.className=="primary"){primaryNav.style.left="100%";
navNav.parentNode.removeChild(navNav)}else{var c=0;for(c=0;c<=secondaryNavs.length;c++)if(secondaryNavs[c]!=undefined)secondaryNavs[c].style.left="100%";navNav.className="primary"}}}}()}}();mobile_support.initialize();WDN.loadedJS["/wdn/templates_3.0/scripts/mobile_support.js"]=1;
