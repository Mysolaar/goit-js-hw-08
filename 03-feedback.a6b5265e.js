!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire4c75;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire4c75=n);var l=n("1WSnx"),o=document.querySelector(".feedback-form");o.addEventListener("input",(function(){var e=o.elements.email.value,t=o.elements.message.value;localStorage.setItem("feedback-form-state",JSON.stringify({email:e,message:t}))})),window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e),a=t.email,n=t.message;o.elements.email.value=a,o.elements.message.value=n}})),o.addEventListener("submit",(function(e){e.preventDefault(),o.reset(),localStorage.removeItem("feedback-form-state"),console.log({email:o.elements.email.value,message:o.elements.message.value})})),o.addEventListener("input",(0,l.throttle)((function(){o.elements.email.value})))}();
//# sourceMappingURL=03-feedback.a6b5265e.js.map
