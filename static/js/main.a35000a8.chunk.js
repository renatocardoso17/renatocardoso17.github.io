(window["webpackJsonpmy-website"]=window["webpackJsonpmy-website"]||[]).push([[0],{159:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),o=a(35),i=(a(162),a(10)),s=a(11),m=a(13),u=a(12),p=a(14),d=a(165),b=a(167),f=a(166),h=a(164),E=a(5),v=a.n(E),g=a(9),y=a(46),k=a.n(y),w=[{path:"/",label:"Renato Cardoso",index:!0},{path:"/about",label:"About"},{path:"/resume",label:"Resume"},{path:"/stats",label:"Stats"},{path:"/contact",label:"Contact"}],N=function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"hamburger-container"},l.a.createElement("nav",{className:"main",id:"hambuger-nav"},l.a.createElement("ul",null,a?l.a.createElement("li",{className:"menu close-menu"},l.a.createElement("div",{onClick:function(){return r(!a)},className:"menu-hover"},"\u2715")):l.a.createElement("li",{className:"menu open-menu"},l.a.createElement("div",{onClick:function(){return r(!a)},className:"menu-hover"},"\u2630")))),l.a.createElement(k.a,{right:!0,isOpen:a},l.a.createElement("ul",{className:"hamburger-ul"},w.map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement(h.a,{to:e.path,onClick:function(){return r(!a)}},l.a.createElement("h3",{className:e.index&&"index-li"},e.label)))})))))},O=function(){return l.a.createElement("header",{id:"header"},l.a.createElement("h1",{className:"index-link"},w.filter((function(e){return e.index})).map((function(e){return l.a.createElement(h.a,{key:e.label,to:e.path},e.label)}))),l.a.createElement("nav",{className:"links"},l.a.createElement("ul",null,w.filter((function(e){return!e.index})).map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement(h.a,{to:e.path},e.label))})))),l.a.createElement(N,null))},j=a(18),S=a(47),C=a.n(S),R=a(48),P=a(49),x=a(50),L=a(51),W=a(52),I=a(53),A=[{link:"https://github.com/renatocardoso17",label:"Github",icon:R.faGithub},{link:"https://facebook.com/renatocardoso17",label:"Facebook",icon:P.faFacebookF},{link:"https://www.instagram.com/renatocardoso17",label:"Instagram",icon:x.faInstagram},{link:"https://www.linkedin.com/in/renatocardoso17",label:"LinkedIn",icon:L.faLinkedinIn},{link:"https://twitter.com/renatocardoso17",label:"Twitter",icon:W.faTwitter},{link:"mailto:rc@renatocardoso.dev",label:"Email",icon:I.faEnvelope}],J=function(){return l.a.createElement("section",{id:"sidebar"},l.a.createElement("section",{id:"intro"},l.a.createElement(h.a,{to:"/",className:"logo"},l.a.createElement("img",{src:C.a,alt:""})),l.a.createElement("header",null,l.a.createElement("h2",null,"Renato Cardoso"),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:rc@renatocardoso.dev"},"rc@renatocardoso.dev")))),l.a.createElement("section",{className:"blurb"},l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"Hi, I'm Renato. I like building things. Currently, I'm a senior software developer creating awesome web apps for Paddy Power Betfair. Click below and learn more about me."),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,"/resume"!==window.location.pathname?l.a.createElement(h.a,{to:"/resume",className:"button"},"Learn More"):l.a.createElement(h.a,{to:"/about",className:"button"},"About Me")))),l.a.createElement("section",{id:"footer"},l.a.createElement("ul",{className:"icons"},A.map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement("a",{href:e.link},l.a.createElement(j.a,{icon:e.icon})))}))),l.a.createElement("p",{className:"copyright"},"\xa9 Renato Cardoso ",l.a.createElement(h.a,{to:"/"},"renatocardoso.dev"),".")))},D=function(e){function t(e,a){var n;return Object(i.a)(this,t),n=Object(m.a)(this,Object(u.a)(t).call(this,e,a)),window.scrollTo(0,0),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{id:"wrapper"},l.a.createElement(v.a,{titleTemplate:"%s | Renato Cardoso",defaultTitle:"Renato Cardoso"}),l.a.createElement(O,null),l.a.createElement("div",{id:"main"},this.props.children),!this.props.fullPage&&l.a.createElement(J,null))}}]),t}(n.Component);D.defaultProps={children:null,fullPage:!1};var M=D,T=function(){return l.a.createElement(M,null,l.a.createElement("article",{className:"post",id:"index"},l.a.createElement("header",null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement(h.a,{to:"/"},"About this site")),l.a.createElement("p",null,"A beautiful, responsive, react app written with modern Javascript."))),l.a.createElement("p",null," Welcome to my website. Please feel free to read more ",l.a.createElement(h.a,{to:"/about"},"about me"),", or you can check out my "," ",l.a.createElement(h.a,{to:"/resume"},"resume"),", "," ","view ",l.a.createElement(h.a,{to:"/stats"},"site statistics"),", "," ","or ",l.a.createElement(h.a,{to:"/contact"},"contact")," me.")))},F=a(54),B=a.n(F),U=a(55),V=a.n(U),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={md:"",count:0},fetch(V.a).then((function(e){return e.text()})).then((function(e){var t=e.split(/\s+/).map((function(e){return e.replace(/\W/g,"")})).filter((function(e){return e.length})).length;a.setState({md:e,count:t})})),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(M,null,l.a.createElement(v.a,{title:"About"}),l.a.createElement("article",{className:"post",id:"about"},l.a.createElement("header",null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement(h.a,{to:"/about"},"About Me")),l.a.createElement("p",null,"(in about ",this.state.count," words)"))),l.a.createElement(B.a,{source:this.state.md,escapeHtml:!1})))}}]),t}(n.Component),G=a(57),H=function(e){var t=e.data;return l.a.createElement("article",{className:"degree-container"},l.a.createElement("header",null,l.a.createElement("h4",{className:"degree"},t.degree),l.a.createElement("p",{className:"school"},l.a.createElement("a",{href:t.link},t.school),", ",t.year)))},Q=function(e){var t=e.data;return l.a.createElement("div",{className:"education"},l.a.createElement("div",{className:"link-to",id:"education"}),l.a.createElement("div",{className:"title"},l.a.createElement("h3",null,"Education")),t.map((function(e){return l.a.createElement(H,{data:e,key:e.school})})))};Q.defaultProps={data:[]};var z=Q,K=function(e){var t=e.data;return l.a.createElement("article",{className:"jobs-container"},l.a.createElement("header",null,l.a.createElement("h4",null,l.a.createElement("a",{href:t.link},t.company)," - ",t.position),l.a.createElement("p",{className:"daterange"}," ",t.daterange)),l.a.createElement("ul",{className:"points"},t.points.map((function(e){return l.a.createElement("li",{key:e},e)}))))},Y=function(e){var t=e.data;return l.a.createElement("div",{className:"experience"},l.a.createElement("div",{className:"link-to",id:"experience"}),l.a.createElement("div",{className:"title"},l.a.createElement("h3",null,"Experience")),t.map((function(e){return l.a.createElement(K,{data:e,key:e.company})})))};Y.defaultProps={data:[]};var $=Y,X=a(21),q=a(22),Z=function(e){var t=e.handleClick,a=e.active,n=e.label;return l.a.createElement("button",{className:"skillbutton ".concat(a[n]?"skillbutton-active":""),type:"button",onClick:function(){return t(n)}},n)},ee=function(e){var t=e.data,a=e.categories,n=t.category,r=t.competency,c=t.title,o={background:a.filter((function(e){return n.includes(e.name)})).map((function(e){return e.color}))[0]},i=Object(q.a)({},o,{width:"".concat(String(Math.min(100,Math.max(r/10*100,0))),"%")});return l.a.createElement("div",{className:"skillbar clearfix"},l.a.createElement("div",{className:"skillbar-title",style:o},l.a.createElement("span",null,c)),l.a.createElement("div",{className:"skillbar-bar",style:i}),l.a.createElement("div",{className:"skill-bar-percent"},r," / 10"))};ee.defaultProps={categories:[]};var te=ee,ae=function(e){var t=e.categories,a=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(q.a)({},e,Object(X.a)({},t,!1))}),{All:!0}),skills:a.map((function(e){return Object.assign(e,{category:e.category.sort()})}))}},ne=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChildClick=function(e){a.setState((function(t){var a=Object.keys(t.buttons).reduce((function(a,n){return Object(q.a)({},a,Object(X.a)({},n,e===n&&!t.buttons[n]))}),{});return a.All=!Object.keys(t.buttons).some((function(e){return a[e]})),{buttons:a}}))},a.state=ae({categories:e.categories,skills:e.skills}),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(ae({categories:e.categories,skills:e.skills}))}},{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,a){return e.state.buttons[a]?a:t}),"All");return this.state.skills.sort((function(e,t){var a=0;return e.competency>t.competency?a=-1:e.competency<t.competency?a=1:e.category[0]>t.category[0]?a=-1:e.category[0]<t.category[0]||e.title>t.title?a=1:e.title<t.title&&(a=-1),a})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return l.a.createElement(te,{categories:e.props.categories,data:t,key:t.title})}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return l.a.createElement(Z,{label:t,key:t,active:e.state.buttons,handleClick:e.handleChildClick})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"skills"},l.a.createElement("div",{className:"link-to",id:"skills"}),l.a.createElement("div",{className:"title"},l.a.createElement("h3",null,"Skills"),l.a.createElement("p",null,"Note: I think these sections are silly, but everyone seems to have one.")),l.a.createElement("div",{className:"skill-button-container"},this.getButtons()),l.a.createElement("div",{className:"skill-row-container"},this.getRows()))}}]),t}(n.Component);ne.defaultProps={skills:[],categories:[]};var le=ne,re=[{school:"Faculty of Engineering - Oporto University",degree:"M.S. Informatics and Computing Engineering",link:"https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_VIEW?pv_curso_id=742&pv_origem=CUR&pv_ano_lectivo=2010",year:2011}],ce=[{company:"Paddy Power Betfair (Blip)",position:"Senior Software Developer",link:"https://blip.pt",daterange:"February 2014 - Present",points:["Involved on the development of the sportsbook mobile single page application (https://www.betfair.com/sport).","Working in several small projects in the Risk & Trading department contributing to the risk management domain.","Spring Boot, Maven, HTML, JavaScript, CSS, AngularJS, ReactJS, Redux, NodeJS, Nginx, Bash."]},{company:"Morrisons",position:"Systems Analyst",link:"https://morrisons.com/",daterange:"September 2012 - February 2014",points:["Development, implementation and customisation of several modules of Oracle products (ORMS, OReSA, OReIM) as well as existing systems integration.","Technical and functional documentation production.","Oracle Forms, Java, ProC, PL/SQL, Bash."]},{company:"Wipro Retail",position:"Project Programmer",link:"https://www.wipro.com/retail/",daterange:"August 2011 - September 2012",points:["Development, implementation and customisation of several modules of Oracle products (RMS - Retail Merchandising System, SIM - Store Inventory Management, etc...) both technical and functional level.","Volume and performance testing.","Technical documentation production.","Oracle Forms, Java, ProC, PL/SQL, Bash."]},{company:"OPT",position:"Computer Programmer",link:"http://opt.pt/mudarIdioma.asp?url=/index.asp",daterange:"February 2011 - July 2011",points:["Development of a real time routing planner algorithm.","Work done under the project Move-me (http://move-me.mobi/) with an android application and a website launched.","C#, NHibernate."]}],oe=[{name:"Databases",color:"#3896e2"},{name:"Frameworks",color:"#64cb7b"},{name:"Javascript",color:"#6968b3"},{name:"Languages",color:"#40494e"},{name:"Tools",color:"#d75858"},{name:"Web Development",color:"#cc7b94"}],ie=[{title:"Javascript",competency:8,category:["Web Development","Languages"]},{title:"Java",competency:8,category:["Languages"]},{title:"NodeJS",competency:8,category:["Web Development","Frameworks","Javascript"]},{title:"ReactJS",competency:6,category:["Web Development","Frameworks","Javascript"]},{title:"AngularJS",competency:6,category:["Web Development","Frameworks","Javascript"]},{title:"Spring Boot",competency:8,category:["Web Development","Frameworks","Java"]},{title:"Bash",competency:6,category:["Tools","Languages"]},{title:"MySQL",competency:7,category:["Databases"]},{title:"Oracle",competency:7,category:["Databases"]},{title:"ExpressJS",competency:6,category:["Web Development","Frameworks","Javascript"]},{title:"Git",competency:7,category:["Tools"]},{title:"HTML",competency:6,category:["Web Development","Languages"]},{title:"CSS",competency:5,category:["Web Development","Languages"]},{title:"SASS/SCSS",competency:5,category:["Web Development","Languages"]},{title:"LESS",competency:5,category:["Web Development","Languages"]},{title:"C++",competency:6,category:["Languages"]},{title:"C#",competency:6,category:["Languages"]}],se=a(56),me=a.n(se),ue=["Education","Experience","Skills"],pe=function(){return l.a.createElement(M,null,l.a.createElement(v.a,{title:"Resume"}),l.a.createElement("article",{className:"post",id:"resume"},l.a.createElement("header",null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement(h.a,{to:"resume"},"Resume"),l.a.createElement("a",{href:me.a,download:!0},l.a.createElement(j.a,{icon:G.a,className:"download"}))),l.a.createElement("div",{className:"link-container"},ue.map((function(e){return l.a.createElement("h4",{key:e},l.a.createElement("a",{href:"#".concat(e.toLowerCase())},e))}))))),l.a.createElement(z,{data:re}),l.a.createElement($,{data:ce}),l.a.createElement(le,{skills:ie,categories:oe})))},de=function(e){var t=e.label,a=e.link,n=e.value;return l.a.createElement("tr",null,l.a.createElement("td",null,t),l.a.createElement("td",{width:"150px"},a.length?l.a.createElement("a",{href:a},n):n))};de.defaultProps={link:""};var be=de,fe=function(e){var t=e.data;return l.a.createElement("table",null,l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement(be,{key:e.label,label:e.label,value:e.value,link:e.link})}))))},he={age:{label:"Current age",value:0},countries:{label:"Countries visited",value:20,link:"https://www.google.com/maps/d/embed?mid=1uwdPfWRl3wOJhj9CvwYOdk2khRTQRmVW"},location:{label:"Current city",value:"Oporto, Portugal"}},Ee=function(){var e=Object(n.useState)(he),t=Object(g.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1988-06-17T20:00:00");r(Object.assign({},a,{age:{label:"Current age",value:((Date.now()-e)/(864e5*365.2421897)).toFixed(11)}}))}()}),25);return function(){clearInterval(e)}})),l.a.createElement(n.Fragment,null,l.a.createElement("h3",null,"Some stats about me"),l.a.createElement(fe,{data:Object.keys(a).map((function(e){return a[e]}))}))},ve=[{label:"Number of linter warnings",value:"0"},{label:"Lines of Javascript powering this website",value:"1304"}],ge=function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Some stats about this site"),l.a.createElement(fe,{data:ve}))},ye=function(){return l.a.createElement(M,null,l.a.createElement(v.a,{title:"Stats"}),l.a.createElement("article",{className:"post",id:"stats"},l.a.createElement("header",null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement(h.a,{to:"/stats"},"Stats")))),l.a.createElement(Ee,null),l.a.createElement(ge,null)))},ke=function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/.test(e)||0===e.length},we=["rc","hi","hello","hola","you-can-email-me-at-literally-anything! Really","well, not anything. But most things","like-this","or-this","but not this :(  ","you.can.also.email.me.with.specific.topics.like","just-saying-hi","please-work-for-us","help","admin","or-I-really-like-your-website","I'll-stop-distracting-you-now","thanks"],Ne=function(){var e=Object(n.useState)(0),t=Object(g.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(we[a]),o=Object(g.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(we[a].length),u=Object(g.a)(m,2),p=u[0],d=u[1],b=Object(n.useState)(!0),f=Object(g.a)(b,2),E=f[0],y=f[1];return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}return function(){}}),[t])}((function(){var e=a,t=p;p-50>=we[a].length&&(e+=1,t=0),e===we.length?y(!1):(s(we[e].slice(0,t)),r(e),d(t+1))}),E?50:null),l.a.createElement(M,null,l.a.createElement(v.a,{title:"Contact"}),l.a.createElement("article",{className:"post",id:"contact"},l.a.createElement("header",null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement(h.a,{to:"/contact"},"Contact")))),l.a.createElement("div",{className:"email-at"},l.a.createElement("p",null,"Feel free to get in touch. You can email me at: "),l.a.createElement("div",{className:"inline-container",style:ke(i)?{}:{color:"red"},onMouseEnter:function(){return y(!1)},onMouseLeave:function(){return a<we.length&&y(!0)}},l.a.createElement("a",{href:ke(i)?"mailto:".concat(i,"@renatocardoso.dev"):""},l.a.createElement("span",null,i),l.a.createElement("span",null,"@renatocardoso.dev")))),l.a.createElement("ul",{className:"icons"},A.map((function(e){return l.a.createElement("li",{key:e.label},l.a.createElement("a",{href:e.link},l.a.createElement(j.a,{icon:e.icon})))})))))},Oe=function(){return l.a.createElement("div",{className:"not-found"},l.a.createElement(v.a,{title:"404"}),l.a.createElement("h1",null,"Page Not Found."),l.a.createElement("p",null,"Return to ",l.a.createElement(h.a,{to:"/"},"index"),"."))},je=(a(159),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{basename:"/"},l.a.createElement(b.a,null,l.a.createElement(f.a,{exact:!0,path:"/",component:T}),l.a.createElement(f.a,{path:"/about",component:_}),l.a.createElement(f.a,{path:"/stats",component:ye}),l.a.createElement(f.a,{path:"/contact",component:Ne}),l.a.createElement(f.a,{path:"/resume",component:pe}),l.a.createElement(f.a,{component:Oe,status:404})))}}]),t}(n.Component)),Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.initializeApp({apiKey:"AIzaSyAaTTFwVXGOPH10b93J4DV1eteu4iPs8jc",authDomain:"my-webiste-58f92.firebaseapp.com",databaseURL:"https://my-webiste-58f92.firebaseio.com",projectId:"my-webiste-58f92",storageBucket:"my-webiste-58f92.appspot.com",messagingSenderId:"499391346675",appId:"1:499391346675:web:3ce7ae9fd3235626a5c486",measurementId:"G-5BPVT2VKW5"}),o.analytics(),c.a.render(l.a.createElement(je,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Se?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ce(t,e)}))}}()},47:function(e,t,a){e.exports=a.p+"static/media/me.36c9d2f7.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/about.d6f0627c.md"},56:function(e,t,a){e.exports=a.p+"static/media/RenatoCardosoCV.932b280a.pdf"},59:function(e,t,a){e.exports=a(161)}},[[59,1,2]]]);
//# sourceMappingURL=main.a35000a8.chunk.js.map