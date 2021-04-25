_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[57],{"4R8O":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/box-decoration-break",function(){return n("wiIH")}])},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("rePB"),r=n("q1tI"),o=n.n(r),s=n("98BF"),i=n("Zb5r"),c=n("AOjV"),l=o.a.createElement;function p(e){var t=e.plugin,n=e.name,r=s.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2),p="By default, ".concat(r.length?"only ".concat(Object(i.a)(r).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,t)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",r.length>0?"also ":"","generate"," ",Object(i.a)(o)," variants:"),l(c.a,{path:"variants.extend",before:"...",add:Object(a.a)({},t,o)}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),o=(n("Btb4"),n("AI3G")),s=n("iuhU"),i=r.a.createElement;function c(e){var t=e.value;return"string"===typeof t?i("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?i(r.a.Fragment,null,i("span",{className:"token punctuation"},"["),t.map((function(e,n){return i(a.Fragment,{key:n},i(c,{value:e}),n===t.length-1?null:i("span",{className:"token punctuation"},", "))})),i("span",{className:"token punctuation"},"]")):"boolean"===typeof t?i("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var t=e.edits,n=e.indent,r=void 0===n?"":n,o=e.type,l=void 0===o?"inserted":o;return i("span",{className:Object(s.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(e,n){return i(a.Fragment,{key:n},i("span",{className:Object(s.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(o=e)?o:"'".concat(o,"'"),i("span",{className:"token operator"},":")," ",i(c,{value:t[e]}),i("span",{className:"token punctuation"},","),"\n");var o})))}function p(e){var t=e.path,n=e.add,r=e.remove,s=e.before,c=e.after;return t="string"===typeof t?t.split("."):t,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return i(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")})),s&&Object(o.a)(s).map((function(e,n){return i(a.Fragment,{key:n},"  ".repeat(t.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n")}))),r&&i(l,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&i(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),i("span",{className:"token unchanged"},c&&Object(o.a)(c).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return i(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),r=n("p+I8"),o=n("GAX2").default;e.exports=(e,t,n)=>{const s=[];return function e(t,n,i){let c;(n=n||{}).indent=n.indent||"\t",i=i||"",c=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),i).replace(new RegExp(c.indent,"g"),i+n.indent)};if(-1!==s.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";s.push(t);const a="["+c.newLine+t.map((a,r)=>{const o=t.length-1===r?c.newLine:","+c.newLineOrSpace;let s=e(a,n,i+n.indent);return n.transform&&(s=n.transform(t,r,s)),c.indent+s+o}).join("")+c.pad+"]";return s.pop(),l(a)}if(r(t)){let a=Object.keys(t).concat(o(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";s.push(t);const r="{"+c.newLine+a.map((r,o)=>{const s=a.length-1===o?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof r,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=l||p?r:e(r,n);let d=e(t[r],n,i+n.indent);return n.transform&&(d=n.transform(t,r,d)),c.indent+String(u)+": "+d+s}).join("")+c.pad+"}";return s.pop(),l(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},ODCF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".decoration-slice":{"box-decoration-break":"slice"},".decoration-clone":{"box-decoration-break":"clone"}},t("boxDecorationBreak"))}}},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),s=n.n(o),i=r.a.createElement;function c(e){var t=e.suffix,n=e.children+(t?" - ".concat(t):"");return i(s.a,null,i("title",{key:"title"},n),i("meta",{key:"twitter:title",name:"twitter:title",content:n}),i("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n("wx14"),r=n("q1tI"),o=n.n(r),s=n("iuhU"),i=n("ZMKu"),c=o.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var t=Object(r.useRef)(),n=Object(r.useState)(!1),o=n[0],s=n[1],i=Object(r.useState)({}),l=i[0],p=i[1];return Object(r.useEffect)((function(){if(o){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function n(){p({height:t.current.contentDocument.body.scrollHeight})}}),[o]),c("iframe",Object(a.a)({},e,{ref:t,onLoad:function(){return s(!0)},style:l}))}function b(e){var t=e.color,n=e.snippet;return c("div",{className:Object(s.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},c("pre",{className:Object(s.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(e){var t=e.preview,n=e.src,a=e.snippet,r=e.previewClassName,o=e.color,i=void 0===o?"gray":o;return c("div",{className:"relative overflow-hidden mb-8"},t?c("div",{className:Object(s.a)("rounded-t-xl overflow-hidden",p[i],r,{"p-10":!r}),dangerouslySetInnerHTML:{__html:t}}):c(g,{src:n,className:Object(s.a)("w-full rounded-t-xl",p[i])}),c(b,{color:i,snippet:a}))}function f(e){var t=e.preview,n=e.src,a=e.previewClassName,o=e.snippet,l=e.color,m=void 0===l?"gray":l,f=e.min,O=void 0!==f&&f,h=Object(r.useRef)(),v=Object(i.h)(0),j=Object(r.useRef)(),y=Object(r.useState)(!1),N=y[0],w=y[1];return Object(r.useEffect)((function(){var e=new window.ResizeObserver((function(){v.set(0)}));return e.observe(h.current),function(){e.disconnect()}}),[]),c("div",{className:"relative mb-8"},c("div",{ref:h,className:"relative rounded-t-xl ".concat(u[m])},c("div",{className:O?"md:w-88":void 0},c(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(v,(function(e){return-e}))}},t?c("div",{className:Object(s.a)("rounded-t-xl",a,p[m],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):c(g,{src:n,className:Object(s.a)("w-full rounded-t-xl",p[m],{"pointer-events-none":N})}))),c("div",{ref:j,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(i.d.div,{drag:"x",_dragX:v,dragMomentum:!1,dragElastic:0,dragConstraints:j,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(O?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:v},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[m]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(b,{color:m,snippet:o}))}},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return g}));var a=n("wx14"),r=n("q1tI"),o=n.n(r),s=n("ekQu"),i=n("8Kt/"),c=n.n(i),l=n("nOHt"),p=n("ap0H"),u=n("1Q1k"),d=o.a.createElement;function g(e){var t=Object(l.useRouter)();return d(o.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(c.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(s.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),r=n("q1tI"),o=n.n(r),s=n("AOjV"),i=n("AI3G"),c=n("Zb5r"),l=o.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.plugin,n=e.name,r=Object(i.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",r.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(s.a,{path:"corePlugins",before:"...",add:r.reduce((function(e,t){return u(u({},e),{},Object(a.a)({},t,!1))}),{})}))}},wiIH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),s=n.n(o),i=n("7ljp"),c=n("YFqc"),l=n.n(c),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),g=n("I6Nb"),b=n("ODCF"),m=n.n(b),f=n("8C7G"),O=n("wH44"),h=(s.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m.a},meta:{title:"Box Decoration Break",description:"Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),v=g.ContentsLayout;function j(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)(v,Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Use the ",Object(i.a)("inlineCode",{parentName:"p"},"decoration-slice")," and ",Object(i.a)("inlineCode",{parentName:"p"},"decoration-clone")," utilities to control whether properties like background, border, border-image, box-shadow, clip-page, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks.")),Object(i.a)(u.a,{preview:'\n  <div class="text-center text-5xl font-extrabold leading-none tracking-tight">\n    <span class="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-red-500">\n      Hello<br>\n      World\n    </span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">decoration-clone</span> bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n  World\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the box-decoration-break property at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing box-decoration-break utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},"md:decoration-slice")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"decoration-slice")," utility at only medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"decoration-clone ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:decoration-slice")," ...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(f.a,{plugin:"boxDecorationBreak",name:"box-decoration-break",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(O.a,{plugin:"boxDecorationBreak",name:"box-decoration-break",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=h}},[["4R8O",0,2,6,1,3,4,5,7]]]);