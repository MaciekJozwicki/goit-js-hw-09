const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),o=document.querySelector("body");let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearTimeout(d),t.disabled=!0,e.disabled=!1})),console.log(e,t,o);
//# sourceMappingURL=01-color-switcher.0e0bffc3.js.map