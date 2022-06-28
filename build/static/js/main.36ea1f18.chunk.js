(this["webpackJsonptela-frontend"]=this["webpackJsonptela-frontend"]||[]).push([[0],{109:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),s=n(21),o=n.n(s),i=(n(109),n(110),n(111),n(13)),l=n.n(i),u=n(43),d=n(15),j=n(101),b=n(12),h=n(32),f=n.n(h),x=n(100),O=Object(x.a)({name:"userTasks",initialState:{user:null,tasks:[],studentsProfile:[]},reducers:{willLogin:function(e,t){return e},willLogout:function(e,t){return e},willGetUserProfile:function(e,t){return e},willLoadTasks:function(e,t){return e},willCreateTask:function(e,t){return e},willCreateTransaction:function(e,t){return e},willLoadStudentsProfile:function(e,t){return e},didGetUserProfile:function(e,t){e.user=t.payload},didLogout:function(e){e.user=null,e.tasks=[],localStorage.removeItem("passcode")},didLoadTasks:function(e,t){e.tasks=t.payload},didLoadStudentsProfile:function(e,t){e.studentsProfile=t.payload}}}),p=O.actions,m=O.reducer,g=function(e){return e.userTasks.tasks},v=function(e){return e.userTasks.user},k=function(e){return e.userTasks.studentsProfile},w=function(e){return function(t){for(var n=t.userTasks.studentsProfile,a=0;a<n.length;a++)if(n[a].wenet_id==e)return n[a];return null}},y=n(215),T=n(192),C=n(193),S=n(194),_=n(195),A=n(196),E=n(216),N=n(217),F=n(218),L=n(197),P=function(e){var t=e.className,n=e.section,r=e.showMenu,s=void 0!==r&&r,o=Object(y.a)("frontend",{useSuspense:!1}),i=o.t,l=(o.i18n,void 0!=i(n)?i(n):"Forum"),u=c.a.useState(!1),j=Object(d.a)(u,2),h=j[0],f=j[1],x=Object(b.d)(),O=Object(b.e)(v);return console.log("UserProfile:",O),Object(a.jsxs)(T.a,{style:{marginBottom:"10px"},className:t,color:"primary",light:!0,expand:"md",children:[Object(a.jsxs)(C.a,{className:"text-white font-weight-bold",href:"/",children:["RIALENET - ",l]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S.a,{onClick:function(){return f(!h)}}),Object(a.jsxs)(_.a,{isOpen:h,navbar:!0,children:[Object(a.jsx)(A.a,{className:"mr-auto",navbar:!0}),Object(a.jsx)(A.a,{navbar:!0,children:null!=O&&null!=O.name&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(E.a,{nav:!0,inNavbar:!0,children:[Object(a.jsxs)(N.a,{className:"text-white",nav:!0,caret:!0,children:[O.name.first," ",O.name.last]}),Object(a.jsx)(F.a,{right:!0,children:Object(a.jsx)(L.a,{onClick:function(){x(p.willLogout(""))},children:"Logout"})})]})})})]})]})]})},I=n(198),U=n(199),D=n(28),Y=n(40),G=n(35),W=n(95),M=function e(){Object(W.a)(this,e)};M.admin=1,M.teacher=2,M.student=3;var B=function(e){var t=e.active,n=e.role,r=Object(y.a)("frontend",{useSuspense:!1}),c=r.t;r.i18n;return console.log("Role in sidebar ->",n,M.teacher,n==M.teacher||n==M.admin),Object(a.jsx)("div",{style:{border:"0px solid #000",width:"240px",position:"absolute",backgroundColor:"#f1f1f1",bottom:0,top:56},children:Object(a.jsxs)(A.a,{vertical:!0,className:"list-unstyled pb-3",children:[Object(a.jsx)(I.a,{active:"public_area"===t,className:"mb-1",children:Object(a.jsxs)(U.a,{className:"public_area"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:G.a,to:"/forum",children:[Object(a.jsx)(D.a,{icon:Y.a,className:"mr-2"})," ",c("public_area")]})}),(n==M.student||n==M.admin)&&Object(a.jsx)(I.a,{active:"student_dashboard"===t,className:"mb-1",children:Object(a.jsxs)(U.a,{className:"student_dashboard"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:G.a,to:"/student_dashboard",children:[Object(a.jsx)(D.a,{icon:Y.a,className:"mr-2"})," ",c("student_area")]})}),(n==M.teacher||n==M.admin)&&Object(a.jsx)(I.a,{active:"teacher_dashboard"===t,className:"mb-1",children:Object(a.jsxs)(U.a,{className:"teacher_dashboard"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:G.a,to:"/teacher_dashboard",children:[Object(a.jsx)(D.a,{icon:Y.a,className:"mr-2"})," ",c("teacher_area")]})})]})})},R=function(e){var t=e.children,n=e.className,r=e.fluid,c=void 0!==r&&r;return Object(a.jsx)("div",{className:n,style:{border:"0px solid #000",position:"absolute",backgroundColor:"white",bottom:0,top:56,left:c?0:240,right:0},children:t})},z=n(200),q=n(201),J=n(202),K=n(203),V=n(149),Q=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),c=n[0],s=n[1],o=Object(b.d)(),i=Object(b.e)(g),l=Object(b.e)(v),u=Object(y.a)("frontend",{useSuspense:!1}),h=u.t,f=(u.i18n,0),x=new URLSearchParams(window.location.search),O=localStorage.getItem("passcode"),m=x.get("passcode");console.log("params:",O);null!=m&&V(O);c.map((function(e){f+=1,e.replies&&e.replies.map((function(e){return f+=1}))}));return Object(r.useEffect)((function(){o(p.willGetUserProfile()),o(p.willLoadTasks())}),[]),Object(r.useEffect)((function(){s(null!=i?i.map((function(e){return{userId:"01a",comId:"012",fullName:"Riya Negi",avatarUrl:"https://ui-avatars.com/api/name=Riya&background=random",text:e.goal.name,replies:[]}})):[])}),[i]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P,{className:"mb-0 text-white",section:"public_area",showMenu:!0}),Object(a.jsx)(B,{active:"public_area",role:null!=l?l.role_id:null}),Object(a.jsx)(R,{children:Object(a.jsxs)(z.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsxs)(J.a,{children:[h("public_area")," (n.",f," ",h("comments"),")"]})}),Object(a.jsx)(K.a,{children:Object(a.jsx)(j.a,{currentUser:{userId:"01a",avatarUrl:"https://ui-avatars.com/api/name=Riya&background=random",name:"xyz"},commentsArray:c||[],setComment:s,signinUrl:"/signin",signupUrl:"/signup"})})]})})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,219)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},X=(n(152),n(20)),Z=n(96),$=n(102),ee=n(24),te=n(81),ne=n(16),ae=n(22),re=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/newtask",e.prev=1,e.next=4,fetch("/newtask",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({content:t})});case 4:return n=e.sent,console.log("SAGA2 API WENET newtask response:",n),e.next=8,n.text();case 8:return a=e.sent,console.log("SAGA2 API WENET newtask result:",a),e.abrupt("return",a);case 13:return e.prev=13,e.t0=e.catch(1),console.log("WENET API newtask response error:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/newtransaction",e.prev=1,e.next=4,fetch("/newtransaction",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({content:t})});case 4:return n=e.sent,console.log("SAGA2 (API) WENET newtransaction response:",n),e.next=8,n.text();case 8:return a=e.sent,console.log("SAGA2 (API) WENET newtransaction result:",a),e.abrupt("return",a);case 13:return e.prev=13,e.t0=e.catch(1),console.log("WENET newtransaction response error:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),se=l.a.mark(be),oe=l.a.mark(he),ie=l.a.mark(fe),le=l.a.mark(xe),ue=l.a.mark(Oe),de=l.a.mark(pe),je=l.a.mark(me);function be(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.d)(p.willGetUserProfile.type,fe);case 2:return e.next=4,Object(ne.d)(p.willLogout.type,he);case 4:return e.next=6,Object(ne.d)(p.willLoadTasks.type,pe);case 6:return e.next=8,Object(ne.d)(p.willLoadStudentsProfile.type,me);case 8:return e.next=10,Object(ne.d)(p.willCreateTask.type,xe);case 10:return e.next=12,Object(ne.d)(p.willCreateTransaction.type,Oe);case 12:case"end":return e.stop()}}),se)}function he(e){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.c)(p.didLogout());case 2:return e.next=4,Object(ne.c)(Object(ae.d)("/logout"));case 4:case"end":return e.stop()}}),oe)}function fe(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/userprofile",e.prev=1,e.next=4,Object(ne.b)((function(){return fetch("/userprofile").then((function(e){return e.json()})).then((function(e){return e}))}));case 4:return t=e.sent,n=null==t?[]:t,e.next=8,Object(ne.c)(p.didGetUserProfile(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(ne.c)(p.didGetUserProfile(null));case 14:case"end":return e.stop()}}),ie,null,[[1,10]])}function xe(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(ne.b)(re,t);case 3:if(null==(n=a.sent)){a.next=10;break}return console.log("SAGA2 willCreateTask result OK. Loading tasks...|",n),a.next=8,Object(ne.c)(p.willLoadTasks());case 8:a.next=11;break;case 10:console.log("SAGA2 willCreateNewTask error");case 11:case"end":return a.stop()}}),le)}function Oe(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(ne.b)(ce,t);case 3:if(null==(n=a.sent)){a.next=10;break}return console.log("SAGA2 willCreateTransaction result OK. Loading tasks...|",n),a.next=8,Object(ne.c)(p.willLoadTasks());case 8:a.next=11;break;case 10:console.log("SAGA2 willCreateTransaction error");case 11:case"end":return a.stop()}}),ue)}function pe(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SAGA2 called willLoadTasks NEW!"),"/tasks",e.prev=2,e.next=5,Object(ne.b)((function(){return fetch("/tasks").then((function(e){return e.json()})).then((function(e){return e}))}));case 5:return t=e.sent,n=null==t?[]:t.tasks,e.next=9,Object(ne.c)(p.didLoadTasks(n));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(2),e.next=15,Object(ne.c)(p.didLoadTasks([]));case 15:case"end":return e.stop()}}),de,null,[[2,11]])}function me(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/students",e.prev=1,e.next=4,Object(ne.b)((function(){return fetch("/students").then((function(e){return e.json()})).then((function(e){return e}))}));case 4:return t=e.sent,n=null==t?[]:t,e.next=8,Object(ne.c)(p.didLoadStudentsProfile(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(ne.c)(p.didLoadStudentsProfile([]));case 14:case"end":return e.stop()}}),je,null,[[1,10]])}var ge=l.a.mark(ve);function ve(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in root saga"),e.next=3,Object(ne.a)([be()]);case 3:case"end":return e.stop()}}),ge)}var ke=ve,we=n(38),ye=Object(ee.a)(),Te=function(e){var t,n=Object($.a)(),a=[Object(te.a)(ye),n],r=[X.applyMiddleware.apply(void 0,a)],c=Z.composeWithDevTools.apply(void 0,r),s=(t=ye,Object(X.combineReducers)({router:Object(we.b)(t),userTasks:m})),o=Object(X.createStore)(s,e,c);return n.run(ke),o},Ce=n(17),Se=n(204),_e=n(205),Ae=n(206),Ee=n(207),Ne=n(208),Fe=n(209),Le=n(92),Pe=n(41),Ie={cannotAnswer:"reason",needClarification:"note",notSure:"note",myAnswer:"answer",goToAttachment:"attachment",goToTimelinePosition:"timelineLink",goToTag:"tag",rightAnswer:"message"},Ue=["cannotAnswer","needClarification","notSure","myAnswer"],De=["goToAttachment","goToTimelinePosition","goToTag","rightAnswer"],Ye=function(e){var t=e.transaction;console.log("Transaction: (props) ",t);var n=Object(y.a)("frontend",{useSuspense:!1}),c=n.t,s=(n.i18n,Object(r.useState)(null==t?-1:Ue.indexOf(t.label))),o=Object(d.a)(s,2),i=o[0],l=o[1],u=Object(r.useState)(null==t?"":t.attributes[Ie[t.label]]),j=Object(d.a)(u,2),b=j[0],h=j[1],x=function(t,n,r){return Object(a.jsxs)(Se.a,{check:!0,disabled:e.readonly,children:[Object(a.jsx)(_e.a,{disabled:e.readonly,name:t,value:r,onChange:function(t){return function(t){console.log("selected choice:",t.target.value),l(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(Ue[i],b)}(t)},checked:i==r,type:"radio"})," ",Object(a.jsx)(Ae.a,{check:!0,children:n})]},r)},O=e.readonly?"_done":"",p="selectAnswer".concat(O);return Object(a.jsxs)(a.Fragment,{children:[e.transaction&&Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)(Ae.a,{children:Object(a.jsx)("b",{children:f()(e.transaction._creationTs).format("DD/MM/YYYY - hh:mm")})})}),Object(a.jsxs)(Ee.a,{style:{border:"1px solid #007bff",padding:"10px",margin:"10px"},children:[Object(a.jsx)(Ae.a,{children:Object(a.jsx)("b",{children:c(p)})}),Ue.map((function(e,t){return x("studentChoice",c(e),t)})),function(){var t=e.readonly?"_done":"",n="".concat(Ue[i]).concat(t);return i>=0&&Object(a.jsx)(Se.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Ae.a,{for:"studentAnswerText",children:Object(a.jsx)("b",{children:c("comment_on_".concat(n))})}),Object(a.jsx)(_e.a,{disabled:e.readonly,id:"studentAnswerText",name:"text",type:"textarea",onChange:function(t){return function(t){console.log("current text:",t.target.value),h(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(Ue[i],t.target.value)}(t)},value:b})]})})}(),function(){var t=function(){var t=e.teacherFeedback;return e.transaction,null==t?null:(console.log("TF FeedbackTransaction ID:",t),t.attributes[Ie[t.label]])}();return t&&Object(a.jsx)(Se.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Ae.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:c("teacherFeedback")})}),Object(a.jsx)(_e.a,{disabled:e.readonly,id:"teacherAnswerText",name:"text",type:"textarea",value:t})]})})}()]})]})},Ge=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],o=function(){return s(!c)},i=Object(y.a)("frontend",{useSuspense:!1}),l=i.t,u=(i.i18n,Object(b.d)()),j=Object(r.useState)(null),h=Object(d.a)(j,2),x=h[0],O=h[1],m=Object(b.e)(v),g=Object(r.useState)({}),k=Object(d.a)(g,2),w=k[0],T=k[1],C=Object(r.useState)(!1),S=Object(d.a)(C,2),A=S[0],E=S[1],N=Object(r.useState)([]),F=Object(d.a)(N,2),L=F[0],P=F[1];Object(r.useEffect)((function(){var t=e.task;console.log("Student task:",t);for(var n={},a=0;a<t.transactions.length;a++){var r=t.transactions[a].attributes.transactionID;null!=r&&(n[r]=t.transactions[a]),console.log("SC: setFeedbackTeacherTransactions to->: ",n),T(n),P(I()),E(!0);var c=Object.keys(n);console.log("SC: FilteredTransactionLen:",L.length),console.log("SC: NewTransactionFormVisible",A);for(var s=0;s<L.length;s++)c.includes(L[s].id)||E(!1);E(L.length==Object.keys(n).length)}}),[e.task]);var I=function(){if(console.log("Transaction: (Task):",e.task.transactions),null==e.task.transactions)return[];var t=e.task.transactions.filter((function(e){return console.log("Transaction: (Filter):",e),Ue.includes(e.label)&&null!=m&&m.id==e.actioneerId}));return t.sort((function(e,t){return e._creationTs-t._creationTs})),t};return function(){var t=e.task.goal.name,n=e.task.goal.description,r=f()(e.task._creationTs).format("DD/MM/YYYY - hh:mm");return Object(a.jsxs)(z.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{onClick:function(){o()},style:{cursor:"pointer",backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(J.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignContent:"space-between"},children:["(",r,") ",t,c?Object(a.jsx)(Pe.b,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}}):Object(a.jsx)(Pe.a,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}})]})})}),Object(a.jsxs)(_.a,{isOpen:c,children:[n&&Object(a.jsx)(Ne.a,{style:{padding:"10px",margin:"10px",backgroundColor:"#EEEEEE"},children:n}),Object(a.jsx)(K.a,{children:Object(a.jsxs)(Ee.a,{children:[(console.log("Transaction: (filtered):",L),L.map((function(e){return Object(a.jsx)(Ye,{readonly:!0,transaction:e,teacherFeedback:w[e.id]})}))),A&&Object(a.jsx)(Ye,{onUpdate:function(e,t){return O({label:e,message:t})}})]})}),Object(a.jsx)(Fe.a,{children:Object(a.jsx)(Le.a,{color:"primary",onClick:function(t){!function(){if(null!=x){var t={taskId:e.task.id,content:{label:x.label,message:x.message}};console.log("SAGA2 request da StudentComponents di willCreateTransaction"),u(p.willCreateTransaction(t))}}()},children:l("send")})})]})]})}()},We=function(e){var t=Object(b.e)(v),n=Object(b.e)(g),c=Object(b.d)();Object(r.useEffect)((function(){c(p.willGetUserProfile()),c(p.willLoadTasks())}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P,{className:"mb-0 text-white",section:"student_area",showMenu:!0}),Object(a.jsx)(B,{active:"student_dashboard",role:null!=t?t.role_id:null}),Object(a.jsx)(R,{children:n&&n.map((function(e,t){return Object(a.jsx)(Ge,{task:e},t)}))})]})},Me=n(214),Be=n(210),Re=n(211),ze=function(e){var t=e.transaction,n=Object(y.a)("frontend",{useSuspense:!1}),c=n.t,s=(n.i18n,Object(r.useState)(null==t?-1:De.indexOf(t.label))),o=Object(d.a)(s,2),i=o[0],l=o[1],u=Object(r.useState)(""),j=Object(d.a)(u,2),h=j[0],f=j[1],x=Object(b.d)(),O=function(t,n,r){return Object(a.jsxs)(Se.a,{check:!0,disabled:e.readonly,children:[Object(a.jsx)(_e.a,{disabled:e.readonly,name:t,value:r,onChange:function(e){return m(e)},checked:i==r,type:"radio"})," ",Object(a.jsx)(Ae.a,{check:!0,children:n})]},r)},m=function(t){console.log("selected feedback choice:",t.target.value),l(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(De[i],h)},g=function(t){console.log("current text:",t.target.value),f(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(De[i],t.target.value)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{style:{marginTop:"20px"},children:Object(a.jsx)(Ae.a,{children:Object(a.jsx)("b",{children:c("send_feedback_to_student")})})}),De.map((function(e,t){return O("teacherChoice",c(e),t)})),i>=0&&Object(a.jsxs)(Se.a,{children:[Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Ae.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:c("teacher_comment_on_".concat(De[i]))})}),Object(a.jsx)(_e.a,{disabled:!1,id:"teacherAnswerText",name:"text",type:"textarea",onChange:function(e){g(e)},value:h})]}),Object(a.jsx)("div",{style:{display:"flex",marginTop:"10px",justifyContent:"flex-end"},children:Object(a.jsx)(Le.a,{onClick:function(){return function(){if(!(i<0)){var t={taskId:e.transaction.taskId,content:{label:De[i],message:h,transactionID:e.transaction.id}};console.log("Feedback payload:",t),x(p.willCreateTransaction(t))}}()},color:"primary",children:c("send")})})]})]})},qe=function(e){var t=e.transaction;console.log("Transaction: (props) ",t);var n=Object(b.e)(w(t&&t.actioneerId)),c=Object(y.a)("frontend",{useSuspense:!1}),s=c.t,o=(c.i18n,Object(r.useState)(null==t?-1:Ue.indexOf(t.label))),i=Object(d.a)(o,2),l=i[0],u=i[1],j=Object(r.useState)(null==t?"":t.attributes[Ie[t.label]]),h=Object(d.a)(j,2),x=h[0],O=(h[1],function(t,n,r){return Object(a.jsxs)(Se.a,{check:!0,disabled:e.readonly,children:[Object(a.jsx)(_e.a,{disabled:e.readonly,name:t,value:r,onChange:function(t){return function(t){console.log("selected choice:",t.target.value),u(t.target.value),e.onUpdate&&l>=0&&e.onUpdate(Ue[l],x)}(t)},checked:l==r,type:"radio"})," ",Object(a.jsx)(Ae.a,{check:!0,children:n})]},r)}),p=function(){var t=e.teacherFeedback;e.transaction;return null==t?null:(console.log("TF FeedbackTransaction ID:",t),s("".concat(t.label))+" "+t.attributes[Ie[t.label]])};return Object(a.jsxs)(a.Fragment,{children:[e.transaction&&Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:n?Object(a.jsx)(Ae.a,{children:Object(a.jsxs)("b",{children:[n.name," "," "," ",n.surname," - "," ",f()(e.transaction._creationTs).format("DD/MM/YYYY - hh:mm")]})}):Object(a.jsx)(Ae.a,{children:Object(a.jsx)("b",{children:f()(e.transaction._creationTs).format("DD/MM/YYYY - hh:mm")})})}),Object(a.jsxs)(Ee.a,{style:{border:"1px solid #007bff",padding:"10px",margin:"10px"},children:[Object(a.jsx)(Ae.a,{children:Object(a.jsx)("b",{children:s("teacher_selectAnswer")})}),Ue.map((function(e,t){return O("studentChoice",s(e),t)})),l>=0&&Object(a.jsx)(Se.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Ae.a,{for:"studentAnswerText",children:Object(a.jsx)("b",{children:s("teacher_comment_on_".concat(Ue[l]))})}),Object(a.jsx)(_e.a,{disabled:!0,id:"studentAnswerText",name:"text",type:"textarea",onChange:function(e){},value:x})]})}),null!=e.teacherFeedback?Object(a.jsx)(Se.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Ae.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:s("teacherFeedback")})}),Object(a.jsx)(_e.a,{disabled:e.readonly,id:"teacherAnswerText",name:"text",type:"textarea",value:p()})]})}):Object(a.jsx)(ze,{transaction:e.transaction})]})]})},Je=function(e){var t=Object(y.a)("frontend",{useSuspense:!1}),n=t.t,c=(t.i18n,Object(r.useState)("")),s=Object(d.a)(c,2),o=s[0],i=s[1],l=Object(r.useState)(""),u=Object(d.a)(l,2),j=u[0],h=u[1],f=Object(b.d)();return Object(a.jsxs)(Ee.a,{children:[Object(a.jsx)(Se.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Ae.a,{for:"teacherTaskTitle",children:Object(a.jsx)("b",{children:n("teacherTaskTitle")})}),Object(a.jsx)(_e.a,{id:"teacherTaskTitle",name:"text",type:"text",onChange:function(e){return function(e){i(e.target.value)}(e)},value:o})]})}),Object(a.jsx)(Se.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Ae.a,{for:"teacherTaskDescription",children:Object(a.jsx)("b",{children:n("teacherTaskDescription")})}),Object(a.jsx)(_e.a,{id:"teacherTaskDescription",name:"text",type:"textarea",onChange:function(e){return function(e){h(e.target.value)}(e)},value:j})]})}),Object(a.jsx)(Se.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)(Le.a,{onClick:function(t){e.onClose()},children:"Annulla"}),Object(a.jsx)(Le.a,{color:"primary",onClick:function(t){f(p.willCreateTask({name:o,description:j})),e.onClose()},children:n("send")})]})})]})},Ke=function(e){Object(b.e)(v);var t=Object(y.a)("frontend",{useSuspense:!1}),n=t.t,c=(t.i18n,Object(r.useState)(!1)),s=Object(d.a)(c,2),o=s[0],i=s[1],l=Object(b.d)(),u=Object(b.e)(g);Object(r.useEffect)((function(){l(p.willGetUserProfile()),l(p.willLoadTasks())}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(T.a,{style:{marginBottom:"10px"},className:"mb-0 text-white",color:"primary",light:!0,expand:"md",children:[Object(a.jsx)(C.a,{className:"text-white font-weight-bold",href:"/",children:n("answers_and_questions")}),Object(a.jsx)(A.a,{className:"mr-auto",navbar:!0}),Object(a.jsx)(A.a,{navbar:!0,children:Object(a.jsxs)(Le.a,{onClick:function(e){console.log("Click new Question"),i(!0)},style:{height:34,marginRight:12,marginTop:6,marginBottom:6,borderWidth:1,borderColor:"white",borderStyle:"solid",borderRadius:4},color:"primary",children:[Object(a.jsx)(D.a,{icon:Y.b}),n("new_question")]})})]}),o&&Object(a.jsxs)(Me.a,{isOpen:o,children:[Object(a.jsx)(Be.a,{children:n("new_question")}),Object(a.jsx)(Re.a,{children:Object(a.jsx)(Je,{onClose:function(){return i(!1)}})})]}),u&&u.map((function(e,t){return Object(a.jsx)(Ve,{task:e},t)}))]})},Ve=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1],o=function(){return s(!c)},i=Object(y.a)("frontend",{useSuspense:!1}),l=(i.t,i.i18n,Object(b.e)(v),Object(r.useState)({})),u=Object(d.a)(l,2),j=u[0],h=u[1];Object(r.useEffect)((function(){var t=e.task;console.log("Student task:",t);for(var n={},a=0;a<t.transactions.length;a++){var r=t.transactions[a].attributes.transactionID;null!=r&&(n[r]=t.transactions[a]),console.log("setFeedbackTeacherTransactions to->: ",n),h(n)}}),[e.task]);var x=function(){var t=function(){if(console.log("Transaction: (Task):",e.task.transactions),null==e.task.transactions)return[];var t=e.task.transactions.filter((function(e){return console.log("Transaction: (Filter):",e),Ue.includes(e.label)}));return t.sort((function(e,t){return e._creationTs-t._creationTs})),t}();return console.log("Transaction: (filter):",t),t.map((function(e,t){return Object(a.jsx)(qe,{readonly:!0,transaction:e,teacherFeedback:j[e.id]},t)}))};return function(){var t=e.task.goal.name,n=e.task.goal.description,r=f()(e.task._creationTs).format("DD/MM/YYYY - hh:mm");return Object(a.jsxs)(z.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{onClick:function(){o()},style:{cursor:"pointer",backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(J.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignContent:"space-between"},children:["(",r,") ",t,c?Object(a.jsx)(Pe.b,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}}):Object(a.jsx)(Pe.a,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}})]})})}),Object(a.jsxs)(_.a,{isOpen:c,children:[n&&Object(a.jsx)(Ne.a,{style:{padding:"10px",margin:"10px",backgroundColor:"#EEEEEE"},children:n}),Object(a.jsx)(K.a,{children:Object(a.jsx)(Ee.a,{children:x()})})]})]})}()},Qe=n(97),He=n.n(Qe),Xe=function(e){var t=Object(y.a)("frontend",{useSuspense:!1}),n=t.t,r=(t.i18n,Object(b.d)()),s=Object(b.e)(k),o=[{dataField:"name",text:n("name"),sort:!0},{dataField:"surname",text:n("surname"),sort:!0},{dataField:"passcode",text:n("passcode"),sort:!0,hidden:!1},{dataField:"id",text:n("profile"),sort:!0},{dataField:"description",text:n("description"),sort:!1}];return c.a.useEffect((function(){return r(p.willLoadStudentsProfile(null)),function(){}}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(He.a,{bootstrap4:!0,keyField:"passcode",data:s,columns:o})})},Ze=n(212),$e=n(213),et=function(e){var t=Object(b.e)(v),n=Object(r.useState)("0"),c=Object(d.a)(n,2),s=c[0],o=c[1],i=Object(y.a)("frontend",{useSuspense:!1}),l=i.t,u=(i.i18n,Object(b.d)());return Object(r.useEffect)((function(){u(p.willGetUserProfile())}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P,{className:"mb-0 text-white",section:"teacher_area",showMenu:!0}),Object(a.jsx)(B,{active:"teacher_dashboard",role:null!=t?t.role_id:null}),Object(a.jsxs)(R,{children:[Object(a.jsxs)(A.a,{tabs:!0,children:[Object(a.jsx)(I.a,{children:Object(a.jsx)(U.a,{style:"0"===s?{cursor:"arrow",fontWeight:"bold",background:"#EEEEEE"}:{cursor:"pointer",fontWeight:"normal"},onClick:function(){o("0")},children:l("students_answers")})}),Object(a.jsx)(I.a,{children:Object(a.jsx)(U.a,{style:"1"===s?{cursor:"arrow",fontWeight:"bold",background:"#EEEEEE"}:{cursor:"pointer",fontWeight:"normal"},onClick:function(){o("1")},children:l("students_profile")})})]}),Object(a.jsxs)(Ze.a,{activeTab:s,children:[Object(a.jsx)($e.a,{tabId:"0",children:Object(a.jsx)(Ke,{})}),Object(a.jsx)($e.a,{tabId:"1",children:Object(a.jsx)(Xe,{})})]})]})]})},tt=function(){var e=Object(y.a)("frontend",{useSuspense:!1}),t=e.t,n=(e.i18n,Object(r.useState)(null)),c=Object(d.a)(n,2),s=c[0],o=c[1];Object(r.useEffect)((function(){localStorage.setItem("passcode",s)}),[s]);var i=function(e){console.log("entered:",e.target.value),function(e){var t="abcdefghijklmnopqrstuvwxyz".toUpperCase();try{var n=e.trim().toUpperCase();if(8!=n.length)throw"Invalid";for(var a=0,r=0;r<n.length-1;r++)a+=t.indexOf(n.charAt(r));var c=(a-=t.indexOf(n.charAt(7)))%t.length==0;o(c?n:null)}catch(s){o(null)}}(e.target.value)};return Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(a.jsxs)(z.a,{className:"mb-4",style:{borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(J.a,{style:{textAlign:"center"},children:t("platform_title")})}),Object(a.jsx)(K.a,{children:Object(a.jsx)(_e.a,{onChange:function(e){return i(e)},type:"text",name:"passcode",id:"passcode",placeholder:t("passcode_enter")})}),Object(a.jsx)(Fe.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:s&&Object(a.jsx)("a",{href:"/connect?passcode=".concat(s),children:t("connect_to_wenet")})})]})})},nt=function(){return Object(a.jsx)(we.a,{history:ye,children:Object(a.jsxs)(Ce.c,{children:[Object(a.jsx)(Ce.a,{path:"/forum",children:Object(a.jsx)(Q,{})}),Object(a.jsx)(Ce.a,{path:"/student_dashboard",children:Object(a.jsx)(We,{})}),Object(a.jsx)(Ce.a,{path:"/teacher_dashboard",children:Object(a.jsx)(et,{})}),Object(a.jsx)(Ce.a,{path:"/",children:Object(a.jsx)(tt,{})})]})})};function at(){return Object(a.jsx)(b.a,{store:Te({}),children:Object(a.jsx)(nt,{})})}var rt=n(68),ct=n(46),st=n(98);n(191);rt.a.use(st.a).use(ct.e).init({ns:["tl","frontend"],defaultNS:"tl",fallbackLng:"it",debug:!0,interpolation:{escapeValue:!1}});var ot=rt.a;"it-IT"!==(window.navigator.userLanguage||window.navigator.language)?ot.changeLanguage("en-US"):ot.changeLanguage("it-IT"),o.a.render(Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(at,{})}),document.getElementById("root")),H()}},[[189,1,2]]]);
//# sourceMappingURL=main.36ea1f18.chunk.js.map