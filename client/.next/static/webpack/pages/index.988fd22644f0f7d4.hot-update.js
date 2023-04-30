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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst axios = __webpack_require__(/*! axios */ \"./node_modules/axios/dist/browser/axios.cjs\");\nconst niceList = __webpack_require__(/*! ../../utils/niceList.json */ \"../utils/niceList.json\");\nconst MerkleTree = __webpack_require__(/*! ../../utils/MerkleTree */ \"../utils/MerkleTree.js\");\nfunction Home() {\n    _s();\n    const serverUrl = \"http://localhost:1225\";\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const submitRequest = async ()=>{\n        // TODO: how do we prove to the server we're on the nice list?\n        const tree = new MerkleTree(niceList);\n        const index = niceList.findIndex((n)=>n === name);\n        const proof = tree.getProof(index);\n        const { data: gift  } = await axios.post(\"\".concat(serverUrl, \"/gift\"), {\n            // TODO: add request body parameters here!\n            proof: proof,\n            name: name\n        });\n        setResponse(gift);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Merkle Tree Application\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"Holiday gift list\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Check if you are on the list\"\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Name:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    label: \"Name\",\n                                    type: \"text\",\n                                    onChange: (e)=>{\n                                        setName(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),\n                            onClick: ()=>{\n                                submitRequest();\n                            },\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    response ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n                        children: response\n                    }, void 0, false, {\n                        fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brandonreyes/Documents/Educacion/Alchemy/merkle_tree/GiftList/client/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"qzFuLD73538cJ2Q664CFMXpolh0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDSTtBQUNjO0FBQy9DLE1BQU1HLFFBQVFDLG1CQUFPQSxDQUFDLDBEQUFPO0FBQzdCLE1BQU1DLFdBQVdELG1CQUFPQSxDQUFDLHlEQUEyQjtBQUNwRCxNQUFNRSxhQUFhRixtQkFBT0EsQ0FBQyxzREFBd0I7QUFFcEMsU0FBU0csT0FBTzs7SUFDN0IsTUFBTUMsWUFBWTtJQUVsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1ZLGdCQUFnQixVQUFZO1FBQ2hDLDhEQUE4RDtRQUM5RCxNQUFNQyxPQUFPLElBQUlSLFdBQVdEO1FBQzVCLE1BQU1VLFFBQVFWLFNBQVNXLFNBQVMsQ0FBQyxDQUFDQyxJQUFNQSxNQUFNUjtRQUM5QyxNQUFNUyxRQUFRSixLQUFLSyxRQUFRLENBQUNKO1FBRTVCLE1BQU0sRUFBRUssTUFBTUMsS0FBSSxFQUFFLEdBQUcsTUFBTWxCLE1BQU1tQixJQUFJLENBQUMsR0FBYSxPQUFWZCxXQUFVLFVBQVE7WUFDM0QsMENBQTBDO1lBQzFDVSxPQUFPQTtZQUNQVCxNQUFNQTtRQUNSO1FBRUFHLFlBQVlTO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBV3RCLDBFQUFnQjs7MEJBQzlCLDhEQUFDRixrREFBSUE7O2tDQUNILDhEQUFDMEI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtsQixNQUFLO3dCQUFjbUIsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLUixXQUFXdEIscUVBQVc7O2tDQUMxQiw4REFBQytCO3dCQUFHVCxXQUFXdEIsc0VBQVk7a0NBQUU7Ozs7OztrQ0FDN0IsOERBQUNnQztrQ0FBRzs7Ozs7O2tDQUVKLDhEQUFDWDt3QkFBSUMsV0FBV3RCLHFFQUFXO2tDQUN6Qiw0RUFBQ2tDOzRCQUFFWixXQUFXdEIscUVBQVc7OzhDQUN2Qiw4REFBQ29DOzhDQUFNOzs7Ozs7OENBQ1AsOERBQUNDO29DQUNDRCxPQUFNO29DQUNORSxNQUFLO29DQUNMQyxVQUFVLENBQUNDLElBQU07d0NBQ2ZoQyxRQUFRZ0MsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29DQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSU4sOERBQUNyQjt3QkFBSUMsV0FBV3RCLHFFQUFXO2tDQUN6Qiw0RUFBQ2tDOzRCQUNDWixXQUFXdEIscUVBQVc7NEJBQ3RCMkMsU0FBUyxJQUFNO2dDQUNiaEM7NEJBQ0Y7c0NBQ0Q7Ozs7Ozs7Ozs7O29CQUlGRix5QkFBVyw4REFBQ1k7d0JBQUlDLFdBQVd0QixxRUFBVztrQ0FBR1M7Ozs7OzZDQUFrQiw2SUFBSzs7Ozs7Ozs7Ozs7OztBQUl6RSxDQUFDO0dBM0R1Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5jb25zdCBuaWNlTGlzdCA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9uaWNlTGlzdC5qc29uXCIpO1xuY29uc3QgTWVya2xlVHJlZSA9IHJlcXVpcmUoXCIuLi8uLi91dGlscy9NZXJrbGVUcmVlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzZXJ2ZXJVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTIyNVwiO1xuXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHN1Ym1pdFJlcXVlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gVE9ETzogaG93IGRvIHdlIHByb3ZlIHRvIHRoZSBzZXJ2ZXIgd2UncmUgb24gdGhlIG5pY2UgbGlzdD9cbiAgICBjb25zdCB0cmVlID0gbmV3IE1lcmtsZVRyZWUobmljZUxpc3QpO1xuICAgIGNvbnN0IGluZGV4ID0gbmljZUxpc3QuZmluZEluZGV4KChuKSA9PiBuID09PSBuYW1lKTtcbiAgICBjb25zdCBwcm9vZiA9IHRyZWUuZ2V0UHJvb2YoaW5kZXgpO1xuXG4gICAgY29uc3QgeyBkYXRhOiBnaWZ0IH0gPSBhd2FpdCBheGlvcy5wb3N0KGAke3NlcnZlclVybH0vZ2lmdGAsIHtcbiAgICAgIC8vIFRPRE86IGFkZCByZXF1ZXN0IGJvZHkgcGFyYW1ldGVycyBoZXJlIVxuICAgICAgcHJvb2Y6IHByb29mLFxuICAgICAgbmFtZTogbmFtZSxcbiAgICB9KTtcblxuICAgIHNldFJlc3BvbnNlKGdpZnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NZXJrbGUgVHJlZSBBcHBsaWNhdGlvbjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Ib2xpZGF5IGdpZnQgbGlzdDwvaDE+XG4gICAgICAgIDxoMz5DaGVjayBpZiB5b3UgYXJlIG9uIHRoZSBsaXN0PC9oMz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzdWJtaXRSZXF1ZXN0KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtyZXNwb25zZSA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+e3Jlc3BvbnNlfTwvZGl2PiA6IDw+PC8+fVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImF4aW9zIiwicmVxdWlyZSIsIm5pY2VMaXN0IiwiTWVya2xlVHJlZSIsIkhvbWUiLCJzZXJ2ZXJVcmwiLCJuYW1lIiwic2V0TmFtZSIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJzdWJtaXRSZXF1ZXN0IiwidHJlZSIsImluZGV4IiwiZmluZEluZGV4IiwibiIsInByb29mIiwiZ2V0UHJvb2YiLCJkYXRhIiwiZ2lmdCIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJoMyIsImdyaWQiLCJwIiwiY2FyZCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});