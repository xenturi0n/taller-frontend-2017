!function(e,t){"use strict";function a(e){return!!e.matches&&i.classList.remove("is-active")}var i=e.querySelector(".Panel"),n=e.querySelector(".Panel-button"),c=t.matchMedia("(min-width: 64em)");n.onclick=function(e){e.preventDefault(),i.classList.toggle("is-active")},t.onload=a(c),c.addListener(a)}(document,window),function(e,t){"use strict";function a(e){e.matches?(n.classList.remove("is-animating"),i.onclick=function(){n.classList.toggle("is-animating")},console.log(e.matches+"if")):(n.classList.add("is-animating"),console.log(e.matches+"else"))}var i=e.querySelector(".SearchBar .screen-reader-text"),n=e.querySelector('.SearchBar input[type="search"]'),c=t.matchMedia("(min-width: 64em)"),s=e.querySelectorAll(".post-categories a"),r=e.querySelectorAll('a[rel="tag"]');i.innerHTML='<i class="fa  fa-search"></i>',s.forEach(function(e){e.insertAdjacentHTML("afterbegin",'<i class="fa  fa-folder-open" aria-hidden="true"></i>&nbsp;')}),r.forEach(function(e){e.insertAdjacentHTML("afterbegin",'<i class="fa fa-tag" aria-hidden="true"></i>&nbsp;')}),t.onload=a(c),c.addListener(a)}(document,window);