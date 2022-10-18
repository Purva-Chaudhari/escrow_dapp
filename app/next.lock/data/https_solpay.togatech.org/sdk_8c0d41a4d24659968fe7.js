!function(t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Buffer=t()}(function(){return function n(i,o,f){function u(r,t){if(!o[r]){if(!i[r]){var e="function"==typeof require&&require;if(!t&&e)return e(r,!0);if(s)return s(r,!0);throw(e=new Error("Cannot find module '"+r+"'")).code="MODULE_NOT_FOUND",e}e=o[r]={exports:{}},i[r][0].call(e.exports,function(t){return u(i[r][1][t]||t)},e,e.exports,n,i,o,f)}return o[r].exports}for(var s="function"==typeof require&&require,t=0;t<f.length;t++)u(f[t]);return u}({1:[function(t,r,e){"use strict";e.byteLength=function(t){var r=a(t),t=r[0],r=r[1];return 3*(t+r)/4-r},e.toByteArray=function(t){var r,e,n=a(t),i=n[0],n=n[1],o=new h(function(t,r){return 3*(t+r)/4-r}(i,n)),f=0,u=0<n?i-4:i;for(e=0;e<u;e+=4)r=s[t.charCodeAt(e)]<<18|s[t.charCodeAt(e+1)]<<12|s[t.charCodeAt(e+2)]<<6|s[t.charCodeAt(e+3)],o[f++]=r>>16&255,o[f++]=r>>8&255,o[f++]=255&r;2===n&&(r=s[t.charCodeAt(e)]<<2|s[t.charCodeAt(e+1)]>>4,o[f++]=255&r);1===n&&(r=s[t.charCodeAt(e)]<<10|s[t.charCodeAt(e+1)]<<4|s[t.charCodeAt(e+2)]>>2,o[f++]=r>>8&255,o[f++]=255&r);return o},e.fromByteArray=function(t){for(var r,e=t.length,n=e%3,i=[],o=0,f=e-n;o<f;o+=16383)i.push(function(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(function(t){return u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}(n));return i.join("")}(t,o,f<o+16383?f:o+16383));1==n?(r=t[e-1],i.push(u[r>>2]+u[r<<4&63]+"==")):2==n&&(r=(t[e-2]<<8)+t[e-1],i.push(u[r>>10]+u[r>>4&63]+u[r<<2&63]+"="));return i.join("")};for(var u=[],s=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,o=n.length;i<o;++i)u[i]=n[i],s[n.charCodeAt(i)]=i;function a(t){var r=t.length;if(0<r%4)throw new Error("Invalid string. Length must be a multiple of 4");t=t.indexOf("=");return[t=-1===t?r:t,t===r?0:4-t%4]}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},{}],2:[function(x,t,R){!function(t){!function(){"use strict";var u=x("base64-js"),o=x("ieee754");R.Buffer=p,R.SlowBuffer=function(t){+t!=t&&(t=0);return p.alloc(+t)},R.INSPECT_MAX_BYTES=50;var r=2147483647;function i(t){if(r<t)throw new RangeError('The value "'+t+'" is invalid for option "size"');t=new Uint8Array(t);return t.__proto__=p.prototype,t}function p(t,r,e){if("number"!=typeof t)return n(t,r,e);if("string"==typeof r)throw new TypeError('The "string" argument must be of type string. Received type number');return s(t)}function n(t,r,e){if("string"==typeof t)return function(t,r){"string"==typeof r&&""!==r||(r="utf8");if(!p.isEncoding(r))throw new TypeError("Unknown encoding: "+r);var e=0|c(t,r),n=i(e),r=n.write(t,r);r!==e&&(n=n.slice(0,r));return n}(t,r);if(ArrayBuffer.isView(t))return h(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(L(t,ArrayBuffer)||t&&L(t.buffer,ArrayBuffer))return function(t,r,e){if(r<0||t.byteLength<r)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw new RangeError('"length" is outside of buffer bounds');e=void 0===r&&void 0===e?new Uint8Array(t):void 0===e?new Uint8Array(t,r):new Uint8Array(t,r,e);return e.__proto__=p.prototype,e}(t,r,e);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return p.from(n,r,e);n=function(t){if(p.isBuffer(t)){var r=0|a(t.length),e=i(r);return 0===e.length?e:(t.copy(e,0,0,r),e)}if(void 0!==t.length)return"number"!=typeof t.length||S(t.length)?i(0):h(t);if("Buffer"===t.type&&Array.isArray(t.data))return h(t.data)}(t);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return p.from(t[Symbol.toPrimitive]("string"),r,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function s(t){return f(t),i(t<0?0:0|a(t))}function h(t){for(var r=t.length<0?0:0|a(t.length),e=i(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function a(t){if(r<=t)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r.toString(16)+" bytes");return 0|t}function c(t,r){if(p.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||L(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=2<arguments.length&&!0===arguments[2];if(!n&&0===e)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return _(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return T(t).length;default:if(i)return n?-1:_(t).length;r=(""+r).toLowerCase(),i=!0}}function e(t,r,e){var n,i,o,f=!1;if((r=void 0===r||r<0?0:r)>this.length)return"";if((e=void 0===e||e>this.length?this.length:e)<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t=t||"utf8";;)switch(t){case"hex":return function(t,r,e){var n=t.length;(!r||r<0)&&(r=0);(!e||e<0||n<e)&&(e=n);for(var i="",o=r;o<e;++o)i+=function(t){return t<16?"0"+t.toString(16):t.toString(16)}(t[o]);return i}(this,r,e);case"utf8":case"utf-8":return b(this,r,e);case"ascii":return function(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}(this,r,e);case"latin1":case"binary":return function(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}(this,r,e);case"base64":return n=this,o=e,0===(i=r)&&o===n.length?u.fromByteArray(n):u.fromByteArray(n.slice(i,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}(this,r,e);default:if(f)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),f=!0}}function l(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function y(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):2147483647<e?e=2147483647:e<-2147483648&&(e=-2147483648),(e=(e=S(e=+e)?i?0:t.length-1:e)<0?t.length+e:e)>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=p.from(r,n)),p.isBuffer(r))return 0===r.length?-1:g(t,r,e,n,i);if("number"==typeof r)return r&=255,"function"==typeof Uint8Array.prototype.indexOf?(i?Uint8Array.prototype.indexOf:Uint8Array.prototype.lastIndexOf).call(t,r,e):g(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function g(t,r,e,n,i){var o=1,f=t.length,u=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f/=o=2,u/=2,e/=2}function s(t,r){return 1===o?t[r]:t.readUInt16BE(r*o)}if(i)for(var h=-1,a=e;a<f;a++)if(s(t,a)===s(r,-1===h?0:a-h)){if(a-(h=-1===h?a:h)+1===u)return h*o}else-1!==h&&(a-=a-h),h=-1;else for(a=e=f<e+u?f-u:e;0<=a;a--){for(var p=!0,c=0;c<u;c++)if(s(t,a+c)!==s(r,c)){p=!1;break}if(p)return a}return-1}function w(t,r,e,n){return C(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function d(t,r,e,n){return C(function(t,r){for(var e,n,i=[],o=0;o<t.length&&!((r-=2)<0);++o)n=t.charCodeAt(o),e=n>>8,n=n%256,i.push(n),i.push(e);return i}(r,t.length-e),t,e,n)}function b(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,f,u,s,h=t[i],a=null,p=239<h?4:223<h?3:191<h?2:1;if(i+p<=e)switch(p){case 1:h<128&&(a=h);break;case 2:128==(192&(o=t[i+1]))&&127<(s=(31&h)<<6|63&o)&&(a=s);break;case 3:o=t[i+1],f=t[i+2],128==(192&o)&&128==(192&f)&&2047<(s=(15&h)<<12|(63&o)<<6|63&f)&&(s<55296||57343<s)&&(a=s);break;case 4:o=t[i+1],f=t[i+2],u=t[i+3],128==(192&o)&&128==(192&f)&&128==(192&u)&&65535<(s=(15&h)<<18|(63&o)<<12|(63&f)<<6|63&u)&&s<1114112&&(a=s)}null===a?(a=65533,p=1):65535<a&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=p}return function(t){var r=t.length;if(r<=v)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=v));return e}(n)}R.kMaxLength=r,(p.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(t){return!1}}())||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.buffer}}),Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.byteOffset}}),"undefined"!=typeof Symbol&&null!=Symbol.species&&p[Symbol.species]===p&&Object.defineProperty(p,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),p.poolSize=8192,p.from=n,p.prototype.__proto__=Uint8Array.prototype,p.__proto__=Uint8Array,p.alloc=function(t,r,e){return r=r,e=e,f(t=t),!(t<=0)&&void 0!==r?"string"==typeof e?i(t).fill(r,e):i(t).fill(r):i(t)},p.allocUnsafe=s,p.allocUnsafeSlow=s,p.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==p.prototype},p.compare=function(t,r){if(L(t,Uint8Array)&&(t=p.from(t,t.offset,t.byteLength)),L(r,Uint8Array)&&(r=p.from(r,r.offset,r.byteLength)),!p.isBuffer(t)||!p.isBuffer(r))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},p.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.concat=function(t,r){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return p.alloc(0);if(void 0===r)for(i=r=0;i<t.length;++i)r+=t[i].length;for(var e=p.allocUnsafe(r),n=0,i=0;i<t.length;++i){var o=t[i];if(L(o,Uint8Array)&&(o=p.from(o)),!p.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(e,n),n+=o.length}return e},p.byteLength=c,p.prototype._isBuffer=!0,p.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)l(this,r,r+1);return this},p.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)l(this,r,r+3),l(this,r+1,r+2);return this},p.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)l(this,r,r+7),l(this,r+1,r+6),l(this,r+2,r+5),l(this,r+3,r+4);return this},p.prototype.toLocaleString=p.prototype.toString=function(){var t=this.length;return 0===t?"":0===arguments.length?b(this,0,t):e.apply(this,arguments)},p.prototype.equals=function(t){if(!p.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===p.compare(this,t)},p.prototype.inspect=function(){var t="",r=R.INSPECT_MAX_BYTES,t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim();return this.length>r&&(t+=" ... "),"<Buffer "+t+">"},p.prototype.compare=function(t,r,e,n,i){if(L(t,Uint8Array)&&(t=p.from(t,t.offset,t.byteLength)),!p.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),(r=void 0===r?0:r)<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(i<=n&&e<=r)return 0;if(i<=n)return-1;if(e<=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),f=(e>>>=0)-(r>>>=0),u=Math.min(o,f),s=this.slice(n,i),h=t.slice(r,e),a=0;a<u;++a)if(s[a]!==h[a]){o=s[a],f=h[a];break}return o<f?-1:f<o?1:0},p.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},p.prototype.indexOf=function(t,r,e){return y(this,t,r,e,!0)},p.prototype.lastIndexOf=function(t,r,e){return y(this,t,r,e,!1)},p.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||i<e)&&(e=i),0<t.length&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n=n||"utf8";for(var o,f,u,s=!1;;)switch(n){case"hex":return function(t,r,e,n){e=Number(e)||0;var i=t.length-e;(!n||i<(n=Number(n)))&&(n=i),(i=r.length)/2<n&&(n=i/2);for(var o=0;o<n;++o){var f=parseInt(r.substr(2*o,2),16);if(S(f))return o;t[e+o]=f}return o}(this,t,r,e);case"utf8":case"utf-8":return f=r,u=e,C(_(t,(o=this).length-f),o,f,u);case"ascii":return w(this,t,r,e);case"latin1":case"binary":return w(this,t,r,e);case"base64":return o=this,f=r,u=e,C(T(t),o,f,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return d(this,t,r,e);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var v=4096;function m(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(e<t+r)throw new RangeError("Trying to access beyond buffer length")}function E(t,r,e,n,i,o){if(!p.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(i<r||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function A(t,r,e,n){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function B(t,r,e,n,i){return r=+r,e>>>=0,i||A(t,0,e,4),o.write(t,r,e,n,23,4),e+4}function U(t,r,e,n,i){return r=+r,e>>>=0,i||A(t,0,e,8),o.write(t,r,e,n,52,8),e+8}p.prototype.slice=function(t,r){var e=this.length;(t=~~t)<0?(t+=e)<0&&(t=0):e<t&&(t=e),(r=void 0===r?e:~~r)<0?(r+=e)<0&&(r=0):e<r&&(r=e);r=this.subarray(t,r=r<t?t:r);return r.__proto__=p.prototype,r},p.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||m(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},p.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||m(t,r,this.length);for(var n=this[t+--r],i=1;0<r&&(i*=256);)n+=this[t+--r]*i;return n},p.prototype.readUInt8=function(t,r){return t>>>=0,r||m(t,1,this.length),this[t]},p.prototype.readUInt16LE=function(t,r){return t>>>=0,r||m(t,2,this.length),this[t]|this[t+1]<<8},p.prototype.readUInt16BE=function(t,r){return t>>>=0,r||m(t,2,this.length),this[t]<<8|this[t+1]},p.prototype.readUInt32LE=function(t,r){return t>>>=0,r||m(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},p.prototype.readUInt32BE=function(t,r){return t>>>=0,r||m(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},p.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||m(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return(i*=128)<=n&&(n-=Math.pow(2,8*r)),n},p.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||m(t,r,this.length);for(var n=r,i=1,o=this[t+--n];0<n&&(i*=256);)o+=this[t+--n]*i;return(i*=128)<=o&&(o-=Math.pow(2,8*r)),o},p.prototype.readInt8=function(t,r){return t>>>=0,r||m(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},p.prototype.readInt16LE=function(t,r){t>>>=0,r||m(t,2,this.length);t=this[t]|this[t+1]<<8;return 32768&t?4294901760|t:t},p.prototype.readInt16BE=function(t,r){t>>>=0,r||m(t,2,this.length);t=this[t+1]|this[t]<<8;return 32768&t?4294901760|t:t},p.prototype.readInt32LE=function(t,r){return t>>>=0,r||m(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},p.prototype.readInt32BE=function(t,r){return t>>>=0,r||m(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},p.prototype.readFloatLE=function(t,r){return t>>>=0,r||m(t,4,this.length),o.read(this,t,!0,23,4)},p.prototype.readFloatBE=function(t,r){return t>>>=0,r||m(t,4,this.length),o.read(this,t,!1,23,4)},p.prototype.readDoubleLE=function(t,r){return t>>>=0,r||m(t,8,this.length),o.read(this,t,!0,52,8)},p.prototype.readDoubleBE=function(t,r){return t>>>=0,r||m(t,8,this.length),o.read(this,t,!1,52,8)},p.prototype.writeUIntLE=function(t,r,e,n){t=+t,r>>>=0,e>>>=0,n||E(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},p.prototype.writeUIntBE=function(t,r,e,n){t=+t,r>>>=0,e>>>=0,n||E(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;0<=--i&&(o*=256);)this[r+i]=t/o&255;return r+e},p.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,1,255,0),this[r]=255&t,r+1},p.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},p.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},p.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},p.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},p.prototype.writeIntLE=function(t,r,e,n){t=+t,r>>>=0,n||E(this,t,r,e,(n=Math.pow(2,8*e-1))-1,-n);var i=0,o=1,f=0;for(this[r]=255&t;++i<e&&(o*=256);)t<0&&0===f&&0!==this[r+i-1]&&(f=1),this[r+i]=(t/o>>0)-f&255;return r+e},p.prototype.writeIntBE=function(t,r,e,n){t=+t,r>>>=0,n||E(this,t,r,e,(n=Math.pow(2,8*e-1))-1,-n);var i=e-1,o=1,f=0;for(this[r+i]=255&t;0<=--i&&(o*=256);)t<0&&0===f&&0!==this[r+i+1]&&(f=1),this[r+i]=(t/o>>0)-f&255;return r+e},p.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,1,127,-128),this[r]=255&(t=t<0?255+t+1:t),r+1},p.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},p.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},p.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},p.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||E(this,t,r,4,2147483647,-2147483648),this[r]=(t=t<0?4294967295+t+1:t)>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},p.prototype.writeFloatLE=function(t,r,e){return B(this,t,r,!0,e)},p.prototype.writeFloatBE=function(t,r,e){return B(this,t,r,!1,e)},p.prototype.writeDoubleLE=function(t,r,e){return U(this,t,r,!0,e)},p.prototype.writeDoubleBE=function(t,r,e){return U(this,t,r,!1,e)},p.prototype.copy=function(t,r,e,n){if(!p.isBuffer(t))throw new TypeError("argument should be a Buffer");if(e=e||0,n||0===n||(n=this.length),r>=t.length&&(r=t.length),(n=0<n&&n<e?e:n)===e)return 0;if(0===t.length||0===this.length)return 0;if((r=r||0)<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length);var i=(n=t.length-r<n-e?t.length-r+e:n)-e;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,e,n);else if(this===t&&e<r&&r<n)for(var o=i-1;0<=o;--o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,n),r);return i},p.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!p.isEncoding(n))throw new TypeError("Unknown encoding: "+n);var i;1===t.length&&(i=t.charCodeAt(0),("utf8"===n&&i<128||"latin1"===n)&&(t=i))}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,"number"==typeof(t=t||0))for(o=r;o<e;++o)this[o]=t;else{var f=p.isBuffer(t)?t:p.from(t,n),u=f.length;if(0===u)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<e-r;++o)this[o+r]=f[o%u]}return this};var I=/[^+/0-9A-Za-z-_]/g;function _(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],f=0;f<n;++f){if(55295<(e=t.charCodeAt(f))&&e<57344){if(!i){if(56319<e){-1<(r-=3)&&o.push(239,191,189);continue}if(f+1===n){-1<(r-=3)&&o.push(239,191,189);continue}i=e;continue}if(e<56320){-1<(r-=3)&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&-1<(r-=3)&&o.push(239,191,189);if(i=null,e<128){if(--r<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function T(t){return u.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(I,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function C(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function L(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}function S(t){return t!=t}}.call(this)}.call(this,x("buffer").Buffer)},{"base64-js":1,buffer:2,ieee754:3}],3:[function(t,r,e){e.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,s=(1<<u)-1,h=s>>1,a=-7,p=e?i-1:0,c=e?-1:1,e=t[r+p];for(p+=c,o=e&(1<<-a)-1,e>>=-a,a+=u;0<a;o=256*o+t[r+p],p+=c,a-=8);for(f=o&(1<<-a)-1,o>>=-a,a+=n;0<a;f=256*f+t[r+p],p+=c,a-=8);if(0===o)o=1-h;else{if(o===s)return f?NaN:1/0*(e?-1:1);f+=Math.pow(2,n),o-=h}return(e?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,r,e,n,i,o){var f,u,s=8*o-i-1,h=(1<<s)-1,a=h>>1,p=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,c=n?0:o-1,l=n?1:-1,o=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=h):(f=Math.floor(Math.log(r)/Math.LN2),r*(n=Math.pow(2,-f))<1&&(f--,n*=2),2<=(r+=1<=f+a?p/n:p*Math.pow(2,1-a))*n&&(f++,n/=2),h<=f+a?(u=0,f=h):1<=f+a?(u=(r*n-1)*Math.pow(2,i),f+=a):(u=r*Math.pow(2,a-1)*Math.pow(2,i),f=0));8<=i;t[e+c]=255&u,c+=l,u/=256,i-=8);for(f=f<<i|u,s+=i;0<s;t[e+c]=255&f,c+=l,f/=256,s-=8);t[e+c-l]|=128*o}},{}],4:[function(t,r,e){r.exports=t("buffer")},{buffer:2}]},{},[4])(4)});

(window || globalThis || global).SOLPay = (() => {
	let DEBUG = false;
	
	const SOLPaySDK = function() {
		const ONE_BILLION = 1000000000;

		let adapter;
		let network;
		let commitment;
		let _this = this;

		bridgeLoading = false;

		let awaitBridgeLoaded = () => {
			return new Promise(async (resolve, reject) => {
				let interval = setInterval(() => {
					if(bridgeLoading == false) {
						clearInterval(interval);
						resolve();
					}
				}, 20);
			});
		}

		let createBridge = (on_ready) => {
			bridgeLoading = true;
			if(this.bridge != null) {
				try {
					this.bridge.remove();
				} catch(err) {

				}
			}
			this.bridge = document.createElement("iframe");
			this.bridge.classList.add("solpay-bridge");

			let resolverToken = randomToken();

			let returnFunction = async (event) => {
				if(event.origin !== "https://solpay.togatech.org") return;
				try {
					let data = event.data;
					if(data.resolverToken == resolverToken) {
						bridgeLoading = false;
						if(adapter != null) {
							await _this.connectWallet(adapter);
						}
						if(network != null) {
							await _this.connectNetwork(network, commitment);
						}
						if(on_ready != null && typeof on_ready == "function") {
							on_ready();
						}
						window.removeEventListener("message", returnFunction, false);
					}
				} catch(err) {
					reject(err);
				}
			}
			window.addEventListener("message", returnFunction, false);

			this.bridge.src = "https://solpay.togatech.org/sdk_frame.html?origin=" + encodeURIComponent(window.origin) + "&token=" + resolverToken;
			this.bridge.style.display = "none";
			let target;
			if(document.children != null && document.children[0] != null) {
				target = document.children[0];
			} else {
				target = document;
			}
			target.appendChild(this.bridge);
		}

		let randomToken = () => {
			return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
		}

		let send = (data, resolverToken) => {
			if(this.bridge == null || this.bridge.contentWindow == null) {
				createBridge(() => {
					this.bridge.contentWindow.postMessage({
						request_type: "inner_request",
						result: data,
						resolverToken: resolverToken
					}, "https://solpay.togatech.org");
				});
			} else {
				this.bridge.contentWindow.postMessage({
					request_type: "inner_request",
					result: data,
					resolverToken: resolverToken
				}, "https://solpay.togatech.org");
			}
		}

		let error = (data, resolverToken) => {
			if(this.bridge == null || this.bridge.contentWindow == null) {
				createBridge(() => {
					this.bridge.contentWindow.postMessage({
						request_type: "inner_request",
						error: data,
						resolverToken: resolverToken
					}, "https://solpay.togatech.org");
				});
			} else {
				this.bridge.contentWindow.postMessage({
					request_type: "inner_request",
					error: data,
					resolverToken: resolverToken
				}, "https://solpay.togatech.org");
			}
		}

		let polyfillLog = (message, trace = false) => {
			if(!DEBUG) {
				return;
			}
			if(trace) {
				console.trace("[POLYFILL]", message);
			} else {
				console.log("[POLYFILL]", message)
			}
		}

		let Buffer = (window || globalThis || global).Buffer.Buffer || (window || globalThis || global).Buffer;

		let transactionPolyfill = (data) => {
			return new Promise(async (resolve, reject) => {
				let addressInBase58 = data.feePayer;
				let addressInBytes = await this.addressToBytes(addressInBase58);
				let transaction = {
					signatures: [],
					nonceInfo: data.nonceInfo,
					recentBlockhash: data.recentBlockhash,
					instructions: data.instructions.map((instruction) => {
						let addressInBase58 = instruction.programId.addressInBase58;
						let addressInBytes = instruction.programId.addressInBytes;
						delete instruction.programId.addressInBase58;
						delete instruction.programId.addressInBytes;
						instruction.keys.map((key) => {
							let keyInBase58 = key.pubkey.keyInBase58;
							let keyInBytes = key.pubkey.keyInBytes;
							delete key.pubkey.keyInBase58;
							delete key.pubkey.keyInBytes;
							key.pubkey = {
								toBase58: () => {
									polyfillLog("instructions[].keys[].pubkey.toBase58()");
									return keyInBase58;
								},
								toBuffer: () => {
									polyfillLog("instructions[].keys[].pubkey.toBuffer()");
									return new Buffer(keyInBytes);
								},
								toBytes: () => {
									polyfillLog("instructions[].keys[].pubkey.toBytes()");
									return keyInBytes;
								},
								toJSON: () => {
									polyfillLog("instructions[].keys[].pubkey.toJSON()");
									return keyInBase58;
								},
								toLocaleString: () => {
									polyfillLog("instructions[].keys[].pubkey.toLocaleString()");
									return keyInBase58;
								},
								toString: () => {
									polyfillLog("instructions[].keys[].pubkey.toString()");
									return keyInBase58;
								},
								_bn: {},
								equals: (publicKey) => {
									polyfillLog("instructions[].keys[].pubkey.equals()");
									return publicKey.toBase58() == keyInBase58;
								}
							}
							return key;
						});
						instruction.programId = {
							toBase58: () => {
								polyfillLog("instructions[].programId.pubkey.toBase58()");
								return addressInBase58;
							},
							toBuffer: () => {
								polyfillLog("instructions[].programId.pubkey.toBuffer()");
								return new Buffer(addressInBytes);
							},
							toBytes: () => {
								polyfillLog("instructions[].programId.pubkey.toBytes()");
								return addressInBytes;
							},
							toJSON: () => {
								polyfillLog("instructions[].programId.pubkey.toJSON()");
								return addressInBase58;
							},
							toLocaleString: () => {
								polyfillLog("instructions[].programId.pubkey.toLocaleString()");
								return addressInBase58;
							},
							toString: () => {
								polyfillLog("instructions[].programId.pubkey.toString()");
								return addressInBase58;
							},
							_bn: {},
							equals: (publicKey) => {
								polyfillLog("instructions[].programId.pubkey.equals()");
								return publicKey.toBase58() == addressInBase58;
							}
						}
						return instruction;
					}),
					feePayer: {
						toBase58: () => {
							polyfillLog("feePayer.toBase58()");
							return addressInBase58;
						},
						toBuffer: () => {
							polyfillLog("feePayer.toBuffer()");
							return new Buffer(addressInBytes);
						},
						toBytes: () => {
							polyfillLog("feePayer.toBytes()");
							return addressInBytes;
						},
						toJSON: () => {
							polyfillLog("feePayer.toJSON()");
							return addressInBase58;
						},
						toLocaleString: () => {
							polyfillLog("feePayer.toLocaleString()");
							return addressInBase58;
						},
						toString: () => {
							polyfillLog("feePayer.toString()");
							return addressInBase58;
						},
						_bn: {},
						equals: (publicKey) => {
							polyfillLog("feePayer.equals()");
							return publicKey.toBase58() == addressInBase58;
						}
					},
					serialize: () => {
						polyfillLog("serialize()", true);
						return new Buffer(data.serialized);
					},
					serializeMessage: () => {
						polyfillLog("serializeMessage()");
						return new Buffer(data.serializedMessage);
					},
					toJSON: () => {
						polyfillLog("toJSON()");
						return {
							recentBlockhash: transaction.recentBlockhash || null,
							feePayer: transaction.feePayer ? transaction.feePayer.toJSON() : null,
							nonceInfo: transaction.nonceInfo
								? {
									nonce: transaction.nonceInfo.nonce,
									nonceInstruction: transaction.nonceInfo.nonceInstruction.toJSON(),
								}
								: null,
							instructions: transaction.instructions.map(instruction => instruction.toJSON()),
							signers: transaction.signatures.map(({publicKey}) => {
								return publicKey.toJSON();
							}),
						};
					},
					compileMessage: () => {
						polyfillLog("compileMessage()");
						function invariant(condition, message) {
							if (!condition) {
								throw new Error(message || 'Assertion failed');
							}
						}

						const {nonceInfo} = transaction;
						if (nonceInfo && data.instructions[0] != nonceInfo.nonceInstruction) {
							transaction.recentBlockhash = nonceInfo.nonce;
							transaction.instructions.unshift(nonceInfo.nonceInstruction);
						}
						const {recentBlockhash} = transaction;
						if (!recentBlockhash) {
							throw new Error('Transaction recentBlockhash required');
						}

						if (transaction.instructions.length < 1) {
							console.warn('No instructions provided');
						}

						let feePayer;
						if (transaction.feePayer) {
							feePayer = transaction.feePayer;
						} else if (transaction.signatures.length > 0 && transaction.signatures[0].publicKey) {
							// Use implicit fee payer
							feePayer = transaction.signatures[0].publicKey;
						} else {
							throw new Error('Transaction fee payer required');
						}

						for (let i = 0; i < transaction.instructions.length; i++) {
							if (transaction.instructions[i].programId === undefined) {
								throw new Error(
									`Transaction instruction index ${i} has undefined program id`,
								);
							}
						}

						const addressBytes = {};

						const programIds = [];
						const accountMetas = [];
						transaction.instructions.forEach(instruction => {
							instruction.keys.forEach(accountMeta => {
								accountMetas.push({...accountMeta});
							});

							const programId = instruction.programId.toString();
							addressBytes[programId] = instruction.programId.toBytes();
							if (!programIds.includes(programId)) {
								programIds.push(programId);
							}
						});

						// Append programID account metas
						programIds.forEach(programId => {
							let programInBase58 = programId;
							let programInBytes = addressBytes[programId];
							accountMetas.push({
								pubkey: {
									toBase58: () => {
										return programInBase58;
									},
									toBuffer: () => {
										return new Buffer(programInBytes);
									},
									toBytes: () => {
										return programInBytes;
									},
									toJSON: () => {
										return programInBase58;
									},
									toLocaleString: () => {
										return programInBase58;
									},
									toString: () => {
										return programInBase58;
									},
									_bn: {},
									equals: (publicKey) => {
										return publicKey.toBase58() == programInBase58;
									}
								},
								isSigner: false,
								isWritable: false,
							});
						});

						// Sort. Prioritizing first by signer, then by writable
						accountMetas.sort(function (x, y) {
							const pubkeySorting = x.pubkey.toBase58().localeCompare(y.pubkey.toBase58());
							const checkSigner = x.isSigner === y.isSigner ? 0 : x.isSigner ? -1 : 1;
							const checkWritable = x.isWritable === y.isWritable ? pubkeySorting : x.isWritable ? -1 : 1;
							return checkSigner || checkWritable;
						});

						// Cull duplicate account metas
						const uniqueMetas = [];
						accountMetas.forEach(accountMeta => {
							const pubkeyString = accountMeta.pubkey.toString();
							const uniqueIndex = uniqueMetas.findIndex(x => {
								return x.pubkey.toString() === pubkeyString;
							});
							if (uniqueIndex > -1) {
								uniqueMetas[uniqueIndex].isWritable = uniqueMetas[uniqueIndex].isWritable || accountMeta.isWritable;
							} else {
								uniqueMetas.push(accountMeta);
							}
						});

						// Move fee payer to the front
						const feePayerIndex = uniqueMetas.findIndex(x => {
							return x.pubkey.equals(feePayer);
						});
						if (feePayerIndex > -1) {
							const [payerMeta] = uniqueMetas.splice(feePayerIndex, 1);
							payerMeta.isSigner = true;
							payerMeta.isWritable = true;
							uniqueMetas.unshift(payerMeta);
						} else {
							uniqueMetas.unshift({
								pubkey: feePayer,
								isSigner: true,
								isWritable: true,
							});
						}

						// Disallow unknown signers
						for (const signature of transaction.signatures) {
							const uniqueIndex = uniqueMetas.findIndex(x => {
								return x.pubkey.equals(signature.publicKey);
							});
							if (uniqueIndex > -1) {
								if (!uniqueMetas[uniqueIndex].isSigner) {
									uniqueMetas[uniqueIndex].isSigner = true;
									console.warn(
										'Transaction references a signature that is unnecessary, ' +
										'only the fee payer and instruction signer accounts should sign a transaction. ' +
										'This behavior is deprecated and will throw an error in the next major version release.',
									);
								}
							} else {
								throw new Error(`unknown signer: ${signature.publicKey.toString()}`);
							}
						}

						let numRequiredSignatures = 0;
						let numReadonlySignedAccounts = 0;
						let numReadonlyUnsignedAccounts = 0;

						// Split out signing from non-signing keys and count header values
						const signedKeys = [];
						const unsignedKeys = [];
						uniqueMetas.forEach(({pubkey, isSigner, isWritable}) => {
							addressBytes[pubkey.toString()] = pubkey.toBytes();
							if (isSigner) {
								signedKeys.push(pubkey.toString());
								numRequiredSignatures += 1;
								if (!isWritable) {
									numReadonlySignedAccounts += 1;
								}
							} else {
								unsignedKeys.push(pubkey.toString());
								if (!isWritable) {
									numReadonlyUnsignedAccounts += 1;
								}
							}
						});

						let accountKeys = signedKeys.concat(unsignedKeys);
						const instructions = transaction.instructions.map(instruction => {
							const {bs58EncodedData, programId} = instruction;
							return {
								programIdIndex: accountKeys.indexOf(programId.toString()),
								accounts: instruction.keys.map(meta =>
									accountKeys.indexOf(meta.pubkey.toString()),
								),
								data: bs58EncodedData,
							};
						});

						instructions.forEach(instruction => {
							invariant(instruction.programIdIndex >= 0);
							instruction.accounts.forEach(keyIndex => invariant(keyIndex >= 0));
						});

						accountKeys = accountKeys.map(account => {
							accountInBase58 = account;
							accountInBytes = addressBytes[account];
							return {
								toBase58: () => {
									return accountInBase58;
								},
								toBuffer: () => {
									return new Buffer(accountInBytes);
								},
								toBytes: () => {
									return accountInBytes;
								},
								toJSON: () => {
									return accountInBase58;
								},
								toLocaleString: () => {
									return accountInBase58;
								},
								toString: () => {
									return accountInBase58;
								},
								_bn: {},
								equals: (publicKey) => {
									return publicKey.toBase58() == accountInBase58;
								}
							}
						});
						let indexToProgramIds = new Map();
						instructions.forEach(ix => indexToProgramIds.set(ix.programIdIndex, accountKeys[ix.programIdIndex]));

						return {
							header: {
								numRequiredSignatures,
								numReadonlySignedAccounts,
								numReadonlyUnsignedAccounts,
							},
							accountKeys,
							recentBlockhash,
							instructions,
							indexToProgramIds,
							serialize: () => {
								polyfillLog("compileMessage().serialize()", true);
								return new Buffer(data.serializedMessage);
							},
							isAccountSigner: () => {
								polyfillLog("compileMessage().isAccountSigner()");
							},
							isAccountWritable: () => {
								polyfillLog("compileMessage().isAccountWritable()");
							},
							isProgramId: () => {
								polyfillLog("compileMessage().isProgramId()");
							},
							programIds: () => {
								polyfillLog("compileMessage().programIds()");
							},
							nonProgramIds: () => {
								polyfillLog("compileMessage().nonProgramIds()");
							}
						};
					},
					addSignature: (pubkey, signature) => {
						polyfillLog("addSignature()");
						transaction.signatures.push({
							publicKey: pubkey,
							signature: signature
						});
					},
					_compile: () => {
						polyfillLog("_compile()");
					}
				};
				Object.defineProperty(transaction, "signature", {
					get: () => {
						polyfillLog("signature");
						if(transaction.signatures.length > 0) {
							return transaction.signatures[0].signature;
						}
						return null;
					}
				})
				resolve(transaction);
			});
		}

		this.sendRaw = (data) => {
			return new Promise(async (resolve, reject) => {
				let persistData = {...data};
				if(data.preconfirm != null) {
					delete data.preconfirm;
				}
				let resolverToken = randomToken();
				let preconfirmToken = randomToken();
				let returnFunction = (event) => {
					if(event.origin !== "https://solpay.togatech.org") return;
					try {
						let data = event.data;
						if(data.request_type != "inner_request" && data.resolverToken == resolverToken) {
							if(data.error == null) {
								if(persistData.type == "connectWallet") {
									adapter = persistData.adapter;
									this.adapters.CURRENT_ADAPTER = adapter;
									this.adapters.current_adapter = adapter;
								} else if(persistData.type == "connectNetwork") {
									network = persistData.network;
									commitment = persistData.commitment;
								}
								resolve(data.result);
							} else {
								reject(data.error);
							}
							window.removeEventListener("message", returnFunction, false);
						}
					} catch(err) {
						reject(err);
					}
				}
				window.addEventListener("message", returnFunction, false);
				if(persistData.preconfirm != null && typeof persistData.preconfirm == "function") {
					let preconfirmFunction = (event) => {
						try {
							let data = event.data;
							if(data.preconfirmToken == preconfirmToken) {
								if(data.error == null) {
									persistData.preconfirm(data.result);
								}
								window.removeEventListener("message", preconfirmFunction, false);
							}
						} catch(err) {
						}
					}
					window.addEventListener("message", preconfirmFunction, false);
				}
				data.resolverToken = resolverToken;
				data.preconfirmToken = preconfirmToken;
				if(bridgeLoading == true) {
					awaitBridgeLoaded().then(() => {
						this.bridge.contentWindow.postMessage(data, "https://solpay.togatech.org");
					});
				} else {
					if(this.bridge == null || this.bridge.contentWindow == null) {
						createBridge(() => {
							this.bridge.contentWindow.postMessage(data, "https://solpay.togatech.org");
						});
					} else {
						this.bridge.contentWindow.postMessage(data, "https://solpay.togatech.org");
					}
				}
			});
		}

		this.addressToBytes = (address = null) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "addressToBytes", address: address}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.bs58 = {};

		this.bs58.encode = (source) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "bs58.encode", source: source}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.bs58.decode = (string) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "bs58.decode", string: string}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.bs58.decodeUnsafe = (source) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "bs58.decodeUnsafe", source: source}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.getRecentBlockhash = (commitment) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "getRecentBlockhash", commitment: commitment}).catch((err) => {
					reject(err);
				}));
			});
		}

		let connectWalletPhantom = () => {
			return new Promise(async (resolve, reject) => {
				if("solana" in window) {
					window.solana.connect().then((w) => {
						window.solana.on('disconnect', () => {
							this.wallet.isConnected = false;
							this.wallet.publicKey = undefined;
							_this.sendRaw({type: "nullifyWallet"});
						});
						this.wallet.publicKey = w.publicKey;
						this.wallet.isSolflare = false;
						this.wallet.isSlope = false;
						this.wallet.isGlow = false;
						this.wallet.isExodus = false;
						this.wallet.isBraveWallet = false;
						this.wallet.isPhantom = true;
						this.wallet.isConnected = true;
						resolve({address: w.publicKey.toBase58()});
					}).catch((err) => {
						reject("SOL Pay SDK Fatal Error: Could not connect to Solana wallet!");
					});
				} else {
					_this.sendRaw({type: "adapterInstall", adapter: _this.adapters.PHANTOM});
					reject("SOL Pay SDK Fatal Error: Solana wallet not found!");
				}
			});
		}

		let connectWalletSolflare = () => {
			return new Promise(async (resolve, reject) => {
				if("solflare" in window) {
					window.solflare.connect().then((w) => {
						if(w) {
							window.solflare.on('disconnect', () => {
								this.wallet.isConnected = false;
								this.wallet.publicKey = undefined;
								_this.sendRaw({type: "nullifyWallet"});
							});
							this.wallet.publicKey = window.solflare.publicKey;
							this.wallet.isPhantom = false;
							this.wallet.isSlope = false;
							this.wallet.isGlow = false;
							this.wallet.isExodus = false;
							this.wallet.isBraveWallet = false;
							this.wallet.isSolflare = true;
							this.wallet.isConnected = true;
							resolve({
								address: window.solflare.publicKey.toBase58()
							});
						} else {
							reject("SOL Pay SDK Fatal Error: Could not connect to Solana wallet!");
						}
					}).catch((err) => {
						reject("SOL Pay SDK Fatal Error: Could not connect to Solana wallet!");
					});
				} else {
					_this.sendRaw({type: "adapterInstall", adapter: _this.adapters.SOLFLARE});
					reject("SOL Pay SDK Fatal Error: Solana wallet not found!");
				}
			});
		}

		let slope;

		let connectWalletSlope = () => {
			return new Promise(async (resolve, reject) => {
				if("Slope" in window) {
					if(slope == null) {
						slope = new window.Slope();
					}
					slope.connect().then(async (w) => {
						if(w.msg == "ok" && w.data != null && w.data.publicKey != null) {
							let addressInBytes = await this.addressToBytes(w.data.publicKey);
							let addressInBase58 = w.data.publicKey;
							this.wallet.publicKey = {
								toBase58: () => {
									return addressInBase58;
								},
								toBuffer: () => {
									return new Buffer(addressInBytes);
								},
								toBytes: () => {
									return addressInBytes;
								},
								toJSON: () => {
									return addressInBase58;
								},
								toLocaleString: () => {
									return addressInBase58;
								},
								toString: () => {
									return addressInBase58;
								},
								_bn: {},
								equals: (publicKey) => {
									return publicKey.toBase58() == addressInBase58;
								}
							};
							this.wallet.isPhantom = false;
							this.wallet.isSolflare = false;
							this.wallet.isGlow = false;
							this.wallet.isExodus = false;
							this.wallet.isBraveWallet = false;
							this.wallet.isSlope = true;
							this.wallet.isConnected = true;
							resolve({
								address: w.data.publicKey
							});
						} else {
							reject("SOL Pay SDK Fatal Error: Could not connect to Solana wallet!");
						}
					}).catch((err) => {
						reject("SOL Pay SDK Fatal Error: Could not connect to Solana wallet!");
					});
				} else {
					_this.sendRaw({type: "adapterInstall", adapter: _this.adapters.SLOPE});
					reject("SOL Pay SDK Fatal Error: Solana wallet not found!");
				}
			});
		}

		let connectWalletGlow = () => {
			return new Promise(async (resolve, reject) => {
				if("glowSolana" in window) {
					window.glowSolana.connect().then((w) => {
						window.glowSolana.on('disconnect', () => {
							this.wallet.isConnected = false;
							this.wallet.publicKey = undefined;
							_this.sendRaw({type: "nullifyWallet"});
						});
						this.wallet.publicKey = w.publicKey;
						this.wallet.isPhantom = false;
						this.wallet.isSolflare = false;
						this.wallet.isSlope = false;
						this.wallet.isExodus = false;
						this.wallet.isBraveWallet = false;
						this.wallet.isGlow = true;
						this.wallet.isConnected = true;
						resolve({address: w.publicKey.toBase58()});
					}).catch((err) => {
						reject("SOL Pay SDK Fatal Error: Could not connect to Solana wallet!");
					});
				} else {
					_this.sendRaw({type: "adapterInstall", adapter: _this.adapters.GLOW});
					reject("SOL Pay SDK Fatal Error: Solana wallet not found!");
				}
			});
		}

		let connectWalletExodus = () => {
			return new Promise(async (resolve, reject) => {
				if("exodus" in window && window.exodus.solana != null) {
					window.exodus.solana.connect().then((w) => {
						window.exodus.solana.on('disconnect', () => {
							this.wallet.isConnected = false;
							this.wallet.publicKey = undefined;
							_this.sendRaw({type: "nullifyWallet"});
						});
						this.wallet.publicKey = w.publicKey;
						this.wallet.isPhantom = false;
						this.wallet.isSolflare = false;
						this.wallet.isSlope = false;
						this.wallet.isGlow = false;
						this.wallet.isBraveWallet = false;
						this.wallet.isExodus = true;
						this.wallet.isConnected = true;
						resolve({address: w.publicKey.toBase58()});
					}).catch((err) => {
						reject("SOL Pay SDK Fatal Error: Could not connect to Solana wallet!");
					});
				} else {
					_this.sendRaw({type: "adapterInstall", adapter: _this.adapters.EXODUS});
					reject("SOL Pay SDK Fatal Error: Solana wallet not found!");
				}
			});
		}

		let connectWalletBrave = () => {
			return new Promise(async (resolve, reject) => {
				if("braveSolana" in window) {
					window.solana.connect().then((w) => {
						window.solana.on('disconnect', () => {
							this.wallet.isConnected = false;
							this.wallet.publicKey = undefined;
							_this.sendRaw({type: "nullifyWallet"});
						});
						this.wallet.publicKey = w.publicKey;
						this.wallet.isPhantom = false;
						this.wallet.isSolflare = false;
						this.wallet.isSlope = false;
						this.wallet.isGlow = false;
						this.wallet.isExodus = false;
						this.wallet.isBraveWallet = true;
						this.wallet.isConnected = true;
						resolve({address: w.publicKey.toBase58()});
					}).catch((err) => {
						reject("SOL Pay SDK Fatal Error: Could not connect to Solana wallet!");
					});
				} else {
					_this.sendRaw({type: "adapterInstall", adapter: _this.adapters.BRAVE});
					reject("SOL Pay SDK Fatal Error: Solana wallet not found!");
				}
			});
		}

		window.addEventListener("message", async (event) => {
			if(event.origin !== "https://solpay.togatech.org") return;
			try {
				let data = event.data;
				if(data.type == "phantom") {
					if(data.command == "connect") {
						connectWalletPhantom().then((res) => {
							send(res, data.resolverToken);
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signTransaction") {
						connectWalletPhantom().then(async () => {
							let transaction = await transactionPolyfill(data);
							window.solana.signTransaction(transaction).then(async (signedTransaction) => {
								send({signature: signedTransaction.signatures[0].signature}, data.resolverToken);
							}).catch((err) => {
								console.error(err);
								error("SOL Pay SDK Fatal Error: Unable to sign transaction.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signMessage") {
						connectWalletPhantom().then(() => {
							window.solana.signMessage(data.encodedMessage, "utf8").then(async (signed) => {
								send({
									signature: signed.signature
								}, data.resolverToken);
							}).catch((err) => {
								error("SOL Pay SDK Fatal Error: Unable to sign message.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					}
				} else if(data.type == "solflare") {
					if(data.command == "connect") {
						connectWalletSolflare().then((res) => {
							send(res, data.resolverToken);
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signTransaction") {
						connectWalletSolflare().then(async () => {
							let transaction = await transactionPolyfill(data);
							window.solflare.signTransaction(transaction).then(async (signedTransaction) => {
								send({signature: signedTransaction.signatures[0].signature}, data.resolverToken);
							}).catch((err) => {
								console.error(err);
								error("SOL Pay SDK Fatal Error: Unable to sign transaction.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signMessage") {
						connectWalletSolflare().then(() => {
							window.solflare.signMessage(data.encodedMessage, "utf8").then(async (signed) => {
								send({
									signature: signed.signature
								}, data.resolverToken);
							}).catch((err) => {
								error("SOL Pay SDK Fatal Error: Unable to sign message.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					}
				} else if(data.type == "slope") {
					if(data.command == "connect") {
						connectWalletSlope().then((res) => {
							send(res, data.resolverToken);
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signTransaction") {
						connectWalletSlope().then(() => {
							slope.signTransaction(data.serializedMessage).then(async (signedTransaction) => {
								try {
									if(signedTransaction.msg == "ok" && signedTransaction.data != null && signedTransaction.data.signature != null) {
										send({signature: signedTransaction.data.signature}, data.resolverToken);
									} else {
										error("SOL Pay SDK Fatal Error: Unable to sign transaction.", data.resolverToken);
									}
								} catch(err) {
									console.error(err);
									error("SOL Pay SDK Fatal Error: Unable to sign transaction.", data.resolverToken);
								}
							}).catch((err) => {
								console.error(err);
								error("SOL Pay SDK Fatal Error: Unable to sign transaction.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signMessage") {
						connectWalletSlope().then(() => {
							slope.signMessage(data.encodedMessage).then(async (signed) => {
								try {
									if(signed.msg == "ok" && signed.data != null) {
										send({
											signature: signed.data.signature
										}, data.resolverToken);
									} else {
										error("SOL Pay SDK Fatal Error: Unable to sign message.", data.resolverToken);
									}
								} catch(err) {
									error("SOL Pay SDK Fatal Error: Unable to sign message.", data.resolverToken);
								}
							}).catch((err) => {
								error("SOL Pay SDK Fatal Error: Unable to sign message.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					}
				} else if(data.type == "glow") {
					if(data.command == "connect") {
						connectWalletGlow().then((res) => {
							send(res, data.resolverToken);
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signTransaction") {
						connectWalletGlow().then(async () => {
							let transaction = await transactionPolyfill(data);
							window.glowSolana.signTransaction(transaction, network).then(async (signedTransaction) => {
								send({signature: signedTransaction.signatures[0].signature}, data.resolverToken);
							}).catch((err) => {
								console.error(err);
								error("SOL Pay SDK Fatal Error: Unable to sign transaction.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signMessage") {
						connectWalletGlow().then(() => {
							window.glowSolana.signMessage(data.encodedMessage).then(async (signed) => {
								send({
									signature: signed.signature
								}, data.resolverToken);
							}).catch((err) => {
								error("SOL Pay SDK Fatal Error: Unable to sign message.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					}
				} else if(data.type == "exodus") {
					if(data.command == "connect") {
						connectWalletExodus().then((res) => {
							send(res, data.resolverToken);
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signTransaction") {
						connectWalletExodus().then(async () => {
							let transaction = await transactionPolyfill(data);
							window.exodus.solana.signTransaction(transaction).then(async (signedTransaction) => {
								send({signature: signedTransaction.signatures[0].signature}, data.resolverToken);
							}).catch((err) => {
								console.error(err);
								error("SOL Pay SDK Fatal Error: Unable to sign transaction.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signMessage") {
						connectWalletExodus().then(() => {
							window.exodus.solana.signMessage(data.encodedMessage).then(async (signed) => {
								send({
									signature: signed.signature
								}, data.resolverToken);
							}).catch((err) => {
								error("SOL Pay SDK Fatal Error: Unable to sign message.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					}
				} else if(data.type == "brave") {
					if(data.command == "connect") {
						connectWalletBrave().then((res) => {
							send(res, data.resolverToken);
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signTransaction") {
						connectWalletBrave().then(async () => {
							let transaction = await transactionPolyfill(data);
							window.braveSolana.signTransaction(transaction).then(async (signedTransaction) => {
								send({signature: signedTransaction.signatures[0].signature}, data.resolverToken);
							}).catch((err) => {
								console.error(err);
								error("SOL Pay SDK Fatal Error: Unable to sign transaction.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					} else if(data.command == "signMessage") {
						connectWalletBrave().then(() => {
							window.braveSolana.signMessage(data.encodedMessage, "utf8").then(async (signed) => {
								send({
									signature: signed.signature
								}, data.resolverToken);
							}).catch((err) => {
								error("SOL Pay SDK Fatal Error: Unable to sign message.", data.resolverToken);
							});
						}).catch((err) => {
							error(err, data.resolverToken);
						});
					}
				}
			} catch(err) {
				return;
			}
		});

		this.connectWallet = (adapter = this.adapters.CURRENT_ADAPTER || this.adapters.PHANTOM) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "connectWallet", adapter: adapter}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.connectNetwork = (network = "https://solana-api.projectserum.com", commitment = "confirmed") => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "connectNetwork", network: network, commitment: commitment}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.sendSolana = (address, amount, preconfirm = (details) => {}) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendSolanaLamports(address, Math.round(amount * ONE_BILLION), preconfirm).catch((err) => {
					reject(err);
				}));
			});
		}

		this.sendSolanaLamports = (address, lamports, preconfirm = (details) => {}) => {
			return new Promise(async (resolve, reject) => {
				this.signTransaction([{
					type: "solana_transfer",
					data: {
						address: address,
						lamports: lamports
					}
				}]).then(async (signed_tx) => {
					try {
						if(typeof preconfirm != "function") {
							preconfirm = (details) => {};
						}
						let res = preconfirm({
							from: signed_tx.from,
							to: address,
							lamports: lamports,
							signature: signed_tx.signature
						});
						if(res instanceof Promise) {
							await res;
						}
						this.broadcastSerializedTransaction(signed_tx.serialized_transaction).then((transaction) => {
							resolve({
								from: signed_tx.from,
								to: address,
								lamports: lamports,
								signature: transaction.signature
							});
						}).catch((err) => {
							reject(err);
						});
					} catch(err) {
						reject(`SOL Pay SDK Fatal Error: The preconfirm function returned an error, halting the transaction from being sent: ${err}`);
					}
				}).catch((err) => {
					reject(err);
				});
			});
		}

		this.sendTokens = (address, amount, token_address, preconfirm = (details) => {}) => {
			return new Promise(async (resolve, reject) => {
				this.signTransaction([{
					type: "spl_token_transfer",
					data: {
						token_address: token_address,
						address: address,
						amount: amount
					}
				}]).then(async (signed_tx) => {
					try {
						if(typeof preconfirm != "function") {
							preconfirm = (details) => {};
						}
						let res = preconfirm({
							from: signed_tx.from,
							to: address,
							amount: amount,
							token_address: token_address,
							signature: signed_tx.signature
						});
						if(res instanceof Promise) {
							await res;
						}
						this.broadcastSerializedTransaction(signed_tx.serialized_transaction).then((transaction) => {
							resolve({
								from: signed_tx.from,
								to: address,
								amount: amount,
								token_address: token_address,
								signature: transaction.signature
							});
						}).catch((err) => {
							reject(err);
						});
					} catch(err) {
						reject(`SOL Pay SDK Fatal Error: The preconfirm function returned an error, halting the transaction from being sent: ${err}`);
					}
				}).catch((err) => {
					reject(err);
				});
			});
		}

		this.sendTokensDecimal = (address, amount_decimal, token_address, preconfirm = (details) => {}) => {
			return new Promise(async (resolve, reject) => {
				this.signTransaction([{
					type: "spl_token_transfer",
					data: {
						token_address: token_address,
						address: address,
						amount_decimal: amount_decimal
					}
				}]).then(async (signed_tx) => {
					try {
						if(typeof preconfirm != "function") {
							preconfirm = (details) => {};
						}
						let res = preconfirm({
							from: signed_tx.from,
							to: address,
							amount_decimal: amount_decimal,
							token_address: token_address,
							signature: signed_tx.signature
						});
						if(res instanceof Promise) {
							await res;
						}
						this.broadcastSerializedTransaction(signed_tx.serialized_transaction).then((transaction) => {
							resolve({
								from: signed_tx.from,
								to: address,
								amount_decimal: amount_decimal,
								token_address: token_address,
								signature: transaction.signature
							});
						}).catch((err) => {
							reject(err);
						});
					} catch(err) {
						reject(`SOL Pay SDK Fatal Error: The preconfirm function returned an error, halting the transaction from being sent: ${err}`);
					}
				}).catch((err) => {
					reject(err);
				});
			});
		}

		this.signTransaction = (transfers) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "signTransaction", transfers: transfers}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.broadcastSerializedTransaction = (serialized_transaction) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "broadcastSerializedTransaction", serializedTransaction: serialized_transaction}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.signMessage = (message) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "signMessage", message: message}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.getBalance = (address = null) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "getBalance", address: address}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.getTokenBalances = (address = null) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "getTokenBalances", address: address}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.getAccountInfo = (address = null) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "getAccountInfo", address: address}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.getAssociatedTokenAddress = (token_address, address = null) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "getAssociatedTokenAddress", tokenAddress: token_address, address: address}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.getTokenBalance = (token_address, address = null) => {
			return new Promise(async (resolve, reject) => {
				this.getAssociatedTokenAddress(token_address, address).then((associatedAddress) => {
					this.getAccountInfo(associatedAddress.address).then((accountInfo) => {
						if(accountInfo.lamports == null) {
							accountInfo.lamports = 0;
						}
						if(accountInfo.info == null) {
							accountInfo.info = {};
						}
						if(accountInfo.info.tokenAmount == null) {
							accountInfo.info.tokenAmount = {
								amount: "0",
								decimals: 0,
								uiAmount: 0,
								uiAmountString: "0"
							};
						}
						resolve({
							account: {
								address: associatedAddress.address,
								lamports: accountInfo.lamports
							},
							token: {
								balance: accountInfo.info.tokenAmount
							},
							raw_data: accountInfo
						})
					}).catch((err) => {
						reject(err);
					});
				}).catch((err) => {
					reject(err);
				});
			});
		}

		this.getStakeAccounts = (address = null) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "getStakeAccounts", address: address}).catch((err) => {
					reject(err);
				}));
			});
			
		}

		this.streamLamports = (address, lamportsPerSecond, refillLamports = 10 ** 7, thresholdLamports = 10 ** 5) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "streamLamports", address: address, lamportsPerSecond: lamportsPerSecond, refillLamports: refillLamports, thresholdLamports: thresholdLamports}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.streamTokensDecimal = (address, tokensDecimalPerSecond, refillTokensDecimal = 1, refillLamports = (5 * 10 ** 5), thresholdTokensDecimal = 10 ** (-2)) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "streamTokensDecimal", address: address, tokensDecimalPerSecond: tokensDecimalPerSecond, refillTokensDecimal: refillTokensDecimal, refillLamports: refillLamports, thresholdTokensDecimal: thresholdTokensDecimal}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.getStreamDetails = (stream) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "getStreamDetails", stream: stream}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.refillStream = (stream) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "refillStream", stream: stream}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.pauseStream = (stream) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "pauseStream", stream: stream}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.resumeStream = (stream) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "resumeStream", stream: stream}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.closeStream = (stream) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "closeStream", stream: stream}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.backupStreamWallet = () => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "backupStreamWallet"}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.stakePool = {};
		
		this.stakePool.depositLamports = (lamports, referral_account = undefined, pool = undefined) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "stakePool.depositLamports", lamports: lamports, referral_account: referral_account, pool: pool}).catch((err) => {
					reject(err);
				}));
			});
		}
		this.stakePool.withdrawDecimal = (amount_decimal, pool = undefined) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "stakePool.withdrawDecimal", amount_decimal: amount_decimal, pool: pool}).catch((err) => {
					reject(err);
				}));
			});
		}
		this.stakePool.withdrawStakeDecimal = (amount_decimal, pool = undefined, useReserve = false) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "stakePool.withdrawStakeDecimal", amount_decimal: amount_decimal, pool: pool, useReserve: useReserve}).catch((err) => {
					reject(err);
				}));
			});
		}
		this.stakePool.info = (pool = undefined) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "stakePool.info", pool: pool}).catch((err) => {
					reject(err);
				}));
			});
		}
		
		this.tokens = {};

		this.tokens.getData = (address) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "tokens.getData", address: address}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.tokens.getTags = () => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "tokens.getTags"}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.tokens.getToken = (address, skip_validation = false) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "tokens.getToken", address: address, skipValidation: skip_validation}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.tokens.search = (search, param, compare_type = "equals", skip_validation = false) => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "tokens.search", search: search, param: param, compareType: compare_type, skipValidation: skip_validation}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.tokens.getRawUnvalidatedList = () => {
			return new Promise(async (resolve, reject) => {
				resolve(await this.sendRaw({type: "tokens.getRawUnvalidatedList"}).catch((err) => {
					reject(err);
				}));
			});
		}

		this.wallet = {
			isConnected: false,
			isPhantom: false,
			isSolflare: false,
			isSlope: false,
			isGlow: false,
			isExodus: false,
			publicKey: undefined
		};

		this.wallet.signTransaction = (transaction) => {
			return new Promise(async (resolve, reject) => {
				if(this.wallet.isConnected) {
					transaction.feePayer = transaction.feePayer || this.wallet.publicKey || undefined;
					transaction.recentBlockhash = transaction.recentBlockhash || (await this.getRecentBlockhash('finalized')).blockhash;
					if(this.wallet.isPhantom) {
						connectWalletPhantom().then(async () => {
							window.solana.signTransaction(transaction).then(async (signedTransaction) => {
								resolve(signedTransaction);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign transaction.");
							})
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isSolflare) {
						connectWalletSolflare().then(async () => {
							window.solflare.signTransaction(transaction).then(async (signedTransaction) => {
								resolve(transaction);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign transaction.");
							})
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isSlope) {
						connectWalletSlope().then(async () => {
							slope.signTransaction(await this.bs58.encode(transaction.serializeMessage())).then(async (signedTransaction) => {
								try {
									if(signedTransaction.msg == "ok" && signedTransaction.data != null && signedTransaction.data.signature != null) {
										transaction.addSignature(this.wallet.publicKey, await this.bs58.decode(signedTransaction.data.signature));
										resolve(transaction);
									} else {
										reject("SOL Pay SDK Fatal Error: Unable to sign transaction.");
									}
								} catch(err) {
									reject("SOL Pay SDK Fatal Error: Unable to sign transaction.");
								}
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign transaction.");
							});
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isGlow) {
						connectWalletGlow().then(() => {
							window.glowSolana.signTransaction(transaction).then(async (signedTransaction) => {
								resolve(signedTransaction);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign transaction.");
							})
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isExodus) {
						connectWalletExodus().then(async () => {
							window.exodus.solana.signTransaction(transaction).then(async (signedTransaction) => {
								resolve(signedTransaction);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign transaction.");
							})
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isBraveWallet) {
						connectWalletPhantom().then(async () => {
							window.braveSolana.signTransaction(transaction).then(async (signedTransaction) => {
								resolve(signedTransaction);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign transaction.");
							})
						}).catch((err) => {
							reject(err);
						});
					}
				} else {
					reject("SOL Pay SDK Fatal Error: No wallet connection found. Use SOLPay.connectWallet() to connect to a Solana wallet.");
				}
			});
		}

		this.wallet.signAllTransactions = (transactions) => {
			return new Promise(async (resolve, reject) => {
				let signedTransactions = [];
				for(let i = 0; i < transactions.length; i++) {
					signedTransactions.push(await this.wallet.signTransaction(transactions[i]));
				}
				resolve(signedTransactions);
			});
		}

		this.wallet.signMessage = (message) => {
			return new Promise(async (resolve, reject) => {
				if(this.wallet.isConnected) {
					let encodedMessage = (new TextEncoder()).encode(message);
					if(this.wallet.isPhantom) {
						connectWalletPhantom().then(() => {
							window.solana.signMessage(encodedMessage, "utf8").then(async (signed) => {
								resolve(signed.signature);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign message.");
							});
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isSolflare) {
						connectWalletSolflare().then(() => {
							window.solflare.signMessage(encodedMessage, "utf8").then(async (signed) => {
								resolve(signed.signature);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign message.");
							});
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isSlope) {
						connectWalletSlope().then(() => {
							slope.signMessage(encodedMessage).then(async (signed) => {
								try {
									if(signed.msg == "ok" && signed.data != null) {
										resolve(await this.bs58.decode(signed.data.signature));
									} else {
										reject("SOL Pay SDK Fatal Error: Unable to sign message.");
									}
								} catch(err) {
									reject("SOL Pay SDK Fatal Error: Unable to sign message.");
								}
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign message.");
							});
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isGlow) {
						connectWalletGlow().then(() => {
							window.glowSolana.signMessage(encodedMessage).then(async (signed) => {
								resolve(signed.signature);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign message.");
							});
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isExodus) {
						connectWalletExodus().then(() => {
							window.exodus.solana.signMessage(encodedMessage).then(async (signed) => {
								resolve(signed.signature);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign message.");
							});
						}).catch((err) => {
							reject(err);
						});
					} else if(this.wallet.isBraveWallet) {
						connectWalletBrave().then(() => {
							window.braveSolana.signMessage(encodedMessage, "utf8").then(async (signed) => {
								resolve(signed.signature);
							}).catch((err) => {
								reject("SOL Pay SDK Fatal Error: Unable to sign message.");
							});
						}).catch((err) => {
							reject(err);
						});
					}
				} else {
					reject("SOL Pay SDK Fatal Error: No wallet connection found. Use SOLPay.connectWallet() to connect to a Solana wallet.");
				}
			});
		}

		this.wallet.disconnect = () => {
			return new Promise(async (resolve, reject) => {
				if(this.wallet.isPhantom) {
					window.solana.disconnect().then(async (res) => {
						this.wallet.isConnected = false;
						this.wallet.publicKey = undefined;
						await this.sendRaw({type: "nullifyWallet"});
						resolve();
					}).catch((err) => {
						reject(err);
					});
				} else if(this.wallet.isSolflare) {
					window.solflare.disconnect().then(async (res) => {
						this.wallet.isConnected = false;
						this.wallet.publicKey = undefined;
						await this.sendRaw({type: "nullifyWallet"});
						resolve();
					}).catch((err) => {
						reject(err);
					});
				} else if(this.wallet.isSlope) {
					slope.disconnect().then(async (res) => {
						if(res.msg == "ok") {
							this.wallet.isConnected = false;
							this.wallet.publicKey = undefined;
							await this.sendRaw({type: "nullifyWallet"});
							resolve();
						} else {
							reject("SOL Pay SDK Fatal Error: Unable to disconnect wallet.");
						}
					}).catch((err) => {
						reject(err);
					});
				} else if(this.wallet.isGlow) {
					window.glowSolana.disconnect().then(async (res) => {
						this.wallet.isConnected = false;
						this.wallet.publicKey = undefined;
						await this.sendRaw({type: "nullifyWallet"});
						resolve();
					}).catch((err) => {
						reject(err);
					});
				} else if(this.wallet.isExodus) {
					window.exodus.solana.disconnect()
					this.wallet.isConnected = false;
					this.wallet.publicKey = undefined;
					await this.sendRaw({type: "nullifyWallet"});
					resolve();
				} else if(this.wallet.isBraveWallet) {
					window.braveSolana.disconnect()
					this.wallet.isConnected = false;
					this.wallet.publicKey = undefined;
					await this.sendRaw({type: "nullifyWallet"});
					resolve();
				}
			});
		}

		this.adapters = {
			phantom: "PHANTOM",
			solflare: "SOLFLARE",
			slope: "SLOPE",
			glow: "GLOW",
			exodus: "EXODUS",
			brave: "BRAVE",
			PHANTOM: "PHANTOM",
			SOLFLARE: "SOLFLARE",
			SLOPE: "SLOPE",
			GLOW: "GLOW",
			EXODUS: "EXODUS",
			BRAVE: "BRAVE"
		};

		this.networks = {
			mainnet: {
				SOLANA: "https://api.mainnet-beta.solana.com",
				SERUM: "https://solana-api.projectserum.com",
				TRITON: "https://free.rpcpool.com",
				PHANTOM: "https://solana-mainnet.phantom.tech",
				GENESYSGO: "https://ssc-dao.genesysgo.net",
				SOLANAPAY: "https://solanapay.genesysgo.net"
			},
			devnet: {
				SOLANA: "https://api.devnet.solana.com"
			},
			testnet: {
				SOLANA: "https://api.testnet.solana.com"
			}
		};

		this.constants = {
			LAMPORTS_PER_SOL: 1000000000
		};
	}

	return new SOLPaySDK();
})();