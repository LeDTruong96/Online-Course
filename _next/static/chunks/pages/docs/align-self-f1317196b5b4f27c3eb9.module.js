(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"2c5R":function(t,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/align-self",function(){return n("Y9Rh")}])},"5xSE":function(t,a,n){"use strict";t.exports=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)}},"8C7G":function(t,a,n){"use strict";n.d(a,"a",(function(){return i}));var e=n("q1tI"),s=n.n(e),c=n("98BF"),p=n("Zb5r"),o=n("AOjV"),l=s.a.createElement;function i(t){var{plugin:a,name:n}=t,e=c.defaultConfig.variants[a]||["responsive"];n=n||a.replace(/([a-z])([A-Z])/g,(t,a,n)=>"".concat(a," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(t=>!e.includes(t)).slice(0,2),i="By default, ".concat(e.length?"only ".concat(Object(p.a)(e).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:i}}),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,a)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",e.length>0?"also ":"","generate"," ",Object(p.a)(s)," variants:"),l(o.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},AOjV:function(t,a,n){"use strict";n.d(a,"a",(function(){return r}));var e=n("q1tI"),s=n.n(e),c=(n("Btb4"),n("AI3G")),p=n("iuhU"),o=s.a.createElement;function l(t){var{value:a}=t;return"string"===typeof a?o("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),a.map((t,n)=>o(e.Fragment,{key:n},o(l,{value:t}),n===a.length-1?null:o("span",{className:"token punctuation"},", "))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof a?o("span",{className:"token boolean"},a.toString()):a.toString()}function i(t){var{edits:a,indent:n="",type:s="inserted"}=t;return o("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(a).map((t,c)=>{return o(e.Fragment,{key:c},o("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(i=t)?i:"'".concat(i,"'"),o("span",{className:"token operator"},":")," ",o(l,{value:a[t]}),o("span",{className:"token punctuation"},","),"\n");var i}))}function r(t){var{path:a,add:n,remove:s,before:p,after:l}=t;return a="string"===typeof a?a.split("."):a,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",a.map((t,a)=>o(e.Fragment,{key:a},"  ","  ".repeat(a+1),t,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")),p&&Object(c.a)(p).map((t,n)=>o(e.Fragment,{key:n},"  ".repeat(a.length+2),o("span",{className:"token comment"},"// ".concat(t)),"\n"))),s&&o(i,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),n&&o(i,{edits:n,type:"inserted",indent:"  ".repeat(a.length+1)}),o("span",{className:"token unchanged"},l&&Object(c.a)(l).map(t=>"".concat("  ".repeat(a.length+2)).concat(t,"\n")),a.map((t,n)=>o(e.Fragment,{key:n},"  ","  ".repeat(a.length-n),"}\n")),"  }")))))}},Btb4:function(t,a,n){"use strict";const e=n("5xSE"),s=n("p+I8"),c=n("GAX2").default;t.exports=(t,a,n)=>{const p=[];return function t(a,n,o){let l;(n=n||{}).indent=n.indent||"\t",o=o||"",l=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=t=>{if(void 0===n.inlineCharacterLimit)return t;const a=t.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:t.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+n.indent)};if(-1!==p.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||e(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";p.push(a);const e="["+l.newLine+a.map((e,s)=>{const c=a.length-1===s?l.newLine:","+l.newLineOrSpace;let p=t(e,n,o+n.indent);return n.transform&&(p=n.transform(a,s,p)),l.indent+p+c}).join("")+l.pad+"]";return p.pop(),i(e)}if(s(a)){let e=Object.keys(a).concat(c(a));if(n.filter&&(e=e.filter(t=>n.filter(a,t))),0===e.length)return"{}";p.push(a);const s="{"+l.newLine+e.map((s,c)=>{const p=e.length-1===c?l.newLine:","+l.newLineOrSpace,i="symbol"===typeof s,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||r?s:t(s,n);let d=t(a[s],n,o+n.indent);return n.transform&&(d=n.transform(a,s,d)),l.indent+String(u)+": "+d+p}).join("")+l.pad+"}";return p.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,t=>"\n"===t?"\\n":"\\r"),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(t,a,n)}},GAX2:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=t=>Object.getOwnPropertySymbols(t).filter(a=>Object.prototype.propertyIsEnumerable.call(t,a))},Y9Rh:function(t,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return j}));var e=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),l=n("YFqc"),i=n.n(l),r=n("tc9R"),u=n("pOT7"),d=n("vRWG"),g=n("I6Nb"),m=n("iWgA"),b=n.n(m),f=n("8C7G"),k=n("wH44"),v=(p.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"Align Self",description:"Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis."},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=g.ContentsLayout;function j(t){var{components:a}=t,n=Object(s.a)(t,["components"]);return Object(o.a)(h,Object(e.a)({},v,n,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"self-auto")," to align an item based on the value of the container's ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," property:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-auto flex-1 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"self-start")," to align an item to the start of the container's cross axis, despite the container's ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," value:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-start flex-1 rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"amber",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"self-center")," to align an item along the center of the container's cross axis, despite the container's ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," value:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-center flex-1 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"self-end")," to align an item to the end of the container's cross axis, despite the container's ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," value:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-end flex-1 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"self-stretch")," to stretch an item to fill the container's cross axis, despite the container's ",Object(o.a)("inlineCode",{parentName:"p"},"align-items")," value:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-stretch flex-1 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-stretch</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the alignment of a flex item at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:self-end")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"self-end")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"items-stretch ...",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"self-auto ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:self-end")," ...",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(f.a,{plugin:"alignSelf",name:"align-self",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(k.a,{plugin:"alignSelf",name:"align-self",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=v},Zb5r:function(t,a,n){"use strict";function e(t){return t.reduce((a,n,e)=>0===e?n:e===t.length-1?"".concat(a," and ").concat(n):"".concat(a,", ").concat(n),"")}n.d(a,"a",(function(){return e}))},ap0H:function(t,a,n){"use strict";n.d(a,"a",(function(){return l}));var e=n("q1tI"),s=n.n(e),c=n("8Kt/"),p=n.n(c),o=s.a.createElement;function l(t){var{suffix:a,children:n}=t,e=n+(a?" - ".concat(a):"");return o(p.a,null,o("title",{key:"title"},e),o("meta",{key:"twitter:title",name:"twitter:title",content:e}),o("meta",{key:"og:title",property:"og:title",content:e}))}},iWgA:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:t,variants:a}){t({".self-auto":{"align-self":"auto"},".self-start":{"align-self":"flex-start"},".self-end":{"align-self":"flex-end"},".self-center":{"align-self":"center"},".self-stretch":{"align-self":"stretch"}},a("alignSelf"))}}},"p+I8":function(t,a,n){"use strict";t.exports=function(t){var a=typeof t;return null!==t&&("object"===a||"function"===a)}},pOT7:function(t,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return f}));var e=n("wx14"),s=n("q1tI"),c=n.n(s),p=n("iuhU"),o=n("ZMKu"),l=c.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(t){var a=Object(s.useRef)(),{0:n,1:c}=Object(s.useState)(!1),{0:p,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var t=new window.ResizeObserver(e);return e(),t.observe(a.current.contentDocument.body),()=>{t.disconnect()}}function e(){o({height:a.current.contentDocument.body.scrollHeight})}},[n]),l("iframe",Object(e.a)({},t,{ref:a,onLoad:()=>c(!0),style:p}))}function m(t){var{color:a,snippet:n}=t;return l("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",i[a],{"bg-gray-800":!i[a]})},l("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[a]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function b(t){var{preview:a,src:n,snippet:e,previewClassName:s,color:c="gray"}=t;return l("div",{className:"relative overflow-hidden mb-8"},a?l("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",r[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):l(g,{src:n,className:Object(p.a)("w-full rounded-t-xl",r[c])}),l(m,{color:c,snippet:e}))}function f(t){var{preview:a,src:n,previewClassName:e,snippet:c,color:i="gray",min:b=!1}=t,f=Object(s.useRef)(),k=Object(o.h)(0),v=Object(s.useRef)(),{0:h,1:j}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var t=new window.ResizeObserver(()=>{k.set(0)});return t.observe(f.current),()=>{t.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:f,className:"relative rounded-t-xl ".concat(u[i])},l("div",{className:b?"md:w-88":void 0},l(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(k,t=>-t)}},a?l("div",{className:Object(p.a)("rounded-t-xl",e,r[i],{"p-10":!e}),dangerouslySetInnerHTML:{__html:a}}):l(g,{src:n,className:Object(p.a)("w-full rounded-t-xl",r[i],{"pointer-events-none":h})}))),l("div",{ref:v,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(o.d.div,{drag:"x",_dragX:k,dragMomentum:!1,dragElastic:0,dragConstraints:v,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:k},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[i]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(m,{color:i,snippet:c}))}},vRWG:function(t,a,n){"use strict";n.r(a),n.d(a,"DocumentationLayout",(function(){return g}));var e=n("wx14"),s=n("q1tI"),c=n.n(s),p=n("ekQu"),o=n("8Kt/"),l=n.n(o),i=n("nOHt"),r=n("ap0H"),u=n("1Q1k"),d=c.a.createElement;function g(t){var a=Object(i.useRouter)();return d(c.a.Fragment,null,d(r.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},t.layoutProps.meta.metaTitle||t.layoutProps.meta.title),d(l.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(p.b,Object(e.a)({nav:u.a},t)))}},wH44:function(t,a,n){"use strict";n.d(a,"a",(function(){return d}));var e=n("rePB"),s=n("q1tI"),c=n.n(s),p=n("AOjV"),o=n("AI3G"),l=n("Zb5r"),i=c.a.createElement;function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function u(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){Object(e.a)(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function d(t){var{plugin:a,name:n}=t,e=Object(o.a)(a);return n=n||a.replace(/([a-z])([A-Z])/g,(t,a,n)=>"".concat(a," ").concat(n.toLowerCase())),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(e.map(t=>"<code>".concat(t,"</code>")))}})," ",e.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(p.a,{path:"corePlugins",before:"...",add:e.reduce((t,a)=>u(u({},t),{},{[a]:!1}),{})}))}}},[["2c5R",0,2,6,1,3,4,5,7]]]);