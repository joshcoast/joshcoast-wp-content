function e(e){return function(e,n,r,t){function a(e,n,r){var t=r?WebAssembly.instantiateStreaming:WebAssembly.instantiate,a=r?WebAssembly.compileStreaming:WebAssembly.compile;return n?t(e,n):a(e)}var i=null;if(n)return a(fetch(n),t,!0);var l=globalThis.atob(null),s=l.length;i=new Uint8Array(new ArrayBuffer(s));for(var o=0;o<s;o++)i[o]=l.charCodeAt(o);return a(i,t,!1)}(0,"./onig.wasm",0,e)}export{e as default};