webpackJsonp([0],{1:function(e,t,n){e.exports=n("fZk4")},"13DU":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n("mqPP"),o=r(u),l=n("gh5V"),i=r(l),c=n("yJXV"),s=r(c),m=n("Ub0Q"),d=r(m),f=[a({title:"sample",state:"sample",url:"/sample"},o["default"],{routers:[a({title:"sample1",state:"sample.sample1",url:"/sample1"},i["default"],{routers:[a({title:"sample11",state:"sample.sample1.sample11",url:"/sample11"},s["default"])]}),a({title:"sample2",state:"sample.sample2",url:"/sample2"},d["default"])]})];e.exports=f,t["default"]=f},"7rHi":function(e,t,n){"use strict";n("/jXN"),n("7t+N"),n("SfIo"),n("AFu3"),n("sJZG")},"98Wr":function(e,t){e.exports='\x3c!-- <ma-crumb>\n  <ma-crumb-item ma-href="#!/components">Components 组件</ma-crumb-item>\n  <ma-crumb-item ma-href="#!/components/global">Global 全局</ma-crumb-item>\n  <ma-crumb-item>Font 文字</ma-crumb-item>\n</ma-crumb> --\x3e\n<ma-crumb-auto></ma-crumb-auto>\n<div class="sample-page">\n  <div class="container" ma-full-container>\n\n  </div>\n</div>\n'},"99+Y":function(e,t){e.exports="<div ui-view></div>\n"},Id4C:function(e,t){e.exports='\x3c!-- <ma-crumb>\n  <ma-crumb-item ma-href="#!/components">Components 组件</ma-crumb-item>\n  <ma-crumb-item ma-href="#!/components/global">Global 全局</ma-crumb-item>\n  <ma-crumb-item>Font 文字</ma-crumb-item>\n</ma-crumb> --\x3e\n<ma-crumb-auto></ma-crumb-auto>\n<div class="sample-page">\n  <div class="container" ma-full-container>\n\n  </div>\n</div>\n'},Ifda:function(e,t){},J0gO:function(e,t,n){"use strict";function r(e,t,n,r,a,o,l){return{get:function(e,t,n){var r={method:"GET"};return angular.extend(r,n),this.request(e,t,r)},post:function(e,t,n){var r={method:"POST"};return angular.extend(r,n),this.request(e,t,r)},request:function(i,c,s){var m=t.defer(),d=!1!==s.errorTip,f=s.el,p=!0===s.cache,g=s.timeout||3e4,v=s.loadingDelay||0===s.loadingDelay||!1===s.loadingDelay?s.loadingDelay:2e3,h=s.loadingText||"",b=null,$=!1;if(f){if((0,u["default"])(f).hasClass("disabled-http-request"))return r(function(){m.reject()}),m.promise;(0,u["default"])(f).addClass("disabled-http-request")}return!1!==v&&(b=r(function(){l.show(h),$=!0},v)),n({method:s.method,url:i,data:"POST"==s.method?c:null,params:"GET"==s.method?c:null,timeout:g,cache:"GET"==s.method&&p}).then(function(e){f&&r(function(){(0,u["default"])(f).removeClass("disabled-http-request")},300),$&&(l.hide(),$=!1),r.cancel(b),m.resolve(e.data)},function(t){f&&r(function(){(0,u["default"])(f).removeClass("disabled-http-request")},300),$&&(l.hide(),$=!1),r.cancel(b),403===t.status?a.alert({content:"认证失败",okCallback:function(){o.logout()}}):d&&(400===t.status?e.danger(t.data.message||"未知错误"):404===t.status&&e.danger("页面不存在")),console.error(i,s.method,t),m.reject(t)}),m.promise}}}Object.defineProperty(t,"__esModule",{value:!0});var a=n("7t+N"),u=function(e){return e&&e.__esModule?e:{"default":e}}(a),o="requestService";angular.module(o,[]).factory("$request",r),r.$inject=["$message","$q","$http","$timeout","$modal","loginService","$loading"],t["default"]=o},NA4T:function(e,t){e.exports='<ma-sider-menu ma-title="{{siderMenuTitle}}"\n  ma-routers="routerConfig"></ma-sider-menu>\n\n<div ui-view\n  ma-ui-transition="left">\n\n</div>\n'},Ub0Q:function(e,t,n){"use strict";function r(){}Object.defineProperty(t,"__esModule",{value:!0});angular.module("app").controller("sample2Ctrl",r),r.$inject=[],t["default"]={template:n("Id4C"),controller:"sample2Ctrl"}},fWPp:function(e,t,n){"use strict";function r(e,t,n){return e.logout=a,window.logout=a,{logout:a}}function a(){console.log("登出！")}Object.defineProperty(t,"__esModule",{value:!0});angular.module("loginService",[]).service("loginService",r),r.$inject=["$rootScope","$q","$timeout"],t["default"]="loginService"},fZk4:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n,r){e.routerConfig=l(h)}function u(e,t,n){t.rule(o),angular.forEach(l(h),function(t){e.state(t.state,{url:t.url,template:t.template,templateUrl:t.templateUrl,controller:t.controller})})}function o(e,t){function n(e){var t=0;return angular.each(e,function(e){!0!==e.hidden&&t++}),t>0}function r(e,t){e.forEach(function(e){var l=t+e.url;l===a&&(u=e,o+=t+u.url),n(e.routers)&&r(e.routers,l)})}var a=t.path(),u=null,o="";if(!a||"/"===a)return angular.each(h,function(e){!0===e.hidden||o||(o=e.url)}),o;for(r(h,"");u&&n(u.routers);)u=u.routers[0],o+=u.url;return o&&o!==a?o:(u||(window.location.href="/404.html"),undefined)}function l(e,t,n){var r=[];return e=c["default"].extend(!0,[],e),t?t++:t=1,e.forEach(function(e){r.push(e),e.level=t,e.parent=n,e.routers&&e.routers.length&&(r=r.concat(l(e.routers,t,e))),delete e.routers}),r}n("7rHi");var i=n("7t+N"),c=r(i),s=n("sJZG"),m=r(s);n("Ifda");var d=n("fWPp"),f=r(d),p=n("J0gO"),g=r(p),v=angular.module("app",[m["default"],f["default"],g["default"],"ui.router","ngSanitize"]),h=n("13DU");u.$inject=["$stateProvider","$urlRouterProvider","$httpProvider"],a.$inject=["$rootScope","loginService","$request","$loading"],v.config(u).run(a),angular.bootstrap(document,["app"])},gh5V:function(e,t,n){"use strict";function r(){}Object.defineProperty(t,"__esModule",{value:!0});angular.module("app").controller("sample1Ctrl",r),r.$inject=[],t["default"]={template:n("99+Y"),controller:"sample1Ctrl"}},mqPP:function(e,t,n){"use strict";function r(e,t){angular.each(u["default"],function(n){t.current.name!==n.state&&-1===t.current.name.indexOf(n.state+".")||(e.routerConfig=n.routers,e.siderMenuTitle=n.title)})}Object.defineProperty(t,"__esModule",{value:!0});var a=n("13DU"),u=function(e){return e&&e.__esModule?e:{"default":e}}(a);angular.module("app").controller("sampleCtrl",r),r.$inject=["$scope","$state"],t["default"]={template:n("NA4T"),controller:"sampleCtrl"}},yJXV:function(e,t,n){"use strict";function r(){}Object.defineProperty(t,"__esModule",{value:!0});angular.module("app").controller("sample11Ctrl",r),r.$inject=[],t["default"]={template:n("98Wr"),controller:"sample11Ctrl"}}},[1]);