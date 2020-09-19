!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r,o=function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},i=function(){function t(){this.observers=new Set,this.activeItem=""}return t.prototype.subscribe=function(t){this.observers.has(t)||this.observers.add(t)},t.prototype.unsubscribe=function(t){this.observers.has(t)||this.observers.delete(t)},t.prototype.notify=function(){var t,e;try{for(var n=o(this.observers),r=n.next();!r.done;r=n.next()){r.value.update(this)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}},t.prototype.updateActiveItem=function(t){this.activeItem=this.activeItem===t?"":t,this.notify()},t}(),c=function(){function t(t){this.mainElement=null,this.mainElement=document.querySelector(t)}return t.prototype.getActiveControl=function(e){if(!e)return null;var n="["+t.controlAttribute+"="+e+"]";return this.mainElement.querySelector(n)},t.prototype.getActiveContent=function(e){if(!e)return null;var n="["+t.contentAttribute+"="+e+"]";return this.mainElement.querySelector(n)},Object.defineProperty(t.prototype,"controls",{get:function(){var e="["+t.controlAttribute+"]";return Array.from(this.mainElement.querySelectorAll(e))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"contents",{get:function(){var e="["+t.contentAttribute+"]";return Array.from(this.mainElement.querySelectorAll(e))},enumerable:!1,configurable:!0}),t.addEventListener=function(e,n){var r=document.querySelector(e),o="["+t.controlAttribute+"]",i=r.querySelectorAll(o);Array.from(i).forEach((function(e){e.addEventListener("click",(function(e){var r=e.target.getAttribute(t.controlAttribute);r&&n.updateActiveItem(r)}))}))},t.controlAttribute="data-accordion-control",t.contentAttribute="data-accordion-content",t}(),u=(n(0),r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.update=function(t){this.updateInterface(t.activeItem)},e.prototype.resetInterface=function(){this.contents.forEach((function(t){t.setAttribute("hidden","true"),t.setAttribute("data-accordion-expanded","false")})),this.controls.forEach((function(t){t.setAttribute("data-accordion-expanded","false")}))},e.prototype.updateInterface=function(t){var e=this.getActiveContent(t),n=this.getActiveControl(t);this.resetInterface(),e&&(e.removeAttribute("hidden"),n.setAttribute("data-accordion-expanded","true"),e.setAttribute("data-accordion-expanded","true"))},e}(c),s=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(t){function e(e){var n=t.call(this,e)||this;return n.initAriaAttributes(),n}return s(e,t),e.prototype.update=function(t){this.updateAria(t.activeItem)},e.prototype.initAriaAttributes=function(){this.controls.forEach((function(t){var e=t.getAttribute("data-accordion-control");t.setAttribute("aria-expanded","false"),t.setAttribute("aria-controls",e)})),this.contents.forEach((function(t){var e=t.getAttribute("data-accordion-content");t.setAttribute("id",e)}))},e.prototype.resetAria=function(){this.controls.forEach((function(t){t.setAttribute("aria-expanded","false")}))},e.prototype.updateAria=function(t){var e=this.getActiveControl(t);this.resetAria(),e&&e.setAttribute("aria-expanded","true")},e}(c),p=(n(1),function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),l=function(t){function e(e){var n=t.call(this,e)||this;return n.prevContent="",n.setControlAnimation(),n.setContentAnimation(),n}return p(e,t),e.prototype.update=function(t){this.animate(t.activeItem)},e.prototype.animate=function(t){this.hidePreviousContent(),this.animateActiveContent(t),this.prevContent=t},e.prototype.hidePreviousContent=function(){if(this.prevContent){var t=this.getActiveContent(this.prevContent);t.removeAttribute("hidden"),t.style.height="0px",t.setAttribute(e.CONTENT_ANIMATION_ATTR,"false"),t.addEventListener("transitionend",(function e(){t.setAttribute("hidden","true"),t.removeEventListener("transitionend",e)}))}},e.prototype.animateActiveContent=function(t){var n=this.getActiveContent(t);if(n){n.style.height="";var r=n.offsetHeight;n.style.height="0px",requestAnimationFrame((function(){n.style.height=r+"px",n.setAttribute(e.CONTENT_ANIMATION_ATTR,"true")}))}},e.prototype.setControlAnimation=function(){this.controls.forEach((function(t){t.setAttribute(e.CONTROLS_ANIMATION_ATTR,"true")}))},e.prototype.setContentAnimation=function(){this.contents.forEach((function(t){t.setAttribute(e.CONTENT_ANIMATION_ATTR,"false")}))},e.CONTROLS_ANIMATION_ATTR="data-accordion-control-animation",e.CONTENT_ANIMATION_ATTR="data-accordion-content-animation",e}(c),d=new(function(){function t(t){this.mainItem=t}return t.prototype.init=function(){var t=new i,e=new a(this.mainItem),n=new f(this.mainItem),r=new l(this.mainItem);t.subscribe(e),t.subscribe(n),t.subscribe(r),c.addEventListener(this.mainItem,t)},t}())(".accordion-js");document.addEventListener("DOMContentLoaded",(function(){d.init()}));n(2)}]);