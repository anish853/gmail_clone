"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[42],{4373:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(4165),a=t(5861),o=t(9439),i=t(2791),s=t(5987),c=t(1243),l=["params","urlParams"],d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,o=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=o.length>2?o[2]:void 0,(t=o.length>1&&void 0!==o[1]?o[1]:{}).params,t.urlParams,(0,s.Z)(t,l),n.next=5,(0,c.Z)({method:e.method,url:"".concat("http://localhost:8000","/").concat(e.endpoint,"/").concat(a),data:t});case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=d,u=function(n){var e=(0,i.useState)(null),t=(0,o.Z)(e,2),s=t[0],c=t[1],l=(0,i.useState)(""),d=(0,o.Z)(l,2),u=d[0],h=d[1],x=(0,i.useState)(!1),m=(0,o.Z)(x,2),f=m[0],Z=m[1],g=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,o,i=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"",c(null),Z(!0),h(""),e.prev=4,e.next=7,p(n,t,a);case 7:o=e.sent,c(o.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),h(e.t0.message);case 14:return e.prev=14,Z(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[4,11,14,17]])})));return function(n){return e.apply(this,arguments)}}();return{call:g,response:s,error:u,isLoading:f}}},2042:function(n,e,t){t.r(e),t.d(e,{default:function(){return wn}});var r,a,o,i,s,c,l,d,p,u,h,x=t(9439),m=t(168),f=t(2791),Z=t(7630),g=t(4395),j=t(4554),b=t(4663),w=t(6098),v=t(7607),y=t(2167),P=t(4035),k=t(4371),S=t(2155),D=t(3512),C=t(5652),E=t(6148),F=t(184),O=(0,Z.ZP)(g.Z)(r||(r=(0,m.Z)(["\n    background: #f5F5F5;\n    box-shadow: none;\n"]))),T=(0,Z.ZP)(j.Z)(a||(a=(0,m.Z)(["\n    background: #EAF1FB;\n    margin-left: 80px;\n    border-radius: 8px;\n    min-width: 690px;\n    max-width: 720px;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 20px;\n    & > div {\n        width: 100%\n    }\n"]))),M=(0,Z.ZP)(j.Z)(o||(o=(0,m.Z)(["\n    width: 100%;\n    display: flex;\n    justify-content: end;\n    & > svg {\n        margin-left: 20px;\n    }\n"]))),_=function(n){var e=n.toggleDrawer;return(0,F.jsx)(O,{position:"static",children:(0,F.jsxs)(b.Z,{children:[(0,F.jsx)(v.Z,{color:"action",onClick:e}),(0,F.jsx)("img",{src:E.Pv,alt:"logo",style:{width:110,marginLeft:15}}),(0,F.jsxs)(T,{children:[(0,F.jsx)(y.Z,{color:"action"}),(0,F.jsx)(w.ZP,{}),(0,F.jsx)(P.Z,{color:"action"})]}),(0,F.jsxs)(M,{children:[(0,F.jsx)(k.Z,{color:"action"}),(0,F.jsx)(S.Z,{color:"action"}),(0,F.jsx)(D.Z,{color:"action"}),(0,F.jsx)(C.Z,{color:"action"})]})]})})},B=t(9953),z=t(6151),A=t(493),L=t(4852),R=t(4165),Y=t(5861),H=t(4942),I=t(1413),U=t(9818),G=t(890),N=t(539),W=t(6739),q=t(4220),J=t(4373),K=t(5372),Q={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},V=(0,Z.ZP)(j.Z)(i||(i=(0,m.Z)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 15px;\n    background: #f2f6fc;\n    & > p {\n        font-size: 14px;\n        font-weight: 500;\n    }\n"]))),X=(0,Z.ZP)(j.Z)(s||(s=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    padding: 0 15px;\n    & > div {\n        font-size: 14px;\n        border-bottom: 1px solid #F5F5F5;\n        margin-top: 10px;\n    }\n"]))),$=(0,Z.ZP)(j.Z)(c||(c=(0,m.Z)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 15px;\n    align-items: center;\n"]))),nn=(0,Z.ZP)(z.Z)(l||(l=(0,m.Z)(["\n    background: #0B57D0;\n    color: #fff;\n    font-weight: 500;\n    text-transform: none;\n    border-radius: 18px;\n    width: 100px;\n"]))),en=function(n){var e=n.open,t=n.setOpenDrawer,r=(0,f.useState)({}),a=(0,x.Z)(r,2),o=a[0],i=a[1],s=(0,J.Z)(K.Y.saveSentEmails),c=(0,J.Z)(K.Y.saveDraftEmails),l={Username:"anishbhardwaj@yopmail.com",Password:"F58777872499C121C1994CD07309C723292A",Host:"smtp.elasticemail.com",Port:2525},d=function(n){i((0,I.Z)((0,I.Z)({},o),{},(0,H.Z)({},n.target.name,n.target.value)))},p=function(){var n=(0,Y.Z)((0,R.Z)().mark((function n(e){var r;return(0,R.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),window.Email&&window.Email.send((0,I.Z)((0,I.Z)({},l),{},{To:o.to,From:"bhardwajanish602@gmail.com",Subject:o.subject,Body:o.body})).then((function(n){return alert(n)})),r={to:o.to,from:"bhardwajanish602@gmail.com",subject:o.subject,body:o.body,date:new Date,image:"",name:"Anish",starred:!1,type:"sent"},s.call(r),s.error||(t(!1),i({}));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,F.jsxs)(U.Z,{open:e,PaperProps:{sx:Q},children:[(0,F.jsxs)(V,{children:[(0,F.jsx)(G.Z,{children:"New Message"}),(0,F.jsx)(W.Z,{fontSize:"small",onClick:function(n){return function(n){n.preventDefault();var e={to:o.to,from:"bhardwajanish602@gmail.com",subject:o.subject,body:o.body,date:new Date,image:"",name:"Anish",starred:!1,type:"drafts"};c.call(e),c.error||(t(!1),i({}))}(n)}})]}),(0,F.jsxs)(X,{children:[(0,F.jsx)(w.ZP,{placeholder:"Recipients",name:"to",onChange:function(n){return d(n)},value:o.to}),(0,F.jsx)(w.ZP,{placeholder:"Subject",name:"subject",onChange:function(n){return d(n)},value:o.subject})]}),(0,F.jsx)(N.Z,{multiline:!0,rows:20,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:function(n){return d(n)},value:o.body}),(0,F.jsxs)($,{children:[(0,F.jsx)(nn,{onClick:function(n){return p(n)},children:"Send"}),(0,F.jsx)(q.Z,{onClick:function(){return t(!1)}})]})]})},tn=t(5806),rn=t(4287),an=t(3026),on=t(2192),sn=t(3513),cn=t(9825),ln=t(8265),dn=[{name:"inbox",title:"Inbox",icon:rn.Z,path:tn._.emails.path},{name:"starred",title:"Starred",icon:an.Z,path:tn._.emails.path},{name:"sent",title:"Sent",icon:on.Z,path:tn._.emails.path},{name:"drafts",title:"Drafts",icon:sn.Z,path:tn._.emails.path},{name:"bin",title:"Bin",icon:cn.Z,path:tn._.emails.path},{name:"allmail",title:"All Mail",icon:ln.Z,path:tn._.emails.path}],pn=t(5905),un=t(7689),hn=t(1087),xn=(0,Z.ZP)(j.Z)(d||(d=(0,m.Z)(["\n    padding: 8px;\n    & > ul {\n        padding: 10px 0 0 5px;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        & > a {\n            text-decoration: none;\n            color: inherit;\n        }\n        & > a > li > svg {\n            margin-right: 20px;\n        }\n    }\n"]))),mn=(0,Z.ZP)(z.Z)(p||(p=(0,m.Z)(["\n    background: #c2e7ff;\n    color: #001d35;\n    border-radius: 16px;\n    padding: 15px;\n    min-width: 140px;\n    text-transform: none;\n"]))),fn=function(){var n=(0,f.useState)(!1),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,un.UO)().type;return(0,F.jsxs)(xn,{children:[(0,F.jsxs)(mn,{onClick:function(){r(!0)},children:[(0,F.jsx)(pn.Z,{style:{marginRight:10}}),"Compose"]}),(0,F.jsx)(A.Z,{children:dn.map((function(n){return(0,F.jsx)(hn.OL,{to:"".concat(tn._.emails.path,"/").concat(n.name),children:(0,F.jsxs)(L.ZP,{style:a===n.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,F.jsx)(n.icon,{fontSize:"small"}),n.title]})},n.name)}))}),(0,F.jsx)(en,{open:t,setOpenDrawer:r})]})},Zn=(0,Z.ZP)(B.ZP)(u||(u=(0,m.Z)(["\n    margin-top: 54px;\n"]))),gn=function(n){var e=n.toggleDrawer,t=n.openDrawer;return(0,F.jsx)(Zn,{anchor:"left",open:t,onClose:e,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{width:250,borderRight:"none",background:"#f5F5F5",marginTop:"64px",height:"calc(100vh - 64px)"}},children:(0,F.jsx)(fn,{})})},jn=t(2247),bn=(0,Z.ZP)(j.Z)(h||(h=(0,m.Z)(["\n    display: flex;\n"]))),wn=function(){var n=(0,f.useState)(!0),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=function(){r((function(n){return!n}))};return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(_,{toggleDrawer:a}),(0,F.jsxs)(bn,{children:[(0,F.jsx)(gn,{toggleDrawer:a,openDrawer:t}),(0,F.jsx)(f.Suspense,{fallback:(0,F.jsx)(jn.Z,{}),children:(0,F.jsx)(un.j3,{context:{openDrawer:t}})})]})]})}},5372:function(n,e,t){t.d(e,{Y:function(){return r}});var r={saveSentEmails:{endpoint:"save",method:"POST"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},toggleStarredMails:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"},moveEmailsToBin:{endpoint:"bin",method:"POST"}}}}]);
//# sourceMappingURL=42.3b16ddab.chunk.js.map