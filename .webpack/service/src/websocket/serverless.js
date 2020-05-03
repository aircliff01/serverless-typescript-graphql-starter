(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/websocket/serverless.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/helpers/logger.ts":
/*!**************************************!*\
  !*** ./src/common/helpers/logger.ts ***!
  \**************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logger\", function() { return Logger; });\nclass Logger {\n    constructor(context) {\n        this.context = context ? `[${context}]` : '';\n    }\n    info(message) {\n        console.info(`${this.context}: ${message}`);\n    }\n    debug(message) {\n        console.debug(`${this.context}: ${message}`);\n    }\n    error(error, message) {\n        console.error(`${this.context}: ${message || ''}`, error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL2hlbHBlcnMvbG9nZ2VyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9oZWxwZXJzL2xvZ2dlci50cz9lNGZjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICByZWFkb25seSBjb250ZXh0OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29udGV4dD86IHN0cmluZykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgPyBgWyR7Y29udGV4dH1dYCA6ICcnO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlOiBhbnkpIHtcbiAgICBjb25zb2xlLmluZm8oYCR7dGhpcy5jb250ZXh0fTogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZTogYW55KSB7XG4gICAgY29uc29sZS5kZWJ1ZyhgJHt0aGlzLmNvbnRleHR9OiAke21lc3NhZ2V9YCk7XG4gIH1cblxuICBlcnJvcihlcnJvcjogYW55LCBtZXNzYWdlPzogc3RyaW5nKSB7XG4gICAgY29uc29sZS5lcnJvcihgJHt0aGlzLmNvbnRleHR9OiAke21lc3NhZ2UgfHwgJyd9YCwgZXJyb3IpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/helpers/logger.ts\n");

/***/ }),

/***/ "./src/common/providers/db.provider.ts":
/*!*********************************************!*\
  !*** ./src/common/providers/db.provider.ts ***!
  \*********************************************/
/*! exports provided: DBProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DBProvider\", function() { return DBProvider; });\n/* harmony import */ var _graphql_modules_di__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @graphql-modules/di */ \"@graphql-modules/di\");\n/* harmony import */ var _graphql_modules_di__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graphql_modules_di__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_helpers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/helpers/logger */ \"./src/common/helpers/logger.ts\");\n/* harmony import */ var data_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data-api-client */ \"data-api-client\");\n/* harmony import */ var data_api_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(data_api_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sql_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sql-query */ \"sql-query\");\n/* harmony import */ var sql_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sql_query__WEBPACK_IMPORTED_MODULE_3__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar DBProvider_1;\n\n\n\n\nlet DBProvider = DBProvider_1 = class DBProvider {\n    constructor() {\n        this.logger = new _common_helpers_logger__WEBPACK_IMPORTED_MODULE_1__[\"Logger\"](DBProvider_1.name);\n    }\n    static get insert() {\n        return sql_query__WEBPACK_IMPORTED_MODULE_3__[\"Query\"](this.dialect).insert();\n    }\n    static get select() {\n        return sql_query__WEBPACK_IMPORTED_MODULE_3__[\"Query\"](this.dialect).select();\n    }\n    static get update() {\n        return sql_query__WEBPACK_IMPORTED_MODULE_3__[\"Query\"](this.dialect).update();\n    }\n    static get remove() {\n        return sql_query__WEBPACK_IMPORTED_MODULE_3__[\"Query\"](this.dialect).remove();\n    }\n    onInit() {\n        this.dataAPI = data_api_client__WEBPACK_IMPORTED_MODULE_2__({\n            secretArn: process.env.SECRET_ARN,\n            resourceArn: process.env.RESOURCE_ARN,\n            database: process.env.DB_NAME,\n        });\n        this.logger.info('Serverless Data API initialized!');\n    }\n    async dataQuery(query, params) {\n        this.logger.debug(`[query]: ${query}, [params]: ${params}`);\n        return await this.dataAPI\n            .query(query, params)\n            .then((result) => ({\n            error: null,\n            count: result === null || result === void 0 ? void 0 : result.numberOfRecordsUpdated,\n            record: (result === null || result === void 0 ? void 0 : result.records) && (result === null || result === void 0 ? void 0 : result.records[0]),\n            records: result === null || result === void 0 ? void 0 : result.records,\n        }))\n            .then(result => {\n            this.logger.debug(`[result]: ${JSON.stringify(result, null, 2)}`);\n            return result;\n        })\n            .catch((error) => {\n            this.logger.error(error);\n            return { error };\n        });\n    }\n    async dataTransactionQuery(queries) {\n        const transaction = this.dataAPI.transaction();\n        for (const query of queries) {\n            this.logger.debug(`[transactionQuery]: ${query.query}, [params]: ${query.params}`);\n            transaction.query(query.query, query.params);\n        }\n        return await transaction\n            .rollback((_, status) => {\n            this.logger.debug(`[transactionRollbackStatus]: ${JSON.stringify(status, null, 2)}`);\n        })\n            .commit()\n            .then((_) => ({ success: true }))\n            .catch((error) => {\n            this.logger.error(error);\n            return { success: false, error };\n        });\n    }\n};\nDBProvider.dialect = 'mysql';\nDBProvider = DBProvider_1 = __decorate([\n    Object(_graphql_modules_di__WEBPACK_IMPORTED_MODULE_0__[\"Injectable\"])()\n], DBProvider);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3Byb3ZpZGVycy9kYi5wcm92aWRlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vcHJvdmlkZXJzL2RiLnByb3ZpZGVyLnRzPzU2N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BncmFwaHFsLW1vZHVsZXMvZGknO1xuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGdyYXBocWwtbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ0Bjb21tb24vaGVscGVycy9sb2dnZXInO1xuaW1wb3J0IHsgREJEYXRhUmVzdWx0LCBEQlRyYW5zYWN0aW9uUmVzdWx0IH0gZnJvbSAnQGNvbW1vbi9tb2RlbHMvZGIubW9kZWwnO1xuaW1wb3J0ICogYXMgRGF0YUFwaSBmcm9tICdkYXRhLWFwaS1jbGllbnQnO1xuaW1wb3J0ICogYXMgc3FsIGZyb20gJ3NxbC1xdWVyeSc7XG5cbkBJbmplY3RhYmxlKCkgLy8gb25seSBmb3IgZ3JhcGhxbCBtb2R1bGVcbmV4cG9ydCBjbGFzcyBEQlByb3ZpZGVyIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIHJlYWRvbmx5IGRpYWxlY3QgPSAnbXlzcWwnO1xuICAvLyB0aGlzIGlzIHVzZWQgZm9yIGJ1aWxkaW5nIGluc2VydCBzcWwgcXVlcmllcy5cbiAgLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL2RyZXNlbmRlL25vZGUtc3FsLXF1ZXJ5I3JlYWRtZVxuICBzdGF0aWMgZ2V0IGluc2VydCgpIHtcbiAgICByZXR1cm4gc3FsLlF1ZXJ5KHRoaXMuZGlhbGVjdCkuaW5zZXJ0KCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHNlbGVjdCgpIHtcbiAgICByZXR1cm4gc3FsLlF1ZXJ5KHRoaXMuZGlhbGVjdCkuc2VsZWN0KCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gc3FsLlF1ZXJ5KHRoaXMuZGlhbGVjdCkudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHJlbW92ZSgpIHtcbiAgICByZXR1cm4gc3FsLlF1ZXJ5KHRoaXMuZGlhbGVjdCkucmVtb3ZlKCk7XG4gIH1cblxuICBsb2dnZXIgPSBuZXcgTG9nZ2VyKERCUHJvdmlkZXIubmFtZSk7XG5cbiAgZGF0YUFQSTogRGF0YUFwaTtcblxuICBvbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhQVBJID0gRGF0YUFwaSh7XG4gICAgICBzZWNyZXRBcm46IHByb2Nlc3MuZW52LlNFQ1JFVF9BUk4sXG4gICAgICByZXNvdXJjZUFybjogcHJvY2Vzcy5lbnYuUkVTT1VSQ0VfQVJOLFxuICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gICAgfSk7XG5cbiAgICB0aGlzLmxvZ2dlci5pbmZvKCdTZXJ2ZXJsZXNzIERhdGEgQVBJIGluaXRpYWxpemVkIScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIGEgcXVlcnkgdXNpbmcgdGhlIEFXUyBEYXRhIEFQSSwgdGhpcyBhdXRvbWF0aWNhbGx5IGludm9rZXMgdGhlIGNsaWVudCB0byBzZW5kIHRoZSBxdWVyaWVzXG4gICAqIHRvIEF1cm9yYSBzZXJ2ZXJsZXNzLlxuICAgKlxuICAgKiBUbyBzZWUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhbmQgcXVlcmllcyB0aGF0IGNhbiBiZSBzZW50IHRvIHRoZSBjbGllbnQsXG4gICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamVyZW15ZGFseS9kYXRhLWFwaS1jbGllbnRcbiAgICpcbiAgICogQHBhcmFtIHF1ZXJ5IFNRTCBxdWVyeSB0byBiZSBleGVjdXRlZFxuICAgKiBAcGFyYW0gcGFyYW1zIGFueSBhZGRpdGlvbmFsIHBhcmFtcyB0byB0aGUgcGFzc2VkIHRvIHRoZSBxdWVyeSBlbmdpbmVcbiAgICovXG4gIGFzeW5jIGRhdGFRdWVyeTxUPihxdWVyeTogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBQcm9taXNlPERCRGF0YVJlc3VsdDxUPj4ge1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGBbcXVlcnldOiAke3F1ZXJ5fSwgW3BhcmFtc106ICR7cGFyYW1zfWApO1xuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZGF0YUFQSVxuICAgICAgLnF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdDogYW55KSA9PlxuICAgICAgICAgICh7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGNvdW50OiByZXN1bHQ/Lm51bWJlck9mUmVjb3Jkc1VwZGF0ZWQsXG4gICAgICAgICAgICByZWNvcmQ6IHJlc3VsdD8ucmVjb3JkcyAmJiByZXN1bHQ/LnJlY29yZHNbMF0sXG4gICAgICAgICAgICByZWNvcmRzOiByZXN1bHQ/LnJlY29yZHMsXG4gICAgICAgICAgfSBhcyBEQkRhdGFSZXN1bHQ8VD4pLFxuICAgICAgKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYFtyZXN1bHRdOiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMil9YCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3IgfSBhcyBEQkRhdGFSZXN1bHQ8VD47XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBRdWVyaWVzIHRvIGJlIGV4ZWN1dGVkIGluIGEgdHJhbnNhY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIHF1ZXJpZXMgcXVlcmllcyB0byBiZSBleGVjdXRlZCBpbiBhIHRyYW5zYWN0aW9uXG4gICAqL1xuICBhc3luYyBkYXRhVHJhbnNhY3Rpb25RdWVyeShxdWVyaWVzOiB7IHF1ZXJ5OiBzdHJpbmc7IHBhcmFtcz86IGFueSB9W10pOiBQcm9taXNlPERCVHJhbnNhY3Rpb25SZXN1bHQ+IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuZGF0YUFQSS50cmFuc2FjdGlvbigpO1xuXG4gICAgLy8gbWFwIGFsbCBxdWVyaWVzIGluIHRoZSB0cmFuc2FjdGlvblxuICAgIGZvciAoY29uc3QgcXVlcnkgb2YgcXVlcmllcykge1xuICAgICAgdGhpcy5sb2dnZXIuZGVidWcoYFt0cmFuc2FjdGlvblF1ZXJ5XTogJHtxdWVyeS5xdWVyeX0sIFtwYXJhbXNdOiAke3F1ZXJ5LnBhcmFtc31gKTtcbiAgICAgIHRyYW5zYWN0aW9uLnF1ZXJ5KHF1ZXJ5LnF1ZXJ5LCBxdWVyeS5wYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIGV4ZWN1dGUgdGhlIHRyYW5zYWN0aW9uXG4gICAgcmV0dXJuIGF3YWl0IHRyYW5zYWN0aW9uXG4gICAgICAucm9sbGJhY2soKF8sIHN0YXR1cykgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgW3RyYW5zYWN0aW9uUm9sbGJhY2tTdGF0dXNdOiAke0pTT04uc3RyaW5naWZ5KHN0YXR1cywgbnVsbCwgMil9YCk7XG4gICAgICB9KVxuICAgICAgLmNvbW1pdCgpXG4gICAgICAudGhlbigoXzogYW55KSA9PiAoeyBzdWNjZXNzOiB0cnVlIH0gYXMgREJUcmFuc2FjdGlvblJlc3VsdCkpXG4gICAgICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvciB9IGFzIERCVHJhbnNhY3Rpb25SZXN1bHQ7XG4gICAgICB9KTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBb0JBO0FBMEVBO0FBMUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFZQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdGQTtBQURBO0FBREE7QUFDQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/common/providers/db.provider.ts\n");

/***/ }),

/***/ "./src/websocket/handlers/socket-connection.handler.ts":
/*!*************************************************************!*\
  !*** ./src/websocket/handlers/socket-connection.handler.ts ***!
  \*************************************************************/
/*! exports provided: SocketConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocketConnection\", function() { return SocketConnection; });\nclass SocketConnection {\n    constructor(manager) {\n        this.manager = manager;\n    }\n    async handleEvent() {\n        return { result: 'Hello World', connectionId: this.manager.connectionId };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2Vic29ja2V0L2hhbmRsZXJzL3NvY2tldC1jb25uZWN0aW9uLmhhbmRsZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L2hhbmRsZXJzL3NvY2tldC1jb25uZWN0aW9uLmhhbmRsZXIudHM/YTEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAd2Vic29ja2V0L21vZGVscy9ldmVudC1oYW5kbGVyLm1vZGVsJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gJ0B3ZWJzb2NrZXQvbW9kZWxzL2V2ZW50LW1hbmFnZXIubW9kZWwnO1xuXG4vKipcbiAqIEhhbmRsZXMgYSBuZXcgc29ja2V0IGNvbm5lY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNvY2tldENvbm5lY3Rpb24gaW1wbGVtZW50cyBFdmVudEhhbmRsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hbmFnZXI6IEV2ZW50TWFuYWdlcikge31cblxuICBhc3luYyBoYW5kbGVFdmVudCgpIHtcbiAgICAvLyBkbyBzb21ldGhpbmcgdXNlciBoZXJlIGxpa2Ugc2F2aW5nIHRoZSBjb25uZWN0aW9uIGlkIGludG8gREJcbiAgICByZXR1cm4geyByZXN1bHQ6ICdIZWxsbyBXb3JsZCcsIGNvbm5lY3Rpb25JZDogdGhpcy5tYW5hZ2VyLmNvbm5lY3Rpb25JZCB9O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/websocket/handlers/socket-connection.handler.ts\n");

/***/ }),

/***/ "./src/websocket/handlers/socket-disconnection.handler.ts":
/*!****************************************************************!*\
  !*** ./src/websocket/handlers/socket-disconnection.handler.ts ***!
  \****************************************************************/
/*! exports provided: SocketDisconnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocketDisconnection\", function() { return SocketDisconnection; });\nclass SocketDisconnection {\n    constructor(manager) {\n        this.manager = manager;\n    }\n    async handleEvent() {\n        return { result: 'Session deleted', connectionId: this.manager.connectionId };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2Vic29ja2V0L2hhbmRsZXJzL3NvY2tldC1kaXNjb25uZWN0aW9uLmhhbmRsZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L2hhbmRsZXJzL3NvY2tldC1kaXNjb25uZWN0aW9uLmhhbmRsZXIudHM/YjI3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICdAd2Vic29ja2V0L21vZGVscy9ldmVudC1oYW5kbGVyLm1vZGVsJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gJ0B3ZWJzb2NrZXQvbW9kZWxzL2V2ZW50LW1hbmFnZXIubW9kZWwnO1xuXG4vKipcbiAqIEhhbmRsZXMgc29ja2V0IGRpc2Nvbm5lY3Rpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBTb2NrZXREaXNjb25uZWN0aW9uIGltcGxlbWVudHMgRXZlbnRIYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYW5hZ2VyOiBFdmVudE1hbmFnZXIpIHt9XG5cbiAgYXN5bmMgaGFuZGxlRXZlbnQoKSB7XG4gICAgLy8gRG8gc29tZXRoaW5nIHVzZWZ1bCBsaWtlIGRlbGV0aW5nIHRoZSBjb25uZWN0aW9uIGlkIGZyb20gREJcbiAgICByZXR1cm4geyByZXN1bHQ6ICdTZXNzaW9uIGRlbGV0ZWQnLCBjb25uZWN0aW9uSWQ6IHRoaXMubWFuYWdlci5jb25uZWN0aW9uSWQgfTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/websocket/handlers/socket-disconnection.handler.ts\n");

/***/ }),

/***/ "./src/websocket/models/event-manager.model.ts":
/*!*****************************************************!*\
  !*** ./src/websocket/models/event-manager.model.ts ***!
  \*****************************************************/
/*! exports provided: EventManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventManager\", function() { return EventManager; });\n/* harmony import */ var _common_providers_db_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/providers/db.provider */ \"./src/common/providers/db.provider.ts\");\n/* harmony import */ var _common_helpers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/helpers/logger */ \"./src/common/helpers/logger.ts\");\n/* harmony import */ var _websocket_models_socket_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @websocket/models/socket.model */ \"./src/websocket/models/socket.model.ts\");\n\n\n\nclass EventManager {\n    constructor(connectionId, event) {\n        this.logger = new _common_helpers_logger__WEBPACK_IMPORTED_MODULE_1__[\"Logger\"](EventManager.name);\n        this.connectionId = connectionId;\n        this.event = event;\n        const domainName = event.requestContext.domainName;\n        const stage = event.requestContext.stage;\n        this.endpoint = `https://${domainName}/${stage}`;\n        this.logger.debug(`Endpoint created: ${this.endpoint}`);\n        this.socket = new _websocket_models_socket_model__WEBPACK_IMPORTED_MODULE_2__[\"Socket\"](this.endpoint);\n        this.db = new _common_providers_db_provider__WEBPACK_IMPORTED_MODULE_0__[\"DBProvider\"]();\n        this.db.onInit();\n        this.eventBody = (event.body && JSON.parse(event.body)) || {};\n        this.queryParams = event.queryStringParameters || {};\n    }\n    async send(data, connectionId) {\n        return this.socket.sendMessage(data, connectionId || this.connectionId);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2Vic29ja2V0L21vZGVscy9ldmVudC1tYW5hZ2VyLm1vZGVsLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnNvY2tldC9tb2RlbHMvZXZlbnQtbWFuYWdlci5tb2RlbC50cz9lMjY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBEQlByb3ZpZGVyIH0gZnJvbSAnQGNvbW1vbi9wcm92aWRlcnMvZGIucHJvdmlkZXInO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQGNvbW1vbi9oZWxwZXJzL2xvZ2dlcic7XG5pbXBvcnQgeyBTb2NrZXQgfSBmcm9tICdAd2Vic29ja2V0L21vZGVscy9zb2NrZXQubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRNYW5hZ2VyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXIgPSBuZXcgTG9nZ2VyKEV2ZW50TWFuYWdlci5uYW1lKTtcblxuICBjb25uZWN0aW9uSWQ6IHN0cmluZztcbiAgZW5kcG9pbnQ6IHN0cmluZztcbiAgZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50O1xuICBkYjogREJQcm92aWRlcjtcbiAgZXZlbnRCb2R5OiBhbnk7XG4gIHF1ZXJ5UGFyYW1zOiBhbnk7XG4gIHNvY2tldDogU29ja2V0O1xuXG4gIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb25JZDogc3RyaW5nLCBldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnQpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb25JZCA9IGNvbm5lY3Rpb25JZDtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG5cbiAgICBjb25zdCBkb21haW5OYW1lID0gZXZlbnQucmVxdWVzdENvbnRleHQuZG9tYWluTmFtZTtcbiAgICBjb25zdCBzdGFnZSA9IGV2ZW50LnJlcXVlc3RDb250ZXh0LnN0YWdlO1xuICAgIHRoaXMuZW5kcG9pbnQgPSBgaHR0cHM6Ly8ke2RvbWFpbk5hbWV9LyR7c3RhZ2V9YDtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgRW5kcG9pbnQgY3JlYXRlZDogJHt0aGlzLmVuZHBvaW50fWApO1xuXG4gICAgLy8gc29ja2V0IGlzIHVzZWQgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB3aWRnZXRzIG9uIHRoZSBicm93c2Vyc1xuICAgIHRoaXMuc29ja2V0ID0gbmV3IFNvY2tldCh0aGlzLmVuZHBvaW50KTtcblxuICAgIC8vIGNyZWF0ZSBhIGRiIGNsaWVudCBpbnN0YW5jZVxuICAgIHRoaXMuZGIgPSBuZXcgREJQcm92aWRlcigpO1xuICAgIHRoaXMuZGIub25Jbml0KCk7IC8vIHN0YXJ0IHRoZSBjbGllbnRcblxuICAgIC8vIHJldHJpZXZlIHRoZSBib2R5IGZvciB0aGUgcmVxdWVzdFxuICAgIHRoaXMuZXZlbnRCb2R5ID0gKGV2ZW50LmJvZHkgJiYgSlNPTi5wYXJzZShldmVudC5ib2R5KSkgfHwge307XG5cbiAgICAvLyByZXRyaXZlIHF1ZXJ5IHBhcmFtc1xuICAgIHRoaXMucXVlcnlQYXJhbXMgPSBldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBkYXRhIHRvIGNsaWVudC9icm93c2VyXG4gICAqXG4gICAqIEBwYXJhbSBkYXRhIGRhdGEgdG8gYmUgc2VudFxuICAgKiBAcGFyYW0gY29ubmVjdGlvbklkIGNvbm5lY3Rpb24gaWQgZnJvbSBBUEkgZ2F0ZXdheSBhc3NpZ25lZCB0byBjbGllbnQgd2hlbiB0aGV5IGNvbm5lY3RlZFxuICAgKi9cbiAgYXN5bmMgc2VuZChkYXRhOiBhbnksIGNvbm5lY3Rpb25JZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNvY2tldC5zZW5kTWVzc2FnZShkYXRhLCBjb25uZWN0aW9uSWQgfHwgdGhpcy5jb25uZWN0aW9uSWQpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBVkE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/websocket/models/event-manager.model.ts\n");

/***/ }),

/***/ "./src/websocket/models/event-response.model.ts":
/*!******************************************************!*\
  !*** ./src/websocket/models/event-response.model.ts ***!
  \******************************************************/
/*! exports provided: Success, InvalidAction, InternalError, SocketMessageType, SocketMessage, SocketError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Success\", function() { return Success; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InvalidAction\", function() { return InvalidAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InternalError\", function() { return InternalError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocketMessageType\", function() { return SocketMessageType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocketMessage\", function() { return SocketMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SocketError\", function() { return SocketError; });\nconst Success = {\n    statusCode: 200,\n    body: 'success',\n};\nconst InvalidAction = {\n    statusCode: 400,\n    body: 'invalid action type',\n};\nconst InternalError = {\n    statusCode: 500,\n    body: 'An error occurred with the request',\n};\nvar SocketMessageType;\n(function (SocketMessageType) {\n    SocketMessageType[\"ERROR\"] = \"error\";\n    SocketMessageType[\"GET_SESSION\"] = \"getSession\";\n})(SocketMessageType || (SocketMessageType = {}));\nclass SocketMessage {\n    constructor(type, message) {\n        Object.assign(this, { messageType: type, message });\n    }\n}\nclass SocketError {\n    constructor(message) {\n        Object.assign(this, { messageType: SocketMessageType.ERROR, message: { error: message } });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2Vic29ja2V0L21vZGVscy9ldmVudC1yZXNwb25zZS5tb2RlbC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy93ZWJzb2NrZXQvbW9kZWxzL2V2ZW50LXJlc3BvbnNlLm1vZGVsLnRzPzczMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5UmVzdWx0IH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmV4cG9ydCBjb25zdCBTdWNjZXNzOiBBUElHYXRld2F5UHJveHlSZXN1bHQgPSB7XG4gIHN0YXR1c0NvZGU6IDIwMCxcbiAgYm9keTogJ3N1Y2Nlc3MnLFxufTtcblxuZXhwb3J0IGNvbnN0IEludmFsaWRBY3Rpb246IEFQSUdhdGV3YXlQcm94eVJlc3VsdCA9IHtcbiAgc3RhdHVzQ29kZTogNDAwLFxuICBib2R5OiAnaW52YWxpZCBhY3Rpb24gdHlwZScsXG59O1xuXG5leHBvcnQgY29uc3QgSW50ZXJuYWxFcnJvcjogQVBJR2F0ZXdheVByb3h5UmVzdWx0ID0ge1xuICBzdGF0dXNDb2RlOiA1MDAsXG4gIGJvZHk6ICdBbiBlcnJvciBvY2N1cnJlZCB3aXRoIHRoZSByZXF1ZXN0Jyxcbn07XG5cbmV4cG9ydCBlbnVtIFNvY2tldE1lc3NhZ2VUeXBlIHtcbiAgRVJST1IgPSAnZXJyb3InLFxuICBHRVRfU0VTU0lPTiA9ICdnZXRTZXNzaW9uJyxcbn1cblxuZXhwb3J0IGNsYXNzIFNvY2tldE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcih0eXBlOiBTb2NrZXRNZXNzYWdlVHlwZSwgbWVzc2FnZTogYW55KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IG1lc3NhZ2VUeXBlOiB0eXBlLCBtZXNzYWdlIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTb2NrZXRFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IGFueSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBtZXNzYWdlVHlwZTogU29ja2V0TWVzc2FnZVR5cGUuRVJST1IsIG1lc3NhZ2U6IHsgZXJyb3I6IG1lc3NhZ2UgfSB9KTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/websocket/models/event-response.model.ts\n");

/***/ }),

/***/ "./src/websocket/models/route-type.enum.ts":
/*!*************************************************!*\
  !*** ./src/websocket/models/route-type.enum.ts ***!
  \*************************************************/
/*! exports provided: RouteType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RouteType\", function() { return RouteType; });\nvar RouteType;\n(function (RouteType) {\n    RouteType[\"CONNECT\"] = \"$connect\";\n    RouteType[\"DISCONNECT\"] = \"$disconnect\";\n})(RouteType || (RouteType = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2Vic29ja2V0L21vZGVscy9yb3V0ZS10eXBlLmVudW0udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L21vZGVscy9yb3V0ZS10eXBlLmVudW0udHM/NjQ4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBSb3V0ZVR5cGUge1xuICBDT05ORUNUID0gJyRjb25uZWN0JyxcbiAgRElTQ09OTkVDVCA9ICckZGlzY29ubmVjdCcsXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/websocket/models/route-type.enum.ts\n");

/***/ }),

/***/ "./src/websocket/models/socket.model.ts":
/*!**********************************************!*\
  !*** ./src/websocket/models/socket.model.ts ***!
  \**********************************************/
/*! exports provided: Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Socket\", function() { return Socket; });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_helpers_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/helpers/logger */ \"./src/common/helpers/logger.ts\");\n\n\nclass Socket {\n    constructor(endpoint) {\n        this.endpoint = endpoint;\n        this.logger = new _common_helpers_logger__WEBPACK_IMPORTED_MODULE_1__[\"Logger\"](Socket.name);\n        this.gatewayMgmtAPI = new aws_sdk__WEBPACK_IMPORTED_MODULE_0__[\"ApiGatewayManagementApi\"]({\n            apiVersion: '2018-11-29',\n            endpoint,\n        });\n        this.logger.debug(`Endpoint created: ${this.endpoint}`);\n    }\n    async sendMessage(data, connectionId) {\n        const params = {\n            ConnectionId: connectionId,\n            Data: JSON.stringify(data),\n        };\n        return this.gatewayMgmtAPI.postToConnection(params).promise();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2Vic29ja2V0L21vZGVscy9zb2NrZXQubW9kZWwudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L21vZGVscy9zb2NrZXQubW9kZWwudHM/YmU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlHYXRld2F5TWFuYWdlbWVudEFwaSB9IGZyb20gJ2F3cy1zZGsnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQGNvbW1vbi9oZWxwZXJzL2xvZ2dlcic7XG5pbXBvcnQgeyBQb3N0VG9Db25uZWN0aW9uUmVxdWVzdCB9IGZyb20gJ2F3cy1zZGsvY2xpZW50cy9hcGlnYXRld2F5bWFuYWdlbWVudGFwaSc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNvbm5lY3Rpb24gd2l0aCB0aGUgQVBJIEdhdGV3YXkgYW5kIHVzZXMgdGhlIHNwZWNpZmllZCBlbmRwb2ludCB0byBzdXBwb3J0XG4gKiBjb21tdW5pY2F0aW9uIHdpdGggYnJvd3NlcnMgdG8gc2VuZCBtZXNzYWdlcyBiYWNrIGFuZCBmb3J0aCB0aHJvdWdoIHRoZSBzb2NrZXQgY29ubmVjdGlvblxuICovXG5leHBvcnQgY2xhc3MgU29ja2V0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXIgPSBuZXcgTG9nZ2VyKFNvY2tldC5uYW1lKTtcblxuICBnYXRld2F5TWdtdEFQSTogQXBpR2F0ZXdheU1hbmFnZW1lbnRBcGk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nKSB7XG4gICAgLy8gY3JlYXRlIGFuIGFwaSBtYW5hZ21lbnQgaW5zdGFuY2VcbiAgICB0aGlzLmdhdGV3YXlNZ210QVBJID0gbmV3IEFwaUdhdGV3YXlNYW5hZ2VtZW50QXBpKHtcbiAgICAgIGFwaVZlcnNpb246ICcyMDE4LTExLTI5JyxcbiAgICAgIGVuZHBvaW50LFxuICAgIH0pO1xuXG4gICAgdGhpcy5sb2dnZXIuZGVidWcoYEVuZHBvaW50IGNyZWF0ZWQ6ICR7dGhpcy5lbmRwb2ludH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gYSBjb25uZWN0ZWQgY2xpZW50L2Jyb3dzZXIgdXNpbmcgd2Vic29ja2V0c1xuICAgKiBAcGFyYW0gZGF0YSBkYXRhIHRvIGJlIHNlbnQgb3V0IHRvIHRoZSBjbGllbnQvYnJvd3NlclxuICAgKiBAcGFyYW0gY29ubmVjdGlvbklkIGNvbm5lY3Rpb24gaWQgY3JlYXRlZCBieSB0aGUgQVBJIGdhdGV3YXlcbiAgICovXG4gIGFzeW5jIHNlbmRNZXNzYWdlKGRhdGE6IGFueSwgY29ubmVjdGlvbklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXM6IFBvc3RUb0Nvbm5lY3Rpb25SZXF1ZXN0ID0ge1xuICAgICAgQ29ubmVjdGlvbklkOiBjb25uZWN0aW9uSWQsXG4gICAgICBEYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuZ2F0ZXdheU1nbXRBUEkucG9zdFRvQ29ubmVjdGlvbihwYXJhbXMpLnByb21pc2UoKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBS0E7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/websocket/models/socket.model.ts\n");

/***/ }),

/***/ "./src/websocket/serverless.ts":
/*!*************************************!*\
  !*** ./src/websocket/serverless.ts ***!
  \*************************************/
/*! exports provided: handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handler\", function() { return handler; });\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _websocket_models_event_manager_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @websocket/models/event-manager.model */ \"./src/websocket/models/event-manager.model.ts\");\n/* harmony import */ var _websocket_models_route_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @websocket/models/route-type.enum */ \"./src/websocket/models/route-type.enum.ts\");\n/* harmony import */ var _websocket_models_event_response_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @websocket/models/event-response.model */ \"./src/websocket/models/event-response.model.ts\");\n/* harmony import */ var _common_helpers_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/helpers/logger */ \"./src/common/helpers/logger.ts\");\n/* harmony import */ var _handlers_socket_connection_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers/socket-connection.handler */ \"./src/websocket/handlers/socket-connection.handler.ts\");\n/* harmony import */ var _handlers_socket_disconnection_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/socket-disconnection.handler */ \"./src/websocket/handlers/socket-disconnection.handler.ts\");\n\n\n\n\n\n\n\nconst LOGGER_CONTEXT = 'Serverless.websocket';\nconst logger = new _common_helpers_logger__WEBPACK_IMPORTED_MODULE_4__[\"Logger\"](LOGGER_CONTEXT);\nconst handler = async (event) => {\n    return await processEvent(event).catch((error) => {\n        logger.error(error, 'Error occurred while processing WS Event');\n        return _websocket_models_event_response_model__WEBPACK_IMPORTED_MODULE_3__[\"InternalError\"];\n    });\n};\nconst processEvent = async (event) => {\n    const context = event.requestContext;\n    const connectionId = context.connectionId;\n    const eventManager = new _websocket_models_event_manager_model__WEBPACK_IMPORTED_MODULE_1__[\"EventManager\"](connectionId, event);\n    let handler;\n    logger.debug(`Recieved eventType: ${context.eventType}, routeKey: ${context.routeKey}`);\n    switch (context.routeKey) {\n        case _websocket_models_route_type_enum__WEBPACK_IMPORTED_MODULE_2__[\"RouteType\"].CONNECT:\n            handler = new _handlers_socket_connection_handler__WEBPACK_IMPORTED_MODULE_5__[\"SocketConnection\"](eventManager);\n            break;\n        case _websocket_models_route_type_enum__WEBPACK_IMPORTED_MODULE_2__[\"RouteType\"].DISCONNECT:\n            handler = new _handlers_socket_disconnection_handler__WEBPACK_IMPORTED_MODULE_6__[\"SocketDisconnection\"](eventManager);\n            break;\n    }\n    if (!handler) {\n        return _websocket_models_event_response_model__WEBPACK_IMPORTED_MODULE_3__[\"InvalidAction\"];\n    }\n    const handlerRes = (await handler.handleEvent());\n    return handlerRes || _websocket_models_event_response_model__WEBPACK_IMPORTED_MODULE_3__[\"Success\"];\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2Vic29ja2V0L3NlcnZlcmxlc3MudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2Vic29ja2V0L3NlcnZlcmxlc3MudHM/NjA0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBBUElHYXRld2F5UHJveHlIYW5kbGVyLCBBUElHYXRld2F5RXZlbnQgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciB9IGZyb20gJ0B3ZWJzb2NrZXQvbW9kZWxzL2V2ZW50LW1hbmFnZXIubW9kZWwnO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnQHdlYnNvY2tldC9tb2RlbHMvZXZlbnQtaGFuZGxlci5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0ZVR5cGUgfSBmcm9tICdAd2Vic29ja2V0L21vZGVscy9yb3V0ZS10eXBlLmVudW0nO1xuaW1wb3J0IHsgSW50ZXJuYWxFcnJvciwgSW52YWxpZEFjdGlvbiwgU3VjY2VzcyB9IGZyb20gJ0B3ZWJzb2NrZXQvbW9kZWxzL2V2ZW50LXJlc3BvbnNlLm1vZGVsJztcblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQGNvbW1vbi9oZWxwZXJzL2xvZ2dlcic7XG5cbmltcG9ydCB7IFNvY2tldENvbm5lY3Rpb24gfSBmcm9tICcuL2hhbmRsZXJzL3NvY2tldC1jb25uZWN0aW9uLmhhbmRsZXInO1xuaW1wb3J0IHsgU29ja2V0RGlzY29ubmVjdGlvbiB9IGZyb20gJy4vaGFuZGxlcnMvc29ja2V0LWRpc2Nvbm5lY3Rpb24uaGFuZGxlcic7XG5cbmNvbnN0IExPR0dFUl9DT05URVhUID0gJ1NlcnZlcmxlc3Mud2Vic29ja2V0JztcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoTE9HR0VSX0NPTlRFWFQpO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlcjogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICByZXR1cm4gYXdhaXQgcHJvY2Vzc0V2ZW50KGV2ZW50KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICBsb2dnZXIuZXJyb3IoZXJyb3IsICdFcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIFdTIEV2ZW50Jyk7XG5cbiAgICByZXR1cm4gSW50ZXJuYWxFcnJvcjtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFByb2Nlc3NlcyBhbiBldmVudCByZWNpZXZlZCBmcm9tIGxhbWJkYSB0aHJvdWdoIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gKlxuICogQHBhcmFtIGV2ZW50IGV2ZW50IHRvIGJlIHByb2Nlc3NlZFxuICovXG5jb25zdCBwcm9jZXNzRXZlbnQgPSBhc3luYyAoZXZlbnQ6IEFQSUdhdGV3YXlFdmVudCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gZXZlbnQucmVxdWVzdENvbnRleHQ7XG4gIGNvbnN0IGNvbm5lY3Rpb25JZCA9IGNvbnRleHQuY29ubmVjdGlvbklkO1xuICBjb25zdCBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKGNvbm5lY3Rpb25JZCwgZXZlbnQpO1xuXG4gIGxldCBoYW5kbGVyOiBFdmVudEhhbmRsZXI7XG4gIGxvZ2dlci5kZWJ1ZyhgUmVjaWV2ZWQgZXZlbnRUeXBlOiAke2NvbnRleHQuZXZlbnRUeXBlfSwgcm91dGVLZXk6ICR7Y29udGV4dC5yb3V0ZUtleX1gKTtcblxuICBzd2l0Y2ggKGNvbnRleHQucm91dGVLZXkpIHtcbiAgICBjYXNlIFJvdXRlVHlwZS5DT05ORUNUOlxuICAgICAgaGFuZGxlciA9IG5ldyBTb2NrZXRDb25uZWN0aW9uKGV2ZW50TWFuYWdlcik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFJvdXRlVHlwZS5ESVNDT05ORUNUOlxuICAgICAgaGFuZGxlciA9IG5ldyBTb2NrZXREaXNjb25uZWN0aW9uKGV2ZW50TWFuYWdlcik7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmICghaGFuZGxlcikge1xuICAgIHJldHVybiBJbnZhbGlkQWN0aW9uO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlclJlcyA9IChhd2FpdCBoYW5kbGVyLmhhbmRsZUV2ZW50KCkpIGFzIGFueTtcbiAgcmV0dXJuIGhhbmRsZXJSZXMgfHwgU3VjY2Vzcztcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/websocket/serverless.ts\n");

/***/ }),

/***/ "@graphql-modules/di":
/*!**************************************!*\
  !*** external "@graphql-modules/di" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@graphql-modules/di\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGdyYXBocWwtbW9kdWxlcy9kaS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBncmFwaHFsLW1vZHVsZXMvZGlcIj80YTQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncmFwaHFsLW1vZHVsZXMvZGlcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@graphql-modules/di\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXNkay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImF3cy1zZGtcIj81MTQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF3cy1zZGtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///aws-sdk\n");

/***/ }),

/***/ "data-api-client":
/*!**********************************!*\
  !*** external "data-api-client" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"data-api-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hcGktY2xpZW50LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0YS1hcGktY2xpZW50XCI/MjcwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRhLWFwaS1jbGllbnRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///data-api-client\n");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reflect-metadata\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdC1tZXRhZGF0YS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIj8wYWJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///reflect-metadata\n");

/***/ }),

/***/ "sql-query":
/*!****************************!*\
  !*** external "sql-query" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sql-query\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsLXF1ZXJ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3FsLXF1ZXJ5XCI/YTVjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzcWwtcXVlcnlcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///sql-query\n");

/***/ })

/******/ })));