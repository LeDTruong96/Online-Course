(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[155],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),o=t("98BF"),c=t("Zb5r"),r=t("AOjV"),i=s.a.createElement;function l(e){var{plugin:a,name:t}=e,n=o.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),l="By default, ".concat(n.length?"only ".concat(Object(c.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",i("code",null,a)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(c.a)(s)," variants:"),i(r.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},"9Jru":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;const n=e=>Object.assign({},...Object.entries(e).flatMap(([e,a])=>"object"==typeof a?Object.entries(n(a)).map(([a,t])=>({[e+("DEFAULT"===a?"":"-"+a)]:t})):[{[""+e]:a}]));var s=n;a.default=s},DfYV:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,theme:a,variants:t}){const r=(0,s.default)(a("ringOffsetColor"));e(n.default.fromPairs(n.default.map(n.default.omit(r,"DEFAULT"),(e,a)=>[(0,o.default)("ring-offset",a),{"--tw-ring-offset-color":(0,c.default)(e)}])),t("ringOffsetColor"))}};var n=r(t("XMip")),s=r(t("9Jru")),o=r(t("dzuX")),c=r(t("OiSs"));function r(e){return e&&e.__esModule?e:{default:e}}},IdEg:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),r=t("7ljp"),i=t("YFqc"),l=t.n(i),p=t("tc9R"),u=t("pOT7"),b=t("vRWG"),m=t("I6Nb"),d=t("DfYV"),g=t.n(d),O=t("8C7G"),j=t("wH44"),f=(c.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:g(),transformProperties:e=>{var{selector:a,properties:t}=e;return t["box-shadow"]="0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow)",t}},meta:{title:"Ring Offset Color",description:"Utilities for setting the color of outline ring offsets."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),N=m.ContentsLayout;function h(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(r.a)(N,Object(n.a)({},f,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"ring-offset-{color}")," utilities to change the color of a ring offset. Usually this is done to try and match the offset to the parent background color, since true box-shadow offsets aren't actually possible in CSS.")),Object(r.a)(u.a,{preview:'\n  <div class="bg-violet-100 grid grid-cols-1 gap-6 justify-items-center p-8 ">\n    <p class="font-semibold text-violet-600">bg-purple-100</p>\n    <button tabindex="-1" class="focus:outline-none text-sm px-5 py-3 rounded-md font-semibold text-white bg-violet-500 ring ring-violet-600 ring-offset-4 ring-offset-violet-100">\n      ring-offset-purple-100\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... <span class="code-highlight bg-code-highlight">bg-purple-100</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... ring ring-purple-600 <span class="code-highlight bg-code-highlight">ring-offset-4</span> <span class="code-highlight bg-code-highlight">ring-offset-purple-100</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    ring-offset-purple-100\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-0",color:"violet",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("hr",null),Object(r.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the ring offset color at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ring offset color utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:ring-offset-blue-500")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"ring-offset-blue-500")," utility at only medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"ring-2 ring-offset-2 ring-offset-blue-300 ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:ring-offset-blue-500"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)("hr",null),Object(r.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)("p",null,"You can customize which ring offset color utilities are generated by customizing your color palette under the ",Object(r.a)("inlineCode",{parentName:"p"},"colors")," key in the ",Object(r.a)("inlineCode",{parentName:"p"},"theme")," section of your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," colors ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/colors'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      gray",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"blueGray"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      indigo",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"indigo"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      red",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"rose"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      yellow",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"yellow"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(r.a)("p",null,"If you'd like to customize only the ring offset color utilities without affecting your global color palette, use the ",Object(r.a)("inlineCode",{parentName:"p"},"ringOffsetColor")," key instead:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," colors ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/colors'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ringOffsetColor",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      white",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"white"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      pink",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"fuchsia"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(r.a)("p",null,"Learn more about customizing the default theme in the ",Object(r.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"theme customization documentation")),"."),Object(r.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(O.a,{plugin:"ringOffsetColor",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(j.a,{plugin:"ringOffsetColor",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=f},OiSs:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return s.default.isFunction(e)?e({}):e};var n,s=(n=t("XMip"))&&n.__esModule?n:{default:n}},"dy+Q":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/ring-offset-color",function(){return t("IdEg")}])},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return O}));var n=t("wx14"),s=t("q1tI"),o=t.n(s),c=t("iuhU"),r=t("ZMKu"),i=o.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var a=Object(s.useRef)(),{0:t,1:o}=Object(s.useState)(!1),{0:c,1:r}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var e=new window.ResizeObserver(n);return n(),e.observe(a.current.contentDocument.body),()=>{e.disconnect()}}function n(){r({height:a.current.contentDocument.body.scrollHeight})}},[t]),i("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>o(!0),style:c}))}function d(e){var{color:a,snippet:t}=e;return i("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",l[a],{"bg-gray-800":!l[a]})},i("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[a]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(e){var{preview:a,src:t,snippet:n,previewClassName:s,color:o="gray"}=e;return i("div",{className:"relative overflow-hidden mb-8"},a?i("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",p[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):i(m,{src:t,className:Object(c.a)("w-full rounded-t-xl",p[o])}),i(d,{color:o,snippet:n}))}function O(e){var{preview:a,src:t,previewClassName:n,snippet:o,color:l="gray",min:g=!1}=e,O=Object(s.useRef)(),j=Object(r.h)(0),f=Object(s.useRef)(),{0:N,1:h}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{j.set(0)});return e.observe(O.current),()=>{e.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:O,className:"relative rounded-t-xl ".concat(u[l])},i("div",{className:g?"md:w-88":void 0},i(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(j,e=>-e)}},a?i("div",{className:Object(c.a)("rounded-t-xl",n,p[l],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):i(m,{src:t,className:Object(c.a)("w-full rounded-t-xl",p[l],{"pointer-events-none":N})}))),i("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(r.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),h(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),h(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(b[l]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(d,{color:l,snippet:o}))}}},[["dy+Q",0,2,6,10,1,3,4,5,7,8]]]);