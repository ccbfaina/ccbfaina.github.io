(function(){"use strict";var e={8801:function(e,t,n){n.a(e,(async function(e,o){try{var a=n(3396),i=n(4870),r=n(7342),s=n(1755),c=e([r,s]);[r,s]=c.then?(await c)():c;const l=e=>((0,a.dD)("data-v-279f5335"),e=e(),(0,a.Cn)(),e),u=l((()=>(0,a._)("div",{class:"header"},[(0,a._)("h1",null,[(0,a._)("b",null,"CONGREGAÇÃO CRISTÃ NO BRASIL")])],-1))),d={class:"container"},f={key:0,class:"warn offline print-hide"},h=l((()=>(0,a._)("b",{class:"w"},"Você está Offline!",-1))),p=[h];t.Z=(0,a.aZ)({__name:"App",setup(e){const t=(0,i.qj)({onLine:navigator.onLine});return r.l.onLine((e=>{t.onLine=e})),(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[u,(0,a._)("div",d,[((0,a.wg)(),(0,a.j4)((0,a.LL)((0,i.SU)(s.t))))]),t.onLine?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",f,p))],64))}}),o()}catch(l){o(l)}}))},8759:function(e,t,n){n.a(e,(async function(e,o){try{n(7658);var a=n(3396),i=n(9242),r=n(4870),s=n(7139),c=n(2739),l=n(8627),u=n(1755),d=n(6263),f=n(5775),h=n(7342),p=e([l,u,h]);[l,u,h]=p.then?(await p)():p;const v=e=>((0,a.dD)("data-v-7d9391c2"),e=e(),(0,a.Cn)(),e),g=v((()=>(0,a._)("div",{class:"flex"},[(0,a._)("u",{class:"flex center print-only"},"LISTA DE ATENDIMENTO E DIVERSOS")],-1))),m={id:"lista"},w={class:"print-hide menu flex space-between"},y={class:"flex right"},_=v((()=>(0,a._)("img",{class:"icon",src:"img/compartilhar.png",alt:"Compartilhar..."},null,-1))),b=[_],D=v((()=>(0,a._)("a",{href:"https://api.whatsapp.com/send/?phone=5562984972385&text=%F0%9F%93%84%20Batismo%2C%20Santa%20Ceia%2C%20...%0A%0A%F0%9F%93%8D%20Local%3A%20%0A%F0%9F%95%97%20Data%3A%20%0A%F0%9F%A4%B5%20Atender%C3%A1%3A%20&type=phone_number&app_absent=0",target:"_blank"},[(0,a._)("img",{class:"icon",src:"img/solicitar.png",alt:"Solicitar..."})],-1))),k=v((()=>(0,a._)("img",{class:"icon print-hide",src:"/img/adicionar.png",alt:"Adicionar evento"},null,-1))),S=[k],E=v((()=>(0,a._)("img",{class:"icon print-hide",src:"/img/impressora.png",alt:"Impressão"},null,-1))),C=[E],A=v((()=>(0,a._)("a",{href:"#home"},[(0,a._)("img",{class:"icon",src:"img/botao-fechar.png",alt:"Pagina principal"})],-1))),O=["summary"],Z={colspan:"5"},P=["onDblclick"],x=["href"],U={key:2,class:"print-hide",style:{width:"10px"},src:"/img/repeticao.png",alt:"Item se repete"},L=["innerHTML"],N=v((()=>(0,a._)("div",{class:"print-only right"},[(0,a._)("a",{style:{color:"black"},href:"https://faina.ccbgo.org.br"},"faina.ccbgo.org.br")],-1))),T={key:0,class:"print-only"},I=v((()=>(0,a._)("i",null,[(0,a.Uk)(" Oração Santa Ceia "),(0,a._)("br"),(0,a._)("b",null,"Pão:"),(0,a.Uk)(' "Senhor, abençoa este Pão que vamos comer, que é a comunhão do Corpo de Cristo." '),(0,a._)("br"),(0,a._)("b",null,"Cálice: "),(0,a.Uk)('"Senhor, abençoa o Cálice que vamos beber, que é a comunhão do Sangue de Cristo." ')],-1))),M=[I];t.Z=(0,a.aZ)({__name:"Lista",setup(e){const t=(0,r.qj)({showPopup:!1,search:u.F.query.get("filter")||"REGIONAL",selected:null}),n=e=>{h.l.isAdmin&&(t.selected=JSON.parse(JSON.stringify(e)),t.showPopup=!0)};function o(e){h.l.eventos.values=h.l.eventos.values.filter((t=>t.id!==e.id&&t.date!==new Date(`${e.date}`))),h.l.eventos.values.push(h.l.eventos.create(e)),h.l.saveAllEvents(),v()}function p(e){try{e.title.match(/AVISOS À IRMANDADE/gi)&&e.date?.setHours(0),e.title.match(/VIAGENS MISSIONÁRIAS/gi)&&e.date?.setHours(1),t.selected?(h.l.eventos.values=h.l.eventos.values.filter((n=>n.id!==e.id&&n.date!==new Date(`${t.selected?.date}`))),t.selected.list!==e.list||t.selected.date!==e.date?h.l.eventos.values.push(h.l.eventos.create({...e,id:"",gid:""})):h.l.eventos.values.push(h.l.eventos.create(e))):h.l.eventos.values.push(h.l.eventos.create(e)),h.l.saveAllEvents(),v()}catch(n){console.info("Erro ao salvar a data:: ",n)}}function v(){t.showPopup=!1,t.selected=null}const _=e=>{const o=["INPUT","TEXTAREA"];"a"!==e.key.toLowerCase()||t.showPopup||!document?.activeElement?.tagName||o.includes(document?.activeElement?.tagName)||n(null)};(0,a.bv)((()=>{window.addEventListener("keydown",_)})),(0,a.Ah)((()=>{window.removeEventListener("keydown",_)}));const k=()=>{window.print()};return(e,u)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[g,(0,a.Wm)(l.Z,{selected:t.selected,"show-popup":t.showPopup,onClose:v,onSave:p,onRemove:o},null,8,["selected","show-popup"]),(0,a._)("div",m,[(0,a._)("div",w,[(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=e=>t.search=e),placeholder:"Pesquisar...","x-webkit-speech":""},null,512),[[i.nr,t.search]])]),(0,a._)("div",y,[(0,r.SU)(h.l).shareable?((0,a.wg)(),(0,a.iD)("a",{key:0,onClick:u[1]||(u[1]=(0,i.iM)(((...e)=>(0,r.SU)(h.l).shared&&(0,r.SU)(h.l).shared(...e)),["prevent"]))},b)):(0,a.kq)("",!0),D,(0,r.SU)(h.l).isAdmin?((0,a.wg)(),(0,a.iD)("a",{key:1,onClick:u[2]||(u[2]=(0,i.iM)((e=>n(null)),["prevent"]))},S)):(0,a.kq)("",!0),(0,a._)("a",{onClick:u[3]||(u[3]=(0,i.iM)((e=>k()),["prevent"]))},C),A])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(d.P)((0,r.SU)(h.l).eventos.values.filter((({id:e,desc:t})=>e&&"REMOVE"!==t)).filter((({end:e})=>e&&!isNaN(e.getTime())&&e>=new Date)),"title",t.search),((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"table",key:t},[(0,a._)("table",{summary:String(t)},[(0,a._)("thead",null,[(0,a._)("th",Z,(0,s.zw)(t),1)]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t,onDblclick:t=>n(e),class:(0,s.C_)({cursor:(0,r.SU)(h.l).isAdmin})},[(0,a._)("td",{style:(0,s.j5)((0,r.SU)(f.q)(e.date)?"":"display: none;")},[(0,a._)("b",null,(0,s.zw)(c.Vq(e.date)),1)],4),(0,a._)("td",{style:(0,s.j5)((0,r.SU)(f.q)(e.date)?"":"display: none;")},(0,s.zw)(c.bV(e.date)),5),(0,a._)("td",{style:(0,s.j5)(e.date&&e.date.getHours()>5?"":"display: none;")},(0,s.zw)(c.rp(e.date)),5),(0,a._)("td",null,[e.maps?((0,a.wg)(),(0,a.iD)("a",{key:0,href:e.maps,target:"_blank",rel:"Acesse o local!"},(0,s.zw)(e.locale),9,x)):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Uk)((0,s.zw)(e.locale),1)],64)),(0,r.SU)(h.l).isAdmin&&e.recurring?((0,a.wg)(),(0,a.iD)("img",U)):(0,a.kq)("",!0)]),(0,a._)("td",{style:(0,s.j5)(e.desc?"":"display: none;"),innerHTML:e.desc.replace(/(;\n|\n)/gi,"</br>")},null,12,L)],42,P)))),128))])],8,O)])))),128)),N,t.search.match(/REGIONAL/gi)?((0,a.wg)(),(0,a.iD)("div",T,M)):(0,a.kq)("",!0)])],64))}}),o()}catch(v){o(v)}}))},795:function(e,t,n){n.a(e,(async function(e,o){try{var a=n(3396),i=n(9242),r=n(4870),s=n(7139),c=n(6005),l=n(982),u=n(3800),d=n(5775),f=n(6263),h=e([c,l,u]);[c,l,u]=h.then?(await h)():h;const p=e=>((0,a.dD)("data-v-852bd37e"),e=e(),(0,a.Cn)(),e),v={key:1,class:"popup"},g=["onSubmit"],m={class:"input-field"},w=p((()=>(0,a._)("label",{for:"list"},"Lista:",-1))),y=p((()=>(0,a._)("option",{value:"REGIONAL"},"REGIONAL",-1))),_=p((()=>(0,a._)("option",{value:"LOCAL"},"LOCAL",-1))),b=p((()=>(0,a._)("option",{value:"DARPE"},"DARPE",-1))),D=p((()=>(0,a._)("option",{value:"RPC"},"RPC",-1))),k=[y,_,b,D],S={class:"input-field"},E=p((()=>(0,a._)("label",{for:"date"},"Data:",-1))),C=["min"],A={class:"input-field"},O=p((()=>(0,a._)("label",{for:"end"},"Data de Término:",-1))),Z=["min"],P={class:"input-field"},x=p((()=>(0,a._)("label",{for:"locale"},"Titulo:",-1))),U=["onClick"],L={class:"input-field"},N=p((()=>(0,a._)("label",{for:"locale"},"Local:",-1))),T=["onClick"],I={class:"input-field"},M=p((()=>(0,a._)("label",{for:"desc"},"Descrição:",-1))),H=["onClick"],R={class:"flex space-between"},j=p((()=>(0,a._)("img",{src:"/img/salvar-enviar.png"},null,-1))),F=[j],q=["href"],Y=p((()=>(0,a._)("img",{src:"/img/agenda.png"},null,-1))),z=[Y],G=p((()=>(0,a._)("img",{src:"/img/lixeira.png"},null,-1))),$=[G];t.Z=(0,a.aZ)({__name:"SavePopup",props:{selected:{},showPopup:{type:Boolean}},emits:["save","remove","close"],setup(e,{emit:t}){const n=e,o=(0,r.qj)({form:{},showPopup:!1});function h(){const e={...o.form,desc:o.form.desc.replace(/\n/g,"<br>"),date:new Date(o.form.date),end:new Date(o.form.end),updated:new Date};t("save",e),y()}function p(){t("remove",{...n.selected,desc:"REMOVE"}),y()}function y(){o.showPopup=!1,t("close")}(0,a.m0)((()=>{const e=new Date,t=new Date;e.setHours(19,0,0,0),t.setHours(21,0,0,0);const a={id:"",list:"REGIONAL",title:"",locale:"",desc:"",gid:"",date:"",end:"",updated:new Date},{selected:i}=n;if(i){const{id:n="",list:a="REGIONAL",title:r="",locale:s="",desc:c="",gid:l="",date:u=e}=i;o.form={id:n,list:a,title:r,locale:s,desc:c,gid:l||"",date:(0,d.W)(u||e)||"",end:(0,d.W)(u||t)||"",updated:new Date}}else o.form={...a,date:(0,d.W)(e)||"",end:(0,d.W)(t)||""};o.showPopup=n.showPopup})),(0,a.YP)((()=>o.form.date),(e=>{const t=new Date(e);t.setHours(t.getHours()+2,0,0);const n=(0,d.W)(t);n&&(o.form.end=n)}));const _=e=>{"Escape"===e.key&&y()};return(0,a.bv)((()=>{window.addEventListener("keydown",_)})),(0,a.Ah)((()=>{window.removeEventListener("keydown",_)})),(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[o.showPopup?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"page",onClick:y})):(0,a.kq)("",!0),o.showPopup?((0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("form",{autocomplete:"off",onSubmit:(0,i.iM)(h,["prevent"])},[(0,a._)("div",m,[w,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.form.list=e),id:"list"},k,512),[[i.bM,o.form.list]])]),(0,a._)("div",S,[E,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.form.date=e),type:"datetime-local",id:"date",min:(new Date).toISOString().slice(0,16)},null,8,C),[[i.nr,o.form.date]])]),(0,a._)("div",A,[O,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.form.end=e),type:"datetime-local",id:"end",min:o.form.date},null,8,Z),[[i.nr,o.form.end]])]),(0,a._)("div",P,[x,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.form.title=e),type:"text",id:"title",autocomplete:"off",autofocus:"",onKeydown:t[4]||(t[4]=(0,i.D2)((0,i.iM)((e=>o.form.title=(0,r.SU)(f.N)((0,r.SU)(l.F),o.form.title)[0]),["prevent"]),["enter"])),onChange:t[5]||(t[5]=e=>o.form.title=o.form.title.toUpperCase())},null,544),[[i.nr,o.form.title]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(f.N)((0,r.SU)(l.F),o.form.title),(e=>((0,a.wg)(),(0,a.iD)("small",{class:"suggestion",key:e,onClick:t=>o.form.title=e},(0,s.zw)(e),9,U)))),128))]),(0,a._)("div",L,[N,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>o.form.locale=e),type:"text",id:"locale",autocomplete:"off",onChange:t[7]||(t[7]=e=>o.form.locale=o.form.locale.toUpperCase()),onKeydown:t[8]||(t[8]=(0,i.D2)((0,i.iM)((e=>o.form.locale=(0,r.SU)(f.N)((0,r.SU)(c.k),o.form.locale)[0]),["prevent"]),["enter"]))},null,544),[[i.nr,o.form.locale]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(f.N)((0,r.SU)(c.k),o.form.locale),(e=>((0,a.wg)(),(0,a.iD)("small",{class:"suggestion",key:e,onClick:t=>o.form.locale=e},(0,s.zw)(e),9,T)))),128))]),(0,a._)("div",I,[M,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[9]||(t[9]=e=>o.form.desc=e),id:"desc",rows:"4",onChange:t[10]||(t[10]=e=>o.form.desc=o.form.desc.toUpperCase())},null,544),[[i.nr,o.form.desc]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,r.SU)(f.N)((0,r.SU)(u.W),o.form.desc),(e=>((0,a.wg)(),(0,a.iD)("small",{class:"suggestion",key:e,onClick:t=>o.form.desc=e},(0,s.zw)(e),9,H)))),128))])],40,g),(0,a._)("div",R,[(0,a._)("a",{class:"btn",onClick:h},F),n.selected?.gid?((0,a.wg)(),(0,a.iD)("a",{key:0,href:`https://calendar.google.com/calendar/r/eventedit/${n.selected?.gid}`,target:"_blank",rel:"noopener noreferrer",class:"btn"},z,8,q)):(0,a.kq)("",!0),(0,a._)("a",{class:"btn",onClick:p},$)])])):(0,a.kq)("",!0)],64))}}),o()}catch(p){o(p)}}))},6666:function(e,t,n){n.d(t,{l:function(){return i}});var o=n(7327),a=n(536);class i{constructor(e="APP",t=[],n={server:"",sound:!1,notification:!1,token:""}){(0,o.Z)(this,"title",void 0),(0,o.Z)(this,"titles",void 0),(0,o.Z)(this,"settings",void 0),(0,o.Z)(this,"isAdmin",!!localStorage.getItem("key")),(0,o.Z)(this,"focus",!0),(0,o.Z)(this,"shareable",!!navigator.share),(0,o.Z)(this,"emit",{save:new Set,onLine:new Set,focus:new Set}),(0,o.Z)(this,"eventos",{values:[],create(e){const t={id:e.id||(0,a.Z)(),list:e.list||"",title:e.title||"",locale:e.locale||"",desc:e.desc||"",date:e.date?new Date(e.date):void 0,end:e.end?new Date(e.end):void 0,updated:e.updated?new Date(e.updated):void 0,gid:e.gid,recurring:e.recurring};return t}}),this.title=e,this.titles=t,this.settings=n,window.addEventListener("online",(()=>{this.listenerOnline(!0)})),window.addEventListener("offline",(()=>{this.listenerOnline(!1)})),window.addEventListener("focus",(()=>{this.listenerFocus(!0)})),window.addEventListener("blur",(()=>{this.listenerFocus(!1)}))}saveAllEvents(){this.sortEventos(),this.emit.save.forEach((e=>e()))}listenerOnline(e){this.emit.onLine.forEach((t=>t(e)))}listenerFocus(e){this.focus=e,this.emit.focus.forEach((t=>t(e)))}onSaveAllEvents(e){this.emit.save.add(e)}onLine(e){this.emit.onLine.add(e)}onFocus(e){this.emit.onLine.add(e)}openWindow(e){window.open(e,"CCB","width=1000,height=700,left=10,top=10")}shared(){const{hash:e,origin:t,href:n}=window.location,o=e.includes("#lista?filter=REGIONAL")?t:n;navigator.share({title:"Regional Faina",text:"Lista de atendimento e diversos ",url:o}).then((()=>console.log("Compartilhado com sucesso"))).catch((e=>console.error("Erro ao compartilhar:",e)))}sortEventos(){return this.eventos.values.length?(this.eventos.values.sort(((e,t)=>{const n=this.titles.indexOf(e.title?.toUpperCase()||""),o=this.titles.indexOf(t.title?.toUpperCase()||"");return n!==o?n-o:t.date&&e.date&&t.date.getTime()!==e.date.getTime()?e.date.getTime()-t.date.getTime():e.locale&&t.locale?e.locale.localeCompare(t.locale):0})),this.eventos.values):this.eventos.values}}},3800:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{W:function(){return a}});const e=await fetch("/data/desc",{method:"GET",headers:{"Content-Type":"application/text"}}),a=(await e.text()).split("\n").map((e=>e.trim()));o()}catch(a){o(a)}}),1)},6005:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{k:function(){return a}});const e=await fetch("/data/locales",{method:"GET",headers:{"Content-Type":"application/text"}}),a=(await e.text()).split("\n").map((e=>e.trim()));o()}catch(a){o(a)}}),1)},982:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{F:function(){return a}});const e=await fetch("/data/titles",{method:"GET",headers:{"Content-Type":"application/text"}}),a=(await e.text()).split("\n").map((e=>e.trim().toUpperCase()));o()}catch(a){o(a)}}),1)},6263:function(e,t,n){n.d(t,{N:function(){return a},P:function(){return o}});n(7658);function o(e,t,n=""){const o={},a=n.trim().toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");return e.forEach((e=>{const n=(e.date?.toLocaleDateString()+" "+e.title+" "+e.list+" "+e.locale+" "+e.desc).toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu,""),i=a.split(" ").every((e=>n.includes(e)));if(!i)return;const r=a.match(/\w+ -/i)&&!e.locale.normalize("NFD").replace(/\p{Diacritic}/gu,"").match(new RegExp(`^${a.trim()}`));if(r)return;const s=e[t];s in o||(o[s]=[]),o[s].push(e)})),o}function a(e,t,n=4){return e.filter((e=>t.toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu,"").split(" ").every((t=>e.normalize("NFD").replace(/\p{Diacritic}/gu,"").toUpperCase().includes(t))))).filter(((e,t)=>t<n))}},845:function(e,t,n){n.d(t,{P:function(){return i}});var o=n(7327);n(2801),n(1439),n(7585),n(5315);function a(e){if(!e)return"";const t=atob(e),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);const o=new TextDecoder("utf-8"),a=o.decode(n);return a}class i{constructor(e,t,n){(0,o.Z)(this,"owner",void 0),(0,o.Z)(this,"repo",void 0),(0,o.Z)(this,"token",void 0),this.owner=e,this.repo=t,this.token=n,this.owner=e,this.repo=t,this.token=n}async sendGitHubRequest(e,t="GET",n){try{const o=`https://api.github.com/repos/${this.owner}/${this.repo}${e}`,a={Accept:"application/vnd.github+json",Authorization:`Bearer ${this.token}`,"X-GitHub-Api-Version":"2022-11-28"},i={method:t,headers:a};return n&&(i.body=n),await fetch(o,i)}catch(o){throw"Erro ao buscar dados no servidor GITHUB"}}async getContentData(e){try{const t=await this.sendGitHubRequest(`/contents/${e}`);if(!t.ok)throw new Error(`Falha ao obter o conteúdo do arquivo JSON: ${t.status} ${t.statusText}`);const n=await t.json();if(!n.content)throw new Error(`Falha ao obter o conteúdo do arquivo JSON: ${t.status} ${t.statusText}`);return{content:a(n.content),sha:n.sha}}catch(t){}}async commitFile(e,t,n="Atualizando"){try{const o=await this.getContentData(e);if(o){const{content:a,sha:i}=o;if(a===t)return void console.log("O conteúdo é idêntico, nenhum commit necessário.");const r=btoa(unescape(encodeURIComponent(t))),s={message:n,content:r,sha:i},c=await this.sendGitHubRequest(`/contents/${e}`,"PUT",JSON.stringify(s));if(!c.ok)throw new Error(`Falha ao realizar o commit do arquivo JSON: ${c.status} ${c.statusText}`);return c}}catch(o){const e=`Erro ao realizar o commit: ${o} `;throw console.info(e),e}}}},5775:function(e,t,n){function o(e){try{const t=new Date(e);return t.setHours(t.getHours()-3),t.toISOString().slice(0,16)}catch(t){}}function a(e){try{return!!e?.getHours()}catch(t){}}n.d(t,{W:function(){return o},q:function(){return a}})},7342:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{l:function(){return f}});n(7658);var a=n(6666),i=n(982),r=n(845),s=n(4870),c=n(3784),l=e([i]);i=(l.then?(await l)():l)[0];const d={events:[],updated:null},f=(0,s.qj)(new a.l("APP",i.F));function h(e){Array.isArray(e)&&(f.eventos.values=[],e.map((e=>f.eventos.values.push(f.eventos.create(e)))),f.sortEventos())}const p={fetch:{method:"GET",headers:{"Content-Type":"application/json"}}};if(fetch("/data/database.json",p.fetch),f.isAdmin&&navigator.onLine){const v=localStorage.getItem("key")||"",g="https://socket.goias.ifg.edu.br",m=new c.y(g,v),w=new r.P("ccbfaina","ccbfaina.github.io",v);m.onMessage((e=>{const{updated:t,events:n}=JSON.parse(e),o=new Date(`${t}`);d.updated=o,console.log("Carregados novos dados de ",o.toLocaleString()),h(n)})),m.onConnect((()=>{console.log("Conectado no servidor socket: ",v),w.getContentData("data/database.json").then((e=>{e?.content&&m.toRoom("events",e.content)}))})),f.onSaveAllEvents((()=>{const e=f.eventos.values.reduce(((e,t)=>{const n=t?.updated?.getTime()??0;return Math.max(e,n)}),0);d.updated=new Date(e),d.events=f.eventos.values;const t=JSON.stringify(d);m.toRoom("events",t),w.commitFile("data/database.json",t).then((e=>{e&&e.ok&&console.log(`Dados atualizados (${f.eventos.values.length}) no Git com status ${e.status}`)}))}))}else{const y=async e=>{try{const t=await fetch(e);if(t.ok)return await t.json()}catch(t){console.error(`Erro ao baixar ${e}:`,t)}return null},_=async()=>{try{const e=`/data/database.json?v=${(new Date).toISOString().replace(/\D/g,"")}`,{events:t,updated:n}=await y(e)||await y("/data/database.json");t&&n?(d.events=t,d.updated=n,h(d.events)):console.error("Erro ao carregar dados de cache.")}catch(e){console.error("Erro ao carregar os dados: ",e)}};_()}o()}catch(u){o(u)}}))},2739:function(e,t,n){n.d(t,{Vq:function(){return l},bV:function(){return r},rp:function(){return u}});n(7658);var o=n(4870),a=n(3396);const i=(0,o.qj)({itens:[],lists:[],titles:[],filter:""});const r=e=>{if(!e)return"";const t=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];return t[e.getDay()]||""},s=e=>e?String(e.getDate()||"").padStart(2,"0"):"",c=e=>e?String(e.getMonth()+1||"").padStart(2,"0"):"",l=e=>e?`${s(e)}/${c(e)}`:"",u=e=>{if(!e)return"";const t=String(e.getHours()||"").padStart(2,"0"),n=String(e.getMinutes()||"").padStart(2,"0");return`${t}:${n}`};(0,a.Fl)((()=>{const e={itens:[],lists:[],titles:[],filter:i.filter.toLocaleLowerCase().trim()};return""===e.filter?(e.itens=i.itens,e.titles=i.titles,e.lists=i.lists):(e.itens=i.itens.filter((t=>Object.values(t).join(", ").toLowerCase().includes(e.filter))),e.titles.slice(0,0),e.lists.slice(0,0),e.itens.forEach((t=>(e.titles.includes(t.title)||e.titles.push(t.title),e.lists.includes(t.list)||e.lists.push(t.list),t)))),e}));try{i.itens=JSON.parse(localStorage.getItem("itens")||"[]")}catch(d){console.info(d)}},1755:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{F:function(){return p},t:function(){return g}});n(2062);var a=n(4870),i=n(3396),r=n(7786),s=n(5046),c=n(1364),l=n(3686),u=n(3838),d=n(6437),f=n(9897),h=e([l]);l=(h.then?(await h)():h)[0];const p=(0,a.qj)({routes:(0,a.Xl)({"/":l.Z,lista:l.Z,home:c.Z,agenda:r.Z,darpe:s.Z,calendar:f.Z,config:u.Z,found:d.Z}),hash:"",query:new URLSearchParams}),v=()=>{p.hash=window.location.hash,p.query=new URLSearchParams(window.location.hash.replace(/.*\?/,""))};window.addEventListener("hashchange",(()=>{v()})),v();const g=(0,i.Fl)((()=>{const e=p.hash.replace(/\?.*/,"").slice(1)||"/";return p.routes[e]||d.Z}));o()}catch(p){o(p)}}))},3784:function(e,t,n){n.d(t,{y:function(){return i}});var o=n(7327),a=n(7851);class i{constructor(e,t){(0,o.Z)(this,"server",void 0),(0,o.Z)(this,"token",void 0),(0,o.Z)(this,"socket",void 0),this.server=e,this.token=t,this.socket=(0,a.io)(e,{auth:{token:t}})}onConnect(e){this.socket.on("connect",(()=>{e()}))}toRoom(e,t){this.socket.emit("room",{room:e,msg:t})}onMessage(e){this.socket.on("message",(t=>{e(t.msg)}))}}},4851:function(e,t,n){n.a(e,(async function(e,t){try{var o=n(9242),a=n(399),i=(n(7702),e([a]));a=(i.then?(await i)():i)[0];const r=(0,o.ri)(a.Z);r.mount("#app"),t()}catch(r){t(r)}}))},7702:function(e,t,n){var o=n(5431);(0,o.z)("/service-worker.js",{ready(){console.log("Aplicativo carregado.")},registered(){},cached(){},updatefound(){console.log("Novo conteúdo está sendo baixado.")},updated(){console.log("Novo conteúdo, por favor atualize a pagina!")},offline(){console.log("O aplicativo está sendo executado no modo offline.")},error(e){console.error("Erro durante o registro do service worker:",e)}})},399:function(e,t,n){n.a(e,(async function(e,o){try{var a=n(3187),i=(n(8195),n(89)),r=e([a]);a=(r.then?(await r)():r)[0];const s=(0,i.Z)(a.Z,[["__scopeId","data-v-279f5335"]]);t.Z=s,o()}catch(s){o(s)}}))},7786:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(3396);const a=(0,o._)("div",{class:"flex right"},[(0,o._)("a",{href:"#home"},[(0,o._)("img",{class:"icon",src:"img/botao-fechar.png",alt:"Pagina principal"})])],-1),i=(0,o._)("div",null,[(0,o._)("iframe",{src:"https://calendar.google.com/calendar/embed?height=1024&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&mode=MONTH&hl=pt_BR&showTz=0&showDate=1&showNav=1&src=Y18zOWVmYjA3MmZhZDYyYmNlMDFlYmE2YWQyMjY0OTQ5YjA3NGJiOGMxODA4MzU3NmJmNTdkZTg2YzgzOWYwNzc0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23575757",style:{"border-width":"0"},width:"100%",height:"1024",frameborder:"0",scrolling:"no"})],-1);function r(e,t){return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,i],64)}var s=n(89);const c={},l=(0,s.Z)(c,[["render",r]]);var u=l},9897:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(3396),a=n(7139);function i(e,t,n,i,r,s){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("button",{onClick:t[0]||(t[0]=(...t)=>e.prevMonth&&e.prevMonth(...t))},"Anterior"),(0,o.Uk)(" | "),(0,o._)("span",null,(0,a.zw)(e.currentMonth),1),(0,o.Uk)(" | "),(0,o._)("button",{onClick:t[1]||(t[1]=(...t)=>e.nextMonth&&e.nextMonth(...t))},"Próximo"),(0,o.Uk)(" | "),(0,o._)("button",{onClick:t[2]||(t[2]=(...t)=>e.goToToday&&e.goToToday(...t))},"Hoje"),(0,o._)("table",null,[(0,o._)("thead",null,[(0,o._)("tr",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.daysOfWeek,(e=>((0,o.wg)(),(0,o.iD)("th",{key:e},(0,a.zw)(e),1)))),128))])]),(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.calendar,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,(e=>((0,o.wg)(),(0,o.iD)("td",{key:e.date,class:(0,a.C_)({"other-month":e.isOtherMonth,"current-day":e.isCurrentDay})},(0,a.zw)(e.date),3)))),128))])))),128))])])])}n(7658);var r=(0,o.aZ)({data(){return{currentDate:new Date}},computed:{daysOfWeek(){return["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"]},currentMonth(){return""},calendar(){const e=this.currentDate.getFullYear(),t=this.currentDate.getMonth(),n=new Date(e,t,1),o=new Date(e,t+1,0),a=n.getDay(),i=[];let r=[];for(let s=0;s<a;s++)r.push({date:"",isOtherMonth:!0});for(let s=1;s<=o.getDate();s++)r.push({date:s,isOtherMonth:!1}),7===r.length&&(i.push(r),r=[]);while(r.length<7)r.push({date:"",isOtherMonth:!0,isCurrentDay:!1});return i.push(r),i}},methods:{goToToday(){this.currentDate=new Date},prevMonth(){this.currentDate=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()-1,1)},nextMonth(){this.currentDate=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,1)}}}),s=n(89);const c=(0,s.Z)(r,[["render",i],["__scopeId","data-v-04357ab2"]]);var l=c},3838:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(3396),a=n(9242),i=n(4870);const r=(0,o._)("div",{class:"flex right"},[(0,o._)("a",{href:"#home"},[(0,o._)("img",{class:"icon",src:"img/botao-fechar.png",alt:"Pagina principal"})])],-1),s={class:"input-field"},c=(0,o._)("label",{for:"key"},"Chave de API",-1);var l=(0,o.aZ)({__name:"Config",setup(e){const t=(0,i.iH)(localStorage.getItem("key")||"");(0,o.YP)(t,(e=>{try{localStorage.setItem("key",e)}catch(t){console.error("Erro ao salvar a chave de API:",t)}}));const n=(0,i.iH)(localStorage.getItem("server")||"SOCKET");(0,o.YP)(n,(e=>{try{localStorage.setItem("server",e)}catch(t){console.error("Erro ao salvar a servidor!!!:",t)}}));const l=(0,i.iH)(localStorage.getItem("ip_socket")||"");return(0,o.YP)(l,(e=>{try{localStorage.setItem("ip_socket",e)}catch(t){console.error("Erro ao salvar a servidor!!!:",t)}})),(e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[r,(0,o._)("form",null,[(0,o._)("div",s,[c,(0,o.wy)((0,o._)("input",{id:"key",type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),required:""},null,512),[[a.nr,t.value]])])])],64))}});const u=l;var d=u},5046:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(3396);const a=(0,o.uE)('<div class="flex right" data-v-4390ccd2><a href="#home" data-v-4390ccd2><img class="icon" src="img/botao-fechar.png" alt="Pagina principal" data-v-4390ccd2></a></div><div style="text-align:center;" class="darpe" data-v-4390ccd2><p data-v-4390ccd2><b data-v-4390ccd2>DEPARTAMENTO DE ASSISTÊNCIA RELIGIOSA PARA EVANGELIZAÇÃO (DARPE)</b></p><p data-v-4390ccd2><br data-v-4390ccd2> O DARPE tem por finalidade propagar o Evangelho de Nosso Senhor Jesus Cristo, o amor de Deus, tendo por cabeça só a Jesus Cristo e por guia o Espírito Santo da Graça. (João 16:13) </p><p data-v-4390ccd2><a href="#lista?filter=DARPE" data-v-4390ccd2> Acesse a lista de atendimento do DARPE </a></p></div>',2);function i(e,t){return a}var r=n(89);const s={},c=(0,r.Z)(s,[["render",i],["__scopeId","data-v-4390ccd2"]]);var l=c},1364:function(e,t,n){n.d(t,{Z:function(){return v}});var o=n(3396),a=n(7139),i=n(4870);const r=e=>((0,o.dD)("data-v-7f6cae34"),e=e(),(0,o.Cn)(),e),s=r((()=>(0,o._)("div",{class:"flex"},[(0,o._)("input",{type:"text",name:"search",id:"search"})],-1))),c={class:"flex icons"},l=["href","target"],u=["src","alt"],d=r((()=>(0,o._)("a",{class:"config",href:"#config"},[(0,o._)("img",{src:"/img/configuracao.png",alt:""})],-1)));var f=(0,o.aZ)({__name:"Home",setup(e){const t=(0,i.iH)([]);return(0,o.bv)((async()=>{try{const e=await fetch("data/menu.json"),n=await e.json();t.value=n.values}catch(e){console.error("Erro ao carregar os dados:",e)}})),(e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o._)("div",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.value,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.title,href:e.href,target:e.href.startsWith("http")?"_blank":""},[(0,o._)("img",{src:e.icon,alt:e.title},null,8,u),(0,o.Uk)(" "+(0,a.zw)(e.title),1)],8,l)))),128))]),d],64))}}),h=n(89);const p=(0,h.Z)(f,[["__scopeId","data-v-7f6cae34"]]);var v=p},3686:function(e,t,n){n.a(e,(async function(e,o){try{var a=n(922),i=(n(409),n(89)),r=e([a]);a=(r.then?(await r)():r)[0];const s=(0,i.Z)(a.Z,[["__scopeId","data-v-7d9391c2"]]);t.Z=s,o()}catch(s){o(s)}}))},6437:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(3396);function a(e,t){return(0,o.wg)(),(0,o.iD)("div",null,"Pagina não encontrada!")}var i=n(89);const r={},s=(0,i.Z)(r,[["render",a]]);var c=s},8627:function(e,t,n){n.a(e,(async function(e,o){try{var a=n(6711),i=(n(3170),n(89)),r=e([a]);a=(r.then?(await r)():r)[0];const s=(0,i.Z)(a.Z,[["__scopeId","data-v-852bd37e"]]);t.Z=s,o()}catch(s){o(s)}}))},8195:function(){},409:function(){},3170:function(){},3187:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{Z:function(){return a.Z}});var a=n(8801),i=e([a]);a=(i.then?(await i)():i)[0],o()}catch(r){o(r)}}))},922:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{Z:function(){return a.Z}});var a=n(8759),i=e([a]);a=(i.then?(await i)():i)[0],o()}catch(r){o(r)}}))},6711:function(e,t,n){n.a(e,(async function(e,o){try{n.d(t,{Z:function(){return a.Z}});var a=n(795),i=e([a]);a=(i.then?(await i)():i)[0],o()}catch(r){o(r)}}))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e="function"===typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"===typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"===typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=function(e){e&&!e.d&&(e.d=1,e.forEach((function(e){e.r--})),e.forEach((function(e){e.r--?e.r++:e()})))},i=function(n){return n.map((function(n){if(null!==n&&"object"===typeof n){if(n[e])return n;if(n.then){var i=[];i.d=0,n.then((function(e){r[t]=e,a(i)}),(function(e){r[o]=e,a(i)}));var r={};return r[e]=function(e){e(i)},r}}var s={};return s[e]=function(){},s[t]=n,s}))};n.a=function(n,r,s){var c;s&&((c=[]).d=1);var l,u,d,f=new Set,h=n.exports,p=new Promise((function(e,t){d=t,u=e}));p[t]=h,p[e]=function(e){c&&e(c),f.forEach(e),p["catch"]((function(){}))},n.exports=p,r((function(n){var a;l=i(n);var r=function(){return l.map((function(e){if(e[o])throw e[o];return e[t]}))},s=new Promise((function(t){a=function(){t(r)},a.r=0;var n=function(e){e!==c&&!f.has(e)&&(f.add(e),e&&!e.d&&(a.r++,e.push(a)))};l.map((function(t){t[e](n)}))}));return a.r?s:r()}),(function(e){e?d(p[o]=e):u(h),a(c)})),c&&(c.d=0)}}(),function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(o);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkccb_regional_faina"]=self["webpackChunkccb_regional_faina"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4851)}));o=n.O(o)})();
//# sourceMappingURL=main.9f164f89.js.map