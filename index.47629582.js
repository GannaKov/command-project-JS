function e(e,t,n,l){Object.defineProperty(e,t,{get:n,set:l,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},o=t.parcelRequire8f96;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},t.parcelRequire8f96=o),o.register("kyEFX",(function(t,n){var l,o;e(t.exports,"register",(function(){return l}),(function(e){return l=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};l=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("gqZwz",(function(e,t){e.exports=new URL(o("kyEFX").resolve("dWPdL"),import.meta.url).toString()})),o.register("cfERB",(function(e,t){e.exports=new URL(o("kyEFX").resolve("1WDdE"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"5ZPII":"index.47629582.js","dWPdL":"arrow-left.2b7bce11.svg","1WDdE":"arrow-right.91990ac8.svg"}'));const a={bodyEl:document.querySelector("body"),mainEl:document.querySelector("main"),logoEl:document.querySelector(".header-logo"),backdropEl:document.querySelector(".backdrop"),buttonCloseEl:document.querySelector(".modal__button"),bodyNoScrollEl:document.querySelector("[data-nonScroll]"),logIn:document.querySelector("#logIn"),logOut:document.querySelector("#logOut"),btnNotAuth:document.querySelector(".btnNotAuth"),btnAuth:document.querySelector(".btnAuth"),modalCard:document.querySelector(".modal-card"),galleryEl:document.querySelector(".films-gallery"),paginationEl:document.querySelector(".pagination"),scrollBtnEl:document.querySelector(".arrow-up"),filmCardLinkEl:document.querySelector(".film-card__link"),filmsGalleryEl:document.querySelector(".films-gallery"),footerBtn:document.querySelector(".footer__btn")};function i(e,t,n){return`https://api.themoviedb.org/3/trending/${t}/${n}?api_key=894ef72300682f1db325dae2afe3e7e2&page=${e}`}function r(e,t,n){return fetch(i(e,t,n)).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function s(e){let t=[];return e.forEach((e=>{t.push(p.find((t=>t.id===e)).name)})),t}function c(e){return e.map((({original_title:e,release_date:t,genre_ids:n,poster_path:l,id:o})=>{let a=s(n);a.length>2&&(a=a.slice(0,2),a.push("Other")),a=a.join(", ");return`<div class="film-card">\n      <a class="film-card__link link" href="" id="${o}">\n      <div class="film-card__img-box">\n        \n        <img class="film-card__img"\n          src="https://www.themoviedb.org/t/p/w500/${l}"\n          alt=""\n          \n        />\n        </div>\n      \n        <div class="film-card__info">\n          <h2 class="film-card__name film-card__item">\n            ${e}\n          </h2>\n          <p class="film-card__data film-card__item">\n            ${a} | ${new Date(t).getFullYear()}\n          </p>\n        </div>\n      </a>\n    </div>`})).join("")}function d(e,t){const n=c(e.results);t.insertAdjacentHTML("beforeend",n)}function u(e,t){e<6&&(a.paginationEl.classList.contains("item--hidden-mob--2")&&a.paginationEl.classList.remove("item--hidden-mob--2"),a.paginationEl.classList.contains("item--hidden-mob--3")&&a.paginationEl.classList.remove("item--hidden-mob--3"),a.paginationEl.classList.add("item--hidden-mob--1")),e>=6&&e<=t-5&&(a.paginationEl.classList.contains("item--hidden-mob--1")&&a.paginationEl.classList.remove("item--hidden-mob--1"),a.paginationEl.classList.contains("item--hidden-mob--3")&&a.paginationEl.classList.remove("item--hidden-mob--3"),a.paginationEl.classList.add("item--hidden-mob--2")),e>t-5&&(a.paginationEl.classList.contains("item--hidden-mob--1")&&a.paginationEl.classList.remove("item--hidden-mob--1"),a.paginationEl.classList.contains("item--hidden-mob--2")&&a.paginationEl.classList.remove("item--hidden-mob--2"),a.paginationEl.classList.add("item--hidden-mob--3"))}function m(e,t,n,l){let a=[],r=[],s="";if(t<=6){for(let e=1;e<=7;e++)a.push(e),r.push(e);a.push("..."),r.push(8),a.push(e),r.push(e),u(t,e)}if(t>6&&t<e-5){a.push(1),r.push(1),a.push("..."),r.push(t-3);for(let e=t-2;e<=t+2;e++)a.push(e),r.push(e);a.push("..."),r.push(t+3),a.push(e),r.push(e),u(t,e)}if(t>=e-5){a.push(1),r.push(1),a.push("..."),r.push(e-7);for(let n=-6;n<=0;n++)a.push(e+n),r.push(e+n),u(t,e)}let c=0;a.forEach((e=>{c+=1;let o=e===t?"pagination__item--active":"";s+=`<li class="pagination__item item${c}"><a data-page="${r[c-1]}" href="${i(r[c-1],n,l)}" class="link pagination__link ${o} ">${e}</a></li>`}));const d=o("gqZwz"),m=o("cfERB");return`<button class="btn--decrement" data-page="${t-1}" type="button"><img src="${d}" data-page="${t-1}" class="pagination__icon"  width="20" height="20"\n      alt="selectedItem"></button>\n        <div class="pagination__wrap">\n        <ul class="pagination__list list">\n        ${s} </ul>\n        </div>\n         <button class="btn--increment" data-page="${t+1}" type="button" >\n    <img src="${m}" class="pagination__icon" data-page="${t+1} "width="20" height="20"></button>`}let p=[];const f={loadMoreBtnEl:document.querySelector(".load-more-btn"),bodyEl:document.querySelector("body"),backdropEl:document.querySelector(".backdrop"),buttonCloseEl:document.querySelector(".modal__button"),bodyNoScrollEl:document.querySelector("[data-nonScroll]"),filmCardLinkEl:document.querySelector(".film-card__link"),filmsGalleryEl:document.querySelector(".films-gallery"),footerBtn:document.querySelector(".footer__btn")};function b(e){const t=e.genres.map((e=>e.name)).join(", ");return`<img class="modal-card__img"\n     src="https://www.themoviedb.org/t/p/w500/${e.poster_path}"\n     alt=""\n     id=""\n    />\n    <div class="modal-card__info">\n     <h2 class="modal-card__title">${e.title.toUpperCase()}</h2>\n     <div class="table">\n     <ul class="table__parametr">\n       <li class="table__parametr-list list">Vote/Votes </li>\n       <li class="table__parametr-list list">Popularity </li>\n       <li class="table__parametr-list list">Original Title </li>\n       <li class="table__parametr-list list">Genre</li>\n     </ul>\n\n         <ul class="table__value">\n       <li class="table__value-list list"><span class="table__span-value">${e.vote_average}</span class="table__value-slash">/<span>${e.vote_count}</span></li>\n       <li class="table__value-list list">${e.popularity}</li>\n       <li class="table__value-list table-text list">${e.original_title.toUpperCase()}</li>\n       <li class="table__value-list table-text list">${t}</li>\n     </ul>\n     </div>\n     <p>\n       <h3 class="about">ABOUT</h3>\n       <div class="about-text">${e.overview}</div>\n     </p>\n     <div class="button-add">\n     <button class="button-add__watched button">add to Watched</button>\n     <button class="button-add__queue button">add to queue</button>\n      </div>\n     </div>`}let g={};const h=document.querySelector(".modal-card");async function _(e){var t;await(t=e,fetch(`https://api.themoviedb.org/3//movie/${t}?api_key=45074c10b8f2ea3914a60876b2d17a1a`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>(g=e,g)));const n=b(g);return h.innerHTML=n}function E(){f.backdropEl.classList.add("is-hidden"),f.bodyNoScrollEl.classList.remove("no-scroll"),h.innerHTML=""}function v(e){e.target===e.currentTarget&&(f.backdropEl.classList.add("is-hidden"),f.bodyNoScrollEl.classList.remove("no-scroll"))}function y(e){e.code,f.bodyNoScrollEl.classList.remove("no-scroll"),f.backdropEl.classList.add("is-hidden"),f.bodyEl.removeEventListener("keydown",y)}function w(e){f.backdropEl.classList.remove("is-hidden"),f.bodyEl.addEventListener("keydown",y),f.bodyNoScrollEl.classList.add("no-scroll"),f.backdropEl.addEventListener("click",v),f.buttonCloseEl.addEventListener("click",E)}async function L(e){e.preventDefault(),e.target.closest(".film-card__link")&&(await _(e.target.closest(".film-card__link").id),w())}function S(e){e.addEventListener("click",w)}!function(){function e(e){r(e,"movie","week").then((e=>{if(d(e,a.galleryEl),e.total_pages>1){const t=m(Number(e.total_pages),Number(e.page),"movie","week");a.paginationEl.innerHTML=t}}))}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=894ef72300682f1db325dae2afe3e7e2&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{p=e.genres})).catch((e=>console.log(e))),e(1),a.paginationEl.addEventListener("click",(t=>{t.preventDefault(),a.galleryEl.innerHTML="",e(t.target.dataset.page)}))}(),f.filmsGalleryEl.addEventListener("click",L),S(a.footerBtn);
//# sourceMappingURL=index.47629582.js.map