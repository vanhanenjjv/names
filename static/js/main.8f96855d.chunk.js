(this.webpackJsonpnames=this.webpackJsonpnames||[]).push([[0],{500:function(e,t,n){},814:function(e,t,n){"use strict";n.r(t);var r=n(25),a=(n(499),n(500),n(1)),c=n.n(a),i=n(50),o=n.n(i),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,832)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},u=n(824),d=n(822),l=n(319),j=n(236),b=n(831),h=n(825),f=n(126),m=function(){return Object(r.jsx)(h.a,{ghost:!0,title:"Names",subTitle:"Solita Dev Academy 2021",extra:[Object(r.jsx)(f.a,{shape:"circle",size:"large",rel:"noopener",href:"https://www.github.com/vanhanenjjv/names",target:"_blank",children:Object(r.jsx)(b.a,{})},"GitHub")]})},x=n(186),O=n(110),p=n(828),v=n(826),g=n(478),y=n(6);var w=function(e){return function(t){return Object(r.jsx)(c.a.Suspense,{fallback:Object(r.jsx)(e,Object(y.a)({suspended:!0},t)),children:Object(r.jsx)(e,Object(y.a)({suspended:!1},t))})}};var S=function(e){var t,n="pending",r=e.then((function(e){n="success",t=e}),(function(e){n="error",t=e}));return{read:function(){if("pending"===n)throw r;if("error"===n)throw t;return t}}},C=n(65),T=n.n(C),F=n(124);function k(){return(k=Object(F.a)(T.a.mark((function e(){var t,n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e){if("object"!==typeof e)return!1;if(null===e)return!1;if(!("names"in e))return!1;var t=e.names;if(!Array.isArray(t))return!1;if(0===t.length)return!0;if("object"!==typeof t[0])return!1;if(null===t[0])return!1;if(!("name"in t[0]))return!1;if(!("amount"in t[0]))return!1;var n=t[0],r=n.name,a=n.amount;return"string"===typeof r&&"number"===typeof a},e.next=3,fetch("https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch names.");case 6:return e.next=8,t.json();case 8:if(n=e.sent,r(n)){e.next=11;break}throw new Error("Invalid response body.");case 11:return e.abrupt("return",n.names);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=S(function(){return k.apply(this,arguments)}()),_=function(e){var t=e.suspended,n=e.colSpan,a=c.a.useCallback((function(){return E.read().map((function(e){return e.amount})).reduce((function(e,t){return e+t}))}),[]);return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsxs)(x.a,{gutter:[16,16],justify:"center",children:[Object(r.jsx)(O.a,{span:n,children:Object(r.jsx)(p.a,{children:Object(r.jsx)(v.a,{title:"Total amount of names",value:t?void 0:a(),loading:t})})}),Object(r.jsx)(O.a,{span:n,children:Object(r.jsx)(p.a,{children:Object(r.jsx)(g.a,{style:{width:n?void 0:300,height:300},loading:t,data:t?[]:E.read(),wordField:"name",weightField:"amount",colorField:"name",wordStyle:{fontFamily:"Verdana",fontSize:[18,64]}})})})]})})};_.displayName="Count";var I=w(_),P=n(36),A=n(8),L=n(830);var D=function(e,t){var n=null;return function(r){n&&clearInterval(n);n=setTimeout((function(){return e(r)}),t)}},H=n(827).a.Search,N=function(e){var t=e.onChange,n=e.disabled;return Object(r.jsx)(H,{disabled:n,onChange:function(e){return t(e.target.value)},style:{width:300},placeholder:"Search by name"})},K=n(128),B=n(829),R=function(e){var t=e.names;return 0===t.length?Object(r.jsx)(K.a,{description:"No matches"}):1===t.length?Object(r.jsxs)(u.a.Paragraph,{children:["Solita has ",t[0].amount," employees named ",t[0].name]}):Object(r.jsx)(B.b,{bordered:!0,style:{width:"100%"},dataSource:t,rowKey:"name",renderItem:function(e){var t=e.name;return Object(r.jsx)(B.b.Item,{children:t},t)}})},W=w((function(e){var t=e.suspended,n=c.a.useState(""),a=Object(A.a)(n,2),i=a[0],o=a[1],s=c.a.useCallback((function(){var e,t=[],n=Object(P.a)(E.read());try{for(n.s();!(e=n.n()).done;){var r=e.value,a=r.name.toLowerCase(),c=i.toLowerCase();if(a===c)return[r];a.includes(c)&&t.push(r)}}catch(o){n.e(o)}finally{n.f()}return t}),[i]);return Object(r.jsxs)(L.b,{size:"large",direction:"vertical",align:"center",style:{width:"100%"},children:[Object(r.jsx)(N,{onChange:D(o,250),disabled:t}),!t&&i&&Object(r.jsx)(R,{names:s()})]})})),z=n(823),J=[{title:"Name",dataIndex:"name",key:"name",sorter:function(e,t){return e.name.localeCompare(t.name)}},{title:"Amount",dataIndex:"amount",key:"amount",sorter:function(e,t){return e.amount-t.amount}}],U=w((function(e){var t=e.suspended;return Object(r.jsx)(z.a,{tableLayout:"fixed",dataSource:t?void 0:E.read(),columns:J,rowKey:t?void 0:function(e){return e.name}})})),V=l.a.TabPane,G=function(){var e=j.a.useBreakpoint();return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsxs)(l.a,{tabPosition:e.md?"left":"top",children:[Object(r.jsx)(V,{tab:"Count",children:Object(r.jsx)(I,{colSpan:e.md?void 0:24})},"1"),Object(r.jsx)(V,{tab:"Search",children:Object(r.jsx)(W,{})},"2"),Object(r.jsx)(V,{tab:"Table",children:Object(r.jsx)(U,{})},"3")]})]})},M=u.a.Text,q=function(e){var t=e.commitHash;return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/names",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),Object(r.jsxs)(d.a,{children:[Object(r.jsx)(d.a.Content,{style:{width:"100%",alignSelf:"center",maxWidth:960,padding:"0 16px"},children:Object(r.jsx)(G,{})}),Object(r.jsx)(d.a.Footer,{style:{textAlign:"center"},children:Object(r.jsx)(M,{type:"secondary",children:t})})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(q,{commitHash:"2c5bbdc\n"})}),document.getElementById("root")),s()}},[[814,1,2]]]);
//# sourceMappingURL=main.8f96855d.chunk.js.map