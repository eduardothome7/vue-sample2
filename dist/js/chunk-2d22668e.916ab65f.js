(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22668e"],{e915:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"show"},[t._v("\n    "+t._s(t.user)+"\n  "),n("p",[n("strong",[t._v("#")]),t._v(t._s(t.user.id)+"\n  ")]),n("p",[n("strong",[t._v("Title:")]),t._v(t._s(t.user.title)+"\n  ")]),n("p",[n("strong",[t._v("Completed:")]),t._v(" "+t._s(t.user.completed)+"\n  ")])])},s=[],c=n("bc3a"),r=n.n(c),u={name:"show",data:function(){return{user:null}},mounted:function(){var t=this,e=this.$route.params.id;console.log("https://jsonplaceholder.typicode.com/todos/".concat(e)),r.a.get("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(e){return t.user=e.data}))}},a=u,l=n("2877"),i=Object(l["a"])(a,o,s,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d22668e.916ab65f.js.map