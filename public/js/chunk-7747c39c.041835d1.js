(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7747c39c"],{"11e9":function(e,t,r){var n=r("52a7"),a=r("4630"),o=r("6821"),i=r("6a99"),s=r("69a8"),c=r("c69a"),u=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?u:function(e,t){if(e=o(e),t=i(t,!0),c)try{return u(e,t)}catch(r){}if(s(e,t))return a(!n.f.call(e,t),e[t])}},"1af6":function(e,t,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},2891:function(e,t,r){"use strict";var n=r("7215"),a=r.n(n);a.a},"3f0e":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{attrs:{header:e.caption}},[r("b-table",{attrs:{dark:e.dark,hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.captions,"current-page":e.currentPage,"per-page":e.perPage},scopedSlots:e._u([{key:"status",fn:function(t){return[r("b-badge",{attrs:{variant:e.getBadge(t.item.status)}},[e._v(e._s(t.item.status))])]}}])}),r("nav",[r("b-pagination",{attrs:{"total-rows":e.totalRows,"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},a=[],o=r("a745"),i=r.n(o),s=(r("c5f6"),{name:"c-table",inheritAttrs:!1,props:{caption:{type:String,default:"Table"},hover:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},tableData:{type:[Array],default:function(){return[]}},fields:{type:[Array,Object],default:function(){return[]}},perPage:{type:Number,default:1},dark:{type:Boolean,default:!1}},data:function(){return{currentPage:1}},computed:{items:function(){var e=this.tableData;return i()(e)?e:e()},totalRows:function(){return this.getRowCount()},captions:function(){return this.fields}},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},getRowCount:function(){return this.items.length}}}),c=s,u=r("2877"),l=Object(u["a"])(c,n,a,!1,null,null,null);t["a"]=l.exports},"5dbc":function(e,t,r){var n=r("d3f4"),a=r("8b97").set;e.exports=function(e,t,r){var o,i=t.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&n(o)&&a&&a(e,o),e}},7215:function(e,t,r){},"8b97":function(e,t,r){var n=r("d3f4"),a=r("cb7c"),o=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},9003:function(e,t,r){var n=r("6b4c");e.exports=Array.isArray||function(e){return"Array"==n(e)}},9093:function(e,t,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},a745:function(e,t,r){e.exports=r("f410")},c5f6:function(e,t,r){"use strict";var n=r("7726"),a=r("69a8"),o=r("2d95"),i=r("5dbc"),s=r("6a99"),c=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,p=r("aa77").trim,d="Number",b=n[d],h=b,v=b.prototype,y=o(r("2aeb")(v))==d,m="trim"in String.prototype,g=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=m?t.trim():p(t,3);var r,n,a,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var i,c=t.slice(2),u=0,l=c.length;u<l;u++)if(i=c.charCodeAt(u),i<48||i>a)return NaN;return parseInt(c,n)}}return+t};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof b&&(y?c(function(){v.valueOf.call(r)}):o(r)!=d)?i(new h(g(t)),r,b):g(t)};for(var x,_=r("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;_.length>w;w++)a(h,x=_[w])&&!a(b,x)&&f(b,x,l(h,x));b.prototype=v,v.constructor=b,r("2aba")(n,d,b)}},f410:function(e,t,r){r("1af6"),e.exports=r("584a").Array.isArray},fb32:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",[r("b-col",{attrs:{lg:"6"}},[r("c-table",{attrs:{"table-data":e.items,fields:e.fields,caption:"Product Details"}})],1),r("b-col",{attrs:{lg:"6"}},[r("b-card",[r("div",{attrs:{slot:"header"},slot:"header"},[r("strong",[e._v("Update/Delete")]),e._v(" Inventory\n        ")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateData(t)}}},[r("b-form-group",{attrs:{description:"Enter the User Id",label:"User Id","label-for":"basicText","label-cols":3,horizontal:!0}},[r("cool-select",{attrs:{items:e.items1,loading:e.loading,"item-text":"name",placeholder:"Enter The User ID","disable-filtering-by-search":""},on:{search:e.onSearch},model:{value:e.inventorys.seller,callback:function(t){e.$set(e.inventorys,"seller",t)},expression:"inventorys.seller"}})],1),r("b-form-group",{attrs:{description:"Enter the Product Id",label:"Product Id","label-for":"basicText","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{id:"basicText",value:e.inventorys.product_id,type:"text"},model:{value:e.inventorys.product_id,callback:function(t){e.$set(e.inventorys,"product_id",t)},expression:"inventorys.product_id"}})],1),r("b-form-group",{attrs:{description:"Expiration Date of the Product",label:"Expiration Date","label-for":"basicText","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{id:"basicText",value:e.inventorys.expiry_date,type:"text"},model:{value:e.inventorys.expiry_date,callback:function(t){e.$set(e.inventorys,"expiry_date",t)},expression:"inventorys.expiry_date"}})],1),r("b-form-group",{attrs:{description:"Batch Number",label:"Batch No.","label-for":"basicText","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{id:"basicText",value:e.inventorys.Batch_No,type:"text"},model:{value:e.inventorys.Batch_No,callback:function(t){e.$set(e.inventorys,"Batch_No",t)},expression:"inventorys.Batch_No"}})],1),r("b-form-group",{attrs:{description:"UPC Code",label:"UPC Code","label-for":"basicText","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{id:"basicText",value:e.inventorys.UPC_code,type:"text"},model:{value:e.inventorys.UPC_code,callback:function(t){e.$set(e.inventorys,"UPC_code",t)},expression:"inventorys.UPC_code"}})],1),r("b-form-group",{attrs:{description:"The Shelf Life of the Product",label:"Shelf Life","label-for":"basicText","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{id:"basicText",value:e.inventorys.shelf_life,type:"text"},model:{value:e.inventorys.shelf_life,callback:function(t){e.$set(e.inventorys,"shelf_life",t)},expression:"inventorys.shelf_life"}})],1),r("b-form-group",{attrs:{description:"Status of the Product",label:"Product Status","label-for":"basicText","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{id:"basicText",value:e.inventorys.status,type:"text"},model:{value:e.inventorys.status,callback:function(t){e.$set(e.inventorys,"status",t)},expression:"inventorys.status"}})],1),r("b-form-group",{attrs:{description:"Warehouse where the Product is Currently",label:"Warehouse","label-for":"basicText","label-cols":3,horizontal:!0}},[r("b-form-input",{attrs:{id:"basicText",value:e.inventorys.warehouse,type:"text"},model:{value:e.inventorys.warehouse,callback:function(t){e.$set(e.inventorys,"warehouse",t)},expression:"inventorys.warehouse"}})],1),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[r("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" Submit")]),r("b-button",{attrs:{type:"submit",size:"sm",variant:"danger"},on:{click:function(t){return e.delData()}}},[r("i",{staticClass:"fa fa-ban"}),e._v(" Reset")])],1)],1)],1)],1)],1)},a=[],o=(r("96cf"),r("3b8d")),i=(r("28a5"),r("bc3a")),s=r.n(i),c=r("3f0e"),u=r("bf76"),l=window.location.href,f=l.split("inventories/",24).pop();console.log(f);var p={name:"dashboard",components:{cTable:c["a"],CoolSelect:u["CoolSelect"]},data:function(){return{items:[],itemsArray:[],fields:[{key:"product_id",label:"Product ID",sortable:!0},{key:"Batch_No"},{key:"UPC_code"},{key:"status"},{key:"warehouse"}],selected:null,items1:[],loading:!1,timeoutId:null,noData:!1,errors:[],inventorys:{seller:"",product_id:"",expiry_date:"",Batch_No:"",UPC_code:"",shelf_life:"",status:"",warehouse:"",_id:f},response:""}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:s.a.get("https://selacious-cloud-siteapi.herokuapp.com/inventories/".concat(f)).then(function(e){t.inventorys=e.data}),s.a.get("https://selacious-cloud-siteapi.herokuapp.com/inventories/".concat(f)).then(function(e){t.itemsArray=e.data,t.items=[t.itemsArray]});case 2:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),methods:{variant:function(e){var t;return e<=25?t="info":e>25&&e<=50?t="success":e>50&&e<=75?t="warning":e>75&&e<=100&&(t="danger"),t},flag:function(e){return"flag-icon flag-icon-"+e},updateData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:s.a.put("https://selacious-cloud-siteapi.herokuapp.com/inventories/".concat(f),this.inventorys).then(function(e){console.log(e),t.$router.push("/inventories")});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),delData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:s()({method:"DELETE",url:"https://selacious-cloud-siteapi.herokuapp.com/inventories/".concat(f),data:this.inventory,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){t.inventorys=e.data,t.$router.push("/inventories")},function(e){console.error(e)});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onSearch:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=2,this.noData=!1,!(t.length<r)){e.next=6;break}return this.items1=[],this.loading=!1,e.abrupt("return");case 6:this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://selacious-cloud-siteapi.herokuapp.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n.items1=e.sent,n.loading=!1,n.items1.length||(n.noData=!0),console.log(n.items1);case 9:case"end":return e.stop()}},e)})),500);case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},d=p,b=(r("2891"),r("2877")),h=Object(b["a"])(d,n,a,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-7747c39c.041835d1.js.map