webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/activities/activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".activities {\n  font-family: 'Roboto', sans-serif;\n  padding-left: 90px;\n  padding-right: 90px;\n  margin-top: 20px;\n}\n\n.activities h2 {\n  font-size: 20px;\n}\n\n.activity-name {\n  font-size: 22px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 700;\n  margin-top: 13px;\n}\n\n.activity-time {\n  margin-top: 3px;\n}\n\n.activity-desc {\n\n}\n\n.activity-role {\n  margin-top:15px;\n}\n\n.activities button {\n  float: right;\n}\n\n.activity-row {\n  padding-top: 34px;\n}\n\n.activity-img {\n  padding-top: 17px;\n  width: 320px;\n}\n\n.activity-instruction {\n\n}\n\n.activity-card {\n  padding-left: 10px;\n  padding-right:10px;\n  background: #F5F5F5;\n  min-height:440px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.message {\n  display: none;\n}\n\n.divider {\n  margin-top: 9px;\n}\n\n@media\n  only screen and (max-width: 1199px) {\n\n  .activities {\n    display: none;\n  }\n\n  .message {\n    display: block;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    /* width: 100px; */\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n  }\n\n  .use-laptop {\n    font-size: 50px;\n    width:100%;\n    text-align: center;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"activities\">\n  <h2 class=\"activity-instruction\">These activities are designed for you to explore different scenarios concerning\n    evaluation and mentoring and probing nuances of faculty decision-making. The statements in the games should provoke\n    reflection and discussion of bias. </h2>\n  <div class=\"row activity-row\">\n    <!--class.selected will be added when we select one of the cards-->\n    <div class=\"col-md-4 col-lg-4 \" *ngFor=\"let activity of activities\">\n      <div class=\"activity-card\">\n        <img class=\"activity-img\" alt=\"{{activity.name}} image\" [src]=activity.image_src>\n        <div class=\"activity-name\">{{activity.name}}</div>\n        <div class=\"activity-time\"><i>{{activity.time}}</i></div>\n        <hr class=\"divider\">\n        <div class=\"activity-role\"><b>Introduction:</b>\n        <div class=\"activity-desc\">{{activity.short_description}}</div>\n        <div class=\"activity-role\"><b>Your Role:</b>\n          <br>{{activity.your_role}}\n        </div>\n        <button (click)=\"goToNextPage(activity)\">Play Game</button>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div class=\"message\">\n  <p class=\"use-laptop\">This game has a fair amount of text, therefore it has not been designed to work on phones and\n    tablets. please use a laptop or desktop to view this game.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_service__ = __webpack_require__("../../../../../src/app/activities/activities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivitiesComponent = (function () {
    function ActivitiesComponent(activitiesService, router) {
        this.activitiesService = activitiesService;
        this.router = router;
    }
    ActivitiesComponent.prototype.getActivities = function () {
        var _this = this;
        this.activitiesService.getActivities().then(function (activities) { return _this.activities = activities; });
    };
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.getActivities();
    };
    ActivitiesComponent.prototype.onSelect = function (activity) {
        this.selectedActivity = activity;
    };
    ActivitiesComponent.prototype.goToNextPage = function (activity) {
        if (activity.activityId == 1) {
            this.router.navigate(['/simulated-meeting']);
        }
        else if (activity.activityId == 2) {
            this.router.navigate(['/nyc']);
        }
        else {
            this.router.navigate(['/annotated-vita']);
        }
    };
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'activities',
            template: __webpack_require__("../../../../../src/app/activities/activities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activities/activities.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__activities_service__["a" /* ActivitiesService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activities/activities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activities__ = __webpack_require__("../../../../../src/app/activities/activities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ActivitiesService = (function () {
    function ActivitiesService() {
    }
    ActivitiesService.prototype.getActivities = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__activities__["a" /* ACTIVITIES */]);
    };
    ActivitiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ActivitiesService);
    return ActivitiesService;
}());



/***/ }),

/***/ "../../../../../src/app/activities/activities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [
    {
        "activityId": 1,
        "name": "The Simulated Meeting",
        "time": "20 mins to complete",
        "short_description": "Join in unit-level committee discussion of a tenure/promotion case.",
        "your_role": "Professor serving on a committee",
        "image_src": "../../assets/panel.png"
    },
    {
        "activityId": 2,
        "name": "Navigate your Career",
        "time": "10 mins to complete",
        "short_description": "Consider how decisions about personal and professional issues could affect your career.",
        "your_role": "Mentor to candidate up for tenure",
        "image_src": "../../assets/maze.png"
    },
    {
        "activityId": 3,
        "name": "Annotated Vita",
        "time": "15 mins to complete",
        "short_description": "Read a hypothetical example of a successful mentoring session for faculty.",
        "your_role": "Observer",
        "image_src": "../../assets/av.png"
    }
];


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_activities_component__ = __webpack_require__("../../../../../src/app/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simulated_meeting_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulated_meeting_game_sm_game_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/game/sm-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nyc_main_page_nyc_main_page_component__ = __webpack_require__("../../../../../src/app/nyc/main-page/nyc-main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nyc_game_nyc_game_component__ = __webpack_require__("../../../../../src/app/nyc/game/nyc-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__av_av_game_component__ = __webpack_require__("../../../../../src/app/av/av-game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'activity', component: __WEBPACK_IMPORTED_MODULE_2__activities_activities_component__["a" /* ActivitiesComponent */] },
    { path: 'simulated-meeting', component: __WEBPACK_IMPORTED_MODULE_3__simulated_meeting_main_page_main_page_component__["a" /* MainPageComponent */] },
    { path: 'simulated-meeting/:id', component: __WEBPACK_IMPORTED_MODULE_4__simulated_meeting_game_sm_game_component__["a" /* SimulatedMeetingComponent */] },
    { path: 'nyc/:id', component: __WEBPACK_IMPORTED_MODULE_6__nyc_game_nyc_game_component__["a" /* NYCComponent */] },
    { path: 'nyc', component: __WEBPACK_IMPORTED_MODULE_5__nyc_main_page_nyc_main_page_component__["a" /* NYCMainPageComponent */] },
    { path: 'annotated-vita', component: __WEBPACK_IMPORTED_MODULE_7__av_av_game_component__["a" /* AVDialogComponent */] },
    /* { path: 'hero/:id',      component: HeroDetailComponent },
     {
     path: 'heroes',
     component: HeroListComponent,
     data: { title: 'Heroes List' }
     },*/
    {
        path: '',
        redirectTo: '/activity',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n#container {\n  min-height:100%;\n  position:relative;\n}\n*/\n\n#container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n#header {\n  min-height: 44px;\n  background-color: #ebb728;\n\n}\n\n#body {\n  padding-bottom: 0px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  font-size: 16px;\n}\n\n\n\n#footer {\n  /*  position:absolute;\n    bottom:0;*/\n  min-height: 84.83px;\n  background-color: #ebb728;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" class=\"front\">\n  <header id=\"gt-header\" role=\"banner\">\n\n    <div class='gt-background-gt-header'>\n\n      <div class=\"gt-gt-header\">\n        <div class=\"gt-header-linkbar\">\n\n          <div class=\"gt-header-logo\"><a href=\"http://www.gatech.edu/\"><img alt=\"Georgia Institute of Technology\"\n                                                                            src=\"../assets/gt-logo.svg\"></a></div>\n\n          <div class=\"gt-header-gt-right\">\n\n            <nav role=\"navigation\" aria-label=\"Georgia Tech Campus Links\">\n              <ul>\n                <li class=\"gt-ctn\"><a href=\"http://www.gatech.edu/creating-the-next\">Creating the Next</a></li>\n                <li><a id=\"gt-campustoggle\" class=\"gt-campustoggle\" href=\"#\">Directories / Maps</a></li>\n              </ul>\n            </nav>\n\n          </div>\n\n        </div>\n      </div><!-- gt-gt-header -->\n\n      <div class=\"gt-gt-header-tray\" id=\"gt-header-tray\">\n\n        <div class=\"gt-tray-container gt-tech-links\" id=\"gt-tech-links\">\n          <nav id=\"header-links\" role=\"navigation\" aria-label=\"Directory and Map Links\">\n            <ul class=\"menu\">\n              <li class=\"ulink\"><a href=\"http://www.directory.gatech.edu\">Campus Directory</a></li>\n              <li class=\"ulink\"><a href=\"http://map.gtalumni.org\">Campus Map</a></li>\n            </ul>\n          </nav>\n        </div><!-- gt-tray-container gt-tech-links -->\n\n        <div class=\"gt-tray-container gt-search-as-tray\" id=\"gt-search-as-tray\">\n          <form action=\"/search/node\" method=\"get\" accept-charset=\"UTF-8\" class=\"search-form search-tray-form\">\n            <div\n              class=\"js-form-item form-item js-form-type-search form-type-search js-form-item-keys form-item-keys form-no-label\">\n              <label id=\"gt-searchlabel\" for=\"gt-search-field-tray\">Search</label>\n              <input title=\"Enter the terms you wish to search for.\" data-drupal-selector=\"edit-keys\" type=\"search\"\n                     id=\"gt-search-field-tray\" name=\"keys\" size=\"15\" maxlength=\"128\" value=\"Search This Site\"\n                     class=\"form-search\"/>\n              <button id=\"gt-searchsubmit\" type=\"submit\">Search Site</button>\n            </div>\n          </form>\n        </div><!-- gt-tray-container gt-search-as-tray-->\n\n      </div><!-- gt-gt-header-tray -->\n\n\n    </div><!-- gt-background-gt-header -->\n\n  </header>\n  <div id=\"body\">\n    <router-outlet></router-outlet>\n  </div>\n  <footer id='gt-footer'>\n\n    <div class='gt-background-gt-footer'>\n\n\n      <div class=\"gt-gt-footer\">\n        <div class=\"gt-gt-footer-left\">\n          <ul class=\"gt-gt-footer-legallinks\">\n\n            <li><a href=\"http://www.gatech.edu/emergency/\">Emergency Information</a></li>\n            <li><a href=\"http://www.gatech.edu/legal/\">Legal &amp; Privacy Information</a></li>\n            <li><a href=\"http://www.gatech.edu/accessibility/\">Accessibility</a></li>\n            <li><a href=\"http://www.gatech.edu/accountability/\">Accountability</a></li>\n            <li><a href=\"https://www.gatech.edu/accreditation/\">Accreditation</a></li>\n            <li><a href=\"http://ohr.gatech.edu/employment/careers\">Employment</a></li>\n\n          </ul>\n          <p class=\"gt-gt-footer-copyright\">&copy;2017 Georgia Institute of Technology</p>\n        </div>\n\n        <div class=\"gt-gt-footer-right\">\n          <a href=\"http://www.gatech.edu/\"><img alt=\"Georgia Institute of Technology\"\n                                                src=\"../assets/gt-logo.svg\"/></a>\n        </div>\n\n      </div><!-- gt-gt-footer -->\n\n    </div><!-- gt-background-gt-footer -->\n\n  </footer>\n</div>\n<!--<main-page-sm></main-page-sm>-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activities_activities_component__ = __webpack_require__("../../../../../src/app/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activities_activities_service__ = __webpack_require__("../../../../../src/app/activities/activities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__simulated_meeting_main_page_main_page_service__ = __webpack_require__("../../../../../src/app/simulated-meeting/main-page/main-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__simulated_meeting_main_page_main_page_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/main-page/main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__simulated_meeting_game_sm_game_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/game/sm-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__simulated_meeting_game_sm_game_service__ = __webpack_require__("../../../../../src/app/simulated-meeting/game/sm-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__simulated_meeting_panelist_dialog_panelist_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/panelist-dialog/panelist-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__simulated_meeting_cv_dialog_cv_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/cv-dialog/cv-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__simulated_meeting_casestudy_dialog_casestudy_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/casestudy-dialog/casestudy-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__simulated_meeting_game_transcript_sm_transcript_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/game/transcript/sm-transcript.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__exit_exit_component__ = __webpack_require__("../../../../../src/app/exit/exit-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__complete_activity_complete_activity_component__ = __webpack_require__("../../../../../src/app/complete-activity/complete-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__nyc_main_page_nyc_main_page_service__ = __webpack_require__("../../../../../src/app/nyc/main-page/nyc-main-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__nyc_main_page_nyc_main_page_component__ = __webpack_require__("../../../../../src/app/nyc/main-page/nyc-main-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__nyc_game_transcript_nyc_transcript_component__ = __webpack_require__("../../../../../src/app/nyc/game/transcript/nyc-transcript.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__nyc_game_nyc_game_service__ = __webpack_require__("../../../../../src/app/nyc/game/nyc-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__nyc_game_nyc_game_component__ = __webpack_require__("../../../../../src/app/nyc/game/nyc-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__nyc_game_explanationDialog_explanation_dialog_component__ = __webpack_require__("../../../../../src/app/nyc/game/explanationDialog/explanation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__nyc_game_final_dialog_final_dialog_component__ = __webpack_require__("../../../../../src/app/nyc/game/final-dialog/final-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__av_av_game_component__ = __webpack_require__("../../../../../src/app/av/av-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__av_av_game_service__ = __webpack_require__("../../../../../src/app/av/av-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__av_transcript_av_transcript_component__ = __webpack_require__("../../../../../src/app/av-transcript/av-transcript.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__complete_av_complete_av_component__ = __webpack_require__("../../../../../src/app/complete-av/complete-av.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__activities_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__simulated_meeting_main_page_main_page_component__["a" /* MainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__simulated_meeting_game_sm_game_component__["a" /* SimulatedMeetingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__simulated_meeting_panelist_dialog_panelist_dialog_component__["a" /* PanelistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__simulated_meeting_cv_dialog_cv_dialog_component__["a" /* CvDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__simulated_meeting_casestudy_dialog_casestudy_dialog_component__["a" /* CaseStudyDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__simulated_meeting_game_transcript_sm_transcript_component__["a" /* SimulatedMeetingTranscriptComponent */],
                __WEBPACK_IMPORTED_MODULE_19__exit_exit_component__["a" /* ExitDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__complete_activity_complete_activity_component__["a" /* CompleteActivityDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_22__nyc_main_page_nyc_main_page_component__["a" /* NYCMainPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__nyc_game_transcript_nyc_transcript_component__["a" /* NYCTranscriptComponent */],
                __WEBPACK_IMPORTED_MODULE_25__nyc_game_nyc_game_component__["a" /* NYCComponent */],
                __WEBPACK_IMPORTED_MODULE_26__nyc_game_explanationDialog_explanation_dialog_component__["a" /* ExplanationDialog */],
                __WEBPACK_IMPORTED_MODULE_27__nyc_game_final_dialog_final_dialog_component__["a" /* FinalDialog */],
                __WEBPACK_IMPORTED_MODULE_28__av_av_game_component__["a" /* AVDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_30__av_transcript_av_transcript_component__["a" /* AVTranscriptComponent */],
                __WEBPACK_IMPORTED_MODULE_31__complete_av_complete_av_component__["a" /* CompleteAVActivityDialogComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__simulated_meeting_panelist_dialog_panelist_dialog_component__["a" /* PanelistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__simulated_meeting_cv_dialog_cv_dialog_component__["a" /* CvDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_16__simulated_meeting_casestudy_dialog_casestudy_dialog_component__["a" /* CaseStudyDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__simulated_meeting_game_transcript_sm_transcript_component__["a" /* SimulatedMeetingTranscriptComponent */],
                __WEBPACK_IMPORTED_MODULE_19__exit_exit_component__["a" /* ExitDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__complete_activity_complete_activity_component__["a" /* CompleteActivityDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__nyc_game_explanationDialog_explanation_dialog_component__["a" /* ExplanationDialog */],
                __WEBPACK_IMPORTED_MODULE_23__nyc_game_transcript_nyc_transcript_component__["a" /* NYCTranscriptComponent */],
                __WEBPACK_IMPORTED_MODULE_27__nyc_game_final_dialog_final_dialog_component__["a" /* FinalDialog */],
                __WEBPACK_IMPORTED_MODULE_30__av_transcript_av_transcript_component__["a" /* AVTranscriptComponent */],
                __WEBPACK_IMPORTED_MODULE_31__complete_av_complete_av_component__["a" /* CompleteAVActivityDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["b" /* MatProgressBarModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__activities_activities_service__["a" /* ActivitiesService */], __WEBPACK_IMPORTED_MODULE_7__simulated_meeting_main_page_main_page_service__["a" /* MainPageService */], __WEBPACK_IMPORTED_MODULE_11__simulated_meeting_game_sm_game_service__["a" /* SMGameService */], __WEBPACK_IMPORTED_MODULE_21__nyc_main_page_nyc_main_page_service__["a" /* NYCMainPageService */], __WEBPACK_IMPORTED_MODULE_24__nyc_game_nyc_game_service__["a" /* NYCGameService */], __WEBPACK_IMPORTED_MODULE_29__av_av_game_service__["a" /* AvGameService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/av-transcript/av-transcript.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.dialog {\n  min-height: 50px;\n  text-align: left;\n  /* width: inherit; */\n  border-radius: 5px;\n  border: solid;\n  border-width: 1px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.19);\n  position: relative;\n  border-color: #0D3055;\n}\n\n.dialog-committee {\n  min-height: 50px;\n  text-align: left;\n  /* width: inherit; */\n  border-radius: 5px;\n  border: solid;\n  border-width: 1px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.19);\n  position: relative;\n  border-color: #EFB211;\n}\n.image {\n  height: 40px;\n  width: 40px;\n}\n\n.info-icon {\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  width: 15px;\n  height: 15px;\n}\n\n.info-icon:hover {\n  cursor: pointer;\n}\n\n.dialog-content-transcript {\n  padding-right:12px;\n}\n\n.sub-heading {\n  font-size:12px;font-weight:300;\n}\n\n.sub-heading-icon{\n  width:12px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/av-transcript/av-transcript.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"close\" (click)=\"onNoClick()\" src=\"../../assets/multiply.png\">\n</div>\n<h2 mat-dialog-title>Annotated Vita Transcript</h2>\n<hr>\n\n<mat-dialog-content>\n  <div>\n    <div class=\"row\" *ngFor=\"let dialog of conversation\">\n\n      <div class=\"col-md-1\">\n        <img [src]=\"constructImageName(dialog.speakerName)\" class=\"image\">\n      </div>\n      <div  class=\"col-md-10 dialog\">\n        <p class=\"dialog-content-transcript\">{{dialog.text}}</p>\n\n      </div>\n    </div>\n  </div>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/av-transcript/av-transcript.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AVTranscriptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AVTranscriptComponent = (function () {
    function AVTranscriptComponent(dialogRef, data, router, route) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.route = route;
    }
    AVTranscriptComponent.prototype.onNoClick = function () {
        this.router.navigate(['/activity']);
        this.dialogRef.close();
    };
    AVTranscriptComponent.prototype.constructImageName = function (imageName) {
        return "../../assets/av/" + imageName + "_small.png";
    };
    AVTranscriptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'av-transcript',
            template: __webpack_require__("../../../../../src/app/av-transcript/av-transcript.component.html"),
            styles: [__webpack_require__("../../../../../src/app/av-transcript/av-transcript.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AVTranscriptComponent);
    return AVTranscriptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/av/av-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-page {\n  font-size: 16px;\n  min-height: 100%;\n}\n\n.main-page .header {\n  font-size: 20px;\n  font-weight: 700;\n  margin-top: 20px;\n}\n\n.main-page .candidate-name {\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 5px;\n  margin-bottom: 6px;\n}\n\n.main-page .candidate-short-desc {\n  font-size: 12px;\n  margin-top: 3px;\n  padding-bottom: 5px;\n}\n\n.right-panel {\n  max-width: 889px;\n  margin-left: 20px;\n  margin-top: auto;\n  margin-bottom:auto;\n  min-height: 100%;\n}\n\n.activity-instruction {\n  font-size: 20px;\n}\n\n.choose-candidate-card {\n  margin-top: 12px;\n  background-color: #F5F5F5;\n  border-style: solid;\n  border-width: 13px;\n  border-color: white;\n\n}\n\n.cv-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n  width: 100%;\n}\n\n.cv-card:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.candidate-card {\n  margin-top: 10px;\n  background-color: #F5F5F5;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.other-panelists {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.other-panelists:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.selected {\n  box-shadow: 0 0 10px #EFB211;\n}\n\n.choose-candidates {\n  margin-top: -15px;\n}\n\n.candidate-img {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 80px;\n  width: 80px;\n}\n\n.details-case {\n  background-color: #F5F5F5;\n  margin-top: -30px;\n\n}\n\n.view-details-left {\n  background-color: white;\n  font-size: 8px;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-top: 12px;\n}\n\n.view-details {\n  background-color: white;\n  margin-top: 18px;\n  font-size: 12px;\n  margin-left: 48px;\n  padding-left: 0px;\n  padding-right: 0px;\n  transition: all 200ms ease-out;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.view-details:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.button-blue {\n  color: white;\n  font-size: 16px;\n  background-color: #0D3055;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.truncate {\n  padding-left: 25px;\n  padding-right: 25px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 18px;\n  margin-top: 18px;\n}\n\n.logo {\n  display: block;\n  margin: auto;\n}\n\n.left-panel {\n  box-shadow: 0 4px 8px 0 rgba(164, 164, 164, 0.51), 0 6px 20px 0 rgba(164, 164, 164, 0.5);\n  padding-top: 20px;\n  position: relative;\n  height: 100%;\n  height: -moz-available; /* WebKit-based browsers will ignore this. */\n  height: -webkit-stretch; /* Mozilla-based browsers will ignore this. */\n  height: -webkit-fill-available;\n  height: stretch;\n}\n\n.back-to-main-page {\n  font-size: 16px;\n  font-weight: 400;\n  border-width: 1px;\n  border-color: black;\n  background-color: white;\n  border-radius: 0;\n  margin-bottom: 10px;\n  width: 100%;\n\n}\n\n.read-about-fellows {\n  margin-left: 15px;\n}\n\n.panelist-name {\n  margin-top: 34px;\n  font-size: 16px;\n  font-weight: 700;\n  margin-left: 10px;\n}\n\n.other-panelists {\n  background-color: white;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.play-game {\n  margin-top: 10px;\n  font-weight: 700;\n  background-color: #0D3055;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  border-radius: 5px;\n  height: 34px; /* Safari */\n  transition-duration: 0.4s;\n  float: right;\n  margin-bottom: 10px;\n}\n\n.submit {\n  font-weight: 700;\n  background-color: #0D3055;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  border-radius: 5px; /* Safari */\n  transition-duration: 0.4s;\n}\n\n.submit:hover {\n  background-color: #EFB211; /* Green */\n  color: white;\n  cursor: pointer;\n}\n\n.play-game:hover {\n  background-color: #EFB211; /* Green */\n  color: white;\n  cursor: pointer;\n}\n\n.shadow {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.control-button {\n  float: right;\n  background-color: #0D3055;\n  height: 40px;\n\n}\n\n.control-button:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.control-panel {\n  height: 50px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 5px;\n}\n\n.progress-bar-container {\n  padding: 8px 2px 13px 2px;\n  height: 20px;\n  margin-bottom: 15px;\n  width: 100%;\n  background-color: #f5f5f5;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.panel-dialog {\n  position: absolute;\n  top: 11%;\n  left: 8%;\n  font-size: 16px;\n  width: 87%;\n}\n\n.transcript {\n  font-size: 20px;\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n  text-align: center;\n  color: white;\n}\n\n.logo:hover {\n  cursor: pointer;\n}\n\n.back-to-main-page:hover {\n  cursor: pointer;\n}\n\n.left-panel-container {\n  width: 100%;\n  min-height: 640px;\n}\n\n.left-panel-child {\n  margin-left: 30px;\n  margin-right: 20px;\n}\n\n.hr-style {\n  margin-top: 20px;\n}\n\n.candidate-profile-header {\n  margin-top: 10px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.candidate-image {\n  padding-left: 15px;\n  width: 100px;\n}\n\n.cv-heading {\n  background-color: #0D3055;\n  width: 100%;\n  padding-left: 10px;\n}\n\n.cv-heading-text {\n  color: white;\n  font-size: 16px;\n  text-align: center;\n}\n\n.cv-snippet {\n  margin-top: 18px;\n}\n\n.case-study-heading {\n  background-color: #EFB211;\n  width: 100%;\n  padding-left: 10px;\n}\n\n.case-study-heading-text {\n  color: white;\n  font-size: 16px;\n  text-align: center;\n}\n\n.exit-activity-container {\n  color: black;\n  text-align: center;\n}\n\n.exit-activity-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.panelist-image {\n  width: 100%;\n  position: relative\n}\n\n.arrow-right {\n  padding: 5px;\n  width: 24px;\n}\n\n.arrow-left {\n  padding: 5px;\n  width: 24px;\n}\n\n.options-container {\n  height: 35%;\n  background-color: #F6F6F6;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: block;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  padding-top: 2px;\n  padding-left: 10px;\n}\n\n.options-container-text {\n  font-size: 17px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.submit-button-container {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\n.transcript-button {\n  width: auto;\n  height: auto;\n  background-color: #0D3055;\n  cursor: pointer;\n}\n\n.error {\n  margin-top: 10px;\n}\n\n.warning-icon {\n  width: 16px;\n}\n\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 10px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n.open-dialog {\n  float: right;\n  padding-bottom: 10px;\n  padding-right: 10px;\n  font-size: 13px;\n}\n\n.coffee-shop {\n  height: 550px;\n  position: relative\n}\n\n.coffee-shop-dialog {\n  position: absolute;\n  top: 10.5%;\n  left: 14%;\n  right: 20%;\n}\n\n.conversation-right-panel {\n  height: 550px;\n  background: #F6F6F6;\n  font-size: 16px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.conversation-bullets {\n  overflow: scroll;\n  max-height: 500px;\n  list-style-type: none;\n  margin-top: 30px;\n  padding-left: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/av/av-dialogs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AVDIALOGS; });
var AVDIALOGS = [
    {
        "name": "Carl Anders",
        "id": 1,
        "conversation": [
            {
                "statementKey": "1",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Are you as busy as I am this time of term? I can only talk for an hour because I have to go back to my office to see groups of students working on projects.",
                "extra": ""
            },
            {
                "statementKey": "2",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "Yes, it's a difficult time. I appreciate your taking time to talk with me about getting my dossier ready now to submit to the chair.",
                "extra": ""
            },
            {
                "statementKey": "2a",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "These deadlines always approach so fast, with it being so close to summer.",
                "extra": ""
            },
            {
                "statementKey": "3",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Yes. We used to turn in paperwork after the summer, when everyone had time to update the cv and write the narrative. ",
                "extra": ""
            },
            {
                "statementKey": "3a",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Now, submitting a draft in the spring that goes to reviewers ensures that they have enough time to read and comment on the candidate's scholarship, even though it's a busier time of year.",
                "extra": ""
            },
            {
                "statementKey": "4",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "Well, I have some specific questions about what I should highlight in my narrative and what goes where on my cv. I hope that's ok to ask you.",
                "extra": ""
            },
            {
                "statementKey": "5",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Absolutely. It's good to show your documents to a senior faculty member who might notice something you miss, as long as that person is not going to be on the review committee next year.",
                "extra": ""
            },
            {
                "statementKey": "6",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "I think I am most worried about my teaching scores, which used to be quite strong but have steadily declined in the past two or three years.",
                "extra": "When he first joined the faculty, Anders was regarded by faculty and students alike as a fine teacher. He was even mentioned as a prospect for a teaching award. His teaching was considered strong and would have contributed to a strong cv. Later, when the new chair came to the department, his scores suffered as a result of new constraints added to his schedule."
            },
            {
                "statementKey": "7",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "It’s been hard for me to manage research commitments and service with a four-day teaching schedule. ",
                "extra": ""
            },
            {
                "statementKey": "7a",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "I used to be able to excel in teaching when the old chair was more flexible with my schedule and understood all my accessibility and scheduling issues.",
                "extra": ""
            },
            {
                "statementKey": "8",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "It is important that you accurately represent your entire history of teaching and explain any missteps in teaching. It might even help if you could suggest a strategy to improve teaching.",
                "extra": ""
            },
            {
                "statementKey": "9",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "I know. With my disability, I can’t spend too much time sitting in my office waiting for students. I don’t think they understand how painful it is to overexert myself that way.",
                "extra": ""
            },
            {
                "statementKey": "9",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": " Some students appear personally offended if I suggest that we communicate instead via email or phone.",
                "extra": ""
            },
            {
                "statementKey": "10",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "It’s hard for them to approach faculty at all, so they might feel rejected or that you're completely inaccessible. But perhaps you might offer to make other arrangements.",
                "extra": ""
            },
            {
                "statementKey": "11",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "Too many times their idea of convenience is the day before the project.",
                "extra": ""
            },
            {
                "statementKey": "11a",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "Over time, I’ve had to be very detailed about assignments and build in time for questions about assignments into class meetings so that everyone is on the same page all along.",
                "extra": ""
            },
            {
                "statementKey": "12",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Those are the type of teaching strategies that might not be noted on the cv, but they can be part of a teaching portfolio and be mentioned in your narrative.",
                "extra": ""
            },
            {
                "statementKey": "13",
                "speakerNumber": 3,
                "speakerName": "Katie",
                "image": "../../assets/av/katie.png",
                "text": "Dr. Anders? Hi! How are you? Oh, am I interrupting something?",
                "extra": ""
            },
            {
                "statementKey": "14",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-K.png",
                "text": "Oh, hi. No, not at all. I remember you..Katie? Is that right? This is my colleague, Dr. Androtti.",
                "extra": ""
            },
            {
                "statementKey": "15",
                "speakerNumber": 3,
                "speakerName": "Katie",
                "image": "../../assets/av/katie.png",
                "text": "Yes, that's right. It's been a couple of years. My minor in CS is over, and I'm just concentrating on my major now. But I miss taking your class. It was one of my favorites.",
                "extra": ""
            },
            {
                "statementKey": "16",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-K.png",
                "text": "That's great to hear. Sometimes I think the students only show up to get credit for attending.",
                "extra": ""
            },
            {
                "statementKey": "17",
                "speakerNumber": 3,
                "speakerName": "Katie",
                "image": "../../assets/av/katie.png",
                "text": "Well, that probably is the case sometimes, but your class was really interesting.",
                "extra": ""
            },
            {
                "statementKey": "18",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-K.png",
                "text": "Sounds like it was a good experience. If you don't mind me asking, why did you enjoy the class?",
                "extra": ""
            },
            {
                "statementKey": "19",
                "speakerNumber": 3,
                "speakerName": "Katie",
                "image": "../../assets/av/katie.png",
                "text": "Well, let me think. The material itself was already interesting. And Dr. Anders was enthusiastic about teaching the material. He was also patient when students asked questions. ",
                "extra": ""
            },
            {
                "statementKey": "19a",
                "speakerNumber": 3,
                "speakerName": "Katie",
                "image": "../../assets/av/katie.png",
                "text": "I gotta go, Dr. Anders, but it was good seeing you again.",
                "extra": ""
            },
            {
                "statementKey": "20",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-K.png",
                "text": "Sure, absolutely. I'll see you around. Thanks.",
                "extra": ""
            },
            {
                "statementKey": "21",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "So, a couple of years ago you were probably more enthusiastic about teaching in general and it showed, and you seemed more accessible. ",
                "extra": ""
            },
            {
                "statementKey": "21a",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "How open are you with students about the specific medical constraints you have to deal with?",
                "extra": ""
            },
            {
                "statementKey": "22",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "Well, I assume students know that my disability affects my availability because my disability is visible.",
                "extra": ""
            },
            {
                "statementKey": "22a",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "I don't go into depth about the bus scheduling or how hard it can be to get to campus because I don't want to complain in the classroom.",
                "extra": ""
            },
            {
                "statementKey": "23",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "You could briefly address your disability in class and on the syllabus. Run what you say by your Chair or other colleagues first to see if there is way to state your condition and issues without whining.",
                "extra": ""
            },
            {
                "statementKey": "23a",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "It would help everyone to discuss these issues openly and completely.",
                "extra": ""
            },
            {
                "statementKey": "24",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "Well, I don't want them to have pity on me, although maybe being clear about limitations would help. ",
                "extra": ""
            },
            {
                "statementKey": "24a",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "But I'm weary of approaching the chair about that again, because she seemed so aloof and indifferent before.",
                "extra": ""
            },
            {
                "statementKey": "25",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Oh, yes, I remember that. But I think that this change in scheduling, from two days of teaching to four must be documented in your narrative as affecting your teaching scores.",
                "extra": ""
            },
            {
                "statementKey": "26",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "That is a good point. I guess I should accurately represent how many more constraints I am dealing with now than before.",
                "extra": ""
            },
            {
                "statementKey": "27",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Absolutely. A good place to start, before you even write the narrative, is to discuss new teaching strategies with your Chair or even other colleagues, including speaking openly with students. ",
                "extra": ""
            },
            {
                "statementKey": "27a",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Students might be open to meeting elsewhere or other accommodations if they see the reason behind it. Then maybe your teaching scores would improve.",
                "extra": ""
            },
            {
                "statementKey": "28",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "OK, I'll schedule a meeting with the chair to discuss what I can communicate with students about my disability and necessary accommodations, especially regarding office hours.",
                "extra": ""
            },
            {
                "statementKey": "29",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "I have a couple of questions about representing my research, teaching and service. Have I put too much time into research? I'm not sure how to demonstrate accomplishment in teaching other than scores or in service.",
                "extra": ""
            },
            {
                "statementKey": "30",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Research comes first here, because this university expects its faculty to be first-class researchers above all. We are keen to increase our national reputation. ",
                "extra": ""
            },
            {
                "statementKey": "30a",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Research and funding are critical. You must publish and present your work. What have you published so far?",
                "extra": ""
            },
            {
                "statementKey": "31",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "So far I've published or coauthored 20 articles in peer-reviewed journals. 10 of these papers have also been included in Proceedings of various conferences. Additionally, for this coming year, I have three articles that will be published.",
                "extra": ""
            },
            {
                "statementKey": "32",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Well, your publication record seems strong. And your teaching will hopefully improve now that we have suggested some strategies for your to discuss with your Chair. Are you presenting anywhere?",
                "extra": ""
            },
            {
                "statementKey": "33",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "I'm presenting a paper this year at CHI and 2 at SIGGRAPH. I'm also presenting at two smaller conferences during the summer, one in Switzerland and the other in Greece. And I've just been told that NSF will award that big grant.",
                "extra": ""
            },
            {
                "statementKey": "34",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "Sounds impressive. What about service? Have you done service for the University or the greater academic community?",
                "extra": ""
            },
            {
                "statementKey": "35",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "I was appointed to a Presidential Commission. The Commission's main goal is to try to recruit and retain more students with disabilities into information technology. ",
                "extra": ""
            },
            {
                "statementKey": "35a",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "We're trying to formulate outreach efforts and to improve accessibility on campuses.",
                "extra": ""
            },
            {
                "statementKey": "36",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "That sounds excellent. Anything else?",
                "extra": ""
            },
            {
                "statementKey": "37",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "Well, within computing, there are several panels that are trying to explore novel interdisciplinary approaches. My future projects include investigating health and assistive technologies. ",
                "extra": ""
            },
            {
                "statementKey": "37a",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "I will speak with or even to see if maybe there could be some avenue to follow.",
                "extra": ""
            },
            {
                "statementKey": "38",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "It's tricky to represent pursuing research partnerships as service on your CV and narrative, as these count for research, but serving on the commission is definitely service.",
                "extra": "[They are interrupted by Alex Bettor. Alex is a colleague in engineering who was recently promoted and tenured.]"
            },
            {
                "statementKey": "39",
                "speakerNumber": 4,
                "speakerName": "Alex",
                "image": "../../assets/av/alex.png",
                "text": "Hey, how are you all doing? I haven’t seen you all in months, since the dean’s holiday party.",
                "extra": ""
            },
            {
                "statementKey": "40",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-A.png",
                "text": "We are reviewing Carl’s preparations for submitting his dossier. Do you have tips to share?",
                "extra": ""
            },
            {
                "statementKey": "41",
                "speakerNumber": 4,
                "speakerName": "Alex",
                "image": "../../assets/av/alex.png",
                "text": "Hmm, my big tip is that you should make sure to think about how people who don’t know your work would read it. Your work should be represented as accurately as possible. ",
                "extra": ""
            },
            {
                "statementKey": "41a",
                "speakerNumber": 4,
                "speakerName": "Alex",
                "image": "../../assets/av/alex.png",
                "text": "It can be a challenge to work on this stuff over and over again. Your eyes glaze over any mistakes. That’s why you have Tina here to help.",
                "extra": ""
            },
            {
                "statementKey": "42",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-A.png",
                "text": "Yes, I'm glad she's able to look at things with fresh eyes. Should I have any additional reviewers or is she enough?",
                "extra": ""
            },
            {
                "statementKey": "43",
                "speakerNumber": 4,
                "speakerName": "Alex",
                "image": "../../assets/av/alex.png",
                "text": "Good question. You should also have someone else who has never seen your stuff read it. It doesn’t even have to be a faculty member here as long as that person is a good reader who can pick out any contradictions or repetitions.",
                "extra": ""
            },
            {
                "statementKey": "44",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-A.png",
                "text": "What do you mean by contradictions and repetitions?",
                "extra": ""
            },
            {
                "statementKey": "45",
                "speakerNumber": 4,
                "speakerName": "Alex",
                "image": "../../assets/av/alex.png",
                "text": "Your cv and narrative need to be consistent and complement each other so that information in one doesn’t contradict or unnecessarily repeat what’s in the other. ",
                "extra": ""
            },
            {
                "statementKey": "45a",
                "speakerNumber": 4,
                "speakerName": "Alex",
                "image": "../../assets/av/alex.png",
                "text": "Your description of your research in your narrative should unfold from the factual listings in your cv.",
                "extra": ""
            },
            {
                "statementKey": "46",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-A.png",
                "text": "That’s a great way to put it. Reviewers and committee members need to see the candidate’s past achievements and future trajectory of productivity as related and reasonably connected.",
                "extra": ""
            },
            {
                "statementKey": "46a",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-A.png",
                "text": "The representations in the narrative and cv should work together so that readers understand the field you work in and your contributions to it.",
                "extra": ""
            },
            {
                "statementKey": "47",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-A.png",
                "text": "I had to work a long time on explaining in clear, accessible terms what my field is. Most people outside science and engineering don’t know what thermodynamics is much less understand formulas about heat transfer.",
                "extra": ""
            },
            {
                "statementKey": "48",
                "speakerNumber": 4,
                "speakerName": "Alex",
                "image": "../../assets/av/alex.png",
                "text": "Well, it was nice to see you, but I've got to be going now. I have meeting soon. Carl, let me know if you want to talk about this again.",
                "extra": "[Carl and Tina say goodbye to Alex Bettor and notice Camille Danton, a colleague in a computer science department at another institution. They invite her to join them.]"
            },
            {
                "statementKey": "49",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "Camille, we've been talking about putting together a package for tenure as Carl will be coming up soon. ",
                "extra": ""
            },
            {
                "statementKey": "49a",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "Carl, following up what Alex was saying describing your research in accessible terms, it's also important to set your work in the context of the goals of the institution.",
                "extra": ""
            },
            {
                "statementKey": "50",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "Yes, now that I'm in the dean's office at our place, I have a better sense of how research areas converge.",
                "extra": ""
            },
            {
                "statementKey": "50a",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "Since units and the institution have developed mission statements identifying areas of focus, it is important that each candidate's research areas be related to these missions.",
                "extra": ""
            },
            {
                "statementKey": "50b",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "The narrative should begin with a description of your field and how your work supports the unit's goals. ",
                "extra": ""
            },
            {
                "statementKey": "50c",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "This description helps identify you to colleagues in other units and colleagues who will see your dossier at other levels in the decision making process.",
                "extra": ""
            },
            {
                "statementKey": "51",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-C.png",
                "text": "Well, I will look carefully at our unit's mission statement so that I can best describe what I do. Can I quote it in my narrative?",
                "extra": ""
            },
            {
                "statementKey": "52",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "You should use some of the keywords and explain your contributions to the unit's mission that should demonstrate how your research and teaching fit the needs and focal areas of the institute.",
                "extra": ""
            },
            {
                "statementKey": "53",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "The hard thing will be to make sure that my narrative is precise, comprehensive, and only three pages.",
                "extra": ""
            },
            {
                "statementKey": "54",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "And you should try to make it easy for the reader to see important information. Arrange the material topically and use fonts that show a hierarchy of topics. ",
                "extra": ""
            },
            {
                "statementKey": "54a",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "The outline of your argument, your story of career development and contributions, should be clear. The document should flow. It should have a logical progression. ",
                "extra": ""
            },
            {
                "statementKey": "54b",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "I thought of my narrative as having a beginning, middle, and end that told the story of my career in documenting my professional accomplishments.",
                "extra": ""
            },
            {
                "statementKey": "55",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-C.png",
                "text": "Your whole career? I was planning to describe only significant accomplishments during the time I've been here.",
                "extra": ""
            },
            {
                "statementKey": "56",
                "speakerNumber": 4,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "Yes, you should describe five significant accomplishments, which are most often specific projects, publications or clusters of publications.",
                "extra": ""
            },
            {
                "statementKey": "57",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "It is good if you set those accomplishments within the context of your career. ",
                "extra": ""
            },
            {
                "statementKey": "57a",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "That background of where you were educated and worked before, what you are doing now, and what you are planning to do constructs the beginning, middle, and end of the story.",
                "extra": ""
            },
            {
                "statementKey": "58",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-C.png",
                "text": "So I can mention what my future projects will be?",
                "extra": ""
            },
            {
                "statementKey": "59",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "Yes, but mention them as natural outgrowths of what you have worked on before and are working on now.",
                "extra": ""
            },
            {
                "statementKey": "60",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "Even though you might not have planned out your career, your research, in logical order, someone who reads your narrative and looks at your vita should be able to see the connections that link projects together.",
                "extra": ""
            },
            {
                "statementKey": "61",
                "speakerNumber": 2,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "Because it connects my career interests, that commission on disabilities has been rewarding to be part of, although corresponding with them, writing parts of reports, and traveling to occasional meetings takes a toll.",
                "extra": ""
            },
            {
                "statementKey": "61a",
                "speakerNumber": 2,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "Being on that commission has been time-consuming.",
                "extra": ""
            },
            {
                "statementKey": "62",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "Even though it’s a lot of time, it’s worth doing because it spotlights your research and gives you a chance to impact public policy. The administration and your colleagues understand that.",
                "extra": ""
            },
            {
                "statementKey": "63",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "But that work also has an impact on teaching in some way. You are considering how to recruit and retain more students with disabilities into the University.",
                "extra": ""
            },
            {
                "statementKey": "64",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "That’s two ways to beef up the teaching part of your dossier. First, you need to explain a range of teaching strategies that encourage student participation as part of your teaching portfolio. ",
                "extra": ""
            },
            {
                "statementKey": "64a",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina-C.png",
                "text": "Second, you need to explain your work on the commission as having some impact on teaching pedagogies that others can employ.",
                "extra": ""
            },
            {
                "statementKey": "65",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "Connections among research, teaching, and service need to appear as logical in the narrative and not random or whimsical.",
                "extra": ""
            },
            {
                "statementKey": "66",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl-C.png",
                "text": "An editor called, so I will have to turn to revising that article.",
                "extra": ""
            },
            {
                "statementKey": "67",
                "speakerNumber": 5,
                "speakerName": "Camille",
                "image": "../../assets/av/camille.png",
                "text": "Well, I guess I better go. It was nice running into you two.",
                "extra": ""
            },
            {
                "statementKey": "68",
                "speakerNumber": 1,
                "speakerName": "Tina",
                "image": "../../assets/av/tina.png",
                "text": "We should wrap it up as well. What if we meet again in about 10 days to review your draft of a narrative and revised cv?",
                "extra": ""
            },
            {
                "statementKey": "69",
                "speakerNumber": 2,
                "speakerName": "Carl",
                "image": "../../assets/av/carl.png",
                "text": "That would be great. I really appreciate your taking this time.",
                "extra": ""
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/av/av-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\">\n  <div class=\"row left-panel-container\">\n    <div class=\"col-md-3 left-panel\">\n      <div class=\"left-panel-child\">\n        <a><img src=\"../../assets/av-logo.png\" class=\"logo\" (click)=\"openExitDialog()\"></a>\n        <hr class=\"hr-style\">\n\n        <div class=\"candidate-profile-header\">CANDIDATE PROFILE</div>\n        <div class=\"candidate-card\">\n          <div class=\"row\" *ngIf=\"candidate!=null\">\n            <div class=\"col-md-5\">\n              <img class=\"candidate-image\" [src]=\"candidate.image\">\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"candidate-name\">{{candidate.name}}</div>\n              <div class=\"candidate-short-desc\">{{candidate.short_desc}}</div>\n            </div>\n          </div>\n          <div class=\"row view-details-left\" *ngIf=\"candidate!=null\">\n            <div class=\"cv-card\" (click)=\"openCvDialog()\">\n              <div class=\"cv-heading\">\n                <span class=\"cv-heading-text\">View Curriculum Vita</span>\n              </div>\n              <div class=\"cv-snippet\">\n\n                <ul>\n                  <li>{{candidate.dossier.educational_background[0]}}</li>\n                  <li>{{candidate.dossier.educational_background[1]}}</li>\n                </ul>\n\n                <div class=\"open-dialog\"\n                     (click)=\"openCvDialog()\"><u>Read More..</u></div>\n\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row view-details-left\" *ngIf=\"candidate!=null\">\n            <div class=\"cv-card\" (click)=\"openCasestudyDialog()\">\n              <div class=\"case-study-heading\">\n                <span class=\"case-study-heading-text\">View Case Study</span>\n              </div>\n              <div class=\"truncate\">\n                {{candidate.career_account[0]}}\n              </div>\n              <div class=\"open-dialog\"\n                   (click)=\"openCasestudyDialog()\"><u>Read More..</u></div>\n\n            </div>\n          </div>\n\n        </div>\n        <hr class=\"hr-style\">\n        <button class=\"back-to-main-page\" (click)=\"openExitDialog()\">\n          <span class=\"exit-activity-container\"><img class=\"exit-activity-icon\" src=\"./../../assets/left-arrow.svg\"\n          > &nbsp;Exit Activity</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"right-panel\">\n        <div class=\"row\">\n          <div class=\"progress-bar-container\">\n            <mat-progress-bar mode=\"determinate\" value=\"{{progressValue}}\"></mat-progress-bar>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-7\">\n            <img class=\"coffee-shop\" [src]=image>\n            <div class=\"coffee-shop-dialog\">{{currentDialog}}\n            </div>\n            <div class=\"control-panel\" style=\"position:absolute;bottom: 0%;\n    right: 10%;\">\n              <button\n                class=\"control-button\"\n                (click)=\"clickOnNextButton()\"><img\n                src=\"../../assets/right-arrow.png\" class=\"arrow-right\"></button>\n              <button *ngIf=\"counter>0\" class=\"control-button\" (click)=\"clickOnBackButton()\">\n                <img\n                  src=\"../../assets/left-arrow.png\" class=\"arrow-left\"></button>\n\n            </div>\n          </div>\n          <div id=\"messageBody\" *ngIf=\"dialogs!=null\" class=\"col-md-5 conversation-right-panel\">\n            <ul class=\"conversation-bullets\">\n              <li *ngFor=\"let conversation of conversationDone\">\n                <b><i>{{conversation.speakerName}}</i></b>: {{ conversation.text }}\n                <br>\n                <br>\n              </li>\n            </ul>\n            `\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-1 transcript\">\n\n    </div>\n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/av/av-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AVDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simulated_meeting_casestudy_dialog_casestudy_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/casestudy-dialog/casestudy-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exit_exit_component__ = __webpack_require__("../../../../../src/app/exit/exit-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulated_meeting_cv_dialog_cv_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/cv-dialog/cv-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__av_game_service__ = __webpack_require__("../../../../../src/app/av/av-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__complete_av_complete_av_component__ = __webpack_require__("../../../../../src/app/complete-av/complete-av.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AVDialogComponent = (function () {
    function AVDialogComponent(router, route, dialog, candidateService) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.candidateService = candidateService;
    }
    AVDialogComponent.prototype.ngOnInit = function () {
        this.clicked = false;
        this.counter = 0;
        this.getCandidate();
        this.getDialogs();
        this.conversationDone = [{
                statementKey: "",
                speakerNumber: 0,
                speakerName: "",
                image: "",
                text: "",
                extra: ""
            }];
    };
    AVDialogComponent.prototype.getCandidate = function () {
        var _this = this;
        this.candidateService.getCandidates().then(function (candidates) {
            _this.candidate = candidates[0];
        });
    };
    AVDialogComponent.prototype.getDialogs = function () {
        var _this = this;
        this.candidateService.getDialogs().then(function (dialogs) {
            _this.dialogs = dialogs[0];
            console.log(_this.dialogs);
            _this.conversationDone.pop();
            _this.conversationDone.push(_this.dialogs.conversation[0]);
            _this.image = _this.dialogs.conversation[0].image;
            _this.currentDialog = _this.dialogs.conversation[0].text;
            _this.progressStep = 100 / _this.dialogs.conversation.length;
            _this.progressValue = _this.progressStep;
        });
    };
    AVDialogComponent.prototype.clickOnNextButton = function () {
        if (this.counter === this.dialogs.conversation.length - 1) {
            this.openCompleteAVActivityDialog();
        }
        else {
            this.createDialogList();
        }
    };
    AVDialogComponent.prototype.createDialogList = function () {
        this.counter++;
        this.conversationDone.push(this.dialogs.conversation[this.counter]);
        this.image = this.dialogs.conversation[this.counter].image;
        this.currentDialog = this.dialogs.conversation[this.counter].text;
        this.progressValue += this.progressStep;
    };
    AVDialogComponent.prototype.clickOnBackButton = function () {
        this.counter--;
        this.conversationDone.pop();
        this.image = this.dialogs.conversation[this.counter].image;
        this.currentDialog = this.dialogs.conversation[this.counter].text;
        this.progressValue -= this.progressStep;
    };
    AVDialogComponent.prototype.openCvDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__simulated_meeting_cv_dialog_cv_dialog_component__["a" /* CvDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.selectedCandidate = this.candidate;
    };
    AVDialogComponent.prototype.openExitDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__exit_exit_component__["a" /* ExitDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.activity = 3;
    };
    AVDialogComponent.prototype.openCompleteAVActivityDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__complete_av_complete_av_component__["a" /* CompleteAVActivityDialogComponent */], { disableClose: true });
        var instance = dialogRef.componentInstance;
        instance.conversation = this.conversationDone;
    };
    AVDialogComponent.prototype.openCasestudyDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__simulated_meeting_casestudy_dialog_casestudy_dialog_component__["a" /* CaseStudyDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.selectedCandidate = this.candidate;
    };
    AVDialogComponent.prototype.goBack = function () {
        this.router.navigate(['/activity']);
    };
    AVDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'annotated-vita',
            template: __webpack_require__("../../../../../src/app/av/av-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/av/av-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__av_game_service__["a" /* AvGameService */]])
    ], AVDialogComponent);
    return AVDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/av/av-game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvGameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__candidates__ = __webpack_require__("../../../../../src/app/av/candidates.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__av_dialogs__ = __webpack_require__("../../../../../src/app/av/av-dialogs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AvGameService = (function () {
    function AvGameService() {
    }
    AvGameService.prototype.getCandidates = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__candidates__["a" /* CANDIDATES */]);
    };
    AvGameService.prototype.getDialogs = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__av_dialogs__["a" /* AVDIALOGS */]);
    };
    AvGameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], AvGameService);
    return AvGameService;
}());



/***/ }),

/***/ "../../../../../src/app/av/candidates.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANDIDATES; });
var CANDIDATES = [
    {
        "candidate_id": 1,
        "name": "Carl Anders",
        "short_desc": "Ph.D. in Computer Science",
        "image": "../../../assets/CA.png",
        "career_account": [
            "Carl Anders, Ph.D. in Computer Science from Indiana University, accepted an appointment as an assistant professor in the Department of Computer Science of a prestigious research university after a two-year post-doctoral appointment at the University of Illinois at Urbana-Champaign. Anders negotiated carefully with the university regarding specific needs based on his disability, a cervical spinal cord injury limiting arm function. He used a power wheelchair for mobility and could not drive so he remained dependent on public (bus) and paratransit (private) transportation. Anders had recurrent pressure ulcers that he managed by limiting his sitting time. Because he could not transfer independently, Anders avoided sitting more than 8 hours at a time. Because his bus commute was 45 minutes, he limited his on-campus time to 6 ½ hours per day. At home, he was able to work from his bed to which he could transfer by using a ceiling-mounted lift. This permitted him to work longer hours at home than he could work on campus. (add handbook or legal requirements on accommodation of disabilities)",
            "The department chair hiring Anders assured him that the university's computer science department had great flexibility regarding course schedules and that the size of the faculty permitted the scheduler to meet individual needs regarding day/time of course meetings. Anders insisted on having a clause in his contract indicating the department would do all in its power to reasonably accommodate Anders' disability by scheduling courses within the period of 10 am-4 pm, preferably on a two-day schedule. This schedule assured that Anders would be able to travel efficiently via public transportation by avoiding a longer rush hour commute that would take a physical toll on him.",
            "During his first three years at the university, the department scheduled Anders for a graduate course and an undergraduate course, within his preferred time period and generally according to a two-day schedule, but sometimes with the graduate course scheduled for a third day. In this time, Anders published more than the average faculty member each year, eventually producing 35 papers, co-authoring a book with a colleague from another university, and organizing program committees for significant conferences. He also partnered with his collaborator on an industry grant to work on accessible computing interfaces for the legally blind. Anders' teaching evaluations were excellent; students reported that he frequently met with them on-campus on his teaching days, and encouraged them to use email, to phone, or to visit him at his home office by appointment on other days. He served in his second year on a departmental search committee and in his third year on the university's Presidential Commission for the Disabled.",
            "Anders' work schedule did not cause any controversy during the period prior to his third-year review. He generally spent three days working on campus. His office and lab were made accessible for a power wheelchair and only minor computer equipment purchases were needed to permit Anders to use them effectively. The other two weekdays (plus weekends) he worked from his home office 10 miles from campus. On occasion (perhaps three or four times each term) he would come to special department, interest group, and committee meetings and other events outside of his normal schedule, scheduling paratransit at his own expense.",
            "Anders' third-year critical review garnered him a very favorable evaluation from the departmental committee and praise from his outgoing chair. His colleagues remarked on the originality of his research, his dedication to his students, and his continuing, fruitful collaboration with his colleague, which was expected to lead to the creation of a university center on adaptive technologies for human-machine interfaces.",
            "During Anders' fourth year at the university, the department welcomed a new chair, hired from outside the institution. Facing a period of budget problems dominated by the need to save money and use resources wisely, the new chair did not feel bound to honor any previous commitments made to individual faculty, and pronounced a “clean slate” on policies and procedures. As a result, the department scheduler was instructed to make sure the classrooms were used efficiently and to treat the faculty the same. Under the new protocol, faculty would alternate two-day and three-day teaching schedules depending on the term. In addition, all faculty members were enjoined to work from their department offices except during periods of vacation or professional travel to better serve the mission of on-campus instruction and advisement. Anders immediately set an appointment to discuss his needs and request for reasonable accommodation with the new chair. He was assured by the chair that although she understood the difficulties of his situation and was supportive of his arrangement to work from home occasionally, “it would not be right” for the department to accommodate his needs to teach on specific days on a permanent basis and that he would need to make his requests each term. Anders consulted with the campus office on disability; the human resources representative accordingly spoke with Anders’ chair to explain that the department ought to do all it could to accommodate Anders’ need for a restricted schedule, even if it meant that other faculty (i.e., those without disabilities) might not have their scheduling preferences met. This negotiation improved Anders’ schedule, but he noticed that his relationship with his chair became less cordial.",
            "By the time of promotion and tenure, Anders' record looked more erratic than it had at the time of critical review. Letters of reference indicated that his work, especially the earlier papers, were highly regarded and even \"inspirational\" for others in his field. His overall publishing productivity was below average, as his productivity had diminished significantly in the last two years. The center (which he co-directed) garnered some funding from industry affiliates and alumni, but not extensive levels. His teaching scores had also dipped. In terms when he was on a three-day schedule with classes offered early in the morning or later at night, students reported that Anders was often late or had to leave early and appeared clipped and brusque, encouraging students to use email to correspond rather than to meet with him outside of class. Some members of the committee had heard Anders complain about the change of departmental leadership in terms of a breach of agreement, but consultation with the unit chair did not bear out any substance to this line of argument – she indicated that he received special considerations of schedule flexibility and office hours compared with other faculty. (add guidelines from best practices on how to handle extraneous information beyond vita and direct statements)",
            "One mentor, fascinated by Lee's application of her theories to his subfield, developed and submitted a proposal for funding based on this method to an agency, citing their joint paper as the basis for the work. However, Lee was neither consulted nor included in the development of the proposal or as a co-investigator. She was visibly upset when she learned of this from another colleague who commented that he understood that her mentor was now working in the same field; confronting her mentor, he informed her that there is no monopoly on good ideas and he was in the best position to develop this premise within his own subfield. With that, the mentoring relation ended, but Lee decided to keep the situation it to herself given the fact that the department chair had recommended this mentor and was his close associate.",
            "At the promotion and tenure committee meeting, one member notes that some graduate students had complained about Anders’ lack of accessibility. Others recall that the chair had commented on Anders not attending a number of departmental lunches and other events related to his areas of research and that he was not often in his office. (add bias study on disabilities; also perhaps family responsibilities)",
            "As a member of the promotion and tenure committee evaluating Anders, how would you respond to the concern that his record demonstrates diminished productivity and that he was not a team player in the departmental efforts to achieve excellence?"
        ],
        "dossier": {
            "educational_background": [
                "B.S. Computer Science, University of Illinois",
                "M.S. Computer Science, Indiana University",
                "Ph.D. Computer Science, Indiana University",
                "2 Year Post doc: University of Illinois"
            ],
            "publications": [
                "Refereed: 9 articles, 3 in past two years (with students), 6 from first two years, with none submitted during third year.",
                "Two articles appeared in Journal of Engineering Education within the past 14 months, one on a controlled study of class performance with an without use of multimedia tools and videos to assist physical understanding of crystal structures and defects in solids, and the other on use of web-based media to provide a philosophical foundation for instruction based on analogies from other fields."
            ],
            "conference_proceedings": [
                "Peer-reviewed Articles and Conference Proceedings: 20",
                "1 Co-authored Book based on some conference proceedings"
            ],
            "presentations": [
                "2 seminars, 1 at another university",
                "Organized program committee for significant conference"
            ],
            "research": [
                "Anders’s research focuses on mathematical approaches to computational problems, paying specific attention to big data algorithms",
                "Co-directs a college-level center with a mathematician"
            ],
            "funding": {
                "funding_resources": [
                    "Anders now participates in a large collaborative project with faculty in computer science, mathematics, and statistics. NSF has indicated it will fund the project."
                ],
                "extra_funding": ""
            },
            "graduate_student_advisement": {
                "opening_line": "",
                "advisement": [
                    "2 PhD students in-progress, 2 M.S. students graduated, 3 M.S. students in progress"
                ]
            },
            "teaching": [
                "Has taught undergraduate introductory course in computing for majors and non-majors",
                "Has developed a course in big data for undergraduate majors",
                "Has taught graduate courses in algorithms"
            ],
            "service": [
                "Member, Computer Science Faculty Search Committee",
                "Member, University Presidential Commission on Disabilities"
            ],
            "honors_and_awards": [
                "Sloan Research Fellowship (2 years support for an untenured scholar)"
            ]
        },
        "committee_members": [{
                "committee_id": 0,
                "name": "",
                "image": "",
                "description": ""
            }]
    }
];


/***/ }),

/***/ "../../../../../src/app/complete-activity/complete-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title style=\"display: inline\">Activity Complete</h2>\n</div>\n<hr>\n<mat-dialog-content>\n  <div>\n    Thanks for serving as a committee member on this case. Please go to the \"Transcript and Commentary\" section to\n    review your responses and to see critical commentary regarding bias in evaluation.\n  </div>\n  <br>\n</mat-dialog-content>\n<div mat-dialog-actions>\n  <button class=\"dialog-actions\" mat-button cdkFocusInitial (click)=\"goBack()\">Exit Activity</button>\n  <button class=\"dialog-actions\" mat-button (click)=\"viewTranscript()\">View Transcript</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/complete-activity/complete-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteActivityDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simulated_meeting_game_transcript_sm_transcript_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/game/transcript/sm-transcript.component.ts");
/**
 * Created by imittal on 11/24/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CompleteActivityDialogComponent = (function () {
    function CompleteActivityDialogComponent(dialogRef, data, router, route, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
    }
    CompleteActivityDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CompleteActivityDialogComponent.prototype.viewTranscript = function () {
        this.onNoClick();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__simulated_meeting_game_transcript_sm_transcript_component__["a" /* SimulatedMeetingTranscriptComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.dialogSequence = this.dialogSequence;
        instance.name = this.name;
        instance.currentId = this.currentId;
        instance.maxLength = this.maxLength;
        instance.completed = this.completed;
    };
    CompleteActivityDialogComponent.prototype.goBack = function () {
        this.onNoClick();
        this.router.navigate(['/simulated-meeting']);
    };
    CompleteActivityDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'complete-activity',
            template: __webpack_require__("../../../../../src/app/complete-activity/complete-activity.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */]])
    ], CompleteActivityDialogComponent);
    return CompleteActivityDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/complete-av/complete-av.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title style=\"display: inline\">Activity Complete</h2>\n</div>\n<hr>\n<mat-dialog-content>\n  <div>\n    Thanks for reading through this scenario that illustrates how positive mentoring works. You can review the\n    transcript for this activity before exiting.\n  </div>\n  <br>\n</mat-dialog-content>\n<div mat-dialog-actions>\n  <button class=\"dialog-actions\" mat-button cdkFocusInitial (click)=\"goBack()\">Exit Activity</button>\n  <button class=\"dialog-actions\" mat-button (click)=\"viewTranscript()\">View Transcript</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/complete-av/complete-av.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteAVActivityDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__av_transcript_av_transcript_component__ = __webpack_require__("../../../../../src/app/av-transcript/av-transcript.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CompleteAVActivityDialogComponent = (function () {
    function CompleteAVActivityDialogComponent(dialogRef, data, router, route, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
    }
    CompleteAVActivityDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CompleteAVActivityDialogComponent.prototype.viewTranscript = function () {
        this.onNoClick();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__av_transcript_av_transcript_component__["a" /* AVTranscriptComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.conversation = this.conversation;
    };
    CompleteAVActivityDialogComponent.prototype.goBack = function () {
        this.onNoClick();
        this.router.navigate(['/activity']);
    };
    CompleteAVActivityDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'complete-av',
            template: __webpack_require__("../../../../../src/app/complete-av/complete-av.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["b" /* MatDialog */]])
    ], CompleteAVActivityDialogComponent);
    return CompleteAVActivityDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exit/exit-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/**
 * Created by imittal on 11/24/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ExitDialogComponent = (function () {
    function ExitDialogComponent(dialogRef, data, router, route) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.route = route;
    }
    ExitDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ExitDialogComponent.prototype.goBack = function () {
        this.onNoClick();
        if (this.activity == 1) {
            this.router.navigate(['/simulated-meeting']);
        }
        else if (this.activity == 2) {
            this.router.navigate(['/nyc']);
        }
        else if (this.activity == 3) {
            this.router.navigate(['/activity']);
        }
    };
    ExitDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'exit',
            template: __webpack_require__("../../../../../src/app/exit/exit.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ExitDialogComponent);
    return ExitDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/exit/exit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title style=\"display: inline\">Exit Activity?</h2>\n</div>\n<hr>\n<mat-dialog-content>\n  <div>\n    All progress will be lost. Are you sure, you want to leave the activity?\n  </div>\n  <br>\n</mat-dialog-content>\n<div mat-dialog-actions>\n  <button class=\"dialog-actions\" mat-button (click)=\"onNoClick()\">No</button>\n  <button class=\"dialog-actions\" mat-button cdkFocusInitial (click)=\"goBack()\">Yes</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nyc/game/explanationDialog/explanation-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"close\" (click)=\"onNoClick()\" src=\"../../../assets/multiply.png\">\n</div>\n\n<mat-dialog-content>\n  <div>\n    <div>\n      {{explanation}}\n    </div>\n    <br>\n  </div>\n\n</mat-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/nyc/game/explanationDialog/explanation-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplanationDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/**
 * Created by imittal on 11/24/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ExplanationDialog = (function () {
    function ExplanationDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ExplanationDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ExplanationDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'explanation-dialog',
            template: __webpack_require__("../../../../../src/app/nyc/game/explanationDialog/explanation-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], ExplanationDialog);
    return ExplanationDialog;
}());



/***/ }),

/***/ "../../../../../src/app/nyc/game/final-dialog/final-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"openTranscriptDialog()\" style=\"float:right\">VIEW A SUMMARY OF YOUR ANSWERS</button>\n\n<h2 mat-dialog-title>Congratulations!</h2>\n\n<hr>\n\n<mat-dialog-content>\n  <div>\n    <b><i>You’re doing great as a mentor!</i></b>\n    <br>\n    <p>Here’s how you could further improve your ‘progress’ in the different aspects of life:\n    </p>\n    <p>A good score in <b>‘Research’</b> requires work in scholarship, being creative, bringing in funding, creating a\n      lasting impact, and building a good reputation.</p>\n    <p>A good score in <b>‘Teaching’</b> requires positive student responses, curricular development, pedagogical\n      innovations.</p>\n    <p>A good score in <b>‘Service’</b> requires candidate to have served unit, college, institute; as well as local,\n      national,\n      and international organizations.\n    </p>\n    <p>A good score in <b>‘Allies’</b> requires good relationships with colleagues, disciplinary peers, peers in other\n      fields.\n    </p>\n    <p>A good score in <b>‘Health’</b> requires candidate to have made good decisions regarding physical, mental, and\n      emotional wellness, including choices that minimize stress.</p>\n  </div>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/nyc/game/final-dialog/final-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transcript_nyc_transcript_component__ = __webpack_require__("../../../../../src/app/nyc/game/transcript/nyc-transcript.component.ts");
/**
 * Created by imittal on 11/24/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FinalDialog = (function () {
    function FinalDialog(dialogRef, data, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
    }
    FinalDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FinalDialog.prototype.openTranscriptDialog = function () {
        console.log("im here", this.counter);
        this.dialogRef.close();
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__transcript_nyc_transcript_component__["a" /* NYCTranscriptComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.questions = this.questions;
        instance.name = this.name;
        instance.counter = this.counter;
    };
    FinalDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'final-dialog',
            template: __webpack_require__("../../../../../src/app/nyc/game/final-dialog/final-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatDialog */]])
    ], FinalDialog);
    return FinalDialog;
}());



/***/ }),

/***/ "../../../../../src/app/nyc/game/nyc-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-page {\n  font-size: 16px;\n  min-height: 100%;\n}\n\n.main-page .header {\n  font-size: 20px;\n  font-weight: 700;\n  margin-top: 20px;\n}\n\n.main-page .candidate-name {\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 5px;\n  margin-bottom: 6px;\n}\n\n.main-page .candidate-short-desc {\n  font-size: 12px;\n  margin-top: 3px;\n  padding-bottom: 5px;\n}\n\n.right-panel {\n  max-width: 889px;\n  margin-left: 20px;\n  margin-top: 15px;\n  min-height: 100%;\n}\n\n.activity-instruction {\n  font-size: 20px;\n}\n\n.choose-candidate-card {\n  margin-top: 12px;\n  background-color: #F5F5F5;\n  border-style: solid;\n  border-width: 13px;\n  border-color: white;\n\n}\n\n.cv-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n  width: 100%;\n}\n\n.cv-card:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.candidate-card {\n  margin-top: 10px;\n  background-color: #F5F5F5;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.category-progress {\n  margin-top: 10px;\n  background-color: #F5F5F5;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  padding-right: 15px;\n  padding-left: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.other-panelists {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.other-panelists:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.selected {\n  box-shadow: 0 0 10px #EFB211;\n}\n\n.choose-candidates {\n  margin-top: -15px;\n}\n\n.candidate-img {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 80px;\n  width: 80px;\n}\n\n.details-case {\n  background-color: #F5F5F5;\n  margin-top: -30px;\n\n}\n\n.view-details-left {\n  background-color: white;\n  font-size: 8px;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-top: 12px;\n}\n\n.view-details {\n  background-color: white;\n  margin-top: 18px;\n  font-size: 12px;\n  margin-left: 48px;\n  padding-left: 0px;\n  padding-right: 0px;\n  transition: all 200ms ease-out;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.view-details:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.button-blue {\n  color: white;\n  font-size: 16px;\n  background-color: #0D3055;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.truncate {\n  padding-left: 25px;\n  padding-right: 25px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 18px;\n  margin-top: 18px;\n}\n\n.logo {\n  display: block;\n  margin: auto;\n}\n\n.left-panel {\n  box-shadow: 0 4px 8px 0 rgba(164, 164, 164, 0.51), 0 6px 20px 0 rgba(164, 164, 164, 0.5);\n  padding-top: 20px;\n  position: relative;\n}\n\n.back-to-main-page {\n\n  font-size: 16px;\n  font-weight: 400;\n  border-width: 1px;\n  border-color: black;\n  background-color: white;\n  border-radius: 0;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.read-about-fellows {\n  margin-left: 15px;\n}\n\n.panelist-name {\n  margin-top: 34px;\n  font-size: 16px;\n  font-weight: 700;\n  margin-left: 10px;\n}\n\n.other-panelists {\n  background-color: white;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.play-game {\n  margin-top: 10px;\n  font-weight: 700;\n  background-color: #0D3055;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  border-radius: 5px;\n  height: 34px; /* Safari */\n  transition-duration: 0.4s;\n  float: right;\n  margin-bottom: 10px;\n}\n\n.submit {\n  font-weight: 700;\n  background-color: #0D3055;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  border-radius: 5px; /* Safari */\n  transition-duration: 0.4s;\n}\n\n.submit:hover {\n  background-color: #EFB211; /* Green */\n  color: white;\n  cursor: pointer;\n}\n\n.play-game:hover {\n  background-color: #EFB211; /* Green */\n  color: white;\n  cursor: pointer;\n}\n\n.shadow {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.control-button {\n  float: right;\n  background-color: #0D3055;\n  height: 40px;\n\n}\n\n.control-button:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.control-panel {\n  height: 50px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 5px;\n  background-color: #F5F5F5;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.progress-bar-container {\n  padding: 8px 2px 13px 2px;\n  height: 20px;\n  margin-bottom: 10px;\n  background-color: #f5f5f5;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.panel-dialog {\n  position: absolute;\n  top: 11%;\n  left: 8%;\n  font-size: 16px;\n  width: 87%;\n}\n\n.transcript {\n  font-size: 20px;\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n  text-align: center;\n  color: white;\n}\n\n.logo:hover {\n  cursor: pointer;\n}\n\n.back-to-main-page:hover {\n  cursor: pointer;\n}\n\n.left-panel-container {\n  width: 100%;\n  min-height: 640px;\n}\n\n.left-panel-child {\n  margin-left: 30px;\n  margin-right: 20px;\n}\n\n.hr-style {\n  margin-top: 20px;\n}\n\n.candidate-profile-header {\n  margin-top: 10px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.candidate-image {\n  padding-left: 15px;\n  width: 100px;\n}\n\n.cv-heading {\n  background-color: #0D3055;\n  width: 100%;\n  padding-left: 10px;\n}\n\n.cv-heading-text {\n  color: white;\n  font-size: 16px;\n  text-align: center;\n}\n\n.cv-snippet {\n  margin-top: 18px;\n}\n\n.case-study-heading {\n  background-color: #EFB211;\n  width: 100%;\n  padding-left: 10px;\n}\n\n.case-study-heading-text {\n  color: white;\n  font-size: 16px;\n  text-align: center;\n}\n\n.exit-activity-container {\n  color: black;\n  text-align: center;\n}\n\n.exit-activity-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.panelist-image {\n  width: 100%;\n  position: relative\n}\n\n.arrow-right {\n  padding: 5px;\n  width: 24px;\n}\n\n.arrow-left {\n  padding: 5px;\n  width: 24px;\n}\n\n.options-container {\n  height: 35%;\n  background-color: #F6F6F6;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: block;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  padding-top: 2px;\n  padding-left: 10px;\n}\n\n.options-container-text {\n  font-size: 17px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.submit-button-container {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\n.transcript-button {\n  width: auto;\n  height: auto;\n  background-color: #0D3055;\n  cursor: pointer;\n}\n\n.category-progress-bar-container {\n  margin-bottom: 10px;\n}\n\n.response {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.error {\n  margin-top: 10px;\n}\n\n.warning-icon {\n  width: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nyc/game/nyc-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\">\n  <div class=\"row left-panel-container\">\n    <div class=\"col-md-3 left-panel\">\n      <div class=\"left-panel-child\">\n        <a><img src=\"../../../assets/nyc-logo.png\" class=\"logo\" (click)=\"openExitDialog()\"></a>\n        <hr class=\"hr-style\">\n\n        <div class=\"candidate-profile-header\">CANDIDATE'S PROFILE</div>\n        <div class=\"candidate-card\">\n          <div class=\"row\" *ngIf=\"candidate!=null\">\n            <div class=\"col-md-5\">\n              <img class=\"candidate-image\" [src]=\"candidate.image\">\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"candidate-name\">{{candidate.name}}</div>\n              <div class=\"candidate-short-desc\">{{candidate.short_desc}}</div>\n            </div>\n          </div>\n\n          <div class=\"row view-details-left\" *ngIf=\"candidate!=null\">\n            <div class=\"cv-card\" (click)=\"openCasestudyDialog()\">\n              <div class=\"case-study-heading\">\n                <span class=\"case-study-heading-text\">Case Study</span>\n              </div>\n              <div class=\"truncate\">\n                {{candidate.career_account[0]}}\n              </div>\n              <div style=\"float:right;padding-bottom: 10px; padding-right:10px;font-size: 13px;\" (click)=\"openCasestudyDialog()\"><u>Read More..</u></div>\n            </div>\n          </div>\n\n        </div>\n        <hr class=\"hr-style\">\n        <div class=\"candidate-profile-header\">YOUR PROGRESS</div>\n        <div class=\"category-progress\">\n          <div class=\"category\">\n            Research\n            <br>\n            <div class=\"category-progress-bar-container\">\n              <mat-progress-bar mode=\"determinate\" value=\"{{researchProgressValue}}\"></mat-progress-bar>\n            </div>\n          </div>\n\n          <div class=\"category\">\n            Teaching\n            <br>\n            <div class=\"category-progress-bar-container\">\n              <mat-progress-bar mode=\"determinate\" value=\"{{teachingProgressValue}}\"></mat-progress-bar>\n            </div>\n          </div>\n\n          <div class=\"category\">\n            Service\n            <br>\n            <div class=\"category-progress-bar-container\">\n              <mat-progress-bar mode=\"determinate\" value=\"{{serviceProgressValue}}\"></mat-progress-bar>\n            </div>\n          </div>\n\n          <div class=\"category\">\n            Allies\n            <br>\n            <div class=\"category-progress-bar-container\">\n              <mat-progress-bar mode=\"determinate\" value=\"{{alliesProgressValue}}\"></mat-progress-bar>\n            </div>\n          </div>\n\n          <div class=\"category\">\n            Health\n            <br>\n            <div class=\"category-progress-bar-container\">\n              <mat-progress-bar mode=\"determinate\" value=\"{{healthProgressValue}}\"></mat-progress-bar>\n            </div>\n          </div>\n\n\n        </div>\n\n        <hr class=\"hr-style\">\n        <button class=\"back-to-main-page\" (click)=\"openExitDialog()\">\n          <span class=\"exit-activity-container\"><img src=\"./../../../assets/left-arrow.svg\"\n                                                     class=\"exit-activity-icon\"> &nbsp;EXIT ACTIVITY</span>\n        </button>\n        <!--<button class=\"back-to-main-page\" (click)=\"openExitDialog()\">\n          <span class=\"exit-activity-container\"><img class=\"exit-activity-icon\" src=\"./../../../assets/left-arrow.svg\"\n          > &nbsp;Exit Activity</span>\n        </button>-->\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"right-panel\">\n        <div class=\"progress-bar-container\">\n          <mat-progress-bar mode=\"determinate\" value=\"{{progressValue}}\"></mat-progress-bar>\n        </div>\n        <div>\n          <div>\n            <img class=\"panelist-image\" alt=\"{{mapDescription}}\" [src]=mapImage>\n\n          </div>\n        </div>\n\n        <div\n          class=\"options-container\">\n          <div style=\"float:right; padding-right:10px;color:#0F3153;\"\n             (click)=\"openTranscriptDialog()\"><i><u>Transcript</u></i></div>\n          <hr style=\"margin-top: 1.5rem; margin-bottom: 0.5rem;padding-right:20px;\">\n          <div *ngIf=\"ifButtonTextIsSubmit()\">\n            <div class=\"options-container-text\">{{questionInstruction}}\n            </div>\n            <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"answer\">\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let answerOption of answerOptions\"\n                                [value]=\"answerOption\">\n                {{answerOption.option}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n          <div *ngIf=\"!ifButtonTextIsSubmit()\" class=\"response\">\n            {{response}}\n          </div>\n          <div class=\"submit-button-container\">\n            <button class=\"submit\" (click)=\"submitAnswer()\">{{buttonText}}</button>\n            <div *ngIf=\"showError()\" class=\"error\"><img class=\"warning-icon\" src=\"../../../assets/warning.png\">Please\n              choose an option\n            </div>\n          </div>\n\n        </div>\n\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/nyc/game/nyc-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NYCComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nyc_game_service__ = __webpack_require__("../../../../../src/app/nyc/game/nyc-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simulated_meeting_casestudy_dialog_casestudy_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/casestudy-dialog/casestudy-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__simulated_meeting_panelist_dialog_panelist_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/panelist-dialog/panelist-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transcript_nyc_transcript_component__ = __webpack_require__("../../../../../src/app/nyc/game/transcript/nyc-transcript.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exit_exit_component__ = __webpack_require__("../../../../../src/app/exit/exit-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__explanationDialog_explanation_dialog_component__ = __webpack_require__("../../../../../src/app/nyc/game/explanationDialog/explanation-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__final_dialog_final_dialog_component__ = __webpack_require__("../../../../../src/app/nyc/game/final-dialog/final-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NYCComponent = (function () {
    function NYCComponent(service, router, route, dialog) {
        this.dialog = dialog;
        this.buttonText = "Submit";
        this.router = router;
        this.route = route;
        this.service = service;
    }
    NYCComponent.prototype.ngOnInit = function () {
        this.initializeVariables();
        this.id = +this.route.snapshot.paramMap.get('id');
        this.selectedPersonId = this.id - 1;
        this.mapDescription = "Question 1";
        this.mapPresuccessor = "./../../../assets/nyc/";
        this.getQuestions();
        this.getCandidate();
        this.counterInString = (this.counter + 1).toString();
        this.mapImage = this.mapPresuccessor + this.counterInString + ".png";
        console.log(this.mapImage);
    };
    NYCComponent.prototype.initializeVariables = function () {
        this.clicked = false;
        this.counter = 0;
        this.progressValue = 0;
        this.researchTotal = 0;
        this.healthTotal = 0;
        this.alliedTotal = 0;
        this.serviceTotal = 0;
        this.teachingTotal = 0;
        this.healthProgressStep = 0;
        this.researchProgressStep = 0;
        this.alliesProgressStep = 0;
        this.serviceProgressStep = 0;
        this.teachingProgressStep = 0;
        this.healthProgressValue = 0;
        this.serviceProgressValue = 0;
        this.teachingProgressValue = 0;
        this.alliesProgressValue = 0;
        this.researchProgressValue = 0;
    };
    NYCComponent.prototype.getCandidate = function () {
        var _this = this;
        this.service.getCandidates().then(function (candidates) {
            _this.candidate = candidates[_this.selectedPersonId];
        });
    };
    NYCComponent.prototype.shuffleInPlace = function (array) {
        // if it's 1 or 0 items, just return
        if (array.length <= 1)
            return array;
        // For each index in array
        for (var i = 0; i < array.length; i++) {
            // choose a random not-yet-placed item to place there
            // must be an item AFTER the current item, because the stuff
            // before has all already been placed
            var randomChoiceIndex = this.getRandom(i, array.length - 1);
            // place our random choice in the spot by swapping
            _a = [array[randomChoiceIndex], array[i]], array[i] = _a[0], array[randomChoiceIndex] = _a[1];
        }
        return array;
        var _a;
    };
    NYCComponent.prototype.getRandom = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    };
    NYCComponent.prototype.getQuestions = function () {
        var _this = this;
        this.service.getQuestions().then(function (questions) {
            _this.questions = questions;
            _this.selectedPerson = _this.questions[_this.selectedPersonId];
            _this.selectedPersonQuestions = _this.selectedPerson.questions;
            _this.shuffleInPlace(_this.selectedPersonQuestions);
            _this.selectedPersonTenQuestions = _this.selectedPersonQuestions.slice(0, 10);
            _this.questionInstruction = _this.selectedPersonTenQuestions[0].prompt;
            _this.answerOptions = _this.selectedPersonTenQuestions[0].options;
            _this.progressStep = 10;
            _this.calculateCategoryStepValues();
        });
    };
    NYCComponent.prototype.calculateCategoryStepValues = function () {
        //TODO:for loop to calculate max points possible for each category
        var i = 0;
        while (i < 10) {
            this.researchTotal += this.selectedPersonQuestions[i].maxPoints.research;
            this.healthTotal += this.selectedPersonQuestions[i].maxPoints.health;
            this.alliedTotal += this.selectedPersonQuestions[i].maxPoints.allies;
            this.serviceTotal += this.selectedPersonQuestions[i].maxPoints.service;
            this.teachingTotal += this.selectedPersonQuestions[i].maxPoints.teaching;
            console.log(this.researchTotal);
            i++;
        }
        this.healthProgressStep = 100 / this.healthTotal;
        this.researchProgressStep = 100 / this.researchTotal;
        this.alliesProgressStep = 100 / this.alliedTotal;
        this.serviceProgressStep = 100 / this.serviceTotal;
        this.teachingProgressStep = 100 / this.teachingTotal;
        console.log(this.healthProgressStep);
    };
    NYCComponent.prototype.showError = function () {
        return this.buttonText == "Submit" && this.answer == null && this.clicked == true;
    };
    NYCComponent.prototype.submitAnswer = function () {
        this.clicked = true;
        if (this.buttonText == "Next") {
            this.clickNext();
        }
        else {
            if (this.answer != null) {
                this.submit = true;
                if (this.counter == 9) {
                    this.progressValue += this.progressStep;
                    this.healthProgressValue += this.answer.health * this.healthProgressStep;
                    this.serviceProgressValue += this.answer.service * this.serviceProgressStep;
                    this.teachingProgressValue += this.answer.teaching * this.teachingProgressStep;
                    this.alliesProgressValue += this.answer.allies * this.alliesProgressStep;
                    this.researchProgressValue += this.answer.research * this.researchProgressStep;
                    this.openFinalDialog();
                }
                else {
                    this.progressValue += this.progressStep;
                    this.healthProgressValue += this.answer.health * this.healthProgressStep;
                    this.serviceProgressValue += this.answer.service * this.serviceProgressStep;
                    this.teachingProgressValue += this.answer.teaching * this.teachingProgressStep;
                    this.alliesProgressValue += this.answer.allies * this.alliesProgressStep;
                    this.researchProgressValue += this.answer.research * this.researchProgressStep;
                    this.response = this.selectedPersonTenQuestions[this.counter].response;
                    this.answer = null;
                    this.clicked = false;
                    this.buttonText = "Next";
                }
            }
        }
    };
    NYCComponent.prototype.ifButtonTextIsSubmit = function () {
        if (this.buttonText == "Submit") {
            return true;
        }
        else
            return false;
    };
    NYCComponent.prototype.clickNext = function () {
        this.clicked = false;
        this.buttonText = "Submit";
        this.counter++;
        this.counterInString = (this.counter + 1).toString();
        this.mapImage = this.mapPresuccessor + this.counterInString + ".png";
        this.questionInstruction = this.selectedPersonTenQuestions[this.counter].prompt;
        this.answerOptions = this.selectedPersonTenQuestions[this.counter].options;
    };
    NYCComponent.prototype.openExplanationDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__explanationDialog_explanation_dialog_component__["a" /* ExplanationDialog */], {});
        var instance = dialogRef.componentInstance;
        instance.explanation = this.selectedPersonTenQuestions[this.counter].response;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.counter++;
            _this.questionInstruction = _this.selectedPersonTenQuestions[_this.counter].prompt;
            _this.answerOptions = _this.selectedPersonTenQuestions[_this.counter].options;
        });
    };
    NYCComponent.prototype.openFinalDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__final_dialog_final_dialog_component__["a" /* FinalDialog */], { disableClose: true });
        var instance = dialogRef.componentInstance;
        instance.questions = this.selectedPersonTenQuestions.slice(0, 10);
        instance.name = this.selectedPerson.name;
        instance.counter = this.counter;
    };
    NYCComponent.prototype.openTranscriptDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__transcript_nyc_transcript_component__["a" /* NYCTranscriptComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.questions = this.selectedPersonTenQuestions.slice(0, this.counter);
        instance.counter = this.counter;
        instance.name = this.selectedPerson.name;
    };
    NYCComponent.prototype.openPanelistBio = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__simulated_meeting_panelist_dialog_panelist_dialog_component__["a" /* PanelistDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.committee_members = this.candidate.committee_members;
    };
    NYCComponent.prototype.openExitDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__exit_exit_component__["a" /* ExitDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.activity = 2;
    };
    NYCComponent.prototype.openCasestudyDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__simulated_meeting_casestudy_dialog_casestudy_dialog_component__["a" /* CaseStudyDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.selectedCandidate = this.candidate;
    };
    NYCComponent.prototype.goBack = function () {
        this.router.navigate(['/nyc']);
    };
    NYCComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nyc-game',
            template: __webpack_require__("../../../../../src/app/nyc/game/nyc-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nyc/game/nyc-game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__nyc_game_service__["a" /* NYCGameService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatDialog */]])
    ], NYCComponent);
    return NYCComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nyc/game/nyc-game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NYCGameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_page_candidates__ = __webpack_require__("../../../../../src/app/nyc/main-page/candidates.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nyc_questions__ = __webpack_require__("../../../../../src/app/nyc/game/nyc-questions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NYCGameService = (function () {
    function NYCGameService() {
    }
    NYCGameService.prototype.getCandidates = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__main_page_candidates__["a" /* CANDIDATES */]);
    };
    NYCGameService.prototype.getQuestions = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__nyc_questions__["a" /* NYCQUESTIONS */]);
    };
    NYCGameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], NYCGameService);
    return NYCGameService;
}());



/***/ }),

/***/ "../../../../../src/app/nyc/game/nyc-questions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NYCQUESTIONS; });
var NYCQUESTIONS = [
    {
        "name": "Pam Lee",
        "id": 2,
        "questions": [
            {
                "id": 1,
                "prompt": "Leaders in a society in econometrics ask Pam Lee to become a co-editor of their new journal in the field.",
                "maxPoints": {
                    "health": 0,
                    "research": 10,
                    "allies": 6,
                    "service": 2,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should agree to take on this responsibility if the society will pay for an editorial assistant",
                        "health": 0,
                        "research": 2,
                        "allies": 0,
                        "service": 2,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should thank the leaders for the invitation, but she turns down this opportunity.",
                        "health": 0,
                        "research": 10,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should explain that it is not the right time for her to accept such an offer and asks if she might be considered again post-tenure.",
                        "health": 0,
                        "research": 4,
                        "allies": 6,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "After considering the value of this opportunity and its potential costs in terms of increasing her workload, Lee ought to consult with her chair and senior colleagues to determine whether editing a new journal would be an asset at this point in her career (i.e. would her colleagues credit her editing of the journal as a form of research?). It is highly likely that the increased work (even with an assistant) would offset any professional networking advantage gained by accepting."
            },
            {
                "id": 2,
                "prompt": "According to information supplied by a friend at a funding agency, a senior colleague in Lee's unit who has previously collaborated on another project with Lee submits a prospectus for a grant proposal based on Lee's independent research but does not credit her.",
                "maxPoints": {
                    "health": 0,
                    "research": 10,
                    "allies": 0,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should confront her colleague, who denies that her work has anything to do with the grant.",
                        "health": 0,
                        "research": 10,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should say nothing, but she decides to avoid future collaborations with this colleague.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should complain to the grant agency.",
                        "health": 0,
                        "research": 4,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Lee should avoid being too confrontational, whining, or passive. Asking the colleague to credit Lee must be done carefully. Only by continuing to establish her own research reputation in the field can Lee redeem the situation."
            },
            {
                "id": 3,
                "prompt": "External colleagues ask Lee to collaborate as the only econometrician on a multi-million dollar, multi-university research proposal that has the prospect of funding a number of her graduate students for 4 years.",
                "maxPoints": {
                    "health": 2,
                    "research": 6,
                    "allies": 2,
                    "service": 4,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should agree to participate in writing the proposal although contributing to it will require many hours of work for her and her team.",
                        "health": 2,
                        "research": 6,
                        "allies": 2,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should decline to participate because of the time commitment to research that is not central to her program.",
                        "health": 0,
                        "research": 3,
                        "allies": 2,
                        "service": 4,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should agree to participate and asks her chair for some staff support to facilitate her contribution.",
                        "health": 0,
                        "research": 4,
                        "allies": 2,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "As gaining research funding is a top priority, Lee's work on the proposal could justify staff support. In any case, contributing the proposal ought to be worth her time. The exception would be if it involves extensive work too far from her research area. She must judge whether she should extend her research or delimit it."
            },
            {
                "id": 4,
                "prompt": "Lee is asked to serve on a review panel in a related discipline.",
                "maxPoints": {
                    "health": 0,
                    "research": 6,
                    "allies": 4,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should decline serving on the panel because she is busy with her research.",
                        "health": 0,
                        "research": 4,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should accept serving on the panel because she wants to see what others are doing in the field and how proposals are evaluated.",
                        "health": 0,
                        "research": 6,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should agree to serve on the panel although its timing means she will miss a unit faculty meeting.",
                        "health": 0,
                        "research": 6,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Serving on a review panel is a good way to develop proposal writing skills as well as learning more about others' research in the field. As research is the top priority, colleagues should understand the absence from the meeting."
            },
            {
                "id": 5,
                "prompt": "Lee is considering applying for an Early Career Award, but she wonders whether it is worth it to invest time that could be used to do research.",
                "maxPoints": {
                    "health": 0,
                    "research": 8,
                    "allies": 4,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should decide that she can only invest time in research, as her work is at a critical stage.",
                        "health": 0,
                        "research": 4,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should decide to apply for the award, but she does not want to bother others with previewing her application.",
                        "health": 0,
                        "research": 8,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should ask her chair for help in identifying senior colleagues and university staff who might assist her in applying.",
                        "health": 0,
                        "research": 6,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Prestigious awards are valued as signs of research standing. Lee should consult with her chair, colleagues, and other awardees for help with her application."
            },
            {
                "id": 6,
                "prompt": "Lee is asked by her college dean to serve on a task force of faculty, staff, and students developing mechanisms to assist foreign teaching assistants. ",
                "maxPoints": {
                    "health": 0,
                    "research": 5,
                    "allies": 0,
                    "service": 10,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should agree to serve on the task force if it can count as her only Service requirement for the year.",
                        "health": 0,
                        "research": 5,
                        "allies": 0,
                        "service": 5,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should decline to serve on the task force, citing research obligations.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should thank the dean and accepts this responsibility.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 10,
                        "teaching": 0
                    },
                ],
                "response": "While research comes first, Lee will also be expected to do some service during her pre-tenure years. If she judiciously accepts assignments that interest her, she can likely manage her overall workload."
            },
            {
                "id": 7,
                "prompt": "Lee is asked if she would like to become an adjunct faculty member in another college and to have one of her key courses cross-listed in its curriculum.",
                "maxPoints": {
                    "health": 0,
                    "research": 5,
                    "allies": 5,
                    "service": 0,
                    "teaching": 6
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should agree to cross-listing the course and becoming an adjunct faculty member.",
                        "health": 0,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 5
                    },
                    {
                        "id": 2,
                        "option": "Lee should agree to cross-listing the course, but she does not pursue becoming an adjunct faculty member.",
                        "health": 0,
                        "research": 0,
                        "allies": 3,
                        "service": 0,
                        "teaching": 6
                    },
                    {
                        "id": 3,
                        "option": "Lee should decide to decline both opportunities, indicating that her area complements rather than overlaps with the inviting unit.",
                        "health": 0,
                        "research": 5,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "There are risks and benefits in being an adjunct faculty member in another unit. The key concern for Lee ought to be how closely her research fits the mission of the inviting unit and whether her work for the other unit will be valued by colleagues. More responsibilities can also increase workload."
            },
            {
                "id": 8,
                "prompt": "Graduate students in the university ask Lee to be a speaker for a local conference they are organizing.",
                "maxPoints": {
                    "health": 0,
                    "research": 5,
                    "allies": 5,
                    "service": 0,
                    "teaching": 5
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should agree to be a speaker because she can discuss her research.",
                        "health": 0,
                        "research": 5,
                        "allies": 0,
                        "service": 0,
                        "teaching": 5
                    },
                    {
                        "id": 2,
                        "option": "Lee should decline speaking because she is too busy with her research.",
                        "health": 0,
                        "research": 5,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should agree to be a speaker and asks the students if she can provide any other help for the conference.",
                        "health": 0,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 5
                    },
                ],
                "response": "Although there is little prestige associated with a student conference, there is a possibility that Lee might interest some students in her research. Participating can be seen as an extracurricular contribution to teaching. But Lee should avoid accepting other responsibilities associated with the conference as they are unlikely to generate rewards."
            },
            {
                "id": 9,
                "prompt": "Lee is asked by colleagues in another unit to help find a speaker for their unit colloquium.",
                "maxPoints": {
                    "health": 0,
                    "research": 6,
                    "allies": 6,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should suggest a short list of possible speakers and provides contact information.",
                        "health": 0,
                        "research": 0,
                        "allies": 6,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should indicate that she is not able to assist these colleagues because of other commitments.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should suggest that she would like to speak at the colloquium.",
                        "health": 0,
                        "research": 6,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Helping out colleagues in this way should not take much time and might facilitate future collaborations as Lee could suggest bringing individuals she would like to meet."
            },
            {
                "id": 10,
                "prompt": "Lee is asked to serve as the junior faculty representative on the college's executive committee.",
                "maxPoints": {
                    "health": 0,
                    "research": 10,
                    "allies": 0,
                    "service": 4,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should decline, citing research priorities for this academic year.",
                        "health": 0,
                        "research": 10,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should decline, citing her lack of familiarity with such groups.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should accept and asks her senior colleagues for guidance in proceeding.",
                        "health": 0,
                        "research": 6,
                        "allies": 0,
                        "service": 4,
                        "teaching": 0
                    },
                ],
                "response": "It is an honor to be asked, but one should accept such an opportunity only if one is able to contribute productively. Declining for research or inexperience is appropriate, while taking on the responsibility with assistance is a plausible way to minimize frustration."
            },
            {
                "id": 11,
                "prompt": "After developing two new course preparations in her first term, Lee is asked to develop new courses in three successive terms.",
                "maxPoints": {
                    "health": 0,
                    "research": 4,
                    "allies": 0,
                    "service": 0,
                    "teaching": 10
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should teach four new course preparations during her first term and continues to develop new courses in successive terms.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 10
                    },
                    {
                        "id": 2,
                        "option": "After teaching four new course preparations in her first year, Lee should ask to repeat these courses for two more years.",
                        "health": 0,
                        "research": 2,
                        "allies": 0,
                        "service": 0,
                        "teaching": 8
                    },
                    {
                        "id": 3,
                        "option": "After teaching four new course preparations in her first year, Lee should refuse to teach any more new courses.",
                        "health": 0,
                        "research": 4,
                        "allies": 0,
                        "service": 0,
                        "teaching": 6
                    },
                ],
                "response": "Faculty should not devote almost all energy to curriculum development and teaching because they will be primarily evaluated on research achievements. While a new curricular program could require intensive development, a unit should take care to allow faculty members appropriate time for writing research proposals and publications. "
            },
            {
                "id": 12,
                "prompt": "Lee's chair assigns her a mentor, who has volunteered to serve in this capacity.",
                "maxPoints": {
                    "health": 5,
                    "research": 6,
                    "allies": 5,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should tell the chair and the mentor that she doesn't need any help.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should thank the chair and the mentor and sets up regular meetings with both.",
                        "health": 5,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should work out a schedule of meetings and goals with the mentor. They plan to focus on Lee's developing stronger research proposals.",
                        "health": 3,
                        "research": 6,
                        "allies": 1,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Even if the mentor's personality and research area are different from Lee's, a mentoring relationship will likely gain her Allies, enhance her understanding of the unit's programs and institutional values, and thereby reduce her level of stress."
            },
            {
                "id": 13,
                "prompt": "Lee's undergraduate students complain to her and to her chair and the dean of students that her course is too demanding.",
                "maxPoints": {
                    "health": 5,
                    "research": 0,
                    "allies": 5,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should tell the students that the course is fine as it is and complains about the unprofessional attitude of the students when the chair asks her what has happened.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should consult with the chair and another faculty member who has taught a similar course to determine if the workload of her new course can be better calibrated.",
                        "health": 5,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should do nothing because the material is required as the course is a prerequisite.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "To maintain instructional effectiveness and unit support, Lee ought to consult with her chair and colleagues, who should help her resolve the situation to mutual satisfaction."
            },
            {
                "id": 14,
                "prompt": "Lee's chair sends her note encouraging her to sign up for a term-long seminar on teaching.",
                "maxPoints": {
                    "health": 0,
                    "research": 5,
                    "allies": 5,
                    "service": 0,
                    "teaching": 5
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should sign up for the seminar, thanking her chair for the good advice.",
                        "health": 0,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 5
                    },
                    {
                        "id": 2,
                        "option": "Lee should decline joining the seminar because she is too busy with research.",
                        "health": 0,
                        "research": 5,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should sign up for the seminar because she would like to improve her teaching style, and the seminar seems an efficient mechanism.",
                        "health": 0,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 5
                    },
                ],
                "response": "Although teaching seminars take time that might be used for research, they provide opportunities to enhance one's courses and to network with colleagues beyond one's unit. They also open a window into the teaching practices, policies, and theories used in other unit. Such information is useful, particularly for candidates preparing teaching summaries for evaluation."
            },
            {
                "id": 15,
                "prompt": "Lee is nominated for a college teaching award and is asked by her unit colleagues to supply a vita, some syllabi, and other information for the award nomination package.",
                "maxPoints": {
                    "health": 3,
                    "research": 6,
                    "allies": 3,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee is too busy finishing a grant proposal, so she should ask to be removed from consideration for the award.",
                        "health": 0,
                        "research": 4,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should agree to supply the vita and the syllabi, if a staff member can assist her in collating materials and polishing up the final version.",
                        "health": 3,
                        "research": 3,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should spend all weekend preparing to teach and working on the award nomination materials. She must stay up all night on the following Monday to finish the grant proposal by the deadline.",
                        "health": 0,
                        "research": 6,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "It would be most productive for Lee to get assistance if someone is available to help her. Otherwise, she ought to have her vita and teaching portfolio ready for such occasions."
            },
            {
                "id": 16,
                "prompt": "Although Lee kept up an active exercise regimen through graduate school as a competitive runner, she struggles to find time for physical activity given a schedule of intense research and teaching.",
                "maxPoints": {
                    "health": 10,
                    "research": 0,
                    "allies": 5,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should keep up her running schedule by finding another new faculty member in the same predicament who becomes a running buddy.",
                        "health": 5,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should decide to switch to biking every day to work as it is easier to fit into her erratic schedule.",
                        "health": 10,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee only exercises on some weekends.",
                        "health": 2,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "It is important to balance work (an active research program, effective teaching, adequate service) with a satisfying personal life. Maintaining a healthy lifestyle, including a physical fitness component, enhances one's abilities to work and ought not to be sacrificed.\n"
            },
            {
                "id": 17,
                "prompt": "Lee's widowed father is diagnosed with terminal cancer. His doctor estimates that her father, who lives at a distance and has no other close relatives, has three to six months to live.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 5,
                    "service": 0,
                    "teaching": 5
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should ask her colleagues to help her manage classes on days she is out of town with her father.",
                        "health": 0,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "To nurse her father in his home, Lee should ask for release from teaching under provisions of the active service-modified duties procedure and propose to design a new specialty course in her area.",
                        "health": 0,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 5
                    },
                    {
                        "id": 3,
                        "option": "Lee should do not tell anyone about her father or ask for any accommodations.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "The extreme circumstances of this situation justify asking for assistance from colleagues and/or the institution. If Lee does not ask for such help, there are likely costs incurred."
            },
            {
                "id": 18,
                "prompt": "Lee's apartment building goes condo. She must move further from the university, commit to buying a too expensive apartment, or share someone else's place.",
                "maxPoints": {
                    "health": 5,
                    "research": 5,
                    "allies": 5,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should choose to move and accepts a longer commute.",
                        "health": 2,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Lee should decide to buy her apartment, which allows her to continue biking to work, and takes on a big mortgage, anticipating a salary raise in the near future.",
                        "health": 5,
                        "research": 5,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Lee should opt to become the roommate of another faculty member who has a large house near campus, so that she can continue biking to work.",
                        "health": 5,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Lee's first priority is research. But her housing choice should enhance her personal life without incurring a cost for her research schedule. Depending on her preferences, some factors--long drives, increased bills, sharing space--could be stressors and/or inhibit her research productivity."
            },
            {
                "id": 19,
                "prompt": "Lee realizes that some of the faculty members in her unit eat lunch together on a regular basis and often invite colleagues from other units to join in for what is mostly a social hour. When she is asked to join this group, she should",
                "maxPoints": {
                    "health": 5,
                    "research": 0,
                    "allies": 5,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "say she is too busy to eat lunch and that she eats at her desk",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "agree to join them, but only once",
                        "health": 0,
                        "research": 0,
                        "allies": 2,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "decide to join the group on certain occasions",
                        "health": 5,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "It's good to take a break on most days. Even if lunch seems like socializing, it is also about networking and doing business, as enhancing collaborations and gaining a greater understanding of one's colleagues within and outside the unit are likely outcomes."
            },
            {
                "id": 20,
                "prompt": "Riding her bike to work, Lee is hit by a car and suffers a broken leg.",
                "maxPoints": {
                    "health": 5,
                    "research": 0,
                    "allies": 5,
                    "service": 0,
                    "teaching": 5
                },
                "options": [{
                        "id": 1,
                        "option": "Lee should ask her colleagues to help her manage classes while she recuperates.",
                        "health": 5,
                        "research": 0,
                        "allies": 5,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "To recuperate, Lee should ask for release from teaching under provisions of the active Service-modified duties procedure and should propose to design a new specialty course in her area.",
                        "health": 5,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 5
                    },
                    {
                        "id": 3,
                        "option": "After missing one day of teaching, Lee should arrange for car service, asks for a handicapped accessible classroom (reached by elevator), and should continue to work during the term.",
                        "health": 3,
                        "research": 0,
                        "allies": 0,
                        "service": 2,
                        "teaching": 5
                    },
                ],
                "response": "The extreme circumstances of this situation justify asking for assistance from colleagues and/or the institution. If Lee does not ask for such help, there are likely costs incurred."
            }
        ]
    },
    {
        "name": "Arthur Stevens",
        "id": 2,
        "questions": [
            {
                "id": 1,
                "prompt": "After a friend nominates him, Stevens is asked to run as a candidate for secretary of professional society.",
                "maxPoints": {
                    "health": 0,
                    "research": 5,
                    "allies": 5,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should agree to run because such professional service is good for networking",
                        "health": 0,
                        "research": 5,
                        "allies": 5,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should agree to run because he doesn't think he will win",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should decide not to run because he is too busy",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Service in professional organizations adds to one's professional accomplishments and networking.  Faculty should carefully how service might affect research productivity."
            },
            {
                "id": 2,
                "prompt": "Approached by a publisher, Stevens considers writing a textbook in his field. ",
                "maxPoints": {
                    "health": 0,
                    "research": 2,
                    "allies": 0,
                    "service": 0,
                    "teaching": 5
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should decide to write the textbook to make money",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 5
                    },
                    {
                        "id": 2,
                        "option": "Stevens should agree to write the textbook because he has already put a lot of work into designing the course",
                        "health": 0,
                        "research": 2,
                        "allies": 0,
                        "service": 0,
                        "teaching": 5
                    },
                    {
                        "id": 3,
                        "option": "Steven should decide that writing a textbook will detract from his research and not be financially profitable",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Working on a book takes time and is not valued equally in all academic fields."
            },
            {
                "id": 3,
                "prompt": "Stevens is invited to speak to local group of engineers at their monthly meeting",
                "maxPoints": {
                    "health": 0,
                    "research": 3,
                    "allies": 2,
                    "service": 4,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should accept the invitation because it is an opportunity to meet potential employers for his students",
                        "health": 0,
                        "research": 3,
                        "allies": 0,
                        "service": 4,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should accept because the invitation comes from a friend",
                        "health": 0,
                        "research": 3,
                        "allies": 2,
                        "service": 4,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Steven should decline because the meeting conflicts with his weekly tennis game",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "A meeting with local professionals could provide more jobs for students or have the potential to generate collaborative research or a contract."
            },
            {
                "id": 4,
                "prompt": "Stevens considers creating a mentoring program for undergraduate students that would bring together students and a number of employers.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 3,
                    "service": 3,
                    "teaching": 4
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should suggest to his chair that another faculty member coordinate such a mentoring program because Stevens is too busy",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should enlist the help of another colleague to develop such a program",
                        "health": 0,
                        "research": 0,
                        "allies": 3,
                        "service": 3,
                        "teaching": 4
                    },
                    {
                        "id": 3,
                        "option": "Stevens should indicate to the industrial partner that his university cannot support such a program",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "If an industrial mentoring program would benefit the faculty member and/or advisees, it is worth investing time in developing it."
            },
            {
                "id": 5,
                "prompt": "A national group invites Stevens to consider hosting their annual conference.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 5,
                    "service": 3,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "After checking with his chair and dean, Stevens should agree to host if his university's conference center can manage the site organization",
                        "health": 0,
                        "research": 0,
                        "allies": 2,
                        "service": 3,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should ask another colleague if she would be interested in collaborating on organizing such a conference and making a proposal to their dean",
                        "health": 0,
                        "research": 0,
                        "allies": 5,
                        "service": 3,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should indicate he will organize the conference if it has its own funding",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Organizing a professional meeting takes an enormous amount of time that could be dedicated to research, so it is best left to more senior faculty with research interests."
            },
            {
                "id": 6,
                "prompt": "Stevens is asked to provide information for a college teaching award.  ",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 0,
                    "service": 3,
                    "teaching": 5
                },
                "options": [{
                        "id": 1,
                        "option": "Because it will take him too long to put together a new cv, he should send the committee one that is three years old",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 2
                    },
                    {
                        "id": 2,
                        "option": "Because Stevens thinks he doesn't deserve the honor, he should decline to be nominated",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should take some time to update his cv and provide the other materials the committee has requested",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 3,
                        "teaching": 5
                    },
                ],
                "response": "One should keep one's vita and website up-to-date. Declining opportunities such as nominations for awards is short-sighted"
            },
            {
                "id": 7,
                "prompt": "A university development officer calls Stevens' chair to ask if he would meet with a potential donor and bring along some faculty members to discuss their research.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 3,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should ask to be briefed on the donor's profile and preferences before deciding",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should realize that his collaborator has also been invited, so he declines to meet the prospective donor on this occasion",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens will be off campus that day and should suggest that a new female colleague in a related area be invited to meet the prospective donor",
                        "health": 0,
                        "research": 0,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Agreeing to meet a donor can generate revenue, and facilitating another faculty member's participation in a meeting with a prospective donor is a sign of good mentoring. "
            },
            {
                "id": 8,
                "prompt": "A new senior colleague interested in developing a new research center asks Stevens if he would be interested in participating in collaborative research.",
                "maxPoints": {
                    "health": 0,
                    "research": 5,
                    "allies": 3,
                    "service": 2,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should agree to attend an initial meeting of faculty who might participate",
                        "health": 0,
                        "research": 3,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should mention his research time for the next two years is already committed to projects marginally related to the center",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should agree to participate and suggests the names of other colleagues who might be interested",
                        "health": 0,
                        "research": 5,
                        "allies": 3,
                        "service": 2,
                        "teaching": 0
                    },
                ],
                "response": "A research center provides opportunities for colleagues to collaborate on research activities, including proposals, papers, events, and advising graduate students."
            },
            {
                "id": 9,
                "prompt": "Graduate students ask Stevens to advise a student engineering society.",
                "maxPoints": {
                    "health": 2,
                    "research": 0,
                    "allies": 2,
                    "service": 2,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should decline to advise the society, indicating he has a big project in the coming year that he wants to be sure is completed on time.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should agree to advise the society, if another faculty member will assist",
                        "health": 0,
                        "research": 0,
                        "allies": 2,
                        "service": 2,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should agree to advise the society because the students who approach him are in his area",
                        "health": 2,
                        "research": 0,
                        "allies": 2,
                        "service": 2,
                        "teaching": 0
                    },
                ],
                "response": "Faculty should consider how service responsibilities might affect their research productivity and the benefits to students."
            },
            {
                "id": 10,
                "prompt": "Stevens is asked to serve on a university grievance committee considering a student's complaint concerning her final exam and course grade.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 0,
                    "service": 3,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should decline because he is too busy completing a grant proposal",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should agree to serve because he knows the student and wants her to be treated fairly",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 3,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should decline to serve, citing a conflict of interest because he knows the student",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Serving on such a committee is an act of service that helps a faculty member understand and enforce academic regulations and pedagogical principles."
            },
            {
                "id": 11,
                "prompt": "When the post is offered to him, Stevens considers becoming undergraduate coordinator.",
                "maxPoints": {
                    "health": 2,
                    "research": 0,
                    "allies": 2,
                    "service": 4,
                    "teaching": 3
                },
                "options": [{
                        "id": 1,
                        "option": "Before deciding whether to accept his chair's offer, Stevens should ask if he can adjust his teaching to mesh better with the administrative work",
                        "health": 2,
                        "research": 0,
                        "allies": 0,
                        "service": 4,
                        "teaching": 3
                    },
                    {
                        "id": 2,
                        "option": "Stevens should agree to become undergraduate coordinator because he thinks that no one else will do it",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 4,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should decline the offer of becoming undergraduate coordinator and nominates a colleague who has previously expressed interest in the position",
                        "health": 0,
                        "research": 0,
                        "allies": 2,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Faculty should carefully consider whether they are interested in entering the administrative ranks or in working on administrative tasks for only short periods.  "
            },
            {
                "id": 12,
                "prompt": "Stevens realizes that he must inject new momentum into his lagging research productivity. He asks his chair for time off from unit service to work on publications.",
                "maxPoints": {
                    "health": 5,
                    "research": 0,
                    "allies": 3,
                    "service": 3,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should schedule a meeting with his chair and brings a spreadsheet noting that his typical weekly research, teaching, and service obligations take 65 hours per week.",
                        "health": 5,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should agree to run for the university committee to avoid continuing this confrontation with his chair.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 3,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should indicate that such a break from service will only be a temporary one of a year.",
                        "health": 0,
                        "research": 0,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Faculty and administrators share an interest in increasing research productivity and funding. Stevens should explain a break in service would result in more funded research."
            },
            {
                "id": 13,
                "prompt": "Stevens' chair is interested in developing a mentoring program for new faculty and invites Steven to consider becoming a mentor.",
                "maxPoints": {
                    "health": 0,
                    "research": 3,
                    "allies": 3,
                    "service": 3,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should agree to mentor a junior colleague, but only one in his field",
                        "health": 0,
                        "research": 3,
                        "allies": 2,
                        "service": 3,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should agree to mentor a particular junior colleague because he feels she would be the easiest person to get along with",
                        "health": 0,
                        "research": 3,
                        "allies": 3,
                        "service": 3,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Steven should say he can't take on this responsibility yet",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Mentoring should be the responsibility of faculty. Stevens should accept this responsibility with a generous attitude."
            },
            {
                "id": 14,
                "prompt": "Stevens tries to mediate between two different factions in his department. At one meeting both groups indicate that he should decide which group he will join.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 0,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should decide to stop participating in these meetings and to abstain from voting on any proposals to change the program",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should keep trying to mediate between the groups",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should request that the chair involve an outside mediator",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Political disputes can poison a department's atmosphere, but differences among colleagues might be too disparate and long-lasting for one insider to have much impact."
            },
            {
                "id": 15,
                "prompt": "Having shared a graduate student with a colleague, Stevens realizes that his own work and his colleague's overlap significantly.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 0,
                    "service": 5,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should ask the colleague to work together on a paper",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should ask the colleague to consider applying for funding together",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 2,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should ask the colleague to present her work in one of Stevens' lab meetings",
                        "health": 0,
                        "research": 0,
                        "allies": 2,
                        "service": 5,
                        "teaching": 0
                    },
                ],
                "response": "Collaborating with colleagues can take many forms, including sharing students, writing articles, and submitting proposals to maximize the potential impact of research."
            },
            {
                "id": 16,
                "prompt": "Diagnosed with a heart ailment, Stevens gives up smoking, moderates his drinking, diets, and wants to take an exercise class conflicting with a unit meeting.",
                "maxPoints": {
                    "health": 5,
                    "research": 0,
                    "allies": 0,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should ask his department to offer some seminars at a different time",
                        "health": 5,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should opt for a different exercise class",
                        "health": 5,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should request that water aerobics be taught at a different time",
                        "health": 5,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Especially during periods of illness or injury, faculty members and their institutions should make health a priority."
            },
            {
                "id": 17,
                "prompt": "Two weeks before fall term begins Stevens asks for a midday teaching schedule to care of his wife, in traction with a broken leg and with nursing care for inflexible hours.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 0,
                    "service": 0,
                    "teaching": 3
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should decide to take a partial leave at reduced pay to avoid making his chair angry",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Stevens should insist that his class schedule must be changed, noting that many students would prefer a midday class",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 3
                    },
                    {
                        "id": 3,
                        "option": "Stevens should ask a neighbor to watch his wife so that he can teach at 9am as originally scheduled",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 3
                    },
                ],
                "response": "Family Leave Act provisions let an employee structure family leave by working part-time. Stevens could apply for Active Service Modified Duties to fund his release."
            },
            {
                "id": 18,
                "prompt": "Stevens decides to renovate part of his house and puts up a sign asking for paid worker.  A colleague tells Stevens TO HIRE unpaid graduate students",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 0,
                    "service": 0,
                    "teaching": 5
                },
                "options": [{
                        "id": 1,
                        "option": "Stevens should tell the colleague he thinks students should be paid for outside work",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 5
                    },
                    {
                        "id": 2,
                        "option": "Stevens should laugh and says \"I don't want to know anything about that.\"",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Stevens should tell students applying that he's changed his mind and won't be offering any remuneration.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "It would be unfair and potentially illegal for Stevens to \"hire\" students without offering them some compensation"
            }
        ]
    },
    {
        "name": "Helen Clemens",
        "id": 3,
        "questions": [
            {
                "id": 1,
                "prompt": "Clemens is asked to teach for one term as a visiting faculty member at a local university. While she is interested in collaborating with someone there, her colleagues wonder if she is experimenting with a move. One asks that she not accept the position.",
                "maxPoints": {
                    "health": 4,
                    "research": 6,
                    "allies": 6,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should take the appointment because she believes it will enhance her research.",
                        "health": 4,
                        "research": 6,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should ask if the appointment might be offered at a later date.",
                        "health": 0,
                        "research": 6,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should not accept the appointment because it will damage her relationship with her colleagues.",
                        "health": 0,
                        "research": 0,
                        "allies": 6,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Faculty should consider whether the timing of an appointment suits one's research and advancement timetables. Clemens should educate her chair and colleagues about why her choice is good for the unit and the university"
            },
            {
                "id": 2,
                "prompt": "Clemens and her husband Joseph Smith are both featured speakers at a professional regional conference. After her talk, one questioner publicly refers to her as Mrs. Smith. ",
                "maxPoints": {
                    "health": 0,
                    "research": 10,
                    "allies": 0,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should pretend not to notice and answers his question.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should give her correct name as \"Dr. Clemens\" and answers his question.",
                        "health": 0,
                        "research": 10,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should refuse to respond to the questioner and calls on someone else.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "One's name is a factor in establishing one's scholarly reputation, as are developing congenial relationships with potential reviewers. Clemens gains by courteously offering her correct name in the public forum."
            },
            {
                "id": 3,
                "prompt": "Clemens is asked by a peer at another institution 10 miles away to collaborate on a grant investigating the history of her discipline. The project would direct a majority of the funding toward that institution's history department but would produce modules to be incorporated in undergraduate mathematics.",
                "maxPoints": {
                    "health": 2,
                    "research": 7,
                    "allies": 3,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should agree to participate because she is interested in that project.",
                        "health": 0,
                        "research": 7,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should decline to participate unless more colleagues from her institution are invited to join the team.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens will participate if she can meet on the other campus no more than one day each week during the grant period.",
                        "health": 2,
                        "research": 6,
                        "allies": 2,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Research funding is one indicator of scholarly productivity for evaluation of committees. Yet amassing funding for projects that diverge from one's research profile is not ideal, unless one is moving into another field. Clemens ought to consider the value of the project for her research trajectory as well as her value to the project before agreeing to be included."
            },
            {
                "id": 4,
                "prompt": "Clemens is asked to run for a five-year term of office in a small scholarly society. While weekly workload is small, she would be expected to attend the annual conference and two planning meetings.",
                "maxPoints": {
                    "health": 0,
                    "research": 3,
                    "allies": 3,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should decide not to run because she is not interested in being an officer.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should decide to run but hopes she does not win.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should decide to run because she wants to attend that conference each year.",
                        "health": 0,
                        "research": 3,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Participating in national and international meetings and contributing to those organizations contribute to faculty development and enhance one's stature in the field. One's level of involvement should reflect one's commitment to the field and society and one's anticipated benefit of networking among the members of that society. If Clemens sees a close correlation between her research and the society's mission she should accept the nomination."
            },
            {
                "id": 5,
                "prompt": "Clemens is considering collaborating with two other untenured colleagues at other institutions to write a textbook in an emerging subject area.",
                "maxPoints": {
                    "health": 3,
                    "research": 3,
                    "allies": 3,
                    "service": 0,
                    "teaching": 3
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should decide with her colleagues that the textbook should be their highest research priority.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 3
                    },
                    {
                        "id": 2,
                        "option": "Clemens and her collaborators decide to put off beginning the project for three years until all have tenure.",
                        "health": 3,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens and her collaborators should agree to work on the book as a second research priority.",
                        "health": 3,
                        "research": 3,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Publishing a mathematics textbook, especially in a specialty field with little competition, could garner financial rewards for the writers. But, since all collaborators are untenured, they should concentrate on individual research while continuing to work on the textbook according to a manageable schedule."
            },
            {
                "id": 6,
                "prompt": "The alumni association of the university would like Clemens to participate in a program for parents and students that is designed to attract more women to mathematics.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 0,
                    "service": 6,
                    "teaching": 3
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should say that she does not have time.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should suggest a speaker more closely associated with recruitment.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should accept the invitation and agrees to give a talk about opportunities in mathematics.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 6,
                        "teaching": 3
                    },
                ],
                "response": "Research productivity is more highly valued and rewarded than service, but each faculty member is expected to do some service. Clemens ought to consider whether she would enjoy developing this talk and sharing it with the almuni event and possibly other audiences."
            },
            {
                "id": 7,
                "prompt": "A female graduate student in another department complains to Clemens that she has been subjected to sexual harassment by her major professor.",
                "maxPoints": {
                    "health": 0,
                    "research": 0,
                    "allies": 0,
                    "service": 2,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should complain to her chair about the situation.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should tell the graduate student to complain to the chair of that professor's department.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should tell the institution's administration addressing misconduct.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 2,
                        "teaching": 0
                    },
                ],
                "response": "Institutional policy requires that student complaints be reported to the administrator overseeing the sexual misconduct policy. Clemens could also investigate available counseling and advocacy resources and point them out to the student."
            },
            {
                "id": 8,
                "prompt": "Clemens is asked to be on a university search committee for a new library staff member who will be responsible for improving the mathematics collection.",
                "maxPoints": {
                    "health": 0,
                    "research": 6,
                    "allies": 5,
                    "service": 5,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should agree to be on the committee because she wants a better collection.",
                        "health": 0,
                        "research": 0,
                        "allies": 5,
                        "service": 5,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should decline the assignment because of research and travel.",
                        "health": 0,
                        "research": 6,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should agree to be on the committee but explains that she has limited opportunities to meet.",
                        "health": 0,
                        "research": 3,
                        "allies": 3,
                        "service": 3,
                        "teaching": 0
                    },
                ],
                "response": "Faculty members should consider the time, workload, and desired outcome of service in relation to planning one's own research timetable. Some institutional service will enhance Clemen's networking on campus. Having a research interest in the committee's work is also an incentive to participate."
            },
            {
                "id": 9,
                "prompt": "Colleagues in math and two other units form an interdisciplinary research center and ask Clemens to join them.",
                "maxPoints": {
                    "health": 0,
                    "research": 8,
                    "allies": 0,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should decline because she feels her own individual research will suffer.",
                        "health": 0,
                        "research": 8,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should decline because her chair tells her the center's mission is not related to math's mission.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should agree because the collaboration is promising.",
                        "health": 0,
                        "research": 5,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Faculty members should consider whether interdisciplinary, collaborative efforts converge or diverge from their primary research areas. Candidates for promotion to associate should emphasize primary research, although some interdisciplinary work could enhance one's record. Candidates for promotion to full would be more likely to be rewarded for productivity in interdisciplinary research."
            },
            {
                "id": 10,
                "prompt": "The dean of Clemens' college asks whether she would be interested in applying to serve on a half-time basis as an interim associate dean for undergraduate studies for six months. Clemens applies and is offered the position about one month later, but she has second thoughts about accepting it after a colleague warns her that even a temporary administrative appointment could derail her research productivity.",
                "maxPoints": {
                    "health": 0,
                    "research": 7,
                    "allies": 4,
                    "service": 4,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should accept the appointment because she is interested in establishing an administrative track record.",
                        "health": 0,
                        "research": 0,
                        "allies": 4,
                        "service": 4,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should decide against accepting the appointment because she is worried about her research productivity.",
                        "health": 0,
                        "research": 7,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should accept the appointment on the condition that her hours as associate dean be limited.",
                        "health": 3,
                        "research": 0,
                        "allies": 3,
                        "service": 3,
                        "teaching": 0
                    },
                ],
                "response": "Although a temporary assignment could launch a faculty member into administration, performing these duties will inevitably affect one's research productivity, as Clemens should realize. Faculty members ought to plan their career objectives and decide on which opportunities to accept based on such plans. Even temporary assignments could be subject to negotiation so that the individual faculty member does not sacrifice too much."
            },
            {
                "id": 11,
                "prompt": "After returning from a term spent at another university, Clemens finds that her unit has moved her office and all belongings (now boxed) to a smaller, less convenient one without consulting her.",
                "maxPoints": {
                    "health": 3,
                    "research": 0,
                    "allies": 0,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should decide to say nothing.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should complain to her chair and asks for her old office back.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should ask if the new office can be repainted.",
                        "health": 3,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Even though she may not know why the department changed her office, it is up to Clemens to react as professionaly as possible and to continue her work. If it is impossible for Clemens to use the new office, she should appeal to those in authority to help her resolve this problem, perhaps by assigning her to a preferred space."
            },
            {
                "id": 12,
                "prompt": "Clemens and her husband Joseph Smith plan to spend a year abroad teaching at a foreign campus associated with their university. Their chair tells them that while Clemens can go, the department cannot spare Smith for such a long time as they do not currently have another specialist in his field.",
                "maxPoints": {
                    "health": 0,
                    "research": 7,
                    "allies": 7,
                    "service": 2,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should decide to go abroad for the year, and her husband agrees to go for a period of two months, as suggested by their chair.",
                        "health": 0,
                        "research": 0,
                        "allies": 7,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens and her husband should agree to decline the opportunity to teach abroad.",
                        "health": 0,
                        "research": 4,
                        "allies": 4,
                        "service": 2,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens and her husband should decide that they should teach abroad, and that they will work with the chair to find ways of ameliorating their absences from the department.",
                        "health": 0,
                        "research": 7,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Faculty members should assess the gains and costs associated with teaching at another campus as well as best managing this change with colleagues, students, and family members. While Clemens' and Smith's chair might have an opinion, the couple should decide what option is in the best interest of their careers."
            },
            {
                "id": 13,
                "prompt": "Clemens and other faculty in her department would like to approach the chair to ask for a change in the way salary increases are determined. The faculty members plan to request that the department's executive committee, and not just the chair, approve yearly increases.",
                "maxPoints": {
                    "health": 3,
                    "research": 0,
                    "allies": 3,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should agree that faculty should play a role in such decisions, so she joins the group making the request.",
                        "health": 0,
                        "research": 0,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens does not want to join the group because she objects to faculty having a role in determining salaries.",
                        "health": 3,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should agree to take part in the group if her husband, who is in the same department, will also be invited to join.",
                        "health": 2,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Faculty members should work together to achieve common goals. They should also recognize that such actions might appear threatening to others or might incur repercussions such as hostility from those who disagree."
            },
            {
                "id": 14,
                "prompt": "Clemens is interested in teaching a new course for the undergraduate degree in her department that could be cross-listed. When the new course is announced at a department meeting, some colleagues object to its being offered with another department.",
                "maxPoints": {
                    "health": 0,
                    "research": 3,
                    "allies": 3,
                    "service": 0,
                    "teaching": 3
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should take time to explain the rationale for cross-listing with her colleagues.",
                        "health": 0,
                        "research": 3,
                        "allies": 3,
                        "service": 0,
                        "teaching": 3
                    },
                    {
                        "id": 2,
                        "option": "Clemens should decide that she will only offer the course once.",
                        "health": 0,
                        "research": 3,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should ask the chair to help justify the course to colleagues.",
                        "health": 0,
                        "research": 3,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Faculty should link teaching with research. Interdisciplinary research provides increased opportunities for funding."
            },
            {
                "id": 15,
                "prompt": "Clemens' chair asks if she is willing to serve on a search committee for a new colleague in an area that overlaps hers.",
                "maxPoints": {
                    "health": 3,
                    "research": 3,
                    "allies": 0,
                    "service": 4,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should agree and asks how she can help publicize the position.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 4,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should agree as long as she does not have to shepherd candidates during their on campus interviews, citing many travel obligations.",
                        "health": 3,
                        "research": 0,
                        "allies": 0,
                        "service": 2,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should ask that she not be included on the search committee as she has many other professional obligations in the coming academic year.",
                        "health": 3,
                        "research": 3,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Each faculty member should perform some service for his/her unit. If Clemens would rather be on a search committee during another, less hectic term, she may be able to make an arrangement with her chair. But if her expertise is needed and she can work it into her schedule, being on a search committee can be enlightening as well as useful work."
            },
            {
                "id": 16,
                "prompt": "Clemens and her husband Joseph Smith, who teaches in the same unit, have a baby. For several terms they ask their department curriculum coordinator for complementary teaching schedules, but she is unwilling to agree to this plan one particular term because it would mean asking a distinguished senior faculty member to change his schedule.",
                "maxPoints": {
                    "health": 3,
                    "research": 3,
                    "allies": 0,
                    "service": 0,
                    "teaching": 4
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should meet with the chair and her husband to discuss making their complementary schedules permanent.",
                        "health": 3,
                        "research": 3,
                        "allies": 0,
                        "service": 0,
                        "teaching": 4
                    },
                    {
                        "id": 2,
                        "option": "Clemens should arrange a meeting with the curriculum coordinator and her husband to re-adjust the problem schedule.",
                        "health": 3,
                        "research": 0,
                        "allies": 3,
                        "service": 0,
                        "teaching": 3
                    },
                    {
                        "id": 3,
                        "option": "Clemens should ask the unit's executive commttee to intervene to settle the matter.",
                        "health": 0,
                        "research": 0,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Faculty personal needs should be taken into account by the coordinator, who should make an effort to accommodate Clemens' and Smith's request and to balance these with departmental priorities and other individual needs in the unit. Clemens and Smith should exercise persuasion on their chair and other colleagues to explain their situation and should attempt to work out a mutually satisfactory plan that might involve the couple teaching at some less desired time slots. Such persuasion might include an explanation of how the faculty member can better meet the needs of students and maintain productivity, if one is available in case of family emergencies."
            },
            {
                "id": 17,
                "prompt": "Anticipating the arrival of a baby in the summer, Clemens applies for release from teaching for the following fall term according to the Active Service Modified Duties procedure, proposing to design a new graduate course in her field. Her chair suggests that instead of just designing the course that Clemens ought to teach it in the fall.",
                "maxPoints": {
                    "health": 3,
                    "research": 6,
                    "allies": 3,
                    "service": 0,
                    "teaching": 2
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should arrange to meet with the chair to persuade him to approve her request.",
                        "health": 3,
                        "research": 6,
                        "allies": 0,
                        "service": 0,
                        "teaching": 2
                    },
                    {
                        "id": 2,
                        "option": "Clemens should contact the university staff member who coordinates the Active Service Modified Duties procedure to ask for help in persuading the chair.",
                        "health": 3,
                        "research": 6,
                        "allies": 2,
                        "service": 0,
                        "teaching": 1
                    },
                    {
                        "id": 3,
                        "option": "Clemens should agree to teach the new course in the fall.",
                        "health": 0,
                        "research": 0,
                        "allies": 3,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Without being self-righteous or confrontational, faculty parents should remind administrators and colleagues of the health effects of childbirth, which might require surgery or further medical interventions for mother and/or child, and the demands of raising an infant, who requires 24-hour care. Because new faculty parents must also keep up their research productivity, they should work in concert with administrators to work out satisfactory schedules that could involve full release from teaching or other responsibilities for a term. Institutions investing in employees garner their respect and loyalty."
            },
            {
                "id": 18,
                "prompt": "Clemens asks her chair if she can stop her tenure clock for one year as a result of childbirth. The associate chair tells her that even if her request to stop the clock is granted and that she be permitted to come up for promotion and tenure one year later than others in her entering cohort, Clemens should keep to her \"original schedule.\"",
                "maxPoints": {
                    "health": 3,
                    "research": 3,
                    "allies": 4,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should request to stop the clock, intending to come up for promotion and tenure one year later than the rest of her cohort.",
                        "health": 3,
                        "research": 3,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should reconsider and decides not to stop the clock.",
                        "health": 0,
                        "research": 0,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should ask to stop the clock, although intending to come up with her cohort.",
                        "health": 0,
                        "research": 0,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Stopping the clock for one year as a result of childbirth is a reasonable request that should be respected. Clemens should recognize that each faculty member will encounter personal issues affecting one's career and that delaying her review one year does not constitute an unfair advantage, even if her colleagues might perceive the situation that way. Faculty should make use of the family-friendly policies developed to ensure the continuance of such policies."
            },
            {
                "id": 19,
                "prompt": "Clemens starts a group of mothers on campus who exercise at lunch, so she is not able to join her unit colleagues for lunch as frequently. One colleague tells her that she is missing \"important stuff\" at the unit lunches, while another remarks that Clemens ought to attend the ones her husband Joseph Smith, also in the unit, misses.",
                "maxPoints": {
                    "health": 4,
                    "research": 0,
                    "allies": 8,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should decide to go to lunch instead of exercising once each week.",
                        "health": 0,
                        "research": 0,
                        "allies": 8,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should decide to ask colleagues to go out to dinner occasionally to stay in touch.",
                        "health": 4,
                        "research": 0,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should coordinate carefully with her husband to attend the lunches he cannot.",
                        "health": 4,
                        "research": 0,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Casual gatherings do include \"important stuff,\" but faculty should also incorporate regular exercise into their schedules. Clemens should strive to balance these activities as she prefers. Maintaining collegiality is important but more important is one's research productivity and its impact."
            },
            {
                "id": 20,
                "prompt": "After moving to a new home, Clemens adjusts her schedule to be on campus 7am to 3pm and plans to attend afternoon meetings only if they directly involve her and when she can pre-arrange childcare. She also writes at home in late afternoon and evening and checks email. Her mentor, a male faculty member with a stay-at-home spouse, tells her that she needs \"to be around more for the sake of appearances.\"",
                "maxPoints": {
                    "health": 0,
                    "research": 8,
                    "allies": 4,
                    "service": 0,
                    "teaching": 0
                },
                "options": [{
                        "id": 1,
                        "option": "Clemens should decide that 7am-3pm is generally the best schedule for her and tells her mentor this.",
                        "health": 0,
                        "research": 8,
                        "allies": 0,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 2,
                        "option": "Clemens should ask her husband Joseph Smith who is in the same unit to juggle schedules sometimes so that she would be around her department some afternoons.",
                        "health": 0,
                        "research": 4,
                        "allies": 4,
                        "service": 0,
                        "teaching": 0
                    },
                    {
                        "id": 3,
                        "option": "Clemens should discuss the situation with a male faculty colleague who has a constrained schedule due to commuting, and they realize that everyone in the unit works different hours depending on personal circumstances, information Clemens shares with her mentor.",
                        "health": 0,
                        "research": 8,
                        "allies": 2,
                        "service": 0,
                        "teaching": 0
                    },
                ],
                "response": "Given that faculty work within disciplines with different expectations regarding how/where/when one does one's research, academics tend to have flexible schedules. For faculty who live great distances from campus and/or have particular family responsibilities, such flexibility is a boon. Clemens should be productive and should demonstrate to colleagues that her schedule works for her and does not detract from her contributions to her unit and institution."
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/nyc/game/transcript/nyc-transcript.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n\n}\n\n.dialog {\n  min-height: 50px;\n  text-align: left;\n  /* width: inherit; */\n  border-radius: 5px;\n  border: solid;\n  border-width: 1px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.19);\n  position: relative;\n  border-color: #0D3055;\n  margin-left: 50px;\n  margin-right: 50px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width:100%;\n}\n\n.dialog-committee {\n  min-height: 50px;\n  text-align: left;\n  /* width: inherit; */\n  border-radius: 5px;\n  border: solid;\n  border-width: 1px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.19);\n  position: relative;\n  border-color: #EFB211;\n}\n.image {\n  height: 40px;\n  width: 40px;\n}\n\n.info-icon {\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  width: 15px;\n  height: 15px;\n}\n\n.info-icon:hover {\n  cursor: pointer;\n}\n\n.dialog-content-transcript {\n  padding-right:12px;\n  padding-top:10px;\n}\n\n.sub-heading {\n  font-size:12px;font-weight:300;\n}\n\n.sub-heading-icon{\n  width:12px;\n}\n\n.references {\n  font-size: 12px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\n.question-response {\n  color: #969696;\n  padding-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nyc/game/transcript/nyc-transcript.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"close\" (click)=\"onNoClick()\" src=\"../../../assets/multiply.png\">\n</div>\n<h2 mat-dialog-title>Navigating Your Career Transcript: {{name}}</h2>\n<hr>\n\n<mat-dialog-content>\n  <div>\n    <div class=\"row\" *ngFor=\"let question of questions\">\n\n      <div class=\"dialog\">\n        <p class=\"dialog-content-transcript\">{{question.prompt}}</p>\n        <div class=\"question-response\"><i>{{question.response}}</i>\n        </div>\n      </div>\n    </div>\n  </div>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/nyc/game/transcript/nyc-transcript.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NYCTranscriptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NYCTranscriptComponent = (function () {
    function NYCTranscriptComponent(dialogRef, data, router, route) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.route = route;
    }
    NYCTranscriptComponent.prototype.onNoClick = function () {
        console.log(this.counter);
        if (this.counter == 9) {
            this.router.navigate(['/nyc']);
        }
        this.dialogRef.close();
    };
    NYCTranscriptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nyc-transcript',
            template: __webpack_require__("../../../../../src/app/nyc/game/transcript/nyc-transcript.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nyc/game/transcript/nyc-transcript.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NYCTranscriptComponent);
    return NYCTranscriptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nyc/main-page/candidates.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANDIDATES; });
var CANDIDATES = [
    {
        "candidate_id": 1,
        "name": "Pam Lee",
        "short_desc": "Ph.D. in Economics",
        "image": "../../../assets/PL.png",
        "career_account": [
            "Pam Lee, Ph.D. in Economics from the University of Chicago, was hired by a prestigious research university's management program to teach econometrics. Although she is one of a dozen economists on campus, she is only the third econometrician and replaces a retiring star in the field, someone considered an anchor of a graduate program ranked in the top three in the nation. Lee’s very prominent graduate advisor highly recommended her as his best student in the past decade, indicating that her dissertation was \"groundbreaking\" and \"revolutionary\" in creating a new theoretical model for the field.",
            "A deferential, somewhat quiet person unless probed about her research, Lee had a rocky start with her university colleagues and students. Some undergraduates complained to the undergraduate coordinator about her accent, and some graduate students reported that Lee is \"too rigorous\" \"especially concerning statistical analysis.\" Although the preponderance of faculty in the department see Lee as merely \"young\" and \"a little shy,\" two faculty members express concerns to the chair during her first term about Lee's \"inability to socialize\" and \"fit in.\" The chair, also an Asian immigrant, regarded Lee as undergoing the typical adjustment period of a new faculty member struggling to shift from star graduate student to novice teacher while keeping up a high research profile. The chair encouraged a sympathetic senior faculty, not directly in her research area, to mentor her. After an initial lunch meeting with Lee to offer his mentoring input, the senior faculty member drifted away from the arrangement, too busy to set appointments.",
            "During her first three years at the university, Lee presented four conference papers on sophisticated, technically rigorous statistical analysis methods, complementing the work she did in her dissertation; she also published one journal paper based on her dissertation. She improved her undergraduate and graduate teaching ratings by working with professionals at the university center for teaching and managed to attract two graduate students to work closely with her. She also expanded departmental offerings in her field and created a sequence of two undergraduate courses in econometrics.",
            "At the time of her third-year critical review, her chair conveyed the review committee's warning about her lack of publications. He encouraged her to stay in touch with him and to work closely with two other colleagues \"to generate more papers.\" After being initially taken aback by this criticism, Lee agreed with her chair that she would \"appreciate some advice.\" She sought out faculty her chair helped identify as her mentors, sharing two new conference papers with them and asking them for editorial criticism and guidance on improving her publication record.",
            "Although the two mentors worked in different fields, they recognized that Lee's papers were hampered by her awkward written English and her tendency to rely solely on complex formulas to demonstrate her arguments. One suggested that Lee improve her grammar and general writing skills by studying an English composition text, and the other encouraged her to read The Wall Street Journal and some American novels to develop a more fluid style. They also encouraged Lee to think about applications of her theoretical models to their fields, finance and macroeconomics. ",
            "Lee worked hard to improve her English and accepted the offer to collaborate on an article with one mentor. He devoted time during the process of co-writing to show her how to put together a scholarly argument, and he helped her understand how they could manage the journal reviewers' comments in revision. Lee's other mentor took a less active role in improving her productivity, suggesting two applications of her theoretical method that might prove promising. She wrote one paper designated for a journal suggested by this mentor, who offered comments before she mailed it off. Benefiting from the advice and contributions of these senior scholars, Lee managed to get two articles (one collaborative) accepted in her fourth year. In her fifth year, she wrote two archival papers, one with her previous collaborator and another on her own, which were also published. Her mentors complimented her on greatly improved writing skills.",
            "One mentor, fascinated by Lee's application of her theories to his subfield, developed and submitted a proposal for funding based on this method to an agency, citing their joint paper as the basis for the work. However, Lee was neither consulted nor included in the development of the proposal or as a co-investigator. She was visibly upset when she learned of this from another colleague who commented that he understood that her mentor was now working in the same field; confronting her mentor, he informed her that there is no monopoly on good ideas and he was in the best position to develop this premise within his own subfield. With that, the mentoring relation ended, but Lee decided to keep the situation it to herself given the fact that the department chair had recommended this mentor and was his close associate.",
            "Three letters of reference commenting on her tenure and promotion case were very positive, indicating that her publications posit original, rigorous theoretical claims. Two others referred to further interesting applications. The sixth highly positive letter comes from a senior scholar, known for being Lee's mentor’s first graduate student. By the time Lee comes up for promotion and tenure, she has published five scholarly articles (one in Econometrica, the leading journal in her field, and four applying econometric analysis to other fields), given an average number of conference papers, and participated on two department committees. A member of the promotion and tenure committee questions whether this level of productivity demonstrated largely within fields other than econometrics justifies promotion and tenure at the university. Another member cites that he has input from a former mentor that Dr. Lee is intelligent but is difficult to communicate with and to work with. As another member of the committee, how would you respond to these concerns about Lee’s productivity and collegiality?"
        ],
        "dossier": {
            "educational_background": [
                "B.S. Materials Engineering, UC-Santa Barbara",
                "M.S. Chemistry, UC-Santa Barbara",
                "Ph.D. Materials Science and Engineering, UC-Berkeley, 5 years ago"
            ],
            "publications": [
                "Refereed: 17 articles, 15 co-authored with students, 11 co-authored with other faculty (7 in chemistry, 4 in MSE, dominantly in journals favored by chemists); 6 articles from PhD work, co-authored with major advisor, Dr. Sylvia Lampaninia.",
                "Two articles appeared in Journal of Engineering Education within the past 14 months, one on a controlled study of class performance with an without use of multimedia tools and videos to assist physical understanding of crystal structures and defects in solids, and the other on use of web-based media to provide a philosophical foundation for instruction based on analogies from other fields."
            ],
            "conference_proceedings": [
                "11, 6 in past two years"
            ],
            "presentations": [
                "5 seminars, 2 invited"
            ],
            "research": [
                "Perez' doctoral research focused on thin film deposition and measurement of thin film properties, in part three years this has been refocused towards molecular scaffolding for growth of structured, chemically activated surfaces that can be used for environmental sampling."
            ],
            "funding": {
                "funding_resources": [
                    "70k$ total first two years, two single investigators grants",
                    "$230k third year, as Perez' component of collaborative projects with Profs. Lopez and Rodriquez of Chemistry",
                    "$350k years 4-5, as Perez' component of a $1.3M per year interdisciplinary center funded by NSF (Perez is co-investigator,with Lopez, Rodriquez and Johnson, Rita Lopez is PI/PD) ",
                    "$35k from industry funding, year 4, Co-PI with Dr. Sharikh Bahouali of Environmental Engineering who serves as project director",
                    "$25k from Gates Institute for Web-Based Instruction to develop Instruction by Analogy: Mining the Web for Parallel Examples"
                ],
                "extra_funding": "There is no other funding in MSE related to Perez' primary interest area"
            },
            "graduate_student_advisement": {
                "opening_line": "4 PhD students in-progress, 1 of whom passed MSE qualifying examination",
                "advisement": [
                    "2 of these PhD students are co-advised by Dr. Rodriquez in Chemistry, and are registered in Chemistry",
                    "2 MS students graduated, 2 more MS students in progress (all MSE)"
                ]
            },
            "teaching": [
                "has taught MSE 272, Introduction to Structure of Materials(joint with two other MSE faculty, team-taught course). Has taught sections of senior level design course in MSE. Has co-developed and co-taught Chemistry/MSE 745, Surface Chemistry and Multifunctionality, with Scott, Rodriquez from Chemistry. Highly ranked in MSE 272 by student surveys (upper quartile), ranked above average by senior design student surveys, and receives highly responses from graduate students in CHEM/MSE 745. Students often comment that they can identify with Perez. Students often comment on positive use of multimedia and web-based tools in lectures."
            ],
            "service": [
                "Faculty Advisor, ASM Chapter (10 MSE students involved)",
                "Member,MSE Computer Committee, past three years"
            ],
            "honors_and_awards": [
                "Best Paper, APS meeting two years ago, (co-authors, in order to listing:Lopez,Perez, Rodriquez)",
                "Certificate of merit, center for innovation in teaching, Mythical Tech"
            ]
        },
        "committee_members": [{
                "committee_id": 1,
                "name": "Al Smith",
                "image": "../../../assets/Al.png",
                "description": "Al Smith, chair of unit reappointment, promotion and tenure (RPT) committee for the third time, member for the tenth. Does not work in Perez' area. Has a history of research in a classical, core area of materials engineering well-funded by government and industry."
            }, {
                "committee_id": 2,
                "name": "Jason Dayan",
                "image": "../../../assets/JD.png",
                "description": "Jason Dayan, member of the committee for the second time. Works in a traditional core area of materials engineering, often as a collaborator with Smith. Fairly significant funding."
            }, {
                "committee_id": 3,
                "name": "Karen Kulver",
                "image": "../../../assets/KK.png",
                "description": "Karen Kulver, member of the committee for the third time. Works in another area of materials that allows some collaboration with chemistry faculty. Significant funding."
            }]
    },
    {
        "candidate_id": 2,
        "name": "Arthur Stevens",
        "short_desc": "Ph.D. Mechanical Engineering",
        "image": "../../../assets/AS.png",
        "career_account": [
            "Arthur Stevens, Associate Professor in Mechanical Engineering working in the area of automatic control systems, came up for promotion to full professor after five years in grade. He published 35 articles during his 10 years at the university; 17 of these articles appeared in conference proceedings. One of his articles won a best paper award within an ASME session devoted to novel advances in control of smart structures. Stevens was almost always listed as last author of his collaborative publications, except for two papers listing him as first author. His collaborators were almost all graduate students. He never published an article, book, or conference proceeding as the sole author. He applied for one provisional patent in his sixth year, but did not pursue the full patent agreement when it came to term.",
            "Regarded as a capable, confident teacher who offered a range of required and elective courses needed by the unit, Stevens’ teaching averages on his student evaluations ranged from 3.8 to 4.2 in undergraduate courses and from 4.3 to 4.5 in graduate courses (on a five-point scale). A number of undergraduates remark on evaluations ranging over recent years that Stevens is “very accessible” and an “interesting lecturer” who provides “wonderful illustrations and graphics” to get across his points. Although he has been nominated for his school’s teaching award, he has never received it. He carries the load in teaching courses in his area. Graduate students in his research group attest to his willingness to advise them regarding career prospects in academe and industry. Some students express amazement at his accessibility compared with other faculty.",
            "Stevens managed to support his research group with a steady funding level of $200,000 per annum average, slightly below department norms. He was a good citizen, serving diligently and effectively on several different school-level committees. As a good deal of his research has commercial application, much of his funding has come from industrial sources.",
            "Stevens never served on university-level committees, nor did he take leadership roles in scholarly and professional organizations, although his collaborative articles have established his international research reputation in the field; two of the five articles submitted with his promotion dossier were termed “breakthrough” and “now classic” by two external reviewers. One committee member comments that it is her understanding that his field is fairly specialized and small, so it is possible that the reviewers are too familiar with the candidate; she points out that both glowing reviews come from faculty who shared the same graduate institution as Stevens.",
            "Some members of the school-level promotion and tenure committee endorse promoting Stevens to full professor because he is a good citizen and a \"good guy.\" They argue that if he does not get promoted, it might upset him and there is no point of that. Others question whether his publication record is adequate for such a promotion. One member is concerned that 17 journal articles in ten years \"is not competitive,\" as many current applicants who have done post docs already have 5-10. Another member is concerned that only half of Stevens' papers are from refereed journal articles, while yet another member argues that as the last author, Stevens had little technical input into these papers. As a member of the committee, how would you respond to these concerns and ensure that Stevens receives a fair evaluation?"
        ],
        "dossier": {
            "educational_background": [
                "B.S. Biology, SUNY-Buffalo",
                "Ph.D. Biochemistry, University of Wisconsin-Madison",
                "Post Doc, Biosciences Institute, Oxford University"
            ],
            "publications": [
                "Refereed: 24 articles, 12 in past two years (with students), 6 from post doc experience, 3 from Ph.D. work (co-authored with R. Pilens)",
                "Conference Proceedings: 14, 7 in the past two years",
                "Presentations: 12 seminars, 8 at other universities"
            ],
            "conference_proceedings": [],
            "presentations": [],
            "research": [
                "Mansour's doctoral advisor, Dr. Ross Pikens, is a leading expert in the measurement of electrochemical response of various cells to external stimula such as mechanical force, imposition of electrical and magnetic fields, and effects of rapid temperature change. Mansour has continued this research in a broad sense, having focused on effects of cryogenic preservation of tissue during her post doc, subsequently delving into development of in situ measurement systems for measuring cell responses under a wide range of stimuli."
            ],
            "funding": {
                "funding_resources": [
                    "Start-up package was used to develop experimental apparatus and acquire supporting computer control and data acquisition. Obtained multi-year NSF grant for $220k. In second year, was awarded a university Novel Directions investigator grant of $100l in third year, and was awarded a five-year, $500k young investigator grant from NIH in fourth year."
                ],
                "extra_funding": ""
            },
            "graduate_student_advisement": {
                "opening_line": "",
                "advisement": [
                    "2 post doctoral researchers",
                    "3 Ph.D. students in-progress, 1 Ph.D. graduated (recipient of the university's Chapter of Sigma XI Best Ph.D. Thesis Award)"
                ]
            },
            "teaching": [
                "Has taught BIO 272 and BICHEM 338, an indtroductory biological systems course and a mid-level cell biology course, respectively..",
                "Has taught BIOCHEM 720, graduate course in mechanics and physiology of cells",
                "Mixed response from students, many cite her degree of organization as exemplary; others point to difficulty in understanding her lectures (speaking at too high a level); several students complain that she seems unaccustomed to American styles and fashion, and that her manner is frustrating in combination with difficulty to comprehend her lectures"
            ],
            "service": [
                "Chair, Cell Behavior sub-committee, Division of Biochemistry, American Chemists Society",
                "Organizer of sessions at two major international symposia",
                "Member, College of Sciences Committee on Faculty Development",
                "Member, University Committee on Women in Academia: Future Directions",
                "Member, University Committee on Understanding Family Issues"
            ],
            "honors_and_awards": [
                "B.F. Sloan Prize for one of five best papers in a given year, Journal of Chemistry and Biochemistry, Mansour, S.R. and C.K. Wyler Affecting Cellular Electrochemical Communication by Mechanical Stimuli",
                "Voted Best Organized Instructor by School of Biochemistry seniors, annual honors assembly and dinner."
            ]
        },
        "committee_members": [{
                "committee_id": 1,
                "name": "Kathryn Sloan",
                "image": "../../../assets/KS.png",
                "description": "chair of RPT: endowed chair, on committee many times, denied early tenure, but fair-minded about concept of early tenure"
            }, {
                "committee_id": 2,
                "name": "Joe Wynn",
                "image": "../../../assets/JW.png",
                "description": "member with some experience on RPT, ill-disposed toward star system"
            }, {
                "committee_id": 3,
                "name": "Mohammed Shaban",
                "image": "../../../assets/MS.png",
                "description": "newly tenured, first time on RPT, protects/upholds procedures, not tenured early"
            }]
    },
    {
        "candidate_id": 3,
        "name": "Helen Clemens",
        "short_desc": "Ph.D. in Mathematics",
        "image": "../../../assets/HC.png",
        "career_account": [
            "Helen Clemens, Ph.D. in Mathematics from New York University, joined a prestigious research university as an assistant professor of mathematics, specializing in differential equations related to self-organizational phenomena and chaos. She was hired the same year and in the same department as her husband Joseph Smith, an up-and-coming star in set theory and fractals who was hired after working three years as an assistant professor at Yale University.",
            "Clemens quickly established a reputation as an excellent teacher of mathematics majors. Her husband collaborated on two of these; one with him noted as primary author, and the other with Clemens noted as primary author. She also became known as an accessible graduate advisor who took great care in mentoring her students’ professional development.",
            "Clemens was invited to give many international presentations in her area and to become a member of a significant number of conference program committees. She was also a frequent speaker at meetings of physicists interested in application of her mathematical tools to physical systems. Some of her university colleagues in other research areas suggested that her frequent invitations to participate in workshops and panel discussions reflected diversity needs rather than acknowledging her intellectual acumen. Others claimed she rode on the coattails of her husband, her sometimes collaborator. While Clemens’ international experiences were prestigious, they often required her to travel to Europe for meetings. She was consequently less accessible to colleagues than most peers. Most of her time on campus was spent teaching courses, advising students, or serving on institute-level committees.",
            "By the time of her third year critical review, she published only five articles, albeit in important journals. Her husband collaborated on two of these; on one, Clemens was first author, and on the other he was first author. Their achievements were the subject of an article in The Chronicle of Higher Education about successful couples in the sciences. Clemens and Smith were also profiled in national newspaper articles focusing on emerging connections between biology and mathematics. Smith had established strong interactions with the biology department in applying concepts of fractals to complex hierarchical cell structures. The committee considering her third year critical review recommended warning her to accelerate publication. Her chair advises Clemens to \"concentrate more on publishing and less on publicizing.\"",
            "In her next two years, Clemens worked hard to publish in significant refereed journals, producing four papers (one in tandem with her husband) and three articles in conference proceedings. In addition, she was listed as co-PI on one of his grants.",
            "In coming up for promotion and tenure, Clemens was considered an excellent teacher by undergraduates and graduate students and an excellent mentor of women students. Her publication record was a bit below average, but her citation rate was higher than average, and she was well known in Europe, for example. Letters from reviewers, two of them prominent European mathematicians, characterized her individual work as \"very good,\" \"substantial,\" and \"first-rate.\" Articles written collaboratively with her husband were cited as \"highly influential\" and \"amazing.\" There were no negative reviews.",
            "Questions arise in the unit-level promotion and tenure committee regarding whether Clemens' record of individual productivity meets the minimum standard and whether her productivity and the impact of her work depend on her husband. One member wonders if Smith (already tenured and promoted) will leave if Clemens does not get tenure. As a member of the committee, how would you respond to these concerns?"
        ],
        "dossier": {
            "educational_background": [
                "B.S. Electrical Engineering, University of Illinois",
                "M.S. Electrical Engineering, Stanford University",
                "Ph.D. Computer Science, University of Washington"
            ],
            "publications": [
                "Refereed: 9 articles, 3 in past two years (with students), 6 from first two years, with none submitted during third year",
                "Conference Proceedings: 22,7 in past two years, 15 in first two years",
                "Presentations: 3 seminars, 2 at other universities"
            ],
            "conference_proceedings": [],
            "presentations": [],
            "research": [
                "Sen's work is in the areas of the interface of digital switching theory for high speed circuits and digital signal processing with application to vision systems and automatic target recognition. Her funding comes from DoD sources, and her work, combined elements of computational algorithms with hardware capabilities."
            ],
            "funding": {
                "funding_resources": [],
                "extra_funding": "No funding in year one, obtained $350k, three year grant from ARO in second year, has submitted three proposals for funding in the past 18 months to DoD agencies and industry, since her leave of absence"
            },
            "graduate_student_advisement": {
                "opening_line": "2 Ph.D. students in-progress, 2 M.S. students graduated, 5 M.S. students in progress",
                "advisement": []
            },
            "teaching": [
                "has taught undergraduate introductory course in computing for engineers, and undergraduate and graduate digital signal processing courses"
            ],
            "service": ["member, EE Computer Committee", "Member, EE Undergraduate Committee"],
            "honors_and_awards": ["Rhodes Scholar, Oxford University"]
        },
        "committee_members": [{
                "committee_id": 1,
                "name": "George Green",
                "image": "../../../assets/GG.png",
                "description": "experienced member, RPT, committee chair for first time"
            },
            {
                "committee_id": 2,
                "name": "Caroline Wong",
                "image": "../../../assets/CW.png",
                "description": "faculty star an RPT committee member for the first time"
            },
            {
                "committee_id": 3,
                "name": "Susan Tomel",
                "image": "../../../assets/susan-tomei.png",
                "description": "moderately experienced member of RPT"
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/nyc/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-page {\n  font-size: 16px;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.main-page .header {\n  font-size: 20px;\n  font-weight: 700;\n  margin-top: 20px;\n}\n\n.main-page .candidate-name {\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 15px;\n  margin-bottom: 6px;\n}\n\n.main-page .candidate-short-desc {\n  font-size: 12px;\n  margin-top: 3px;\n}\n\n.right-panel {\n  max-width: 889px;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n.activity-instruction {\n  font-size: 16px;\n}\n\n.choose-candidate-card {\n  margin-top: 12px;\n  background-color: #F5F5F5;\n  border-style: solid;\n  border-width: 13px;\n  border-color: white;\n}\n\n.candidate-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.candidate-card:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.other-panelists {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.other-panelists:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.selected {\n  box-shadow: 0 0 10px #EFB211;\n}\n\n.choose-candidates {\n  margin-top: -15px;\n}\n\n.candidate-img {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 80px;\n  width: 80px;\n}\n\n.details-case {\n  background-color: #F5F5F5;\n  margin-top: -30px;\n  margin-bottom: 30px;\n\n}\n\n.view-details-left {\n  background-color: white;\n  font-size: 8px;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.view-details {\n  background-color: white;\n  margin-top: 18px;\n  margin-bottom: 18px;\n  font-size: 12px;\n  margin-left: 48px;\n  padding-left: 0px;\n  padding-right: 0px;\n  transition: all 200ms ease-out;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.view-details:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.button-blue {\n  color: white;\n  font-size: 16px;\n  background-color: #0D3055;\n  margin-top: 10px;\n  text-align: center;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.50), 0 2px 2px 0 rgba(0, 0, 0, 0.5);\n}\n\n.truncate {\n  padding-left: 25px;\n  padding-right: 25px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 18px;\n  margin-top: 18px;\n}\n\n.logo {\n  display: block;\n  margin: auto;\n}\n\n.left-panel {\n  box-shadow: 0 4px 8px 0 rgba(164, 164, 164, 0.51), 0 6px 20px 0 rgba(164, 164, 164, 0.5);\n  padding-top: 20px;\n  position: relative;\n}\n\n.back-to-main-page {\n  width: 100%;\n  font-size: 16px;\n  font-weight: 400;\n  border-width: 1px;\n  border-color: black;\n  background-color: white;\n  border-radius: 0;\n\n}\n\n.back-to-main-page:hover {\n  cursor: pointer;\n\n}\n\n.read-about-fellows {\n  margin-left: 15px;\n}\n\n.panelist-name {\n  margin-top: 34px;\n  font-size: 16px;\n  font-weight: 700;\n  margin-left: 10px;\n}\n\n.other-panelists {\n  background-color: white;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.play-game {\n  margin-top: 10px;\n  font-weight: 700;\n  background-color: #0D3055;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  border-radius: 5px;\n  height: 34px; /* Safari */\n  transition-duration: 0.4s;\n  float: right;\n  margin-bottom: 10px;\n}\n\n.play-game:hover {\n  background-color: #EFB211; /* Green */\n  color: white;\n  cursor: pointer;\n}\n\n.shadow {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.left-panel-container {\n  width: 100%;\n  height: 100%;\n}\n\n.exit-activity-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.exit-activity-container {\n  color: black;\n  text-align: center;\n}\n\n.left-panel-child {\n  margin-left: 30px;\n  margin-right: 20px;\n}\n\n.cv-heading-text {\n  color: white;\n  font-size: 16px;\n  margin-left: 10px;\n}\n\n.cv-heading {\n  background-color: #0D3055;\n}\n\n.cv-snippet {\n  margin-top: 18px;\n}\n\n.case-study-heading {\n  background-color: #EFB211;\n}\n\n.case-study-heading-text {\n  color: white;\n  font-size: 16px;\n  text-align: center;\n  margin-left: 10px;\n}\n\n.committee-member-snippet {\n  margin-right: 0px;\n}\n\n.parameters {\n  background-color: #F5F5F5;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nyc/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\">\n  <div class=\"row left-panel-container\">\n    <div class=\"col-md-3 left-panel\">\n      <div class=\"left-panel-child\">\n        <img src=\"../../../assets/nyc-logo.png\" class=\"logo\">\n        <hr class=\"hr-style\">\n\n\n        <button class=\"back-to-main-page\" (click)=\"goBack()\">\n          <span class=\"exit-activity-container\"><img src=\"./../../../assets/left-arrow.svg\"\n                                                     class=\"exit-activity-icon\"> &nbsp;EXIT ACTIVITY</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"right-panel\">\n        <div class=\"activity-instruction\">Play this game as a mentor advising a colleague about how to advance\n          professionally and maintain a healthy life-work balance. Read the colleague’s case before playing the game.\n          After choosing an option, you can read a comment about various choices. Your choices accrue points related to\n          areas of career advancement and personal satisfaction: Research, Teaching, Service, Health, and Allies.\n        </div>\n\n\n        <div class=\"header\">Progress Measuring Parameters</div>\n\n        <div class=\"parameters\">\n          <b>Research: </b> scholarship, creativity, funding, impact, reputation\n          <br>\n          <b>Teaching: </b> student responses, curricular development, pedagogical innovations\n          <br>\n          <b>Service: </b> to unit, college, institute; to local, national, and international organizations\n          <br>\n          <b>Allies: </b> relationships with colleagues, disciplinary peers, peers in other fields\n          <br>\n          <b>Health: </b> physical, mental, and emotional wellness, including stress\n          <br>\n        </div>\n\n        <div class=\"header\">Choose a candidate</div>\n        <div class=\"row choose-candidates\">\n          <!--class.selected will be added when we select one of the cards-->\n\n          <div class=\"col-md-4 col-lg-4 choose-candidate-card\"\n               *ngFor=\"let candidate of candidates\"\n               (click)=\"onSelect(candidate)\">\n            <div class=\"row candidate-card\" [class.selected]=\"candidate===selectedCandidate\">\n              <div class=\"col-md-4\">\n                <img class=\"candidate-img\" [src]=candidate.image alt=\"{{candidate.name}} image\">\n              </div>\n              <div class=\"col-md-8\">\n                <div class=\"candidate-name\">{{candidate.name}}</div>\n                <div class=\"candidate-short-desc\">{{candidate.short_desc}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"header\">Details of case</div>\n        <br>\n        <div class=\"details-case\">\n          <div class=\"row\">\n            <div *ngIf=\"selectedCandidate!=null\" class=\"col-md-5 col-lg-5 view-details\" (click)=\"openCasestudyDialog()\">\n              <div class=\"\">\n                <div class=\"button case-study-heading\">\n                  <span class=\"case-study-heading-text\">View Case Study</span>\n                </div>\n                <div class=\"truncate\">\n                  {{selectedCandidate.career_account[0]}}\n                </div>\n                <div style=\"float:right;padding-bottom: 10px; padding-right:10px;font-size: 13px;\"\n                     (click)=\"openCasestudyDialog()\"><u>Read More..</u></div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <button class=\"play-game\" (click)=\"goToNextPage()\">Play Game</button>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nyc/main-page/nyc-main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NYCMainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nyc_main_page_service__ = __webpack_require__("../../../../../src/app/nyc/main-page/nyc-main-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulated_meeting_panelist_dialog_panelist_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/panelist-dialog/panelist-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simulated_meeting_cv_dialog_cv_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/cv-dialog/cv-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__simulated_meeting_casestudy_dialog_casestudy_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/casestudy-dialog/casestudy-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NYCMainPageComponent = (function () {
    function NYCMainPageComponent(service, router, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.router = router;
    }
    NYCMainPageComponent.prototype.getCandidates = function () {
        var _this = this;
        this.service.getCandidates().then(function (candidates) {
            _this.candidates = candidates;
            _this.selectedCandidate = _this.candidates[0];
        });
    };
    NYCMainPageComponent.prototype.ngOnInit = function () {
        this.getCandidates();
    };
    NYCMainPageComponent.prototype.openCvDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__simulated_meeting_cv_dialog_cv_dialog_component__["a" /* CvDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.selectedCandidate = this.selectedCandidate;
    };
    NYCMainPageComponent.prototype.openCasestudyDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__simulated_meeting_casestudy_dialog_casestudy_dialog_component__["a" /* CaseStudyDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.selectedCandidate = this.selectedCandidate;
    };
    NYCMainPageComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__simulated_meeting_panelist_dialog_panelist_dialog_component__["a" /* PanelistDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.committee_members = this.selectedCandidate.committee_members;
    };
    NYCMainPageComponent.prototype.setCommitteeMember = function (committeeMember) {
        this.selectedCommitteeMember = committeeMember - 1;
        this.openDialog();
    };
    NYCMainPageComponent.prototype.onSelect = function (candidate) {
        this.selectedCandidate = candidate;
        this.selectedCommitteeMember = null;
    };
    NYCMainPageComponent.prototype.goToNextPage = function () {
        this.router.navigate(['/nyc', this.selectedCandidate.candidate_id]);
    };
    NYCMainPageComponent.prototype.goBack = function () {
        this.router.navigate(['/activity']);
    };
    NYCMainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'main-page-nyc',
            template: __webpack_require__("../../../../../src/app/nyc/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nyc/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__nyc_main_page_service__["a" /* NYCMainPageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatDialog */]])
    ], NYCMainPageComponent);
    return NYCMainPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nyc/main-page/nyc-main-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NYCMainPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__candidates__ = __webpack_require__("../../../../../src/app/nyc/main-page/candidates.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NYCMainPageService = (function () {
    function NYCMainPageService() {
    }
    NYCMainPageService.prototype.getCandidates = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__candidates__["a" /* CANDIDATES */]);
    };
    NYCMainPageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], NYCMainPageService);
    return NYCMainPageService;
}());



/***/ }),

/***/ "../../../../../src/app/simulated-meeting/casestudy-dialog/casestudy-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title style=\"display: inline\">{{selectedCandidate.name}} : Case Study</h2>\n  <img class=\"close\" (click)=\"onNoClick()\" src=\"../../../assets/multiply.png\">\n</div>\n<hr>\n<mat-dialog-content>\n  <div>\n    <div *ngFor=\"let casestudy of selectedCandidate.career_account\">\n      <br>\n      {{casestudy}}\n    </div>\n    <br>\n  </div>\n\n</mat-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/simulated-meeting/casestudy-dialog/casestudy-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseStudyDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/**
 * Created by imittal on 11/24/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CaseStudyDialogComponent = (function () {
    function CaseStudyDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CaseStudyDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CaseStudyDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'casestudy-dialog',
            template: __webpack_require__("../../../../../src/app/simulated-meeting/casestudy-dialog/casestudy-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], CaseStudyDialogComponent);
    return CaseStudyDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/simulated-meeting/cv-dialog/cv-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title style=\"display: inline\">{{selectedCandidate.name}} : CV</h2>\n  <img class=\"close\" (click)=\"onNoClick()\" src=\"../../../assets/multiply.png\">\n</div>\n<hr>\n<mat-dialog-content>\n  <div>\n    <b>Educational Background</b>\n    <br>\n\n    <div *ngFor=\"let education of selectedCandidate.dossier.educational_background\">\n      <li>{{education}}</li>\n    </div>\n    <br>\n  </div>\n\n  <div>\n    <b>Publications</b>\n    <br>\n    <div *ngFor=\"let publication of selectedCandidate.dossier.publications\">\n      <li>{{publication}}</li>\n    </div>\n    <br>\n  </div>\n\n  <div *ngIf=\"selectedCandidate.dossier.conference_proceedings[0]!=null\">\n    <b>Conference Proceedings</b>\n    <br>\n    <div *ngFor=\"let conference of selectedCandidate.dossier.conference_proceedings\">\n      <li>{{conference}}</li>\n    </div>\n    <br>\n  </div>\n\n  <div *ngIf=\"selectedCandidate.dossier.presentations[0]!=null\">\n    <b>Presentations</b>\n    <br>\n    <div *ngFor=\"let presentation of selectedCandidate.dossier.presentations\">\n      <li>{{presentation}}</li>\n    </div>\n    <br>\n  </div>\n\n  <div>\n    <b>Research</b>\n    <br>\n    <div *ngFor=\"let research of selectedCandidate.dossier.research\">\n      <li>{{research}}</li>\n    </div>\n  </div>\n  <br>\n  <div>\n    <b>Funding</b>\n    <br>\n    <div *ngFor=\"let funding of selectedCandidate.dossier.funding.funding_resources\">\n      <li>{{funding}}</li>\n    </div>\n    <div>\n      {{selectedCandidate.dossier.funding.extra_funding}}\n    </div>\n  </div>\n  <br>\n  <div>\n    <b>Graduate Student Advisement</b>\n    <br>\n    <div>\n      {{selectedCandidate.dossier.graduate_student_advisement.opening_line}}\n    </div>\n    <div *ngFor=\"let student of selectedCandidate.dossier.graduate_student_advisement.advisement\">\n      <li>{{student}}</li>\n    </div>\n  </div>\n  <br>\n  <div>\n    <b>Teaching</b>\n    <br>\n    <div *ngFor=\"let teaching of selectedCandidate.dossier.teaching\">\n      <li>{{teaching}}</li>\n    </div>\n  </div>\n  <br>\n  <div>\n    <b>Service</b>\n    <br>\n    <div *ngFor=\"let service of selectedCandidate.dossier.service\">\n      <li>{{service}}</li>\n    </div>\n  </div>\n  <br>\n  <div>\n    <b>Honors & Awards</b>\n    <br>\n    <div *ngFor=\"let award of selectedCandidate.dossier.honors_and_awards\">\n      <li>{{award}}</li>\n    </div>\n  </div>\n  <br>\n</mat-dialog-content>\n"

/***/ }),

/***/ "../../../../../src/app/simulated-meeting/cv-dialog/cv-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/**
 * Created by imittal on 11/24/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CvDialogComponent = (function () {
    function CvDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CvDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CvDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'cv-dialog',
            template: __webpack_require__("../../../../../src/app/simulated-meeting/cv-dialog/cv-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], CvDialogComponent);
    return CvDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/simulated-meeting/game/sm-dialogues.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMDIALOGUES; });
var SMDIALOGUES = [
    {
        "name": "Jamie Perez",
        "id": 1,
        "conversation": [
            {
                "statementKey": "A1",
                "speaker": 1,
                "next": "A2",
                "mood-phrase": "said",
                "mood": "talk",
                "statement": [{
                        "id": 1,
                        "statementKey": "A1",
                        "speaker": 1,
                        "next": "A2",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "Let's start with Perez. Remember, what we say is confidential.",
                        "reference": [{
                                "url": "",
                                "desc": "Depending on the context and relationship of individuals involved, the word \"confidential\" could strike an intimidating tone."
                            }, {
                                "url": "http://www.apsanet.org/pubs/ethics.cfm",
                                "desc": "American Political Science Association (APSA) website (3.2) indicates that departments should choose fair-minded reviewers."
                            }
                        ]
                    }
                ]
            },
            {
                "statementKey": "A2",
                "speaker": 3,
                "next": "A3",
                "mood-phrase": "said",
                "mood": "talk",
                "statement": [{
                        "id": 2,
                        "statementKey": "A2",
                        "speaker": 3,
                        "next": "A3",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "This will be an interesting case.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }
                        ]
                    }
                ]
            },
            {
                "statementKey": "A3",
                "speaker": 2,
                "next": "B1",
                "mood-phrase": "said",
                "mood": "talk",
                "statement": [{
                        "id": 3,
                        "statementKey": "A3",
                        "speaker": 2,
                        "next": "B1",
                        "image": "../../../assets/perez/perez_panel_2.png",
                        "speaker_image": "../../../assets/JD.png",
                        "text": "Let's just go through this and see.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }
                        ]
                    }
                ]
            },
            {
                "statementKey": "B1",
                "speaker": 1,
                "next": "B2",
                "mood-phrase": "said",
                "mood": "talk",
                "statement": [{
                        "id": 4, "statementKey": "B1",
                        "speaker": 1,
                        "next": "B2",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "Let's start with scholarship. All his current grants are interdisciplinary.",
                        "reference": [{
                                "url": "",
                                "desc": "Perceptions of interdisciplinary and multidisciplinary work vary."
                            }, {
                                "url": "http:\\www.gatech.edu",
                                "desc": "The GATech faculty handbook (3.3.7) indicates creative work must be appropriate to the individual's discipline."
                            }, {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "The PTAC report (I.8) considers evaluation of research teaming and interdisciplinary collaboration."
                            }
                        ]
                    }
                ]
            },
            {
                "statementKey": "B2",
                "speaker": 2,
                "next": "B3",
                "mood-phrase": "said",
                "mood": "talk",
                "statement": [{
                        "id": 5, "statementKey": "B2",
                        "speaker": 2,
                        "next": "B3",
                        "image": "../../../assets/perez/perez_panel_2.png",
                        "speaker_image": "../../../assets/JD.png",
                        "text": "My main concern about the grants is that he's spending most of the time in chemistry.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }
                        ]
                    }
                ]
            },
            {
                "statementKey": "B3",
                "speaker": 1,
                "next": "B4",
                "mood-phrase": "said",
                "mood": "talk",
                "statement": [{
                        "id": 6, "statementKey": "B3",
                        "speaker": 1,
                        "next": "B4",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "Perez hasn't a clue about our primary thrusts in materials. He's riding the coattails of chemistry with interdisciplinary NSF funding, which isn't hard to get, and he isn't project director on any grants on the c.v.",
                        "reference": [{
                                "url": "",
                                "desc": "Perceptions of responsibility for success are affected by perceptions of past success."
                            },
                            {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Singer's account testifies to the significance of subjective, unspecified grounds."
                            },
                            {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "See PTAC report (I.8) on interdisciplinarity."
                            },
                            {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Merton outlines \"the Matthew effect,\" whereby the accrual of greater recognition to scientific contributions goes to those with already considerable reputations."
                            }
                        ]
                    }
                ]
            },
            {
                "statementKey": "B4",
                "speaker": 3,
                "next": "B5",
                "mood-phrase": "said emphatically",
                "mood": "emphatic",
                "statement": [{
                        "id": 7, "statementKey": "B4",
                        "speaker": 3,
                        "next": "B5",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "Don't discount big grants because they are interdisciplinary. He's published in highly respected journals and has six graduate students, including four PhD students. There's technical 'meat' in his work.",
                        "reference": [{
                                "url": "",
                                "desc": "Rankings of journals (determined by researchers in field) and unit expectations of external funding ought to be communicated to candidates and committee members."
                            },
                            {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "The PTAC report (I.9) considers issues related to criteria in scholarship, including clarity, familiarity with publication venues, judgment across disciplines, uniformity and consistency of standards."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B5",
                "speaker": 1,
                "next": "B6",
                "mood-phrase": "said emphatically",
                "mood": "emphatic",
                "statement": [{
                        "id": 8, "statementKey": "B5",
                        "speaker": 1,
                        "next": "B6",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "He has raised funding, but not for our unit. This is important now because we're coming up for outside evaluation, and we need faculty to bring major funding to us.",
                        "reference": [{
                                "url": "",
                                "desc": "Organizational standards might not be clearly communicated to candidates."
                            },
                            {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Fox links organizational environment to productivity and performance."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B6",
                "speaker": 0,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [
                    {
                        "id": 9,
                        "statementKey": "B6a",
                        "speaker": 0,
                        "next": "B7a",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "He's been told several times to get grants in core areas. I see too little substance in materials science-oriented research.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 9,
                        "statementKey": "B6b",
                        "speaker": 0,
                        "next": "B7b",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "I choose to remain silent at this point in the conversation.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 9,
                        "statementKey": "B6c",
                        "speaker": 0,
                        "next": "B7c",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Forming bridges to other disciplines is as important as bringing money in. The number of interdisciplinary grants confirms the value of his research.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 9,
                        "statementKey": "B6d",
                        "speaker": 0,
                        "next": "B7d1",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Are we discussing scholarship or funding?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B7a",
                "speaker": 1,
                "next": "B7a2",
                "mood-phrase": "",
                "mood": "miffed",
                "statement": [{
                        "id": 10, "statementKey": "B7a",
                        "speaker": 1,
                        "next": "B7a2",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "He's publishing in chemistry journals more than engineering journals. " +
                            "I am the leading researcher in the same area of engineering he was in as a grad " +
                            "student and post doc. But I won't collaborate with him now.",
                        "reference": [{
                                "url": "",
                                "desc": "Credit and rewards for participating in interdisciplinary teams are not always well established."
                            },
                            {
                                "url": "", "desc": "Russo describes the pitfalls of large interdisciplinary projects."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B7a2",
                "speaker": 2,
                "next": "B7a3",
                "mood-phrase": ", smirking, said",
                "mood": "smirk",
                "statement": [{
                        "id": 11, "statementKey": "B7a2",
                        "speaker": 2,
                        "next": "B7a3",
                        "image": "../../../assets/perez/perez_panel_2.png",
                        "speaker_image": "../../../assets/JD.png",
                        "text": "Our school chair agrees that Perez should collaborate with us instead of chemistry faculty. Should we advise him to join chemistry?",
                        "reference": [{
                                "url": "",
                                "desc": "Evaluation committees ought to conduct deliberations in a professional, equitable manner."
                            }, {
                                "url": "http:\\www.advance.gatech.edu",
                                "desc": "The PTAC report (IV.7.B) states that unconfirmed information ought to be discounted as rumor."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B7a3",
                "speaker": 1,
                "next": "C1",
                "mood-phrase": ", self-satisfied, said",
                "mood": "self-satisfied",
                "statement": [{
                        "id": 12, "statementKey": "B7a3",
                        "speaker": 1,
                        "next": "C1",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "We should write this up to convey substandard research performance.",
                        "reference": [{
                                "url": "",
                                "desc": "Criteria for decision should be based on clearly communicated standards."
                            },
                            {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Lattica offers suggestions for individuals concerned with evaluation of interdisciplinary scholarship."
                            }]
                    }]
            },
            {
                "statementKey": "B7b",
                "speaker": 1,
                "next": "C1",
                "mood-phrase": "asserted",
                "mood": "assertively",
                "statement": [{
                        "id": 13, "statementKey": "B7b",
                        "speaker": 1,
                        "next": "C1",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "He's in a niche area that might be attractive now, but a lot of us in materials don't care about it. " +
                            "Our letter should say his record is not persuasive regarding his long-term funding potential. Agreed?",
                        "reference": [{
                                "url": "",
                                "desc": "Candidates should understand that interdisciplinary scholarship is not always highly regarded by colleagues."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Bahls and Schachter consider how interdisciplinary research has recently become more prominent."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B7c",
                "speaker": 2,
                "next": "C1",
                "mood-phrase": "thoughtfully said",
                "mood": "thoughtfully",
                "statement": [{
                        "id": 14, "statementKey": "B7c",
                        "speaker": 2,
                        "next": "C1",
                        "image": "../../../assets/perez/perez_panel_2.png",
                        "speaker_image": "../../../assets/JD.png",
                        "text": "I did notice new requests for proposals at NSF and DoD agencies that emphasize " +
                            "interdisciplinary connections; I have been thinking about this myself.",
                        "reference": [{
                                "url": "",
                                "desc": "Funding agencies and institutions are adapting to interdisciplinary paradigms of research."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Brainard describes Arizona State University's efforts to accommodate interdisciplinary research in science."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B7d1",
                "speaker": 1,
                "next": "B7d2",
                "mood-phrase": ", perplexed, said",
                "mood": "perplexed",
                "statement": [{
                        "id": 15, "statementKey": "B7d1",
                        "speaker": 1,
                        "next": "B7d2",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "It's just hard for me to see how to decouple scholarship and funding, " +
                            "how can you be a scholar in materials engineering without funding?",
                        "reference": [{
                                "url": "",
                                "desc": "Measures of productivity regarding funding and publication ought to be communicated to all candidates in written guidelines and careful mentoring."
                            }, {
                                "url": "http:\\www.gatech.edu",
                                "desc": "The GATech faculty handbook (3.2.3) mandates review of \"all dimensions of performance\". . . \"teaching, creativity, and service.\""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B7d2",
                "speaker": 3,
                "next": "C1",
                "mood-phrase": "enthusiastically said",
                "mood": "enthusiastic",
                "statement": [{
                        "id": 16, "statementKey": "B7d2",
                        "speaker": 3,
                        "next": "C1",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "Perez's NSF and industry funding are impressive." +
                            " External collaboration in a hot area is good, with more opportunities and new monies " +
                            "for materials engineering. He has incredible potential, and our letter should reward his effort.",
                        "reference": [{
                                "url": "",
                                "desc": "Interdisciplinary teaming can attract funding and provide momentum for funding proposals and publications."
                            }, {
                                "url": "", "desc": "Burnett characterizes how collaboration increases problem-solving."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C1",
                "speaker": 1,
                "next": "C2",
                "mood-phrase": "said",
                "mood": "talk",
                "statement": [{
                        "id": 17, "statementKey": "C1",
                        "speaker": 1,
                        "next": "C2",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png", "text": "Let's look at teaching now.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C2",
                "speaker": 3,
                "next": "C3",
                "mood-phrase": "said",
                "mood": "talk",
                "statement": [{
                        "id": 18, "statementKey": "C2",
                        "speaker": 3,
                        "next": "C3",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "His teaching evaluations are better than most assistant professors in the intro course. " +
                            "He team teaches a course on surface chemistry with other faculty, " +
                            "so it's hard to judge the quality of his instruction.",
                        "reference": [{
                                "url": "",
                                "desc": "Teaching scores are not always highly regarded by faculty evaluators."
                            },
                            {
                                "url": "http://www.advance.gatech.edu/ptac/SUMMARY%20OF%20PTAC%20SURVEY.htm",
                                "desc": "Linse describes female faculty concerns about evaluations. Respondents to the PTAC survey doubt effectiveness of certain teaching evaluation methods. See section III of PTAC report."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C3",
                "speaker": 2,
                "next": "C4",
                "mood-phrase": "said mockingly",
                "mood": "talk",
                "statement": [{
                        "id": 19, "statementKey": "C3",
                        "speaker": 2,
                        "next": "C4",
                        "image": "../../../assets/perez/perez_panel_2.png",
                        "speaker_image": "../../../assets/JD.png",
                        "text": "Did those intro students really learn? Does Perez have high numbers because he is amusing? " +
                            "I heard he shows unrelated clips from the web in class. Sometimes students mistake that for good teaching.",
                        "reference": [{
                                "url": "",
                                "desc": "Various studies on student evaluations report how stereotypes, expectations, student resistance to course content, and interactions affect scores."
                            }, {
                                "url": "",
                                "desc": "See \"Gender and Student Evaluations,\" an annotated bibliography developed at the University of Michigan, for studies on bias in teaching evaluations."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C4",
                "speaker": 1,
                "next": "C5",
                "mood-phrase": "said seriously",
                "mood": "serious",
                "statement": [{
                        "id": 20, "statementKey": "C4",
                        "speaker": 1,
                        "next": "C5",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "If he's concerned about teaching, he ought to use appropriate pedagogies. " +
                            "I don't see evidence of his ability to retain students in materials. " +
                            "As Jason says, what's really going on in the classroom?",
                        "reference": [{
                                "url": "",
                                "desc": "Committee members should calibrate their differing expectations of what qualifies as good teaching."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "See R. A. Arreola on developing a comprehensive faculty evaluation system."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C5",
                "speaker": 3,
                "next": "C6",
                "mood-phrase": "asked",
                "mood": "question",
                "statement": [{
                        "id": 21, "statementKey": "C5",
                        "speaker": 3,
                        "next": "C6",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "Well, are these teaching standards--retention of majors and appropriate pedagogies--that we will " +
                            "invoke for everyone?",
                        "reference": [{
                                "url": "",
                                "desc": "Standards ought to reflect institutional mission and be applied equitably."
                            }, {
                                "url": "www. advance.gatech.edu/ptac",
                                "desc": "The 2003 ADVANCE research survey reports faculty perceptions of significant factors for promotion and salary."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C6",
                "speaker": 1,
                "next": "C7",
                "mood-phrase": "exclaimed",
                "mood": "exclaim",
                "statement": [{
                        "id": 22, "statementKey": "C6",
                        "speaker": 1,
                        "next": "C7",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "We should. Look at Jones' case: now there's someone who lays out a terrific teaching portfolio. " +
                            "Why can't Perez get help so he can get results like Jones?",
                        "reference": [{
                                "url": "",
                                "desc": "Stereotypes affect perceptions of another's competence."
                            }, {
                                "url": "",
                                "desc": "Valian discusses perceptions of leadership, competence, and assertiveness."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C7",
                "speaker": 0,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [
                    {
                        "id": 23,
                        "statementKey": "C7a",
                        "speaker": 0,
                        "next": "C8a",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "But we shouldn't directly compare cases. Each case is unique and needs to be seen for its own merits, if we could just find some in Perez's.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 23,
                        "statementKey": "C7b",
                        "speaker": 0,
                        "next": "C8b",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Yes, Jones definitely deserves his teaching awards.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 23,
                        "statementKey": "C7c",
                        "speaker": 0,
                        "next": "C8c",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Al, you don't like that Perez argues for faculty team-teaching " +
                            "intro courses instead of solo teaching. Based on the summaries of senior exit " +
                            "interviews provided in the dossier, Perez appears to be a gifted teacher.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 23,
                        "statementKey": "C7d",
                        "speaker": 0,
                        "next": "C8d",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "We shouldn't directly compare cases because each has its own merits. " +
                            " Perez documents effective teaching by including exit interviews, " +
                            "evaluation scores, and student letters supporting an external teaching award. ",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C8a",
                "speaker": 1,
                "next": "D1",
                "mood-phrase": "said seriously",
                "mood": "serious",
                "statement": [{
                        "id": 24, "statementKey": "C8a",
                        "speaker": 1,
                        "next": "D1",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "I see three of us agree that Perez's teaching record is difficult to assess, and perhaps marginal.",
                        "reference": [{
                                "url": "",
                                "desc": "Instructors should receive feedback on their teaching records before coming up for promotion and tenure."
                            }, {
                                "url": "http:\\www.advance.gatech.edu",
                                "desc": "PTAC report (I.5) acknowledges the significance of mentoring, citing Stanley Fish's concerns with the problems and prospects of mentoring."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C8b",
                "speaker": 1,
                "next": "D1",
                "mood-phrase": "said emphatically",
                "mood": "emphatic",
                "statement": [{
                        "id": 25, "statementKey": "C8b",
                        "speaker": 1,
                        "next": "D1",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "Okay, so we'll give Jones great marks in the teaching department and barely pass Perez.",
                        "reference": [{
                                "url": "",
                                "desc": "Evaluators ought to resist the temptation to compare candidates' records by taking data out of context."
                            }, {
                                "url": "",
                                "desc": "Tierney acknowledges the need to develop appropriate rewards for teaching."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C8c",
                "speaker": 1,
                "next": "D1",
                "mood-phrase": ", somewhat annoyed, said",
                "mood": "annoyed",
                "statement": [{
                        "id": 26, "statementKey": "C8c",
                        "speaker": 1,
                        "next": "D1",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": " Team-teaching is too cumbersome to work in the intro course. " +
                            "But if you all agree that Perez deserves high marks for teaching, " +
                            "I'll go along with noting his high teaching evaluation scores.",
                        "reference": [{
                                "url": "",
                                "desc": "Evaluators ought to avoid injecting personal bias into deliberations."
                            }, {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "The PTAC report (IV.3) references the need to develop open and transparent evaluation processes."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C8d",
                "speaker": 1,
                "next": "D1",
                "mood-phrase": ", acquiescing, said",
                "mood": "acquiescing",
                "statement": [{
                        "id": 27, "statementKey": "C8d",
                        "speaker": 1,
                        "next": "D1",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "Okay, I guess that if we really look at the documentation provided and not bring our own bias regarding team teaching into play, Perez does a reasonable job of teaching",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D1",
                "speaker": 2,
                "next": "D2",
                "mood-phrase": ", smirking, said",
                "mood": "smirk",
                "statement": [{
                        "id": 28, "statementKey": "D1",
                        "speaker": 2,
                        "next": "D2",
                        "image": "../../../assets/perez/perez_panel_2.png",
                        "speaker_image": "../../../assets/JD.png",
                        "text": "I feel kind of silly bringing this up, but Perez seems to be adhering to that old adage " +
                            "'birds of a feather'-you know? Look at who's on his grant team: Lopez, Johnson, Rodriguez, Bahouali",
                        "reference": [{
                                "url": "",
                                "desc": "Institutional values/biases ought to be carefully characterized and criticized in the evaluation process.Institutional values/biases ought to be carefully characterized and criticized in the evaluation process."
                            },
                            {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Long and Fox report how particularism affects perceptions of success."
                            },
                            {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Fox and Ferri examine how men and women differently attribute success."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D2",
                "speaker": 1,
                "next": "D3",
                "mood-phrase": ", somewhat annoyed, said",
                "mood": "annoyed",
                "statement": [{
                        "id": 29, "statementKey": "D2",
                        "speaker": 1,
                        "next": "D3",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "I see that too. Perez wrote about minority engineering education. " +
                            "I don't see that he has tried to get funding along those lines.   " +
                            "But that's probably fine. You can't do that at the expense of first rate research.",
                        "reference": [{
                                "url": "",
                                "desc": "Evaluators should clarify the relative importance of funding and quantity and quality of publications."
                            }, {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "The PTAC report (I.2) references diversity in relation to recruitment, retention, and perceptions regarding faculty abilities and performance."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D3",
                "speaker": 2,
                "next": "D4",
                "mood-phrase": "exclaimed",
                "mood": "exclaim",
                "statement": [{
                        "id": 30, "statementKey": "D3",
                        "speaker": 2,
                        "next": "D4",
                        "image": "../../../assets/perez/perez_panel_2.png",
                        "speaker_image": "../../../assets/JD.png",
                        "text": "Yeah, research is based on merit. To get respect, you need to bring in money, attract student attention." +
                            " People should make technical contributions rather than write articles about lack of opportunities.",
                        "reference": [{
                                "url": "",
                                "desc": "Standards reflect cultural norms of engineering schools."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "\"Defining Culture\" identifies cultural norms observed in material culture and interactions in an engineering school."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D4",
                "speaker": 3,
                "next": "D5",
                "mood-phrase": "angrily said",
                "mood": "angry",
                "statement": [{
                        "id": 31, "statementKey": "D4",
                        "speaker": 3,
                        "next": "D5",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "I think there are some things being said here that are pushing the boundaries of appropriate conduct.",
                        "reference": [{
                                "url": "",
                                "desc": "Evaluators should focus on reviewing the candidate's dossier and avoid making political pronouncements that could be interpreted as character slurs."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Getman explains on pages 109-129 how peer review may falter."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D5",
                "speaker": 0,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [
                    {
                        "id": 32,
                        "statementKey": "D5a",
                        "speaker": 0,
                        "next": "D6a1",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "In my view, the education piece should be irrelevant to our judgment of his engineering scholarship because it is an opinion and not research.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 32,
                        "statementKey": "D5b",
                        "speaker": 0,
                        "next": "D6b1",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "I don't think anything is out of bounds in a P and T discussion, this is an entirely confidential matter.  What is said here stays inside these walls.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 32,
                        "statementKey": "D5c",
                        "speaker": 0,
                        "next": "D6c1",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "I agree with Karen that consideration of ethnicity or minority issues has no place in this discussion. " +
                            "We should thank him for caring about minority recruitment in engineering and excelling in everything he does.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 32,
                        "statementKey": "D5d",
                        "speaker": 0,
                        "next": "D6d1",
                        "image": "../../../assets/perez/perez_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Karen is right. The engineering education essay is relevant as it concerns an innovative curriculum for ABET. " +
                            " It appears in a reputable journal and provides some insight into the kind of balance in Perez's repertoire.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6a1",
                "speaker": 1,
                "next": "D6a2",
                "mood-phrase": "said confidently",
                "mood": "confident",
                "statement": [{
                        "id": 33, "statementKey": "D6a1",
                        "speaker": 1,
                        "next": "D6a2",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "So we are all agreed that Perez hasn't established the right kind of profile in research, teaching, or service for our department and our university?",
                        "reference": [{
                                "url": "",
                                "desc": "Senior faculty members should encourage other evaluators to express their own views rather than assuming agreement."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Nieva and Gutek consider bias toward white males in evaluation processes."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6a2",
                "speaker": 3,
                "next": "E1a",
                "mood-phrase": "said emphatically",
                "mood": "emphatic",
                "statement": [{
                        "id": 34, "statementKey": "D6a2",
                        "speaker": 3,
                        "next": "E1a",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "I disagree and ask that everyone review the scholarship and external letters of support before our next meeting.",
                        "reference": [{
                                "url": "",
                                "desc": "Integrity of evaluation process includes the solicitation and interpretation of external letters of recommendation/review.Integrity of evaluation process includes the solicitation and interpretation of external letters of recommendation/review."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Baron illustrates the value of external review letters for RPT committee members."
                            }, {
                                "url": "http://chronicle.com/prm/weekly/v48/i25/25b01401.htm",
                                "desc": "Letters often remain confidential and not open to review by the candidate, but practices vary."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6b1",
                "speaker": 1,
                "next": "D6b2",
                "mood-phrase": "said passively",
                "mood": "passive",
                "statement": [{
                        "id": 35, "statementKey": "D6b1",
                        "speaker": 1,
                        "next": "D6b2",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "Yes, being on the same page with our goals is an important element, " +
                            "and maybe he just doesn't fit with us in terms of research, teaching, or service.",
                        "reference": [{
                                "url": "",
                                "desc": "Yes, being on the same page with our goals is an important element, and maybe he just doesn't fit with us in terms of research, teaching, or service."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Allen claims social factors and environmental influences are ignored in evaluation processes."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6b2",
                "speaker": 3,
                "next": "E1a",
                "mood-phrase": "said emphatically",
                "mood": "emphatic",
                "statement": [{
                        "id": 36, "statementKey": "D6b2",
                        "speaker": 3,
                        "next": "E1a",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "We should take into account that our discipline is becoming more interdisciplinary and that " +
                            "Perez's work demonstrates that evolution.",
                        "reference": [{
                                "url": "",
                                "desc": "Evaluators should keep in mind disciplinary, institutional, and professional standards."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Tierney acknowledges the need to develop appropriate recognition of a range of scholarship."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6c1",
                "speaker": 1,
                "next": "D6c2",
                "mood-phrase": ", somewhat annoyed, said",
                "mood": "annoyed",
                "statement": [{
                        "id": 37, "statementKey": "D6c1",
                        "speaker": 1,
                        "next": "D6c2",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "All I'm saying is that stuff can't make up for other areas in which his contributions are lacking.",
                        "reference": [{
                                "url": "",
                                "desc": "Standards of achievement should be clear and not established by individual predilections."
                            }, {
                                "url": "http://www.adept.gatech.edu/library.htm",
                                "desc": "Fish considers subjective aspects of the promotion and tenure process."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6c2",
                "speaker": 3,
                "next": "E1b",
                "mood-phrase": "said confidently",
                "mood": "confident",
                "statement": [{
                        "id": 38, "statementKey": "D6c2",
                        "speaker": 3,
                        "next": "E1b",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "Some of us think that his contributions in research and teaching are fine and that" +
                            " his interest in minority education points to future contributions to departmental recruiting.",
                        "reference": [{
                                "url": "",
                                "desc": "Standards of achievement should be clear and not established by individual predilections."
                            }, {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6d1",
                "speaker": 1,
                "next": "D6d2",
                "mood-phrase": ", confused, said",
                "mood": "confused",
                "statement": [{
                        "id": 39, "statementKey": "D6d1",
                        "speaker": 1,
                        "next": "D6d2",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "I hadn't noticed it had anything to do with ABET.",
                        "reference": [{
                                "url": "",
                                "desc": "Evaluators should carefully read documents in dossier."
                            }, {
                                "url": "http://www.advance.gatech.edu/ptac",
                                "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6d2",
                "speaker": 2,
                "next": "E1c",
                "mood-phrase": ", smirking, said",
                "mood": "smirk",
                "statement": [{
                        "id": 40,
                        "statementKey": "D6d2",
                        "speaker": 2,
                        "next": "E1c",
                        "image": "../../../assets/perez/perez_panel_2.png",
                        "speaker_image": "../../../assets/JD.png",
                        "text": "The end of Perez's essay notes a connection to ABET, and the essay was praised by " +
                            "two external reviewers as a significant contribution to issues of underrepresentation.",
                        "reference": [{
                                "url": "",
                                "desc": "Educational scholarship can be evaluated as an element of teaching portfolio."
                            }, {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
                            }]
                    }
                ]
            },
            {
                "statementKey": "E1a",
                "speaker": 1,
                "next": "",
                "mood-phrase": "said arrogantly",
                "mood": "arrogant",
                "statement": [{
                        "id": 43,
                        "statementKey": "E1a",
                        "speaker": 1,
                        "next": "",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "Research is substandard.  Teaching is barely adequate. And there's no real service.",
                        "reference": [{
                                "url": "",
                                "desc": "Standards of achievement should be clear and not established by individual predilections."
                            }, {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
                            }]
                    }
                ]
            },
            {
                "statementKey": "E1b",
                "speaker": 1,
                "next": "",
                "mood-phrase": ", somewhat annoyed, said",
                "mood": "annoyed",
                "statement": [{
                        "id": 43, "statementKey": "E1b",
                        "speaker": 1,
                        "next": "",
                        "image": "../../../assets/perez/perez_panel_1.png",
                        "speaker_image": "../../../assets/Al.png",
                        "text": "Perez's research funding meets expectations, and his teaching is okay, " +
                            "but he hasn't seemed to have found his niche yet in terms of service.  That's probably ok at his stage.",
                        "reference": [{
                                "url": "",
                                "desc": "Departments should have clear, unambiguous expectations that are communicated in writing."
                            }, {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
                            }]
                    }
                ]
            },
            {
                "statementKey": "E1c",
                "speaker": 3,
                "next": "",
                "mood-phrase": "said seriously",
                "mood": "serious",
                "statement": [{
                        "id": 43, "statementKey": "E1c",
                        "speaker": 3,
                        "next": "",
                        "image": "../../../assets/perez/perez_panel_3.png",
                        "speaker_image": "../../../assets/KK.png",
                        "text": "It seems to me that the majority of us agree that Perez is an outstanding " +
                            "researcher and teacher who has contributed to service in his efforts to improve minority recruitment." +
                            " Al, you seem to be the outlier.",
                        "reference": [{
                                "url": "",
                                "desc": "Standards of achievement should be clear and not established by individual predilections."
                            }, {
                                "url": "http:\\www.advance.gatech.edu/ptac",
                                "desc": "PTAC Report (IV.3) outlines best practices of evaluation."
                            }]
                    }
                ]
            }
        ]
    },
    {
        "name": "Samia Mansour",
        "id": 2,
        "conversation": [
            {
                "statementKey": "A1",
                "speaker": 1,
                "next": "A2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 1, "statementKey": "A1",
                        "speaker": 1,
                        "next": "A2",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Let's now consider Mansour's case. Keep in mind this is an early promotion and tenure case.",
                        "reference": [{
                                "url": "",
                                "desc": "Faculty in units ought to calibrate their standards regarding \"early\" and \"on-time\" cases."
                            }]
                    }
                ]
            },
            {
                "statementKey": "A2",
                "speaker": 3,
                "next": "A3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 2, "statementKey": "A2",
                        "speaker": 3,
                        "next": "A3",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "Is her case different because of the time?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "A3",
                "speaker": 1,
                "next": "B1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 3, "statementKey": "A3",
                        "speaker": 1,
                        "next": "B1",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Since I've been here, we've only had one early case. To be promoted early, the candidate has to be extraordinary in all criteria. Let's start with research.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B1",
                "speaker": 2,
                "next": "B2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 4, "statementKey": "B1",
                        "speaker": 2,
                        "next": "B2",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "I agree that extraordinary levels are expected and Mansour's work qualifies.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B2",
                "speaker": 3,
                "next": "B3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 5, "statementKey": "B2",
                        "speaker": 3,
                        "next": "B3",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "From my vantage point, Samia is a good scholar. Look at this award for her research.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B3",
                "speaker": 2,
                "next": "B4",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 6, "statementKey": "B3",
                        "speaker": 2,
                        "next": "B4",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "It's an impressive award, but let's look at the sum total of research.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B4",
                "speaker": 1,
                "next": "B5",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 7, "statementKey": "B4",
                        "speaker": 1,
                        "next": "B5",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "She has more publications in top-ranked journals than any other untenured biochemistry faculty in our unit.",
                        "reference": [{
                                "url": "",
                                "desc": "Rankings of journals are affected by perceptions of prestige and by submission and acceptance statistics."
                            },
                            {
                                "url": "",
                                "desc": "Miller's and Serzan's survey of journals across fields discovered wide variation in editorial and review practices that can influence evaluation decisions."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B5",
                "speaker": 3,
                "next": "B6",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 8, "statementKey": "B5",
                        "speaker": 3,
                        "next": "B6",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "She has significant quantity, but we need to examine the quality. Does her best paper, the prizewinner, represent a significant contribution to the field?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B6",
                "speaker": 2,
                "next": "B7",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 9, "statementKey": "B6",
                        "speaker": 2,
                        "next": "B7",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "Are you suggesting that the paper isn't as good as most reviewers have noted?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B7",
                "speaker": 3,
                "next": "B8",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 10, "statementKey": "B7",
                        "speaker": 3,
                        "next": "B8",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "Let's look at the second reviewer's comments. He doesn't think it contributes much to the field.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B8",
                "speaker": 1,
                "next": "B9",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 11, "statementKey": "B8",
                        "speaker": 1,
                        "next": "B9",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "All the other reviews are positive. I wonder if the negative reviewer is impartial, " +
                            "given the tone of the letter and his focusing on that one paper. I heard this guy is known for " +
                            "writing negative letters.",
                        "reference": [{
                                "url": "",
                                "desc": "Each unit ought to have a standard request letter containing directions to reviewers."
                            },
                            {
                                "url": "",
                                "desc": "PTAC Report. Best Practices. Section 7D, notes chair's responsibilities."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B9",
                "speaker": 3,
                "next": "B10",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 12, "statementKey": "B9",
                        "speaker": 3,
                        "next": "B10",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "His review does seem like it's a response to only one of Samia's papers, but the most" +
                            " important consideration ought to concern the range of research products.",
                        "reference": [{
                                "url": "",
                                "desc": "The 2003 PTAC survey asking GT faculty in different colleges to rank the value of research products revealed different preferences according to discipline."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B10",
                "speaker": 2,
                "next": "B11",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 13, "statementKey": "B10",
                        "speaker": 2,
                        "next": "B11",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "All reviews have to be weighed carefully. " +
                            "The most positive one considers Mansour's service to the profession rather than discussing her research. " +
                            "Do we care that she works for that society?",
                        "reference": [{
                                "url": "",
                                "desc": "Research on social support systems indicates that good relationships increase productivity."
                            }, {
                                "url": "",
                                "desc": "Neumann and Finaly-Neumann note \"relative powers of support and work stress indicators in explaining research publication may vary across academic discipline.\""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11",
                "speaker": 1,
                "next": "B12",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 14, "statementKey": "B11",
                        "speaker": 1,
                        "next": "B12",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Good service alone will not earn promotion and tenure. An early candidate has to " +
                            "demonstrate a more remarkable profile in research.",
                        "reference": [{
                                "url": "",
                                "desc": "Minority faculty may be asked to take on a variety of service roles in a majority institution."
                            }, {
                                "url": "",
                                "desc": "Scott relates productivity to interpersonal contact."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B12",
                "speaker": 2,
                "next": "B13",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 15, "statementKey": "B12",
                        "speaker": 2,
                        "next": "B13",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "The letters don't prove excellent research. One is from another former student of her mentor. " +
                            "Others praise research without understanding it. The negative reviewer is the only one who knows the area.",
                        "reference": [{
                                "url": "",
                                "desc": "External letters should be weighed carefully by committee members."
                            }, {
                                "url": "",
                                "desc": "The PTAC Report. Best Practices. Section 7.E. Interpretation of Letters of Reference."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B13",
                "speaker": 3,
                "next": "B14",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 16, "statementKey": "B13",
                        "speaker": 3,
                        "next": "B14",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "How do you know the positive reviewer has a personal connection?",
                        "reference": [{
                                "url": "",
                                "desc": "Candidates can accrue ascriptive advantages related to academic sponsorship."
                            }, {
                                "url": "",
                                "desc": "Reskin describes the cumulative advantages scientists gained from graduate school advisors."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B14",
                "speaker": 2,
                "next": "B15",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 17, "statementKey": "B14",
                        "speaker": 2,
                        "next": "B15",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "I sat on an NSF panel with someone who knew Samia from graduate school. " +
                            "I believe this letter is from her.",
                        "reference": [{
                                "url": "",
                                "desc": "Reviewers should not have close personal ties to candidates. Relationships should be disclosed."
                            }, {
                                "url": "",
                                "desc": "The PTAC Report. Best Practices. Section 7.B. Ethics."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B15",
                "speaker": 0,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [
                    {
                        "id": 18,
                        "statementKey": "B15a",
                        "speaker": 0,
                        "next": "B16a1",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "I agree that all letters count and that the negative one is salient.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 18,
                        "statementKey": "B15b",
                        "speaker": 0,
                        "next": "B16b1",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "One reviewer is too negative about that one paper and ignores the prize given to it. " +
                            "His argument is not persuasive since the other letters demonstrate genuine and significant achievement.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 18,
                        "statementKey": "B15c",
                        "speaker": 0,
                        "next": "B16c1",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "I think the positive one is too positive. It smacks of cronyism. The rest of the letters are more realistic and persuasive.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 18,
                        "statementKey": "B15d",
                        "speaker": 0,
                        "next": "B16d1",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "I don't care what the reviewers say; I'll judge Mansour's scholarship based on my reading of her papers, which are quite strong.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16a1",
                "speaker": 3,
                "next": "B16a2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 19, "statementKey": "B16a1",
                        "speaker": 3,
                        "next": "B16a2",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "OK, if you all see the negative letter as trumping the other letters, I'll go along with that.",
                        "reference": [{
                                "url": "",
                                "desc": "Disciplinary paradigms affect subjective evaluation and research."
                            }, {
                                "url": "",
                                "desc": "Toma considers the effects of disciplinary paradigms on decisions."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16a2",
                "speaker": 2,
                "next": "B16a3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 20, "statementKey": "B16a2",
                        "speaker": 2,
                        "next": "B16a3",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "Well, it seems that Mansour's work has yet to prove its value. I say let's wait to see more from her.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16a3",
                "speaker": 1,
                "next": "C1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 21, "statementKey": "B16a3",
                        "speaker": 1,
                        "next": "C1",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Her work is good, but I agree that she needs time to mature. Let's consider teaching.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16b1",
                "speaker": 3,
                "next": "B16b2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 22, "statementKey": "B16b1",
                        "speaker": 3,
                        "next": "B16b2",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "I agree that the general impression of the six letters is that her work is very good.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16b2",
                "speaker": 2,
                "next": "B16b3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 23, "statementKey": "B16b2",
                        "speaker": 2,
                        "next": "B16b3",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "Yes, Mansour's work has clearly been recognized as significant by some in her field, but what about that very negative letter?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16b3",
                "speaker": 1,
                "next": "C1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 24, "statementKey": "B16b3",
                        "speaker": 1,
                        "next": "C1",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Mohammed is right that the general context of all the letters should be important. " +
                            "The quality of Mansour's work deserves recognition. Let's talk about teaching.",
                        "reference": [{
                                "url": "",
                                "desc": "Approaching a field from a too narrow perspective could limit appreciation of other subfields, methods, etc."
                            }, {
                                "url": "",
                                "desc": "Wilshire observes damage from such parochialism. "
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16c1",
                "speaker": 3,
                "next": "B16c2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 25, "statementKey": "B16c1",
                        "speaker": 3,
                        "next": "B16c2",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "Yes, even though one person finds one paper to be somewhat controversial, " +
                            "I think we should set aside such an extreme judgment and look at the bigger picture.",
                        "reference": [{
                                "url": "",
                                "desc": "Intellectual conformity can inhibit the discovery of new knowledge and fair evaluation."
                            }, {
                                "url": "",
                                "desc": "Skolnik notes that concerns about conformity are \"as old as organized intellectual activity itself.\" "
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16c2",
                "speaker": 2,
                "next": "B16c3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 26, "statementKey": "B16c2",
                        "speaker": 2,
                        "next": "B16c3",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "OK, but does that mean we discount the negative letter?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16c3",
                "speaker": 1,
                "next": "B16c4",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 27, "statementKey": "B16c3",
                        "speaker": 1,
                        "next": "B16c4",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "We can if the reviewer seems to be biased. His basic complaint is that in the" +
                            " celebrated paper Mansour was only re-doing work already done by her mentor, who really deserves credit for her ideas.",
                        "reference": [{
                                "url": "",
                                "desc": "Proving bias held by reviewers can be difficult."
                            }, {
                                "url": "",
                                "desc": "Merton describes \"the Matthew effect,\" the continuing accrual of recognition for those previously identified as successful."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16c4",
                "speaker": 3,
                "next": "B16c5",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 28, "statementKey": "B16c4",
                        "speaker": 3,
                        "next": "B16c5",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "I think this reviewer can't believe a young woman is capable of scientific insight.",
                        "reference": [{
                                "url": "",
                                "desc": "Gender bias can be subtle."
                            }, {
                                "url": "",
                                "desc": "Steinpreis how the same c.v. can be judged differently, depending upon whether it has a male or female name attached."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16c5",
                "speaker": 1,
                "next": "C1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 29, "statementKey": "B16c5",
                        "speaker": 1,
                        "next": "C1",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Exactly. The excellence of Mansour's research ought to earn her promotion and tenure. Let's discuss her teaching.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16d1",
                "speaker": 3,
                "next": "B16d2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 30, "statementKey": "B16d1",
                        "speaker": 3,
                        "next": "B16d2",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "Yes, I agree that Samia's research is very visible. We need her to keep up momentum in that area. She really puts us on the map.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16d2",
                "speaker": 1,
                "next": "B16d3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 31, "statementKey": "B16d2",
                        "speaker": 1,
                        "next": "B16d3",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "If she doesn't get tenure early here, some other department will hire her. " +
                            "We have to cover her area, or we won't be able to offer the PhD in this area.",
                        "reference": [{
                                "url": "",
                                "desc": "It is a mistake to assume that minority faculty are in high demand and subject to competitive bidding."
                            }, {
                                "url": "",
                                "desc": "See references to Smith in PTAC Report. Report on Gender Bias."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B16d3",
                "speaker": 2,
                "next": "C1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 32, "statementKey": "B16d3",
                        "speaker": 2,
                        "next": "C1",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "Alright, if you see this as a strong record, I won't object to a positive assessment of her research. Should we move on to teaching?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C1",
                "speaker": 3,
                "next": "C2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 33, "statementKey": "C1",
                        "speaker": 3,
                        "next": "C2",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "I can't believe that some students have the audacity to comment on her clothing. " +
                            "Let's make sure we judge her teaching accordingly.",
                        "reference": [{
                                "url": "",
                                "desc": "Comments from teaching evaluations require contextual explanation."
                            }, {
                                "url": "",
                                "desc": "Derry explains how different student preferences can mean a teacher succeeds and fails at the same moment for the same reason. "
                            }]
                    }
                ]
            },
            {
                "statementKey": "C2",
                "speaker": 2,
                "next": "C3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 34, "statementKey": "C2",
                        "speaker": 2,
                        "next": "C3",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "The students are right. She's in America, so she should dress like an American. I'm glad she's changed her wardrobe.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C3",
                "speaker": 1,
                "next": "C4",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 35, "statementKey": "C3",
                        "speaker": 1,
                        "next": "C4",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Mansour has a teaching award. She's been a good undergraduate teacher, and she is critical " +
                            "to the graduate program. She attracts the best Ph.D. students.",
                        "reference": [{
                                "url": "",
                                "desc": "Assessment of teaching ought to include a variety of measures."
                            }, {
                                "url": "",
                                "desc": "Glasman calls for the leadership of administrators, who should determine the context of evaluations."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C4",
                "speaker": 3,
                "next": "C5",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 36, "statementKey": "C4",
                        "speaker": 3,
                        "next": "C5",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "She's a good teacher for upper-division undergraduate and graduate students, even if first- and second-year students seem less comfortable with her.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C5",
                "speaker": 2,
                "next": "C6",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 37, "statementKey": "C5",
                        "speaker": 2,
                        "next": "C6",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "Maybe it's her accent that bothers students. " +
                            "I sat in on one intro course, and I had trouble understanding everything she said.",
                        "reference": [{
                                "url": "",
                                "desc": "Ethnically biased comments, like gender-biased ones, ought not to enter evaluation discussions."
                            }, {
                                "url": "",
                                "desc": "News accounts of unsuccessful cases at other institutions indicate that gender bias can be a significant factor. See Campi."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C6",
                "speaker": 3,
                "next": "C7",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 38, "statementKey": "C6",
                        "speaker": 3,
                        "next": "C7",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "We need to calibrate her teaching effectiveness. Considering all course scores, " +
                            "her teaching for the intro courses is average for our department. And, as Kathryn said, " +
                            "in graduate courses she does very well.",
                        "reference": [{
                                "url": "",
                                "desc": "Teaching evaluations should be considered for a range of courses and in the context of other measures reporting effectiveness."
                            }, {
                                "url": "",
                                "desc": "O'Hanlon and Mortenson argue that teaching evaluations ought to contain useful information for instructors."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C7",
                "speaker": 0,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [
                    {
                        "id": 39,
                        "statementKey": "C7a",
                        "speaker": 0,
                        "next": "C8a",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Low scores reflect only cultural differences and do not serve as the most reliable indicator of good teaching.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 39,
                        "statementKey": "C7b",
                        "speaker": 0,
                        "next": "C8b1",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Low scores are low scores and indicate poor teaching.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 39,
                        "statementKey": "C7c",
                        "speaker": 0,
                        "next": "C8c1",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Our procedures require looking at a broad set of assessment tools. Numbers are only one component of evaluating teaching.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 39,
                        "statementKey": "C7d",
                        "speaker": 0,
                        "next": "D1",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Accent and dress negatively affect her teaching of beginning students, who are a critical constituency for us.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C8a",
                "speaker": 1,
                "next": "D1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 40, "statementKey": "C8a",
                        "speaker": 1,
                        "next": "D1",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "OK, we know she's not going to be the most effective teacher for first-year students, but we agree that in general she is a good teacher. Let's talk about service.",
                        "reference": [{
                                "url": "",
                                "desc": "Positive characteristics of colleagues can depend on particular circumstances."
                            }, {
                                "url": "",
                                "desc": "Goodwin and Stevens report on how gender influences university faculty members' perceptions of good teaching."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C8b1",
                "speaker": 3,
                "next": "C8b2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 41, "statementKey": "C8b1",
                        "speaker": 3,
                        "next": "C8b2",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "Let's remember that her teaching scores have steadily improved over time and that other faculty also have low scores in those introductory courses.",
                        "reference": [{
                                "url": "",
                                "desc": "Researchers disagree concerning the relation of research productivity and teaching."
                            }, {
                                "url": "",
                                "desc": "See Linsky and Straus for a consideration of how they are inversely related."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C8b2",
                "speaker": 2,
                "next": "D1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 42, "statementKey": "C8b2",
                        "speaker": 2,
                        "next": "D1",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "I'll concede that her teaching is currently acceptable, but I hope she improves even more. I guess we're moving on to service.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C8c1",
                "speaker": 3,
                "next": "C8c2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 43, "statementKey": "C8c1",
                        "speaker": 3,
                        "next": "C8c2",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "Absolutely. Her students' written comments and the peer reviewers make it clear that Mansour has tried some innovative techniques in the classroom.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C8c2",
                "speaker": 1,
                "next": "D1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 44, "statementKey": "C8c2",
                        "speaker": 1,
                        "next": "D1",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "We can note those details in our letter where we describe her general teaching record as good. Let's discuss her service.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D1",
                "speaker": 3,
                "next": "D2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 45, "statementKey": "D1",
                        "speaker": 3,
                        "next": "D2",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "Clearly we don't need to say much about her service, which seems exemplary, both in the university and to the profession.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D2",
                "speaker": 2,
                "next": "D3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 46, "statementKey": "D2",
                        "speaker": 2,
                        "next": "D3",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "But has she really contributed in any substantial way to influential committees on campus " +
                            "or among her disciplinary peers? All I see is her interest in women's issues.",
                        "reference": [{
                                "url": "",
                                "desc": "Research is weighted more heavily than teaching during promotion and tenure discussions."
                            }, {
                                "url": "",
                                "desc": "Menges and Exum consider weighting research more heavily as a factor becomes a barrier for female and minority faculty, who are more frequently invited and appointed to community service and perhaps more invested in teaching."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D3",
                "speaker": 1,
                "next": "D4",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 47, "statementKey": "D3",
                        "speaker": 1,
                        "next": "D4",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Given the underrepresentation of women in this field, women's issues are important. " +
                            "It was the president who put her on many of these committees, invitations she could hardly refuse.",
                        "reference": [{
                                "url": "",
                                "desc": "Contributing to enhancing the institution should not be held against the candidate, especially if administrators have requested such participation."
                            }, {
                                "url": "",
                                "desc": "Olsen notes untenured faculty have a more difficult time disagreeing with colleagues and administrators. "
                            }]
                    }
                ]
            },
            {
                "statementKey": "D4",
                "speaker": 3,
                "next": "D5",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 48, "statementKey": "D4",
                        "speaker": 3,
                        "next": "D5",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "Her committee work has not been on the department's most important committees, but it's been useful for each committee to have a woman.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D5",
                "speaker": 0,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [
                    {
                        "id": 49,
                        "statementKey": "D5a",
                        "speaker": 0,
                        "next": "D6a1",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "She has been on about the same number of committees as others. " +
                            "Her local and national service appear fine. Service seems like the lowest priority for all of us. " +
                            "I guess hers is ok.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 49,
                        "statementKey": "D5b",
                        "speaker": 0,
                        "next": "Db1",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "She is too focused on only one service issue. I question whether she has made any impact regarding the environment for women.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 49,
                        "statementKey": "D5c",
                        "speaker": 0,
                        "next": "D6c",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Her service record is excellent. Working on behalf of underrepresented groups is a significant contribution to the field.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 49,
                        "statementKey": "D5d",
                        "speaker": 0,
                        "next": "D6d1",
                        "image": "../../../assets/mansour/mansour_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Service seems like the lowest priority for all of us. I guess hers is ok.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6a1",
                "speaker": 3,
                "next": "D6a2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 50, "statementKey": "D6a1",
                        "speaker": 3,
                        "next": "D6a2",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "Actually, I think she has been on more university-level committees than others who come up for tenure.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6a2",
                "speaker": 1,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 57,
                        "statementKey": "D6a2",
                        "speaker": 1,
                        "next": "",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Yes, she has done a better job than most in service, and has generally good teaching scores, " +
                            "and she has also made significant national impact in her research. Her record justifies promotion and tenure.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6b2",
                "speaker": 3,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 57, "statementKey": "D6b2",
                        "speaker": 3,
                        "next": "",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "I'm not sure if I do agree, but I don't have time to talk about it now because I have to teach. Kathryn, I guess we have to meet again before we come to a decision.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6c",
                "speaker": 1,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 57, "statementKey": "D6c",
                        "speaker": 1,
                        "next": "",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "I think her service is very valuable, like her research and teaching. I see that the majority of us agree that she should be promoted and tenured.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6d1",
                "speaker": 2,
                "next": "D6d2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 51, "statementKey": "D6d1",
                        "speaker": 2,
                        "next": "D6d2",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "Doesn't it seem like everything is marginal?: mixed teaching scores, ambiguous service, and a research that one of the biggest names in the field thinks is imitative and overblown?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6d2",
                "speaker": 3,
                "next": "D6d3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 52, "statementKey": "D6d2",
                        "speaker": 3,
                        "next": "D6d3",
                        "image": "../../../assets/mansour/mansour_panel_3.png",
                        "speaker_image": "../../../assets/MS.png",
                        "text": "I disagree with that summary. Kathryn, I think our review should reflect that we are not in accord.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D6d3",
                "speaker": 1,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 57, "statementKey": "D6d3",
                        "speaker": 1,
                        "next": "",
                        "image": "../../../assets/mansour/mansour_panel_1.png",
                        "speaker_image": "../../../assets/KS.png",
                        "text": "Three of the four of us see Mansour's record as appropriate for promotion and tenure. I think our letter should be more positive than negative, even though it will accompany a split vote.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "Db1",
                "speaker": 2,
                "next": "D6b2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 53, "statementKey": "Db1",
                        "speaker": 2,
                        "next": "D6b2",
                        "image": "../../../assets/mansour/mansour_panel_2.png",
                        "speaker_image": "../../../assets/JW.png",
                        "text": "I agree that her service record is marginal, like her teaching. And considering the controversy about her research, don't you both agree that we must turn down her early bid for promotion and tenure?",
                        "reference": [{
                                "url": "",
                                "desc": "Evaluation discussions ought to carefully represent the candidate's achievements."
                            }, {
                                "url": "",
                                "desc": "Park argues that \"women's work\" (service, teaching) in institutions is often devalued in comparison with research, which ought to be valued according to its quality as much as its quantity."
                            }]
                    }
                ]
            }
        ]
    },
    {
        "name": "Patty Shen",
        "id": 3,
        "conversation": [
            {
                "statementKey": "A1",
                "speaker": 1,
                "next": "B1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 1, "statementKey": "A1",
                        "speaker": 1,
                        "next": "B1",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "Patty Shen's case is unusual. She is one of the first faculty members to receive a year's leave " +
                            "under the university's active service modified duties program. " +
                            "I suggested she delay because of low productivity.",
                        "reference": [{
                                "url": "",
                                "desc": "The chair of the unit has an obligation to convey relevant information concerning particular information relevant to candidate."
                            }, {
                                "url": "",
                                "desc": "The PTAC report indicates that chairs and committees can incorporate independently confirmed facts. See Best Practices. Section 7.B."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B1",
                "speaker": 1,
                "next": "B2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 2, "statementKey": "B1",
                        "speaker": 1,
                        "next": "B2",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "We'll consider Patty Shen's case first. We'll talk about the three general areas--research, teaching, and service. Let's start by considering research first.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B2",
                "speaker": 2,
                "next": "B3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 3, "statementKey": "B2",
                        "speaker": 2,
                        "next": "B3",
                        "image": "../../../assets/patty/patty_panel_2.png",
                        "speaker_image": "../../../assets/CW.png",
                        "text": "She has a number of reasonable publications in good journals over six years. I guess we don't count pregnancy year, but shouldn't we count the next year?",
                        "reference": [{
                                "url": "",
                                "desc": "Committee members need to calibrate productivity during the period of time on the tenure clock as opposed to chronological time."
                            }, {
                                "url": "",
                                "desc": "Lee describes how courts resist intervening in the application of standards, while considering whether institutions have performed fair evaluations. "
                            }]
                    }
                ]
            },
            {
                "statementKey": "B3",
                "speaker": 3,
                "next": "B4",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 4, "statementKey": "B3",
                        "speaker": 3,
                        "next": "B4",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "I would say that we wouldn't expect much productivity in the active service modified duties year of leave, " +
                            "but there should be more publications in the following year. So I'm unclear about the one-year delay.",
                        "reference": [{
                                "url": "",
                                "desc": "Erratic productivity is difficult to discern from publication schedule alone and ought not to be inferred based on temporary delays."
                            }, {
                                "url": "",
                                "desc": "Lindsay mentions that colleagues and administrators sometimes mistakenly link family responsibilities to perceptions of a faculty member's productivity."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B4",
                "speaker": 1,
                "next": "B5",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 5, "statementKey": "B4",
                        "speaker": 1,
                        "next": "B5",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "I agree with Caroline that Shen has published high quality papers in good journals. The extra year does raise some questions, but I think there were lingering health problems.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B5",
                "speaker": 2,
                "next": "B6",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 6, "statementKey": "B5",
                        "speaker": 2,
                        "next": "B6",
                        "image": "../../../assets/patty/patty_panel_2.png",
                        "speaker_image": "../../../assets/CW.png",
                        "text": "George, how do you know that?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B6",
                "speaker": 1,
                "next": "B7",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 7, "statementKey": "B6",
                        "speaker": 1,
                        "next": "B7",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "I called the reviewer who was candid about Patty's situation, because she alluded to " +
                            "medical issues in her letter. These appear legitimate.",
                        "reference": [{
                                "url": "",
                                "desc": "Rumors ought to be confirmed."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B7",
                "speaker": 3,
                "next": "B8",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 8, "statementKey": "B7",
                        "speaker": 3,
                        "next": "B8",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "I can't believe we didn't know she had medical problems. I'm glad you can explain that.",
                        "reference": [{
                                "url": "",
                                "desc": "Family and medical problems may or may not be known to colleagues, members of evaluation committees, or external reviewers."
                            }, {
                                "url": "",
                                "desc": "Menges and Exum state that \"who communicates with whom is greatly influenced by the campus and the disciplinary norms that have been established by senior academics.\" "
                            }]
                    }
                ]
            },
            {
                "statementKey": "B8",
                "speaker": 2,
                "next": "B9",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 9, "statementKey": "B8",
                        "speaker": 2,
                        "next": "B9",
                        "image": "../../../assets/patty/patty_panel_2.png",
                        "speaker_image": "../../../assets/CW.png",
                        "text": "If she really had severe medical problems, why didn't she ask for another leave?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B9",
                "speaker": 1,
                "next": "B10",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 10, "statementKey": "B9",
                        "speaker": 1,
                        "next": "B10",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "Initially, Patty thought it was a minor problem, but it turned out to be more severe. " +
                            "The evidence is that she was lined up to do this prestigious talk and had to cancel at the last minute.",
                        "reference": [{
                                "url": "",
                                "desc": "Invited presentations are considered by many to be a significant indicator of research success."
                            }, {
                                "url": "",
                                "desc": "Park indicates that research productivity is the single most important factor for evaluators. "
                            }]
                    }
                ]
            },
            {
                "statementKey": "B10",
                "speaker": 0,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [
                    {
                        "id": 11,
                        "statementKey": "B10a",
                        "speaker": 0,
                        "next": "B11a1",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Yes, she had an active services modified duty leave releasing her from teaching. But the additional year off is not documented, and we must consider her lack of productivity.",
                        "reference": [{
                                "url": "",
                                "desc": "Options for childcare affect research productivity.Women are often assumed to be the primary caregiver."
                            },
                            {
                                "url": "",
                                "desc": "Fox's survey of GT faculty notes that women faculty are more likely to report being affected by childcare options."
                            }, {
                                "url": "",
                                "desc": "See PTAC Report. Bias Report on Gender, which notes significance of Valian's schemas concerning gender roles."
                            }]
                    },
                    {
                        "id": 11,
                        "statementKey": "B10b",
                        "speaker": 0,
                        "next": "B11b1",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "It's hard to discern how productive she'll be in the future now that she's a mother with additional responsibilities. Maybe she has been active lately just to get past the tenure hurdle?",
                        "reference": [{
                                "url": "",
                                "desc": "Options for childcare affect research productivity.Women are often assumed to be the primary caregiver."
                            },
                            {
                                "url": "",
                                "desc": "Fox's survey of GT faculty notes that women faculty are more likely to report being affected by childcare options."
                            }, {
                                "url": "",
                                "desc": "See PTAC Report. Bias Report on Gender, which notes significance of Valian's schemas concerning gender roles."
                            }]
                    },
                    {
                        "id": 11,
                        "statementKey": "B10c",
                        "speaker": 0,
                        "next": "B11c1",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "She was active and productive before pregnancy and illness. After that, she got back to a productive trajectory, writing journal articles and grant proposals.",
                        "reference": [{
                                "url": "",
                                "desc": "Options for childcare affect research productivity.Women are often assumed to be the primary caregiver."
                            },
                            {
                                "url": "",
                                "desc": "Fox's survey of GT faculty notes that women faculty are more likely to report being affected by childcare options."
                            }, {
                                "url": "",
                                "desc": "See PTAC Report. Bias Report on Gender, which notes significance of Valian's schemas concerning gender roles."
                            }]
                    },
                    {
                        "id": 11,
                        "statementKey": "B10d",
                        "speaker": 0,
                        "next": "B11d1",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Patty's papers and grant proposals are well-received, and she is on the way to getting even more funding. She is on the right track.",
                        "reference": [{
                                "url": "",
                                "desc": "Options for childcare affect research productivity.Women are often assumed to be the primary caregiver."
                            },
                            {
                                "url": "",
                                "desc": "Fox's survey of GT faculty notes that women faculty are more likely to report being affected by childcare options."
                            }, {
                                "url": "",
                                "desc": "See PTAC Report. Bias Report on Gender, which notes significance of Valian's schemas concerning gender roles."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11a1",
                "speaker": 2,
                "next": "B11a2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 12, "statementKey": "B11a1",
                        "speaker": 1,
                        "next": "B11a2",
                        "image": "../../../assets/patty/patty_panel_2.png",
                        "speaker_image": "../../../assets/CW.png",
                        "text": "I agree that her record is erratic. We know she got a lot of time and didn't produce much.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11a2",
                "speaker": 3,
                "next": "B11a3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 13, "statementKey": "B11a2",
                        "speaker": 3,
                        "next": "B11a3",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "Well, her overall number of publications and their general quality seem in the range of what others do.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11a3",
                "speaker": 1,
                "next": "C1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 14, "statementKey": "B11a3",
                        "speaker": 1,
                        "next": "C1",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "I agree, but if only two of the four of us think her research records has met the standards established " +
                            "by the university, then we'll have to indicate this disagreement in our letter.",
                        "reference": [{
                                "url": "",
                                "desc": "The scope of the evaluation committee's judgment ought to be represented in their joint letter."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11b1",
                "speaker": 3,
                "next": "B11b2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 15, "statementKey": "B11b1",
                        "speaker": 3,
                        "next": "B11b2",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "Not everyone can crank out the same number of publications every year, given the time delays of some journals. " +
                            "And, as a mother, I think it is possible to work after childbirth.",
                        "reference": [{
                                "url": "",
                                "desc": "Assuming a standardized pattern of productivity can be an indication of bias."
                            }, {
                                "url": "",
                                "desc": "Neumann and Finaly-Neumann consider how components of support and stress affect faculty differentially depending on discipline."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11b2",
                "speaker": 2,
                "next": "B11b3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 16, "statementKey": "B11b2",
                        "speaker": 2,
                        "next": "B11b3",
                        "image": "../../../assets/patty/patty_panel_2.png",
                        "speaker_image": "../../../assets/CW.png",
                        "text": "Susan, I'm not sure Patty will be as productive as you.",
                        "reference": [{
                                "url": "",
                                "desc": "While faculty recognize the interdependence of personal motivation, environment, and productivity, there is not a clear cut formula to predict research success."
                            }, {
                                "url": "",
                                "desc": "Olsen questions whether autonomy and intellectual engagement counterbalance some observed negative aspects of academic work."
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11b3",
                "speaker": 1,
                "next": "C1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 17, "statementKey": "B11b3",
                        "speaker": 1,
                        "next": "C1",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "We're digressing, so let's summarize her research record as being adequate, despite certain medical issues. " +
                            "Let's move on to talk about teaching.",
                        "reference": [{
                                "url": "",
                                "desc": "Committee members ought to calibrate their assumptions concerning quality and quantity of research."
                            }, {
                                "url": "",
                                "desc": "Tien and Blackburn \"argue that the importance of promotion varies among individuals.\""
                            }]
                    }]
            },
            {
                "statementKey": "B11c1",
                "speaker": 3,
                "next": "B11c2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 18, "statementKey": "B11c1",
                        "speaker": 3,
                        "next": "B11c2",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "Patty's research has been good and does appear to be back on track.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11c2",
                "speaker": 1,
                "next": "C1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 19, "statementKey": "B11c2",
                        "speaker": 1,
                        "next": "C1",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "I agree that her research productivity seems good. Let's consider her teaching.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11d1",
                "speaker": 3,
                "next": "B11d2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 20, "statementKey": "B11d1",
                        "speaker": 3,
                        "next": "B11d2",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "Yes, it looks like she has good prospects for getting more funding this year. And she has managed to support graduate students.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "B11d2",
                "speaker": 1,
                "next": "C1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 21, "statementKey": "B11d2",
                        "speaker": 1,
                        "next": "C1",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "All in all, her research appears to be very good now and likely to make a big impact. Let's go on to teaching.",
                        "reference": [{
                                "url": "",
                                "desc": "Committee members should separately evaluate research, teaching, and service."
                            }, {
                                "url": "",
                                "desc": "Linsky and Straus argue there is a weak correlation between research and teaching."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C1",
                "speaker": 3,
                "next": "C2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 22, "statementKey": "C1",
                        "speaker": 3,
                        "next": "C2",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "All indications are that Patty has been a fine teacher and has done excellent work in the classroom overall.",
                        "reference": [{
                                "url": "",
                                "desc": "Unit-level committees should include peer review reports of teaching effectiveness to supplement the candidate's teaching portfolio and scores from standardized instruments."
                            }, {
                                "url": "",
                                "desc": "O'Hanlon and Mortensen point out that teaching evaluations assist faculty in improving and provide information for evaluators."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C2",
                "speaker": 2,
                "next": "C3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 23, "statementKey": "C2",
                        "speaker": 2,
                        "next": "C3",
                        "image": "../../../assets/patty/patty_panel_2.png",
                        "speaker_image": "../../../assets/CW.png",
                        "text": "It looks like once she had a child, her teaching scores dipped. During that period her research and her " +
                            "teaching both suffered.",
                        "reference": [{
                                "url": "",
                                "desc": "Committee members should not assume that problems on one career phase will carry over to successive phases."
                            }, {
                                "url": "",
                                "desc": "Clark and Corcoran study accumulative disadvantage constraining female faculty."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C3",
                "speaker": 0,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [
                    {
                        "id": 24,
                        "statementKey": "C3a",
                        "speaker": 0,
                        "next": "C4a1",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Comments from students suggest that she's a good teacher and will continue to be so.",
                        "reference": [{
                                "url": "",
                                "desc": "Student comments should be taken into account in the peer review of teaching.Committee members should consider a broad range of measures of teaching effectiveness.Observations of students should be included only if confirming documented data."
                            }, {
                                "url": "",
                                "desc": "Glasman calls for the leadership of academic administrators in promoting equity in evaluation and faculty acceptance of the process "
                            }, {
                                "url": "",
                                "desc": "Derry considers how some data from teaching evaluations can be elevated over others."
                            }, {
                                "url": "",
                                "desc": "Canada and Pringle suggest that there might be a \"lack of explicitness about what constitutes classroom interaction.\" "
                            }]
                    },
                    {
                        "id": 24,
                        "statementKey": "C3b",
                        "speaker": 0,
                        "next": "C4b",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Since there are low scores, I'd say evidence is not definitive regarding her future performance.",
                        "reference": [{
                                "url": "",
                                "desc": "Student comments should be taken into account in the peer review of teaching.Committee members should consider a broad range of measures of teaching effectiveness.Observations of students should be included only if confirming documented data."
                            }, {
                                "url": "",
                                "desc": "Glasman calls for the leadership of academic administrators in promoting equity in evaluation and faculty acceptance of the process "
                            }, {
                                "url": "",
                                "desc": "Derry considers how some data from teaching evaluations can be elevated over others."
                            }, {
                                "url": "",
                                "desc": "Canada and Pringle suggest that there might be a \"lack of explicitness about what constitutes classroom interaction.\" "
                            }]
                    },
                    {
                        "id": 24,
                        "statementKey": "C3c",
                        "speaker": 0,
                        "next": "C4c1",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Teaching scores improved after her illness, but that could be a temporary gain.",
                        "reference": [{
                                "url": "",
                                "desc": "Student comments should be taken into account in the peer review of teaching.Committee members should consider a broad range of measures of teaching effectiveness.Observations of students should be included only if confirming documented data."
                            }, {
                                "url": "",
                                "desc": "Glasman calls for the leadership of academic administrators in promoting equity in evaluation and faculty acceptance of the process "
                            }, {
                                "url": "",
                                "desc": "Derry considers how some data from teaching evaluations can be elevated over others."
                            }, {
                                "url": "",
                                "desc": "Canada and Pringle suggest that there might be a \"lack of explicitness about what constitutes classroom interaction.\" "
                            }]
                    },
                    {
                        "id": 24,
                        "statementKey": "C3d",
                        "speaker": 0,
                        "next": "D1",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Because our labs are close, I hear Patty's students. They seem very impressed with her attention.",
                        "reference": [{
                                "url": "",
                                "desc": "Student comments should be taken into account in the peer review of teaching.Committee members should consider a broad range of measures of teaching effectiveness.Observations of students should be included only if confirming documented data."
                            }, {
                                "url": "",
                                "desc": "Glasman calls for the leadership of academic administrators in promoting equity in evaluation and faculty acceptance of the process "
                            }, {
                                "url": "",
                                "desc": "Derry considers how some data from teaching evaluations can be elevated over others."
                            }, {
                                "url": "",
                                "desc": "Canada and Pringle suggest that there might be a \"lack of explicitness about what constitutes classroom interaction.\" "
                            }]
                    }
                ]
            },
            {
                "statementKey": "C4a1",
                "speaker": 3,
                "next": "C4a2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 25, "statementKey": "C4a1",
                        "speaker": 3,
                        "next": "C4a2",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "Her teaching scores are above the department average. As an observer, I praised her syllabus and class exercises. Excellent student commendations are included in the package for her teaching award.",
                        "reference": [{
                                "url": "",
                                "desc": "Perceptions of good teaching might incorporate disciplinary, cultural, or personal bias."
                            }, {
                                "url": "",
                                "desc": "Goodwin and Stevens investigate the similarities and differences of male and female faculty concerning \"good\" teaching."
                            }]
                    }
                ]
            },
            {
                "statementKey": "C4a2",
                "speaker": 1,
                "next": "D1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 26, "statementKey": "C4a2",
                        "speaker": 1,
                        "next": "D1",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "Her teaching should be noted as good. What do you think of her service?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C4b",
                "speaker": 1,
                "next": "D1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 27, "statementKey": "C4b",
                        "speaker": 1,
                        "next": "D1",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "We're forecasting. She has demonstrated good teaching in the past, and right now her evaluations are fine. My prediction is she will continue to be a solid teacher. It's time to talk about service.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C4c1",
                "speaker": 3,
                "next": "C4c2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 28, "statementKey": "C4c1",
                        "speaker": 3,
                        "next": "C4c2",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "Since she was officially given a changed schedule because of pregnancy and illness, we should not assume she had a lot of extra time.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "C4c2",
                "speaker": 1,
                "next": "D1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 29, "statementKey": "C4c2",
                        "speaker": 1,
                        "next": "D1",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "Yes, we should not diminish the teaching portfolio she has presented, which is right in " +
                            "line with our general standard. Let's consider service now.",
                        "reference": [{
                                "url": "",
                                "desc": "A candidate's teaching record ought to be considered in relation to the unit's profile of good teaching."
                            }, {
                                "url": "",
                                "desc": "Koon and Murray propose that \"measures of student motivation as well as student learning of subject matter, should be used to explain between-teacher variation\" in student ratings."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D1",
                "speaker": 2,
                "next": "D2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 30, "statementKey": "D1",
                        "speaker": 2,
                        "next": "D2",
                        "image": "../../../assets/patty/patty_panel_2.png",
                        "speaker_image": "../../../assets/CW.png",
                        "text": "Patty contributed good service earlier, although after her illness she has not continued because of family " +
                            "and health issues. It might be understandable, but is it acceptable if others have to do more?",
                        "reference": [{
                                "url": "",
                                "desc": "Perceptions of adequate service are influenced by unit, disciplinary, and institutional contexts."
                            }, {
                                "url": "",
                                "desc": "Park notes that committee assignments and faculty workload on committees can vary significantly."
                            }]
                    }
                ]
            },
            {
                "statementKey": "D2",
                "speaker": 3,
                "next": "D3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 31, "statementKey": "D2",
                        "speaker": 3,
                        "next": "D3",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "I think that each of us has different issues at different phases that affect choices of service. She's still working with the center she helped develop and that is useful service.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D3",
                "speaker": 0,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [
                    {
                        "id": 32,
                        "statementKey": "D3a",
                        "speaker": 0,
                        "next": "D4a",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Just how important is service anyway? She's certainly made valued contributions.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 32,
                        "statementKey": "D3b",
                        "speaker": 0,
                        "next": "D4b",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "I think everyone who is part of the community ought to do something significant. Her record could be better.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 32,
                        "statementKey": "D3c",
                        "speaker": 0,
                        "next": "E1",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Her reduction in service imposed costs on everyone else.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    },
                    {
                        "id": 32,
                        "statementKey": "D3d",
                        "speaker": 0,
                        "next": "E1",
                        "image": "../../../assets/patty/patty_panel.png",
                        "speaker_image": "../../../assets/transcript-player-profile.png",
                        "text": "Her service is acceptable, considering the period of leave and the illness.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D4a",
                "speaker": 3,
                "next": "E1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 33, "statementKey": "D4a",
                        "speaker": 3,
                        "next": "E1",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "I agree that Patty's service is better than average.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "D4b",
                "speaker": 2,
                "next": "E1",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 34, "statementKey": "D4b",
                        "speaker": 2,
                        "next": "E1",
                        "image": "../../../assets/patty/patty_panel_2.png",
                        "speaker_image": "../../../assets/CW.png",
                        "text": "It's true that she could have done more.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "E1",
                "speaker": 1,
                "next": "E2",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 35, "statementKey": "E1",
                        "speaker": 1,
                        "next": "E2",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "Let's move forward. Patty's research is reasonable, her teaching is acceptable, and her service is fine. But is this \"middle of the road\" profile enough for promotion? Do the external letters prove her impact?",
                        "reference": [{
                                "url": "",
                                "desc": "External letters provide a significant frame of reference that should be incorporated by committee members into their deliberations."
                            }, {
                                "url": "",
                                "desc": "Park argues that maintaining a too narrow filter based on research excellence can undermine attempts to build an institutional community."
                            }]
                    }
                ]
            },
            {
                "statementKey": "E2",
                "speaker": 2,
                "next": "E3",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 36, "statementKey": "E2",
                        "speaker": 2,
                        "next": "E3",
                        "image": "../../../assets/patty/patty_panel_2.png",
                        "speaker_image": "../../../assets/CW.png",
                        "text": "The letters go along with that description of her work as average. All of them indicate that she is a solid researcher, but there's nothing earth-shattering noted.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "E3",
                "speaker": 3,
                "next": "E4",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 37, "statementKey": "E3",
                        "speaker": 3,
                        "next": "E4",
                        "image": "../../../assets/patty/patty_panel_3.png",
                        "speaker_image": "../../../assets/ST.png",
                        "text": "Caroline, I think that you forgot to mention that one reviewer had nominated a paper of Patty's for a prize, and another letter praised the clarity and efficiency of her publications.",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            },
            {
                "statementKey": "E4",
                "speaker": 1,
                "next": "",
                "mood-phrase": "",
                "mood": "",
                "statement": [{
                        "id": 38, "statementKey": "E4",
                        "speaker": 1,
                        "next": "",
                        "image": "../../../assets/patty/patty_panel_1.png",
                        "speaker_image": "../../../assets/GG.png",
                        "text": "Now that I'm looking at the letters again, I see that each reviewer does volunteer that Patty's achievements are worthy of promotion and tenure at his or her research university. I assume we agree?",
                        "reference": [{
                                "url": "",
                                "desc": ""
                            }]
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/simulated-meeting/game/sm-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n.left-panel {\n  box-shadow: 0 4px 8px 0 rgba(164, 164, 164, 0.51), 0 6px 20px 0 rgba(164, 164, 164, 0.5);\n  padding-top: 20px;\n}\n.logo {\n  display: block;\n  margin: auto;\n}\n\n.sm-game {\n  font-size: 22px;\n}\n\n.header {\n  font-size: 20px;\n  font-weight: 700;\n  margin-top: 20px;\n}\n\n.candidate-name {\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 15px;\n  margin-bottom: 6px;\n}\n\n.candidate-short-desc {\n  font-size: 12px;\n  margin-top: 3px;\n}\n\n.right-panel {\n  max-width: 889px;\n  padding-left: 40px;\n  margin-top: 20px;\n}\n\n.activity-instruction {\n  font-size: 20px;\n}\n\n\n\n.choose-candidate-card {\n  margin-top: 12px;\n  background-color: #F5F5F5;\n  border-style: solid;\n  border-width: 8px;\n  border-color: white;\n}\n\n.choose-candidates {\n  margin-top: -15px;\n}\n\n.candidate-img {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 80px;\n  width: 80px;\n}\n\n.details-case {\n  background-color: #F5F5F5;\n  margin-top: -30px;\n\n}\n\n.view-details-left {\n  background-color: white;\n  font-size: 8px;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.view-details {\n  background-color: white;\n  border-style: solid;\n  border-width: 8px;\n  border-color: #F5F5F5;\n  margin-top: 18px;\n  font-size: 12px;\n  margin-left: 15px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.button-blue {\n  color: white;\n  font-size: 16px;\n  background-color: #0D3055;\n  margin-top: 10px;\n  text-align: center;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.50), 0 2px 2px 0 rgba(0, 0, 0, 0.5);\n}\n\n.truncate {\n  !*white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 200px;*!\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 18px;\n}\n\n.example-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n  font-size:16px;\n}\n\n.example-radio-button {\n  margin: 5px;\n  white-space:normal;\n}\n\n.example-selected-value {\n  margin: 15px 0;\n}\n\n.rotate{\n  vertical-align:top;\n  margin-top:23px;\n  transform:rotate(7deg);\n  -ms-transform:rotate(90deg); !* IE 9 *!\n  -moz-transform:rotate(90deg); !* Firefox *!\n  -webkit-transform:rotate(90deg); !* Safari and Chrome *!\n  -o-transform:rotate(90deg);\n}\n*/\n\n.main-page {\n  font-size: 16px;\n  min-height: 100%;\n}\n\n.main-page .header {\n  font-size: 20px;\n  font-weight: 700;\n  margin-top: 20px;\n}\n\n.main-page .candidate-name {\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 5px;\n  margin-bottom: 6px;\n}\n\n.main-page .candidate-short-desc {\n  font-size: 12px;\n  margin-top: 3px;\n  padding-bottom: 5px;\n}\n\n.right-panel {\n  max-width: 889px;\n  margin-left: 20px;\n  margin-top: 15px;\n  min-height: 100%;\n}\n\n.activity-instruction {\n  font-size: 20px;\n}\n\n.choose-candidate-card {\n  margin-top: 12px;\n  background-color: #F5F5F5;\n  border-style: solid;\n  border-width: 13px;\n  border-color: white;\n\n}\n\n.cv-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n  width: 100%;\n}\n\n.cv-card:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.candidate-card {\n  margin-top: 10px;\n  background-color: #F5F5F5;\n  padding-top: 10px;\n  padding-bottom: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.other-panelists {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.other-panelists:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.selected {\n  box-shadow: 0 0 10px #EFB211;\n}\n\n.choose-candidates {\n  margin-top: -15px;\n}\n\n.candidate-img {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 80px;\n  width: 80px;\n}\n\n.details-case {\n  background-color: #F5F5F5;\n  margin-top: -30px;\n\n}\n\n.view-details-left {\n  background-color: white;\n  font-size: 8px;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-top: 12px;\n}\n\n.view-details {\n  background-color: white;\n  margin-top: 18px;\n  font-size: 12px;\n  margin-left: 48px;\n  padding-left: 0px;\n  padding-right: 0px;\n  transition: all 200ms ease-out;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.view-details:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.button-blue {\n  color: white;\n  font-size: 16px;\n  background-color: #0D3055;\n  margin-top: 10px;\n  text-align: center;\n}\n\n.truncate {\n  padding-left: 25px;\n  padding-right: 25px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 18px;\n  margin-top: 18px;\n}\n\n.logo {\n  display: block;\n  margin: auto;\n}\n\n.left-panel {\n  box-shadow: 0 4px 8px 0 rgba(164, 164, 164, 0.51), 0 6px 20px 0 rgba(164, 164, 164, 0.5);\n  padding-top: 20px;\n  position: relative;\n}\n\n.back-to-main-page {\n  font-size: 16px;\n  font-weight: 400;\n  border-width: 1px;\n  border-color: black;\n  background-color: white;\n  border-radius: 0;\n  margin-bottom: 10px;\n  width: 100%;\n\n}\n\n.read-about-fellows {\n  margin-left: 15px;\n}\n\n.panelist-name {\n  margin-top: 34px;\n  font-size: 16px;\n  font-weight: 700;\n  margin-left: 10px;\n}\n\n.other-panelists {\n  background-color: white;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.play-game {\n  margin-top: 10px;\n  font-weight: 700;\n  background-color: #0D3055;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  border-radius: 5px;\n  height: 34px; /* Safari */\n  transition-duration: 0.4s;\n  float: right;\n  margin-bottom: 10px;\n}\n\n.submit {\n  font-weight: 700;\n  background-color: #0D3055;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  border-radius: 5px; /* Safari */\n  transition-duration: 0.4s;\n}\n\n.submit:hover {\n  background-color: #EFB211; /* Green */\n  color: white;\n  cursor: pointer;\n}\n\n.play-game:hover {\n  background-color: #EFB211; /* Green */\n  color: white;\n  cursor: pointer;\n}\n\n.shadow {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.control-button {\n  float: right;\n  background-color: #0D3055;\n  height: 40px;\n\n}\n\n.control-button:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.control-panel {\n  height: 85px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 5px;\n  background-color: #F5F5F5;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.progress-bar-container {\n  padding: 8px 2px 13px 2px;\n  height: 20px;\n  margin-bottom: 10px;\n  background-color: #f5f5f5;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.panel-dialog {\n  position: absolute;\n  top: 11%;\n  left: 8%;\n  font-size: 16px;\n  width: 86%;\n}\n\n.transcript {\n  font-size: 20px;\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n  text-align: center;\n  color: white;\n}\n\n.logo:hover {\n  cursor: pointer;\n}\n\n.back-to-main-page:hover {\n  cursor: pointer;\n}\n\n.left-panel-container {\n  width: 100%;\n  min-height: 640px;\n}\n\n.left-panel-child {\n  margin-left: 30px;\n  margin-right: 20px;\n}\n\n.hr-style {\n  margin-top: 20px;\n}\n\n.candidate-profile-header {\n  margin-top: 10px;\n  text-align: center;\n  font-weight: 700;\n}\n\n.candidate-image {\n  padding-left: 15px;\n  width: 100px;\n}\n\n.cv-heading {\n  background-color: #0D3055;\n  width: 100%;\n  padding-left: 10px;\n}\n\n.cv-heading-text {\n  color: white;\n  font-size: 16px;\n  text-align: center;\n}\n\n.cv-snippet {\n  margin-top: 18px;\n}\n\n.case-study-heading {\n  background-color: #EFB211;\n  width: 100%;\n  padding-left: 10px;\n}\n\n.case-study-heading-text {\n  color: white;\n  font-size: 16px;\n  text-align: center;\n}\n\n.exit-activity-container {\n  color: black;\n  text-align: center;\n}\n\n.exit-activity-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.panelist-image {\n  width: 100%;\n  position: relative\n}\n\n.arrow-right {\n  padding: 5px;\n  width: 24px;\n}\n\n.arrow-left {\n  padding: 5px;\n  width: 24px;\n}\n\n.options-container {\n  height: 35%;\n  background-color: #F6F6F6;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: block;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  padding-top: 2px;\n  padding-left: 10px;\n}\n\n.options-container-text {\n  font-size: 17px;\n  font-weight: 700;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.submit-button-container {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\n.transcript-button {\n  width: auto;\n  height: auto;\n  background-color: #0D3055;\n  cursor: pointer;\n}\n\n.error {\n  margin-top: 10px;\n}\n\n.warning-icon {\n  width: 16px;\n}\n\n.transcript-link {\n  color: #0F3153;\n  float: right;\n}\n\n.transcript-link:hover {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simulated-meeting/game/sm-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\">\n  <div class=\"row left-panel-container\">\n    <div class=\"col-md-3 left-panel\">\n      <div class=\"left-panel-child\">\n        <a><img src=\"../../../assets/logo_sm.png\" class=\"logo\" (click)=\"openExitDialog()\"></a>\n        <hr class=\"hr-style\">\n        <div><b>YOU ARE: </b>Committee Member 4</div>\n        <button class=\"button-blue\" (click)=\"openPanelistBio()\">\n          COMMITTEE MEMBERS\n        </button>\n        <hr class=\"hr-style\">\n        <div class=\"candidate-profile-header\">CANDIDATE'S PROFILE</div>\n        <div class=\"candidate-card\">\n          <div class=\"row\" *ngIf=\"candidate!=null\">\n            <div class=\"col-md-5\">\n              <img class=\"candidate-image\" [src]=\"candidate.image\">\n            </div>\n            <div class=\"col-md-7\">\n              <div class=\"candidate-name\">{{candidate.name}}</div>\n              <div class=\"candidate-short-desc\">{{candidate.short_desc}}</div>\n            </div>\n          </div>\n          <div class=\"row view-details-left\" *ngIf=\"candidate!=null\">\n            <div class=\"cv-card\" (click)=\"openCvDialog()\">\n              <div class=\"cv-heading\">\n                <span class=\"cv-heading-text\">Curriculum Vitae</span>\n              </div>\n              <div class=\"cv-snippet\">\n\n                <ul>\n                  <li>{{candidate.dossier.educational_background[0]}}</li>\n                  <li>{{candidate.dossier.educational_background[1]}}</li>\n                </ul>\n\n                <div style=\"float:right;padding-bottom: 10px; padding-right:10px;font-size: 13px;\" (click)=\"openCvDialog()\"><u>Read More..</u></div>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"row view-details-left\" *ngIf=\"candidate!=null\">\n            <div class=\"cv-card\" (click)=\"openCasestudyDialog()\">\n              <div class=\"case-study-heading\">\n                <span class=\"case-study-heading-text\">Case Study</span>\n              </div>\n              <div class=\"truncate\">\n                {{candidate.career_account[0]}}\n              </div>\n\n              <div style=\"float:right;padding-bottom: 10px; padding-right:10px;font-size: 13px;\" (click)=\"openCasestudyDialog()\"><u>Read More..</u></div>\n\n            </div>\n          </div>\n\n        </div>\n        <hr class=\"hr-style\">\n        <button class=\"back-to-main-page\" (click)=\"openExitDialog()\">\n          <span class=\"exit-activity-container\"><img class=\"exit-activity-icon\" src=\"./../../../assets/left-arrow.svg\"\n          > &nbsp;Exit Activity</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"right-panel\">\n        <div class=\"progress-bar-container\">\n          <mat-progress-bar mode=\"determinate\" value=\"{{progressValue}}\"></mat-progress-bar>\n        </div>\n        <div>\n          <div>\n            <img class=\"panelist-image\" alt=\"{{panelSpeakerName}}\" [src]=panelImage>\n            <div class=\"panel-dialog\">\n              {{currentDialogContent}}\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"currentDialogSpeaker!=0\" class=\"control-panel\">\n          <div class=\"transcript-link\" (click)=\"openTranscriptDialog()\"><u><i>Transcript</i></u></div>\n          <hr style=\"margin-top: 1.5rem; margin-bottom: 0.5rem;\">\n          <button\n\n            class=\"control-button\"\n            (click)=\"clickOnNextButton()\"><img\n            src=\"../../../assets/right-arrow.png\" class=\"arrow-right\"></button>\n          <button *ngIf=\"dialogesForPanelist!=null && currentId!=1\" class=\"control-button\"\n                  (click)=\"clickOnBackButton()\"><img\n            src=\"../../../assets/left-arrow.png\" class=\"arrow-left\"></button>\n\n        </div>\n        <div *ngIf=\"currentDialogSpeaker==0\"\n             class=\"options-container\">\n          <div class=\"options-container-text\">Pick a statement to say to\n            the committee (Click on transcript to view previous conversation)\n          </div>\n          <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"answer\">\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let option of answerOptions\" [value]=\"option\">\n              {{option.text}}\n            </mat-radio-button>\n          </mat-radio-group>\n          <div class=\"submit-button-container\">\n            <button class=\"submit\" (click)=\"submitAnswer()\">Submit</button>\n            <div *ngIf=\"showError()\" class=\"error\"><img class=\"warning-icon\" src=\"../../../assets/warning.png\">Please\n              choose an option\n            </div>\n\n          </div>\n\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/simulated-meeting/game/sm-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulatedMeetingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sm_game_service__ = __webpack_require__("../../../../../src/app/simulated-meeting/game/sm-game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_page_main_page_service__ = __webpack_require__("../../../../../src/app/simulated-meeting/main-page/main-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cv_dialog_cv_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/cv-dialog/cv-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__casestudy_dialog_casestudy_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/casestudy-dialog/casestudy-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__panelist_dialog_panelist_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/panelist-dialog/panelist-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transcript_sm_transcript_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/game/transcript/sm-transcript.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__exit_exit_component__ = __webpack_require__("../../../../../src/app/exit/exit-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__complete_activity_complete_activity_component__ = __webpack_require__("../../../../../src/app/complete-activity/complete-activity.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SimulatedMeetingComponent = (function () {
    function SimulatedMeetingComponent(service, router, route, candidateService, dialog) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.candidateService = candidateService;
        this.service = service;
    }
    SimulatedMeetingComponent.prototype.ngOnInit = function () {
        this.clicked = false;
        this.progressValue = 0;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.selectedPanelist = this.id - 1;
        this.getDialoguesForPanelist();
        this.getCandidate();
        this.getSpeakerName(this.currentDialogSpeaker);
    };
    SimulatedMeetingComponent.prototype.getCandidate = function () {
        var _this = this;
        this.candidateService.getCandidates().then(function (candidates) {
            _this.candidate = candidates[_this.selectedPanelist];
        });
    };
    SimulatedMeetingComponent.prototype.getDialoguesForPanelist = function () {
        var _this = this;
        this.service.getDialogues().then(function (dialoges) {
            _this.dialoges = dialoges;
            _this.dialogesForPanelist = _this.dialoges[_this.selectedPanelist];
            _this.currentId = _this.dialogesForPanelist.conversation[0].statement[0].id;
            _this.currentDialogStatementKey = _this.dialogesForPanelist.conversation[0].statementKey;
            _this.currentDialogContent = _this.dialogesForPanelist.conversation[0].statement[0].text;
            _this.currentDialogSpeaker = _this.dialogesForPanelist.conversation[0].speaker;
            _this.nextDialogStatementKey = _this.dialogesForPanelist.conversation[0].statement[0].next;
            _this.panelImage = _this.dialogesForPanelist.conversation[0].statement[0].image;
            _this.reference = _this.dialogesForPanelist.conversation[0].statement[0].reference;
            _this.speakerImage = _this.dialogesForPanelist.conversation[0].statement[0].speaker_image;
            _this.dialogSequence = [{
                    currentDialogContent: "",
                    currentDialogSpeaker: undefined,
                    currentDialogStatementKey: undefined,
                    nextDialogStatementKey: undefined,
                    panelImage: undefined,
                    speaker_image: undefined,
                    currentId: undefined,
                    reference: [{
                            url: undefined,
                            desc: undefined
                        }]
                }];
            _this.dialogSequence.pop();
            _this.dialogSequence.push({
                "currentDialogContent": _this.currentDialogContent,
                "currentDialogSpeaker": _this.currentDialogSpeaker,
                "currentDialogStatementKey": _this.currentDialogStatementKey,
                "nextDialogStatementKey": _this.nextDialogStatementKey,
                "panelImage": _this.panelImage,
                "reference": _this.reference,
                "speaker_image": _this.speakerImage,
                "currentId": _this.currentId
            });
            _this.progressStep = 100 / _this.dialogesForPanelist.conversation.length;
            _this.progressValue = _this.currentId * _this.progressStep;
            _this.getSpeakerName(_this.currentDialogSpeaker);
        });
    };
    SimulatedMeetingComponent.prototype.getSpeakerName = function (currentDialogSpeaker) {
        if (this.selectedPanelist == 0) {
            if (currentDialogSpeaker == 1) {
                this.panelSpeakerName = "Speaker is Al Smith";
            }
            else if (currentDialogSpeaker == 2) {
                this.panelSpeakerName = "Speaker is Jason";
            }
            else if (currentDialogSpeaker == 3) {
                this.panelSpeakerName = "Speaker is Karen";
            }
            else if (currentDialogSpeaker == 0) {
                this.panelSpeakerName = "You are the speaker";
            }
        }
        else if (this.selectedPanelist == 2) {
            if (currentDialogSpeaker == 1) {
                this.panelSpeakerName = "Speaker is Georgia Green";
            }
            else if (currentDialogSpeaker == 2) {
                this.panelSpeakerName = "Speaker is Caroline Wong";
            }
            else if (currentDialogSpeaker == 3) {
                this.panelSpeakerName = "Speaker is Susan Tomie";
            }
            else if (currentDialogSpeaker == 0) {
                this.panelSpeakerName = "You are the speaker";
            }
        }
        else if (this.selectedPanelist == 1) {
            if (currentDialogSpeaker == 1) {
                this.panelSpeakerName = "Speaker is Katherine Sloan";
            }
            else if (currentDialogSpeaker == 2) {
                this.panelSpeakerName = "Speaker is Joe Wynn";
            }
            else if (currentDialogSpeaker == 3) {
                this.panelSpeakerName = "Speaker is Mohammad Shaban";
            }
            else if (currentDialogSpeaker == 0) {
                this.panelSpeakerName = "You are the speaker";
            }
        }
    };
    SimulatedMeetingComponent.prototype.clickOnNextButton = function () {
        if (this.currentId === this.dialogesForPanelist.conversation.length) {
            this.openCompleteActivityDialog();
        }
        this.currentDialogStatementKey = this.nextDialogStatementKey;
        this
            .createOptionsList();
        this.getSpeakerName(this.currentDialogSpeaker);
    };
    SimulatedMeetingComponent.prototype.createOptionsList = function () {
        for (var _i = 0, _a = this.dialogesForPanelist.conversation; _i < _a.length; _i++) {
            var conversation = _a[_i];
            if (conversation.statementKey === this.currentDialogStatementKey) {
                this.currentId = conversation.statement[0].id;
                this.progressValue = this.currentId * this.progressStep;
                console.log(this.progressValue);
                this.currentDialogContent = conversation.statement[0].text;
                this.currentDialogSpeaker = conversation.speaker;
                this.nextDialogStatementKey = conversation.statement[0].next;
                this.panelImage = conversation.statement[0].image;
                this.reference = conversation.statement[0].reference;
                this.speakerImage = conversation.statement[0].speaker_image;
                this.answerOptions = [{
                        "statementKey": "",
                        "speaker": undefined,
                        "next": "",
                        "text": ""
                    }];
                this.answerOptions.pop();
                if (conversation.statement.length != 1) {
                    this.currentDialogContent = null;
                    for (var _b = 0, _c = conversation.statement; _b < _c.length; _b++) {
                        var i = _c[_b];
                        this.answerOptions.push(i);
                    }
                }
            }
        }
        this.dialogSequence.push({
            "currentDialogContent": this.currentDialogContent,
            "currentDialogSpeaker": this.currentDialogSpeaker,
            "currentDialogStatementKey": this.currentDialogStatementKey,
            "nextDialogStatementKey": this.nextDialogStatementKey,
            "panelImage": this.panelImage,
            "currentId": this.currentId,
            "reference": this.reference,
            "speaker_image": this.speakerImage
        });
    };
    SimulatedMeetingComponent.prototype.clickOnBackButton = function () {
        this.dialogSequence.pop();
        var previousDialog = this.dialogSequence.pop();
        this.nextDialogStatementKey = previousDialog.nextDialogStatementKey;
        this.currentDialogStatementKey = previousDialog.currentDialogStatementKey;
        this.createOptionsList();
        this.getSpeakerName(this.currentDialogSpeaker);
    };
    SimulatedMeetingComponent.prototype.showError = function () {
        return this.answer == null && this.clicked == true;
    };
    SimulatedMeetingComponent.prototype.submitAnswer = function () {
        this.clicked = true;
        if (this.answer != null) {
            this.currentDialogContent = this.answer.text;
            this.dialogSequence.pop();
            this.dialogSequence.push({
                "currentDialogContent": this.currentDialogContent,
                "currentDialogSpeaker": 0,
                "currentDialogStatementKey": this.currentDialogStatementKey,
                "nextDialogStatementKey": this.nextDialogStatementKey,
                "panelImage": this.panelImage,
                "currentId": this.currentId,
                "reference": this.reference,
                "speaker_image": this.speakerImage
            });
            this.currentDialogStatementKey = this.answer.next;
            this.createOptionsList();
            this.getSpeakerName(this.currentDialogSpeaker);
            this.clicked = false;
            this.answer = null;
        }
    };
    SimulatedMeetingComponent.prototype.openTranscriptDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__transcript_sm_transcript_component__["a" /* SimulatedMeetingTranscriptComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.dialogSequence = this.dialogSequence;
        instance.name = this.candidate.name;
        instance.currentId = this.currentId;
        instance.maxLength = this.dialogesForPanelist.conversation.length;
    };
    SimulatedMeetingComponent.prototype.openPanelistBio = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__panelist_dialog_panelist_dialog_component__["a" /* PanelistDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.committee_members = this.candidate.committee_members;
    };
    SimulatedMeetingComponent.prototype.openCvDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__cv_dialog_cv_dialog_component__["a" /* CvDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.selectedCandidate = this.candidate;
    };
    SimulatedMeetingComponent.prototype.openExitDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__exit_exit_component__["a" /* ExitDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.activity = 1;
    };
    SimulatedMeetingComponent.prototype.openCompleteActivityDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__complete_activity_complete_activity_component__["a" /* CompleteActivityDialogComponent */], { disableClose: true });
        var instance = dialogRef.componentInstance;
        this.dialogSequence.pop();
        instance.completed = true;
        instance.dialogSequence = this.dialogSequence;
        instance.name = this.candidate.name;
        instance.currentId = this.currentId;
        instance.maxLength = this.dialogesForPanelist.conversation.length;
    };
    SimulatedMeetingComponent.prototype.openCasestudyDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__casestudy_dialog_casestudy_dialog_component__["a" /* CaseStudyDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.selectedCandidate = this.candidate;
    };
    SimulatedMeetingComponent.prototype.goBack = function () {
        this.router.navigate(['/simulated-meeting']);
    };
    SimulatedMeetingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sm-game',
            template: __webpack_require__("../../../../../src/app/simulated-meeting/game/sm-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/simulated-meeting/game/sm-game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__sm_game_service__["a" /* SMGameService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__main_page_main_page_service__["a" /* MainPageService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatDialog */]])
    ], SimulatedMeetingComponent);
    return SimulatedMeetingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/simulated-meeting/game/sm-game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SMGameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_page_candidates__ = __webpack_require__("../../../../../src/app/simulated-meeting/main-page/candidates.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sm_dialogues__ = __webpack_require__("../../../../../src/app/simulated-meeting/game/sm-dialogues.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SMGameService = (function () {
    function SMGameService() {
    }
    /*getCandidateDialogues():Promise<SMDialogue[]> {
      return Promise.resolve(SMDIALOGUES);
    }*/
    SMGameService.prototype.getCandidates = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__main_page_candidates__["a" /* CANDIDATES */]);
    };
    SMGameService.prototype.getDialogues = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__sm_dialogues__["a" /* SMDIALOGUES */]);
    };
    SMGameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SMGameService);
    return SMGameService;
}());



/***/ }),

/***/ "../../../../../src/app/simulated-meeting/game/transcript/sm-transcript.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n\n}\n\n.dialog {\n  min-height: 50px;\n  text-align: left;\n  /* width: inherit; */\n  border-radius: 5px;\n  border: solid;\n  border-width: 1px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.19);\n  position: relative;\n  border-color: #0D3055;\n}\n\n.dialog-committee {\n  min-height: 50px;\n  text-align: left;\n  /* width: inherit; */\n  border-radius: 5px;\n  border: solid;\n  border-width: 1px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2), 0 1px 0px 0 rgba(0, 0, 0, 0.19);\n  position: relative;\n  border-color: #EFB211;\n}\n.image {\n  height: 40px;\n  width: 40px;\n}\n\n.info-icon {\n  position: absolute;\n  right: 10px;\n  top: 6px;\n  width: 15px;\n  height: 15px;\n}\n\n.info-icon:hover {\n  cursor: pointer;\n}\n\n.dialog-content-transcript {\n  padding-right:12px;\n}\n\n.sub-heading {\n  font-size:12px;font-weight:300;\n}\n\n.sub-heading-icon{\n  width:12px;\n}\n\n.references {\n  font-size: 12px;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simulated-meeting/game/transcript/sm-transcript.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"close\" (click)=\"onNoClick()\" src=\"../../../assets/multiply.png\">\n</div>\n<h2 mat-dialog-title>Simulated Meeting Transcript: {{name}}</h2>\n<h5 class=\"sub-heading\"><i>Click on </i><img class=\"sub-heading-icon\" src=\"../../../../assets/info.png\"><i> to view references. For more information on references go to <a href=\"\">resources on the website. </a></i>\n</h5>\n<hr>\n\n<mat-dialog-content>\n  <div>\n    <div class=\"row\" *ngFor=\"let dialog of dialogSequence\">\n\n      <div *ngIf=\"dialog.currentDialogSpeaker!=0\" class=\"col-md-1\">\n        <img [src]=dialog.speaker_image class=\"image\">\n      </div>\n      <div *ngIf=\"dialog.currentDialogSpeaker!=0\" class=\"col-md-8 dialog\"\n           (click)=\"changeState(dialog)\">\n        <p class=\"dialog-content-transcript\">{{dialog.currentDialogContent}}</p>\n        <img *ngIf=\"dialog.reference[0].desc.length!=0\" src=\"../../../../assets/info.png\"\n             class=\"info-icon\">\n\n        <div *ngIf=\"dialog.clicked==true\" class=\"references\">\n          <div *ngFor=\"let reference of dialog.reference\">\n\n\n            <div><i>{{reference.desc}}</i>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"dialog.currentDialogSpeaker==0\" class=\"offset-md-5 col-md-6 dialog-committee\">\n        {{dialog.currentDialogContent}}\n      </div>\n      <div *ngIf=\"dialog.currentDialogSpeaker==0\" class=\" col-md-1\">\n        <img [src]=dialog.speaker_image class=\"image\">\n      </div>\n    </div>\n  </div>\n</mat-dialog-content>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/simulated-meeting/game/transcript/sm-transcript.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulatedMeetingTranscriptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SimulatedMeetingTranscriptComponent = (function () {
    function SimulatedMeetingTranscriptComponent(dialogRef, data, router, route) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.route = route;
    }
    SimulatedMeetingTranscriptComponent.prototype.onNoClick = function () {
        if (this.completed == true) {
            this.router.navigate(['/simulated-meeting']);
        }
        this.dialogRef.close();
    };
    SimulatedMeetingTranscriptComponent.prototype.changeState = function (dialog) {
        console.log(dialog);
        if (dialog.clicked == true) {
            dialog.clicked = false;
        }
        else if (dialog.clicked == null || dialog.clicked == false)
            dialog.clicked = true;
    };
    SimulatedMeetingTranscriptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sm-transcript',
            template: __webpack_require__("../../../../../src/app/simulated-meeting/game/transcript/sm-transcript.component.html"),
            styles: [__webpack_require__("../../../../../src/app/simulated-meeting/game/transcript/sm-transcript.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SimulatedMeetingTranscriptComponent);
    return SimulatedMeetingTranscriptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/simulated-meeting/main-page/candidates.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANDIDATES; });
var CANDIDATES = [
    {
        "candidate_id": 1,
        "name": "Jamie Perez",
        "short_desc": "Ph.D. in Materials Science and Engineering",
        "image": "../../../assets/JP.png",
        "career_account": [
            "Jamie Perez, Ph.D. in Materials Science and Engineering from MIT, joins a prestigious research university as a tenure-track assistant professor after completing post-docs at Berkeley and Northwestern. At the time of hiring, the search committee notes a one-year gap between post-docs, a time when Perez studied as a Fulbright Scholar at a European university. Support for his faculty slot is earmarked from the Dean’s office for the first two years of the appointment by virtue of an underrepresented faculty hiring initiative.",
            "Perez’s start-up package was average for faculty in that unit, but there are some glitches in finding adequate lab space and equipment. While he had been verbally assured during his negotiations that he could share the lab of a senior professor, Perez is told upon arrival by the senior faculty member in his interest group that the senior faculty member’s group has priority, and he has limited Perez and his students to two hours per week in that lab. The chair then sent an e-mail to Perez about a change of plans, suggesting that he share a lab with another entering assistant professor until the following year, when the senior colleague moved to a new building on campus. Although somewhat constraining to the research programs of both individuals, this logistical arrangement encouraged the two new colleagues to collaborate on a small research project with some industry funding while also continuing their individual research agendas. The chair recommended at the first annual review that Perez “pay greater attention to research funding in areas more closely linked to the unit’s focus” and “try harder” to attract graduate students.",
            "In year two, Perez established a functioning independent lab, attracting a small number of graduate students, and published a paper in a journal about teaching undergraduates and one (with two collaborators) in a significant journal. The small amount of industry funding for collaborative research continued, and Perez was again counseled by his chair during the annual review to pursue more funding. In year three, Perez coauthored papers in two important journals, and worked as the sole materials science and engineering faculty member on a multidisciplinary project with four other faculty members from different engineering and science units. The collaborative, five-year project attracted $5 million funding from the National Science Foundation and supported one post doc and three graduate students in Perez’s lab. During this period, Perez taught only relatively large undergraduate service classes, as senior professors in his interest group claimed the specialty and advanced courses in his area (references on mentoring).",
            "The third-year review of Perez’s work resulted in a somewhat mixed evaluation. The school chair counseled Perez to “keep up the good work with teaching and service” but expressed his concern that Perez had not been able to secure more than a minimum amount of individual funding despite a very reasonable record of publication in top quality journals. The chair was also concerned that Perez had trouble retaining the more marginal graduate students assigned him (the more promising students were assigned to the most senior faculty in the same interest group). During his review meeting, Perez requested that his chair exercise leadership over the interest group so that he can teach graduate courses in his field and therefore attract more and better graduate students. The chair suggested that perhaps Perez “instead ought to consider devoting more time to individual research, especially in an area more closely related” to the unit’s interests and strategic plans to supplement his collaborative work. The chair also expressed concern that Perez was not playing a leadership role in the interaction with other departments on the large NSF grant.",
            "By the time of tenure review, it is clear that Perez did not emphasize pursuing any individual grant funding, as his chair suggested. Perez remained a popular teacher, according to evaluations of MSE majors, and a valued advisor as attested by some graduate students. He was somewhat more inclined than other faculty members in the unit to take on certain advising and other committee responsibilities. Although he attracted little individual funding, Perez was able to keep up a moderately active and fairly well-funded research program in an area not well developed in the unit because of the multi-disciplinary collaboration.",
            "In the unit promotion and tenure committee, questions are raised regarding Perez’s future funding potential as an individual researcher, as a teacher of graduate students, and the value of his area of research for the unit. As a member of the committee, how would you respond to these concerns and ensure that Perez receive a fair hearing?"
        ],
        "dossier": {
            "educational_background": [
                "B.S. Materials Engineering, UC-Santa Barbara",
                "M.S. Chemistry, UC-Santa Barbara",
                "Ph.D. Materials Science and Engineering, UC-Berkeley, 5 years ago"
            ],
            "publications": [
                "Refereed: 17 articles, 15 co-authored with students, 11 co-authored with other faculty (7 in chemistry, 4 in MSE, dominantly in journals favored by chemists); 6 articles from PhD work, co-authored with major advisor, Dr. Sylvia Lampaninia.",
                "Two articles appeared in Journal of Engineering Education within the past 14 months, one on a controlled study of class performance with an without use of multimedia tools and videos to assist physical understanding of crystal structures and defects in solids, and the other on use of web-based media to provide a philosophical foundation for instruction based on analogies from other fields."
            ],
            "conference_proceedings": [
                "11, 6 in past two years"
            ],
            "presentations": [
                "5 seminars, 2 invited"
            ],
            "research": [
                "Perez' doctoral research focused on thin film deposition and measurement of thin film properties, in part three years this has been refocused towards molecular scaffolding for growth of structured, chemically activated surfaces that can be used for environmental sampling."
            ],
            "funding": {
                "funding_resources": [
                    "70k$ total first two years, two single investigators grants",
                    "$230k third year, as Perez' component of collaborative projects with Profs. Lopez and Rodriquez of Chemistry",
                    "$350k years 4-5, as Perez' component of a $1.3M per year interdisciplinary center funded by NSF (Perez is co-investigator,with Lopez, Rodriquez and Johnson, Rita Lopez is PI/PD) ",
                    "$35k from industry funding, year 4, Co-PI with Dr. Sharikh Bahouali of Environmental Engineering who serves as project director",
                    "$25k from Gates Institute for Web-Based Instruction to develop Instruction by Analogy: Mining the Web for Parallel Examples"
                ],
                "extra_funding": "There is no other funding in MSE related to Perez' primary interest area"
            },
            "graduate_student_advisement": {
                "opening_line": "4 PhD students in-progress, 1 of whom passed MSE qualifying examination",
                "advisement": [
                    "2 of these PhD students are co-advised by Dr. Rodriquez in Chemistry, and are registered in Chemistry",
                    "2 MS students graduated, 2 more MS students in progress (all MSE)"
                ]
            },
            "teaching": [
                "has taught MSE 272, Introduction to Structure of Materials(joint with two other MSE faculty, team-taught course). Has taught sections of senior level design course in MSE. Has co-developed and co-taught Chemistry/MSE 745, Surface Chemistry and Multifunctionality, with Scott, Rodriquez from Chemistry. Highly ranked in MSE 272 by student surveys (upper quartile), ranked above average by senior design student surveys, and receives highly responses from graduate students in CHEM/MSE 745. Students often comment that they can identify with Perez. Students often comment on positive use of multimedia and web-based tools in lectures."
            ],
            "service": [
                "Faculty Advisor, ASM Chapter (10 MSE students involved)",
                "Member,MSE Computer Committee, past three years"
            ],
            "honors_and_awards": [
                "Best Paper, APS meeting two years ago, (co-authors, in order to listing:Lopez,Perez, Rodriquez)",
                "Certificate of merit, center for innovation in teaching, Mythical Tech"
            ]
        },
        "committee_members": [{
                "committee_id": 1,
                "name": "Al Smith",
                "image": "../../../assets/Al.png",
                "description": "Al Smith, chair of unit reappointment, promotion and tenure (RPT) committee for the third time, member for the tenth. Does not work in Perez' area. Has a history of research in a classical, core area of materials engineering well-funded by government and industry."
            }, {
                "committee_id": 2,
                "name": "Jason Dayan",
                "image": "../../../assets/JD.png",
                "description": "Jason Dayan, member of the committee for the second time. Works in a traditional core area of materials engineering, often as a collaborator with Smith. Fairly significant funding."
            }, {
                "committee_id": 3,
                "name": "Karen Kulver",
                "image": "../../../assets/KK.png",
                "description": "Karen Kulver, member of the committee for the third time. Works in another area of materials that allows some collaboration with chemistry faculty. Significant funding."
            }]
    },
    {
        "candidate_id": 2,
        "name": "Samia Mansour",
        "short_desc": "Ph.D. in Biochemistry",
        "image": "../../../assets/SM.png",
        "career_account": [
            "Samia Mansour, Ph.D. in Biochemistry from the Johns Hopkins University, was hired as an assistant professor by the Department of Physical Sciences at a prestigious research university. Mansour’s research field has long been central to the university; she joined a number of colleagues who do similar and complementary work in the same field. Her start-up package was slightly better than average; she had four offers to consider at leading universities. Mansour was immediately asked to participate in a campus committee charged to study why so few women are employed in science during her first year. In her second and third years, she was invited to serve on two similar committees at the university level.",
            "During her first three years at the university, Mansour produced an extraordinary number of publications in the top-ranked journals in her field, including one prize-winning paper. She wrote most of her papers with a small group of faculty and graduate students, but some represented collaborations with just one or two individuals, typically graduate students.",
            "Mansour’s funding level as an assistant professor was within the average range for her field and slightly higher than the departmental average. She was able to secure a lab budget based on a National Science Foundation (NSF) grant for new faculty in her area as well as some training grants for individual graduate students. She also partnered with colleagues in developing novel methods of drug delivery on a moderate grant from a pharmaceutical company.",
            "In her third year, she won an NSF Faculty Early Career Development Award, largely for writing one paper that garnered much national attention for its novel approach to a particular problem. Near the beginning of her fourth year, she was notified by the NSF that she was selected as a recipient of the prestigious Presidential Early Career Award (PCASE).",
            "Her undergraduate and graduate students generally awarded her good teaching scores. Evaluations for the intro-level undergraduate course earned some negative comments from a few students about her casual attire; as a result, Mansour upgraded her wardrobe and began to wear tailored clothing. She attracted excellent graduate students to her lab, encouraging some undergraduates to continue graduate study at the university and welcoming new graduate students. At the end of her third year, she was nominated for a college teaching award by the undergraduate coordinator with a recommendation from the graduate director who cited her “dedication” and “long hours of working in her lab along with graduate students.”",
            "In addition to her work on women’s issues, Mansour was appointed to a number of unit and college committees concerning visiting speakers, honors, and searches. She became especially active in a professional society and in her college’s network for junior faculty in sciences, for which she helped organize a session on grant-writing for new faculty. Issues concerning women in her unit, and to some extent in sciences more generally, fell on her shoulders, as manifested by numerous invitations by chairs and deans at her university to address student and alumni groups.",
            "During her fourth year, Mansour consulted with her chair about coming up for an early decision on promotion and tenure. As she had established a body of work and a set of achievements comparable to or exceeding others in her field in her unit, she and her chair were confident of her chances to be promoted and receive tenure on this accelerated schedule. He had found her agreeable to serve in a broad range of roles at his request and considered this along with her PECASE as indicative of well-balanced roles and strong scholarly potential.",
            "At the beginning of her fifth year, Mansour’s case came up for review in her department. The letters of reference in her promotion and tenure dossier were generally good, except for one taking issue with her celebrated paper. The one negative review avoided addressing Mansour’s entire scholarly output; instead, the reviewer took an extremely hostile approach to the argument of the celebrated paper. One member of the promotion and tenure committee noted that this review was so detailed that it could have been published as an oppositional argument in a journal along with Mansour’s paper. This reviewer also commented negatively about Mansour’s style of presenting papers at meetings of a professional society, raising some suspicions of a personal grudge. Another reviewer commented as much on the value of Mansour’s service to the profession, especially for women in her field, as on the value of her scholarly research.",
            "The unit promotion and tenure committee is split about whether to emphasize the negative review or the one privileging service and whether Mansour’s case should be forwarded to the next level. One member expresses the view that her case should be eliminated from further consideration this year, ideally by having the chair of the department speak with Mansour about the negative review so the candidate can withdraw the dossier. This member suggests that next year the hostile reviewer and the one who supplied the review focusing on Mansour’s service should not be invited to submit reviews and that her case would have a better chance of success if it comes up according to schedule, rather than early.",
            "As a member of the unit-level promotion and tenure committee, what consideration would you give these reviews in evaluating Mansour’s scholarship and career? What would you suggest regarding whether Mansour’s case ought to be considered early or during the next year?"
        ],
        "dossier": {
            "educational_background": [
                "B.S. Biology, SUNY-Buffalo",
                "Ph.D. Biochemistry, University of Wisconsin-Madison",
                "Post Doc, Biosciences Institute, Oxford University"
            ],
            "publications": [
                "Refereed: 24 articles, 12 in past two years (with students), 6 from post doc experience, 3 from Ph.D. work (co-authored with R. Pilens)",
                "Conference Proceedings: 14, 7 in the past two years",
                "Presentations: 12 seminars, 8 at other universities"
            ],
            "conference_proceedings": [],
            "presentations": [],
            "research": [
                "Mansour's doctoral advisor, Dr. Ross Pikens, is a leading expert in the measurement of electrochemical response of various cells to external stimula such as mechanical force, imposition of electrical and magnetic fields, and effects of rapid temperature change. Mansour has continued this research in a broad sense, having focused on effects of cryogenic preservation of tissue during her post doc, subsequently delving into development of in situ measurement systems for measuring cell responses under a wide range of stimuli."
            ],
            "funding": {
                "funding_resources": [
                    "Start-up package was used to develop experimental apparatus and acquire supporting computer control and data acquisition. Obtained multi-year NSF grant for $220k. In second year, was awarded a university Novel Directions investigator grant of $100l in third year, and was awarded a five-year, $500k young investigator grant from NIH in fourth year."
                ],
                "extra_funding": ""
            },
            "graduate_student_advisement": {
                "opening_line": "",
                "advisement": [
                    "2 post doctoral researchers",
                    "3 Ph.D. students in-progress, 1 Ph.D. graduated (recipient of the university's Chapter of Sigma XI Best Ph.D. Thesis Award)"
                ]
            },
            "teaching": [
                "Has taught BIO 272 and BICHEM 338, an indtroductory biological systems course and a mid-level cell biology course, respectively..",
                "Has taught BIOCHEM 720, graduate course in mechanics and physiology of cells",
                "Mixed response from students, many cite her degree of organization as exemplary; others point to difficulty in understanding her lectures (speaking at too high a level); several students complain that she seems unaccustomed to American styles and fashion, and that her manner is frustrating in combination with difficulty to comprehend her lectures"
            ],
            "service": [
                "Chair, Cell Behavior sub-committee, Division of Biochemistry, American Chemists Society",
                "Organizer of sessions at two major international symposia",
                "Member, College of Sciences Committee on Faculty Development",
                "Member, University Committee on Women in Academia: Future Directions",
                "Member, University Committee on Understanding Family Issues"
            ],
            "honors_and_awards": [
                "B.F. Sloan Prize for one of five best papers in a given year, Journal of Chemistry and Biochemistry, Mansour, S.R. and C.K. Wyler Affecting Cellular Electrochemical Communication by Mechanical Stimuli",
                "Voted Best Organized Instructor by School of Biochemistry seniors, annual honors assembly and dinner."
            ]
        },
        "committee_members": [{
                "committee_id": 1,
                "name": "Kathryn Sloan",
                "image": "../../../assets/KS.png",
                "description": "chair of RPT: endowed chair, on committee many times, denied early tenure, but fair-minded about concept of early tenure"
            }, {
                "committee_id": 2,
                "name": "Joe Wynn",
                "image": "../../../assets/JW.png",
                "description": "member with some experience on RPT, ill-disposed toward star system"
            }, {
                "committee_id": 3,
                "name": "Mohammed Shaban",
                "image": "../../../assets/MS.png",
                "description": "newly tenured, first time on RPT, protects/upholds procedures, not tenured early"
            }]
    },
    {
        "candidate_id": 3,
        "name": "Patty Shen",
        "short_desc": "Ph.D. in Computational and Neural Systems",
        "image": "../../../assets/PS.png",
        "career_account": [
            "Patty Shen, Ph.D. in Computational and Neural Systems from the California Institute of Technology, entered a prestigious research university as an assistant professor. She specialized in distributed computing and computation in neural and biological systems within the biomedical engineering group. Her start-up package was higher than average as her field was relatively new and required the purchase of some fairly expensive parallel computing and visualization equipment. Because Shen considered a competing offer, the department engaged in a bidding war to induce her to accept the appointment. Three other assistant professors in closely related areas were hired in the same year with packages not as generous as Shen\\'s . At the end of Shen\\'s first year, her chair complimented her on establishing \\\"a good rapport \\\" with her graduate students and for her success in publishing two papers based on her group\\'s work, with two more in press.\r\n",
            "Publishing additional papers in Nature, Neuron, The Journal of Computational Biology, Current Biology,and elsewhere, Shen continued her steady publication record through her next two years. She also took on responsibility for teaching one of the core courses for the undergraduate program and for introducing a key new graduate course in her area, earning above average and excellent evaluation scores from students. Exit interviews of seniors conducted by the chair indicated that all students appreciated Shen’s thorough approach and that many, especially women, found her to be a valuable role model.",
            "In her third year, Shen won an NSF Faculty Early Career Award. In addition, during her probationary period, Shen and two junior colleagues, along with two senior professors, developed a new center in biocognitive processing that was nurtured by the university before attracting a good deal of National Science Foundation funding. ",
            "Anticipating the birth of a child during the summer following her third academic year at the university, Shen requested during the prior spring two considerations: to receive an unpaid leave of absence during the subsequent fall term and to be released from teaching duties during the following spring under provisions of the university’s Active Services Modified Duties Procedure. In lieu of teaching responsibilities in the spring, she proposed to design a new elective for upper-division students in her field and to continue working with the center that she helped develop. Her requests were granted, thereby stopping her tenure clock for one year. ",
            "During the year of her leave of absence and modified duties, Shen laid out plans for the new course and published two papers that had been in process. Unanticipated post-childbirth medical complications necessitated a long period of medical therapy, and she was unable to devote much time to her research during the time away from teaching as she was also coping with the demands of an infant. A private person, Shen did not share information about her medical condition with her colleagues, excepting her chair and dean whose confidence was requested because Shen needed them to support her need for a particular schedule and for a limited set of service responsibilities.",
            "During the following year, Shen’s official fourth year of service, she returned to teaching and earned speaking invitations at European and Asian seminars. It is in this year (the year after her child is born) that her publication record revealed a demonstrable gap: she had not submitted any publications and none were published in that year. Her own medical problems diminished her ability to mount focused technical efforts in the year following her leave. ",
            "By her official fifth year, Shen's medical problems abated, and she was able to accelerate her research productivity. In this year, she published and prepared more papers than any other professor in her unit and she received excellent evaluations from her undergraduate and graduate students, although she was able to contribute only minimal service efforts to her department given her family schedule. As her tenure clock was stopped for one year, Shen would have come up for tenure in her official fifth year. Because of the earlier gap in her publication, her chair advised her instead to wait until the following year (her official sixth) to come up for promotion and tenure evaluation. Somewhat reluctantly, Shen agreed.",
            "By the time she came up for tenure (in her official sixth year and seven years after entering the university), her rate of publication dramatically increases, and her total record — in terms of the quantity and the quality of scholarly papers, her teaching evaluations and contributions, and her service — resembles those of the other assistant professors coming up for evaluation at the same time. Letters from reviewers indicated that Shen has a strong scholarly reputation and that her work has key significance for her field. One reviewer mentioned Shen’s medical difficulties following childbirth, an admission surprising the committee members who had not been previously informed. Some committee members had noted in earlier, initial committee discussions that Shen seemed to “appear and disappear” on the scene through the years, recalling lengthy periods in which she was not in attendance at faculty meetings and retreats. Her involvement in faculty committees was minimal as well.",
            "Her original cohort had already earned promotion and tenure, but Shen’s stopping of the tenure clock for one year and her decision to wait until her second opportunity delayed her case another year. As a member of her school promotion and tenure committee, how would you respond to concerns raised by another member that Shen has taken too much time to get to the same place as others under evaluation that year, that she may have accelerated her productivity over the past 12 - 14 months simply to be more competitive in the tenure process, and that she might not be able to sustain such productivity in the future?"
        ],
        "dossier": {
            "educational_background": [
                "B.S. Electrical Engineering, University of Illinois",
                "M.S. Electrical Engineering, Stanford University",
                "Ph.D. Computer Science, University of Washington"
            ],
            "publications": [
                "Refereed: 9 articles, 3 in past two years (with students), 6 from first two years, with none submitted during third year",
                "Conference Proceedings: 22,7 in past two years, 15 in first two years",
                "Presentations: 3 seminars, 2 at other universities"
            ],
            "conference_proceedings": [],
            "presentations": [],
            "research": [
                "Sen's work is in the areas of the interface of digital switching theory for high speed circuits and digital signal processing with application to vision systems and automatic target recognition. Her funding comes from DoD sources, and her work, combined elements of computational algorithms with hardware capabilities."
            ],
            "funding": {
                "funding_resources": [],
                "extra_funding": "No funding in year one, obtained $350k, three year grant from ARO in second year, has submitted three proposals for funding in the past 18 months to DoD agencies and industry, since her leave of absence"
            },
            "graduate_student_advisement": {
                "opening_line": "2 Ph.D. students in-progress, 2 M.S. students graduated, 5 M.S. students in progress",
                "advisement": []
            },
            "teaching": [
                "has taught undergraduate introductory course in computing for engineers, and undergraduate and graduate digital signal processing courses"
            ],
            "service": ["member, EE Computer Committee", "Member, EE Undergraduate Committee"],
            "honors_and_awards": ["Rhodes Scholar, Oxford University"]
        },
        "committee_members": [{
                "committee_id": 1,
                "name": "George Green",
                "image": "../../../assets/GG.png",
                "description": "experienced member, RPT, committee chair for first time"
            },
            {
                "committee_id": 2,
                "name": "Caroline Wong",
                "image": "../../../assets/CW.png",
                "description": "faculty star an RPT committee member for the first time"
            },
            {
                "committee_id": 3,
                "name": "Susan Tomel",
                "image": "../../../assets/susan-tomei.png",
                "description": "moderately experienced member of RPT"
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/simulated-meeting/main-page/main-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-page {\n  font-size: 16px;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.main-page .header {\n  font-size: 20px;\n  font-weight: 700;\n  margin-top: 20px;\n}\n\n.main-page .candidate-name {\n  font-size: 16px;\n  font-weight: 700;\n  margin-top: 15px;\n  margin-bottom: 6px;\n}\n\n.main-page .candidate-short-desc {\n  font-size: 12px;\n  margin-top: 3px;\n}\n\n.right-panel {\n  max-width: 889px;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n.activity-instruction {\n  font-size: 16px;\n}\n\n.choose-candidate-card {\n  margin-top: 12px;\n  background-color: #F5F5F5;\n  border-style: solid;\n  border-width: 13px;\n  border-color: white;\n}\n\n.candidate-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.candidate-card:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.other-panelists {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n  transition: all 200ms ease-out;\n}\n\n.other-panelists:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.selected {\n  box-shadow: 0 0 10px #EFB211;\n}\n\n.choose-candidates {\n  margin-top: -15px;\n}\n\n.candidate-img {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  height: 80px;\n  width: 80px;\n}\n\n.details-case {\n  background-color: #F5F5F5;\n  margin-top: -30px;\n\n}\n\n.view-details-left {\n  background-color: white;\n  font-size: 8px;\n  margin-left: 15px;\n  margin-right: 15px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.view-details {\n  background-color: white;\n  margin-top: 18px;\n  font-size: 12px;\n  margin-left: 48px;\n  padding-left: 0px;\n  padding-right: 0px;\n  transition: all 200ms ease-out;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.view-details:hover {\n  box-shadow: 0 0 10px #EFB211;\n  cursor: pointer;\n}\n\n.button-blue {\n  color: white;\n  font-size: 16px;\n  background-color: #0D3055;\n  margin-top: 10px;\n  text-align: center;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.50), 0 2px 2px 0 rgba(0, 0, 0, 0.5);\n}\n\n.truncate {\n  padding-left: 25px;\n  padding-right: 25px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  margin-bottom: 18px;\n  margin-top: 18px;\n}\n\n.logo {\n  display: block;\n  margin: auto;\n}\n\n.left-panel {\n  box-shadow: 0 4px 8px 0 rgba(164, 164, 164, 0.51), 0 6px 20px 0 rgba(164, 164, 164, 0.5);\n  padding-top: 20px;\n  position: relative;\n}\n\n.back-to-main-page {\n  font-size: 16px;\n  font-weight: 400;\n  border-width: 1px;\n  border-color: black;\n  background-color: white;\n  border-radius: 0;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.back-to-main-page:hover {\n  cursor: pointer;\n\n}\n\n.read-about-fellows {\n  margin-left: 15px;\n}\n\n.panelist-name {\n  margin-top: 34px;\n  font-size: 16px;\n  font-weight: 700;\n  margin-left: 10px;\n}\n\n.other-panelists {\n  background-color: white;\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.play-game {\n  margin-top: 10px;\n  font-weight: 700;\n  background-color: #0D3055;\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 16px;\n  border-radius: 5px;\n  height: 34px; /* Safari */\n  transition-duration: 0.4s;\n  float: right;\n  margin-bottom: 10px;\n}\n\n.play-game:hover {\n  background-color: #EFB211; /* Green */\n  color: white;\n  cursor: pointer;\n}\n\n.shadow {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 4px 0 rgba(0, 0, 0, 0.19);\n}\n\n.left-panel-container {\n  width: 100%;\n  height: 100%;\n}\n\n.exit-activity-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.exit-activity-container {\n  color: black;\n  text-align: center;\n}\n\n.left-panel-child {\n  margin-left: 30px;\n  margin-right: 20px;\n}\n\n.cv-heading-text {\n  color: white;\n  font-size: 16px;\n  margin-left: 10px;\n}\n\n.cv-heading {\n  background-color: #0D3055;\n}\n\n.cv-snippet {\n  margin-top: 18px;\n}\n\n.case-study-heading {\n  background-color: #EFB211;\n}\n\n.case-study-heading-text {\n  color: white;\n  font-size: 16px;\n  text-align: center;\n  margin-left: 10px;\n}\n\n.committee-member-snippet {\n  margin-right: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simulated-meeting/main-page/main-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-page\">\n  <div class=\"row left-panel-container\">\n    <div class=\"col-md-3 left-panel\">\n      <div class=\"left-panel-child\">\n        <img src=\"../../../assets/logo_sm.png\" class=\"logo\">\n        <hr class=\"hr-style\">\n        <div><b>YOU ARE: </b>Committee Member 4</div>\n        <button class=\"button-blue\" (click)=\"openDialog()\">\n          COMMITTEE MEMBERS\n        </button>\n        <hr class=\"hr-style\">\n\n\n        <button class=\"back-to-main-page\" (click)=\"goBack()\">\n          <span class=\"exit-activity-container\"><img src=\"./../../../assets/left-arrow.svg\"\n                                                     class=\"exit-activity-icon\"> &nbsp;EXIT ACTIVITY</span>\n        </button>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"right-panel\">\n        <div class=\"header\">How to Play</div>\n        <div class=\"activity-instruction\">Play as the fourth member of the four-member unit-level evaluation committee\n          reviewing a Promotion and Tenure case. Your choices affect the conversation that follows.\n          <div class=\"row\" style=\"margin-top:30px;\">\n            <div class=\"col-md-1\">\n              <span style=\"font-size: 40px;float:right;color:#EAB63A\"><b>1</b></span>\n            </div>\n            <div style=\"padding-left:0px;\" class=\"col-md-2\">\n              Choose a candidate to evaluate\n            </div>\n            <div class=\"col-md-1\">\n              <span style=\"font-size: 40px;float:right;color:#EAB63A\"><b>2</b></span>\n            </div>\n            <div style=\"padding-left:0px;\" class=\"col-md-2\">\n              Read the candidate's CV and case study\n            </div>\n            <div class=\"col-md-1\">\n              <span style=\"font-size: 40px;float:right;color:#EAB63A\"><b>3</b></span>\n            </div>\n            <div style=\"padding-left:0px;\" class=\"col-md-2\">\n              Play game and be part of the conversation\n            </div>\n            <div class=\"col-md-1\">\n              <span style=\"font-size: 40px;float:right;color:#EAB63A\"><b>4</b></span>\n            </div>\n            <div style=\"padding-left:0px;\" class=\"col-md-2\">\n              Refer to transcript during and after the game\n            </div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"header\">Choose a candidate</div>\n        <div class=\"row choose-candidates\">\n          <!--class.selected will be added when we select one of the cards-->\n\n          <div class=\"col-md-4 col-lg-4 choose-candidate-card\"\n               *ngFor=\"let candidate of candidates\"\n               (click)=\"onSelect(candidate)\">\n            <div class=\"row candidate-card\" [class.selected]=\"candidate===selectedCandidate\">\n              <div class=\"col-md-4\">\n                <img class=\"candidate-img\" [src]=candidate.image alt=\"{{candidate.name}} image\">\n              </div>\n              <div class=\"col-md-8\">\n                <div class=\"candidate-name\">{{candidate.name}}</div>\n                <div class=\"candidate-short-desc\">{{candidate.short_desc}}</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"header\">Details of case</div>\n        <br>\n        <div class=\"details-case\">\n          <div class=\"row\">\n            <div *ngIf=\"selectedCandidate!=null\" class=\"col-md-5 col-lg-5 view-details\" (click)=\"openCvDialog()\">\n              <div class=\"\">\n                <div class=\"button\" class=\"cv-heading\">\n                  <span class=\"cv-heading-text\">Curriculum Vitae</span>\n                </div>\n                <div class=\"cv-snippet\">\n\n                  <ul>\n                    <li>{{selectedCandidate.dossier.educational_background[0]}}</li>\n                    <li>{{selectedCandidate.dossier.educational_background[1]}}</li>\n                  </ul>\n\n                  <div style=\"float:right;padding-bottom: 10px; padding-right:10px;font-size: 13px;\" (click)=\"openCvDialog()\"><u>Read More..</u></div>\n\n                </div>\n\n              </div>\n            </div>\n            <div *ngIf=\"selectedCandidate!=null\" class=\"col-md-5 col-lg-5 view-details\" (click)=\"openCasestudyDialog()\">\n              <div class=\"\">\n                <div class=\"button case-study-heading\">\n                  <span class=\"case-study-heading-text\">Case Study</span>\n                </div>\n                <div class=\"truncate\">\n                  {{selectedCandidate.career_account[0]}}\n                </div>\n                <div style=\"float:right;padding-bottom: 10px; padding-right:10px;font-size: 13px;\" (click)=\"openCasestudyDialog()\"><u>Read More..</u></div>\n              </div>\n            </div>\n          </div>\n          <div class=\"read-about-fellows\" *ngIf=\"selectedCandidate!=null\">\n            <div class=\"header\" style=\"font-weight: 500;\"><i>Click on any committee member to read about all of them</i></div>\n            <div class=\"row committee-member-snippet\">\n              <div class=\"col-md-4 col-lg-4\"\n                   *ngFor=\"let committee_member of selectedCandidate.committee_members\"\n                   (click)=\"setCommitteeMember(committee_member.committee_id)\">\n                <div class=\"row other-panelists\"\n                     [class.selected]=\"committee_member.committee_id===selectedCommitteeMember\">\n                  <div class=\"col-md-4\">\n                    <img class=\"candidate-img\" [src]=committee_member.image alt=\"{{committee_member.name}} image\">\n                  </div>\n                  <div class=\"col-md-8\">\n                    <div class=\"panelist-name\">{{committee_member.name}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <button class=\"play-game\" (click)=\"goToNextPage()\">Play Game</button>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/simulated-meeting/main-page/main-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_page_service__ = __webpack_require__("../../../../../src/app/simulated-meeting/main-page/main-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panelist_dialog_panelist_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/panelist-dialog/panelist-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cv_dialog_cv_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/cv-dialog/cv-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__casestudy_dialog_casestudy_dialog_component__ = __webpack_require__("../../../../../src/app/simulated-meeting/casestudy-dialog/casestudy-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainPageComponent = (function () {
    function MainPageComponent(service, router, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.router = router;
    }
    MainPageComponent.prototype.getCandidates = function () {
        var _this = this;
        this.service.getCandidates().then(function (candidates) {
            _this.candidates = candidates;
            _this.selectedCandidate = _this.candidates[0];
        });
    };
    MainPageComponent.prototype.ngOnInit = function () {
        this.getCandidates();
    };
    MainPageComponent.prototype.openCvDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__cv_dialog_cv_dialog_component__["a" /* CvDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.selectedCandidate = this.selectedCandidate;
    };
    MainPageComponent.prototype.openCasestudyDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__casestudy_dialog_casestudy_dialog_component__["a" /* CaseStudyDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.selectedCandidate = this.selectedCandidate;
    };
    MainPageComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__panelist_dialog_panelist_dialog_component__["a" /* PanelistDialogComponent */], {});
        var instance = dialogRef.componentInstance;
        instance.committee_members = this.selectedCandidate.committee_members;
    };
    MainPageComponent.prototype.setCommitteeMember = function (committeeMember) {
        this.selectedCommitteeMember = committeeMember - 1;
        this.openDialog();
    };
    MainPageComponent.prototype.onSelect = function (candidate) {
        this.selectedCandidate = candidate;
        this.selectedCommitteeMember = null;
    };
    MainPageComponent.prototype.goToNextPage = function () {
        this.router.navigate(['/simulated-meeting', this.selectedCandidate.candidate_id]);
    };
    MainPageComponent.prototype.goBack = function () {
        this.router.navigate(['/activity']);
    };
    MainPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'main-page-sm',
            template: __webpack_require__("../../../../../src/app/simulated-meeting/main-page/main-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/simulated-meeting/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__main_page_service__["a" /* MainPageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatDialog */]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/simulated-meeting/main-page/main-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__candidates__ = __webpack_require__("../../../../../src/app/simulated-meeting/main-page/candidates.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MainPageService = (function () {
    function MainPageService() {
    }
    MainPageService.prototype.getCandidates = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__candidates__["a" /* CANDIDATES */]);
    };
    MainPageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MainPageService);
    return MainPageService;
}());



/***/ }),

/***/ "../../../../../src/app/simulated-meeting/panelist-dialog/panelist-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <img class=\"close\" (click)=\"onNoClick()\" src=\"../../../assets/multiply.png\">\n</div>\n<h2 mat-dialog-title>Committee Members</h2>\n<div *ngFor=\"let member of committee_members\">\n  <h2 mat-dialog-title>{{member.name}}</h2>\n  <mat-dialog-content>\n    {{member.description}}\n  </mat-dialog-content>\n  <br>\n  <br>\n  <br>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/simulated-meeting/panelist-dialog/panelist-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelistDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/**
 * Created by imittal on 11/24/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PanelistDialogComponent = (function () {
    function PanelistDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PanelistDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PanelistDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'panelist-dialog',
            template: __webpack_require__("../../../../../src/app/simulated-meeting/panelist-dialog/panelist-dialog.component.html")
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material_dialog__["d" /* MatDialogRef */], Object])
    ], PanelistDialogComponent);
    return PanelistDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map