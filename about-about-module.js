(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");





const routes = [{ path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }];
class AboutRoutingModule {
}
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _skill_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill.model */ "./src/app/about/skill.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






const _c0 = function (a0) { return { "background": a0 }; };
const _c1 = function (a0, a1) { return { "background": a0, width: a1 }; };
const _c2 = function (a0) { return { barWidth: a0 }; };
const _c3 = function (a0, a1) { return { value: a0, params: a1 }; };
function AboutComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngbTooltip", skill_r2.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("percent", "", skill_r2.skillLevel, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, skill_r2.titleColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, skill_r2.barColor, skill_r2.skillLevel + "%"))("@expand", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c3, skill_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, skill_r2.skillLevel)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r2.skillLevel, "%");
} }
class AboutComponent {
    constructor() {
        this.isTechnologyDescriptionCollapsed = true;
        this.skills = _skill_model__WEBPACK_IMPORTED_MODULE_2__["Skill"].skills;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 140, vars: 4, consts: [["itemprop", "url", "href", "https://cdn.jsdelivr.net/npm/devicons@1.8.0/css/devicons.min.css", "rel", "stylesheet"], [1, "container"], [1, "row"], [1, "col-lg-8", "col-md-10", "mx-auto"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "col-12", "col-md-4"], ["src", "assets/img/portrait.jpg", 1, "img-thumbnail"], [1, "col-12", "col-md-8"], [1, "card-text"], ["href", "https://www.construct.net/pl"], ["href", "https://forum.pasja-informatyki.pl/"], ["href", "https://github.com/amiroslaw"], ["href", "https://www.linkedin.com/in/arkadiusz-miroslaw/"], ["href", "mailto:ar.miroslaw@gmail.com"], ["id", "skills", 1, "card"], ["class", "skill", 4, "ngFor", "ngForOf"], ["id", "technologies", 1, "card"], ["type", "button", "aria-controls", "text-technology", 1, "btn", "btn-info", "float-right", 3, "click"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "row", "mx-auto"], [1, "col-12", "col-sm-3"], [1, "card-title"], ["id", "devicons", 1, "list-inline", "text-center"], ["ngbTooltip", "java", 1, "list-inline-item"], [1, "devicons", "devicons-java"], ["ngbTooltip", "Android", 1, "list-inline-item"], [1, "devicons", "devicons-android"], ["ngbTooltip", "Spring Boot- w trakcie nauki", 1, "list-inline-item"], ["src", "assets/img/about/icons/spring-invert.png"], ["ngbTooltip", "Hibernate", 1, "list-inline-item"], ["src", "assets/img/about/icons/hibernate-invert.png"], ["ngbTooltip", "MySQL", 1, "list-inline-item"], [1, "devicons", "devicons-mysql"], ["ngbTooltip", "git", 1, "list-inline-item"], [1, "devicons", "devicons-git"], ["ngbTooltip", "HTML5", 1, "list-inline-item"], [1, "devicons", "devicons-html5"], ["ngbTooltip", "CSS3", 1, "list-inline-item"], [1, "devicons", "devicons-css3"], ["ngbTooltip", "Java Script", 1, "list-inline-item"], [1, "devicons", "devicons-javascript"], ["ngbTooltip", "jQuery", 1, "list-inline-item"], [1, "devicons", "devicons-jquery"], ["ngbTooltip", "Bootstrap", 1, "list-inline-item"], [1, "devicons", "devicons-bootstrap"], ["ngbTooltip", "Wordpress", 1, "list-inline-item"], [1, "devicons", "devicons-wordpress"], ["ngbTooltip", "Linux", 1, "list-inline-item"], [1, "devicons", "devicons-linux"], ["ngbTooltip", "Photoshop", 1, "list-inline-item"], [1, "devicons", "devicons-photoshop"], [1, "skill"], ["placement", "top", 1, "skillbar", "clearfix", 3, "ngbTooltip", "percent"], [1, "skillbar-title", 3, "ngStyle"], [1, "skillbar-bar", 3, "ngStyle"], [1, "skill-bar-percent"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "O blogu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lubi\u0119 ucz\u0119 si\u0119 nowych technologii i przy okazji sporz\u0105dzam notatki. Blog powsta\u0142 z my\u015Bl\u0105 dzielenia si\u0119 moj\u0105 poka\u017An\u0105 bibliotek\u0105 zapisk\u00F3w. Chcia\u0142bym te\u017C, aby moje posty s\u0142u\u017Cy\u0142y mi do przypomnienia i utrwalenia wiedzy, wi\u0119c moje teksty b\u0119d\u0105 cz\u0119sto przybiera\u0142y form\u0119 kr\u00F3tkich skrypt\u00F3w. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Opr\u00F3cz temat\u00F3w programistycznych pojawia\u0107 si\u0119 b\u0119d\u0105 posty o programach napisanych na Linuksy oraz ich konfiguracj\u0105. Nie by\u0142bym sob\u0105 jakbym od czasu do czasu nie zamieszcza\u0142 wpis\u00F3w z moimi zainteresowaniami oraz zabarwia\u0142 teksty poczuciem humoru (cz\u0119sto b\u0105tpliwej jako\u015Bci) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Kim jestem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Sko\u0144czy\u0142em studia Zarz\u0105dzania (pollub) oraz Informatyki (WSPiA), na kt\u00F3rych zacz\u0105\u0142em przygod\u0119 z Jav\u0105 i pokrewnymi technologiami. W jednej z pracy nauczy\u0142em si\u0119 tworzy\u0107 gry przy pomocy kreatora ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Construct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " i strony internetowe. Jestem zwolennikiem system\u00F3w GNU/Linux oraz wolnego oprogramowania. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Najcz\u0119\u015Bciej udzielam si\u0119 na forum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "pasja-informatyki");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " pod nickiem miro. Moje projekty (niekt\u00F3re s\u0105 stare) s\u0105 na ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ". Wi\u0119cej informacji o mnie mo\u017Cna znale\u017A\u0107 w profilu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ". We wszystkich sprawach prosz\u0119 pisa\u0107 do mnie pod tym adresem- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "ar.miroslaw@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Umiej\u0119tno\u015Bci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AboutComponent_div_43_Template, 7, 17, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Technologie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function AboutComponent_Template_div_ngbCollapseChange_50_listener($event) { return ctx.isTechnologyDescriptionCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Java 7/8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Android");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Spring Boot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "JavaFX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Bazy danych");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Hibernate/JPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "SQLite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "ORMLite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Bootstrap 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Java Script");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "jQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Testing i inne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "JUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Mockito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "SOLID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Personalnie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Nie samym kodem cz\u0142owiek \u017Cyje, czyli kilka s\u0142\u00F3w o moich zainteresowaniach. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " W wolnych chwilach opr\u00F3cz programowania staram si\u0119 inwestowa\u0107 oraz poznawa\u0107 nowe kultury poprzez kontakt z lud\u017Ami z innych kraj\u00F3w. Dla odpr\u0119\u017Cenia i lepszego samopoczucia biegam i je\u017Cd\u017C\u0119 na rolkach. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isTechnologyDescriptionCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isTechnologyDescriptionCollapsed == true ? "Rozwi\u0144" : "Zwi\u0144", " opis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isTechnologyDescriptionCollapsed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".skillbar[_ngcontent-%COMP%] {\n  position:relative;\n  display:block;\n  margin-bottom:15px;\n  width:100%;\n  height:35px;\n  background:#eee;\n  border-radius:3px;\n  -moz-border-radius:3px;\n  -webkit-border-radius:3px;\n  transition:0.4s linear;\n  transition-property:width, background-color;\n}\n.skillbar-title[_ngcontent-%COMP%] {\n  padding-top: 7px;\n  position:absolute;\n  padding: 7px 0 0 15px;\n  top:0;\n  left:0;\n  width:121px;\n  height: 35px;\n  font-weight:bold;\n  font-size:13px;\n  color:#ffffff;\n  background:#6adcfa;\n  -webkit-border-top-left-radius:3px;\n  -webkit-border-bottom-left-radius:4px;\n  -moz-border-radius-topleft:3px;\n  -moz-border-radius-bottomleft:3px;\n  border-top-left-radius:3px;\n  border-bottom-left-radius:3px;\n}\n.skillbar-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display:block;\n  background:rgba(0, 0, 0, 0.1);\n  padding:0 20px;\n  height:35px;\n  line-height:35px;\n  -webkit-border-top-left-radius:3px;\n  -webkit-border-bottom-left-radius:3px;\n  -moz-border-radius-topleft:3px;\n  -moz-border-radius-bottomleft:3px;\n  border-top-left-radius:3px;\n  border-bottom-left-radius:3px;\n}\n.skillbar-bar[_ngcontent-%COMP%] {\n  height:35px;\n  background:#6adcfa;\n  border-radius:3px;\n  -moz-border-radius:3px;\n  -webkit-border-radius:3px;\n}\n.skill-bar-percent[_ngcontent-%COMP%] {\n  position:absolute;\n  right:10px;\n  top:0;\n  font-size:11px;\n  height:35px;\n  line-height:35px;\n  color:#ffffff;\n  color:rgba(0, 0, 0, 0.4);\n}\n\n#devicons[_ngcontent-%COMP%]{\n  font-size: 70px;\n  color: #6C7C7F\n}\n#devicons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #17A2B8;\n}\n#devicons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #6C7C7F;\n  width: 70px;\n  height: 70px;\n}\n#devicons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  background: #17A2B8;\n}\n#technologies[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   div.collapse[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7dUlBRXVJO0FBQ3ZJO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFLekIsc0JBQXNCO0VBS3RCLDJDQUEyQztBQUM3QztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsS0FBSztFQUNMLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixLQUFLO0VBQ0wsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGVBQWU7RUFDZjtBQUNGO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnNraWxscyBiYXIgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uc2tpbGxiYXIge1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgZGlzcGxheTpibG9jaztcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MzVweDtcbiAgYmFja2dyb3VuZDojZWVlO1xuICBib3JkZXItcmFkaXVzOjNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOjNweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjNweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOjAuNHMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246MC40cyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOjAuNHMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOjAuNHMgbGluZWFyO1xuICB0cmFuc2l0aW9uOjAuNHMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6d2lkdGgsIGJhY2tncm91bmQtY29sb3I7XG4gIC1tb3otdHJhbnNpdGlvbi1wcm9wZXJ0eTp3aWR0aCwgYmFja2dyb3VuZC1jb2xvcjtcbiAgLW1zLXRyYW5zaXRpb24tcHJvcGVydHk6d2lkdGgsIGJhY2tncm91bmQtY29sb3I7XG4gIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6d2lkdGgsIGJhY2tncm91bmQtY29sb3I7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6d2lkdGgsIGJhY2tncm91bmQtY29sb3I7XG59XG5cbi5za2lsbGJhci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBwYWRkaW5nOiA3cHggMCAwIDE1cHg7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIHdpZHRoOjEyMXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gIGZvbnQtc2l6ZToxM3B4O1xuICBjb2xvcjojZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiM2YWRjZmE7XG4gIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHg7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OjNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6M3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHg7XG59XG5cbi5za2lsbGJhci10aXRsZSBzcGFuIHtcbiAgZGlzcGxheTpibG9jaztcbiAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6MCAyMHB4O1xuICBoZWlnaHQ6MzVweDtcbiAgbGluZS1oZWlnaHQ6MzVweDtcbiAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjNweDtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6M3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDozcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjNweDtcbn1cblxuLnNraWxsYmFyLWJhciB7XG4gIGhlaWdodDozNXB4O1xuICBiYWNrZ3JvdW5kOiM2YWRjZmE7XG4gIGJvcmRlci1yYWRpdXM6M3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6M3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6M3B4O1xufVxuXG4uc2tpbGwtYmFyLXBlcmNlbnQge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgcmlnaHQ6MTBweDtcbiAgdG9wOjA7XG4gIGZvbnQtc2l6ZToxMXB4O1xuICBoZWlnaHQ6MzVweDtcbiAgbGluZS1oZWlnaHQ6MzVweDtcbiAgY29sb3I6I2ZmZmZmZjtcbiAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4vKnRlY2hub2xvZ3kgaWNvbnMqL1xuI2Rldmljb25ze1xuICBmb250LXNpemU6IDcwcHg7XG4gIGNvbG9yOiAjNkM3QzdGXG59XG4jZGV2aWNvbnMgbGk6aG92ZXIge1xuICBjb2xvcjogIzE3QTJCODtcbn1cbiNkZXZpY29ucyBpbWcge1xuICBiYWNrZ3JvdW5kOiAjNkM3QzdGO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuI2Rldmljb25zIGltZzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxN0EyQjg7XG59XG4jdGVjaG5vbG9naWVzIC5jYXJkLWJvZHkgZGl2LmNvbGxhcHNlIGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '8%' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(6000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '{{barWidth}}%' }))
                ], { params: { barWidth: 33 } })
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '8%' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(6000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ width: '{{barWidth}}%' }))
                        ], { params: { barWidth: 33 } })
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about/skill.model.ts":
/*!**************************************!*\
  !*** ./src/app/about/skill.model.ts ***!
  \**************************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
class Skill {
    constructor(name, tooltip, skillLevel, titleColor, barColor) {
        this.name = name;
        this.tooltip = tooltip;
        this.skillLevel = skillLevel;
        this.titleColor = titleColor;
        this.barColor = barColor;
    }
}
Skill.skills = [
    new Skill('Java', 'Android, Spring Boot, JavaFX', 75, '#27ae60', '#2ecc71'),
    new Skill('SQL', 'Hibernate, SQLite, ORMLite, MySql', 50, '#2980b9', '#3498db'),
    new Skill('Testing', 'jUnit, Mockito', 30, '#46465e', '#5a68a5'),
    new Skill('HTML5 CSS3', 'Bootstrap 4', 55, '#d35400', '#e67e22'),
    new Skill('Java Script', 'jQuery', 30, '#FFA000', '#FFC107'),
    new Skill('Construct', 'Construct', 60, '#7B1FA2', '#9C27B0')
];


/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map