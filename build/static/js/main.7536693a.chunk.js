(this["webpackJsonpmovie-playlist"]=this["webpackJsonpmovie-playlist"]||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=(a(25),a(19)),o=a(18),s=a(4),u=a.n(s),m=a(6),d=a(2),f=a(7),v=a.n(f),E=function(e){var t=e.getQuery,a=Object(n.useState)(""),l=Object(d.a)(a,2),c=l[0],i=l[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c),i("")}},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Ex: Spider-Man",value:c,onChange:function(e){return t=e.target.value,void i(t);var t}})))},p=function(e){var t=e.movie,a=e.info,n=e.fetchAddItems,l=e.addToPlaylist;return r.a.createElement("div",{className:"card",onMouseOver:function(){return n(t.id)}},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(t.poster_path),alt:t.title})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,a.title),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Release Date:")," ",a.release_date),r.a.createElement("li",null,r.a.createElement("strong",null,"Runtime:")," ",a.runtime," minute"),r.a.createElement("li",null,r.a.createElement("strong",null,"Rating:")," ",a.vote_average),r.a.createElement("li",null,r.a.createElement("strong",null,"Tagline:")," ",a.tagline)),r.a.createElement("button",{className:"btn",onClick:function(){return l(a)}},"Add to Playlist"))))},h=function(e){var t=e.movies,a=e.info,n=e.fetchAddItems,l=e.addToPlaylist;return r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(p,{key:e.id,movie:e,info:a,fetchAddItems:n,addToPlaylist:function(e){return l(e)}})})))},y=function(e){var t=e.movies,a=e.info,n=e.fetchAddItems,l=e.addToPlaylist;return r.a.createElement("div",null,r.a.createElement(h,{movies:t,info:a,fetchAddItems:function(e){return n(e)},addToPlaylist:function(e){return l(e)}}))},g=function(e){var t=e.playlist,a=e.removeFromPlaylist,n=e.fetchAddItems;return r.a.createElement("div",{className:"card",onMouseOver:function(){return n(t.id)}},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(t.poster_path),alt:t.title})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.title),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Release Date:")," ",t.release_date),r.a.createElement("li",null,r.a.createElement("strong",null,"Runtime:")," ",t.runtime," minute"),r.a.createElement("li",null,r.a.createElement("strong",null,"Rating:")," ",t.vote_average),r.a.createElement("li",null,r.a.createElement("strong",null,"Tagline:")," ",t.tagline)),r.a.createElement("button",{className:"btn",onClick:function(){return a(t)}},"Remove"))))},b=function(e){var t=e.playlists,a=e.removeFromPlaylist,n=e.fetchAddItems;return 0===t.length?r.a.createElement("h1",{className:"empty-state"},"Ooopss, your playlist are empty..."):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(g,{key:e.id,playlist:e,fetchAddItems:function(e){return n(e)},removeFromPlaylist:function(e){return a(e)}})})))},O=function(e){var t=e.playlists,a=e.removeFromPlaylist,n=e.fetchAddItems;return r.a.createElement("div",null,r.a.createElement("h1",{className:"playlist-header"},"Movie Playlist"),r.a.createElement(b,{playlists:t,fetchAddItems:function(e){return n(e)},removeFromPlaylist:function(e){return a(e)}}))},N=function(e){var t=e.navigateTo,a=e.PAGE_MOVIE,n=e.PAGE_PLAYLIST;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,"MovieGeeks")),r.a.createElement("div",{className:"nav"},r.a.createElement("a",{href:"#",onClick:function(){return t(a)}},"Search"),r.a.createElement("a",{href:"#",onClick:function(){return t(n)}},"Playlist")))},P=(a(44),"3dfb164479b4a83fc7fac70340e5e91d"),j=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),s=Object(d.a)(c,2),f=s[0],p=s[1],h=Object(n.useState)([]),g=Object(d.a)(h,2),b=g[0],j=g[1],A=Object(n.useState)("movie"),I=Object(d.a)(A,2),S=I[0],_=I[1],k=Object(n.useState)("spider-man"),w=Object(d.a)(k,2),T=w[0],F=w[1];Object(n.useEffect)((function(){M()}),[T]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-playlist"));e&&j(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("react-movie-playlist",JSON.stringify(b))}),[b]);var M=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://api.themoviedb.org/3/search/movie?api_key=".concat(P,"&language=en-US&query=").concat(T,"&page=1&include_adult=false"));case 2:t=e.sent,a=t.data.results,console.log(a),l(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(P,"&language=en-US"));case 2:a=e.sent,n=a.data,p(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement(N,{PAGE_MOVIE:"movie",PAGE_PLAYLIST:"playlist",navigateTo:function(e){return function(e){_(e)}(e)}}),"movie"===S&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"search-header"},"Search For Movie"),r.a.createElement(E,{getQuery:function(e){return F(e)}}),r.a.createElement(y,{movies:a,info:f,fetchAddItems:function(e){return x(e)},addToPlaylist:function(e){return function(e){j([].concat(Object(o.a)(b),[Object(i.a)({},e)]))}(e)}})),"playlist"===S&&r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{playlists:b,fetchAddItems:function(e){return x(e)},removeFromPlaylist:function(e){return function(e){j(b.filter((function(t){return t!==e})))}(e)}})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7536693a.chunk.js.map