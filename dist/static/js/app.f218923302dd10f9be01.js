webpackJsonp([0],{"0zm3":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("v-app",{attrs:{id:"inspire"}},[i("v-navigation-drawer",{attrs:{app:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{dense:""}},[i("v-list-tile",[i("v-list-tile-action",[i("v-icon",[t._v("home")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",[t._v("contact_mail")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("Contact")])],1)],1)],1)],1),t._v(" "),i("v-toolbar",{staticClass:"orange",attrs:{dark:"",app:"",fixed:""}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),i("v-toolbar-title",[t._v("学部診断アプリ")])],1),t._v(" "),i("v-content",[i("router-view")],1)],1)],1)},staticRenderFns:[]};var o=i("VU/8")({data:function(){return{drawer:!1}},name:"App"},a,!1,function(t){i("0zm3")},null,null).exports,r=i("/ocq"),s={name:"top",data:function(){return{msg:"学部診断アプリ",video:{},canvas:{},captures:[]}},mounted:function(){var t=this;this.video=this.$refs.video,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){t.video.src=window.URL.createObjectURL(e),t.video.play()})},methods:{}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("div",[e("video",{ref:"video",attrs:{id:"video",width:"640",height:"480",autoplay:""}})])])},staticRenderFns:[]};var v=i("VU/8")(s,c,!1,function(t){i("UmG1")},"data-v-f9c7d260",null).exports;n.default.use(r.a);var l=new r.a({routes:[{path:"/",name:"top",component:v}]}),d=(i("gJtD"),i("csSS"),i("ao2D"),i("7zck"),i("3EgV")),u=i.n(d);n.default.use(u.a,{iconfont:"fa"}),n.default.config.productionTip=!1,new n.default({el:"#app",router:l,components:{App:o},template:"<App/>"})},UmG1:function(t,e){},ao2D:function(t,e){},csSS:function(t,e){},gJtD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f218923302dd10f9be01.js.map