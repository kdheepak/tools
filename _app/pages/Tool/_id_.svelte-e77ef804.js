import{S as G,i as H,s as L,j as T,e as h,aa as j,d as c,l as x,c as p,a as b,b as d,f as m,n as w,o as D,p as y,J as A,aA as v,u as P,m as V,I as M,a0 as O,v as $,t as S,w as q,g as E,H as k,x as C,Q as I,A as B}from"../../chunks/vendor-1a672711.js";import{t as F}from"../../chunks/stores-5c109071.js";function J(u){let s,a,n,l,t;return n=new M({props:{class:"w-4 h-4 mr-2 fill-current",data:O,spin:!0}}),{c(){s=h("div"),a=h("div"),$(n.$$.fragment),l=S(`
        Loading...`),this.h()},l(o){s=p(o,"DIV",{class:!0});var r=b(s);a=p(r,"DIV",{class:!0,role:!0});var e=b(a);q(n.$$.fragment,e),l=E(e,`
        Loading...`),e.forEach(c),r.forEach(c),this.h()},h(){d(a,"class","bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full"),d(a,"role","alert"),d(s,"class","grid-flow-row w-full items-stretch")},m(o,r){m(o,s,r),k(s,a),C(n,a,null),k(a,l),t=!0},p:I,i(o){t||(y(n.$$.fragment,o),t=!0)},o(o){w(n.$$.fragment,o),t=!1},d(o){o&&c(s),B(n)}}}function N(u){let s,a,n,l,t,o=u[0].body_html+"";return{c(){s=h("a"),a=S("Go to GitHub Issue"),l=T(),t=h("div"),this.h()},l(r){s=p(r,"A",{target:!0,class:!0,href:!0});var e=b(s);a=E(e,"Go to GitHub Issue"),e.forEach(c),l=x(r),t=p(r,"DIV",{class:!0});var g=b(t);g.forEach(c),this.h()},h(){d(s,"target","_blank"),d(s,"class","justify-self-start inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out"),d(s,"href",n=u[0].issue_url),d(t,"class","tool-wrapper svelte-hdgbil")},m(r,e){m(r,s,e),k(s,a),m(r,l,e),m(r,t,e),t.innerHTML=o},p(r,e){e&1&&n!==(n=r[0].issue_url)&&d(s,"href",n),e&1&&o!==(o=r[0].body_html+"")&&(t.innerHTML=o)},i:I,o:I,d(r){r&&c(s),r&&c(l),r&&c(t)}}}function Q(u){let s,a,n,l,t,o;document.title=s="G-PST Tools Portal - "+(u[1]?`Tool ${u[0].number}`:"");const r=[N,J],e=[];function g(i,_){return i[1]?0:1}return l=g(u),t=e[l]=r[l](u),{c(){a=T(),n=h("div"),t.c(),this.h()},l(i){j('[data-svelte="svelte-1acbsd7"]',document.head).forEach(c),a=x(i),n=p(i,"DIV",{class:!0});var f=b(n);t.l(f),f.forEach(c),this.h()},h(){d(n,"class","grid mx-40 my-12")},m(i,_){m(i,a,_),m(i,n,_),e[l].m(n,null),o=!0},p(i,[_]){(!o||_&3)&&s!==(s="G-PST Tools Portal - "+(i[1]?`Tool ${i[0].number}`:""))&&(document.title=s);let f=l;l=g(i),l===f?e[l].p(i,_):(V(),w(e[f],1,1,()=>{e[f]=null}),D(),t=e[l],t?t.p(i,_):(t=e[l]=r[l](i),t.c()),y(t,1),t.m(n,null))},i(i){o||(y(t),o=!0)},o(i){w(t),o=!1},d(i){i&&c(a),i&&c(n),e[l].d()}}}async function K({params:u}){return{props:{id:u.id}}}function U(u,s,a){let n;A(u,F,e=>a(3,n=e));let{id:l}=s;v.setOption("simplifiedAutoLink",!0),v.setOption("openLinksInNewWindow",!0),v.setOption("emoji",!0),v.setFlavor("github");const t=new v.Converter;let o=n.find(e=>e.number.toString()===l.toString());console.log(o);let r=!1;return P(()=>{a(0,o.body_html=t.makeHtml(o.issue_body),o),a(1,r=!0)}),u.$$set=e=>{"id"in e&&a(2,l=e.id)},[o,r,l]}class R extends G{constructor(s){super();H(this,s,U,Q,L,{id:2})}}export{R as default,K as load};
