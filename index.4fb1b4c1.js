var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire7a9c;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequire7a9c=a),a.register("2Ep0d",(function(e,t){var n,a,o,d;n=e.exports,a="pageCall",o=function(){return N},Object.defineProperty(n,a,{get:o,set:d,enumerable:!0,configurable:!0});const i="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",s="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+i;let l,r,c,g;c=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(c)),g=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(g));const m=document.getElementById("myModal"),u=document.getElementById("modal-poster"),p=document.getElementById("modal-title"),v=document.getElementById("modal-vote"),f=document.getElementById("modal-popularity"),h=document.getElementById("modal-original-title"),y=document.getElementById("modal-genre"),b=document.getElementById("modal-overview"),E=document.getElementById("addToWatchedBtn"),x=document.getElementById("addToQueuBtn"),L=document.getElementsByClassName("close")[0];let I;function P(){m.style.display="none"}fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5").then((e=>e.json())).then((e=>{I=e.genres,C(s),O(e)})).catch((e=>{})),L.addEventListener("click",P),window.addEventListener("click",(function(e){e.target===m&&P()}));const B=document.getElementById("main"),w=document.getElementById("search-form"),S=document.getElementById("search-input"),_=document.querySelector(".loader-container");let k;function C(e){k=e,B.classList.toggle("is-hidden"),_.classList.toggle("is-hidden"),fetch(e).then((e=>e.json())).then((e=>{console.log(e.results),0!==e.results.length?(O(e.results),currentPage=e.page,nextPage=currentPage+1,prevPage=currentPage-1,totalPages=e.total_pages,B.classList.toggle("is-hidden"),_.classList.toggle("is-hidden"),document.addEventListener("DOMContentLoaded",(function(){document.getElementById("current").innerText=currentPage})),currentPage<=1?(prev&&prev.classList.add("disabled"),next&&next.classList.remove("disabled")):currentPage>=totalPages?(prev&&prev.classList.remove("disabled"),next&&next.classList.add("disabled")):(prev&&prev.classList.remove("disabled"),next&&next.classList.remove("disabled"))):(B.classList.toggle("is-hidden"),_.classList.toggle("is-hidden"),B.innerHTML='<h1 class="no-results">No Results Found</h1>')}))}function O(e){B.innerHTML="",e.forEach((e=>{const{title:t,poster_path:n,release_date:a,genre_ids:o}=e,d=document.createElement("div");d.classList.add("movie");const i=o&&Array.isArray(I)?o.map((e=>{const t=I.find((t=>t.id===e));return t?t.name:""})).join(", "):"";d.innerHTML=`\n            <img src="${n?"https://image.tmdb.org/t/p/w500"+n:"http:/>/via.placeholder.com/1080x1500"}"\n                alt="${t}"/>\n            <div class="movie-info">\n                <h3>${t.toUpperCase()}</h3>\n                <div class="movie-details">\n                <div>${i} | ${a.slice(0,4)}</div>\n                </div>\n                  </div>\n                  `,d.addEventListener("click",(function(){!function(e){u.src=`https://image.tmdb.org/t/p/w500/${e.poster_path}`,p.textContent=e.title.toUpperCase(),v.innerHTML=`\n      <span class="vote-avg">${e.vote_average.toFixed(1)}</span>   /   `+e.vote_count,f.textContent=e.popularity.toFixed(1),h.textContent=e.original_title.toUpperCase();const t=e.genre_ids.map((e=>{const t=I.find((t=>t.id===e));return t?t.name:""})).join(", ");y.textContent=t,b.textContent=e.overview,m.style.display="block",r=e.id,l=e.title}(e)})),B.appendChild(d)}))}function N(e){let t=k.split("?"),n=t[1].split("&"),a=n[n.length-1].split("=");if("page"!=a[0]){C(k+"&page="+e)}else{a[1]=e.toString();let o=a.join("=");n[n.length-1]=o;let d=n.join("&");C(t[0]+"?"+d)}}C(s),prev=document.getElementById("prev"),next=document.getElementById("next"),prev&&prev.addEventListener("click",(()=>{prevPage>0&&N(prevPage)})),next&&next.addEventListener("click",(()=>{nextPage<=totalPages&&N(nextPage)})),w.addEventListener("submit",(e=>{e.preventDefault();const t=S.value;C(t?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+t:s)})),prev.addEventListener("click",(()=>{prevPage>0&&N(prevPage)})),next.addEventListener("click",(()=>{nextPage<=totalPages&&N(nextPage)})),E.addEventListener("click",(()=>{g.includes(r)?alert(`${l} has been watched already`):g.push(r),localStorage.setItem("movie-watched",JSON.stringify(g))})),x.addEventListener("click",(()=>{c.includes(r)?alert(`${l} has been added to the queue already`):c.push(r),localStorage.setItem("movie-queue",JSON.stringify(c))})),document.body.addEventListener("keydown",(e=>{"Escape"===e.code&&P()}))})),a("2Ep0d");
//# sourceMappingURL=index.4fb1b4c1.js.map
