(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{124:function(e,t,n){"use strict";n.r(t);var a=n(40),i=n(0),r=n.n(i),o=n(41),l=n.n(o),s=n(10),c=Object(s.d)(e=>({Backdrop:{position:"fixed",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.75)",zIndex:"100",top:0,left:0,transition:"opacity 0.4s ease-in",opacity:0,pointerEvents:"none"},isBackdropOpen:{opacity:1,pointerEvents:"auto",transitionTimingFunction:"ease-out"},SlideDrawer:{alignItems:"center",background:e.backgroundColorPrimary,height:"100%","-webkit-overflow-scrolling":"touch",left:"-100%",overflowY:"scroll",width:"calc(100vw - 2rem)",position:"fixed",padding:"1rem",top:"0",transition:"left 0.4s ease-in",zIndex:"200",display:"flex",flexDirection:"column",justifyContent:"space-between"},isDrawerOpen:{left:"0%",transitionTimingFunction:"ease-out"},SlideDrawerContent:{flex:"1 0 auto",alignSelf:"stretch"},SlideDrawerHeader:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",paddingBottom:"0.5rem",borderBottom:"1px solid "+e.borderColor,marginBottom:"0.5rem","& h1":{fontSize:"2rem",fontWeight:200,letterSpacing:"0.05em"},"& h2":{fontSize:"0.875rem",fontWeight:500,letterSpacing:"0.05em"}},SlideDrawerSubheader:{},SlideDrawerNav:{listStyleType:"none",margin:0,padding:0},SlideDrawerNavItem:{display:"block",fontSize:"1.5rem",fontWeight:500,letterSpacing:"0.05em",padding:"0.5rem 0",cursor:"pointer",transition:"padding-left 0.2s ease-in","&:hover":{paddingLeft:"1.5rem",transitionTimingFunction:"ease-out"}},minorItem:{fontSize:"1rem",opacity:.7,padding:"0.25rem 0"},SlideDrawerEmote:{width:"4rem",height:"auto",alignSelf:"flex-start",marginBottom:"1rem"}}));t.default=function(e){const t=c(),{isDrawerOpen:n,setIsDrawerOpen:i,views:o,setActiveView:s}=e,d=r.a.useRef(null);return r.a.useEffect(()=>{function e(e){var t;d.current&&!(null===(t=null==d?void 0:d.current)||void 0===t?void 0:t.contains(e.target))&&i(!1)}return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l()(t.Backdrop,{[t.isBackdropOpen]:n})}),r.a.createElement("div",{className:l()(t.SlideDrawer,{[t.isDrawerOpen]:n}),ref:d},r.a.createElement("div",{className:t.SlideDrawerContent},r.a.createElement("div",{className:t.SlideDrawerHeader},r.a.createElement("div",null,r.a.createElement("h1",null,"fusliez notes"),r.a.createElement("h2",null,"(an Among Us companion app)")),r.a.createElement(a.a,{onClick:()=>i(!1)})),r.a.createElement("ul",{className:t.SlideDrawerNav},o.map((e,n)=>r.a.createElement("li",{key:n,className:l()({[t.SlideDrawerNavItem]:!0,[t.minorItem]:e.minor}),onClick:()=>(e=>{s(e),i(!1)})(e)},e.title))))))}}}]);