(this.webpackJsonpsushee=this.webpackJsonpsushee||[]).push([[0],{15:function(e,n,c){},17:function(e,n,c){"use strict";c.r(n);var t=c(1),s=c.n(t),a=c(9),i=c.n(a),r=c(5),d=(c(15),c(2)),o=c(10),l=c(3),j=c(0),u=s.a.createContext();function h(e){var n=e.children,c=Object(t.useState)([{pos:0,name:"Bee",dishes:[{code:"G1",qnt:1},{code:"N3",qnt:3},{code:"N4",qnt:2},{code:"F5",qnt:2}]},{pos:1,name:"Gino",dishes:[{code:"43",qnt:1},{code:"56",qnt:1},{code:"2",qnt:1}]},{pos:2,name:"Pippo",dishes:[{code:"A34",qnt:1},{code:"U13",qnt:1},{code:"U65",qnt:1},{code:"T4-bis",qnt:1},{code:"A43",qnt:2}]},{pos:3,name:"Franco",dishes:[{code:"U23",qnt:1},{code:"F5",qnt:1},{code:"U6",qnt:1},{code:"U1",qnt:1}]},{pos:4,name:"Beppe",dishes:[{code:"N2",qnt:1},{code:"N4",qnt:1},{code:"F5",qnt:1}]}]),s=Object(l.a)(c,2),a=s[0],i=s[1];return Object(j.jsx)(u.Provider,{value:{userList:a,addNewUser:function(e){if(-1===a.findIndex((function(n){return n.name===e}))){var n={pos:a.length,name:e,dishes:[]};i((function(e){return[].concat(Object(o.a)(e),[n])}))}return"existing"},removeUser:function(e){i((function(n){return n.filter((function(c){return!(n.indexOf(c)===e)}))}))},addQnt:function(e,n){var c=a.findIndex((function(n){return n.name===e})),t=a[c].dishes.findIndex((function(e){return e.code===n})),s=a[c];s.dishes[t].qnt=s.dishes[t].qnt+1;var r=a.slice();r[c]=s,i(r)},subQnt:function(e,n){var c=a.findIndex((function(n){return n.name===e})),t=a[c].dishes.findIndex((function(e){return e.code===n})),s=a[c];s.dishes[t].qnt=s.dishes[t].qnt-1,0===s.dishes[t].qnt&&s.dishes.splice(t,1);var r=a.slice();r[c]=s,i(r)},addDish:function(e,n){var c=a.findIndex((function(n){return n.name===e}));if(-1!==a[c].dishes.findIndex((function(e){return e.code===n})))return"existing";var t=a[c];t.dishes.push({code:n,qnt:1});var s=a.slice();s[c]=t,i(s)},getListone:function(){for(var e={},n=0;n<a.length;n++)for(var c=a[n].dishes,t=0;t<c.length;t++){var s=a[n].dishes[t].code,i=a[n].dishes[t].qnt;e[s]=e[s]?e[s]+=i:e[s]=i}var r=[];return Object.keys(e).forEach((function(n){return r.push({code:n,qnt:e[n]})})),r}},children:n})}var m=c.p+"static/media/face.6c29dc15.svg";var x=function(e){var n=e.user,c=n.dishes.map((function(e){return Object(j.jsxs)("span",{className:"dish-el",children:[e.code,e.qnt>1?Object(j.jsxs)("span",{children:[" x",e.qnt]}):null]},e.code)})),t="/".concat(n.name);return Object(j.jsxs)(r.b,{to:t,className:"UserCard",children:[Object(j.jsxs)("div",{className:"avatar",children:[Object(j.jsx)("img",{className:"avatar-img",src:m,alt:"avatar"})," "]}),Object(j.jsxs)("div",{className:"UserCard-info",children:[Object(j.jsx)("h3",{className:"info-name",children:n.name}),Object(j.jsx)("div",{className:"info-dish-container",children:c})]})]})};function b(){var e=Object(t.useContext)(u).addNewUser,n=Object(t.useState)(!1),c=Object(l.a)(n,2),a=c[0],i=c[1],r=s.a.createRef();var d=a?Object(j.jsxs)("div",{className:"newCard last",children:[Object(j.jsx)("input",{type:"text",ref:r}),Object(j.jsx)("span",{className:"icon-cancel",onClick:function(){return i(!1)},children:"x"}),Object(j.jsx)("span",{className:"icon-confirm",onClick:function(){var n=r.current.value;if(n){var c=e(n);r.current.value="","existing"===c&&(r.current.placeholder="Name already in use"),i(!1)}},children:"v"})]}):Object(j.jsx)("div",{className:"icon-add last",onClick:function(){return i(!0)},children:"+"});return Object(j.jsx)(j.Fragment,{children:d})}function O(){var e=Object(t.useContext)(u).userList;console.log(e);var n=e.map((function(e){return Object(j.jsx)(x,{user:e},e.name)}));return Object(j.jsxs)("div",{className:"UserList",children:[n,Object(j.jsx)(b,{})]})}var v=function(e,n){var c=function(c){e.current&&!e.current.contains(c.target)&&(console.log("triggering outside click"),n())};Object(t.useEffect)((function(){return document.addEventListener("click",c),function(){document.removeEventListener("click",c)}}))};function f(e){var n=e.data,c=n.code,s=n.qnt,a=e.user,i=Object(t.useState)(!1),r=Object(l.a)(i,2),d=r[0],o=r[1],h=Object(t.useContext)(u),m=h.addQnt,x=h.subQnt,b=Object(t.useRef)();return v(b,(function(){return o(!1)})),Object(j.jsxs)("div",{className:"dishCard",ref:b,onClick:function(){o(!0)},children:[Object(j.jsx)("div",{className:"dish code",children:c}),Object(j.jsx)("span",{className:"x",children:"x"}),Object(j.jsxs)("div",{className:"qnt",children:[d?Object(j.jsx)("div",{className:"btn-minus",children:Object(j.jsx)("span",{onClick:function(){return x(a,c)},children:"-"})}):null,Object(j.jsx)("div",{className:"dish",children:s}),d?Object(j.jsx)("div",{className:"btn-plus",children:Object(j.jsx)("span",{onClick:function(){return m(a,c)},children:"+"})}):null]})]})}function p(e){var n=Object(t.useContext)(u).addDish,c=Object(t.useState)(!1),a=Object(l.a)(c,2),i=a[0],r=a[1],d=e.user,o=s.a.createRef();var h=i?Object(j.jsxs)("div",{className:"newCard",children:[Object(j.jsx)("input",{type:"text",ref:o}),Object(j.jsx)("span",{className:"icon-cancel",onClick:function(){return r(!1)},children:"x"}),Object(j.jsx)("span",{className:"icon-confirm",onClick:function(){var e=o.current.value;if(e){var c=n(d,e);o.current.value="","existing"===c&&(o.current.placeholder="Already in list"),r(!1)}},children:"v"})]}):Object(j.jsx)("div",{className:"icon-add",onClick:function(){return r(!0)},children:"+"});return Object(j.jsx)(j.Fragment,{children:h})}function A(){var e=Object(d.g)().userName,n=Object(t.useContext)(u).userList;console.log(n);var c=n.find((function(n){return n.name===e})),s=c.dishes.map((function(n){return Object(j.jsx)(f,{user:e,data:n})}));return Object(j.jsxs)("div",{className:"UserPage",children:[Object(j.jsxs)("div",{className:"UserPage-header",children:[Object(j.jsxs)("div",{className:"commands",children:[Object(j.jsx)("span",{className:"icon cancel",children:"[delete]"}),Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("span",{className:"icon cancel",children:"[X]"})})]}),Object(j.jsxs)("div",{className:"user-info-container",children:[Object(j.jsx)("div",{className:"info-avatar",children:Object(j.jsx)("img",{className:"avatar-img",src:"data:image/png;base64,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",alt:"avatar"})}),Object(j.jsx)("div",{className:"info-name",children:c.name})]})]}),Object(j.jsx)("div",{className:"dishList",children:s}),Object(j.jsx)(p,{user:e})]})}function g(){var e=(0,Object(t.useContext)(u).getListone)();console.log(e);var n=e.map((function(e){return Object(j.jsxs)("div",{className:"dishCard",children:[Object(j.jsx)("span",{className:"dish code",children:e.code}),Object(j.jsx)("span",{children:"x"}),Object(j.jsx)("span",{className:"dish qnt",children:e.qnt})]})}));return Object(j.jsx)("div",{className:"Listone",children:n})}function q(){return Object(j.jsx)("div",{className:"Footer",children:Object(j.jsx)(r.b,{to:"listone",className:"footer-btn",children:"Listone"})})}var N=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/",element:Object(j.jsx)(O,{})}),Object(j.jsx)(d.a,{path:"/:userName",element:Object(j.jsx)(A,{})}),Object(j.jsx)(d.a,{path:"/listone",element:Object(j.jsx)(g,{})})]})}),Object(j.jsx)(q,{})]})};i.a.render(Object(j.jsx)(h,{children:Object(j.jsx)(r.a,{children:Object(j.jsx)(N,{})})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e0e5de8f.chunk.js.map