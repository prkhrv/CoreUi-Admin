(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e217622"],{"1b54":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-row",[t("b-col",{attrs:{md:"12"}},[t("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"fa fa-align-justify"}),t("strong",[e._v("Site")])]),t("b-list-group-item",{staticClass:"flex-column align-items-start",attrs:{href:"#"}},[t("div",{staticClass:"d-flex w-100 justify-content-between"},[t("h5",{staticClass:"mb-1"},[e._v(e._s(e.posts.name))]),t("small",[e._v(e._s(e.posts.email))])]),t("p",{staticClass:"mb-1"},[e._v("\n                "+e._s(e.posts.email)+"\n              ")])])],1),t("b-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("strong",[e._v("Update/Delete")]),e._v(" User\n        ")]),t("b-form",{on:{submit:function(a){return a.preventDefault(),e.updateData(a)}}},[t("b-form-group",{attrs:{description:"Enter the Name",label:"Name","label-for":"basicName","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicName",type:"text",autocomplete:"name"},model:{value:e.posts.name,callback:function(a){e.$set(e.posts,"name",a)},expression:"posts.name"}})],1),t("b-form-group",{attrs:{label:"Date of Birth","label-for":"date","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{type:"date",id:"date"},model:{value:e.posts.dob,callback:function(a){e.$set(e.posts,"dob",a)},expression:"posts.dob"}})],1),t("b-form-group",{attrs:{description:"Email Id",label:"Email","label-for":"basicText","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicText",type:"email"},model:{value:e.posts.email,callback:function(a){e.$set(e.posts,"email",a)},expression:"posts.email"}})],1),t("b-form-group",{attrs:{description:"Phone Number",label:"Phone No.","label-for":"basicText","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.posts.phone,callback:function(a){e.$set(e.posts,"phone",a)},expression:"posts.phone"}})],1),t("b-form-group",{attrs:{description:"Link to the Profile Picture",label:"Profile Pic","label-for":"basicText","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.posts.profile_pic,callback:function(a){e.$set(e.posts,"profile_pic",a)},expression:"posts.profile_pic"}})],1),t("b-form-group",{attrs:{label:"User Category","label-for":"basicSelect","label-cols":3,horizontal:!0}},[t("b-form-select",{attrs:{id:"basicSelect",plain:!0,options:["Please select","Super Admin","Client","Seller","Staff","Manufacturer"],value:"Please select"},model:{value:e.posts.category,callback:function(a){e.$set(e.posts,"category",a)},expression:"posts.category"}})],1),t("b-form-group",{attrs:{description:"Link to the Profile Picture",label:"Address","label-for":"basicText","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.posts.address,callback:function(a){e.$set(e.posts,"address",a)},expression:"posts.address"}})],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[t("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" Submit")]),t("b-button",{attrs:{type:"submit",size:"sm",variant:"danger"},on:{click:function(a){return e.delData()}}},[t("i",{staticClass:"fa fa-ban"}),e._v(" Delete")])],1)],1)],1)],1)],1)},r=[],o=(t("96cf"),t("3b8d")),n=(t("28a5"),t("f1fb")),i=t("bc3a"),l=t.n(i),c=t("b955"),u=t("78de"),p=t("e7ce"),m=t("97b8"),d=t("ea9d"),f=t("e6ad"),b=t("1eaf"),g=window.location.href,h=g.split("users/",24).pop();console.log(h);var v={name:"dashboard",components:{Callout:n["d"],CardLine1ChartExample:c["a"],CardLine2ChartExample:u["a"],CardLine3ChartExample:p["a"],CardBarChartExample:m["a"],MainChartExample:d["a"],SocialBoxChartExample:f["a"],CalloutChartExample:b["a"]},data:function(){return{selected:"Month",errors:[],posts:{name:"",id:"",dob:"",email:"",profile_pic:"",phone:"",category:"",address:"",_id:h},response:"",tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"fa fa-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"fa fa-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"fa fa-cc-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"fa fa-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"fa fa-google-wallet"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"fa fa-cc-amex"},activity:"Last week"}],tableFields:{avatar:{label:'<i class="icon-people"></i>',class:"text-center"},user:{label:"User"},country:{label:"Country",class:"text-center"},usage:{label:"Usage"},payment:{label:"Payment method",class:"text-center"},activity:{label:"Activity"}}}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.get("https://selacious-cloud-siteapi.herokuapp.com/users/".concat(h)).then(function(e){a.posts=e.data});case 1:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),methods:{variant:function(e){var a;return e<=25?a="info":e>25&&e<=50?a="success":e>50&&e<=75?a="warning":e>75&&e<=100&&(a="danger"),a},flag:function(e){return"flag-icon flag-icon-"+e},updateData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.put("https://selacious-cloud-siteapi.herokuapp.com/users/".concat(h),this.posts).then(function(e){console.log(e),a.$router.push("/users")});case 1:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),delData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l()({method:"DELETE",url:"https://selacious-cloud-siteapi.herokuapp.com/users/".concat(h),data:this.posts,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){a.posts=e.data,a.$router.push("/users")},function(e){console.error(e)});case 1:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}()}},y=v,x=(t("9f75"),t("2877")),w=Object(x["a"])(y,s,r,!1,null,null,null);a["default"]=w.exports},"9f75":function(e,a,t){"use strict";var s=t("b4b1"),r=t.n(s);r.a},b4b1:function(e,a,t){}}]);
//# sourceMappingURL=chunk-7e217622.b5698d49.js.map