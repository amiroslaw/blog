"use strict";(self.webpackChunkmiroslaw=self.webpackChunkmiroslaw||[]).push([[592],{5067:(v,_,a)=>{a.d(_,{O:()=>h});var g=a(7969),t=a(7716),u=a(2300),m=a(3794),i=a(4579),o=a(8583),T=a(1530);function e(s,l){1&s&&t._UZ(0,"option",9),2&s&&t.s9C("value",l.$implicit)}function d(s,l){1&s&&t._UZ(0,"app-post-card",10),2&s&&t.Q6J("article",l.$implicit)}let h=(()=>{class s{constructor(n,r){this.scullyContentService=n,this.seoService=r,this.tags=new Set,this.scullyContentService.getBlogPosts().pipe((0,g.U)(c=>c.map(p=>p.tags).reduce((p,y)=>p.concat(y)))).subscribe(c=>c.forEach(p=>this.tags.add(p)))}ngOnInit(){this.posts$=this.scullyContentService.getBlogPosts(),this.seoService.generateMetaTags()}onSearch(){this.posts$=this.scullyContentService.getBlogPosts(this.search)}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(u.O),t.Y36(m.v))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-home"]],decls:11,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-md-10","col-lg-8","mx-auto"],[1,"mb-3",3,"submit"],["id","searchPostInput","list","datalistOptions","type","search","aria-required","false",1,"form-control",3,"ngModel","ngModelChange"],["id","datalistOptions"],[3,"value",4,"ngFor","ngForOf"],[3,"article",4,"ngFor","ngForOf"],[1,"clearfix"],[3,"value"],[3,"article"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"form",3),t.NdJ("submit",function(){return r.onSearch()}),t.TgZ(4,"input",4),t.NdJ("ngModelChange",function(p){return r.search=p}),t.qZA(),t.TgZ(5,"datalist",5),t.YNc(6,e,1,1,"option",6),t.qZA(),t.qZA(),t.TgZ(7,"section"),t.YNc(8,d,1,1,"app-post-card",7),t.ALo(9,"async"),t._UZ(10,"div",8),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("ngModel",r.search),t.uIk("placeholder","Search in tags and descriptions"),t.xp6(2),t.Q6J("ngForOf",r.tags),t.xp6(2),t.Q6J("ngForOf",t.lcZ(9,4,r.posts$)))},directives:[i._Y,i.JL,i.F,i.Fj,i.JJ,i.On,o.sg,i.YN,i.Kr,T.i],pipes:[o.Ov],styles:[""]}),s})()},3794:(v,_,a)=>{a.d(_,{v:()=>i});var g=a(2340),t=a(7716),u=a(9075),m=a(2300);let i=(()=>{class o{constructor(e,d,h){this.meta=e,this.title=d,this.scullyContent=h,this.defaultMetadata={title:"Miros\u0142aw",description:"Blog o programowaniu i Linuksie",authors:["Arkadiusz Miros\u0142aw"],publishedAt:"",tags:["programowanie","linux","java"],image:"assets/img/sites/home-bg.jpg",route:""}}generateMetaTags(){this.scullyContent.getMetadata().subscribe(e=>{null==e.publishedAt&&(e=this.defaultMetadata),this.setTitle(e.title),this.setDescription(e.description),this.updateKeywords(e.tags),this.openGraph(e)})}setTitle(e){this.title.setTitle(null!=e?e:this.defaultMetadata.title)}setDescription(e){this.meta.updateTag({name:"description",content:null!=e?e:this.defaultMetadata.description})}updateKeywords(e){this.meta.updateTag({name:"keywords",content:e.join(", ")})}openGraph(e){if(this.meta.updateTag({property:"og:title",content:e.title}),this.meta.updateTag({property:"og:description",content:e.description}),this.meta.updateTag({property:"og:url",content:`${g.N.url}${e.route}`}),this.meta.updateTag({name:"twitter:card",content:"summary_large_image"}),this.meta.updateTag({property:"og:image",content:o.absoluteImageUrl(e.image)}),this.meta.updateTag({property:"og:image:alt",content:e.title}),this.meta.updateTag({property:"og:site_name",content:this.defaultMetadata.title}),this.meta.updateTag({property:"og:locale",content:"pl_PL"}),e.publishedAt)return this.meta.updateTag({property:"og:type",content:"article"}),this.meta.updateTag({property:"og:type",content:"article"}),this.meta.updateTag({property:"og:article:published_time",content:e.publishedAt}),this.meta.updateTag({property:"og:article:tag",content:e.tags.join(", ")}),void this.meta.updateTag({property:"og:article:author",content:e.authors.join(", ")});this.meta.removeTag('property="og:article:published_time"'),this.meta.removeTag('property="og:article:tag"'),this.meta.removeTag('property="og:article:author"'),this.meta.updateTag({property:"og:type",content:"website"})}static absoluteImageUrl(e){return`${g.N.url}/${e}`}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(u.h_),t.LFG(u.Dx),t.LFG(m.O))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);