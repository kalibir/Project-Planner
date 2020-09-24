(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{214:function(e,t,a){e.exports=a(408)},219:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(0),c=a.n(r),l=a(89),i=a.n(l),o=(a(219),a(7)),s=a(4),u=a(8),m=a(64),d=Object(u.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGN_OUT_SUCCESS"})}))}))}}}))((function(e){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/createproject"},"New Project")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.signOut},"Log Out")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",className:"btn btn-floating red lighten-1"},e.profile.initials)))})),p=function(){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/signup"},"Signup")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/signin"},"Login")))},h=a(20),E=Object(u.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?c.a.createElement(d,{profile:a}):c.a.createElement(p,null);return c.a.createElement("nav",{className:"nav-wrapper grey darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement(o.b,{to:"/",className:"brand-logo"},"Project Planner"),Object(h.isLoaded)(t)&&n," "))})),f=a(28),b=a(29),g=a(31),N=a(30),j=a(51),v=a.n(j),O=function(e){var t=e.notifications;return c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},"Notifications"),c.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("span",{className:"pink-text"},e.user," "),c.a.createElement("span",null,e.content),c.a.createElement("div",{className:"grey-text note-date"},v()(e.time.toDate()).fromNow()))}))))))},C=function(e){var t=e.project;return c.a.createElement("div",{className:"card z-depth-0 project-summary"},c.a.createElement("div",{className:"card-content grey-text text-darken-3"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("p",{className:"grey-text"},v()(t.createdAt.toDate()).calendar())))},y=function(e){var t=e.projects;return c.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return c.a.createElement(o.b,{to:"/project/"+e.id,key:e.id},c.a.createElement(C,{project:e}))})))},S=a(17),w=function(e){Object(g.a)(a,e);var t=Object(N.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?c.a.createElement("div",{className:"dashboard container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement(y,{projects:t})),c.a.createElement("div",{className:"col s12 m5 offset-m1"},c.a.createElement(O,{notifications:n})))):c.a.createElement(s.a,{to:"/signin"})}}]),a}(r.Component),R=Object(S.d)(Object(u.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(h.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:4,orderBy:["time","desc"]}]))(w),F=Object(S.d)(Object(u.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(h.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?c.a.createElement("div",{className:"container section project-details"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,t.content)),c.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},c.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),c.a.createElement("div",null,v()(t.createdAt.toDate()).calendar())))):c.a.createElement("div",{className:"container center"},c.a.createElement("p",null,"Loading project...")):c.a.createElement(s.a,{to:"/signin"})})),P=function(e){Object(g.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(f.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),c.a.createElement("div",{className:"red-text"},t?c.a.createElement("p",null,t):null))))}}]),a}(r.Component),I=Object(u.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(P),x=function(e){Object(g.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(f.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.signUp(e.state)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?c.a.createElement(s.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"firstName"},"First Name"),c.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"lastName"},"Last Name"),c.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),c.a.createElement("div",{className:"red-text"},a?c.a.createElement("p",null,a):null))))}}]),a}(r.Component),k=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=(n.getFirestore,r()),l=r().firestore();c.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(x),_=a(18),A=function(e){Object(g.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(f.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(b.a)(a,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement("div",{className:"container"},c.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},c.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"content"},"Project Content"),c.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):c.a.createElement(s.a,{to:"/signin"})}}]),a}(r.Component),U=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirebase)().firestore(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(_.a)(Object(_.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){return t({type:"CREATE_PROJECT_ERROR",error:e})}))}}(t))}}}))(A);var L=function(){return c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:R}),c.a.createElement(s.b,{path:"/project/:id",component:F}),c.a.createElement(s.b,{path:"/signin",component:I}),c.a.createElement(s.b,{path:"/signup",component:k}),c.a.createElement(s.b,{path:"/createproject",component:U}))))},G={authError:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login failed"),Object(_.a)(Object(_.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(_.a)(Object(_.a)({},e),{},{authError:null});case"SIGN_OUT_SUCCESS":return console.log("logout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(_.a)(Object(_.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(_.a)(Object(_.a)({},e),{},{authError:t.err.message});default:return e}},z={projects:[{id:"1",title:"help me find peach",content:" bla bla bla "},{id:"2",title:"collect all the stars",content:" bla bla bla "},{id:"3",title:"egg hunt with yoshi",content:" bla bla bla "}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREAT_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},J=Object(S.c)({auth:T,project:D,firestore:m.firestoreReducer,firebase:h.firebaseReducer}),B=a(212),W=a(92),K=a.n(W);a(403),a(406),a(409);K.a.initializeApp({apiKey:"AIzaSyAKFbYeg5EDXnGrctqewSgNZPgnW68FC_I",authDomain:"project-plan-a63b5.firebaseapp.com",databaseURL:"https://project-plan-a63b5.firebaseio.com",projectId:"project-plan-a63b5",storageBucket:"project-plan-a63b5.appspot.com",messagingSenderId:"531144735866",appId:"1:531144735866:web:3c52e30f4c157ff1e70fc3",measurementId:"G-T7NCELC0XE"}),K.a.analytics();var X,q=K.a,H=Object(S.e)(J,Object(S.d)(Object(S.a)(B.a.withExtraArgument({getFirebase:h.getFirebase})))),Y=(X={firebase:q,config:{}},Object(n.a)(X,"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),Object(n.a)(X,"dispatch",H.dispatch),Object(n.a)(X,"createFirestoreInstance",m.createFirestoreInstance),X);i.a.render(c.a.createElement(u.a,{store:H},c.a.createElement(h.ReactReduxFirebaseProvider,Y,c.a.createElement(L,null))),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.90dd8881.chunk.js.map