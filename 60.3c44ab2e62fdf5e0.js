"use strict";(self.webpackChunkspotistats=self.webpackChunkspotistats||[]).push([[60],{7060:(T,c,n)=>{n.r(c),n.d(c,{HomeComponent:()=>a});var i=n(6895),m=n(6165),l=n(1569),u=n(2120),d=n(8198),t=n(4650);const g=function(){return["../top/artists"]},p=function(){return{timeRange:"short_term"}},f=function(){return["../top/tracks"]},h=function(){return["../history"]};class e{constructor(){this.tracks=[],this.artists=[],this.history=[]}}e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home-view"]],inputs:{tracks:"tracks",artists:"artists",history:"history"},standalone:!0,features:[t.jDz],decls:25,vars:18,consts:[["id","mainSection"],[1,"headline-container"],[3,"routerLink","queryParams"],[3,"amount","displayType"],[3,"amount","columnView"]],template:function(o,r){1&o&&(t.TgZ(0,"main")(1,"h1"),t._uU(2,"Personal Dashboard"),t.qZA(),t.TgZ(3,"div",0)(4,"section")(5,"div",1)(6,"h2"),t._uU(7,"Your monthly top artists"),t.qZA(),t.TgZ(8,"a",2),t._uU(9,"View all"),t.qZA()(),t._UZ(10,"app-artists",3),t.qZA(),t.TgZ(11,"section")(12,"div",1)(13,"h2"),t._uU(14,"Your monthly top tracks"),t.qZA(),t.TgZ(15,"a",2),t._uU(16,"View all"),t.qZA()(),t._UZ(17,"app-tracks",4),t.qZA(),t.TgZ(18,"section")(19,"div",1)(20,"h2"),t._uU(21,"Playback History"),t.qZA(),t.TgZ(22,"a",2),t._uU(23,"View all"),t.qZA()(),t._UZ(24,"app-history",4),t.qZA()()()),2&o&&(t.xp6(8),t.Q6J("routerLink",t.DdM(12,g))("queryParams",t.DdM(13,p)),t.xp6(2),t.Q6J("amount",10)("displayType","scrollRow"),t.xp6(5),t.Q6J("routerLink",t.DdM(14,f))("queryParams",t.DdM(15,p)),t.xp6(2),t.Q6J("amount",10)("columnView",!0),t.xp6(5),t.Q6J("routerLink",t.DdM(16,h))("queryParams",t.DdM(17,h)),t.xp6(2),t.Q6J("amount",10)("columnView",!0))},dependencies:[i.ez,m.Bz,m.rH,l.j,u.u,d.o],styles:["h1[_ngcontent-%COMP%]{text-align:center;line-height:1.25;padding:8px;margin:8px 0}h2[_ngcontent-%COMP%]{text-align:left;font-size:20px}img[_ngcontent-%COMP%]{object-fit:cover;margin-bottom:auto}p[_ngcontent-%COMP%]{margin:auto 0}section[_ngcontent-%COMP%]{width:100%;flex-direction:column;align-items:center}a[_ngcontent-%COMP%]{text-decoration:none;color:var(--accent-color);padding:8px 16px;border:1px solid transparent;margin-right:-16px;white-space:nowrap}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active{background-color:#acff2f29}a[_ngcontent-%COMP%]:active{border-bottom:1px solid}.headline-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.statsIcon[_ngcontent-%COMP%]{display:none;width:auto;height:40%;aspect-ratio:1;margin:auto 10px auto auto}#mainSection[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:0 16px}@media screen and (min-width: 768px){h2[_ngcontent-%COMP%]{font-size:24px}}@media screen and (min-width: 2560px){h1[_ngcontent-%COMP%]{font-size:64px}}"]});var y=n(6613),x=n(6069),v=n(6569),C=n(7710),Z=n(9639),M=n(2408),P=n(2997);function O(s,o){if(1&s&&(t.ynx(0),t._UZ(1,"app-home-view",1),t.BQk()),2&s){const r=o.ngIf;t.xp6(1),t.Q6J("artists",r)}}class a{constructor(o){this.store=o,this.amount=10,this.tracks$=this.store.select((0,y.Yu)(this.amount)),this.artists$=this.store.select((0,v.ly)(this.amount)),this.history$=this.store.select((0,M.qe)(this.amount))}ngOnInit(){this.store.dispatch((0,x.Zs)({amount:this.amount,timeRange:"short_term"})),this.store.dispatch((0,C.SY)({amount:this.amount,timeRange:"short_term"})),this.store.dispatch((0,Z.td)({amount:this.amount}))}}a.\u0275fac=function(o){return new(o||a)(t.Y36(P.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"artists"]],template:function(o,r){1&o&&(t.YNc(0,O,2,1,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,r.artists$))},dependencies:[i.ez,i.O5,i.Ov,e]})}}]);