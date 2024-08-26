(function(){"use strict";var e={1511:function(e,o,t){var n=t(5130),l=t(6768),d=t(4232),i=t(6450),u=t(249),r=t(3892),a=t(4189),s=t(697),f=t(1720),c=t(3813),m=t(8477),v=t(6554),p=t(3948),b=t(8050);function k(e,o,t,n,k,h){const T=(0,l.g2)("AddTodo"),_=(0,l.g2)("TodoList");return(0,l.uX)(),(0,l.Wv)(i.E,null,{default:(0,l.k6)((()=>[(0,l.bF)(u.z,{app:"",color:"orange darken-2",dark:""},{default:(0,l.k6)((()=>[(0,l.bF)(b.s,{class:"text-h4"},{default:(0,l.k6)((()=>[(0,l.eW)("To-Do List")])),_:1}),(0,l.bF)(f.h),(0,l.bF)(p.W,{modelValue:e.search,"onUpdate:modelValue":o[0]||(o[0]=o=>e.search=o),"append-icon":"mdi-magnify",label:"Search Todo...","single-line":"","hide-details":"",filled:"",rounded:"",dense:"",class:"mt-3 mt-sm-0"},null,8,["modelValue"])])),_:1}),(0,l.bF)(m.Y,{class:"grey darken-3"},{default:(0,l.k6)((()=>[(0,l.bF)(c.I,null,{default:(0,l.k6)((()=>[(0,l.bF)(a.J,{class:"mx-auto mt-5","max-width":"800"},{default:(0,l.k6)((()=>[(0,l.bF)(s.O,null,{default:(0,l.k6)((()=>[(0,l.bF)(T,{onAddTodo:e.addTodo},null,8,["onAddTodo"]),(0,l.bF)(_,{todos:e.filteredTodos,onFinish:e.finishTodo,onUndo:e.undoTodo,onEdit:e.editTodo,onDelete:e.deleteTodo},null,8,["todos","onFinish","onUndo","onEdit","onDelete"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.bF)(v.K,{modelValue:e.showError,"onUpdate:modelValue":o[2]||(o[2]=o=>e.showError=o),color:"error",timeout:3e3},{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.errorMessage)+" ",1),(0,l.bF)(r.D,{color:"white",onClick:o[1]||(o[1]=o=>e.showError=!1)},{default:(0,l.k6)((()=>[(0,l.eW)(" Close ")])),_:1})])),_:1},8,["modelValue"])])),_:1})}t(4114);var h=t(144),T=t(1560);function _(e,o,t,d,i,u){return(0,l.uX)(),(0,l.Wv)(T.n,{onSubmit:(0,n.D$)(e.addTodo,["prevent"])},{default:(0,l.k6)((()=>[(0,l.bF)(p.W,{modelValue:e.newTodo,"onUpdate:modelValue":o[0]||(o[0]=o=>e.newTodo=o),label:"Add new todo",rules:[e=>!!e||"Todo is required"],required:"",onKeyup:(0,n.jR)(e.addTodo,["enter"])},null,8,["modelValue","rules","onKeyup"]),(0,l.bF)(r.D,{type:"submit",color:"primary"},{default:(0,l.k6)((()=>[(0,l.eW)("Add Todo")])),_:1})])),_:1},8,["onSubmit"])}var g=(0,l.pM)({emits:["add-todo"],setup(e,{emit:o}){const t=(0,h.KR)(""),n=()=>{t.value.trim()&&(o("add-todo",t.value.trim()),t.value="")};return{newTodo:t,addTodo:n}}}),F=t(1241);const y=(0,F.A)(g,[["render",_]]);var w=y,W=t(1606),E=t(7524),C=t(6756),D=t(5526),O=t(9669),x=t(9915);const j={class:"d-flex justify-end mb-3"},A={key:0,class:"text-center mt-5"},V={key:0,class:"text-center mt-5"};function L(e,o,t,n,i,u){const r=(0,l.g2)("TodoItem");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.Lk)("div",j,[(0,l.bF)(E.x,{color:"teal",label:"",small:"",class:"mr-2"},{default:(0,l.k6)((()=>[(0,l.bF)(O.w,{left:"",small:""},{default:(0,l.k6)((()=>[(0,l.eW)("mdi-clock-outline")])),_:1}),(0,l.eW)(" Updated Time ")])),_:1}),(0,l.bF)(E.x,{color:"amber",label:"",small:"",class:"mr-2"},{default:(0,l.k6)((()=>[(0,l.bF)(O.w,{left:"",small:""},{default:(0,l.k6)((()=>[(0,l.eW)("mdi-clock-outline")])),_:1}),(0,l.eW)(" Created Time ")])),_:1}),(0,l.bF)(E.x,{color:"green",label:"",small:""},{default:(0,l.k6)((()=>[(0,l.bF)(O.w,{left:"",small:""},{default:(0,l.k6)((()=>[(0,l.eW)("mdi-clock-check-outline")])),_:1}),(0,l.eW)(" Done Time ")])),_:1})]),(0,l.bF)(C.L,null,{default:(0,l.k6)((()=>[(0,l.bF)(D.B,{cols:"12",md:"6"},{default:(0,l.k6)((()=>[(0,l.bF)(a.J,null,{default:(0,l.k6)((()=>[(0,l.bF)(W.r,null,{default:(0,l.k6)((()=>[(0,l.eW)(" Unfinished To-Do: "+(0,d.v_)(e.unfinishedTodos.length),1)])),_:1}),(0,l.bF)(s.O,null,{default:(0,l.k6)((()=>[(0,l.bF)(x.x8,{"two-line":""},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.unfinishedTodos,(t=>((0,l.uX)(),(0,l.Wv)(r,{key:t.id,todo:t,onFinish:o[0]||(o[0]=o=>e.$emit("finish",o)),onEdit:o[1]||(o[1]=o=>e.$emit("edit",o)),onDelete:o[2]||(o[2]=o=>e.$emit("delete",o))},null,8,["todo"])))),128))])),_:1}),0===e.unfinishedTodos.length?((0,l.uX)(),(0,l.CE)("div",A," No unfinished todos found. ")):(0,l.Q3)("",!0)])),_:1})])),_:1})])),_:1}),(0,l.bF)(D.B,{cols:"12",md:"6"},{default:(0,l.k6)((()=>[(0,l.bF)(a.J,null,{default:(0,l.k6)((()=>[(0,l.bF)(W.r,null,{default:(0,l.k6)((()=>[(0,l.eW)(" Finished To-Do: "+(0,d.v_)(e.finishedTodos.length),1)])),_:1}),(0,l.bF)(s.O,null,{default:(0,l.k6)((()=>[(0,l.bF)(x.x8,{"two-line":""},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.finishedTodos,(t=>((0,l.uX)(),(0,l.Wv)(r,{key:t.id,todo:t,onUndo:o[3]||(o[3]=o=>e.$emit("undo",o)),onEdit:o[4]||(o[4]=o=>e.$emit("edit",o)),onDelete:o[5]||(o[5]=o=>e.$emit("delete",o))},null,8,["todo"])))),128))])),_:1}),0===e.finishedTodos.length?((0,l.uX)(),(0,l.CE)("div",V," No finished todos found. ")):(0,l.Q3)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])}var X=t(3745),U=t(1772),K=t(7254),S=t(7294),$=t(7505),M=t(3263);const I={key:0},P={key:1};function R(e,o,t,n,i,u){const f=(0,l.g2)("v-list-item-content");return(0,l.uX)(),(0,l.Wv)(K.g,null,{default:(0,l.k6)((()=>[(0,l.bF)(f,null,{default:(0,l.k6)((()=>[(0,l.bF)(S.U,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,d.v_)(e.todo.title),1)])),_:1}),(0,l.bF)($.w,null,{default:(0,l.k6)((()=>[(0,l.eW)(" Created: "+(0,d.v_)(e.formatDate(e.todo.createTime))+" ",1),e.todo.updateTime?((0,l.uX)(),(0,l.CE)("span",I," | Updated: "+(0,d.v_)(e.formatDate(e.todo.updateTime)),1)):(0,l.Q3)("",!0),e.todo.doneTime?((0,l.uX)(),(0,l.CE)("span",P," | Done: "+(0,d.v_)(e.formatDate(e.todo.doneTime)),1)):(0,l.Q3)("",!0)])),_:1})])),_:1}),(0,l.bF)(M.k,null,{default:(0,l.k6)((()=>[e.todo.finished?((0,l.uX)(),(0,l.Wv)(r.D,{key:1,onClick:o[1]||(o[1]=o=>e.$emit("undo",e.todo)),color:"warning"},{default:(0,l.k6)((()=>[(0,l.eW)(" Undo ")])),_:1})):((0,l.uX)(),(0,l.Wv)(r.D,{key:0,onClick:o[0]||(o[0]=o=>e.$emit("finish",e.todo)),color:"success"},{default:(0,l.k6)((()=>[(0,l.eW)(" Done ")])),_:1})),(0,l.bF)(r.D,{onClick:e.startEdit,color:"primary"},{default:(0,l.k6)((()=>[(0,l.eW)(" Edit ")])),_:1},8,["onClick"]),(0,l.bF)(r.D,{onClick:o[2]||(o[2]=o=>e.$emit("delete",e.todo)),color:"error"},{default:(0,l.k6)((()=>[(0,l.eW)(" Delete ")])),_:1})])),_:1}),(0,l.bF)(U.p,{modelValue:e.editDialog,"onUpdate:modelValue":o[5]||(o[5]=o=>e.editDialog=o),"max-width":"300"},{default:(0,l.k6)((()=>[(0,l.bF)(a.J,null,{default:(0,l.k6)((()=>[(0,l.bF)(W.r,null,{default:(0,l.k6)((()=>[(0,l.eW)("Edit Todo")])),_:1}),(0,l.bF)(s.O,null,{default:(0,l.k6)((()=>[(0,l.bF)(p.W,{modelValue:e.editedTitle,"onUpdate:modelValue":o[3]||(o[3]=o=>e.editedTitle=o),label:"Todo title"},null,8,["modelValue"])])),_:1}),(0,l.bF)(X.S,null,{default:(0,l.k6)((()=>[(0,l.bF)(r.D,{onClick:o[4]||(o[4]=o=>e.editDialog=!1)},{default:(0,l.k6)((()=>[(0,l.eW)("Cancel")])),_:1}),(0,l.bF)(r.D,{color:"primary",onClick:e.saveEdit},{default:(0,l.k6)((()=>[(0,l.eW)("Save")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var N=(0,l.pM)({props:{todo:{type:Object,required:!0}},emits:["finish","undo","edit","delete"],setup(e,{emit:o}){const t=(0,h.KR)(!1),n=(0,h.KR)(e.todo.title);(0,l.wB)((()=>e.todo),(e=>{console.log("Todo updated:",e),n.value=e.title}),{deep:!0});const d=e=>new Date(e).toLocaleString(),i=()=>{n.value=e.todo.title,t.value=!0},u=()=>{console.log("Saving edit:",n.value),n.value.trim()!==e.todo.title&&o("edit",e.todo,n.value.trim()),t.value=!1};return{editDialog:t,editedTitle:n,formatDate:d,startEdit:i,saveEdit:u}}});const q=(0,F.A)(N,[["render",R]]);var B=q,J=(0,l.pM)({components:{TodoItem:B},props:{todos:{type:Array,required:!0}},emits:["finish","undo","edit","delete"],setup(e){const o=(0,l.EW)((()=>e.todos.filter((e=>!e.finished)))),t=(0,l.EW)((()=>e.todos.filter((e=>e.finished))));return{unfinishedTodos:o,finishedTodos:t}}});const Q=(0,F.A)(J,[["render",L]]);var z=Q,Y=(0,l.pM)({components:{AddTodo:w,TodoList:z},setup(){const e=(0,h.KR)([]),o=(0,h.KR)(""),t=(0,h.KR)(!1),n=(0,h.KR)("");let d=1;const i=(0,l.EW)((()=>o.value?e.value.filter((e=>e.title.toLowerCase().includes(o.value.toLowerCase()))):e.value)),u=o=>e.value.some((e=>e.title.toLowerCase()===o.toLowerCase())),r=e=>{n.value=e,t.value=!0},a=o=>{u(o)?r("This todo already exists!"):e.value.push({id:d++,title:o,description:null,finished:!1,createTime:new Date,updateTime:null,doneTime:null})},s=o=>{const t=e.value.findIndex((e=>e.id===o.id));-1!==t&&(e.value[t]={...e.value[t],finished:!0,doneTime:new Date})},f=o=>{const t=e.value.findIndex((e=>e.id===o.id));-1!==t&&(e.value[t]={...e.value[t],finished:!1,doneTime:null})},c=(o,t)=>{if(o.title.toLowerCase()!==t.toLowerCase()&&u(t))return void r("This todo already exists!");const n=e.value.findIndex((e=>e.id===o.id));-1!==n&&(e.value[n]={...e.value[n],title:t,updateTime:new Date})},m=o=>{const t=e.value.findIndex((e=>e.id===o.id));-1!==t&&e.value.splice(t,1)};return{todos:e,filteredTodos:i,search:o,showError:t,errorMessage:n,addTodo:a,finishTodo:s,undoTodo:f,editTodo:c,deleteTodo:m}}});const G=(0,F.A)(Y,[["render",k]]);var H=G,Z=(t(5524),t(7768)),ee=t(8805),oe=t(5741);const te=(0,Z.$N)({components:ee,directives:oe});var ne=te;async function le(){const e=await t.e(53).then(t.t.bind(t,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}le(),(0,n.Ef)(H).use(ne).mount("#app")}},o={};function t(n){var l=o[n];if(void 0!==l)return l.exports;var d=o[n]={exports:{}};return e[n].call(d.exports,d,d.exports,t),d.exports}t.m=e,function(){var e=[];t.O=function(o,n,l,d){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],l=e[s][1],d=e[s][2];for(var u=!0,r=0;r<n.length;r++)(!1&d||i>=d)&&Object.keys(t.O).every((function(e){return t.O[e](n[r])}))?n.splice(r--,1):(u=!1,d<i&&(i=d));if(u){e.splice(s--,1);var a=l();void 0!==a&&(o=a)}}return o}d=d||0;for(var s=e.length;s>0&&e[s-1][2]>d;s--)e[s]=e[s-1];e[s]=[n,l,d]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){var e,o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(n,l){if(1&l&&(n=this(n)),8&l)return n;if("object"===typeof n&&n){if(4&l&&n.__esModule)return n;if(16&l&&"function"===typeof n.then)return n}var d=Object.create(null);t.r(d);var i={};e=e||[null,o({}),o([]),o(o)];for(var u=2&l&&n;"object"==typeof u&&!~e.indexOf(u);u=o(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return n[e]}}));return i["default"]=function(){return n},t.d(d,i),d}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,n){return t.f[n](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/webfontloader.fab4e4ef.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="vue-todo:";t.l=function(n,l,d,i){if(e[n])e[n].push(l);else{var u,r;if(void 0!==d)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var f=a[s];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==o+d){u=f;break}}u||(r=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",o+d),u.src=n),e[n]=[l];var c=function(o,t){u.onerror=u.onload=null,clearTimeout(m);var l=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),l&&l.forEach((function(e){return e(t)})),o)return o(t)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=c.bind(null,u.onerror),u.onload=c.bind(null,u.onload),r&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vue-todo/"}(),function(){var e={524:0};t.f.j=function(o,n){var l=t.o(e,o)?e[o]:void 0;if(0!==l)if(l)n.push(l[2]);else{var d=new Promise((function(t,n){l=e[o]=[t,n]}));n.push(l[2]=d);var i=t.p+t.u(o),u=new Error,r=function(n){if(t.o(e,o)&&(l=e[o],0!==l&&(e[o]=void 0),l)){var d=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+o+" failed.\n("+d+": "+i+")",u.name="ChunkLoadError",u.type=d,u.request=i,l[1](u)}};t.l(i,r,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,n){var l,d,i=n[0],u=n[1],r=n[2],a=0;if(i.some((function(o){return 0!==e[o]}))){for(l in u)t.o(u,l)&&(t.m[l]=u[l]);if(r)var s=r(t)}for(o&&o(n);a<i.length;a++)d=i[a],t.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return t.O(s)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(1511)}));n=t.O(n)})();
//# sourceMappingURL=app.6fe557be.js.map