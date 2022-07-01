"use strict";(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[692,787,476,949],{7601:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("ComponentAirplaneTable",{attrs:{data:e.componentAirplaneListState},on:{DeleteComponentAirplane:e.DeleteComponentAirplane,addComponentAirplane:e.addComponentAirplane,updateComponentAirplane:e.updateComponentAirplane}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Componentes")])])}],o=a(629),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.data,search:e.search,"sort-by":"Tipo"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),i),[e._v(" Añadir ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var i=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"description",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Descripción",required:""},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"status",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Estado",required:""},model:{value:e.editedItem.status,callback:function(t){e.$set(e.editedItem,"status",t)},expression:"editedItem.status"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"reportNumber",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Número de reporte",required:""},model:{value:e.editedItem.reportNumber,callback:function(t){e.$set(e.editedItem,"reportNumber",t)},expression:"editedItem.reportNumber"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"totalHours",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Total horas",required:""},model:{value:e.editedItem.totalHours,callback:function(t){e.$set(e.editedItem,"totalHours",t)},expression:"editedItem.totalHours"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"totalCycles",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Total ciclos",required:""},model:{value:e.editedItem.totalCycles,callback:function(t){e.$set(e.editedItem,"totalCycles",t)},expression:"editedItem.totalCycles"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"planeQuantity",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Cantidad de aviones",required:""},model:{value:e.editedItem.planeQuantity,callback:function(t){e.$set(e.editedItem,"planeQuantity",t)},expression:"editedItem.planeQuantity"}})]}}],null,!0)})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),a("v-btn",{staticClass:"mr-4",staticStyle:{color:"#E5F0F4"},attrs:{type:"submit",color:"#002F6C",disabled:i}},[e._v(" Guardar ")])],1),a("br")],1)],1)]}}])})],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("¿Está seguro que desea eliminar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}}])})],1)},s=[],l=a(4479),d=a(2954);(0,d.UF)("eager"),(0,d.l7)("required",{...l.C1,message:" Campo no puede ir vacío"}),(0,d.l7)("max",{...l.Fp,message:" No puede ser mayor que {length} caracteres"});var c={name:"TableComponentAirplane",components:{ValidationProvider:d.d_,ValidationObserver:d._j},props:["data"],data:()=>({search:"",checkbox:null,dialog:!1,dialogDelete:!1,updateComponentAirplane:!1,select:null,selectLocation:null,selectComponentAirplaneType:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Description",value:"description"},{text:"Estado",value:"status"},{text:"Número de reporte",value:"reportNumber"},{text:"Total horas",value:"totalHours"},{text:"Total ciclos",value:"totalCycles"},{text:"Cantidad de aviones",value:"planeQuantity"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{airPlaneTypeId:0,createdAt:"",createdBy:"",cycle_ext:0,cycle_prox_insp:0,cycle_ult_insp:0,description:"",fieldType:0,hor_ext:0,hor_prox_insp:0,hor_ult_insp:0,id:0,location:0,makerId:0,planeQuantity:0,prox_insp_date:"",reportNumber:"",status:"",subComponentList:[],timesTamp:"",totalCycles:0,totalHours:0,ult_insp_date:"",updatedAt:"",updatedBy:""},defaultItem:{}}),computed:{formTitle(){return-1===this.editedIndex?"Nuevo Componente":"Editar Componente"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},methods:{submit(){this.$refs.observer.validate()?this.save():console.log("completar los campos")},editItem(e){this.editedItem=Object.assign({},e),this.updateComponentAirplane=!0,this.dialog=!0},deleteItem(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){this.$emit("DeleteComponentAirplane",this.editedItem.id),this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},save(){this.updateComponentAirplane?this.$emit("updateComponentAirplane",this.editedItem):this.$emit("addComponentAirplane",this.editedItem),this.updateComponentAirplane=!1,this.close()}}},u=c,p=a(3736),m=a(3453),v=a.n(m),b=a(6847),h=a(2026),f=a(5255),x=a(7024),C=a(1819),_=a(1455),y=a(5634),g=a(4456),I=a(7894),k=a(2515),D=a(2660),S=a(1652),A=(0,p.Z)(u,n,s,!1,null,"f943a34c",null),T=A.exports;v()(A,{VBtn:b.Z,VCard:h.Z,VCardActions:f.h7,VCardText:f.ZB,VCardTitle:f.EB,VCol:x.Z,VContainer:C.Z,VDataTable:_.Z,VDialog:y.Z,VIcon:g.Z,VRow:I.Z,VSpacer:k.Z,VTextField:D.Z,VToolbar:S.Z});var V={name:"componentAirplane",components:{ComponentAirplaneTable:T},data(){return{jsonDataUpdate:{airPlaneTypeId:0,createdAt:"",createdBy:"",cycle_ext:0,cycle_prox_insp:0,cycle_ult_insp:0,description:"",fieldType:0,hor_ext:0,hor_prox_insp:0,hor_ult_insp:0,id:0,location:0,makerId:0,planeQuantity:0,prox_insp_date:"",reportNumber:"",status:"",subComponentList:[],timesTamp:"",totalCycles:0,totalHours:0,ult_insp_date:"",updatedAt:"",updatedBy:""}}},created(){this.getComponentAirplaneState()},computed:{...(0,o.Se)(["componentAirplaneListState"])},methods:{...(0,o.nv)(["getComponentAirplaneState","setComponentAirplanenew","apiUpdateComponentAirplane","apiDeleteComponentAirplane"]),addComponentAirplane(e){this.setComponentAirplanenew(e)},updateComponentAirplane(e){this.jsonDataUpdate.reportNumber=e.reportNumber,this.jsonDataUpdate.description=e.description,this.jsonDataUpdate.status=e.status,this.jsonDataUpdate.planeQuantity=e.planeQuantity,this.jsonDataUpdate.id=e.id,this.jsonDataUpdate.totalHours=e.totalHours,this.jsonDataUpdate.totalCycles=e.totalCycles,this.jsonDataUpdate.planeQuantity=e.planeQuantity,this.apiUpdateComponentAirplane(this.jsonDataUpdate)},DeleteComponentAirplane(e){this.apiDeleteComponentAirplane(e)}}},q=V,Z=(0,p.Z)(q,i,r,!1,null,"62d04f72",null),j=Z.exports},7580:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("sub-component-table",{attrs:{data:e.subComponentListState,dataComponentAirplane:e.componentAirplaneListState},on:{DeleteSubComponent:e.DeleteSubComponent,addSubComponent:e.addSubComponent,updateSubComponent:e.updateSubComponent}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("SubComponentes")])])}],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.data,search:e.search,"sort-by":"Tipo"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),i),[e._v(" Añadir ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var i=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"partNumber",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Numero de partes",required:""},model:{value:e.editedItem.partNumber,callback:function(t){e.$set(e.editedItem,"partNumber",t)},expression:"editedItem.partNumber"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"description",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Descripción",required:""},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"status",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Estado",required:""},model:{value:e.editedItem.status,callback:function(t){e.$set(e.editedItem,"status",t)},expression:"editedItem.status"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"hor_ext",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Horas extras",required:""},model:{value:e.editedItem.hor_ext,callback:function(t){e.$set(e.editedItem,"hor_ext",t)},expression:"editedItem.hor_ext"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"selectComponentAirplane",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-select",{attrs:{items:e.dataComponentAirplane,"error-messages":i,label:"Selecionar componente","item-text":"description","item-value":"id","data-vv-name":"selectComponentAirplane",bottom:"",autocomplete:"",required:""},model:{value:e.selectComponentAirplane,callback:function(t){e.selectComponentAirplane=t},expression:"selectComponentAirplane"}})]}}],null,!0)})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),a("v-btn",{staticClass:"mr-4",staticStyle:{color:"#E5F0F4"},attrs:{type:"submit",color:"#002F6C",disabled:i}},[e._v(" Guardar ")])],1),a("br")],1)],1)]}}])})],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("¿Está seguro que desea eliminar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}}])})],1)},n=[],s=a(4479),l=a(2954);(0,l.UF)("eager"),(0,l.l7)("required",{...s.C1,message:" Campo no puede ir vacío"}),(0,l.l7)("max",{...s.Fp,message:" No puede ser mayor que {length} caracteres"});var d={name:"TableSubComponent",components:{ValidationProvider:l.d_,ValidationObserver:l._j},props:["data","dataComponentAirplane"],data:()=>({search:"",checkbox:null,dialog:!1,dialogDelete:!1,updateSubComponent:!1,select:null,selectComponentAirplane:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Descripción",value:"description"},{text:"Estado",value:"status"},{text:"Número de partes",value:"partNumber"},{text:"Componentes",value:"hor_ult_insp"},{text:"Horas extras",value:"hor_ext"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{componentId:0,componentQuantity:0,createdAt:"",createdBy:"",cycle_ext:0,cycle_prox_insp:0,cycle_ult_insp:0,description:"",hor_ext:0,hor_prox_insp:0,hor_ult_insp:0,id:0,location:0,makerID:0,partNumber:"",prox_insp_date:"",status:"",timesTamp:"",totalCycles:0,totalHours:0,ult_insp_date:"",updatedAt:"",updatedBy:""},defaultItem:{}}),computed:{formTitle(){return-1===this.editedIndex?"Nuevo SubComponent":"Editar SubComponent"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},methods:{submit(){this.$refs.observer.validate()?(this.editedItem.componentId=this.selectComponentAirplane,this.save()):console.log("completar los campos")},editItem(e){this.editedItem=Object.assign({},e),this.selectComponentAirplane=this.editedItem.componentId,this.updateSubComponent=!0,this.dialog=!0},deleteItem(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){this.$emit("DeleteSubComponent",this.editedItem.id),this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},save(){this.updateSubComponent?this.$emit("updateSubComponent",this.editedItem):this.$emit("addSubComponent",this.editedItem),this.updateSubComponent=!1,this.close()}}},c=d,u=a(3736),p=a(3453),m=a.n(p),v=a(6847),b=a(2026),h=a(5255),f=a(7024),x=a(1819),C=a(1455),_=a(5634),y=a(4456),g=a(7894),I=a(530),k=a(2515),D=a(2660),S=a(1652),A=(0,u.Z)(c,o,n,!1,null,"ee6aab9c",null),T=A.exports;m()(A,{VBtn:v.Z,VCard:b.Z,VCardActions:h.h7,VCardText:h.ZB,VCardTitle:h.EB,VCol:f.Z,VContainer:x.Z,VDataTable:C.Z,VDialog:_.Z,VIcon:y.Z,VRow:g.Z,VSelect:I.Z,VSpacer:k.Z,VTextField:D.Z,VToolbar:S.Z});var V=a(629),q={name:"SubComponent",components:{SubComponentTable:T},data(){return{jsonDataUpdate:{componentId:13,componentQuantity:0,createdAt:"",createdBy:"",cycle_ext:0,cycle_prox_insp:0,cycle_ult_insp:0,description:"",hor_ext:0,hor_prox_insp:0,hor_ult_insp:0,id:0,location:0,makerID:0,partNumber:"",prox_insp_date:"",status:"",timesTamp:"",totalCycles:0,totalHours:0,ult_insp_date:"",updatedAt:"",updatedBy:""}}},created(){this.getSubComponentState(),this.getComponentAirplaneState()},computed:{...(0,V.Se)(["subComponentListState","componentAirplaneListState"])},methods:{...(0,V.nv)(["getSubComponentState","getComponentAirplaneState","setSubComponentnew","apiUpdateSubComponent","apiDeleteSubComponent"]),addSubComponent(e){this.setSubComponentnew(e)},updateSubComponent(e){this.jsonDataUpdate.partNumber=e.partNumber,this.jsonDataUpdate.description=e.description,this.jsonDataUpdate.status=e.status,this.jsonDataUpdate.hor_ext=e.hor_ext,this.jsonDataUpdate.id=e.id,this.jsonDataUpdate.componentId=e.componentId,this.apiUpdateSubComponent(this.jsonDataUpdate)},DeleteSubComponent(e){this.apiDeleteSubComponent(e)}}},Z=q,j=(0,u.Z)(Z,i,r,!1,null,"d5b2633c",null),$=j.exports},692:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("v-row",[a("v-col",[a("h1",[e._v("Información técnica")])]),a("v-spacer")],1)],1),a("div",{staticClass:"container"},[a("v-container",[a("v-card",[a("v-tabs",{attrs:{centered:""},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},e._l(e.items,(function(t,i){return a("v-tab",{key:i},[e._v(" "+e._s(t.tab)+" ")])})),1),a("v-tabs-items",{model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("air-plane-type")],1)],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("component-airplane")],1)],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("sub-component")],1)],1)],1)],1)],1)],1)],1)])},r=[],o=a(7601),n=a(9118),s=a(7580),l={name:"TechnicalInformationComponent",components:{componentAirplane:o["default"],AirPlaneType:n["default"],subComponent:s["default"]},data(){return{tabs:null,open:!1,itemselecttabs:"",items:[{tab:"Tipo de Aeronave"},{tab:"Componente"},{tab:"Subcomponente"}]}},watch:{},methods:{clickTab(e){this.itemselecttabs=e,console.log("aquiii",e)},openModal(){this.open=!0,console.log("open",this.open)}}},d=l,c=a(3736),u=a(3453),p=a.n(u),m=a(2026),v=a(5255),b=a(7024),h=a(1819),f=a(7894),x=a(2515),C=a(756),_=a(6975),y=a(9807),g=a(6106),I=(0,c.Z)(d,i,r,!1,null,"18a3ace6",null),k=I.exports;p()(I,{VCard:m.Z,VCardText:v.ZB,VCol:b.Z,VContainer:h.Z,VRow:f.Z,VSpacer:x.Z,VTab:C.Z,VTabItem:_.Z,VTabs:y.Z,VTabsItems:g.Z})},9118:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("AirPlanetTypeTable",{attrs:{data:e.airPlaneTypeListState,dataSquadron:e.SquadronListState},on:{DeleteAirPlaneType:e.DeleteAirPlaneType,addAirPlaneType:e.addAirPlaneType,updateAirplaneType:e.updateAirPlaneType}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Tipo de aeronave")])])}],o=a(629),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.data,search:e.search,"sort-by":"Tipo"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),i),[e._v(" Añadir ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var i=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"crew",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Tipo",required:""},model:{value:e.editedItem.crew,callback:function(t){e.$set(e.editedItem,"crew",t)},expression:"editedItem.crew"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"abbreviation",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"abbreviation",required:""},model:{value:e.editedItem.abbreviation,callback:function(t){e.$set(e.editedItem,"abbreviation",t)},expression:"editedItem.abbreviation"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"nominativo",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"nominativo",required:""},model:{value:e.editedItem.nominativo,callback:function(t){e.$set(e.editedItem,"nominativo",t)},expression:"editedItem.nominativo"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"description",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Descriptición",required:""},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"select",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-select",{attrs:{items:e.dataSquadron,"error-messages":i,label:"Selecionar escuadrón","item-text":"description","item-value":"id","data-vv-name":"select",bottom:"",autocomplete:"",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]}}],null,!0)})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),a("v-btn",{staticClass:"mr-4",staticStyle:{color:"#E5F0F4"},attrs:{type:"submit",color:"#002F6C",disabled:i}},[e._v(" Guardar ")])],1),a("br")],1)],1)]}}])})],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("¿Está seguro que desea eliminar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}}])})],1)},s=[],l=a(4479),d=a(2954);(0,d.UF)("eager"),(0,d.l7)("required",{...l.C1,message:" Campo no puede ir vacío"}),(0,d.l7)("max",{...l.Fp,message:" No puede ser mayor que {length} caracteres"});var c={name:"AirPlanetTypeTable",components:{ValidationProvider:d.d_,ValidationObserver:d._j},props:["data","dataSquadron"],data:()=>({dialog:!1,search:"",dialogDelete:!1,updateAirplane:!1,select:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Tipo",value:"crew"},{text:"abbreviation",value:"abbreviation"},{text:"nominativo",value:"nominativo"},{text:"Descriptición",value:"description"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{abbreviation:"",autonomiaVuelo:0,crew:"",crewNumber:0,cruisespeed:0,description:"",emptyWeight:0,fuelExtreme:0,fuelPerHour:0,headline:0,high:0,id:0,landingDistance:0,length:0,loadCapacity:0,makerId:0,maximumSpeed:0,motorPower:0,nominativo:"",operationCost:0,passengerCapacity:0,photo:"",projection:0,quantityMotors:0,roofFlight:0,rotorDiameter:0,squadronId:0,status:0,takeOffDistance:0,timeTamp:"",totalFuel:0,totalLoad:0,type:0,squadron:{id:0},typeJet:0,width:0},defaultItem:{}}),computed:{formTitle(){return this.updateAirplane?"Nuevo Avión ":"Editar Avión "}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},methods:{submit(){this.$refs.observer.validate()?(this.editedItem.squadron.id=this.select,this.save()):console.log("completar los campos")},editItem(e){this.editedItem=Object.assign({},e),this.select=this.editedItem.squadron.id,this.updateAirplane=!0,this.dialog=!0},deleteItem(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){this.$emit("DeleteAirPlaneType",this.editedItem.id),this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},save(){this.updateAirplane?this.$emit("updateAirplaneType",this.editedItem):this.$emit("addAirPlaneType",this.editedItem),this.updateAirplane=!1,this.close()}}},u=c,p=a(3736),m=a(3453),v=a.n(m),b=a(6847),h=a(2026),f=a(5255),x=a(7024),C=a(1819),_=a(1455),y=a(5634),g=a(4456),I=a(7894),k=a(530),D=a(2515),S=a(2660),A=a(1652),T=(0,p.Z)(u,n,s,!1,null,"6ecb92ec",null),V=T.exports;v()(T,{VBtn:b.Z,VCard:h.Z,VCardActions:f.h7,VCardText:f.ZB,VCardTitle:f.EB,VCol:x.Z,VContainer:C.Z,VDataTable:_.Z,VDialog:y.Z,VIcon:g.Z,VRow:I.Z,VSelect:k.Z,VSpacer:D.Z,VTextField:S.Z,VToolbar:A.Z});var q={name:"AirPlaneTypeComponent",components:{AirPlanetTypeTable:V},props:["inventaryDataItem"],data(){return{jsonDataUpdate:{abbreviation:"string",autonomiaVuelo:0,crew:"string",crewNumber:0,cruisespeed:0,description:"string",emptyWeight:0,fuelExtreme:0,fuelPerHour:0,headline:0,high:0,id:0,landingDistance:0,length:0,loadCapacity:0,makerId:0,maximumSpeed:0,motorPower:0,nominativo:"string",operationCost:0,passengerCapacity:0,photo:"string",projection:0,quantityMotors:0,roofFlight:0,rotorDiameter:0,squadronId:0,status:0,takeOffDistance:0,timeTamp:"2022-04-19T21:22:07.730Z",totalFuel:0,totalLoad:0,type:0,squadron:{id:0},typeJet:0,width:0}}},created(){this.getAirPlaneTypeState(),this.getSquadronState()},computed:{...(0,o.Se)(["airPlaneTypeListState","SquadronListState"])},methods:{...(0,o.nv)(["getAirPlaneTypeState","getSquadronState","setAirPlaneTypStatenew","apiUpdateAirPlaneType","apiDeleteAirPlaneType"]),addAirPlaneType(e){this.setAirPlaneTypStatenew(e),this.getAirPlaneTypeState()},updateAirPlaneType(e){this.jsonDataUpdate.abbreviation=e.abbreviation,this.jsonDataUpdate.crew=e.crew,this.jsonDataUpdate.nominativo=e.nominativo,this.jsonDataUpdate.description=e.description,this.jsonDataUpdate.id=e.id,this.jsonDataUpdate.squadron.id=e.squadron.id,this.apiUpdateAirPlaneType(this.jsonDataUpdate)},DeleteAirPlaneType(e){this.apiDeleteAirPlaneType(e)}}},Z=q,j=(0,p.Z)(Z,i,r,!1,null,"781f2301",null),$=j.exports}}]);
//# sourceMappingURL=692.65d95721.js.map