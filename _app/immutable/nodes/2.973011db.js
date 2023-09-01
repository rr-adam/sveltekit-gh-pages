import{s as g,n as h}from"../chunks/scheduler.e108d1fd.js";import{S as $,i as k,m as f,g as b,s as x,n as u,h as v,j as y,f as c,c as C,y as H,a as p,x as T,z as L,o as M}from"../chunks/index.7e6319f2.js";import{b as P}from"../chunks/paths.214d4bec.js";function S(o){let a,t,i,l,r,n,d=`<a href="${P}/subpage">Go to subpage</a>`,m,_;return{c(){a=f(`Test change

`),t=b("button"),i=f("clicks: "),l=f(o[0]),r=x(),n=b("p"),n.innerHTML=d},l(e){a=u(e,`Test change

`),t=v(e,"BUTTON",{});var s=y(t);i=u(s,"clicks: "),l=u(s,o[0]),s.forEach(c),r=C(e),n=v(e,"P",{"data-svelte-h":!0}),H(n)!=="svelte-cmdbvi"&&(n.innerHTML=d)},m(e,s){p(e,a,s),p(e,t,s),T(t,i),T(t,l),p(e,r,s),p(e,n,s),m||(_=L(t,"click",o[1]),m=!0)},p(e,[s]){s&1&&M(l,e[0])},i:h,o:h,d(e){e&&(c(a),c(t),c(r),c(n)),m=!1,_()}}}function j(o,a,t){let i=0;function l(){t(0,i+=1)}return[i,l]}class E extends ${constructor(a){super(),k(this,a,j,S,g,{})}}export{E as component};
