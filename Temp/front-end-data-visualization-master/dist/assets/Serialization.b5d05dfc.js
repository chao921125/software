import{A as b,C as p,o as g,e as w,f as a,s as C,v as x}from"./vendor.b99b632f.js";import{f as n}from"./fabric.49791ffe.js";import{_ as S}from"./index.8bb5b140.js";const e=c=>(C("data-v-3196b7ea"),c=c(),x(),c),m={class:"box"},k=e(()=>a("div",{class:"canvas_x"},[a("div",null,"1\u3001\u7A7A\u753B\u5E03"),a("canvas",{width:"200",height:"200",id:"canvas1",style:{border:"1px solid #ccc"}})],-1)),y=e(()=>a("div",{class:"canvas_x"},[a("div",null,"2\u3001\u6709\u80CC\u666F\u8272\u7684\u753B\u5E03"),a("canvas",{width:"200",height:"200",id:"canvas2",style:{border:"1px solid #ccc"}})],-1)),O=e(()=>a("div",{class:"canvas_x"},[a("div",null,"3\u3001\u6709\u56FE\u6848\u7684 toJSON"),a("canvas",{width:"200",height:"200",id:"canvas3",style:{border:"1px solid #ccc"}})],-1)),J=e(()=>a("div",{class:"canvas_x"},[a("div",null,"4\u3001\u6709\u56FE\u6848\u7684 toObject"),a("canvas",{width:"200",height:"200",id:"canvas4",style:{border:"1px solid #ccc"}})],-1)),N=e(()=>a("div",null,"5\u3001\u8F93\u51FAbase64 - png",-1)),R=e(()=>a("canvas",{width:"200",height:"200",id:"canvas5",style:{border:"1px solid #ccc"}},null,-1)),j=e(()=>a("div",null,"6\u3001toSVG",-1)),V=e(()=>a("canvas",{width:"200",height:"200",id:"canvas6",style:{border:"1px solid #ccc"}},null,-1)),z={setup(c){const s=b();function l(){let t=new n.fabric.Canvas("canvas1");console.log("canvas1",JSON.stringify(t)),console.log("canvas1",t.toJSON())}function d(){let t=new n.fabric.Canvas("canvas2",{backgroundColor:"#ddd"});console.log("canvas2: ",t.toJSON())}function r(){let t=new n.fabric.Canvas("canvas3",{backgroundColor:"#ddd"});t.add(new n.fabric.Rect({left:50,top:50,height:20,width:20,fill:"green"})),t.add(new n.fabric.Circle({left:80,top:80,radius:40,fill:"red"})),console.log("canvas3",t.toJSON())}function v(){let t=new n.fabric.Canvas("canvas4",{backgroundColor:"#ddd"});t.add(new n.fabric.Rect({left:50,top:50,height:20,width:20,fill:"green"})),t.add(new n.fabric.Circle({left:80,top:80,radius:40,fill:"red"})),console.log("canvas4",t.toObject())}let o=null;function f(){o=new n.fabric.Canvas("canvas5",{backgroundColor:"#a5dee5"}),o.add(new n.fabric.Rect({left:50,top:50,height:20,width:20,fill:"green"})),o.add(new n.fabric.Circle({left:80,top:80,radius:40,fill:"red"}))}function _(){console.log("toPng",o.toDataURL("png"))}let i=null;function h(){i=new n.fabric.Canvas("canvas6",{backgroundColor:"#a5dee5"}),i.add(new n.fabric.Rect({left:50,top:50,height:20,width:20,fill:"green"})),i.add(new n.fabric.Circle({left:80,top:80,radius:40,fill:"red"}))}function u(){console.log(i.toSVG())}return p(()=>{s.commit("setComponentPath","src/views/FabricJS/Basic/pages/Serialization/Serialization.vue"),l(),d(),r(),v(),f(),h()}),(t,B)=>(g(),w("div",m,[k,y,O,J,a("div",{class:"canvas_x"},[N,R,a("div",null,[a("button",{onClick:_},"toDataURL('png')")])]),a("div",{class:"canvas_x"},[j,V,a("div",null,[a("button",{onClick:u},"toSVG")])])]))}};var D=S(z,[["__scopeId","data-v-3196b7ea"]]);export{D as default};
