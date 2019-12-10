(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-certificates-certificates-module"],{

/***/ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js ***!
  \*****************************************************************************/
/*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
    CarouselConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return CarouselConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    var l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    var out = [];
    /** @type {?} */
    var n = Math.ceil((array.length) / size);
    /** @type {?} */
    var i = 0;
    while (i < n) {
        /** @type {?} */
        var chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["LinkedList"]();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = (/**
         * @param {?} slide
         * @return {?}
         */
        function (slide) { return slide.active; });
        this.makeSlidesConsistent = (/**
         * @param {?} slides
         * @return {?}
         */
        function (slides) {
            slides.forEach((/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */
            function (slide, index) { return slide.item.order = index; }));
        });
        Object.assign(this, config);
    }
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentActiveSlide;
        },
        /** Index of currently displayed slide(started for 0) */
        set: /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this.multilist) {
                return;
            }
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         */
        get: /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle
         * automatically.
         * @return {?}
         */
        function () {
            return this._interval;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        get: /**
         * @return {?}
         */
        function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.singleSlideOffset) {
                _this.indicatorsByChunk = false;
            }
            if (_this.multilist) {
                _this._chunkedSlides = chunkByNumber(_this.mapSlidesAndIndexes(), _this.itemsPerSlide);
                _this.selectInitialSlides();
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            this.activeSlide = 0;
            this.play();
        }
        if (this.multilist && this._slides.length > this.itemsPerSlide) {
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    function (slide) {
        var _this = this;
        /** @type {?} */
        var remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            var nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._select(nextSlideIndex_1);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            var currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }), 0);
        }
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlideFromInterval = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        this.move(Direction.NEXT, force);
    };
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    };
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getFirstVisibleIndex = /**
     * @return {?}
     */
    function () {
        return this.slides.findIndex(this.getActive);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.getLastVisibleIndex = /**
     * @return {?}
     */
    function () {
        return findLastIndex(this.slides, this.getActive);
    };
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.move = /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    function (direction, force) {
        if (force === void 0) { force = false; }
        /** @type {?} */
        var firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        var lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force);
        }
        else {
            this.moveMultilist(direction);
        }
    };
    /**
     * Swith slides by enter, space and arrows keys
     * @internal
     */
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keydownPress = /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            this.nextSlide();
            event.preventDefault();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            this.previousSlide();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            this.nextSlide();
            return;
        }
    };
    /**
     * Play on mouse leave
     * @internal
     */
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.onMouseLeave = /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    function () {
        if (!this.pauseOnFocus) {
            this.play();
        }
    };
    /**
     * Play on mouse up
     * @internal
     */
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.onMouseUp = /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    function () {
        if (!this.pauseOnFocus) {
            this.play();
        }
    };
    /**
     * When slides on focus autoplay is stopped(optional)
     * @internal
     */
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.pauseFocusIn = /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    function () {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * When slides out of focus autoplay is started
     * @internal
     */
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    CarouselComponent.prototype.pauseFocusOut = /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    function () {
        this.play();
    };
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    };
    /**
     * Starts a auto changing of slides
     */
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = /**
     * Starts a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     */
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = /**
     * Stops a auto changing of slides
     * @return {?}
     */
    function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     */
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    function () {
        return this._slides.findIndex(this.getActive);
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines, whether the specified index is first in collection
     * @param index
     */
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isFirst = /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index === 0;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.indicatorsSlides = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.slides.filter((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        function (slide, index) { return !_this.indicatorsByChunk || index % _this.itemsPerSlide === 0; }));
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.selectInitialSlides = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                var slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._slidesWithIndexes, slidesToAppend).slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active = true; }));
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    };
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     */
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    function (direction, force) {
        /** @type {?} */
        var nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return undefined;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.mapSlidesAndIndexes = /**
     * @private
     * @return {?}
     */
    function () {
        return this.slides
            .slice()
            .map((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        function (slide, index) {
            return {
                index: index,
                item: slide
            };
        }));
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlideRange = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            var startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            var endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active = true; }));
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectRangeByNestedIndex = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var selectedRange = this._chunkedSlides
            .map((/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */
        function (slidesList, i) {
            return {
                index: i,
                list: slidesList
            };
        }))
            .find((/**
         * @param {?} slidesList
         * @return {?}
         */
        function (slidesList) {
            return slidesList.list.find((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index === index; })) !== undefined;
        }));
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((/**
         * @param {?} slide
         * @return {?}
         */
        function (slide) {
            slide.item.active = true;
        }));
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isIndexOnTheEdges = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isIndexInRange = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            var visibleIndexes = this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index; }));
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.hideSlides = /**
     * @private
     * @return {?}
     */
    function () {
        this.slides.forEach((/**
         * @param {?} slide
         * @return {?}
         */
        function (slide) { return slide.active = false; }));
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.isVisibleSlideListLast = /**
     * @private
     * @return {?}
     */
    function () {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.isVisibleSlideListFirst = /**
     * @private
     * @return {?}
     */
    function () {
        return this._currentVisibleSlidesIndex === 0;
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.moveSliderByOneItem = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /** @type {?} */
        var firstVisibleIndex;
        /** @type {?} */
        var lastVisibleIndex;
        /** @type {?} */
        var indexToHide;
        /** @type {?} */
        var indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            this._slides.get(indexToHide).active = false;
            this._slides.get(indexToShow).active = true;
            /** @type {?} */
            var slidesToReorder = this.mapSlidesAndIndexes().filter((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active; }));
            this.makeSlidesConsistent(slidesToReorder);
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            var displayedIndex = void 0;
            firstVisibleIndex = this._slidesWithIndexes[0].index;
            lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
            if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex)
                    ? 0
                    : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                    index: displayedIndex,
                    item: this._slides.get(displayedIndex)
                });
            }
            else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex)
                    ? this._slides.length - 1
                    : firstVisibleIndex - 1;
                this._slidesWithIndexes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }], this._slidesWithIndexes);
            }
            this.hideSlides();
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active = true; }));
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this.slideRangeChange.emit(this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index; })));
        }
    };
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.moveMultilist = /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else {
                if (direction === Direction.NEXT) {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                        ? 0
                        : this._currentVisibleSlidesIndex + 1;
                }
                else {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                        ? this._chunkedSlides.length - 1
                        : this._currentVisibleSlidesIndex - 1;
                }
            }
            this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.item.active = true; }));
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    };
    /**
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.getVisibleIndexes = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index; }));
        }
        else {
            return this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            function (slide) { return slide.index; }));
        }
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     */
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            var currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        var nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     */
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.resetTimer();
        /** @type {?} */
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return setInterval((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var nInterval = +_this.interval;
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (_this.isPlaying &&
                            !isNaN(_this.interval) &&
                            nInterval > 0 &&
                            _this.slides.length) {
                            _this.nextSlideFromInterval();
                        }
                        else {
                            _this.pause();
                        }
                    }));
                }), interval);
            }));
        }
    };
    Object.defineProperty(CarouselComponent.prototype, "multilist", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemsPerSlide > 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Stops loop of auto changing of slides
     */
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    CarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'carousel',
                    template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"onMouseLeave()\" (mouseup)=\"onMouseUp()\" class=\"carousel slide\" (keydown)=\"keydownPress($event)\" (focusin)=\"pauseFocusIn()\" (focusout)=\"pauseFocusOut()\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slidez of indicatorsSlides(); let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\"><ng-content></ng-content></div>\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: CarouselConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CarouselComponent.propDecorators = {
        noWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        noPause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pauseOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        indicatorsByChunk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        itemsPerSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        singleSlideOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        activeSlideChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        slideRangeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        activeSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        startFromIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return CarouselComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
        this.itemWidth = 100 / this.carousel.itemsPerSlide + "%";
    };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[attr.aria-hidden]': '!active'
                    }
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent }
    ]; };
    SlideComponent.propDecorators = {
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        itemWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.width',] }],
        order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['style.order',] }],
        addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.item',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.carousel-item',] }]
    };
    return SlideComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    CarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    declarations: [SlideComponent, CarouselComponent],
                    exports: [SlideComponent, CarouselComponent],
                    providers: [CarouselConfig]
                },] }
    ];
    return CarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-bootstrap-carousel.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/certificates/certificates.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/certificates/certificates.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid wrapper\">\r\n    <div class=\"main-container container d-flex justify-content-between\">\r\n        <div class=\"nav-panel col-2 d-flex flex-wrap\">\r\n            <div class=\"top col-12 d-flex justify-content-center align-items-center\">\r\n                <div class=\"arrow_up d-flex\" (click)=\"changeCertificate(-1)\" [ngClass]=\"{'d-none': currentCertificate === certificates[0],\r\n                                'd-flex': currentCertificate != certificates[0]}\">\r\n                    <i class=\"arrow fas fa-arrow-up\"></i>\r\n                </div>\r\n            </div>\r\n            <div class=\"center col-12 d-flex flex-column justify-content-center align-items-center\">\r\n                <div class=\"circle\" [ngClass]=\"{'current': currentCertificate.id === 1}\"></div>\r\n                <div class=\"circle\" [ngClass]=\"{'current': currentCertificate.id === 2}\"></div>\r\n                <div class=\"circle\" [ngClass]=\"{'current': currentCertificate.id === 3}\"></div>\r\n                <div class=\"circle\" [ngClass]=\"{'current': currentCertificate.id === 4}\"></div>\r\n                <div class=\"circle\" [ngClass]=\"{'current': currentCertificate.id === 5}\"></div>\r\n                <div class=\"circle\" [ngClass]=\"{'current': currentCertificate.id === 6}\"></div>\r\n                <div class=\"circle\" [ngClass]=\"{'current': currentCertificate.id === 7}\"></div>\r\n                <div class=\"circle\" [ngClass]=\"{'current': currentCertificate.id === 8}\"></div>\r\n            </div>\r\n            <div class=\"bottom col-12 d-flex justify-content-center align-items-center\">\r\n                <div class=\"arrow d-flex\" (click)=\"changeCertificate(+1)\" [ngClass]=\"{'d-none': currentCertificate === certificates[certificates.length - 1],\r\n                                'd-flex': currentCertificate != certificates[certificates.length - 1]}\">\r\n                    <i class=\"arrow-up fas fa-arrow-down\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"certificates_content col-10 d-flex flex-wrap\">\r\n            <!-- <div class=\"certificates_title col-12 d-flex align-items-center\">\r\n                <h1>{{currentCertificate.title}}</h1>\r\n            </div> -->\r\n            <div class=\"certificates_img col-12\">\r\n                <ng-container [ngSwitch]=\"currentCertificate.id\">\r\n                    <div *ngSwitchCase=\"1\">\r\n                        <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n                    </div>\r\n                    <div *ngSwitchCase=\"2\">\r\n                        <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n                    </div>\r\n                    <div *ngSwitchCase=\"3\">\r\n                        <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n                    </div>\r\n                    <div *ngSwitchCase=\"4\">\r\n                        <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n                    </div>\r\n                    <div *ngSwitchCase=\"5\">\r\n                        <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n                    </div>\r\n                    <div *ngSwitchCase=\"6\">\r\n                        <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n                    </div>\r\n                    <div *ngSwitchCase=\"7\">\r\n                        <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n                    </div>\r\n                    <div *ngSwitchCase=\"8\">\r\n                        <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"test\">\r\n        <ng-container [ngSwitch]=\"currentCertificate.id\">\r\n            <div *ngSwitchCase=\"1\">\r\n                <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n            </div>\r\n            <div *ngSwitchCase=\"2\">\r\n                <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n            </div>\r\n            <div *ngSwitchCase=\"3\">\r\n                <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n            </div>\r\n            <div *ngSwitchCase=\"4\">\r\n                <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n            </div>\r\n            <div *ngSwitchCase=\"5\">\r\n                <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n            </div>\r\n            <div *ngSwitchCase=\"6\">\r\n                <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n            </div>\r\n            <div *ngSwitchCase=\"7\">\r\n                <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n            </div>\r\n            <div *ngSwitchCase=\"8\">\r\n                <img src=\"{{currentCertificate.image}}\" alt=\"\">\r\n            </div>\r\n        </ng-container>\r\n        \r\n    </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/certificates/certificates.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/certificates/certificates.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  height: calc(100vh - 5rem);\n  background-color: #F8F8F8;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  overflow-y: auto;\n}\n.wrapper .main-container {\n  padding: 0;\n  height: 40rem;\n  outline: 0.2rem solid #2C4A52;\n  box-shadow: 0 0 1rem 0 #2C4A52;\n}\n.wrapper .main-container .nav-panel {\n  padding: 0;\n  height: 100%;\n  background-color: #537072;\n  border-right: 0.2rem solid #2C4A52;\n}\n.wrapper .main-container .nav-panel .top {\n  height: 15%;\n}\n.wrapper .main-container .nav-panel .bottom {\n  height: 15%;\n}\n.wrapper .main-container .nav-panel .arrow {\n  padding: 0.9rem;\n  text-align: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  color: #f4ebdb;\n  border: 2px solid #f4ebdb;\n}\n.wrapper .main-container .nav-panel .arrow:hover {\n  cursor: pointer;\n}\n.wrapper .main-container .nav-panel .center {\n  height: 70%;\n}\n.wrapper .main-container .nav-panel .center .circle {\n  width: 0.4rem;\n  height: 0.4rem;\n  background-color: #f4ebdb;\n  border-radius: 50%;\n  margin: 0.3rem;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.wrapper .main-container .nav-panel .center .current {\n  width: 0.6rem;\n  height: 1rem;\n  border-radius: 50%;\n}\n.wrapper .main-container .certificates_content {\n  padding: 0;\n  height: 100%;\n}\n.wrapper .main-container .certificates_content .certificates_img {\n  overflow-y: auto;\n}\n.wrapper .main-container .certificates_content .certificates_img img {\n  width: 100%;\n  height: 40rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VydGlmaWNhdGVzL0Q6XFxJVFxcTXlfcHJvamVjdHNcXEZpcnN0IEFuZ3VsYXIgQXBwXFxteUZpcnN0QXBwL3NyY1xcYXBwXFxjZXJ0aWZpY2F0ZXNcXGNlcnRpZmljYXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2VydGlmaWNhdGVzL0Q6XFxJVFxcTXlfcHJvamVjdHNcXEZpcnN0IEFuZ3VsYXIgQXBwXFxteUZpcnN0QXBwL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jZXJ0aWZpY2F0ZXMvY2VydGlmaWNhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBQUE7RUFDQSx5QkNlZ0I7RURkaEIsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FFREY7QUZFRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBRUFKO0FGSUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQ0phO0VES2Isa0NBQUE7QUVITjtBRklNO0VBQ0UsV0FBQTtBRUZSO0FGS007RUFDRSxXQUFBO0FFSFI7QUZNTTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ2xCUTtFRG1CUix5QkFBQTtBRUpWO0FGS1U7RUFDRSxlQUFBO0FFSFo7QUZNTTtFQUNFLFdBQUE7QUVKUjtBRk1RO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkM5QlE7RUQrQlIsa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBRUpWO0FGTVE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FFSlY7QUZRSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FFTk47QUZRTTtFQUNFLGdCQUFBO0FFTlI7QUZPUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FFTFYiLCJmaWxlIjoic3JjL2FwcC9jZXJ0aWZpY2F0ZXMvY2VydGlmaWNhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzXCI7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0pO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhbGFiYXN0ZXItY29sb3I7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAubWFpbi1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogNDByZW07XHJcbiAgICBvdXRsaW5lOiAuMnJlbSBzb2xpZCAkcGlja2xlZC1ibHVld29vZC1jb2xvcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJHBpY2tsZWQtYmx1ZXdvb2QtY29sb3I7XHJcblxyXG4gICAgLy8gbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAubmF2LXBhbmVsIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAvLyBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGN1dHR5LXNhcmstY29sb3I7XHJcbiAgICAgIGJvcmRlci1yaWdodDogLjJyZW0gc29saWQgJHBpY2tsZWQtYmx1ZXdvb2QtY29sb3I7XHJcbiAgICAgIC50b3Age1xyXG4gICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgIC8vIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJvdHRvbSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgLy8gb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgfVxyXG4gICAgICAuYXJyb3cge1xyXG4gICAgICAgICAgcGFkZGluZzogLjlyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGNvbG9yOiAkcGFyY2htZW50LWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHBhcmNobWVudC1jb2xvcjtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAuY2VudGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgICAgICAvLyBvdXRsaW5lOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgIC5jaXJjbGUge1xyXG4gICAgICAgICAgd2lkdGg6IC40cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAuNHJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYXJjaG1lbnQtY29sb3I7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW46IC4zcmVtO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXJyZW50IHtcclxuICAgICAgICAgIHdpZHRoOiAuNnJlbTtcclxuICAgICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jZXJ0aWZpY2F0ZXNfY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLy8gb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgIC5jZXJ0aWZpY2F0ZXNfaW1nIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNDByZW07XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIC5jZXJ0aWZpY2F0ZXNfdGl0bGUge1xyXG4gICAgLy8gICBoZWlnaHQ6IDE1JTtcclxuICAgIC8vICAgLy8gb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcclxuICAgIC8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGN1dHR5LXNhcmstY29sb3I7XHJcbiAgICAvLyAgIGNvbG9yOiAkcGFyY2htZW50LWNvbG9yO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgfVxyXG59XHJcbiIsIiRmYS1mb250LXBhdGg6IFwibm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzXCI7XHJcbiRmb250LWljb25zOiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XHJcblxyXG4vLyBjb2xvcnMgLSBwbGVhc2UgdXNlIGh0dHA6Ly9jaGlyLmFnL3Byb2plY3RzL25hbWUtdGhhdC1jb2xvci8gdG8gZ2V0IGNvbG9yIG5hbWVcclxuJG1pbmUtc2hhZnQtY29sb3I6ICMyNjI2MjY7XHJcbiR0dW5kb3JhLWNvbG9yOiAjNDc0NzQ3O1xyXG4kYWx0by1jb2xvcjogI0RERERERDtcclxuJHdoaXRlLWNvbG9yOiAjRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiRtYWxpYnUtY29sb3I6ICM5MENBRjk7XHJcbiRjZXJ1bGVhbi1jb2xvcjogIzAwYTNlMTtcclxuJGJvdWxkZXItY29sb3I6ICM3ODc4Nzg7XHJcbiRtZXJjdXJ5LWNvbG9yOiAjRTNFM0UzO1xyXG5cclxuXHJcbiRwaWNrbGVkLWJsdWV3b29kLWNvbG9yOiAjMkM0QTUyO1xyXG4kY3V0dHktc2Fyay1jb2xvcjogIzUzNzA3MjtcclxuJG1hbnRsZS1jb2xvcjogIzhlOWI5NztcclxuJHBhcmNobWVudC1jb2xvcjogI2Y0ZWJkYjtcclxuJGFsYWJhc3Rlci1jb2xvcjogI0Y4RjhGODtcclxuXHJcbi8vZm9udCBzaXplc1xyXG4kZm9udC1zaXplLXNtOiAuNzByZW07XHJcbiRmb250LXNpemUtcmVndWxhcjogLjg3NXJlbTtcclxuJGZvbnQtc2l6ZS1tZDogMXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogMS4xMjVyZW07XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07XHJcbiRmb250LXNpemUteHhsOiAxLjM3NXJlbTtcclxuJGZvbnQtc2l6ZS14eHhsOiAxLjVyZW07XHJcblxyXG5cclxuLy8gb3RoZXJzXHJcbiRoZWFkZXItaGVpZ2h0OiA1cmVtO1xyXG4kZm9vdGVyLWhlaWdodDogNnJlbTtcclxuJGxpbmUtaGVpZ2h0OiAuMnJlbTtcclxuXHJcbiIsIi53cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNXJlbSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi53cmFwcGVyIC5tYWluLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNDByZW07XG4gIG91dGxpbmU6IDAuMnJlbSBzb2xpZCAjMkM0QTUyO1xuICBib3gtc2hhZG93OiAwIDAgMXJlbSAwICMyQzRBNTI7XG59XG4ud3JhcHBlciAubWFpbi1jb250YWluZXIgLm5hdi1wYW5lbCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNzA3MjtcbiAgYm9yZGVyLXJpZ2h0OiAwLjJyZW0gc29saWQgIzJDNEE1Mjtcbn1cbi53cmFwcGVyIC5tYWluLWNvbnRhaW5lciAubmF2LXBhbmVsIC50b3Age1xuICBoZWlnaHQ6IDE1JTtcbn1cbi53cmFwcGVyIC5tYWluLWNvbnRhaW5lciAubmF2LXBhbmVsIC5ib3R0b20ge1xuICBoZWlnaHQ6IDE1JTtcbn1cbi53cmFwcGVyIC5tYWluLWNvbnRhaW5lciAubmF2LXBhbmVsIC5hcnJvdyB7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZjRlYmRiO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjRlYmRiO1xufVxuLndyYXBwZXIgLm1haW4tY29udGFpbmVyIC5uYXYtcGFuZWwgLmFycm93OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndyYXBwZXIgLm1haW4tY29udGFpbmVyIC5uYXYtcGFuZWwgLmNlbnRlciB7XG4gIGhlaWdodDogNzAlO1xufVxuLndyYXBwZXIgLm1haW4tY29udGFpbmVyIC5uYXYtcGFuZWwgLmNlbnRlciAuY2lyY2xlIHtcbiAgd2lkdGg6IDAuNHJlbTtcbiAgaGVpZ2h0OiAwLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGViZGI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwLjNyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLndyYXBwZXIgLm1haW4tY29udGFpbmVyIC5uYXYtcGFuZWwgLmNlbnRlciAuY3VycmVudCB7XG4gIHdpZHRoOiAwLjZyZW07XG4gIGhlaWdodDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLndyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jZXJ0aWZpY2F0ZXNfY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53cmFwcGVyIC5tYWluLWNvbnRhaW5lciAuY2VydGlmaWNhdGVzX2NvbnRlbnQgLmNlcnRpZmljYXRlc19pbWcge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLndyYXBwZXIgLm1haW4tY29udGFpbmVyIC5jZXJ0aWZpY2F0ZXNfY29udGVudCAuY2VydGlmaWNhdGVzX2ltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/certificates/certificates.component.ts":
/*!********************************************************!*\
  !*** ./src/app/certificates/certificates.component.ts ***!
  \********************************************************/
/*! exports provided: CertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function() { return CertificatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_classes_certificate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/classes/certificate */ "./src/app/shared/classes/certificate.ts");



var MyCertificate = [
    new _shared_classes_certificate__WEBPACK_IMPORTED_MODULE_2__["Certificate"](1, 'HTML5&CSS3 Starter', 'assets/images/Certificates/html&cssstarter.jpg'),
    new _shared_classes_certificate__WEBPACK_IMPORTED_MODULE_2__["Certificate"](2, 'Javascript Essential', 'assets/images/Certificates/js-essential.jpg'),
    new _shared_classes_certificate__WEBPACK_IMPORTED_MODULE_2__["Certificate"](3, 'Javascript Advanced', 'assets/images/Certificates/jsAdv.jpg'),
    new _shared_classes_certificate__WEBPACK_IMPORTED_MODULE_2__["Certificate"](4, 'HTML5&CSS3 Advanced', 'assets/images/Certificates/html&cssAdv.jpg'),
    new _shared_classes_certificate__WEBPACK_IMPORTED_MODULE_2__["Certificate"](5, 'Bootstrap 4', 'assets/images/Certificates/bootstrap4.jpg'),
    new _shared_classes_certificate__WEBPACK_IMPORTED_MODULE_2__["Certificate"](6, 'Typescript Fundamentals', 'assets/images/Certificates/typescript.jpg'),
    new _shared_classes_certificate__WEBPACK_IMPORTED_MODULE_2__["Certificate"](7, 'Angular Essential', 'assets/images/Certificates/angular.jpg'),
    new _shared_classes_certificate__WEBPACK_IMPORTED_MODULE_2__["Certificate"](8, 'Frontend Developer Diploma', 'assets/images/Certificates/diploma.jpg')
];
var CertificatesComponent = /** @class */ (function () {
    function CertificatesComponent() {
        this.certificates = MyCertificate;
        this.currentCertificate = this.certificates[0];
    }
    CertificatesComponent.prototype.ngOnInit = function () {
        // this.certificates = this.certificatesService.getAll();
    };
    CertificatesComponent.prototype.changeCertificate = function (param) {
        var _this = this;
        var index = this.certificates.findIndex(function (step) { return step === _this.currentCertificate; });
        if (this.currentCertificate != null && this.currentCertificate !== undefined) {
            this.currentCertificate = this.certificates[index + param];
        }
        if (param === -1 && index === 0) {
            this.currentCertificate = this.certificates[0];
        }
        if (param === +1 && index === this.certificates.length - 1) {
            this.currentCertificate = this.certificates[this.certificates.length - 1];
        }
    };
    CertificatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certificates',
            template: __webpack_require__(/*! raw-loader!./certificates.component.html */ "./node_modules/raw-loader/index.js!./src/app/certificates/certificates.component.html"),
            styles: [__webpack_require__(/*! ./certificates.component.scss */ "./src/app/certificates/certificates.component.scss")]
        })
    ], CertificatesComponent);
    return CertificatesComponent;
}());



/***/ }),

/***/ "./src/app/certificates/certificates.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/certificates/certificates.module.ts ***!
  \*****************************************************/
/*! exports provided: CertificatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesModule", function() { return CertificatesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _certificates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certificates.component */ "./src/app/certificates/certificates.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");






var routes = [
    { path: '', component: _certificates_component__WEBPACK_IMPORTED_MODULE_4__["CertificatesComponent"] }
];
var CertificatesModule = /** @class */ (function () {
    function CertificatesModule() {
    }
    CertificatesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_certificates_component__WEBPACK_IMPORTED_MODULE_4__["CertificatesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], CertificatesModule);
    return CertificatesModule;
}());



/***/ }),

/***/ "./src/app/shared/classes/certificate.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/classes/certificate.ts ***!
  \***********************************************/
/*! exports provided: Certificate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Certificate", function() { return Certificate; });
var Certificate = /** @class */ (function () {
    function Certificate(certificateId, certificateTitle, certificateImage) {
        this.id = certificateId;
        this.title = certificateTitle;
        this.image = certificateImage;
    }
    Certificate.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return Certificate;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-certificates-certificates-module-es5.js.map