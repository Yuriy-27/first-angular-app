(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{QajV:function(e,i,t){"use strict";t.r(i);var s=t("8Y7J");class l{constructor(e){this.certificatesService=e}ngOnInit(){this.certificates=this.certificatesService.getAll()}}class n{}var r=t("pMnS"),u=t("hpHm");let c=(()=>(class{constructor(){this.interval=5e3,this.noPause=!1,this.noWrap=!1,this.showIndicators=!0,this.pauseOnFocus=!1,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1}}))();const d=function(){var e={UNKNOWN:0,NEXT:1,PREV:2};return e[e.UNKNOWN]="UNKNOWN",e[e.NEXT]="NEXT",e[e.PREV]="PREV",e}();let h=(()=>(class{constructor(e,i){this.ngZone=i,this.indicatorsByChunk=!1,this.itemsPerSlide=1,this.singleSlideOffset=!1,this.activeSlideChange=new s.m(!1),this.slideRangeChange=new s.m,this.startFromIndex=0,this._slides=new u.a,this._currentVisibleSlidesIndex=0,this.destroyed=!1,this.getActive=e=>e.active,this.makeSlidesConsistent=e=>{e.forEach((e,i)=>e.item.order=i)},Object.assign(this,e)}set activeSlide(e){this.multilist||this._slides.length&&e!==this._currentActiveSlide&&this._select(e)}get activeSlide(){return this._currentActiveSlide}get interval(){return this._interval}set interval(e){this._interval=e,this.restartTimer()}get slides(){return this._slides.toArray()}get isBs4(){return!Object(u.b)()}ngAfterViewInit(){setTimeout(()=>{this.singleSlideOffset&&(this.indicatorsByChunk=!1),this.multilist&&(this._chunkedSlides=function(e,i){const t=[],s=Math.ceil(e.length/i);let l=0;for(;l<s;){const n=e.splice(0,l===s-1&&i<e.length?e.length:i);t.push(n),l++}return t}(this.mapSlidesAndIndexes(),this.itemsPerSlide),this.selectInitialSlides())},0)}ngOnDestroy(){this.destroyed=!0}addSlide(e){this._slides.add(e),this.multilist&&this._slides.length<=this.itemsPerSlide&&(e.active=!0),this.multilist||1!==this._slides.length||(this._currentActiveSlide=void 0,this.activeSlide=0,this.play()),this.multilist&&this._slides.length>this.itemsPerSlide&&this.play()}removeSlide(e){const i=this._slides.indexOf(e);if(this._currentActiveSlide===i){let e=void 0;this._slides.length>1&&(e=this.isLast(i)?this.noWrap?i-1:0:i),this._slides.remove(i),setTimeout(()=>{this._select(e)},0)}else{this._slides.remove(i);const e=this.getCurrentSlideIndex();setTimeout(()=>{this._currentActiveSlide=e,this.activeSlideChange.emit(this._currentActiveSlide)},0)}}nextSlideFromInterval(e=!1){this.move(d.NEXT,e)}nextSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(d.NEXT,e)}previousSlide(e=!1){this.isPlaying&&this.restartTimer(),this.move(d.PREV,e)}getFirstVisibleIndex(){return this.slides.findIndex(this.getActive)}getLastVisibleIndex(){return function(e,i){let t=e.length;for(;t--;)if(i(e[t],t,e))return t;return-1}(this.slides,this.getActive)}move(e,i=!1){const t=this.getFirstVisibleIndex(),s=this.getLastVisibleIndex();this.noWrap&&(e===d.NEXT&&this.isLast(s)||e===d.PREV&&0===t)||(this.multilist?this.moveMultilist(e):this.activeSlide=this.findNextSlideIndex(e,i))}keydownPress(e){if(13===e.keyCode||"Enter"===e.key||32===e.keyCode||"Space"===e.key)return this.nextSlide(),void e.preventDefault();37!==e.keyCode&&"LeftArrow"!==e.key?39!==e.keyCode&&"RightArrow"!==e.key||this.nextSlide():this.previousSlide()}onMouseLeave(){this.pauseOnFocus||this.play()}onMouseUp(){this.pauseOnFocus||this.play()}pauseFocusIn(){this.pauseOnFocus&&(this.isPlaying=!1,this.resetTimer())}pauseFocusOut(){this.play()}selectSlide(e){this.isPlaying&&this.restartTimer(),this.multilist?this.selectSlideRange(this.indicatorsByChunk?e*this.itemsPerSlide:e):this.activeSlide=this.indicatorsByChunk?e*this.itemsPerSlide:e}play(){this.isPlaying||(this.isPlaying=!0,this.restartTimer())}pause(){this.noPause||(this.isPlaying=!1,this.resetTimer())}getCurrentSlideIndex(){return this._slides.findIndex(this.getActive)}isLast(e){return e+1>=this._slides.length}isFirst(e){return 0===e}indicatorsSlides(){return this.slides.filter((e,i)=>!this.indicatorsByChunk||i%this.itemsPerSlide==0)}selectInitialSlides(){const e=this.startFromIndex<=this._slides.length?this.startFromIndex:0;if(this.hideSlides(),this.singleSlideOffset){if(this._slidesWithIndexes=this.mapSlidesAndIndexes(),this._slides.length-e<this.itemsPerSlide){const i=this._slidesWithIndexes.slice(0,e);this._slidesWithIndexes=[...this._slidesWithIndexes,...i].slice(i.length).slice(0,this.itemsPerSlide)}else this._slidesWithIndexes=this._slidesWithIndexes.slice(e,e+this.itemsPerSlide);this._slidesWithIndexes.forEach(e=>e.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}findNextSlideIndex(e,i){let t=0;if(i||!this.isLast(this.activeSlide)||e===d.PREV||!this.noWrap){switch(e){case d.NEXT:t=this.isLast(this._currentActiveSlide)?!i&&this.noWrap?this._currentActiveSlide:0:this._currentActiveSlide+1;break;case d.PREV:t=this._currentActiveSlide>0?this._currentActiveSlide-1:!i&&this.noWrap?this._currentActiveSlide:this._slides.length-1;break;default:throw new Error("Unknown direction")}return t}}mapSlidesAndIndexes(){return this.slides.slice().map((e,i)=>({index:i,item:e}))}selectSlideRange(e){if(!this.isIndexInRange(e)){if(this.hideSlides(),this.singleSlideOffset){const i=this.isIndexOnTheEdges(e)?e:e-this.itemsPerSlide+1,t=this.isIndexOnTheEdges(e)?e+this.itemsPerSlide:e+1;this._slidesWithIndexes=this.mapSlidesAndIndexes().slice(i,t),this.makeSlidesConsistent(this._slidesWithIndexes),this._slidesWithIndexes.forEach(e=>e.item.active=!0)}else this.selectRangeByNestedIndex(e);this.slideRangeChange.emit(this.getVisibleIndexes())}}selectRangeByNestedIndex(e){const i=this._chunkedSlides.map((e,i)=>({index:i,list:e})).find(i=>void 0!==i.list.find(i=>i.index===e));this._currentVisibleSlidesIndex=i.index,this._chunkedSlides[i.index].forEach(e=>{e.item.active=!0})}isIndexOnTheEdges(e){return e+1-this.itemsPerSlide<=0||e+this.itemsPerSlide<=this._slides.length}isIndexInRange(e){return this.singleSlideOffset?this._slidesWithIndexes.map(e=>e.index).indexOf(e)>=0:e<=this.getLastVisibleIndex()&&e>=this.getFirstVisibleIndex()}hideSlides(){this.slides.forEach(e=>e.active=!1)}isVisibleSlideListLast(){return this._currentVisibleSlidesIndex===this._chunkedSlides.length-1}isVisibleSlideListFirst(){return 0===this._currentVisibleSlidesIndex}moveSliderByOneItem(e){let i,t,s,l;if(this.noWrap){i=this.getFirstVisibleIndex(),t=this.getLastVisibleIndex(),s=e===d.NEXT?i:t,l=e!==d.NEXT?i-1:this.isLast(t)?0:t+1,this._slides.get(s).active=!1,this._slides.get(l).active=!0;const n=this.mapSlidesAndIndexes().filter(e=>e.item.active);this.makeSlidesConsistent(n),this.slideRangeChange.emit(this.getVisibleIndexes())}else{let s;i=this._slidesWithIndexes[0].index,t=this._slidesWithIndexes[this._slidesWithIndexes.length-1].index,e===d.NEXT?(this._slidesWithIndexes.shift(),s=this.isLast(t)?0:t+1,this._slidesWithIndexes.push({index:s,item:this._slides.get(s)})):(this._slidesWithIndexes.pop(),s=this.isFirst(i)?this._slides.length-1:i-1,this._slidesWithIndexes=[{index:s,item:this._slides.get(s)},...this._slidesWithIndexes]),this.hideSlides(),this._slidesWithIndexes.forEach(e=>e.item.active=!0),this.makeSlidesConsistent(this._slidesWithIndexes),this.slideRangeChange.emit(this._slidesWithIndexes.map(e=>e.index))}}moveMultilist(e){this.singleSlideOffset?this.moveSliderByOneItem(e):(this.hideSlides(),this._currentVisibleSlidesIndex=this.noWrap?e===d.NEXT?this._currentVisibleSlidesIndex+1:this._currentVisibleSlidesIndex-1:e===d.NEXT?this.isVisibleSlideListLast()?0:this._currentVisibleSlidesIndex+1:this.isVisibleSlideListFirst()?this._chunkedSlides.length-1:this._currentVisibleSlidesIndex-1,this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(e=>e.item.active=!0),this.slideRangeChange.emit(this.getVisibleIndexes()))}getVisibleIndexes(){return this.singleSlideOffset?this._slidesWithIndexes.map(e=>e.index):this._chunkedSlides[this._currentVisibleSlidesIndex].map(e=>e.index)}_select(e){if(isNaN(e))return void this.pause();if(!this.multilist){const e=this._slides.get(this._currentActiveSlide);e&&(e.active=!1)}const i=this._slides.get(e);i&&(this._currentActiveSlide=e,i.active=!0,this.activeSlide=e,this.activeSlideChange.emit(e))}restartTimer(){this.resetTimer();const e=+this.interval;!isNaN(e)&&e>0&&(this.currentInterval=this.ngZone.runOutsideAngular(()=>setInterval(()=>{const e=+this.interval;this.ngZone.run(()=>{this.isPlaying&&!isNaN(this.interval)&&e>0&&this.slides.length?this.nextSlideFromInterval():this.pause()})},e)))}get multilist(){return this.itemsPerSlide>1}resetTimer(){this.currentInterval&&(clearInterval(this.currentInterval),this.currentInterval=void 0)}}))(),a=(()=>(class{constructor(e){this.itemWidth="100%",this.order=0,this.addClass=!0,this.carousel=e}ngOnInit(){this.carousel.addSlide(this),this.itemWidth=`${100/this.carousel.itemsPerSlide}%`}ngOnDestroy(){this.carousel.removeSlide(this)}}))(),o=(()=>{class e{static forRoot(){return{ngModule:e,providers:[]}}}return e})();var g=t("SVse"),m=s.nb({encapsulation:2,styles:[],data:{}});function f(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,0,"li",[],[[2,"active",null]],[[null,"click"]],function(e,i,t){var s=!0;return"click"===i&&(s=!1!==e.component.selectSlide(e.context.index)&&s),s},null,null))],null,function(e,i){e(i,0,0,!0===i.context.$implicit.active)})}function p(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,2,"ol",[["class","carousel-indicators"]],null,null,null,null,null)),(e()(),s.eb(16777216,null,null,1,null,f)),s.ob(2,278528,null,0,g.i,[s.M,s.J,s.q],{ngForOf:[0,"ngForOf"]},null)],function(e,i){e(i,2,0,i.component.indicatorsSlides())},null)}function b(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(e()(),s.Hb(-1,null,["Previous"]))],null,null)}function v(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,3,"a",[["class","left carousel-control carousel-control-prev"],["role","button"],["tabindex","0"]],[[2,"disabled",null]],[[null,"click"]],function(e,i,t){var s=!0;return"click"===i&&(s=!1!==e.component.previousSlide()&&s),s},null,null)),(e()(),s.pb(1,0,null,null,0,"span",[["aria-hidden","true"],["class","icon-prev carousel-control-prev-icon"]],null,null,null,null,null)),(e()(),s.eb(16777216,null,null,1,null,b)),s.ob(3,16384,null,0,g.j,[s.M,s.J],{ngIf:[0,"ngIf"]},null)],function(e,i){e(i,3,0,i.component.isBs4)},function(e,i){var t=i.component;e(i,0,0,0===t.activeSlide&&t.noWrap)})}function S(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,3,"a",[["class","right carousel-control carousel-control-next"],["role","button"],["tabindex","0"]],[[2,"disabled",null]],[[null,"click"]],function(e,i,t){var s=!0;return"click"===i&&(s=!1!==e.component.nextSlide()&&s),s},null,null)),(e()(),s.pb(1,0,null,null,0,"span",[["aria-hidden","true"],["class","icon-next carousel-control-next-icon"]],null,null,null,null,null)),(e()(),s.pb(2,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(e()(),s.Hb(-1,null,["Next"]))],null,function(e,i){var t=i.component;e(i,0,0,t.isLast(t.activeSlide)&&t.noWrap)})}function I(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,11,"div",[["class","carousel slide"],["tabindex","0"]],null,[[null,"mouseenter"],[null,"mouseleave"],[null,"mouseup"],[null,"keydown"],[null,"focusin"],[null,"focusout"]],function(e,i,t){var s=!0,l=e.component;return"mouseenter"===i&&(s=!1!==l.pause()&&s),"mouseleave"===i&&(s=!1!==l.onMouseLeave()&&s),"mouseup"===i&&(s=!1!==l.onMouseUp()&&s),"keydown"===i&&(s=!1!==l.keydownPress(t)&&s),"focusin"===i&&(s=!1!==l.pauseFocusIn()&&s),"focusout"===i&&(s=!1!==l.pauseFocusOut()&&s),s},null,null)),(e()(),s.eb(16777216,null,null,1,null,p)),s.ob(2,16384,null,0,g.j,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(e()(),s.pb(3,0,null,null,4,"div",[["class","carousel-inner"]],null,null,null,null,null)),s.Eb(512,null,g.u,g.v,[s.k,s.r,s.B]),s.ob(5,278528,null,0,g.m,[g.u],{ngStyle:[0,"ngStyle"]},null),s.Db(6,{display:0}),s.Ab(null,0),(e()(),s.eb(16777216,null,null,1,null,v)),s.ob(9,16384,null,0,g.j,[s.M,s.J],{ngIf:[0,"ngIf"]},null),(e()(),s.eb(16777216,null,null,1,null,S)),s.ob(11,16384,null,0,g.j,[s.M,s.J],{ngIf:[0,"ngIf"]},null)],function(e,i){var t=i.component;e(i,2,0,t.showIndicators&&t.slides.length>1);var s=e(i,6,0,t.multilist?"flex":"block");e(i,5,0,s),e(i,9,0,t.slides.length>1),e(i,11,0,t.slides.length>1)},null)}var x=s.nb({encapsulation:2,styles:[],data:{}});function _(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,1,"div",[["class","item"]],[[2,"active",null]],null,null,null,null)),s.Ab(null,0)],null,function(e,i){e(i,0,0,i.component.active)})}let C=(()=>{class e{constructor(){this.certificates=[{id:1,imgUrl:"assets/images/Certificates/html&cssstarter.jpg"},{id:2,imgUrl:"assets/images/Certificates/js-essential.jpg"},{id:3,imgUrl:"assets/images/Certificates/jsAdv.jpg"},{id:4,imgUrl:"assets/images/Certificates/html&cssAdv.jpg"},{id:5,imgUrl:"assets/images/Certificates/bootstrap4.jpg"},{id:6,imgUrl:"assets/images/Certificates/typescript.jpg"},{id:7,imgUrl:"assets/images/Certificates/angular.jpg"},{id:8,imgUrl:"assets/images/Certificates/diploma.jpg"}]}getAll(){return this.certificates}}return e.ngInjectableDef=s.Lb({factory:function(){return new e},token:e,providedIn:"root"}),e})();var y=s.nb({encapsulation:0,styles:[[".certificates-content[_ngcontent-%COMP%]{height:calc(100vh - 5rem)}.certificates-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]{margin-top:3rem;color:#537072}.certificates-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:3.2rem;height:.2rem;background-color:#537072}.certificates-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.5rem;letter-spacing:.2rem;font-weight:500}.certificates-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{font-weight:800}.certificates-content[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify}.certificates-content[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]{margin-top:3rem}.certificates-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%}.certificates-content[_ngcontent-%COMP%]     span{background-color:#8e9b97;height:15px}.certificates-content[_ngcontent-%COMP%]     li{background-color:#2c4a52}"]],data:{}});function P(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,2,"slide",[],[[1,"aria-hidden",0],[2,"active",null],[4,"width",null],[4,"order",null],[2,"item",null],[2,"carousel-item",null]],null,null,_,x)),s.ob(1,245760,null,0,a,[h],null,null),(e()(),s.pb(2,0,null,0,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null))],function(e,i){e(i,1,0)},function(e,i){e(i,0,0,!s.Bb(i,1).active,s.Bb(i,1).active,s.Bb(i,1).itemWidth,s.Bb(i,1).order,s.Bb(i,1).addClass,s.Bb(i,1).addClass),e(i,2,0,s.tb(1,"",i.context.$implicit.imgUrl,""),s.tb(1,"",i.context.$implicit.id,""))})}function O(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,13,"div",[["class","container certificates-content d-flex justify-content-between"]],null,null,null,null,null)),(e()(),s.pb(1,0,null,null,7,"div",[["class","title-content col-3"]],null,null,null,null,null)),(e()(),s.pb(2,0,null,null,0,"div",[["class","line"]],null,null,null,null,null)),(e()(),s.pb(3,0,null,null,3,"h1",[["class","title"]],null,null,null,null,null)),(e()(),s.Hb(-1,null,["My "])),(e()(),s.pb(5,0,null,null,1,"b",[],null,null,null,null,null)),(e()(),s.Hb(-1,null,["Certificates"])),(e()(),s.pb(7,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),s.Hb(-1,null,['Here you can see the certificates I received during the course "Frontend developer" at CyberBionic Systematics training center.'])),(e()(),s.pb(9,0,null,null,4,"div",[["class","carousel col-9"]],null,null,null,null,null)),(e()(),s.pb(10,0,null,null,3,"carousel",[],null,null,null,I,m)),s.ob(11,4374528,null,0,h,[c,s.x],null,null),(e()(),s.eb(16777216,null,0,1,null,P)),s.ob(13,278528,null,0,g.i,[s.M,s.J,s.q],{ngForOf:[0,"ngForOf"]},null)],function(e,i){e(i,13,0,i.component.certificates)},null)}function k(e){return s.Ib(0,[(e()(),s.pb(0,0,null,null,1,"app-certificates",[],null,null,null,O,y)),s.ob(1,114688,null,0,l,[C],null,null)],function(e,i){e(i,1,0)},null)}var W=s.lb("app-certificates",l,k,{},{},[]),M=t("iInd");t.d(i,"CertificatesModuleNgFactory",function(){return V});var V=s.mb(n,[],function(e){return s.yb([s.zb(512,s.j,s.X,[[8,[r.a,W]],[3,s.j],s.v]),s.zb(4608,g.l,g.k,[s.s,[2,g.x]]),s.zb(4608,c,c,[]),s.zb(1073742336,g.b,g.b,[]),s.zb(1073742336,o,o,[]),s.zb(1073742336,M.p,M.p,[[2,M.u],[2,M.l]]),s.zb(1073742336,n,n,[]),s.zb(1024,M.j,function(){return[[{path:"",component:l}]]},[])])})}}]);