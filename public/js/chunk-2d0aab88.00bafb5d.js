(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aab88"],{"11e7":function(o,r,t){"use strict";t.r(r);var e=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"animated fadeIn"},[t("b-card",{attrs:{"header-tag":"header"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"icon-drop"}),o._v(" Theme colors\n    ")]),t("b-card-body",[t("b-row",[t("color-theme",{attrs:{color:"bg-primary"}},[t("h6",[o._v("Brand Primary Color")])]),t("color-theme",{attrs:{color:"bg-secondary"}},[t("h6",[o._v("Brand Secondary Color")])]),t("color-theme",{attrs:{color:"bg-success"}},[t("h6",[o._v("Brand Success Color")])]),t("color-theme",{attrs:{color:"bg-danger"}},[t("h6",[o._v("Brand Danger Color")])]),t("color-theme",{attrs:{color:"bg-warning"}},[t("h6",[o._v("Brand Warning Color")])]),t("color-theme",{attrs:{color:"bg-info"}},[t("h6",[o._v("Brand Info Color")])]),t("color-theme",{attrs:{color:"bg-light"}},[t("h6",[o._v("Brand Light Color")])]),t("color-theme",{attrs:{color:"bg-dark"}},[t("h6",[o._v("Brand Dark Color")])])],1)],1)],1),t("b-card",{attrs:{"header-tag":"header"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"icon-drop"}),o._v(" Grays\n    ")]),t("b-card-body",[t("b-row",[t("color-theme",{attrs:{color:"bg-gray-100"}},[t("h6",[o._v("Brand 100 Color")])]),t("color-theme",{attrs:{color:"bg-gray-200"}},[t("h6",[o._v("Brand 200 Color")])]),t("color-theme",{attrs:{color:"bg-gray-300"}},[t("h6",[o._v("Brand 300 Color")])]),t("color-theme",{attrs:{color:"bg-gray-400"}},[t("h6",[o._v("Brand 400 Color")])]),t("color-theme",{attrs:{color:"bg-gray-500"}},[t("h6",[o._v("Brand 500 Color")])]),t("color-theme",{attrs:{color:"bg-gray-600"}},[t("h6",[o._v("Brand 600 Color")])]),t("color-theme",{attrs:{color:"bg-gray-700"}},[t("h6",[o._v("Brand 700 Color")])]),t("color-theme",{attrs:{color:"bg-gray-800"}},[t("h6",[o._v("Brand 800 Color")])]),t("color-theme",{attrs:{color:"bg-gray-900"}},[t("h6",[o._v("Brand 900 Color")])])],1)],1)],1),t("b-card",{attrs:{"header-tag":"header"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"icon-drop"}),o._v(" Additional colors\n    ")]),t("b-card-body",[t("b-row",[t("color-theme",{attrs:{color:"bg-blue"}},[t("h6",[o._v("Brand Blue Color")])]),t("color-theme",{attrs:{color:"bg-indigo"}},[t("h6",[o._v("Brand Indigo Color")])]),t("color-theme",{attrs:{color:"bg-purple"}},[t("h6",[o._v("Brand Purple Color")])]),t("color-theme",{attrs:{color:"bg-pink"}},[t("h6",[o._v("Brand Pink Color")])]),t("color-theme",{attrs:{color:"bg-red"}},[t("h6",[o._v("Brand Red Color")])]),t("color-theme",{attrs:{color:"bg-orange"}},[t("h6",[o._v("Brand Orange Color")])]),t("color-theme",{attrs:{color:"bg-yellow"}},[t("h6",[o._v("Brand Yellow Color")])]),t("color-theme",{attrs:{color:"bg-green"}},[t("h6",[o._v("Brand Green Color")])]),t("color-theme",{attrs:{color:"bg-teal"}},[t("h6",[o._v("Brand Teal Color")])]),t("color-theme",{attrs:{color:"bg-cyan"}},[t("h6",[o._v("Brand Cyan Color")])])],1)],1)],1)],1)},l=[],a=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("b-col",{staticClass:"mb-4",attrs:{xl:"2",md:"4",sm:"6",xs:"12"}},[t("div",{class:[o.classObj,o.color],style:{paddingTop:"75%"}}),o._t("default"),t("color-view")],2)},c=[],s=function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("table",{staticClass:"w-100"},[t("tbody",[t("tr",[t("td",{staticClass:"text-muted"},[o._v("HEX:")]),t("td",{staticClass:"font-weight-bold"},[o._v(o._s(this.hexColor))])]),t("tr",[t("td",{staticClass:"text-muted"},[o._v("RGB:")]),t("td",{staticClass:"font-weight-bold"},[o._v(o._s(this.bgColor))])])])])},n=[],d=t("36e4"),h={name:"ColorView",data:function(){return{bgColor:"rgb(255, 255, 255)"}},computed:{hexColor:function(){return Object(d["rgbToHex"])(this.bgColor)}},methods:{setColor:function(){var o=this.$parent.$el.children[0],r=window.getComputedStyle(o).getPropertyValue("background-color");this.bgColor=r||this.bgColor}},mounted:function(){this.setColor()}},i=h,g=t("2877"),b=Object(g["a"])(i,s,n,!1,null,null,null),m=b.exports,C={name:"ColorTheme",components:{ColorView:m},props:{classObj:{type:String,default:"theme-color w-75 rounded mb-3"},color:{type:String,default:"bg-secondary"}}},v=C,u=Object(g["a"])(v,a,c,!1,null,null,null),_=u.exports,B={name:"colors",components:{ColorTheme:_}},p=B,y=Object(g["a"])(p,e,l,!1,null,null,null);r["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d0aab88.00bafb5d.js.map