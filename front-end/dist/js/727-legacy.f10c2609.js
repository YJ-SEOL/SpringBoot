"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[727],{4727:function(t,e,i){i.r(e),i.d(e,{default:function(){return c}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mt-5 pt-5"},[i("div",{staticClass:"list row"},[i("div",{staticClass:"col-md-8"},[i("div",{staticClass:"input-group mb-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTitle,expression:"searchTitle"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search by title"},domProps:{value:t.searchTitle},on:{input:function(e){e.target.composing||(t.searchTitle=e.target.value)}}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.page=1,t.retrieveTutorials()}}},[t._v(" Search ")])])])]),i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"mb-3"},[t._v(" Item per Page: "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.pageSize,expression:"pageSize"}],on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.pageSize=e.target.multiple?i:i[0]},function(e){return t.handlePageSizeChange(e)}]}},t._l(t.pageSizes,(function(e){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),i("b-pagination",{attrs:{"total-rows":t.count,"per-page":t.pageSize,"prev-text":"Prev","next-text":"Next"},on:{change:t.handlePageChange},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),i("div",{staticClass:"col-md-6"},[i("h4",[t._v("Tutorials List")]),i("ul",{staticClass:"list-group"},t._l(t.tutorials,(function(e,n){return i("li",{key:n,staticClass:"list-group-item",class:{active:n==t.currentIndex},on:{click:function(i){return t.setActiveTutorial(e,n)}}},[t._v(" "+t._s(e.title)+" ")])})),0),i("button",{staticClass:"m-3 btn btn-sm btn-danger",on:{click:t.removeAllTutorials}},[t._v(" Remove All ")])]),i("div",{staticClass:"col-md-6"},[t.currentTutorial?i("div",[i("h4",[t._v("Tutorial")]),i("div",[t._m(0),t._v(" "+t._s(t.currentTutorial.title)+" ")]),i("div",[t._m(1),t._v(" "+t._s(t.currentTutorial.description)+" ")]),i("div",[t._m(2),t._v(" "+t._s("Y"==t.currentTutorial.published?"Published":"Pending")+" ")]),i("router-link",{staticClass:"badge badge-primary",attrs:{to:"/tutorials/"+t.currentTutorial.id}},[t._v(" Edit ")])],1):i("div",[i("br"),i("p",[t._v("Please click on a Tutorial...")])])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Title:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Description:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",[i("strong",[t._v("Status:")])])}],r=i(8657),l={name:"tutorials-list",data:function(){return{tutorials:[],currentTutorial:null,currentIndex:-1,searchTitle:"",page:1,count:0,pageSize:3,pageSizes:[3,6,9]}},methods:{getRequestParams:function(t,e,i){var n={};return t&&(n["title"]=t),e&&(n["page"]=e-1),i&&(n["size"]=i),n},retrieveTutorials:function(){var t=this,e=this.getRequestParams(this.searchTitle,this.page,this.pageSize);r.Z.getAll(e).then((function(e){var i=e.data,n=i.tutorials,a=i.totalItems;t.tutorials=n,t.count=a,console.log(e.data)})).catch((function(t){console.log(t)}))},handlePageChange:function(t){this.page=t,this.retrieveTutorials()},handlePageSizeChange:function(t){this.pageSize=t.target.value,this.retrieveTutorials()},refreshList:function(){this.currentTutorial=null,this.currentIndex=-1,this.retrieveTutorials()},setActiveTutorial:function(t,e){this.currentTutorial=t,this.currentIndex=e},removeAllTutorials:function(){var t=this;r.Z.deleteAll().then((function(e){console.log(e.data),t.refreshList()})).catch((function(t){console.log(t)}))},mounted:function(){this.retrieveTutorials()}}},s=l,u=i(1001),o=(0,u.Z)(s,n,a,!1,null,null,null),c=o.exports},8657:function(t,e,i){var n=i(6133),a=i(2751),r=i(2327),l=function(){function t(){(0,n.Z)(this,t)}return(0,a.Z)(t,[{key:"getAll",value:function(){return r.Z.get("/tutorials")}},{key:"get",value:function(t){return r.Z.get("/tutorials/".concat(t))}},{key:"create",value:function(t){return r.Z.post("/tutorials",t)}},{key:"update",value:function(t,e){return r.Z.put("/tutorials/".concat(t),e)}},{key:"delete",value:function(t){return r.Z.put("/tutorials/deletion/".concat(t))}},{key:"deleteAll",value:function(){return r.Z.put("/tutorials")}},{key:"findByTitle",value:function(t){return r.Z.get("/tutorials?title=".concat(t))}}]),t}();e["Z"]=new l}}]);
//# sourceMappingURL=727-legacy.f10c2609.js.map