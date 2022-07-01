"use strict";(self["webpackChunkvuetify"]=self["webpackChunkvuetify"]||[]).push([[378],{7879:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("location-table",{attrs:{data:t.locationListState},on:{DeleteLocation:t.DeleteLocation,addLocation:t.addLocation,updateLocation:t.updateLocation}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("Ubicación")])])}],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.data,search:t.search,"sort-by":"Tipo",loading:t.loading,"loading-text":"Por favor espere...."},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-col",{attrs:{cols:"8",sm:"4",md:"2"}},[a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),i),[t._v(" Añadir ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Código"},model:{value:t.editedItem.code,callback:function(e){t.$set(t.editedItem,"code",e)},expression:"editedItem.code"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Ubicación"},model:{value:t.editedItem.location,callback:function(e){t.$set(t.editedItem,"location",e)},expression:"editedItem.location"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"timesTamp"},model:{value:t.editedItem.timesTamp,callback:function(e){t.$set(t.editedItem,"timesTamp",e)},expression:"editedItem.timesTamp"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Cancelar ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Guardar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("¿Está seguro que desea eliminar?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancelar")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("p",[t._v(" No se encontraron datos ...")])]},proxy:!0}])})],1)},l=[],n={name:"LocationTable",props:["data"],data:()=>({dialog:!1,search:"",loading:!1,dialogDelete:!1,updateAirplane:!1,headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Código",value:"code"},{text:"Ubicación",value:"location"},{text:"timesTamp",value:"timesTamp"},{text:"Actions",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{code:"",location:"",timesTamp:""},defaultItem:{}}),computed:{formTitle(){return this.updateAirplane?"Editar ":"Nuevo "}},watch:{dialog(t){t||this.close()},dialogDelete(t){t||this.closeDelete()}},methods:{editItem(t){this.editedItem=Object.assign({},t),this.updateAirplane=!0,this.dialog=!0},deleteItem(t){this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm(){this.$emit("DeleteLocation",this.editedItem.id),this.closeDelete()},close(){this.dialog=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}))},save(){this.updateAirplane?this.$emit("updateLocation",this.editedItem):this.$emit("addLocation",this.editedItem),this.updateAirplane=!1,this.close()}}},c=n,d=a(3736),r=a(3453),m=a.n(r),u=a(6847),v=a(2026),p=a(5255),h=a(7024),f=a(1819),b=a(1455),x=a(5634),g=a(4456),I=a(7894),L=a(2515),k=a(2660),D=a(1652),_=(0,d.Z)(c,s,l,!1,null,"2744a1d4",null),T=_.exports;m()(_,{VBtn:u.Z,VCard:v.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VCol:h.Z,VContainer:f.Z,VDataTable:b.Z,VDialog:x.Z,VIcon:g.Z,VRow:I.Z,VSpacer:L.Z,VTextField:k.Z,VToolbar:D.Z});var C=a(629),w={name:"Location",components:{LocationTable:T},data(){return{jsonDataUpdate:{code:"",id:0,location:"",timesTamp:""}}},created(){this.callGetLocationState()},computed:{...(0,C.Se)(["locationListState"])},methods:{...(0,C.nv)(["getLocationState","setLocationnew","apiUpdateLocation","apiDeleteLocation"]),async updateLocation(t){this.jsonDataUpdate.code=t.code,this.jsonDataUpdate.id=t.id,this.jsonDataUpdate.location=t.location,this.jsonDataUpdate.timesTamp=t.timesTamp,await this.apiUpdateLocation(this.jsonDataUpdate),await this.callGetLocationState()},async addLocation(t){await this.setLocationnew(t),await this.callGetLocationState()},async DeleteLocation(t){await this.apiDeleteLocation(t),await this.callGetLocationState()},async callGetLocationState(){await this.getLocationState()}}},y=w,V=(0,d.Z)(y,i,o,!1,null,"3f666700",null),Z=V.exports}}]);
//# sourceMappingURL=Location.502165e5.js.map