webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/img/code.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "code.9063ac7a6731780bb566.png";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--8-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.navbar {\n    margin-bottom:0;\n    border:none;\n  }\n  \n  .navbar-brand .glyphicon {\n    margin-right:6px;\n  }\n  \n  .hero {\n    background:url(" + __webpack_require__("../../../../../src/assets/img/code.png") + ") no-repeat center;\n    background-size:cover;\n    border:none;\n  }\n  \n  @media (min-width:992px) {\n    .hero .get-it {\n      text-align:right;\n      margin-top:80px;\n      padding-right:30px;\n    }\n  }\n  \n  @media (max-width:992px) {\n    .hero .get-it {\n      text-align:center;\n    }\n  }\n  \n  @media (max-width:992px) {\n    .hero .phone-preview {\n      text-align:center;\n    }\n  }\n  \n  .hero .get-it h1, .hero .get-it p {\n    color:#fff;\n    text-shadow:2px 2px 3px rgba(0,0,0,0.3);\n    margin-bottom:40px;\n  }\n  \n  .hero .get-it .btn {\n    margin-left:10px;\n    margin-bottom:10px;\n    text-shadow:none;\n  }\n  \n  .icon-feature {\n    text-align:center;\n  }\n  \n  .icon-feature .glyphicon {\n    font-size:60px;\n  }\n  \n  section.features {\n    background-color:#369;\n    padding:40px 0;\n    color:#fff;\n  }\n  \n  .features h2 {\n    color:#fff;\n  }\n  \n  .features .icon-features {\n    margin-top:15px;\n  }\n  \n  .testimonials blockquote {\n    text-align:center;\n  }\n  \n  section.testimonials {\n    margin:50px 0;\n  }\n  \n  .site-footer {\n    padding:20px 0;\n    text-align:center;\n  }\n  \n  @media (min-width:768px) {\n    .site-footer h5 {\n      text-align:left;\n    }\n  }\n  \n  .site-footer h5 {\n    color:inherit;\n    font-size:20px;\n  }\n  \n  .site-footer .social-icons a:hover {\n    opacity:1;\n  }\n  \n  .site-footer .social-icons a {\n    display:inline-block;\n    width:32px;\n    border:none;\n    font-size:20px;\n    border-radius:50%;\n    margin:4px;\n    color:#fff;\n    text-align:center;\n    background-color:#798FA5;\n    height:32px;\n    opacity:0.8;\n    line-height:32px;\n  }\n  \n  @media (min-width:768px) {\n    .site-footer .social-icons {\n      text-align:right;\n    }\n  }\n  \n  #main-info {\n    background-color:rgba(30, 30, 30, 0.8);\n    padding:15px;\n    border-radius:5px;\n    text-align:left;\n  }\n  \n  #main-jumbotron {\n    margin:0;\n  }\n  \n  .navbar.navbar-default {\n    background-color:rgb(52,52,52);\n    font-size:16px;\n    border-radius:0;\n  }\n  \n  #news-heading {\n    text-align:center;\n    font-size:3.5em;\n  }\n  \n  #latest-news {\n    margin-top:30px;\n  }\n  \n  footer hr {\n    margin:10px 0px;\n  }\n  \n  .content-group {\n    background-color:rgba(215, 215, 215, 0);\n    padding:0px 10px 0px 10px;\n    margin-top:20px;\n  }\n  \n  .jumbotron h1, .jumbotron .h1 {\n    text-align:center;\n  }\n  \n  .content-group .inner {\n    background-color:rgba(215, 215, 215, 0.8);\n    border-radius:7px;\n    padding:20px;\n  }\n  \n  .content-group .inner hr {\n    border-color:rgba(0, 0, 0, 0.3);\n  }\n  \n  .content-group .inner h2 {\n    margin-top:0;\n    margin-bottom:0;\n  }\n  \n  .login-clean form h2 {\n    text-align:center;\n    line-height:1.5;\n    margin-top:0;\n    margin-bottom:30px;\n  }\n  \n  #jumbotron-lectie {\n    margin-top:30px;\n    border-radius:7px;\n    padding:30px;\n  }\n  \n  @media (max-width:767px) {\n    #jumbotron-lectie {\n      padding:10px;\n    }\n  }\n  \n  #comments .panel-body .list-group .comment {\n    border:none;\n    padding:0;\n  }\n  \n  #comment-input-parent {\n    padding:0;\n  }\n  \n  #comment-input {\n    border-top:none;\n    resize:none;\n  }\n  \n  #submit-comment-button {\n    margin:0;\n    margin-top:15px;\n  }\n  \n  .login-clean {\n    background:#f1f7fc;\n    padding:80px 0;\n  }\n  \n  .login-clean form {\n    max-width:320px;\n    width:90%;\n    margin:0 auto;\n    background-color:#ffffff;\n    padding:40px;\n    border-radius:4px;\n    color:#505e6c;\n    box-shadow:1px 1px 5px rgba(0,0,0,0.1);\n  }\n  \n  .login-clean form .form-control {\n    background:#f7f9fc;\n    border:none;\n    border-bottom:1px solid #dfe7f1;\n    border-radius:0;\n    box-shadow:none;\n    outline:none;\n    color:inherit;\n    text-indent:8px;\n    height:42px;\n  }\n  \n  .login-clean form .btn-success {\n    border:none;\n    border-radius:4px;\n    padding:11px;\n    box-shadow:none;\n    margin-top:26px;\n    text-shadow:none;\n  }\n  \n  .login-clean form .btn-warning {\n    border:none;\n    border-radius:4px;\n    padding:11px;\n    box-shadow:none;\n    margin-top:26px;\n    text-shadow:none;\n  }\n  \n  .login-clean form .forgot {\n    display:block;\n    text-align:center;\n    font-size:12px;\n    color:#6f7a85;\n    opacity:0.9;\n    text-decoration:none;\n  }\n  \n  .login-clean form .forgot:hover, .login-clean form .forgot:active {\n    opacity:1;\n    text-decoration:none;\n  }\n  \n  /* Slider */\n  .switch{\n    --uiSwitchSize: var(--switchSize, 64px);\n    --uiSwitchBgColor: var(--switchBgColor, #f1f1f1);\n    --uiSwitchBgColorActive: var(--switchBgColorActive, #4ed164);\n    --uiSwitchBorderColorActive: var(--switchBorderColorActive, #fff);\n    --uiSwitchBorderColorFocus: var(--switchBgColorFocus, #43b556);\n    --uiSwitchButtonBgColor: var(--switchButtonBgColor, #fff);  \n    \n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n  \n  .switch__label{\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n  \n  .switch__toggle{\n    width: 0;\n    height: 0;\n    opacity: 0;\n    \n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  .switch__toggle:focus ~ .switch__label{\n    box-shadow: 0 0 0 var(--uiSwitchThickFocus, 4px) var(--uiSwitchBorderColorFocus);\n  }\n  \n  .switch__toggle:checked:focus ~ .switch__label{\n    box-shadow: 0 0 0 var(--uiSwitchThickFocus, 4px) var(--uiSwitchBorderColorActive);\n  }\n  \n  .switch__label:before, .switch__label:after{\n    content: \"\";\n    cursor: pointer;\n  \n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  .switch__label:before{\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    background-color: var(--uiSwitchBgColor);\n  }\n  \n  .switch__label:after{\n    top: 50%;\n    z-index: 3;\n    transition:-webkit-transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);\n    transition:transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);\n    transition: transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15), -webkit-transform .4s cubic-bezier(0.44,-0.12, 0.07, 1.15);\n  }\n  \n  /* type 1 */\n  \n  .switch_type1{\n    --uiSwitchBorderRadius: var(--switchBorderRadius, 60px);\n    \n    width: var(--uiSwitchSize);\n    height: calc((var(--uiSwitchSize) / 2));\n    border-radius: var(--uiSwitchBorderRadius);    \n    background-color: var(--uiSwitchBgColorActive);\n  }\n  \n  .switch_type1 .switch__label{\n    border-radius: var(--uiSwitchBorderRadius);    \n  }\n  \n  .switch_type1 .switch__label:before{\n    border-radius: var(--uiSwitchBorderRadius);\n    transition:opacity .2s ease-out .1s, -webkit-transform .2s ease-out .1s;\n    transition:opacity .2s ease-out .1s, transform .2s ease-out .1s;\n    transition: opacity .2s ease-out .1s, transform .2s ease-out .1s, -webkit-transform .2s ease-out .1s;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n  \n  .switch_type1 .switch__toggle:checked ~ .switch__label:before{\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: .7;\n  }\n  \n  .switch_type1 .switch__label:after{\n    width: calc(var(--uiSwitchSize) / 2);\n    height: calc(var(--uiSwitchSize) / 2);\n    -webkit-transform: translate3d(0, -50%, 0);\n            transform: translate3d(0, -50%, 0);\n    \n    background-color: var(--uiSwitchButtonBgColor);\n    border-radius: 100%;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, .3);  \n  }\n  \n  .switch_type1 .switch__toggle:checked ~ .switch__label:after{\n    -webkit-transform: translate3d(100%, -50%, 0);\n            transform: translate3d(100%, -50%, 0);\n  }\n  \n  .pannel-dashboard > h2 {\n    border-bottom:1px solid black;\n    margin-bottom:30px;\n  }\n  \n  .pannel-dashboard .pannel-list .list-group-item {\n    margin-bottom:10px;\n    background-color:rgba(110, 235, 103, .5);\n  }\n\n  .pannel-dashboard .h2 {\n    padding-bottom: 5px;\n  }\n  \n  .pannel-dashboard .pannel-list{\n    margin-top: 15px;\n  }  \n\n  .add-item {\n    margin:0 !important;\n  }\n  \n  html,body\n  {\n      /* width: 100%;\n      height: 100%;\n      margin: 0px;\n      padding: 0px; */\n      overflow-x: hidden; \n  }\n\n  .my-quill-editor{\n    border-radius: 10px;\n    margin-bottom: 20px;\n  }", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map