(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{20:function(e,t,n){e.exports=n(28)},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),c=n(17),i=n.n(c),l=(n(25),n(6)),u=n(40),s=function(e){return"@media screen and (max-width: ".concat({md:"950px",sx:"545px"}[e],")")},d=Object(u.a)({App:(a={width:"50%",margin:"5vh auto 0",fontFamily:"Nunito",color:"#202021"},Object(l.a)(a,s("md"),{width:"80%"}),Object(l.a)(a,s("xs"),{width:"90%"}),a),header:{textAlign:"center",marginBottom:"1rem","& h1":{fontSize:"2.6rem",fontWeight:"400"},"& h2":{fontSize:"1rem",fontWeight:"400"}},span:{color:"#4287f5",fontWeight:"700"}}),m=n(3),p=n(41),f=Object(p.a)({FormStyles:{width:"100%",marginBottom:"2rem",display:"flex",justifyContent:"center",alignItems:"center"},input:{width:"80%",fontSize:"1.2rem",border:"none",borderBottom:"2px solid #ccc",outline:"none",paddingLeft:"2px",paddingBottom:"4px",fontFamily:"Nunito",transition:"border-bottom 0.2s ease","&:focus":{borderBottom:"2px solid #4287f5",outline:"none"},'& input[type="text"]':{transform:"translateY(-25px)"}}}),b=function(e){var t=Object(o.useState)(e),n=Object(m.a)(t,2),a=n[0],r=n[1];return[a,function(e){return r(e.target.value)},function(){return r("")}]},O=n(9),h=n(19),E=n(18),g=function(e,t){switch(t.type){case"ADD_TODO":return[].concat(Object(h.a)(e),[{id:Object(E.uuid)(),task:t.task,completed:!1}]);case"DELETE_TODO":return e.filter((function(e){return e.id!==t.id}));case"EDIT_TODO":return e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{task:t.task}):e}));case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(O.a)(Object(O.a)({},e),{},{completed:!e.completed}):e}));default:return e}};var j=[{id:"0",task:"Wash the dishes",completed:!1},{id:"1",task:"Eat a lunch",completed:!1},{id:"2",task:"Make groceries",completed:!0}],x=Object(o.createContext)(),v=Object(o.createContext)();function y(e){var t=function(e,t,n){var a=Object(o.useReducer)(t,n,(function(){var t;try{t=JSON.parse(window.localStorage.getItem(e)||String(n))}catch(a){t=n}return t})),r=Object(m.a)(a,2),c=r[0],i=r[1];return Object(o.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,i]}("todos",g,j),n=Object(m.a)(t,2),a=n[0],c=n[1];return r.a.createElement(x.Provider,{value:a},r.a.createElement(v.Provider,{value:c},e.children))}var k=function(){var e=Object(o.useContext)(v),t=b(),n=Object(m.a)(t,3),a=n[0],c=n[1],i=n[2],l=f();return r.a.createElement("form",{className:l.FormStyles,onSubmit:function(t){t.preventDefault(),e({type:"ADD_TODO",task:a}),i()}},r.a.createElement("input",{onChange:function(e){return c(e)},className:l.input,value:a||"",type:"text",placeholder:"Enter a new todo..."}))},w=Object(p.a)({Todo:{color:"#202021"},icons:{marginRight:"5px"}}),D=Object(p.a)({EditForm:{width:"80%"},input:{width:"80%",fontSize:"16px",fontFamily:"Nunito",border:"none",borderBottom:"2px solid #ccc",outline:"none",paddingLeft:"2px",paddingBottom:"4px",backgroundColor:"transparent",transition:"border-bottom 0.2s ease","&:focus":{borderBottom:"2px solid #4287f5",outline:"none"},'& input[type="text"]':{transform:"translateY(-25px)"}}});var S=function(e){var t=e.id,n=(e.task,e.toggle),a=D(),c=Object(o.useContext)(v),i=b(),l=Object(m.a)(i,3),u=l[0],s=l[1],d=l[2];return r.a.createElement("form",{className:a.EditForm,onSubmit:function(e){e.preventDefault(),c({type:"EDIT_TODO",id:t,task:u}),n(),d()}},r.a.createElement("input",{autoFocus:!0,onClick:function(e){e.stopPropagation()},onChange:s,className:a.input,value:u||"",type:"text",placeholder:"Edit your todo..."}))};var T=Object(o.memo)((function(e){var t=e.id,n=e.task,a=e.completed,c=Object(o.useContext)(v),i=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(o.useState)(e),n=Object(m.a)(t,2),a=n[0],r=n[1],c=function(){return r(!a)};return[a,c]}(!1),l=Object(m.a)(i,2),u=l[0],s=l[1],d=w();return u?r.a.createElement("li",{className:d.Todo,onClick:function(){return s()},style:{overflowY:"hidden"}},r.a.createElement(S,{id:t,task:n,toggle:s})):r.a.createElement("li",{className:d.Todo,onClick:function(){return c({type:"TOGGLE_TODO",id:t})}},r.a.createElement("span",{style:{textDecoration:a?"line-through":"",color:a?"#ccc":"#202021"}},n),r.a.createElement("div",{className:d.icons},r.a.createElement("i",{style:{color:"#c4321b",marginRight:"5px"},className:"fas fa-trash",onClick:function(e){c({type:"DELETE_TODO",id:t}),e.stopPropagation()}}),r.a.createElement("i",{className:"fas fa-pencil-alt",onClick:function(e){s(),e.stopPropagation()}})))})),N=Object(p.a)({ListStyles:{listStyle:"none",margin:"0 auto","& li":{width:"100%",padding:".8rem .5rem",color:"#202021",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.2s ease-out","&:hover":{background:"#e3e1e1",cursor:"pointer"}}}});var C=function(){var e=Object(o.useContext)(x),t=N();return r.a.createElement("ul",{className:t.ListStyles},e.map((function(e){return r.a.createElement(T,Object.assign({key:e.id},e))})))};var B=function(){return r.a.createElement(y,null,r.a.createElement(k,null),r.a.createElement(C,null))};var F=function(){var e=d();return r.a.createElement("div",{className:e.App},r.a.createElement("header",{className:e.header},r.a.createElement("h1",null,"To-Do ",r.a.createElement("span",{className:e.span},"App")),r.a.createElement("h2",null,"A simple Todo app built with useReducer and useContext")),r.a.createElement(B,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7b5120ea.chunk.js.map