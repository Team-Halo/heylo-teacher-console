(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-912f0a9e"],{"03d1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout-vertical",[a("router-view"),e.showCustomizer?a("app-customizer",{attrs:{slot:"customizer"},slot:"customizer"}):e._e()],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vertical-layout h-100",class:[e.layoutClasses],attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[a("b-navbar",{staticClass:"header-navbar navbar navbar-shadow align-items-center",class:[e.navbarTypeClass],attrs:{toggleable:!1,variant:e.navbarBackgroundColor}},[e._t("navbar",[a("app-navbar-vertical-layout",{attrs:{"toggle-vertical-menu-active":e.toggleVerticalMenuActive}})],{toggleVerticalMenuActive:e.toggleVerticalMenuActive,navbarBackgroundColor:e.navbarBackgroundColor,navbarTypeClass:e.navbarTypeClass.concat(["header-navbar navbar navbar-shadow align-items-center"])})],2),e.isNavMenuHidden?e._e():a("vertical-nav-menu",{attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)}),a("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,a){return{key:a,fn:function(t){return[e._t(a,null,null,t)]}}}))],null,!0)})],1),a("footer",{staticClass:"footer footer-light",class:[e.footerTypeClass]},[e._t("footer",[a("app-footer")])],2),e._t("customizer")],2)},l=[],s=a("a6f4"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-container d-flex content align-items-center"},[a("ul",{staticClass:"nav navbar-nav d-xl-none"},[a("li",{staticClass:"nav-item"},[a("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[a("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),a("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[a("dark-Toggler",{staticClass:"d-none d-lg-block"})],1)],1)},c=[],u=a("aa59"),v=a("042b"),d=a("9f5c"),f={components:{BLink:u["a"],BNavbarNav:v["a"],DarkToggler:d["a"]},props:{toggleVerticalMenuActive:{type:Function,default:function(){}}}},b=f,p=a("2877"),C=Object(p["a"])(b,i,c,!1,null,null,null),g=C.exports,y=a("62cb"),m=a("b8f2"),h=a("d0b9"),M=a("1ae3"),k=a("e08f"),w=a("0d19"),V=a("2c28"),A=a("32b8"),_=a("1dff"),T={watch:{$route:function(){this.$store.state.app.windowWidth<_["a"].xl&&(this.isVerticalMenuActive=!1)}}},z={components:{AppNavbarVerticalLayout:g,AppFooter:y["a"],VerticalNavMenu:V["a"],BNavbar:h["a"],LayoutContentRendererLeftDetached:w["a"],LayoutContentRendererLeft:k["a"],LayoutContentRendererDefault:M["a"]},mixins:[T],computed:{layoutContentRenderer:function(){var e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}},setup:function(){var e=Object(m["a"])(),t=e.routerTransition,a=e.navbarBackgroundColor,n=e.navbarType,r=e.footerType,o=e.isNavMenuHidden,l=Object(A["a"])(n,r),i=l.isVerticalMenuActive,c=l.toggleVerticalMenuActive,u=l.isVerticalMenuCollapsed,v=l.layoutClasses,d=l.overlayClasses,f=l.resizeHandler,b=l.navbarTypeClass,p=l.footerTypeClass;return f(),window.addEventListener("resize",f),Object(s["onUnmounted"])((function(){window.removeEventListener("resize",f)})),{isVerticalMenuActive:i,toggleVerticalMenuActive:c,isVerticalMenuCollapsed:u,overlayClasses:d,layoutClasses:v,navbarTypeClass:b,footerTypeClass:p,routerTransition:t,navbarBackgroundColor:a,isNavMenuHidden:o}}},L=z,N=(a("15ae"),Object(p["a"])(L,o,l,!1,null,null,null)),$=N.exports,B=a("4778"),x={components:{AppCustomizer:B["a"],LayoutVertical:$},data:function(){return{showCustomizer:_["c"].layout.customizer}}},R=x,j=Object(p["a"])(R,n,r,!1,null,null,null);t["default"]=j.exports},"15ae":function(e,t,a){"use strict";a("9427")},9427:function(e,t,a){}}]);
//# sourceMappingURL=chunk-912f0a9e.b6a12177.js.map