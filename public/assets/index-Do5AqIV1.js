(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerPolicy&&(e.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?e.credentials="include":s.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(s){if(s.ep)return;s.ep=!0;const e=t(s);fetch(s.href,e)}})();const j=30,w=10,x=["🐠","🐡","🐟"],P="🦑",E="🦥",h=document.getElementById("aquarium"),m=[];function L(){if(!h){console.error("Aquarium element not found!");return}const o=h.offsetWidth,n=h.offsetHeight;for(let t=0;t<j;t++)p("fish",o,n);for(let t=0;t<w;t++)p("jellyfish",o,n);p("sloth",o,n),setTimeout(()=>{A()},100)}function p(o,n,t){if(!h)return;const i=document.createElement("div");i.classList.add("creature");let s,e,l,f,y,d=1;switch(o){case"fish":i.classList.add("fish"),y=x[Math.floor(Math.random()*x.length)],s=Math.random()*(n*.8)+n*.1,e=Math.random()*(t*.8)+t*.1;const a=Math.random()*1.5+.5,M=Math.random()*2*Math.PI;l=Math.cos(M)*a,f=Math.sin(M)*a,d=l>0?1:-1;break;case"jellyfish":i.classList.add("jellyfish"),y=P,s=Math.random()*(n*.6)+n*.2,e=Math.random()*(t*.4)+t*.1;const g=Math.random()*.6+.2,c=Math.random()*Math.PI+Math.PI/2;l=Math.cos(c)*g*.5,f=Math.sin(c)*g,d=l>0?1:-1;break;case"sloth":i.classList.add("sloth"),y=E,s=Math.random()<.5?n*.1:n*.7,e=t*.05,l=Math.random()<.8?.5:-.5,f=.05,d=l>0?1:-1;break}i.textContent=y,i.style.left=`${s}px`,i.style.top=`${e}px`,i.style.transform=`scaleX(${d})`,h.appendChild(i),m.push({element:i,x:s,y:e,dx:l,dy:f,width:0,height:0,type:o,bobbingPhase:o==="jellyfish"?Math.random()*Math.PI*2:void 0})}function A(){m.forEach(o=>{o.width=o.element.offsetWidth||(o.type==="sloth"?60:30),o.height=o.element.offsetHeight||(o.type==="sloth"?60:30)}),console.log("Creature sizes updated:",m.map(o=>({type:o.type,w:o.width,h:o.height})))}function b(){if(!h)return;const o=h.offsetWidth,n=h.offsetHeight;m.forEach(t=>{let i=0;t.type==="jellyfish"&&t.bobbingPhase!==void 0&&(i=Math.sin(Date.now()*.002+t.bobbingPhase)*.3),t.type==="sloth"?(t.x+=t.dx*.5,t.y+=t.dy*.5):(t.x+=t.dx,t.y+=t.dy+i);let s=!1,e=t.type==="sloth"?.5:1;t.x<=0?(t.x=0,t.dx=Math.abs(t.dx)*e,s=!0):t.width>0&&t.x+t.width>=o&&(t.x=o-t.width,t.dx=-Math.abs(t.dx)*e,s=!0),t.y<=0?(t.y=0,t.dy=Math.abs(t.dy)*e,t.type==="jellyfish"&&(t.dy*=.5)):t.height>0&&t.y+t.height>=n&&(t.y=n-t.height,t.dy=-Math.abs(t.dy)*e,t.type==="jellyfish"&&(t.dy*=.5)),t.element.style.left=`${t.x}px`,t.element.style.top=`${t.y}px`,s&&(t.element.style.transform=`scaleX(${t.dx>0?1:-1})`);const l=t.type==="sloth"?.001:.01;if(Math.random()<l){const f=(Math.random()-.5)*(t.type==="sloth"?.1:.5),d=Math.atan2(t.dy,t.dx)+f,a=t.type==="sloth"?.15:t.type==="jellyfish"?.4:1;t.dx=Math.cos(d)*a*(t.dx>0?1:-1)*(t.type==="sloth"?.5:1),t.dy=Math.sin(d)*a*(t.type==="sloth"?.5:1)*(t.type==="jellyfish"?.7:1),Math.cos(d)*(t.dx>0?1:-1)<0&&(s=!0)}}),requestAnimationFrame(b)}h?window.addEventListener("load",()=>{L(),b()}):console.error("Initialization failed: Aquarium element not found in the DOM.");
