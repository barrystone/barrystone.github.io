(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1159:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return M},default:function(){return q}});var i=n(9008),t=n.n(i),r=n(7294),c=n(1664),a=n.n(c),l=n(5893),o=function(){return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"header",children:[(0,l.jsx)("div",{className:"header-animation header-animation--1"}),(0,l.jsx)("div",{className:"header-animation header-animation--2 "}),(0,l.jsx)("div",{className:"header-animation header-animation--3"}),(0,l.jsx)("div",{className:"header-animation header-animation--4"}),(0,l.jsx)("div",{className:"header-animation header-animation--5"}),(0,l.jsx)("div",{className:"header-animation header-animation--6"}),(0,l.jsx)("h1",{className:"heading-primary--main ","text-shadow":"barrystone",children:"BarryStone"}),(0,l.jsxs)("div",{className:"header__left",children:[(0,l.jsxs)("div",{className:"header__button-box",children:[(0,l.jsx)(a(),{href:"/about",as:"/about",className:"btn-primary",children:(0,l.jsxs)("p",{children:["關於 ",(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"About"})]})}),(0,l.jsx)(a(),{href:"/space",as:"/space",className:"btn-primary btn-primary--2",children:(0,l.jsxs)("p",{children:["空間 ",(0,l.jsx)("br",{}),(0,l.jsx)("span",{children:"Space"})]})})]}),(0,l.jsx)("div",{className:"header__text-box",children:(0,l.jsx)("h1",{className:"heading-primary"})}),(0,l.jsx)("div",{className:"header__link-box animate__animated  animate__fadeInUpBig",children:(0,l.jsx)("a",{href:"https://github.com/barrystone",target:"_blank",className:"btn-secondary ",children:(0,l.jsx)("p",{children:"Github"})})})]}),(0,l.jsxs)("div",{className:"header__info",children:[(0,l.jsx)("div",{className:"header__info-textbox-1",children:"#"}),(0,l.jsx)("div",{className:"header__info-textbox-2",children:(0,l.jsxs)("p",{children:["A Software Development",(0,l.jsx)("br",{}),"Enthusiast"]})})]})]})})},d=n(29),h=n(4687),m=n.n(h);function u(e){switch(e){case"jupyter notebook":case"python":return"python-icon";case"javascript":return"js-icon";case"html":return"html-icon";case"css":return"css-icon";case"scss":return"sass-icon";case"typescript":return"ts-icon";case"vue":return"vuejs-icon";case"c#":return"cSharp-icon";case"java":return"java-icon";case"php":return"php-icon";case"c++":return"c++-icon";case"swift":return"swift-icon";case"svelte":return"svelte-icon";case"asp.net":return"aspDotNet-icon";default:return"coding-icon"}}var x=function(e){var s=e.name,n=e.index,i=e.image,t=(0,r.useState)({unfetched:100,null:190,fetched:0,error:0}),c=t[0],a=t[1];(0,r.useEffect)(function(){var e;(e=(0,d.Z)(m().mark(function e(){var n;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/repos/barrystone/".concat(s,"/languages"));case 3:return n=e.sent,e.next=6,n.json();case 6:a(e.sent),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({unfetched:0,null:0,fetched:100,error:190});case 13:case"end":return e.stop()}},e,null,[[0,10]])})),function(){return e.apply(this,arguments)})()},[]);var o=function(e){return e/Object.values(c).reduce(function(e,s){return e+s})};return(0,l.jsx)("div",{className:"itemscircle itemscircle-".concat(n),children:(0,l.jsxs)("ul",{className:"itemscircle-wrapper",children:[(0,l.jsx)("div",{className:"itemscircle__root itemscircle__root-close",children:(0,l.jsxs)("p",{children:["程式語言",(0,l.jsx)("br",{}),"比例"]})}),(0,l.jsx)("div",{className:"itemscircle__root itemscircle__root-open ",children:(0,l.jsx)("img",{src:"img/tech/".concat(i?i+"-icon":u(Object.keys(c)[0].toLowerCase()),".svg"),alt:(i||Object.keys(c)[0])+"-icon"})}),Object.keys(c).slice(0,3).map(function(e,s){return(0,l.jsxs)("li",{className:"itemscircle__item itemscircle__item--".concat(s),children:[(0,l.jsx)("div",{className:"itemscircle__item-stroke",children:(0,l.jsx)("svg",{children:(0,l.jsx)("circle",{style:{strokeDashoffset:((1-o(Object.values(c)[s]))*26.376).toString()+"rem"}})})}),(0,l.jsxs)("div",{className:"itemscircle__item-icon",children:[(0,l.jsx)("img",{src:"img/tech/".concat(u(e.toLowerCase()),".svg"),alt:e+"-icon"}),(0,l.jsxs)("div",{className:"itemscircle__item-icon-percentage",children:[(100*o(Object.values(c)[s])).toFixed(1),(0,l.jsx)("span",{children:"%"})]})]})]},s)})]})})},j=JSON.parse('[{"name":"online-store","class":"brick-font--big","image":"nodejs"},{"name":"social_app","class":"brick-font--big"},{"name":"natours","class":"brick-font--big","image":"sass"},{"name":"taiwan-college-app","class":"brick-font--mid","image":"reactjs"}]'),p=function(){return(0,l.jsx)("div",{className:"brick",children:(0,l.jsx)("ul",{children:j.map(function(e,s){return(0,l.jsxs)("li",{children:[(0,l.jsx)("a",{href:"https://github.com/barrystone/"+e.name,className:e.class,target:"_blank",children:e.name}),(0,l.jsx)(x,{name:e.name,image:e.image?e.image:null,index:s})]},s)})})})},v=n(7191),g=n(3082),b=n.n(g),f=function(e){return e.border,(0,l.jsxs)("svg",{className:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[(0,l.jsx)("circle",{className:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),(0,l.jsx)("path",{className:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})},_=function(e){(0,v.Z)(e);var s=(0,r.useState)(!1),n=s[0],i=s[1];return(0,l.jsx)(b(),{onChange:function(e){e&&i(!0)},partialVisibility:!0,children:(0,l.jsxs)("ul",{className:"skillset ".concat(n?"skillset--show":""),children:[(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"\uD83C\uDFC6 \xa0TS "}),(0,l.jsx)("p",{children:"Typescript"}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/ts-icon.svg",alt:"js-icon"})})]}),(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"JS"}),(0,l.jsx)("p",{children:"Javascript"}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/js-icon.svg",alt:"js-icon"})})]}),(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"Reactjs"}),(0,l.jsxs)("p",{children:["JavaScript library for",(0,l.jsx)("br",{})," building user interfaces"]}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/reactjs-icon.svg",alt:"react-icon"})})]}),(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"Nodejs"}),(0,l.jsxs)("p",{children:["Back-end JavaScript",(0,l.jsx)("br",{})," runtime environment"]}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/nodejs-icon.svg",alt:"nodejs-icon"})})]}),(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"MongoDB"}),(0,l.jsx)("p",{children:"No-SQL Database"}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/mongodb-icon.svg",alt:"nodejs-icon"})})]}),(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"Graphql"}),(0,l.jsxs)("p",{children:["Query language for API ",(0,l.jsx)("br",{}),"\xa0"]}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/graphql-icon.svg",alt:"graphql-icon"})})]}),(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"Docker"}),(0,l.jsx)("p",{children:"Containerization platform"}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/docker-icon.svg",alt:"docker-icon"})})]}),(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"K8s"}),(0,l.jsx)("p",{children:"Kubernetes, Container orchestration"}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/kubernetes-icon.svg",alt:"kubernetes-icon"})})]}),(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"Reduxjs"}),(0,l.jsxs)("p",{children:["State container",(0,l.jsx)("br",{})," for JavaScript"]}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/reduxjs-icon.svg",alt:"redux-icon"})})]}),(0,l.jsxs)("li",{className:"item",children:[(0,l.jsx)(f,{}),(0,l.jsx)("h4",{children:"SCSS"}),(0,l.jsxs)("p",{children:["Syntactically Awesome",(0,l.jsx)("br",{})," Style Sheets"]}),(0,l.jsx)("span",{children:(0,l.jsx)("img",{src:"img/tech/sass-icon.svg",alt:"sass-icon"})})]})]})})},N=function(){return(0,r.useEffect)(function(){var e=document.querySelector(".skillset"),s=null==e?void 0:e.classList,n=function(){window.requestAnimationFrame(function(){null==s||s.add("skillset--show")})},i=function(){null==s||s.remove("skillset--show")},t=function(){window.open("https://github.com/barrystone","_blank")},r=function(){var e=document.getElementById("collects");e&&(e.innerHTML="Github")},c=function(){var e=document.getElementById("collects");e&&(e.innerHTML="我的作品",e.style.cursor="pointer")},a=function(){document.querySelectorAll(".section-about__screwbox").forEach(function(e){return e.classList.add("section-about__screwbox--rotate")})},l=function(){document.querySelectorAll(".section-about__screwbox").forEach(function(e){return e.classList.remove("section-about__screwbox--rotate")})},o=document.getElementById("skill"),d=document.getElementById("collects"),h=document.getElementById("work-arrow");return null==o||o.addEventListener("mouseleave",n),null==o||o.addEventListener("mouseover",i),null==d||d.addEventListener("click",t),null==d||d.addEventListener("mouseover",r),null==d||d.addEventListener("mouseleave",c),null==o||o.addEventListener("mouseover",a),null==o||o.addEventListener("mouseleave",l),null==h||h.addEventListener("mouseover",a),null==h||h.addEventListener("mouseleave",l),function(){null==o||o.removeEventListener("mouseleave",n),null==o||o.removeEventListener("mouseover",i),null==d||d.removeEventListener("click",t),null==d||d.removeEventListener("mouseover",r),null==d||d.removeEventListener("mouseleave",c),null==o||o.removeEventListener("mouseover",a),null==o||o.removeEventListener("mouseleave",l),null==h||h.removeEventListener("mouseover",a),null==h||h.removeEventListener("mouseleave",l)}},[]),(0,l.jsx)("section",{className:"section section-about",id:"aboutSection",children:(0,l.jsxs)("div",{className:"section-about__container",children:[(0,l.jsx)("div",{className:"section-about__screwbox section-about__screwbox-1",children:(0,l.jsx)("img",{src:"/img/design/screw-icon.svg",alt:"screw-icon"})}),(0,l.jsx)("div",{className:"section-about__screwbox section-about__screwbox-2",children:(0,l.jsx)("img",{src:"/img/design/screw-icon.svg",alt:"screw-icon"})}),(0,l.jsx)("div",{className:"section-about__screwbox section-about__screwbox-3",children:(0,l.jsx)("img",{src:"/img/design/screw-icon.svg",alt:"screw-icon"})}),(0,l.jsx)("div",{className:"section-about__screwbox section-about__screwbox-4",children:(0,l.jsx)("img",{src:"/img/design/screw-icon.svg",alt:"screw-icon"})}),(0,l.jsx)("div",{className:"section-about__textbox-1",children:(0,l.jsx)("p",{className:" paragraph-big--3",children:"Research & Development Engineer"})}),(0,l.jsx)("div",{className:"section-about__textbox-2",children:(0,l.jsx)("h3",{className:"heading-tertiary paragraph-big--4",id:"skill",children:(0,l.jsx)("span",{children:"專長技能"})})}),(0,l.jsxs)("div",{className:"section-about__arrow-box",id:"work-arrow",children:[(0,l.jsx)("a",{href:"https://github.com/barrystone?tab=repositories",target:"_blank",className:"arrow-big",children:(0,l.jsx)("p",{})}),(0,l.jsx)("h3",{className:"heading-tertiary paragraph-big--4",id:"collects",children:(0,l.jsx)("span",{children:"我的作品"})})]}),(0,l.jsx)("section",{className:"section-about__skillsetbox",children:(0,l.jsx)(_,{})}),(0,l.jsx)("div",{className:"section-about__circlebox",children:(0,l.jsxs)("div",{className:"circle-spinner",children:[(0,l.jsx)("img",{src:"./img/myicon_mobile.png",alt:"myicon"}),(0,l.jsx)("div",{className:"circle-spinner__view",children:(0,l.jsx)("span",{})})]})}),(0,l.jsx)("div",{className:"section-about__project-box",children:(0,l.jsx)(p,{})})]})})},w=n(8307),y=n(6066);function k(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,i)}return n}function S(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?k(Object(n),!0).forEach(function(s){(0,w.Z)(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}var E=function(e){var s,n=e.reposData,i={dots:!1,infinite:!0,speed:2e3,slidesToShow:3,slidesToScroll:3,arrows:!1,autoplay:!0,autoplaySpeed:3e3},t=(0,r.useState)([]),c=t[0],a=t[1],o=(0,r.useState)(i),h=o[0],x=o[1],j=function(){if(!window.matchMedia("(max-width:75em)").matches)return x(S(S({},i),{},{slidesToShow:3,slidesToScroll:3,speed:2e3}));window.matchMedia("(max-width:37.5em)").matches?x(S(S({},i),{},{slidesToShow:1,slidesToScroll:1,speed:1e3})):x(S(S({},i),{},{slidesToShow:2,slidesToScroll:2,speed:2e3}))},p=(s=(0,d.Z)(m().mark(function e(){var s,n;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/barrystone/repos?sort=updated");case 3:return s=e.sent,e.next=6,s.json();case 6:n=e.sent,200==s.status?a(n):403==s.status?console.log("API limit !"):console.log("API problem not 403"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("error: ",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])})),function(){return s.apply(this,arguments)});return(0,r.useEffect)(function(){a(n),j(),window.addEventListener("resize",j),p()},[]),(0,l.jsxs)("section",{className:"section section-repo",children:[(0,l.jsx)("div",{className:"section-repo__heading",children:(0,l.jsx)("h2",{className:"heading-secondary",children:(0,l.jsxs)("section",{id:"repoSection-heading",children:[(0,l.jsx)("img",{src:"./img/design/bolt-icon.svg",alt:""}),(0,l.jsx)("img",{src:"./img/design/bolt-icon.svg",alt:""}),(0,l.jsx)("span",{children:"Github 專案"})]})})}),(0,l.jsx)("div",{className:"section-repo__repos",children:(0,l.jsx)(y.Z,S(S({},h),{},{children:c&&c.length>1&&c.map(function(e,s){return(0,l.jsx)("div",{className:"repo-wrapper",children:(0,l.jsxs)("div",{className:"repo",children:[(0,l.jsx)("div",{className:"repo__title",children:(0,l.jsx)("a",{href:e.html_url,target:"_blank",children:e.name})}),(0,l.jsxs)("div",{className:"repo__content",children:[(0,l.jsxs)("div",{className:"repo-description",children:[(0,l.jsxs)("div",{className:"repo-description--title",children:[(0,l.jsx)("span",{children:(0,l.jsx)("p",{children:"簡介"})}),(0,l.jsx)("img",{src:"img/tech/".concat(u(e.language?e.language.toLowerCase():"coding"),".svg"),alt:"".concat(e.language)})]}),(0,l.jsx)("article",{className:"repo-description--text",children:(0,l.jsx)("p",{children:e.description?e.description.toString().length<=60?e.description:e.description.slice(0,60)+" ...":" 尚未有簡介  !"})})]}),(0,l.jsxs)("div",{className:"repo-star",children:[(0,l.jsx)("div",{className:"repo-star--icon",children:(0,l.jsx)("img",{src:"/img/design/star-icon.svg",alt:""})}),(0,l.jsxs)("div",{className:"repo-star--number",children:["X",(0,l.jsx)("span",{children:e.stargazers_count})]})]}),(0,l.jsxs)("div",{className:"repo-fork",children:[(0,l.jsx)("div",{className:"repo-fork--icon",children:(0,l.jsx)("img",{src:"/img/design/fork-icon.svg",alt:""})}),(0,l.jsxs)("div",{className:"repo-fork--number",children:["X ",(0,l.jsx)("span",{children:e.forks})]})]})]})]})},s)})}))})]})},O=n(7812),L=n(6376),D={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},C={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},P=function(e){var s=e.notes,n=e.isVisible;return(0,l.jsxs)(L.E.ul,{variants:D,initial:"hidden",animate:n?"visible":"hidden",children:[s.slice(0,6).map(function(e,s){return(0,l.jsxs)(L.E.li,{className:Object.keys(e).toString().length>=20?"notetree__li-font--small":"",variants:C,children:["\xa0",(0,l.jsx)("a",{href:Object.values(e).toString(),target:"_blank",children:Object.keys(e)})]},s)}),(null==s?void 0:s.length)>0?(0,l.jsx)(L.E.li,{style:{listStyle:"none",letterSpacing:".3rem",fontSize:"1.8rem",marginTop:"-1.5rem"},variants:C,children:"..."}):""]})},T=function(){var e=(0,r.useState)({}),s=e[0],n=e[1],i=(0,r.useState)(!1),t=i[0],c=i[1];return(0,r.useEffect)(function(){var e,s=new AbortController,i=s.signal;return(e=(0,d.Z)(m().mark(function e(){var s,t;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://raw.githubusercontent.com/barrystone/hackmd_public-notes/master/README.md",{signal:i});case 3:return s=e.sent,e.next=6,s.text();case 6:if(n(function(e){for(var s={},n=0;n<e.length;n++)if("#"==e[n]&&"#"==e[n+1]){for(var i=n+3,t="";i<i+e.length;i++)if(t+=e[i],"\n"==e[i]){t=t.slice(0,-1),n=i;break}for(s[t]=[];n<=e.length;n++){if("#"==e[n]){n-=1;break}if("-"==e[n]&&" "==e[n+1]){for(var r="",c=n+3;c<e.length;c++)if(r+=e[c],"]"==e[c]){r=r.slice(0,-1),n=c;break}for(var a="",l=c+2;l<e.length;l++)if(a+=e[l],")"==e[l]){a=a.slice(0,-1),n=l;break}var o={};o[r]=a,s[t]=[].concat((0,O.Z)(s[t]),[o])}}}return s}(e.sent)),!(200!==s.status)){e.next=16;break}return e.next=11,fetch("".concat(window.location.origin,"/api/notes"),{signal:i});case 11:return t=e.sent,e.next=14,t.json();case 14:n(e.sent.analyzedData);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),"AbortError"===e.t0.name?console.log("Fetch aborted"):console.log("error",e.t0.message);case 21:case"end":return e.stop()}},e,null,[[0,18]])})),function(){return e.apply(this,arguments)})(),function(){s.abort()}},[]),(0,l.jsx)(b(),{onChange:function(e){c(e)},partialVisibility:!0,children:(0,l.jsx)(L.E.div,{initial:{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",backgroundColor:"#fff"},animate:t?{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}:{clipPath:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"},transition:{duration:.3,ease:"easeIn"},children:(0,l.jsx)("section",{className:"section section-note",children:(0,l.jsx)("div",{className:"section-note__container",children:Object.keys(s).slice(0,10).map(function(e,n){return(0,l.jsx)("section",{className:"section-note__topicbox",children:(0,l.jsxs)("div",{className:"notetree",children:[(0,l.jsx)("div",{className:"notetree__title ".concat(e.length>12?"notetree__title-font--small":""),children:(0,l.jsx)("p",{children:e})}),(0,l.jsx)(P,{notes:s[e],isVisible:t})]})},n)})})})})})},A=function(){return(0,l.jsx)("div",{className:"footer",children:(0,l.jsx)("p",{children:"BarryStone"})})},B=function(){return(0,l.jsxs)("div",{className:"navigation",children:[(0,l.jsx)("input",{type:"checkbox",className:"navigation__checkbox",id:"navi-toggle"}),(0,l.jsx)("label",{htmlFor:"navi-toggle",className:"navigation__button",children:(0,l.jsx)("span",{className:"navigation__icon",children:"\xa0"})}),(0,l.jsx)("div",{className:"navigation__background",children:"\xa0"}),(0,l.jsx)("nav",{className:"navigation__nav",children:(0,l.jsxs)("ul",{className:"navigation__list",children:[(0,l.jsx)("li",{className:"navigation__item",children:(0,l.jsx)(a(),{href:"/about",as:"/about",className:"navigation__link",children:"About Me"})}),(0,l.jsx)("li",{className:"navigation__item",children:(0,l.jsx)(a(),{href:"/space",as:"/space",className:"navigation__link",children:"Virtual Space"})})]})})]})},I=function(){return(0,l.jsxs)(t(),{children:[(0,l.jsx)("title",{children:"Barrystone - Home"}),(0,l.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"})]})},M=!0;function q(e){var s=e.reposData;return(0,l.jsxs)("div",{children:[(0,l.jsx)(I,{}),(0,l.jsx)("nav",{children:(0,l.jsx)(B,{})}),(0,l.jsx)("header",{children:(0,l.jsx)(o,{})}),(0,l.jsxs)("main",{children:[(0,l.jsx)(N,{}),(0,l.jsx)(E,{reposData:null!=s?s:[]}),(0,l.jsx)(T,{})]}),(0,l.jsx)("footer",{children:(0,l.jsx)(A,{})})]})}},8312:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1159)}])}},function(e){e.O(0,[996,286,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);