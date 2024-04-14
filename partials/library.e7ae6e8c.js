document.getElementById("lib-buttons");let e;document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("watched-btn"),t=document.getElementById("queue-btn"),o=document.querySelector(".gallery");let n=JSON.parse(localStorage.getItem("movie-watched"))||[],i=JSON.parse(localStorage.getItem("movie-queue"))||[];async function a(e){o.innerHTML="";for(const t of e)try{if(!d(t))throw new Error(`Invalid movie ID: ${t}`);const e=c(await r(t));o.appendChild(e)}catch(e){"Movie not found."===e.message?console.warn(`Movie with ID ${t} not found.`):console.error("Failed to display movie:",e)}}async function r(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5`,o=await fetch(t);if(!o.ok)throw 404===o.status?new Error("Movie not found."):new Error("Failed to fetch movie details: "+o.statusText);return await o.json()}function c(e){const t=document.createElement("div");return t.classList.add("movie"),t.innerHTML=`\n            <img src="${e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"http://via.placeholder.com/1080x1500"}" alt="${e.title}">\n            <h3>${e.title}</h3>\n        `,t}function d(e){return!isNaN(e)}e.addEventListener("click",(function(e){e.preventDefault(),a(n)})),t.addEventListener("click",(function(e){e.preventDefault(),a(i)}))})),e="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=b5e824a3d922f68ba211fcf6dbdcb6f5";
//# sourceMappingURL=library.e7ae6e8c.js.map
