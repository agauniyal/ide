!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";var e={title:"",titleText:"",text:"",html:"",type:null,toast:!1,customClass:"",target:"body",backdrop:!0,animation:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:"#3085d6",confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:"#aaa",cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:500,padding:20,background:"#fff",input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:"40px",onBeforeOpen:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},t=["useRejections","expectRejections"],n=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},o=n(["container","shown","iosfix","popup","modal","no-backdrop","toast","toast-shown","overlay","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","icon","image","input","has-input","file","range","select","radio","checkbox","textarea","inputerror","validationerror","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen"]),i=n(["success","warning","info","question","error"]),r="SweetAlert2:",a=function(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;for(var n="#",o=0;o<3;o++){var i=parseInt(e.substr(2*o,2),16);n+=("00"+(i=Math.round(Math.min(Math.max(0,i+i*t),255)).toString(16))).substr(i.length)}return n},s=function(e){console.warn(r+" "+e)},l=function(e){console.error(r+" "+e)},u=[],c=function(e){-1===u.indexOf(e)&&(u.push(e),s(e))},d={previousActiveElement:null,previousBodyPadding:null},p=function(){return"undefined"==typeof window||"undefined"==typeof document},f=function(e){var t=b();t&&(t.parentNode.removeChild(t),V([document.documentElement,document.body],[o["no-backdrop"],o["has-input"],o["toast-shown"]]));{if(!p()){var n=document.createElement("div");n.className=o.container,n.innerHTML=m;("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(n);var i=v(),r=y(),a=j(r,o.input),s=j(r,o.file),u=r.querySelector("."+o.range+" input"),c=r.querySelector("."+o.range+" output"),d=j(r,o.select),f=r.querySelector("."+o.checkbox+" input"),g=j(r,o.textarea);i.setAttribute("aria-live",e.toast?"polite":"assertive");var h=function(){$.isVisible()&&$.resetValidationError()};return a.oninput=h,s.onchange=h,d.onchange=h,f.onchange=h,g.oninput=h,u.oninput=function(){h(),c.value=u.value},u.onchange=function(){h(),u.previousSibling.value=u.value},i}l("SweetAlert2 requires document to initialize")}},m=('\n <div role="dialog" aria-modal="true" aria-labelledby="'+o.title+'" aria-describedby="'+o.content+'" class="'+o.popup+'" tabindex="-1">\n   <div class="'+o.header+'">\n     <ul class="'+o.progresssteps+'"></ul>\n     <div class="'+o.icon+" "+i.error+'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="'+o.icon+" "+i.question+'">?</div>\n     <div class="'+o.icon+" "+i.warning+'">!</div>\n     <div class="'+o.icon+" "+i.info+'">i</div>\n     <div class="'+o.icon+" "+i.success+'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="'+o.image+'" />\n     <h2 class="'+o.title+'" id="'+o.title+'"></h2>\n     <button type="button" class="'+o.close+'">×</button>\n   </div>\n   <div class="'+o.content+'">\n     <div id="'+o.content+'"></div>\n     <input class="'+o.input+'" />\n     <input type="file" class="'+o.file+'" />\n     <div class="'+o.range+'">\n       <output></output>\n       <input type="range" />\n     </div>\n     <select class="'+o.select+'"></select>\n     <div class="'+o.radio+'"></div>\n     <label for="'+o.checkbox+'" class="'+o.checkbox+'">\n       <input type="checkbox" />\n     </label>\n     <textarea class="'+o.textarea+'"></textarea>\n     <div class="'+o.validationerror+'" id="'+o.validationerror+'"></div>\n   </div>\n   <div class="'+o.actions+'">\n     <button type="button" class="'+o.confirm+'">OK</button>\n     <button type="button" class="'+o.cancel+'">Cancel</button>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),b=function(){return document.body.querySelector("."+o.container)},v=function(){return b()?b().querySelector("."+o.popup):null},g=function(e){return b()?b().querySelector("."+e):null},h=function(){return g(o.title)},y=function(){return g(o.content)},w=function(){return g(o.image)},C=function(){return g(o.progresssteps)},x=function(){return g(o.validationerror)},k=function(){return g(o.confirm)},S=function(){return g(o.cancel)},A=function(){return g(o.actions)},B=function(){return g(o.close)},P=function(){var e=Array.prototype.slice.call(v().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),t=parseInt(t.getAttribute("tabindex")),e>t?1:e<t?-1:0}),t=Array.prototype.slice.call(v().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));return function(e){var t=[];for(var n in e)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t))},E=function(){return!document.body.classList.contains(o["toast-shown"])},L=function(e,t){return!!e.classList&&e.classList.contains(t)},T=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},q=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},O=function(e,t){q(e,t,!0)},V=function(e,t){q(e,t,!1)},j=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(L(e.childNodes[n],t))return e.childNodes[n]},N=function(e,t){t||(t=e===v()||e===A()?"flex":"block"),e.style.opacity="",e.style.display=t},M=function(e){e.style.opacity="",e.style.display="none"},H=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},R=function(){if(p())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U=D({},e),W=[],z=void 0,K=void 0;"undefined"==typeof Promise&&l("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");var Z=function(e){for(var t in e)$.isValidParameter(t)||s('Unknown parameter "'+t+'"'),$.isDeprecatedParameter(t)&&c('The parameter "'+t+'" is deprecated and will be removed in the next major release.')},_=function(t){("string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(s('Target parameter is not valid, defaulting to "body"'),t.target="body");var n=void 0,r=v(),a="string"==typeof t.target?document.querySelector(t.target):t.target;n=r&&a&&r.parentNode!==a.parentNode?f(t):r||f(t);var u=t.width===e.width&&t.toast?"auto":t.width;n.style.width="number"==typeof u?u+"px":u;var c=t.padding===e.padding&&t.toast?"inherit":t.padding;n.style.padding="number"==typeof c?c+"px":c,n.style.background=t.background;for(var d=n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),p=0;p<d.length;p++)d[p].style.background=t.background;var m=b(),g=h(),x=y().querySelector("#"+o.content),P=A(),E=k(),L=S(),T=B();if(t.titleText?g.innerText=t.titleText:g.innerHTML=t.title.split("\n").join("<br />"),t.backdrop||O([document.documentElement,document.body],o["no-backdrop"]),t.text||t.html){if("object"===I(t.html))if(x.innerHTML="",0 in t.html)for(var q=0;q in t.html;q++)x.appendChild(t.html[q].cloneNode(!0));else x.appendChild(t.html.cloneNode(!0));else t.html?x.innerHTML=t.html:t.text&&(x.textContent=t.text);N(x)}else M(x);if(t.position in o&&O(m,o[t.position]),t.grow&&"string"==typeof t.grow){var j="grow-"+t.grow;j in o&&O(m,o[j])}t.showCloseButton?(T.setAttribute("aria-label",t.closeButtonAriaLabel),N(T)):M(T),n.className=o.popup,t.toast?(O([document.documentElement,document.body],o["toast-shown"]),O(n,o.toast)):O(n,o.modal),t.customClass&&O(n,t.customClass);var H=C(),R=parseInt(null===t.currentProgressStep?$.getQueueStep():t.currentProgressStep,10);t.progressSteps.length?(N(H),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(H),R>=t.progressSteps.length&&s("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),t.progressSteps.forEach(function(e,n){var i=document.createElement("li");if(O(i,o.progresscircle),i.innerHTML=e,n===R&&O(i,o.activeprogressstep),H.appendChild(i),n!==t.progressSteps.length-1){var r=document.createElement("li");O(r,o.progressline),r.style.width=t.progressStepsDistance,H.appendChild(r)}})):M(H);for(var D=v().querySelectorAll("."+o.icon),U=0;U<D.length;U++)M(D[U]);if(t.type){var W=!1;for(var z in i)if(t.type===z){W=!0;break}if(!W)return l("Unknown alert type: "+t.type),!1;var K=n.querySelector("."+o.icon+"."+i[t.type]);if(N(K),t.animation)switch(t.type){case"success":O(K,"swal2-animate-success-icon"),O(K.querySelector(".swal2-success-line-tip"),"swal2-animate-success-line-tip"),O(K.querySelector(".swal2-success-line-long"),"swal2-animate-success-line-long");break;case"error":O(K,"swal2-animate-error-icon"),O(K.querySelector(".swal2-x-mark"),"swal2-animate-x-mark")}}var Z=w();t.imageUrl?(Z.setAttribute("src",t.imageUrl),Z.setAttribute("alt",t.imageAlt),N(Z),t.imageWidth?Z.setAttribute("width",t.imageWidth):Z.removeAttribute("width"),t.imageHeight?Z.setAttribute("height",t.imageHeight):Z.removeAttribute("height"),Z.className=o.image,t.imageClass&&O(Z,t.imageClass)):M(Z),t.showCancelButton?L.style.display="inline-block":M(L),t.showConfirmButton?function(e,t){e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(t)}(E,"display"):M(E),t.showConfirmButton||t.showCancelButton?N(P):M(P),E.innerHTML=t.confirmButtonText,L.innerHTML=t.cancelButtonText,E.setAttribute("aria-label",t.confirmButtonAriaLabel),L.setAttribute("aria-label",t.cancelButtonAriaLabel),t.buttonsStyling&&(E.style.backgroundColor=t.confirmButtonColor,L.style.backgroundColor=t.cancelButtonColor),E.className=o.confirm,O(E,t.confirmButtonClass),L.className=o.cancel,O(L,t.cancelButtonClass),t.buttonsStyling?O([E,L],o.styled):(V([E,L],o.styled),E.style.backgroundColor=E.style.borderLeftColor=E.style.borderRightColor="",L.style.backgroundColor=L.style.borderLeftColor=L.style.borderRightColor=""),!0===t.animation?V(n,o.noanimation):O(n,o.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&s("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")},Q=function(){null===d.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(d.previousBodyPadding=document.body.style.paddingRight,document.body.style.paddingRight=function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},Y=function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!L(document.body,o.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",O(document.body,o.iosfix)}},$=function e(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];if("undefined"!=typeof window){if(void 0===n[0])return l("SweetAlert2 expects at least 1 attribute!"),!1;var r=D({},U);switch(I(n[0])){case"string":r.title=n[0],r.html=n[1],r.type=n[2];break;case"object":if(Z(n[0]),D(r,n[0]),r.extraParams=n[0].extraParams,"email"===r.input&&null===r.inputValidator){var s=function(e){return new Promise(function(t,n){/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?t():n("Invalid email address")})};r.inputValidator=r.expectRejections?s:e.adaptInputValidator(s)}if("url"===r.input&&null===r.inputValidator){var u=function(e){return new Promise(function(t,n){/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?t():n("Invalid URL")})};r.inputValidator=r.expectRejections?u:e.adaptInputValidator(u)}break;default:return l('Unexpected type of argument! Expected "string" or "object", got '+I(n[0])),!1}_(r);var p=b(),f=v();return new Promise(function(t,n){var i=function(n){e.closePopup(r.onClose),t(r.useRejections?n:{value:n})},s=function(o){e.closePopup(r.onClose),r.useRejections?n(o):t({dismiss:o})},u=function(t){e.closePopup(r.onClose),n(t)};r.timer&&(f.timeout=setTimeout(function(){return s("timer")},r.timer));var m=function(e){if(!(e=e||r.input))return null;switch(e){case"select":case"textarea":case"file":return j($,o[e]);case"checkbox":return f.querySelector("."+o.checkbox+" input");case"radio":return f.querySelector("."+o.radio+" input:checked")||f.querySelector("."+o.radio+" input:first-child");case"range":return f.querySelector("."+o.range+" input");default:return j($,o.input)}};r.input&&setTimeout(function(){var e=m();e&&T(e)},0);for(var q=function(t){if(r.showLoaderOnConfirm&&e.showLoading(),r.preConfirm){e.resetValidationError();var n=Promise.resolve().then(function(){return r.preConfirm(t,r.extraParams)});r.expectRejections?n.then(function(e){return i(e||t)},function(t){e.hideLoading(),t&&e.showValidationError(t)}):n.then(function(n){H(x())?e.hideLoading():i(n||t)},function(e){return u(e)})}else i(t)},D=function(t){var n=t||window.event,o=n.target||n.srcElement,i=k(),l=S(),c=i&&(i===o||i.contains(o)),d=l&&(l===o||l.contains(o));switch(n.type){case"mouseover":case"mouseup":r.buttonsStyling&&(c?i.style.backgroundColor=a(r.confirmButtonColor,-.1):d&&(l.style.backgroundColor=a(r.cancelButtonColor,-.1)));break;case"mouseout":r.buttonsStyling&&(c?i.style.backgroundColor=r.confirmButtonColor:d&&(l.style.backgroundColor=r.cancelButtonColor));break;case"mousedown":r.buttonsStyling&&(c?i.style.backgroundColor=a(r.confirmButtonColor,-.2):d&&(l.style.backgroundColor=a(r.cancelButtonColor,-.2)));break;case"click":if(c&&e.isVisible())if(e.disableButtons(),r.input){var p=function(){var e=m();if(!e)return null;switch(r.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return r.inputAutoTrim?e.value.trim():e.value}}();if(r.inputValidator){e.disableInput();var f=Promise.resolve().then(function(){return r.inputValidator(p,r.extraParams)});r.expectRejections?f.then(function(){e.enableButtons(),e.enableInput(),q(p)},function(t){e.enableButtons(),e.enableInput(),t&&e.showValidationError(t)}):f.then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationError(t):q(p)},function(e){return u(e)})}else q(p)}else q(!0);else d&&e.isVisible()&&(e.disableButtons(),s("cancel"))}},U=f.querySelectorAll("button"),W=0;W<U.length;W++)U[W].onclick=D,U[W].onmouseover=D,U[W].onmouseout=D,U[W].onmousedown=D;if(B().onclick=function(){s("close")},r.toast)f.onclick=function(t){t.target!==f||r.showConfirmButton||r.showCancelButton||r.allowOutsideClick&&(e.closePopup(r.onClose),s("overlay"))};else{var Z=!1;f.onmousedown=function(){p.onmouseup=function(e){p.onmouseup=void 0,e.target===p&&(Z=!0)}},p.onmousedown=function(){f.onmouseup=function(e){f.onmouseup=void 0,(e.target===f||f.contains(e.target))&&(Z=!0)}},p.onclick=function(e){Z?Z=!1:e.target===p&&r.allowOutsideClick&&("function"==typeof r.allowOutsideClick?r.allowOutsideClick()&&s("overlay"):s("overlay"))}}var $=y(),J=A(),X=k(),F=S();r.reverseButtons?X.parentNode.insertBefore(F,X):X.parentNode.insertBefore(X,F);var G=function(e,t){for(var n=P(r.focusCancel),o=0;o<n.length;o++){(e+=t)===n.length?e=0:-1===e&&(e=n.length-1);var i=n[e];if(H(i))return i.focus()}};r.toast&&K&&(window.onkeydown=z,K=!1),r.toast||K||(z=window.onkeydown,K=!0,window.onkeydown=function(t){var n=t||window.event;if("Enter"!==n.key||n.isComposing)if("Tab"===n.key){for(var o=n.target||n.srcElement,i=P(r.focusCancel),a=-1,l=0;l<i.length;l++)if(o===i[l]){a=l;break}n.shiftKey?G(a,-1):G(a,1),n.stopPropagation(),n.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(n.key)?document.activeElement===X&&H(F)?F.focus():document.activeElement===F&&H(X)&&X.focus():"Escape"!==n.key&&"Esc"!==n.key||!0!==r.allowEscapeKey||s("esc");else if(n.target===m()){if(-1!==["textarea","file"].indexOf(r.input))return;e.clickConfirm(),n.preventDefault()}}),r.buttonsStyling&&(X.style.borderLeftColor=r.confirmButtonColor,X.style.borderRightColor=r.confirmButtonColor),e.hideLoading=e.disableLoading=function(){r.showConfirmButton||(M(X),r.showCancelButton||M(A())),V([f,J],o.loading),f.removeAttribute("aria-busy"),f.removeAttribute("data-loading"),X.disabled=!1,F.disabled=!1},e.getTitle=function(){return h()},e.getContent=function(){return y()},e.getInput=function(){return m()},e.getImage=function(){return w()},e.getButtonsWrapper=function(){return c("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),g(o.actions)},e.getActions=function(){return A()},e.getConfirmButton=function(){return k()},e.getCancelButton=function(){return S()},e.isLoading=function(){return v().hasAttribute("data-loading")},e.enableButtons=function(){X.disabled=!1,F.disabled=!1},e.disableButtons=function(){X.disabled=!0,F.disabled=!0},e.enableConfirmButton=function(){X.disabled=!1},e.disableConfirmButton=function(){X.disabled=!0},e.enableInput=function(){var e=m();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},e.disableInput=function(){var e=m();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},e.showValidationError=function(e){var t=x();t.innerHTML=e,N(t);var n=m();n&&(n.setAttribute("aria-invalid",!0),n.setAttribute("aria-describedBy",o.validationerror),T(n),O(n,o.inputerror))},e.resetValidationError=function(){var e=x();M(e);var t=m();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),V(t,o.inputerror))},e.getProgressSteps=function(){return r.progressSteps},e.setProgressSteps=function(e){r.progressSteps=e,_(r)},e.showProgressSteps=function(){N(C())},e.hideProgressSteps=function(){M(C())},e.enableButtons(),e.hideLoading(),e.resetValidationError(),r.input&&O(document.body,o["has-input"]);for(var ee=["input","file","range","select","radio","checkbox","textarea"],te=void 0,ne=0;ne<ee.length;ne++){var oe=o[ee[ne]],ie=j($,oe);if(te=m(ee[ne])){for(var re in te.attributes)if(te.attributes.hasOwnProperty(re)){var ae=te.attributes[re].name;"type"!==ae&&"value"!==ae&&te.removeAttribute(ae)}for(var se in r.inputAttributes)te.setAttribute(se,r.inputAttributes[se])}ie.className=oe,r.inputClass&&O(ie,r.inputClass),M(ie)}var le=void 0;switch(r.input){case"text":case"email":case"password":case"number":case"tel":case"url":(te=j($,o.input)).value=r.inputValue,te.placeholder=r.inputPlaceholder,te.type=r.input,N(te);break;case"file":(te=j($,o.file)).placeholder=r.inputPlaceholder,te.type=r.input,N(te);break;case"range":var ue=j($,o.range),ce=ue.querySelector("input"),de=ue.querySelector("output");ce.value=r.inputValue,ce.type=r.input,de.value=r.inputValue,N(ue);break;case"select":var pe=j($,o.select);if(pe.innerHTML="",r.inputPlaceholder){var fe=document.createElement("option");fe.innerHTML=r.inputPlaceholder,fe.value="",fe.disabled=!0,fe.selected=!0,pe.appendChild(fe)}le=function(e){for(var t in e){var n=document.createElement("option");n.value=t,n.innerHTML=e[t],r.inputValue.toString()===t&&(n.selected=!0),pe.appendChild(n)}N(pe),pe.focus()};break;case"radio":var me=j($,o.radio);me.innerHTML="",le=function(e){for(var t in e){var n=document.createElement("input"),i=document.createElement("label"),a=document.createElement("span");n.type="radio",n.name=o.radio,n.value=t,r.inputValue.toString()===t&&(n.checked=!0),a.innerHTML=e[t],i.appendChild(n),i.appendChild(a),i.for=n.id,me.appendChild(i)}N(me);var s=me.querySelectorAll("input");s.length&&s[0].focus()};break;case"checkbox":var be=j($,o.checkbox),ve=m("checkbox");ve.type="checkbox",ve.value=1,ve.id=o.checkbox,ve.checked=Boolean(r.inputValue);var ge=be.getElementsByTagName("span");ge.length&&be.removeChild(ge[0]),(ge=document.createElement("span")).innerHTML=r.inputPlaceholder,be.appendChild(ge),N(be);break;case"textarea":var he=j($,o.textarea);he.value=r.inputValue,he.placeholder=r.inputPlaceholder,N(he);break;case null:break;default:l('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'+r.input+'"')}"select"!==r.input&&"radio"!==r.input||(r.inputOptions instanceof Promise?(e.showLoading(),r.inputOptions.then(function(t){e.hideLoading(),le(t)})):"object"===I(r.inputOptions)?le(r.inputOptions):l("Unexpected type of inputOptions! Expected object or Promise, got "+I(r.inputOptions))),function(e,t,n){var i=b(),r=v();null!==t&&"function"==typeof t&&t(r),e?(O(r,o.show),O(i,o.fade),V(r,o.hide)):V(r,o.fade),N(r),i.style.overflowY="hidden",R&&!L(r,o.noanimation)?r.addEventListener(R,function e(){r.removeEventListener(R,e),i.style.overflowY="auto"}):i.style.overflowY="auto",O([document.documentElement,document.body,i],o.shown),E()&&(Q(),Y()),d.previousActiveElement=document.activeElement,null!==n&&"function"==typeof n&&setTimeout(function(){n(r)})}(r.animation,r.onBeforeOpen,r.onOpen),r.toast||(r.allowEnterKey?r.focusCancel&&H(F)?F.focus():r.focusConfirm&&H(X)?X.focus():G(-1,1):document.activeElement&&document.activeElement.blur()),b().scrollTop=0})}};return $.isVisible=function(){return!!v()},$.queue=function(e){W=e;var t=function(){W=[],document.body.removeAttribute("data-swal2-queue-step")},n=[];return new Promise(function(e,o){!function o(i,r){i<W.length?(document.body.setAttribute("data-swal2-queue-step",i),$(W[i]).then(function(a){void 0!==a.value?(n.push(a.value),o(i+1,r)):(t(),e({dismiss:a.dismiss}))})):(t(),e({value:n}))}(0)})},$.getQueueStep=function(){return document.body.getAttribute("data-swal2-queue-step")},$.insertQueueStep=function(e,t){return t&&t<W.length?W.splice(t,0,e):W.push(e)},$.deleteQueueStep=function(e){void 0!==W[e]&&W.splice(e,1)},$.close=$.closePopup=$.closeModal=$.closeToast=function(e){var t=b(),n=v();if(n){V(n,o.show),O(n,o.hide),clearTimeout(n.timeout),document.body.classList.contains(o["toast-shown"])||(!function(){if(d.previousActiveElement&&d.previousActiveElement.focus){var e=window.scrollX,t=window.scrollY;d.previousActiveElement.focus(),void 0!==e&&void 0!==t&&window.scrollTo(e,t)}}(),window.onkeydown=z,K=!1);var i=function(){t.parentNode&&t.parentNode.removeChild(t),V([document.documentElement,document.body],[o.shown,o["no-backdrop"],o["has-input"],o["toast-shown"]]),E()&&(null!==d.previousBodyPadding&&(document.body.style.paddingRight=d.previousBodyPadding,d.previousBodyPadding=null),function(){if(L(document.body,o.iosfix)){var e=parseInt(document.body.style.top,10);V(document.body,o.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}())};R&&!L(n,o.noanimation)?n.addEventListener(R,function e(){n.removeEventListener(R,e),L(n,o.hide)&&i()}):i(),null!==e&&"function"==typeof e&&setTimeout(function(){e(n)})}},$.clickConfirm=function(){return k().click()},$.clickCancel=function(){return S().click()},$.showLoading=$.enableLoading=function(){var e=v();e||$(""),e=v();var t=A(),n=k(),i=S();N(t),N(n,"inline-block"),O([e,t],o.loading),n.disabled=!0,i.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},$.isValidParameter=function(t){return e.hasOwnProperty(t)||"extraParams"===t},$.isDeprecatedParameter=function(e){return-1!==t.indexOf(e)},$.setDefaults=function(e){if(!e||"object"!==(void 0===e?"undefined":I(e)))return l("the argument for setDefaults() is required and has to be a object");Z(e);for(var t in e)$.isValidParameter(t)&&(U[t]=e[t])},$.resetDefaults=function(){U=D({},e)},$.adaptInputValidator=function(e){return function(t,n){return e.call(this,t,n).then(function(){},function(e){return e})}},$.noop=function(){},$.version="7.4.0",$.default=$,"undefined"!=typeof window&&"object"===I(window._swalDefaults)&&$.setDefaults(window._swalDefaults),$}),"undefined"!=typeof window&&window.Sweetalert2&&(window.sweetAlert=window.swal=window.Sweetalert2);const units = [{"name":"1-Introduction","chapters":[{"name":"chapter-1","result":"","files":{"main.cpp":"\nint main() {}\n"},"readme":"<p><strong>Welcome to Learnyoucpp!</strong> Along this journey you&#39;ll learn to write c++ programming language and understand its applications and best practices. We assume you&#39;re already familiar with some programming in general and want to learn or get upto date with recent changes in C++. A lot has changed since the advent of <em>Modern C++</em> but the essentials of language are still preserved. Let&#39;s see what creator of C++ has to say on it -</p>\n<blockquote>\n<p>C++11 feels like a new language. I write code differently now than I did in C++98. The C++11 code is shorter, simpler, and usually more efficient than what I used to write.</p>\n<p><em>- Bjarne Stroustrup</em></p>\n</blockquote>\n<p>This course is divided into several units which are again divided into several chapters. Each chapter tries to focus on a specific feature of this language and provides challenges that you can complete in order to get familiar with those features and understand more about this language. The aim for this unit is to get you familiar with the language without diving deep into the details. We&#39;ll start with the most minimal program in C++ -</p>\n<h2 id=\"main\">Main</h2>\n<p>The program on the right defines a function called <em>main</em> which takes no arguments and does nothing. Every C++ program must contain exactly one global <em>main</em> function which gets executed right when you run your executable. The braces <code>{</code> &amp; <code>}</code> mark the beginning and end of <em>main</em> function and keyword <code>int</code> specifies the return type of your function. We&#39;ll read more about functions in later units.</p>\n<h3 id=\"todo\">TODO</h3>\n<ul>\n<li>Execute the program by pressing compile button on bottom right of your screen!</li>\n</ul>\n<p><strong>PS</strong>: you can resize everything on this website so try playing out with layout and adjust accordingly :)</p>\n"},{"name":"chapter-2","result":"","files":{"main.cpp":"\n\nint main()\n{\n    /*\n      Hello World\n      This is a multiline comment\n      You should be able to convert this into\n      4 single line comments\n    */\n}\n"},"readme":"<p>Comments are essential feature of a programming language and are used to annotate source code so that its easily readable by other programmers working on same code as yours. C++ offers two types of comments which are pretty common with other programming languages as well -</p>\n<ul>\n<li>Single line comments</li>\n<li>Multi line comments</li>\n</ul>\n<p>Single line comments start with 2 slashes <code>//</code> and extend till the end of line. Anything you write after them is not visible to the compiler till a new line is encountered. Multi-line comments, as the name says, extend to multiple lines and start with <code>/*</code> and end with <code>*/</code>. They are often used to describe documentation of functions,classes,... and other constructs of languages.</p>\n<h3 id=\"todo\">TODO</h3>\n<ul>\n<li>For this chapter you just need to convert the multiline comments to separate single line ones.</li>\n</ul>\n"},{"name":"chapter-3","result":"Hello World!\n","files":{"helper.hpp":"#include <iostream>\n\ntemplate <typename... Args>\nvoid log(Args... args)\n{\n    ((std::cout << args << ' '), ...) << '\\n';\n}\n","main.cpp":"#include \"helper.hpp\"\n\nint main()\n{\n    // replace with log() function\n}\n"},"readme":"<p>You should&#39;ve noticed -</p>\n<pre><code class=\"lang-cpp\">#include &quot;helper.hpp&quot;\n</code></pre>\n<p>in your code by now. <code>#include</code> includes other source file into current source file at the line immediately after the directive. What this means is the content of included file(<code>helper.hpp</code> here) are copied into the current file so that you can use them in your code.</p>\n<p>There are two syntax associated with <code>#include</code> -</p>\n<ul>\n<li><code>#include &lt;file&gt;</code></li>\n<li><code>#include &quot;file&quot;</code></li>\n</ul>\n<p>The first one is generally used when including standard defined header files while the second one is used to include other header files inside our code. In our case we&#39;re using <code>header.hpp</code> file(you can look at its content by opening associated tab) to include a helper function called <code>log()</code>. It takes any number of arguments and prints them to your screen. Don&#39;t worry about its implementation which you can safely ignore for now.</p>\n<h3 id=\"todo\">TODO</h3>\n<p>Since we&#39;ve already introduced <code>log()</code> let&#39;s use it! Print a string to your output panel on the bottom of your screen by writing it between <code>log(</code> ... <code>)</code>. Another thing you might&#39;ve noticed is like several other programming languages, statements in c++ end with a <code>;</code> always, so don&#39;t forget to terminate each statement with one!</p>\n<ul>\n<li>To use <code>log()</code> function, replace that comment with -</li>\n</ul>\n<pre><code class=\"lang-cpp\">log(&quot;Hello World!&quot;);\n</code></pre>\n<p>and execute your program.</p>\n"},{"name":"chapter-4","result":"42\n","files":{"helper.hpp":"#include <iostream>\n\ntemplate <typename... Args>\nvoid log(Args... args)\n{\n    ((std::cout << args << ' '), ...) << '\\n';\n}\n","main.cpp":"#include \"helper.hpp\"\n\nint main()\n{\n    // declare integer a here\n    // print a here\n}\n"},"readme":"<p>There&#39;s one other thing we need to cover before we move over to functions - <strong>Data Types</strong>. C++ is a statically typed language and what that means is, it defines set of possible values and operations associated with our data which can be checked at compile time. For example, if we write -</p>\n<pre><code class=\"lang-cpp\">int a{20};\n</code></pre>\n<p>we&#39;ve just declared a variable <code>a</code> of <em>type</em> integer. Now <code>a</code> being an integer, you can perform additon/subtraction or compare it with other integers. There are several other types in C++ but we&#39;ll divide them into following two categories -</p>\n<ul>\n<li><strong>Fundamental</strong> types eg. int, float, bool...</li>\n<li><strong>Compound</strong> types eg. pointer, array, class...</li>\n</ul>\n<p>In this unit we will only cover Fundamental types and leave Compound types for later.</p>\n<h3 id=\"todo\">TODO</h3>\n<p>For this lesson, we&#39;ll introduce Fundamental integer types. Integer types differ with floating types as they&#39;re unable to store decimal digits. So something like <code>int a{4.5}</code> will fail to compile but <code>int a{4}</code> will do fine. There are two categories of integer types -</p>\n<ul>\n<li><strong>Signed</strong> integers - able to store negative as well as positive numbers</li>\n<li><strong>Unsigned</strong> integers - can only store positive numbers</li>\n</ul>\n<p>You can make an integer type signed/unsigned by appending these keywords ahead of its declaration. By default, not specifying anything is assumed to be signed, for example -</p>\n<pre><code class=\"lang-cpp\">int a{-4};  // signed int\nunsigned int b{4}; // unsigned int\nunsigned int c{-4}; // this won&#39;t compile\n</code></pre>\n<p>Sometimes <code>int</code> data type is not enough to store all required integer values so C++ also provides <code>long int</code> and <code>long long int</code> at your disposal. The only difference is they&#39;re able to represent much higher range of integers. The usual rules of signedness and unsignedness apply here as well.</p>\n<ul>\n<li>To pass this test, declare an integer <code>a</code> with value <code>42</code> and print to screen.</li>\n</ul>\n<p>Hint - You can use <code>log()</code> function to print your integer like this - <code>log(a);</code></p>\n"},{"name":"chapter-5","result":"Sum of number 3 and 5 is: 8\nDifference of number 8 and 2 is: 6\n","files":{"helper.hpp":"#include <iostream>\n\ntemplate <typename... Args>\nvoid log(Args... args)\n{\n    ((std::cout << args << ' '), ...) << '\\n';\n}\n","main.cpp":"#include \"helper.hpp\"\n\nint sum(int a, int b) { return a + b; }\n\nint main()\n{\n    int resultSum = sum(3, 5);\n    log(\"Sum of number 3 and 5 is:\", resultSum);\n\n    // Call function diff and store result in resultDiff variable\n\n    log(\"Difference of number 8 and 2 is:\", resultDiff);\n\n    return 0;\n}\n"},"readme":"<p>Now we&#39;ve enough material to cover for an introduction to functions in C++. They&#39;re declared like -</p>\n<pre><code class=\"lang-cpp\">returnType name(T1 arg1, T2 arg2, T3 arg3...) {\n    // body of function\n    return statement;\n}\n</code></pre>\n<p>where</p>\n<ul>\n<li>returnType is placeholder for the type of value it returns</li>\n<li>name is obviously the name of your function</li>\n<li>arg1, arg2, ... represents the parameters taken by this function along with their types T1, T2, ...</li>\n<li><code>{}</code> marks the body of the function</li>\n<li>a return statement that returns a value from the function</li>\n</ul>\n<p>As an example we&#39;ve already created a function named <code>add()</code> that takes two integer types and returns an integer as result. To call a function we write -</p>\n<pre><code class=\"lang-cpp\">returnType result = name(/* Pass parameters here */);\n</code></pre>\n<p>replacing name with actual function name and parameters with what you want to pass. If this function returns anything, we write another variable on left side of calling it. A function can also choose to return nothing and you don&#39;t need a return statement in that case, as we&#39;ll see in upcoming units.</p>\n<p>Did you notice that we skipped a <code>return</code> statement in <code>int main(){}</code> even though return type is mentioned as <code>int</code>, until now? That is because you can skip it in <code>main()</code> and it is implied to be <code>return 0;</code> by default. The int value returned by main(), if any, is received by the system which chooses to use it for own purposes. A nonzero value from main() indicates failure.</p>\n<h3 id=\"todo\">TODO</h3>\n<p>We&#39;ve already created a <code>sum()</code> function that takes two integers and returns the addition of both which is then stored in <code>resultSum</code> variable. This variable is then printed on the screen along with a message. To pass this lesson, you need to -</p>\n<ul>\n<li>Declare a function named <code>diff()</code> below <code>add()</code>, that takes two integers and returns the difference of them</li>\n<li>Call the <code>diff()</code> function by passing <code>8</code> and <code>2</code> to it</li>\n<li>Store the result of call in <code>resultDiff</code> variable</li>\n</ul>\n<p>The value of <code>resultDiff</code> will be printed on the console.</p>\n"}]}];const state = {
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
      fontSize: 15,
      autoIndent: true,
      lineNumbersMinChars: 3,
      renderIndentGuides: false,
      fontFamily: 'monospace',
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
      document.getElementById('output-box').children[0].innerText = '';
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

const getExtraCode = () => {
  return state.editor.instances
    .filter(i => i.name !== 'main.cpp')
    .map(f => ({ file: f.name, code: f.instance.getValue() }));
};

const trimLines = s => {
  return s.replace(/[ \t]*\n+[ \t]*/g, '\n');
};

const getCompilerOptions = () => {
  return JSON.stringify({
    code: getMainCode(),
    codes: getExtraCode(),
    options: 'warning,optimize,boost-nothing-gcc-head,c++2a,cpp-pedantic',
    compiler: 'gcc-head',
    save: true,
    stdin: document.getElementById('input-box').value
  });
};

const checkResult = (c, r) => {
  c = c === undefined ? '' : c.trim();
  r = r === undefined ? '' : trimLines(r).trim();

  const result = state.progress.getResult();

  if (c.length === 0 && r === trimLines(result)) {
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
    const errorMsg = c.length === 0 ? 'Answer is incorrect!' : 'Compilation failed!';
    swal('Oops...', errorMsg, 'error');
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
      output.innerText = '';
      output.innerText += j.compiler_message ? j.compiler_message + '\n\n' : '';
      output.innerText += j.program_message ? j.program_message + '\n\n' : '';
      output.innerText += '\n\tProgram Exited with status: ' + j.status;
      output.innerText += '\n\tPermalink: ' + j.url + '\n ';

      output.scrollTop = output.scrollHeight;

      checkResult(j.compiler_message, j.program_message);
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
