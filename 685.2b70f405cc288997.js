"use strict";(self.webpackChunkadv=self.webpackChunkadv||[]).push([[685],{4685:(O,u,a)=>{a.r(u),a.d(u,{TributarioModule:()=>Z});var l=a(9808),c=a(2382),b=a(3420),d=a(520),g=a(459),h=a(7579),p=a(5243),m=a(9300),C=a(1884),e=a(1223),T=a(9019);let v=(()=>{class o{constructor(t){this.http=t,this.urlTributarioCodigo=T.N.apiLink+"tributarioCodigo"}getCodigoTributario(){return this.http.get(this.urlTributarioCodigo)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(d.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function P(o,s){1&o&&(e.TgZ(0,"div",22)(1,"div",23)(2,"span",24),e._uU(3,"Loading..."),e.qZA()()())}function _(o,s){if(1&o&&(e.TgZ(0,"div"),e._UZ(1,"p",25),e.qZA()),2&o){const t=s.$implicit,i=s.index,r=e.oxw();e.uIk("id","paragrafo-"+i),e.xp6(1),e.Q6J("innerHTML",r.highlightWord(t,r.termoPesquisa),e.oJD)}}const q=function(o){return{visible:o}};let f=(()=>{class o{constructor(t,i){this.apiService=t,this.elementRef=i,this.paragrafos=[],this.termoPesquisa="",this.ocorrencias=[],this.ocorrenciaAtual=-1,this.isSearchVisible=!1,this.loading=!1,this.termoPesquisaSubject=new h.x,this.termoPesquisaDebounced=new h.x}onTermoPesquisaChange(t){this.termoPesquisaSubject.next(t)}ngOnInit(){this.loading=!0,this.apiService.getCodigoTributario().subscribe(t=>{if(console.log("Dados recebidos da API:",t),void 0!==t&&"object"==typeof t)if(t.hasOwnProperty("text")&&"string"==typeof t.text){let i=t.text.split(/(?=Art)/);i.length>0&&(i[0]=i[0].substring(3));let r=i.map(n=>((!(n=n.replace(/\([^)]+\)/g,"")).includes("(")||!n.includes(")"))&&(n=n.replace(/\\n/g,"")),(n=(n=n.replace(/ +/g," ")).replace(/\\+/g," ")).startsWith("Art")?"Artigo "+this.formatarParagrafo(n.replace(/^Art\s*/,"")).replace(".","").replace("<br>",""):this.formatarParagrafo(n)));r=r.map(n=>n.trim()).filter(n=>""!==n),this.paragrafos=r,this.atualizarOcorrencias(),this.loading=!1}else console.error('Dados inv\xe1lidos recebidos da API: Propriedade "text" n\xe3o encontrada ou n\xe3o \xe9 uma string');else console.error("Dados inv\xe1lidos recebidos da API: Resposta n\xe3o \xe9 um objeto v\xe1lido")}),this.termoPesquisaDebounced.pipe((0,p.b)(300)).subscribe(t=>{this.termoPesquisa=t,this.atualizarOcorrencias()}),this.termoPesquisaSubject.pipe((0,p.b)(300),(0,m.h)(t=>""!==t.trim()),(0,m.h)(t=>t.length>5),(0,C.x)()).subscribe(t=>{this.termoPesquisaDebounced.next(t)})}toggleSearch(){this.isSearchVisible=!this.isSearchVisible;const t=document.querySelector(".search-container");t&&(this.isSearchVisible?(t.classList.remove("hidden"),t.classList.add("slide-in-right")):(t.classList.remove("slide-in-right"),t.classList.add("slide-out-left"),setTimeout(()=>{t.classList.add("hidden")},500)))}scrollToParagrafo(t){const i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}pesquisarProximaOcorrencia(){0!==this.ocorrencias.length&&(this.ocorrenciaAtual=(this.ocorrenciaAtual+1)%this.ocorrencias.length,this.scrollToParagrafo("paragrafo-"+this.ocorrencias[this.ocorrenciaAtual]))}pesquisarOcorrenciaAnterior(){0!==this.ocorrencias.length&&(this.ocorrenciaAtual=(this.ocorrenciaAtual-1+this.ocorrencias.length)%this.ocorrencias.length,this.scrollToParagrafo("paragrafo-"+this.ocorrencias[this.ocorrenciaAtual]))}atualizarOcorrencias(){this.ocorrencias=[];const t=this.termoPesquisa.trim().toLowerCase();if(""!==t)for(let i=0;i<this.paragrafos.length;i++)this.paragrafos[i].toLowerCase().includes(t)&&this.ocorrencias.push(i)}highlightWord(t,i){if(!i||""===i.trim()||i.length<=5)return t;const r=new RegExp("("+i+")","gi");return t.replace(r,'<span class="highlight">$1</span>')}pesquisar(){""!==this.termoPesquisa.trim().toLowerCase()&&(this.atualizarOcorrencias(),0===this.ocorrencias.length?alert("Palavra-chave n\xe3o encontrada nos par\xe1grafos."):(this.ocorrenciaAtual=0,this.scrollToParagrafo("paragrafo-"+this.ocorrencias[this.ocorrenciaAtual])))}formatarParagrafo(t){return t.split(/([.;:])/).map(i=>i.trim()+(i.trim()&&/[.;:]$/.test(i.trim())?"<br>":"")).join("")}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v),e.Y36(e.SBq))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-codigo-tributario"]],decls:34,vars:7,consts:[["class","spinner-container",4,"ngIf"],[1,"container","containerFind","mt-3"],[1,"row",2,"position","relative"],[1,"col-sm-12","search-container-parent"],[1,"search-container-body"],[1,"btn","toggle-search-button",3,"click"],[1,"fas","fa-search"],[1,"search-container",3,"ngClass"],["type","text","placeholder","Pesquisar",1,"form-control","search-input",3,"ngModel","ngModelChange","keyup.enter"],[1,"btn","search-button",3,"click"],[1,"fas","fa-chevron-up"],[1,"fas","fa-chevron-down"],[1,"container","mt-3"],[1,"row"],[1,"col","search-container",2,"display","flex"],["type","text","placeholder","Digite sua pesquisa aqui",1,"form-control","search-input",3,"ngModel","ngModelChange","keyup.enter"],[1,"component","componentSection"],[1,"container"],[1,"col-sm-12","text-center"],[1,"row","mt-4"],[1,"col-sm-12"],[4,"ngFor","ngForOf"],[1,"spinner-container"],["role","status",1,"spinner-border","text-light"],[1,"visually-hidden"],[3,"innerHTML"]],template:function(t,i){1&t&&(e.YNc(0,P,4,0,"div",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"button",5),e.NdJ("click",function(){return i.toggleSearch()}),e._UZ(6,"i",6),e.qZA(),e.TgZ(7,"div",7)(8,"input",8),e.NdJ("ngModelChange",function(n){return i.termoPesquisa=n})("keyup.enter",function(){return i.pesquisar()})("ngModelChange",function(n){return i.onTermoPesquisaChange(n)}),e.qZA(),e.TgZ(9,"button",9),e.NdJ("click",function(){return i.pesquisar()}),e._UZ(10,"i",6),e.qZA(),e.TgZ(11,"button",9),e.NdJ("click",function(){return i.pesquisarProximaOcorrencia()}),e._UZ(12,"i",10),e.qZA(),e.TgZ(13,"button",9),e.NdJ("click",function(){return i.pesquisarOcorrenciaAnterior()}),e._UZ(14,"i",11),e.qZA()()()()()(),e.TgZ(15,"div",12)(16,"div",13)(17,"div",14)(18,"input",15),e.NdJ("ngModelChange",function(n){return i.termoPesquisa=n})("keyup.enter",function(){return i.pesquisar()}),e.qZA(),e.TgZ(19,"button",9),e.NdJ("click",function(){return i.pesquisar()}),e._uU(20,"Pesquisar"),e.qZA(),e.TgZ(21,"button",9),e.NdJ("click",function(){return i.pesquisarProximaOcorrencia()}),e._UZ(22,"i",10),e.qZA(),e.TgZ(23,"button",9),e.NdJ("click",function(){return i.pesquisarOcorrenciaAnterior()}),e._UZ(24,"i",11),e.qZA()()()(),e.TgZ(25,"section",16)(26,"div",17)(27,"div",13)(28,"div",18)(29,"h1"),e._uU(30,"C\xf3digo Tribut\xe1rio"),e.qZA()()(),e.TgZ(31,"div",19)(32,"div",20),e.YNc(33,_,2,2,"div",21),e.qZA()()()()),2&t&&(e.Q6J("ngIf",i.loading),e.xp6(7),e.Q6J("ngClass",e.VKq(5,q,i.isSearchVisible)),e.xp6(1),e.Q6J("ngModel",i.termoPesquisa),e.xp6(10),e.Q6J("ngModel",i.termoPesquisa),e.xp6(15),e.Q6J("ngForOf",i.paragrafos))},directives:[l.O5,l.mk,c.Fj,c.JJ,c.On,l.sg],styles:['@charset "UTF-8";.search-container-parent[_ngcontent-%COMP%]{position:fixed;margin-top:80px}.search-container-parent[_ngcontent-%COMP%]   .search-container-body[_ngcontent-%COMP%]{display:flex}.search-container-parent[_ngcontent-%COMP%]   .toggle-search-button[_ngcontent-%COMP%]{background-color:#00aeef;color:#fff;border-radius:30px;height:42px}.containerFind[_ngcontent-%COMP%]{position:fixed}.componentSection[_ngcontent-%COMP%]{padding-top:150px}.search-container[_ngcontent-%COMP%]{display:none;align-items:center;animation-duration:.5s;animation-timing-function:ease;animation-fill-mode:forwards;width:-webkit-fill-available}.search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-left:3px}.search-button[_ngcontent-%COMP%]{padding:4px}.visible[_ngcontent-%COMP%]{display:flex;animation-name:slideInRight}.form-control[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .1rem #0d6efd40}@keyframes slideInRight{0%{transform:translate(100%)}to{transform:translate(0)}}']}),o})();const A=[{path:"",children:[{path:"",component:f},{path:"tributario",component:f}]}];let M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(A)],g.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,c.u5,b.m,d.JF,c.UX,M]]}),o})()}}]);