(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)r=s[d],o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={0:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,1]),n()})({0:function(t,e,n){t.exports=n("Vtdi")},"5FTo":function(t,e,n){},ELiF:function(t,e,n){"use strict";var a=n("U1Wc"),o=n.n(a);o.a},J19Y:function(t,e,n){"use strict";var a=n("5FTo"),o=n.n(a);o.a},KKiW:function(t,e,n){},NNJJ:function(t,e,n){"use strict";var a=n("KKiW"),o=n.n(a);o.a},U1Wc:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("dE+T"),n("bHtr"),n("dRSK"),n("INYr"),n("HEwt"),n("Z2Ku"),n("yt8O"),n("6AQ9"),n("Vd3H"),n("0E+W"),n("yM4b"),n("IXt9"),n("f3/d"),n("9AAn"),n("fyVe"),n("U2t9"),n("2atp"),n("+auO"),n("MtdB"),n("Jcmo"),n("nzyx"),n("BC7C"),n("x8ZO"),n("9P93"),n("BJ/l"),n("eHKK"),n("pp/T"),n("CyHz"),n("bBoP"),n("x8Yj"),n("hLT2"),n("xfY5"),n("Ljet"),n("/KAi"),n("fN96"),n("7h0T"),n("sbF8"),n("h/M4"),n("knhD"),n("XfKG"),n("BP8U"),n("91GP"),n("RQRG"),n("/uf1"),n("/8Fb"),n("DW2E"),n("mYba"),n("jm62"),n("JduL"),n("5Pf0"),n("uaHG"),n("ZNX/"),n("mura"),n("25dN"),n("Zshi"),n("V/DX"),n("FlsD"),n("RW0V"),n("z2o2"),n("/SS/"),n("hhXQ"),n("VRzm"),n("CX2u"),n("3xty"),n("I5cv"),n("iMoV"),n("uhZd"),n("0YWM"),n("694e"),n("LTTk"),n("9rMk"),n("IlFx"),n("xpiv"),n("oZ/O"),n("klPD"),n("knU9"),n("Oyvg"),n("OEbY"),n("SRfc"),n("pIFo"),n("KKXr"),n("OG14"),n("a1Th"),n("T39b"),n("ioFf"),n("rE2o"),n("hEkN"),n("nIY7"),n("+oPb"),n("SMB2"),n("oDIu"),n("rvZc"),n("0mN4"),n("bDcW"),n("nsiH"),n("VpUO"),n("L9s1"),n("0LDn"),n("tUrg"),n("9XZr"),n("7VC1"),n("eI33"),n("FLlr"),n("84bF"),n("9VmF"),n("FEjr"),n("Zz4T"),n("JCqj"),n("xm80"),n("sFw1"),n("NO8f"),n("aqI/"),n("Faw5"),n("r1bV"),n("tuSo"),n("nCnK"),n("Y9lz"),n("Tdpu"),n("EK0E"),n("wCsR"),n("R5XZ"),n("Ew+T"),n("rGqo"),n("ls82");var a=n("Kw5r"),o=n("zlta"),i=n.n(o);n("v0CA");a["default"].use(i.a,{theme:{primary:"#E8364B"}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:t.dark}},[n("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"","mobile-break-point":"800",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,function(e,a){return n("router-link",{key:a,attrs:{tag:"v-list-tile",exact:e.exact,to:e.path,"active-class":"RouteActive"}},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),n("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),n("v-container",{staticClass:"Container",attrs:{"fill-height":"",row:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs3:""}},[n("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":""}},[n("Controls")],1)],1),n("v-flex",{attrs:{xs6:"","fill-height":""}},[n("Player")],1)],1)],1),n("v-menu",{attrs:{"offset-y":"","offset-x":"","nudge-width":200,"close-on-content-click":!1}},[n("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[n("v-icon",[t._v("settings")])],1),n("v-list",[n("v-list-tile",[n("v-switch",{attrs:{label:"Dark Mode",color:"primary"},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}})],1)],1)],1),n("v-btn",{attrs:{flat:"",color:"primary"},domProps:{innerHTML:t._s(t.authorized?"LOGOUT":"LOGIN")},on:{click:function(e){return e.stopPropagation(),t.authButton(e)}}})],1),n("v-content",[n("router-view")],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"Card"},[n("v-layout",{attrs:{"fill-height":"","align-start":""}},[n("img",{staticClass:"Image",attrs:{src:t.formatArtworkUrl(t.currentMedia)}}),n("v-layout",{attrs:{"align-space-between":"","justify-space-between":"",column:"","fill-height":""}},[n("v-layout",{attrs:{"fill-height":"","align-center":"",column:""}},[t.currentMedia?n("p",{staticClass:"Title"},[t._v(t._s(t.currentMedia.item.title))]):t._e(),t.currentMedia?n("p",{staticClass:"Subtitle"},[t._v(t._s(t.currentMedia.item.artistName)+" - "+t._s(t.currentMedia.item.albumName))]):t._e()]),n("v-progress-linear",{staticClass:"Progress",attrs:{active:"stopped"!=t.currentState,indeterminate:"waiting"==t.currentState||"loading"==t.currentState},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1)],1)],1)},u=[],l=n("L2JU"),d={name:"Player",computed:Object(l["b"])({currentState:"currentState",currentMedia:"currentMedia",progress:"progress"}),methods:{formatArtworkUrl:function(t){return window.MusicKit.formatArtworkURL(this.currentMedia.item.attributes.artwork,250,250)}}},p=d,f=(n("NNJJ"),n("KHd+")),m=Object(f["a"])(p,c,u,!1,null,"76f4967a",null),h=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.previous(e)}}},[n("v-icon",{attrs:{size:"36"}},[t._v("skip_previous")])],1),n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[n("v-icon",{attrs:{size:"36"},domProps:{innerHTML:t._s("paused"==t.currentState?"play_arrow":"pause_arrow")}})],1),n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.next(e)}}},[n("v-icon",{attrs:{size:"36"}},[t._v("skip_next")])],1)],1)},v=[],b={name:"Controls",computed:Object(l["b"])({currentState:"currentState",currentMedia:"currentMedia",progress:"progress"}),methods:{onClick:function(){this.$store.dispatch("playing"==this.currentState?"pause":"play")},previous:function(){this.$store.dispatch("previous")},next:function(){this.$store.dispatch("next")}}},y=b,w=(n("J19Y"),Object(f["a"])(y,g,v,!1,null,"bc95fcba",null)),k=w.exports,x={name:"App",data:function(){return{clipped:!1,drawer:!0,fixed:!0,items:[{icon:"album",title:"Albums",exact:!0,path:"/albums"},{icon:"music_note",title:"Songs",exact:!0,path:"/songs"}],miniVariant:!0,right:!0,rightDrawer:!1}},computed:{authorized:{get:function(){return this.$store.state.authorized}},dark:{get:function(){return this.$store.state.dark},set:function(t){this.$store.commit("changeDark",{dark:t})}}},methods:{authButton:function(){this.authorized?this.$store.dispatch("deauthorize"):this.$store.dispatch("authorize")},hasAccepted:function(){return 1==localStorage.getItem("privacy")}},components:{Player:h,Controls:k}},_=x,S=(n("YRoM"),Object(f["a"])(_,r,s,!1,null,"f6843ef8",null)),M=S.exports,C=n("jE9Z"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-jumbotron",[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",[n("h3",{staticClass:"display-3"},[t._v("Panos Music (Beta)")]),n("span",{staticClass:"subheading"},[t._v("Panos Music is an open source modular Apple Music client that allows you to listen to Apple Music from any device that has a web browser. It is made in Vue and based off of "),n("a",{attrs:{href:"https://developer.apple.com/documentation/musickitjs"}},[t._v("MusicKit JS")]),t._v(", which is currently in beta. If you encounter any bugs, or if you'd like a feature added, please create an issue on Github.")]),n("v-divider",{staticClass:"my-3"}),n("div",{staticClass:"title mb-3"},[t._v("Login to start listening")]),n("v-btn",{staticClass:"mx-0",attrs:{color:"primary",large:""},on:{click:function(e){return e.stopPropagation(),t.login(e)}}},[t._v("\n            Login\n          ")])],1)],1)],1)],1)],1)},P=[],O={name:"Home",computed:Object(l["b"])({authorized:"authorized"}),methods:{login:function(){this.$store.dispatch("authorize")}},created:function(){this.authorized&&this.$router.push("albums")}},I=O,j=Object(f["a"])(I,z,P,!1,null,null,null),T=j.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"align-center":"","justify-space-around":"",row:"","fill-height":"",wrap:""}},[0===t.albums.length?n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}}):t._e(),t._l(t.albums,function(e){return n("v-flex",{key:e.id,attrs:{xs6:"",sm4:"",md3:"",lg2:""},on:{contextmenu:function(n){t.rightClick(n,e)}}},[n("MusicCard",{attrs:{name:e.attributes.name,artwork:e.attributes.artwork,artist:e.attributes.artistName,media:e}})],1)})],2),n("v-menu",{attrs:{absolute:"","position-x":t.contextX,"position-y":t.contextY},model:{value:t.showContext,callback:function(e){t.showContext=e},expression:"showContext"}},[n("v-list",[n("v-list-tile",{on:{click:function(e){t.playNext(t.album)}}},[n("v-list-tile-title",[t._v("Play Next")])],1),n("v-list-tile",{on:{click:function(e){t.playLater(t.album)}}},[n("v-list-tile-title",[t._v("Play Later")])],1)],1)],1)],1)},L=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"Card",on:{mouseover:t.mouseOver,mouseout:t.mouseOut,dblclick:function(e){t.playSong()}}},[n("div",{staticClass:"ButtonContainer"},[n("img",{staticClass:"Image",attrs:{src:t.formatArtworkUrl()}}),n("transition",{attrs:{name:"fade"}},[t.showPlayButton?n("v-btn",{staticClass:"PlayButton",attrs:{color:"primary",dark:"",small:"",absolute:"",fab:""},on:{click:function(e){e.stopPropagation(),t.playSong()}}},[n("v-icon",[t._v("play_arrow")])],1):t._e()],1)],1),n("v-card-title",{staticClass:"Title"},[t._v("\n    "+t._s(t.name)+"\n  ")]),n("v-card-title",{staticClass:"Title Subtitle"},[t._v(t._s(t.artist))])],1)},E=[],K={props:{name:String,artist:String,artwork:Object,media:Object},data:function(){return{showPlayButton:!1}},methods:{formatArtworkUrl:function(){return window.MusicKit.formatArtworkURL(this.artwork,500,500)},mouseOver:function(){this.showPlayButton=!0},mouseOut:function(){this.showPlayButton=!1},playSong:function(){this.$store.dispatch("playSong",{song:this.media})}}},F=K,$=(n("ELiF"),Object(f["a"])(F,A,E,!1,null,"5654562e",null)),V=$.exports,Y={name:"Albums",data:function(){return{showContext:!1,contextX:150,contextY:0,album:null}},computed:Object(l["b"])({albums:"albums",progress:"progress",currentState:"currentState",currentMedia:"currentMedia"}),methods:{updateAlbums:function(){0===this.albums.length&&this.$store.dispatch("updateAlbums")},playSong:function(t){this.$store.dispatch("playSong",{song:t})},playNext:function(t){this.$store.dispatch("playNext",{song:t})},playLater:function(t){this.$store.dispatch("playLater",{song:t})},rightClick:function(t,e){t.preventDefault(),console.log(t),this.album=e,this.contextX=t.x,this.contextY=t.y,this.showContext=!0}},created:function(){this.updateAlbums()},components:{MusicCard:V}},U=Y,B=Object(f["a"])(U,N,L,!1,null,null,null),J=B.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.songs,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{on:{click:function(n){n.stopPropagation(),t.playSong(e.item)}}},[t._v(t._s(e.item.attributes.name))]),n("td",{staticClass:"text-xs-left"},[t._v(t._s(t.millisToMinutesAndSeconds(e.item.attributes.durationInMillis)))]),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.attributes.artistName))]),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.attributes.albumName))])]}}])})},X=[],H={name:"Songs",data:function(){return{headers:[{text:"Name",align:"left",value:"attributes.name"},{text:"Time",value:"attributes.durationInMillis"},{text:"Artist",value:"attributes.artistName"},{text:"Album",value:"attributes.albumName"}]}},computed:Object(l["b"])({songs:"songs"}),methods:{millisToMinutesAndSeconds:function(t){var e=Math.floor(t/6e4),n=(t%6e4/1e3).toFixed(0);return e+":"+(n<10?"0":"")+n},playSong:function(t){this.$store.dispatch("playSong",{song:t})}},created:function(){0===this.songs.length&&this.$store.dispatch("updateSongs")}},R=H,Z=(n("YtLZ"),Object(f["a"])(R,D,X,!1,null,null,null)),Q=Z.exports,W={developerToken:"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijg3OTk2SjU0NVgifQ.eyJpc3MiOiIzUFdETTRXNTVWIiwiaWF0IjoxNTMyMTU1NzY3LCJleHAiOjE1MzQ1NTMzNjd9.wpOFdCNNeUTPmFBfmtXM--OsOIBHy-ZYULdBQp-2kVX8rvFE67TnSgrMThJl8nLC44n1F21WcwkYKY0tW3SKzQ",app:{name:"app",build:"1978.4.1"}};a["default"].use(l["a"]),window.MusicKit.configure(W);var G=window.MusicKit.getInstance(),q=(window.MusicKit,new l["a"].Store({state:{currentState:"paused",currentMedia:null,progress:null,albums:[],songs:[],authorized:"true"==localStorage.getItem("authorized"),dark:"true"==localStorage.getItem("dark")},mutations:{updateAlbums:function(t,e){t.albums=e.albums},updateSongs:function(t,e){t.songs=e.songs},playSong:function(t,e){var n=e.song;switch(console.log(n),n.type){case"library-songs":G.setQueue({items:[n.attributes.playParams]}).then(function(t){console.log(t),G.play()}).catch(function(t){console.log(t)});break;case"library-albums":G.setQueue({album:n.id}).then(function(t){console.log(t),G.play()}).catch(function(t){console.log(t)});break}},changeCurrentMedia:function(t,e){console.log(e.currentMedia),t.currentMedia=e.currentMedia},changeProgress:function(t,e){console.log(e.progress.progress),t.progress=100*e.progress.progress},changeAuthorized:function(t,e){t.authorized=e.authorized},changeState:function(t,e){t.currentState=e.currentState},changeDark:function(t,e){t.dark=e.dark,localStorage.setItem("dark",e.dark)},authorize:function(t){t.authorized=!0,localStorage.setItem("authorized",!0),location.reload()},deauthorize:function(t){t.authorized=!1,localStorage.setItem("authorized",!1),location.reload()},updateQueue:function(t,e){console.log(e.items),t.queue=e.items}},actions:{updateAlbums:function(t){var e=0,n=function e(n){G.api.library.albums(null,{offset:n,limit:100}).then(function(a){t.state.albums?t.commit("updateAlbums",{albums:t.state.albums.concat(a)}):t.commit("updateAlbums",{albums:a}),0!==a.length&&e(n+100)})};n(e)},updateSongs:function(t){var e=0,n=function e(n){G.api.library.songs(null,{offset:n,limit:100}).then(function(a){console.log(a),t.state.songs?t.commit("updateSongs",{songs:t.state.songs.concat(a)}):t.commit("updateSongs",{songs:a}),0!==a.length&&e(n+100)})};n(e)},playSong:function(t,e){console.log(e),t.commit("playSong",e)},authorize:function(t){var e=t.commit;G.authorize().then(function(t){e(t?"authorize":"deauthorized")}).catch(function(){e("deauthorize")})},deauthorize:function(t){var e=t.commit;G.unauthorize().then(function(){e("deauthorize")})},play:function(){G.play()},pause:function(){G.pause()},previous:function(){G.skipToPreviousItem()},next:function(){G.skipToNextItem()},updateQueue:function(t){var e=t.commit;e("updateQueue",{items:G.player.queue.items})},playNext:function(t,e){t.commit;var n=window.MusicKit.MediaItem(e.song);console.log(n),G.playNext({album:e.song.id}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},playLater:function(t,e){t.commit;console.log("Play later"),G.playLater({album:e.song.id}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}}));G.addEventListener("mediaItemDidChange",function(t){q.commit("changeCurrentMedia",{currentMedia:t}),q.dispatch("updateQueue")}),G.addEventListener("playbackDurationDidChange",function(t){}),G.addEventListener("playbackProgressDidChange",function(t){q.commit("changeProgress",{progress:t})}),G.addEventListener("playbackStateDidChange",function(t){console.log(window.MusicKit.PlaybackStates[t.state]),q.commit("changeState",{currentState:window.MusicKit.PlaybackStates[t.state]})});var tt=q;a["default"].use(C["a"]);var et=new C["a"]({routes:[{path:"/",name:"home",component:T},{path:"/albums",name:"albums",component:J},{path:"/songs",name:"songs",component:Q}]});et.beforeEach(function(t,e,n){console.log(t),"/albums"===t.path||"/songs"===t.path?tt.state.authorized?n():n("/"):n()});var nt=et,at=n("lIOY");Object(at["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["default"].config.productionTip=!1,new a["default"]({router:nt,store:tt,render:function(t){return t(M)}}).$mount("#app")},YRoM:function(t,e,n){"use strict";var a=n("yqkb"),o=n.n(a);o.a},YtLZ:function(t,e,n){"use strict";var a=n("wz36"),o=n.n(a);o.a},wz36:function(t,e,n){},yqkb:function(t,e,n){}});
//# sourceMappingURL=app.20ec2e19.js.map