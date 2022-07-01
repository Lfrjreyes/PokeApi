"use strict";(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[535],{6197:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;return[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[i("v-card",{staticStyle:{background:"white",height:"100vh"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticStyle:{background:"white",height:"25vh"}})],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"6 container"}},[i("br"),i("h1",[t._v("Iniciar sesión")]),i("br"),i("label",{staticStyle:{"font-weight":"bold"}},[t._v("Correo electrónico :")]),i("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[i("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[i("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[i("v-text-field",{attrs:{"error-messages":s,label:"Ingrese correo electrónico",clearable:"",outlined:"",dense:"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})]}}],null,!0)}),i("label",{staticStyle:{"font-weight":"bold"}},[t._v("Contraseña :")]),i("validation-provider",{attrs:{name:"Password",rules:"required|min:10"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[i("v-text-field",{attrs:{type:"Password","error-messages":s,label:"Ingrese la contraseña",clearable:"",outlined:"",dense:"",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})]}}],null,!0)}),i("v-btn",{staticClass:"mr-4",staticStyle:{color:"#E5F0F4",width:"100%"},attrs:{type:"submit","x-large":"",color:"#002F6C",to:"/menu",disabled:s}},[t._v(" Iniciar sesión ")])],1)]}}],null,!0)})],1)],1),i("v-row",{attrs:{"no-gutters":""}})],1)],1),i("v-col",{attrs:{cols:"12 container",sm:"6",md:"6",fluid:"","fill-height":""}},[i("v-card",{staticStyle:{background:"#002F6C",height:"100vh"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticStyle:{background:"#002F6C",height:"25vh"}})],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"6 container"}},[i("v-img",{attrs:{src:s(6949)}})],1)],1),i("v-row",{attrs:{"no-gutters":""}})],1)],1)],1)]}}])})],1)},r=[],a=s(4479),n=s(2954);(0,n.UF)("eager"),(0,n.l7)("required",{...a.C1,message:"Campo no puede ir vacío"}),(0,n.l7)("min",{...a.VV,message:"La contraseña debe ser de mínimo {length} caracteres"}),(0,n.l7)("email",{...a.Do,message:"Correo electronico no es valido"});var o={name:"LoginComponent",components:{ValidationProvider:n.d_,ValidationObserver:n._j},data(){return{password:"",email:""}},methods:{submit(){this.$refs.observer.validate()}}},c=o,l=s(3736),d=s(3453),h=s.n(d),u=s(6847),m=s(2026),g=s(7024),v=s(5288),p=s(7894),S=s(2660),f=(0,l.Z)(c,i,r,!1,null,"6c2451ae",null),b=f.exports;h()(f,{VBtn:u.Z,VCard:m.Z,VCol:g.Z,VImg:v.Z,VRow:p.Z,VTextField:S.Z})},5288:function(t,e,s){s.d(e,{Z:function(){return u}});var i=s(7006),r=s(9548),a=s(5530),n=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=n,c=s(2066),l=s(7559),d=s(8219);const h="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,a.Z)(o,c.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!h||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){if(this.$slots.placeholder){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(t){const e=o.options.render.call(this,t),s=(0,l.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},6949:function(t,e,s){t.exports=s.p+"img/logo.fe9ce185.png"}}]);
//# sourceMappingURL=login.c7a3db70.js.map