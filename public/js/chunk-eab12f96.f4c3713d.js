(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eab12f96"],{5635:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-row",[t("b-col",{attrs:{md:"12"}},[t("b-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("strong",[e._v("Create")]),e._v(" User\n        ")]),t("b-form",{on:{submit:function(a){return a.preventDefault(),e.sendData(a)}}},[t("b-form-group",{attrs:{description:"Enter the Name",label:"Name","label-for":"basicName","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicName",type:"text",autocomplete:"name"},model:{value:e.input.name,callback:function(a){e.$set(e.input,"name",a)},expression:"input.name"}})],1),t("b-form-group",{attrs:{label:"Date of Birth","label-for":"date","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{type:"date",id:"date"},model:{value:e.input.dob,callback:function(a){e.$set(e.input,"dob",a)},expression:"input.dob"}})],1),t("b-form-group",{attrs:{description:"Email Id",label:"Email","label-for":"basicText","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicText",type:"email"},model:{value:e.input.email,callback:function(a){e.$set(e.input,"email",a)},expression:"input.email"}})],1),t("b-form-group",{attrs:{description:"Phone Number",label:"Phone No.","label-for":"basicText","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.phone,callback:function(a){e.$set(e.input,"phone",a)},expression:"input.phone"}})],1),t("b-form-group",{attrs:{description:"Link to the Profile Picture",label:"Profile Pic","label-for":"basicText","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.profile_pic,callback:function(a){e.$set(e.input,"profile_pic",a)},expression:"input.profile_pic"}})],1),t("b-form-group",{attrs:{label:"User Category","label-for":"basicSelect","label-cols":3,horizontal:!0}},[t("b-form-select",{attrs:{id:"basicSelect",plain:!0,options:["Please select","Super Admin","Client","Seller","Staff","Manufacturer"],value:"Please select"},model:{value:e.input.category,callback:function(a){e.$set(e.input,"category",a)},expression:"input.category"}})],1),t("b-form-group",{attrs:{description:"Link to the Profile Picture",label:"Address","label-for":"basicText","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.address,callback:function(a){e.$set(e.input,"address",a)},expression:"input.address"}})],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[t("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" Submit")]),t("router-link",{attrs:{to:{path:"/users"}}},[t("b-button",{attrs:{type:"reset",size:"sm",variant:"danger"}},[t("i",{staticClass:"fa fa-ban"}),e._v(" Reset")])],1)],1)],1)],1)],1)],1)},n=[],i=(t("96cf"),t("3b8d")),s=(t("28a5"),t("f1fb")),o=t("bc3a"),l=t.n(o),u=t("b955"),c=t("78de"),p=t("e7ce"),m=t("97b8"),d=t("ea9d"),f=t("e6ad"),b=t("1eaf"),g=window.location.href,v=(g.split("8080",24).pop(),{name:"dashboard",components:{Callout:s["d"],CardLine1ChartExample:u["a"],CardLine2ChartExample:c["a"],CardLine3ChartExample:p["a"],CardBarChartExample:m["a"],MainChartExample:d["a"],SocialBoxChartExample:f["a"],CalloutChartExample:b["a"]},data:function(){return{selected:"Month",users:[],resp:[],errors:[],input:{name:"",id:"",dob:"",email:"",profile_pic:"",phone:"",category:"",address:""},tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"fa fa-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"fa fa-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"fa fa-cc-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"fa fa-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"fa fa-google-wallet"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"fa fa-cc-amex"},activity:"Last week"}],tableFields:{avatar:{label:'<i class="icon-people"></i>',class:"text-center"},user:{label:"User"},country:{label:"Country",class:"text-center"},usage:{label:"Usage"},payment:{label:"Payment method",class:"text-center"},activity:{label:"Activity"}}}},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.get("https://selacious-cloud-siteapi.herokuapp.com/users").then(function(e){a.users=e.data});case 1:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),methods:{variant:function(e){var a;return e<=25?a="info":e>25&&e<=50?a="success":e>50&&e<=75?a="warning":e>75&&e<=100&&(a="danger"),a},flag:function(e){return"flag-icon flag-icon-"+e},sendData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.post("https://selacious-cloud-siteapi.herokuapp.com/users/",this.input).then(function(e){console.log(e),a.$router.push("/users")});case 1:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}()}}),h=v,y=(t("e335"),t("2877")),x=Object(y["a"])(h,r,n,!1,null,null,null);a["default"]=x.exports},e335:function(e,a,t){"use strict";var r=t("f63b"),n=t.n(r);n.a},f63b:function(e,a,t){}}]);
//# sourceMappingURL=chunk-eab12f96.f4c3713d.js.map