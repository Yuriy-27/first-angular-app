(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts-content container-fluid row justify-content-center\">\r\n    <div class=\"title-content col-3 d-flex\">\r\n        <div class=\"contacts-title\">\r\n            <div class=\"line\"></div>\r\n            <div class=\"title\">\r\n                <p><span>My</span> Contact Details</p>\r\n            </div> \r\n        </div>\r\n    </div>\r\n    <div class=\"main-info col-8\">\r\n        <div *ngFor='let item of contacts' class=\"main-content col d-flex justify-content-between\">\r\n            <div class=\"left col-3 d-flex\">\r\n                <div class=\"icon col-2\">\r\n                    <i [ngClass]=\"item.class\"></i>\r\n                </div>\r\n                <div class=\"name col-10\">\r\n                    <p>{{item.title}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"right col-8\">\r\n                {{item.content}}\r\n            </div>\r\n        </div>\r\n    </div>   \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contacts-content {\n  background-color: #F8F8F8;\n  height: calc(100vh - 5rem);\n  margin: 0;\n  overflow-y: auto;\n}\n.contacts-content .title-content {\n  font-size: 1.5rem;\n  margin-top: 5.5rem;\n}\n.contacts-content .title-content .title {\n  font-weight: 800;\n  color: #537072;\n}\n.contacts-content .title-content .title span {\n  font-weight: 400;\n}\n.contacts-content .line {\n  width: 2.5rem;\n  height: 0.2rem;\n  background-color: #537072;\n  margin-bottom: 0.5rem;\n}\n.contacts-content .main-info {\n  font-size: 1.375rem;\n  margin-top: 5.5rem;\n}\n.contacts-content .main-info .main-content {\n  padding: 0;\n}\n.contacts-content .main-info .main-content .left, .contacts-content .main-info .main-content .right {\n  margin-bottom: 1.5rem;\n  padding: 0;\n  border: 0.1rem solid #8e9b97;\n  border-radius: 0.5rem;\n  padding-top: 0.5rem;\n  color: #537072;\n  font-weight: 500;\n  font-size: 1.375rem;\n}\n.contacts-content .main-info .main-content .right {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRDpcXElUXFxNeV9wcm9qZWN0c1xcRmlyc3QgQW5ndWxhciBBcHBcXG15Rmlyc3RBcHAvc3JjXFxhcHBcXGNvbnRhY3RzXFxjb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdHMvRDpcXElUXFxNeV9wcm9qZWN0c1xcRmlyc3QgQW5ndWxhciBBcHBcXG15Rmlyc3RBcHAvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0kseUJDZWM7RURkZCwwQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBRUZKO0FGR0k7RUFDSSxpQkNtQlM7RURsQlQsa0JBQUE7QUVEUjtBRkdRO0VBQ0ksZ0JBQUE7RUFDQSxjQ0VPO0FDSG5CO0FGRVk7RUFDSSxnQkFBQTtBRUFoQjtBRktJO0VBQ0ksYUFBQTtFQUNBLGNDV007RURWTix5QkNSVztFRFNYLHFCQUFBO0FFSFI7QUZNSTtFQUNJLG1CQ0ZRO0VER1Isa0JBQUE7QUVKUjtBRk1RO0VBQ0ksVUFBQTtBRUpaO0FGS1k7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ3hCRztFRHlCSCxnQkFBQTtFQUNBLG1CQ2ZBO0FDWWhCO0FGS1k7RUFDSSxrQkFBQTtBRUhoQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG5cclxuLmNvbnRhY3RzLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWxhYmFzdGVyLWNvbG9yO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skaGVhZGVyLWhlaWdodH0pO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC50aXRsZS1jb250ZW50e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eHhsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUuNXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY3V0dHktc2Fyay1jb2xvcjtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5saW5le1xyXG4gICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGN1dHR5LXNhcmstY29sb3I7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYWluLWluZm97XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4bDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1LjVyZW07XHJcbiAgICAgICBcclxuICAgICAgICAubWFpbi1jb250ZW50e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAubGVmdCwgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogLjFyZW0gc29saWQgJG1hbnRsZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjdXR0eS1zYXJrLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS14eGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gIFxyXG4gICAgfSAgXHJcbn1cclxuXHJcbiIsIiRmYS1mb250LXBhdGg6IFwibm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzXCI7XHJcbiRmb250LWljb25zOiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XHJcblxyXG4vLyBjb2xvcnMgLSBwbGVhc2UgdXNlIGh0dHA6Ly9jaGlyLmFnL3Byb2plY3RzL25hbWUtdGhhdC1jb2xvci8gdG8gZ2V0IGNvbG9yIG5hbWVcclxuJG1pbmUtc2hhZnQtY29sb3I6ICMyNjI2MjY7XHJcbiR0dW5kb3JhLWNvbG9yOiAjNDc0NzQ3O1xyXG4kYWx0by1jb2xvcjogI0RERERERDtcclxuJHdoaXRlLWNvbG9yOiAjRkZGRkZGO1xyXG4kYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiRtYWxpYnUtY29sb3I6ICM5MENBRjk7XHJcbiRjZXJ1bGVhbi1jb2xvcjogIzAwYTNlMTtcclxuJGJvdWxkZXItY29sb3I6ICM3ODc4Nzg7XHJcbiRtZXJjdXJ5LWNvbG9yOiAjRTNFM0UzO1xyXG5cclxuXHJcbiRwaWNrbGVkLWJsdWV3b29kLWNvbG9yOiAjMkM0QTUyO1xyXG4kY3V0dHktc2Fyay1jb2xvcjogIzUzNzA3MjtcclxuJG1hbnRsZS1jb2xvcjogIzhlOWI5NztcclxuJHBhcmNobWVudC1jb2xvcjogI2Y0ZWJkYjtcclxuJGFsYWJhc3Rlci1jb2xvcjogI0Y4RjhGODtcclxuXHJcbi8vZm9udCBzaXplc1xyXG4kZm9udC1zaXplLXNtOiAuNzByZW07XHJcbiRmb250LXNpemUtcmVndWxhcjogLjg3NXJlbTtcclxuJGZvbnQtc2l6ZS1tZDogMXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogMS4xMjVyZW07XHJcbiRmb250LXNpemUteGw6IDEuMjVyZW07XHJcbiRmb250LXNpemUteHhsOiAxLjM3NXJlbTtcclxuJGZvbnQtc2l6ZS14eHhsOiAxLjVyZW07XHJcblxyXG5cclxuLy8gb3RoZXJzXHJcbiRoZWFkZXItaGVpZ2h0OiA1cmVtO1xyXG4kZm9vdGVyLWhlaWdodDogNnJlbTtcclxuJGxpbmUtaGVpZ2h0OiAuMnJlbTtcclxuXHJcbiIsIi5jb250YWN0cy1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNXJlbSk7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jb250YWN0cy1jb250ZW50IC50aXRsZS1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDUuNXJlbTtcbn1cbi5jb250YWN0cy1jb250ZW50IC50aXRsZS1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNTM3MDcyO1xufVxuLmNvbnRhY3RzLWNvbnRlbnQgLnRpdGxlLWNvbnRlbnQgLnRpdGxlIHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbnRhY3RzLWNvbnRlbnQgLmxpbmUge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNzA3MjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmNvbnRhY3RzLWNvbnRlbnQgLm1haW4taW5mbyB7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG4gIG1hcmdpbi10b3A6IDUuNXJlbTtcbn1cbi5jb250YWN0cy1jb250ZW50IC5tYWluLWluZm8gLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGFjdHMtY29udGVudCAubWFpbi1pbmZvIC5tYWluLWNvbnRlbnQgLmxlZnQsIC5jb250YWN0cy1jb250ZW50IC5tYWluLWluZm8gLm1haW4tY29udGVudCAucmlnaHQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICM4ZTliOTc7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgY29sb3I6ICM1MzcwNzI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XG59XG4uY29udGFjdHMtY29udGVudCAubWFpbi1pbmZvIC5tYWluLWNvbnRlbnQgLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/contacts.service */ "./src/app/shared/services/contacts.service.ts");



let ContactsComponent = class ContactsComponent {
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    ngOnInit() {
        this.contacts = this.contactsService.getAll();
    }
};
ContactsComponent.ctorParameters = () => [
    { type: _shared_services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"] }
];
ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html"),
        styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/contacts/contacts.component.scss")]
    })
], ContactsComponent);



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.component */ "./src/app/contacts/contacts.component.ts");





const routes = [
    { path: '', component: _contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"] }
];
let ContactsModule = class ContactsModule {
};
ContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], ContactsModule);



/***/ }),

/***/ "./src/app/shared/services/contacts.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/contacts.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactsService = class ContactsService {
    constructor() {
        this.contactsInfo = [
            {
                class: 'fas fa-user-alt',
                title: 'Full name',
                content: 'Yuriy Shchebetun'
            },
            {
                class: 'fas fa-phone-square',
                title: 'Phone',
                content: '+38 (093) 722-34-61'
            },
            {
                class: 'fas fa-at',
                title: 'Email',
                content: 'yuriyshchebetun@gmail.com'
            },
            {
                class: 'fab fa-facebook',
                title: 'Facebook',
                content: 'https://www.facebook.com/YuriyShchebetun'
            },
            {
                class: 'fab fa-skype',
                title: 'Skype',
                content: 'yuriyshchebetun'
            },
            {
                class: 'fab fa-linkedin-in',
                title: 'LinkedIn',
                content: 'www.linkedin.com/in/yuriyshchebetun'
            }
        ];
    }
    getAll() {
        return this.contactsInfo;
    }
};
ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactsService);



/***/ })

}]);
//# sourceMappingURL=src-app-contacts-contacts-module-es2015.js.map