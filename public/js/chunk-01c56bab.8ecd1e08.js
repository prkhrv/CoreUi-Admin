(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01c56bab"],{"1eaf":function(e,t,a){"use strict";var r,n,o=a("1fca"),s=a("1fef"),i=a("36e4"),l={components:{CustomTooltips:s["CustomTooltips"]},extends:o["c"],props:["data","height","width","variant"],mounted:function(){this.renderChart({labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{backgroundColor:"transparent",borderColor:this.getVariant(this.variant)||"#c2cfd6",data:this.data}]},{responsive:!0,tooltips:{enabled:!1,custom:s["CustomTooltips"],intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,t){return{backgroundColor:t.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!0,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}})},methods:{getVariant:function(e,t){return"#"===e[0]?e:Object(i["getStyle"])("--".concat(e),t)}}},u=l,c=a("2877"),d=Object(c["a"])(u,r,n,!1,null,null,null);t["a"]=d.exports},"78de":function(e,t,a){"use strict";var r,n,o=a("1fca"),s=a("1fef"),i=a("36e4"),l={extends:o["c"],props:["height","width"],mounted:function(){var e=Object(i["getStyle"])("--light-blue")||"#63c2de",t=[{label:"My First dataset",backgroundColor:e,borderColor:"rgba(255,255,255,.55)",data:[1,18,9,17,34,22,11]}];this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:t},{tooltips:{enabled:!1,custom:s["CustomTooltips"]},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,t[0].data)-5,max:Math.max.apply(Math,t[0].data)+5}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}})}},u=l,c=a("2877"),d=Object(c["a"])(u,r,n,!1,null,null,null);t["a"]=d.exports},"7c13":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-card",[a("b-form",{attrs:{action:"inventories"},on:{submit:function(t){return t.preventDefault(),e.sendData(t)}}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v("Create")]),e._v(" Inventory\n          ")]),a("b-form-group",{attrs:{description:"Enter the User Id",label:"User Id","label-for":"basicText","label-cols":3,horizontal:!0}},[a("cool-select",{attrs:{items:e.items,loading:e.loading,"item-text":"name",placeholder:"Enter The User ID","disable-filtering-by-search":""},on:{search:e.onSearch},model:{value:e.input.seller,callback:function(t){e.$set(e.input,"seller",t)},expression:"input.seller"}})],1),a("b-form-group",{attrs:{description:"Enter the Product Id",label:"Product Id","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.product_id,callback:function(t){e.$set(e.input,"product_id",t)},expression:"input.product_id"}})],1),a("b-form-group",{attrs:{description:"Expiration Date of the Product",label:"Expiration Date","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.expiry_date,callback:function(t){e.$set(e.input,"expiry_date",t)},expression:"input.expiry_date"}})],1),a("b-form-group",{attrs:{description:"Batch Number",label:"Batch No.","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.Batch_No,callback:function(t){e.$set(e.input,"Batch_No",t)},expression:"input.Batch_No"}})],1),a("b-form-group",{attrs:{description:"UPC Code",label:"UPC Code","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.UPC_code,callback:function(t){e.$set(e.input,"UPC_code",t)},expression:"input.UPC_code"}})],1),a("b-form-group",{attrs:{description:"The Shelf Life of the Product",label:"Shelf Life","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.shelf_life,callback:function(t){e.$set(e.input,"shelf_life",t)},expression:"input.shelf_life"}})],1),a("b-form-group",{attrs:{description:"Status of the Product",label:"Product Status","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.status,callback:function(t){e.$set(e.input,"status",t)},expression:"input.status"}})],1),a("b-form-group",{attrs:{description:"Warehouse where the Product is Currently",label:"Warehouse","label-for":"basicText","label-cols":3,horizontal:!0}},[a("b-form-input",{attrs:{id:"basicText",type:"text"},model:{value:e.input.warehouse,callback:function(t){e.$set(e.input,"warehouse",t)},expression:"input.warehouse"}})],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[a("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" Submit")]),a("router-link",{attrs:{to:{path:"/inventories"}}},[a("b-button",{attrs:{type:"reset",size:"sm",variant:"danger"}},[a("i",{staticClass:"fa fa-ban"}),e._v(" Reset")])],1)],1)],1)],1)],1)],1)},n=[],o=(a("96cf"),a("3b8d")),s=(a("28a5"),a("f1fb")),i=a("bc3a"),l=a.n(i),u=a("b955"),c=a("78de"),d=a("e7ce"),p=a("97b8"),b=a("ea9d"),h=a("e6ad"),f=a("1eaf"),m=a("bf76"),g=window.location.href,y=(g.split("8080",24).pop(),{name:"dashboard",components:{Callout:s["d"],CardLine1ChartExample:u["a"],CardLine2ChartExample:c["a"],CardLine3ChartExample:d["a"],CardBarChartExample:p["a"],MainChartExample:b["a"],SocialBoxChartExample:h["a"],CalloutChartExample:f["a"],CoolSelect:m["CoolSelect"]},data:function(){return{selected:null,items:[],loading:!1,timeoutId:null,noData:!1,myvals:[],inventorys:[],resp:[],errors:[],input:{seller:"",product_id:"",expiry_date:"",Batch_No:"",UPC_code:"",shelf_life:"",status:"",warehouse:""},key:"",tableItems:[{avatar:{url:"img/avatars/1.jpg",status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2015"},country:{name:"USA",flag:"us"},usage:{value:50,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Mastercard",icon:"fa fa-cc-mastercard"},activity:"10 sec ago"},{avatar:{url:"img/avatars/2.jpg",status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2015"},country:{name:"Brazil",flag:"br"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Visa",icon:"fa fa-cc-visa"},activity:"5 minutes ago"},{avatar:{url:"img/avatars/3.jpg",status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2015"},country:{name:"India",flag:"in"},usage:{value:74,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Stripe",icon:"fa fa-cc-stripe"},activity:"1 hour ago"},{avatar:{url:"img/avatars/4.jpg",status:""},user:{name:"Enéas Kwadwo",new:!0,registered:"Jan 1, 2015"},country:{name:"France",flag:"fr"},usage:{value:98,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"PayPal",icon:"fa fa-paypal"},activity:"Last month"},{avatar:{url:"img/avatars/5.jpg",status:"success"},user:{name:"Agapetus Tadeáš",new:!0,registered:"Jan 1, 2015"},country:{name:"Spain",flag:"es"},usage:{value:22,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Google Wallet",icon:"fa fa-google-wallet"},activity:"Last week"},{avatar:{url:"img/avatars/6.jpg",status:"danger"},user:{name:"Friderik Dávid",new:!0,registered:"Jan 1, 2015"},country:{name:"Poland",flag:"pl"},usage:{value:43,period:"Jun 11, 2015 - Jul 10, 2015"},payment:{name:"Amex",icon:"fa fa-cc-amex"},activity:"Last week"}],tableFields:{avatar:{label:'<i class="icon-people"></i>',class:"text-center"},user:{label:"User"},country:{label:"Country",class:"text-center"},usage:{label:"Usage"},payment:{label:"Payment method",class:"text-center"},activity:{label:"Activity"}}}},mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l.a.get("https://selacious-cloud-siteapi.herokuapp.com/inventories").then(function(e){t.inventorys=e.data});case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),methods:{variant:function(e){var t;return e<=25?t="info":e>25&&e<=50?t="success":e>50&&e<=75?t="warning":e>75&&e<=100&&(t="danger"),t},flag:function(e){return"flag-icon flag-icon-"+e},sendData:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log("trigger"),l.a.post("https://selacious-cloud-siteapi.herokuapp.com/inventories/",this.input).then(function(e){console.log(e),t.$router.push("/inventories")});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onSearch:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){var a,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=2,this.noData=!1,!(t.length<a)){e.next=6;break}return this.items=[],this.loading=!1,e.abrupt("return");case 6:this.loading=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(Object(o["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://selacious-cloud-siteapi.herokuapp.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:r.items=e.sent,r.loading=!1,r.items.length||(r.noData=!0),console.log(r.items);case 9:case"end":return e.stop()}},e)})),500);case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}}),v=y,x=(a("acbd"),a("2877")),C=Object(x["a"])(v,r,n,!1,null,null,null);t["default"]=C.exports},8992:function(e,t,a){"use strict";function r(e,t){return Math.floor(Math.random()*(t-e+1)+e)}a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n});var n=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[a],e[a]=r}return e}},"97b8":function(e,t,a){"use strict";var r,n,o=a("1fca"),s=a("1fef"),i={extends:o["a"],props:["height"],mounted:function(){var e=[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.3)",borderColor:"transparent",data:[78,81,80,45,34,12,40,75,34,89,32,68,54,72,18,98]}];this.renderChart({labels:["","","","","","","","","","","","","","","",""],datasets:e},{tooltips:{enabled:!1,custom:s["CustomTooltips"]},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1,categoryPercentage:1,barPercentage:.5}],yAxes:[{display:!1}]}})}},l=i,u=a("2877"),c=Object(u["a"])(l,r,n,!1,null,null,null);t["a"]=c.exports},acbd:function(e,t,a){"use strict";var r=a("c754"),n=a.n(r);n.a},b955:function(e,t,a){"use strict";var r,n,o=a("1fca"),s=a("1fef"),i=a("36e4"),l={extends:o["c"],props:["height","width"],mounted:function(){var e=Object(i["getStyle"])("--primary")||"#20a8d8",t=[{label:"My First dataset",backgroundColor:e,borderColor:"rgba(255,255,255,.55)",data:[65,59,84,84,51,55,40]}];this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:t},{tooltips:{enabled:!1,custom:s["CustomTooltips"]},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,t[0].data)-5,max:Math.max.apply(Math,t[0].data)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}})}},u=l,c=a("2877"),d=Object(c["a"])(u,r,n,!1,null,null,null);t["a"]=d.exports},c754:function(e,t,a){},e6ad:function(e,t,a){"use strict";var r,n,o=a("1fca"),s=a("1fef"),i={extends:o["c"],props:{data:{type:Array,default:function(){return[0,22,34,46,58,70,46]}},height:{type:String,default:"100"}},mounted:function(){this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:this.data}]},{tooltips:{enabled:!1,custom:s["CustomTooltips"]},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}})}},l=i,u=a("2877"),c=Object(u["a"])(l,r,n,!1,null,null,null);t["a"]=c.exports},e7ce:function(e,t,a){"use strict";var r,n,o=a("1fca"),s=a("1fef"),i={extends:o["c"],props:["height","width"],mounted:function(){var e=[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40]}];this.renderChart({labels:["January","February","March","April","May","June","July"],datasets:e},{tooltips:{enabled:!1,custom:s["CustomTooltips"]},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}})}},l=i,u=a("2877"),c=Object(u["a"])(l,r,n,!1,null,null,null);t["a"]=c.exports},ea9d:function(e,t,a){"use strict";var r,n,o=a("1fca"),s=a("36e4"),i=a("1fef"),l=a("8992"),u={extends:o["c"],props:["height"],mounted:function(){for(var e=Object(s["getStyle"])("--success")||"#4dbd74",t=Object(s["getStyle"])("--info")||"#20a8d8",a=Object(s["getStyle"])("--danger")||"#f86c6b",r=27,n=[],o=[],u=[],c=0;c<=r;c++)n.push(Object(l["a"])(50,200)),o.push(Object(l["a"])(80,100)),u.push(65);this.renderChart({labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"],datasets:[{label:"My First dataset",backgroundColor:Object(s["hexToRgba"])(t,10),borderColor:t,pointHoverBackgroundColor:"#fff",borderWidth:2,data:n},{label:"My Second dataset",backgroundColor:"transparent",borderColor:e,pointHoverBackgroundColor:"#fff",borderWidth:2,data:o},{label:"My Third dataset",backgroundColor:"transparent",borderColor:a,pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5],data:u}]},{tooltips:{enabled:!1,custom:i["CustomTooltips"],intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,t){return{backgroundColor:t.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}})}},c=u,d=a("2877"),p=Object(d["a"])(c,r,n,!1,null,null,null);t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-01c56bab.8ecd1e08.js.map