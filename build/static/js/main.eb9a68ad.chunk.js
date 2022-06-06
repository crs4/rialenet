(this["webpackJsonptela-frontend"]=this["webpackJsonptela-frontend"]||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),s=n(20),o=n.n(s),i=(n(76),n(77),n(19)),l=n.n(i),d=(n(62),n(30)),u=n(69),j=n(24),b=(n(87),n(68)),h=Object(b.a)({name:"userTasks",initialState:{user:null,tasks:[]},reducers:{willLogin:function(e,t){return e},willLogout:function(e,t){return e},willLoadTasks:function(e,t){return e},didLogin:function(e,t){e.user=t.payload},didLogout:function(e){e.user=null,localStorage.removeItem("passcode")},didLoadTasks:function(e,t){e.tasks=t.payload}}}),f=h.actions,x=h.reducer,p=function(e){return e.tasks},O=n(117),m=n(118),g=n(119),v=n(120),y=n(121),w=n(132),k=n(131),C=n(133),N=n(122),L=n(123),I=n(25),F=function(e){var t=e.className,n=e.section,r=e.showMenu,s=void 0!==r&&r,o=void 0!=n?n:"Forum",i=c.a.useState(!1),l=Object(d.a)(i,2),u=l[0],j=l[1],b="Rana",h="Volante";return Object(a.jsxs)(O.a,{className:t,color:"primary",light:!0,expand:"md",children:[Object(a.jsxs)(m.a,{className:"text-white font-weight-bold",href:"/",children:["RIALE - ",o]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g.a,{onClick:function(){return j(!u)}}),Object(a.jsxs)(v.a,{isOpen:u,navbar:!0,children:[Object(a.jsx)(y.a,{className:"mr-auto",navbar:!0}),Object(a.jsx)(y.a,{navbar:!0,children:Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(w.a,{nav:!0,inNavbar:!0,children:[Object(a.jsxs)(k.a,{className:"text-white",nav:!0,caret:!0,children:[b," ",h]}),Object(a.jsx)(C.a,{right:!0,children:Object(a.jsx)(N.a,{children:Object(a.jsx)(L.a,{className:"text-primary",style:{color:"white",textDecoration:"none"},tag:I.a,to:"/logout",children:"Logout"})})})]})})})]})]})]})},T=n(124),S=n(32),R=n(66),D=function(e){var t=e.active;return Object(a.jsx)("div",{style:{border:"0px solid #000",width:"240px",position:"absolute",backgroundColor:"#f1f1f1",bottom:0,top:56},children:Object(a.jsx)(y.a,{vertical:!0,className:"list-unstyled pb-3",children:Object(a.jsx)(T.a,{active:"dashboard"===t,className:"mb-1",children:Object(a.jsxs)(L.a,{className:"dashboard"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:I.a,to:"/dashboard",children:[Object(a.jsx)(S.a,{icon:R.a,className:"mr-2"})," Dashboard"]})})})})},E=function(e){var t=e.children,n=e.className,r=e.fluid,c=void 0!==r&&r;return Object(a.jsx)("div",{className:n,style:{border:"0px solid #000",position:"absolute",backgroundColor:"white",bottom:0,top:56,left:c?0:240,right:0},children:t})},U=n(125),A=n(126),B=n(127),P=n(128),W=n(112),M=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),c=n[0],s=n[1],o=Object(j.d)(),i=(Object(j.e)(p),0),l=new URLSearchParams(window.location.search),b=localStorage.getItem("passcode"),h=l.get("passcode");console.log("params:",b);var x=null!=h&&W(b)==h;c.map((function(e){i+=1,e.replies&&e.replies.map((function(e){return i+=1}))}));return Object(r.useEffect)((function(){o(f.willLoadTasks())}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(F,{className:"mb-0 text-white",section:"Forum",showMenu:!0}),Object(a.jsx)(D,{active:"dashboard"}),Object(a.jsx)(E,{children:Object(a.jsxs)(U.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(A.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsxs)(B.a,{children:["RIALENET - Forum degli studenti (n.",i," Commenti) ",x?"OK":"FORBIDDEN",b&&Object(a.jsx)("div",{className:"pull-right",children:b})]})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(u.a,{currentUser:{userId:"01a",avatarUrl:"https://ui-avatars.com/api/name=Riya&background=random",name:"xyz"},commentsArray:c||[],setComment:s,signinUrl:"/signin",signupUrl:"/signup"})})]})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},J=(n(115),n(15)),q=n(67),K=n(70),V=n(17),G=n(61),H=n(27),Q=l.a.mark(Y),X=l.a.mark(Z);function Y(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(H.d)(f.willLoadTasks.type,Z);case 2:case"end":return e.stop()}}),Q)}function Z(e){var t,n,a,r;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return e.payload,t=localStorage.getItem("passcode"),n="/tasks?passcode=".concat(t),c.prev=3,c.next=6,Object(H.b)((function(){return fetch(n).then((function(e){return e.json()})).then((function(e){return e}))}));case 6:return a=c.sent,r=null==a?[]:a.tasks,c.next=10,Object(H.c)(f.didLoadTasks(r));case 10:c.next=16;break;case 12:return c.prev=12,c.t0=c.catch(3),c.next=16,Object(H.c)(f.didLoadTasks([]));case 16:case"end":return c.stop()}}),X,null,[[3,12]])}var $=l.a.mark(_);function _(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in root saga"),e.next=3,Object(H.a)([Y()]);case 3:case"end":return e.stop()}}),$)}var ee=_,te=n(31),ne=Object(V.a)(),ae=function(e){var t,n=Object(K.a)(),a=[Object(G.a)(ne),n],r=[J.applyMiddleware.apply(void 0,a)],c=q.composeWithDevTools.apply(void 0,r),s=(t=ne,Object(J.combineReducers)({router:Object(te.b)(t),userTasks:x})),o=Object(J.createStore)(s,e,c);return n.run(ee),o},re=n(11),ce=n(129),se=n(130),oe=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){localStorage.setItem("passcode",n)}),[n]);var s=function(e){console.log("entered:",e.target.value),function(e){var t="abcdefghijklmnopqrstuvwxyz".toUpperCase();try{var n=e.trim().toUpperCase();if(8!=n.length)throw"Invalid";for(var a=0,r=0;r<n.length-1;r++)a+=t.indexOf(n.charAt(r));var s=(a-=t.indexOf(n.charAt(7)))%t.length==0;c(s?n:null)}catch(o){c(null)}}(e.target.value)};return Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(a.jsxs)(U.a,{className:"mb-4",style:{borderColor:"#007bff"},children:[Object(a.jsx)(A.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(B.a,{style:{textAlign:"center"},children:"Riale Wenet Platform"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(ce.a,{onChange:function(e){return s(e)},type:"text",name:"passcode",id:"passcode",placeholder:"enter a passcode"})}),Object(a.jsx)(se.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:n&&Object(a.jsx)("a",{href:"/connect?passcode=".concat(n),children:"Connect to WeNet"})})]})})},ie=function(){return Object(a.jsx)(te.a,{history:ne,children:Object(a.jsxs)(re.c,{children:[Object(a.jsx)(re.a,{path:"/forum",children:Object(a.jsx)(M,{})}),Object(a.jsx)(re.a,{path:"/",children:Object(a.jsx)(oe,{})})]})})};function le(){return Object(a.jsx)(j.a,{store:ae({}),children:Object(a.jsx)(ie,{})})}o.a.render(Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(le,{})}),document.getElementById("root")),z()},76:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.eb9a68ad.chunk.js.map