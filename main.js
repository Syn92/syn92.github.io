(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _data_viz1_data_viz1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-viz1/data-viz1.component */ "./src/app/data-viz1/data-viz1.component.ts");
/* harmony import */ var _data_viz2_data_viz2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-viz2/data-viz2.component */ "./src/app/data-viz2/data-viz2.component.ts");
/* harmony import */ var _data_viz3_data_viz3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-viz3/data-viz3.component */ "./src/app/data-viz3/data-viz3.component.ts");







class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.title = 'Projet8808';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 0, consts: [["color", "primary"], [1, "main-container", 2, "padding-bottom", "100px"], [1, "description"], [1, "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projet Crypto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Visualisation 1 - Dominance du Bitcoin vs les autres cryptommonaies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Comparaison des 3 diff\u00E9rents sommet de valorisation qu'ont connus les cryptomonnaies, et comment est r\u00E9parti le capital entre elles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-data-viz1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Explication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ": L\u2019objectif de cette visualisation est de montrer la place que prend le Bitcoin par rapport aux 10 altcoins les plus capitalis\u00E9s. Chaque carr\u00E9 repr\u00E9sente donc une crypto monnaie, et son aire est proportionnelle \u00E0 sa capitalisation par rapport \u00E0 la capitalisation totale du march\u00E9. Ainsi, si la capitalisation du bitcoin repr\u00E9sente 1,1 Trillion USD$ et que la capitalisation totale est de 1,8T USD$, le bitcoin occupera 60% de l\u2019espace. En ayant les trois tree maps juxtapos\u00E9es, cela permettra de comparer les diff\u00E9rents niveaux atteints et les particularit\u00E9s d\u2019un cycle \u00E0 l\u2019autre, comme les nouveaux altcoin qui s'immiscent dans le march\u00E9. La croisance de chaque cryptomonnaies est d\u00E9termin\u00E9 par une comparaison \u00E0 sa valeur de capitalisation de l'ann\u00E9e pr\u00E9c\u00E9dente choisie, soit 2014, 2018 et 2021 (les ann\u00E9es des \"explosions\" du prix) .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Visualisation 2 - S&P500 vs Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Comparaison entre la valeur mon\u00E9taire du Bitcoin et du S&P500 pour les m\u00EAmes dates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-data-viz2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Explication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ": Cette visualisation a comme but de d\u00E9montrer l'existence ou l'inexistence d'une relation entre la capitalisation du march\u00E9 traditionnel (les 500 plus grandes compagnies, S&P500) et le march\u00E9 des crypto-monnaies (Bitcoin).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Visualisation 3 - Les cycles du march\u00E9 des cryptommonaies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Analyse des cycles du march\u00E9 et du bitcoin \u00E0 l'aide d'indicateur comme la BTC dominance et Google Trends ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-data-viz3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Explication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _data_viz1_data_viz1_component__WEBPACK_IMPORTED_MODULE_3__["DataViz1Component"], _data_viz2_data_viz2_component__WEBPACK_IMPORTED_MODULE_4__["DataViz2Component"], _data_viz3_data_viz3_component__WEBPACK_IMPORTED_MODULE_5__["DataViz3Component"]], styles: [".main-container[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 900px;\n  margin: 30px;\n}\n\n.description[_ngcontent-%COMP%] {\n  text-align: justify;\n  text-justify: inter-word;\n  font-size: 16px;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA5MDBweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _data_viz1_data_viz1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-viz1/data-viz1.component */ "./src/app/data-viz1/data-viz1.component.ts");
/* harmony import */ var _data_viz2_data_viz2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data-viz2/data-viz2.component */ "./src/app/data-viz2/data-viz2.component.ts");
/* harmony import */ var _data_viz3_data_viz3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-viz3/data-viz3.component */ "./src/app/data-viz3/data-viz3.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _data_viz1_data_viz1_component__WEBPACK_IMPORTED_MODULE_8__["DataViz1Component"],
        _data_viz2_data_viz2_component__WEBPACK_IMPORTED_MODULE_9__["DataViz2Component"],
        _data_viz3_data_viz3_component__WEBPACK_IMPORTED_MODULE_10__["DataViz3Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _data_viz1_data_viz1_component__WEBPACK_IMPORTED_MODULE_8__["DataViz1Component"],
                    _data_viz2_data_viz2_component__WEBPACK_IMPORTED_MODULE_9__["DataViz2Component"],
                    _data_viz3_data_viz3_component__WEBPACK_IMPORTED_MODULE_10__["DataViz3Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-service.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/constants */ "./src/assets/constants.ts");







class DataService {
    constructor(http) {
        this.http = http;
    }
    getProcessedDataViz1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const global2014 = yield this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NOMICS_API + '/market-cap/history', { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_SEXY1 }).toPromise();
            const global2018 = yield this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NOMICS_API + '/market-cap/history', { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_SEXY2 }).toPromise();
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    key: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY5,
                    start: today.toISOString(),
                    end: today.toISOString()
                }
            });
            const global2021 = yield this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NOMICS_API + '/market-cap/history', { params: params }).toPromise();
            const path = '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
            const coinList = yield this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].COIN_API + path, { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_BTC }).toPromise();
            const top2014 = ["bitcoin", "litecoin", "ripple", "peercoin", "omni", "nxt", "namecoin", "bitshares", "quark", "megacoin"];
            const top2018 = ["bitcoin", "ethereum", "bitcoin-cash", "ripple", "litecoin", "cardano", "iota", "dash", "nem", "monero"];
            const coinsWithMarketCap = {
                '2014': {
                    market_cap: 0,
                    coins: []
                },
                '2018': {
                    market_cap: 0,
                    coins: []
                },
                '2021': {
                    market_cap: 0,
                    coins: []
                },
            };
            const dateA2014 = Math.round((new Date(2014, 0, 5, 0, 0, 0).getTime() / 1000));
            const dateB2014 = Math.round((new Date(2014, 0, 5, 23, 59, 59).getTime() / 1000));
            console.log("fetching1");
            let tempSum = 0;
            for (const id in top2014) {
                const path1 = `/coins/${top2014[id]}/market_chart/range?vs_currency=usd&from=${dateA2014}&to=${dateB2014}`;
                const request = yield this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].COIN_API + path1, { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_BTC }).toPromise();
                coinsWithMarketCap['2014']['coins'].push({ coin: top2014[id], parent: '2014', market_cap: request.market_caps[0][1] });
                tempSum += request.market_caps[0][1];
            }
            coinsWithMarketCap['2014']['market_cap'] = Number(global2014[0].market_cap);
            coinsWithMarketCap['2014']['coins'].push({ coin: "2014", parent: '', market_cap: "" });
            coinsWithMarketCap['2014']['coins'].push({
                coin: "others", parent: '2014',
                market_cap: Math.abs(coinsWithMarketCap['2014']['market_cap'] - tempSum)
            });
            console.log("fetching2");
            const dateA2018 = Math.round((new Date(2018, 0, 7, 0, 0, 0).getTime() / 1000));
            const dateB2018 = Math.round((new Date(2018, 0, 7, 23, 59, 59).getTime() / 1000));
            tempSum = 0;
            for (const id in top2018) {
                const path1 = `/coins/${top2018[id]}/market_chart/range?vs_currency=usd&from=${dateA2018}&to=${dateB2018}`;
                const request = yield this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].COIN_API + path1, { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_BTC }).toPromise();
                coinsWithMarketCap['2018']['coins'].push({ coin: top2018[id], parent: '2018', market_cap: request.market_caps[0][1] });
                tempSum += request.market_caps[0][1];
            }
            coinsWithMarketCap['2018']['market_cap'] = Number(global2018[0].market_cap);
            coinsWithMarketCap['2018']['coins'].push({ coin: "2018", parent: '', market_cap: "" });
            coinsWithMarketCap['2018']['coins'].push({
                coin: "others", parent: '2018',
                market_cap: coinsWithMarketCap['2018']['market_cap'] - tempSum
            });
            const dateA2021 = Math.round((new Date().getTime() / 1000 - 86460 * 2));
            const dateB2021 = Math.round((new Date().getTime() / 1000 - 86400));
            tempSum = 0;
            console.log("fetching3");
            for (const coin in coinList) {
                const id = coinList[coin].id;
                const path1 = `/coins/${id}/market_chart/range?vs_currency=usd&from=${dateA2021}&to=${dateB2021}`;
                const request = yield this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].COIN_API + path1, { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_BTC }).toPromise();
                coinsWithMarketCap['2021']['coins'].push({ coin: id, parent: '2021', market_cap: request.market_caps[0][1] });
                tempSum += request.market_caps[0][1];
            }
            coinsWithMarketCap['2021']['market_cap'] = Number(global2021[0].market_cap);
            coinsWithMarketCap['2021']['coins'].push({ coin: "2021", parent: '', market_cap: "" });
            coinsWithMarketCap['2021']['coins'].push({
                coin: "others", parent: '2021',
                market_cap: coinsWithMarketCap['2021']['market_cap'] - tempSum
            });
            return coinsWithMarketCap;
        });
    }
    getProcessedDataViz2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const btc = yield this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].COIN_API + '/coins/bitcoin/market_chart/range', { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_BTC2 }).toPromise();
            return this.formatDateUnixToDate(btc.prices);
        });
    }
    retrieveData() {
        let global = this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NOMICS_API + '/market-cap/history', { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_G });
        let btc = this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].COIN_API + '/coins/bitcoin/market_chart/range', { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_BTC });
        let volume = this.http.get(_assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].NOMICS_API + '/volume/history', { params: _assets_constants__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAMS_V });
        let trend = this.http.get('assets/data/bitcoin-trend.json').toPromise();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([global, btc, volume, trend]).toPromise();
    }
    getProcessedData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.retrieveData();
            const global = this.formatDateString(res[0]);
            const btcPrice = this.formatDateUnix(res[1].prices);
            const btcDom = [];
            const volumeDetailed = res[2].map(d => {
                const date = new Date(d.timestamp);
                const vol = parseInt(d.volume);
                return [date, vol];
            });
            const volume = this.formatVolume(volumeDetailed);
            const globalMap = this.arrayToMap(global);
            const btcMC = this.arrayToMap(this.formatDateUnix(res[1].market_caps));
            const domArray = [];
            btcMC.forEach((val, key) => {
                if (!globalMap.has(key)) {
                    return;
                }
                const btc = val.value - (val.value % 1000000);
                const global = globalMap.get(key).value - (globalMap.get(key).value % 1000000);
                const temp = btc / global * 100;
                const dom = temp > 100 ? 100 : temp.toFixed(0);
                domArray.push(Number(dom));
                btcDom.push([val.timestamp, dom]);
            });
            var btcDomSmoothed = [];
            btcDomSmoothed = this.EMACalc(domArray, 20);
            for (let i = 0; i < btcDom.length; i++) {
                btcDom[i][1] = btcDomSmoothed[i];
            }
            let trend = res[3].map(e => {
                return [new Date(e.Month), e.bitcoin];
            });
            return [
                { type: "global", values: global },
                { type: "volume", values: volume },
                { type: "btcPrice", values: btcPrice },
                { type: "btcDom", values: btcDom },
                { type: "trend", values: trend },
            ];
        });
    }
    EMACalc(mArray, mRange) {
        var k = 2 / (mRange + 1);
        // first item is just the same as the first item in the input
        const emaArray = [mArray[0]];
        // for the rest of the items, they are computed with the previous one
        for (var i = 1; i < mArray.length; i++) {
            emaArray.push(mArray[i] * k + emaArray[i - 1] * (1 - k));
        }
        return emaArray;
    }
    formatVolume(data) {
        var monthIndex = [];
        const monthAvg = [];
        // get the index of the last day of every month and of the last day in the dataset
        data.forEach((v, i) => {
            if ((v[0].getFullYear() == 2013))
                return;
            if ((i == data.length - 1) || (v[0].getMonth() != data[i + 1][0].getMonth()))
                monthIndex.push(i);
        });
        // keep only every other month (Feb, Apr, Jun, Aug, Oct, Dec) of every year
        monthIndex = monthIndex.filter((v, i) => i % 2 === 1);
        // calculate average between two months (ex: between Jan and Feb, Mar and Apr, etc)
        monthIndex.forEach((v, i) => {
            if (i == 0) {
                monthAvg.push([new Date(data[v][0].getFullYear(), data[v][0].getMonth(), 0), this.calculateAverage(data.slice(0, v + 1))]);
            }
            else {
                monthAvg.push([new Date(data[v][0].getFullYear(), data[v][0].getMonth(), 0), this.calculateAverage(data.slice(monthIndex[i - 1] + 1, v + 1))]);
            }
        });
        return {
            average: monthAvg,
            detailed: data
        };
    }
    calculateAverage(arr) {
        return arr.reduce((a, b) => a + b[1], 0) / arr.length;
    }
    formatDateUnix(data) {
        const dates = [];
        data.forEach(e => {
            let d = new Date(e[0]);
            dates.push([d, e[1]]);
        });
        return dates;
    }
    formatDateUnixToDate(data) {
        const dates = [];
        data.forEach(e => {
            const d = new Date(e[0]);
            const formated = `${d.getFullYear()}-${(d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1)}-${d.getDate() >= 10 ? d.getDate() : "0" + d.getDate()}`;
            dates.push([formated, e[1]]);
        });
        return dates;
    }
    formatDateString(data) {
        const dates = [];
        data.forEach((e) => {
            let d = new Date(e.timestamp);
            dates.push([d, parseInt(e.market_cap)]);
        });
        return dates;
    }
    arrayToMap(arr) {
        const map = new Map();
        arr.forEach(e => {
            map.set(e[0].toString(), {
                timestamp: e[0],
                value: e[1]
            });
        });
        return map;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data-viz1/data-viz1.component.ts":
/*!**************************************************!*\
  !*** ./src/app/data-viz1/data-viz1.component.ts ***!
  \**************************************************/
/*! exports provided: DataViz1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViz1Component", function() { return DataViz1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function DataViz1Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
} }
const symbols = {
    bitcoin: 'BTC',
    litecoin: 'LTC',
    ripple: 'XRP',
    peercoin: 'PPC',
    omni: 'OMNI',
    nxt: 'NXT',
    namecoin: 'NMC',
    bitshares: 'BTS',
    quark: 'QRK',
    megacoin: 'MEC',
    ethereum: 'ETH',
    ['bitcoin-cash']: 'BCH',
    cardano: 'ADA',
    iota: 'MIOTA',
    dash: 'DASH',
    nem: 'NEM',
    monero: 'XMR',
    binancecoin: 'BNB',
    tether: 'USDT',
    polkadot: 'DOT',
    uniswap: 'UNI',
    dogecoin: 'DOGE',
    others: 'OTH'
};
class DataViz1Component {
    constructor(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.displaySpinner = true;
        this.coinLists = {};
        this.marketCap2014 = 0;
        this.marketCap2018 = 0;
        this.marketCap2021 = 0;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getFolder().then(res => {
                this.coinLists = res;
            }).catch((e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("dataviz1.json not found");
                this.coinLists = yield this.dataService.getProcessedDataViz1();
            })).finally(() => {
                this.displaySpinner = false;
                this.sortMofo();
                this.findSymbol();
                this.findGrowth();
                this.changeName();
                console.log(this.coinLists);
                this.displayGraph();
            });
        });
    }
    sortMofo() {
        for (const key in this.coinLists) {
            this.coinLists[key]['coins'] = this.coinLists[key]['coins'].sort((a, b) => (a.market_cap < b.market_cap) ? 1 : ((b.market_cap < a.market_cap) ? -1 : 0));
            for (const i in this.coinLists[key]['coins']) {
                this.coinLists[key]['coins'][i]['rank'] = Number(i) + 1;
            }
        }
    }
    displayGraph() {
        this.createSVG('1a', '2014');
        this.createSVG('1b', '2018');
        this.createSVG('1c', '2021');
        this.createLegend();
        this.marketCap2014 = Math.ceil(this.coinLists['2014']['market_cap'] / 1000000000);
        this.marketCap2018 = Math.ceil(this.coinLists['2018']['market_cap'] / 1000000000);
        this.marketCap2021 = Math.ceil(this.coinLists['2021']['market_cap'] / 1000000000);
    }
    createLegend() {
        const svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#legend1')
            .append("svg")
            .attr("width", '100%')
            .attr("height", '80px');
        const defs = svg.append("defs");
        const gradient = defs.append('linearGradient')
            .attr("id", "linear-gradient");
        gradient.selectAll("stop")
            .data([
            { offset: "0%", color: "DarkRed" },
            { offset: "25%", color: "IndianRed" },
            { offset: "50%", color: "DarkSeaGreen" },
            { offset: "60%", color: "Chartreuse" },
            { offset: "100%", color: "DarkGreen" }
        ])
            .enter().append("stop")
            .attr("offset", function (d) { return d.offset; })
            .attr("stop-color", function (d) { return d.color; });
        svg.append("rect")
            .attr("width", 1000)
            .attr("height", 20)
            .attr('x', 350)
            .attr('y', 35)
            .style("fill", "url(#linear-gradient)");
        svg.append('text')
            .attr('x', 630)
            .attr('y', 25)
            .text(d => "Changement de la valeur selon la dernière année évaluée")
            .attr("font-size", 18);
        svg.append('text')
            .attr('x', 335)
            .attr('y', 70)
            .text(d => "-65%")
            .attr("font-size", 16);
        svg.append('text')
            .attr('x', 860)
            .attr('y', 70)
            .text(d => "0%")
            .attr("font-size", 16);
        svg.append('text')
            .attr('x', 1340)
            .attr('y', 70)
            .text(d => "16%")
            .attr("font-size", 16);
    }
    createSVG(id, year) {
        this.display(id, year, this);
    }
    display(id, year, comp) {
        var margin = { top: 10, right: 10, bottom: 10, left: 10 }, width = 500 - margin.left - margin.right, height = 600 - margin.top - margin.bottom;
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#graph${id}`)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        if (id == '1a') {
            comp.tooltip1a = d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#graph${id}`).append('div')
                .attr('id', `tooltip${id}`)
                .style('position', 'absolute')
                .style('background-color', 'rgba(230, 230, 230)')
                .style('padding', 6)
                .style('display', 'none');
        }
        else if (id == '1b') {
            comp.tooltip1b = d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#graph${id}`).append('div')
                .attr('id', `tooltip${id}`)
                .style('position', 'absolute')
                .style('background-color', 'rgba(230, 230, 230)')
                .style('padding', 6)
                .style('display', 'none');
        }
        else {
            comp.tooltip1c = d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#graph${id}`).append('div')
                .attr('id', `tooltip${id}`)
                .style('position', 'absolute')
                .style('background-color', 'rgba(230, 230, 230)')
                .style('padding', 6)
                .style('display', 'none');
        }
        var root = d3__WEBPACK_IMPORTED_MODULE_2__["stratify"]()
            .id(function (d) { return d.coin; })
            .parentId(function (d) { return d.parent; })(comp.coinLists[year]['coins']);
        root.sum(function (d) { return d.market_cap; });
        d3__WEBPACK_IMPORTED_MODULE_2__["treemap"]()
            .tile(d3__WEBPACK_IMPORTED_MODULE_2__["treemapSquarify"].ratio(0.5))
            .size([width, height])
            .padding(4)(root);
        var colorScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([-65, -2, 0, 2, 20])
            .range(["DarkRed", "IndianRed", "DarkSeaGreen", "Chartreuse", "DarkGreen"]);
        svg
            .selectAll("rect")
            .data(root.leaves())
            .enter()
            .append("rect")
            .attr('id', function (d) { return `rank${d.data.coin}`; })
            .attr('x', function (d) { return d.x0; })
            .attr('y', function (d) { return d.y0; })
            .attr('width', function (d) { return d.x1 - d.x0; })
            .attr('height', function (d) { return d.y1 - d.y0; })
            .style("stroke", "black")
            .attr("fill", function (d) { return colorScale(d.data.growth); })
            .on("mouseover", function (event, el) {
            comp.thiccRect(d3__WEBPACK_IMPORTED_MODULE_2__["select"](this), this, comp);
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#tooltip${id}`).style('display', 'block');
        })
            .on("mouseout", function (d) {
            comp.unthiccRect(comp);
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#tooltip${id}`).style('display', 'none');
        })
            .on("mousemove", function (event, el) {
            comp.updateToolTip(id, event, el.data, comp);
        });
        svg
            .selectAll("text")
            .data(root.leaves())
            .enter()
            .append("text")
            .attr("x", function (d) {
            return ((d.x0 + d.x1) / 2) - (85 * (d.x1 - d.x0) / width) - 3;
        })
            .attr("y", function (d) {
            return ((d.y0 + d.y1) / 2) + (40 * (d.x1 - d.x0) / width);
        })
            .text(function (d) { return d.data.symbol; })
            .attr("font-size", function (d) {
            return String((100 * (d.x1 - d.x0) / width)) + "px";
        })
            .attr("fill", "white")
            .on("mouseover", function () {
            comp.thiccRect(undefined, this, comp);
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#tooltip${id}`).style('display', 'block');
        })
            .on("mouseout", function (d) {
            comp.unthiccRect(comp);
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#tooltip${id}`).style('display', 'none');
        })
            .on("mousemove", function (event, el) {
            comp.updateToolTip(id, event, el.data, comp);
        });
    }
    thiccRect(rect, element, comp) {
        const listGraphs = ['1a', '1b', '1c'];
        if (rect !== undefined)
            comp.currentElement = element;
        listGraphs.forEach(id => {
            const svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#graph${id}`);
            svg.selectAll(`#${comp.currentElement.id}`)
                .style("opacity", "0.7")
                .attr("stroke-width", 5)
                .style("stroke", "red");
        });
    }
    unthiccRect(comp) {
        const listGraphs = ['1a', '1b', '1c'];
        listGraphs.forEach(id => {
            const svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#graph${id}`);
            svg.selectAll(`#${comp.currentElement.id}`)
                .style("opacity", "1")
                .attr("stroke-width", 1)
                .style("stroke", "black");
        });
    }
    updateToolTip(id, mouseEvent, data, comp) {
        let currentToolTip = comp.tooltip1a;
        if (id === '1b') {
            currentToolTip = comp.tooltip1b;
        }
        else if (id === "1c") {
            currentToolTip = comp.tooltip1c;
        }
        currentToolTip.html(`<span id="title">
          <p>Nom: ${data.coin}</p> 
          <p style="color:${data.growth >= 0 ? "green" : "red"}">Croissance du ratio: ${data.growth}%</p>
          <p>Rang: ${data.rank}</p> 
          <p>Capitalisation: ${(data.market_cap / 1000000000).toFixed(2)}$ Milliards</p> 
        </span>`)
            .style('display', 'block')
            .style('font-size', 11.5)
            .selectAll()
            .data(data).enter()
            .append('div')
            .style('font-size', 10)
            .html(d => {
            return `${d.key}: ${Math.floor(d.price)}`;
        });
        currentToolTip
            .style("left", (mouseEvent.pageX + 20) + "px")
            .style("top", (mouseEvent.pageY + 20) + "px");
    }
    getFolder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(`assets/data/dataviz1.json`).toPromise();
        });
    }
    findGrowth() {
        for (const key in this.coinLists) {
            this.coinLists[key]['coins'].forEach(c => {
                if (key == '2018') {
                    const foundCoin = this.coinLists['2014']['coins'].find(e => e.coin == c.coin);
                    if (foundCoin) {
                        const marketRatio2014 = foundCoin.market_cap / this.coinLists['2014']['market_cap'];
                        const marketRatio2018 = c.market_cap / this.coinLists['2018']['market_cap'];
                        c['growth'] = Number(((marketRatio2018 - marketRatio2014) * 100).toFixed(1));
                    }
                }
                if (key == '2021') {
                    const foundCoin = this.coinLists['2018']['coins'].find(e => e.coin == c.coin);
                    if (foundCoin) {
                        const marketRatio2018 = foundCoin.market_cap / this.coinLists['2018']['market_cap'];
                        const marketRatio2021 = c.market_cap / this.coinLists['2021']['market_cap'];
                        c['growth'] = Number(((marketRatio2021 - marketRatio2018) * 100).toFixed(1));
                    }
                }
            });
        }
    }
    findSymbol() {
        for (const key in this.coinLists) {
            this.coinLists[key]['coins'].forEach(c => {
                const coinSymbol = symbols[c.coin];
                c['symbol'] = coinSymbol;
                c['growth'] = 0;
            });
        }
    }
    changeName() {
        for (const key in this.coinLists) {
            this.coinLists[key].coins.forEach(e => {
                if (e.coin === 'others')
                    e.coin = 'Autres cryptomonnaies';
            });
        }
    }
}
DataViz1Component.ɵfac = function DataViz1Component_Factory(t) { return new (t || DataViz1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
DataViz1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataViz1Component, selectors: [["app-data-viz1"]], decls: 16, vars: 4, consts: [["class", "loader", 4, "ngIf"], [1, "tooltip"], [1, "treemap_container"], [1, "year_titles"], ["id", "graph1a"], ["id", "graph1b"], ["id", "graph1c"], ["id", "legend1"], [1, "loader"]], template: function DataViz1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataViz1Component_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "figure", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "figure", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaySpinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ann\u00E9e 2014: Market CAP = ", ctx.marketCap2014, "$ Milliards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ann\u00E9e 2018: Market CAP = ", ctx.marketCap2018, "$ Milliards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Ann\u00E9e 2021: Market CAP = ", ctx.marketCap2021, "$ Milliards");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".loader[_ngcontent-%COMP%] {\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  width: 120px;\n  height: 120px;\n  animation: spin 2s linear infinite;\n}\n\n.year_titles[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.treemap_container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS12aXoxL2RhdGEtdml6MS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFBSyx1QkFBQTtFQUVQO0VBREU7SUFBTyx5QkFBQTtFQUlUO0FBQ0Y7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdml6MS9kYXRhLXZpejEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi55ZWFyX3RpdGxlcyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbi50cmVlbWFwX2NvbnRhaW5lciAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataViz1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-data-viz1',
                templateUrl: './data-viz1.component.html',
                styleUrls: ['./data-viz1.component.scss']
            }]
    }], function () { return [{ type: _data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data-viz2/data-viz2.component.ts":
/*!**************************************************!*\
  !*** ./src/app/data-viz2/data-viz2.component.ts ***!
  \**************************************************/
/*! exports provided: DataViz2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViz2Component", function() { return DataViz2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_d3_svg_legend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/d3-svg-legend */ "./src/assets/d3-svg-legend/indexRollupNext.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









const pinIconFull = "M 12 0 C 7.038 0 3 4.066 3 9.065 C 3 16.168 11.154 23.502 11.501 23.81 C 11.644 23.937 11.822 24 12 24 C 12.178 24 12.356 23.937 12.499 23.811 C 12.846 23.502 21 16.168 21 9.065 C 21 4.066 16.962 0 12 0 Z";
class DataViz2Component {
    constructor(dataService, http) {
        this.dataService = dataService;
        this.http = http;
        this.showLog = true;
        this.margin = { top: 10, right: 30, bottom: 30, left: 60 };
        this.width = 1000 - this.margin.left - this.margin.right;
        this.height = 600 - this.margin.top - this.margin.bottom;
        this.containerWidth = 1200;
        this.btcPrices = [];
        this.sp500 = [];
        this.cherryPickDates = [];
        this.data = [
            { type: 'btc', values: [] },
            { type: 'sp', values: [] }
        ];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getFolder().then(res => {
                this.sp500 = res;
            }).catch((e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log("sp500.json not found");
            })).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.btcPrices = yield this.dataService.getProcessedDataViz2();
                this.cherryPickDate(this.btcPrices, this.sp500);
                this.setupBaseGraph();
                this.displayGraph();
                this.drawLegend();
            }));
        });
    }
    cherryPickDate(btcPrices, sp500) {
        btcPrices.forEach(btcElement => {
            sp500.forEach(spElement => {
                if (btcElement[0] == spElement["Effective date"]) {
                    this.cherryPickDates.push({
                        date: spElement["Effective date"],
                        sp_price: spElement["S&P 500"],
                        btc_price: btcElement[1]
                    });
                    const date = d3__WEBPACK_IMPORTED_MODULE_3__["timeParse"]("%Y-%m-%d")(spElement["Effective date"]);
                    this.data[0]['values'].push([date, btcElement[1]]);
                    this.data[1]['values'].push([date, spElement["S&P 500"]]);
                }
            });
        });
    }
    setupBaseGraph() {
        this.container = d3__WEBPACK_IMPORTED_MODULE_3__["select"]('figure#graph2')
            .append('svg')
            .attr('class', 'container')
            .attr('width', this.containerWidth)
            .attr('height', this.height + 100);
    }
    displayGraph() {
        this.display(this);
    }
    display(comp) {
        var svg = this.container
            .append("svg")
            .attr("class", "unit")
            .attr("width", this.width + this.margin.left + this.margin.right + 100)
            .attr("height", this.height + this.margin.top + this.margin.bottom + 50)
            .append("g")
            .attr('transform', `translate(${this.containerWidth / 2 - this.width / 2}, ${this.margin.left})`);
        const date = [];
        this.data[0].values.forEach(e => {
            date.push(e[0]);
        });
        var xScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleTime"]()
            .domain(d3__WEBPACK_IMPORTED_MODULE_3__["extent"](date))
            .range([0, this.width]);
        svg.append("g")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_3__["axisBottom"](xScale));
        var y;
        if (comp.showLog) {
            y = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLog"]()
                .domain([
                d3__WEBPACK_IMPORTED_MODULE_3__["min"](comp.cherryPickDates, function (d) { return +d.btc_price; }),
                d3__WEBPACK_IMPORTED_MODULE_3__["max"](comp.cherryPickDates, function (d) { return +d.btc_price; }) + 20000
            ])
                .range([this.height, 0]);
        }
        else {
            y = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]()
                .domain([
                d3__WEBPACK_IMPORTED_MODULE_3__["min"](comp.cherryPickDates, function (d) { return +d.btc_price; }),
                d3__WEBPACK_IMPORTED_MODULE_3__["max"](comp.cherryPickDates, function (d) { return +d.btc_price; }) + 4000
            ])
                .range([this.height, 0]);
        }
        svg.append("g")
            .call(d3__WEBPACK_IMPORTED_MODULE_3__["axisLeft"](y)
            .tickFormat(y => {
            return `${comp.nFormatter(y, 0)}`;
        }));
        comp.colors = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"]()
            .domain(this.data.map(d => d.type))
            .range(['#4862B4', '#ff5050']);
        var line = d3__WEBPACK_IMPORTED_MODULE_3__["line"]()
            .x(d => xScale(d[0]))
            .y(d => y(d[1]));
        var lineGroup = svg.append('g')
            .attr('class', 'lines2')
            .selectAll('.line-group2')
            .data(this.data).enter()
            .append('g')
            .attr('class', 'line');
        const path = lineGroup.append('path')
            .attr('id', d => d.type)
            .attr('d', d => line(d.values))
            .style('stroke', d => comp.colors(d.type))
            .style('stroke-width', 3)
            .style('fill', 'none');
        const pin = lineGroup.append('svg')
            .attr('x', xScale(new Date(2018, 11, 9)) - 10)
            .attr('y', '-25')
            .attr('width', 1000)
            .attr('height', 1000);
        pin.append('text')
            .text("Trade war")
            .attr('x', '25')
            .attr('y', '12')
            .attr('color', 'black');
        pin.append('text')
            .text("with China")
            .attr('x', '25')
            .attr('y', '32')
            .attr('color', 'black');
        pin.append('path')
            .attr('d', pinIconFull);
        pin.append('circle')
            .attr('cx', '12')
            .attr('cy', '9')
            .attr('r', '4')
            .attr('fill', 'white');
        const pin2 = lineGroup.append('svg')
            .attr('x', xScale(new Date(2020, 2, 8)) - 10)
            .attr('y', '-25')
            .attr('width', 1000)
            .attr('height', 1000);
        pin2.append('text')
            .text("Covid 19")
            .attr('x', '25')
            .attr('y', '17')
            .attr('color', 'black');
        pin2.append('path')
            .attr('d', pinIconFull);
        pin2.append('circle')
            .attr('cx', '12')
            .attr('cy', '9')
            .attr('r', '4')
            .attr('fill', 'white');
        var mouseGroup = svg.append('g')
            .attr('class', 'mouse-over-effects2');
        mouseGroup.append('path')
            .attr('class', 'mouse-line2')
            .style('stroke', '#A9A9A9')
            .style("stroke-width", 2)
            .style("opacity", "0");
        var mousePerLine = mouseGroup.selectAll('.mouse-per-line2')
            .data(this.data)
            .enter()
            .append("g")
            .attr("class", function (d) { return `mouse-per-line2-${d.type}`; });
        mousePerLine.append("circle")
            .attr("r", 7)
            .style("stroke", function (d) {
            return comp.colors(d.type);
        })
            .style("fill", "none")
            .style("stroke-width", "2px")
            .style("opacity", "0");
        mousePerLine.append("text")
            .attr("transform", "translate(-50,-20)")
            .style("font-weight", "bold")
            .text("");
        mouseGroup.append('svg:rect')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('fill', 'none')
            .attr('pointer-events', 'all')
            .on('mouseout', function () {
            d3__WEBPACK_IMPORTED_MODULE_3__["select"](".mouse-line2")
                .style("opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-btc circle")
                .style("opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-sp circle")
                .style("opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-btc text")
                .style("opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-sp text")
                .style("opacity", "0");
        })
            .on('mouseover', function () {
            d3__WEBPACK_IMPORTED_MODULE_3__["select"](".mouse-line2")
                .style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-btc circle")
                .style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-sp circle")
                .style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-btc text")
                .style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-sp text")
                .style("opacity", "1");
        })
            .on('mousemove', function (event) {
            var mouse = d3__WEBPACK_IMPORTED_MODULE_3__["pointer"](event);
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-btc")
                .attr("transform", (d, i) => {
                var xDate = xScale.invert(mouse[0]);
                var bisect = d3__WEBPACK_IMPORTED_MODULE_3__["bisector"](d => d[0]).left;
                var idx = bisect(d["values"], xDate);
                d3__WEBPACK_IMPORTED_MODULE_3__["select"](".mouse-line2")
                    .attr("d", function () {
                    var data = "M" + xScale(d['values'][idx][0]) + "," + comp.height;
                    data += " " + xScale(d['values'][idx][0]) + "," + 0;
                    return data;
                });
                comp.displayTextMofo(mouse, comp, event, xScale, true);
                return "translate(" + xScale(d['values'][idx][0]) + "," + y(d['values'][idx][1]) + ")";
            });
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-sp")
                .attr("transform", (d, i) => {
                const xDate = xScale.invert(mouse[0]);
                const bisect = d3__WEBPACK_IMPORTED_MODULE_3__["bisector"](d => d[0]).left;
                const idx = bisect(d["values"], xDate);
                d3__WEBPACK_IMPORTED_MODULE_3__["select"](".mouse-line2")
                    .attr("d", function () {
                    let data = "M" + xScale(d['values'][idx][0]) + "," + comp.height;
                    data += " " + xScale(d['values'][idx][0]) + "," + 0;
                    return data;
                });
                comp.displayTextMofo(mouse, comp, event, xScale, false);
                return "translate(" + xScale(d['values'][idx][0]) + "," + y(d['values'][idx][1]) + ")";
            });
        });
    }
    displayTextMofo(mouse, comp, mouseEvent, xScale, isBtc) {
        const mouseValues = [];
        comp.data.map(d => {
            const xDate = xScale.invert(mouse[0]);
            const bisect = d3__WEBPACK_IMPORTED_MODULE_3__["bisector"](d => d[0]).left;
            const idx = bisect(d["values"], xDate);
            mouseValues.push({ key: d.type, date: d.values[idx][0], price: d.values[idx][1] });
        });
        const positiveValue = String(true);
        const negativeValue = String(false);
        if (String(isBtc).toLowerCase().trim().valueOf() === String(positiveValue)) {
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-btc text")
                .text(Math.ceil(mouseValues[0].price) + "$");
        }
        else if (String(isBtc).toLowerCase().trim().valueOf() === String(negativeValue)) {
            d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"](".mouse-per-line2-sp text")
                .text(Math.ceil(mouseValues[1].price) + "$");
        }
    }
    drawLegend() {
        const scaleLeft = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"]()
            .domain(['Valeur du Bitcoin', 'Valeur du S&P500'])
            .range(['#4862B4', '#ff5050']);
        const legend = _assets_d3_svg_legend__WEBPACK_IMPORTED_MODULE_2__["legendColor"]()
            .title('Légende')
            .shapeHeight(5)
            .shapeWidth(20)
            .shapePadding(5)
            .labelWrap(150)
            .scale(scaleLeft);
        this.container
            .append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(200, 100)`)
            .call(legend);
    }
    getFolder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.http.get(`assets/data/sp500.json`).toPromise();
        });
    }
    onToggle() {
        d3__WEBPACK_IMPORTED_MODULE_3__["selectAll"]('.unit').remove();
        this.displayGraph();
    }
    nFormatter(num, digits) {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "B" },
            { value: 1E12, symbol: "T" }
        ];
        var regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(regex, "$1") + si[i].symbol;
    }
}
DataViz2Component.ɵfac = function DataViz2Component_Factory(t) { return new (t || DataViz2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
DataViz2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataViz2Component, selectors: [["app-data-viz2"]], decls: 3, vars: 1, consts: [["id", "graph2"], [3, "ngModel", "ngModelChange", "change"]], template: function DataViz2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-slide-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DataViz2Component_Template_mat_slide_toggle_ngModelChange_1_listener($event) { return ctx.showLog = $event; })("change", function DataViz2Component_Template_mat_slide_toggle_change_1_listener() { return ctx.onToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00C9chelle logarithmique");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.showLog);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdml6Mi9kYXRhLXZpejIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataViz2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-data-viz2',
                templateUrl: './data-viz2.component.html',
                styleUrls: ['./data-viz2.component.scss']
            }]
    }], function () { return [{ type: _data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data-viz3/data-viz3.component.ts":
/*!**************************************************!*\
  !*** ./src/app/data-viz3/data-viz3.component.ts ***!
  \**************************************************/
/*! exports provided: DataViz3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViz3Component", function() { return DataViz3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_d3_svg_legend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/d3-svg-legend */ "./src/assets/d3-svg-legend/indexRollupNext.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-service.service */ "./src/app/data-service.service.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const pinIcon = "m12 0c-4.962 0-9 4.066-9 9.065 0 7.103 8.154 14.437 8.501 14.745.143.127.321.19.499.19s.356-.063.499-.189c.347-.309 8.501-7.643 8.501-14.746 0-4.999-4.038-9.065-9-9.065zm0 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z";
const pinIconFull = "M 12 0 C 7.038 0 3 4.066 3 9.065 C 3 16.168 11.154 23.502 11.501 23.81 C 11.644 23.937 11.822 24 12 24 C 12.178 24 12.356 23.937 12.499 23.811 C 12.846 23.502 21 16.168 21 9.065 C 21 4.066 16.962 0 12 0 Z";
class DataViz3Component {
    constructor(dataService) {
        this.dataService = dataService;
        this.RIGHT_AXIS = ['btcDom', 'trend'];
        this.LEFT_AXIS = ['global', 'volume', 'btcPrice'];
        this.offset = 100;
        this.margin = 50;
        this.containerWidth = 1500;
        this.width = 1000 - (this.margin * 2);
        this.height = 600 - (this.margin * 2);
        this.showBtc = true;
        this.showBtcDom = true;
        this.showTrend = true;
        this.showVol = true;
        this.showTotal = true;
    }
    ngOnInit() {
        this.dataService.getProcessedData().then((res) => {
            this.data = res;
            this.displayGraph();
        });
    }
    displayGraph() {
        this.setupBaseGraph();
        this.setupAxies();
        this.drawVol();
        this.drawLegend();
        this.displayLines(this);
        this.drawCycle();
    }
    setupBaseGraph() {
        this.container = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('figure#graph')
            .append('svg')
            .attr('class', 'container')
            .attr('width', this.containerWidth)
            .attr('height', this.height + (this.margin * 2));
        this.svg = this.container.append('svg')
            .append('g')
            .attr('width', this.width + (this.margin * 2))
            .attr('height', this.height + (this.margin * 2))
            .attr('transform', `translate(${this.containerWidth / 2 - this.width / 2}, ${this.margin})`);
    }
    setupAxies() {
        const date = [];
        this.data[0].values.forEach(e => {
            date.push(e[0]);
        });
        const ext = d3__WEBPACK_IMPORTED_MODULE_2__["extent"](date, d => d);
        // setup scales
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleTime"]()
            .domain([ext[0].setDate(ext[0].getDate() - 1), ext[1].setDate(ext[1].getDate() + 25)])
            .range([0, this.width]);
        const maxY1 = parseInt(d3__WEBPACK_IMPORTED_MODULE_2__["max"](this.data[0].values.map(d => d[1])));
        const minY1 = parseInt(d3__WEBPACK_IMPORTED_MODULE_2__["min"](this.data[2].values.map(d => d[1])));
        this.yScale1 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLog"]()
            .domain([minY1 - this.offset, maxY1])
            .range([this.height, this.margin]);
        this.yScale2 = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .domain([0, 100])
            .range([this.height, this.margin]);
        // Append axies to svg
        this.svg.append('g')
            .attr('transform', `translate(0, ${this.height})`)
            .attr('class', 'x axis')
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](this.xScale));
        this.svg.append('g')
            .attr('class', 'y axis1')
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](this.yScale1)
            .tickFormat(y => {
            return `${this.nFormatter(y, 0)}`;
        }));
        this.svg.append('g')
            .attr('transform', `translate(${this.width}, 0)`)
            .attr('class', 'y axis2')
            .call(d3__WEBPACK_IMPORTED_MODULE_2__["axisRight"](this.yScale2)
            .tickFormat(y => `${y}%`));
    }
    drawVol() {
        // Bar Chart of 2 month avg
        let isSmaller = false;
        this.vol = this.svg.selectAll('.bar')
            .data(this.data[1].values.average)
            .join('rect')
            .attr('class', 'bar')
            .attr('x', d => this.xScale(d[0]) - 5)
            .attr('y', d => this.yScale1(d[1]))
            .attr('width', 10)
            .attr('height', d => this.height - this.yScale1(d[1]))
            .style('fill', (d, i, e) => {
            if (i === 0)
                return 'green';
            return e[i - 1].__data__[1] < d[1] ? 'green' : 'red';
        })
            .style('opacity', 0.35)
            .style('stroke-width', 0.5);
    }
    drawLegend() {
        const scaleLeft = d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"]()
            .domain(['Capitalisation totale des cryptomonnaies', 'Valeur du Bitcoin', `Volume d'échange (incrémenté)`, `Volume d'échange (décrémenté)`])
            .range(['rgb(70, 130, 180)', '#4B0082', 'rgb(166, 211, 166)', 'rgb(255, 166, 166)']);
        const scaleRight = d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"]()
            .domain(['Dominance du bitcoin', `'Bitcoin' sur google trend US`])
            .range(['rgb(255, 165, 0)', 'rgb(255, 20, 147)']);
        const legendLeft = _assets_d3_svg_legend__WEBPACK_IMPORTED_MODULE_1__["legendColor"]()
            .title('Axe Gauche')
            .shapeHeight(5)
            .shapeWidth(20)
            .shapePadding(5)
            .labelWrap(150)
            .scale(scaleLeft);
        const legendRight = _assets_d3_svg_legend__WEBPACK_IMPORTED_MODULE_1__["legendColor"]()
            .title('Axe Droite')
            .shapeHeight(5)
            .shapeWidth(20)
            .shapePadding(5)
            .labelWrap(150)
            .scale(scaleRight);
        this.container.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(70, 100) `)
            .call(legendLeft);
        this.container.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${this.containerWidth / 2 + this.width / 2 + 80}, 100) `)
            .call(legendRight);
    }
    drawCycle() {
        const self = this;
        const cycles = [
            {
                type: 'bull',
                tooltipText: "Premiers stades du bitcoin",
                start: new Date(2013, 11, 31),
                end: new Date(2014, 5, 9),
                description: "De sa creation en 2011, jusqu'à Juin 2014, le prix d'un bitcoin grimpe de 12000% à la hausse, passant de quelques dollars a 1100$",
            },
            {
                type: 'bear',
                tooltipText: "Le marché devient baissier avec un bitcoin ayant atteint les 1 150$",
                start: new Date(2014, 5, 10),
                end: new Date(2016, 6, 8),
                description: 'Lors de ces 759 jours, le bitcoin atteint une perte de valeur de -80% passant de 1100 a 200',
            },
            {
                type: 'bull',
                tooltipText: "Le marché est haussier et le mouvement est amplifié par le halving du bitcoin",
                start: new Date(2016, 6, 9),
                end: new Date(2018, 0, 10),
                description: "Lors de ces 550 jours, le bitcoin enregistre une hausse de 9000% passant d'environ 200$ a 18 000$",
            },
            {
                type: 'bear',
                tooltipText: "Le marché redevient baissier après avoir été en zone de surévaluation, avec un Bitcoin ayant atteint les 17 000$",
                start: new Date(2018, 0, 11),
                end: new Date(2020, 4, 10),
                description: "Lors de ces 851 jours, le bitcoin decend jusqu'a une perte de -73% de sa valeur, passant de plus de 18 000$ a un peu moins de 4000$",
            },
            {
                type: 'bull',
                tooltipText: "Un nouveau halving du bitcoin, indicateur d'un nouveau cycle haussier, propulse le marché à la hausse",
                start: new Date(2020, 4, 11),
                end: new Date(2021, 3, 7),
                description: "En 380 jours, le bitcoin a deja fait plus de x10 dans ce cylce (1000%), passant d'un plus bas a 4000$ a un plus haut de 65 000$",
            }
        ];
        this.pinTooltip = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#graph").append('div')
            .attr('class', 'pinTooltip')
            .style('position', 'absolute')
            .style('display', 'none')
            .text('tooltip text');
        this.rectTooltip = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#graph").append('div')
            .attr('class', 'rectTooltip')
            .style('position', 'absolute')
            .style('display', 'none')
            .style('height', '100px');
        const te = this.svg.selectAll('.cycle')
            .data(cycles)
            .enter().append('g')
            .attr('class', 'cycle');
        const rect = te.append('rect')
            .attr('x', d => this.xScale(d.start))
            .attr('y', 0)
            .attr('width', d => this.xScale(d.end) - this.xScale(d.start))
            .attr('height', 18)
            .attr('class', 'rect')
            .style('cursor', 'pointer')
            .style('fill', d => {
            return d.type == 'bear' ? 'indianred' : 'mediumspringgreen';
        })
            .on('mouseenter', (event, d) => {
            self.rectTooltip
                .style('display', 'block')
                .style('left', (event.path[0].getBoundingClientRect().x) - ((self.xScale(d.end) - self.xScale(d.start)) < 140 ? 100 : 0) + "px")
                .style('top', Math.floor(event.pageY) - 120 + "px")
                .style('width', ((self.xScale(d.end) - self.xScale(d.start)) < 140 ? 140 : (self.xScale(d.end) - self.xScale(d.start)) + 'px'))
                .html('<span>' + d.description + '</span>');
        })
            .on('mouseleave', () => {
            self.rectTooltip
                .style('display', 'none');
        });
        te.append('text')
            .attr('x', d => this.xScale(d.start) + ((this.xScale(d.end) - this.xScale(d.start)) / 2))
            .attr('y', 14)
            .attr('text-anchor', 'middle')
            .style('pointer-events', 'none')
            .text(d => d.type);
        const pin = te.append('svg')
            .attr('x', d => this.xScale(d.start) - 10)
            .attr('y', '-25')
            .style('cursor', 'pointer');
        pin.on('mouseenter', (event, d) => {
            // hover
            self.pinTooltip
                .style('display', 'block')
                .style('left', (event.path[0].getBoundingClientRect().x - 90) + "px")
                .style('top', Math.floor(event.pageY) - 100 + "px")
                .html(`<span class="pinTooltipTextTitle">  ${d.start.getDate()}-${d.start.getMonth() + 1}-${d.start.getFullYear()} <br> </span>` + '<span class="pinTooltipText">' + d.tooltipText + '</span>')
                .style('width', '200px');
        });
        pin.on('mouseleave', () => {
            self.pinTooltip.style('display', 'none');
        });
        pin.append('path')
            .attr('d', pinIconFull);
        pin.append('circle')
            .attr('cx', '12')
            .attr('cy', '9')
            .attr('r', '4')
            .attr('fill', 'white');
    }
    // Formats number ex: 10000 => 10K
    nFormatter(num, digits) {
        var si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: "k" },
            { value: 1E6, symbol: "M" },
            { value: 1E9, symbol: "B" },
            { value: 1E12, symbol: "T" }
        ];
        var regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(regex, "$1") + si[i].symbol;
    }
    onToggle(obj, show) {
        if (typeof obj == 'string' || obj instanceof String) {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](`#${obj}`)
                // .attr('stroke-dashoffset',(d,i,e) => {return show ? e.length : 0})
                // .attr("stroke-dasharray", (d,i,e) => {return show ? e.length : 0})
                .style("visibility", show ? "visible" : "hidden");
        }
        else
            obj.style("visibility", show ? "visible" : "hidden");
    }
    displayLines(comp) {
        comp.colors = d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"]()
            .domain(this.LEFT_AXIS.concat(this.RIGHT_AXIS))
            .range(['#4682B4', '#A6D3A6', '#4B0082', '#FFA500', '#FF1493']);
        var lineLeft = d3__WEBPACK_IMPORTED_MODULE_2__["line"]()
            .x(d => this.xScale(d[0]))
            .y(d => this.yScale1(d[1]));
        var lineRight = d3__WEBPACK_IMPORTED_MODULE_2__["line"]()
            .x(d => this.xScale(d[0]))
            .y(d => this.yScale2(d[1]));
        var lineGroup = this.svg.append('g')
            .attr('class', 'lines')
            .selectAll('.line-group')
            .data(this.data.filter((d) => d.type != 'volume')).enter()
            .append('g')
            .attr('class', 'line');
        const path = lineGroup.append('path')
            .attr('id', d => d.type)
            .attr('d', d => {
            return this.LEFT_AXIS.includes(d.type) ? lineLeft(d.values) : lineRight(d.values);
        })
            .style('stroke', (d) => comp.colors(d.type))
            .style('stroke-weight', 1.5)
            .style('fill', 'none')
            .attr("stroke-dashoffset", (d, i, e) => e[i].getTotalLength())
            .attr("stroke-dasharray", (d, i, e) => e[i].getTotalLength())
            .transition(d3__WEBPACK_IMPORTED_MODULE_2__["transition"]()
            .ease(d3__WEBPACK_IMPORTED_MODULE_2__["easeSin"])
            .duration(2000))
            .attr("stroke-dashoffset", 0);
        comp.graphTooltip = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#graph").append('div')
            .attr('id', 'tooltip')
            .style('position', 'absolute')
            .style('background-color', 'rgba(122, 122, 122)')
            .style('padding', 6)
            .style('display', 'none');
        var mouseGroup = this.svg.append('g')
            .attr('class', 'mouse-over-effects');
        mouseGroup.append('path')
            .attr('class', 'mouse-line')
            .style('stroke', '#A9A9A9')
            .style("stroke-width", 2)
            .style("opacity", "0");
        var lines = document.getElementsByClassName('line');
        var mousePerLine = mouseGroup.selectAll('.mouse-per-line')
            .data(this.data)
            .enter()
            .append("g")
            .attr("class", "mouse-per-line");
        mouseGroup.append('svg:rect')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('fill', 'none')
            .attr('pointer-events', 'all')
            .on('mouseout', function () {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".mouse-line")
                .style("opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".mouse-per-line text")
                .style("opacity", "0");
            d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"]("#tooltip")
                .style('display', 'none');
        })
            .on('mouseover', function () {
            d3__WEBPACK_IMPORTED_MODULE_2__["select"](".mouse-line")
                .style("opacity", "1");
            d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"]("#tooltip")
                .style('display', 'block');
        })
            .on('mousemove', function (event) {
            var mouse = d3__WEBPACK_IMPORTED_MODULE_2__["pointer"](event);
            d3__WEBPACK_IMPORTED_MODULE_2__["selectAll"](".mouse-per-line")
                .attr("transform", (d, i) => {
                if (d['type'] == 'volume' || d['type'] == "trend")
                    return '';
                var xDate = comp.xScale.invert(mouse[0]);
                var bisect = d3__WEBPACK_IMPORTED_MODULE_2__["bisector"](d => d[0]).left;
                var idx = bisect(d["values"], xDate);
                d3__WEBPACK_IMPORTED_MODULE_2__["select"](".mouse-line")
                    .attr("d", function () {
                    var data = "M" + comp.xScale(d['values'][idx][0]) + "," + 500;
                    data += " " + comp.xScale(d['values'][idx][0]) + "," + 0;
                    return data;
                });
            });
            comp.updateTooltip(mouse, comp.data, comp, event);
        });
    }
    updateTooltip(mouse, data, comp, mouseEvent) {
        var mouseValues = [];
        data.map(d => {
            var xDate = comp.xScale.invert(mouse[0]);
            var bisect = d3__WEBPACK_IMPORTED_MODULE_2__["bisector"](d => d[0]).left;
            if (d['type'] == 'volume') {
                var idx = bisect(d.values.average, xDate);
                mouseValues.push({ key: d.type, date: d.values.average[idx][0], price: d.values.average[idx][1] });
            }
            else {
                var idx = bisect(d.values, xDate);
                mouseValues.push({ key: d.type, date: d.values[idx][0], price: d.values[idx][1] });
            }
        });
        comp.graphTooltip.html(`<span id="title">Date: ${mouseValues[0].date.getDate()}-${mouseValues[0].date.getMonth() + 1}-${mouseValues[0].date.getFullYear()}</span>`)
            .style('display', 'block')
            .style('font-size', 11.5)
            .selectAll()
            .data(mouseValues).enter() // for each vehicle category, list out name and price of premium
            .append('div')
            .style('color', d => {
            return comp.colors(d.key);
        })
            .style('font-size', 10)
            .html(d => {
            return `${d.key}: ${Math.floor(d.price)}`;
        });
        comp.graphTooltip
            .style("left", (mouseEvent.pageX + 20) + "px")
            .style("top", (mouseEvent.pageY + 20) + "px");
    }
}
DataViz3Component.ɵfac = function DataViz3Component_Factory(t) { return new (t || DataViz3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
DataViz3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataViz3Component, selectors: [["app-data-viz3"]], decls: 12, vars: 5, consts: [["id", "graph"], [1, "toggle_container"], [3, "ngModel", "ngModelChange", "change"]], template: function DataViz3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataViz3Component_Template_mat_slide_toggle_ngModelChange_2_listener($event) { return ctx.showBtc = $event; })("change", function DataViz3Component_Template_mat_slide_toggle_change_2_listener() { return ctx.onToggle("btcPrice", ctx.showBtc); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataViz3Component_Template_mat_slide_toggle_ngModelChange_4_listener($event) { return ctx.showTotal = $event; })("change", function DataViz3Component_Template_mat_slide_toggle_change_4_listener() { return ctx.onToggle("global", ctx.showTotal); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Capitalisation totale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataViz3Component_Template_mat_slide_toggle_ngModelChange_6_listener($event) { return ctx.showTrend = $event; })("change", function DataViz3Component_Template_mat_slide_toggle_change_6_listener() { return ctx.onToggle("trend", ctx.showTrend); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Google trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataViz3Component_Template_mat_slide_toggle_ngModelChange_8_listener($event) { return ctx.showBtcDom = $event; })("change", function DataViz3Component_Template_mat_slide_toggle_change_8_listener() { return ctx.onToggle("btcDom", ctx.showBtcDom); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dominance du Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataViz3Component_Template_mat_slide_toggle_ngModelChange_10_listener($event) { return ctx.showVol = $event; })("change", function DataViz3Component_Template_mat_slide_toggle_change_10_listener() { return ctx.onToggle(ctx.vol, ctx.showVol); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Volume d'\u00E9change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showBtc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showTrend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showBtcDom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showVol);
    } }, directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".toggle_container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 40%;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n\n#graph[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS12aXozL2RhdGEtdml6My5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZGF0YS12aXozL2RhdGEtdml6My5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2dnbGVfY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuI2dyYXBoIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataViz3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-viz3',
                templateUrl: './data-viz3.component.html',
                styleUrls: ['./data-viz3.component.scss']
            }]
    }], function () { return [{ type: _data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/constants.ts":
/*!*********************************!*\
  !*** ./src/assets/constants.ts ***!
  \*********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

class Constants {
}
Constants.CORS_PROXY = 'https://proxy-jantfk.herokuapp.com/';
Constants.COIN_API = "https://api.coingecko.com/api/v3";
Constants.NOMICS_API = Constants.CORS_PROXY + "https://api.nomics.com/v1";
Constants.KEY1 = '2e6869bdd813e302a273c7acd47a8272';
Constants.KEY2 = 'dd0fb6d7085993e10e3a8053075802e8';
Constants.KEY3 = '32c804afce33f622f1f820754f736009';
Constants.KEY4 = 'e2c2b9f41513ecbe6c6c8ac28fa74a08';
Constants.KEY5 = '76656826b98b98ef19af9e2b4e8cc429';
Constants.PARAMS_G = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
    fromObject: {
        key: Constants.KEY1,
        start: '2014-01-01T00:00:00Z',
        end: '2021-04-07T00:00:00Z'
    }
});
Constants.PARAMS_V = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
    fromObject: {
        key: Constants.KEY2,
        start: '2014-01-01T00:00:00Z',
        end: '2021-04-07T00:00:00Z'
    }
});
Constants.PARAMS_BTC = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
    fromObject: {
        vs_currency: 'usd',
        from: '1388552400',
        to: '1617768000'
    }
});
Constants.PARAMS_BTC2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
    fromObject: {
        vs_currency: 'usd',
        from: '1388552400',
        to: '1617768000'
    }
});
Constants.PARAMS_SEXY1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
    fromObject: {
        key: Constants.KEY3,
        start: '2014-01-05T00:00:00Z',
        end: '2014-01-05T00:00:00Z'
    }
});
Constants.PARAMS_SEXY2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({
    fromObject: {
        key: Constants.KEY4,
        start: '2018-01-07T00:00:00Z',
        end: '2018-01-07T00:00:00Z',
    }
});


/***/ }),

/***/ "./src/assets/d3-svg-legend/indexRollupNext.js":
/*!*****************************************************!*\
  !*** ./src/assets/d3-svg-legend/indexRollupNext.js ***!
  \*****************************************************/
/*! exports provided: legendColor, legendSize, legendSymbol, legendHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legendColor", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legendSize", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legendSymbol", function() { return symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legendHelpers", function() { return legendHelpers; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./src/assets/d3-svg-legend/node_modules/d3-selection/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./src/assets/d3-svg-legend/node_modules/d3-format/index.js");
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-dispatch */ "./src/assets/d3-svg-legend/node_modules/d3-dispatch/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./src/assets/d3-svg-legend/node_modules/d3-scale/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "./src/assets/d3-svg-legend/node_modules/d3-array/index.js");






var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var d3_identity = function d3_identity(d) {
  return d;
};

var d3_reverse = function d3_reverse(arr) {
  var mirror = [];
  for (var i = 0, l = arr.length; i < l; i++) {
    mirror[i] = arr[l - i - 1];
  }
  return mirror;
};

//Text wrapping code adapted from Mike Bostock
var d3_textWrapping = function d3_textWrapping(text, width) {
  text.each(function () {
    var text = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.2,
        //ems
    y = text.attr("y"),
        dy = parseFloat(text.attr("dy")) || 0,
        tspan = text.text(null).append("tspan").attr("x", 0).attr("dy", dy + "em");

    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width && line.length > 1) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("dy", lineHeight + dy + "em").text(word);
      }
    }
  });
};

var d3_mergeLabels = function d3_mergeLabels() {
  var gen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var labels = arguments[1];
  var domain = arguments[2];
  var range = arguments[3];
  var labelDelimiter = arguments[4];

  if ((typeof labels === "undefined" ? "undefined" : _typeof(labels)) === "object") {
    if (labels.length === 0) return gen;

    var i = labels.length;
    for (; i < gen.length; i++) {
      labels.push(gen[i]);
    }
    return labels;
  } else if (typeof labels === "function") {
    var customLabels = [];
    var genLength = gen.length;
    for (var _i = 0; _i < genLength; _i++) {
      customLabels.push(labels({
        i: _i,
        genLength: genLength,
        generatedLabels: gen,
        domain: domain,
        range: range,
        labelDelimiter: labelDelimiter
      }));
    }
    return customLabels;
  }

  return gen;
};

var d3_linearLegend = function d3_linearLegend(scale, cells, labelFormat) {
  var data = [];

  if (cells.length > 1) {
    data = cells;
  } else {
    var domain = scale.domain(),
        increment = (domain[domain.length - 1] - domain[0]) / (cells - 1);
    var i = 0;

    for (; i < cells; i++) {
      data.push(domain[0] + i * increment);
    }
  }

  var labels = data.map(labelFormat);
  return {
    data: data,
    labels: labels,
    feature: function feature(d) {
      return scale(d);
    }
  };
};

var d3_quantLegend = function d3_quantLegend(scale, labelFormat, labelDelimiter) {
  var labels = scale.range().map(function (d) {
    var invert = scale.invertExtent(d);
    return labelFormat(invert[0]) + " " + labelDelimiter + " " + labelFormat(invert[1]);
  });

  return {
    data: scale.range(),
    labels: labels,
    feature: d3_identity
  };
};

var d3_ordinalLegend = function d3_ordinalLegend(scale) {
  return {
    data: scale.domain(),
    labels: scale.domain(),
    feature: function feature(d) {
      return scale(d);
    }
  };
};

var d3_cellOver = function d3_cellOver(cellDispatcher, d, obj) {
  cellDispatcher.call("cellover", obj, d);
};

var d3_cellOut = function d3_cellOut(cellDispatcher, d, obj) {
  cellDispatcher.call("cellout", obj, d);
};

var d3_cellClick = function d3_cellClick(cellDispatcher, d, obj) {
  cellDispatcher.call("cellclick", obj, d);
};

var helper = {
  d3_drawShapes: function d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, path) {
    if (shape === "rect") {
      shapes.attr("height", shapeHeight).attr("width", shapeWidth);
    } else if (shape === "circle") {
      shapes.attr("r", shapeRadius);
    } else if (shape === "line") {
      shapes.attr("x1", 0).attr("x2", shapeWidth).attr("y1", 0).attr("y2", 0);
    } else if (shape === "path") {
      shapes.attr("d", path);
    }
  },

  d3_addText: function d3_addText(svg, enter, labels, classPrefix, labelWidth) {
    enter.append("text").attr("class", classPrefix + "label");
    var text = svg.selectAll("g." + classPrefix + "cell text." + classPrefix + "label").data(labels).text(d3_identity);

    if (labelWidth) {
      svg.selectAll("g." + classPrefix + "cell text." + classPrefix + "label").call(d3_textWrapping, labelWidth);
    }

    return text;
  },

  d3_calcType: function d3_calcType(scale, ascending, cells, labels, labelFormat, labelDelimiter) {
    var type = scale.invertExtent ? d3_quantLegend(scale, labelFormat, labelDelimiter) : scale.ticks ? d3_linearLegend(scale, cells, labelFormat) : d3_ordinalLegend(scale);

    //for d3.scaleSequential that doesn't have a range function
    var range = scale.range && scale.range() || scale.domain();
    type.labels = d3_mergeLabels(type.labels, labels, scale.domain(), range, labelDelimiter);

    if (ascending) {
      type.labels = d3_reverse(type.labels);
      type.data = d3_reverse(type.data);
    }

    return type;
  },

  d3_filterCells: function d3_filterCells(type, cellFilter) {
    var filterCells = type.data.map(function (d, i) {
      return { data: d, label: type.labels[i] };
    }).filter(cellFilter);
    var dataValues = filterCells.map(function (d) {
      return d.data;
    });
    var labelValues = filterCells.map(function (d) {
      return d.label;
    });
    type.data = type.data.filter(function (d) {
      return dataValues.indexOf(d) !== -1;
    });
    type.labels = type.labels.filter(function (d) {
      return labelValues.indexOf(d) !== -1;
    });
    return type;
  },

  d3_placement: function d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign) {
    cell.attr("transform", cellTrans);
    text.attr("transform", textTrans);
    if (orient === "horizontal") {
      text.style("text-anchor", labelAlign);
    }
  },

  d3_addEvents: function d3_addEvents(cells, dispatcher) {
    cells.on("mouseover.legend", function (d) {
      d3_cellOver(dispatcher, d, this);
    }).on("mouseout.legend", function (d) {
      d3_cellOut(dispatcher, d, this);
    }).on("click.legend", function (d) {
      d3_cellClick(dispatcher, d, this);
    });
  },

  d3_title: function d3_title(svg, title, classPrefix, titleWidth) {
    if (title !== "") {
      var titleText = svg.selectAll("text." + classPrefix + "legendTitle");

      titleText.data([title]).enter().append("text").attr("class", classPrefix + "legendTitle");

      svg.selectAll("text." + classPrefix + "legendTitle").text(title);

      if (titleWidth) {
        svg.selectAll("text." + classPrefix + "legendTitle").call(d3_textWrapping, titleWidth);
      }

      var cellsSvg = svg.select("." + classPrefix + "legendCells");
      var yOffset = svg.select("." + classPrefix + "legendTitle").nodes().map(function (d) {
        return d.getBBox().height;
      })[0],
          xOffset = -cellsSvg.nodes().map(function (d) {
        return d.getBBox().x;
      })[0];
      cellsSvg.attr("transform", "translate(" + xOffset + "," + yOffset + ")");
    }
  },

  d3_defaultLocale: {
    format: d3_format__WEBPACK_IMPORTED_MODULE_1__["format"],
    formatPrefix: d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"]
  },

  d3_defaultFormatSpecifier: ".01f",

  d3_defaultDelimiter: "to"
};

function color() {
  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])(),
      shape = "rect",
      shapeWidth = 15,
      shapeHeight = 15,
      shapeRadius = 10,
      shapePadding = 2,
      cells = [5],
      cellFilter = void 0,
      labels = [],
      classPrefix = "",
      useClass = false,
      title = "",
      locale = helper.d3_defaultLocale,
      specifier = helper.d3_defaultFormatSpecifier,
      labelOffset = 10,
      labelAlign = "middle",
      labelDelimiter = helper.d3_defaultDelimiter,
      labelWrap = void 0,
      orient = "vertical",
      ascending = false,
      path = void 0,
      titleWidth = void 0,
      legendDispatcher = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_2__["dispatch"])("cellover", "cellout", "cellclick");

  function legend(svg) {
    var type = helper.d3_calcType(scale, ascending, cells, labels, locale.format(specifier), labelDelimiter),
        legendG = svg.selectAll("g").data([scale]);

    legendG.enter().append("g").attr("class", classPrefix + "legendCells");

    if (cellFilter) {
      helper.d3_filterCells(type, cellFilter);
    }

    var cell = svg.select("." + classPrefix + "legendCells").selectAll("." + classPrefix + "cell").data(type.data);

    var cellEnter = cell.enter().append("g").attr("class", classPrefix + "cell");
    cellEnter.append(shape).attr("class", classPrefix + "swatch");

    var shapes = svg.selectAll("g." + classPrefix + "cell " + shape + "." + classPrefix + "swatch").data(type.data);

    //add event handlers
    helper.d3_addEvents(cellEnter, legendDispatcher);

    cell.exit().transition().style("opacity", 0).remove();
    shapes.exit().transition().style("opacity", 0).remove();

    shapes = shapes.merge(shapes);

    helper.d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, path);
    var text = helper.d3_addText(svg, cellEnter, type.labels, classPrefix, labelWrap);

    // we need to merge the selection, otherwise changes in the legend (e.g. change of orientation) are applied only to the new cells and not the existing ones.
    cell = cellEnter.merge(cell);

    // sets placement
    var textSize = text.nodes().map(function (d) {
      return d.getBBox();
    }),
        shapeSize = shapes.nodes().map(function (d) {
      return d.getBBox();
    });
    //sets scale
    //everything is fill except for line which is stroke,
    if (!useClass) {
      if (shape == "line") {
        shapes.style("stroke", type.feature);
      } else {
        shapes.style("fill", type.feature);
      }
    } else {
      shapes.attr("class", function (d) {
        return classPrefix + "swatch " + type.feature(d);
      });
    }

    var cellTrans = void 0,
        textTrans = void 0,
        textAlign = labelAlign == "start" ? 0 : labelAlign == "middle" ? 0.5 : 1;

    //positions cells and text
    if (orient === "vertical") {
      (function () {
        var cellSize = textSize.map(function (d, i) {
          return Math.max(d.height, shapeSize[i].height);
        });

        cellTrans = function cellTrans(d, i) {
          var height = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["sum"])(cellSize.slice(0, i));
          return "translate(0, " + (height + i * shapePadding) + ")";
        };

        textTrans = function textTrans(d, i) {
          return "translate( " + (shapeSize[i].width + shapeSize[i].x + labelOffset) + ", " + (shapeSize[i].y + shapeSize[i].height / 2 + 5) + ")";
        };
      })();
    } else if (orient === "horizontal") {
      cellTrans = function cellTrans(d, i) {
        return "translate(" + i * (shapeSize[i].width + shapePadding) + ",0)";
      };
      textTrans = function textTrans(d, i) {
        return "translate(" + (shapeSize[i].width * textAlign + shapeSize[i].x) + ",\n          " + (shapeSize[i].height + shapeSize[i].y + labelOffset + 8) + ")";
      };
    }

    helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
    helper.d3_title(svg, title, classPrefix, titleWidth);

    cell.transition().style("opacity", 1);
  }

  legend.scale = function (_) {
    if (!arguments.length) return scale;
    scale = _;
    return legend;
  };

  legend.cells = function (_) {
    if (!arguments.length) return cells;
    if (_.length > 1 || _ >= 2) {
      cells = _;
    }
    return legend;
  };

  legend.cellFilter = function (_) {
    if (!arguments.length) return cellFilter;
    cellFilter = _;
    return legend;
  };

  legend.shape = function (_, d) {
    if (!arguments.length) return shape;
    if (_ == "rect" || _ == "circle" || _ == "line" || _ == "path" && typeof d === "string") {
      shape = _;
      path = d;
    }
    return legend;
  };

  legend.shapeWidth = function (_) {
    if (!arguments.length) return shapeWidth;
    shapeWidth = +_;
    return legend;
  };

  legend.shapeHeight = function (_) {
    if (!arguments.length) return shapeHeight;
    shapeHeight = +_;
    return legend;
  };

  legend.shapeRadius = function (_) {
    if (!arguments.length) return shapeRadius;
    shapeRadius = +_;
    return legend;
  };

  legend.shapePadding = function (_) {
    if (!arguments.length) return shapePadding;
    shapePadding = +_;
    return legend;
  };

  legend.labels = function (_) {
    if (!arguments.length) return labels;
    labels = _;
    return legend;
  };

  legend.labelAlign = function (_) {
    if (!arguments.length) return labelAlign;
    if (_ == "start" || _ == "end" || _ == "middle") {
      labelAlign = _;
    }
    return legend;
  };

  legend.locale = function (_) {
    if (!arguments.length) return locale;
    locale = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatLocale"])(_);
    return legend;
  };

  legend.labelFormat = function (_) {
    if (!arguments.length) return legend.locale().format(specifier);
    specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(_);
    return legend;
  };

  legend.labelOffset = function (_) {
    if (!arguments.length) return labelOffset;
    labelOffset = +_;
    return legend;
  };

  legend.labelDelimiter = function (_) {
    if (!arguments.length) return labelDelimiter;
    labelDelimiter = _;
    return legend;
  };

  legend.labelWrap = function (_) {
    if (!arguments.length) return labelWrap;
    labelWrap = _;
    return legend;
  };

  legend.useClass = function (_) {
    if (!arguments.length) return useClass;
    if (_ === true || _ === false) {
      useClass = _;
    }
    return legend;
  };

  legend.orient = function (_) {
    if (!arguments.length) return orient;
    _ = _.toLowerCase();
    if (_ == "horizontal" || _ == "vertical") {
      orient = _;
    }
    return legend;
  };

  legend.ascending = function (_) {
    if (!arguments.length) return ascending;
    ascending = !!_;
    return legend;
  };

  legend.classPrefix = function (_) {
    if (!arguments.length) return classPrefix;
    classPrefix = _;
    return legend;
  };

  legend.title = function (_) {
    if (!arguments.length) return title;
    title = _;
    return legend;
  };

  legend.titleWidth = function (_) {
    if (!arguments.length) return titleWidth;
    titleWidth = _;
    return legend;
  };

  legend.textWrap = function (_) {
    if (!arguments.length) return textWrap;
    textWrap = _;
    return legend;
  };

  legend.on = function () {
    var value = legendDispatcher.on.apply(legendDispatcher, arguments);
    return value === legendDispatcher ? legend : value;
  };

  return legend;
}

function size() {
  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])(),
      shape = "rect",
      shapeWidth = 15,
      shapePadding = 2,
      cells = [5],
      cellFilter = void 0,
      labels = [],
      classPrefix = "",
      title = "",
      locale = helper.d3_defaultLocale,
      specifier = helper.d3_defaultFormatSpecifier,
      labelOffset = 10,
      labelAlign = "middle",
      labelDelimiter = helper.d3_defaultDelimiter,
      labelWrap = void 0,
      orient = "vertical",
      ascending = false,
      path = void 0,
      titleWidth = void 0,
      legendDispatcher = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_2__["dispatch"])("cellover", "cellout", "cellclick");

  function legend(svg) {
    var type = helper.d3_calcType(scale, ascending, cells, labels, locale.format(specifier), labelDelimiter),
        legendG = svg.selectAll("g").data([scale]);

    if (cellFilter) {
      helper.d3_filterCells(type, cellFilter);
    }

    legendG.enter().append("g").attr("class", classPrefix + "legendCells");

    var cell = svg.select("." + classPrefix + "legendCells").selectAll("." + classPrefix + "cell").data(type.data);
    var cellEnter = cell.enter().append("g").attr("class", classPrefix + "cell");
    cellEnter.append(shape).attr("class", classPrefix + "swatch");

    var shapes = svg.selectAll("g." + classPrefix + "cell " + shape + "." + classPrefix + "swatch");

    //add event handlers
    helper.d3_addEvents(cellEnter, legendDispatcher);

    cell.exit().transition().style("opacity", 0).remove();

    shapes.exit().transition().style("opacity", 0).remove();
    shapes = shapes.merge(shapes);

    //creates shape
    if (shape === "line") {
      helper.d3_drawShapes(shape, shapes, 0, shapeWidth);
      shapes.attr("stroke-width", type.feature);
    } else {
      helper.d3_drawShapes(shape, shapes, type.feature, type.feature, type.feature, path);
    }

    var text = helper.d3_addText(svg, cellEnter, type.labels, classPrefix, labelWrap);

    // we need to merge the selection, otherwise changes in the legend (e.g. change of orientation) are applied only to the new cells and not the existing ones.
    cell = cellEnter.merge(cell);

    //sets placement

    var textSize = text.nodes().map(function (d) {
      return d.getBBox();
    }),
        shapeSize = shapes.nodes().map(function (d, i) {
      var bbox = d.getBBox();
      var stroke = scale(type.data[i]);

      if (shape === "line" && orient === "horizontal") {
        bbox.height = bbox.height + stroke;
      } else if (shape === "line" && orient === "vertical") {
        bbox.width = bbox.width;
      }
      return bbox;
    });

    var maxH = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["max"])(shapeSize, function (d) {
      return d.height + d.y;
    }),
        maxW = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["max"])(shapeSize, function (d) {
      return d.width + d.x;
    });

    var cellTrans = void 0,
        textTrans = void 0,
        textAlign = labelAlign == "start" ? 0 : labelAlign == "middle" ? 0.5 : 1;

    //positions cells and text
    if (orient === "vertical") {
      (function () {
        var cellSize = textSize.map(function (d, i) {
          return Math.max(d.height, shapeSize[i].height);
        });
        var y = shape == "circle" || shape == "line" ? shapeSize[0].height / 2 : 0;
        cellTrans = function cellTrans(d, i) {
          var height = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["sum"])(cellSize.slice(0, i));

          return "translate(0, " + (y + height + i * shapePadding) + ")";
        };

        textTrans = function textTrans(d, i) {
          return "translate( " + (maxW + labelOffset) + ",\n          " + (shapeSize[i].y + shapeSize[i].height / 2 + 5) + ")";
        };
      })();
    } else if (orient === "horizontal") {
      (function () {
        cellTrans = function cellTrans(d, i) {
          var width = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["sum"])(shapeSize.slice(0, i), function (d) {
            return d.width;
          });
          var y = shape == "circle" || shape == "line" ? maxH / 2 : 0;
          return "translate(" + (width + i * shapePadding) + ", " + y + ")";
        };

        var offset = shape == "line" ? maxH / 2 : maxH;
        textTrans = function textTrans(d, i) {
          return "translate( " + (shapeSize[i].width * textAlign + shapeSize[i].x) + ",\n              " + (offset + labelOffset) + ")";
        };
      })();
    }

    helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
    helper.d3_title(svg, title, classPrefix, titleWidth);

    cell.transition().style("opacity", 1);
  }

  legend.scale = function (_) {
    if (!arguments.length) return scale;
    scale = _;
    return legend;
  };

  legend.cells = function (_) {
    if (!arguments.length) return cells;
    if (_.length > 1 || _ >= 2) {
      cells = _;
    }
    return legend;
  };

  legend.cellFilter = function (_) {
    if (!arguments.length) return cellFilter;
    cellFilter = _;
    return legend;
  };

  legend.shape = function (_, d) {
    if (!arguments.length) return shape;
    if (_ == "rect" || _ == "circle" || _ == "line") {
      shape = _;
      path = d;
    }
    return legend;
  };

  legend.shapeWidth = function (_) {
    if (!arguments.length) return shapeWidth;
    shapeWidth = +_;
    return legend;
  };

  legend.shapePadding = function (_) {
    if (!arguments.length) return shapePadding;
    shapePadding = +_;
    return legend;
  };

  legend.labels = function (_) {
    if (!arguments.length) return labels;
    labels = _;
    return legend;
  };

  legend.labelAlign = function (_) {
    if (!arguments.length) return labelAlign;
    if (_ == "start" || _ == "end" || _ == "middle") {
      labelAlign = _;
    }
    return legend;
  };

  legend.locale = function (_) {
    if (!arguments.length) return locale;
    locale = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatLocale"])(_);
    return legend;
  };

  legend.labelFormat = function (_) {
    if (!arguments.length) return legend.locale().format(specifier);
    specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(_);
    return legend;
  };

  legend.labelOffset = function (_) {
    if (!arguments.length) return labelOffset;
    labelOffset = +_;
    return legend;
  };

  legend.labelDelimiter = function (_) {
    if (!arguments.length) return labelDelimiter;
    labelDelimiter = _;
    return legend;
  };

  legend.labelWrap = function (_) {
    if (!arguments.length) return labelWrap;
    labelWrap = _;
    return legend;
  };

  legend.orient = function (_) {
    if (!arguments.length) return orient;
    _ = _.toLowerCase();
    if (_ == "horizontal" || _ == "vertical") {
      orient = _;
    }
    return legend;
  };

  legend.ascending = function (_) {
    if (!arguments.length) return ascending;
    ascending = !!_;
    return legend;
  };

  legend.classPrefix = function (_) {
    if (!arguments.length) return classPrefix;
    classPrefix = _;
    return legend;
  };

  legend.title = function (_) {
    if (!arguments.length) return title;
    title = _;
    return legend;
  };

  legend.titleWidth = function (_) {
    if (!arguments.length) return titleWidth;
    titleWidth = _;
    return legend;
  };

  legend.on = function () {
    var value = legendDispatcher.on.apply(legendDispatcher, arguments);
    return value === legendDispatcher ? legend : value;
  };

  return legend;
}

function symbol() {
  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])(),
      shape = "path",
      shapeWidth = 15,
      shapeHeight = 15,
      shapeRadius = 10,
      shapePadding = 5,
      cells = [5],
      cellFilter = void 0,
      labels = [],
      classPrefix = "",
      title = "",
      locale = helper.d3_defaultLocale,
      specifier = helper.d3_defaultFormatSpecifier,
      labelAlign = "middle",
      labelOffset = 10,
      labelDelimiter = helper.d3_defaultDelimiter,
      labelWrap = void 0,
      orient = "vertical",
      ascending = false,
      titleWidth = void 0,
      legendDispatcher = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_2__["dispatch"])("cellover", "cellout", "cellclick");

  function legend(svg) {
    var type = helper.d3_calcType(scale, ascending, cells, labels, locale.format(specifier), labelDelimiter),
        legendG = svg.selectAll("g").data([scale]);

    if (cellFilter) {
      helper.d3_filterCells(type, cellFilter);
    }

    legendG.enter().append("g").attr("class", classPrefix + "legendCells");

    var cell = svg.select("." + classPrefix + "legendCells").selectAll("." + classPrefix + "cell").data(type.data);
    var cellEnter = cell.enter().append("g").attr("class", classPrefix + "cell");
    cellEnter.append(shape).attr("class", classPrefix + "swatch");

    var shapes = svg.selectAll("g." + classPrefix + "cell " + shape + "." + classPrefix + "swatch");

    //add event handlers
    helper.d3_addEvents(cellEnter, legendDispatcher);

    //remove old shapes
    cell.exit().transition().style("opacity", 0).remove();
    shapes.exit().transition().style("opacity", 0).remove();
    shapes = shapes.merge(shapes);

    helper.d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, type.feature);
    var text = helper.d3_addText(svg, cellEnter, type.labels, classPrefix, labelWrap);

    // we need to merge the selection, otherwise changes in the legend (e.g. change of orientation) are applied only to the new cells and not the existing ones.
    cell = cellEnter.merge(cell);

    // sets placement
    var textSize = text.nodes().map(function (d) {
      return d.getBBox();
    }),
        shapeSize = shapes.nodes().map(function (d) {
      return d.getBBox();
    });

    var maxH = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["max"])(shapeSize, function (d) {
      return d.height;
    }),
        maxW = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["max"])(shapeSize, function (d) {
      return d.width;
    });

    var cellTrans = void 0,
        textTrans = void 0,
        textAlign = labelAlign == "start" ? 0 : labelAlign == "middle" ? 0.5 : 1;

    //positions cells and text
    if (orient === "vertical") {
      (function () {
        var cellSize = textSize.map(function (d, i) {
          return Math.max(maxH, d.height);
        });

        cellTrans = function cellTrans(d, i) {
          var height = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["sum"])(cellSize.slice(0, i));
          return "translate(0, " + (height + i * shapePadding) + " )";
        };
        textTrans = function textTrans(d, i) {
          return "translate( " + (maxW + labelOffset) + ",\n              " + (shapeSize[i].y + shapeSize[i].height / 2 + 5) + ")";
        };
      })();
    } else if (orient === "horizontal") {
      cellTrans = function cellTrans(d, i) {
        return "translate( " + i * (maxW + shapePadding) + ",0)";
      };
      textTrans = function textTrans(d, i) {
        return "translate( " + (shapeSize[i].width * textAlign + shapeSize[i].x) + ",\n              " + (maxH + labelOffset) + ")";
      };
    }

    helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
    helper.d3_title(svg, title, classPrefix, titleWidth);
    cell.transition().style("opacity", 1);
  }

  legend.scale = function (_) {
    if (!arguments.length) return scale;
    scale = _;
    return legend;
  };

  legend.cells = function (_) {
    if (!arguments.length) return cells;
    if (_.length > 1 || _ >= 2) {
      cells = _;
    }
    return legend;
  };

  legend.cellFilter = function (_) {
    if (!arguments.length) return cellFilter;
    cellFilter = _;
    return legend;
  };

  legend.shapePadding = function (_) {
    if (!arguments.length) return shapePadding;
    shapePadding = +_;
    return legend;
  };

  legend.labels = function (_) {
    if (!arguments.length) return labels;
    labels = _;
    return legend;
  };

  legend.labelAlign = function (_) {
    if (!arguments.length) return labelAlign;
    if (_ == "start" || _ == "end" || _ == "middle") {
      labelAlign = _;
    }
    return legend;
  };

  legend.locale = function (_) {
    if (!arguments.length) return locale;
    locale = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatLocale"])(_);
    return legend;
  };

  legend.labelFormat = function (_) {
    if (!arguments.length) return legend.locale().format(specifier);
    specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(_);
    return legend;
  };

  legend.labelOffset = function (_) {
    if (!arguments.length) return labelOffset;
    labelOffset = +_;
    return legend;
  };

  legend.labelDelimiter = function (_) {
    if (!arguments.length) return labelDelimiter;
    labelDelimiter = _;
    return legend;
  };

  legend.labelWrap = function (_) {
    if (!arguments.length) return labelWrap;
    labelWrap = _;
    return legend;
  };

  legend.orient = function (_) {
    if (!arguments.length) return orient;
    _ = _.toLowerCase();
    if (_ == "horizontal" || _ == "vertical") {
      orient = _;
    }
    return legend;
  };

  legend.ascending = function (_) {
    if (!arguments.length) return ascending;
    ascending = !!_;
    return legend;
  };

  legend.classPrefix = function (_) {
    if (!arguments.length) return classPrefix;
    classPrefix = _;
    return legend;
  };

  legend.title = function (_) {
    if (!arguments.length) return title;
    title = _;
    return legend;
  };

  legend.titleWidth = function (_) {
    if (!arguments.length) return titleWidth;
    titleWidth = _;
    return legend;
  };

  legend.on = function () {
    var value = legendDispatcher.on.apply(legendDispatcher, arguments);
    return value === legendDispatcher ? legend : value;
  };

  return legend;
}

var thresholdLabels = function thresholdLabels(_ref) {
  var i = _ref.i,
      genLength = _ref.genLength,
      generatedLabels = _ref.generatedLabels,
      labelDelimiter = _ref.labelDelimiter;

  if (i === 0) {
    var values = generatedLabels[i].split(" " + labelDelimiter + " ");
    return "Less than " + values[1];
  } else if (i === genLength - 1) {
    var _values = generatedLabels[i].split(" " + labelDelimiter + " ");
    return _values[0] + " or more";
  }
  return generatedLabels[i];
};

var legendHelpers = {
  thresholdLabels: thresholdLabels
};

var index = {
  legendColor: color,
  legendSize: size,
  legendSymbol: symbol,
  legendHelpers: legendHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=indexRollupNext.js.map


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\Documents\GitHub\Projet-8808\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map