"use strict";(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[476],{1817:function(e,t,o){var n=o(2109),a=o(9781),r=o(7854),i=o(1702),s=o(2597),l=o(614),d=o(7976),c=o(1340),u=o(3070).f,p=o(9920),m=r.Symbol,v=m&&m.prototype;if(a&&l(m)&&(!("description"in v)||void 0!==m().description)){var b={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:c(arguments[0]),t=d(v,this)?new m(e):void 0===e?m():m(e);return""===e&&(b[t]=!0),t};p(f,m),f.prototype=v,v.constructor=f;var h="Symbol(test)"==String(m("test")),C=i(v.toString),x=i(v.valueOf),_=/^Symbol\((.*)\)[^)]+$/,S=i("".replace),g=i("".slice);u(v,"description",{configurable:!0,get:function(){var e=x(this),t=C(e);if(s(b,e))return"";var o=h?g(t,7,-1):S(t,_,"$1");return""===o?void 0:o}}),n({global:!0,forced:!0},{Symbol:f})}},7580:function(e,t,o){o.r(t),o.d(t,{default:function(){return N}});var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("sub-component-table",{attrs:{data:e.subComponentListState,dataComponentAirplane:e.componentAirplaneListState},on:{DeleteSubComponent:e.DeleteSubComponent,addSubComponent:e.addSubComponent,updateSubComponent:e.updateSubComponent}})],1)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",[e._v("SubComponentes")])])}],r=o(3019),i=(o(2526),o(1817),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.data,search:e.search,"sort-by":"Tipo"},scopedSlots:e._u([{key:"top",fn:function(){return[o("v-toolbar",{attrs:{flat:""}},[o("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[o("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),o("v-spacer"),o("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[o("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",a,!1),n),[e._v(" Añadir ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[o("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[o("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("validation-provider",{attrs:{name:"partNumber",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[o("v-text-field",{attrs:{"error-messages":n,label:"Numero de partes",required:""},model:{value:e.editedItem.partNumber,callback:function(t){e.$set(e.editedItem,"partNumber",t)},expression:"editedItem.partNumber"}})]}}],null,!0)})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("validation-provider",{attrs:{name:"description",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[o("v-text-field",{attrs:{"error-messages":n,label:"Descripción",required:""},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})]}}],null,!0)})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("validation-provider",{attrs:{name:"status",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[o("v-text-field",{attrs:{"error-messages":n,label:"Estado",required:""},model:{value:e.editedItem.status,callback:function(t){e.$set(e.editedItem,"status",t)},expression:"editedItem.status"}})]}}],null,!0)})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("validation-provider",{attrs:{name:"hor_ext",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[o("v-text-field",{attrs:{"error-messages":n,label:"Horas extras",required:""},model:{value:e.editedItem.hor_ext,callback:function(t){e.$set(e.editedItem,"hor_ext",t)},expression:"editedItem.hor_ext"}})]}}],null,!0)})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("validation-provider",{attrs:{name:"selectComponentAirplane",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[o("v-select",{attrs:{items:e.dataComponentAirplane,"error-messages":n,label:"Selecionar componente","item-text":"description","item-value":"id","data-vv-name":"selectComponentAirplane",bottom:"",autocomplete:"",required:""},model:{value:e.selectComponentAirplane,callback:function(t){e.selectComponentAirplane=t},expression:"selectComponentAirplane"}})]}}],null,!0)})],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),o("v-btn",{staticClass:"mr-4",staticStyle:{color:"#E5F0F4"},attrs:{type:"submit",color:"#002F6C",disabled:n}},[e._v(" Guardar ")])],1),o("br")],1)],1)]}}])})],1),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5"},[e._v("¿Está seguro que desea eliminar?")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),o("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[o("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v(" mdi-pencil ")]),o("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}}])})],1)}),s=[],l=o(4479),d=o(2954);(0,d.UF)("eager"),(0,d.l7)("required",(0,r.Z)((0,r.Z)({},l.C1),{},{message:" Campo no puede ir vacío"})),(0,d.l7)("max",(0,r.Z)((0,r.Z)({},l.Fp),{},{message:" No puede ser mayor que {length} caracteres"}));var c={name:"TableSubComponent",components:{ValidationProvider:d.d_,ValidationObserver:d._j},props:["data","dataComponentAirplane"],data:function(){return{search:"",checkbox:null,dialog:!1,dialogDelete:!1,updateSubComponent:!1,select:null,selectComponentAirplane:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Descripción",value:"description"},{text:"Estado",value:"status"},{text:"Número de partes",value:"partNumber"},{text:"Componentes",value:"hor_ult_insp"},{text:"Horas extras",value:"hor_ext"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{componentId:0,componentQuantity:0,createdAt:"",createdBy:"",cycle_ext:0,cycle_prox_insp:0,cycle_ult_insp:0,description:"",hor_ext:0,hor_prox_insp:0,hor_ult_insp:0,id:0,location:0,makerID:0,partNumber:"",prox_insp_date:"",status:"",timesTamp:"",totalCycles:0,totalHours:0,ult_insp_date:"",updatedAt:"",updatedBy:""},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo SubComponent":"Editar SubComponent"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{submit:function(){this.$refs.observer.validate()?(this.editedItem.componentId=this.selectComponentAirplane,this.save()):console.log("completar los campos")},editItem:function(e){this.editedItem=Object.assign({},e),this.selectComponentAirplane=this.editedItem.componentId,this.updateSubComponent=!0,this.dialog=!0},deleteItem:function(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.$emit("DeleteSubComponent",this.editedItem.id),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.updateSubComponent?this.$emit("updateSubComponent",this.editedItem):this.$emit("addSubComponent",this.editedItem),this.updateSubComponent=!1,this.close()}}},u=c,p=o(3736),m=o(3453),v=o.n(m),b=o(6847),f=o(2026),h=o(5255),C=o(7024),x=o(1819),_=o(1455),S=o(5634),g=o(4456),I=o(7894),y=o(530),k=o(2515),D=o(2660),A=o(1652),Z=(0,p.Z)(u,i,s,!1,null,"ee6aab9c",null),V=Z.exports;v()(Z,{VBtn:b.Z,VCard:f.Z,VCardActions:h.h7,VCardText:h.ZB,VCardTitle:h.EB,VCol:C.Z,VContainer:x.Z,VDataTable:_.Z,VDialog:S.Z,VIcon:g.Z,VRow:I.Z,VSelect:y.Z,VSpacer:k.Z,VTextField:D.Z,VToolbar:A.Z});var $=o(629),T={name:"SubComponent",components:{SubComponentTable:V},data:function(){return{jsonDataUpdate:{componentId:13,componentQuantity:0,createdAt:"",createdBy:"",cycle_ext:0,cycle_prox_insp:0,cycle_ult_insp:0,description:"",hor_ext:0,hor_prox_insp:0,hor_ult_insp:0,id:0,location:0,makerID:0,partNumber:"",prox_insp_date:"",status:"",timesTamp:"",totalCycles:0,totalHours:0,ult_insp_date:"",updatedAt:"",updatedBy:""}}},created:function(){this.getSubComponentState(),this.getComponentAirplaneState()},computed:(0,r.Z)({},(0,$.Se)(["subComponentListState","componentAirplaneListState"])),methods:(0,r.Z)((0,r.Z)({},(0,$.nv)(["getSubComponentState","getComponentAirplaneState","setSubComponentnew","apiUpdateSubComponent","apiDeleteSubComponent"])),{},{addSubComponent:function(e){this.setSubComponentnew(e)},updateSubComponent:function(e){this.jsonDataUpdate.partNumber=e.partNumber,this.jsonDataUpdate.description=e.description,this.jsonDataUpdate.status=e.status,this.jsonDataUpdate.hor_ext=e.hor_ext,this.jsonDataUpdate.id=e.id,this.jsonDataUpdate.componentId=e.componentId,this.apiUpdateSubComponent(this.jsonDataUpdate)},DeleteSubComponent:function(e){this.apiDeleteSubComponent(e)}})},j=T,q=(0,p.Z)(j,n,a,!1,null,"d5b2633c",null),N=q.exports}}]);
//# sourceMappingURL=subcomponentes-legacy.407c91fd.js.map