(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3468150a"],{"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},bd21:function(t,e,n){"use strict";var r=n("c619"),a=n.n(r);a.a},c619:function(t,e,n){},d2f1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{className:"animated"}},[n("b-card",[n("b-card-header",[n("i",{staticClass:"icon-menu mr-1"}),t._v("Product List\n    ")]),n("b-card-body",[n("v-client-table",{attrs:{columns:t.columns,data:t.data,options:t.options,theme:t.theme,id:"dataTable"},scopedSlots:t._u([{key:"_id",fn:function(t){return n("router-link",{staticClass:"icon-eye",attrs:{target:"_blank",to:"product/"+t.row._id}})}}])})],1)],1),n("router-link",{attrs:{to:{name:"Create Product"}}},[n("b-button",{attrs:{type:"submit",value:"Add Product",variant:"outline-dark"}},[t._v(" Add Product ")])],1)],1)},a=[],o=(n("96cf"),n("3b8d")),i=(n("f1fb"),n("a026")),c=n("9ebe"),s=n("bc3a"),u=n.n(s);i["default"].use(c["ClientTable"]);var d={name:"dashboard",components:{ClientTable:c["ClientTable"],Event:c["Event"]},data:function(){return{columns:["product_name","price","short_description","long_description","_id"],data:[],options:{headings:{product_name:"Product Name",price:"Price",short_description:"Short Description",long_description:"Long Description",_id:"URL"},sortable:["product_name","price","short_description","long_description"],filterable:["product_name","price","short_description","long_description"],sortIcon:{base:"fa",up:"fa-sort-asc",down:"fa-sort-desc",is:"fa-sort"},pagination:{chunk:5,edge:!1,nav:"scroll"}},useVuex:!1,theme:"bootstrap4",template:"default"}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:u.a.get("https://selacious-cloud-siteapi.herokuapp.com/products").then(function(t){e.data=t.data});case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},l=d,p=(n("bd21"),n("2877")),b=Object(p["a"])(l,r,a,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-3468150a.7c272e04.js.map