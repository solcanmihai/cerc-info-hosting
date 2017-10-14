webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.loadInitialValues();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_module__ = __webpack_require__("../../../../../src/app/welcome/welcome.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_dashboard_student_dashboard_module__ = __webpack_require__("../../../../../src/app/student-dashboard/student-dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_dashboard_lessons_service__ = __webpack_require__("../../../../../src/app/student-dashboard/lessons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teacher_dashboard_teacher_dashboard_module__ = __webpack_require__("../../../../../src/app/teacher-dashboard/teacher-dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_screen_news_news_service__ = __webpack_require__("../../../../../src/app/welcome/welcome-screen/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__student_dashboard_lesson_questions_service__ = __webpack_require__("../../../../../src/app/student-dashboard/lesson/questions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__student_dashboard_homework_service__ = __webpack_require__("../../../../../src/app/student-dashboard/homework.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__teacher_auth_guard__ = __webpack_require__("../../../../../src/app/teacher-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            // HttpClientModule,
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["c" /* HttpModule */],
            //User defined modules
            __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_module__["a" /* WelcomeModule */],
            __WEBPACK_IMPORTED_MODULE_5__student_dashboard_student_dashboard_module__["a" /* StudentDashboardModule */],
            __WEBPACK_IMPORTED_MODULE_7__teacher_dashboard_teacher_dashboard_module__["a" /* TeacherDashboardModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__student_dashboard_lesson_questions_service__["a" /* QuestionsService */],
            __WEBPACK_IMPORTED_MODULE_6__student_dashboard_lessons_service__["a" /* LessonsService */],
            __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_screen_news_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_12__student_dashboard_homework_service__["a" /* HomeworkService */],
            // Http,
            __WEBPACK_IMPORTED_MODULE_11__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_13__teacher_auth_guard__["a" /* TeacherAuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn() == 'false') {
            return false;
        }
        else {
            if (this.authService.getPrivileges() >= 1) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.hasLoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loggedIn = false;
    }
    AuthService.prototype.ngOnInit = function () {
    };
    AuthService.prototype.loadInitialValues = function () {
        var tmp = sessionStorage.getItem('token');
        if (tmp != undefined) {
            this.token = tmp;
            this.getInfoAboutMe();
            this.loggedIn = true;
        }
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getPrivileges = function () {
        return this.privileges;
    };
    AuthService.prototype.getInfoAboutMe = function () {
        var _this = this;
        console.log(this.token);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + this.token);
        this.http.post('https://cercinfo.herokuapp.com/api/auth/me', {}, { headers: headers }).subscribe(function (datax) {
            var dataxx = JSON.parse(datax['_body']);
            _this.userId = dataxx['user_id'];
            // console.log(dataxx);
            if (dataxx['privileges'][0] == 'student') {
                _this.privileges = 1;
                _this.router.navigateByUrl('/dashboard');
            }
            if (dataxx['privileges'][0] == 'teacher') {
                _this.privileges = 2;
                _this.router.navigateByUrl('/teacher-dashboard');
                // console.log('teacher privileges set');
            }
            _this.hasLoggedIn.emit(true);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var body = {
            email: email,
            password: password
        };
        this.privileges = 0;
        var headersx = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersx.append('Content-Type', 'application/json');
        this.http.post('https://cercinfo.herokuapp.com/api/auth/login', body, { headers: headersx }).subscribe(function (data) {
            var xdata = JSON.parse(data['_body']);
            if (xdata['token'] != undefined) {
                _this.token = xdata['token'];
                _this.loggedIn = true;
                sessionStorage.setItem('token', _this.token);
                // console.log(this.token);
                _this.getInfoAboutMe();
            }
            else {
                _this.hasLoggedIn.emit(false);
            }
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.loggedIn == false) {
            return 'false';
        }
        else {
            return this.token;
        }
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
        this.token = '';
        sessionStorage.clear();
        this.router.navigateByUrl('/');
    };
    return AuthService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AuthService.prototype, "hasLoggedIn", void 0);
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/default-footer/default-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".credits {\r\n    color: rgba(0, 0, 0, 0.2);\r\n    text-align: right;\r\n}\r\n\r\n.credits-container {\r\n    text-align: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/default-footer/default-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"site-footer\">\n    <hr>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <h5 class=\"footer-title\">Cerc informatica eMAG © 2017</h5>\n            </div>\n            <div class=\"col-sm-6 credits-container\">\n                <h5 class=\"credits\">Solcan Mihai &amp; Gasparovici Andrei © 2017</h5>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/shared/default-footer/default-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultFooterComponent = (function () {
    function DefaultFooterComponent() {
    }
    DefaultFooterComponent.prototype.ngOnInit = function () {
    };
    return DefaultFooterComponent;
}());
DefaultFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-default-footer',
        template: __webpack_require__("../../../../../src/app/shared/default-footer/default-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/default-footer/default-footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DefaultFooterComponent);

//# sourceMappingURL=default-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/not-logged-in-navigation/not-logged-in-navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/not-logged-in-navigation/not-logged-in-navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n      <div class=\"navbar-header\">\n          <a class=\"navbar-brand navbar-link\" [routerLink]=\"welcomeRoutinLink\" style=\"color:rgb(200,200,200);\">Cerc informatica eMAG</a>\n          <button class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n          <ul *ngIf=\"!loggedIn\" class=\"nav navbar-nav navbar-right\">\n              <li class=\"active\" role=\"presentation\"><a routerLink=\"/login\" id=\"login-button\" style=\"color:rgb(200,200,200);\">Log in</a></li>\n              <li role=\"presentation\"><a routerLink=\"/register\" style=\"color:rgb(200,200,200);\">Sign up</a></li>\n          </ul>\n          <ul *ngIf=\"loggedIn\" class=\"nav navbar-nav navbar-right\">\n            <li class=\"active\" role=\"presentation\"><a (click)=\"logout()\" id=\"login-button\" style=\"color:rgb(200,200,200);\">Logout</a></li>\n        </ul>\n      </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/not-logged-in-navigation/not-logged-in-navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotLoggedInNavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotLoggedInNavigationComponent = (function () {
    function NotLoggedInNavigationComponent(authService) {
        this.authService = authService;
    }
    NotLoggedInNavigationComponent.prototype.ngOnInit = function () {
        this.welcomeRoutinLink = '/';
        if (this.authService.isLoggedIn() == 'false') {
            this.loggedIn = false;
        }
        else {
            this.loggedIn = true;
            if (this.authService.getPrivileges() == 1) {
                this.welcomeRoutinLink = '/dashboard';
            }
            else if (this.authService.getPrivileges() == 2) {
                this.welcomeRoutinLink = '/teacher-dashboard';
            }
        }
    };
    NotLoggedInNavigationComponent.prototype.logout = function () {
        this.authService.logout();
        this.loggedIn = false;
    };
    return NotLoggedInNavigationComponent;
}());
NotLoggedInNavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-not-logged-in-navigation',
        template: __webpack_require__("../../../../../src/app/shared/not-logged-in-navigation/not-logged-in-navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/not-logged-in-navigation/not-logged-in-navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NotLoggedInNavigationComponent);

var _a;
//# sourceMappingURL=not-logged-in-navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_logged_in_navigation_not_logged_in_navigation_component__ = __webpack_require__("../../../../../src/app/shared/not-logged-in-navigation/not-logged-in-navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_footer_default_footer_component__ = __webpack_require__("../../../../../src/app/shared/default-footer/default-footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__not_logged_in_navigation_not_logged_in_navigation_component__["a" /* NotLoggedInNavigationComponent */], __WEBPACK_IMPORTED_MODULE_4__default_footer_default_footer_component__["a" /* DefaultFooterComponent */]],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__not_logged_in_navigation_not_logged_in_navigation_component__["a" /* NotLoggedInNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__default_footer_default_footer_component__["a" /* DefaultFooterComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/student-dashboard/homework.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeworkService = (function () {
    function HomeworkService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.contentChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    HomeworkService.prototype.ngOnInit = function () {
    };
    HomeworkService.prototype.getHomework = function () {
        var headersx = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersx.append('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('https://cercinfo.herokuapp.com/api/homework', { headers: headersx });
    };
    HomeworkService.prototype.getHomeworkById = function (id) {
        var headersx = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersx.append('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('https://cercinfo.herokuapp.com/api/homework/' + String(id), { headers: headersx });
    };
    return HomeworkService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], HomeworkService.prototype, "contentChanged", void 0);
HomeworkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], HomeworkService);

var _a, _b, _c;
//# sourceMappingURL=homework.service.js.map

/***/ }),

/***/ "../../../../../src/app/student-dashboard/homework/homework.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-dashboard/homework/homework.component.html":
/***/ (function(module, exports) {

module.exports = "<app-not-logged-in-navigation></app-not-logged-in-navigation>\n<div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n        <div class=\"jumbotron\" id=\"jumbotron-lectie\">\n            <!-- <h1>{{homeworkData?.content}} </h1> -->\n            <!-- <h4 class=\"text-center\">-{{lessonData?.user.first_name}} {{lessonData?.user.last_name}}-</h4> -->\n            <p [innerHtml]=\"homeworkData?.content\">\n                <!-- {{lessonData?.content}} -->\n                <!-- <div ></div> -->\n            </p>\n        </div>\n    </div>\n</div>\n<app-default-footer></app-default-footer>"

/***/ }),

/***/ "../../../../../src/app/student-dashboard/homework/homework.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homework_service__ = __webpack_require__("../../../../../src/app/student-dashboard/homework.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeworkComponent = (function () {
    function HomeworkComponent(homeworkService, route) {
        this.homeworkService = homeworkService;
        this.route = route;
    }
    HomeworkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.id = data['id'];
            _this.homeworkService.getHomeworkById(_this.id).subscribe(function (data) {
                data = JSON.parse(data['_body']);
                _this.homeworkData = data;
                // console.log(this.homeworkData);
            });
        });
    };
    return HomeworkComponent;
}());
HomeworkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-homework',
        template: __webpack_require__("../../../../../src/app/student-dashboard/homework/homework.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-dashboard/homework/homework.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__homework_service__["a" /* HomeworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__homework_service__["a" /* HomeworkService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], HomeworkComponent);

var _a, _b;
//# sourceMappingURL=homework.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-dashboard/lesson/lesson.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-dashboard/lesson/lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<app-not-logged-in-navigation></app-not-logged-in-navigation>\n<div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n        <div class=\"jumbotron\" id=\"jumbotron-lectie\">\n            <h1>{{lessonData?.title}} </h1>\n            <!-- <h4 class=\"text-center\">-{{lessonData?.user.first_name}} {{lessonData?.user.last_name}}-</h4> -->\n            <p [innerHtml]=\"lessonData?.content\">\n                <!-- {{lessonData?.content}} -->\n                <!-- <div ></div> -->\n            </p>\n        </div>\n        <div class=\"panel panel-default\" id=\"comments\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Comments </h3>\n            </div>\n            <div class=\"panel-body\">\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let question of questionsData; let i = index\" class=\"list-group-item comment\">\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <div class=\"container-fluid\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 col-md-12\">\n                                            <h3 class=\"text-left panel-title\">{{question['user_id']}}</h3>\n                                        </div>\n                                        <div class=\"col-lg-6 col-md-12\">\n                                            <h3 class=\"text-right panel-title\">!!!Date has to be added in the backend!!!</h3>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"panel-body\">\n                                <span>{{question['content']}}</span>\n                                <hr>\n                                <hr>\n                                <div *ngFor=\"let answer of answersData[question['id']]\" class=\"panel panel-default\">\n                                    <div class=\"panel-heading\">\n                                        <div class=\"container-fluid\">\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-6 col-md-12\">\n                                                    <h3 class=\"text-left panel-title\">{{answer['user_id']}}</h3>\n                                                </div>\n                                                <div class=\"col-lg-6 col-md-12\">\n                                                    <h3 class=\"text-right panel-title\">!!!Date has to be added in the backend!!!</h3>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"panel-body\"><span>{{answer['content']}} </span></div>\n                                </div>\n                                <h4>Reply to question</h4>\n                                <div class=\"container-fluid\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\" id=\"comment-input-parent\">\n                                            <textarea rows=\"3\" id=\"comment-input\" class=\"form-control\" [(ngModel)]=\"newAnswersContent[i]\"></textarea>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <button class=\"btn btn-primary\" id=\"submit-comment-button\" (click)=\"addNewAnswer(i)\">Add answer</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n                <h3>Add a comment</h3>\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\" id=\"comment-input-parent\">\n                            <textarea rows=\"5\" id=\"comment-input\" class=\"form-control\" [(ngModel)]=\"newCommentContent\"></textarea>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <button class=\"btn btn-primary\" id=\"submit-comment-button\" (click)=\"addNewComment()\">Add comment</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-default-footer></app-default-footer>"

/***/ }),

/***/ "../../../../../src/app/student-dashboard/lesson/lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessons_service__ = __webpack_require__("../../../../../src/app/student-dashboard/lessons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questions_service__ = __webpack_require__("../../../../../src/app/student-dashboard/lesson/questions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LessonComponent = (function () {
    function LessonComponent(route, lessonsService, questionsService) {
        this.route = route;
        this.lessonsService = lessonsService;
        this.questionsService = questionsService;
        this.questionsData = [];
        this.answersData = [];
        this.newCommentContent = '';
        this.newAnswersContent = [];
    }
    LessonComponent.prototype.loadQuestions = function () {
        var _this = this;
        this.questionsService.getQuestionsByLesson(this.id).subscribe(function (datax) {
            _this.questionsData = [];
            _this.answersData = [];
            // console.log(datax);
            datax = JSON.parse(datax['_body']);
            for (var question in datax) {
                _this.questionsData.push(datax[question]);
                _this.loadAnswers(datax[question]['id']);
            }
            // console.log(this.answersData);
            console.log(_this.questionsData);
            console.log(_this.answersData);
        });
    };
    LessonComponent.prototype.loadAnswers = function (questionId) {
        var _this = this;
        // console.log('loading answers for question id: ' + questionId);
        this.questionsService.getAnswersByQuestion(questionId).subscribe(function (data) {
            console.log(questionId);
            console.log(data);
            _this.answersData[questionId] = JSON.parse(data['_body']);
        });
    };
    LessonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.id = data['id'];
            _this.loadQuestions();
            _this.lessonsService.getLessonById(data['id']).subscribe(function (datax) {
                _this.lessonData = JSON.parse(datax['_body']);
            });
        });
        this.questionsService.contentChanged.subscribe(function (data) {
            _this.loadQuestions();
        });
    };
    LessonComponent.prototype.addNewAnswer = function (x) {
        // console.log(this.newAnswersContent[x]);
        // console.log(this.questionsData[x]['id']);
        this.questionsService.addAnswer(this.newAnswersContent[x], this.questionsData[x]['id']);
        this.newAnswersContent[x] = '';
    };
    LessonComponent.prototype.addNewComment = function () {
        this.questionsService.addQuestion(this.newCommentContent, this.id);
        this.newCommentContent = '';
    };
    return LessonComponent;
}());
LessonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-lesson',
        template: __webpack_require__("../../../../../src/app/student-dashboard/lesson/lesson.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-dashboard/lesson/lesson.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__lessons_service__["a" /* LessonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lessons_service__["a" /* LessonsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__questions_service__["a" /* QuestionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__questions_service__["a" /* QuestionsService */]) === "function" && _c || Object])
], LessonComponent);

var _a, _b, _c;
//# sourceMappingURL=lesson.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-dashboard/lesson/questions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsService = (function () {
    function QuestionsService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.contentChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    QuestionsService.prototype.ngOnInit = function () {
    };
    QuestionsService.prototype.getQuestionsByLesson = function (lessonId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('https://cercinfo.herokuapp.com/api/question?lesson_id=' + lessonId, { headers: headers });
    };
    QuestionsService.prototype.getAnswersByQuestion = function (questionId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + this.authService.getToken());
        console.log('question id: ' + questionId);
        return this.http.get('https://cercinfo.herokuapp.com/api/answer?question_id=' + questionId, { headers: headers });
    };
    QuestionsService.prototype.addQuestion = function (content, lessonId) {
        var _this = this;
        var body = {
            content: content,
            lesson_id: lessonId,
            user_id: this.authService.getUserId()
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + this.authService.getToken());
        headers.append('Content-Type', 'application/json');
        this.http.post('https://cercinfo.herokuapp.com/api/question', body, { headers: headers }).subscribe(function (data) {
            _this.contentChanged.emit();
        });
    };
    QuestionsService.prototype.addAnswer = function (content, questionId) {
        var _this = this;
        var body = {
            content: content,
            question_id: questionId,
            user_id: this.authService.getUserId()
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + this.authService.getToken());
        headers.append('Content-Type', 'application/json');
        this.http.post('https://cercinfo.herokuapp.com/api/answer', body, { headers: headers }).subscribe(function (data) {
            _this.contentChanged.emit();
            // console.log('emitted');
        });
    };
    return QuestionsService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], QuestionsService.prototype, "contentChanged", void 0);
QuestionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], QuestionsService);

var _a, _b, _c;
//# sourceMappingURL=questions.service.js.map

/***/ }),

/***/ "../../../../../src/app/student-dashboard/lessons.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient } from '@angular/common/http';


var LessonsService = (function () {
    function LessonsService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.contentChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    LessonsService.prototype.ngOnInit = function () {
    };
    LessonsService.prototype.getLessons = function () {
        var headersx = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersx.append('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('https://cercinfo.herokuapp.com/api/lesson', { headers: headersx });
    };
    LessonsService.prototype.getLessonById = function (id) {
        var headersx = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersx.append('Authorization', 'Bearer ' + this.authService.getToken());
        return this.http.get('https://cercinfo.herokuapp.com/api/lesson/' + String(id), { headers: headersx });
    };
    LessonsService.prototype.postLesson = function (titlex, contentx, classx) {
        var _this = this;
        var body = {
            title: titlex,
            content: contentx,
            user_id: this.authService.getUserId(),
            class: classx
        };
        var headersx = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersx.append('Content-Type', 'application/json');
        headersx.append('Authorization', 'Bearer ' + this.authService.getToken());
        this.http.post('https://cercinfo.herokuapp.com/api/lesson', body, { headers: headersx }).subscribe(function (data) {
            _this.contentChanged.emit();
        });
    };
    LessonsService.prototype.deleteLesson = function (id) {
        var _this = this;
        this.http.delete('https://cercinfo.herokuapp.com/api/lesson/' + id).subscribe(function (data) {
            _this.contentChanged.emit();
        }, function (error) {
            _this.contentChanged.emit();
        });
    };
    LessonsService.prototype.putLesson = function (titlex, contentx, selectedClass, idx) {
        var body = {
            title: titlex,
            content: contentx,
            user_id: this.authService.getUserId(),
            class: selectedClass
        };
        var headersx = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headersx.append('Content-Type', 'application/json');
        headersx.append('Authorization', 'Bearer ' + this.authService.getToken());
        this.http.put('https://cercinfo.herokuapp.com/api/lesson', body, { headers: headersx }).subscribe();
    };
    return LessonsService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], LessonsService.prototype, "contentChanged", void 0);
LessonsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], LessonsService);

var _a, _b, _c;
//# sourceMappingURL=lessons.service.js.map

/***/ }),

/***/ "../../../../../src/app/student-dashboard/programa/programa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-dashboard/programa/programa.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  programa works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/student-dashboard/programa/programa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgramaComponent = (function () {
    function ProgramaComponent() {
    }
    ProgramaComponent.prototype.ngOnInit = function () {
    };
    return ProgramaComponent;
}());
ProgramaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-programa',
        template: __webpack_require__("../../../../../src/app/student-dashboard/programa/programa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-dashboard/programa/programa.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProgramaComponent);

//# sourceMappingURL=programa.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-dashboard/student-dashboard-for-routing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDashboardForRoutingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentDashboardForRoutingComponent = (function () {
    function StudentDashboardForRoutingComponent() {
    }
    StudentDashboardForRoutingComponent.prototype.ngOnInit = function () {
    };
    return StudentDashboardForRoutingComponent;
}());
StudentDashboardForRoutingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-student-dashboard-for-routing',
        template: "\n    <router-outlet></router-outlet>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], StudentDashboardForRoutingComponent);

//# sourceMappingURL=student-dashboard-for-routing.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-dashboard/student-dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_dashboard_student_dashboard_component__ = __webpack_require__("../../../../../src/app/student-dashboard/student-dashboard/student-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lesson_lesson_component__ = __webpack_require__("../../../../../src/app/student-dashboard/lesson/lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__student_dashboard_for_routing_component__ = __webpack_require__("../../../../../src/app/student-dashboard/student-dashboard-for-routing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__homework_homework_component__ = __webpack_require__("../../../../../src/app/student-dashboard/homework/homework.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__programa_programa_component__ = __webpack_require__("../../../../../src/app/student-dashboard/programa/programa.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var StudentDashboardModule = (function () {
    function StudentDashboardModule() {
    }
    return StudentDashboardModule;
}());
StudentDashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_7__student_dashboard_for_routing_component__["a" /* StudentDashboardForRoutingComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guard__["a" /* AuthGuard */]],
                    children: [
                        {
                            path: 'dashboard',
                            component: __WEBPACK_IMPORTED_MODULE_3__student_dashboard_student_dashboard_component__["a" /* StudentDashboardComponent */]
                        },
                        {
                            path: 'lectie/:id',
                            component: __WEBPACK_IMPORTED_MODULE_6__lesson_lesson_component__["a" /* LessonComponent */]
                        },
                        {
                            path: 'homework/:id',
                            component: __WEBPACK_IMPORTED_MODULE_11__homework_homework_component__["a" /* HomeworkComponent */]
                        }
                    ]
                }
            ])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__student_dashboard_student_dashboard_component__["a" /* StudentDashboardComponent */], __WEBPACK_IMPORTED_MODULE_6__lesson_lesson_component__["a" /* LessonComponent */], __WEBPACK_IMPORTED_MODULE_7__student_dashboard_for_routing_component__["a" /* StudentDashboardForRoutingComponent */], __WEBPACK_IMPORTED_MODULE_11__homework_homework_component__["a" /* HomeworkComponent */], __WEBPACK_IMPORTED_MODULE_12__programa_programa_component__["a" /* ProgramaComponent */]]
    })
], StudentDashboardModule);

//# sourceMappingURL=student-dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/student-dashboard/student-dashboard/student-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* body {background: #333333;} */\r\n\r\n.loading-container-container{\r\n    background: #333333;\r\n}\r\n\r\n@keyframes rotate-loading {\r\n    0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\r\n    100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\r\n}\r\n\r\n@-webkit-keyframes rotate-loading {\r\n    0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\r\n    100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\r\n}\r\n\r\n@keyframes rotate-loading {\r\n    0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\r\n    100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\r\n}\r\n\r\n@-webkit-keyframes rotate-loading {\r\n    0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}\r\n    100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}\r\n}\r\n\r\n@keyframes loading-text-opacity {\r\n    0%  {opacity: 0}\r\n    20% {opacity: 0}\r\n    50% {opacity: 1}\r\n    100%{opacity: 0}\r\n}\r\n\r\n@-webkit-keyframes loading-text-opacity {\r\n    0%  {opacity: 0}\r\n    20% {opacity: 0}\r\n    50% {opacity: 1}\r\n    100%{opacity: 0}\r\n}\r\n.loading-container,\r\n.loading {\r\n    height: 100px;\r\n    position: relative;\r\n    width: 100px;\r\n    border-radius: 100%;\r\n}\r\n\r\n\r\n.loading-container { margin: 40px auto }\r\n\r\n.loading {\r\n    border: 2px solid transparent;\r\n    border-color: transparent #fff transparent #FFF;\r\n    -moz-animation: rotate-loading 1.5s linear 0s infinite normal;\r\n    -moz-transform-origin: 50% 50%;\r\n    -o-animation: rotate-loading 1.5s linear 0s infinite normal;\r\n    -o-transform-origin: 50% 50%;\r\n    -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\r\n    -webkit-transform-origin: 50% 50%;\r\n    animation: rotate-loading 1.5s linear 0s infinite normal;\r\n    transform-origin: 50% 50%;\r\n}\r\n\r\n.loading-container:hover .loading {\r\n    border-color: transparent #E45635 transparent #E45635;\r\n}\r\n.loading-container:hover .loading,\r\n.loading-container .loading {\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\n#loading-text {\r\n    -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\r\n    animation: loading-text-opacity 2s linear 0s infinite normal;\r\n    color: #ffffff;\r\n    font-family: \"Helvetica Neue, \"Helvetica\", \"\"arial\";\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    margin-top: 45px;\r\n    opacity: 0;\r\n    position: absolute;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    top: 0;\r\n    width: 100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-dashboard/student-dashboard/student-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-not-logged-in-navigation></app-not-logged-in-navigation>\r\n<div class=\"row\"  *ngIf=\"dataLoaded == false\" >\r\n    <div class=\"col-md-12 loading-container-container\">\r\n        <div class=\"loading-container\">\r\n            <div class=\"loading\"></div>\r\n            <div id=\"loading-text\">loading</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"jumbotron\" *ngIf=\"dataLoaded == true\">\r\n    <h1 class=\"page-title\">Dashboard</h1>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 content-group\">\r\n            <div class=\"inner pannel-dashboard\">\r\n                <h2 class=\"text-center\">Teme </h2>\r\n                <ul class=\"list-group pannel-list\">\r\n                    <li *ngFor=\"let homework of homeworkObjects\" class=\"list-group-item\" [routerLink]=\"'/homework/'+homework['id']\">\r\n                        <span>{{homework['content']}} </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-5 col-lg-offset-0 col-md-5 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 content-group\">\r\n            <div class=\"inner pannel-dashboard\">\r\n                <h2 class=\"text-center\">Lectii </h2>\r\n                <ul class=\"list-group pannel-list\">\r\n                    <li *ngFor=\"let lesson of lessonsObjects\" class=\"list-group-item\" [routerLink]=\"'/lectie/'+lesson['id']\"><span>{{lesson['title']}} </span></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-default-footer></app-default-footer>"

/***/ }),

/***/ "../../../../../src/app/student-dashboard/student-dashboard/student-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessons_service__ = __webpack_require__("../../../../../src/app/student-dashboard/lessons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homework_service__ = __webpack_require__("../../../../../src/app/student-dashboard/homework.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentDashboardComponent = (function () {
    function StudentDashboardComponent(lessonsService, homeworkService) {
        this.lessonsService = lessonsService;
        this.homeworkService = homeworkService;
        this.lessonsObjects = [];
        this.homeworkObjects = [];
    }
    StudentDashboardComponent.prototype.loadHomework = function () {
        var _this = this;
        this.homeworkService.getHomework().subscribe(function (data) {
            data = JSON.parse(data['_body']);
            // console.log(data);
            for (var homework in data) {
                _this.homeworkObjects.push(data[homework]);
            }
        });
    };
    StudentDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataLoaded = false;
        this.loadHomework();
        this.lessonsService.getLessons().subscribe(function (data) {
            var datax = JSON.parse(data['_body']);
            for (var lesson in datax) {
                _this.lessonsObjects.push(datax[lesson]);
            }
            _this.dataLoaded = true;
        });
    };
    return StudentDashboardComponent;
}());
StudentDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-student-dashboard',
        template: __webpack_require__("../../../../../src/app/student-dashboard/student-dashboard/student-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-dashboard/student-dashboard/student-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lessons_service__["a" /* LessonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lessons_service__["a" /* LessonsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__homework_service__["a" /* HomeworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__homework_service__["a" /* HomeworkService */]) === "function" && _b || Object])
], StudentDashboardComponent);

var _a, _b;
//# sourceMappingURL=student-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/teacher-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherAuthGuard = (function () {
    function TeacherAuthGuard(authService) {
        this.authService = authService;
    }
    TeacherAuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn() == 'false') {
            return false;
        }
        else {
            if (this.authService.getPrivileges() >= 2) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    return TeacherAuthGuard;
}());
TeacherAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], TeacherAuthGuard);

var _a;
//# sourceMappingURL=teacher-auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/edit-lesson/edit-lesson.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/edit-lesson/edit-lesson.component.html":
/***/ (function(module, exports) {

module.exports = "<app-not-logged-in-navigation></app-not-logged-in-navigation>\n<div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n        <div class=\"jumbotron\" id=\"jumbotron-lectie\">\n            <h1>{{pageTitle}}</h1>\n\n            <div class=\"form-group\">\n                <p>Title </p>\n                <input [(ngModel)]=\"lessonTitle\" name=\"edit-lesson-title\" class=\"form-control\" type=\"text\">\n            </div>\n            <div class=\"form-group\">\n                <p>Content </p>\n                {{lessonContent}}\n                <!-- <textarea [(ngModel)]=\"lessonContent\" class=\"form-control\" name=\"edit-lesson-content\" rows=\"20\" id=\"edit-lesson-content\"></textarea> -->\n                <quill-editor class=\"my-quill-editor\" [(ngModel)]=\"lessonContent\"></quill-editor>\n            </div>\n            <button (click)=\"onSubmit()\" class=\"btn btn-success\">Salveaza</button>\n            <div class=\"form-group\">\n                <label for=\"selectClass\">Clasa: </label>\n                <select id=\"selectClass\" class=\"form-control\" [(ngModel)]=\"selectedClass\">\n                    <option [value]=\"9\">9</option>\n                    <option [value]=\"10\">10</option>\n                    <option [value]=\"11\">11</option>\n                    <option [value]=\"12\">12</option>\n                </select>\n            </div>\n            \n        </div>\n    </div>\n</div>\n<app-default-footer></app-default-footer>"

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/edit-lesson/edit-lesson.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLessonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_dashboard_lessons_service__ = __webpack_require__("../../../../../src/app/student-dashboard/lessons.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditLessonComponent = (function () {
    function EditLessonComponent(lessonService, route, router) {
        this.lessonService = lessonService;
        this.route = route;
        this.router = router;
    }
    EditLessonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.id = data['id'];
            if (_this.id == 0) {
                _this.pageTitle = 'Adauga lectie';
            }
            else {
                _this.pageTitle = 'Editeaza lectie';
                _this.loadInitialValues();
            }
        });
    };
    EditLessonComponent.prototype.loadInitialValues = function () {
        var _this = this;
        this.lessonService.getLessonById(this.id).subscribe(function (data) {
            // data = JSON.parse(data['body']);
            console.log(data);
            _this.lessonTitle = data['title'];
            _this.lessonContent = data['content'];
        });
    };
    EditLessonComponent.prototype.onSubmit = function () {
        // console.log(this.lessonTitle);
        // console.log(this.lessonContent);
        console.log(this.selectedClass);
        if (this.id == 0) {
            this.lessonService.postLesson(this.lessonTitle, this.lessonContent, this.selectedClass);
            this.router.navigateByUrl('/teacher-dashboard');
        }
        else {
            this.lessonService.putLesson(this.lessonTitle, this.lessonContent, this.selectedClass, this.id);
            this.router.navigateByUrl('/teacher-dashboard');
        }
    };
    return EditLessonComponent;
}());
EditLessonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-lesson',
        template: __webpack_require__("../../../../../src/app/teacher-dashboard/edit-lesson/edit-lesson.component.html"),
        styles: [__webpack_require__("../../../../../src/app/teacher-dashboard/edit-lesson/edit-lesson.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__student_dashboard_lessons_service__["a" /* LessonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__student_dashboard_lessons_service__["a" /* LessonsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EditLessonComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-lesson.component.js.map

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/edit-news/edit-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/edit-news/edit-news.component.html":
/***/ (function(module, exports) {

module.exports = "<app-not-logged-in-navigation></app-not-logged-in-navigation>\n<div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n        <div class=\"jumbotron\" id=\"jumbotron-lectie\">\n            <h1>{{pageTitle}}</h1>\n\n            <div class=\"form-group\">\n                <p>Title </p>\n                <input [(ngModel)]=\"newsTitle\" name=\"edit-news-title\" class=\"form-control\" type=\"text\">\n            </div>\n            <!-- <app-wysiwyg-editor></app-wysiwyg-editor> -->\n            <!-- <div class=\"form-group\">\n                    <p>Content </p>\n                    <textarea [(ngModel)]=\"newsContent\" class=\"form-control\" name=\"edit-lesson-content\" rows=\"20\" id=\"edit-lesson-content\"></textarea>\n                </div> -->\n            <quill-editor class=\"my-quill-editor\" [(ngModel)]=\"newsContent\"></quill-editor>\n            <button class=\"btn btn-success\" (click)=\"onSubmit()\">Salveaza</button>\n\n        </div>\n    </div>\n</div>\n<app-default-footer></app-default-footer>"

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/edit-news/edit-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_screen_news_news_service__ = __webpack_require__("../../../../../src/app/welcome/welcome-screen/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditNewsComponent = (function () {
    function EditNewsComponent(newsService, route, router) {
        this.newsService = newsService;
        this.route = route;
        this.router = router;
    }
    EditNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.id = data['id'];
            if (_this.id == 0) {
                _this.pageTitle = 'Adauga noutate';
            }
            else {
                _this.pageTitle = 'Editeaza noutate';
                _this.loadInitialValues();
            }
        });
    };
    EditNewsComponent.prototype.loadInitialValues = function () {
        var _this = this;
        this.newsService.getNewsById(this.id).subscribe(function (data) {
            _this.newsTitle = data['title'];
            _this.newsContent = data['content'];
        });
    };
    EditNewsComponent.prototype.onSubmit = function () {
        // if(this.id == 0){
        //   this.newsService.postNews(this.lessonTitle, this.lessonContent);
        //   this.router.navigateByUrl('/teacher-dashboard'); 
        // }
        // else{
        //   this.lessonService.putLesson(this.lessonTitle, this.lessonContent, this.id);
        //   this.router.navigateByUrl('/teacher-dashboard'); 
        // }
        if (this.id == 0) {
            this.newsService.addNews(this.newsContent, this.newsTitle);
        }
        else {
            this.newsService.modifyNews(this.id, this.newsContent, this.newsTitle);
        }
        this.router.navigateByUrl('/teacher-dashboard');
    };
    return EditNewsComponent;
}());
EditNewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-news',
        template: __webpack_require__("../../../../../src/app/teacher-dashboard/edit-news/edit-news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/teacher-dashboard/edit-news/edit-news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_screen_news_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_screen_news_news_service__["a" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], EditNewsComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-news.component.js.map

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/teacher-dashboard-for-routing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherDashboardForRoutingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeacherDashboardForRoutingComponent = (function () {
    function TeacherDashboardForRoutingComponent() {
    }
    TeacherDashboardForRoutingComponent.prototype.ngOnInit = function () {
    };
    return TeacherDashboardForRoutingComponent;
}());
TeacherDashboardForRoutingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-teacher-dashboard-for-routing',
        template: "\n    <router-outlet></router-outlet>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], TeacherDashboardForRoutingComponent);

//# sourceMappingURL=teacher-dashboard-for-routing.component.js.map

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/teacher-dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherDashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_dashboard_teacher_dashboard_component__ = __webpack_require__("../../../../../src/app/teacher-dashboard/teacher-dashboard/teacher-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_lesson_edit_lesson_component__ = __webpack_require__("../../../../../src/app/teacher-dashboard/edit-lesson/edit-lesson.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_news_edit_news_component__ = __webpack_require__("../../../../../src/app/teacher-dashboard/edit-news/edit-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__teacher_dashboard_for_routing_component__ = __webpack_require__("../../../../../src/app/teacher-dashboard/teacher-dashboard-for-routing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__teacher_auth_guard__ = __webpack_require__("../../../../../src/app/teacher-auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var TeacherDashboardModule = (function () {
    function TeacherDashboardModule() {
    }
    return TeacherDashboardModule;
}());
TeacherDashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_9__teacher_dashboard_for_routing_component__["a" /* TeacherDashboardForRoutingComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_10__teacher_auth_guard__["a" /* TeacherAuthGuard */]],
                    children: [
                        {
                            path: 'teacher-dashboard',
                            component: __WEBPACK_IMPORTED_MODULE_2__teacher_dashboard_teacher_dashboard_component__["a" /* TeacherDashboardComponent */]
                        },
                        {
                            path: 'edit-lesson/:id',
                            component: __WEBPACK_IMPORTED_MODULE_5__edit_lesson_edit_lesson_component__["a" /* EditLessonComponent */]
                        },
                        {
                            path: 'edit-news/:id',
                            component: __WEBPACK_IMPORTED_MODULE_7__edit_news_edit_news_component__["a" /* EditNewsComponent */]
                        }
                    ]
                }
            ])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__teacher_dashboard_teacher_dashboard_component__["a" /* TeacherDashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__edit_lesson_edit_lesson_component__["a" /* EditLessonComponent */], __WEBPACK_IMPORTED_MODULE_7__edit_news_edit_news_component__["a" /* EditNewsComponent */], __WEBPACK_IMPORTED_MODULE_9__teacher_dashboard_for_routing_component__["a" /* TeacherDashboardForRoutingComponent */]]
    })
], TeacherDashboardModule);

//# sourceMappingURL=teacher-dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/teacher-dashboard/teacher-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\r\n    margin: 0px !important;\r\n}\r\n\r\n.edit{\r\n    float: right;\r\n}\r\n\r\n.delete {\r\n    float: right;\r\n    margin-left: 10px;\r\n}\r\n\r\nli span{\r\n    display: inline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/teacher-dashboard/teacher-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-not-logged-in-navigation></app-not-logged-in-navigation>\n<div class=\"jumbotron\">\n    <h1 class=\"page-title\">Dashboard </h1>\n    <hr>\n    <div class=\"row\">\n        <div class=\"col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 content-group\">\n            <div class=\"inner pannel-dashboard\">\n                <h2 class=\"text-center\">News</h2>\n                <ul class=\"list-group pannel-list\">\n                    <li *ngFor=\"let news of newsObjects\" class=\"list-group-item\">\n                        <!-- <span>\n                            {{news['title']}}\n                        </span>    \n                        <span class=\"fa fa-pencil fa-lg edit\">Edit</span> -->\n                        <span [routerLink]=\"'/edit-news/'+news['id']\">\n                            {{news['title']}}\n                        </span>    \n                        <span [routerLink]=\"'/edit-news/'+news['id']\" class=\"edit\">\n                            <span class=\"fa fa-pencil fa-lg\"> </span>\n                            <span> Edit</span>\n                        </span>\n                        <span (click)=\"deleteNews(news)\" class=\"delete\">\n                            <span class=\"fa fa-pencil fa-lg\"> </span>\n                            <span> Delete</span>\n                        </span>\n                    </li>\n                </ul>\n                <a class=\"btn btn-primary\">\n                    ADAUGA NOUTATE\n                  </a>\n            </div>\n        </div>\n        <div class=\"col-lg-5 col-lg-offset-0 col-md-5 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1 content-group\">\n            <div class=\"inner pannel-dashboard\">\n                <h2 class=\"text-center\">Lectii </h2>\n                <ul class=\"list-group pannel-list\">\n                    <li *ngFor=\"let lesson of lessonsObjects\" class=\"list-group-item\">\n                        <span [routerLink]=\"'/lectie/'+lesson['id']\">\n                            {{lesson['title']}}\n                        </span>    \n                        <span [routerLink]=\"'/edit-lesson/'+lesson['id']\" class=\"edit\">\n                            <span class=\"fa fa-pencil fa-lg\"> </span>\n                            <span> Edit</span>\n                        </span>\n                        <span (click)=\"deleteItem(lesson)\" class=\"delete\">\n                            <span class=\"fa fa-pencil fa-lg\"> </span>\n                            <span> Delete</span>\n                        </span>\n                    </li>\n                </ul>\n                <a class=\"btn btn-primary\" routerLink=\"/edit-lesson/0\">\n                    ADAUGA LECTIE\n                  </a>\n            </div>\n        </div>\n    </div>\n</div>\n<app-default-footer></app-default-footer>"

/***/ }),

/***/ "../../../../../src/app/teacher-dashboard/teacher-dashboard/teacher-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_screen_news_news_service__ = __webpack_require__("../../../../../src/app/welcome/welcome-screen/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_dashboard_lessons_service__ = __webpack_require__("../../../../../src/app/student-dashboard/lessons.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherDashboardComponent = (function () {
    function TeacherDashboardComponent(newsService, lessonsService) {
        this.newsService = newsService;
        this.lessonsService = lessonsService;
        this.lessonsObjects = [];
        this.newsObjects = [];
    }
    TeacherDashboardComponent.prototype.deleteItem = function (x) {
        this.lessonsService.deleteLesson(x['id']);
    };
    TeacherDashboardComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService.getNews().subscribe(function (data) {
            _this.newsObjects = [];
            for (var newsx in data) {
                _this.newsObjects.push(data[newsx]);
            }
        });
    };
    TeacherDashboardComponent.prototype.getLessons = function () {
        var _this = this;
        this.lessonsService.getLessons().subscribe(function (data) {
            _this.lessonsObjects = [];
            data = JSON.parse(data['_body']);
            for (var lesson in data) {
                _this.lessonsObjects.push(data[lesson]);
            }
        });
    };
    TeacherDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getLessons();
        this.getNews();
        this.lessonsService.contentChanged.subscribe(function (data) {
            _this.getLessons();
        });
    };
    return TeacherDashboardComponent;
}());
TeacherDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-teacher-dashboard',
        template: __webpack_require__("../../../../../src/app/teacher-dashboard/teacher-dashboard/teacher-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/teacher-dashboard/teacher-dashboard/teacher-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_screen_news_news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__welcome_welcome_screen_news_news_service__["a" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__student_dashboard_lessons_service__["a" /* LessonsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__student_dashboard_lessons_service__["a" /* LessonsService */]) === "function" && _b || Object])
], TeacherDashboardComponent);

var _a, _b;
//# sourceMappingURL=teacher-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-not-logged-in-navigation></app-not-logged-in-navigation>\n<div *ngIf=\"wrongCredentials\" class=\"alert alert-danger\" role=\"alert\">\n    Wrong credentials\n</div>\n\n<div class=\"login-clean\">\n  <form>\n      <h2>Login here</h2>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\n      </div>\n      <div class=\"form-group\">\n          <button class=\"btn btn-success btn-block\" (click)=\"logIn()\" >Log In</button>\n      </div><a href=\"#\" class=\"forgot\">Forgot password?</a></form>\n</div>\n<app-default-footer></app-default-footer>"

/***/ }),

/***/ "../../../../../src/app/welcome/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.wrongCredentials = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loginService.loggedIn.subscribe(data => {
        //   if(data == false){
        //     this.wrongCredentials = true;
        //     setTimeout(data => { 
        //       this.wrongCredentials = false;
        //     }, 5000);
        //   }
        // })
        this.authService.hasLoggedIn.subscribe(function (data) {
            if (data == false) {
                _this.wrongCredentials = true;
                setTimeout(function (e) {
                    _this.wrongCredentials = false;
                }, 5000);
            }
        });
    };
    LoginComponent.prototype.logIn = function () {
        this.authService.login(this.email, this.password);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/welcome/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".switch{\r\n    border-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-not-logged-in-navigation></app-not-logged-in-navigation>\n<div class=\"login-clean\">\n    <form>\n        <h2>Register here</h2>\n        <div class=\"form-group\">\n            <input class=\"form-control\" [(ngModel)]=\"email\" type=\"email\" name=\"email\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group\">\n            <input class=\"form-control\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" placeholder=\"Password\">\n        </div>\n        <div class=\"form-group\">\n            <input class=\"form-control\" [(ngModel)]=\"confirm-password\" type=\"password\" name=\"confirm-password\" placeholder=\"Confirm Password\">\n        </div>\n        <div class=\"profesor-question\">Profesor?</div>\n        <label class=\"switch switch_type1\" role=\"switch\">\n            <input type=\"checkbox\" class=\"switch__toggle\" [(ngModel)]=\"profesor\" >\n            <span class=\"switch__label\"></span>\n        </label>\n        <div class=\"form-group\">\n            <button class=\"btn btn-warning btn-block\" (click)=\"register()\">Sign up</button>\n        </div><a href=\"#\" class=\"forgot\">Forgot your email or password?</a></form>\n    </div>\n<app-default-footer></app-default-footer>"

/***/ }),

/***/ "../../../../../src/app/welcome/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/welcome/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome-screen/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome-screen/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row\" id=\"latest-news\">\n      <div class=\"col-lg-6 col-lg-offset-3 col-md-9 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1\">\n          <div>\n              <h1 id=\"news-heading\">Latest news</h1>\n              <div *ngFor=\"let news of contentNews\">\n                <hr>\n                <h1>{{news.title}} </h1>\n                <p>{{news.content}}</p>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome-screen/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("../../../../../src/app/welcome/welcome-screen/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = (function () {
    function NewsComponent(news) {
        this.news = news;
        this.contentNews = [];
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.news.getNews().subscribe(function (data) {
            data = JSON.parse(data['_body']);
            _this.contentNews = data;
        });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/welcome/welcome-screen/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome-screen/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]) === "function" && _a || Object])
], NewsComponent);

var _a;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome-screen/news/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HttpClient } from '@angular/common/http';



var NewsService = (function () {
    function NewsService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    NewsService.prototype.ngOnInit = function () {
    };
    NewsService.prototype.getNews = function () {
        return this.http.get('https://cercinfo.herokuapp.com/api/news');
    };
    NewsService.prototype.getNewsById = function (id) {
        return this.http.get('https://cercinfo.herokuapp.com/api/news/' + id);
    };
    NewsService.prototype.addNews = function (content, title) {
        // let body = {
        //   user_id: this.authService.getUserId(),
        //   title: title,w
        //   content: content
        // }
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + this.authService.getToken());
        // this.http.post('https://cercinfo.herokuapp.com/api/news', body, {headers: headers});
    };
    NewsService.prototype.modifyNews = function (id, content, title) {
        // let body = {
        //   id: id,
        //   user_id: this.authService.getUserId(),
        //   title: title,
        //   content: contentwwwww
        // }
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + this.authService.getToken());
        // this.http.put('https://cercinfo.herokuapp.com/api/news', body, {headers: headers});
    };
    return NewsService;
}());
NewsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NewsService);

var _a, _b;
//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome-screen/welcome-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".important-text{\r\n    font-size: 1.7em; \r\n    text-transform: uppercase;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome-screen/welcome-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<app-not-logged-in-navigation></app-not-logged-in-navigation>\n\n<div class=\"jumbotron hero\" id=\"main-jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-offset-4 col-md-9 col-md-offset-4 col-md-pull-3 get-it\" id=\"main-info\">\n                <h1>Cerc informatica eMAG</h1>\n\n\n                <!-- <a class=\"btn btn-success btn-lg\" role=\"button\"  routerLink=\"/dashboard\">Dashboard - only for testing</a>\n                <a class=\"btn btn-success btn-lg\" role=\"button\"  routerLink=\"/teacher-dashboard\">Teacher Dashboard - only for testing</a> -->\n\n                <!-- <p id=\"description-text\">Acest site este dedicat pregatirii elevilor din cadrul cercului de informatica organizat de emag. Reprezinta\n                    un sistem centralizat pentru elevi si profesori. Faciliteaza comunicarea, si se asigura ca toti utilizatorii\n                    ajung la informatiile necesare.\n                </p> -->\n                <br>\n                <p id=\"description-text\"><span class=\"important-text\">crezi ca poti reusi</span>, iar de restul ne ocupam noi.\n                </p>\n                <p id=\"description-text\">Acest site este dedicat pregatirii elevilor din cadrul cercului de informatica organizat de emag. Reprezinta\n                    un sistem centralizat pentru elevi si profesori. Faciliteaza comunicarea, si se asigura ca toti utilizatorii\n                    ajung la informatiile necesare.\n                </p>\n                <a class=\"btn btn-primary btn-lg\" role=\"button\" routerLink=\"/login\">CONECTARE </a>\n                <a class=\"btn btn-success btn-lg\" role=\"button\"  routerLink=\"/register\">INREGISTRARE</a>\n            </div>\n        </div>\n    </div>\n</div>\n<app-news></app-news>\n<app-default-footer></app-default-footer>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome-screen/welcome-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeScreenComponent = (function () {
    function WelcomeScreenComponent(authService) {
        this.authService = authService;
    }
    WelcomeScreenComponent.prototype.ngOnInit = function () {
        // this.authService.loadInitialValues();
    };
    return WelcomeScreenComponent;
}());
WelcomeScreenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-welcome-screen',
        template: __webpack_require__("../../../../../src/app/welcome/welcome-screen/welcome-screen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome-screen/welcome-screen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], WelcomeScreenComponent);

var _a;
//# sourceMappingURL=welcome-screen.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_screen_welcome_screen_component__ = __webpack_require__("../../../../../src/app/welcome/welcome-screen/welcome-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/welcome/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/welcome/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_screen_news_news_component__ = __webpack_require__("../../../../../src/app/welcome/welcome-screen/news/news.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    return WelcomeModule;
}());
WelcomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_4__welcome_screen_welcome_screen_component__["a" /* WelcomeScreenComponent */]
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'register',
                    component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */]
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__welcome_screen_welcome_screen_component__["a" /* WelcomeScreenComponent */], __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_8__welcome_screen_news_news_component__["a" /* NewsComponent */]]
    })
], WelcomeModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map