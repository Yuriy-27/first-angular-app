(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-courses-courses-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/courses/courses-details/courses-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courses/courses-details/courses-details.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mb-5\">\r\n    <div *ngIf=\"activeCourse\">\r\n        <div class=\"title mt-4\">{{activeCourse.name}}</div>\r\n        <div class=\"description mt-3\">{{activeCourse.description}}</div>\r\n        <div class=\"lessons-number mt-1 mb-3\">Lessons: {{activeCourse.lessons.length}}</div>\r\n        <div class=\"lesson-title alert  col-6\" *ngFor=\"let item of activeCourse.lessons; let i = index\">\r\n            {{i+1}}. {{item}}\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/courses/courses.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/courses/courses.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"courses-content row\">\r\n        <div class=\"courses-list\" [ngClass]=\"{'col-4': courseSelected, 'col-12': !courseSelected}\">\r\n            <div class=\"line mt-3 mb-2\"></div>\r\n            <h1>My <span>Courses</span></h1>\r\n            <div *ngFor=\"let item of coursesList\">\r\n                <div class=\"media d-flex\">\r\n                    <div class='image mt-3 mr-3' [style.background-image]=\"'url(' + item.img + ')'\"></div>\r\n                    <div class=\"media-body mt-3\">\r\n                        <h5 class=\"mt-0\">{{item.name}}</h5>\r\n                        <p class=\"description\" [ngClass]=\"{'d-none': courseSelected}\">{{item.description}}</p>\r\n                        <a [routerLink]='[\"/courses\", item.id]' routerLinkActive='active' class=\"nav-btn btn\">Learn more...</a>    \r\n                    </div>  \r\n                </div>\r\n                <hr>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"courseSelected\" class=\"courses-details col-8\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/courses/courses-details/courses-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/courses/courses-details/courses-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #537072;\n}\n\n.description {\n  text-align: justify;\n}\n\n.lessons-number {\n  font-weight: 500;\n}\n\n.lesson-title {\n  border: 0.1rem solid #537072;\n  border-radius: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9jb3Vyc2VzLWRldGFpbHMvRDpcXElUXFxNeV9wcm9qZWN0c1xcRmlyc3QgQW5ndWxhciBBcHBcXG15Rmlyc3RBcHAvc3JjXFxhcHBcXGNvdXJzZXNcXGNvdXJzZXMtZGV0YWlsc1xcY291cnNlcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3Vyc2VzL2NvdXJzZXMtZGV0YWlscy9EOlxcSVRcXE15X3Byb2plY3RzXFxGaXJzdCBBbmd1bGFyIEFwcFxcbXlGaXJzdEFwcC9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY291cnNlcy9jb3Vyc2VzLWRldGFpbHMvY291cnNlcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJDeUJhO0VEeEJiLGdCQUFBO0VBQ0EsY0NXZTtBQ1puQjs7QUZJQTtFQUNJLG1CQUFBO0FFREo7O0FGSUE7RUFDSSxnQkFBQTtBRURKOztBRklBO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtBRURKIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy9jb3Vyc2VzLWRldGFpbHMvY291cnNlcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4eGw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICRjdXR0eS1zYXJrLWNvbG9yO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmxlc3NvbnMtbnVtYmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5sZXNzb24tdGl0bGUge1xyXG4gICAgYm9yZGVyOiAuMXJlbSBzb2xpZCAkY3V0dHktc2Fyay1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtOyBcclxufSIsIiRmYS1mb250LXBhdGg6IFwibm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzXCI7XHJcbiRmb250LWljb25zOiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XHJcblxyXG4vLyBjb2xvcnMgLSBwbGVhc2UgdXNlIGh0dHA6Ly9jaGlyLmFnL3Byb2plY3RzL25hbWUtdGhhdC1jb2xvci8gdG8gZ2V0IGNvbG9yIG5hbWVcclxuJG1pbmUtc2hhZnQtY29sb3I6ICMyNjI2MjY7XHJcbiR0dW5kb3JhLWNvbG9yOiAjNDc0NzQ3O1xyXG4kYWx0by1jb2xvcjogI0RERERERDtcclxuJHdoaXRlLWNvbG9yOiAjRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiRtYWxpYnUtY29sb3I6ICM5MENBRjk7XHJcbiRjZXJ1bGVhbi1jb2xvcjogIzAwYTNlMTtcclxuJGJvdWxkZXItY29sb3I6ICM3ODc4Nzg7XHJcbiRtZXJjdXJ5LWNvbG9yOiAjRTNFM0UzO1xyXG5cclxuXHJcbiRwaWNrbGVkLWJsdWV3b29kLWNvbG9yOiAjMkM0QTUyO1xyXG4kY3V0dHktc2Fyay1jb2xvcjogIzUzNzA3MjtcclxuJG1hbnRsZS1jb2xvcjogIzhlOWI5NztcclxuJHBhcmNobWVudC1jb2xvcjogI2Y0ZWJkYjtcclxuJGFsYWJhc3Rlci1jb2xvcjogI0Y4RjhGODtcclxuXHJcbi8vZm9udCBzaXplc1xyXG4kZm9udC1zaXplLXNtOiAuNzByZW07XHJcbiRmb250LXNpemUtcmVndWxhcjogLjg3NXJlbTtcclxuJGZvbnQtc2l6ZS1tZDogMXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogMS4xMjVyZW07XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07XHJcbiRmb250LXNpemUteHhsOiAxLjM3NXJlbTtcclxuJGZvbnQtc2l6ZS14eHhsOiAxLjVyZW07XHJcblxyXG5cclxuLy8gb3RoZXJzXHJcbiRoZWFkZXItaGVpZ2h0OiA1cmVtO1xyXG4kZm9vdGVyLWhlaWdodDogNnJlbTtcclxuJGxpbmUtaGVpZ2h0OiAuMnJlbTtcclxuXHJcbiIsIi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzUzNzA3Mjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmxlc3NvbnMtbnVtYmVyIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxlc3Nvbi10aXRsZSB7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICM1MzcwNzI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/courses/courses-details/courses-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/courses/courses-details/courses-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: CoursesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesDetailsComponent", function() { return CoursesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "./src/app/shared/services/courses.service.ts");
/* harmony import */ var src_app_shared_base_subscriptions_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/base/subscriptions-manager */ "./src/app/shared/base/subscriptions-manager.ts");





let CoursesDetailsComponent = class CoursesDetailsComponent extends src_app_shared_base_subscriptions_manager__WEBPACK_IMPORTED_MODULE_4__["SubscriptionsManager"] {
    constructor(coursesService, router, route) {
        super();
        this.coursesService = coursesService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        // tslint:disable-next-line:no-string-literal
        this.subs = this.route.params.subscribe(params => {
            this.activeCourse = this.coursesService.getOne(+params.id);
        });
    }
};
CoursesDetailsComponent.ctorParameters = () => [
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CoursesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-courses-details',
        template: __webpack_require__(/*! raw-loader!./courses-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/courses/courses-details/courses-details.component.html"),
        styles: [__webpack_require__(/*! ./courses-details.component.scss */ "./src/app/courses/courses-details/courses-details.component.scss")]
    })
], CoursesDetailsComponent);



/***/ }),

/***/ "./src/app/courses/courses.component.scss":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".courses-list {\n  background-color: #F8F8F8;\n  overflow-y: auto;\n  height: calc(100vh - 5rem);\n}\n.courses-list .line {\n  width: 2.6rem;\n  height: 0.2rem;\n  background-color: #537072;\n}\n.courses-list h1 {\n  font-size: 1.5rem;\n}\n.courses-list h1 span {\n  font-weight: 800;\n}\n.courses-list .image {\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 13rem;\n  height: 7rem;\n}\n.courses-list .description {\n  text-align: justify;\n}\n.courses-list .btn {\n  border: 0.1rem solid #537072;\n  border-radius: 0.5rem;\n  color: #537072;\n}\n.courses-list .btn:hover, .courses-list .btn.active {\n  background-color: #8e9b97;\n  color: #f4ebdb;\n}\n.courses-details {\n  background-color: #E3E3E3;\n  height: calc(100vh - 5rem);\n  overflow-y: auto;\n}\n.invisible {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9EOlxcSVRcXE15X3Byb2plY3RzXFxGaXJzdCBBbmd1bGFyIEFwcFxcbXlGaXJzdEFwcC9zcmNcXGFwcFxcY291cnNlc1xcY291cnNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY291cnNlcy9EOlxcSVRcXE15X3Byb2plY3RzXFxGaXJzdCBBbmd1bGFyIEFwcFxcbXlGaXJzdEFwcC9zcmNcXGFzc2V0c1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0kseUJDZWM7RURkZCxnQkFBQTtFQUNBLDBCQUFBO0FFRko7QUZHSTtFQUNJLGFBQUE7RUFDQSxjQ3lCTTtFRHhCTix5QkNNVztBQ1BuQjtBRkdJO0VBQ0ksaUJDZVM7QUNoQmpCO0FGRVE7RUFDSSxnQkFBQTtBRUFaO0FGR0k7RUFDSSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRURSO0FGR0k7RUFDSSxtQkFBQTtBRURSO0FGR0k7RUFDSSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0NmVztBQ2NuQjtBRkVRO0VBRUUseUJDakJLO0VEa0JMLGNDakJRO0FDZ0JsQjtBRk1BO0VBQ0kseUJDN0JZO0VEOEJaLDBCQUFBO0VBQ0EsZ0JBQUE7QUVISjtBRk1BO0VBQ0ksYUFBQTtBRUhKIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5cclxuLmNvdXJzZXMtbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhbGFiYXN0ZXItY29sb3I7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0pO1xyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiAyLjZyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGN1dHR5LXNhcmstY29sb3I7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4eGw7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltYWdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICBib3JkZXI6IC4xcmVtIHNvbGlkICRjdXR0eS1zYXJrLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkY3V0dHktc2Fyay1jb2xvcjtcclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYW50bGUtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJHBhcmNobWVudC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb3Vyc2VzLWRldGFpbHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVyY3VyeS1jb2xvcjtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5pbnZpc2libGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCIkZmEtZm9udC1wYXRoOiBcIm5vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250c1wiO1xyXG4kZm9udC1pY29uczogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xyXG5cclxuLy8gY29sb3JzIC0gcGxlYXNlIHVzZSBodHRwOi8vY2hpci5hZy9wcm9qZWN0cy9uYW1lLXRoYXQtY29sb3IvIHRvIGdldCBjb2xvciBuYW1lXHJcbiRtaW5lLXNoYWZ0LWNvbG9yOiAjMjYyNjI2O1xyXG4kdHVuZG9yYS1jb2xvcjogIzQ3NDc0NztcclxuJGFsdG8tY29sb3I6ICNEREREREQ7XHJcbiR3aGl0ZS1jb2xvcjogI0ZGRkZGRjtcclxuJGJsYWNrLWNvbG9yOiAjMDAwMDAwO1xyXG4kbWFsaWJ1LWNvbG9yOiAjOTBDQUY5O1xyXG4kY2VydWxlYW4tY29sb3I6ICMwMGEzZTE7XHJcbiRib3VsZGVyLWNvbG9yOiAjNzg3ODc4O1xyXG4kbWVyY3VyeS1jb2xvcjogI0UzRTNFMztcclxuXHJcblxyXG4kcGlja2xlZC1ibHVld29vZC1jb2xvcjogIzJDNEE1MjtcclxuJGN1dHR5LXNhcmstY29sb3I6ICM1MzcwNzI7XHJcbiRtYW50bGUtY29sb3I6ICM4ZTliOTc7XHJcbiRwYXJjaG1lbnQtY29sb3I6ICNmNGViZGI7XHJcbiRhbGFiYXN0ZXItY29sb3I6ICNGOEY4Rjg7XHJcblxyXG4vL2ZvbnQgc2l6ZXNcclxuJGZvbnQtc2l6ZS1zbTogLjcwcmVtO1xyXG4kZm9udC1zaXplLXJlZ3VsYXI6IC44NzVyZW07XHJcbiRmb250LXNpemUtbWQ6IDFyZW07XHJcbiRmb250LXNpemUtbGc6IDEuMTI1cmVtO1xyXG4kZm9udC1zaXplLXhsOiAxLjI1cmVtO1xyXG4kZm9udC1zaXplLXh4bDogMS4zNzVyZW07XHJcbiRmb250LXNpemUteHh4bDogMS41cmVtO1xyXG5cclxuXHJcbi8vIG90aGVyc1xyXG4kaGVhZGVyLWhlaWdodDogNXJlbTtcclxuJGZvb3Rlci1oZWlnaHQ6IDZyZW07XHJcbiRsaW5lLWhlaWdodDogLjJyZW07XHJcblxyXG4iLCIuY291cnNlcy1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNXJlbSk7XG59XG4uY291cnNlcy1saXN0IC5saW5lIHtcbiAgd2lkdGg6IDIuNnJlbTtcbiAgaGVpZ2h0OiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzcwNzI7XG59XG4uY291cnNlcy1saXN0IGgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uY291cnNlcy1saXN0IGgxIHNwYW4ge1xuICBmb250LXdlaWdodDogODAwO1xufVxuLmNvdXJzZXMtbGlzdCAuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTNyZW07XG4gIGhlaWdodDogN3JlbTtcbn1cbi5jb3Vyc2VzLWxpc3QgLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb3Vyc2VzLWxpc3QgLmJ0biB7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICM1MzcwNzI7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgY29sb3I6ICM1MzcwNzI7XG59XG4uY291cnNlcy1saXN0IC5idG46aG92ZXIsIC5jb3Vyc2VzLWxpc3QgLmJ0bi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGU5Yjk3O1xuICBjb2xvcjogI2Y0ZWJkYjtcbn1cblxuLmNvdXJzZXMtZGV0YWlscyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDVyZW0pO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaW52aXNpYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/courses.service */ "./src/app/shared/services/courses.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_base_subscriptions_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/base/subscriptions-manager */ "./src/app/shared/base/subscriptions-manager.ts");





let CoursesComponent = class CoursesComponent extends _shared_base_subscriptions_manager__WEBPACK_IMPORTED_MODULE_4__["SubscriptionsManager"] {
    constructor(coursesService, router, route) {
        super();
        this.coursesService = coursesService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.coursesList = this.coursesService.getAll();
        this.subs = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                this.courseSelected = !!this.route.firstChild.snapshot.params.id;
            }
        });
    }
};
CoursesComponent.ctorParameters = () => [
    { type: _shared_services_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-courses',
        template: __webpack_require__(/*! raw-loader!./courses.component.html */ "./node_modules/raw-loader/index.js!./src/app/courses/courses.component.html"),
        styles: [__webpack_require__(/*! ./courses.component.scss */ "./src/app/courses/courses.component.scss")]
    })
], CoursesComponent);



/***/ }),

/***/ "./src/app/courses/courses.module.ts":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesModule", function() { return CoursesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _courses_details_courses_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses-details/courses-details.component */ "./src/app/courses/courses-details/courses-details.component.ts");






const routes = [
    { path: '', component: _courses_component__WEBPACK_IMPORTED_MODULE_4__["CoursesComponent"], children: [
            { path: ':id', component: _courses_details_courses_details_component__WEBPACK_IMPORTED_MODULE_5__["CoursesDetailsComponent"] }
        ] }
];
let CoursesModule = class CoursesModule {
};
CoursesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_courses_component__WEBPACK_IMPORTED_MODULE_4__["CoursesComponent"], _courses_details_courses_details_component__WEBPACK_IMPORTED_MODULE_5__["CoursesDetailsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ]
    })
], CoursesModule);



/***/ }),

/***/ "./src/app/shared/base/subscriptions-manager.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/base/subscriptions-manager.ts ***!
  \******************************************************/
/*! exports provided: SubscriptionsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsManager", function() { return SubscriptionsManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class SubscriptionsManager {
    constructor() {
        // tslint:disable-next-line:variable-name
        this._subscriptions = [];
    }
    get subs() {
        return this._subscriptions;
    }
    set subs(sub) {
        if (sub && (sub instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"])) {
            this._subscriptions.push(sub);
        }
        else if (sub instanceof Array) {
            this._subscriptions = this._subscriptions.concat(sub);
        }
    }
    ngOnDestroy() {
        this.unsubscribeAll();
    }
    unsubscribe(sub) {
        const idx = this._subscriptions.indexOf(sub);
        if (idx >= 0) {
            this._subscriptions[idx].unsubscribe();
            this._subscriptions.splice(idx, 1);
        }
    }
    unsubscribeAll() {
        for (const sub of this._subscriptions) {
            if (sub) {
                sub.unsubscribe();
            }
        }
        this._subscriptions = [];
    }
}


/***/ }),

/***/ "./src/app/shared/services/courses.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/courses.service.ts ***!
  \****************************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CoursesService = class CoursesService {
    constructor() {
        this.courses = [
            { id: 1,
                name: 'HTML5 & CSS3 Starter',
                // tslint:disable-next-line:max-line-length
                description: 'The course consists of eight logically interconnected lessons, in which the learner will get acquainted with the HTML markup language, learn how to create an HTML page. Familiarizes with Cascading Style Sheets - CSS for web page design.',
                lessons: [
                    'Introduction to HTML5',
                    'Work with images, tables and lists',
                    'Cascading CSS3 Style Sheets Part 1',
                    'Cascading CSS3 Style Sheets Part 2',
                    'Positioning elements. Types of layout.',
                    'HTML5 semantics. New tags. ',
                    'Forms. Meta Tags.',
                    'Page layout. Practice'
                ],
                img: 'assets/images/html5_css3_starter.png' },
            { id: 2,
                name: 'JavaScript Essential',
                // tslint:disable-next-line:max-line-length
                description: 'This video course contains a set of video lessons that helps novice developers to understand JavaScript from scratch. The Javascript EssentiaI course examines in detail variables, data types, conditional structures, logical operations, cyclic structures, the principles of creating and using functions, objects, and the basics of working with data arrays.',
                lessons: [
                    'Introduction to JavaScript',
                    'Logical structures',
                    'Arrays',
                    'Functions',
                    'Objects',
                    'Practice',
                    'Practice'
                ],
                img: 'assets/images/js_essential.jpg' },
            { id: 3,
                name: 'JavaScript Advanced',
                // tslint:disable-next-line:max-line-length
                description: 'This course helps you to learn how to work with objects, create constructor functions, work with the DOM tree of a page, and process events of document elements. This video course helps you to move to the new level of ownership of the most common scripting programming language.',
                lessons: [
                    'Constructors and prototypes',
                    'Work with documents',
                    'Window. Regular Expressions',
                    'CSS and JavaScript',
                    'Events and event processing (Part 1)',
                    'Events and event processing (Part 2)',
                    'Forms and elements of forms',
                    'Cookies and data storage mechanisms on the client',
                    'Work with graphics on the client side',
                    'Ajax and work with HTTP protocols'
                ],
                img: 'assets/images/js_advanced.jpg' },
            { id: 4,
                name: 'Bootstrap 4',
                // tslint:disable-next-line:max-line-length
                description: 'Bootstrap 4 is an HTML, CSS, JS framework for crossbrowser web-based interfaces development. Bootstrap presents a toolkit from Twitter designed to facilitate the development of web applications and websites, uses CSS and HTML for printing, forms, buttons, tables, grids, navigation, etc., as well as additional JavaScript extensions that simplify the work of the web developer.',
                lessons: [
                    'Introducing Bootstrap 4',
                    'Typography Bootstrap 4',
                    'Bootstrap 4 Components',
                    'JavaScript Bootstrap 4',
                    'Utilities Bootstrap 4'
                ],
                img: 'assets/images/bootstrap4.png' },
            { id: 5,
                name: 'HTML5 & CSS3 Advanced',
                // tslint:disable-next-line:max-line-length
                description: 'The course consists of 7 lessons, where students familiarize themselves with the new features of HTML5 & CSS3. Students will consider the use of flexible layout, implementation of animation, use of browser vaults and multithreading, as well as connecting preprocessors and assembler to display the cross-browser of a web page on various devices.',
                lessons: [
                    'Introduction, microdata and user data. Geolocation',
                    'Canvas',
                    'Client side data storage. Audio, Video',
                    'Layout building principles, Flex, Grid, Site templates',
                    'Animations and gradients',
                    'SASS basics',
                    'Practice'
                ],
                img: 'assets/images/html5-css3-advanced.jpg' },
            { id: 6,
                name: 'TypeScript Fundamentals',
                // tslint:disable-next-line:max-line-length
                description: 'The Typescript Fundamentals video course helps learn everything you need to start using this programming language. Throughout these lessons, you learn how to use the tools for developing and compiling code and master the syntax constructs that are in TypeScript.',
                lessons: [
                    'Variables and Functions',
                    'Classes and Interfaces',
                    'Generics',
                    'Modules and Namespaces',
                    'Practice'
                ],
                img: 'assets/images/typescript.png' },
            { id: 7,
                name: 'Angular Essential',
                // tslint:disable-next-line:max-line-length
                description: 'The Angular Essential video course is designed for studying Angular, which is a redesigned and improved version of the popular AngularJS framework.',
                lessons: [
                    'Introduction',
                    'Components',
                    'Directives',
                    'Services',
                    'Routing',
                    'Forms',
                    'HTTP'
                ],
                img: 'assets/images/angular.png' },
        ];
    }
    getAll() {
        return this.courses;
    }
    getOne(id) {
        return this.courses.find((elem) => elem.id === id);
    }
};
CoursesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CoursesService);



/***/ })

}]);
//# sourceMappingURL=src-app-courses-courses-module-es2015.js.map