(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5347a4d9"],{"22ae":function(e,t,a){},ca1c:function(e,t,a){"use strict";var n=a("22ae"),r=a.n(n);r.a},f093:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{className:"animated"}},[a("b-card",[a("b-card-header",[a("i",{staticClass:"icon-menu mr-1"}),e._v("User List\n    ")]),a("b-card-body",[a("v-client-table",{attrs:{columns:e.columns,data:e.data,options:e.options,theme:e.theme,id:"dataTable"},scopedSlots:e._u([{key:"_id",fn:function(e){return a("router-link",{staticClass:"icon-eye",attrs:{target:"_blank",to:"users/"+e.row._id}})}}])})],1)],1),a("router-link",{attrs:{to:{name:"Create User"}}},[a("b-button",{attrs:{type:"submit",value:"Add User",variant:"outline-dark"}},[e._v(" Add User ")])],1)],1)},r=[],o=(a("96cf"),a("3b8d")),s=a("a026"),c=a("9ebe"),i=a("bc3a"),u=a.n(i);s["default"].use(c["ClientTable"]);var d={name:"DataTable",components:{ClientTable:c["ClientTable"],Event:c["Event"]},data:function(){return{columns:["name","phone","dob","category","_id"],data:[],options:{headings:{name:"Username",phone:"Phone Number",dob:"Date Of Birth",category:"Category Of User",_id:"URL"},sortable:["name","phone","dob","category"],filterable:["name","phone","dob","category"],sortIcon:{base:"fa",up:"fa-sort-asc",down:"fa-sort-desc",is:"fa-sort"},pagination:{chunk:5,edge:!1,nav:"scroll"}},useVuex:!1,theme:"bootstrap4",template:"default"}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:u.a.get("https://selacious-cloud-siteapi.herokuapp.com/users").then(function(e){t.data=e.data});case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},l=d,b=(a("ca1c"),a("2877")),p=Object(b["a"])(l,n,r,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-5347a4d9.fe45d42c.js.map