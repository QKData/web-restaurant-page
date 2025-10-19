/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = \"<h1>Contact Us</h1>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanM/ZDU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29udGFjdCA9IFwiPGgxPkNvbnRhY3QgVXM8L2gxPlwiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact.js\n\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   home: () => (/* binding */ home)\n/* harmony export */ });\nconst home = \"<h1>Welcome to Our Restaurant</h1>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaG9tZSA9IFwiPGgxPldlbGNvbWUgdG8gT3VyIFJlc3RhdXJhbnQ8L2gxPlwiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst content = document.getElementById(\"content\");\nconst homeBtn = document.querySelector(\"nav button:nth-child(1)\");\nconst menuBtn = document.querySelector(\"nav button:nth-child(2)\");\nconst contactBtn = document.querySelector(\"nav button:nth-child(3)\");\n\nfunction switchTab(tabName) {\n    content.innerHTML = '';\n\n    const buttons = document.querySelectorAll(\"nav button\");\n    buttons.forEach(btn => btn.classList.remove(\"active\"));\n\n    if (tabName === \"home\") {\n        homeBtn.classList.add(\"active\");\n        loadHome();\n    } else if (tabName === \"menu\") {\n        menuBtn.classList.add(\"active\");\n        loadMenu();\n    } else if (tabName === \"contact\") {\n        contactBtn.classList.add(\"active\");\n        loadContact();\n    }\n}\n\nfunction loadHome() {\n    content.innerHTML = _home__WEBPACK_IMPORTED_MODULE_0__.home;\n}\n\nfunction loadMenu() {\n    content.innerHTML = _menu__WEBPACK_IMPORTED_MODULE_1__.menu;\n}\n\nfunction loadContact() {\n    content.innerHTML = _contact__WEBPACK_IMPORTED_MODULE_2__.contact;\n}\n\nhomeBtn.addEventListener(\"click\", () => switchTab(\"home\"));\nmenuBtn.addEventListener(\"click\", () => switchTab(\"menu\"));\ncontactBtn.addEventListener(\"click\", () => switchTab(\"contact\"));\n\nswitchTab(\"home\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QjtBQUNBO0FBQ007O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix1Q0FBSTtBQUM1Qjs7QUFFQTtBQUNBLHdCQUF3Qix1Q0FBSTtBQUM1Qjs7QUFFQTtBQUNBLHdCQUF3Qiw2Q0FBTztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXYgYnV0dG9uOm50aC1jaGlsZCgxKVwiKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2IGJ1dHRvbjpudGgtY2hpbGQoMilcIik7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdiBidXR0b246bnRoLWNoaWxkKDMpXCIpO1xuXG5mdW5jdGlvbiBzd2l0Y2hUYWIodGFiTmFtZSkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBidXR0b25cIik7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG5cbiAgICBpZiAodGFiTmFtZSA9PT0gXCJob21lXCIpIHtcbiAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH0gZWxzZSBpZiAodGFiTmFtZSA9PT0gXCJtZW51XCIpIHtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0gZWxzZSBpZiAodGFiTmFtZSA9PT0gXCJjb250YWN0XCIpIHtcbiAgICAgICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBsb2FkQ29udGFjdCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBob21lO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IG1lbnU7XG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gY29udGFjdDtcbn1cblxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc3dpdGNoVGFiKFwiaG9tZVwiKSk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzd2l0Y2hUYWIoXCJtZW51XCIpKTtcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN3aXRjaFRhYihcImNvbnRhY3RcIikpO1xuXG5zd2l0Y2hUYWIoXCJob21lXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = \"<h1>Our Menu</h1>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWVudSA9IFwiPGgxPk91ciBNZW51PC9oMT5cIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;