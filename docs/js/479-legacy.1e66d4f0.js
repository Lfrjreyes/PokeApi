"use strict";(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[479],{4479:function(r,n,t){t.d(n,{C1:function(){return h},Do:function(){return u},Fp:function(){return c},VV:function(){return g}});
/**
  * vee-validate v3.4.14
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
var e=function(r,n){var t=(void 0===n?{}:n).multiple,e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t&&!Array.isArray(r)&&(r=String(r).split(",").map((function(r){return r.trim()}))),Array.isArray(r)?r.every((function(r){return e.test(String(r))})):e.test(String(r))},a=[{name:"multiple",default:!1}],u={validate:e,params:a};function i(r){return null===r||void 0===r}function l(r){return Array.isArray(r)&&0===r.length}var o=function(r,n){var t=n.length;return i(r)?t>=0:Array.isArray(r)?r.every((function(r){return o(r,{length:t})})):String(r).length<=t},s=[{name:"length",cast:function(r){return Number(r)}}],c={validate:o,params:s},f=function(r,n){var t=n.length;return!i(r)&&(Array.isArray(r)?r.every((function(r){return f(r,{length:t})})):String(r).length>=t)},v=[{name:"length",cast:function(r){return Number(r)}}],g={validate:f,params:v},m=function(r,n){var t=(void 0===n?{allowFalse:!0}:n).allowFalse,e={valid:!1,required:!0};return i(r)||l(r)?e:!1!==r||t?(e.valid=!!String(r).trim().length,e):e},y=!0,d=[{name:"allowFalse",default:!0}],h={validate:m,params:d,computesRequired:y}}}]);
//# sourceMappingURL=479-legacy.1e66d4f0.js.map