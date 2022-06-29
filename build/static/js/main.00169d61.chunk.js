(this["webpackJsonptela-frontend"]=this["webpackJsonptela-frontend"]||[]).push([[0],{119:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(1),c=n.n(r),s=n(19),o=n.n(s),i=(n(119),n(120),n(121),n(15)),l=n.n(i),d=n(45),u=n(14),j=(n(109),n(12)),b=n(35),h=n.n(b),x=n(108),f=Object(x.a)({name:"userTasks",initialState:{user:null,tasks:[],studentsProfile:[]},reducers:{willLogin:function(e,t){return e},willLogout:function(e,t){return e},willGetUserProfile:function(e,t){return e},willLoadTasks:function(e,t){return e},willCreateTask:function(e,t){return e},willCreateTransaction:function(e,t){return e},willLoadStudentsProfile:function(e,t){return e},didGetUserProfile:function(e,t){e.user=t.payload},didLogout:function(e){e.user=null,e.tasks=[],localStorage.removeItem("passcode")},didLoadTasks:function(e,t){e.tasks=t.payload},didLoadStudentsProfile:function(e,t){e.studentsProfile=t.payload}}}),O=f.actions,p=f.reducer,g=function(e){return e.userTasks.tasks},m=function(e){return e.userTasks.user},v=function(e){return e.userTasks.studentsProfile},k=function(e){return function(t){for(var n=t.userTasks.studentsProfile,a=0;a<n.length;a++)if(n[a].wenet_id==e)return n[a];return null}},w=n(238),y=n(213),T=n(214),C=n(215),S=n(216),_=n(217),A=n(239),E=n(240),F=n(241),N=n(218),L=function(e){var t=e.className,n=e.section,r=e.showMenu,s=void 0!==r&&r,o=Object(w.a)("frontend",{useSuspense:!1}),i=o.t,l=(o.i18n,void 0!=i(n)?i(n):"Forum"),d=c.a.useState(!1),b=Object(u.a)(d,2),h=b[0],x=b[1],f=Object(j.d)(),p=Object(j.e)(m);return console.log("UserProfile:",p),Object(a.jsxs)(y.a,{style:{marginBottom:"10px"},className:t,color:"primary",light:!0,expand:"md",children:[Object(a.jsxs)(T.a,{className:"text-white font-weight-bold",href:"/",children:["RIALENET - ",l]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C.a,{onClick:function(){return x(!h)}}),Object(a.jsxs)(S.a,{isOpen:h,navbar:!0,children:[Object(a.jsx)(_.a,{className:"mr-auto",navbar:!0}),Object(a.jsx)(_.a,{navbar:!0,children:null!=p&&null!=p.name&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(A.a,{nav:!0,inNavbar:!0,children:[Object(a.jsxs)(E.a,{className:"text-white",nav:!0,caret:!0,children:[p.name.first," ",p.name.last]}),Object(a.jsx)(F.a,{right:!0,children:Object(a.jsx)(N.a,{onClick:function(){f(O.willLogout(""))},children:"Logout"})})]})})})]})]})]})},I=n(219),P=n(220),U=n(34),D=n(49),G=n(43),W=n(103),Y=function e(){Object(W.a)(this,e)};Y.admin=1,Y.teacher=2,Y.student=3;var M=function(e){var t=e.active,n=e.role,r=Object(w.a)("frontend",{useSuspense:!1}),c=r.t;r.i18n;return console.log("Role in sidebar ->",n,Y.teacher,n==Y.teacher||n==Y.admin),Object(a.jsx)("div",{style:{border:"0px solid #000",width:"240px",position:"absolute",backgroundColor:"#f1f1f1",bottom:0,top:56},children:Object(a.jsxs)(_.a,{vertical:!0,className:"list-unstyled pb-3",children:[(n==Y.student||n==Y.admin)&&Object(a.jsx)(I.a,{active:"student_dashboard"===t,className:"mb-1",children:Object(a.jsxs)(P.a,{className:"student_dashboard"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:G.a,to:"/student_dashboard",children:[Object(a.jsx)(U.a,{icon:D.a,className:"mr-2"})," ",c("student_area")]})}),(n==Y.teacher||n==Y.admin)&&Object(a.jsx)(I.a,{active:"teacher_dashboard"===t,className:"mb-1",children:Object(a.jsxs)(P.a,{className:"teacher_dashboard"===t?"text-primary":"text-secondary",style:{textDecoration:"none",fontWeight:"bolder"},tag:G.a,to:"/teacher_dashboard",children:[Object(a.jsx)(U.a,{icon:D.a,className:"mr-2"})," ",c("teacher_area")]})})]})})},B=function(e){var t=e.children,n=e.className,r=e.fluid,c=void 0!==r&&r;return Object(a.jsx)("div",{className:n,style:{border:"0px solid #000",position:"absolute",backgroundColor:"white",bottom:0,top:56,left:c?0:240,right:0},children:t})},R=n(221),q=n(222),z=n(223),J=n(224),K=(n(159),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))}),V=(n(162),n(22)),Q=n(104),H=n(110),X=n(25),Z=n(88),$=n(16),ee=n(23),te=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/newtask",e.prev=1,e.next=4,fetch("/newtask",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({content:t})});case 4:return n=e.sent,console.log("SAGA2 API WENET newtask response:",n),e.next=8,n.text();case 8:return a=e.sent,console.log("SAGA2 API WENET newtask result:",a),e.abrupt("return",a);case 13:return e.prev=13,e.t0=e.catch(1),console.log("WENET API newtask response error:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/newtransaction",e.prev=1,e.next=4,fetch("/newtransaction",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({content:t})});case 4:return n=e.sent,console.log("SAGA2 (API) WENET newtransaction response:",n),e.next=8,n.text();case 8:return a=e.sent,console.log("SAGA2 (API) WENET newtransaction result:",a),e.abrupt("return",a);case 13:return e.prev=13,e.t0=e.catch(1),console.log("WENET newtransaction response error:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/logout",e.prev=1,e.next=4,fetch("/logout",{headers:{"Content-Type":"application/json"},method:"GET"});case 4:return t=e.sent,console.log("SAGA2 (API) logout response:",t),e.next=8,t.text();case 8:return n=e.sent,console.log("SAGA2 (API) logout result:",n),e.abrupt("return",n);case 13:return e.prev=13,e.t0=e.catch(1),console.log("WENET logout response error:",e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),re=l.a.mark(ue),ce=l.a.mark(je),se=l.a.mark(be),oe=l.a.mark(he),ie=l.a.mark(xe),le=l.a.mark(fe),de=l.a.mark(Oe);function ue(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.d)(O.willGetUserProfile.type,be);case 2:return e.next=4,Object($.d)(O.willLogout.type,je);case 4:return e.next=6,Object($.d)(O.willLoadTasks.type,fe);case 6:return e.next=8,Object($.d)(O.willLoadStudentsProfile.type,Oe);case 8:return e.next=10,Object($.d)(O.willCreateTask.type,he);case 10:return e.next=12,Object($.d)(O.willCreateTransaction.type,xe);case 12:case"end":return e.stop()}}),re)}function je(e){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.c)(O.didLogout());case 2:return e.next=4,Object($.b)(ae);case 4:return t=e.sent,console.log("Logout result:",t),e.next=8,Object($.c)(Object(ee.d)("/"));case 8:case"end":return e.stop()}}),ce)}function be(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/userprofile",e.prev=1,e.next=4,Object($.b)((function(){return fetch("/userprofile").then((function(e){return e.json()})).then((function(e){return e}))}));case 4:return t=e.sent,n=null==t?null:t,e.next=8,Object($.c)(O.didGetUserProfile(n));case 8:if(null!=n){e.next=11;break}return e.next=11,Object($.c)(Object(ee.d)("/logout"));case 11:e.next=19;break;case 13:return e.prev=13,e.t0=e.catch(1),e.next=17,Object($.c)(O.didGetUserProfile(null));case 17:return e.next=19,Object($.c)(Object(ee.d)("/"));case 19:case"end":return e.stop()}}),se,null,[[1,13]])}function he(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object($.b)(te,t);case 3:if(null==(n=a.sent)){a.next=10;break}return console.log("SAGA2 willCreateTask result OK. Loading tasks...|",n),a.next=8,Object($.c)(O.willLoadTasks());case 8:a.next=11;break;case 10:console.log("SAGA2 willCreateNewTask error");case 11:case"end":return a.stop()}}),oe)}function xe(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.next=3,Object($.b)(ne,t);case 3:if(null==(n=a.sent)){a.next=10;break}return console.log("SAGA2 willCreateTransaction result OK. Loading tasks...|",n),a.next=8,Object($.c)(O.willLoadTasks());case 8:a.next=11;break;case 10:console.log("SAGA2 willCreateTransaction error");case 11:case"end":return a.stop()}}),ie)}function fe(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SAGA2 called willLoadTasks NEW!"),"/tasks",e.prev=2,e.next=5,Object($.b)((function(){return fetch("/tasks").then((function(e){return e.json()})).then((function(e){return e}))}));case 5:return t=e.sent,n=null==t?[]:t.tasks,e.next=9,Object($.c)(O.didLoadTasks(n));case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(2),e.next=15,Object($.c)(O.didLoadTasks([]));case 15:case"end":return e.stop()}}),le,null,[[2,11]])}function Oe(e){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/students",e.prev=1,e.next=4,Object($.b)((function(){return fetch("/students").then((function(e){return e.json()})).then((function(e){return e}))}));case 4:return t=e.sent,n=null==t?[]:t,e.next=8,Object($.c)(O.didLoadStudentsProfile(n));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),e.next=14,Object($.c)(O.didLoadStudentsProfile([]));case 14:case"end":return e.stop()}}),de,null,[[1,10]])}var pe=l.a.mark(ge);function ge(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("in root saga"),e.next=3,Object($.a)([ue()]);case 3:case"end":return e.stop()}}),pe)}var me=ge,ve=n(40),ke=Object(X.a)(),we=function(e){var t,n=Object(H.a)(),a=[Object(Z.a)(ke),n],r=[V.applyMiddleware.apply(void 0,a)],c=Q.composeWithDevTools.apply(void 0,r),s=(t=ke,Object(V.combineReducers)({router:Object(ve.b)(t),userTasks:p})),o=Object(V.createStore)(s,e,c);return n.run(me),o},ye=n(18),Te=n(225),Ce=n(226),Se=n(227),_e=n(228),Ae=n(229),Ee=n(230),Fe=n(231),Ne=n(100),Le=n(46),Ie={cannotAnswer:"reason",needClarification:"note",notSure:"note",myAnswer:"answer",goToAttachment:"attachment",goToTimelinePosition:"timelineLink",goToTag:"tag",rightAnswer:"message"},Pe=["cannotAnswer","needClarification","notSure","myAnswer"],Ue=["goToAttachment","goToTimelinePosition","goToTag","rightAnswer"],De=function(e){var t=e.transaction;console.log("Transaction: (props) ",t);var n=Object(w.a)("frontend",{useSuspense:!1}),c=n.t,s=(n.i18n,Object(r.useState)(null==t?-1:Pe.indexOf(t.label))),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(r.useState)(null==t?"":t.attributes[Ie[t.label]]),j=Object(u.a)(d,2),b=j[0],x=j[1],f=function(t,n,r){return Object(a.jsxs)(Te.a,{check:!0,disabled:e.readonly,children:[Object(a.jsx)(Ce.a,{disabled:e.readonly,name:t,value:r,onChange:function(t){return function(t){console.log("selected choice:",t.target.value),l(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(Pe[i],b)}(t)},checked:i==r,type:"radio"})," ",Object(a.jsx)(Se.a,{check:!0,children:n})]},r)},O=e.readonly?"_done":"",p="selectAnswer".concat(O);return Object(a.jsxs)(a.Fragment,{children:[e.transaction&&Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)(Se.a,{children:Object(a.jsx)("b",{children:h()(e.transaction._creationTs).format("DD/MM/YYYY - hh:mm")})})}),Object(a.jsxs)(_e.a,{style:{border:"1px solid #007bff",padding:"10px",margin:"10px"},children:[Object(a.jsx)(Se.a,{children:Object(a.jsx)("b",{children:c(p)})}),Pe.map((function(e,t){return f("studentChoice",c(e),t)})),function(){var t=e.readonly?"_done":"",n="".concat(Pe[i]).concat(t);return i>=0&&Object(a.jsx)(Te.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Se.a,{for:"studentAnswerText",children:Object(a.jsx)("b",{children:c("comment_on_".concat(n))})}),Object(a.jsx)(Ce.a,{disabled:e.readonly,id:"studentAnswerText",name:"text",type:"textarea",onChange:function(t){return function(t){console.log("current text:",t.target.value),x(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(Pe[i],t.target.value)}(t)},value:b})]})})}(),function(){var t=function(){var t=e.teacherFeedback;return e.transaction,null==t?null:(console.log("TF FeedbackTransaction ID:",t),c("".concat(t.label))+" "+t.attributes[Ie[t.label]])}();return t&&Object(a.jsx)(Te.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Se.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:c("teacherFeedback")})}),Object(a.jsx)(Ce.a,{disabled:e.readonly,id:"teacherAnswerText",name:"text",type:"textarea",value:t})]})})}()]})]})},Ge=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1],o=function(){return s(!c)},i=Object(w.a)("frontend",{useSuspense:!1}),l=i.t,d=(i.i18n,Object(j.d)()),b=Object(r.useState)(null),x=Object(u.a)(b,2),f=x[0],p=x[1],g=Object(j.e)(m),v=Object(r.useState)({}),k=Object(u.a)(v,2),y=k[0],T=k[1],C=Object(r.useState)(!1),_=Object(u.a)(C,2),A=_[0],E=_[1],F=Object(r.useState)([]),N=Object(u.a)(F,2),L=N[0],I=N[1];Object(r.useEffect)((function(){var t=e.task;console.log("Student task:",t);for(var n={},a=0;a<t.transactions.length;a++){var r=t.transactions[a].attributes.transactionID;null!=r&&null!=g&&g.id==t.transactions[r].actioneerId&&(n[r]=t.transactions[a])}var c=P(),s=!0,o=Object.keys(n);console.log("SC: FilteredTransactionLen: task:".concat(t.id),c.length);for(var i=0;i<c.length;i++)if(!o.includes(c[i].id)){s=!1;break}E(s),I(c),T(n),console.log("SC: setFeedbackTeacherTransactions to->: ",n),console.log("SC: NewTransactionFormVisible",s)}),[e.task]);var P=function(){if(console.log("SC Transaction: (Task ".concat(e.task.id,"):"),e.task.transactions),null==e.task.transactions)return[];var t=e.task.transactions.filter((function(e){return Pe.includes(e.label)&&null!=g&&g.id==e.actioneerId}));return t.sort((function(e,t){return e._creationTs-t._creationTs})),t};return function(){var t=e.task.goal.name,n=e.task.goal.description,r=h()(e.task._creationTs).format("DD/MM/YYYY - hh:mm");return Object(a.jsxs)(R.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{onClick:function(){o()},style:{cursor:"pointer",backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(z.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignContent:"space-between"},children:[A&&Object(a.jsx)(Ae.a,{style:{margin:"5px",padding:"5px",color:"white",backgroundColor:"#FF0000"},children:l("teacherFeedback")}),"(",r,") ",t,c?Object(a.jsx)(Le.b,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}}):Object(a.jsx)(Le.a,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}})]})})}),Object(a.jsxs)(S.a,{isOpen:c,children:[n&&Object(a.jsx)(Ee.a,{style:{padding:"10px",margin:"10px",backgroundColor:"#EEEEEE"},children:n}),Object(a.jsx)(J.a,{children:Object(a.jsxs)(_e.a,{children:[(console.log("Transaction: (filtered):",L),L.map((function(e){return Object(a.jsx)(De,{readonly:!0,transaction:e,teacherFeedback:y[e.id]})}))),A&&Object(a.jsx)(De,{onUpdate:function(e,t){return p({label:e,message:t})}})]})}),Object(a.jsx)(Fe.a,{children:A&&Object(a.jsx)("div",{style:{display:"flex",marginTop:"10px",justifyContent:"flex-end"},children:Object(a.jsx)(Ne.a,{color:"primary",onClick:function(t){!function(){if(null!=f){var t={taskId:e.task.id,content:{label:f.label,message:f.message}};console.log("SAGA2 request da StudentComponents di willCreateTransaction"),d(O.willCreateTransaction(t))}}()},children:l("send")})})})]})]})}()},We=n(0),Ye=n(236),Me=n(58),Be=n(60),Re=function(e){var t=Object(j.e)(m),n=Object(j.e)(g),c=Object(j.d)(),s=Object(w.a)("frontend",{useSuspense:!1}),o=s.t;s.i18n;Object(r.useEffect)((function(){c(O.willLoadTasks());var e=setInterval((function(){console.log("WillLoad task for student every ".concat(10," seconds")),c(O.willLoadTasks())}),1e4);return function(){return clearInterval(e)}}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{className:"mb-0 text-white",section:"student_area",showMenu:!0}),Object(a.jsx)(M,{active:"student_dashboard",role:null!=t?t.role_id:null}),Object(a.jsxs)(B,{children:[Object(a.jsxs)(y.a,{style:{marginTop:"10px",marginBottom:"10px"},className:"mb-0 text-white",color:"primary",light:!0,expand:"md",children:[Object(a.jsx)(T.a,{className:"text-white",href:"/",children:o("answers_and_questions")}),Object(a.jsx)(_.a,{className:"mr-auto",navbar:!0}),Object(a.jsx)(_.a,{navbar:!0,children:Object(a.jsx)(Ye.a,{onClick:function(){c(O.willLoadTasks())},style:{height:34,marginRight:12,marginTop:6,marginBottom:6,borderWidth:1,borderColor:"white",borderStyle:"solid",borderRadius:4},children:Object(a.jsx)(We.b.Provider,{value:{color:"white",className:"global-class-name"},children:Object(a.jsx)(Me.a,{color:"white","data-place":"top","data-for":"studentdashboard","data-tip":o("refresh")})})})}),Object(a.jsx)(Be.a,{id:"studentdashboard"})]}),n&&n.map((function(e,t){return Object(a.jsx)(Ge,{task:e},t)}))]})]})},qe=n(237),ze=n(232),Je=n(233),Ke=function(e){var t=e.transaction,n=Object(w.a)("frontend",{useSuspense:!1}),c=n.t,s=(n.i18n,Object(r.useState)(null==t?-1:Ue.indexOf(t.label))),o=Object(u.a)(s,2),i=o[0],l=o[1],d=Object(r.useState)(""),b=Object(u.a)(d,2),h=b[0],x=b[1],f=Object(j.d)(),p=function(t,n,r){return Object(a.jsxs)(Te.a,{check:!0,disabled:e.readonly,children:[Object(a.jsx)(Ce.a,{disabled:e.readonly,name:t,value:r,onChange:function(e){return g(e)},checked:i==r,type:"radio"})," ",Object(a.jsx)(Se.a,{check:!0,children:n})]},r)},g=function(t){console.log("selected feedback choice:",t.target.value),l(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(Ue[i],h)},m=function(t){console.log("current text:",t.target.value),x(t.target.value),e.onUpdate&&i>=0&&e.onUpdate(Ue[i],t.target.value)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{style:{marginTop:"20px"},children:Object(a.jsx)(Se.a,{children:Object(a.jsx)("b",{children:c("send_feedback_to_student")})})}),Ue.map((function(e,t){return p("teacherChoice",c(e),t)})),i>=0&&Object(a.jsxs)(Te.a,{children:[Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Se.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:c("teacher_comment_on_".concat(Ue[i]))})}),Object(a.jsx)(Ce.a,{disabled:!1,id:"teacherAnswerText",name:"text",type:"textarea",onChange:function(e){m(e)},value:h})]}),Object(a.jsx)("div",{style:{display:"flex",marginTop:"10px",justifyContent:"flex-end"},children:Object(a.jsx)(Ne.a,{onClick:function(){return function(){if(!(i<0)){var t={taskId:e.transaction.taskId,content:{label:Ue[i],message:h,transactionID:e.transaction.id}};console.log("Feedback payload:",t),f(O.willCreateTransaction(t))}}()},color:"primary",children:c("send")})})]})]})},Ve=function(e){var t=e.transaction;console.log("Transaction: (props) ",t);var n=Object(j.e)(k(t&&t.actioneerId)),c=Object(w.a)("frontend",{useSuspense:!1}),s=c.t,o=(c.i18n,Object(r.useState)(null==t?-1:Pe.indexOf(t.label))),i=Object(u.a)(o,2),l=i[0],d=i[1],b=Object(r.useState)(null==t?"":t.attributes[Ie[t.label]]),x=Object(u.a)(b,2),f=x[0],O=(x[1],function(t,n,r){return Object(a.jsxs)(Te.a,{check:!0,disabled:e.readonly,children:[Object(a.jsx)(Ce.a,{disabled:e.readonly,name:t,value:r,onChange:function(t){return function(t){console.log("selected choice:",t.target.value),d(t.target.value),e.onUpdate&&l>=0&&e.onUpdate(Pe[l],f)}(t)},checked:l==r,type:"radio"})," ",Object(a.jsx)(Se.a,{check:!0,children:n})]},r)}),p=function(){var t=e.teacherFeedback;e.transaction;return null==t?null:(console.log("TF FeedbackTransaction ID:",t),s("".concat(t.label))+" "+t.attributes[Ie[t.label]])};return Object(a.jsxs)(a.Fragment,{children:[e.transaction&&Object(a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:n?Object(a.jsx)(Se.a,{style:null==e.teacherFeedback?{color:"#FF0000"}:{color:"#000000"},children:Object(a.jsxs)("b",{children:[n.name," "," "," ",n.surname," - "," ",h()(e.transaction._creationTs).format("DD/MM/YYYY - hh:mm")]})}):Object(a.jsx)(Se.a,{children:Object(a.jsx)("b",{children:h()(e.transaction._creationTs).format("DD/MM/YYYY - hh:mm")})})}),Object(a.jsxs)(_e.a,{style:{border:"1px solid #007bff",padding:"10px",margin:"10px"},children:[Object(a.jsx)(Se.a,{children:Object(a.jsx)("b",{children:s("teacher_selectAnswer")})}),Pe.map((function(e,t){return O("studentChoice",s(e),t)})),l>=0&&Object(a.jsx)(Te.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Se.a,{for:"studentAnswerText",children:Object(a.jsx)("b",{children:s("teacher_comment_on_".concat(Pe[l]))})}),Object(a.jsx)(Ce.a,{disabled:!0,id:"studentAnswerText",name:"text",type:"textarea",onChange:function(e){},value:f})]})}),null!=e.teacherFeedback?Object(a.jsx)(Te.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Se.a,{for:"teacherAnswerText",children:Object(a.jsx)("b",{children:s("teacherFeedback")})}),Object(a.jsx)(Ce.a,{disabled:e.readonly,id:"teacherAnswerText",name:"text",type:"textarea",value:p()})]})}):Object(a.jsx)(Ke,{transaction:e.transaction})]})]})},Qe=function(e){var t=Object(w.a)("frontend",{useSuspense:!1}),n=t.t,c=(t.i18n,Object(r.useState)("")),s=Object(u.a)(c,2),o=s[0],i=s[1],l=Object(r.useState)(""),d=Object(u.a)(l,2),b=d[0],h=d[1],x=Object(j.d)();return Object(a.jsxs)(_e.a,{children:[Object(a.jsx)(Te.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Se.a,{for:"teacherTaskTitle",children:Object(a.jsx)("b",{children:n("teacherTaskTitle")})}),Object(a.jsx)(Ce.a,{id:"teacherTaskTitle",name:"text",type:"text",onChange:function(e){return function(e){i(e.target.value)}(e)},value:o})]})}),Object(a.jsx)(Te.a,{children:Object(a.jsxs)("div",{style:{marginTop:"20px"},children:[Object(a.jsx)(Se.a,{for:"teacherTaskDescription",children:Object(a.jsx)("b",{children:n("teacherTaskDescription")})}),Object(a.jsx)(Ce.a,{id:"teacherTaskDescription",name:"text",type:"textarea",onChange:function(e){return function(e){h(e.target.value)}(e)},value:b})]})}),Object(a.jsx)(Te.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)(Ne.a,{onClick:function(t){e.onClose()},children:"Annulla"}),Object(a.jsx)(Ne.a,{color:"primary",onClick:function(t){x(O.willCreateTask({name:o,description:b})),e.onClose()},children:n("send")})]})})]})},He=function(e){Object(j.e)(m);var t=Object(w.a)("frontend",{useSuspense:!1}),n=t.t,c=(t.i18n,Object(r.useState)(!1)),s=Object(u.a)(c,2),o=s[0],i=s[1],l=Object(j.d)(),d=Object(j.e)(g);Object(r.useEffect)((function(){l(O.willLoadTasks());var e=setInterval((function(){console.log("WillLoad task for teacher every ".concat(10," seconds")),l(O.willLoadTasks())}),1e4);return function(){return clearInterval(e)}}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(y.a,{style:{marginTop:"10px",marginBottom:"10px"},className:"mb-0 text-white",color:"primary",light:!0,expand:"md",children:[Object(a.jsx)(T.a,{className:"text-white font-weight-bold",href:"/",children:n("answers_and_questions")}),Object(a.jsx)(_.a,{className:"mr-auto",navbar:!0}),Object(a.jsxs)(_.a,{navbar:!0,children:[Object(a.jsxs)(Ne.a,{onClick:function(e){console.log("Click new Question"),i(!0)},style:{height:34,marginRight:12,marginTop:6,marginBottom:6,borderWidth:1,borderColor:"white",borderStyle:"solid",borderRadius:4},color:"primary",children:[Object(a.jsx)(U.a,{icon:D.b}),n("new_question")]}),Object(a.jsx)(Ye.a,{onClick:function(){l(O.willLoadTasks())},style:{height:34,marginRight:12,marginTop:6,marginBottom:6,borderWidth:1,borderColor:"white",borderStyle:"solid",borderRadius:4},children:Object(a.jsx)(We.b.Provider,{value:{color:"white",className:"global-class-name"},children:Object(a.jsx)(Me.a,{color:"white","data-place":"top","data-for":"teacherdashboard","data-tip":n("refresh")})})})]}),Object(a.jsx)(Be.a,{id:"teacherdashboard"})]}),o&&Object(a.jsxs)(qe.a,{isOpen:o,children:[Object(a.jsx)(ze.a,{children:n("new_question")}),Object(a.jsx)(Je.a,{children:Object(a.jsx)(Qe,{onClose:function(){return i(!1)}})})]}),d&&d.map((function(e,t){return Object(a.jsx)(Xe,{task:e},t)}))]})},Xe=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1],o=function(){return s(!c)},i=Object(w.a)("frontend",{useSuspense:!1}),l=i.t,d=(i.i18n,Object(j.e)(m),Object(r.useState)({})),b=Object(u.a)(d,2),x=b[0],f=b[1],O=Object(r.useState)([]),p=Object(u.a)(O,2),g=p[0],v=p[1],k=Object(r.useState)(0),y=Object(u.a)(k,2),T=y[0],C=y[1];Object(r.useEffect)((function(){var t=e.task;console.log("Student task:",t);for(var n={},a=0;a<t.transactions.length;a++){var r=t.transactions[a].attributes.transactionID;null!=r&&(n[r]=t.transactions[a])}var c=A();v(c),console.log("setFeedbackTeacherTransactions to->: ",n),f(n),C(_(c,n))}),[e.task]);var _=function(e,t){return null==e||e.length<1?0:e.length-Object.keys(t).length},A=function(){if(console.log("Transaction: (Task):",e.task.transactions),null==e.task.transactions)return[];var t=e.task.transactions.filter((function(e){return console.log("Transaction: (Filter):",e),Pe.includes(e.label)}));return t.sort((function(e,t){return e._creationTs-t._creationTs})),t};return function(){var t=e.task.goal.name,n=e.task.goal.description,r=h()(e.task._creationTs).format("DD/MM/YYYY - hh:mm");return Object(a.jsxs)(R.a,{className:"mb-4",style:{padding:"10px",borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{onClick:function(){o()},style:{cursor:"pointer",backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(z.a,{children:Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignContent:"space-between"},children:[T>0&&Object(a.jsxs)(Ae.a,{style:{margin:"5px",padding:"5px",color:"white",backgroundColor:"#FF0000"},children:["".concat(T," "),l("new_messages_from_students")]}),"(",r,") ",t,c?Object(a.jsx)(Le.b,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}}):Object(a.jsx)(Le.a,{size:"1.6em",cursor:"pointer",color:"white",onClick:function(){o()}})]})})}),Object(a.jsxs)(S.a,{isOpen:c,children:[n&&Object(a.jsx)(Ee.a,{style:{padding:"10px",margin:"10px",backgroundColor:"#EEEEEE"},children:n}),Object(a.jsx)(J.a,{children:Object(a.jsx)(_e.a,{children:(console.log("Transaction: (filter):",g),g.map((function(e,t){return Object(a.jsx)(Ve,{readonly:!0,transaction:e,teacherFeedback:x[e.id]},t)})))})})]})]})}()},Ze=n(105),$e=n.n(Ze),et=function(e){var t=Object(w.a)("frontend",{useSuspense:!1}),n=t.t,r=(t.i18n,Object(j.d)()),s=Object(j.e)(v),o=[{dataField:"name",text:n("name"),sort:!0},{dataField:"surname",text:n("surname"),sort:!0},{dataField:"passcode",text:n("passcode"),sort:!0,hidden:!1},{dataField:"id",text:n("profile"),sort:!0},{dataField:"description",text:n("description"),sort:!1}];return c.a.useEffect((function(){return r(O.willLoadStudentsProfile(null)),function(){}}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)($e.a,{bootstrap4:!0,keyField:"passcode",data:s,columns:o})})},tt=n(234),nt=n(235),at=function(e){var t=Object(j.e)(m),n=Object(r.useState)("0"),c=Object(u.a)(n,2),s=c[0],o=c[1],i=Object(w.a)("frontend",{useSuspense:!1}),l=i.t,d=(i.i18n,Object(j.d)());return Object(r.useEffect)((function(){d(O.willGetUserProfile())}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{className:"mb-0 text-white",section:"teacher_area",showMenu:!0}),Object(a.jsx)(M,{active:"teacher_dashboard",role:null!=t?t.role_id:null}),Object(a.jsxs)(B,{children:[Object(a.jsxs)(_.a,{tabs:!0,children:[Object(a.jsx)(I.a,{children:Object(a.jsx)(P.a,{style:"0"===s?{cursor:"arrow",fontWeight:"bold",background:"#EEEEEE"}:{cursor:"pointer",fontWeight:"normal"},onClick:function(){o("0")},children:l("students_answers")})}),Object(a.jsx)(I.a,{children:Object(a.jsx)(P.a,{style:"1"===s?{cursor:"arrow",fontWeight:"bold",background:"#EEEEEE"}:{cursor:"pointer",fontWeight:"normal"},onClick:function(){o("1")},children:l("students_profile")})})]}),Object(a.jsxs)(tt.a,{activeTab:s,children:[Object(a.jsx)(nt.a,{tabId:"0",children:Object(a.jsx)(He,{})}),Object(a.jsx)(nt.a,{tabId:"1",children:Object(a.jsx)(et,{})})]})]})]})},rt=function(){var e=Object(w.a)("frontend",{useSuspense:!1}),t=e.t,n=(e.i18n,Object(r.useState)(null)),c=Object(u.a)(n,2),s=c[0],o=c[1];Object(r.useEffect)((function(){localStorage.setItem("passcode",s)}),[s]);var i=function(e){console.log("entered:",e.target.value),function(e){var t="abcdefghijklmnopqrstuvwxyz".toUpperCase();try{var n=e.trim().toUpperCase();if(8!=n.length)throw"Invalid";for(var a=0,r=0;r<n.length-1;r++)a+=t.indexOf(n.charAt(r));var c=(a-=t.indexOf(n.charAt(7)))%t.length==0;o(c?n:null)}catch(s){o(null)}}(e.target.value)};return Object(a.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(a.jsxs)(R.a,{className:"mb-4",style:{borderColor:"#007bff"},children:[Object(a.jsx)(q.a,{style:{backgroundColor:"#007bff",borderColor:"#007bff",paddingBottom:0,color:"white"},children:Object(a.jsx)(z.a,{style:{textAlign:"center"},children:t("platform_title")})}),Object(a.jsx)(J.a,{children:Object(a.jsx)(Ce.a,{onChange:function(e){return i(e)},type:"text",name:"passcode",id:"passcode",placeholder:t("passcode_enter")})}),Object(a.jsx)(Fe.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:s&&Object(a.jsx)("a",{href:"/connect?passcode=".concat(s),children:t("connect_to_wenet")})})]})})},ct=function(){var e=Object(j.e)(m),t=Object(j.d)();return Object(r.useEffect)((function(){t(O.willGetUserProfile(null))}),[]),Object(r.useEffect)((function(){console.log("UserProfile in router:",e)}),[e]),Object(a.jsx)(ve.a,{history:ke,children:Object(a.jsxs)(ye.d,{children:[Object(a.jsx)(ye.b,{path:"/student_dashboard",children:null==e?Object(a.jsx)("p",{children:"loading..."}):e.role_id==Y.student||e.role_id==Y.admin?Object(a.jsx)(Re,{}):Object(a.jsx)(ye.a,{to:"/"})}),Object(a.jsx)(ye.b,{path:"/teacher_dashboard",children:null==e?Object(a.jsx)("p",{children:"loading..."}):e.role_id==Y.teacher||e.role_id==Y.admin?Object(a.jsx)(at,{}):Object(a.jsx)(ye.a,{to:"/"})}),Object(a.jsx)(ye.b,{path:"/",children:Object(a.jsx)(rt,{})})]})})};function st(){return Object(a.jsx)(j.a,{store:we({}),children:Object(a.jsx)(ct,{})})}var ot=n(75),it=n(51),lt=n(106);n(200);ot.a.use(lt.a).use(it.e).init({ns:["tl","frontend"],defaultNS:"tl",fallbackLng:"it",debug:!0,interpolation:{escapeValue:!1}});var dt=ot.a;"it-IT"!==(window.navigator.userLanguage||window.navigator.language)?dt.changeLanguage("en-US"):dt.changeLanguage("it-IT"),o.a.render(Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(st,{})}),document.getElementById("root")),K()}},[[199,1,2]]]);
//# sourceMappingURL=main.00169d61.chunk.js.map