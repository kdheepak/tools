import{S as pe,i as ye,s as de,ae as ve,w as R,x as Y,y as Z,q as O,o as F,B as G,F as we,K as W,af as se,ag as $e,ah as xe,ai as U,aj as ke,ak as be,al as j,am as B,a as V,d as v,b as s,g as C,Y as ae,an as ie,_ as Me,t as te,h as re,J as q,j as Ee,$ as ue,a0 as fe,ao as oe,k as X,e as J,l as _e,ab as Se,m as ee,c as K,p as Te,n as Ve,ap as Ae,I as Ce,a1 as Ie,R as Le}from"../chunks/vendor-c1c72708.js";import{A as ze,L as De}from"../chunks/LanguageChipBox-018e6bfd.js";import{T as Ne}from"../chunks/ToolChipBox-53c737fa.js";import{f as qe,t as je,l as Be}from"../chunks/stores-ba889b8d.js";function Oe(){let a=[],e=[],t=1,n=1,f=5,g=.5,_=.2,m=1,p=30,y=30,w=3;function d(o,r,c){let M=r.length,$=0,i=r[o].x-c[o].x,l=c[o].y-r[o].y,h=Math.sqrt(i*i+l*l),T=!0;h>0&&($+=h*_),i/=h,l/=h,i>0&&l>0?$+=0*w:i<0&&l>0?$+=1*w:i<0&&l<0?$+=2*w:$+=3*w;let A=r[o].x,I=r[o].y-r[o].height+2,z=r[o].x+r[o].width,D=r[o].y+2,N,P,Q,u,L,H,le;for(let E=0;E<M;E++)E!=o&&(T=b(c[o].x,r[o].x,c[E].x,r[E].x,c[o].y,r[o].y,c[E].y,r[E].y),T&&($+=m),N=r[E].x,Q=r[E].y-r[E].height+2,P=r[E].x+r[E].width,u=r[E].y+2,L=Math.max(0,Math.min(P,z)-Math.max(N,A)),H=Math.max(0,Math.min(u,D)-Math.max(Q,I)),le=L*H,$+=le*p),N=c[E].x-c[E].r,Q=c[E].y-c[E].r,P=c[E].x+c[E].r,u=c[E].y+c[E].r,L=Math.max(0,Math.min(P,z)-Math.max(N,A)),H=Math.max(0,Math.min(u,D)-Math.max(Q,I)),le=L*H,$+=le*y;return $}function S(o){let r=Math.floor(Math.random()*a.length),c=a[r].x,M=a[r].y,$=d(r,a,e);a[r].x+=(Math.random()-.5)*f,a[r].y+=(Math.random()-.5)*f,a[r].x>t&&(a[r].x=c),a[r].x<0&&(a[r].x=c),a[r].y>n&&(a[r].y=M),a[r].y<0&&(a[r].y=M);let l=d(r,a,e)-$;Math.random()<Math.exp(-l/o)||(a[r].x=c,a[r].y=M)}function x(o){let r=Math.floor(Math.random()*a.length),c=a[r].x,M=a[r].y,$=d(r,a,e),i=(Math.random()-.5)*g,l=Math.sin(i),h=Math.cos(i);a[r].x-=e[r].x,a[r].y-=e[r].y;let T=a[r].x*h-a[r].y*l,A=a[r].x*l+a[r].y*h;a[r].x=T+e[r].x,a[r].y=A+e[r].y,a[r].x>t&&(a[r].x=c),a[r].x<0&&(a[r].x=c),a[r].y>n&&(a[r].y=M),a[r].y<0&&(a[r].y=M);let z=d(r,a,e)-$;Math.random()<Math.exp(-z/o)||(a[r].x=c,a[r].y=M)}function b(o,r,c,M,$,i,l,h){let T,A,I,z,D;return I=(h-l)*(r-o)-(M-c)*(i-$),z=(M-c)*($-l)-(h-l)*(o-c),D=(r-o)*($-l)-(i-$)*(o-c),T=z/I,A=D/I,!(T<0||T>1||A<0||A>1)}function k(o,r,c){return o-r/c}return{start(o){let r=a.length,c=1,M=1;for(let $=0;$<o;$++){for(let i=0;i<r;i++)Math.random()<.5?S(c):x(c);c=k(c,M,o)}return this},width(o){return arguments.length?(t=o,this):t},height(o){return arguments.length?(n=o,this):n},label(o){return arguments.length?(a=o,this):a},anchor(o){return arguments.length?(e=o,this):e}}}function he(a,e,t){const n=a.slice();return n[29]=e[t],n}function me(a,e,t){const n=a.slice();return n[29]=e[t],n}function ce(a,e){let t,n,f,g,_,m,p,y;return{key:a,first:null,c(){t=j("rect"),this.h()},l(w){t=B(w,"rect",{fill:!0,"stroke-dasharray":!0,"fill-opacity":!0,x:!0,y:!0,width:!0,height:!0,"stroke-width":!0,stroke:!0}),V(t).forEach(v),this.h()},h(){s(t,"fill",n=e[7](e[29])),s(t,"stroke-dasharray","4"),s(t,"fill-opacity","0.25"),s(t,"x",f=e[11](e[29],e[3])),s(t,"y",g=e[12](e[29],e[2])),s(t,"width",_=e[13](e[29],e[3])),s(t,"height",m=e[14](e[29],e[2])),s(t,"stroke-width","1"),s(t,"stroke","black"),this.first=t},m(w,d){C(w,t,d),p||(y=[ae(t,"mouseover",function(){ie(e[15](e[29]))&&e[15](e[29]).apply(this,arguments)}),ae(t,"focus",Je),ae(t,"mouseout",function(){ie(e[16](e[29]))&&e[16](e[29]).apply(this,arguments)}),ae(t,"blur",Ke)],p=!0)},p(w,d){e=w,d[0]&144&&n!==(n=e[7](e[29]))&&s(t,"fill",n),d[0]&24&&f!==(f=e[11](e[29],e[3]))&&s(t,"x",f),d[0]&20&&g!==(g=e[12](e[29],e[2]))&&s(t,"y",g),d[0]&24&&_!==(_=e[13](e[29],e[3]))&&s(t,"width",_),d[0]&20&&m!==(m=e[14](e[29],e[2]))&&s(t,"height",m)},d(w){w&&v(t),p=!1,Me(y)}}}function ge(a,e){let t,n=e[29].name+"",f,g,_,m,p,y,w,d,S,x,b,k;return{key:a,first:null,c(){t=j("text"),f=te(n),p=j("line"),x=j("circle"),this.h()},l(o){t=B(o,"text",{class:!0,id:!0,x:!0,y:!0});var r=V(t);f=re(r,n),r.forEach(v),p=B(o,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0}),V(p).forEach(v),x=B(o,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),V(x).forEach(v),this.h()},h(){s(t,"class","place-label"),s(t,"id",g=ne(e[29])),s(t,"x",_=e[29].x),s(t,"y",m=e[29].y),s(p,"x1",y=e[29].x),s(p,"y1",w=e[29].y),s(p,"x2",d=e[29].org_x),s(p,"y2",S=e[29].org_y),s(p,"stroke","black"),s(x,"cx",b=e[29].org_x),s(x,"cy",k=e[29].org_y),s(x,"r","2"),s(x,"fill","black"),this.first=t},m(o,r){C(o,t,r),q(t,f),C(o,p,r),C(o,x,r)},p(o,r){e=o,r[0]&64&&n!==(n=e[29].name+"")&&Ee(f,n),r[0]&64&&g!==(g=ne(e[29]))&&s(t,"id",g),r[0]&64&&_!==(_=e[29].x)&&s(t,"x",_),r[0]&64&&m!==(m=e[29].y)&&s(t,"y",m),r[0]&64&&y!==(y=e[29].x)&&s(p,"x1",y),r[0]&64&&w!==(w=e[29].y)&&s(p,"y1",w),r[0]&64&&d!==(d=e[29].org_x)&&s(p,"x2",d),r[0]&64&&S!==(S=e[29].org_y)&&s(p,"y2",S),r[0]&64&&b!==(b=e[29].org_x)&&s(x,"cx",b),r[0]&64&&k!==(k=e[29].org_y)&&s(x,"cy",k)},d(o){o&&v(t),o&&v(p),o&&v(x)}}}function Fe(a){let e,t,n,f,g,_,m,p,y,w,d=[],S=new Map,x,b=[],k=new Map,o,r=a[4].ftools;const c=i=>i[29].name;for(let i=0;i<r.length;i+=1){let l=me(a,r,i),h=c(l);S.set(h,d[i]=ce(h,l))}let M=a[6];const $=i=>i[29].name;for(let i=0;i<M.length;i+=1){let l=he(a,M,i),h=$(l);k.set(h,b[i]=ge(h,l))}return{c(){e=j("g"),t=j("g"),n=j("text"),f=te(`Temporal Span
      `),_=j("g"),m=j("text"),p=te(`Spatial Span
      `),w=j("g");for(let i=0;i<d.length;i+=1)d[i].c();x=j("g");for(let i=0;i<b.length;i+=1)b[i].c();this.h()},l(i){e=B(i,"g",{class:!0,transform:!0});var l=V(e);t=B(l,"g",{class:!0});var h=V(t);n=B(h,"text",{opacity:!0,fill:!0,y:!0,dy:!0,"font-size":!0,"text-anchor":!0,transform:!0});var T=V(n);f=re(T,`Temporal Span
      `),T.forEach(v),h.forEach(v),_=B(l,"g",{class:!0});var A=V(_);m=B(A,"text",{opacity:!0,fill:!0,y:!0,dy:!0,"font-size":!0,"text-anchor":!0,transform:!0});var I=V(m);p=re(I,`Spatial Span
      `),I.forEach(v),A.forEach(v),w=B(l,"g",{class:!0});var z=V(w);for(let N=0;N<d.length;N+=1)d[N].l(z);z.forEach(v),x=B(l,"g",{class:!0});var D=V(x);for(let N=0;N<b.length;N+=1)b[N].l(D);D.forEach(v),l.forEach(v),this.h()},h(){s(n,"opacity","1"),s(n,"fill","currentColor"),s(n,"y","9"),s(n,"dy","0.71em"),s(n,"font-size","12px"),s(n,"text-anchor","middle"),s(n,"transform",g="translate("+a[3]/2+" -50)"),s(t,"class","xaxis"),s(m,"opacity","1"),s(m,"fill","currentColor"),s(m,"y","9"),s(m,"dy","0.71em"),s(m,"font-size","12px"),s(m,"text-anchor","middle"),s(m,"transform",y="rotate(270) translate("+-a[2]/2+" "+-a[3]/15+")"),s(_,"class","yaxis"),s(w,"class","rects"),s(x,"class","labels"),s(e,"class","main"),s(e,"transform",o="translate("+a[3]/10+" "+a[2]/5+") scale(0.8 1)")},m(i,l){C(i,e,l),q(e,t),q(t,n),q(n,f),a[19](t),q(e,_),q(_,m),q(m,p),a[20](_),q(e,w);for(let h=0;h<d.length;h+=1)d[h].m(w,null);q(e,x);for(let h=0;h<b.length;h+=1)b[h].m(x,null);a[21](x)},p(i,l){l[0]&8&&g!==(g="translate("+i[3]/2+" -50)")&&s(n,"transform",g),l[0]&12&&y!==(y="rotate(270) translate("+-i[2]/2+" "+-i[3]/15+")")&&s(m,"transform",y),l[0]&129180&&(r=i[4].ftools,d=ue(d,l,c,1,i,r,S,w,fe,ce,null,me)),l[0]&64&&(M=i[6],b=ue(b,l,$,1,i,M,k,x,fe,ge,null,he)),l[0]&12&&o!==(o="translate("+i[3]/10+" "+i[2]/5+") scale(0.8 1)")&&s(e,"transform",o)},d(i){i&&v(e),a[19](null),a[20](null);for(let l=0;l<d.length;l+=1)d[l].d();for(let l=0;l<b.length;l+=1)b[l].d();a[21](null)}}}function He(a){let e,t;return e=new ve({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),{c(){R(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,f){Z(e,n,f),t=!0},p(n,f){const g={};f[0]&255|f[1]&8&&(g.$$scope={dirty:f,ctx:n}),e.$set(g)},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){F(e.$$.fragment,n),t=!1},d(n){G(e,n)}}}function ne(a){return a.name.toLowerCase().replace(/[^A-Za-z0-9]/g,"")}const Je=()=>{},Ke=()=>{};function Re(a,e,t){let n,f,g,_,m,p,y;const{data:w,width:d,height:S}=we("LayerCake");W(a,w,u=>t(4,y=u)),W(a,d,u=>t(3,p=u)),W(a,S,u=>t(2,m=u));function x(u,L){return k(u)+(o(u)-k(u))/2}function b(u,L){return r(u)+(c(u)-r(u))/2}function k(u,L){return n(u.highest_temporal_resolution?u.highest_temporal_resolution:"N/A")-_}function o(u,L){return n(u.largest_temporal_scope?u.largest_temporal_scope:"N/A")+_}function r(u,L){return f(u.highest_spatial_resolution?u.highest_spatial_resolution:"N/A")-_}function c(u,L){return f(u.largest_spatial_scope?u.largest_spatial_scope:"N/A")+_}function M(u,L){return Math.abs(k(u)-o(u))}function $(u,L){return Math.abs(r(u)-c(u))}let i=null,l=null;function h(u){return function(){U(this).attr("stroke-width",3),U("#"+ne(u)).attr("font-weight","bold")}}function T(u){return function(){U(this).attr("stroke-width",1),U("#"+ne(u)).attr("font-weight","normal")}}let A=null,I={label:()=>[]};function z(u,L,H){return I.label()}let D=[];function N(u){oe[u?"unshift":"push"](()=>{i=u,t(0,i)})}function P(u){oe[u?"unshift":"push"](()=>{l=u,t(1,l)})}function Q(u){oe[u?"unshift":"push"](()=>{A=u,t(5,A)})}return a.$$.update=()=>{a.$$.dirty[0]&8&&t(18,n=se().domain(["","instant","milliseconds","seconds","minutes","hours","days","months","years","decades","N/A"]).range([0,p])),a.$$.dirty[0]&4&&t(17,f=se().domain(["","component","device","facility","municipality","county","state","region","country","continent","global","N/A"]).range([0,m])),a.$$.dirty[0]&16&&t(7,g=$e().domain(y.tools).range(xe)),a.$$.dirty[0]&393219&&(U(i).call(ke(n)),U(l).call(be(f))),a.$$.dirty[0]&28&&(I=Oe().label(y.ftools.map(u=>{const L=x(u),H=b(u);return{name:u.name,x:L,y:H,org_x:L,org_y:H,width:18,height:7.2}})).anchor(y.ftools.map(u=>({x:x(u),y:b(u),r:10}))).width(p).height(m).start(1500)),a.$$.dirty[0]&28&&t(6,D=z(y.ftools))},_=5,[i,l,m,p,y,A,D,g,w,d,S,k,r,M,$,h,T,f,n,N,P,Q]}class Ye extends pe{constructor(e){super();ye(this,e,Re,He,de,{},null,[-1,-1])}}function Ze(a){let e,t,n;return t=new Ae({props:{data:a[0],$$slots:{default:[Pe]},$$scope:{ctx:a}}}),{c(){e=J("div"),R(t.$$.fragment),this.h()},l(f){e=K(f,"DIV",{class:!0});var g=V(e);Y(t.$$.fragment,g),g.forEach(v),this.h()},h(){s(e,"class","grid my-4 w-full h-1/2 place-items-center")},m(f,g){C(f,e,g),Z(t,e,null),n=!0},p(f,g){const _={};g&1&&(_.data=f[0]),g&64&&(_.$$scope={dirty:g,ctx:f}),t.$set(_)},i(f){n||(O(t.$$.fragment,f),n=!0)},o(f){F(t.$$.fragment,f),n=!1},d(f){f&&v(e),G(t)}}}function Ge(a){let e,t,n,f,g;return n=new Ce({props:{class:"w-4 h-4 mr-2 fill-current",data:Ie,spin:!0}}),{c(){e=J("div"),t=J("div"),R(n.$$.fragment),f=te(`
      Loading...`),this.h()},l(_){e=K(_,"DIV",{class:!0});var m=V(e);t=K(m,"DIV",{class:!0,role:!0});var p=V(t);Y(n.$$.fragment,p),f=re(p,`
      Loading...`),p.forEach(v),m.forEach(v),this.h()},h(){s(t,"class","bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full"),s(t,"role","alert"),s(e,"class","grid-flow-row mx-20 my-4")},m(_,m){C(_,e,m),q(e,t),Z(n,t,null),q(t,f),g=!0},p:Le,i(_){g||(O(n.$$.fragment,_),g=!0)},o(_){F(n.$$.fragment,_),g=!1},d(_){_&&v(e),G(n)}}}function Pe(a){let e,t;return e=new Ye({}),{c(){R(e.$$.fragment)},l(n){Y(e.$$.fragment,n)},m(n,f){Z(e,n,f),t=!0},i(n){t||(O(e.$$.fragment,n),t=!0)},o(n){F(e.$$.fragment,n),t=!1},d(n){G(e,n)}}}function Qe(a){let e,t,n,f,g,_,m,p,y,w,d,S,x,b,k,o,r,c;m=new ze({}),w=new Ne({}),x=new De({});const M=[Ge,Ze],$=[];function i(l,h){return l[1]?0:1}return k=i(a),o=$[k]=M[k](a),{c(){e=X(),t=J("div"),n=J("h1"),f=te("Spatial Temporal Visualization"),g=X(),_=J("div"),R(m.$$.fragment),p=X(),y=J("div"),R(w.$$.fragment),d=X(),S=J("div"),R(x.$$.fragment),b=X(),o.c(),r=_e(),this.h()},l(l){Se('[data-svelte="svelte-1dpoyov"]',document.head).forEach(v),e=ee(l),t=K(l,"DIV",{class:!0});var T=V(t);n=K(T,"H1",{class:!0});var A=V(n);f=re(A,"Spatial Temporal Visualization"),A.forEach(v),T.forEach(v),g=ee(l),_=K(l,"DIV",{class:!0});var I=V(_);Y(m.$$.fragment,I),I.forEach(v),p=ee(l),y=K(l,"DIV",{class:!0});var z=V(y);Y(w.$$.fragment,z),z.forEach(v),d=ee(l),S=K(l,"DIV",{class:!0});var D=V(S);Y(x.$$.fragment,D),D.forEach(v),b=ee(l),o.l(l),r=_e(),this.h()},h(){document.title="Spatial Temporal Visualization",s(n,"class","text-4xl font-medium leading-tight mt-0 mb-2"),s(t,"class","grid mx-20 mt-6"),s(_,"class","grid mx-20 my-4 place-items-center"),s(y,"class","grid mx-20 my-4 place-items-center"),s(S,"class","grid mx-20 my-4 place-items-center")},m(l,h){C(l,e,h),C(l,t,h),q(t,n),q(n,f),C(l,g,h),C(l,_,h),Z(m,_,null),C(l,p,h),C(l,y,h),Z(w,y,null),C(l,d,h),C(l,S,h),Z(x,S,null),C(l,b,h),$[k].m(l,h),C(l,r,h),c=!0},p(l,[h]){let T=k;k=i(l),k===T?$[k].p(l,h):(Ve(),F($[T],1,1,()=>{$[T]=null}),Te(),o=$[k],o?o.p(l,h):(o=$[k]=M[k](l),o.c()),O(o,1),o.m(r.parentNode,r))},i(l){c||(O(m.$$.fragment,l),O(w.$$.fragment,l),O(x.$$.fragment,l),O(o),c=!0)},o(l){F(m.$$.fragment,l),F(w.$$.fragment,l),F(x.$$.fragment,l),F(o),c=!1},d(l){l&&v(e),l&&v(t),l&&v(g),l&&v(_),G(m),l&&v(p),l&&v(y),G(w),l&&v(d),l&&v(S),G(x),l&&v(b),$[k].d(l),l&&v(r)}}}function Ue(a,e,t){let n,f,g,_;W(a,qe,y=>t(3,f=y)),W(a,je,y=>t(4,g=y)),W(a,Be,y=>t(1,_=y));const m=!0;function p(y){return{ftools:y,tools:g}}return a.$$.update=()=>{a.$$.dirty&8&&t(0,n=p(f))},[n,_,m,f]}class rt extends pe{constructor(e){super();ye(this,e,Ue,Qe,de,{prerender:2})}get prerender(){return this.$$.ctx[2]}}export{rt as default};
