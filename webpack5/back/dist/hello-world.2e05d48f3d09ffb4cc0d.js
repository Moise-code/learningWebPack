(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const n=function(){function n(){var e,t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),t="hello-world-button",(e="buttonCSSClass")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}var t,r;return t=n,(r=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello world",e.classList.add(this.buttonCSSClass);var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world",e.classList.add("hello-world-text"),n.appendChild(e)},n.appendChild(e)}}])&&e(t.prototype,r),n}();function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,(r=[{key:"render",value:function(e){var n=document.createElement("h1"),t=document.querySelector("body");n.innerHTML="Webpack is cool. This ".concat(e," page"),t.appendChild(n)}}])&&t(n.prototype,r),e}())).render();var r=new n;r.render(),console.log("Production mode!"),r.methodTatDoesNotExist()})();