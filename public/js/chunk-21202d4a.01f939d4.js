(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21202d4a"],{"187c":function(e,t,a){},"1b02":function(e,t,a){"use strict";var r=a("187c"),n=a.n(r);n.a},c12c:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v("Create")]),e._v(" Product\n        ")]),a("b-form",{attrs:{action:"product"},on:{submit:function(t){return t.preventDefault(),e.sendData(t)}}},[a("b-form-group",{attrs:{description:"The products full name.",label:"Product Name","label-for":"basicName","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicName",type:"text",autocomplete:"name"},model:{value:e.input.product_name,callback:function(t){e.$set(e.input,"product_name",t)},expression:"input.product_name"}})],1),a("b-form-group",{attrs:{description:"The price of the product",label:"Price","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.price,callback:function(t){e.$set(e.input,"price",t)},expression:"input.price"}})],1),a("b-form-group",{attrs:{description:"A short description of the product",label:"Short Description","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.short_description,callback:function(t){e.$set(e.input,"short_description",t)},expression:"input.short_description"}})],1),a("b-form-group",{attrs:{label:"Detailed Description","label-for":"basicTextarea","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicTextarea",textarea:!0,rows:9,placeholder:"Detailed Description of the Product"},model:{value:e.input.long_description,callback:function(t){e.$set(e.input,"long_description",t)},expression:"input.long_description"}})],1),a("b-form-group",{attrs:{label:"Keywords","label-for":"basicMultiSelect","label-cols":3,horizontal:!0}},[a("b-form-select",{attrs:{id:"basicMultiSelect",plain:!0,multiple:!0,options:[{text:"Please select some item",value:null},{text:"This is First option",value:"a"},{text:"Default Selected Option",value:"b"},{text:"This is another option",value:"c"},{text:"This one is disabled",value:"d",disabled:!0}],value:[null,"c"]},model:{value:e.input.keywords,callback:function(t){e.$set(e.input,"keywords",t)},expression:"input.keywords"}})],1),a("b-form-group",{attrs:{label:"Search Keywords","label-for":"basicMultiSelect","label-cols":3,horizontal:!0}},[a("b-form-select",{attrs:{id:"basicMultiSelect",plain:!0,multiple:!0,options:[{text:"Please select some item",value:null},{text:"This is First option",value:"a"},{text:"Default Selected Option",value:"b"},{text:"This is another option",value:"c"},{text:"This one is disabled",value:"d",disabled:!0}],value:[null,"c"]},model:{value:e.input.search_keywords,callback:function(t){e.$set(e.input,"search_keywords",t)},expression:"input.search_keywords"}})],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[a("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" Submit")])],1)],1)],1)],1)],1)},n=[],i=(a("96cf"),a("3b8d")),s=(a("28a5"),a("f1fb")),o=a("bc3a"),l=a.n(o),u=a("b955"),c=a("78de"),p=a("e7ce"),d=a("97b8"),m=a("ea9d"),b=a("e6ad"),f=a("1eaf"),h=window.location.href,v=(h.split("8080",24).pop(),{name:"dashboard",components:{Callout:s["d"],CardLine1ChartExample:u["a"],CardLine2ChartExample:c["a"],CardLine3ChartExample:p["a"],CardBarChartExample:d["a"],MainChartExample:m["a"],SocialBoxChartExample:b["a"],CalloutChartExample:f["a"]},data:function(){return{selected:"Month",posts:[],resp:[],errors:[],input:{product_name:"",subtitle:"",short_description:"",long_description:"",price:"",keywords:[],search_keywords:[]},key:"",tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"fa fa-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"fa fa-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"fa fa-cc-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"fa fa-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"fa fa-google-wallet"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"fa fa-cc-amex"},activity:"Last week"}],tableFields:{avatar:{label:'<i class="icon-people"></i>',class:"text-center"},user:{label:"User"},country:{label:"Country",class:"text-center"},usage:{label:"Usage"},payment:{label:"Payment method",class:"text-center"},activity:{label:"Activity"}}}},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.get("https://selacious-cloud-siteapi.herokuapp.com/products").then(function(e){t.posts=e.data});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{variant:function(e){var t;return e<=25?t="info":e>25&&e<=50?t="success":e>50&&e<=75?t="warning":e>75&&e<=100&&(t="danger"),t},flag:function(e){return"flag-icon flag-icon-"+e},sendData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.post("https://selacious-cloud-siteapi.herokuapp.com/products/",this.input).then(function(e){console.log(e),t.$router.push("product")});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}}),g=v,y=(a("1b02"),a("2877")),x=Object(y["a"])(g,r,n,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-21202d4a.01f939d4.js.map