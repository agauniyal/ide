!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";var e={title:"",titleText:"",text:"",html:"",type:null,toast:!1,customClass:"",target:"body",backdrop:!0,animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:"40px",onBeforeOpen:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},t=["useRejections","expectRejections"],n=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},o=n(["container","shown","iosfix","popup","modal","no-backdrop","toast","toast-shown","overlay","fade","show","hide","noanimation","close","title","content","contentwrapper","buttonswrapper","confirm","cancel","icon","image","input","has-input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen"]),r=n(["success","warning","info","question","error"]),i="SweetAlert2:",a=function(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",o=0;o<3;o++){var r=parseInt(e.substr(2*o,2),16);n+=("00"+(r=Math.round(Math.min(Math.max(0,r+r*t),255)).toString(16))).substr(r.length)}return n},s=function(e){console.warn(i+" "+e)},l=function(e){console.error(i+" "+e)},u=[],c=function(e){-1===u.indexOf(e)&&(u.push(e),s(e))},d={previousActiveElement:null,previousBodyPadding:null},p=function(){return"undefined"==typeof window||"undefined"==typeof document},f=function(e){var t=b();t&&(t.parentNode.removeChild(t),V([document.documentElement,document.body],[o["no-backdrop"],o["has-input"],o["toast-shown"]]));{if(!p()){var n=document.createElement("div");n.className=o.container,n.innerHTML=m;("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(n);var r=g(),i=j(r,o.input),a=j(r,o.file),s=r.querySelector("."+o.range+" input"),u=r.querySelector("."+o.range+" output"),c=j(r,o.select),d=r.querySelector("."+o.checkbox+" input"),f=j(r,o.textarea);r.setAttribute("aria-live",e.toast?"polite":"assertive");var v=function(){$.isVisible()&&$.resetValidationError()};return i.oninput=v,a.onchange=v,c.onchange=v,d.onchange=v,f.oninput=v,s.oninput=function(){v(),u.value=s.value},s.onchange=function(){v(),s.previousSibling.value=s.value},r}l("SweetAlert2 requires document to initialize")}},m=('\n <div role="dialog" aria-modal="true" aria-labelledby="'+o.title+'" aria-describedby="'+o.content+'" class="'+o.popup+'" tabindex="-1">\n   <ul class="'+o.progresssteps+'"></ul>\n   <div class="'+o.icon+" "+r.error+'">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="'+o.icon+" "+r.question+'">?</div>\n   <div class="'+o.icon+" "+r.warning+'">!</div>\n   <div class="'+o.icon+" "+r.info+'">i</div>\n   <div class="'+o.icon+" "+r.success+'">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="'+o.image+'" />\n   <div class="'+o.contentwrapper+'">\n   <h2 class="'+o.title+'" id="'+o.title+'"></h2>\n   <div id="'+o.content+'" class="'+o.content+'"></div>\n   </div>\n   <input class="'+o.input+'" />\n   <input type="file" class="'+o.file+'" />\n   <div class="'+o.range+'">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="'+o.select+'"></select>\n   <div class="'+o.radio+'"></div>\n   <label for="'+o.checkbox+'" class="'+o.checkbox+'">\n     <input type="checkbox" />\n   </label>\n   <textarea class="'+o.textarea+'"></textarea>\n   <div class="'+o.validationerror+'" id="'+o.validationerror+'"></div>\n   <div class="'+o.buttonswrapper+'">\n     <button type="button" class="'+o.confirm+'">OK</button>\n     <button type="button" class="'+o.cancel+'">Cancel</button>\n   </div>\n   <button type="button" class="'+o.close+'">×</button>\n </div>\n').replace(/(^|\n)\s*/g,""),b=function(){return document.body.querySelector("."+o.container)},g=function(){return b()?b().querySelector("."+o.popup):null},v=function(e){return b()?b().querySelector("."+e):null},h=function(){return v(o.title)},y=function(){return v(o.content)},w=function(){return v(o.image)},C=function(){return v(o.progresssteps)},x=function(){return v(o.validationerror)},k=function(){return v(o.confirm)},S=function(){return v(o.cancel)},A=function(){return v(o.buttonswrapper)},B=function(){return v(o.close)},P=function(){var e=Array.from(g().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex")),e>t?1:e<t?-1:0}),t=Array.prototype.slice.call(g().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));return function(e){var t=[];for(var n in e)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t))},E=function(){return!document.body.classList.contains(o["toast-shown"])},L=function(e,t){return!!e.classList&&e.classList.contains(t)},T=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},q=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},O=function(e,t){q(e,t,!0)},V=function(e,t){q(e,t,!1)},j=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(L(e.childNodes[n],t))return e.childNodes[n]},N=function(e,t){t||(t=e===g()||e===A()?"flex":"block"),e.style.opacity="",e.style.display=t},M=function(e){e.style.opacity="",e.style.display="none"},H=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},R=function(){if(p())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U=D({},e),W=[],z=void 0,K=void 0;"undefined"==typeof Promise&&l("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");var Z=function(e){for(var t in e)$.isValidParameter(t)||s('Unknown parameter "'+t+'"'),$.isDeprecatedParameter(t)&&c('The parameter "'+t+'" is deprecated and will be removed in the next major release.')},_=function(t){("string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(s('Target parameter is not valid, defaulting to "body"'),t.target="body");var n=void 0,i=g(),a="string"==typeof t.target?document.querySelector(t.target):t.target;n=i&&a&&i.parentNode!==a.parentNode?f(t):i||f(t);var u=t.width===e.width&&t.toast?"auto":t.width;n.style.width="number"==typeof u?u+"px":u;var c=t.padding===e.padding&&t.toast?"inherit":t.padding;n.style.padding="number"==typeof c?c+"px":c,n.style.background=t.background;for(var d=n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),p=0;p<d.length;p++)d[p].style.background=t.background;var m=b(),v=h(),x=y(),P=A(),E=k(),L=S(),T=B();if(t.titleText?v.innerText=t.titleText:v.innerHTML=t.title.split("\n").join("<br />"),t.backdrop||O([document.documentElement,document.body],o["no-backdrop"]),t.text||t.html){if("object"===I(t.html))if(x.innerHTML="",0 in t.html)for(var q=0;q in t.html;q++)x.appendChild(t.html[q].cloneNode(!0));else x.appendChild(t.html.cloneNode(!0));else t.html?x.innerHTML=t.html:t.text&&(x.textContent=t.text);N(x)}else M(x);if(t.position in o&&O(m,o[t.position]),t.grow&&"string"==typeof t.grow){var j="grow-"+t.grow;j in o&&O(m,o[j])}t.showCloseButton?(T.setAttribute("aria-label",t.closeButtonAriaLabel),N(T)):M(T),n.className=o.popup,t.toast?(O([document.documentElement,document.body],o["toast-shown"]),O(n,o.toast)):O(n,o.modal),t.customClass&&O(n,t.customClass);var H=C(),R=parseInt(null===t.currentProgressStep?$.getQueueStep():t.currentProgressStep,10);t.progressSteps.length?(N(H),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(H),R>=t.progressSteps.length&&s("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(function(e,n){var r=document.createElement("li");if(O(r,o.progresscircle),r.innerHTML=e,n===R&&O(r,o.activeprogressstep),H.appendChild(r),n!==t.progressSteps.length-1){var i=document.createElement("li");O(i,o.progressline),i.style.width=t.progressStepsDistance,H.appendChild(i)}})):M(H);for(var D=g().querySelectorAll("."+o.icon),U=0;U<D.length;U++)M(D[U]);if(t.type){var W=!1;for(var z in r)if(t.type===z){W=!0;break}if(!W)return l("Unknown alert type: "+t.type),!1;var K=n.querySelector("."+o.icon+"."+r[t.type]);if(N(K),t.animation)switch(t.type){case"success":O(K,"swal2-animate-success-icon"),O(K.querySelector(".swal2-success-line-tip"),"swal2-animate-success-line-tip"),O(K.querySelector(".swal2-success-line-long"),"swal2-animate-success-line-long");break;case"error":O(K,"swal2-animate-error-icon"),O(K.querySelector(".swal2-x-mark"),"swal2-animate-x-mark")}}var Z=w();t.imageUrl?(Z.setAttribute("src",t.imageUrl),Z.setAttribute("alt",t.imageAlt),N(Z),t.imageWidth?Z.setAttribute("width",t.imageWidth):Z.removeAttribute("width"),t.imageHeight?Z.setAttribute("height",t.imageHeight):Z.removeAttribute("height"),Z.className=o.image,t.imageClass&&O(Z,t.imageClass)):M(Z),t.showCancelButton?L.style.display="inline-block":M(L),t.showConfirmButton?function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)}(E,"display"):M(E),t.showConfirmButton||t.showCancelButton?N(P):M(P),E.innerHTML=t.confirmButtonText,L.innerHTML=t.cancelButtonText,E.setAttribute("aria-label",t.confirmButtonAriaLabel),L.setAttribute("aria-label",t.cancelButtonAriaLabel),t.buttonsStyling&&(E.style.backgroundColor=t.confirmButtonColor,L.style.backgroundColor=t.cancelButtonColor),E.className=o.confirm,O(E,t.confirmButtonClass),L.className=o.cancel,O(L,t.cancelButtonClass),t.buttonsStyling?O([E,L],o.styled):(V([E,L],o.styled),E.style.backgroundColor=E.style.borderLeftColor=E.style.borderRightColor="",L.style.backgroundColor=L.style.borderLeftColor=L.style.borderRightColor=""),!0===t.animation?V(n,o.noanimation):O(n,o.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&s("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://limonte.github.io/sweetalert2/#ajax-request")},Q=function(){null===d.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(d.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},Y=function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!L(document.body,o.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",O(document.body,o.iosfix)}},$=function e(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if("undefined"!=typeof window){if(void 0===n[0])return l("SweetAlert2 expects at least 1 attribute!"),!1;var i=D({},U);switch(I(n[0])){case"string":i.title=n[0],i.html=n[1],i.type=n[2];break;case"object":if(Z(n[0]),D(i,n[0]),i.extraParams=n[0].extraParams,"email"===i.input&&null===i.inputValidator){var s=function(e){return new Promise(function(t,n){/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?t():n("Invalid email address")})};i.inputValidator=i.expectRejections?s:e.adaptInputValidator(s)}if("url"===i.input&&null===i.inputValidator){var u=function(e){return new Promise(function(t,n){/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?t():n("Invalid URL")})};i.inputValidator=i.expectRejections?u:e.adaptInputValidator(u)}break;default:return l('Unexpected type of argument! Expected "string" or "object", got '+I(n[0])),!1}_(i);var c=b(),p=g();return new Promise(function(t,n){var r=function(n){e.closePopup(i.onClose),t(i.useRejections?n:{value:n})},s=function(o){e.closePopup(i.onClose),i.useRejections?n(o):t({dismiss:o})},u=function(t){e.closePopup(i.onClose),n(t)};i.timer&&(p.timeout=setTimeout(function(){return s("timer")},i.timer));var f=function(e){if(!(e=e||i.input))return null;switch(e){case"select":case"textarea":case"file":return j(p,o[e]);case"checkbox":return p.querySelector("."+o.checkbox+" input");case"radio":return p.querySelector("."+o.radio+" input:checked")||p.querySelector("."+o.radio+" input:first-child");case"range":return p.querySelector("."+o.range+" input");default:return j(p,o.input)}};i.input&&setTimeout(function(){var e=f();e&&T(e)},0);for(var m=function(t){if(i.showLoaderOnConfirm&&e.showLoading(),i.preConfirm){e.resetValidationError();var n=Promise.resolve().then(function(){return i.preConfirm(t,i.extraParams)});i.expectRejections?n.then(function(e){return r(e||t)},function(t){e.hideLoading(),t&&e.showValidationError(t)}):n.then(function(n){H(x())?e.hideLoading():r(n||t)},function(e){return u(e)})}else r(t)},v=function(t){var n=t||window.event,o=n.target||n.srcElement,r=k(),l=S(),c=r&&(r===o||r.contains(o)),d=l&&(l===o||l.contains(o));switch(n.type){case"mouseover":case"mouseup":i.buttonsStyling&&(c?r.style.backgroundColor=a(i.confirmButtonColor,-.1):d&&(l.style.backgroundColor=a(i.cancelButtonColor,-.1)));break;case"mouseout":i.buttonsStyling&&(c?r.style.backgroundColor=i.confirmButtonColor:d&&(l.style.backgroundColor=i.cancelButtonColor));break;case"mousedown":i.buttonsStyling&&(c?r.style.backgroundColor=a(i.confirmButtonColor,-.2):d&&(l.style.backgroundColor=a(i.cancelButtonColor,-.2)));break;case"click":if(c&&e.isVisible())if(e.disableButtons(),i.input){var p=function(){var e=f();if(!e)return null;switch(i.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return i.inputAutoTrim?e.value.trim():e.value}}();if(i.inputValidator){e.disableInput();var b=Promise.resolve().then(function(){return i.inputValidator(p,i.extraParams)});i.expectRejections?b.then(function(){e.enableButtons(),e.enableInput(),m(p)},function(t){e.enableButtons(),e.enableInput(),t&&e.showValidationError(t)}):b.then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationError(t):m(p)},function(e){return u(e)})}else m(p)}else m(!0);else d&&e.isVisible()&&(e.disableButtons(),s("cancel"))}},q=p.querySelectorAll("button"),D=0;D<q.length;D++)q[D].onclick=v,q[D].onmouseover=v,q[D].onmouseout=v,q[D].onmousedown=v;if(B().onclick=function(){s("close")},i.toast)p.onclick=function(t){t.target!==p||i.showConfirmButton||i.showCancelButton||i.allowOutsideClick&&(e.closePopup(i.onClose),s("overlay"))};else{var U=!1;p.onmousedown=function(){c.onmouseup=function(e){c.onmouseup=void 0,e.target===c&&(U=!0)}},c.onmousedown=function(){p.onmouseup=function(e){p.onmouseup=void 0,(e.target===p||p.contains(e.target))&&(U=!0)}},c.onclick=function(e){U?U=!1:e.target===c&&i.allowOutsideClick&&("function"==typeof i.allowOutsideClick?i.allowOutsideClick()&&s("overlay"):s("overlay"))}}var W=A(),Z=k(),$=S();i.reverseButtons?Z.parentNode.insertBefore($,Z):Z.parentNode.insertBefore(Z,$);var J=function(e,t){for(var n=P(i.focusCancel),o=0;o<n.length;o++){(e+=t)===n.length?e=0:-1===e&&(e=n.length-1);var r=n[e];if(H(r))return r.focus()}};i.toast&&K&&(window.onkeydown=z,K=!1),i.toast||K||(z=window.onkeydown,K=!0,window.onkeydown=function(t){var n=t||window.event;if("Enter"!==n.key||n.isComposing)if("Tab"===n.key){for(var o=n.target||n.srcElement,r=P(i.focusCancel),a=-1,l=0;l<r.length;l++)if(o===r[l]){a=l;break}n.shiftKey?J(a,-1):J(a,1),n.stopPropagation(),n.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(n.key)?document.activeElement===Z&&H($)?$.focus():document.activeElement===$&&H(Z)&&Z.focus():"Escape"!==n.key&&"Esc"!==n.key||!0!==i.allowEscapeKey||s("esc");else if(n.target===f()){if("textarea"===n.target.tagName.toLowerCase())return;e.clickConfirm(),n.preventDefault()}}),i.buttonsStyling&&(Z.style.borderLeftColor=i.confirmButtonColor,Z.style.borderRightColor=i.confirmButtonColor),e.hideLoading=e.disableLoading=function(){i.showConfirmButton||(M(Z),i.showCancelButton||M(A())),V([p,W],o.loading),p.removeAttribute("aria-busy"),p.removeAttribute("data-loading"),Z.disabled=!1,$.disabled=!1},e.getTitle=function(){return h()},e.getContent=function(){return y()},e.getInput=function(){return f()},e.getImage=function(){return w()},e.getButtonsWrapper=function(){return A()},e.getConfirmButton=function(){return k()},e.getCancelButton=function(){return S()},e.isLoading=function(){return g().hasAttribute("data-loading")},e.enableButtons=function(){Z.disabled=!1,$.disabled=!1},e.disableButtons=function(){Z.disabled=!0,$.disabled=!0},e.enableConfirmButton=function(){Z.disabled=!1},e.disableConfirmButton=function(){Z.disabled=!0},e.enableInput=function(){var e=f();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},e.disableInput=function(){var e=f();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},e.showValidationError=function(e){var t=x();t.innerHTML=e,N(t);var n=f();n&&(n.setAttribute("aria-invalid",!0),n.setAttribute("aria-describedBy",o.validationerror),T(n),O(n,o.inputerror))},e.resetValidationError=function(){var e=x();M(e);var t=f();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),V(t,o.inputerror))},e.getProgressSteps=function(){return i.progressSteps},e.setProgressSteps=function(e){i.progressSteps=e,_(i)},e.showProgressSteps=function(){N(C())},e.hideProgressSteps=function(){M(C())},e.enableButtons(),e.hideLoading(),e.resetValidationError(),i.input&&O(document.body,o["has-input"]);for(var X=["input","file","range","select","radio","checkbox","textarea"],F=void 0,G=0;G<X.length;G++){var ee=o[X[G]],te=j(p,ee);if(F=f(X[G])){for(var ne in F.attributes)if(F.attributes.hasOwnProperty(ne)){var oe=F.attributes[ne].name;"type"!==oe&&"value"!==oe&&F.removeAttribute(oe)}for(var re in i.inputAttributes)F.setAttribute(re,i.inputAttributes[re])}te.className=ee,i.inputClass&&O(te,i.inputClass),M(te)}var ie=void 0;switch(i.input){case"text":case"email":case"password":case"number":case"tel":case"url":(F=j(p,o.input)).value=i.inputValue,F.placeholder=i.inputPlaceholder,F.type=i.input,N(F);break;case"file":(F=j(p,o.file)).placeholder=i.inputPlaceholder,F.type=i.input,N(F);break;case"range":var ae=j(p,o.range),se=ae.querySelector("input"),le=ae.querySelector("output");se.value=i.inputValue,se.type=i.input,le.value=i.inputValue,N(ae);break;case"select":var ue=j(p,o.select);if(ue.innerHTML="",i.inputPlaceholder){var ce=document.createElement("option");ce.innerHTML=i.inputPlaceholder,ce.value="",ce.disabled=!0,ce.selected=!0,ue.appendChild(ce)}ie=function(e){for(var t in e){var n=document.createElement("option");n.value=t,n.innerHTML=e[t],i.inputValue.toString()===t&&(n.selected=!0),ue.appendChild(n)}N(ue),ue.focus()};break;case"radio":var de=j(p,o.radio);de.innerHTML="",ie=function(e){for(var t in e){var n=document.createElement("input"),r=document.createElement("label"),a=document.createElement("span");n.type="radio",n.name=o.radio,n.value=t,i.inputValue.toString()===t&&(n.checked=!0),a.innerHTML=e[t],r.appendChild(n),r.appendChild(a),r.for=n.id,de.appendChild(r)}N(de);var s=de.querySelectorAll("input");s.length&&s[0].focus()};break;case"checkbox":var pe=j(p,o.checkbox),fe=f("checkbox");fe.type="checkbox",fe.value=1,fe.id=o.checkbox,fe.checked=Boolean(i.inputValue);var me=pe.getElementsByTagName("span");me.length&&pe.removeChild(me[0]),(me=document.createElement("span")).innerHTML=i.inputPlaceholder,pe.appendChild(me),N(pe);break;case"textarea":var be=j(p,o.textarea);be.value=i.inputValue,be.placeholder=i.inputPlaceholder,N(be);break;case null:break;default:l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+i.input+'"')}"select"!==i.input&&"radio"!==i.input||(i.inputOptions instanceof Promise?(e.showLoading(),i.inputOptions.then(function(t){e.hideLoading(),ie(t)})):"object"===I(i.inputOptions)?ie(i.inputOptions):l("Unexpected type of inputOptions! Expected object or Promise, got "+I(i.inputOptions))),function(e,t,n){var r=b(),i=g();null!==t&&"function"==typeof t&&t(i),e?(O(i,o.show),O(r,o.fade),V(i,o.hide)):V(i,o.fade),N(i),r.style.overflowY="hidden",R&&!L(i,o.noanimation)?i.addEventListener(R,function e(){i.removeEventListener(R,e),r.style.overflowY="auto"}):r.style.overflowY="auto",O([document.documentElement,document.body,r],o.shown),E()&&(Q(),Y()),d.previousActiveElement=document.activeElement,null!==n&&"function"==typeof n&&setTimeout(function(){n(i)})}(i.animation,i.onBeforeOpen,i.onOpen),i.toast||(i.allowEnterKey?i.focusCancel&&H($)?$.focus():i.focusConfirm&&H(Z)?Z.focus():J(-1,1):document.activeElement&&document.activeElement.blur()),b().scrollTop=0})}};return $.isVisible=function(){return!!g()},$.queue=function(e){W=e;var t=function(){W=[],document.body.removeAttribute("data-swal2-queue-step")},n=[];return new Promise(function(e,o){!function o(r,i){r<W.length?(document.body.setAttribute("data-swal2-queue-step",r),$(W[r]).then(function(a){void 0!==a.value?(n.push(a.value),o(r+1,i)):(t(),e({dismiss:a.dismiss}))})):(t(),e({value:n}))}(0)})},$.getQueueStep=function(){return document.body.getAttribute("data-swal2-queue-step")},$.insertQueueStep=function(e,t){return t&&t<W.length?W.splice(t,0,e):W.push(e)},$.deleteQueueStep=function(e){void 0!==W[e]&&W.splice(e,1)},$.close=$.closePopup=$.closeModal=$.closeToast=function(e){var t=b(),n=g();if(n){V(n,o.show),O(n,o.hide),clearTimeout(n.timeout),document.body.classList.contains(o["toast-shown"])||(!function(){if(d.previousActiveElement&&d.previousActiveElement.focus){var e=window.scrollX,t=window.scrollY;d.previousActiveElement.focus(),void 0!==e&&void 0!==t&&window.scrollTo(e,t)}}(),window.onkeydown=z,K=!1);var r=function(){t.parentNode&&t.parentNode.removeChild(t),V([document.documentElement,document.body],[o.shown,o["no-backdrop"],o["has-input"],o["toast-shown"]]),E()&&(null!==d.previousBodyPadding&&(document.body.style.paddingRight=d.previousBodyPadding,d.previousBodyPadding=null),function(){if(L(document.body,o.iosfix)){var e=parseInt(document.body.style.top,10);V(document.body,o.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}())};R&&!L(n,o.noanimation)?n.addEventListener(R,function e(){n.removeEventListener(R,e),L(n,o.hide)&&r()}):r(),null!==e&&"function"==typeof e&&setTimeout(function(){e(n)})}},$.clickConfirm=function(){return k().click()},$.clickCancel=function(){return S().click()},$.showLoading=$.enableLoading=function(){var e=g();e||$(""),e=g();var t=A(),n=k(),r=S();N(t),N(n,"inline-block"),O([e,t],o.loading),n.disabled=!0,r.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},$.isValidParameter=function(t){return e.hasOwnProperty(t)||"extraParams"===t},$.isDeprecatedParameter=function(e){return-1!==t.indexOf(e)},$.setDefaults=function(e){if(!e||"object"!==(void 0===e?"undefined":I(e)))return l("the argument for setDefaults() is required and has to be a object");Z(e);for(var t in e)$.isValidParameter(t)&&(U[t]=e[t])},$.resetDefaults=function(){U=D({},e)},$.adaptInputValidator=function(e){return function(t,n){return e.call(this,t,n).then(function(){},function(e){return e})}},$.noop=function(){},$.version="7.3.0",$.default=$,"undefined"!=typeof window&&"object"===I(window._swalDefaults)&&$.setDefaults(window._swalDefaults),$}),"undefined"!=typeof window&&window.Sweetalert2&&(window.sweetAlert=window.swal=window.Sweetalert2);const units = [{"name":"1-Introduction","chapters":[{"name":"chapter-1","result":"","files":{"main.cpp":"\n\nint main() {\n\t/*\n\t  Hello World\n\t  This is a multiline comment\n\t  You should be able to convert this into\n      4 single line comments\n\t*/\n}\n"},"readme":"<p><strong>Welcome to Learnyoucpp!</strong> Along this journey you&#39;ll learn to write c++ programming language and understand its applications and inner workings. You may ask, what is C++ and why should I learn it? Let&#39;s see what <a href=\"https://en.wikipedia.org/wiki/C%2B%2B\">wikipedia</a> has to say on this -</p>\n<blockquote>\n<p>C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.</p>\n<p>It was designed with a bias toward system programming and embedded, resource-constrained and large systems, with performance, efficiency and flexibility of use as its design highlights. C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications, including desktop applications, servers and performance-critical applications.</p>\n</blockquote>\n<p>Now that we&#39;ve got some idea of what we&#39;re dealing with, let&#39;s jump straight into the course. This course has been divided into several units (which get progressively harder) which again are divided into several chapters like the one you&#39;re currently reading. Each chapter will introduce some new concept which might require some exercises marked with TODO: you must complete to move forward. Other features will be introduced as we move ahead.</p>\n<h2 id=\"comments\">Comments</h2>\n<p>This chapter introduces comments in c++, which are of two types - Single line comments and multiline comments. Single line comments start with 2 slashes which look like <code>// This is a comment</code> and are valid till the end of line. Multiline comments, as the name says extend to multiple lines and start with <code>/*</code> and end with <code>*/</code>. Here&#39;s an example that depicts use of both -</p>\n<pre><code>// This is a single line comment\n\n/* And this one is\nmultiline comment*/\n</code></pre><h3 id=\"todo\">TODO</h3>\n<ul>\n<li>Convert the multiline comment inside the editor to single line comments</li>\n</ul>\n<p>To pass this chapter, you must be able to submit the program on right side with required changes by pressing submit button on the bottom. Watch out for errors in the bottom panel.</p>\n<p>Hint: you can resize everything on this website :)</p>\n"},{"name":"chapter-2","result":"Hello World!\n","files":{"header.hpp":"/*\n  This is chapter 2\n*/\n","main.cpp":"#include <cstdio>\n\nint main() {\n    // use puts() here\n}\n"},"readme":"<p>This is still under construction, but lets use puts() here. Puts accepts a string and prints it. You need to print &quot;Hello World!&quot;.</p>\n"}]}];const state = {
  editor: {
    description: null,
    root: null,
    instances: [],
    settings: {
      language: 'cpp',
      roundedSelection: false,
      scrollBeyondLastLine: false,
      minimap: { enabled: false },
      renderControlCharacters: true,
      useTabStops: true,
      fontSize: 17,
      autoIndent: true,
      lineNumbersMinChars: 3,
      fontFamily: 'Inconsolata',
      renderIndentGuides: false,
      scrollbar: { vertical: 'hidden' }
    },
    resizeAll() {
      for (e of state.editor.instances) {
        e.instance.layout();
      }
    }
  },
  progress: {
    currentUnit: 0,
    currentChapter: 0,
    update() {
      const editorBox = state.editor.root.contentItems[0].contentItems[0].contentItems[1];
      const chapter = units[state.progress.currentUnit].chapters[state.progress.currentChapter];

      for (const e of state.editor.instances) {
        e.instance.dispose();
      }
      state.editor.instances = [];

      for (const c of state.editor.root.contentItems[0].getItemsById('editorId')) {
        c.close();
      }

      for (file in chapter.files) {
        editorBox.addChild({
          type: 'component',
          id: 'editorId',
          componentName: 'editor',
          title: file,
          isClosable: false,
          componentState: { name: file, value: chapter.files[file] }
        });
      }
      state.editor.description.innerHTML = chapter.readme;
    },
    get() {
      return {
        unit: state.progress.currentUnit,
        chapter: state.progress.currentChapter
      };
    },
    set(p) {
      state.progress.currentUnit = p.unit;
      state.progress.currentChapter = p.chapter;
      state.progress.update();
    },
    reset() {
      state.progress.set({ unit: 0, chapter: 0 });
    },
    getResult() {
      return units[state.progress.currentUnit].chapters[state.progress.currentChapter].result.trim();
    },
    mountSelect(selectElement) {
      const frag = document.createDocumentFragment();
      let unitCount = 0;
      for (unit of units) {
        const elOptionGroup = frag.appendChild(document.createElement('optgroup'));
        elOptionGroup.label = unit.name;
        let chapterCount = 0;
        for (chapter of unit.chapters) {
          const elOption = elOptionGroup.appendChild(document.createElement('option'));
          elOption.label = chapter.name;
          elOption.value = unitCount * 100 + chapterCount;
          ++chapterCount;
        }
        ++unitCount;
      }
      selectElement.appendChild(frag);
    }
  },
  layout: {
    config: {
      settings: {
        showPopoutIcon: false,
        showCloseIcon: false
      },
      content: [
        {
          type: 'column',
          content: [
            {
              type: 'row',
              height: 150,
              isClosable: false,
              content: [
                {
                  type: 'component',
                  componentName: 'description',
                  isClosable: false,
                  title: 'Readme.md',
                  componentState: { name: 'header' }
                },
                {
                  type: 'stack',
                  isClosable: false,
                  content: []
                }
              ]
            },
            {
              type: 'stack',
              isClosable: false,
              content: [
                {
                  type: 'component',
                  componentName: 'output',
                  isClosable: false,
                  title: 'Output',
                  componentState: { value: '' }
                },
                {
                  type: 'component',
                  componentName: 'input',
                  isClosable: false,
                  title: 'Input',
                  componentState: { value: '' }
                },
                {
                  type: 'component',
                  componentName: 'settings',
                  isClosable: false,
                  title: 'Settings',
                  componentState: {}
                }
              ]
            }
          ]
        }
      ]
    }
  },
  compiler: {
    isCompiling: false
  }
};
const getMainCode = () => {
  const editor = state.editor.instances.find(i => i.name === 'main.cpp');
  return editor.instance.getValue();
};

const getCompilerOptions = () => {
  return JSON.stringify({
    code: getMainCode(),
    options: 'warning,optimize,boost-nothing-gcc-head,c++2a,cpp-pedantic',
    compiler: 'gcc-head',
    stdin: document.getElementById('input-box').value
  });
};

const checkResult = r => {
  r = r === undefined ? '' : r.trim();
  if (r === state.progress.getResult()) {
    swal('Passed', 'Answer is correct!', 'success');

    const current = state.progress.get();
    if (current.unit < units.length && current.chapter < units[current.unit].chapters.length) {
      if (current.chapter + 1 !== units[current.unit].chapters.length) {
        state.progress.set({ unit: current.unit, chapter: current.chapter + 1 });
      } else {
        state.progress.set({
          unit: current.unit + 1 === units.length ? 0 : current.unit + 1,
          chapter: 0
        });
      }
    }
  } else {
    swal('Oops...', 'Answer is incorrect!', 'error');
  }
};

const compile = () => {
  if (state.compiler.isCompiling) {
    return;
  }

  const compileButton = document.getElementById('compile-button');

  state.compiler.isCompiling = true;
  compileButton.innerText = '💫';

  fetch('https://wandbox.org/api/compile.json', {
    method: 'POST',
    body: getCompilerOptions(),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(function(response) {
      state.compiler.isCompiling = false;
      return response.json();
    })
    .then(function(j) {
      const output = document.getElementById('output-box').children[0];
      compileButton.innerText = '🔥';
      output.innerText += j.compiler_message ? j.compiler_message + '\n\n' : '';
      output.innerText += j.program_message ? j.program_message + '\n\n' : '';

      checkResult(j.program_message);
    })
    .catch(function(error) {
      console.log(error);
      compileButton.innerText = '💥';
      state.compiler.isCompiling = false;
    });
};

const compileButton = document.createElement('div');
compileButton.id = 'compile-button';
compileButton.innerText = '🔥';
compileButton.onclick = compile;
document.body.appendChild(compileButton);
