(window.webpackJsonpcoursecontents=window.webpackJsonpcoursecontents||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(13),c=n.n(a),u=n(14),i=n(2),l=function(e){var t=e.note,n=e.toggleImportance,r=t.important?"make not-important":"make important";return o.a.createElement("li",{className:"note"},t.content,o.a.createElement("button",{onClick:n},r))},f=n(3),m=n.n(f),s=function(){return m.a.get("/api/notes").then((function(e){return e.data}))},p=function(e){return m.a.post("/api/notes",e).then((function(e){return e.data}))},b=function(e,t){return m.a.put("".concat("/api/notes","/").concat(e),t).then((function(e){return e.data}))},O=function(e){var t=e.message;return null===t?null:o.a.createElement("div",{className:"error"},t)};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var v=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),f=Object(i.a)(c,2),m=f[0],v=f[1],g=Object(r.useState)(!0),E=Object(i.a)(g,2),j=E[0],y=E[1],h=Object(r.useState)(null),w=Object(i.a)(h,2),S=w[0],k=w[1],P=function(e){var t=n.find((function(t){return t.id===e})),r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{important:!t.important});b(e,r).then((function(t){a(n.map((function(n){return n.id!==e?n:t})))})).catch((function(r){k("Note '".concat(t.content,"' was already removed from server")),setTimeout((function(){k(null)}),5e3),a(n.filter((function(t){return t.id!==e})))}))};Object(r.useEffect)((function(){s().then((function(e){a(e)}))}),[]),console.log("render",n.length,"notes");var D=j?n:n.filter((function(e){return e.important}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(O,{message:S}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return y(!j)}},"show ",j?"important":"all")),o.a.createElement("ul",null,D.map((function(e){return o.a.createElement(l,{key:e.id,note:e,toggleImportance:function(){return P(e.id)}})}))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={content:m,date:(new Date).toISOString(),important:Math.random()>.5};p(t).then((function(e){a(n.concat(e)),v("")}))}},o.a.createElement("input",{value:m,onChange:function(e){console.log(e.target.value),v(e.target.value)}}),o.a.createElement("button",{type:"submit"},"save")),o.a.createElement((function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Example Footer of Note app, Department of Computer Science, University of Helsinki 2019"))}),null))};n(37);c.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c2617828.chunk.js.map