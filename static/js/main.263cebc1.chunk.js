(this["webpackJsonpreact-blog-github"]=this["webpackJsonpreact-blog-github"]||[]).push([[0],{135:function(n,e,t){n.exports=t(488)},487:function(n,e,t){},488:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(119),i=t.n(a),c=t(14),u=t(13),l=t(120),s=t(5),d="OWQ0NmM4YjA1MmQ3YzdhZWE1NjkzYWFiZTZkZmEwOTZmNGViZTE3Nw==",f="rushabh31",m="blogs",b=!0,p="Iv1.2ceac336af8615a3",h="11e9d73829db30fd85e796115997108e6b453397",g="Welcome to Rushabh's Blogsite",v="Data Science/ML Blogs",x={backgroundColor:"#f1f6f8",backgroundColorDark:"#4C566A",titleColor:"#ff5252",titleColorDark:"#16a085",subtitleColor:"#37474f",subtitleColorDark:"#D8DEE9"},w=t(26),E=new w.a({uri:"https://api.github.com/graphql",request:function(n){n.setContext({headers:{authorization:"Bearer ".concat(atob(d))}})}}),k=function(n){return new w.a({uri:"https://api.github.com/graphql",request:function(e){e.setContext({headers:{authorization:"Bearer ".concat(n)}})}})},j=t(77),O=t(7),y=t(4),S=t(36);function C(){var n=Object(y.a)(["\n  position: relative;\n  padding: 5em;\n  text-align: center;\n  background: ",";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n\n  @media only screen and (max-width: 768px) {\n    padding: 3em;\n  }\n"]);return C=function(){return n},n}var z=x,A=z.backgroundColor,M=z.backgroundColorDark,T=s.c.div(C(),(function(n){return"light"===n.theme.mode?A:M}));function B(){var n=Object(y.a)(["\n  margin: 0 auto;\n  padding: 0 1em;\n  max-width: 1140px;\n  text-align: center;\n"]);return B=function(){return n},n}var F=s.c.div(B());function L(){var n=Object(y.a)(["\n  font-weight: 700;\n  line-height: 1.15;\n  margin: 1.25rem 0;\n  font-size: 4.5em;\n  text-align: center;\n  color: ",";\n\n  @media only screen and (max-width: 768px) {\n    font-size: 3em;\n  }\n"]);return L=function(){return n},n}var R=x,I=R.titleColor,U=R.titleColorDark,W=s.c.h1(L(),(function(n){return"light"===n.theme.mode?I:U}));function D(){var n=Object(y.a)(["\n  font-weight: 400;\n  color: ",";\n  line-height: 1.15;\n  margin: 1.25rem 0;\n  font-size: 2.5em;\n  text-align: center;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 2em;\n  }\n"]);return D=function(){return n},n}var H=x,N=H.subtitleColor,Y=H.subtitleColorDark,_=s.c.h1(D(),(function(n){return"light"===n.theme.mode?N:Y})),P=function(){return o.a.createElement(T,null,o.a.createElement(on,{isAbsolute:!0}),o.a.createElement(F,null,o.a.createElement(W,null,g),o.a.createElement(_,null,v)))},Z=t(15),G=t.n(Z),q=t(25),Q=t(127),J=t(128);function V(){var n=Object(y.a)(["\n  color: #FFF;\n  font-size: 18px;\n"]);return V=function(){return n},n}function K(){var n=Object(y.a)(["\n  -webkit-appearance: none;\n  background: linear-gradient(180deg, rgb(136, 220, 109) 0%, rgb(92, 168, 65) 100%);\n  color: #FFF;\n  border: none;\n  padding: 8px 16px;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.2s;\n  outline: 0;\n\n  :hover {\n    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.10);\n  }\n"]);return K=function(){return n},n}function $(){var n=Object(y.a)(["\n  display: ",";\n  position: ",";\n  top: 10px;\n  right: 10px;\n"]);return $=function(){return n},n}var X=b,nn=p,en=s.c.div($(),X?"block":"none",(function(n){return n.absolute?"absolute":"initial"})),tn=s.c.button(K()),rn=s.c.span(V()),on=function(n){var e=n.isAbsolute,t=localStorage.getItem("githubToken")||!1,r=function(){var n=Object(q.a)(G.a.mark((function n(){return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:window.location.href="https://github.com/login/oauth/authorize?client_id="+nn;case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return o.a.createElement(en,{absolute:e},t?o.a.createElement(rn,null,"Logged in as ",localStorage.getItem("githubUsername")):o.a.createElement(tn,{onClick:r},o.a.createElement(Q.a,{icon:J.a})," Log in"))};function an(n){var e=n.fill;return o.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:e},o.a.createElement("g",{fill:"none","fill-rule":"evenodd"},o.a.createElement("g",{transform:"translate(1 1)","stroke-width":"2"},o.a.createElement("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),o.a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},o.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function cn(){var n=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"]);return cn=function(){return n},n}var un=s.c.span(cn()),ln=function(){return o.a.createElement(un,null,o.a.createElement(an,{fill:"#2ecc71"}))};function sn(){var n=Object(y.a)(["\n  margin: 2rem auto 0;\n  width: 90%;\n  max-width: 700px;\n  padding: 20px 10px;\n"]);return sn=function(){return n},n}var dn=s.c.div(sn());function fn(){var n=Object(y.a)(["\n  cursor: pointer;\n  margin-bottom: 6rem;\n  border-radius: 10px;\n  padding: 10px;\n  transition: 0.2s;\n  position: relative;\n\n  :hover {\n    background-color: ",";\n  }\n"]);return fn=function(){return n},n}var mn=s.c.div(fn(),(function(n){return"light"===n.theme.mode?"#F5F5F5":"#3B4252"}));function bn(){var n=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return bn=function(){return n},n}var pn=s.c.div(bn());function hn(){var n=Object(y.a)(["\n  display: inline-block;\n  background: #009bbb;\n  border-radius: 3px;\n  padding: 3px 15px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: ",';\n  font-weight: 300;\n  line-height: 28px;\n  font-family: "Quicksand";\n  margin-right: 10px;\n']);return hn=function(){return n},n}var gn=s.c.div(hn(),(function(n){return n.theme.body})),vn=function(n){var e=n.value;return o.a.createElement(gn,{key:e.id,style:{backgroundColor:"#".concat(e.color)}},e.name)};function xn(){var n=Object(y.a)(["\n  font-size: 34px;\n"]);return xn=function(){return n},n}var wn=s.c.h2(xn());function En(){var n=Object(y.a)(["\n  font-size: 18px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n"]);return En=function(){return n},n}var kn=s.c.p(En());function jn(){var n=Object(y.a)(["\n  color: #b5b5b5;\n  font-size: 15px;\n  position: absolute;\n  top: -10px;\n  right: 10px;\n"]);return jn=function(){return n},n}var On=s.c.p(jn()),yn=function(n){var e=n.time;return o.a.createElement(On,null,e," Min Read")},Sn=t(55),Cn=t.n(Sn),zn=function(n){var e=n.blog,t=Object(r.useState)([]),a=Object(c.a)(t,2),i=a[0],u=a[1],l=Object(O.f)();return Object(r.useEffect)((function(){var n=e.labels.nodes.filter((function(n){return"blog"!==n.name}));u(n)}),[e.labels.nodes]),o.a.createElement(mn,null,o.a.createElement(pn,null,o.a.createElement(o.a.Fragment,null,i.map((function(n,e){return o.a.createElement(vn,{value:n,key:e})}))),o.a.createElement(yn,{time:Cn()(e.body).minutes})),o.a.createElement("div",{onClick:function(){return n=e.title,t=e.number,void l.push("/blog/".concat(n,"/").concat(t));var n,t}},o.a.createElement(wn,null,e.title),o.a.createElement(kn,null,e.bodyText)))};function An(){var n=Object(y.a)(['\n{\n  repository(owner: "','", name: "','") {\n    issues(first: 100, states: OPEN, filterBy: { labels: "blog" }) {\n      nodes {\n        title\n        body\n        bodyHTML\n        bodyText\n        number\n        labels(first: 100) {\n          nodes {\n            color\n            name\n            id\n          }\n        }\n        author {\n          url\n          avatarUrl\n          login\n        }\n        updatedAt\n        id\n      }\n    }\n  }\n}\n']);return An=function(){return n},n}var Mn=Object(w.b)(An(),f,m),Tn=function(){var n=Object(r.useState)([]),e=Object(c.a)(n,2),t=e[0],a=e[1],i=Object(S.a)(Mn),u=i.loading,l=i.error,s=i.data;return Object(r.useEffect)((function(){var n,e;u||(l&&console.error(l),s&&a(null===s||void 0===s||null===(n=s.repository)||void 0===n||null===(e=n.issues)||void 0===e?void 0:e.nodes))}),[u,l,s]),o.a.createElement(o.a.Fragment,null,o.a.createElement(P,null),o.a.createElement(dn,null,u?o.a.createElement(ln,null):t.map((function(n,e){return o.a.createElement(zn,{blog:n,key:e})}))))},Bn=t(134),Fn=t(129),Ln=t.n(Fn),Rn=t(130),In=t(493),Un=t(492),Wn=t(81),Dn={THUMBS_UP:"\ud83d\udc4d",THUMBS_DOWN:"\ud83d\udc4e",LAUGH:"\ud83d\ude04",HOORAY:"\ud83c\udf89",CONFUSED:"\ud83d\ude15",HEART:"\u2764\ufe0f",ROCKET:"\ud83d\ude80",EYES:"\ud83d\udc40"},Hn=function(n){return function(n){var e={};return Object.keys(n).forEach((function(t){e[n[t]]=t})),e}(Dn)[n]||""},Nn=function(){var n=Object(q.a)(G.a.mark((function n(){var e,t,r;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e=localStorage.getItem("githubToken"))){n.next=10;break}return n.next=4,fetch("https://api.github.com/user",{headers:new Headers({authorization:"Bearer ".concat(e)})});case 4:return t=n.sent,n.next=7,t.json();case 7:return(r=n.sent).token=e,n.abrupt("return",r);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function Yn(){var n=Object(y.a)(["\n  margin: 2rem auto 0;\n  width: 90%;\n  max-width: 700px;\n  padding: 20px 10px;\n  position: relative;\n"]);return Yn=function(){return n},n}var _n=s.c.div(Yn());function Pn(){var n=Object(y.a)(["\n  @media only screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);return Pn=function(){return n},n}var Zn=s.c.h1(Pn());function Gn(){var n=Object(y.a)(["\n  color: ",";\n  font-weight: 400;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n"]);return Gn=function(){return n},n}var qn=s.c.p(Gn(),(function(n){return n.theme.toggleBorder}));function Qn(){var n=Object(y.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  transition-duration: 0.15s, 0.15s, 0.15s;\n  transition-timing-function: ease-in, ease-in, ease-in;\n  transition-delay: 0s, 0s, 0s;\n  color: ",";\n  \n  :hover {\n    color: ",";\n  }\n"]);return Qn=function(){return n},n}var Jn=s.c.a(Qn(),(function(n){return n.theme.toggleBorder}),(function(n){return n.theme.text}));function Vn(){var n=Object(y.a)(["\n  position: absolute;\n  bottom: 60px;\n  animation-name: scale-in;\n  animation-duration: 0.15s;\n  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n"]);return Vn=function(){return n},n}var Kn=s.c.span(Vn());function $n(){var n=Object(y.a)(['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Shadows Into Light", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 30px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n\n  :hover {\n    background-color: ",';\n    color: white;\n  }\n\n  :before {\n    content: "\\27A4";\n    position: absolute;\n    transform: translateY(-50%) rotate(180deg);\n    left: 10px;\n    font-size: 16px;\n    top: 54%;\n  }\n'],['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Shadows Into Light", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 30px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n\n  :hover {\n    background-color: ",';\n    color: white;\n  }\n\n  :before {\n    content: "\\\\27A4";\n    position: absolute;\n    transform: translateY(-50%) rotate(180deg);\n    left: 10px;\n    font-size: 16px;\n    top: 54%;\n  }\n']);return $n=function(){return n},n}var Xn=s.c.button($n(),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return"light"===n.theme.mode?"#373737":"#6B8096"}));function ne(){var n=Object(y.a)(["\n  display: flex;\n  align-items: center;\n"]);return ne=function(){return n},n}var ee=s.c.div(ne());function te(){var n=Object(y.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 40px;\n  margin: 10px;\n  margin-left: 0px;\n"]);return te=function(){return n},n}var re=s.c.img(te());function oe(){var n=Object(y.a)(["\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 16px;\n  color: ",";\n"]);return oe=function(){return n},n}var ae=s.c.p(oe(),(function(n){return n.theme.text}));function ie(){var n=Object(y.a)(['\n          mutation RemoveReaction {\n            removeReaction(input:{subjectId:"','",content:',',clientMutationId:"','"}) {\n              reaction {\n                id\n              }\n            }\n          }\n        ']);return ie=function(){return n},n}function ce(){var n=Object(y.a)(['\n          mutation AddReaction {\n            addReaction(input:{subjectId:"','",content:',',clientMutationId:"','"}) {\n              reaction {\n                id\n              }\n            }\n          }\n        ']);return ce=function(){return n},n}function ue(){var n=Object(y.a)(['{\n    repository(owner: "','", name: "','") {\n      issue(number: ',") {\n        title\n        body\n        bodyHTML\n        url\n        bodyText\n        number\n        bodyHTML\n        author {\n          url\n          avatarUrl\n          login\n        }\n        reactions(first:100){\n          nodes{\n            content\n            user{\n              id\n              login\n            }\n          }\n        }\n        updatedAt\n        id\n      }\n    }\n  }\n  "]);return ue=function(){return n},n}function le(){var n=parseInt(window.location.href.split("/").pop()),e=Object(w.b)(ue(),f,m,n),t=Object(r.useState)([]),a=Object(c.a)(t,2),i=a[0],u=a[1],l=Object(r.useState)(""),s=Object(c.a)(l,2),d=s[0],b=s[1],p=Object(r.useState)(!1),h=Object(c.a)(p,2),g=h[0],v=h[1],x=Object(r.useState)([]),E=Object(c.a)(x,2),j=E[0],O=E[1],y=Object(S.a)(e),C=y.loading,z=y.error,A=y.data,M=Object(r.useRef)(null),T=localStorage.getItem("githubToken"),B=Object(r.useCallback)((function(n){var e=[];n.forEach((function(n){var t,r={by:n.user.login,emoji:(t=n.content,Dn[t]||"")};e.push(r)})),O(e)}),[]),F=function(){var n=Object(q.a)(G.a.mark((function n(e){var t,r,o;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=j,n.next=3,Nn();case 3:if(r=n.sent,0!==t.filter((function(n){return n.emoji===e&&n.by===r.login})).length){n.next=12;break}return o={by:r.login,emoji:e},n.next=9,k(T).mutate({mutation:Object(w.b)(ce(),d,Hn(e),r.node_id)});case 9:t.push(o),n.next=15;break;case 12:return n.next=14,k(T).mutate({mutation:Object(w.b)(ie(),d,Hn(e),r.node_id)});case 14:t=t.filter((function(n){return!(n.by===r.login&&n.emoji===e)}));case 15:O(t),M.current.forceUpdate(),v(!1);case 18:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();if(Object(r.useEffect)((function(){if(!C&&A){var n=A.repository.issue;b(n.id),u(n),B(n.reactions.nodes)}}),[C,z,A,B]),C)return o.a.createElement(ln,null);return o.a.createElement(o.a.Fragment,null,i.title&&o.a.createElement(_n,null,o.a.createElement(Xn,{onClick:function(){return window.history.go(),void window.history.back()}},"Back"),o.a.createElement(Zn,null,i.title),o.a.createElement("div",null,o.a.createElement(ee,null,o.a.createElement(re,{src:i.author.avatarUrl,alt:i.author.login}),o.a.createElement("div",null,o.a.createElement(ae,null,i.author.login),o.a.createElement(qn,null,Ln()(i.updatedAt).format("DD MMM YYYY")," .",Cn()(i.body).minutes," Min Read .",o.a.createElement(Jn,{href:i.url,target:"_black"},"View On Github"))))),o.a.createElement(Rn.a,{options:{overrides:{a:{component:function(n){var e=n.children,t=Object(Bn.a)(n,["children"]);return o.a.createElement("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"blog-post-anchor"},e,o.a.createElement("style",{jsx:"true"},"\n          a {\n            color: #484848;\n            font-weight: 400;\n          }\n        "))}},pre:{component:function(n){var e=n.children;return o.a.createElement(In.a,{language:"javascript",style:Un.a},e.props.children)}}}}},i.body),g&&o.a.createElement(Kn,null,T?o.a.createElement(Wn.GithubSelector,{onSelect:function(n){return F(n)}}):o.a.createElement(on,{isAbsolute:!1})),o.a.createElement(Wn.GithubCounter,{ref:M,counters:j,onSelect:function(n){return F(n)},onAdd:function(){return v(!g)}})))}var se=(0,t(19).createBrowserHistory)(),de=function(){return o.a.createElement(j.a,{history:se},o.a.createElement(O.c,null,o.a.createElement(O.a,{exact:!0,path:"/",component:Tn}),o.a.createElement(O.a,{exact:!0,path:"/blog/:title/:issueNumber",component:le})))},fe=b,me=p,be=h,pe=function(){var n=Object(r.useState)(!0),e=Object(c.a)(n,2),t=e[0],a=e[1],i=function(){var n=Object(q.a)(G.a.mark((function n(e){var t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",{method:"POST",body:new URLSearchParams({client_id:me,client_secret:be,code:e}),headers:new Headers({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"})});case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=Object(q.a)(G.a.mark((function n(){var e,t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Nn();case 2:e=n.sent,t=e.login,localStorage.setItem("githubUsername",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){var n=new URLSearchParams(window.location.search);i(n.get("code")).then((function(n){n&&(localStorage.setItem("githubToken",n.access_token),u().then((function(){return a(!1)})))}))}),[]),fe&&t?o.a.createElement(ln,null):window.location.replace(window.location.origin+window.location.pathname)};function he(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),o.a.createElement("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"}))}function ge(){return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}function ve(){var n=Object(y.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n  color: ",";\n  width: 70px;\n  height: 70px;\n  outline: none;\n  border-radius: 50%;\n  transition: all 0.1s ease-in-out;\n  color: white;\n  text-align: center;\n  position: fixed;\n  cursor: pointer;\n  right: 30px;\n  bottom: 30px;\n  box-shadow:\n  0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n  0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n  0 12.5px 10px rgba(0, 0, 0, 0.06),\n  0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n  0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n  0 100px 80px rgba(0, 0, 0, 0.12);\n  }"]);return ve=function(){return n},n}var xe=s.c.button(ve(),(function(n){return n.theme.background}),(function(n){return n.theme.background}),(function(n){return n.theme.text})),we=function(n){var e=n.theme,t=n.toggleTheme;return o.a.createElement(xe,{onClick:t},"light"===e?o.a.createElement(ge,null):o.a.createElement(he,null))};function Ee(){var n=Object(y.a)(["\n  body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n  }\n  "]);return Ee=function(){return n},n}var ke=Object(s.b)(Ee(),(function(n){return n.theme.body}),(function(n){return n.theme.text})),je={mode:"light",body:"#fff",text:"#363537",toggleBorder:"#070707",background:"#363537"},Oe={mode:"dark",body:"#2E3440",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"},ye=function(){var n=new URLSearchParams(window.location.search),e=function(){var n=Object(r.useState)("light"),e=Object(c.a)(n,2),t=e[0],o=e[1],a=function(n){window.localStorage.setItem("theme",n),o(n)};return Object(r.useEffect)((function(){var n=window.localStorage.getItem("theme");n&&o(n)}),[]),[t,function(){a("light"===t?"dark":"light")}]}(),t=Object(c.a)(e,2),a=t[0],i=t[1],d="light"===a?je:Oe;return n.get("code")?o.a.createElement(pe,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Helmet,null,o.a.createElement("title",null,g),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{name:"description",content:v}),o.a.createElement("meta",{name:"theme-color",content:x.backgroundColor})),o.a.createElement(u.a,{client:E},o.a.createElement(s.a,{theme:d,toggleTheme:i},o.a.createElement(ke,null),o.a.createElement(de,null),o.a.createElement(we,{theme:a,toggleTheme:i}))))},Se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}t(487);i.a.render(o.a.createElement(ye,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/react-blog-github",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-blog-github","/service-worker.js");Se?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Ce(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ce(e,n)}))}}()}},[[135,1,2]]]);
//# sourceMappingURL=main.263cebc1.chunk.js.map