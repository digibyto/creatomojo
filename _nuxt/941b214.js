(window.webpackJsonp=window.webpackJsonp||[]).push([[2,5,6,8],{258:function(e,t,o){var content=o(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(74).default)("d45ef60a",content,!1,{sourceMap:!1})},260:function(e,t,o){var content=o(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(74).default)("0a5c4c25",content,!1,{sourceMap:!1})},261:function(e,t,o){"use strict";o(258)},262:function(e,t,o){var n=o(73)(!1);n.push([e.i,".template-container[data-v-44dc7c46]{padding:5px 0 0}.template-container .template-holder[data-v-44dc7c46]{height:160px;width:300px;margin:0 0 24px;padding:24px;background:#373a45;border-radius:12px;cursor:pointer}.template-container .template-holder .bar.large[data-v-44dc7c46]{height:12px;width:200px;background:hsla(0,0%,100%,.35);border-radius:3px}.template-container .template-holder .bar.small[data-v-44dc7c46]{height:12px;width:80px;margin:5px 0 0;background:hsla(0,0%,100%,.35);border-radius:3px}.template-container .template-holder.active[data-v-44dc7c46]{background:#fff}.template-container .template-holder.active .bar[data-v-44dc7c46]{background:#373a45}.template-container .info[data-v-44dc7c46]{color:#fff}@media screen and (max-width:1400px){.template-container .template-holder[data-v-44dc7c46]{height:125px;width:225px}.template-container .template-holder .bar.large[data-v-44dc7c46]{height:12px;width:150px;background:hsla(0,0%,100%,.35);border-radius:3px}.template-container .template-holder .bar.small[data-v-44dc7c46]{height:12px;width:80px;margin:5px 0 0;background:hsla(0,0%,100%,.35);border-radius:3px}.template-container .template-holder.active[data-v-44dc7c46]{background:#fff}.template-container .template-holder.active .bar[data-v-44dc7c46]{background:#373a45}.template-container .info[data-v-44dc7c46]{color:#fff}}",""]),e.exports=n},263:function(e,t,o){var content=o(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(74).default)("41302775",content,!1,{sourceMap:!1})},264:function(e,t,o){"use strict";o.r(t);var n={computed:{selectedTemplateIndex:{get:function(){return this.$store.state.selectedTemplateIndex},set:function(e){this.$store.commit("updateSelectedTemplateIndex",e)}}},methods:{updateSelectedTemplateIndex:function(e){this.selectedTemplateIndex=e}}},r=(o(261),o(42)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"template-container flex-column justify-content-space-between"},[o("section",{staticClass:"flex-column"},[o("div",{class:["template-holder flex-column align-items-flex-start justify-content-flex-start",{active:0===e.selectedTemplateIndex}],on:{click:function(t){return e.updateSelectedTemplateIndex(0)}}},[o("div",{staticClass:"bar large"}),e._v(" "),o("div",{staticClass:"bar small"})]),e._v(" "),o("div",{class:["template-holder flex-column align-items-center justify-content-center",{active:1===e.selectedTemplateIndex}],on:{click:function(t){return e.updateSelectedTemplateIndex(1)}}},[o("div",{staticClass:"bar large"}),e._v(" "),o("div",{staticClass:"bar small"})])]),e._v(" "),o("p",{staticClass:"info"},[o("b",[e._v(e._s(e.selectedTemplateIndex+1))]),e._v(" out of "),o("b",[e._v("2")]),e._v(" selected\n  ")])])}),[],!1,null,"44dc7c46",null);t.default=component.exports},267:function(e,t,o){"use strict";o(260)},268:function(e,t,o){var n=o(73)(!1);n.push([e.i,".video-inside-a-browser-container[data-v-ba677648]{padding:24px 24px 0}.video-inside-a-browser-container .browser-holder[data-v-ba677648]{top:4px;padding:24px;border:3px solid hsla(0,0%,100%,.25);border-radius:24px 24px 0 0}.video-inside-a-browser-container .browser-holder .dot[data-v-ba677648]{height:10px;width:10px;margin:0 6px 0 0;background:#fff;border-radius:50%}.video-inside-a-browser-container .video-holder[data-v-ba677648]{position:absolute;top:96px;left:72px;height:calc(100% - 120px);width:calc(100% - 144px)}.video-inside-a-browser-container .video-holder video[data-v-ba677648]{height:100%;width:100%}.video-inside-a-browser-container .video-holder img[data-v-ba677648]{height:64px;width:auto}.video-inside-a-browser-container .video-holder img[data-v-ba677648]:hover{cursor:pointer;opacity:.7}",""]),e.exports=n},269:function(e,t,o){"use strict";o(263)},270:function(e,t,o){var n=o(73)(!1);n.push([e.i,".editor-container[data-v-c9090bb6]{box-sizing:border-box!important;padding:24px}",""]),e.exports=n},271:function(e,t,o){"use strict";o.r(t);o(44),o(35),o(43),o(18),o(75),o(34),o(76);var n=o(26),r=o(59);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var d={props:["customStyle"],data:function(){return{isVideoPlaying:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(r.b)(["videoSource"])),watch:{videoSource:function(){var e=this.videoSource;document.getElementById("video").src=e}},methods:{toggleVideoPlayback:function(){var e=this.isVideoPlaying;if(this.videoSource){var t=document.getElementById("video");e?t.pause():t.play(),this.isVideoPlaying=!e}}}},l=d,h=(o(267),o(42)),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"video-inside-a-browser-container",style:e.customStyle},[e._m(0),e._v(" "),o("div",{staticClass:"video-holder"},[e._m(1),e._v(" "),o("section",{staticClass:"\n        position-absolute\n        top-left\n        full-height full-width\n        flex-row\n        justify-content-center\n        align-items-center\n      "},[o("img",{attrs:{draggable:"false",src:"/images/icons/"+(e.isVideoPlaying?"pause":"creatomojo")+"-light.svg"},on:{click:e.toggleVideoPlayback}})])])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"browser-holder full-height full-width position-relative"},[o("section",{staticClass:"flex-row align-items-center"},[o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("video",{attrs:{id:"video"}},[t("source",{attrs:{type:"video/mp4"}})])}],!1,null,"ba677648",null);t.default=component.exports},272:function(e,t,o){"use strict";o.r(t);var n=o(264),r=o(278),c={props:["customStyle"],components:{Templates:n.default,TemplateEditor:r.default}},d=(o(269),o(42)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"editor-container flex-row justify-content-space-between",style:e.customStyle},[o("templates"),e._v(" "),o("template-editor")],1)}),[],!1,null,"c9090bb6",null);t.default=component.exports},276:function(e,t,o){var content=o(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(74).default)("134d3196",content,!1,{sourceMap:!1})},279:function(e,t,o){"use strict";o.r(t);o(44),o(35),o(43),o(18),o(75),o(34),o(76);var n=o(26),r=(o(109),o(59)),c=o(271),d=o(272);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}var h={data:function(){return{containerTop:0,containerLeft:0,containerHeight:0,containerWidth:0,lineLeftInPercentage:.0075,isDrag:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({leftSidedContainerStyle:{get:function(){var e=this.lineLeftInPercentage;return"position: sticky; "+"width: calc(".concat(100*e,"%); ")+"overflow: hidden; display: block !important;"}},leftSidedInnerContainerStyle:{get:function(){var e=this.containerHeight,t=this.containerWidth;return"position: absolute;top: 0px; left: 0px; "+"height: ".concat(e,"px; width: ").concat(t,"px;")}},rightSidedContainerStyle:{get:function(){var e=this.lineLeftInPercentage;return"position: sticky; "+"width: calc(".concat(100*(1-e),"%); ")+"overflow: hidden; display: block !important;"}},rightSidedInnerContainerStyle:{get:function(){var e=this.lineLeftInPercentage,t=this.containerHeight,o=this.containerWidth;return"position: absolute;"+"top: ".concat(0,"px; left: ",-e*o,"px; ")+"height: ".concat(t,"px; width: ").concat(o,"px;")}},holdAndMoveHolderStyle:{get:function(){var e=this.lineLeftInPercentage;return"top: 0px; left: calc(".concat(100*e,"% - 24px);")}}},Object(r.b)(["triggerAction"])),watch:{triggerAction:function(){var e=this.triggerAction;"videoGenerated"===e.type&&(this.lineLeftInPercentage=.95)}},components:{VideoInsideABrowser:c.default,Editor:d.default},methods:{setInitialDimensions:function(){var e=document.getElementById("hold-and-move");this.containerTop=e.offsetTop,this.containerLeft=e.offsetLeft,this.containerHeight=e.offsetHeight,this.containerWidth=e.offsetWidth},onMouseDown:function(){this.isDrag=!0},onMouseMove:function(e){var t=this.isDrag,o=this.containerLeft,n=this.containerWidth;if(t){var r=(e.pageX-o-12)/n;r>=0&&r<=1&&(this.lineLeftInPercentage=r)}},onMouseUpOrClicked:function(){this.isDrag=!1}},mounted:function(){this.setInitialDimensions()}},f=h,v=(o(288),o(42)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"\n    full-height full-width\n    position-relative\n    flex-row\n    justify-content-space-between\n  ",attrs:{id:"hold-and-move"},on:{mouseup:e.onMouseUpOrClicked,mousemove:e.onMouseMove}},[o("div",{style:e.leftSidedContainerStyle},[o("video-inside-a-browser",{attrs:{customStyle:e.leftSidedInnerContainerStyle}})],1),e._v(" "),o("div",{staticClass:"full-height overflow-hidden",style:e.rightSidedContainerStyle},[o("editor",{attrs:{customStyle:e.rightSidedInnerContainerStyle}})],1),e._v(" "),o("div",{staticClass:"hold-and-move-holder",style:e.holdAndMoveHolderStyle,attrs:{id:"hold-and-move"}},[o("div",{staticClass:"line",on:{mousedown:e.onMouseDown}}),e._v(" "),o("div",{staticClass:"hold-and-move",attrs:{id:"hold-and-move"},on:{mousedown:e.onMouseDown}},[o("img",{attrs:{src:"/images/icons/slider-light.svg",draggable:"false"}}),e._v(" "),e.isDrag?e._e():o("div",{staticClass:"cover blink"})])])])}),[],!1,null,"4b6f17e5",null);t.default=component.exports;installComponents(component,{VideoInsideABrowser:o(271).default,Editor:o(272).default})},288:function(e,t,o){"use strict";o(276)},289:function(e,t,o){var n=o(73)(!1);n.push([e.i,".hold-and-move-holder[data-v-4b6f17e5]{position:absolute;top:0;height:100%;width:48px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.hold-and-move-holder .line[data-v-4b6f17e5]{position:relative;left:22px;height:100%;border-left:4px solid hsla(0,0%,100%,.09)}.hold-and-move-holder .hold-and-move[data-v-4b6f17e5]{position:absolute;top:calc(50% - 24px);left:0;height:48px;width:48px;display:flex;justify-content:center;align-items:center;background:#3f414d;border-radius:50%;cursor:col-resize;z-index:2}.hold-and-move-holder .hold-and-move img[data-v-4b6f17e5]{height:24px;width:auto;z-index:2}.hold-and-move-holder .hold-and-move .cover[data-v-4b6f17e5]{position:absolute;top:-6px;left:-6px;height:60px;width:60px;background:rgba(63,65,77,.35);border-radius:50%;z-index:1}",""]),e.exports=n}}]);