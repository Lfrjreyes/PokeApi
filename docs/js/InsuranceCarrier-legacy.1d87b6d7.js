(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[915],{8309:function(e,t,a){var s=a(9781),n=a(6530).EXISTS,i=a(1702),r=a(3070).f,l=Function.prototype,o=i(l.toString),d=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,c=i(d.exec),u="name";s&&!n&&r(l,u,{configurable:!0,get:function(){try{return c(d,o(this))[1]}catch(e){return""}}})},9955:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return U}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("insurance-carrier-table",{attrs:{data:e.insuranceCarrierListState},on:{DeleteInsuranceCarrier:e.DeleteInsuranceCarrier,addInsuranceCarrier:e.addInsuranceCarrier,updateInsuranceCarrier:e.updateInsuranceCarrier}})],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Aseguradora")])])}],i=a(3019),r=(a(8309),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.data,search:e.search,"sort-by":"Tipo",loading:!1,"loading-text":"Por favor espere...."},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),s),[e._v(" Añadir ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle)+" ")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Nombre"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dirección"},model:{value:e.editedItem.address,callback:function(t){e.$set(e.editedItem,"address",t)},expression:"editedItem.address"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"código"},model:{value:e.editedItem.code,callback:function(t){e.$set(e.editedItem,"code",t)},expression:"editedItem.code"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"código"},model:{value:e.editedItem.contact,callback:function(t){e.$set(e.editedItem,"contact",t)},expression:"editedItem.contact"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dirreción responsable"},model:{value:e.editedItem.dirResponsable,callback:function(t){e.$set(e.editedItem,"dirResponsable",t)},expression:"editedItem.dirResponsable"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Responsable fae"},model:{value:e.editedItem.responsableFae,callback:function(t){e.$set(e.editedItem,"responsableFae",t)},expression:"editedItem.responsableFae"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Teléfono Responsable"},model:{value:e.editedItem.telResponsable,callback:function(t){e.$set(e.editedItem,"telResponsable",t)},expression:"editedItem.telResponsable"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Teléfono",type:"number"},model:{value:e.editedItem.telephone,callback:function(t){e.$set(e.editedItem,"telephone",t)},expression:"editedItem.telephone"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Fecha"},model:{value:e.editedItem.timesTamp,callback:function(t){e.$set(e.editedItem,"timesTamp",t)},expression:"editedItem.timesTamp"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Guardar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("¿Está seguro que desea eliminar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var s=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(s)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("p",[e._v(" No se encontraron datos ...")])]},proxy:!0}])})],1)}),l=[],o={name:"InsuranceCarrierTable",props:["data"],data:function(){return{dialog:!1,search:"",dialogDelete:!1,updateAirplane:!1,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Dirección",value:"address"},{text:"Contacto",value:"contact"},{text:"Dirección responsable",value:"dirResponsable"},{text:"Teléfono responsable",value:"telResponsable"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{address:"",code:0,contact:"",dirResponsable:"",id:0,name:"",responsableFae:"",telResponsable:"",telephone:"",timesTamp:""},defaultItem:{}}},computed:{formTitle:function(){return this.updateAirplane?"Editar ":"Nuevo "}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{editItem:function(e){this.editedItem=Object.assign({},e),this.updateAirplane=!0,this.dialog=!0},deleteItem:function(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.$emit("DeleteInsuranceCarrier",this.editedItem.id),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.updateAirplane?(this.loading=!0,this.$emit("updateInsuranceCarrier",this.editedItem)):this.$emit("addInsuranceCarrier",this.editedItem),this.updateAirplane=!1,this.close(),this.loading=!1}}},d=o,c=a(3736),u=a(3453),m=a.n(u),p=a(6847),v=a(2026),b=a(5255),f=a(7024),h=a(1819),I=a(1455),x=a(5634),C=a(4456),g=a(7894),D=a(2515),k=a(2660),T=a(1652),_=(0,c.Z)(d,r,l,!1,null,"3b2fdb69",null),R=_.exports;m()(_,{VBtn:p.Z,VCard:v.Z,VCardActions:b.h7,VCardText:b.ZB,VCardTitle:b.EB,VCol:f.Z,VContainer:h.Z,VDataTable:I.Z,VDialog:x.Z,VIcon:C.Z,VRow:g.Z,VSpacer:D.Z,VTextField:k.Z,VToolbar:T.Z});var Z=a(629),$={name:"InsuranceCarrier",components:{InsuranceCarrierTable:R},data:function(){return{jsonDataUpdate:{address:"",code:0,contact:"",dirResponsable:"",id:0,name:"",responsableFae:"",telResponsable:"",telephone:"",timesTamp:""}}},created:function(){this.getInsuranceCarrierState()},computed:(0,i.Z)({},(0,Z.Se)(["insuranceCarrierListState"])),methods:(0,i.Z)((0,i.Z)({},(0,Z.nv)(["getInsuranceCarrierState","setInsuranceCarriernew","apiUpdateInsuranceCarrier","apiDeleteInsuranceCarrier"])),{},{addInsuranceCarrier:function(e){this.setInsuranceCarriernew(e)},updateInsuranceCarrier:function(e){this.jsonDataUpdate.address=e.address,this.jsonDataUpdate.code=e.code,this.jsonDataUpdate.contact=e.contact,this.jsonDataUpdate.dirResponsable=e.dirResponsable,this.jsonDataUpdate.id=e.id,this.jsonDataUpdate.name=e.name,this.jsonDataUpdate.responsableFae=e.responsableFae,this.jsonDataUpdate.telResponsable=e.telResponsable,this.jsonDataUpdate.telephone=e.telephone,this.jsonDataUpdate.timesTamp=e.timesTamp,this.apiUpdateInsuranceCarrier(this.jsonDataUpdate)},DeleteInsuranceCarrier:function(e){this.apiDeleteInsuranceCarrier(e)}})},j=$,y=(0,c.Z)(j,s,n,!1,null,"4347ba22",null),U=y.exports}}]);
//# sourceMappingURL=InsuranceCarrier-legacy.1d87b6d7.js.map