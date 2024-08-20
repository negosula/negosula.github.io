import{b as R,s as V}from"./DUDUH2d1.js";import{_ as I,j as c,o as z,f as E,t as n,v as i,x as s,N as d,B as M,y as C,O as S,C as $,D as j}from"./B5x6psWs.js";const r=k=>($("data-v-13b05460"),k=k(),j(),k),H={class:"keyboard-shortcuts"},Q={key:0},L={key:1,class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},N=r(()=>s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"},null,-1)),O=[N],T={class:"keyboard-key-desc"},Z={key:0},D={key:1,class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},P=r(()=>s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"},null,-1)),U=[P],q={class:"keyboard-key-desc"},F={class:"keyboard-key-block"},G={key:0},J={key:1,class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},W=r(()=>s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"},null,-1)),X=[W],Y={class:"keyboard-key-desc"},ee={key:0},se={key:1},te={class:"keyboard-key-block"},oe={key:0},ne={key:1,class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 24 24"},ie=r(()=>s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18 5V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5M9 3v4a1 1 0 0 1-1 1H4m11.383.772 2.745 2.746m1.215-3.906a2.089 2.089 0 0 1 0 2.953l-6.65 6.646L9 17.95l.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"},null,-1)),de=[ie],ae=r(()=>s("div",{class:"keyboard-key-desc"},"Check answers",-1)),re={class:"keyboard-key-block"},le={key:0},ce={key:1,class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},ke=r(()=>s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m9 5 7 7-7 7"},null,-1)),_e=[ke],ye=r(()=>s("div",{class:"keyboard-key-desc"},"Prev",-1)),he={class:"keyboard-key-block"},ue={key:0},ve={key:1,class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},we=r(()=>s("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m9 5 7 7-7 7"},null,-1)),me=[we],ge=r(()=>s("div",{class:"keyboard-key-desc"},"next",-1)),pe={key:0,class:"keyboard-key-block"},be=r(()=>s("div",{class:"keyboard-key-desc"},"settings",-1)),fe={__name:"BlackboardShortcuts",emits:["e_toggleRandomMode","e_toggleMinefieldMode","e_showCorrectAnswers","e_checkAnswers","e_nextQuestion","e_prevQuestion"],setup(k,{emit:A}){const e=R(),_=A,o=c(()=>e.get_screenSizeIndex),y=c(()=>e.get_randomMode),B=c(()=>e.get_displayRandomKey),h=c(()=>e.get_minefieldMode),K=c(()=>e.get_displayMinefieldKey),u=c(()=>e.get_areAnswersShown);V(),z(()=>{o.value<2&&(e.set_displayMinefieldKey(!1),e.set_displayRandomKey(!1)),window.addEventListener("keydown",x)}),E(()=>{window.removeEventListener("keydown",x)});const v=()=>{o.value>1&&e.set_isOverlayVisible(!e.get_isOverlayVisible),!e.get_isOverlayVisible&&o.value<2&&(e.set_isSettingsVisible(!1),e.set_sub1SelectionName(""))},w=(t=null)=>{t||t==!1?e.set_minefieldMode(t):e.set_minefieldMode(!e.get_minefieldMode),e.get_minefieldMode&&e.screenSizeIndex<2?e.set_displayMinefieldKey(!1):e.set_displayMinefieldKey(!0)},m=(t=null)=>{t||t==!1?e.set_randomMode(t):e.set_randomMode(!e.get_randomMode),e.get_randomMode&&e.screenSizeIndex<2?e.set_displayRandomKey(!1):e.set_displayRandomKey(!0)},g=()=>{_("e_showCorrectAnswers")},p=()=>{_("e_checkAnswers")},b=()=>{_("e_nextQuestion")},f=()=>{_("e_prevQuestion")},x=t=>{e.get_screenSizeIndex<2||(t.key==="Enter"?p():t.key==="ArrowRight"?b():t.key==="ArrowLeft"?f():t.key==="Escape"?v():t.key==="r"||t.key==="R"?m():t.key==="t"||t.key==="T"?g():(t.key==="m"||t.key==="M")&&w())};return(t,a)=>(n(),i("div",H,[s("div",{class:S({"keyboard-key-block":K.value,"keyboard-key-block-active":h.value&&o.value<2})},[s("div",{class:"keyboard-key",onClick:a[0]||(a[0]=l=>w())},[o.value>1?(n(),i("span",Q,"M")):d("",!0),o.value<2?(n(),i("svg",L,O)):d("",!0)]),s("div",T,[M("minefield mode : "),s("strong",null,C(h.value),1)])],2),s("div",{class:S({"keyboard-key-block":B.value,"keyboard-key-block-active":y.value&&o.value<2})},[s("div",{class:"keyboard-key",onClick:a[1]||(a[1]=l=>m())},[o.value>1?(n(),i("span",Z,"R")):d("",!0),o.value<2?(n(),i("svg",D,U)):d("",!0)]),s("div",q,[M("random mode : "),s("strong",null,C(y.value),1)])],2),s("div",F,[s("div",{class:"keyboard-key",onClick:a[2]||(a[2]=l=>g())},[o.value>1?(n(),i("span",G,"T")):d("",!0),o.value<2?(n(),i("svg",J,X)):d("",!0)]),s("div",Y,[u.value?d("",!0):(n(),i("span",ee,"show answers")),u.value?(n(),i("span",se,"hide answers")):d("",!0)])]),s("div",te,[s("div",{class:"keyboard-key",onClick:a[3]||(a[3]=l=>p())},[o.value>1?(n(),i("span",oe,"Enter")):d("",!0),o.value<2?(n(),i("svg",ne,de)):d("",!0)]),ae]),s("div",re,[s("div",{class:"keyboard-key reverse",onClick:a[4]||(a[4]=l=>f())},[o.value>1?(n(),i("span",le,"➜")):d("",!0),o.value<2?(n(),i("svg",ce,_e)):d("",!0)]),ye]),s("div",he,[s("div",{class:"keyboard-key",onClick:a[5]||(a[5]=l=>b())},[o.value>1?(n(),i("span",ue,"➜")):d("",!0),o.value<2?(n(),i("svg",ve,me)):d("",!0)]),ge]),o.value>1?(n(),i("div",pe,[s("div",{class:"keyboard-key",onClick:a[6]||(a[6]=l=>v())},"ESC"),be])):d("",!0)]))}},Ce=I(fe,[["__scopeId","data-v-13b05460"]]);export{Ce as _};
