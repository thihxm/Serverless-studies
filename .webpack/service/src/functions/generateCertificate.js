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

/***/ "./src/functions/generateCertificate.ts":
/*!**********************************************!*\
  !*** ./src/functions/generateCertificate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chrome-aws-lambda */ \"chrome-aws-lambda\");\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! handlebars */ \"handlebars\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst compile = async (data) => {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), 'src', 'templates', 'certificate.hbs');\n    const html = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath, 'utf-8');\n    return handlebars__WEBPACK_IMPORTED_MODULE_6___default().compile(html)(data);\n};\nconst handle = async (event) => {\n    const { id, name, grade } = JSON.parse(event.body);\n    await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_5__.document.put({\n        TableName: 'users_certificates',\n        Item: {\n            id,\n            name,\n            grade,\n        },\n    }).promise();\n    const medalPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), 'src', 'templates', 'selo.png');\n    const medal = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(medalPath, 'base64');\n    const data = {\n        id,\n        date: dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('DD/MM/YYYY'),\n        grade,\n        name,\n        medal,\n    };\n    const content = await compile(data);\n    const browser = await chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2___default().puppeteer.launch({\n        headless: true,\n        args: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2___default().args),\n        defaultViewport: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2___default().defaultViewport),\n        executablePath: await (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_2___default().executablePath),\n    });\n    const page = await browser.newPage();\n    await page.setContent(content);\n    const pdf = await page.pdf({\n        format: 'a4',\n        landscape: true,\n        path: process.env.IS_OFFLINE ? 'certificate.pdf' : null,\n        printBackground: true,\n        preferCSSPageSize: true\n    });\n    await browser.close();\n    const s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_4__.S3();\n    await s3.putObject({\n        Bucket: 'thihxmserverlesscertificatesignite',\n        Key: `${id}.pdf`,\n        ACL: 'public-read',\n        Body: pdf,\n        ContentType: 'application/pdf',\n    }).promise();\n    return {\n        statusCode: 201,\n        body: JSON.stringify({\n            message: 'Certificate created!',\n            url: `https://thihxmserverlesscertificatesignite.s3.sa-east-1.amazonaws.com/${id}.pdf`,\n        }),\n        headers: {\n            'Content-Type': 'application/json',\n        },\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlQ2VydGlmaWNhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pdGVjZXJ0aWZpY2F0ZS8uL3NyYy9mdW5jdGlvbnMvZ2VuZXJhdGVDZXJ0aWZpY2F0ZS50cz9hNWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmltcG9ydCBjaHJvbWl1bSBmcm9tICdjaHJvbWUtYXdzLWxhbWJkYSdcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcbmltcG9ydCB7IFMzIH0gZnJvbSAnYXdzLXNkaydcblxuaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tICcuLi91dGlscy9keW5hbW9kYkNsaWVudCdcbmltcG9ydCBoYW5kbGViYXJzIGZyb20gJ2hhbmRsZWJhcnMnXG5cbmludGVyZmFjZSBJQ3JlYXRlQ2VydGlmaWNhdGUge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBncmFkZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBJVGVtcGxhdGUge1xuICBpZDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBncmFkZTogc3RyaW5nXG4gIGRhdGU6IHN0cmluZ1xuICBtZWRhbDogc3RyaW5nXG59XG5cbmNvbnN0IGNvbXBpbGUgPSBhc3luYyAoZGF0YTogSVRlbXBsYXRlKSA9PiB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdzcmMnLCAndGVtcGxhdGVzJywgJ2NlcnRpZmljYXRlLmhicycpXG4gIGNvbnN0IGh0bWwgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGYtOCcpXG5cbiAgcmV0dXJuIGhhbmRsZWJhcnMuY29tcGlsZShodG1sKShkYXRhKVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgaWQsIG5hbWUsIGdyYWRlIH0gPSBKU09OLnBhcnNlKGV2ZW50LmJvZHkpIGFzIElDcmVhdGVDZXJ0aWZpY2F0ZVxuXG4gIGF3YWl0IGRvY3VtZW50LnB1dCh7XG4gICAgVGFibGVOYW1lOiAndXNlcnNfY2VydGlmaWNhdGVzJyxcbiAgICBJdGVtOiB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBncmFkZSxcbiAgICB9LFxuICB9KS5wcm9taXNlKClcblxuICBjb25zdCBtZWRhbFBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3NyYycsICd0ZW1wbGF0ZXMnLCAnc2Vsby5wbmcnKVxuICBjb25zdCBtZWRhbCA9IGZzLnJlYWRGaWxlU3luYyhtZWRhbFBhdGgsICdiYXNlNjQnKVxuXG4gIGNvbnN0IGRhdGE6IElUZW1wbGF0ZSA9IHtcbiAgICBpZCxcbiAgICBkYXRlOiBkYXlqcygpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxuICAgIGdyYWRlLFxuICAgIG5hbWUsXG4gICAgbWVkYWwsXG4gIH1cblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgY29tcGlsZShkYXRhKVxuXG4gIGNvbnN0IGJyb3dzZXIgPSBhd2FpdCBjaHJvbWl1bS5wdXBwZXRlZXIubGF1bmNoKHtcbiAgICBoZWFkbGVzczogdHJ1ZSxcbiAgICBhcmdzOiBjaHJvbWl1bS5hcmdzLFxuICAgIGRlZmF1bHRWaWV3cG9ydDogY2hyb21pdW0uZGVmYXVsdFZpZXdwb3J0LFxuICAgIGV4ZWN1dGFibGVQYXRoOiBhd2FpdCBjaHJvbWl1bS5leGVjdXRhYmxlUGF0aCxcbiAgfSlcblxuICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKClcbiAgYXdhaXQgcGFnZS5zZXRDb250ZW50KGNvbnRlbnQpXG5cbiAgY29uc3QgcGRmID0gYXdhaXQgcGFnZS5wZGYoe1xuICAgIGZvcm1hdDogJ2E0JyxcbiAgICBsYW5kc2NhcGU6IHRydWUsXG4gICAgcGF0aDogcHJvY2Vzcy5lbnYuSVNfT0ZGTElORSA/ICdjZXJ0aWZpY2F0ZS5wZGYnIDogbnVsbCxcbiAgICBwcmludEJhY2tncm91bmQ6IHRydWUsXG4gICAgcHJlZmVyQ1NTUGFnZVNpemU6IHRydWVcbiAgfSlcblxuICBhd2FpdCBicm93c2VyLmNsb3NlKClcblxuICBjb25zdCBzMyA9IG5ldyBTMygpXG5cbiAgYXdhaXQgczMucHV0T2JqZWN0KHtcbiAgICBCdWNrZXQ6ICd0aGloeG1zZXJ2ZXJsZXNzY2VydGlmaWNhdGVzaWduaXRlJyxcbiAgICBLZXk6IGAke2lkfS5wZGZgLFxuICAgIEFDTDogJ3B1YmxpYy1yZWFkJyxcbiAgICBCb2R5OiBwZGYsXG4gICAgQ29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9wZGYnLFxuICB9KS5wcm9taXNlKClcblxuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGU6IDIwMSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBtZXNzYWdlOiAnQ2VydGlmaWNhdGUgY3JlYXRlZCEnLFxuICAgICAgdXJsOiBgaHR0cHM6Ly90aGloeG1zZXJ2ZXJsZXNzY2VydGlmaWNhdGVzaWduaXRlLnMzLnNhLWVhc3QtMS5hbWF6b25hd3MuY29tLyR7aWR9LnBkZmAsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/generateCertificate.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: 'localhost',\n    endpoint: 'http://localhost:8000'\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE;\n};\nconst document = isOffline() ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options) : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduaXRlY2VydGlmaWNhdGUvLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHM/NDUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQiB9IGZyb20gJ2F3cy1zZGsnXG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIHJlZ2lvbjogJ2xvY2FsaG9zdCcsXG4gIGVuZHBvaW50OiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJ1xufVxuXG5jb25zdCBpc09mZmxpbmUgPSAoKSA9PiB7XG4gIHJldHVybiBwcm9jZXNzLmVudi5JU19PRkZMSU5FXG59XG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGlzT2ZmbGluZSgpID8gbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KG9wdGlvbnMpIDogbmV3IER5bmFtb0RCLkRvY3VtZW50Q2xpZW50KClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("handlebars");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/generateCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;