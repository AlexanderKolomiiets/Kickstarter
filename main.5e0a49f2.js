parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".questions__form");e.addEventListener("submit",function(t){t.preventDefault(),e.reset()}),window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var t=document.querySelectorAll(".nav__link");t.forEach(function(e,n){e.addEventListener("click",function(){t.forEach(function(e){e.classList.remove("nav__link--is-active")}),t[n].classList.add("nav__link--is-active")})});var n=1,c=document.querySelector(".features__slide--prev"),o=document.querySelector(".features__slide--next"),i=document.querySelector(".features__slide--current"),s=document.querySelector(".features__slide--total"),a=document.querySelectorAll(".features__info");function d(e){e>a.length&&(n=1),e<1&&(n=a.length),a.forEach(function(e){e.style.display="none",e.classList.remove("fade")}),a[n-1].style.display="block",a[n-1].classList.add("fade"),i.textContent="0".concat(n)}s.textContent="/ 0".concat(a.length),window.addEventListener("resize",function(){window.matchMedia("(min-width: 1280px)").matches?a.forEach(function(e){e.style.display="block"}):(a.forEach(function(e){e.style.display="none"}),a[n-1].style.display="block")}),c.addEventListener("click",function(){d(n+=-1)}),o.addEventListener("click",function(){d(n+=1)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.5e0a49f2.js.map