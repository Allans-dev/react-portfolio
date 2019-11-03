(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{169:function(e,t,a){e.exports=a(262)},174:function(e,t,a){},176:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),i=a(267);a(174),a(175),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(14),o=a.n(s),m=a(265),u=a(266),d=a(29),h=a(30),E=a(34),p=a(31),b=a(10),g=a(35),f=a(264);a(176);var v=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(p.a)(t).call(this,e))).state={showMenu:!1},a.toggleMenu=a.toggleMenu.bind(Object(b.a)(a)),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"toggleMenu",value:function(e){e.preventDefault();var t=this.state.showMenu;!function(e){var t=function(){document.removeEventListener("click",a)},a=function(a){var n;!e.contains(a.target)&&((n=e)&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length))&&(document.getElementById("mobile-menu").classList.remove("active"),document.getElementById("menu-container").classList.remove("change"),t())};document.addEventListener("click",a)}(document.getElementById("menu-container")),t?t&&(document.getElementById("menu-container").classList.toggle("change"),document.getElementById("mobile-menu").classList.toggle("active"),this.setState({showMenu:!1})):(document.getElementById("menu-container").classList.toggle("change"),document.getElementById("mobile-menu").classList.toggle("active"),this.setState({showMenu:!0}))}},{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("nav",{className:"header-home-btn"},l.a.createElement(f.a,{to:"/",className:"header-btn"},"HOME")),l.a.createElement("nav",{className:"nav-btns"},l.a.createElement(f.a,{to:"/experience",className:"header-btn"},"EXPERIENCE"),l.a.createElement(f.a,{to:"/projects",className:"header-btn"},"PROJECTS")),l.a.createElement("div",{id:"menu-container",onClick:this.toggleMenu},l.a.createElement("div",{className:"bar1"}),l.a.createElement("div",{className:"bar2"}),l.a.createElement("div",{className:"bar3"})),l.a.createElement("nav",{id:"mobile-menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(f.a,{to:"/experience",className:"mobile-header-btn"},"EXPERIENCE")),l.a.createElement("li",null,l.a.createElement(f.a,{to:"/projects",className:"mobile-header-btn"},"PROJECTS")))))}}]),t}(n.Component),w=(a(179),function(){return l.a.createElement("article",{className:"home"},l.a.createElement("h1",{className:"title"},"Welcome to code.allan"),l.a.createElement("section",{className:"icon-container"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/allan-cheung-web/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{href:"https://github.com/Allans-dev",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("a",{href:"https://www.freecodecamp.org/allans-dev",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-free-code-camp"})),l.a.createElement("a",{href:"https://www.instagram.com/al_che9/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-instagram"})))))}),k=(a(45),function(e){var t=e.title,a=e.iframeSrc,n=e.description,r=e.github,c=e.site;return console.log(e),l.a.createElement("article",{className:"project-card"},l.a.createElement("section",null,l.a.createElement("h2",null,t),l.a.createElement("div",{className:"card-iframe"},l.a.createElement("iframe",{title:t,alt:"iframe for project website",src:a})),l.a.createElement("p",null,n),l.a.createElement("div",{className:"project-btns"},l.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",size:"medium"},"Github"),l.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",size:"medium"},"Go to site"))))}),N={"Web Site":{description:"Website showing CSS and JavaScript including side nav and slide swiper.",website:"https://allans-dev.github.io/Practice-web-site/",github:"https://github.com/Allans-dev/responsiveTest"},Planets:{description:"Typescript React Planetary data display, using searchbar and tabs to switch.",website:"https://allans-dev.github.io/real-universe",github:"https://github.com/Allans-dev/real-universe"},"Wiki searcher":{description:"Search using Wikipedia API. Click on result to take you to the page.",website:"https://allans-dev.github.io/Wikipedia-Viewer/",github:"https://github.com/Allans-dev/Wikipedia-Viewer"}},y={particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:300,duration:4}}}},C=function(){return l.a.createElement("article",{className:"projects"},l.a.createElement(o.a,{className:"particles",params:y}),l.a.createElement("section",{className:"card-container"},Object.keys(N).map((function(e){return l.a.createElement(k,{key:e,iframeSrc:N[e].website,title:e,description:N[e].description,site:N[e].website,github:N[e].github})}))))},S=(a(62),a(180),a(259),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(E.a)(this,Object(p.a)(t).call(this,e))).state={show:!1},a.showModal=a.showModal.bind(Object(b.a)(a)),a.hideModal=a.hideModal.bind(Object(b.a)(a)),a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"showModal",value:function(){this.setState({show:!0})}},{key:"hideModal",value:function(){this.setState({show:!1})}},{key:"render",value:function(){this.state.show;return l.a.createElement("section",{className:"experience"},l.a.createElement(o.a,{className:"particles",params:y}),l.a.createElement("div",{className:"table-container"},l.a.createElement("div",{className:"cell exp"},l.a.createElement("h2",null,"Experience"),l.a.createElement("ul",null,l.a.createElement("li",null,"Junior Full Stack Web Developer, BirdBrain 2018 (4 months)"),l.a.createElement("li",null,"Developing in HTML, CSS,JavaScript, ReactJS, PHP and WordPress"))),l.a.createElement("div",{className:"cell edu"},l.a.createElement("h2",null,"Programming"),l.a.createElement("ul",null,l.a.createElement("li",null,"Certificate IV Programming, TAFE 2019"),l.a.createElement("li",null,"Free Code Camp's Front End Certificate 2017"),l.a.createElement("li",null,"Free Code Camp's Algorthms and Data Structures Certificate"))),l.a.createElement("div",{className:"cell extra"},l.a.createElement("h2",null,"Extra-Curricular"),l.a.createElement("ul",null,l.a.createElement("li",null,"Free Code Camp - Top Contributor 2018 - hosting a study group"),l.a.createElement("li",null,"Volunteer at 2019 IoT Impact Conference"),l.a.createElement("li",null,"Volunteer helper at Muses Code React Workshop 2018"))),l.a.createElement("div",{className:"cell back"},l.a.createElement("h2",null,"Property Economics Background"),l.a.createElement("ul",null,l.a.createElement("li",null,"Assistant Compliance Officer, Whelan Property Group 2016 "),l.a.createElement("li",null,"Resident Assistant, Urbanest 2014"),l.a.createElement("li",null,"B. Property Economics, University of Technology Sydney 2016"),l.a.createElement("li",null,"International Business, Berlin University of Social Sciences 2015")))))}}]),t}(n.Component)),j=(a(260),function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(o.a,{className:"particles",params:y}),l.a.createElement(m.a,null,l.a.createElement(u.a,{exact:!0,path:"/",component:w}),l.a.createElement(u.a,{path:"/experience",component:S}),l.a.createElement(u.a,{path:"/projects",component:C})))});c.a.render(l.a.createElement(i.a,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,t,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.1349d226.chunk.js.map