_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[171],{"2cYW":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-decoration",function(){return a("unN4")}])},"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("rePB"),s=a("q1tI"),o=a.n(s),c=a("98BF"),r=a("Zb5r"),i=a("AOjV"),p=o.a.createElement;function l(e){var t=e.plugin,a=e.name,s=c.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(r.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(a," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",p("code",null,t)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(r.a)(o)," variants:"),p(i.a,{path:"variants.extend",before:"...",add:Object(n.a)({},t,o)}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),s=a.n(n),o=(a("Btb4"),a("AI3G")),c=a("iuhU"),r=s.a.createElement;function i(e){var t=e.value;return"string"===typeof t?r("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),t.map((function(e,a){return r(n.Fragment,{key:a},r(i,{value:e}),a===t.length-1?null:r("span",{className:"token punctuation"},", "))})),r("span",{className:"token punctuation"},"]")):"boolean"===typeof t?r("span",{className:"token boolean"},t.toString()):t.toString()}function p(e){var t=e.edits,a=e.indent,s=void 0===a?"":a,o=e.type,p=void 0===o?"inserted":o;return r("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(t).map((function(e,a){return r(n.Fragment,{key:a},r("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(o=e)?o:"'".concat(o,"'"),r("span",{className:"token operator"},":")," ",r(i,{value:t[e]}),r("span",{className:"token punctuation"},","),"\n");var o})))}function l(e){var t=e.path,a=e.add,s=e.remove,c=e.before,i=e.after;return t="string"===typeof t?t.split("."):t,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return r(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")})),c&&Object(o.a)(c).map((function(e,a){return r(n.Fragment,{key:a},"  ".repeat(t.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&r(p,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&r(p,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),r("span",{className:"token unchanged"},i&&Object(o.a)(i).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,a){return r(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")})),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),o=a("GAX2").default;e.exports=(e,t,a)=>{const c=[];return function e(t,a,r){let i;(a=a||{}).indent=a.indent||"\t",r=r||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+a.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const n="["+i.newLine+t.map((n,s)=>{const o=t.length-1===s?i.newLine:","+i.newLineOrSpace;let c=e(n,a,r+a.indent);return a.transform&&(c=a.transform(t,s,c)),i.indent+c+o}).join("")+i.pad+"]";return c.pop(),p(n)}if(s(t)){let n=Object.keys(t).concat(o(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";c.push(t);const s="{"+i.newLine+n.map((s,o)=>{const c=n.length-1===o?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,a);let d=e(t[s],a,r+a.indent);return a.transform&&(d=a.transform(t,s,d)),i.indent+String(u)+": "+d+c}).join("")+i.pad+"}";return c.pop(),p(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((function(t,a,n){return 0===n?a:n===e.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a)}),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),s=a.n(n),o=a("8Kt/"),c=a.n(o),r=s.a.createElement;function i(e){var t=e.suffix,a=e.children+(t?" - ".concat(t):"");return r(c.a,null,r("title",{key:"title"},a),r("meta",{key:"twitter:title",name:"twitter:title",content:a}),r("meta",{key:"og:title",property:"og:title",content:a}))}},msGM:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".underline":{"text-decoration":"underline"},".line-through":{"text-decoration":"line-through"},".no-underline":{"text-decoration":"none"}},t("textDecoration"))}}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return f}));var n=a("wx14"),s=a("q1tI"),o=a.n(s),c=a("iuhU"),r=a("ZMKu"),i=o.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var t=Object(s.useRef)(),a=Object(s.useState)(!1),o=a[0],c=a[1],r=Object(s.useState)({}),p=r[0],l=r[1];return Object(s.useEffect)((function(){if(o){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function a(){l({height:t.current.contentDocument.body.scrollHeight})}}),[o]),i("iframe",Object(n.a)({},e,{ref:t,onLoad:function(){return c(!0)},style:p}))}function b(e){var t=e.color,a=e.snippet;return i("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",p[t],{"bg-gray-800":!p[t]})},i("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g(e){var t=e.preview,a=e.src,n=e.snippet,s=e.previewClassName,o=e.color,r=void 0===o?"gray":o;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[r],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):i(m,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[r])}),i(b,{color:r,snippet:n}))}function f(e){var t=e.preview,a=e.src,n=e.previewClassName,o=e.snippet,p=e.color,g=void 0===p?"gray":p,f=e.min,O=void 0!==f&&f,h=Object(s.useRef)(),j=Object(r.h)(0),N=Object(s.useRef)(),v=Object(s.useState)(!1),k=v[0],y=v[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){j.set(0)}));return e.observe(h.current),function(){e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:h,className:"relative rounded-t-xl ".concat(u[g])},i("div",{className:O?"md:w-88":void 0},i(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(j,(function(e){return-e}))}},t?i("div",{className:Object(c.a)("rounded-t-xl",n,l[g],{"p-10":!n}),dangerouslySetInnerHTML:{__html:t}}):i(m,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[g],{"pointer-events-none":k})}))),i("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(r.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(O?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:function(){document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),y(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[g]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(b,{color:g,snippet:o}))}},unN4:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var n=a("wx14"),s=a("Ff2n"),o=a("q1tI"),c=a.n(o),r=a("7ljp"),i=a("YFqc"),p=a.n(i),l=a("tc9R"),u=a("pOT7"),d=a("vRWG"),m=a("I6Nb"),b=a("msGM"),g=a.n(b),f=a("8C7G"),O=a("wH44"),h=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g.a},meta:{title:"Text Decoration",description:"Utilities for controlling the decoration of text.",features:{responsive:!0,customizable:!1,hover:!0,focus:!0}},tableOfContents:[{title:"Underline",slug:"underline",children:[]},{title:"Line Through",slug:"line-through",children:[]},{title:"No Underline",slug:"no-underline",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Hover",slug:"hover",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),j=m.ContentsLayout;function N(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.a)(j,Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"underline",toc:!0},"Underline"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility to underline text.")),Object(r.a)(u.a,{preview:'\n  <p class="underline text-xl text-fuchsia-600">The quick brown fox jumped over the lazy dog.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"line-through",toc:!0},"Line Through"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"line-through")," utility to strike out text.")),Object(r.a)(u.a,{preview:'\n  <p class="line-through text-xl text-rose-600">The quick brown fox jumped over the lazy dog.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">line-through</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"no-underline",toc:!0},"No Underline"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"no-underline")," utility to remove underline or line-through styling.")),Object(r.a)(u.a,{preview:'\n  <div class="text-center">\n    <a href="#" class="no-underline text-purple-600 text-xl">Link with no underline</a>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">no-underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link with no underline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the text decoration of an element at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility at only medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"no-underline ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:underline")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  The quick brown fox jumped over the lazy dog.\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(l.a,{level:2,id:"hover",toc:!0},"Hover"),Object(r.a)("p",null,"To control the text decoration of an element on hover, add the ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"hover:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility on hover.\t")),Object(r.a)(u.a,{preview:'\t\n  <a href="#hover" class="no-underline hover:underline text-indigo-600 text-xl">Link</a>\t\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-underline <span class="code-highlight bg-code-highlight">hover:underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4",color:"indigo",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"Hover utilities can also be combined with responsive utilities by adding the responsive ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(r.a)("em",{parentName:"p"},"before")," the ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," prefix.\t"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"href"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"#",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:no-underline ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:hover:underline")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Link",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"a"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\t"))),Object(r.a)(l.a,{level:2,id:"focus",toc:!0},"Focus"),Object(r.a)("p",null,"To control the text decoration of an element on focus, add the ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"focus:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility on focus.\t")),Object(r.a)(u.a,{preview:'\t\n  <div class="max-w-xs w-full mx-auto">\t\n    <input class="bg-white focus:underline focus:shadow-outline text-emerald-900 appearance-none inline-block w-full border border-emerald-300 rounded py-3 px-4 focus:outline-none" value="Focus me" placeholder="Focus me">\t\n  </div>\t\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:underline</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Focus me<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"Focus utilities can also be combined with responsive utilities by adding the responsive ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(r.a)("em",{parentName:"p"},"before")," the ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," prefix.\t"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:focus:underline")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"value"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"Focus me",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\t"))),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(f.a,{plugin:"textDecoration",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(O.a,{plugin:"textDecoration",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=h},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return m}));var n=a("wx14"),s=a("q1tI"),o=a.n(s),c=a("ekQu"),r=a("8Kt/"),i=a.n(r),p=a("nOHt"),l=a("ap0H"),u=a("1Q1k"),d=o.a.createElement;function m(e){var t=Object(p.useRouter)();return d(o.a.Fragment,null,d(l.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(i.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(c.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("rePB"),s=a("q1tI"),o=a.n(s),c=a("AOjV"),r=a("AI3G"),i=a("Zb5r"),p=o.a.createElement;function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e){var t=e.plugin,a=e.name,s=Object(r.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())})),p("div",{className:"prose"},p("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(c.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,t){return u(u({},e),{},Object(n.a)({},t,!1))}),{})}))}}},[["2cYW",0,2,6,1,3,4,5,7]]]);