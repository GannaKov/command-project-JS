function t(t,e,o,i){Object.defineProperty(t,e,{get:o,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},n=e.parcelRequire8f96;null==n&&((n=function(t){if(t in o)return o[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequire8f96=n),n.register("kyEFX",(function(e,o){var i,n;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return n}),(function(t){return n=t}));var a={};i=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)a[e[o]]=t[e[o]]},n=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),n.register("dPn3b",(function(e,o){t(e.exports,"refs",(function(){return i}));const i={bodyEl:document.querySelector("body"),mainEl:document.querySelector("main"),logoEl:document.querySelector(".header-logo"),backdropEl:document.querySelector(".backdrop"),buttonCloseEl:document.querySelector(".modal__button"),bodyNoScrollEl:document.querySelector("[data-nonScroll]"),logIn:document.querySelector("#logIn"),logOut:document.querySelector("#logOut"),btnNotAuth:document.querySelector(".btnNotAuth"),btnAuth:document.querySelector(".btnAuth"),modalCard:document.querySelector(".modal-card"),galleryEl:document.querySelector(".films-gallery"),paginationEl:document.querySelector(".pagination"),scrollBtnEl:document.querySelector(".arrow-up"),filmCardLinkEl:document.querySelector(".film-card__link"),filmsGalleryEl:document.querySelector(".films-gallery"),footerBtn:document.querySelector(".footer__btn"),modalFilmEl:document.querySelector(".modal-card")}})),n.register("ffciR",(function(e,o){t(e.exports,"trendsControls",(function(){return n("3br7l").trendsControls})),t(e.exports,"scrollToTop",(function(){return n("30T8g").scrollToTop})),t(e.exports,"onMyLibraryOpen",(function(){return n("02HfH").onMyLibraryOpen})),t(e.exports,"addToLokalStorage",(function(){return n("02HfH").addToLokalStorage})),n("3br7l"),n("30T8g"),n("02HfH")})),n.register("3br7l",(function(e,o){t(e.exports,"genreIdArr",(function(){return f})),t(e.exports,"trendsControls",(function(){return d}));var i=n("dPn3b");n("4B94x");var a=n("bUhC1"),r=n("1n08B"),s=n("aZYq9"),l=n("eixp5"),c=n("kfvgW");let f=[];function d(){(async()=>{function t(t){(0,s.fetchFilms)(t,"movie","week").then((t=>{const e=i.refs.galleryEl;if((0,r.filmsTrendRender)(t,e),t.total_pages>1){const e=(0,c.paginationRender)(Number(t.total_pages),Number(t.page),"movie","week");i.refs.paginationEl.innerHTML=e}}))}await(0,a.fetchGenreId)().then((t=>{f=t.genres})).catch((t=>console.log(t))),t(1),i.refs.paginationEl.addEventListener("click",(e=>{e.preventDefault(),(0,l.cleanRender)(i.refs.galleryEl),t(e.target.dataset.page)}))})()}})),n.register("4B94x",(function(e,o){t(e.exports,"fetchGenreId",(function(){return n("bUhC1").fetchGenreId})),t(e.exports,"buildUrl",(function(){return n("aZYq9").buildUrl})),n("bUhC1"),n("aZYq9")})),n.register("bUhC1",(function(e,o){async function i(){const t=await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US");if(!t.ok)throw new Error(t.status);return await t.json()}t(e.exports,"fetchGenreId",(function(){return i}))})),n.register("aZYq9",(function(e,o){t(e.exports,"buildUrl",(function(){return i})),t(e.exports,"fetchFilms",(function(){return n}));function i(t,e,o){return`https://api.themoviedb.org/3/trending/${e}/${o}?api_key=894ef72300682f1db325dae2afe3e7e2&page=${t}`}function n(t,e,o){return fetch(i(t,e,o)).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))}})),n.register("1n08B",(function(e,o){t(e.exports,"filmsTrendRender",(function(){return a}));var i=n("2cI31");function a(t,e){const o=(0,i.createFilmMarkup)(t.results);e.insertAdjacentHTML("beforeend",o)}})),n.register("2cI31",(function(e,o){t(e.exports,"createFilmMarkup",(function(){return a}));var i=n("9EQrt");function a(t){return t.map((({original_title:t,release_date:e,genre_ids:o,poster_path:n,id:a})=>{let r=(0,i.getGenreName)(o);r.length>2&&(r=r.slice(0,2),r.push("Other")),r=r.join(", ");return`<div class="film-card">\n      <a class="film-card__link link" href="" id="${a}">\n      <div class="film-card__img-box">\n        \n        <img class="film-card__img"\n          src="https://www.themoviedb.org/t/p/w500/${n}"\n          alt=""\n          \n        />\n        </div>\n      \n        <div class="film-card__info">\n          <h2 class="film-card__name film-card__item">\n            ${t}\n          </h2>\n          <p class="film-card__data film-card__item">\n            ${r} | ${new Date(e).getFullYear()}\n          </p>\n        </div>\n      </a>\n    </div>`})).join("")}})),n.register("9EQrt",(function(e,o){t(e.exports,"getGenreName",(function(){return a}));var i=n("3br7l");function a(t){let e=[];return t.forEach((t=>{e.push(i.genreIdArr.find((e=>e.id===t)).name)})),e}})),n.register("eixp5",(function(e,o){function i(t){t.innerHTML=""}t(e.exports,"cleanRender",(function(){return i}))})),n.register("kfvgW",(function(e,o){t(e.exports,"paginationRender",(function(){return r})),n("4B94x");var i=n("aZYq9"),a=n("f9pLT");function r(t,e,o,r){let s=[],l=[],c="";if(e<=6){for(let t=1;t<=7;t++)s.push(t),l.push(t);s.push("..."),l.push(8),s.push(t),l.push(t),(0,a.paginationBtnHidden)(e,t)}if(e>6&&e<t-5){s.push(1),l.push(1),s.push("..."),l.push(e-3);for(let t=e-2;t<=e+2;t++)s.push(t),l.push(t);s.push("..."),l.push(e+3),s.push(t),l.push(t),(0,a.paginationBtnHidden)(e,t)}if(e>=t-5){s.push(1),l.push(1),s.push("..."),l.push(t-7);for(let o=-6;o<=0;o++)s.push(t+o),l.push(t+o),(0,a.paginationBtnHidden)(e,t)}let f=0;s.forEach((t=>{f+=1;let n=t===e?"pagination__item--active":"";c+=`<li class="pagination__item item${f}"><a data-page="${l[f-1]}" href="${(0,i.buildUrl)(l[f-1],o,r)}" class="link pagination__link ${n} ">${t}</a></li>`}));const d=n("gqZwz"),m=n("cfERB");return`<button class="btn--decrement" data-page="${e-1}" type="button"><img src="${d}" data-page="${e-1}" class="pagination__icon"  width="20" height="20"\n      alt="selectedItem"></button>\n        <div class="pagination__wrap">\n        <ul class="pagination__list list">\n        ${c} </ul>\n        </div>\n         <button class="btn--increment" data-page="${e+1}" type="button" >\n    <img src="${m}" class="pagination__icon" data-page="${e+1} "width="20" height="20"></button>`}})),n.register("f9pLT",(function(e,o){t(e.exports,"paginationBtnHidden",(function(){return a}));var i=n("dPn3b");function a(t,e){t<6&&(i.refs.paginationEl.classList.contains("item--hidden-mob--2")&&i.refs.paginationEl.classList.remove("item--hidden-mob--2"),i.refs.paginationEl.classList.contains("item--hidden-mob--3")&&i.refs.paginationEl.classList.remove("item--hidden-mob--3"),i.refs.paginationEl.classList.add("item--hidden-mob--1")),t>=6&&t<=e-5&&(i.refs.paginationEl.classList.contains("item--hidden-mob--1")&&i.refs.paginationEl.classList.remove("item--hidden-mob--1"),i.refs.paginationEl.classList.contains("item--hidden-mob--3")&&i.refs.paginationEl.classList.remove("item--hidden-mob--3"),i.refs.paginationEl.classList.add("item--hidden-mob--2")),t>e-5&&(i.refs.paginationEl.classList.contains("item--hidden-mob--1")&&i.refs.paginationEl.classList.remove("item--hidden-mob--1"),i.refs.paginationEl.classList.contains("item--hidden-mob--2")&&i.refs.paginationEl.classList.remove("item--hidden-mob--2"),i.refs.paginationEl.classList.add("item--hidden-mob--3"))}})),n.register("gqZwz",(function(t,e){t.exports=new URL(n("kyEFX").resolve("dWPdL"),import.meta.url).toString()})),n.register("cfERB",(function(t,e){t.exports=new URL(n("kyEFX").resolve("1WDdE"),import.meta.url).toString()})),n.register("30T8g",(function(e,o){t(e.exports,"scrollToTop",(function(){return s}));var i=n("dPn3b");function a(){window.scrollY>700?i.refs.scrollBtnEl.classList.remove("isHiddenBtn"):window.scrollY<700&&i.refs.scrollBtnEl.classList.add("isHiddenBtn")}function r(){window.scrollTo(0,0)}function s(){window.addEventListener("scroll",a),i.refs.scrollBtnEl.addEventListener("click",r)}})),n.register("02HfH",(function(e,o){t(e.exports,"addToLokalStorage",(function(){return d})),t(e.exports,"onMyLibraryOpen",(function(){return p}));var i=n("dPn3b"),a=n("iQIUW");n("4CB6P");var r=n("5mOda");const s="watched",l="queue";let c=[],f=[];try{c=[...JSON.parse(localStorage.getItem(s))],f=[...JSON.parse(localStorage.getItem(l))]}catch(t){console.log(t)}function d(t){console.log(t.id),i.refs.modalFilmEl.addEventListener("click",(function e(o){o.target.classList.contains("js-button-watched")?(m(c,t),localStorage.setItem(s,JSON.stringify(c))):o.target.classList.contains("js-button-queue")&&(m(f,t),localStorage.setItem(l,JSON.stringify(f)));i.refs.modalFilmEl.removeEventListener("click",e)}))}function m(t,e){t.find((t=>t.id===e.id))?a.Notify.info("The movie has already been added to the list"):(t.push(e),a.Notify.success("The movie has been added to the list"))}function p(){try{const t=JSON.parse(localStorage.getItem(s));(0,r.renderLibraryList)(t)}catch(t){a.Notify.warning("List is empty!")}}})),n.register("iQIUW",(function(t,o){var i,n;i=void 0!==e?e:"undefined"!=typeof window?window:t.exports,n=function(t){if(void 0===t&&void 0===t.document)return!1;var e,o="Success",i="Failure",n="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e&&"[object Object]"===Object.prototype.toString.call(o[i])?t[i]=c(t[i],o[i]):t[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return t},f=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,m=function(s,f,m,u){if(!l("body"))return!1;e||p.Notify.init({});var y=c(!0,e,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof u&&!Array.isArray(u)){var g={};"object"==typeof m?g=m:"object"==typeof u&&(g=u),e=c(!0,e,g)}var x,b,h=e[s.toLocaleLowerCase("en")];d++,"string"!=typeof f&&(f="Notiflix "+s),e.plainText&&(x=f,(b=t.document.createElement("div")).innerHTML=x,f=b.textContent||b.innerText||""),!e.plainText&&f.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),f='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),f.length>e.messageMaxLength&&(f=f.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),e.cssAnimation||(e.cssAnimationDuration=0);var v=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(v.id=r.wrapID,v.style.width=e.width,v.style.zIndex=e.zindex,v.style.opacity=e.opacity,"center-center"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.margin="auto",v.classList.add("nx-flex-center-center"),v.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.justifyContent="center",v.style.alignItems="center",v.style.pointerEvents="none"):"center-top"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.top=e.distance,v.style.bottom="auto",v.style.margin="auto"):"center-bottom"===e.position?(v.style.left=e.distance,v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.margin="auto"):"right-bottom"===e.position?(v.style.right=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.left="auto"):"left-top"===e.position?(v.style.left=e.distance,v.style.top=e.distance,v.style.right="auto",v.style.bottom="auto"):"left-bottom"===e.position?(v.style.left=e.distance,v.style.bottom=e.distance,v.style.top="auto",v.style.right="auto"):(v.style.right=e.distance,v.style.top=e.distance,v.style.left="auto",v.style.bottom="auto"),e.backOverlay){var w=t.document.getElementById(r.overlayID)||t.document.createElement("div");w.id=r.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=e.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=h.backOverlayColor||e.backOverlayColor,w.className=e.cssAnimation?"nx-with-animation":"",w.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(w)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(v);var k=t.document.createElement("div");k.id=e.ID+"-"+d,k.className=e.className+" "+h.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof m?"nx-with-close-button":"")+" "+("function"==typeof m?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=h.textColor,k.style.background=h.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof m&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"");else{var _="";s===o?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===i?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===n?_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(_='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=_+'<span class="nx-message nx-with-icon">'+f+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+f+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var E=t.document.getElementById(r.wrapID);E.insertBefore(k,E.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var L=t.document.getElementById(k.id);if(L){var I,S,C=function(){L.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&v.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(I)},T=function(){if(L&&null!==L.parentNode&&L.parentNode.removeChild(L),v.childElementCount<=0&&null!==v.parentNode){v.parentNode.removeChild(v);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(S)};if(e.closeButton&&"function"!=typeof m&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof m||e.clickToClose)&&L.addEventListener("click",(function(){"function"==typeof m&&m(),C();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof m){var B=function(){I=setTimeout((function(){C()}),e.timeout),S=setTimeout((function(){T()}),e.timeout+e.cssAnimationDuration)};B(),e.pauseOnHover&&(L.addEventListener("mouseenter",(function(){L.classList.add("nx-paused"),clearTimeout(I),clearTimeout(S)})),L.addEventListener("mouseleave",(function(){L.classList.remove("nx-paused"),B()})))}}if(e.showOnlyTheLastOne&&d>0)for(var A=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+d+"])"),z=0;z<A.length;z++){var W=A[z];null!==W.parentNode&&W.parentNode.removeChild(W)}e=c(!0,e,y)},p={Notify:{init:function(o){e=c(!0,r,o),function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var i=t.document.createElement("style");i.id=o,i.innerHTML=e(),t.document.head.appendChild(i)}}(f,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,i){m(o,t,e,i)},failure:function(t,e,o){m(i,t,e,o)},warning:function(t,e,o){m(n,t,e,o)},info:function(t,e,o){m(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return n(i)})):"object"==typeof t.exports?t.exports=n(i):i.Notiflix=n(i)})),n.register("4CB6P",(function(e,o){t(e.exports,"renderLibraryList",(function(){return n("5mOda").renderLibraryList})),n("1n08B"),n("2hGrY"),n("5mOda")})),n.register("2hGrY",(function(t,e){n("6eyJa");n("dfXLj");document.querySelector("main")})),n.register("6eyJa",(function(e,o){t(e.exports,"markupTrending",(function(){return n("dfXLj").markupTrending})),t(e.exports,"markupBtnModalFilm",(function(){return n("8Gyt8").markupBtnModalFilm})),n("dfXLj"),n("2cI31"),n("8Gyt8"),n("7KNNl")})),n.register("dfXLj",(function(e,o){function i(t){return`<div style="width: 300px"><img src="https://image.tmdb.org/t/p/w500/${t}"/></div>`}t(e.exports,"markupTrending",(function(){return i}))})),n.register("8Gyt8",(function(e,o){function i(t){const e=t.genres.map((t=>t.name)).join(", ");return`<img class="modal-card__img"\n     src="https://www.themoviedb.org/t/p/w500/${t.poster_path}"\n     alt=""\n     id=""\n    />\n    <div class="modal-card__info">\n     <h2 class="modal-card__title">${t.title.toUpperCase()}</h2>\n     <div class="table">\n     <ul class="table__parametr">\n       <li class="table__parametr-list list">Vote/Votes </li>\n       <li class="table__parametr-list list">Popularity </li>\n       <li class="table__parametr-list list">Original Title </li>\n       <li class="table__parametr-list list">Genre</li>\n     </ul>\n\n         <ul class="table__value">\n       <li class="table__value-list list"><span class="table__span-value">${t.vote_average}</span class="table__value-slash">/<span>${t.vote_count}</span></li>\n       <li class="table__value-list list">${t.popularity}</li>\n       <li class="table__value-list table-text list">${t.original_title.toUpperCase()}</li>\n       <li class="table__value-list table-text list">${e}</li>\n     </ul>\n     </div>\n     <p>\n       <h3 class="about">ABOUT</h3>\n       <div class="about-text">${t.overview}</div>\n     </p>\n\n     <div class="button-add">\n     <button class="button-add__watched button">add to Watched</button>\n     <button class="button-add__queue button">add to queue</button>\n      </div>\n     </div>`}t(e.exports,"markupBtnModalFilm",(function(){return i})),n("6eyJa"),n("9EQrt")})),n.register("7KNNl",(function(e,o){function i(t){return t.map((({original_title:t,release_date:e,genres:o,poster_path:i,vote_average:n})=>{let a=[];return o.forEach((t=>{a.push(t.name)})),a.length>3&&a.splice(2,5,"Other"),e=e.split("").slice(0,4).join(""),n=n.toFixed(1),`<div class="film-card">\n  <a class="film-card__link link" href="">\n    <div class="film-card__img-box">\n      <img\n        class="film-card__img"\n        src="https://www.themoviedb.org/t/p/w500${i}"\n        alt="${t}"\n        loading="lazy"\n      />\n    </div>\n    <div class="film-card__info">\n      <h2 class="film-card__name film-card__item">${t}</h2>\n      <div class="film-card-wrap">\n        <p class="film-card__data film-card__item">\n          ${a} | ${e}\n        </p>\n        <p class="film-card__average">${n}</p>\n      </div>\n    </div>\n  </a>\n</div> `})).join("")}t(e.exports,"createLibraryMarkup",(function(){return i}))})),n.register("5mOda",(function(e,o){t(e.exports,"renderLibraryList",(function(){return r}));var i=n("7KNNl");const a=document.querySelector(".library-gallery");function r(t){const e=(0,i.createLibraryMarkup)(t);a.innerHTML=e}})),n.register("gBZUE",(function(e,o){t(e.exports,"refs",(function(){return i}));const i={loadMoreBtnEl:document.querySelector(".load-more-btn"),bodyEl:document.querySelector("body"),backdropEl:document.querySelector(".backdrop"),buttonCloseEl:document.querySelector(".modal__button"),bodyNoScrollEl:document.querySelector("[data-nonScroll]"),filmCardLinkEl:document.querySelector(".film-card__link"),filmsGalleryEl:document.querySelector(".films-gallery"),footerBtn:document.querySelector(".footer__btn")}})),n("kyEFX").register(JSON.parse('{"b9auz":"index.59ac66a4.js","dWPdL":"arrow-left.2b7bce11.svg","1WDdE":"arrow-right.91990ac8.svg"}'));
//# sourceMappingURL=index.59ac66a4.js.map
