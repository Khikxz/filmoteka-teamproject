!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire7a9c;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7a9c=a),a.register("8OLSw",(function(e,t){var n,a,o,i;n=e.exports,a="pageCall",o=function(){return _},Object.defineProperty(n,a,{get:o,set:i,enumerable:!0,configurable:!0});var s,l,r,d,c="api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",u="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&"+c,g="https://image.tmdb.org/t/p/w500";r=null===JSON.parse(localStorage.getItem("movie-queue"))?[]:JSON.parse(localStorage.getItem("movie-queue")),localStorage.setItem("movie-queue",JSON.stringify(r)),d=null===JSON.parse(localStorage.getItem("movie-watched"))?[]:JSON.parse(localStorage.getItem("movie-watched")),localStorage.setItem("movie-watched",JSON.stringify(d));var m=document.getElementById("myModal"),p=document.getElementById("modal-poster"),v=document.getElementById("modal-title"),f=document.getElementById("modal-vote"),h=document.getElementById("modal-popularity"),y=document.getElementById("modal-original-title"),E=document.getElementById("modal-genre"),L=document.getElementById("modal-overview"),b=document.getElementById("addToWatchedBtn"),x=document.getElementById("addToQueuBtn");function S(){m.style.display="none"}document.getElementsByClassName("close")[0].addEventListener("click",S),window.addEventListener("click",(function(e){e.target===m&&S()}));var I=document.getElementById("main"),w=document.getElementById("search-form"),B=document.getElementById("search-input"),O=document.querySelector(".loader-container");function P(e){lastUrl=e,I.classList.toggle("is-hidden"),O.classList.toggle("is-hidden"),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e.results),0!==e.results.length?(!function(e){I.innerHTML="",e.forEach((function(e){var t=e.title,n=e.poster_path,a=e.release_date,o=e.genre_ids,i=document.createElement("div");i.classList.add("movie"),i.innerHTML='\n            <img src="'.concat(n?g+n:"http:/>/via.placeholder.com/1080x1500",'"\n                alt="').concat(t,'"/>\n            \n            <div class="movie-info">\n                <h3>').concat(t.toUpperCase(),'</h3>\n                <div class="movie-details">\n                    <span id="genre" class="').concat(o,'">').concat(o,'</span> |\n                    <span id="release_date" class="').concat(a,'">').concat(a.slice(0,4),"</span>\n                </div>\n            </div>        \n        "),i.addEventListener("click",(function(){!function(e){p.src="https://image.tmdb.org/t/p/w500/".concat(e.poster_path),v.textContent=e.title.toUpperCase(),f.textContent=e.vote_average.toFixed(1)+"   /   "+e.vote_count,h.textContent=e.popularity.toFixed(1),y.textContent=e.original_title.toUpperCase(),E.textContent=e.genre_ids,L.textContent=e.overview,m.style.display="block",l=e.id,s=e.original_title}(e)})),I.appendChild(i)}))}(e.results),currentPage=e.page,nextPage=currentPage+1,prevPage=currentPage-1,totalPages=e.total_pages,I.classList.toggle("is-hidden"),O.classList.toggle("is-hidden"),current.innerText=currentPage,currentPage<=1?(prev.classList.add("disabled"),next.classList.remove("disabled")):currentPage>=totalPages?(prev.classList.remove("disabled"),next.classList.add("disabled")):(prev.classList.remove("disabled"),next.classList.remove("disabled"))):(I.classList.toggle("is-hidden"),O.classList.toggle("is-hidden"),I.innerHTML='<h1 class="no-results">No Results Found</h1>')})).catch((function(e){console.error("Error fetching movies:",e),I.classList.toggle("is-hidden"),O.classList.toggle("is-hidden"),I.innerHTML='<h1 class="no-results">Error fetching movies</h1>'}))}function _(e){var t=lastUrl.split("?"),n=t[1].split("&"),a=n[n.length-1].split("=");if("page"!=a[0]){P(lastUrl+"&page="+e)}else{a[1]=e.toString();var o=a.join("=");n[n.length-1]=o;var i=n.join("&");P(t[0]+"?"+i)}}P(u),w.addEventListener("submit",(function(e){e.preventDefault();var t=B.value;P(t?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+t:u)})),prev.addEventListener("click",(function(){prevPage>0&&_(prevPage)})),next.addEventListener("click",(function(){nextPage<=totalPages&&_(nextPage)})),I.addEventListener("click",(function(e){var t=e.target.parentElement;s=t.lastElementChild.firstElementChild.innerText,console.log(s)})),b.addEventListener("click",(function(){d.includes(s)?alert("".concat(s," has been watched already")):d.push(s),localStorage.setItem("movie-watched",JSON.stringify(d))})),x.addEventListener("click",(function(){r.includes(s)?alert("".concat(s," has been added to the queue already")):r.push(s),localStorage.setItem("movie-queue",JSON.stringify(r))})),b.addEventListener("click",(function(){d.includes(l)?alert("".concat(s," has been watched already")):d.push(l),localStorage.setItem("movie-watched",JSON.stringify(d))})),x.addEventListener("click",(function(){r.includes(l)?alert("".concat(s," has been added to the queue already")):r.push(l),localStorage.setItem("movie-queue",JSON.stringify(r))})),document.body.addEventListener("keydown",(function(e){"Escape"===e.code&&S()}))})),a("8OLSw")}();
//# sourceMappingURL=index.48ed3544.js.map
