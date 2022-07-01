(this["webpackJsonptela-frontend"]=this["webpackJsonptela-frontend"]||[]).push([[0],{121:function(e,t,n){},201:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(1),c=n.n(r),s=n(19),o=n.n(s),i=(n(121),n(122),n(123),n(16)),l=n.n(i),d=n(45),u=n(15),j=(n(110),n(12)),b=n(36),h=n.n(b),x=n(109),f=Object(x.a)({name:"userTasks",initialState:{user:null,tasks:[],studentsProfile:[],isSendingMessage:!1},reducers:{willLogin:function(e,t){return e},willLogout:function(e,t){return e},willGetUserProfile:function(e,t){return e},willLoadTasks:function(e,t){return e},willCreateTask:function(e,t){return e},willCreateTransaction:function(e,t){return e},willLoadStudentsProfile:function(e,t){return e},didGetUserProfile:function(e,t){e.user=t.payload},setIsSendingMessage:function(e,t){e.isSendingMessage=t.payload},didLogout:function(e){e.user=null,e.tasks=[],e.isSendingMessage=!1,localStorage.removeItem("passcode")},didLoadTasks:function(e,t){e.tasks=t.payload},didLoadStudentsProfile:function(e,t){e.studentsProfile=t.payload}}}),O=f.actions,p=f.reducer,g=function(e){return e.userTasks.tasks},m=function(e){return e.userTasks.user},v=function(e){return e.userTasks.studentsProfile},k=function(e){return e.userTasks.isSendingMessage},y=function(e){return function(t){for(var n=t.userTasks.studentsProfile,a=0;a<n.length;a++)if(n[a].wenet_id==e)return n[a];return null}},w=n(241),T=n(215),C=n(216),S=n(217),_=n(218),A=n(219),E=n(242),F=n(243),I=n(244),N=n(220),L=function(e){var t=e.className,n=e.section,r=e.showMenu,s=void 0!==r&&r,o=Object(w.a)("frontend",{useSuspense:!1}),i=o.t,l=(o.i18n,void 0!=i(n)?i(n):"Forum"),d=c.a.useState(!1),b=Object(u.a)(d,2),h=b[0],x=b[1],f=Object(j.d)(),p=Object(j.e)(m);return console.log("UserProfile:",p),Object(a.jsxs)(T.a,{style:{marginBottom:"10px"},className:t,color:"primary",light:!0,expand:"md",children:[Object(a.jsxs)(C.a,{className:"text-white font-weight-bold",children:["RIALENET - ",l]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S.a,{onClick:function(){return x(!h)}}),Object(a.jsxs)(_.a,{isOpen:h,navbar:!0,children:[Object(a.jsx)(A.a,{className:"mr-auto",navbar:!0}),Object(a.jsx)(A.a,{navbar:!0,children:null!=p&&null!=p.name&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(E.a,{nav:!0,inNavbar:!0,children:[Object(a.jsxs)(F.a,{className:"text-white",nav:!0,caret:!0,children:[p.name.first," ",p.name.last]}),Object(a.jsx)(I.a,{right:!0,children:Object(a.jsx)(N.a,{onClick:function(){f(O.willLogout(""))},children:"Logout"})})]})})})]})]})]})},P=n(221),M=n(222),U=n(35),D=n(49),G=n(42),W=n(104),Y=function e(){Object(W.a)(this,e)};Y.admin=1,Y.teacher=2,Y.student=3;var B=function(e){var t=e.active,n=e.role,r=Object(w.a)("frontend",{useSuspense:!1}),c=r.t;r.i18n;return console.log("Role in sidebar ->",n,Y.teacher,n==Y.teacher||n==Y.admin),Object(a.jsx)("div",{style:{border:"0px solid #000",width:"240px",position:"absolute",backgroundColor:"#f1f1f1",bottom:0,top:56},children:Object(a.jsxs)(A.a,{vertical:!0,className:"list-unstyled pb-3",children:[(n==Y.student||n==Y.admin)&&Object(a.jsx)(P.a,{active:"student_dashboard"===t,className:"mb-1",children:Object(a.jsxs)(M.a,{className:"student_dashboard"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:G.a,to:"/student_dashboard",children:[Object(a.jsx)(U.a,{icon:D.a,className:"mr-2"})," ",c("student_area")]})}),(n==Y.teacher||n==Y.admin)&&Object(a.jsx)(P.a,{active:"teacher_dashboard"===t,className:"mb-1",children:Object(a.jsxs)(M.a,{className:"teacher_dashboard"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:G.a,to:"/teacher_dashboard",children:[Object(a.jsx)(U.a,{icon:D.a,className:"mr-2"})," ",c("teacher_area")]})})]})})},H=function(e){var t=e.children,n=e.className,r=e.fluid,c=void 0!==r&&r;return Object(a.jsx)("div",{className:n,style:{border:"0px solid #000",position:"absolute",backgroundColor:"white",bottom:0,top:56,left:c?0:240,right:0},children:t})},R=n(223),q=n(224),z=n(225),J=n(226),K=(n(161),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,245)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))}),V=(n(164),n(22)),Q=n(105),X=n(111),Z=n(25),$=n(89),ee=n(14),te=n(23),ne=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/newtask",e.prev=1,e.next=4,fetch("/newtask",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({content:t})});case 4:return n=e.sent,console.log("SAGA2 API WENET newtask response:",n),e.next=8,n.text();case 8:return a=e.sent,console.log("SAGA2 API WENET newtask result:",a),e.abrupt("return",a);case 13:return e.prev=13,e.t0=e.catch(1),console.log("WENET API newtask response error:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/newtransaction",e.prev=1,e.next=4,fetch("/newtransaction",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({content:t})});case 4:return n=e.sent,console.log("SAGA2 (API) WENET newtransaction response:",n),e.next=8,n.text();case 8:return a=e.sent,console.log("SAGA2 (API) WENET newtransaction result:",a),e.abrupt("return",a);case 13:return e.prev=13,e.t0=e.catch(1),console.log("WENET newtransaction response error:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/logout",e.prev=1,e.next=4,fetch("/logout",{headers:{"Content-Type":"application/json"},method:"GET"});case 4:return t=e.sent,console.log("SAGA2 (API) logout response:",t),e.next=8,t.text();case 8:return n=e.sent,console.log("SAGA2 (API) logout result:",n),e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(1),console.log("WENET logout response error:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),ce=l.a.mark(je),se=l.a.mark(be),oe=l.a.mark(he),ie=l.a.mark(xe),le=l.a.mark(fe),de=l.a.mark(Oe),ue=l.a.mark(pe);function je(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.d)(O.willGetUserProfile.type,he);case 2:return e.next=4,Object(ee.d)(O.willLogout.type,be);case 4:return e.next=6,Object(ee.d)(O.willLoadTasks.type,Oe);case 6:return e.next=8,Object(ee.d)(O.willLoadStudentsProfile.type,pe);case 8:return e.next=10,Object(ee.d)(O.willCreateTask.type,xe);case 10:return e.next=12,Object(ee.d)(O.willCreateTransaction.type,fe);case 12:case"end":return e.stop()}}),ce)}function be(e){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)(O.didLogout());case 2:return e.next=4,Object(ee.b)(re);case 4:return t=e.sent,console.log("Logout result:",t),e.next=8,Object(ee.c)(Object(te.d)("/"));case 8:case"end":return e.stop()}}),se)}function he(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/userprofile",e.prev=1,e.next=4,Object(ee.b)((function(){return fetch("/userprofile").then((function(e){return e.json()})).then((function(e){return e}))}));case 4:return t=e.sent,n=null==t?null:t,e.next=8,Object(ee.c)(O.didGetUserProfile(n));case 8:if(null!=n){e.next=11;break}return e.next=11,Object(ee.c)(Object(te.d)("/logout"));case 11:e.next=19;break;case 13:return e.prev=13,e.t0=e.catch(1),e.next=17,Object(ee.c)(O.didGetUserProfile(null));case 17:return e.next=19,Object(ee.c)(Object(te.d)("/"));case 19:case"end":return e.stop()}}),oe,null,[[1,13]])}function xe(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(ee.c)(O.setIsSendingMessage(!0));case 3:return a.next=5,Object(ee.b)(ne,t);case 5:if(null==(n=a.sent)){a.next=14;break}return console.log("SAGA2 willCreateTask result OK. Loading tasks...|",n),a.next=10,Object(ee.c)(O.setIsSendingMessage(!1));case 10:return a.next=12,Object(ee.c)(O.willLoadTasks());case 12:a.next=17;break;case 14:return console.log("SAGA2 willCreateNewTask error"),a.next=17,Object(ee.c)(O.setIsSendingMessage(!1));case 17:case"end":return a.stop()}}),ie)}function fe(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object(ee.c)(O.setIsSendingMessage(!0));case 3:return a.next=5,Object(ee.b)(ae,t);case 5:if(null==(n=a.sent)){a.next=14;break}return console.log("SAGA2 willCreateTransaction result OK. Loading tasks...|",n),a.next=10,Object(ee.c)(O.setIsSendingMessage(!1));case 10:return a.next=12,Object(ee.c)(O.willLoadTasks());case 12:a.next=17;break;case 14:return console.log("SAGA2 willCreateTransaction error"),a.next=17,Object(ee.c)(O.setIsSendingMessage(!1));case 17:case"end":return a.stop()}}),le)}function Oe(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SAGA2 called willLoadTasks NEW!"),"/tasks",e.prev=2,e.next=5,Object(ee.b)((function(){return fetch("/tasks").then((function(e){return e.json()})).then((function(e){return e}))}));case 5:return t=e.sent,(n=null==t?[]:t.tasks).sort((function(e,t){return t._creationTs-e._creationTs})),e.next=10,Object(ee.c)(O.didLoadTasks(n));case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(2),e.next=16,Object(ee.c)(O.didLoadTasks([]));case 16:case"end":return e.stop()}}),de,null,[[2,12]])}function pe(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/students",e.prev=1,e.next=4,Object(ee.b)((function(){return fetch("/students").then((function(e){return e.json()})).then((function(e){return e}))}));case 4:return t=e.sent,n=null==t?[]:t,e.next=8,Object(ee.c)(O.didLoadStudentsProfile(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object(ee.c)(O.didLoadStudentsProfile([]));case 14:case"end":return e.stop()}}),ue,null,[[1,10]])}var ge=l.a.mark(me);function me(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in root saga"),e.next=3,Object(ee.a)([je()]);case 3:case"end":return e.stop()}}),ge)}var ve=me,ke=n(43),ye=Object(Z.a)(),we=function(e){var t,n=Object(X.a)(),a=[Object($.a)(ye),n],r=[V.applyMiddleware.apply(void 0,a)],c=Q.composeWithDevTools.apply(void 0,r),s=(t=ye,Object(V.combineReducers)({router:Object(ke.b)(t),userTasks:p})),o=Object(V.createStore)(s,e,c);return n.run(ve),o},Te=n(18),Ce=n(52),Se=n(112),_e=n(101),Ae=n(227),Ee=function(e){e.name;var t=e.disabled,n=e.children,r=Object(Se.a)(e,["name","disabled","children"]),c=Object(j.e)(k);return Object(a.jsx)(a.Fragment,{children:c?Object(a.jsxs)(_e.a,Object(Ce.a)(Object(Ce.a)({disabled:!0},r),{},{children:[n,"  ",Object(a.jsx)(Ae.a,{size:"sm",color:"light"})]})):Object(a.jsx)(_e.a,Object(Ce.a)(Object(Ce.a)({disabled:t},r),{},{children:n}))})},Fe=function(e){var t=Object(w.a)("frontend",{useSuspense:!1}),n=t.t;t.i18n;return Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(a.jsxs)(R.a,{className:"mb-4",style:{borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(z.a,{style:{textAlign:"center"},children:n("platform_title")})}),Object(a.jsx)(J.a,{children:Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(a.jsx)(Ae.a,{style:{margin:"20px"},color:"primary"})})})]})})},Ie=n(228),Ne=n(229),Le=n(230),Pe=n(231),Me=n(232),Ue=n(233),De=n(234),Ge=n(46),We={cannotAnswer:"reason",needClarification:"note",notSure:"note",myAnswer:"answer",goToAttachment:"attachment",goToTimelinePosition:"timelineLink",goToTag:"tag",rightAnswer:"message"},Ye=["myAnswer","needClarification","cannotAnswer"],Be=["goToAttachment","goToTimelinePosition","goToTag","rightAnswer"],He=function(e){var t=e.transaction;console.log("Transaction: (props) ",t);var n=Object(w.a)("frontend",{useSuspense:!1}),c=n.t,s=(n.i18n,Object(r.useState)(null==t?-1:Ye.indexOf(t.label))),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(r.useState)(null==t?"":t.attributes[We[t.label]]),j=Object(u.a)(d,2),b=j[0],x=j[1],f=function(t,n,r){return Object(a.jsxs)(Ie.a,{check:!0,disabled:e.readonly,children:[Object(a.jsx)(Ne.a,{disabled:e.readonly,name:t,value:r,onChange:function(t){return function(t){console.log("selected choice:",t.target.value),l(t.target.value),e.onUpdate&&t.target.value>=0&&e.onUpdate(Ye[t.target.value],b)}(t)},checked:i==r,type:"radio"})," ",Object(a.jsx)(Le.a,{check:!0,children:n})]},r)},O=e.readonly?"_done":"",p="selectAnswer".concat(O);return Object(a.jsxs)(a.Fragment,{children:[e.transaction&&Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)(Le.a,{children:Object(a.jsx)("b",{children:h()(1e3*e.transaction._creationTs).format("DD/MM/YYYY - HH:mm")})})}),Object(a.jsxs)(Pe.a,{style:e.readonly?{border:"1px solid #00FF11",padding:"10px",margin:"10px"}:{border:"1px solid #FF0000",padding:"10px",margin:"10px"},children:[Object(a.jsx)(Le.a,{children:Object(a.jsx)("b",{children:c(p)})}),Ye.map((function(e,t){return f("studentChoice",c(e),t)})),function(){var t=e.readonly?"_done":"",n="".concat(Ye[i]).concat(t);return i>=0&&Object(a.jsx)(Ie.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Le.a,{for:"studentAnswerText",children:Object(a.jsx)("b",{children:c("comment_on_".concat(n))})}),Object(a.jsx)(Ne.a,{disabled:e.readonly,id:"studentAnswerText",name:"text",type:"textarea",onChange:function(t){return function(t){console.log("current text:",t.target.value),x(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(Ye[i],t.target.value)}(t)},value:b})]})})}(),function(){var t=function(){var t=e.teacherFeedback;return e.transaction,null==t?null:(console.log("TF FeedbackTransaction ID:",t),c("".concat(t.label))+" "+t.attributes[We[t.label]])}();return t&&Object(a.jsx)(Ie.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Le.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:c("teacherFeedback")})}),Object(a.jsx)(Ne.a,{disabled:e.readonly,id:"teacherAnswerText",name:"text",type:"textarea",value:t})]})})}()]})]})},Re=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1],o=function(){return s(!c)},i=Object(w.a)("frontend",{useSuspense:!1}),l=i.t,d=(i.i18n,Object(j.d)()),b=Object(r.useState)(null),x=Object(u.a)(b,2),f=x[0],p=x[1],g=Object(j.e)(m),v=Object(r.useState)({}),k=Object(u.a)(v,2),y=k[0],T=k[1],C=Object(r.useState)(!1),S=Object(u.a)(C,2),A=S[0],E=S[1],F=Object(r.useState)([]),I=Object(u.a)(F,2),N=I[0],L=I[1],P=Object(r.useState)(!1),M=Object(u.a)(P,2),U=M[0],D=M[1];Object(r.useEffect)((function(){var t=e.task;console.log("Student task:",t);for(var n={},a=!1,r=0;r<t.transactions.length;r++){var c=t.transactions[r].attributes.transactionID;null!=c&&null!=g&&g.id==t.transactions[c].actioneerId&&(n[c]=t.transactions[r],"rightAnswer"==n[c].label&&(a=!0))}var s=W(),o=!0,i=Object.keys(n);console.log("SC: FilteredTransactionLen: task:".concat(t.id),s.length);for(var l=0;l<s.length;l++)if(!i.includes(s[l].id)){o=!1;break}E(o),L(s),T(n),D(a),console.log("SC: setFeedbackTeacherTransactions to->: ",n),console.log("SC: NewTransactionFormVisible",o)}),[e.task]);var G=function(){return null!=f&&null!=f.label},W=function(){if(console.log("SC Transaction: (Task ".concat(e.task.id,"):"),e.task.transactions),null==e.task.transactions)return[];var t=e.task.transactions.filter((function(e){return Ye.includes(e.label)&&null!=g&&g.id==e.actioneerId}));return t.sort((function(e,t){return e._creationTs-t._creationTs})),t};return function(){var t=e.task.goal.name,n=e.task.goal.description,r=h()(1e3*e.task._creationTs).format("DD/MM/YYYY - HH:mm");return Object(a.jsxs)(R.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{onClick:function(){o()},style:{cursor:"pointer",backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(z.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignContent:"space-between"},children:[A&&!U&&Object(a.jsx)(Me.a,{style:{margin:"5px",padding:"5px",color:"white",backgroundColor:"#FF0000"},children:l("teacherFeedback")}),U&&Object(a.jsx)(Me.a,{style:{margin:"5px",padding:"5px",color:"white",backgroundColor:"#00AA00"},children:l("rightAnswer")}),"(",r,") ",t,c?Object(a.jsx)(Ge.b,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}}):Object(a.jsx)(Ge.a,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}})]})})}),Object(a.jsxs)(_.a,{isOpen:c,children:[n&&Object(a.jsx)(Ue.a,{style:{padding:"10px",margin:"10px",backgroundColor:"#EEEEEE"},children:n}),Object(a.jsx)(J.a,{children:Object(a.jsxs)(Pe.a,{children:[(console.log("Transaction: (filtered):",N),N.map((function(e){return Object(a.jsx)(He,{readonly:!0,transaction:e,teacherFeedback:y[e.id]})}))),A&&Object(a.jsx)(He,{onUpdate:function(e,t){return p({label:e,message:t})}})]})}),Object(a.jsx)(De.a,{children:A&&G()&&Object(a.jsx)("div",{style:{display:"flex",marginTop:"10px",justifyContent:"flex-end"},children:Object(a.jsx)(Ee,{color:"primary",onClick:function(t){!function(){if(G()){var t={taskId:e.task.id,content:{label:f.label,message:f.message}};console.log("SAGA2 request da StudentComponents di willCreateTransaction"),d(O.willCreateTransaction(t))}}()},children:l("send")})})})]})]})}()},qe=n(0),ze=n(239),Je=n(59),Ke=n(61),Ve=function(e){var t=Object(j.e)(m),n=Object(j.e)(g),c=Object(j.d)(),s=Object(w.a)("frontend",{useSuspense:!1}),o=s.t;s.i18n;Object(r.useEffect)((function(){c(O.willLoadTasks());var e=setInterval((function(){console.log("WillLoad task for student every ".concat(10," seconds")),c(O.willLoadTasks())}),1e4);return function(){return clearInterval(e)}}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{className:"mb-0 text-white",section:"student_area",showMenu:!0}),Object(a.jsx)(B,{active:"student_dashboard",role:null!=t?t.role_id:null}),Object(a.jsxs)(H,{children:[Object(a.jsxs)(T.a,{style:{marginTop:"10px",marginBottom:"10px"},className:"mb-0 text-white",color:"primary",light:!0,expand:"md",children:[Object(a.jsx)(C.a,{className:"text-white",href:"/",children:o("answers_and_questions")}),Object(a.jsx)(A.a,{className:"mr-auto",navbar:!0}),Object(a.jsx)(A.a,{navbar:!0,children:Object(a.jsx)(ze.a,{onClick:function(){c(O.willLoadTasks())},style:{height:34,marginRight:12,marginTop:6,marginBottom:6,borderWidth:1,borderColor:"white",borderStyle:"solid",borderRadius:4},children:Object(a.jsx)(qe.b.Provider,{value:{color:"white",className:"global-class-name"},children:Object(a.jsx)(Je.a,{color:"white","data-place":"top","data-for":"studentdashboard","data-tip":o("refresh")})})})}),Object(a.jsx)(Ke.a,{id:"studentdashboard"})]}),n&&n.map((function(e,t){return Object(a.jsx)(Re,{task:e},t)}))]})]})},Qe=n(240),Xe=n(235),Ze=n(236),$e=function(e){var t=e.transaction,n=Object(w.a)("frontend",{useSuspense:!1}),c=n.t,s=(n.i18n,Object(r.useState)(null==t?-1:Be.indexOf(t.label))),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(r.useState)(""),b=Object(u.a)(d,2),h=b[0],x=b[1],f=Object(j.d)(),p=function(t,n,r){return Object(a.jsxs)(Ie.a,{check:!0,disabled:e.readonly,children:[Object(a.jsx)(Ne.a,{disabled:e.readonly,name:t,value:r,onChange:function(e){return g(e)},checked:i==r,type:"radio"})," ",Object(a.jsx)(Le.a,{check:!0,children:n})]},r)},g=function(t){console.log("selected feedback choice:",t.target.value),l(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(Be[t.target.value],h)},m=function(t){console.log("current text:",t.target.value),x(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(Be[i],t.target.value)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{style:{marginTop:"20px"},children:Object(a.jsx)(Le.a,{children:Object(a.jsx)("b",{children:c("send_feedback_to_student")})})}),Be.map((function(e,t){return p("teacherChoice",c(e),t)})),i>=0&&Object(a.jsxs)(Ie.a,{children:[Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Le.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:c("teacher_comment_on_".concat(Be[i]))})}),Object(a.jsx)(Ne.a,{disabled:!1,id:"teacherAnswerText",name:"text",type:"textarea",onChange:function(e){m(e)},value:h})]}),Object(a.jsx)("div",{style:{display:"flex",marginTop:"10px",justifyContent:"flex-end"},children:Object(a.jsx)(Ee,{onClick:function(){return function(){if(!(i<0)){var t={taskId:e.transaction.taskId,content:{label:Be[i],message:h,transactionID:e.transaction.id}};console.log("Feedback payload:",t),f(O.willCreateTransaction(t))}}()},color:"primary",children:c("send")})})]})]})},et=function(e){var t=e.transaction;console.log("Transaction: (props) ",t);var n=Object(j.e)(y(t&&t.actioneerId)),c=Object(w.a)("frontend",{useSuspense:!1}),s=c.t,o=(c.i18n,Object(r.useState)(null==t?-1:Ye.indexOf(t.label))),i=Object(u.a)(o,2),l=i[0],d=i[1],b=Object(r.useState)(null==t?"":t.attributes[We[t.label]]),x=Object(u.a)(b,2),f=x[0],O=(x[1],function(t,n,r){return Object(a.jsxs)(Ie.a,{check:!0,disabled:e.readonly,children:[Object(a.jsx)(Ne.a,{disabled:e.readonly,name:t,value:r,onChange:function(t){return function(t){console.log("selected choice:",t.target.value),d(t.target.value),e.onUpdate&&l>=0&&e.onUpdate(Ye[l],f)}(t)},checked:l==r,type:"radio"})," ",Object(a.jsx)(Le.a,{check:!0,children:n})]},r)}),p=function(){var t=e.teacherFeedback;e.transaction;return null==t?null:(console.log("TF FeedbackTransaction ID:",t),s("".concat(t.label))+" "+t.attributes[We[t.label]])};return Object(a.jsxs)(a.Fragment,{children:[e.transaction&&Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:n?Object(a.jsx)(Le.a,{style:null==e.teacherFeedback?{color:"#FF0000"}:{color:"#000000"},children:Object(a.jsxs)("b",{children:[n.name," "," "," ",n.surname," - "," ",h()(1e3*e.transaction._creationTs).format("DD/MM/YYYY - HH:mm")]})}):Object(a.jsx)(Le.a,{children:Object(a.jsx)("b",{children:h()(1e3*e.transaction._creationTs).format("DD/MM/YYYY - HH:mm")})})}),Object(a.jsxs)(Pe.a,{style:{border:"1px solid #007bff",padding:"10px",margin:"10px"},children:[Object(a.jsx)(Le.a,{children:Object(a.jsx)("b",{children:s("teacher_selectAnswer")})}),Ye.map((function(e,t){return O("studentChoice",s(e),t)})),l>=0&&Object(a.jsx)(Ie.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Le.a,{for:"studentAnswerText",children:Object(a.jsx)("b",{children:s("teacher_comment_on_".concat(Ye[l]))})}),Object(a.jsx)(Ne.a,{disabled:!0,id:"studentAnswerText",name:"text",type:"textarea",onChange:function(e){},value:f})]})}),null!=e.teacherFeedback?Object(a.jsx)(Ie.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Le.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:s("teacherFeedback")})}),Object(a.jsx)(Ne.a,{disabled:e.readonly,id:"teacherAnswerText",name:"text",type:"textarea",value:p()})]})}):Object(a.jsx)($e,{transaction:e.transaction})]})]})},tt=function(e){var t=Object(w.a)("frontend",{useSuspense:!1}),n=t.t,c=(t.i18n,Object(r.useState)("")),s=Object(u.a)(c,2),o=s[0],i=s[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),b=d[0],h=d[1],x=Object(j.d)();return Object(a.jsxs)(Pe.a,{children:[Object(a.jsx)(Ie.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Le.a,{for:"teacherTaskTitle",children:Object(a.jsx)("b",{children:n("teacherTaskTitle")})}),Object(a.jsx)(Ne.a,{id:"teacherTaskTitle",name:"text",type:"text",onChange:function(e){return function(e){i(e.target.value)}(e)},value:o})]})}),Object(a.jsx)(Ie.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Le.a,{for:"teacherTaskDescription",children:Object(a.jsx)("b",{children:n("teacherTaskDescription")})}),Object(a.jsx)(Ne.a,{id:"teacherTaskDescription",name:"text",type:"textarea",onChange:function(e){return function(e){h(e.target.value)}(e)},value:b})]})}),Object(a.jsx)(Ie.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)(_e.a,{onClick:function(t){e.onClose()},children:"Annulla"}),Object(a.jsx)(Ee,{color:"primary",onClick:function(t){x(O.willCreateTask({name:o,description:b})),e.onClose()},children:n("send")})]})})]})},nt=function(e){Object(j.e)(m);var t=Object(w.a)("frontend",{useSuspense:!1}),n=t.t,c=(t.i18n,Object(r.useState)(!1)),s=Object(u.a)(c,2),o=s[0],i=s[1],l=Object(j.d)(),d=Object(j.e)(g);Object(r.useEffect)((function(){l(O.willLoadTasks());var e=setInterval((function(){console.log("WillLoad task for teacher every ".concat(10," seconds")),l(O.willLoadTasks())}),1e4);return function(){return clearInterval(e)}}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(T.a,{style:{marginTop:"10px",marginBottom:"10px"},className:"mb-0 text-white",color:"primary",light:!0,expand:"md",children:[Object(a.jsx)(C.a,{className:"text-white font-weight-bold",href:"/",children:n("answers_and_questions")}),Object(a.jsx)(A.a,{className:"mr-auto",navbar:!0}),Object(a.jsxs)(A.a,{navbar:!0,children:[Object(a.jsxs)(_e.a,{onClick:function(e){console.log("Click new Question"),i(!0)},style:{height:34,marginRight:12,marginTop:6,marginBottom:6,borderWidth:1,borderColor:"white",borderStyle:"solid",borderRadius:4},color:"primary",children:[Object(a.jsx)(U.a,{icon:D.b}),n("new_question")]}),Object(a.jsx)(ze.a,{onClick:function(){l(O.willLoadTasks())},style:{height:34,marginRight:12,marginTop:6,marginBottom:6,borderWidth:1,borderColor:"white",borderStyle:"solid",borderRadius:4},children:Object(a.jsx)(qe.b.Provider,{value:{color:"white",className:"global-class-name"},children:Object(a.jsx)(Je.a,{color:"white","data-place":"top","data-for":"teacherdashboard","data-tip":n("refresh")})})})]}),Object(a.jsx)(Ke.a,{id:"teacherdashboard"})]}),o&&Object(a.jsxs)(Qe.a,{isOpen:o,children:[Object(a.jsx)(Xe.a,{children:n("new_question")}),Object(a.jsx)(Ze.a,{children:Object(a.jsx)(tt,{onClose:function(){return i(!1)}})})]}),d&&d.map((function(e,t){return Object(a.jsx)(at,{task:e},t)}))]})},at=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1],o=function(){return s(!c)},i=Object(w.a)("frontend",{useSuspense:!1}),l=i.t,d=(i.i18n,Object(j.e)(m),Object(r.useState)({})),b=Object(u.a)(d,2),x=b[0],f=b[1],O=Object(r.useState)([]),p=Object(u.a)(O,2),g=p[0],v=p[1],k=Object(r.useState)(0),y=Object(u.a)(k,2),T=y[0],C=y[1];Object(r.useEffect)((function(){var t=e.task;console.log("Student task:",t);for(var n={},a=0;a<t.transactions.length;a++){var r=t.transactions[a].attributes.transactionID;null!=r&&(n[r]=t.transactions[a])}var c=A();v(c),console.log("setFeedbackTeacherTransactions to->: ",n),f(n),C(S(c,n))}),[e.task]);var S=function(e,t){return null==e||e.length<1?0:e.length-Object.keys(t).length},A=function(){if(console.log("Transaction: (Task):",e.task.transactions),null==e.task.transactions)return[];var t=e.task.transactions.filter((function(e){return console.log("Transaction: (Filter):",e),Ye.includes(e.label)}));return t.sort((function(e,t){return e._creationTs-t._creationTs})),t};return function(){var t=e.task.goal.name,n=e.task.goal.description,r=h()(1e3*e.task._creationTs).format("DD/MM/YYYY - HH:mm");return Object(a.jsxs)(R.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{onClick:function(){o()},style:{cursor:"pointer",backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(z.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignContent:"space-between"},children:[T>0&&Object(a.jsxs)(Me.a,{style:{margin:"5px",padding:"5px",color:"white",backgroundColor:"#FF0000"},children:["".concat(T," "),l("new_messages_from_students")]}),"(",r,") ",t,c?Object(a.jsx)(Ge.b,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}}):Object(a.jsx)(Ge.a,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}})]})})}),Object(a.jsxs)(_.a,{isOpen:c,children:[n&&Object(a.jsx)(Ue.a,{style:{padding:"10px",margin:"10px",backgroundColor:"#EEEEEE"},children:n}),Object(a.jsx)(J.a,{children:Object(a.jsx)(Pe.a,{children:(console.log("Transaction: (filter):",g),g.map((function(e,t){return Object(a.jsx)(et,{readonly:!0,transaction:e,teacherFeedback:x[e.id]},t)})))})})]})]})}()},rt=n(106),ct=n.n(rt),st=function(e){var t=Object(w.a)("frontend",{useSuspense:!1}),n=t.t,r=(t.i18n,Object(j.d)()),s=Object(j.e)(v),o=[{dataField:"name",text:n("name"),sort:!0},{dataField:"surname",text:n("surname"),sort:!0},{dataField:"passcode",text:n("passcode"),sort:!0,hidden:!1},{dataField:"id",text:n("profile"),sort:!0},{dataField:"description",text:n("description"),sort:!1}];return c.a.useEffect((function(){return r(O.willLoadStudentsProfile(null)),function(){}}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(ct.a,{bootstrap4:!0,keyField:"passcode",data:s,columns:o})})},ot=n(237),it=n(238),lt=function(e){var t=Object(j.e)(m),n=Object(r.useState)("0"),c=Object(u.a)(n,2),s=c[0],o=c[1],i=Object(w.a)("frontend",{useSuspense:!1}),l=i.t,d=(i.i18n,Object(j.d)());return Object(r.useEffect)((function(){d(O.willGetUserProfile())}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{className:"mb-0 text-white",section:"teacher_area",showMenu:!0}),Object(a.jsx)(B,{active:"teacher_dashboard",role:null!=t?t.role_id:null}),Object(a.jsxs)(H,{children:[Object(a.jsxs)(A.a,{tabs:!0,children:[Object(a.jsx)(P.a,{children:Object(a.jsx)(M.a,{style:"0"===s?{cursor:"arrow",fontWeight:"bold",background:"#EEEEEE"}:{cursor:"pointer",fontWeight:"normal"},onClick:function(){o("0")},children:l("students_answers")})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(M.a,{style:"1"===s?{cursor:"arrow",fontWeight:"bold",background:"#EEEEEE"}:{cursor:"pointer",fontWeight:"normal"},onClick:function(){o("1")},children:l("students_profile")})})]}),Object(a.jsxs)(ot.a,{activeTab:s,children:[Object(a.jsx)(it.a,{tabId:"0",children:Object(a.jsx)(nt,{})}),Object(a.jsx)(it.a,{tabId:"1",children:Object(a.jsx)(st,{})})]})]})]})},dt=function(){var e=Object(w.a)("frontend",{useSuspense:!1}),t=e.t,n=(e.i18n,Object(r.useState)(null)),c=Object(u.a)(n,2),s=c[0],o=c[1];Object(r.useEffect)((function(){localStorage.setItem("passcode",s)}),[s]);var i=function(e){console.log("entered:",e.target.value),function(e){var t="abcdefghijklmnopqrstuvwxyz".toUpperCase();try{var n=e.trim().toUpperCase();if(8!=n.length)throw"Invalid";for(var a=0,r=0;r<n.length-1;r++)a+=t.indexOf(n.charAt(r));var c=(a-=t.indexOf(n.charAt(7)))%t.length==0;o(c?n:null)}catch(s){o(null)}}(e.target.value)};return Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(a.jsxs)(R.a,{className:"mb-4",style:{borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(z.a,{style:{textAlign:"center"},children:t("platform_title")})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(Ne.a,{onChange:function(e){return i(e)},type:"text",name:"passcode",id:"passcode",placeholder:t("passcode_enter")})}),Object(a.jsx)(De.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:s&&Object(a.jsx)("a",{href:"/connect?passcode=".concat(s),children:t("connect_to_wenet")})})]})})},ut=function(){var e=Object(j.e)(m),t=Object(j.d)();return Object(r.useEffect)((function(){t(O.willGetUserProfile(null))}),[]),Object(r.useEffect)((function(){console.log("UserProfile in router:",e),null!=e&&null!=e.message&&(alert(e.message),t(Object(te.d)("/")))}),[e]),Object(a.jsx)(ke.a,{history:ye,children:Object(a.jsxs)(Te.d,{children:[Object(a.jsx)(Te.b,{path:"/student_dashboard",children:null==e?Object(a.jsx)(Fe,{}):e.role_id==Y.student||e.role_id==Y.admin?Object(a.jsx)(Ve,{}):Object(a.jsx)(Te.a,{to:"/"})}),Object(a.jsx)(Te.b,{path:"/teacher_dashboard",children:null==e?Object(a.jsx)(Fe,{}):e.role_id==Y.teacher||e.role_id==Y.admin?Object(a.jsx)(lt,{}):Object(a.jsx)(Te.a,{to:"/"})}),Object(a.jsx)(Te.b,{path:"/",children:Object(a.jsx)(dt,{})})]})})};function jt(){return Object(a.jsx)(j.a,{store:we({}),children:Object(a.jsx)(ut,{})})}var bt=n(76),ht=n(51),xt=n(107);n(202);bt.a.use(xt.a).use(ht.e).init({ns:["tl","frontend"],defaultNS:"tl",fallbackLng:"it",debug:!0,interpolation:{escapeValue:!1}});var ft=bt.a;"it-IT"!==(window.navigator.userLanguage||window.navigator.language)?ft.changeLanguage("en-US"):ft.changeLanguage("it-IT"),o.a.render(Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(jt,{})}),document.getElementById("root")),K()}},[[201,1,2]]]);
//# sourceMappingURL=main.ab24f3a0.chunk.js.map