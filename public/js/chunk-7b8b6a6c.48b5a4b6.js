(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b8b6a6c"],{bd21:function(t,e,n){"use strict";var o=n("c619"),a=n.n(o);a.a},c619:function(t,e,n){},d2f1:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{className:"animated"}},[n("b-card",[n("b-card-header",[n("i",{staticClass:"icon-menu mr-1"}),t._v("Product List\n      "),n("router-link",{attrs:{to:{name:"Create Product"}}},[n("h5",[n("b-badge",{attrs:{variant:"primary"}},[t._v("Add Product")])],1)])],1),n("b-card-body",{staticStyle:{padding:"0 1.25rem 0 1.25rem !important"}},[n("v-client-table",{attrs:{columns:t.columns,data:t.data,options:t.options,theme:t.theme,id:"dataTable"},on:{"row-click":t.onRowClick},scopedSlots:t._u([{key:"_id",fn:function(t){return n("router-link",{staticClass:"icon-eye",attrs:{target:"_blank",to:"product/"+t.row._id}})}}])})],1)],1)],1)},a=[],r=(n("96cf"),n("3b8d")),i=(n("f1fb"),n("a026")),c=n("9ebe"),s=n("bc3a"),d=n.n(s);i["default"].use(c["ClientTable"]);var u={name:"dashboard",components:{ClientTable:c["ClientTable"],Event:c["Event"]},data:function(){return{columns:["product_name","price","short_description","long_description"],data:[],options:{headings:{product_name:"Product Name",price:"Price",short_description:"Short Description",long_description:"Long Description",_id:"URL"},sortable:["product_name","price","short_description","long_description"],filterable:["product_name","price","short_description","long_description"],sortIcon:{base:"fa",up:"fa-sort-asc",down:"fa-sort-desc",is:"fa-sort"},pagination:{chunk:5,edge:!1,nav:"scroll"}},useVuex:!1,theme:"bootstrap4",template:"default"}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:d.a.get("https://selacious-cloud-siteapi.herokuapp.com/products").then(function(t){e.data=t.data});case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),methods:{onRowClick:function(t){window.location.href="#/product/".concat(t.row._id)}}},l=u,p=(n("bd21"),n("2877")),m=Object(p["a"])(l,o,a,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-7b8b6a6c.48b5a4b6.js.map