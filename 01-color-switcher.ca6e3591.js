const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};t.btnStart.addEventListener("click",(function(){t.btnStart.setAttribute("disabled",!1),e=setInterval((()=>{console.log("Клик по кнопке старт!"),document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.removeAttribute("disabled"),clearInterval(e)}));let e=null;
//# sourceMappingURL=01-color-switcher.ca6e3591.js.map