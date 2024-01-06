import{i as u,S as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();document.querySelector(".btn-submit");const n=document.querySelector(".search-form"),m=n.querySelector(".form-input"),y=document.querySelector(".gallery"),i=document.querySelector(".loader");function h(){i.style.display="block",i.style.visibility="visible"}function p(){i.style.display="none",i.style.visibility="hidden"}const l=new URLSearchParams({key:"41675513-91cb25c2d4155284de80d9ebe",image_type:"photo",orientation:"horizontal",safesearch:"true"});let d=`https://pixabay.com/api/?${l.toString()}`;function g(){return fetch(d).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}n.addEventListener("submit",s=>{s.preventDefault(),h(),l.set("q",m.value),d=`https://pixabay.com/api/?${l.toString()}`,g().then(t=>{t.hits&&t.hits.length>0?v(t.hits):u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}).catch(t=>{throw new Error("Error fetching images: "+t)}).finally(()=>{p()}),n.reset()});function v(s){const t=s.reduce((o,e)=>o+`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
  </a>
  <div class="descr-container">
  <div class="image-descr">Likes
  <span class="image-descr-value">${e.likes}</span>
  </div>
    <div class="image-descr">Views
  <span class="image-descr-value">${e.views}</span>
  </div>
      <div class="image-descr">Comments
  <span class="image-descr-value">${e.comments}</span>
  </div>
        <div class="image-descr">Comments
  <span class="image-descr-value">${e.downloads}</span>
  </div>
  </div>
</li>`,"");y.innerHTML=t,new f(".gallery-link",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0,scrollZoom:!1,fadeSpeed:400}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
