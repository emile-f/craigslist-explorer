(this["webpackJsonpcraigslist-explorer"]=this["webpackJsonpcraigslist-explorer"]||[]).push([[0],{182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},213:function(e,t,n){},237:function(e,t){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},260:function(e,t){},262:function(e,t){},272:function(e,t){},274:function(e,t){},301:function(e,t){},303:function(e,t){},304:function(e,t){},309:function(e,t){},311:function(e,t){},330:function(e,t){},342:function(e,t){},345:function(e,t){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},351:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),i=n(39),o=n.n(i),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,360)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},l=n(2),d=n(17),j=n(10),u={development:{api:"https://webdev-craigslist-exporer-back.herokuapp.com"},production:{api:"https://webdev-craigslist-exporer-back.herokuapp.com"}},b=u,h=n(24),O=n.n(h),p=n(80),m=n.n(p),f=n(153);function x(){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(m.a.mark((function e(){var t,n,a,c=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"include",withCredentials:!0,headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(n)});case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(40),N=(n(182),n(183),"300x300"),S="600x450",w=function(e,t){return"https://images.craigslist.org/".concat(e,"_").concat(t,".jpg")},C=n(154),y=function(e){return C(e).format("MMM D")},k=(n(184),function(e){return Object(a.jsxs)(d.b,{className:"post-container",to:{pathname:"/post/"+e.post._id,state:{postId:e.post._id,post:e.post}},children:[Object(a.jsx)("div",{className:e.post.images.length>0?"image":"no-image",style:{backgroundImage:e.post.images.length>0?"url(".concat(w(e.post.images[0],N),")"):""},children:e.post.images.length>0?"":"No image available"}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"title",children:e.post.title}),Object(a.jsxs)("div",{className:"extra-info",children:[Object(a.jsx)("div",{className:"date",children:y(e.post.date)}),Object(a.jsxs)("div",{className:"bedrooms",children:[e.post.bedrooms?e.post.bedrooms:"N/A"," BR,"]}),Object(a.jsxs)("div",{className:"area",children:[e.post.area?e.post.area:"N/A"," ft\xb2,"]}),Object(a.jsx)("div",{className:"city",children:e.post.neighborhood.join(" ")})]})]}),Object(a.jsxs)("div",{className:"price",children:["$ ",e.post.price]})]})});var E=function(e){var t=e.posts.map((function(e,t){return Object(a.jsx)(k,{post:e},e._id||t)}));return Object(a.jsx)(s.a.Fragment,{children:t})},F=n(53),P=n.n(F),I=(n(211),function(e){var t=Object(c.useState)("off"),n=Object(l.a)(t,2),s=n[0],i=n[1];Object(c.useEffect)((function(){e.enabled?o(!0):o(!1)}),[e.enabled]);var o=function(e){i(e?"on":"off")};return Object(a.jsx)("div",{className:"toggle",children:Object(a.jsx)("div",{onClick:function(){return e.update("on"!==s)},className:"SwitchControl "+s,children:Object(a.jsx)("div",{className:"SwitchControl--slider",children:Object(a.jsx)("div",{className:"SwitchControl--knob"})})})})}),A=(n(212),function(e){var t=Object(c.useState)(1),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(9999),r=Object(l.a)(o,2),d=r[0],j=r[1],u=Object(c.useState)("1"),b=Object(l.a)(u,2),h=b[0],O=b[1],p=Object(c.useState)(100),m=Object(l.a)(p,2),f=m[0],x=m[1],g=Object(c.useState)(!1),v=Object(l.a)(g,2),N=v[0],S=v[1],w=Object(c.useState)({}),C=Object(l.a)(w,2),y=C[0],k=C[1];Object(c.useEffect)((function(){var t={minPrice:s,maxPrice:d,bedrooms:h,area:f};y.minPrice?function(e,t){return e.minPrice===t.minPrice&&e.maxPrice===t.maxPrice&&e.bedrooms===t.bedrooms&&e.area===t.area}(y,t)||(S(!0),k(t),e.updateFilter(t)):k(t)}),[s,d,h,f,y,e]);return Object(a.jsxs)("div",{className:"filter",children:[Object(a.jsxs)("div",{className:"toggle-wrapper",children:["Search Filter",Object(a.jsx)(I,{enabled:N,update:function(t){S(t),t?e.updateFilter({minPrice:s,maxPrice:d,bedrooms:h,area:f}):e.updateFilter({})}})]}),Object(a.jsxs)("div",{className:"price",children:["$",Object(a.jsx)("input",{"aria-label":"Minimum price filter",onChange:function(e){return i(e.target.value)},min:"1",max:"9999",type:"number",value:s})," -  $",Object(a.jsx)("input",{"aria-label":"Maximum price filter",onChange:function(e){return j(e.target.value)},min:"1",max:"9999",type:"number",value:d})," ",Object(a.jsx)("span",{children:"Rent"})]}),Object(a.jsxs)("div",{className:"bedrooms",children:[Object(a.jsxs)("select",{"aria-label":"Option menu for minimum amount of bedrooms",value:h,onChange:function(e){return O(e.target.value)},name:"bedrooms",children:[Object(a.jsx)("option",{value:"1",children:"+1"}),Object(a.jsx)("option",{value:"2",children:"+2"}),Object(a.jsx)("option",{value:"3",children:"+3"}),Object(a.jsx)("option",{value:"4",children:"+4"}),Object(a.jsx)("option",{value:"5",children:"+5"}),Object(a.jsx)("option",{value:"6",children:"+6"})]}),Object(a.jsx)("span",{children:"BR"})]}),Object(a.jsxs)("div",{className:"area",children:["+ ",Object(a.jsx)("input",{"aria-label":"Minimum area filter",max:"9999",step:"50",onChange:function(e){return x(e.target.value)},min:"1",type:"number",value:f}),Object(a.jsx)("span",{children:"ft\xb2"})]}),Object(a.jsx)("div",{className:"minimize",children:Object(a.jsx)("span",{children:"^"})})]})}),L=(n(213),function(e){var t=Object(c.useState)("10"),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)("date"),r=Object(l.a)(o,2),d=r[0],j=r[1],u=Object(c.useState)("asc"),b=Object(l.a)(u,2),h=b[0],O=b[1],p=Object(c.useState)({}),m=Object(l.a)(p,2),f=m[0],x=m[1];return Object(c.useEffect)((function(){var t={amount:s,sortBy:d,sortOrder:h};f.amount?function(e,t){return e.amount===t.amount&&e.sortBy===t.sortBy&&e.sortOrder===t.sortOrder}(f,t)||(x(t),e.updateSorting(t)):x(t)}),[s,d,h,f,e]),Object(a.jsxs)("div",{className:"sort",children:[Object(a.jsxs)("div",{className:"amount",children:[Object(a.jsxs)("select",{"aria-label":"Option menu for items to show in feed",value:s,onChange:function(e){return i(e.target.value)},name:"amount",children:[Object(a.jsx)("option",{value:"10",children:"10"}),Object(a.jsx)("option",{value:"20",children:"20"}),Object(a.jsx)("option",{value:"40",children:"40"}),Object(a.jsx)("option",{value:"60",children:"60"}),Object(a.jsx)("option",{value:"80",children:"80"}),Object(a.jsx)("option",{value:"100",children:"100"})]}),Object(a.jsx)("span",{children:"\ud80c\udc79"})]}),Object(a.jsxs)("div",{className:"sort-by",children:[Object(a.jsx)("span",{children:"Sort by"}),Object(a.jsxs)("select",{"aria-label":"Option menu to pick sort-by value",value:d,onChange:function(e){return j(e.target.value)},name:"amount",children:[Object(a.jsx)("option",{value:"date",children:"date"}),Object(a.jsx)("option",{value:"price",children:"price"}),Object(a.jsx)("option",{value:"bedrooms",children:"bedrooms"}),Object(a.jsx)("option",{value:"area",children:"area"})]})]}),Object(a.jsxs)("div",{className:"asc-desc",children:[Object(a.jsx)("span",{className:"asc"===h?"active":"",onClick:function(){return O("asc")},children:"asc \u2191"}),Object(a.jsx)("span",{children:"|"}),Object(a.jsx)("span",{className:"desc"===h?"active":"",onClick:function(){return O("desc")},children:"desc \u2193"})]})]})}),M=n(156),_=n.n(M),R=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(0),r=Object(l.a)(o,2),d=r[0],j=r[1],u=Object(c.useState)(!1),h=Object(l.a)(u,2),p=h[0],m=h[1],f=Object(c.useState)(0),x=Object(l.a)(f,2),g=x[0],v=x[1],N=Object(c.useState)({}),S=Object(l.a)(N,2),w=S[0],C=S[1],y=Object(c.useState)({}),k=Object(l.a)(y,2),F=k[0],I=k[1],M=Object(c.useCallback)((function(){m(!1),function(e,t,n,a){var c=encodeURIComponent(JSON.stringify(e)),s=encodeURIComponent(JSON.stringify(t));return O.a.get("".concat(b.production.api,"/posts/all?page=").concat(n,"&filter=").concat(c,"&sort=").concat(s,"&neighborhood=").concat(a))}(w,F,g,e.neighborhood?e.neighborhood:"").then((function(e){e.data.total?j(e.data.total):j(0),e.data.posts?i(e.data.posts):i([]),m(!0)})).catch((function(e){console.error("Failed to get all threads",e)}))}),[g,w,F,e.neighborhood]);return Object(c.useEffect)((function(){v(0)}),[w,F]),Object(c.useEffect)(M,[w,F,g,M]),Object(c.useEffect)((function(){M(),e.postLoaded&&e.postLoaded(null)}),[e,M]),Object(a.jsxs)("div",{className:"feed",children:[Object(a.jsx)(A,{updateFilter:C}),Object(a.jsxs)("div",{className:"feed-smaller",children:[Object(a.jsx)(L,{updateSorting:I}),p?Object(a.jsx)(E,{posts:s}):Object(a.jsx)(P.a,{type:"Puff",color:"#005edc",height:100,width:100,className:"loader"})]}),Object(a.jsx)(_.a,{previousLabel:"\u2190 Previous",nextLabel:"Next \u2192",pageCount:Math.ceil(d/(F&&F.amount?F.amount:10)),onPageChange:function(e){var t=e.selected;return v(t)},containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"})]})},z=function(){return Object(a.jsx)("h3",{children:"Url not found."})},B=n(159),U=n(157),T=n.n(U),H=n(358),K=n(354),q=n(355),J=n(356),D=n(359),G=n(357),$=(n(253),function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(void 0),r=Object(l.a)(o,2),d=r[0],j=r[1],u=Object(c.useState)(void 0),h=Object(l.a)(u,2),p=h[0],m=h[1];Object(c.useEffect)((function(){m(e.postId)}),[e.postId]);return Object(a.jsxs)("div",{id:e.id,className:"new-annotation",children:[Object(a.jsx)("h3",{children:"Add Annotation:"}),Object(a.jsx)("textarea",{id:"message",alt:"message",name:"message","aria-label":"New annotation message",value:s,onChange:function(e){return i(e.target.value)}}),Object(a.jsx)("button",{"aria-label":"Add Annotation to post",onClick:function(){(function(e){return O.a.post(b.production.api+"/annotation/add",e,{withCredentials:!0,timeout:1e4})})({postId:p,message:s}).then((function(t){200===t.status?(e.success(t.data),i("")):202===t.status&&j(t.data)})).catch((function(e){console.error(e)}))},children:"Submit"}),Object(a.jsx)("div",{children:d||""})]})}),W=(n(254),function(e){return Object(a.jsxs)("div",{className:"annotation-item",children:[Object(a.jsx)("div",{className:"date",children:y(e.annotation.date)}),Object(a.jsx)("div",{className:"message",children:e.annotation.message})]})});var X=function(e){var t=e.annotations.map((function(e,t){return Object(a.jsx)(W,{annotation:e},e._id||t)}));return Object(a.jsx)(s.a.Fragment,{children:t})},V=function(e){return Object(a.jsx)(s.a.Fragment,{children:e.center?Object(a.jsxs)(v.b,{mapContainerStyle:{height:"100%",width:"100%"},zoom:e.zoom||14,center:e.center,children:[e.circle?Object(a.jsx)(v.a,{center:e.center,radius:e.circleRadius,options:{strokeColor:"#005edc",strokeOpacity:.8,strokeWeight:2,fillColor:"#005edc",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,zIndex:1}}):"",e.rectangle?Object(a.jsx)(v.d,{bounds:{north:e.bounds.northeast.lat,south:e.bounds.southwest.lat,east:e.bounds.northeast.lng,west:e.bounds.southwest.lng},options:{strokeColor:"#005edc",strokeOpacity:.8,strokeWeight:2,fillColor:"#005edc",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,zIndex:1}}):""]}):"loading Map"})};n(255),n(256);H.a.use([K.a,q.a,J.a]);var Q=Object(j.g)((function(e){var t=Object(c.useState)(void 0),n=Object(l.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(!1),u=Object(l.a)(r,2),h=u[0],p=u[1],m=Object(c.useState)(!1),f=Object(l.a)(m,2),x=f[0],g=f[1],v=Object(c.useState)(null),N=Object(l.a)(v,2),C=N[0],k=N[1],E=Object(c.useState)([]),F=Object(l.a)(E,2),I=F[0],A=F[1],L=Object(c.useState)(null),M=Object(l.a)(L,2),_=M[0],R=M[1];Object(c.useEffect)((function(){e.postLoaded&&e.postLoaded(C)}),[C,e]);if(Object(c.useEffect)((function(){e.location&&e.location.state&&e.location.state.post&&(k(e.location.state.post),g(!0)),e.location&&e.location.state&&e.location.state.postId?o(e.location.state.postId):e.match&&e.match.params&&e.match.params.postId?o(e.match.params.postId):p(!0)}),[e.location,e.match]),Object(c.useEffect)((function(){!C&&i&&function(e){return O.a.get(b.production.api+"/posts/one?id="+e)}(i).then((function(e){200===e.status?e.data&&(k(e.data),g(!0)):202===e.status&&console.error("error",e.data)})).catch((function(e){console.error(e)}))}),[i,C]),Object(c.useEffect)((function(){i&&e.user&&function(e){return O.a.get(b.production.api+"/annotation/all?id="+e,{withCredentials:!0,timeout:1e4})}(i).then((function(e){200===e.status?e.data&&A(e.data):202===e.status&&console.error("error",e.data)})).catch((function(e){console.error(e)}))}),[e.user,i]),Object(c.useEffect)((function(){if(C){var e=C.address;""===e&&(e=C.neighborhood.join(" ")),(t=e,O.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(t,"+SF,CA&key=AIzaSyCUt2G6KFrKTpKlUkbUrTIH0SqpgzRX8_0"))).then((function(e){e.data.results&&e.data.results.length&&e.data.results.length>0&&e.data.results[0]&&e.data.results[0].geometry&&e.data.results[0].geometry.location&&R(e.data.results[0].geometry.location)})).catch((function(e){console.log("Failed to get map data",e)}))}var t}),[C]),!0===h)return Object(a.jsx)(j.a,{to:"/"});return Object(a.jsx)("div",{className:"post",children:x?Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("h1",{children:C.title}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)("div",{className:"gallery",children:Object(a.jsx)(D.a,{navigation:!0,spaceBetween:0,slidesPerView:1,onSwiper:function(e){return e.update()},children:C.images&&C.images.length&&C.images.length>0?C.images.map((function(e,t){return Object(a.jsx)(G.a,{style:{backgroundImage:"url(".concat(w(e,S),")")},children:" "},e)})):Object(a.jsx)(G.a,{children:" No images available "})})}),Object(a.jsx)("div",{className:"body",children:T()(C.body.replace(/(?:\r\n|\r|\n)/g,"<br>"))})]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)("div",{className:"map",children:Object(a.jsx)(V,{circle:!0,center:_,zoom:""===C.address?14:17,circleRadius:""===C.address?400:100})}),Object(a.jsxs)("div",{className:"data",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Post date: "}),"  ",y(C.date)]}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Bedrooms: "}),"  ",C.bedrooms," BR"]}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Area: "}),"  ",C.area," ft\xb2"]}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Neighborhood: "}),"  ",C.neighborhood.join(" ")]}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Address: "}),"  ",""===C.address?"N/A":C.address]})]})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Annotations"}),Object(a.jsx)("div",{className:"annotation",children:e.user?Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("div",{className:"list",children:I&&I.length&&I.length>0?Object(a.jsx)(X,{annotations:I}):Object(a.jsx)("div",{children:" No annotations found for this post "})}),Object(a.jsx)($,{success:function(e){A([].concat(Object(B.a)(I),[e]))},postId:C._id})]}):Object(a.jsxs)("div",{id:e.id,className:"login",children:["Please sign-in/sign-up to add a annotation.",Object(a.jsx)(d.b,{to:{pathname:"/login",state:{from:e.location}},children:"Go to sign-in/sign-up"})]})})]})]}):Object(a.jsx)(P.a,{type:"Puff",color:"#4f5d75;",height:100,width:100,className:"loader"})})})),Y=n(54),Z=n.n(Y),ee=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(""),r=Object(l.a)(o,2),d=r[0],j=r[1],u=Object(c.useState)(void 0),h=Object(l.a)(u,2),O=h[0],p=h[1];return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{onClick:e.changeMode,className:"top-right-corner",children:"Sign-up"}),Object(a.jsx)("h1",{children:"Sign-in"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(a.jsx)("input",{id:"email",alt:"email",autoFocus:!0,name:"username",placeholder:"Enter your Email",type:"text",onChange:function(e){return i(e.target.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(a.jsx)("input",{id:"password",alt:"password",name:"password",placeholder:"Enter your Password",type:"password",onChange:function(e){return t=e.target.value,j(Z()(t).toString());var t}})]}),Object(a.jsx)("button",{"aria-label":"Sign into forum",onClick:function(){""!==s&&""!==d?function(e){return x(b.production.api+"/auth/signin",e)}({email:s,password:d}).then((function(t){console.log(t),t.message?p(t.message):e.success(t)})).catch((function(e){console.error(e)})):p("Please fill in all fields")},children:"Sign-in"}),Object(a.jsx)("div",{className:"error",children:O||""})]})},te=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(""),r=Object(l.a)(o,2),d=r[0],j=r[1],u=Object(c.useState)(void 0),h=Object(l.a)(u,2),O=h[0],p=h[1];return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{onClick:e.changeMode,className:"top-right-corner",children:"Sign-in"}),Object(a.jsx)("h1",{children:"Sign-up"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(a.jsx)("input",{id:"email",alt:"email",name:"username",placeholder:"Enter your Email",type:"text",onChange:function(e){return j(e.target.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(a.jsx)("input",{id:"password",alt:"password",name:"password",placeholder:"Enter your Password",type:"password",onChange:function(e){return t=e.target.value,i(Z()(t).toString());var t}})]}),Object(a.jsx)("button",{"aria-label":"Sign up to forum",onClick:function(){""!==s&&""!==d?function(e){return x(b.production.api+"/auth/signup",e)}({email:d,password:s}).then((function(t){t.message?p(t.message):e.success(t)})).catch((function(e){console.error(e)})):p("Please fill in all fields")},children:"Sign-up"}),Object(a.jsx)("div",{className:"error",children:O||""})]})},ne=(n(348),Object(j.g)((function(e){var t=Object(c.useState)(!0),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(!1),r=Object(l.a)(o,2),d=r[0],u=r[1],b=(e.location.state||{from:{pathname:"/"}}).from,h=function(t){e.loginSuccess(t),u(!0)},O=function(){i(!s)};return!0===d?Object(a.jsx)(j.a,{to:b}):Object(a.jsx)("div",{className:"auth-container",children:s?Object(a.jsx)(ee,{changeMode:O,success:h}):Object(a.jsx)(te,{changeMode:O,success:h})})}))),ae=(n(349),Object(j.g)((function(e){return Object(a.jsxs)("header",{role:"banner",className:"active",id:"scroll-header",children:[Object(a.jsxs)("nav",{role:"navigation",className:"menu",children:[Object(a.jsx)(d.b,{"aria-label":"Craigslist",to:"/",children:"Craigslist"}),Object(a.jsx)(d.b,{"aria-label":"Navigate to Home page",to:"/",children:"Home"})]}),Object(a.jsx)("div",{className:"login",children:e.user?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"user",children:["Hello ",e.user.email]}),Object(a.jsx)("button",{onClick:e.logout,"aria-label":"Logout button",children:"Logout"})]}):Object(a.jsx)(d.b,{to:{pathname:"/login",state:{from:e.location}},children:"Sign-In/Sign-up"})})]})}))),ce=n(158),se=(n(350),function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(0),o=Object(l.a)(i,2),r=o[0],d=o[1],j=Object(c.useState)(""),u=Object(l.a)(j,2),b=u[0],h=u[1],O=function(e){s(e.target.innerHeight)};return Object(c.useEffect)((function(){s(window.innerHeight),window.addEventListener("resize",O);var e=new ResizeObserver((function(e){var t,n=Object(ce.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value.contentRect;d(a.height+a.top)}}catch(c){n.e(c)}finally{n.f()}})),t=document.getElementById("craigslist-body");return e.observe(t),function(){window.removeEventListener("resize",O),e.unobserve(t)}}),[]),Object(c.useEffect)((function(){h(n>r?"bottom":"")}),[n,r]),Object(a.jsx)("footer",{role:"contentinfo",className:b,children:Object(a.jsx)("div",{className:"copyright",children:"Copyright \xa9 2020, Emile Ferrand"})})}),ie=(n(351),Object(j.g)((function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(""),j=Object(l.a)(r,2),u=j[0],h=j[1],p=Object(c.useState)({}),m=Object(l.a)(p,2),f=m[0],x=m[1],g=Object(c.useState)(9),v=Object(l.a)(g,2),N=v[0],S=v[1],w=Object(c.useCallback)((function(e){var t=i.filter((function(t){return t.name===e}));t&&t.length>0?x(t[0]):C()}),[i]),C=function(){x({bounds:{northeast:{lat:37.9298239,lng:-122.28178},southwest:{lat:37.6398299,lng:-123.173825}},location:{lat:37.7749295,lng:-122.4194155},viewport:{northeast:{lat:37.812,lng:-122.3482},southwest:{lat:37.70339999999999,lng:-122.527}}})};return Object(c.useEffect)((function(){if(e.post&&e.post.neighborhood){var t=e.post.neighborhood.join(" ");w(t),h(t)}else""===u?C():w(u)}),[u,i,e.post,w]),Object(c.useEffect)((function(){if(f.viewport){var e=f.viewport.southwest.lng,t=f.viewport.northeast.lng-e;t<0&&(t+=360),S(Math.round(Math.log(36e3/t/256)/Math.LN2))}}),[f]),Object(c.useEffect)((function(){O.a.get(b.production.api+"/location/all").then((function(e){e.data&&o(e.data)})).catch((function(e){console.log("Request to get locations failed",e)}))}),[]),Object(c.useEffect)((function(){e.setFilter&&e.setFilter(u)}),[u,e]),Object(c.useEffect)((function(){null===e.post&&h("")}),[e.post]),Object(a.jsxs)("div",{className:"aside",children:[Object(a.jsxs)("div",{className:"date",children:[Object(a.jsx)("div",{children:y(Date.now()).split(" ")[0]}),Object(a.jsx)("div",{children:y(Date.now()).split(" ")[1]})]}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{className:"location",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:"San Francisco"}),Object(a.jsx)("div",{children:"US, CA"})]}),Object(a.jsx)("div",{className:"image"})]}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{className:"location-picker",children:[Object(a.jsx)("div",{children:Object(a.jsxs)("select",{"aria-label":"Option menu for neighborhood filter",disabled:e.post?"disabled":"",value:u,onChange:function(e){return h(e.target.value)},name:"location",children:[Object(a.jsx)("option",{value:"",children:"All"}),i&&i.length>0?i.map((function(e,t){return Object(a.jsx)("option",{value:e.name,children:e.name},t)})):""]})}),Object(a.jsx)("div",{className:"map",children:Object(a.jsx)(V,{rectangle:!0,center:f.location,zoom:N,bounds:f.viewport})})]}),Object(a.jsx)("div",{className:"divider"}),Object(a.jsxs)("div",{className:"current",children:[Object(a.jsx)("div",{children:"Lists"}),Object(a.jsx)("div",{alt:"Arrow down","aria-label":"Arrow down",className:"arrow",children:"\u2193"}),Object(a.jsx)("div",{children:"housing"}),Object(a.jsx)("div",{alt:"Arrow down","aria-label":"Arrow down",className:"arrow",children:"\u2193"}),Object(a.jsx)("div",{children:e.post&&e.post.title?Object(a.jsx)(d.b,{className:"back",to:"/",children:"apartments housing for rent"}):Object(a.jsx)("h1",{children:"apartments housing for rent"})}),e.post&&e.post.title?Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("div",{alt:"Arrow down","aria-label":"Arrow down",className:"arrow",children:"\u2193"}),Object(a.jsx)("div",{children:e.post.title})]}):""]})]})}))),oe=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(null),o=Object(l.a)(i,2),r=o[0],u=o[1],h=Object(c.useState)(null),p=Object(l.a)(h,2),m=p[0],f=p[1];return Object(c.useEffect)((function(){O()(b.production.api+"/auth/signin",{method:"get",withCredentials:!0,timeout:1e4}).then((function(e){e.data&&s(e.data)})).catch((function(e){console.log("Request to login failed",e)}))}),[]),Object(a.jsx)(v.c,{googleMapsApiKey:"AIzaSyCUt2G6KFrKTpKlUkbUrTIH0SqpgzRX8_0",children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(ae,{logout:function(){x(b.production.api+"/auth/signout").then((function(e){e.data&&!0===e.data&&s(null)})).catch((function(e){console.log("Request to logout failed",e)}))},user:n}),Object(a.jsx)("div",{role:"main",id:"craigslist-body",className:"craigslist-body",children:Object(a.jsxs)(j.d,{children:[Object(a.jsxs)(j.b,{exact:!0,path:"/",children:[Object(a.jsx)(ie,{setFilter:f,post:r}),Object(a.jsx)(R,{neighborhood:m,postLoaded:u})]}),Object(a.jsxs)(j.b,{path:"/post/:postId",children:[Object(a.jsx)(ie,{setFilter:f,post:r}),Object(a.jsx)(Q,{postLoaded:u,user:n})]}),Object(a.jsx)(j.b,{path:"/login",children:Object(a.jsx)(ne,{loginSuccess:function(e){s(e)}})}),Object(a.jsx)(j.b,{path:"*",component:z})]})}),Object(a.jsx)(se,{})]})})};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(oe,{})}),document.getElementById("root")),r()}},[[352,1,2]]]);
//# sourceMappingURL=main.9c85692c.chunk.js.map