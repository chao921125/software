import{A as d,C as l,o as _,e as u,s as g,v as y,f as v}from"./vendor.b99b632f.js";import{_ as h}from"./index.8bb5b140.js";const f=n=>(g("data-v-e4d48974"),n=n(),y(),n),C={class:"map__x"},S=f(()=>v("div",{id:"map_container"},null,-1)),b=[S],w={setup(n){const i=d();function c(){const t=mapv.utilCityCenter.getCenterByCityName("\u4E0A\u6D77");return initMap({tilt:0,center:[t.lng,t.lat],zoom:10,style:snowStyle})}function p(){let t=[],e=700;const o=["\u5317\u4EAC","\u5929\u6D25","\u4E0A\u6D77","\u91CD\u5E86","\u77F3\u5BB6\u5E84","\u592A\u539F","\u547C\u548C\u6D69\u7279","\u54C8\u5C14\u6EE8","\u957F\u6625","\u6C88\u9633","\u6D4E\u5357","\u5357\u4EAC","\u5408\u80A5","\u676D\u5DDE","\u5357\u660C","\u798F\u5DDE","\u90D1\u5DDE","\u6B66\u6C49","\u957F\u6C99","\u5E7F\u5DDE","\u5357\u5B81","\u897F\u5B89","\u94F6\u5DDD","\u5170\u5DDE","\u897F\u5B81","\u4E4C\u9C81\u6728\u9F50","\u6210\u90FD","\u8D35\u9633","\u6606\u660E","\u62C9\u8428","\u6D77\u53E3"];for(;e--;){const a=mapv.utilCityCenter.getCenterByCityName(o[parseInt(Math.random()*o.length)]);t.push({geometry:{type:"Point",coordinates:[a.lng-2+Math.random()*4,a.lat-2+Math.random()*4]},properties:{sales:Math.random()*100}})}return t=t.filter(a=>a.properties.sales>90),t}function m(t,e){const o=new mapvgl.View({map:t}),a=new mapvgl.Intensity({min:0,max:100,mixSize:5,maxSize:30,gradient:{0:"rgba(25, 66, 102, 0.8)",.3:"rgba(145, 102, 192, 0.8)",.7:"rgba(210, 131, 137, 0.8)",1:"rgba(248, 177, 149, 0.8)"}}),s=new mapvgl.PointLayer({size:function(r){return a.getSize(r.properties.sales)},color:function(r){return a.getColor(r.properties.sales)}});o.addLayer(s),s.setData(e)}return l(()=>{const t=c(),e=p();m(t,e),i.commit("setComponentPath","src/views/BaiduMap/Basic/pages/ScatterDiagram/ScatterDiagram.vue")}),(t,e)=>(_(),u("div",C,b))}};var M=h(w,[["__scopeId","data-v-e4d48974"]]);export{M as default};
