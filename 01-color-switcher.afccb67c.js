!function(){var t={colorWidget:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},n=null;t.startBtn.addEventListener("click",(function(){null===n&&(n=setInterval((function(){t.colorWidget.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.startBtn.disabled=!0)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!1,n=null}))}();
//# sourceMappingURL=01-color-switcher.afccb67c.js.map