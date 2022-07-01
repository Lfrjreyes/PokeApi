"use strict";(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[787],{1817:function(e,t,a){var n=a(2109),o=a(9781),r=a(7854),i=a(1702),s=a(2597),l=a(614),d=a(7976),c=a(1340),u=a(3070).f,p=a(9920),m=r.Symbol,v=m&&m.prototype;if(o&&l(m)&&(!("description"in v)||void 0!==m().description)){var f={},h=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:c(arguments[0]),t=d(v,this)?new m(e):void 0===e?m():m(e);return""===e&&(f[t]=!0),t};p(h,m),h.prototype=v,v.constructor=h;var b="Symbol(test)"==String(m("test")),C=i(v.toString),x=i(v.valueOf),y=/^Symbol\((.*)\)[^)]+$/,_=i("".replace),g=i("".slice);u(v,"description",{configurable:!0,get:function(){var e=x(this),t=C(e);if(s(f,e))return"";var a=b?g(t,7,-1):_(t,y,"$1");return""===a?void 0:a}}),n({global:!0,forced:!0},{Symbol:h})}},7601:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("ComponentAirplaneTable",{attrs:{data:e.componentAirplaneListState},on:{DeleteComponentAirplane:e.DeleteComponentAirplane,addComponentAirplane:e.addComponentAirplane,updateComponentAirplane:e.updateComponentAirplane}})],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Componentes")])])}],r=a(3019),i=(a(2526),a(1817),a(629)),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.data,search:e.search,"sort-by":"Tipo"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),n),[e._v(" Añadir ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"description",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Descripción",required:""},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"status",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Estado",required:""},model:{value:e.editedItem.status,callback:function(t){e.$set(e.editedItem,"status",t)},expression:"editedItem.status"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"reportNumber",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Número de reporte",required:""},model:{value:e.editedItem.reportNumber,callback:function(t){e.$set(e.editedItem,"reportNumber",t)},expression:"editedItem.reportNumber"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"totalHours",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Total horas",required:""},model:{value:e.editedItem.totalHours,callback:function(t){e.$set(e.editedItem,"totalHours",t)},expression:"editedItem.totalHours"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"totalCycles",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Total ciclos",required:""},model:{value:e.editedItem.totalCycles,callback:function(t){e.$set(e.editedItem,"totalCycles",t)},expression:"editedItem.totalCycles"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"planeQuantity",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{attrs:{"error-messages":n,label:"Cantidad de aviones",required:""},model:{value:e.editedItem.planeQuantity,callback:function(t){e.$set(e.editedItem,"planeQuantity",t)},expression:"editedItem.planeQuantity"}})]}}],null,!0)})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),a("v-btn",{staticClass:"mr-4",staticStyle:{color:"#E5F0F4"},attrs:{type:"submit",color:"#002F6C",disabled:n}},[e._v(" Guardar ")])],1),a("br")],1)],1)]}}])})],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("¿Está seguro que desea eliminar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}}])})],1)},l=[],d=a(4479),c=a(2954);(0,c.UF)("eager"),(0,c.l7)("required",(0,r.Z)((0,r.Z)({},d.C1),{},{message:" Campo no puede ir vacío"})),(0,c.l7)("max",(0,r.Z)((0,r.Z)({},d.Fp),{},{message:" No puede ser mayor que {length} caracteres"}));var u={name:"TableComponentAirplane",components:{ValidationProvider:c.d_,ValidationObserver:c._j},props:["data"],data:function(){return{search:"",checkbox:null,dialog:!1,dialogDelete:!1,updateComponentAirplane:!1,select:null,selectLocation:null,selectComponentAirplaneType:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Description",value:"description"},{text:"Estado",value:"status"},{text:"Número de reporte",value:"reportNumber"},{text:"Total horas",value:"totalHours"},{text:"Total ciclos",value:"totalCycles"},{text:"Cantidad de aviones",value:"planeQuantity"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{airPlaneTypeId:0,createdAt:"",createdBy:"",cycle_ext:0,cycle_prox_insp:0,cycle_ult_insp:0,description:"",fieldType:0,hor_ext:0,hor_prox_insp:0,hor_ult_insp:0,id:0,location:0,makerId:0,planeQuantity:0,prox_insp_date:"",reportNumber:"",status:"",subComponentList:[],timesTamp:"",totalCycles:0,totalHours:0,ult_insp_date:"",updatedAt:"",updatedBy:""},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo Componente":"Editar Componente"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{submit:function(){this.$refs.observer.validate()?this.save():console.log("completar los campos")},editItem:function(e){this.editedItem=Object.assign({},e),this.updateComponentAirplane=!0,this.dialog=!0},deleteItem:function(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.$emit("DeleteComponentAirplane",this.editedItem.id),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.updateComponentAirplane?this.$emit("updateComponentAirplane",this.editedItem):this.$emit("addComponentAirplane",this.editedItem),this.updateComponentAirplane=!1,this.close()}}},p=u,m=a(3736),v=a(3453),f=a.n(v),h=a(6847),b=a(2026),C=a(5255),x=a(7024),y=a(1819),_=a(1455),g=a(5634),I=a(4456),A=a(7894),k=a(2515),D=a(2660),T=a(1652),S=(0,m.Z)(p,s,l,!1,null,"f943a34c",null),Z=S.exports;f()(S,{VBtn:h.Z,VCard:b.Z,VCardActions:C.h7,VCardText:C.ZB,VCardTitle:C.EB,VCol:x.Z,VContainer:y.Z,VDataTable:_.Z,VDialog:g.Z,VIcon:I.Z,VRow:A.Z,VSpacer:k.Z,VTextField:D.Z,VToolbar:T.Z});var $={name:"componentAirplane",components:{ComponentAirplaneTable:Z},data:function(){return{jsonDataUpdate:{airPlaneTypeId:0,createdAt:"",createdBy:"",cycle_ext:0,cycle_prox_insp:0,cycle_ult_insp:0,description:"",fieldType:0,hor_ext:0,hor_prox_insp:0,hor_ult_insp:0,id:0,location:0,makerId:0,planeQuantity:0,prox_insp_date:"",reportNumber:"",status:"",subComponentList:[],timesTamp:"",totalCycles:0,totalHours:0,ult_insp_date:"",updatedAt:"",updatedBy:""}}},created:function(){this.getComponentAirplaneState()},computed:(0,r.Z)({},(0,i.Se)(["componentAirplaneListState"])),methods:(0,r.Z)((0,r.Z)({},(0,i.nv)(["getComponentAirplaneState","setComponentAirplanenew","apiUpdateComponentAirplane","apiDeleteComponentAirplane"])),{},{addComponentAirplane:function(e){this.setComponentAirplanenew(e)},updateComponentAirplane:function(e){this.jsonDataUpdate.reportNumber=e.reportNumber,this.jsonDataUpdate.description=e.description,this.jsonDataUpdate.status=e.status,this.jsonDataUpdate.planeQuantity=e.planeQuantity,this.jsonDataUpdate.id=e.id,this.jsonDataUpdate.totalHours=e.totalHours,this.jsonDataUpdate.totalCycles=e.totalCycles,this.jsonDataUpdate.planeQuantity=e.planeQuantity,this.apiUpdateComponentAirplane(this.jsonDataUpdate)},DeleteComponentAirplane:function(e){this.apiDeleteComponentAirplane(e)}})},V=$,j=(0,m.Z)(V,n,o,!1,null,"62d04f72",null),q=j.exports}}]);
//# sourceMappingURL=ComponentAirplane-legacy.e6bb3eb0.js.map