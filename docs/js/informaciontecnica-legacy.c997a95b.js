"use strict";(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[773],{2706:function(t,e,n){var o=n(8131);const c=t=>{const{touchstartX:e,touchendX:n,touchstartY:o,touchendY:c}=t,s=.5,u=16;t.offsetX=n-e,t.offsetY=c-o,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-u&&t.left(t),t.right&&n>e+u&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&c<o-u&&t.up(t),t.down&&c>o+u&&t.down(t))};function s(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function u(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),c(e)}function a(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function h(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>s(t,e),touchend:t=>u(t,e),touchmove:t=>a(t,e)}}function r(t,e,n){const c=e.value,s=c.parent?t.parentElement:t,u=c.options||{passive:!0};if(!s)return;const a=h(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[n.context._uid]=a,(0,o.XP)(a).forEach((t=>{s.addEventListener(t,a[t],u)}))}function f(t,e,n){const c=e.value.parent?t.parentElement:t;if(!c||!c._touchHandlers)return;const s=c._touchHandlers[n.context._uid];(0,o.XP)(s).forEach((t=>{c.removeEventListener(t,s[t])})),delete c._touchHandlers[n.context._uid]}const i={inserted:r,unbind:f};e["Z"]=i}}]);
//# sourceMappingURL=informaciontecnica-legacy.c997a95b.js.map