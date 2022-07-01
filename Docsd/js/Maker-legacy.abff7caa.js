"use strict";(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[136],{9002:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("maker-table",{attrs:{data:e.makerListState},on:{DeleteMaker:e.DeleteMaker,addMaker:e.addMaker,updateMaker:e.updateMaker}})],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Fabricante")])])}],n=a(3019),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.data,search:e.search,"sort-by":"Tipo",loading:!1,"loading-text":"Por favor espere...."},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),s),[e._v(" Añadir ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Acronimo"},model:{value:e.editedItem.acronym,callback:function(t){e.$set(e.editedItem,"acronym",t)},expression:"editedItem.acronym"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Dirección"},model:{value:e.editedItem.address,callback:function(t){e.$set(e.editedItem,"address",t)},expression:"editedItem.address"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Nombre de la empresa"},model:{value:e.editedItem.businessName,callback:function(t){e.$set(e.editedItem,"businessName",t)},expression:"editedItem.businessName"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Contacto"},model:{value:e.editedItem.contact,callback:function(t){e.$set(e.editedItem,"contact",t)},expression:"editedItem.contact"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Contacto"},model:{value:e.editedItem.contact,callback:function(t){e.$set(e.editedItem,"contact",t)},expression:"editedItem.contact"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Pais"},model:{value:e.editedItem.country,callback:function(t){e.$set(e.editedItem,"country",t)},expression:"editedItem.country"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Teléfono"},model:{value:e.editedItem.telephone,callback:function(t){e.$set(e.editedItem,"telephone",t)},expression:"editedItem.telephone"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"timesTammp"},model:{value:e.editedItem.timesTammp,callback:function(t){e.$set(e.editedItem,"timesTammp",t)},expression:"editedItem.timesTammp"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancelar ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Guardar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("¿Está seguro que desea eliminar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var s=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(s)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(s)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("p",[e._v(" No se encontraron datos ...")])]},proxy:!0}])})],1)},d=[],l={name:"MakerTable",props:["data"],data:function(){return{dialog:!1,search:"",dialogDelete:!1,updateAirplane:!1,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Acronimo",value:"acronym"},{text:"Dirección",value:"address"},{text:"Nombre de la empresa",value:"businessName"},{text:"Contacto",value:"contact"},{text:"Pais",value:"country"},{text:"Teléfono",value:"telephone"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{acronym:"",address:"",businessName:"",contact:"",country:"",id:0,telephone:"",timesTammp:""},defaultItem:{}}},computed:{formTitle:function(){return this.updateAirplane?"Editar ":"Nuevo "}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},methods:{editItem:function(e){this.editedItem=Object.assign({},e),this.updateAirplane=!0,this.dialog=!0},deleteItem:function(e){this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.$emit("DeleteMaker",this.editedItem.id),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.updateAirplane?(this.loading=!0,this.$emit("updateMaker",this.editedItem)):this.$emit("addMaker",this.editedItem),this.updateAirplane=!1,this.close(),this.loading=!1}}},r=l,c=a(3736),m=a(3453),u=a.n(m),v=a(6847),p=a(2026),f=a(5255),h=a(7024),b=a(1819),k=a(1455),x=a(5634),I=a(4456),g=a(7894),D=a(2515),y=a(2660),M=a(1652),_=(0,c.Z)(r,o,d,!1,null,"b89d2502",null),T=_.exports;u()(_,{VBtn:v.Z,VCard:p.Z,VCardActions:f.h7,VCardText:f.ZB,VCardTitle:f.EB,VCol:h.Z,VContainer:b.Z,VDataTable:k.Z,VDialog:x.Z,VIcon:I.Z,VRow:g.Z,VSpacer:D.Z,VTextField:y.Z,VToolbar:M.Z});var C=a(629),Z={name:"Maker",components:{MakerTable:T},data:function(){return{jsonDataUpdate:{acronym:"",address:"",businessName:"",contact:"",country:"",id:0,telephone:"",timesTammp:""}}},created:function(){this.getMakerState()},computed:(0,n.Z)({},(0,C.Se)(["makerListState"])),methods:(0,n.Z)((0,n.Z)({},(0,C.nv)(["getMakerState","setMakernew","apiUpdateMaker","apiDeleteMaker"])),{},{addMaker:function(e){this.setMakernew(e)},updateMaker:function(e){this.jsonDataUpdate.acronym=e.acronym,this.jsonDataUpdate.address=e.address,this.jsonDataUpdate.businessName=e.businessName,this.jsonDataUpdate.contact=e.contact,this.jsonDataUpdate.country=e.country,this.jsonDataUpdate.id=e.id,this.jsonDataUpdate.telephone=e.telephone,this.jsonDataUpdate.timesTammp=e.timesTammp,this.apiUpdateMaker(this.jsonDataUpdate)},DeleteMaker:function(e){this.apiDeleteMaker(e)}})},$=Z,j=(0,c.Z)($,s,i,!1,null,"82819552",null),V=j.exports}}]);
//# sourceMappingURL=Maker-legacy.abff7caa.js.map