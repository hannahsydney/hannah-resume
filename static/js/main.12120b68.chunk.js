(this["webpackJsonpnew-resume-20201"]=this["webpackJsonpnew-resume-20201"]||[]).push([[0],{26:function(e,t,s){},29:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a,c,n,i,r,o=s(1),l=s(16),j=s.n(l),d=(s(26),s(2)),h=s(3),b=s(5),u=s(4),m=s(13),O=s(17),p=s.n(O),x=(s(29),s(0)),f=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=(this.props.data.occupation,this.props.data.description,this.props.data.address.city,this.props.data.social.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:e.url,children:Object(x.jsx)("i",{className:e.className})})},e.name)})));return Object(x.jsxs)("header",{id:"home",children:[Object(x.jsxs)("nav",{id:"nav-wrap",children:[Object(x.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(x.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(x.jsxs)("ul",{id:"nav",className:"nav",children:[Object(x.jsx)("li",{className:"current",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#frisbee",children:"Frisbee"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Chinese"})})]})]}),Object(x.jsx)("div",{className:"row banner",children:Object(x.jsxs)("div",{className:"banner-text",children:[Object(x.jsxs)("h1",{className:"responsive-headline",children:["Hello, I'm ",e,"."]}),Object(x.jsx)("h3",{children:"Sydney. Software Engineer. Athlete."}),Object(x.jsx)("hr",{}),Object(x.jsx)("ul",{className:"social",children:t})]})}),Object(x.jsx)("p",{className:"scrolldown",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(x.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(o.Component),v=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:e.url,children:Object(x.jsx)("i",{className:e.className})})},e.name)}));return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"twelve columns",children:[Object(x.jsx)("ul",{className:"social-links",children:e}),Object(x.jsxs)("ul",{className:"copyright",children:[Object(x.jsx)("li",{children:"\xa9 Copyright 2021 Hannah Chen"}),Object(x.jsx)("li",{children:"Built using React"})]})]}),Object(x.jsx)("div",{id:"go-top",children:Object(x.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(x.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(o.Component),g=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e="images/profile.jpg",t=this.props.data.bio,s=(this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email),a=this.props.data.resumedownload}return Object(x.jsx)("section",{id:"about",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"three columns",children:Object(x.jsx)("img",{className:"profile-pic",src:e,alt:"Hannah Chen Profile Pic"})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[Object(x.jsx)("h2",{children:"About Me"}),Object(x.jsx)("p",{children:t}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"columns contact-details",children:[Object(x.jsx)("h2",{children:"Contact Details"}),Object(x.jsxs)("p",{className:"address",children:[Object(x.jsxs)("span",{children:["Email: ",s]}),Object(x.jsx)("br",{}),"Or contact me via"," ",Object(x.jsx)("a",{href:"https://www.linkedin.com/in/hannahchen2020/",children:"LinkedIn."})]})]})})]}),Object(x.jsx)("div",{className:"columns download",children:Object(x.jsxs)("a",{href:a,className:"button",children:[Object(x.jsx)("i",{className:"fa fa-download"}),"Resume"]})})]})})}}]),s}(o.Component),w=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.skillmessage;var e=this.props.data.education.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.school}),Object(x.jsxs)("p",{className:"info",children:[e.degree," ",Object(x.jsx)("span",{children:"\u2022 "}),Object(x.jsx)("em",{className:"date",children:e.graduated})]}),Object(x.jsx)("p",{children:e.description}),Object(x.jsx)("p",{children:e.extracurriculars})]},e.school)})),t=this.props.data.work.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:e.company}),Object(x.jsxs)("p",{className:"info",children:[e.title,Object(x.jsx)("span",{children:" \u2022"})," ",Object(x.jsx)("em",{className:"date",children:e.years})]}),Object(x.jsx)("p",{children:e.description})]},e.company)}))}return Object(x.jsxs)("section",{id:"resume",children:[Object(x.jsxs)("div",{className:"row education",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Education"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:Object(x.jsx)("div",{className:"row item",children:Object(x.jsx)("div",{className:"twelve columns",children:e})})})]}),Object(x.jsxs)("div",{className:"row work",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Work"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:t})]})]})}}]),s}(o.Component),N=(o.Component,function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){return Object(x.jsx)("section",{id:"testimonials",children:Object(x.jsx)("div",{className:"text-container",children:Object(x.jsx)("div",{className:"row banner",children:Object(x.jsxs)("div",{className:"banner-text",children:[Object(x.jsx)("h1",{className:"responsive-headline",children:"\u4f60\u597d, \u6211\u662f\u9648\u4f73\u5bb9."}),Object(x.jsx)("p",{style:{color:"#fff",textAlign:"center",fontStyle:"italic",fontSize:"24px"},children:"(Hi, I'm Hannah.)"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("blockquote",{children:[Object(x.jsxs)("p",{children:["\u6211\u662f\u534e\u88d4\u6fb3\u6d32\u4eba\uff0c\u5728\u6fb3\u6d32\u51fa\u751f\u3001\u957f\u5927\u3002\u6240\u4ee5\u6211\u4e00\u76f4\u5bf9\u666e\u901a\u8bdd\u548c\u4e2d\u56fd\u8bed\u8a00\u5b66\u611f\u5174\u8da3\u3002\u6211\u76ee\u524d\u901a\u8fc7\u7f51\u4e0a\u6559\u5b66\u7684\u8bfe\u7a0b"," ",Object(x.jsx)("a",{href:"https://www.culturestride.com",style:{color:"inherit"},children:"CultureStride"})," ","\u5b66\u4e60\u666e\u901a\u8bdd\u3002\u76ee\u524d\u6211\u5df2\u7ecf\u5728 UNSW \u5b8c\u6210\u4e86\u975e\u6bcd\u8bed\u8bfe\u7a0b\u7684\u4e2d\u6587\u521d\u7ea7\u73ed\uff0c\u5e76\u4e14\u83b7\u5f97 92 \u5206\u7684\u4f18\u7b49\u6210\u7ee9\u3002"]}),Object(x.jsxs)("p",{children:["Growing up as an Australian with a Chinese heritage, I have always been interested in Mandarin and liguistics. I'm currently studying Mandarin Chinese with the online language school,"," ",Object(x.jsx)("a",{href:"https://www.culturestride.com",style:{color:"inherit"},children:"CultureStride"}),". I have also completed Introductory Chinese for Background Speakers at UNSW, achieving a final grade of 92."]})]})]})})})})}}]),s}(o.Component)),y=s(7),k=s(18),C=s.n(k),S=s(10),D=s.n(S),I=s(8),A=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"render",value:function(){var e="100%",t="800px",s=I.b.div(a||(a=Object(y.a)(["\n\t\t\toverflow: hidden;\n\t\t\twidth: ",";\n\t\t\tbackground: bottom;\n\t\t"])),e),o=I.b.div(c||(c=Object(y.a)(["\n\t\t\twidth: ",";\n\t\t\tposition: relative;\n\t\t\theight: ",";\n\t\t\tfont-color: white;\n\t\t"])),e,t),l=I.b.div(n||(n=Object(y.a)(["\n\t\t\t// text-shadow: 1px 1px 1px #fff;\n\t\t\tcolor: white;\n\t\t\tz-index: 100;\n\t\t\tline-height: ",";\n\t\t\ttext-align: center;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\twidth: 10%;\n\t\t\tfont-size: 3em;\n\t\t\tcursor: pointer;\n\t\t\tuser-select: none;\n\t\t\t",";\n\t\t"])),t,(function(e){return e.right?Object(I.a)(i||(i=Object(y.a)(["left: 90%;"]))):Object(I.a)(r||(r=Object(y.a)(["left: 0%;"])))})),j=C()((function(e){var t=e.position,a=(e.total,e.handleClick),c=e.children;return Object(x.jsx)(s,{children:Object(x.jsxs)(o,{children:[c,Object(x.jsx)(l,{onClick:a,"data-position":t-1,children:"<"}),Object(x.jsx)(l,{right:!0,onClick:a,"data-position":t+1,children:">"})]})})}));return Object(x.jsx)("section",{id:"frisbee",children:Object(x.jsxs)(j,{children:[Object(x.jsx)(D.a,{right:!0,children:Object(x.jsx)("div",{style:{backgroundImage:'url("images/fris1.png")',height:"100%",backgroundSize:"cover",backgroundPosition:"bottom",position:"relative",texAlign:"center"}})}),Object(x.jsx)(D.a,{right:!0,children:Object(x.jsx)("div",{style:{backgroundImage:'url("images/fris2.png")',height:"100%",backgroundSize:"cover",backgroundPosition:"bottom",position:"relative",texAlign:"center"}})}),Object(x.jsx)(D.a,{right:!0,children:Object(x.jsx)("div",{style:{backgroundImage:'url("images/fris3.png")',height:"100%",backgroundSize:"cover",backgroundPosition:"bottom",position:"relative",texAlign:"center"}})})]})})}}]),s}(o.Component),z=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={foo:"bar",resumeData:{}},m.a.initialize("UA-110570651-1"),m.a.pageview(window.location.pathname),a}return Object(h.a)(s,[{key:"getResumeData",value:function(){p.a.ajax({url:"/hannah-resume/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(f,{data:this.state.resumeData.main}),Object(x.jsx)(g,{data:this.state.resumeData.main}),Object(x.jsx)(w,{data:this.state.resumeData.resume}),Object(x.jsx)(A,{data:this.state.resumeData.portfolio}),Object(x.jsx)(N,{data:this.state.resumeData.testimonials}),Object(x.jsx)(v,{data:this.state.resumeData.main})]})}}]),s}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));j.a.render(Object(x.jsx)(z,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.12120b68.chunk.js.map