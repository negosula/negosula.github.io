import{_ as le}from"./CVlWhlP0.js";import{b as ce,_ as ie}from"./D2_s2DUC.js";import{_ as ue,r as c,j as w,o as de,f as ge,v as _,x as d,y as v,L as B,M as D,z as I,t as y,C as fe,D as me}from"./TnHzEM6Z.js";const pe=[{title:"Space Exploration",answers:["Space exploration has led to numerous technological advancements.","Astronauts undergo rigorous training before their missions.","Mars is often considered the next frontier for human exploration.","The International Space Station serves as a hub for scientific research.","The Hubble Space Telescope has provided invaluable data about our universe.","Private companies are increasingly involved in space missions.","Long-duration space missions pose significant challenges for human health.","Robotic missions have successfully landed on various celestial bodies.","Space probes have sent back detailed images of distant planets.","Colonizing other planets could ensure the survival of humanity."],correctAnswers:[0,2,3,5,6,7,8,9]},{title:"Solar System",answers:["Jupiter is the largest planet in our solar system.","Saturn is known for its prominent ring system.","The Sun accounts for about 99.86% of the mass in the solar system.","Mars has the tallest volcano in the solar system, Olympus Mons.","The Kuiper Belt is home to dwarf planets like Pluto.","Venus is often referred to as Earth's twin because of its similar size.","Neptune was the first planet to be predicted by mathematics before its discovery.","Mercury is the closest planet to the Sun.","Uranus rotates on its side, making it unique among the planets.","The asteroid belt lies between the orbits of Mars and Jupiter."],correctAnswers:[0,2,3,4,5,7,8,9]},{title:"Galaxies",answers:["The Milky Way is the galaxy that contains our solar system.","Andromeda is the closest spiral galaxy to the Milky Way.","Elliptical galaxies are more common in older galaxy clusters.","Galaxies can contain billions of stars.","The center of the Milky Way is believed to contain a supermassive black hole.","Dwarf galaxies often orbit larger galaxies.","Galaxy collisions can trigger new star formation.","Spiral galaxies have well-defined arms.","The observable universe contains over two trillion galaxies.","Galaxies are classified based on their shape."],correctAnswers:[0,1,3,4,5,6,7,9]},{title:"Space Technology",answers:["Satellites are crucial for modern communication systems.","The development of space technology has led to advancements in materials science.","GPS relies on a network of satellites orbiting the Earth.","Space telescopes can observe the universe without atmospheric distortion.","Reusable rockets have reduced the cost of space travel.","Space suits protect astronauts from the harsh environment of space.","Ion propulsion is used for long-duration space missions.","The James Webb Space Telescope is expected to replace the Hubble Space Telescope.","Space technology has applications in disaster management on Earth.","Solar panels are commonly used to power spacecraft."],correctAnswers:[0,2,3,4,5,7,8,9]}],ve={data:pe},he=A=>(fe("data-v-62cc1605"),A=A(),me(),A),be={class:"center-page"},we={class:"counters"},_e={class:"question-counter"},ye={class:"streak-counter"},Ae={class:"canvas"},Se={class:"box",id:"box1"},Le={class:"paragraph-key"},Ee=["id","onDrop","onClick"],ke={class:"box",id:"box2"},Me=he(()=>d("h2",null,"Sentences",-1)),xe=["id","onClick","onDragstart"],Te={__name:"sequence_memorization_i",setup(A){const r=ce();c(8);const C=c(10),m=c(ve.data),i=c(0),S=c(Array(8).fill(null)),u=c(Array(8).fill(null));c(new Map(Array.from({length:8},(t,e)=>[e,null])));const p=c(new Map(Array.from({length:8},(t,e)=>[e,String(e)]))),h=c(Array.from({length:8},(t,e)=>`-- ${e+1} --`)),f=c([]),N=c(!0),L=c(0),k=c(0),M=w(()=>r.get_screenSizeIndex),$=w(()=>r.get_randomMode),O=w(()=>r.get_minefieldMode),Q=w(()=>r.get_areAnswersShown),l=w(()=>m.value[i.value]);de(()=>{r.set_sub1SelectionName("m1"),f.value=E(),b()}),ge(()=>{});function V(){return document.getElementsByClassName("answer-true").length===l.value.correctAnswers.length}function q(){V()&&!r.get_areAnswersShown?L.value++:L.value=0}function E(){return Array.from({length:m.value.length},(t,e)=>e)}function x(){l.value.answers.forEach((t,e)=>{const s=document.getElementById(`sentence${e+1}`);s&&(s.classList.remove("draggable-disabled"),s.setAttribute("draggable","true"))})}function z(){h.value.forEach((t,e)=>{const s=document.getElementById(`drop${e+1}`);s&&(s.classList.remove("dropslot-occupied","answer-true","answer-false"),s.classList.add("dropslot","no-wrap"),s.innerHTML=t)})}function J(){document.getElementsByClassName("answer-true").length!=l.value.correctAnswers.length?(x(),l.value.answers.forEach((s,o)=>{const a=document.getElementById(`drop${o+1}`);if(!a)return;u.value.set(o,p.value.get(o)),a.classList.remove("dropslot"),a.classList.remove("no-wrap"),a.classList.add("dropslot-occupied"),a.classList.add("answer-true"),a.classList.remove("answer-false"),a.innerText=l.value.answers[p.value.get(o)];const n=document.getElementById(`sentence${p.value.get(o)+1}`);n.classList.add("draggable-disabled"),n.setAttribute("draggable","false"),r.set_areAnswersShown(!0)})):(x(),u.value=new Map(Array.from({length:6},(s,o)=>[o,null])),z(),r.set_areAnswersShown(!1))}function P(t,e){const s=t.indexOf(e);return s!==-1&&t.splice(s,1),t}function G(){const s=document.getElementById("box1").getElementsByClassName("answer-true").length,o=l.value.correctAnswers.length;s==o&&!Q.value&&(f.value=P(f.value,i.value),f.value.length<=1&&(f.value=E()))}function F(){G();let t,e;do t=Math.floor(Math.random()*f.value.length),e=f.value[t];while(e===i.value);m.value[e]&&(i.value=e),b()}function H(t,e){if(e&&e.type==="application/json"){const s=new FileReader;s.onload=o=>{try{const a=JSON.parse(o.target.result);m.value=a.data,i.value=0,f.value=E(),b(),R(!1)}catch(a){console.error("Invalid JSON format:",a)}},s.readAsText(e)}else alert("Please upload a valid JSON file.")}function R(t=null){M.value>1&&(t?r.set_isOverlayVisible(t):r.set_isOverlayVisible(!r.get_isOverlayVisible)),M.value<2&&(typeof t=="boolean"?r.set_isSettingsVisible(t):r.set_isSettingsVisible(!r.get_isSettingsVisible))}function U(t,e){t.dataTransfer.setData("text/plain",e)}function W(t){t.preventDefault()}function j(t){t&&(t.classList.remove("draggable-disabled"),t.setAttribute("draggable",!0))}function T(t,e){if(u.value.get(e)){const n=u.value.get(e),g=document.getElementById(`sentence${Number(n)+1}`);j(g)}const s=document.getElementById(`sentence${Number(t)+1}`);if(!s)return;const o=s.innerText;if(s.getAttribute("draggable")!="true")return;s.classList.add("draggable-disabled"),s.setAttribute("draggable","false");const a=document.getElementById(`drop${e+1}`);a&&(a.classList.add("dropslot-occupied"),a.classList.remove("dropslot","no-wrap"),a.classList.remove("answer-true","answer-false"),a.innerHTML=o,u.value.set(e,t),O.value&&(p.value.get(e)===Number(u.value.get(e))?a.classList.add("answer-true"):a.classList.add("answer-false")))}function K(t,e){t.preventDefault();const s=Number(e)+1;if(document.getElementById(`sentence${s}`).getAttribute("draggable")==="true")for(let a=0;a<l.value.correctAnswers.length;a++){const n=document.getElementById(`drop${a+1}`);if(n){if(n.classList.contains("dropslot-occupied"))continue;T(e,a);break}}}function X(t,e){t.preventDefault();const s=t.dataTransfer.getData("text/plain");T(s,e)}function Y(t,e){const s=t.currentTarget;if(u.value.get(e)!=null){s.innerText=h.value[e],s.classList.add("dropslot"),s.classList.add("no-wrap"),s.classList.remove("dropslot-occupied"),s.classList.remove("answer-true"),s.classList.remove("answer-false");const o=Number(u.value.get(e))+1;u.value[e]=null,S.value[e]=h.value[e];const a=document.getElementById(`sentence${o}`);a&&(a.classList.remove("draggable-disabled"),a.setAttribute("draggable","true"))}}function Z(){for(let[t,e]of u.value){const s=document.getElementById(`drop${t+1}`);if(!s)return;p.value.get(t)==e?s.classList.add("answer-true"):s.classList.add("answer-false")}}function ee(){l.value.correctAnswers.forEach((t,e)=>{p.value.set(e,t)})}function te(){$.value?F():i.value<m.value.length-1&&(i.value++,b()),k.value+=1}function se(){i.value>0?i.value--:i.value=m.value.length-1,b()}function ae(){S.value=Array(6).fill(null),u.value=new Map(Array.from({length:6},(t,e)=>[e,null]))}function ne(){for(let t=0;t<C.value;t++){const e=document.getElementById(`drop${t+1}`);e&&(e.innerText=h.value[t],e.classList.remove("answer-true"),e.classList.remove("answer-false"),e.classList.add("dropslot"),e.classList.remove("dropslot-occupied"));const s=document.getElementById(`sentence${t+1}`);s&&(s.classList.remove("draggable-disabled"),s.setAttribute("draggable","true"))}}function b(){q();const t=m.value[i.value];if(ae(),ne(),t){if(N.value){const e=oe(t.answers);l.value.answers=e}r.set_areAnswersShown(!1),ee()}}function oe(t){const e=t.map((a,n)=>n);for(let a=e.length-1;a>0;a--){const n=Math.floor(Math.random()*(a+1));[e[a],e[n]]=[e[n],e[a]]}const s=e.map(a=>t[a]),o=new Array(t.length);e.forEach((a,n)=>{o[a]=n});for(let a=0;a<l.value.correctAnswers.length;a++)for(let n=0;n<o.length;n++)if(l.value.correctAnswers[a]==n){l.value.correctAnswers[a]=o[n];break}return s}function re(t){return"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[t]||t}return(t,e)=>{const s=le,o=ie;return y(),_("div",be,[d("div",we,[d("div",_e,v(k.value),1),d("div",ye,v(L.value),1)]),d("div",Ae,[d("div",Se,[d("h2",null,v(l.value.title),1),(y(!0),_(B,null,D(l.value.correctAnswers,(a,n)=>(y(),_("div",{key:"paragraph"+n},[d("p",null,[d("span",Le,v(re(n)),1),d("span",{id:"drop"+(n+1),class:"dropslot no-wrap",onDragover:W,onDrop:g=>X(g,n),onClick:g=>Y(g,n)},v(S.value[n]||h.value[n]),41,Ee)])]))),128))]),d("div",ke,[Me,(y(!0),_(B,null,D(l.value.answers,(a,n)=>(y(),_("div",{key:"sentence"+n,id:"sentence"+(n+1),class:"draggable",draggable:"true",onClick:g=>K(g,n),onDragstart:g=>U(g,n)},v(a),41,xe))),128))])]),I(s,{onE_showCorrectAnswers:J,onE_checkAnswers:Z,onE_nextQuestion:te,onE_prevQuestion:se}),I(o,{onFileUploaded:H})])}}},Ce=ue(Te,[["__scopeId","data-v-62cc1605"]]);export{Ce as default};
