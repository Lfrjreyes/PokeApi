"use strict";(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[949],{1817:function(e,t,a){var i=a(2109),r=a(9781),n=a(7854),o=a(1702),s=a(2597),l=a(614),d=a(7976),c=a(1340),u=a(3070).f,p=a(9920),m=n.Symbol,v=m&&m.prototype;if(r&&l(m)&&(!("description"in v)||void 0!==m().description)){var f={},h=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:c(arguments[0]),t=d(v,this)?new m(e):void 0===e?m():m(e);return""===e&&(f[t]=!0),t};p(h,m),h.prototype=v,v.constructor=h;var b="Symbol(test)"==String(m("test")),y=o(v.toString),g=o(v.valueOf),x=/^Symbol\((.*)\)[^)]+$/,T=o("".replace),I=o("".slice);u(v,"description",{configurable:!0,get:function(){var e=g(this),t=y(e);if(s(f,e))return"";var a=b?I(t,7,-1):T(t,x,"$1");return""===a?void 0:a}}),i({global:!0,forced:!0},{Symbol:h})}},9118:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("AirPlanetTypeTable",{attrs:{data:e.airPlaneTypeListState,dataSquadron:e.SquadronListState},on:{DeleteAirPlaneType:e.DeleteAirPlaneType,addAirPlaneType:e.addAirPlaneType,updateAirplaneType:e.updateAirPlaneType}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Tipo de aeronave")])])}],n=a(3019),o=(a(2526),a(1817),a(629)),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.data,search:e.search,"sort-by":"Tipo"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"900px"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),i),[e._v(" Añadir ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var i=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"crew",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Tipo",required:""},model:{value:e.editedItem.crew,callback:function(t){e.$set(e.editedItem,"crew",t)},expression:"editedItem.crew"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"abbreviation",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"abbreviation",required:""},model:{value:e.editedItem.abbreviation,callback:function(t){e.$set(e.editedItem,"abbreviation",t)},expression:"editedItem.abbreviation"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"nominativo",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"nominativo",required:""},model:{value:e.editedItem.nominativo,callback:function(t){e.$set(e.editedItem,"nominativo",t)},expression:"editedItem.nominativo"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"description",rules:"required|max:10"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-text-field",{attrs:{"error-messages":i,label:"Descriptición",required:""},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})]}}],null,!0)})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("validation-provider",{attrs:{name:"select",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("v-select",{attrs:{items:e.dataSquadron,"error-messages":i,label:"Selecionar escuadrón","item-text":"description","item-value":"id","data-vv-name":"select",bottom:"",autocomplete:"",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})]}}],null,!0)})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),a("v-btn",{staticClass:"mr-4",staticStyle:{color:"#E5F0F4"},attrs:{type:"submit",color:"#002F6C",disabled:i}},[e._v(" Guardar ")])],1),a("br")],1)],1)]}}])})],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("¿Está seguro que desea eliminar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}}])})],1)},l=[],d=a(4479),c=a(2954);(0,c.UF)("eager"),(0,c.l7)("required",(0,n.Z)((0,n.Z)({},d.C1),{},{message:" Campo no puede ir vacío"})),(0,c.l7)("max",(0,n.Z)((0,n.Z)({},d.Fp),{},{message:" No puede ser mayor que {length} caracteres"}));var u={name:"AirPlanetTypeTable",components:{ValidationProvider:c.d_,ValidationObserver:c._j},props:["data","dataSquadron"],data:function(){return{dialog:!1,search:"",dialogDelete:!1,updateAirplane:!1,select:null,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Tipo",value:"crew"},{text:"abbreviation",value:"abbreviation"},{text:"nominativo",value:"nominativo"},{text:"Descriptición",value:"description"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{abbreviation:"",autonomiaVuelo:0,crew:"",crewNumber:0,cruisespeed:0,description:"",emptyWeight:0,fuelExtreme:0,fuelPerHour:0,headline:0,high:0,id:0,landingDistance:0,length:0,loadCapacity:0,makerId:0,maximumSpeed:0,motorPower:0,nominativo:"",operationCost:0,passengerCapacity:0,photo:"",projection:0,quantityMotors:0,roofFlight:0,rotorDiameter:0,squadronId:0,status:0,takeOffDistance:0,timeTamp:"",totalFuel:0,totalLoad:0,type:0,squadron:{id:0},typeJet:0,width:0},defaultItem:{}}},computed:{formTitle:function(){return this.updateAirplane?"Nuevo Avión ":"Editar Avión "}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{submit:function(){this.$refs.observer.validate()?(this.editedItem.squadron.id=this.select,this.save()):console.log("completar los campos")},editItem:function(e){this.editedItem=Object.assign({},e),this.select=this.editedItem.squadron.id,this.updateAirplane=!0,this.dialog=!0},deleteItem:function(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.$emit("DeleteAirPlaneType",this.editedItem.id),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.updateAirplane?this.$emit("updateAirplaneType",this.editedItem):this.$emit("addAirPlaneType",this.editedItem),this.updateAirplane=!1,this.close()}}},p=u,m=a(3736),v=a(3453),f=a.n(v),h=a(6847),b=a(2026),y=a(5255),g=a(7024),x=a(1819),T=a(1455),I=a(5634),S=a(4456),D=a(7894),k=a(530),A=a(2515),q=a(2660),P=a(1652),_=(0,m.Z)(p,s,l,!1,null,"6ecb92ec",null),C=_.exports;f()(_,{VBtn:h.Z,VCard:b.Z,VCardActions:y.h7,VCardText:y.ZB,VCardTitle:y.EB,VCol:g.Z,VContainer:x.Z,VDataTable:T.Z,VDialog:I.Z,VIcon:S.Z,VRow:D.Z,VSelect:k.Z,VSpacer:A.Z,VTextField:q.Z,VToolbar:P.Z});var w={name:"AirPlaneTypeComponent",components:{AirPlanetTypeTable:C},props:["inventaryDataItem"],data:function(){return{jsonDataUpdate:{abbreviation:"string",autonomiaVuelo:0,crew:"string",crewNumber:0,cruisespeed:0,description:"string",emptyWeight:0,fuelExtreme:0,fuelPerHour:0,headline:0,high:0,id:0,landingDistance:0,length:0,loadCapacity:0,makerId:0,maximumSpeed:0,motorPower:0,nominativo:"string",operationCost:0,passengerCapacity:0,photo:"string",projection:0,quantityMotors:0,roofFlight:0,rotorDiameter:0,squadronId:0,status:0,takeOffDistance:0,timeTamp:"2022-04-19T21:22:07.730Z",totalFuel:0,totalLoad:0,type:0,squadron:{id:0},typeJet:0,width:0}}},created:function(){this.getAirPlaneTypeState(),this.getSquadronState()},computed:(0,n.Z)({},(0,o.Se)(["airPlaneTypeListState","SquadronListState"])),methods:(0,n.Z)((0,n.Z)({},(0,o.nv)(["getAirPlaneTypeState","getSquadronState","setAirPlaneTypStatenew","apiUpdateAirPlaneType","apiDeleteAirPlaneType"])),{},{addAirPlaneType:function(e){this.setAirPlaneTypStatenew(e),this.getAirPlaneTypeState()},updateAirPlaneType:function(e){this.jsonDataUpdate.abbreviation=e.abbreviation,this.jsonDataUpdate.crew=e.crew,this.jsonDataUpdate.nominativo=e.nominativo,this.jsonDataUpdate.description=e.description,this.jsonDataUpdate.id=e.id,this.jsonDataUpdate.squadron.id=e.squadron.id,this.apiUpdateAirPlaneType(this.jsonDataUpdate)},DeleteAirPlaneType:function(e){this.apiDeleteAirPlaneType(e)}})},Z=w,V=(0,m.Z)(Z,i,r,!1,null,"781f2301",null),j=V.exports}}]);
//# sourceMappingURL=airplaneType-legacy.2bdbf0d3.js.map