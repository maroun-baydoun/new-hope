/*! For license information please see 679b5d0d1deb0f0fa200.bundle.js.LICENSE.txt */
(self.webpackChunkgh_page_template=self.webpackChunkgh_page_template||[]).push([[981],{1530:function(e,t,n){"use strict";var r=n(8710).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9670:function(e,t,n){var r=n(111);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},1318:function(e,t,n){var r=n(5656),a=n(7466),i=n(1400),o=function(e){return function(t,n,o){var s,u=r(t),c=a(u.length),l=i(o,c);if(e&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4326:function(e){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},9920:function(e,t,n){var r=n(6656),a=n(3887),i=n(1236),o=n(3070);e.exports=function(e,t){for(var n=a(t),s=o.f,u=i.f,c=0;c<n.length;c++){var l=n[c];r(e,l)||s(e,l,u(t,l))}}},8880:function(e,t,n){var r=n(9781),a=n(3070),i=n(9114);e.exports=r?function(e,t,n){return a.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),a=n(111),i=r.document,o=a(i)&&a(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),a=n(1236).f,i=n(8880),o=n(1320),s=n(3505),u=n(9920),c=n(4705);e.exports=function(e,t){var n,l,f,p,d,g=e.target,h=e.global,v=e.stat;if(n=h?r:v?r[g]||s(g,{}):(r[g]||{}).prototype)for(l in t){if(p=t[l],f=e.noTargetGet?(d=a(n,l))&&d.value:n[l],!c(h?l:g+(v?".":"#")+l,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(e.sham||f&&f.sham)&&i(p,"sham",!0),o(n,l,p,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(e){return!0}}},7007:function(e,t,n){"use strict";n(4916);var r=n(1320),a=n(7293),i=n(5112),o=n(2261),s=n(8880),u=i("species"),c=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l="$0"==="a".replace(/./,"$0"),f=i("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),d=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var g=i(e),h=!a((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),v=h&&!a((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!h||!v||"replace"===e&&(!c||!l||p)||"split"===e&&!d){var m=/./[g],b=n(g,""[e],(function(e,t,n,r,a){return t.exec===o?h&&!a?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),S=b[0],y=b[1];r(String.prototype,e,S),r(RegExp.prototype,g,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}f&&s(RegExp.prototype[g],"sham",!0)}},5005:function(e,t,n){var r=n(857),a=n(7854),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(a[e]):r[e]&&r[e][t]||a[e]&&a[e][t]}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(e){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),a=n(7293),i=n(317);e.exports=!r&&!a((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7293),a=n(4326),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?i.call(e,""):Object(e)}:Object},2788:function(e,t,n){var r=n(5465),a=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return a.call(e)}),e.exports=r.inspectSource},9909:function(e,t,n){var r,a,i,o=n(8536),s=n(7854),u=n(111),c=n(8880),l=n(6656),f=n(5465),p=n(6200),d=n(3501),g=s.WeakMap;if(o){var h=f.state||(f.state=new g),v=h.get,m=h.has,b=h.set;r=function(e,t){return t.facade=e,b.call(h,e,t),t},a=function(e){return v.call(h,e)||{}},i=function(e){return m.call(h,e)}}else{var S=p("state");d[S]=!0,r=function(e,t){return t.facade=e,c(e,S,t),t},a=function(e){return l(e,S)?e[S]:{}},i=function(e){return l(e,S)}}e.exports={set:r,get:a,has:i,enforce:function(e){return i(e)?a(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!u(t)||(n=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},4705:function(e,t,n){var r=n(7293),a=/#|\.prototype\./,i=function(e,t){var n=s[o(e)];return n==c||n!=u&&("function"==typeof t?r(t):!!t)},o=i.normalize=function(e){return String(e).replace(a,".").toLowerCase()},s=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";e.exports=i},111:function(e){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},1913:function(e){e.exports=!1},133:function(e,t,n){var r=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},8536:function(e,t,n){var r=n(7854),a=n(2788),i=r.WeakMap;e.exports="function"==typeof i&&/native code/.test(a(i))},3070:function(e,t,n){var r=n(9781),a=n(4664),i=n(9670),o=n(7593),s=Object.defineProperty;t.f=r?s:function(e,t,n){if(i(e),t=o(t,!0),i(n),a)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),a=n(5296),i=n(9114),o=n(5656),s=n(7593),u=n(6656),c=n(4664),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=o(e),t=s(t,!0),c)try{return l(e,t)}catch(e){}if(u(e,t))return i(!a.f.call(e,t),e[t])}},8006:function(e,t,n){var r=n(6324),a=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},6324:function(e,t,n){var r=n(6656),a=n(5656),i=n(1318).indexOf,o=n(3501);e.exports=function(e,t){var n,s=a(e),u=0,c=[];for(n in s)!r(o,n)&&r(s,n)&&c.push(n);for(;t.length>u;)r(s,n=t[u++])&&(~i(c,n)||c.push(n));return c}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,a=r&&!n.call({1:2},1);t.f=a?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},3887:function(e,t,n){var r=n(5005),a=n(8006),i=n(5181),o=n(9670);e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(o(e)),n=i.f;return n?t.concat(n(e)):t}},857:function(e,t,n){var r=n(7854);e.exports=r},1320:function(e,t,n){var r=n(7854),a=n(8880),i=n(6656),o=n(3505),s=n(2788),u=n(9909),c=u.get,l=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,s){var u,c=!!s&&!!s.unsafe,p=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof t||i(n,"name")||a(n,"name",t),(u=l(n)).source||(u.source=f.join("string"==typeof t?t:""))),e!==r?(c?!d&&e[t]&&(p=!0):delete e[t],p?e[t]=n:a(e,t,n)):p?e[t]=n:o(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||s(this)}))},7651:function(e,t,n){var r=n(4326),a=n(2261);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},2261:function(e,t,n){"use strict";var r,a,i=n(7066),o=n(2999),s=RegExp.prototype.exec,u=String.prototype.replace,c=s,l=(r=/a/,a=/b*/g,s.call(r,"a"),s.call(a,"a"),0!==r.lastIndex||0!==a.lastIndex),f=o.UNSUPPORTED_Y||o.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(l||p||f)&&(c=function(e){var t,n,r,a,o=this,c=f&&o.sticky,d=i.call(o),g=o.source,h=0,v=e;return c&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),v=String(e).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==e[o.lastIndex-1])&&(g="(?: "+g+")",v=" "+v,h++),n=new RegExp("^(?:"+g+")",d)),p&&(n=new RegExp("^"+g+"$(?!\\s)",d)),l&&(t=o.lastIndex),r=s.call(c?n:o,v),c?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=o.lastIndex,o.lastIndex+=r[0].length):o.lastIndex=0:l&&r&&(o.lastIndex=o.global?r.index+r[0].length:t),p&&r&&r.length>1&&u.call(r[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(r[a]=void 0)})),r}),e.exports=c},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:function(e,t,n){"use strict";var r=n(7293);function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},4488:function(e){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),a=n(8880);e.exports=function(e,t){try{a(r,e,t)}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),a=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=a(e))}},5465:function(e,t,n){var r=n(7854),a=n(3505),i="__core-js_shared__",o=r[i]||a(i,{});e.exports=o},2309:function(e,t,n){var r=n(1913),a=n(5465);(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.8.1",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},8710:function(e,t,n){var r=n(9958),a=n(4488),i=function(e){return function(t,n){var i,o,s=String(a(t)),u=r(n),c=s.length;return u<0||u>=c?e?"":void 0:(i=s.charCodeAt(u))<55296||i>56319||u+1===c||(o=s.charCodeAt(u+1))<56320||o>57343?e?s.charAt(u):i:e?s.slice(u,u+2):o-56320+(i-55296<<10)+65536}};e.exports={codeAt:i(!1),charAt:i(!0)}},1400:function(e,t,n){var r=n(9958),a=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?a(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),a=n(4488);e.exports=function(e){return r(a(e))}},9958:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},7466:function(e,t,n){var r=n(9958),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488);e.exports=function(e){return Object(r(e))}},7593:function(e,t,n){var r=n(111);e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},9711:function(e){var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,n){var r=n(7854),a=n(2309),i=n(6656),o=n(9711),s=n(133),u=n(3307),c=a("wks"),l=r.Symbol,f=u?l:l&&l.withoutSetter||o;e.exports=function(e){return i(c,e)||(s&&i(l,e)?c[e]=l[e]:c[e]=f("Symbol."+e)),c[e]}},4916:function(e,t,n){"use strict";var r=n(2109),a=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},5306:function(e,t,n){"use strict";var r=n(7007),a=n(9670),i=n(7908),o=n(7466),s=n(9958),u=n(4488),c=n(1530),l=n(7651),f=Math.max,p=Math.min,d=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=r.REPLACE_KEEPS_$0,b=v?"$":"$0";return[function(n,r){var a=u(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!v&&m||"string"==typeof r&&-1===r.indexOf(b)){var i=n(t,e,this,r);if(i.done)return i.value}var u=a(e),d=String(this),g="function"==typeof r;g||(r=String(r));var h=u.global;if(h){var y=u.unicode;u.lastIndex=0}for(var x=[];;){var E=l(u,d);if(null===E)break;if(x.push(E),!h)break;""===String(E[0])&&(u.lastIndex=c(d,o(u.lastIndex),y))}for(var O,A="",k=0,_=0;_<x.length;_++){E=x[_];for(var w=String(E[0]),P=f(p(s(E.index),d.length),0),F=[],I=1;I<E.length;I++)F.push(void 0===(O=E[I])?O:String(O));var T=E.groups;if(g){var N=[w].concat(F,P,d);void 0!==T&&N.push(T);var R=String(r.apply(void 0,N))}else R=S(w,d,P,F,T,r);P>=k&&(A+=d.slice(k,P)+R,k=P+w.length)}return A+d.slice(k)}];function S(e,n,r,a,o,s){var u=r+e.length,c=a.length,l=h;return void 0!==o&&(o=i(o),l=g),t.call(s,l,(function(t,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":s=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>c){var f=d(l/10);return 0===f?t:f<=c?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):t}s=a[l-1]}return void 0===s?"":s}))}}))},9741:function(e){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tokenize=t.split=void 0;var r=n(1);Object.defineProperty(t,"split",{enumerable:!0,get:function(){return r.split}});var a=n(2);Object.defineProperty(t,"tokenize",{enumerable:!0,get:function(){return a.tokenize}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.split=void 0,t.split=function(e){return e.split(/[" " | . | , | ; | : | ? | ! | ( | )]/).map((function(e){return e.toLowerCase().trim()})).filter((function(e){return""!==e}))}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.tokenize=void 0,t.tokenize=function(e){return e.map((function(e){return a(e)}))};var a=function(e){var t=function(e,n){var a=n?r(r({},n),{stem:e}):{value:e,stem:e};return m(e)?r(r({},a),{partOfSpeech:"numeral"}):o(e)?r(r({},a),{partOfSpeech:"article"}):d(e)?r(r({},a),{partOfSpeech:"personalPronoun",case:a.case||"nominative"}):g(e)?r(r({},a),{partOfSpeech:"possessivePronoun",case:a.case||"nominative",number:a.number||"singular"}):h(e)?r(r({},a),{partOfSpeech:"conjunction"}):v(e)?r(r({},a),{partOfSpeech:"preposition"}):s(e)?t(A(e),r(r({},a),{case:"accusative"})):u(e)?t(A(e),r(r({},a),{number:"plural"})):l(e)?t(A(e,3)+"o",r(r({},a),{gender:"feminine"})):c(e)?r(r({},a),{number:a.number||"singular",case:a.case||"nominative",gender:a.gender||"masculine",partOfSpeech:"noun"}):p(e)?r(r({},a),{partOfSpeech:"adverb"}):f(e)?r(r({},a),{case:a.case||"nominative",number:a.number||"singular",partOfSpeech:"adjective"}):b(e)?r(r({},a),{tense:"present",partOfSpeech:"verb",stem:A(e,2)+"i"}):S(e)?r(r({},a),{tense:"past",partOfSpeech:"verb",stem:A(e,2)+"i"}):y(e)?r(r({},a),{tense:"future",partOfSpeech:"verb",stem:A(e,2)+"i"}):x(e)?r(r({},a),{tense:"conditional",partOfSpeech:"verb",stem:A(e,2)+"i"}):E(e)?r(r({},a),{tense:"volitive",partOfSpeech:"verb",stem:A(e)+"i"}):O(e)?r(r({},a),{tense:"infinitve",partOfSpeech:"verb"}):a};return t(e)},i=function(e,t){return e.length>t.length&&e.lastIndexOf(t)===e.length-t.length},o=function(e){return"la"===e},s=function(e){return i(e,"n")},u=function(e){return i(e,"j")},c=function(e){return i(e,"o")},l=function(e){return i(e,"ino")},f=function(e){return i(e,"a")},p=function(e){return i(e,"e")},d=function(e){return["mi","vi","li","ŝi","ĝi","ni","ili","oni","si"].indexOf(e)>-1},g=function(e){return["mia","via","lia","ŝia","ĝia","nia","ilia","sia"].indexOf(e)>-1},h=function(e){return["kaj","aŭ","nek","se","ĉu","sed","anstataŭ","krom","kiel","ke"].indexOf(e)>-1},v=function(e){return["al","antaŭ","apud","ĉe","ĉirkaŭ","da","de","dum","ekde","ekster","el","en","ĝis","inter","je","kontraŭ","krom","kun","malantaŭ","malgraŭ","per","po","por","post","preter","pri","pro","sen","sub","super","sur","tra","trans"].indexOf(e)>-1},m=function(e){return/^\d+$/.test(e)},b=function(e){return i(e,"as")},S=function(e){return i(e,"is")},y=function(e){return i(e,"os")},x=function(e){return i(e,"us")},E=function(e){return i(e,"u")},O=function(e){return i(e,"i")},A=function(e,t){return void 0===t&&(t=1),e.substring(0,e.length-t)}}])},7874:function(){!function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b\w+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,lookbehind:!0,greedy:!0,inside:r}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=r.variable[1].inside,o=0;o<a.length;o++)i[a[o]]=e.languages.bash[a[o]];e.languages.shell=e.languages.bash}(Prism)},5433:function(){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},8325:function(e,t,n){var r=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,i;switch(n=n||{},r.util.type(t)){case"Object":if(i=r.util.objId(t),n[i])return n[i];for(var o in a={},n[i]=a,t)t.hasOwnProperty(o)&&(a[o]=e(t[o],n));return a;case"Array":return i=r.util.objId(t),n[i]?n[i]:(a=[],n[i]=a,t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r="no-"+t;e;){var a=e.classList;if(a.contains(t))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||r.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var u in n)n.hasOwnProperty(u)&&(o[u]=n[u]);n.hasOwnProperty(s)||(o[s]=i[s])}var c=a[e];return a[e]=o,r.languages.DFS(r.languages,(function(t,n){n===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,a,i){i=i||{};var o=r.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],a||s);var u=t[s],c=r.util.type(u);"Object"!==c||i[o(u)]?"Array"!==c||i[o(u)]||(i[o(u)]=!0,e(u,n,s,i)):(i[o(u)]=!0,e(u,n,null,i))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,o=0;i=a.elements[o++];)r.highlightElement(i,!0===t,a.callback)},highlightElement:function(n,a,i){var o=r.util.getLanguage(n),s=r.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var u=n.parentElement;u&&"pre"===u.nodeName.toLowerCase()&&(u.className=u.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:s,code:n.textContent};function l(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),i&&i.call(c.element)}if(r.hooks.run("before-sanity-check",c),!c.code)return r.hooks.run("complete",c),void(i&&i.call(c.element));if(r.hooks.run("before-highlight",c),c.grammar)if(a&&e.Worker){var f=new Worker(r.filename);f.onmessage=function(e){l(e.data)},f.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(r.highlight(c.code,c.grammar,c.language));else l(r.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var a=new s;return u(a,a.head,e),o(e,a,t,a.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(a)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:a};function a(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function i(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(e,t,n,s,l,f){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var d=n[p];d=Array.isArray(d)?d:[d];for(var g=0;g<d.length;++g){if(f&&f.cause==p+","+g)return;var h=d[g],v=h.inside,m=!!h.lookbehind,b=!!h.greedy,S=h.alias;if(b&&!h.pattern.global){var y=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,y+"g")}for(var x=h.pattern||h,E=s.next,O=l;E!==t.tail&&!(f&&O>=f.reach);O+=E.value.length,E=E.next){var A=E.value;if(t.length>e.length)return;if(!(A instanceof a)){var k,_=1;if(b){if(!(k=i(x,O,e,m)))break;var w=k.index,P=k.index+k[0].length,F=O;for(F+=E.value.length;w>=F;)F+=(E=E.next).value.length;if(O=F-=E.value.length,E.value instanceof a)continue;for(var I=E;I!==t.tail&&(F<P||"string"==typeof I.value);I=I.next)_++,F+=I.value.length;_--,A=e.slice(O,F),k.index-=O}else if(!(k=i(x,0,A,m)))continue;w=k.index;var T=k[0],N=A.slice(0,w),R=A.slice(w+T.length),$=O+A.length;f&&$>f.reach&&(f.reach=$);var j=E.prev;N&&(j=u(t,j,N),O+=N.length),c(t,j,_),E=u(t,j,new a(p,v?r.tokenize(T,v):T,S,T)),R&&u(t,E,R),_>1&&o(e,t,n,E.prev,O,{cause:p+","+g,reach:$})}}}}}function s(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function c(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=r,a.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),r.hooks.run("wrap",i);var s="";for(var u in i.attributes)s+=" "+u+'="'+(i.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.code,o=n.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),o&&e.close()}),!1),r):r;var l=r.util.currentScript();function f(){r.manual||r.highlightAll()}if(l&&(r.filename=l.src,l.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var p=document.readyState;"loading"===p||"interactive"===p&&l&&l.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=r),void 0!==n.g&&(n.g.Prism=r)},9980:function(){Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript}}]);