(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <my-nav></my-nav>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myBag';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-nav/my-nav.component */ "./src/app/my-nav/my-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-dashboard/my-dashboard.component */ "./src/app/my-dashboard/my-dashboard.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _modify_bag_modify_bag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modify-bag/modify-bag.component */ "./src/app/modify-bag/modify-bag.component.ts");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing */ "./src/app/routing.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./side-navbar/side-navbar.component */ "./src/app/side-navbar/side-navbar.component.ts");
/* harmony import */ var _helper_mat_mat_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helper/mat/mat.module */ "./src/app/helper/mat/mat.module.ts");
/* harmony import */ var _bag_image_bag_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bag-image/bag-image.component */ "./src/app/bag-image/bag-image.component.ts");
/* harmony import */ var _show_costs_show_costs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./show-costs/show-costs.component */ "./src/app/show-costs/show-costs.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/examples/examples.component.ts");
/* harmony import */ var _helper_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helper/pipes/pipes.module */ "./src/app/helper/pipes/pipes.module.ts");
/* harmony import */ var _mypopup_mypopup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mypopup/mypopup.component */ "./src/app/mypopup/mypopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _my_nav_my_nav_component__WEBPACK_IMPORTED_MODULE_4__["MyNavComponent"],
                _my_dashboard_my_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["MyDashboardComponent"],
                _modify_bag_modify_bag_component__WEBPACK_IMPORTED_MODULE_9__["ModifyBagComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _side_navbar_side_navbar_component__WEBPACK_IMPORTED_MODULE_12__["SideNavbarComponent"],
                _bag_image_bag_image_component__WEBPACK_IMPORTED_MODULE_14__["BagImageComponent"],
                _show_costs_show_costs_component__WEBPACK_IMPORTED_MODULE_15__["ShowCostsComponent"],
                _examples_examples_component__WEBPACK_IMPORTED_MODULE_17__["ExamplesComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _mypopup_mypopup_component__WEBPACK_IMPORTED_MODULE_19__["MypopupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot(),
                _routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _helper_mat_mat_module__WEBPACK_IMPORTED_MODULE_13__["MatModule"],
                _helper_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_18__["PipesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_mypopup_mypopup_component__WEBPACK_IMPORTED_MODULE_19__["MypopupComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bag-image/bag-image.component.css":
/*!***************************************************!*\
  !*** ./src/app/bag-image/bag-image.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modify{\n  position: absolute;\n}\n"

/***/ }),

/***/ "./src/app/bag-image/bag-image.component.html":
/*!****************************************************!*\
  !*** ./src/app/bag-image/bag-image.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"big_image\">\n\n  <div class=\"modify\" (click)=\"mod('left_bag')\" style=\"left:0%;bottom:30%\"><button mat-fab><mat-icon>add</mat-icon></button></div>\n  <div class=\"modify\" (click)=\"mod('right_bag')\"style=\"right:0%;bottom:30%\"><button mat-fab><mat-icon>add</mat-icon></button>\n</div>\n  <div class=\"modify\" (click)=\"mod('bottom_bag')\" style=\"left:50%;bottom:30%\"><button mat-fab><mat-icon>add</mat-icon></button>\n</div>\n  <div class=\"modify\" (click)=\"mod('top_bag')\" style=\"left:50%;top:30%\"><button mat-fab><mat-icon>add</mat-icon></button>\n</div>\n<img class=\"img-fluid\" src=\"{{myImg}}\">\n</div>\n"

/***/ }),

/***/ "./src/app/bag-image/bag-image.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bag-image/bag-image.component.ts ***!
  \**************************************************/
/*! exports provided: BagImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BagImageComponent", function() { return BagImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SELECTED_BAGS = {
    campus: "The Campus",
    daily: "The Daily",
    bagpacker: "The Bagpacker",
};
var BagImageComponent = /** @class */ (function () {
    function BagImageComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.leftBag = { color: "", material: "", type: "" };
        this.existingMods = { lb: { color: "blue", material: "lether" }, rb: { color: "red", material: "shaumstoff" } };
        this.existingQuery = "";
        this.myImg = "/assets/img/example.jpg";
    }
    BagImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.bag = params.slug;
            _this.bagNice = SELECTED_BAGS[params.slug];
        });
    };
    BagImageComponent.prototype.mod = function (whichOne) {
        this.selected = whichOne;
        this.search();
    };
    BagImageComponent.prototype.search = function () {
        this._router.navigate(["modify/" + this.bag, {
                selected: this.selected,
            }]);
    };
    BagImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bag-image',
            template: __webpack_require__(/*! ./bag-image.component.html */ "./src/app/bag-image/bag-image.component.html"),
            styles: [__webpack_require__(/*! ./bag-image.component.css */ "./src/app/bag-image/bag-image.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BagImageComponent);
    return BagImageComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.component.css":
/*!*************************************************!*\
  !*** ./src/app/examples/examples.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/examples.component.html":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  @list class=\"row\" *ngIf=\"bags.length!=0\">\n\n  <div @items  class=\"col-sm-3\" *ngFor=\"let bag of bags\">\n\n    <mat-card routerLink=\"/modify/{{bag.slug}}\" class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title><h3>{{bag.title}}</h3></mat-card-title>\n        <mat-card-subtitle>{{bag.price}} €</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"{{bag.img}}\" alt=\"Photo of a Shiba Inu\">\n      <mat-card-content>\n\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/examples/examples.component.ts":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
        this.bags = [];
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        this.bags = [
            { price: 45, title: "The Campus", subtitle: "Great for going to work, university or school", slug: "campus", img: "/assets/img/example.jpg" },
            { price: 95, title: "The Bagpacker", subtitle: "Great for hiking, climbing and traveling.", slug: "bagpacker", img: "/assets/img/example.jpg" },
            { price: 65, title: "The Daily", subtitle: "Great for shopping, city-visiting and work", slug: "daily", img: "/assets/img/example.jpg" },
            { price: 85, title: "The Campus", subtitle: "Great for going to work, university or school", slug: "campus", img: "/assets/img/example.jpg" },
            { price: 45, title: "The Bagpacker", subtitle: "Great for hiking, climbing and traveling.", slug: "bagpacker", img: "/assets/img/example.jpg" },
            { price: 35, title: "The Daily", subtitle: "Great for shopping, city-visiting and work", slug: "daily", img: "/assets/img/example.jpg" },
            { price: 45, title: "The Campus", subtitle: "Great for going to work, university or school", slug: "campus", img: "/assets/img/example.jpg" },
            { price: 85, title: "The Bagpacker", subtitle: "Great for hiking, climbing and traveling.", slug: "bagpacker", img: "/assets/img/example.jpg" },
            { price: 45, title: "The Daily", subtitle: "Great for shopping, city-visiting and work", slug: "daily", img: "/assets/img/example.jpg" }
        ];
    };
    ExamplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-examples',
            template: __webpack_require__(/*! ./examples.component.html */ "./src/app/examples/examples.component.html"),
            styles: [__webpack_require__(/*! ./examples.component.css */ "./src/app/examples/examples.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('items', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0.5)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.7s cubic-bezier(.8, -0.6, 0.26, 1.6)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)', opacity: 1 })) // final
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('list', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@items', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/helper/mat/mat.module.ts":
/*!******************************************!*\
  !*** ./src/app/helper/mat/mat.module.ts ***!
  \******************************************/
/*! exports provided: MatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatModule", function() { return MatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var MatModule = /** @class */ (function () {
    function MatModule() {
    }
    MatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__["MatBottomSheetModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"]
            ],
            exports: [
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_21__["MatBottomSheetModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"]
            ],
            declarations: [],
        })
    ], MatModule);
    return MatModule;
}());



/***/ }),

/***/ "./src/app/helper/pipes/pipes.module.ts":
/*!**********************************************!*\
  !*** ./src/app/helper/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _valuesPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./valuesPipe */ "./src/app/helper/pipes/valuesPipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_valuesPipe__WEBPACK_IMPORTED_MODULE_1__["ValuesPipe"]],
            exports: [_valuesPipe__WEBPACK_IMPORTED_MODULE_1__["ValuesPipe"]]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./src/app/helper/pipes/valuesPipe.ts":
/*!********************************************!*\
  !*** ./src/app/helper/pipes/valuesPipe.ts ***!
  \********************************************/
/*! exports provided: ValuesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValuesPipe = /** @class */ (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return value[key]; });
    };
    ValuesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'values', pure: false })
    ], ValuesPipe);
    return ValuesPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*animation hover*/\n\n.mat-card::after {\n  content: \"\";\n  border-radius: 5px;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  opacity: 0;\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n.mat-card:hover {\n  -webkit-transform: scale(1.05, 1.05);\n  transform: scale(1.05, 1.05);\n}\n\n.mat-card:hover::after {\n  opacity: 1;\n}\n\n/*animation hover end*/\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n</div>\n<hr>\n<div class=\"text-center\"><h1>Welcome to MyBag</h1></div>\n<div class=\"container\">\n<div class=\"text-center speech-bubble\"><h2>Select your base model</h2></div>\n<div  @list class=\"row\" *ngIf=\"bags.length!=0\">\n\n<div @items  class=\"col-sm-4\" *ngFor=\"let bag of bags\">\n\n<mat-card routerLink=\"/modify/{{bag.slug}}\" class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title><h3>{{bag.title}}</h3></mat-card-title>\n    <mat-card-subtitle>{{bag.subtitle}}</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"{{bag.img}}\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n</mat-card>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.bags = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.bags = [
            { title: "The Campus", subtitle: "Great for going to work, university or school", slug: "campus", img: "/assets/img/example.jpg" },
            { title: "The Bagpacker", subtitle: "Great for hiking, climbing and traveling.", slug: "bagpacker", img: "/assets/img/example.jpg" },
            { title: "The Daily", subtitle: "Great for shopping, city-visiting and work", slug: "daily", img: "/assets/img/example.jpg" }
        ];
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('items', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(0.5)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.7s cubic-bezier(.8, -0.6, 0.26, 1.6)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1)', opacity: 1 })) // final
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('list', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@items', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"500px\">\n  <mat-grid-tile>\n\n\n<mat-tab-group>\n  <mat-tab label=\"Login\">\n    <form >\n      <mat-grid-list cols=\"1\" rowHeight=\"100px\">\n        <mat-grid-tile>\n          <mat-form-field>\n            <input matInput\n                   placeholder=\"email\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-form-field>\n            <input matInput  placeholder=\"password\" type=\"password\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <button mat-button color=\"primary\">Passwort vergessen</button>\n          <button mat-raised-button color=\"primary\">Login</button>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </form>\n    <mat-grid-list cols=\"1\" rowHeight=\"100px\">\n    </mat-grid-list>\n  </mat-tab>\n  <mat-tab label=\"Registrieren\">\n    <form  >\n      <mat-grid-list cols=\"1\" rowHeight=\"100px\">\n        <mat-grid-tile>\n          <mat-form-field>\n            <input matInput  placeholder=\"email\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-form-field>\n            <input matInput  placeholder=\"password\" type=\"password\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-form-field>\n            <input matInput  placeholder=\"repeat password\" type=\"password\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <button mat-raised-button color=\"primary\">Registrieren</button>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </form>\n  </mat-tab>\n\n</mat-tab-group>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modify-bag/modify-bag.component.css":
/*!*****************************************************!*\
  !*** ./src/app/modify-bag/modify-bag.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modify-bag/modify-bag.component.html":
/*!******************************************************!*\
  !*** ./src/app/modify-bag/modify-bag.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding:15px\">\n<h3 class=\"text-center\">{{bagNice}}</h3>\n<div class=\"row\">\n  <div class=\"col-md-3 col-lg-3\">\n    <side-navbar></side-navbar>\n\n  </div>\n  <div class=\"col-md-6 col-lg-6\">\n  <app-bag-image></app-bag-image>\n  </div>\n  <div class=\"col-md-3 col-lg-3\">\n  <app-show-costs></app-show-costs>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/modify-bag/modify-bag.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modify-bag/modify-bag.component.ts ***!
  \****************************************************/
/*! exports provided: ModifyBagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyBagComponent", function() { return ModifyBagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SELECTED_BAGS = {
    campus: "The Campus",
    daily: "The Daily",
    bagpacker: "The Bagpacker",
};
var ModifyBagComponent = /** @class */ (function () {
    function ModifyBagComponent(_route) {
        this._route = _route;
        this.myImg = "/assets/img/example.jpg";
    }
    ModifyBagComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.bagNice = SELECTED_BAGS[params["slug"]];
        });
    };
    ModifyBagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-bag',
            template: __webpack_require__(/*! ./modify-bag.component.html */ "./src/app/modify-bag/modify-bag.component.html"),
            styles: [__webpack_require__(/*! ./modify-bag.component.css */ "./src/app/modify-bag/modify-bag.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModifyBagComponent);
    return ModifyBagComponent;
}());



/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px;\n}\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n\n.dashboard-card-content {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Dashboard</h1>\n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">\n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">\n      <mat-card class=\"dashboard-card\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.title}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <div>Card Content Here</div>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/my-dashboard/my-dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/my-dashboard/my-dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: MyDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDashboardComponent", function() { return MyDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyDashboardComponent = /** @class */ (function () {
    function MyDashboardComponent() {
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
    MyDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-dashboard',
            template: __webpack_require__(/*! ./my-dashboard.component.html */ "./src/app/my-dashboard/my-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./my-dashboard.component.css */ "./src/app/my-dashboard/my-dashboard.component.css")]
        })
    ], MyDashboardComponent);
    return MyDashboardComponent;
}());



/***/ }),

/***/ "./src/app/my-nav/my-nav.component.css":
/*!*********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n  box-shadow: 3px 0 6px rgba(0,0,0,.24);\n}\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.html":
/*!**********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n<img routerLink=\"/\" height=\"100px\" width=\"100px\" src=\"/assets/img/logo_transparent_white.png\">\n\n<div style=\"position:absolute;right:5%\">\n\n\n  <button mat-button><mat-icon>shopping_cart</mat-icon></button>\n\n  <button routerLink=\"examples\" mat-button>Examples</button>\n\n  <button routerLink=\"login\" mat-raised-button><mat-icon>person</mat-icon>Login</button>\n</div>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/my-nav/my-nav.component.ts":
/*!********************************************!*\
  !*** ./src/app/my-nav/my-nav.component.ts ***!
  \********************************************/
/*! exports provided: MyNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavComponent", function() { return MyNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyNavComponent = /** @class */ (function () {
    // isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)
    //   .pipe(
    //     map(result => result.matches)
    //   );
    //
    // isHandset$: Observable<BreakpointState>
    function MyNavComponent() {
    }
    MyNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-nav',
            template: __webpack_require__(/*! ./my-nav.component.html */ "./src/app/my-nav/my-nav.component.html"),
            styles: [__webpack_require__(/*! ./my-nav.component.css */ "./src/app/my-nav/my-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyNavComponent);
    return MyNavComponent;
}());



/***/ }),

/***/ "./src/app/mypopup/mypopup.component.css":
/*!***********************************************!*\
  !*** ./src/app/mypopup/mypopup.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mypopup/mypopup.component.html":
/*!************************************************!*\
  !*** ./src/app/mypopup/mypopup.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Rucksack zum Warenkorb hinzugefügt!</h4>\n"

/***/ }),

/***/ "./src/app/mypopup/mypopup.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mypopup/mypopup.component.ts ***!
  \**********************************************/
/*! exports provided: MypopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypopupComponent", function() { return MypopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MypopupComponent = /** @class */ (function () {
    function MypopupComponent() {
    }
    MypopupComponent.prototype.ngOnInit = function () {
    };
    MypopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mypopup',
            template: __webpack_require__(/*! ./mypopup.component.html */ "./src/app/mypopup/mypopup.component.html"),
            styles: [__webpack_require__(/*! ./mypopup.component.css */ "./src/app/mypopup/mypopup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MypopupComponent);
    return MypopupComponent;
}());



/***/ }),

/***/ "./src/app/routing.ts":
/*!****************************!*\
  !*** ./src/app/routing.ts ***!
  \****************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _modify_bag_modify_bag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modify-bag/modify-bag.component */ "./src/app/modify-bag/modify-bag.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/examples.component */ "./src/app/examples/examples.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    },
    {
        path: 'examples',
        component: _examples_examples_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesComponent"],
    },
    { path: 'modify/:slug',
        component: _modify_bag_modify_bag_component__WEBPACK_IMPORTED_MODULE_3__["ModifyBagComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/show-costs/show-costs.component.css":
/*!*****************************************************!*\
  !*** ./src/app/show-costs/show-costs.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/show-costs/show-costs.component.html":
/*!******************************************************!*\
  !*** ./src/app/show-costs/show-costs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>1x{{bag}} <small>60 €</small></h3>\n\n\n</div>\n<hr>\n\n<div *ngIf=\"!isEmpty(mods.top_bag)\">\n  <h3>Obere vordere Tasche</h3>\n<div *ngFor=\"let mod of mods.top_bag | values\">\n<div *ngIf=\"mod!=''\">\n  <h4>{{getName(mod)}}<small>{{getPrice(mod)}} €</small></h4>\n</div>\n</div>\n  <hr>\n</div>\n\n<div *ngIf=\"!isEmpty(mods.bottom_bag)\">\n  <h3>Untere vordere Tasche</h3>\n<div *ngFor=\"let mod of mods.bottom_bag | values\">\n<div *ngIf=\"mod!=''\">\n  <h4>{{getName(mod)}}<small>{{getPrice(mod)}} €</small></h4>\n</div>\n</div>\n  <hr>\n</div>\n\n<div *ngIf=\"!isEmpty(mods.left_bag)\">\n  <h3>Linke Seitentasche</h3>\n<div *ngFor=\"let mod of mods.left_bag | values\">\n<div *ngIf=\"mod!=''\">\n  <h4>{{getName(mod)}}<small>{{getPrice(mod)}} €</small></h4>\n</div>\n</div>\n  <hr>\n</div>\n<div *ngIf=\"!isEmpty(mods.right_bag)\">\n  <h3>Rechte Seitentasche</h3>\n<div *ngFor=\"let mod of mods.right_bag | values\">\n<div *ngIf=\"mod!=''\">\n  <h4>{{getName(mod)}}<small>{{getPrice(mod)}} €</small></h4>\n</div>\n</div>\n  <hr>\n</div>\n<h3>Gesamt: 120 €</h3>\n<button mat-raised-button (click)=\"openSnackBar()\" color=\"accent\"><h4>In den Einkaufswagen</h4></button>\n\n"

/***/ }),

/***/ "./src/app/show-costs/show-costs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/show-costs/show-costs.component.ts ***!
  \****************************************************/
/*! exports provided: ShowCostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCostsComponent", function() { return ShowCostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _mypopup_mypopup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mypopup/mypopup.component */ "./src/app/mypopup/mypopup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SELECTED_TYPES = {
    left_bag: "Linke Seitentasche",
    right_bag: "Rechte Seitentasche",
    top_bag: "Obere vordere Tasche",
    bottom_bag: "Untere vordere Tasche"
};
var SELECTED_BAGS = {
    campus: "The Campus",
    daily: "The Daily",
    bagpacker: "The Bagpacker",
};
var SELECTED_COSTS = [
    { name: "Handy-Fach", value: "handy_bag", price: "5" },
    { name: "Brillen-Fach", value: "glasses_bag", price: "15" },
    { name: "Stifte-Fach", value: "drink", price: "15" },
    { name: "Muster 1", value: "muster1", price: "20" },
    { name: "Muster 2", value: "muster2", price: "15" },
    { name: "Muster 3", value: "muster3", price: "10" },
    { name: "Kleine Tasche", value: "small_bag", price: "5" },
    { name: "Große Tasche", value: "big_bag", price: "10" },
    { name: "Trinkflasche", value: "drink", price: "15" },
    { name: "Netzfach", value: "net", price: "5" },
    { name: "Blau", value: "blue", price: "5" },
    { name: "Rot", value: "red", price: "5" },
    { name: "Grün", value: "green", price: "5" },
    { name: "Gelb", value: "yellow", price: "5" },
    { name: "Leder", value: "lether", price: "20" },
    { name: "Stoff", value: "stuff", price: "15" },
    { name: "Wolle", value: "wolle", price: "20" },
    { name: "Weichplastik", value: "plastik", price: "10" },
    { name: "Arial", value: "arial", price: "0" },
    { name: "New Times Roman", value: "new_times_roman", price: "0" },
];
var ShowCostsComponent = /** @class */ (function () {
    function ShowCostsComponent(_route, snackBar) {
        this._route = _route;
        this.snackBar = snackBar;
        this.mods = {
            left_bag: { gadget: "", color: "", material: "", letter: "", closing: "" },
            right_bag: { gadget: "", color: "", material: "", letter: "", closing: "" },
            bottom_bag: { gadget: "", color: "", material: "", letter: "", closing: "" },
            top_bag: { gadget: "", color: "", material: "", letter: "", closing: "" }
        };
    }
    ShowCostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.bag = SELECTED_BAGS[params.slug];
            _this.getCurrentMods(params["mod"]);
        });
    };
    ShowCostsComponent.prototype.getCurrentMods = function (mod) {
        var _this = this;
        if (mod) {
            this.splitted = (mod.split("&"));
            this.splitted.map(function (el) {
                var minusSplit = el.split("-");
                var andSplit = [];
                if (minusSplit[1]) {
                    andSplit = minusSplit[1].split("&");
                }
                var percSplit = [];
                if (andSplit[0]) {
                    percSplit = andSplit[0].split("%");
                }
                var bagKey = minusSplit[0];
                var typeKey = percSplit[0];
                if (bagKey && typeKey && percSplit[1]) {
                    _this.mods[bagKey][typeKey] = percSplit[1];
                }
            });
        }
    };
    ShowCostsComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    ShowCostsComponent.prototype.getName = function (urlName) {
        var myname = "";
        SELECTED_COSTS.map(function (element) {
            if (element.value == urlName) {
                myname = element.name;
            }
        });
        return myname;
    };
    ShowCostsComponent.prototype.getPrice = function (urlName) {
        var myprice = "";
        SELECTED_COSTS.map(function (element) {
            if (element.value == urlName) {
                myprice = element.price;
            }
        });
        return myprice;
    };
    ShowCostsComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_mypopup_mypopup_component__WEBPACK_IMPORTED_MODULE_3__["MypopupComponent"], {
            duration: 2000,
        });
    };
    ShowCostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-costs',
            template: __webpack_require__(/*! ./show-costs.component.html */ "./src/app/show-costs/show-costs.component.html"),
            styles: [__webpack_require__(/*! ./show-costs.component.css */ "./src/app/show-costs/show-costs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ShowCostsComponent);
    return ShowCostsComponent;
}());



/***/ }),

/***/ "./src/app/side-navbar/side-navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/side-navbar/side-navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/side-navbar/side-navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/side-navbar/side-navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedNice\">\n  <h3>{{selectedNice}}</h3>\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav mode=\"side\"></mat-sidenav>\n    <mat-sidenav-content>\n      <mat-accordion multi=\"true\">\n\n        <mat-expansion-panel>\n          <mat-expansion-panel-header *ngIf=\"radios.gadget.length>0\">\n            <mat-panel-title>\n              Gadget\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-list>\n            <mat-radio-group>\n              <mat-list-item *ngFor=\"let rad of radios.gadget\">\n                <mat-radio-button (change)=\"addGadget(rad.value)\" value=\"{{rad.value}}\">{{rad.name}}</mat-radio-button>\n              </mat-list-item>\n            </mat-radio-group>\n          </mat-list>\n        </mat-expansion-panel>\n\n\n        <mat-expansion-panel>\n          <mat-expansion-panel-header *ngIf=\"radios.color.length>0\">\n            <mat-panel-title>\n              Farbe\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-list>\n            <mat-radio-group>\n              <mat-list-item *ngFor=\"let rad of radios.color\">\n                <mat-radio-button (change)=\"addColor(rad.value)\" value=\"{{rad.value}}\">{{rad.name}}</mat-radio-button>\n              </mat-list-item>\n            </mat-radio-group>\n          </mat-list>\n        </mat-expansion-panel>\n\n\n        <mat-expansion-panel>\n          <mat-expansion-panel-header *ngIf=\"radios.material.length>0\">\n            <mat-panel-title>\n              Material\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-list>\n            <mat-radio-group>\n              <mat-list-item *ngFor=\"let rad of radios.material\">\n                <mat-radio-button (change)=\"addMaterial(rad.value)\" value=\"{{rad.value}}\">{{rad.name}}\n                </mat-radio-button>\n              </mat-list-item>\n            </mat-radio-group>\n          </mat-list>\n        </mat-expansion-panel>\n\n\n        <mat-expansion-panel>\n          <mat-expansion-panel-header *ngIf=\"radios.letter.length>0\">\n            <mat-panel-title>\n              Schrift\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-list>\n            <mat-radio-group>\n              <mat-list-item *ngFor=\"let rad of radios.letter\">\n                <mat-radio-button (change)=\"addLetter(rad.value)\" value=\"{{rad.value}}\">{{rad.name}}</mat-radio-button>\n              </mat-list-item>\n            </mat-radio-group>\n          </mat-list>\n        </mat-expansion-panel>\n\n\n        <mat-expansion-panel>\n          <mat-expansion-panel-header *ngIf=\"radios.closing.length>0\">\n            <mat-panel-title>\n              Verschluss\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-list>\n            <mat-radio-group>\n              <mat-list-item *ngFor=\"let rad of radios.closing\">\n                <mat-radio-button (change)=\"addClosing(rad.value)\" value=\"{{rad.value}}\">{{rad.name}}</mat-radio-button>\n              </mat-list-item>\n            </mat-radio-group>\n          </mat-list>\n        </mat-expansion-panel>\n\n      </mat-accordion>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n  <button mat-raised-button color=\"warn\"><mat-icon>remove</mat-icon>Entfernen</button>\n</div>\n<div *ngIf=\"!selectedNice\">\n  <h3>Bitte ein Slot auswählen</h3>\n</div>\n"

/***/ }),

/***/ "./src/app/side-navbar/side-navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/side-navbar/side-navbar.component.ts ***!
  \******************************************************/
/*! exports provided: SideNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavbarComponent", function() { return SideNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SELECTED_TYPES = {
    left_bag: "Linke Seitentasche",
    right_bag: "Rechte Seitentasche",
    top_bag: "Obere vordere Tasche",
    bottom_bag: "Untere vordere Tasche"
};
var SELECTED_RADIO = {
    left_bag: {
        gadget: [
            { name: "Kleine Tasche", value: "small_bag" },
            { name: "Große Tasche", value: "big_bag" },
            { name: "Trinkflasche", value: "drink" },
            { name: "Netzfach", value: "net" }
        ],
        color: [
            { name: "Blau", value: "blue" },
            { name: "Rot", value: "red" },
            { name: "Grün", value: "green" },
            { name: "Gelb", value: "yellow" }
        ],
        material: [
            { name: "Leder", value: "lether" },
            { name: "Stoff", value: "stuff" },
            { name: "Wolle", value: "wolle" },
            { name: "Weichplastik", value: "plastik" }
        ],
        letter: [
            { name: "Arial", value: "arial" },
            { name: "New Times Roman", value: "new_times_roman" }
        ],
        closing: []
    },
    right_bag: {
        gadget: [
            { name: "Kleine Tasche", value: "small_bag" },
            { name: "Große Tasche", value: "big_bag" },
            { name: "Trinkflasche", value: "drink" },
            { name: "Netzfach", value: "net" }
        ],
        color: [
            { name: "Blau", value: "blue" },
            { name: "Rot", value: "red" },
            { name: "Grün", value: "green" },
            { name: "Gelb", value: "yellow" }
        ],
        material: [
            { name: "Leder", value: "lether" },
            { name: "Stoff", value: "stuff" },
            { name: "Wolle", value: "wolle" },
            { name: "Weichplastik", value: "plastik" }
        ],
        letter: [
            { name: "Arial", value: "arial" },
            { name: "New Times Roman", value: "new_times_roman" }
        ],
        closing: []
    },
    top_bag: {
        gadget: [
            { name: "Handy-Fach", value: "handy_bag" },
            { name: "Brillen-Fach", value: "glasses_bag" },
            { name: "Stifte-Fach", value: "drink" },
            { name: "Kleines Fach", value: "small_bag" },
            { name: "Großes Fach", value: "big_bag" }
        ],
        color: [
            { name: "Blau", value: "blue" },
            { name: "Rot", value: "red" },
            { name: "Grün", value: "green" },
            { name: "Gelb", value: "yellow" }
        ],
        material: [
            { name: "Leder", value: "lether" },
            { name: "Stoff", value: "stuff" },
            { name: "Wolle", value: "wolle" },
            { name: "Weichplastik", value: "plastik" }
        ],
        letter: [
            { name: "Arial", value: "arial" },
            { name: "New Times Roman", value: "new_times_roman" }
        ],
        closing: [
            { name: "Muster 1", value: "muster1" },
            { name: "Muster 2", value: "muster2" },
            { name: "Muster 3", value: "muster3" }
        ]
    },
    bottom_bag: {
        gadget: [
            { name: "Handy-Fach", value: "handy_bag" },
            { name: "Brillen-Fach", value: "glasses_bag" },
            { name: "Stifte-Fach", value: "drink" },
            { name: "Kleines Fach", value: "net" },
            { name: "Großes Fach", value: "net" }
        ],
        color: [
            { name: "Blau", value: "blue" },
            { name: "Rot", value: "red" },
            { name: "Grün", value: "green" },
            { name: "Gelb", value: "yellow" }
        ],
        material: [
            { name: "Leder", value: "lether" },
            { name: "Stoff", value: "stuff" },
            { name: "Wolle", value: "wolle" },
            { name: "Weichplastik", value: "plastik" }
        ],
        letter: [
            { name: "Arial", value: "arial" },
            { name: "New Times Roman", value: "new_times_roman" }
        ],
        closing: [
            { name: "Muster 1", value: "muster1" },
            { name: "Muster 2", value: "muster2" },
            { name: "Muster 3", value: "muster3" }
        ]
    }
};
var SideNavbarComponent = /** @class */ (function () {
    function SideNavbarComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.selectedValues = { material: "", color: "", gadget: "", letter: "", closing: "" };
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            _this.selected = params["selected"];
            _this.selectedNice = SELECTED_TYPES[params["selected"]];
            _this.bag = params.slug;
            _this.radios = SELECTED_RADIO[params["selected"]];
            _this.existingMod = params["mod"];
        });
    };
    SideNavbarComponent.prototype.addGadget = function (value) {
        this.selectedValues.gadget = value;
        this.navigate();
    };
    SideNavbarComponent.prototype.addMaterial = function (value) {
        this.selectedValues.material = value;
        this.navigate();
    };
    SideNavbarComponent.prototype.addColor = function (value) {
        this.selectedValues.color = value;
        this.navigate();
    };
    SideNavbarComponent.prototype.addClosing = function (value) {
        this.selectedValues.closing = value;
        this.navigate();
    };
    SideNavbarComponent.prototype.addLetter = function (value) {
        this.selectedValues.letter = value;
        this.navigate();
    };
    // returns some_name-material=lether&
    SideNavbarComponent.prototype.makeSlug = function () {
        var _this = this;
        var slug = "";
        Object.entries(this.selectedValues).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (value != "") {
                slug += _this.selected + "-" + key + "%" + value + "&";
            }
        });
        return slug;
    };
    SideNavbarComponent.prototype.navigate = function () {
        var mod = this.makeSlug();
        this._router.navigate(["modify/" + this.bag, {
                selected: this.selected,
                mod: mod
            }]);
    };
    SideNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'side-navbar',
            template: __webpack_require__(/*! ./side-navbar.component.html */ "./src/app/side-navbar/side-navbar.component.html"),
            styles: [__webpack_require__(/*! ./side-navbar.component.css */ "./src/app/side-navbar/side-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SideNavbarComponent);
    return SideNavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fabian/Dokumente/Projekte/Uni/mybag/mybag/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map