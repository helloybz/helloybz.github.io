(this["webpackJsonphelloybz.github.io"]=this["webpackJsonphelloybz.github.io"]||[]).push([[0],{59:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(43),a=n.n(o),i=(n(59),n(102)),s=n(103),l=n(105),j=n(106),u=n(3);function b(){return Object(u.jsx)(i.a,{children:Object(u.jsx)(s.a,{position:"fixed",sx:{bgcolor:"rgb(13, 25, 40)",borderBottom:"solid 1px rgb(24, 47, 75)"},children:Object(u.jsx)(l.a,{children:Object(u.jsx)(j.a,{sx:{fontSize:"h5.fontSize",fontWeight:"600",color:"rgb(243, 246, 249)"},children:"helloybz."})})})})}var h=n(32),d=n.n(h),f=n(48),g=n(12),x=n(101),p=n(104),O=n(14),m=Object(O.a)(p.a)((function(){return{backgroundColor:"rgb(5,30,59)",elevation4:!0,color:"whitesmoke",":hover":{backgroundColor:"rgb(8,33,62)",cursor:"pointer"}}}));function v(e){var t=e.project;return Object(u.jsxs)(x.a,{item:!0,lg:6,component:m,container:!0,alignItems:"flex-start",sx:{margin:"1rem",padding:"1rem"},onClick:function(){return function(e){var t=e.url;window.location.href=t}({url:t.homepage})},children:[Object(u.jsx)(x.a,{item:!0,xs:12,component:j.a,sx:{fontSize:"h4.fontSize"},children:t.name}),Object(u.jsx)(x.a,{item:!0,xs:12,component:j.a,sx:{fontSize:"body1.fontSize"},children:t.description})]})}var S=n(49),y=n(50),C=n.n(y);function k(){return C.a.get("https://asia-northeast3-github-api-332405.cloudfunctions.net/get_github_repos").then((function(e){var t=[];console.log(e.data);for(var n=0;n<e.data.length;n++)console.log(e.data),["CLANE","deepwalk-clone","demucs-clone","pggan-clone","npg","AmSanWang"].includes(e.data[n].name)&&t.push(Object(S.a)({},e.data[n]));return t}))}function z(){var e=Object(c.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),a=Object(g.a)(o,2),s=a[0],l=a[1],j=Object(c.useState)(null),b=Object(g.a)(j,2),h=b[0],p=b[1];return Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(null),p(null),l(!0),e.next=6,k();case 6:t=e.sent,r(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),p(e.t0);case 13:l(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),s?Object(u.jsx)(i.a,{children:Object(u.jsx)(x.a,{container:!0,justifyContent:"center",alignItems:"center",children:"Loading"})}):h?Object(u.jsx)(i.a,{children:Object(u.jsx)(x.a,{container:!0,justifyContent:"center",alignItems:"center",children:h.e})}):n?Object(u.jsx)(i.a,{children:Object(u.jsx)(x.a,{container:!0,justifyContent:"center",alignItems:"center",children:n.map((function(e,t){return Object(u.jsx)(v,{project:e},t)}))})}):Object(u.jsx)(i.a,{children:Object(u.jsx)(x.a,{container:!0,justifyContent:"center",alignItems:"center",children:"No projects"})})}var w=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsx)(i.a,{sx:{marginTop:"6rem"},children:Object(u.jsx)(z,{})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))},F=n(51);a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(F.a,{children:Object(u.jsx)(w,{})})}),document.getElementById("root")),I()}},[[85,1,2]]]);
//# sourceMappingURL=main.6d903039.chunk.js.map