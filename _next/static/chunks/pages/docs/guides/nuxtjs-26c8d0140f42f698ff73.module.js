(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[109],{ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),c=t.n(n),s=t("8Kt/"),p=t.n(s),o=c.a.createElement;function i(e){var{suffix:a,children:t}=e,n=t+(a?" - ".concat(a):"");return o(p.a,null,o("title",{key:"title"},n),o("meta",{key:"twitter:title",name:"twitter:title",content:n}),o("meta",{key:"og:title",property:"og:title",content:n}))}},eUvF:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/nuxtjs",function(){return t("nhlg")}])},nhlg:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),p=t.n(s),o=t("7ljp"),i=t("YFqc"),l=t.n(i),r=t("tc9R"),m=t("vRWG"),j=t("I6Nb"),b=(p.a.createElement,{Layout:m.DocumentationLayout,meta:{title:"Install Tailwind CSS with Nuxt.js",description:"Setting up Tailwind CSS in a Nuxt.js project.",tool:"Nuxt.js"},tableOfContents:[{title:"Creating your project",slug:"creating-your-project",children:[]},{title:"Setting up Tailwind CSS",slug:"setting-up-tailwind-css",children:[{title:"Install Tailwind via npm",slug:"install-tailwind-via-npm"},{title:"Create your configuration file",slug:"create-your-configuration-file"},{title:"Configure Tailwind to remove unused styles in production",slug:"configure-tailwind-to-remove-unused-styles-in-production"},{title:"Include Tailwind in your CSS",slug:"include-tailwind-in-your-css"}]}]}),u=j.ContentsLayout;function O(e){var{components:a}=e,t=Object(c.a)(e,["components"]);return Object(o.a)(u,Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"creating-your-project",toc:!0},"Creating your project"),Object(o.a)("p",null,"Start by creating a new Nuxt.js project if you don't have one set up already.\nThe most common approach is to use ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://nuxtjs.org/guides/get-started/installation#using-create-nuxt-app"}),"Create Nuxt App"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx create-nuxt-app my-project"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},'Do not choose "Tailwind CSS" when prompted to select your "UI Framework"'),". This will cause conflicts that prevent you from being able to install Tailwind CSS v2.0 due to the ",Object(o.a)("inlineCode",{parentName:"p"},"@nuxtjs/tailwindcss")," module depending on an old version of Tailwind."),Object(o.a)("p",null,"Next, change directories to your new project:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token builtin class-name"}),"cd")," my-project"))),Object(o.a)("hr",null),Object(o.a)(r.a,{level:2,id:"setting-up-tailwind-css",toc:!0},"Setting up Tailwind CSS"),Object(o.a)("p",null,Object(o.a)("em",{parentName:"p"},"Tailwind CSS requires Node.js 12.13.0 or higher.")),Object(o.a)(r.a,{level:3,id:"install-tailwind-via-npm",toc:!0},"Install Tailwind via npm"),Object(o.a)("p",null,"If you already have the ",Object(o.a)("inlineCode",{parentName:"p"},"@nuxtjs/tailwindcss")," and ",Object(o.a)("inlineCode",{parentName:"p"},"tailwindcss")," modules installed for any reason, it's important that you uninstall it before installing Tailwind itself:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," uninstall @nuxtjs/tailwindcss tailwindcss"))),Object(o.a)("p",null,"Next, install ",Object(o.a)("inlineCode",{parentName:"p"},"@nuxtjs/tailwindcss")," as well as Tailwind and its peer-dependencies using ",Object(o.a)("inlineCode",{parentName:"p"},"npm"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"install")," -D @nuxtjs/tailwindcss tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9"))),Object(o.a)("p",null,"Nuxt.js doesn't support PostCSS 8 yet so you need to install ",Object(o.a)(l.a,{href:"/docs/installation#post-css-7-compatibility-build",passHref:!0},Object(o.a)("a",null,"the Tailwind CSS v2.0 PostCSS 7 compatibility build"))," for now as we've shown above.\n"),Object(o.a)("p",null,"Add the ",Object(o.a)("inlineCode",{parentName:"p"},"@nuxtjs/tailwindcss")," module to the ",Object(o.a)("inlineCode",{parentName:"p"},"buildModules")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"nuxt.config.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// nuxt.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"export")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"default")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  buildModules",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'@nuxtjs/tailwindcss'"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)(r.a,{level:3,id:"create-your-configuration-file",toc:!0},"Create your configuration file"),Object(o.a)("p",null,"Next, generate your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx tailwindcss init"))),Object(o.a)("p",null,"This will create a minimal ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file at the root of your project:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  purge",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  darkMode",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"false"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// or 'media' or 'class'"),"\n  theme",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  variants",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  plugins",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"Learn more about configuring Tailwind in the ",Object(o.a)(l.a,{href:"/docs/configuration",passHref:!0},Object(o.a)("a",null,"configuration documentation")),"."),Object(o.a)(r.a,{level:3,id:"configure-tailwind-to-remove-unused-styles-in-production",toc:!0},"Configure Tailwind to remove unused styles in production"),Object(o.a)("p",null,"In your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, configure the ",Object(o.a)("inlineCode",{parentName:"p"},"purge")," option with the paths to all of your pages and components so Tailwind can tree-shake unused styles in production builds:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"   purge",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   purge",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./components/**/*.{vue,js}'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./layouts/**/*.vue'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./pages/**/*.vue'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./plugins/**/*.{js,ts}'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./nuxt.config.{js,ts}'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   darkMode",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token boolean"}),"false"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// or 'media' or 'class'"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   variants",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   plugins",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Read our separate guide on ",Object(o.a)(l.a,{href:"/docs/optimizing-for-production",passHref:!0},Object(o.a)("a",null,"optimizing for production"))," to learn more about tree-shaking unused styles for best performance.\n"),Object(o.a)(r.a,{level:3,id:"include-tailwind-in-your-css",toc:!0},"Include Tailwind in your CSS"),Object(o.a)("p",null,"Open the ",Object(o.a)("inlineCode",{parentName:"p"},"./assets/css/tailwind.css")," file that Nuxt.js generates for you by default\nand use the ",Object(o.a)("inlineCode",{parentName:"p"},"@tailwind")," directive to include Tailwind's ",Object(o.a)("inlineCode",{parentName:"p"},"base"),", ",Object(o.a)("inlineCode",{parentName:"p"},"components"),", and ",Object(o.a)("inlineCode",{parentName:"p"},"utilities")," styles, replacing the original file contents:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* ./assets/css/tailwind.css */"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))))),Object(o.a)("p",null,"Tailwind will swap these directives out at build-time with all of the styles it generates based on your configured design system."),Object(o.a)("p",null,"Read our documentation on ",Object(o.a)(l.a,{href:"/docs/adding-base-styles",passHref:!0},Object(o.a)("a",null,"adding base styles")),", ",Object(o.a)(l.a,{href:"/docs/extracting-components",passHref:!0},Object(o.a)("a",null,"extracting components")),", and ",Object(o.a)(l.a,{href:"/docs/adding-new-utilities",passHref:!0},Object(o.a)("a",null,"adding new utilities"))," for best practices on extending Tailwind with your own custom CSS.\n"),Object(o.a)("hr",null),Object(o.a)("p",null,"You're finished! Now when you run ",Object(o.a)("inlineCode",{parentName:"p"},"npm run dev"),", Tailwind CSS will be ready to use in your Nuxt.js project."),Object(o.a)("p",null,Object(o.a)(l.a,{href:"/docs/utility-first",passHref:!0},Object(o.a)("a",null,"Next learn about the utility-first workflow ","\u2192")),"\n")))}O.isMDXComponent=!0,O.layoutProps=b},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return b}));var n=t("wx14"),c=t("q1tI"),s=t.n(c),p=t("ekQu"),o=t("8Kt/"),i=t.n(o),l=t("nOHt"),r=t("ap0H"),m=t("1Q1k"),j=s.a.createElement;function b(e){var a=Object(l.useRouter)();return j(s.a.Fragment,null,j(r.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),j(i.a,null,j("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),j("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),j(p.b,Object(n.a)({nav:m.a},e)))}}},[["eUvF",0,2,1,3,4,5]]]);