(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{164:function(e,t,a){e.exports=a(258)},169:function(e,t,a){},171:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),s=a(263);a(169),a(170);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(13),o=a.n(i),m=a(261),u=a(262),d=a(260);a(171);function h(e){const t=a=>{var n;!e.contains(a.target)&&((n=e)&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length))&&(document.getElementById("mobile-menu").classList.remove("active"),document.getElementById("menu-container").classList.remove("change"),document.removeEventListener("click",t))};document.addEventListener("click",t)}class E extends n.Component{constructor(e){super(e),this.state={showMenu:!1},this.toggleMenu=this.toggleMenu.bind(this)}toggleMenu(e){e.preventDefault();const t=this.state.showMenu;h(document.getElementById("menu-container")),t?t&&(document.getElementById("menu-container").classList.toggle("change"),document.getElementById("mobile-menu").classList.toggle("active"),this.setState({showMenu:!1})):(document.getElementById("menu-container").classList.toggle("change"),document.getElementById("mobile-menu").classList.toggle("active"),this.setState({showMenu:!0}))}render(){return l.a.createElement("header",null,l.a.createElement("nav",{className:"header-home-btn"},l.a.createElement(d.a,{to:"/",className:"header-btn"},"HOME")),l.a.createElement("nav",{className:"nav-btns"},l.a.createElement(d.a,{to:"/experience",className:"header-btn"},"EXPERIENCE"),l.a.createElement(d.a,{to:"/projects",className:"header-btn"},"PROJECTS")),l.a.createElement("div",{id:"menu-container",onClick:this.toggleMenu},l.a.createElement("div",{className:"bar1"}),l.a.createElement("div",{className:"bar2"}),l.a.createElement("div",{className:"bar3"})),l.a.createElement("nav",{id:"mobile-menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(d.a,{to:"/experience",className:"mobile-header-btn"},"EXPERIENCE")),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/projects",className:"mobile-header-btn"},"PROJECTS")))))}}var p=E;a(174);var g=()=>l.a.createElement("article",{className:"home"},l.a.createElement("h1",{className:"title"},"Welcome to code.allan"),l.a.createElement("section",{className:"icon-container"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/allan-cheung-web/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{href:"https://github.com/Allans-dev",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("a",{href:"https://www.freecodecamp.org/allans-dev",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-free-code-camp"})),l.a.createElement("a",{href:"https://www.instagram.com/_photosbyallan_/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-instagram"})))));a(39);var b=e=>{const t=e.title,a=e.iframeSrc,n=e.description,r=e.github,c=e.site;return l.a.createElement("article",{className:"project-card"},l.a.createElement("section",null,l.a.createElement("h2",null,t),l.a.createElement("div",{className:"card-iframe"},l.a.createElement("iframe",{title:t,alt:"iframe for project website",src:a})),l.a.createElement("p",null,n),l.a.createElement("div",{className:"project-btns"},l.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",size:"medium"},"Github"),l.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",size:"medium"},"Go to site"))))};var v={"Web Site":{description:"Website showing CSS and JavaScript including side nav and slide swiper.",website:"https://allans-dev.github.io/Practice-web-site/",github:"https://github.com/Allans-dev/responsiveTest"},Planets:{description:"Typescript React Planetary data display, using searchbar and tabs to switch.",website:"https://allans-dev.github.io/real-universe",github:"https://github.com/Allans-dev/real-universe"},"Trading Budget":{description:"Combination of recording stock trades, calculating tax, expenses and savings",website:"https://tradingbudget.web.app",github:"https://github.com/Allans-dev/trading-budget"}},f={particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:300,duration:4}}}};var w=()=>l.a.createElement("article",{className:"projects"},l.a.createElement(o.a,{className:"particles",params:f}),l.a.createElement("section",{className:"card-container"},Object.keys(v).map(e=>l.a.createElement(b,{key:e,iframeSrc:v[e].website,title:e,description:v[e].description,site:v[e].website,github:v[e].github}))));a(57),a(175);a(255);class N extends n.Component{constructor(e){super(e),this.state={show:!1},this.showModal=this.showModal.bind(this),this.hideModal=this.hideModal.bind(this)}showModal(){this.setState({show:!0})}hideModal(){this.setState({show:!1})}render(){this.state.show;return l.a.createElement("section",{className:"experience"},l.a.createElement(o.a,{className:"particles",params:f}),l.a.createElement("div",{className:"table-container"},l.a.createElement("div",{className:"cell exp"},l.a.createElement("h2",null,"Experience"),l.a.createElement("ul",null,l.a.createElement("li",null,"Junior Full Stack Web Developer, BirdBrain 2018 (4 months)"),l.a.createElement("li",null,"Developing in HTML, CSS,JavaScript, ReactJS, PHP and WordPress"))),l.a.createElement("div",{className:"cell edu"},l.a.createElement("h2",null,"Programming"),l.a.createElement("ul",null,l.a.createElement("li",null,"Certificate IV Programming, TAFE 2019:",l.a.createElement("br",null),"C#(.NET CORE), HTML5, CSS3, JavaScript, Java(Android),",l.a.createElement("br",null),"Microsoft SQL Server, Testing, XML and OOAD"),l.a.createElement("li",null,"Free Code Camp's Front End Certificate 2017"),l.a.createElement("li",null,"Free Code Camp's Algorthms and Data Structures Certificate"))),l.a.createElement("div",{className:"cell extra"},l.a.createElement("h2",null,"Extra-Curricular"),l.a.createElement("ul",null,l.a.createElement("li",null,"Free Code Camp - Top Contributor 2018 - hosting a study group"),l.a.createElement("li",null,"Volunteer at 2019 IoT Impact Conference"),l.a.createElement("li",null,"Volunteer helper at Muses Code React Workshop 2018"))),l.a.createElement("div",{className:"cell back"},l.a.createElement("h2",null,"Property Economics Background"),l.a.createElement("ul",null,l.a.createElement("li",null,"Assistant Compliance Officer, Whelan Property Group 2016 "),l.a.createElement("li",null,"Resident Assistant, Urbanest 2014"),l.a.createElement("li",null,"B. Property Economics, University of Technology Sydney 2016"),l.a.createElement("li",null,"International Business, Berlin University of Social Sciences 2015")))))}}var C=N;a(256);var y=()=>l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(o.a,{className:"particles",params:f}),l.a.createElement(m.a,null,l.a.createElement(u.a,{exact:!0,path:"/",component:g}),l.a.createElement(u.a,{path:"/experience",component:C}),l.a.createElement(u.a,{path:"/projects",component:w})));c.a.render(l.a.createElement(s.a,null,l.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})},39:function(e,t,a){}},[[164,1,2]]]);
//# sourceMappingURL=main.b50bf99c.chunk.js.map