import{S as w,i as b,s as E,e as d,t as p,c as f,b as h,d as x,f as m,h as u,j as C,k as c,m as I,n as v,o as S}from"./index.5ae8cf35.js";/* empty css                       */function j(o){let e,r,a,n,i,s;return{c(){e=d("div"),r=p("I am "),a=d("span"),n=p(o[0]),i=d("span"),s=p("|"),this.h()},l(t){e=f(t,"DIV",{class:!0});var l=h(e);r=x(l,"I am "),a=f(l,"SPAN",{class:!0,id:!0});var g=h(a);n=x(g,o[0]),g.forEach(m),i=f(l,"SPAN",{class:!0});var y=h(i);s=x(y,"|"),y.forEach(m),l.forEach(m),this.h()},h(){u(a,"class","text-[#EC62BA]"),u(a,"id","adj"),u(i,"class","bar text-4xl svelte-fpguux"),u(e,"class","text-3xl font-semibold font-['Roboto'] tracking-[0.075em] md:tracking-[.12em] pt-10 text-white ")},m(t,l){C(t,e,l),c(e,r),c(e,a),c(a,n),c(e,i),c(i,s)},p(t,[l]){l&1&&I(n,t[0])},i:v,o:v,d(t){t&&m(e)}}}function _(o){return new Promise(e=>setTimeout(e,o))}function k(o,e,r){let a="Curios",n=["Curious. ","a little bit lazy. ","also completely crazy. "];async function i(){document.getElementsByTagName("main")[0].style.opacity="1";let s=1;for(;;){for(let t=a.length;t>0;t--)r(0,a=a.slice(0,t)),await _(100);for(let t=0;t<n[s].length;t++)r(0,a=n[s].slice(0,t)),await _(100);await _(700),s=s+1,s==n.length&&(s=0)}}return S(i),[a]}class P extends w{constructor(e){super(),b(this,e,k,j,E,{})}}export{P as default};
