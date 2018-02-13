!function e(t,n,o){function i(a,u){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return i(n?n:e)},l,l.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){"use strict";e("iframe-resizer/js/iframeResizer.contentWindow")},{"iframe-resizer/js/iframeResizer.contentWindow":2}],2:[function(e,t,n){!function(e){"use strict";function n(e,t,n){"addEventListener"in window?e.addEventListener(t,n,!1):"attachEvent"in window&&e.attachEvent("on"+t,n)}function o(e,t,n){"removeEventListener"in window?e.removeEventListener(t,n,!1):"detachEvent"in window&&e.detachEvent("on"+t,n)}function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function r(e){var t,n,o,i=null,r=0,a=function(){r=Le(),i=null,o=e.apply(t,n),i||(t=n=null)};return function(){var u=Le();r||(r=u);var c=Oe-(u-r);return t=this,n=arguments,0>=c||c>Oe?(i&&(clearTimeout(i),i=null),r=u,o=e.apply(t,n),i||(t=n=null)):i||(i=setTimeout(a,c)),o}}function a(e){return me+"["+he+"] "+e}function u(e){de&&"object"==typeof window.console&&console.log(a(e))}function c(e){"object"==typeof window.console&&console.warn(a(e))}function s(){l(),u("Initialising iFrame ("+location.href+")"),f(),g(),m("background",_),m("padding",Z),N(),w(),b(),h(),k(),T(),se=C(),H("init","Init message from host page"),xe()}function l(){function t(e){return"true"===e}var n=ce.substr(ge).split(":");he=n[0],$=e!==n[1]?Number(n[1]):$,ee=e!==n[2]?t(n[2]):ee,de=e!==n[3]?t(n[3]):de,le=e!==n[4]?Number(n[4]):le,X=e!==n[6]?t(n[6]):X,G=n[7],ae=e!==n[8]?n[8]:ae,_=n[9],Z=n[10],Te=e!==n[11]?Number(n[11]):Te,se.enable=e!==n[12]?t(n[12]):!1,ve=e!==n[13]?n[13]:ve,Ne=e!==n[14]?n[14]:Ne}function f(){function e(){var e=window.iFrameResizer;u("Reading data from page: "+JSON.stringify(e)),ke="messageCallback"in e?e.messageCallback:ke,xe="readyCallback"in e?e.readyCallback:xe,be="targetOrigin"in e?e.targetOrigin:be,ae="heightCalculationMethod"in e?e.heightCalculationMethod:ae,Ne="widthCalculationMethod"in e?e.widthCalculationMethod:Ne}function t(e,t){return"function"==typeof e&&(u("Setup custom "+t+"CalcMethod"),Ae[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),ae=t(ae,"height"),Ne=t(Ne,"width")),u("TargetOrigin for parent set to: "+be)}function d(e,t){return-1!==t.indexOf("-")&&(c("Negative CSS value ignored for "+e),t=""),t}function m(t,n){e!==n&&""!==n&&"null"!==n&&(document.body.style[t]=n,u("Body "+t+' set to "'+n+'"'))}function g(){e===G&&(G=$+"px"),m("margin",d("margin",G))}function h(){document.documentElement.style.height="",document.body.style.height="",u('HTML & body height set to "auto"')}function p(e){var t={add:function(t){function o(){H(e.eventName,e.eventType)}Re[t]=o,n(window,t,o)},remove:function(e){var t=Re[e];delete Re[e],o(window,e,t)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),u(i(e.method)+" event listener: "+e.eventType)}function v(e){p({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),p({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),p({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),p({method:e,eventType:"Input",eventName:"input"}),p({method:e,eventType:"Mouse Up",eventName:"mouseup"}),p({method:e,eventType:"Mouse Down",eventName:"mousedown"}),p({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),p({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),p({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),p({method:e,eventType:"Touch Start",eventName:"touchstart"}),p({method:e,eventType:"Touch End",eventName:"touchend"}),p({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),p({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),p({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),p({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===ve&&p({method:e,eventType:"IFrame Resized",eventName:"resize"})}function y(e,t,n,o){return t!==e&&(e in n||(c(e+" is not a valid option for "+o+"CalculationMethod."),e=t),u(o+' calculation method set to "'+e+'"')),e}function w(){ae=y(ae,re,Fe,"height")}function b(){Ne=y(Ne,Ie,Pe,"width")}function T(){!0===X?(v("add"),A()):u("Auto Resize disabled")}function E(){u("Disable outgoing messages"),ye=!1}function S(){u("Remove event listener: Message"),o(window,"message",J)}function O(){null!==Q&&Q.disconnect()}function M(){v("remove"),O(),clearInterval(fe)}function I(){E(),S(),!0===X&&M()}function N(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",document.body.appendChild(e)}function C(){function t(){return{x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}}function o(e){var n=e.getBoundingClientRect(),o=t();return{x:parseInt(n.left,10)+parseInt(o.x,10),y:parseInt(n.top,10)+parseInt(o.y,10)}}function i(t){function n(e){var t=o(e);u("Moving to in page link (#"+i+") at x: "+t.x+" y: "+t.y),V(t.y,t.x,"scrollToOffset")}var i=t.split("#")[1]||t,r=decodeURIComponent(i),a=document.getElementById(r)||document.getElementsByName(r)[0];e!==a?n(a):(u("In page link (#"+i+") not found in iFrame, so sending to parent"),V(0,0,"inPageLink","#"+i))}function r(){""!==location.hash&&"#"!==location.hash&&i(location.href)}function a(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&n(e,"click",t)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function s(){n(window,"hashchange",r)}function l(){setTimeout(r,ne)}function f(){Array.prototype.forEach&&document.querySelectorAll?(u("Setting up location.hash handlers"),a(),s(),l()):c("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}return se.enable?f():u("In page linking not enabled"),{findTarget:i}}function k(){u("Enable public methods"),Ce.parentIFrame={autoResize:function(e){return!0===e&&!1===X?(X=!0,T()):!1===e&&!0===X&&(X=!1,M()),X},close:function(){V(0,0,"close"),I()},getId:function(){return he},getPageInfo:function(e){"function"==typeof e?(ze=e,V(0,0,"pageInfo")):(ze=function(){},V(0,0,"pageInfoStop"))},moveToAnchor:function(e){se.findTarget(e)},reset:function(){j("parentIFrame.reset")},scrollTo:function(e,t){V(t,e,"scrollTo")},scrollToOffset:function(e,t){V(t,e,"scrollToOffset")},sendMessage:function(e,t){V(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod:function(e){ae=e,w()},setWidthCalculationMethod:function(e){Ne=e,b()},setTargetOrigin:function(e){u("Set targetOrigin: "+e),be=e},size:function(e,t){var n=""+(e?e:"")+(t?","+t:"");H("size","parentIFrame.size("+n+")",e,t)}}}function x(){0!==le&&(u("setInterval: "+le+"ms"),fe=setInterval(function(){H("interval","setInterval: "+le)},Math.abs(le)))}function z(){function t(e){function t(e){!1===e.complete&&(u("Attach listeners to "+e.src),e.addEventListener("load",r,!1),e.addEventListener("error",a,!1),l.push(e))}"attributes"===e.type&&"src"===e.attributeName?t(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),t)}function n(e){l.splice(l.indexOf(e),1)}function o(e){u("Remove listeners from "+e.src),e.removeEventListener("load",r,!1),e.removeEventListener("error",a,!1),n(e)}function i(t,n,i){o(t.target),H(n,i+": "+t.target.src,e,e)}function r(e){i(e,"imageLoad","Image loaded")}function a(e){i(e,"imageLoadFailed","Image load failed")}function c(e){H("mutationObserver","mutationObserver: "+e[0].target+" "+e[0].type),e.forEach(t)}function s(){var e=document.querySelector("body"),t={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return d=new f(c),u("Create body MutationObserver"),d.observe(e,t),d}var l=[],f=window.MutationObserver||window.WebKitMutationObserver,d=s();return{disconnect:function(){"disconnect"in d&&(u("Disconnect body MutationObserver"),d.disconnect(),l.forEach(o))}}}function A(){var e=0>le;window.MutationObserver||window.WebKitMutationObserver?e?x():Q=z():(u("MutationObserver not supported in this browser!"),x())}function R(e,t){function n(e){var n=/^\d+(px)?$/i;if(n.test(e))return parseInt(e,Y);var o=t.style.left,i=t.runtimeStyle.left;return t.runtimeStyle.left=t.currentStyle.left,t.style.left=e||0,e=t.style.pixelLeft,t.style.left=o,t.runtimeStyle.left=i,e}var o=0;return t=t||document.body,"defaultView"in document&&"getComputedStyle"in document.defaultView?(o=document.defaultView.getComputedStyle(t,null),o=null!==o?o[e]:0):o=n(t.currentStyle[e]),parseInt(o,Y)}function L(e){e>Oe/2&&(Oe=2*e,u("Event throttle increased to "+Oe+"ms"))}function F(e,t){for(var n=t.length,o=0,r=0,a=i(e),c=Le(),s=0;n>s;s++)o=t[s].getBoundingClientRect()[e]+R("margin"+a,t[s]),o>r&&(r=o);return c=Le()-c,u("Parsed "+n+" HTML elements"),u("Element position calculated in "+c+"ms"),L(c),r}function P(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function q(e,t){function n(){return c("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")}var o=document.querySelectorAll("["+t+"]");return 0===o.length&&n(),F(e,o)}function D(){return document.querySelectorAll("body *")}function W(t,n,o,i){function r(){ie=d,Me=m,V(ie,Me,t)}function a(){function t(e,t){var n=Math.abs(e-t)<=Te;return!n}return d=e!==o?o:Fe[ae](),m=e!==i?i:Pe[Ne](),t(ie,d)||ee&&t(Me,m)}function c(){return!(t in{init:1,interval:1,size:1})}function s(){return ae in pe||ee&&Ne in pe}function l(){u("No change in size detected")}function f(){c()&&s()?j(n):t in{interval:1}||l()}var d,m;a()||"init"===t?(B(),r()):f()}function H(e,t,n,o){function i(){e in{reset:1,resetPage:1,init:1}||u("Trigger event: "+t)}function r(){return Ee&&e in te}r()?u("Trigger event cancelled: "+e):(i(),qe(e,t,n,o))}function B(){Ee||(Ee=!0,u("Trigger event lock on")),clearTimeout(Se),Se=setTimeout(function(){Ee=!1,u("Trigger event lock off"),u("--")},ne)}function U(e){ie=Fe[ae](),Me=Pe[Ne](),V(ie,Me,e)}function j(e){var t=ae;ae=re,u("Reset trigger event: "+e),B(),U("reset"),ae=t}function V(t,n,o,i,r){function a(){e===r?r=be:u("Message targetOrigin: "+r)}function c(){var a=t+":"+n,c=he+":"+a+":"+o+(e!==i?":"+i:"");u("Sending message to host page ("+c+")"),we.postMessage(me+c,r)}!0===ye&&(a(),c())}function J(e){function o(){return me===(""+e.data).substr(0,ge)}function i(){return e.data.split("]")[1].split(":")[0]}function r(){return e.data.substr(e.data.indexOf(":")+1)}function a(){return!("undefined"!=typeof t&&t.exports)&&"iFrameResize"in window}function l(){return e.data.split(":")[2]in{"true":1,"false":1}}function f(){var t=i();t in m?m[t]():a()||l()||c("Unexpected message ("+e.data+")")}function d(){!1===oe?f():l()?m.init():u('Ignored message of type "'+i()+'". Received before initialization.')}var m={init:function(){function t(){ce=e.data,we=e.source,s(),oe=!1,setTimeout(function(){ue=!1},ne)}document.body?t():(u("Waiting for page ready"),n(window,"readystatechange",m.initFromParent))},reset:function(){ue?u("Page reset ignored by init"):(u("Page size reset by host page"),U("resetPage"))},resize:function(){H("resizeParent","Parent window requested size check")},moveToAnchor:function(){se.findTarget(r())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=r();u("PageInfoFromParent called from parent: "+e),ze(JSON.parse(e)),u(" --")},message:function(){var e=r();u("MessageCallback called from parent: "+e),ke(JSON.parse(e)),u(" --")}};o()&&d()}function K(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}if("undefined"!=typeof window){var X=!0,Y=10,_="",$=0,G="",Q=null,Z="",ee=!1,te={resize:1,click:1},ne=128,oe=!0,ie=1,re="bodyOffset",ae=re,ue=!0,ce="",se={},le=32,fe=null,de=!1,me="[iFrameSizer]",ge=me.length,he="",pe={max:1,min:1,bodyScroll:1,documentElementScroll:1},ve="child",ye=!0,we=window.parent,be="*",Te=0,Ee=!1,Se=null,Oe=16,Me=1,Ie="scroll",Ne=Ie,Ce=window,ke=function(){c("MessageCallback function not defined")},xe=function(){},ze=function(){},Ae={height:function(){return c("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return c("Custom width calculation function not defined"),document.body.scrollWidth}},Re={},Le=Date.now||function(){return(new Date).getTime()},Fe={bodyOffset:function(){return document.body.offsetHeight+R("marginTop")+R("marginBottom")},offset:function(){return Fe.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Ae.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,P(Fe))},min:function(){return Math.min.apply(null,P(Fe))},grow:function(){return Fe.max()},lowestElement:function(){return Math.max(Fe.bodyOffset(),F("bottom",D()))},taggedElement:function(){return q("bottom","data-iframe-height")}},Pe={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Ae.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Pe.bodyScroll(),Pe.documentElementScroll())},max:function(){return Math.max.apply(null,P(Pe))},min:function(){return Math.min.apply(null,P(Pe))},rightMostElement:function(){return F("right",D())},taggedElement:function(){return q("right","data-iframe-width")}},qe=r(W);n(window,"message",J),K()}}()},{}]},{},[1]);
