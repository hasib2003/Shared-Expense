"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Componenets_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Componenets/Login */ \"./Componenets/Login.js\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [islogin, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (islogin) {\n            router.push(\"/home\");\n        } else {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(\"http://localhost:4000\", \"/api/room/enter\")).then((res)=>{\n                console.log(res.data);\n                if (res.data[\"status\"] === \"allowed\") {\n                    setLogin(true);\n                }\n            }).catch((err)=>{\n                console.log(err);\n                alert(err);\n            });\n        }\n    }, [\n        islogin\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().mainContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasib/web_development/React_Projects/expense/client/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Now you are tension free and manage all expense here\"\n                    }, void 0, false, {\n                        fileName: \"/home/hasib/web_development/React_Projects/expense/client/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hasib/web_development/React_Projects/expense/client/pages/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Componenets_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                setLogin: setLogin\n            }, void 0, false, {\n                fileName: \"/home/hasib/web_development/React_Projects/expense/client/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hasib/web_development/React_Projects/expense/client/pages/index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"O5LMnnRoftbfpyyRDrBY2m/42t0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUNNO0FBQ0g7QUFDSjtBQUNiO0FBR1gsU0FBU00sT0FBTzs7SUFFN0IsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksU0FBUUMsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBR3pDRCxnREFBU0EsQ0FDVCxJQUNBO1FBQ0UsSUFBR00sU0FBUTtZQUNYRCxPQUFPRyxJQUFJLENBQUM7UUFDWixPQUVBO1lBQ0VMLGlEQUFTLENBQ1AsR0FBaUMsT0FBOUJPLHVCQUE2QixFQUFDLG9CQUNqQ0csSUFBSSxDQUNKLENBQUNDLE1BQ0Q7Z0JBQ0VDLFFBQVFDLEdBQUcsQ0FBQ0YsSUFBSUcsSUFBSTtnQkFDcEIsSUFBSUgsSUFBSUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxXQUMzQjtvQkFDRVYsU0FBUyxJQUFJO2dCQUNmLENBQUM7WUFDSCxHQUNBVyxLQUFLLENBQ0wsQ0FBQ0MsTUFDRDtnQkFDRUosUUFBUUMsR0FBRyxDQUFDRztnQkFDWkMsTUFBTUQ7WUFDUjtRQUVKLENBQUM7SUFDSCxHQUFFO1FBQUNiO0tBQVE7SUFJWCxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBV3ZCLCtFQUFtQjs7MEJBR2pDLDhEQUFDc0I7Z0JBQUlDLFdBQVd2Qix3RUFBWTs7a0NBQzFCLDhEQUFDMEI7a0NBQUc7Ozs7OztrQ0FHSiw4REFBQ0M7a0NBQUc7Ozs7Ozs7Ozs7OzswQkFNTiw4REFBQzVCLDBEQUFLQTtnQkFBQ1MsVUFBWUE7Ozs7Ozs7Ozs7OztBQVN6QixDQUFDO0dBNUR1Qkg7O1FBRVBGLGtEQUFTQTs7O0tBRkZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9Db21wb25lbmV0cy9Mb2dpblwiXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9pbmRleC5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpc2xvZ2luLHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgdXNlRWZmZWN0KFxuICAoKT0+XG4gIHtcbiAgICBpZihpc2xvZ2luKXtcbiAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpXG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBheGlvcy5nZXQoXG4gICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFVkVSfS9hcGkvcm9vbS9lbnRlcmBcbiAgICAgICkudGhlbihcbiAgICAgICAgKHJlcyk9PlxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgaWYgKHJlcy5kYXRhW1wic3RhdHVzXCJdID09PSBcImFsbG93ZWRcIilcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZXRMb2dpbih0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICkuY2F0Y2goXG4gICAgICAgIChlcnIpPT5cbiAgICAgICAge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICBhbGVydChlcnIpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9XG4gIH0sW2lzbG9naW5dXG4gICAgKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWFpbkNvbnRhaW5lcn0+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBXZWxjb21lIGJhY2tcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIE5vdyB5b3UgYXJlIHRlbnNpb24gZnJlZSBhbmQgbWFuYWdlIGFsbCBleHBlbnNlIGhlcmVcbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxMb2dpbiBzZXRMb2dpbiA9IHtzZXRMb2dpbn0gPjwvTG9naW4+XG5cblxuXG4gICAgICBcblxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJMb2dpbiIsInN0eWxlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkhvbWUiLCJyb3V0ZXIiLCJpc2xvZ2luIiwic2V0TG9naW4iLCJwdXNoIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NFVkVSIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW5Db250YWluZXIiLCJoZWFkZXIiLCJoMSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});