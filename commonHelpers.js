import{i as a,S as u}from"./assets/vendor-beb23274.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function d(){const r=h.value.trim().split(",").join("+"),s=new URLSearchParams({key:"42633759-4a44573e34755b4488adb4c1b",q:[r],image_type:"photo",orientation:"horizontal",safesearch:!0});return y(),fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function f(r){if(r.length==0)a.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});else{const s=r.map(e=>`<li class="photos-list-item">
            <a class="photos-list-link" href="${e.largeImageURL}">
            <img class="photo" src="${e.webformatURL}" alt="${e.tags}"/>
            </a>
            <ul class="photo-information-container">
            <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${e.likes}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${e.views}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${e.comments}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${e.downloads}</p></li>
            </ul>
            </li>`).join("");m.insertAdjacentHTML("beforeend",s),g.refresh()}}const i=document.querySelector(".search-form"),h=i.elements.search,m=document.querySelector(".gallery"),g=new u(".gallery a",{captionsData:"alt",captionDelay:250}),l=document.querySelector(".loader");l.style.display="none";const y=()=>{l.style.display="flex"},p=()=>{l.style.display="none"};i.addEventListener("submit",F);function F(r){r.preventDefault(),m.innerHTML="",r.target.elements.search.value.trim()!==""?(window.onload=()=>{d().then(e=>{f(e.hits),p()}).catch(e=>{console.log(e),p(),a.error({message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})})},window.onload(),i.reset()):a.show({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
