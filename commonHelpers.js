import{S as v,a as F,i as n}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const L=new v(".card a",{captions:!0,captionsData:"alt"}),b=document.querySelector(".gallery");function h(o){const r=o.hits.map(s=>A(s)).join("");b.insertAdjacentHTML("beforeend",r),L.refresh()}function A({webformatURL:o,tags:r,likes:s,views:a,comments:e,downloads:t,largeImageURL:i}){return`<li class="card">
      <a class="link" href="${i}">
        <img src="${o}" alt="${r}" class="image">
        <div class="container">
          <div class="content">
            <h4 class="name">Likes</h4>
            <p class="description">${s}</p>
          </div>
          <div class="content">
            <h4 class="name">Views</h4>
            <p class="description">${a}</p>
          </div>
          <div class="content">
            <h4 class="name">Comments</h4>
            <p class="description">${e}</p>
          </div>
          <div class="content">
            <h4 class="name">Downloads</h4>
            <p class="description">${t}</p>
          </div>
        </div>
      </a>
    </li>`}async function m(o,r){const s={key:"6682685-2020f07934f1586c5464d55ac",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r},{data:a}=await F.get("https://pixabay.com/api/",{params:s});return a}const g=document.querySelector("form"),w=document.querySelector(".gallery"),u=document.querySelector(".loader"),l=document.querySelector(".btn-load-more");g.addEventListener("submit",P);l.addEventListener("click",C);let c=1,d="",p=0;async function P(o){f();try{o.preventDefault();const r=o.target.elements.text.value.trim();if(r==="")return n.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark"});d=r,w.innerHTML="",c=1;const s=await m(d,c);if(s.hits.length===0)return n.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark"});p=Math.ceil(s.totalHits/15),h(s),g.reset(),y()}catch{return n.error({message:"An error occurred while fetching data. Please try again later.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark"})}finally{u.classList.add("is-hidden")}}async function C(){f();try{c+=1;const o=await m(d,c);h(o)}catch{return n.error({message:"An error occurred while fetching data. Please try again later.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark"})}finally{if(y(),window.scrollBy({top:200,behavior:"smooth"}),p===c)return l.classList.add("is-hidden"),n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark"})}}function f(){u.classList.remove("is-hidden"),l.classList.add("is-hidden")}function y(){u.classList.add("is-hidden"),l.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
