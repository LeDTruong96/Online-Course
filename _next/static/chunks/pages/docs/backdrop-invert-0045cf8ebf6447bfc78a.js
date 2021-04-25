_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("rePB"),r=n("q1tI"),c=n.n(r),o=n("98BF"),i=n("Zb5r"),s=n("AOjV"),p=c.a.createElement;function l(e){var t=e.plugin,n=e.name,r=o.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2),l="By default, ".concat(r.length?"only ".concat(Object(i.a)(r).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",p("code",null,t)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",r.length>0?"also ":"","generate"," ",Object(i.a)(c)," variants:"),p(s.a,{path:"variants.extend",before:"...",add:Object(a.a)({},t,c)}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),c=(n("Btb4"),n("AI3G")),o=n("iuhU"),i=r.a.createElement;function s(e){var t=e.value;return"string"===typeof t?i("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?i(r.a.Fragment,null,i("span",{className:"token punctuation"},"["),t.map((function(e,n){return i(a.Fragment,{key:n},i(s,{value:e}),n===t.length-1?null:i("span",{className:"token punctuation"},", "))})),i("span",{className:"token punctuation"},"]")):"boolean"===typeof t?i("span",{className:"token boolean"},t.toString()):t.toString()}function p(e){var t=e.edits,n=e.indent,r=void 0===n?"":n,c=e.type,p=void 0===c?"inserted":c;return i("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(t).map((function(e,n){return i(a.Fragment,{key:n},i("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),i("span",{className:"token operator"},":")," ",i(s,{value:t[e]}),i("span",{className:"token punctuation"},","),"\n");var c})))}function l(e){var t=e.path,n=e.add,r=e.remove,o=e.before,s=e.after;return t="string"===typeof t?t.split("."):t,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return i(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")})),o&&Object(c.a)(o).map((function(e,n){return i(a.Fragment,{key:n},"  ".repeat(t.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n")}))),r&&i(p,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&i(p,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),i("span",{className:"token unchanged"},s&&Object(c.a)(s).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return i(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),r=n("p+I8"),c=n("GAX2").default;e.exports=(e,t,n)=>{const o=[];return function e(t,n,i){let s;(n=n||{}).indent=n.indent||"\t",i=i||"",s=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(s.newLine,"g"),"").replace(new RegExp(s.newLineOrSpace,"g")," ").replace(new RegExp(s.pad+"|"+s.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(s.newLine+"|"+s.newLineOrSpace,"g"),"\n").replace(new RegExp(s.pad,"g"),i).replace(new RegExp(s.indent,"g"),i+n.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const a="["+s.newLine+t.map((a,r)=>{const c=t.length-1===r?s.newLine:","+s.newLineOrSpace;let o=e(a,n,i+n.indent);return n.transform&&(o=n.transform(t,r,o)),s.indent+o+c}).join("")+s.pad+"]";return o.pop(),p(a)}if(r(t)){let a=Object.keys(t).concat(c(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";o.push(t);const r="{"+s.newLine+a.map((r,c)=>{const o=a.length-1===c?s.newLine:","+s.newLineOrSpace,p="symbol"===typeof r,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=p||l?r:e(r,n);let m=e(t[r],n,i+n.indent);return n.transform&&(m=n.transform(t,r,m)),s.indent+String(u)+": "+m+o}).join("")+s.pad+"}";return o.pop(),p(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),c=n("8Kt/"),o=n.n(c),i=r.a.createElement;function s(e){var t=e.suffix,n=e.children+(t?" - ".concat(t):"");return i(o.a,null,i("title",{key:"title"},n),i("meta",{key:"twitter:title",name:"twitter:title",content:n}),i("meta",{key:"og:title",property:"og:title",content:n}))}},haBK:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n("wx14"),r=n("Ff2n"),c=n("q1tI"),o=n.n(c),i=n("7ljp"),s=n("YFqc"),p=n.n(s),l=n("tc9R"),u=n("vRWG"),m=n("I6Nb"),d=n("8C7G"),b=n("wH44"),O=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:function(){return function(e){(0,e.addUtilities)({".backdrop-invert-0":{"--tw-backdrop-invert":"invert(0)"},".backdrop-invert":{"--tw-backdrop-invert":"invert(1)"}})}}},meta:{title:"Backdrop Invert",description:"Utilities for applying backdrop invert filters to an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=m.ContentsLayout;function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)(f,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Use the ",Object(i.a)("inlineCode",{parentName:"p"},"backdrop-invert")," and ",Object(i.a)("inlineCode",{parentName:"p"},"backdrop-invert-0")," utilities alongside the ",Object(i.a)("inlineCode",{parentName:"p"},"backdrop-filter")," utility to whether an element should be rendered with inverted backdrop colors or normally."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-invert ...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control an element's backdrop invert filter at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing backdrop invert utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},"md:backdrop-invert-0")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"backdrop-invert-0")," utility at only medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-invert ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-invert-0")," ...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(d.a,{plugin:"backdropInvert",name:"backdrop invert",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(b.a,{plugin:"backdropInvert",name:"backdrop invert",mdxType:"Disabling"}))}g.isMDXComponent=!0,g.layoutProps=O},mS5U:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-invert",function(){return n("haBK")}])},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return d}));var a=n("wx14"),r=n("q1tI"),c=n.n(r),o=n("ekQu"),i=n("8Kt/"),s=n.n(i),p=n("nOHt"),l=n("ap0H"),u=n("1Q1k"),m=c.a.createElement;function d(e){var t=Object(p.useRouter)();return m(c.a.Fragment,null,m(l.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),m(s.a,null,m("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),m("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),m(o.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("rePB"),r=n("q1tI"),c=n.n(r),o=n("AOjV"),i=n("AI3G"),s=n("Zb5r"),p=c.a.createElement;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=e.plugin,n=e.name,r=Object(i.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),p("div",{className:"prose"},p("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(s.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",r.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(o.a,{path:"corePlugins",before:"...",add:r.reduce((function(e,t){return u(u({},e),{},Object(a.a)({},t,!1))}),{})}))}}},[["mS5U",0,2,1,3,4,5]]]);