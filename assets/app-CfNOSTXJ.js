import{a as p}from"./index-t--hEgTQ.js";import{x as m}from"./index-DX9uuL8x.js";const f=async(t,a)=>{"caches"in window?await(await caches.open("eventDataCache")).put(t,new Response(JSON.stringify(a))):console.warn("A API de Cache não está disponível neste ambiente.")},D=async t=>{const a=await caches.match(t);if(a)return await a.json()};function l(t,a){for(const e in a)typeof a[e]=="object"&&a[e]!==null&&!Array.isArray(a[e])?t[e]=l(t[e]||{},a[e]):t[e]=a[e];return t}async function h(t){try{t&&f("/data/data.json",t)}catch(a){console.log("Erro ao salvar local: ",a)}}async function v(t){try{const e=await D("/data/data.json");console.log("Carregando dados da cache do PWA..."),e&&(l(t,e),t.agenda.items=e.agenda.items.map(o=>(o.date=new Date(o.date),o.end=new Date(o.end),o.updated=o.updated?new Date(o.updated):new Date,o)))}catch(a){console.info("Erro ao carregar cache!!!",a)}}const y={},r=p.create(y);function w({baseURL:t,token:a}){r.defaults.baseURL=t,r.defaults.headers.Authorization=`${a}`}class u{constructor({href:a="",icon:e="",title:o="",description:s="",group:i="",autoSave:c=!1,fixed:n=!1}={}){this.href=a,this.icon=e,this.title=o,this.description=s,this.group=i,this.autoSave=c,this.fixed=n,this.validate()}validate(){if(!this.title)throw new Error("Título da tag não pode estar vazio.")}toggleAutoSave(a){if(typeof a!="boolean")throw new Error("Valor de autoSave deve ser um booleano.");this.autoSave=a}toggleFixed(a){if(typeof a!="boolean")throw new Error("Valor de fixed deve ser um booleano.");this.fixed=a}getTagInfo(){return{href:this.href,icon:this.icon,title:this.title,description:this.description,group:this.group,autoSave:this.autoSave,fixed:this.fixed}}static create(a={}){return new u(a)}}const k=async(t,a,e=!0,o=!0)=>{a.href&&a.title&&!t.agenda.tags.some(s=>s.href===a.href||s.title===a.title)&&(o?t.agenda.tags.push(a):t.agenda.tags.unshift(a),e&&await h(t))},S=async t=>{const a="/data/tags.json",e=new Date().toISOString().replace(/\D/g,"");let o;try{o=await r.get(`${a}?v=${e}`)}catch{o=await r.get(a)}const{tags:s}=o.data||{};t.agenda.tags=s.map(i=>u.create(i)),await h(t)},A=async t=>{try{t.agenda.token?(w({baseURL:t.agenda.server,token:t.agenda.token}),t.agenda.items=[],await E(t),t.state.admin=!0):(await g(t),t.state.admin=!1)}catch(a){console.info("Erro ao conectar no servidor: ",a.message),t.state.admin=!1,await g(t)}try{await S(t)}catch(a){console.log("Erro ao atualizar tags: ",a)}},g=async t=>{w({baseURL:"",token:""});const a="/data/data.json";try{const e=`${a}?v=${new Date().toISOString().replace(/\D/g,"")}`,{status:o,statusText:s,data:i}=await r.get(e);if(o===200){const c=i.eventos.items.map(n=>(n.date=new Date(n.date),n.end=new Date(n.end),n.updated=n.updated?new Date(n.updated):new Date,n));t.agenda.items=c,f(a,t)}else console.error("Erro ao carregar dados do servidor:",s)}catch(e){console.error("Erro ao carregar os dados:",e)}};async function E(t){const a=new Date().toISOString().replace(/\D/g,""),e=await r.post(`/api/agenda/app?v=${a}`),{data:o}=e;if(!o.success||o?.data.items?.length===0)throw new Error("Erro ao carregar eventos");o.data.items=o.data.items.map(s=>(s.date=new Date(s.date),s.end=new Date(s.end),s.updated=s.updated?new Date(s.updated):new Date,s)),l(t.agenda,o.data)}const x=t=>{if(t.agenda.autoDate){const a=new Date;t.agenda.from=a.toISOString().split("T")[0];const e=new Date(a);e.setDate(a.getDate()+70),t.agenda.to=e.toISOString().split("T")[0]}},b={id:"app",agenda:{token:"",server:"",from:"",to:"",autoDate:!0,tags:[],tagsSuggestions:[],items:[],calendars:[],titles:[],locales:[],desc:[]},state:{url:window.location.host,shared:navigator.share,connected:!0,admin:!1,loading:!1,selected:null}},d=m(b);async function I(){try{await v(d)}catch(t){console.error("Erro ao iniciar cache da aplicação: ",t)}try{await x(d)}catch(t){console.error("Erro ao atualizar datas da aplicação",t)}try{await A(d)}catch{console.error("Erro ao atualizar aplicação")}}I();export{u as T,d as a,k as b,r as c,h as s,x as u};
