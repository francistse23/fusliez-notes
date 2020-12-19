(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{119:function(e,t,a){"use strict";a.r(t);var n=a(11),o=a(24),l=a(0),r=a.n(l),i=a(10),c=Object(i.d)(e=>({RadioButton:{display:"flex",alignItems:"center",paddingLeft:"0.5rem","& input:checked ~ $RadioControl $RadioControlBackdrop, & input:focus ~ $RadioControl $RadioControlBackdrop, & input:active ~ $RadioControl $RadioControlBackdrop":{backgroundColor:e.activeColor},"& input:focus ~ $RadioControl $RadioControlBackdrop, & input:active ~ $RadioControl $RadioControlBackdrop":{boxShadow:"0 0 1px 1px "+e.activeColor},"& input:checked ~ $RadioControl $RadioControlIcon":{transform:"translate(-50%, -50%) scale(1)",backgroundColor:e.textColorPrimary}},RadioControl:{position:"relative",display:"inline-block",width:"1em",height:"1em",marginRight:"1rem"},RadioControlBackdrop:{position:"absolute",display:"block",top:0,left:0,right:0,bottom:0,borderRadius:"50%",transition:"background-color 0.2s ease",backgroundColor:e.borderColor},RadioControlIcon:{position:"absolute",display:"block",top:"50%",left:"50%",transform:"translate(-50%, -50%) scale(0)",transformOrigin:"50% 50%",height:"0.5em",width:"0.5em",borderRadius:"50%",transition:"transform 0.2s ease"},RadioLabel:{display:"inline-block",padding:"0.5rem 0"}})),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a};var d=function(e){const t=c(),{label:a,checked:n,id:o,name:l,value:i,onChange:d}=e,m=s(e,["label","checked","id","name","value","onChange"]),b=l||o;return r.a.createElement("label",Object.assign({className:t.RadioButton,htmlFor:o},m),r.a.createElement("input",{className:"sr-only",type:"radio",id:o,name:b,value:i,onChange:d,checked:n}),r.a.createElement("span",{className:t.RadioControl},r.a.createElement("span",{className:t.RadioControlBackdrop}),r.a.createElement("span",{className:t.RadioControlIcon})),r.a.createElement("span",{className:t.RadioLabel},a))},m=a(95),b=a(96),g=a(15),p=a(40),u=a(42),h=a(99),f=a(22),y=Object(i.d)({SettingsPlayersSections:{},SettingsPlayersSectionItem:{display:"flex",marginBottom:"0.5rem"},SettingsPlayersSectionsHandle:{cursor:"grab","&:active":{cursor:"grabbing"}},SettingsInputContainer:{flexGrow:1,padding:"0 0.5rem"},SettingsInput:{display:"block",width:"100%"},SettingsPlayersSection:{cursor:"pointer",padding:"0 0.5rem","&[data-selected='false']":{opacity:.25}},SettingsDeleteButton:{padding:"0rem 0.25rem",marginRight:"0.5rem"},SettingsSectionsButtons:{display:"flex",justifyContent:"space-between",marginRight:"0.5rem"}});var C=function(){const e=Object(o.c)(f.b),t=Object(o.c)(g.f),a=Object(o.c)(g.e),{id:n}=Object(o.c)(g.c),{id:l}=Object(o.c)(g.g),i=y(),c=Object(o.b)(),{t:s}=Object(m.a)();function d({list:e}){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.SettingsPlayersSection,"data-selected":a===e.id,onClick:()=>c(Object(g.k)(e.id))},r.a.createElement(u.a,{icon:"users"})),r.a.createElement("div",{className:i.SettingsPlayersSection,"data-selected":n===e.id,onClick:()=>c(Object(g.j)(e.id))},r.a.createElement(u.a,{icon:"skull-crossbones"})),r.a.createElement("div",{className:i.SettingsPlayersSection,"data-selected":l===e.id,onClick:()=>c(Object(g.l)(e.id))},r.a.createElement(u.a,{icon:"users-slash"})))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.ReactSortable,{handle:".list-handle",delayOnTouchOnly:e,delay:e?10:0,forceFallback:!0,list:t,setList:e=>c(Object(g.n)(e)),className:i.SettingsPlayersSections},t.map(e=>r.a.createElement("div",{key:e.id,className:i.SettingsPlayersSectionItem},r.a.createElement("div",{className:"list-handle "+i.SettingsPlayersSectionsHandle},r.a.createElement(u.a,{icon:"sort",size:"lg"})),r.a.createElement("div",{className:i.SettingsInputContainer},r.a.createElement("input",{disabled:"main.lists.dead"===e.title,type:"text",placeholder:"Section name",className:i.SettingsInput,onChange:t=>{c(Object(g.o)({index:e.id,title:t.currentTarget.value}))},value:s(e.title)})),r.a.createElement(d,{list:e}),r.a.createElement("div",null,r.a.createElement(p.b,{danger:e.id!==a,className:i.SettingsDeleteButton,onClick:()=>{e.id!==a&&c(Object(g.n)([...t.filter(t=>t.id!==e.id)]))},disabled:e.id===a},r.a.createElement(u.a,{icon:"times",size:"sm"})))))),r.a.createElement("div",{className:i.SettingsSectionsButtons},r.a.createElement(p.b,{onClick:()=>{c(Object(g.n)([...t,{id:t.length,title:"",players:[]}]))}},s("settings.addSection")),r.a.createElement(p.b,{danger:!0,onClick:()=>{c(Object(g.h)())}},s("settings.resetSections"))),r.a.createElement("p",null,r.a.createElement("small",null,r.a.createElement(b.a,{i18nKey:"settings.sectionsNote"},"Note: changing the default section (",r.a.createElement(u.a,{icon:"users",size:"sm"}),") will only be affected after clicking Reset Round or Reset All."))))};var S=Object(i.d)(e=>({Switch:{display:"flex",margin:"0.5rem 0",alignItems:"center",justifyContent:"space-between"},SwitchLabel:{display:"inline-block",padding:"0.5rem 0"},SwitchButton:{appearance:"none",backgroundColor:e.borderColor,borderRadius:"1rem/50%",border:"none",width:"3.75rem",height:"2rem",display:"inline-block",overflow:"hidden",outline:"none",position:"relative",cursor:"pointer",transition:"background-color ease 0.2s",marginLeft:"1rem",marginRight:"1rem",boxShadow:"inset 1px 1px 1px rgba(0,0,0,0.25)","&::before":{position:"absolute",content:'""',display:"block",height:"0.5rem",left:"0.6rem",top:"0.7rem",width:"1rem",transform:"rotate(-45deg)",borderLeft:"0.25rem solid "+e.textColorPrimary,borderBottom:"0.25rem solid "+e.textColorPrimary,opacity:0,transition:"opacity 0.3s"},"&::after":{position:"absolute",content:'""',display:"block",top:"0.25rem",left:"0.25rem",bottom:"0.25rem",height:"1.5rem",width:"1.5rem",borderRadius:"50%",background:e.textColorSecondary,transition:"all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s"},"&:checked":{backgroundColor:e.activeColor},"&:checked::before":{opacity:1},"&:checked::after":{left:"calc(100% - 1.75rem)"}}})),E=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a};var k=function(e){const t=S(),{label:a}=e,n=E(e,["label"]);return r.a.createElement("div",{className:t.Switch},r.a.createElement("label",{className:t.SwitchLabel},a),r.a.createElement("input",Object.assign({className:t.SwitchButton,type:"checkbox"},n)))},v=a(38),O=Object(i.d)(e=>({SettingsPanel:e=>({padding:e.isMobile?"1rem":"0","& h3":{letterSpacing:"0.05em"}}),SettingsPanelTitle:{paddingBottom:"1rem",borderBottom:"1px solid "+e.borderColor,marginBottom:"1.5rem",fontSize:"2rem",fontWeight:200,letterSpacing:"0.05em"},SettingsContent:{display:"flex",flexWrap:"wrap"},SettingsPane:t=>({flex:t.isMobile?"0 0 100%":"0 0 50%","&:not(:last-child)":{paddingBottom:"1rem",borderBottom:t.isMobile?"1px solid "+e.borderColor:"0",borderRight:t.isMobile?"0":"1px solid "+e.borderColor,marginBottom:"1rem"},"&:last-child":{paddingLeft:t.isMobile?"0":"1rem"}}),SettingsContentDivider:{margin:"1rem",borderBottom:"1px solid "+e.borderColor}}));t.default=function(){const e=Object(o.c)(f.b),t=Object(o.c)(n.c),a=Object(o.c)(n.b),l=Object(o.b)(),{t:i}=Object(m.a)(),[c,s]=r.a.useState("en-US"),b=O({isMobile:e});r.a.useEffect(()=>{const e=localStorage.getItem("i18nextLng");e&&s(e)},[]);const g=e=>{const t=e.currentTarget.value;v.a.changeLanguage(t),s(t)};return r.a.createElement("div",{className:b.SettingsPanel},e&&r.a.createElement("h2",{className:b.SettingsPanelTitle},i("settings.title")),r.a.createElement("div",{className:b.SettingsContent},r.a.createElement("div",{className:b.SettingsPane},r.a.createElement("h4",null,i("settings.playerTiles")),r.a.createElement(k,{label:i("settings.usePlayerNames"),onChange:e=>{l(Object(n.f)(e.currentTarget.checked))},checked:t}),r.a.createElement(k,{label:i("settings.colorBlindMode"),onChange:e=>{l(Object(n.e)(e.currentTarget.checked))},checked:a}),r.a.createElement("div",{className:b.SettingsContentDivider}),r.a.createElement(C,null)),r.a.createElement("div",{className:b.SettingsPane},r.a.createElement("h4",null,i("settings.language")),[{id:"en-US",label:"English (US)"},{id:"es-MX",label:"Spanish (MX)"},{id:"pt-BR",label:"Portuguese (BR)"},{id:"ru-RU",label:"Russian (RU)"},{id:"de-DE",label:"German (DE)"},{id:"fa-IR",label:"Persian (IR)"},{id:"pl-PL",label:"Polish (PL)"},{id:"fr-FR",label:"French (FR)"},{id:"cs-CZ",label:"Czech (CZ)"},{id:"he-IL",label:"Hebrew (IL)"},{id:"mg-MG",label:"Malagasy (MG)"}].map((e,t)=>r.a.createElement(d,{key:t,label:e.label,name:"appLanguage",id:e.id,value:e.id,onChange:g,checked:c===e.id})))))}},125:function(e,t,a){"use strict";a.r(t);var n=a(97),o=a(0),l=a.n(o),r=a(119),i=a(95);t.default=function(e){const{show:t,onClose:a}=e,{t:o}=Object(i.a)();return l.a.createElement(n.a,{show:t,onClose:a,title:o("settings.title")},l.a.createElement(r.default,null))}},97:function(e,t,a){"use strict";var n=a(40),o=a(0),l=a.n(o),r=a(10),i=Object(r.d)(e=>({ModalBackdrop:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.9)",display:"flex",bottom:0,left:0,justifyContent:"center",position:"absolute",top:0,right:0,zIndex:1},Modal:{backgroundColor:e.backgroundColorPrimary,borderRadius:"0.5rem",display:"flex",width:"40rem",maxHeight:"90%",padding:"1rem 2rem"},ModalContent:{display:"flex",flexDirection:"column",alignItems:"stretch",width:"100%"},ModalHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.5rem",borderBottom:"1px solid "+e.borderColor},ModalTitle:{fontSize:"2rem",fontWeight:200,letterSpacing:"0.05em"},ModalClose:{appearance:"none",borderRadius:"50%",display:"block",width:"2rem",lineHeight:"2rem",padding:0},ModalBody:{padding:"1rem 0",overflowY:"auto"},ModalFooter:{borderTop:"1px solid "+e.borderColor,padding:"1rem 0"}}));t.a=function(e){const{show:t,title:a,footer:o,children:r,onClose:c}=e;if(t){const e=i();return l.a.createElement("div",{className:e.ModalBackdrop,onClick:()=>c()},l.a.createElement("div",{className:e.Modal,onClick:e=>e.stopPropagation()},l.a.createElement("div",{className:e.ModalContent},l.a.createElement("div",{className:e.ModalHeader},l.a.createElement("h2",{className:e.ModalTitle},a),l.a.createElement(n.a,{onClick:()=>c()})),l.a.createElement("div",{className:e.ModalBody},r),void 0!==o&&l.a.createElement("div",{className:e.ModalFooter},o))))}return l.a.createElement(l.a.Fragment,null)}}}]);