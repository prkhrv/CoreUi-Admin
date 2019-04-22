(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-298fbd71"],{"1af6":function(e,t,a){var r=a("63b6");r(r.S,"Array",{isArray:a("9003")})},"1b54":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{lg:"6"}},[a("c-table",{attrs:{"table-data":e.items,fields:e.fields,caption:"Product Details"}})],1),a("b-col",{attrs:{lg:"6"}},[a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v("Update/Delete")]),e._v(" User\n        ")]),a("b-form",{on:{submit:function(t){return t.preventDefault(),e.updateData(t)}}},[a("b-form-group",{attrs:{description:"Enter the Name",label:"Name","label-for":"basicName","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicName",type:"text",autocomplete:"name"},model:{value:e.posts.name,callback:function(t){e.$set(e.posts,"name",t)},expression:"posts.name"}})],1),a("b-form-group",{attrs:{label:"Date of Birth","label-for":"date","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{type:"date",id:"date"},model:{value:e.posts.dob,callback:function(t){e.$set(e.posts,"dob",t)},expression:"posts.dob"}})],1),a("b-form-group",{attrs:{description:"Email Id",label:"Email","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"email"},model:{value:e.posts.email,callback:function(t){e.$set(e.posts,"email",t)},expression:"posts.email"}})],1),a("b-form-group",{attrs:{description:"Phone Number",label:"Phone No.","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.posts.phone,callback:function(t){e.$set(e.posts,"phone",t)},expression:"posts.phone"}})],1),a("b-form-group",{attrs:{description:"Link to the Profile Picture",label:"Profile Pic","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.posts.profile_pic,callback:function(t){e.$set(e.posts,"profile_pic",t)},expression:"posts.profile_pic"}})],1),a("b-form-group",{attrs:{label:"User Category","label-for":"basicSelect","label-cols":3,horizontal:!0}},[a("b-form-select",{attrs:{id:"basicSelect",plain:!0,options:["Please select","Super Admin","Client","Seller","Staff","Manufacturer"],value:"Please select"},model:{value:e.posts.category,callback:function(t){e.$set(e.posts,"category",t)},expression:"posts.category"}})],1),a("b-form-group",{attrs:{description:"Link to the Profile Picture",label:"Address","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.posts.address,callback:function(t){e.$set(e.posts,"address",t)},expression:"posts.address"}})],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[a("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" Submit")]),a("b-button",{attrs:{type:"submit",size:"sm",variant:"danger"},on:{click:function(t){return e.delData()}}},[a("i",{staticClass:"fa fa-ban"}),e._v(" Delete")])],1)],1)],1)],1)],1)},o=[],s=(a("96cf"),a("3b8d")),n=(a("28a5"),a("3f0e")),i=a("bc3a"),l=a.n(i),c=window.location.href,u=c.split("users/",24).pop();console.log(u);var p={name:"dashboard",components:{cTable:n["a"]},data:function(){return{items:[],itemsArray:[],fields:[{key:"name",label:"Username",sortable:!0},{key:"phone",label:"Phone Number"},{key:"dob",label:"Date Of Birth"},{key:"category",label:"Category Of User"}],selected:"Month",errors:[],posts:{name:"",id:"",dob:"",email:"",profile_pic:"",phone:"",category:"",address:"",_id:u},response:""}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.get("https://selacious-cloud-siteapi.herokuapp.com/users/".concat(u)).then(function(e){t.posts=e.data}),l.a.get("https://selacious-cloud-siteapi.herokuapp.com/users/".concat(u)).then(function(e){t.itemsArray=e.data,t.items=[t.itemsArray]});case 2:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),methods:{variant:function(e){var t;return e<=25?t="info":e>25&&e<=50?t="success":e>50&&e<=75?t="warning":e>75&&e<=100&&(t="danger"),t},flag:function(e){return"flag-icon flag-icon-"+e},updateData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.put("https://selacious-cloud-siteapi.herokuapp.com/users/".concat(u),this.posts).then(function(e){console.log(e),t.$router.push("/users")});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),delData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l()({method:"DELETE",url:"https://selacious-cloud-siteapi.herokuapp.com/users/".concat(u),data:this.posts,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){t.posts=e.data,t.$router.push("/users")},function(e){console.error(e)});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},f=p,d=(a("9f75"),a("2877")),b=Object(d["a"])(f,r,o,!1,null,null,null);t["default"]=b.exports},"3f0e":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{header:e.caption}},[a("b-table",{attrs:{dark:e.dark,hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,responsive:"sm",items:e.items,fields:e.captions,"current-page":e.currentPage,"per-page":e.perPage},scopedSlots:e._u([{key:"status",fn:function(t){return[a("b-badge",{attrs:{variant:e.getBadge(t.item.status)}},[e._v(e._s(t.item.status))])]}}])}),a("nav",[a("b-pagination",{attrs:{"total-rows":e.totalRows,"per-page":e.perPage,"prev-text":"Prev","next-text":"Next","hide-goto-end-buttons":""},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},o=[],s=a("a745"),n=a.n(s),i=(a("c5f6"),{name:"c-table",inheritAttrs:!1,props:{caption:{type:String,default:"Table"},hover:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},small:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},tableData:{type:[Array],default:function(){return[]}},fields:{type:[Array,Object],default:function(){return[]}},perPage:{type:Number,default:1},dark:{type:Boolean,default:!1}},data:function(){return{currentPage:1}},computed:{items:function(){var e=this.tableData;return n()(e)?e:e()},totalRows:function(){return this.getRowCount()},captions:function(){return this.fields}},methods:{getBadge:function(e){return"Active"===e?"success":"Inactive"===e?"secondary":"Pending"===e?"warning":"Banned"===e?"danger":"primary"},getRowCount:function(){return this.items.length}}}),l=i,c=a("2877"),u=Object(c["a"])(l,r,o,!1,null,null,null);t["a"]=u.exports},9003:function(e,t,a){var r=a("6b4c");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"9f75":function(e,t,a){"use strict";var r=a("b4b1"),o=a.n(r);o.a},a745:function(e,t,a){e.exports=a("f410")},b4b1:function(e,t,a){},c5f6:function(e,t,a){"use strict";var r=a("7726"),o=a("69a8"),s=a("2d95"),n=a("5dbc"),i=a("6a99"),l=a("79e5"),c=a("9093").f,u=a("11e9").f,p=a("86cc").f,f=a("aa77").trim,d="Number",b=r[d],m=b,h=b.prototype,g=s(a("2aeb")(h))==d,v="trim"in String.prototype,y=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():f(t,3);var a,r,o,s=t.charCodeAt(0);if(43===s||45===s){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var n,l=t.slice(2),c=0,u=l.length;c<u;c++)if(n=l.charCodeAt(c),n<48||n>o)return NaN;return parseInt(l,r)}}return+t};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof b&&(g?l(function(){h.valueOf.call(a)}):s(a)!=d)?n(new m(y(t)),a,b):y(t)};for(var x,k=a("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)o(m,x=k[w])&&!o(b,x)&&p(b,x,u(m,x));b.prototype=h,h.constructor=b,a("2aba")(r,d,b)}},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-298fbd71.c07fa3b8.js.map