(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{143:function(n,e,t){"use strict";t.r(e),t.d(e,"boot",(function(){return l}));var a=t(17),o=t(1),r=t(13);function i(n,e,t,a,o,r,i){try{var c=n[r](i),d=c.value}catch(n){return void t(n)}c.done?e(d):Promise.resolve(d).then(a,o)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(a,o){var r=n.apply(e,t);function c(n){i(r,a,o,c,d,"next",n)}function d(n){i(r,a,o,c,d,"throw",n)}c(void 0)}))}}function d(){return(d=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function s(n){var{consentManagement:e={}}=n,t=Object(o.d)(),a="paid"===t.medium,i='"'+o.b.displayType+'", "'+t.source+'", "'+t.campaign+'"',c=(n=>{var e,t,a,r,i,c;return(e=o.b,i="browser_game"===e.pageId,c="browser-games"===(null==e||null===(t=e.trackingConfig)||void 0===t||null===(a=t.pageView)||void 0===a||null===(r=a.ua)||void 0===r?void 0:r.platform)&&"category"===e.pageId,i||c)?"1004f287962b4243e68154f40212e60":n?"10047f98a61b1f75b8edd8655c5e2fd":"10047f98961b1f744441ac3e42d679e"})(a),s=document.createElement("script");s.src="https://notix.io/ent/current/enot.min.js",s.onload=function(n){n.startInstall(d({appId:c,loadSettings:!0},a&&{var:i})),n.SDKCaller.onPermissionAllowed(()=>{Object(r.f)().trackEvent("generic",{category:"Push",action:"Subscribe",nonInteraction:!0}),a&&function(n){var{consentManagement:e={}}=n;if(Object.keys(e).length&&!e.measureAdPerformanceAllowed())return;function t(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","AW-776951102"),t("event","conversion",{send_to:"AW-776951102/ddHLCPLEu7wDEL6qvfIC"})}({consentManagement:e})})},document.head.append(s)}function u(){return(u=c((function*(){var n=Object(a.consentManagementFactory)();yield n.loaded(),n.shouldConsentBeCollected()?n.addConsentEventListener({event:"notice.hidden",listener(){s({consentManagement:n})}}):s({consentManagement:n})}))).apply(this,arguments)}function l(n){var{isEU:e,isUS:t,avoidAds:a,disableAdsOnLandings:o,pageId:r}=n;"PushManager"in window&&(o||["app","app_download"].includes(r)||(!e&&!t||a?s({}):function(){u.apply(this,arguments)}()))}}}]);