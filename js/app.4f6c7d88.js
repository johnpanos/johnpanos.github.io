(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)o=s[d],r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={0:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,1]),a()})({0:function(t,e,a){t.exports=a("Vtdi")},"1gTW":function(t,e,a){},"2YGu":function(t,e,a){"use strict";var n=a("t2Pf"),r=a.n(n);r.a},Cjsm:function(t,e,a){"use strict";var n=a("KirT"),r=a.n(n);r.a},KirT:function(t,e,a){},"Q8+D":function(t,e,a){"use strict";var n=a("s0Dk"),r=a.n(n);r.a},Vtdi:function(t,e,a){"use strict";a.r(e);a("dE+T"),a("bHtr"),a("dRSK"),a("INYr"),a("HEwt"),a("Z2Ku"),a("yt8O"),a("6AQ9"),a("Vd3H"),a("0E+W"),a("yM4b"),a("IXt9"),a("f3/d"),a("9AAn"),a("fyVe"),a("U2t9"),a("2atp"),a("+auO"),a("MtdB"),a("Jcmo"),a("nzyx"),a("BC7C"),a("x8ZO"),a("9P93"),a("BJ/l"),a("eHKK"),a("pp/T"),a("CyHz"),a("bBoP"),a("x8Yj"),a("hLT2"),a("xfY5"),a("Ljet"),a("/KAi"),a("fN96"),a("7h0T"),a("sbF8"),a("h/M4"),a("knhD"),a("XfKG"),a("BP8U"),a("91GP"),a("RQRG"),a("/uf1"),a("/8Fb"),a("DW2E"),a("mYba"),a("jm62"),a("JduL"),a("5Pf0"),a("uaHG"),a("ZNX/"),a("mura"),a("25dN"),a("Zshi"),a("V/DX"),a("FlsD"),a("RW0V"),a("z2o2"),a("/SS/"),a("hhXQ"),a("VRzm"),a("CX2u"),a("3xty"),a("I5cv"),a("iMoV"),a("uhZd"),a("0YWM"),a("694e"),a("LTTk"),a("9rMk"),a("IlFx"),a("xpiv"),a("oZ/O"),a("klPD"),a("knU9"),a("Oyvg"),a("OEbY"),a("SRfc"),a("pIFo"),a("KKXr"),a("OG14"),a("a1Th"),a("T39b"),a("ioFf"),a("rE2o"),a("hEkN"),a("nIY7"),a("+oPb"),a("SMB2"),a("oDIu"),a("rvZc"),a("0mN4"),a("bDcW"),a("nsiH"),a("VpUO"),a("L9s1"),a("0LDn"),a("tUrg"),a("9XZr"),a("7VC1"),a("eI33"),a("FLlr"),a("84bF"),a("9VmF"),a("FEjr"),a("Zz4T"),a("JCqj"),a("xm80"),a("sFw1"),a("NO8f"),a("aqI/"),a("Faw5"),a("r1bV"),a("tuSo"),a("nCnK"),a("Y9lz"),a("Tdpu"),a("EK0E"),a("wCsR"),a("R5XZ"),a("Ew+T"),a("rGqo"),a("ls82");var n=a("Kw5r"),r=a("zlta"),i=a.n(r);a("v0CA");n["default"].use(i.a,{theme:{primary:"#d32f2f"}});var o=a("KD6U"),s=a.n(o);n["default"].use(s.a,{preLoad:1.3,attempt:1,observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}});var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:t.dark}},[a("v-dialog",{attrs:{persistent:"","max-width":"450",lazy:""},model:{value:t.unsupportedCodec,callback:function(e){t.unsupportedCodec=e},expression:"unsupportedCodec"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Unsupported Codec")]),a("v-card-text",[t._v("\n        It appears that your browser does not support the codec required to play Apple Music content.\n        This is not a limitation of Panos Music, but it of MusicKit, which Panos Music is based off of.\n        "),a("br"),a("br"),t._v("\n        This problem is usually found in Firefox on Linux, and can be fixed by using Chrome or another browser\n        with supported codecs.\n        "),a("br"),a("br"),a("span",{staticClass:"font-weight-medium"},[t._v("Codec:")]),a("br"),a("code",[t._v('audio/mp4;codecs="mp4a.40.2"')])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},nativeOn:{click:function(e){t.unsupportedCodec=!1}}},[t._v("GOT IT")])],1)],1)],1),a("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"","mobile-break-point":"800",fixed:"",app:"",width:"225"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[t._l(t.items,function(e,n){return[a("router-link",{key:n,attrs:{tag:"v-list-tile",to:e.path,"active-class":"RouteActive"}},[a("v-list-tile-action",[a("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1),e.divider?a("v-divider",{key:n}):t._e()]})],2)],1),a("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[a("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),a("v-container",{staticClass:"Container",attrs:{"fill-height":"",row:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs5:"",md4:""}},[a("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":""}},[a("Controls")],1)],1),a("v-flex",{attrs:{xs7:"",md8:"",lg6:"","fill-height":""}},[a("Player")],1)],1)],1),a("v-menu",{attrs:{"offset-y":"","offset-x":"","nudge-width":200,"close-on-content-click":!1}},[a("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-badge",{attrs:{right:""}},[t.queue.length>0?a("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.queue.length))]):t._e(),a("v-icon",[t._v("list")])],1)],1),a("v-list",{attrs:{"two-line":""}},[t._l(t.queue,function(e,n){return[a("v-list-tile",{key:n},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.attributes.name)}}),a("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.attributes.artistName)}})],1),a("v-list-tile-action",[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.removeFromQueue(n)}}},[a("v-icon",[t._v("close")])],1)],1)],1),a("v-divider",{key:n})]})],2)],1),a("v-menu",{attrs:{"offset-y":"","offset-x":"","nudge-width":200,"close-on-content-click":!1}},[a("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",[t._v("settings")])],1),a("v-list",[a("v-list-tile",[a("v-switch",{attrs:{label:"Dark Mode",color:"primary"},model:{value:t.dark,callback:function(e){t.dark=e},expression:"dark"}})],1)],1)],1),a("v-btn",{attrs:{flat:"",color:"primary"},domProps:{innerHTML:t._s(t.authorized?"LOGOUT":"LOGIN")},on:{click:function(e){return e.stopPropagation(),t.authButton(e)}}})],1),a("v-content",[a("router-view")],1),a("Snackbar")],1)},u=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"Card"},[a("v-layout",{attrs:{"fill-height":"","align-start":""}},[a("img",{staticClass:"Image",attrs:{src:t.formatArtworkUrl(t.currentMedia)}}),a("v-layout",{attrs:{"align-space-between":"","justify-space-between":"",column:"","fill-height":""}},[a("v-layout",{attrs:{"fill-height":"","align-center":"",column:""}},[a("v-flex",{attrs:{xs6:"","align-center":""}},[t.currentMedia?a("p",{staticClass:"Title"},[t._v(t._s(t.currentMedia.item.title))]):t._e()]),a("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs6:"","align-center":"","justify-center":""}},[t.currentMedia?a("p",{staticClass:"Subtitle"},[t._v(t._s(t.currentMedia.item.artistName)+" - "+t._s(t.currentMedia.item.albumName))]):t._e()])],1),a("v-progress-linear",{staticClass:"Progress",attrs:{active:"stopped"!=t.currentState,indeterminate:"waiting"==t.currentState||"loading"==t.currentState},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1)],1)],1)},d=[],p=a("L2JU"),m={name:"Player",computed:Object(p["b"])("player",{currentState:"currentState",currentMedia:"currentMedia",progress:"progress"}),methods:{formatArtworkUrl:function(t){return window.MusicKit.formatArtworkURL(this.currentMedia.item.attributes.artwork,250,250)}}},h=m,f=(a("aG1W"),a("KHd+")),v=Object(f["a"])(h,l,d,!1,null,"23d15d25",null),b=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.previous(e)}}},[a("v-icon",{attrs:{size:"32"}},[t._v("skip_previous")])],1),"playing"===t.currentState||"waiting"===t.currentState||"loading"===t.currentState?a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[a("v-icon",{attrs:{size:"36"}},[t._v("stop")])],1):t._e(),"paused"===t.currentState||"stopped"===t.currentState?a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[a("v-icon",{attrs:{size:"36"}},[t._v("play_arrow")])],1):t._e(),a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.next(e)}}},[a("v-icon",{attrs:{size:"32"}},[t._v("skip_next")])],1)],1)},y=[],k={name:"Controls",computed:Object(p["b"])("player",{currentState:"currentState",currentMedia:"currentMedia",progress:"progress"}),methods:{onClick:function(){this.$store.dispatch("playing"==this.currentState?"player/pause":"player/play")},previous:function(){this.$store.dispatch("player/previous")},next:function(){this.$store.dispatch("player/next")}}},x=k,w=(a("nd8i"),Object(f["a"])(x,g,y,!1,null,"ea0542d0",null)),S=w.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{timeout:"4000",bottom:"",left:"","multi-line":""},model:{value:t.snackbarShow,callback:function(e){t.snackbarShow=e},expression:"snackbarShow"}},[t._v("\n  "+t._s(t.snackbarText)+"\n  "),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbarShow=!1}}},[t._v("\n    OK\n  ")])],1)},C=[],M={name:"snackbar",computed:{snackbarText:{get:function(){return this.$store.state.player.snackbarText}},snackbarShow:{get:function(){return this.$store.state.player.snackbarShow},set:function(t){return this.$store.dispatch("player/changeSnackbarShow",{snackbarShow:t})}},created:function(){this.snackbarShow=!0}}},T=M,O=(a("2YGu"),Object(f["a"])(T,_,C,!1,null,null,null)),P=O.exports,z={name:"App",data:function(){return{clipped:!0,drawer:!0,fixed:!1,items:[{icon:"explore",title:"Explore",exact:!0,path:"/explore",divider:!0},{icon:"album",title:"Albums",exact:!0,path:"/albums"},{icon:"music_note",title:"Songs",exact:!0,path:"/songs"}],miniVariant:!1,unsupportedCodec:!0}},computed:{authorized:{get:function(){return this.$store.state.player.authorized}},dark:{get:function(){return this.$store.state.player.dark},set:function(t){this.$store.commit("player/changeDark",{dark:t})}},queue:{get:function(){return this.$store.state.player.queue}}},methods:{authButton:function(){this.authorized?this.$store.dispatch("player/deauthorize"):this.$store.dispatch("player/authorize")},hasAccepted:function(){return 1==localStorage.getItem("privacy")},removeFromQueue:function(t){this.$store.dispatch("player/removeFromQueue",{index:t})}},components:{Player:b,Controls:S,Snackbar:P},created:function(){var t=document.createElement("video");this.unsupportedCodec="probably"!=t.canPlayType('audio/mp4;codecs="mp4a.40.2"')}},j=z,I=(a("bWcw"),Object(f["a"])(j,c,u,!1,null,"7a8f8409",null)),N=I.exports,A=a("jE9Z"),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-jumbotron",[a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",[a("h3",{staticClass:"display-3"},[t._v("Panos Music (Beta)")]),a("span",{staticClass:"subheading"},[t._v("Panos Music is an open source modular Apple Music client that allows you to listen to Apple Music from any device that has a web browser. It is made in Vue and based off of "),a("a",{attrs:{href:"https://developer.apple.com/documentation/musickitjs"}},[t._v("MusicKit JS")]),t._v(", which is currently in beta. If you encounter any bugs, or if you'd like a feature added, please create an issue on Github.")]),a("v-divider",{staticClass:"my-3"}),a("div",{staticClass:"title mb-3"},[t._v("Login to start listening")]),a("v-btn",{staticClass:"mx-0",attrs:{color:"primary",large:""},on:{click:function(e){return e.stopPropagation(),t.login(e)}}},[t._v("\n            Login\n          ")])],1)],1)],1)],1)],1)},$=[],E={name:"Home",computed:Object(p["b"])("player",{authorized:"authorized"}),methods:{login:function(){this.$store.dispatch("player/authorize")}},created:function(){this.authorized&&this.$router.push("albums")}},F=E,H=Object(f["a"])(F,L,$,!1,null,null,null),D=H.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-slide-y-transition",{attrs:{appear:""}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":"","justify-space-around":"",row:"","fill-height":"",wrap:""}},[0===t.albums.length?a("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}}):t._e(),t._l(t.albums,function(e){return a("v-flex",{key:e.id,attrs:{xs6:"",sm4:"",md3:"",lg2:""},on:{contextmenu:function(a){t.rightClick(a,e)}}},[a("MusicCard",{attrs:{name:e.attributes.name,artwork:e.attributes.artwork,artist:e.attributes.artistName,media:e}})],1)})],2),a("v-menu",{attrs:{absolute:"","position-x":t.contextX,"position-y":t.contextY},model:{value:t.showContext,callback:function(e){t.showContext=e},expression:"showContext"}},[a("v-list",[a("v-list-tile",{on:{click:function(e){t.playNext(t.album)}}},[a("v-list-tile-title",[t._v("Play Next")])],1),a("v-list-tile",{on:{click:function(e){t.playLater(t.album)}}},[a("v-list-tile-title",[t._v("Play Later")])],1)],1)],1)],1)],1)},Q=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"Card",on:{mouseover:t.mouseOver,mouseout:t.mouseOut,dblclick:function(e){t.playSong()}}},[a("div",{staticClass:"ButtonContainer"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.formatArtworkUrl(),expression:"formatArtworkUrl()"}],staticClass:"Image"}),a("transition",{attrs:{name:"fade"}},[t.showPlayButton?a("v-btn",{staticClass:"PlayButton",attrs:{color:"primary",dark:"",small:"",absolute:"",fab:""},on:{click:function(e){e.stopPropagation(),t.playSong()}}},[a("v-icon",[t._v("play_arrow")])],1):t._e()],1)],1),a("v-card-title",{staticClass:"Title"},[t._v("\n    "+t._s(t.name)+"\n  ")]),a("v-card-title",{staticClass:"Title Subtitle"},[t._v(t._s(t.artist))])],1)},V=[],q={props:{name:String,artist:String,artwork:Object,media:Object},data:function(){return{showPlayButton:!1}},methods:{formatArtworkUrl:function(){return window.MusicKit.formatArtworkURL(this.artwork,250,250)},mouseOver:function(){this.showPlayButton=!0},mouseOut:function(){this.showPlayButton=!1},playSong:function(){this.$store.dispatch("player/playSong",{song:this.media})}}},Y=q,R=(a("Cjsm"),Object(f["a"])(Y,U,V,!1,null,"408632bc",null)),B=R.exports,G={name:"Albums",data:function(){return{showContext:!1,contextX:150,contextY:0,album:null}},computed:Object(p["b"])("player",{albums:"albums",progress:"progress",currentState:"currentState",currentMedia:"currentMedia"}),methods:{updateAlbums:function(){0===this.albums.length&&this.$store.dispatch("player/updateAlbums")},playSong:function(t){this.$store.dispatch("player/playSong",{song:t})},playNext:function(t){this.$store.dispatch("player/playNext",{song:t})},playLater:function(t){this.$store.dispatch("player/playLater",{song:t})},rightClick:function(t,e){t.preventDefault(),this.album=e,this.contextX=t.x,this.contextY=t.y,this.showContext=!0}},created:function(){this.updateAlbums()},components:{MusicCard:B}},X=G,W=Object(f["a"])(X,K,Q,!1,null,null,null),Z=W.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-slide-y-transition",{attrs:{appear:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.songs,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{on:{click:function(a){a.stopPropagation(),t.playSong(e.item)}}},[t._v(t._s(e.item.attributes.name))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(t.millisToMinutesAndSeconds(e.item.attributes.durationInMillis)))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.attributes.artistName))]),a("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.attributes.albumName))])]}}])})],1)},tt=[],et={name:"Songs",data:function(){return{headers:[{text:"Name",align:"left",value:"attributes.name"},{text:"Time",value:"attributes.durationInMillis"},{text:"Artist",value:"attributes.artistName"},{text:"Album",value:"attributes.albumName"}]}},computed:Object(p["b"])("player",{songs:"songs"}),methods:{millisToMinutesAndSeconds:function(t){var e=Math.floor(t/6e4),a=(t%6e4/1e3).toFixed(0);return e+":"+(a<10?"0":"")+a},playSong:function(t){this.$store.dispatch("player/playSong",{song:t})}},created:function(){0===this.songs.length&&this.$store.dispatch("player/updateSongs")}},at=et,nt=(a("YtLZ"),Object(f["a"])(at,J,tt,!1,null,null,null)),rt=nt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-slide-y-transition",{attrs:{appear:""}},[a("div",[a("v-toolbar",[a("v-autocomplete",{staticClass:"mt-1",attrs:{items:t.searchHints,"prepend-inner-icon":"search",solo:"","search-input":t.search,"hide-no-data":"",placeholder:"Search Apple Music",loading:t.loading,dense:"","hide-selected":"","hide-details":""},on:{"update:searchInput":function(e){t.search=e}},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onSearch(e):null}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),a("v-container",{attrs:{fluid:"","fill-height":""}},[a("router-view")],1)],1),t._v("=\n")])},ot=[],st={name:"explore",data:function(){return{search:"",select:null}},watch:{search:function(t){t&&this.getSearchHints(t)}},methods:{getSearchHints:function(t){this.$store.dispatch("explore/updateSearchHints",{search:this.search})},onSearch:function(t){var e=this.search;this.$router.push({name:"search",params:{searchText:e}}),this.$store.dispatch("explore/search",{query:this.search})}},computed:Object(p["b"])("explore",{searchHints:"searchHints",loading:"loading"})},ct=st,ut=Object(f["a"])(ct,it,ot,!1,null,null,null),lt=ut.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-slide-y-transition",{attrs:{appear:""}},[a("v-layout",{attrs:{column:""}},[t.results.albums.data?a("v-flex",[a("h1",[t._v("Albums")]),a("v-layout",{attrs:{"align-start":"",row:"","fill-height":"",wrap:""}},t._l(t.results.albums.data,function(t){return a("v-flex",{key:t.id,attrs:{xs6:"",sm4:"",md3:"",lg2:""}},[a("MusicCard",{attrs:{name:t.attributes.name,artwork:t.attributes.artwork,artist:t.attributes.artistName,media:t}})],1)}))],1):t._e(),t.results.songs.data?a("v-flex",[a("h1",[t._v("Songs")]),a("v-layout",{attrs:{"align-start":"",row:"","fill-height":"",wrap:""}},t._l(t.results.songs.data,function(t){return a("v-flex",{key:t.id,attrs:{xs6:"",sm4:"",md3:"",lg2:""}},[a("MusicCard",{attrs:{name:t.attributes.name,artwork:t.attributes.artwork,artist:t.attributes.artistName,media:t}})],1)}))],1):t._e()],1)],1)},pt=[],mt={name:"Search",computed:{results:{get:function(){return this.$store.state.explore.search.results}}},created:function(){this.$store.dispatch("explore/search")},components:{MusicCard:B}},ht=mt,ft=(a("Q8+D"),Object(f["a"])(ht,dt,pt,!1,null,null,null)),vt=ft.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[t._l(t.recommendations,function(e,n){return[a("v-flex",{key:e.id},[0===n?a("h1",[t._v("For You")]):t._e(),e.attributes.title?a("h1",[t._v(t._s(e.attributes.title.stringForDisplay))]):t._e(),e.relationships.contents?a("v-layout",{attrs:{"align-start":"",row:"","fill-height":"",wrap:""}},t._l(e.relationships.contents.data,function(t){return a("v-flex",{key:t.id,attrs:{xs6:"",sm4:"",md3:"",lg2:""}},[a("MusicCard",{attrs:{name:t.attributes.name,artwork:t.attributes.artwork,artist:t.attributes.curatorName||t.attributes.artistName,media:t}})],1)})):t._e(),e.relationships.recommendations?[t._l(e.relationships.recommendations.data,function(e,n){return[a("h2",[t._v(t._s(e.attributes.reason.stringForDisplay))]),a("v-layout",{key:n,attrs:{"align-start":"",row:"","fill-height":"",wrap:""}},t._l(e.relationships.contents.data,function(t,e){return a("v-flex",{key:e,attrs:{xs6:"",sm4:"",md3:"",lg2:""}},[a("MusicCard",{attrs:{name:t.attributes.name,artwork:t.attributes.artwork,artist:t.attributes.curatorName||t.attributes.artistName,media:t}})],1)}))]})]:t._e()],2)]})],2)},gt=[],yt={name:"Recommendations",computed:Object(p["b"])("explore",{recommendations:"recommendations"}),created:function(){this.$store.dispatch("explore/updateRecommendations")},components:{MusicCard:B}},kt=yt,xt=(a("m12V"),Object(f["a"])(kt,bt,gt,!1,null,null,null)),wt=xt.exports,St={developerToken:"eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijg3OTk2SjU0NVgifQ.eyJpc3MiOiIzUFdETTRXNTVWIiwiaWF0IjoxNTMyMTU1NzY3LCJleHAiOjE1MzQ1NTMzNjd9.wpOFdCNNeUTPmFBfmtXM--OsOIBHy-ZYULdBQp-2kVX8rvFE67TnSgrMThJl8nLC44n1F21WcwkYKY0tW3SKzQ",app:{name:"app",build:"1978.4.1"}},_t=window.MusicKit.configure(St),Ct={namespaced:!0,state:{currentState:"paused",currentMedia:null,progress:null,duration:0,albums:[],songs:[],queue:[],snackbarText:"",snackbarShow:!1,authorized:"true"==localStorage.getItem("authorized"),dark:"true"==localStorage.getItem("dark")},mutations:{updateAlbums:function(t,e){t.albums=e.albums},updateSongs:function(t,e){t.songs=e.songs},playSong:function(t,e){console.log(e);var a=e.song;switch(a.type){case"songs":case"library-songs":_t.setQueue({items:[a.attributes.playParams]}).then(function(t){_t.play()}).catch(function(t){});break;case"albums":case"library-albums":_t.setQueue({album:a.id}).then(function(t){_t.play()}).catch(function(t){});break}},changeCurrentMedia:function(t,e){t.currentMedia=e.currentMedia,this.dispatch("player/updateQueue")},changeProgress:function(t,e){t.progress=100*e.progress.progress},changeDuration:function(t,e){t.duration=e.duration},changeAuthorized:function(t,e){t.authorized=e.authorized},changeState:function(t,e){t.currentState=e.currentState},changeDark:function(t,e){t.dark=e.dark,localStorage.setItem("dark",e.dark)},changeSnackbarShow:function(t,e){t.snackbarShow=e.snackbarShow,console.log(e)},changeSnackbarText:function(t,e){t.snackbarText=e.snackbarText},authorize:function(t){t.authorized=!0,localStorage.setItem("authorized",!0),location.reload()},deauthorize:function(t){t.authorized=!1,localStorage.setItem("authorized",!1),location.reload()},updateQueue:function(t,e){t.queue=e.items}},actions:{updateAlbums:function(t){var e=0,a=function e(a){_t.api.library.albums(null,{offset:a,limit:100}).then(function(n){t.state.albums?t.commit("updateAlbums",{albums:t.state.albums.concat(n)}):t.commit("updateAlbums",{albums:n}),0!==n.length&&e(a+100)})};a(e)},updateSongs:function(t){var e=0,a=function e(a){_t.api.library.songs(null,{offset:a,limit:100}).then(function(n){t.state.songs?t.commit("updateSongs",{songs:t.state.songs.concat(n)}):t.commit("updateSongs",{songs:n}),0!==n.length&&e(a+100)})};a(e)},playSong:function(t,e){t.commit("playSong",e)},authorize:function(t){var e=t.commit;_t.authorize().then(function(t){e(t?"authorize":"deauthorized")}).catch(function(){e("deauthorize")})},deauthorize:function(t){var e=t.commit;_t.unauthorize().then(function(){e("deauthorize")})},play:function(){_t.play()},pause:function(){_t.pause()},previous:function(){_t.skipToPreviousItem()},next:function(){_t.skipToNextItem()},updateQueue:function(t){var e=t.commit;e("updateQueue",{items:_t.player.queue.items})},playNext:function(t,e){var a=this,n=e.song;_t.playNext({album:n.id}).then(function(t){a.dispatch("player/updateQueue"),a.dispatch("player/changeSnackbarText",{snackbarText:"Added ".concat(n.attributes.name," - ").concat(n.attributes.artistName," to up next")}),a.dispatch("player/changeSnackbarShow",{snackbarShow:!0})}).catch(function(t){})},playLater:function(t,e){var a=this,n=e.song;_t.playLater({album:n.id}).then(function(t){a.dispatch("player/updateQueue"),a.dispatch("player/changeSnackbarText",{snackbarText:"Added ".concat(n.attributes.name," - ").concat(n.attributes.artistName," to play later")}),a.dispatch("player/changeSnackbarShow",{snackbarShow:!0})}).catch(function(t){})},removeFromQueue:function(t,e){var a=this,n=e.index,r=_t.player.queue.items;r.splice(n,1),n>-1&&_t.setQueue({items:r}).then(function(t){a.dispatch("player/updateQueue"),_t.pause(),_t.play()}).catch(function(t){})},changeSnackbarShow:function(t,e){var a=t.commit,n=e.snackbarShow;a("changeSnackbarShow",{snackbarShow:n})},changeSnackbarText:function(t,e){var a=t.commit,n=e.snackbarText;a("changeSnackbarText",{snackbarText:n})}}},Mt=window.MusicKit.getInstance(),Tt={namespaced:!0,state:{searchHints:[],recommendations:[],loading:!1,search:{query:"",loading:!1,results:[]}},mutations:{updateSearchHints:function(t,e){t.searchHints=e.searchHints,t.loading=!1},updateLoading:function(t,e){t.loading=e.loading},updateQuery:function(t,e){t.search.query=e.query},updateResults:function(t,e){t.search.results=e.results},updateRecommendations:function(t,e){console.log("update"),t.recommendations=e.recommendations}},actions:{updateSearchHints:function(t,e){var a=e.search;t.commit("updateLoading",{loading:!0}),Mt.api.searchHints(a).then(function(e){console.log(e),t.commit("updateSearchHints",{searchHints:e.terms})})},updateLoading:function(t,e){var a=e.loading;t.commit("updateLoading",{loading:a})},updateQuery:function(t,e){var a=e.query;t.commit("updateQuery",{query:a})},search:function(t,e){var a=e.query;Mt.api.search(a,{limit:10}).then(function(e){console.log(e),t.commit("updateResults",{results:e})})},updateRecommendations:function(t){Mt.api.recommendations().then(function(e){console.log(e),t.commit("updateRecommendations",{recommendations:e})})}}};n["default"].use(p["a"]);var Ot=window.MusicKit.getInstance(),Pt=new p["a"].Store({modules:{player:Ct,explore:Tt}});Ot.addEventListener("mediaItemDidChange",function(t){Pt.commit("player/changeCurrentMedia",{currentMedia:t})}),Ot.addEventListener("playbackDurationDidChange",function(t){Pt.commit("player/changeDuration",{duration:t})}),Ot.addEventListener("playbackProgressDidChange",function(t){Pt.commit("player/changeProgress",{progress:t})}),Ot.addEventListener("playbackStateDidChange",function(t){Pt.commit("player/changeState",{currentState:window.MusicKit.PlaybackStates[t.state]})});var zt=Pt;n["default"].use(A["a"]);var jt=new A["a"]({routes:[{path:"/",name:"home",component:D},{path:"/albums",name:"albums",component:Z},{path:"/songs",name:"songs",component:rt},{path:"/explore",name:"explore",component:lt,children:[{name:"search",path:"search/:searchText",component:vt},{name:"recommendations",path:"",component:wt}]}]});jt.beforeEach(function(t,e,a){"/albums"===t.path||"/songs"===t.path?zt.state.player.authorized?a():a("/"):a()});var It=jt,Nt=a("lIOY");Object(Nt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["default"].config.productionTip=!1,new n["default"]({router:It,store:zt,render:function(t){return t(N)}}).$mount("#app")},YtLZ:function(t,e,a){"use strict";var n=a("wz36"),r=a.n(n);r.a},aG1W:function(t,e,a){"use strict";var n=a("bS2O"),r=a.n(n);r.a},bS2O:function(t,e,a){},bWcw:function(t,e,a){"use strict";var n=a("1gTW"),r=a.n(n);r.a},gsk6:function(t,e,a){},m12V:function(t,e,a){"use strict";var n=a("uU5G"),r=a.n(n);r.a},nd8i:function(t,e,a){"use strict";var n=a("gsk6"),r=a.n(n);r.a},s0Dk:function(t,e,a){},t2Pf:function(t,e,a){},uU5G:function(t,e,a){},wz36:function(t,e,a){}});
//# sourceMappingURL=app.4f6c7d88.js.map