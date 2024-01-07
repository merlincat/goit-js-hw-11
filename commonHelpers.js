import{S as m,i as y}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".search-form"),u=document.querySelector(".gallery"),i=document.querySelector(".loader"),d=new m(".gallery-link",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0,scrollZoom:!1,fadeSpeed:400});function h(){i.style.display="block",i.style.visibility="visible"}function p(){i.style.display="none",i.style.visibility="hidden"}const n=new URLSearchParams({key:"41675513-91cb25c2d4155284de80d9ebe",image_type:"photo",orientation:"horizontal",safesearch:"true"});let f=`https://pixabay.com/api/?${n.toString()}`;function g(){return fetch(f).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}c.addEventListener("submit",t=>{t.preventDefault(),h();let a=t.target.elements.search.value.trim();n.set("q",a),f=`https://pixabay.com/api/?${n.toString()}`,g().then(o=>{o.hits&&o.hits.length>0?v(o.hits):(y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}),u.innerHTML="")}).catch(o=>{console.log("Error fetching images: "+o)}).finally(()=>{p()}),c.reset()});function v(t){const a=t.reduce((o,s)=>o+`<li class="gallery-item">
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
</li>`,"");u.innerHTML=a,d.open(t),d.refresh()}
//# sourceMappingURL=commonHelpers.js.map
