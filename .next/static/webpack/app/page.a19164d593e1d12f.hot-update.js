"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_GrMenu_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=GrMenu!=!react-icons/gr */ \"(app-pages-browser)/./node_modules/react-icons/gr/index.esm.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"(app-pages-browser)/./components/navbar.tsx\");\n/* harmony import */ var _navItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navItems */ \"(app-pages-browser)/./components/navItems.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function closeModal() {\n        setIsOpen(false);\n    }\n    function openModal() {\n        setIsOpen(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-5   sm:px-[50px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-[80px] fixed top-0 bg-white z-[9999] flex justify-between w-full  items-center shadow-sm lg:max-w-[1280px] mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-3xl \",\n                    children: \"askuni\"\n                }, void 0, false, {\n                    fileName: \"/Users/admin/dev/askuni/components/Header.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    isOpen: isOpen,\n                    closeModal: closeModal\n                }, void 0, false, {\n                    fileName: \"/Users/admin/dev/askuni/components/Header.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navItems__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    view: \"screen\"\n                }, void 0, false, {\n                    fileName: \"/Users/admin/dev/askuni/components/Header.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GrMenu_react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrMenu, {\n                    className: \"w-6 h-6 text-gray-700 cursor-pointer\",\n                    onClick: openModal\n                }, void 0, false, {\n                    fileName: \"/Users/admin/dev/askuni/components/Header.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/admin/dev/askuni/components/Header.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/admin/dev/askuni/components/Header.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDQTtBQUNWO0FBQ0c7QUFFakMsTUFBTUssU0FBUzs7SUFDYixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsU0FBU087UUFDUEQsVUFBVTtJQUNaO0lBRUEsU0FBU0U7UUFDUEYsVUFBVTtJQUNaO0lBQ0EscUJBQ0UsOERBQUNHO1FBQU9DLFdBQVU7a0JBQ2hCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQXNCOzs7Ozs7OEJBQ3JDLDhEQUFDUiwrQ0FBTUE7b0JBQUNHLFFBQVFBO29CQUFRRSxZQUFZQTs7Ozs7OzhCQUNwQyw4REFBQ0osaURBQU9BO29CQUFDUyxNQUFLOzs7Ozs7OEJBQ2QsOERBQUNYLGdGQUFNQTtvQkFDTFMsV0FBVTtvQkFDVkcsU0FBU0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25CO0dBdEJNSjtLQUFBQTtBQXdCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2dyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IE5hdkl0ZW0gZnJvbSBcIi4vbmF2SXRlbXNcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIHNldElzT3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNSAgIHNtOnB4LVs1MHB4XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs4MHB4XSBmaXhlZCB0b3AtMCBiZy13aGl0ZSB6LVs5OTk5XSBmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgIGl0ZW1zLWNlbnRlciBzaGFkb3ctc20gbGc6bWF4LXctWzEyODBweF0gbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bCBcIj5hc2t1bmk8L2Rpdj5cbiAgICAgICAgPE5hdmJhciBpc09wZW49e2lzT3Blbn0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gLz5cbiAgICAgICAgPE5hdkl0ZW0gdmlldz1cInNjcmVlblwiIC8+XG4gICAgICAgIDxHck1lbnVcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtZ3JheS03MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHck1lbnUiLCJOYXZiYXIiLCJOYXZJdGVtIiwiSGVhZGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsInZpZXciLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Header.tsx\n"));

/***/ })

});