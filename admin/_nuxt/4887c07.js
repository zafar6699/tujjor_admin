(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{478:function(e,t,c){"use strict";c.r(t);var l={name:"child",props:{category:{type:Array}},data:function(){return{isDisabled:!1,categoryModel:[]}},methods:{changeSelect:function(){this.$emit("changeSelect"),this.$store.commit("CATEGORY_BRAND",this.categoryModel)}}},o=c(10),n=c(78),r=c.n(n),d=c(513),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("v-select",{attrs:{items:e.category,"item-text":"name.uz",label:"Kатегория","return-object":"",outlined:"",dense:"",disabled:e.isDisabled},on:{change:e.changeSelect},model:{value:e.categoryModel,callback:function(t){e.categoryModel=t},expression:"categoryModel"}}),e._v(" "),null!=e.categoryModel.children&&e.categoryModel.children.length>0?c("child",{attrs:{category:e.categoryModel.children}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;r()(component,{VSelect:d.a})}}]);