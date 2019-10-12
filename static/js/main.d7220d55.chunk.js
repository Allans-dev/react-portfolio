(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,a,t){e.exports=t(269)},174:function(e,a,t){},176:function(e,a,t){},179:function(e,a,t){},264:function(e,a,t){},265:function(e,a,t){},266:function(e,a,t){},268:function(e,a,t){},269:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),i=t(274),o=t(17);t(174),t(175),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(16),m=t.n(s),u=t(271);t(176);var p=function(){return l.a.createElement("header",null,l.a.createElement(u.a,{to:"/react-portfolio/",className:"header-home-btn header-btn"},"home"),l.a.createElement("nav",{className:"header-nav"},l.a.createElement(u.a,{to:"/react-portfolio/experience",className:"exp-btn header-btn"},"experience"),l.a.createElement(u.a,{to:"/react-portfolio/projects",className:"projects-btn header-btn"},"projects"),l.a.createElement(u.a,{to:"/react-portfolio/social",className:"social-btn header-btn"},"social")))},d=t(272),h=t(273),E=(t(179),function(){return l.a.createElement("section",{className:"home"},l.a.createElement("h1",{className:"title"},"Welcome to code.allan"))}),f=t(11),b=(t(42),function(e){var a=e.title,t=e.iframeSrc,n=e.description,r=e.github,c=e.site;return console.log(e),l.a.createElement(f.b,{className:"project-card"},l.a.createElement(f.d,null,l.a.createElement("h2",null,a),l.a.createElement("div",{className:"card-iframe"},l.a.createElement(f.e,{component:"iframe",alt:"iframe for project website",src:t,width:"1440px",height:"500px"})),l.a.createElement(f.f,null,n),l.a.createElement(f.c,null,l.a.createElement(f.a,{href:r,target:"_blank",size:"medium"},"Github"),l.a.createElement(f.a,{href:c,target:"_blank",size:"medium"},"Go to site"))))}),v={"Web Site":{description:"Responsive website showing responsive CSS including side nav and slide swiper.",website:"https://practice-web.herokuapp.com/",github:"https://github.com/Allans-dev/responsiveTest"},Planets:{description:"Typescript React Planetary data display",website:"https://allans-dev.github.io/real-universe",github:"https://github.com/Allans-dev/real-universe"}},g={particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:300,duration:4}}}},w=function(){return l.a.createElement("section",{className:"projects"},l.a.createElement(m.a,{className:"particles",params:g}),l.a.createElement("div",{className:"card-container"},Object.keys(v).map(function(e){return l.a.createElement(b,{key:e,iframeSrc:v[e].website,title:e,description:v[e].description,site:v[e].website,github:v[e].github})})))},N=t(65),k=t(66),y=t(69),C=t(67),S=t(70),j=(t(264),function(e){var a=e.handleClose,t=e.show,n=e.children,r=t?"modal display-block":"modal display-none";return l.a.createElement("div",{className:r},l.a.createElement("section",{className:"modal-main"},n,l.a.createElement(f.a,{onClick:a},"close")))}),x=(t(265),function(e){function a(e){var t;return Object(N.a)(this,a),(t=Object(y.a)(this,Object(C.a)(a).call(this,e))).state={show:!1},t}return Object(S.a)(a,e),Object(k.a)(a,[{key:"showModal",value:function(){this.setState({show:!0})}},{key:"hideModal",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this.state.show;return l.a.createElement("section",{className:"experience"},l.a.createElement(m.a,{className:"particles",params:g}),l.a.createElement("div",{className:"table-container"},l.a.createElement("div",{className:"cell exp"},l.a.createElement("h2",null,"Experience"),l.a.createElement("p",null,"Junior Full Stack Web Developer, BirdBrain 2018 (3 months)"),l.a.createElement("p",null,"Developing in HTML, CSS,JavaScript, ReactJS, PHP and WordPress")),l.a.createElement("div",{className:"cell edu"},l.a.createElement("h2",null,"Programming"),l.a.createElement("ul",null,l.a.createElement("li",null,"Certificate IV Programming, TAFE 2019"),l.a.createElement("li",null,"Free Code Camp's Front End Certificate 2017"),l.a.createElement("li",null,"Free Code Camp's Algorthms and Data Structures Certificate"))),l.a.createElement("div",{className:"cell extra"},l.a.createElement("h2",null,"Extra-Curricular"),l.a.createElement("ul",null,l.a.createElement("li",null,"Free Code Camp - Top Contributor 2018 - hosting a study group"),l.a.createElement("li",null,"Volunteer helper at Muses Code React Workshop"),l.a.createElement("li",null,"Attended technology meetups in 2017"))),l.a.createElement("div",{className:"cell back"},l.a.createElement("h2",null,"Property Economics Background"),l.a.createElement("ul",null,l.a.createElement("li",null,"Assistant Compliance Officer, Whelan Property Group 2016 "),l.a.createElement("li",null,"Resident Assistant, Urbanest 2014"),l.a.createElement("li",null,"B. Property Economics, University of Technology Sydney 2016"),l.a.createElement("li",null,"International Business, Berlin University of Social Sciences 2015")))),l.a.createElement(j,{show:e,handleClose:this.hideModal}))}}]),a}(n.Component)),P=(t(266),function(){return l.a.createElement("section",{className:"social"},l.a.createElement("div",{className:"icon-container"},l.a.createElement("a",{href:"https://www.linkedin.com/in/allan-cheung-web/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{href:"https://github.com/Allans-dev",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("a",{href:"https://www.freecodecamp.org/allans-dev",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-free-code-camp"})),l.a.createElement("a",{href:"https://www.instagram.com/al_che9/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-instagram"}))),l.a.createElement("div",{className:"social-title"},"Social Media"))}),_=function(){return l.a.createElement("main",null,l.a.createElement(d.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:E}),l.a.createElement(h.a,{path:"/experience",component:x}),l.a.createElement(h.a,{path:"/projects",component:w}),l.a.createElement(h.a,{path:"/social",component:P})))},A=(t(268),function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(m.a,{className:"particles",params:g}),l.a.createElement(_,null))}),B=Object(o.a)();c.a.render(l.a.createElement(i.a,{history:B,basename:"/react-portfolio"},l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,a,t){}},[[169,1,2]]]);
//# sourceMappingURL=main.d7220d55.chunk.js.map