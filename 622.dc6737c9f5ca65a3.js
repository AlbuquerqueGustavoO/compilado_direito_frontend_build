"use strict";(self.webpackChunkadv=self.webpackChunkadv||[]).push([[622],{9622:(M,l,r)=>{r.r(l),r.d(l,{AdminModule:()=>C});var p=r(9808),a=r(2382),u=r(3420),c=r(520),g=r(459),o=r(1223);let d=(()=>{class n{constructor(t){this.http=t}ngOnInit(){}sendEmail(){this.http.post("http://localhost:3001/contato/send-email",{name:this.name,email:this.email,message:this.message}).subscribe(e=>{console.log("Email enviado com sucesso!",e),this.reset(),alert("Enviado com sucesso!")},e=>{console.error("Erro ao enviar email:",e),alert("Erro, tente novamente!")})}reset(){this.name="",this.email="",this.message=""}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(c.eN))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-contato"]],decls:21,vars:3,consts:[[1,"section-form"],[1,"form-contato-body"],[1,"form-group","form-contato",3,"ngSubmit"],[1,"form-contato-titulo"],[1,"mb-3"],["for","nome",1,"form-label"],["type","text","placeholder","Digite o seu nome","id","nome","name","name","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","email",1,"form-label"],["type","email","placeholder","Digite o seu email","id","email","name","email","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","mensagem",1,"form-label"],["placeholder","Digite a sua mensagem","rows","4","cols","50","id","mensagem","name","message","required","",1,"form-control",3,"ngModel","ngModelChange"],[1,"row"],[1,"col-sm-12"],["type","submit",1,"btn","u-btn-1"]],template:function(t,e){1&t&&(o.TgZ(0,"section",0)(1,"div",1)(2,"form",2),o.NdJ("ngSubmit",function(){return e.sendEmail()}),o.TgZ(3,"h4",3),o._uU(4,"Contate-nos"),o.qZA(),o.TgZ(5,"div",4)(6,"label",5),o._uU(7,"Nome"),o.qZA(),o.TgZ(8,"input",6),o.NdJ("ngModelChange",function(i){return e.name=i}),o.qZA()(),o.TgZ(9,"div",4)(10,"label",7),o._uU(11,"Email"),o.qZA(),o.TgZ(12,"input",8),o.NdJ("ngModelChange",function(i){return e.email=i}),o.qZA()(),o.TgZ(13,"div",4)(14,"label",9),o._uU(15,"Mensagem"),o.qZA(),o.TgZ(16,"textarea",10),o.NdJ("ngModelChange",function(i){return e.message=i}),o.qZA()(),o.TgZ(17,"div",11)(18,"div",12)(19,"button",13),o._uU(20,"Enviar"),o.qZA()()()()()()),2&t&&(o.xp6(8),o.Q6J("ngModel",e.name),o.xp6(4),o.Q6J("ngModel",e.email),o.xp6(4),o.Q6J("ngModel",e.message))},directives:[a._Y,a.JL,a.F,a.Fj,a.Q7,a.JJ,a.On],styles:['.section-form[_ngcontent-%COMP%]{position:relative;background-image:url(/assets/imagens/contato/back_1.png);background-repeat:no-repeat;background-size:100% 100%;min-height:843px;height:562px;width:100%;border-color:transparent;margin-left:0;margin-top:90px;border-style:dashed;letter-spacing:0px;font-size:1.03rem;font-weight:400;text-transform:none}.section-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after, .section-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{content:"";display:table}.section-form[_ngcontent-%COMP%]   .form-contato-body[_ngcontent-%COMP%]{height:562px;width:533px;background-image:url(/assets/imagens/contato/back_1.png);background-repeat:no-repeat;box-shadow:5px 5px 20px #0006;border-radius:20px;margin:65px auto 60px}@media (max-width: 575px){.section-form[_ngcontent-%COMP%]   .form-contato-body[_ngcontent-%COMP%]{width:340px}}.section-form[_ngcontent-%COMP%]   .form-contato-body[_ngcontent-%COMP%]   .form-contato[_ngcontent-%COMP%]{padding:23px}.section-form[_ngcontent-%COMP%]   .form-contato-body[_ngcontent-%COMP%]   .form-contato[_ngcontent-%COMP%]   .form-contato-titulo[_ngcontent-%COMP%]{color:#00aeef;margin-bottom:30px;margin-left:0;text-align:center}.form-control[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .1rem #0d6efd40!important}.u-btn-1[_ngcontent-%COMP%]{color:#fff;background-color:#00aeef;border-style:solid;letter-spacing:0px;width:100%;font-size:1.25rem;font-weight:400;text-transform:none}']}),n})();const f=[{path:"",children:[{path:"",component:d},{path:"contato",component:d}]}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[g.Bz.forChild(f)],g.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[p.ez,a.u5,u.m,c.JF,a.UX,h]]}),n})()}}]);