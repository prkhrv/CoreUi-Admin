(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e9734e5"],{"049c":function(e,a,t){"use strict";var r=t("8b8d"),s=t.n(r);s.a},"1eaf":function(e,a,t){"use strict";var r,s,o=t("1fca"),n=t("1fef"),i=t("36e4"),l={components:{CustomTooltips:n["CustomTooltips"]},extends:o["c"],props:["data","height","width","variant"],mounted:function(){this.renderChart({labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:this.getVariant(this.variant)||"#c2cfd6",data:this.data}]},{responsive:!0,tooltips:{enabled:!1,custom:n["CustomTooltips"],intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,a){return{backgroundColor:a.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}})},methods:{getVariant:function(e,a){return"#"===e[0]?e:Object(i["getStyle"])("--".concat(e),a)}}},u=l,d=t("2877"),c=Object(d["a"])(u,r,s,!1,null,null,null);a["a"]=c.exports},"78de":function(e,a,t){"use strict";var r,s,o=t("1fca"),n=t("1fef"),i=t("36e4"),l={extends:o["c"],props:["height","width"],mounted:function(){var e=Object(i["getStyle"])("--light-blue")||"#63c2de",a=[{label:"My First dataset",backgroundColor:e,borderColor:"rgba(255,255,255,.55)",data:[1,18,9,17,34,22,11]}];this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:a},{tooltips:{enabled:!1,custom:n["CustomTooltips"]},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,a[0].data)-5,max:Math.max.apply(Math,a[0].data)+5}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}})}},u=l,d=t("2877"),c=Object(d["a"])(u,r,s,!1,null,null,null);a["a"]=c.exports},8992:function(e,a,t){"use strict";function r(e,a){return Math.floor(Math.random()*(a-e+1)+e)}t.d(a,"a",function(){return r}),t.d(a,"b",function(){return s});var s=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=e[a];e[a]=e[t],e[t]=r}return e}},"8b8d":function(e,a,t){},"97b8":function(e,a,t){"use strict";var r,s,o=t("1fca"),n=t("1fef"),i={extends:o["a"],props:["height"],mounted:function(){var e=[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.3)",borderColor:"transparent",data:[78,81,80,45,34,12,40,75,34,89,32,68,54,72,18,98]}];this.renderChart({labels:["","","","","","","","","","","","","","","",""],datasets:e},{tooltips:{enabled:!1,custom:n["CustomTooltips"]},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1,categoryPercentage:1,barPercentage:.5}],yAxes:[{display:!1}]}})}},l=i,u=t("2877"),d=Object(u["a"])(l,r,s,!1,null,null,null);a["a"]=d.exports},b955:function(e,a,t){"use strict";var r,s,o=t("1fca"),n=t("1fef"),i=t("36e4"),l={extends:o["c"],props:["height","width"],mounted:function(){var e=Object(i["getStyle"])("--primary")||"#20a8d8",a=[{label:"My First dataset",backgroundColor:e,borderColor:"rgba(255,255,255,.55)",data:[65,59,84,84,51,55,40]}];this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:a},{tooltips:{enabled:!1,custom:n["CustomTooltips"]},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,a[0].data)-5,max:Math.max.apply(Math,a[0].data)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}})}},u=l,d=t("2877"),c=Object(d["a"])(u,r,s,!1,null,null,null);a["a"]=c.exports},c385:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-row",[t("b-col",{attrs:{md:"12"}},[t("b-card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("strong",[e._v("Create")]),e._v(" Site\n        ")]),t("b-form",{attrs:{action:"site"},on:{submit:function(a){return a.preventDefault(),e.sendData(a)}}},[t("b-form-group",{attrs:{description:"The Site full URL.",label:"Site URL","label-for":"basicName","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicName",type:"text",autocomplete:"name",placeholder:"Enter the URL",required:""},model:{value:e.input.url,callback:function(a){e.$set(e.input,"url",a)},expression:"input.url"}})],1),t("b-form-group",{attrs:{description:"The Site full URL.",label:"Site Name/ID","label-for":"basicName","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicName",type:"text",autocomplete:"name",placeholder:"Enter the Site ID",required:""},model:{value:e.input.siteid,callback:function(a){e.$set(e.input,"siteid",a)},expression:"input.siteid"}})],1),t("b-form-group",{attrs:{description:"The Owner of the Site",label:"Owner","label-for":"basicText","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.Owner,callback:function(a){e.$set(e.input,"Owner",a)},expression:"input.Owner"}})],1),t("b-form-group",{attrs:{label:"Group Chat Allowed","label-for":"basicSelect","label-cols":3,horizontal:!0}},[t("b-form-select",{attrs:{id:"basicSelect",plain:!0,options:["Please select","yes","no"],value:"Please select"},model:{value:e.input.Group_Chat_Allowed,callback:function(a){e.$set(e.input,"Group_Chat_Allowed",a)},expression:"input.Group_Chat_Allowed"}})],1),t("b-form-group",{attrs:{label:"Number of Users Allowed","label-for":"basicTextarea","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicTextarea",textarea:!0,rows:9,placeholder:"Max Users Allowed"},model:{value:e.input.Number_of_users,callback:function(a){e.$set(e.input,"Number_of_users",a)},expression:"input.Number_of_users"}})],1),t("b-form-group",{attrs:{label:"Number of Messages Allowed","label-for":"basicTextarea","label-cols":3,horizontal:!0}},[t("b-form-input",{attrs:{id:"basicTextarea",textarea:!0,rows:9,placeholder:"Max Messages Allowed"},model:{value:e.input.Max_messages_Allowed,callback:function(a){e.$set(e.input,"Max_messages_Allowed",a)},expression:"input.Max_messages_Allowed"}})],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[t("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" Submit")]),t("router-link",{attrs:{to:{path:"/sites"}}},[t("b-button",{attrs:{type:"reset",size:"sm",variant:"danger"}},[t("i",{staticClass:"fa fa-ban"}),e._v(" Reset")])],1)],1)],1)],1)],1)],1)},s=[],o=(t("96cf"),t("3b8d")),n=(t("28a5"),t("f1fb")),i=t("bc3a"),l=t.n(i),u=t("b955"),d=t("78de"),c=t("e7ce"),p=t("97b8"),b=t("ea9d"),m=t("e6ad"),f=t("1eaf"),h=window.location.href,g=(h.split("8080",24).pop(),{name:"dashboard",components:{Callout:n["d"],CardLine1ChartExample:u["a"],CardLine2ChartExample:d["a"],CardLine3ChartExample:c["a"],CardBarChartExample:p["a"],MainChartExample:b["a"],SocialBoxChartExample:m["a"],CalloutChartExample:f["a"]},data:function(){return{selected:"Month",posts:[],resp:[],errors:[],input:{url:"",siteid:"",Owner:"",Group_Chat_Allowed:"",Max_messages_Allowed:"",Number_of_users:""},key:"",tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"fa fa-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"fa fa-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"fa fa-cc-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"fa fa-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"fa fa-google-wallet"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"fa fa-cc-amex"},activity:"Last week"}],tableFields:{avatar:{label:'<i class="icon-people"></i>',class:"text-center"},user:{label:"User"},country:{label:"Country",class:"text-center"},usage:{label:"Usage"},payment:{label:"Payment method",class:"text-center"},activity:{label:"Activity"}}}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.get("https://selacious-cloud-siteapi.herokuapp.com/products").then(function(e){a.posts=e.data});case 1:case"end":return e.stop()}},e)}));function a(){return e.apply(this,arguments)}return a}(),methods:{variant:function(e){var a;return e<=25?a="info":e>25&&e<=50?a="success":e>50&&e<=75?a="warning":e>75&&e<=100&&(a="danger"),a},flag:function(e){return"flag-icon flag-icon-"+e},sendData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.post("https://selacious-cloud-siteapi.herokuapp.com/sites/",this.input).then(function(e){console.log(e),a.$router.push("/sites")});case 1:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}()}}),y=g,v=(t("049c"),t("2877")),x=Object(v["a"])(y,r,s,!1,null,null,null);a["default"]=x.exports},e6ad:function(e,a,t){"use strict";var r,s,o=t("1fca"),n=t("1fef"),i={extends:o["c"],props:{data:{type:Array,default:function(){return[0,22,34,46,58,70,46]}},height:{type:String,default:"100"}},mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:this.data}]},{tooltips:{enabled:!1,custom:n["CustomTooltips"]},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}})}},l=i,u=t("2877"),d=Object(u["a"])(l,r,s,!1,null,null,null);a["a"]=d.exports},e7ce:function(e,a,t){"use strict";var r,s,o=t("1fca"),n=t("1fef"),i={extends:o["c"],props:["height","width"],mounted:function(){var e=[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40]}];this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:e},{tooltips:{enabled:!1,custom:n["CustomTooltips"]},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}})}},l=i,u=t("2877"),d=Object(u["a"])(l,r,s,!1,null,null,null);a["a"]=d.exports},ea9d:function(e,a,t){"use strict";var r,s,o=t("1fca"),n=t("36e4"),i=t("1fef"),l=t("8992"),u={extends:o["c"],props:["height"],mounted:function(){for(var e=Object(n["getStyle"])("--success")||"#4dbd74",a=Object(n["getStyle"])("--info")||"#20a8d8",t=Object(n["getStyle"])("--danger")||"#f86c6b",r=27,s=[],o=[],u=[],d=0;d<=r;d++)s.push(Object(l["a"])(50,200)),o.push(Object(l["a"])(80,100)),u.push(65);this.renderChart({labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"],datasets:[{label:"My First dataset",backgroundColor:Object(n["hexToRgba"])(a,10),borderColor:a,pointHoverBackgroundColor:"#fff",borderWidth:2,data:s},{label:"My Second dataset",backgroundColor:"transparent",borderColor:e,pointHoverBackgroundColor:"#fff",borderWidth:2,data:o},{label:"My Third dataset",backgroundColor:"transparent",borderColor:t,pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5],data:u}]},{tooltips:{enabled:!1,custom:i["CustomTooltips"],intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,a){return{backgroundColor:a.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}})}},d=u,c=t("2877"),p=Object(c["a"])(d,r,s,!1,null,null,null);a["a"]=p.exports}}]);
//# sourceMappingURL=chunk-6e9734e5.cfc69cea.js.map