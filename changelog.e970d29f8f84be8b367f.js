(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{119:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l);const o=[{title:"Highlights",items:[n.a.createElement(n.a.Fragment,null,"Added multiple languages"),n.a.createElement(n.a.Fragment,null,"Customizable sections (settings)."),n.a.createElement(n.a.Fragment,null,"Fixed multiple issues."),n.a.createElement(n.a.Fragment,null,"Better support for mobile."),n.a.createElement(n.a.Fragment,null,"Better maps.")]},{title:"Development Notes",items:[n.a.createElement(n.a.Fragment,null,"If you would like to see all the changes we have made please read our"," ",n.a.createElement("a",{href:"https://github.com/Kedyn/fusliez-notes/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},"CHANGELOG.md")," ","file.")]}];var r=a(4),i=a(22),m=a(24),d=a(9),s=Object(d.d)(e=>({ChangelogPanel:e=>({padding:e.isMobile?"1rem":"0","& h3":{letterSpacing:"0.05em",margin:"1rem 0"},"& ul":{margin:"1rem 0"}}),ChangelogPanelTitle:{paddingBottom:"1rem",borderBottom:"1px solid "+e.borderColor,marginBottom:"1.5rem",fontSize:"2rem",fontWeight:200,letterSpacing:"0.05em"}}));t.default=function(){const e=Object(m.c)(i.b),t=s({isMobile:e});return n.a.createElement("div",{className:t.ChangelogPanel},e&&n.a.createElement("h2",{className:t.ChangelogPanelTitle},`fusliez notes v${r.c} notes`),o.map(({title:e,items:t},a)=>n.a.createElement("div",{key:a},n.a.createElement("h3",null,e),n.a.createElement("ul",null,t.map((e,t)=>n.a.createElement("li",{key:t},e))))))}},125:function(e,t,a){"use strict";a.r(t);var l=a(119),n=a(95),o=a(0),r=a.n(o),i=a(4);t.default=function(e){return r.a.createElement(n.a,Object.assign({title:`fusliez notes v${i.c} notes`},e),r.a.createElement(l.default,null))}},95:function(e,t,a){"use strict";var l=a(40),n=a(0),o=a.n(n),r=a(9),i=Object(r.d)(e=>({ModalBackdrop:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.9)",display:"flex",bottom:0,left:0,justifyContent:"center",position:"absolute",top:0,right:0,zIndex:1},Modal:{backgroundColor:e.backgroundColorPrimary,borderRadius:"0.5rem",display:"flex",width:"40rem",maxHeight:"90%",padding:"1rem 2rem"},ModalContent:{display:"flex",flexDirection:"column",alignItems:"stretch",width:"100%"},ModalHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.5rem",borderBottom:"1px solid "+e.borderColor},ModalTitle:{fontSize:"2rem",fontWeight:200,letterSpacing:"0.05em"},ModalClose:{appearance:"none",borderRadius:"50%",display:"block",width:"2rem",lineHeight:"2rem",padding:0},ModalBody:{padding:"1rem 0",overflowY:"auto"},ModalFooter:{borderTop:"1px solid "+e.borderColor,padding:"1rem 0"}}));t.a=function(e){const{show:t,title:a,footer:n,children:r,onClose:m}=e;if(t){const e=i();return o.a.createElement("div",{className:e.ModalBackdrop,onClick:()=>m()},o.a.createElement("div",{className:e.Modal,onClick:e=>e.stopPropagation()},o.a.createElement("div",{className:e.ModalContent},o.a.createElement("div",{className:e.ModalHeader},o.a.createElement("h2",{className:e.ModalTitle},a),o.a.createElement(l.a,{onClick:()=>m()})),o.a.createElement("div",{className:e.ModalBody},r),void 0!==n&&o.a.createElement("div",{className:e.ModalFooter},n))))}return o.a.createElement(o.a.Fragment,null)}}}]);