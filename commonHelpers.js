import{S as d,i as u}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const f=document.querySelector(".search-form"),n=document.querySelector(".gallery"),a=document.querySelector(".loader");let m="https://pixabay.com/api/",c=null;const y=new d(".gallery-link",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0,scrollZoom:!1,fadeSpeed:400});function h(){a.style.display="block",a.style.visibility="visible"}function g(){a.style.display="none",a.style.visibility="hidden"}function p(){const o=new URLSearchParams({key:"41675513-91cb25c2d4155284de80d9ebe",image_type:"photo",orientation:"horizontal",safesearch:"true",q:c});return fetch(`${m}?${o.toString()}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}f.addEventListener("submit",o=>{o.preventDefault(),n.innerHTML="",h(),c=o.target.elements.search.value.trim(),p().then(e=>{e.hits&&e.hits.length>0?v(e.hits):(u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),n.innerHTML="")}).catch(e=>{console.log("Error fetching images: "+e)}).finally(()=>{g()}),o.currentTarget.reset()});function v(o){const e=o.reduce((i,s)=>i+`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
      class="gallery-image"
      src="${s.webformatURL}"
      alt="${s.tags}"
    />
  </a>
  <div class="descr-container">
  <div class="image-descr">Likes
  <span class="image-descr-value">${s.likes}</span>
  </div>
    <div class="image-descr">Views
  <span class="image-descr-value">${s.views}</span>
  </div>
      <div class="image-descr">Comments
  <span class="image-descr-value">${s.comments}</span>
  </div>
        <div class="image-descr">Downloads
  <span class="image-descr-value">${s.downloads}</span>
  </div>
  </div>
</li>`,"");n.innerHTML=e,y.refresh()}
//# sourceMappingURL=commonHelpers.js.map
