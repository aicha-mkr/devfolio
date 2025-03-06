"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GTAG: function() { return /* binding */ GTAG; },\n/* harmony export */   MENULINKS: function() { return /* binding */ MENULINKS; },\n/* harmony export */   METADATA: function() { return /* binding */ METADATA; },\n/* harmony export */   PROJECTS: function() { return /* binding */ PROJECTS; },\n/* harmony export */   SKILLS: function() { return /* binding */ SKILLS; },\n/* harmony export */   SOCIAL_LINKS: function() { return /* binding */ SOCIAL_LINKS; },\n/* harmony export */   TYPED_STRINGS: function() { return /* binding */ TYPED_STRINGS; },\n/* harmony export */   WORK_CONTENTS: function() { return /* binding */ WORK_CONTENTS; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst METADATA = {\n    author: \"Aicha Mokhtar\",\n    title: \"Portfolio | Aicha Mokhtar\",\n    description: \"Aicha Mokhtar is a passionate freelance Full-Stack Developer dedicated to building dynamic and user-friendly applications.\",\n    keywords: [\n        \"Shubh Porwal\",\n        \"Frontend Engineer\",\n        \"React Native Developer\",\n        \"Software Engineer\",\n        \"Portfolio\",\n        \"Devfolio\",\n        \"Folio\"\n    ].join(\", \"),\n    image: \"https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png\",\n    language: \"English\",\n    themeColor: \"#000000\"\n};\nconst MENULINKS = [\n    {\n        name: \"Home\",\n        ref: \"home\"\n    },\n    {\n        name: \"Skills\",\n        ref: \"skills\"\n    },\n    {\n        name: \"Projects\",\n        ref: \"projects\"\n    },\n    {\n        name: \"Work\",\n        ref: \"work\"\n    },\n    {\n        name: \"Contact\",\n        ref: \"contact\"\n    }\n];\nconst TYPED_STRINGS = [\n    \"A pragmatic Web and Mobile Developer.\",\n    \"UI/UX Designer\",\n    \"Freelancer\"\n];\nconst SOCIAL_LINKS = [\n    {\n        name: \"mail\",\n        url: \"mokhtaraichaa@gmail.com\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"https://www.linkedin.com/in/aicha-mokhtar-072600252/\"\n    },\n    {\n        name: \"github\",\n        url: \"https://github.com/aicha-mkr\"\n    }\n];\nconst SKILLS = {\n    languagesAndTools: [\n        \"HTML\",\n        \"CSS\",\n        \"JavaScript\",\n        \"PHP\",\n        \"python\",\n        \"TypeScript\",\n        \"Nodejs\",\n        \"Vite\",\n        \"Firebase\",\n        \"Figma\",\n        \"Flutter\",\n        \"wordpress\"\n    ],\n    librariesAndFrameworks: [\n        \"React\",\n        \"Nextjs\",\n        \"laravel\",\n        \"nestJS\"\n    ],\n    databases: [\n        \"MySQL\",\n        \"MongoDB\"\n    ],\n    other: [\n        \"Git\"\n    ]\n};\nconst PROJECTS = [\n    {\n        name: \"Asian Restaurant\",\n        image: \"/projects/airbnb.webp\",\n        blurImage: \"/projects/blur/airbnb-blur.webp\",\n        description: \"Asian Restaurant using Flutter\",\n        gradient: [\n            \"#F14658\",\n            \"#DC2537\"\n        ],\n        tech: [\n            \"Flutter\",\n            \"tailwindcss\",\n            \"mapbox\"\n        ]\n    },\n    {\n        name: \"NY event Dijon\",\n        image: \"/projects/NYevent.webp\",\n        blurImage: \"/projects/blur/medium-blur.webp\",\n        description: \"NY event Dijon\",\n        gradient: [\n            \"#000066\",\n            \"#6699FF\"\n        ],\n        tech: [\n            \"Flutter\",\n            \"Figma\"\n        ]\n    },\n    {\n        name: \"MAKTABI\",\n        image: \"/projects/tesla.webp\",\n        blurImage: \"/projects/blur/tesla.webp\",\n        description: \"lawyer office manager Desktop with ELECTRON\",\n        gradient: [\n            \"#000066\",\n            \"#6699FF\"\n        ],\n        tech: [\n            \"react\",\n            \"nestJS\"\n        ]\n    },\n    {\n        name: \"Planner\",\n        image: \"/projects/inshorts.webp\",\n        blurImage: \"/projects/medium.blur.webp\",\n        description: \"An innovative e-commerce WordPress website specializing in the online sale of planners\",\n        gradient: [\n            \"#142D46\",\n            \"#2E4964\"\n        ],\n        tech: [\n            \"wordpress\"\n        ]\n    },\n    {\n        name: \"Limon\",\n        image: \"/projects/medium.webp\",\n        blurImage: \"/projects/blur/medium-blur.webp\",\n        description: \"Limon UI build with Flutter\",\n        gradient: [\n            \"#FFA62E\",\n            \"#EA4D2C\"\n        ],\n        tech: [\n            \"Flutter\",\n            \"Figma\"\n        ]\n    }\n];\n// export const WORK = [\n//   {\n//     id: 1,\n//     company: \"Dukaan\",\n//     title: \"Frontend Developer\",\n//     location: \"Bangalore, Karnataka\",\n//     range: \"December - Current\",\n//     responsibilities: [\n//       \"Led creation of a captivating cross-platform e-commerce solution.\",\n//       \"Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.\",\n//       \"The app boasts a DAU base of 32k and an extensive MAU count of 180k.\",\n//     ],\n//     url: \"https://mydukaan.io/\",\n//     video: \"/work/dukaan.mp4\",\n//   },\n//   {\n//     id: 2,\n//     company: \"Aviate\",\n//     title: \"Frontend Developer Intern\",\n//     location: \"Goa\",\n//     range: \"May - October 2022\",\n//     responsibilities: [\n//       \"Built their flagship product Q-Rate, a voice-based applicant screening platform.\",\n//       \"Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.\",\n//       \"Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.\",\n//     ],\n//     url: \"https://www.aviate.jobs/\",\n//     video: \"/work/aviate.mp4\",\n//   },\n//   {\n//     id: 3,\n//     company: \"Spacenos\",\n//     title: \"Web Developer Intern\",\n//     location: \"Bangalore, Karnataka\",\n//     range: \"September - December 2021\",\n//     responsibilities: [\n//       \"Led the Full Stack revamp on the Admin Portal.\",\n//       \"Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.\",\n//       \"Implemented CRUD features for all the services and providers.\",\n//     ],\n//     url: \"https://spacenos.com/\",\n//     video: \"/work/spacenos.mp4\",\n//   },\n// ];\nconst WORK_CONTENTS = {\n    DUKAAN: [\n        {\n            title: \"Summer internship\",\n            description: \" Performance Optimization: Analyzing and enhancingthe performance of existing applications\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full w-full flex items-center justify-center text-white px-4\",\n                children: \"Application Development: Designing and implementing key features in .NET C# applications.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\devfolio\\\\constants.js\",\n                lineNumber: 190,\n                columnNumber: 9\n            }, undefined)\n        }\n    ],\n    AVIATE: [\n        {\n            title: \"Summer internship\",\n            description: \"A project that automates the generation and delivery of weekly business activity summaries using Valomnia's API. It provides businesses with a seamless way to receive insights on key performance indicators (KPIs) such as total revenue, total orders, total employees, and average sales. The solution is built using Angular for the frontend and Laravel for the backend, ensuring a robust and scalable application.\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full w-full flex items-center justify-center text-white px-4\",\n                children: \"The project aims to develop a feature for sending weekly business activity summaries via an external web application.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\devfolio\\\\constants.js\",\n                lineNumber: 204,\n                columnNumber: 9\n            }, undefined)\n        }\n    ],\n    SPACENOS: [\n        {\n            title: \"End of year project\",\n            description: \"ongoing\",\n            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full w-full flex items-center justify-center text-white px-4\",\n                children: \"ongoing        \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LENOVO\\\\Desktop\\\\devfolio\\\\constants.js\",\n                lineNumber: 218,\n                columnNumber: 9\n            }, undefined)\n        }\n    ]\n};\nconst GTAG = \"G-5HCTL2TJ5W\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMUQseUdBQXlHO0FBQ3pHLHlFQUF5RTtBQUN6RSxTQUFTO0FBQ1Qsb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQyxPQUFPO0FBQ1AsS0FBSztBQUVFLE1BQU1DLGdCQUFnQjtJQUMzQkMsUUFBUTtRQUNOO1lBQ0V2QixPQUFPO1lBQ1BDLGFBQ0E7WUFDQXVCLHVCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTswQkFBaUU7Ozs7OztRQUlwRjtLQUdEO0lBQ0RDLFFBQVE7UUFDTjtZQUNFM0IsT0FBTztZQUNQQyxhQUNFO1lBQ0Z1Qix1QkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQWlFOzs7Ozs7UUFLcEY7S0FFRDtJQUNERSxVQUFVO1FBQ1I7WUFDRTVCLE9BQU87WUFDUEMsYUFDRTtZQUNGdUIsdUJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUFpRTs7Ozs7O1FBR3BGO0tBRUQ7QUFDSCxFQUFFO0FBRUssTUFBTUcsT0FBTyxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy5qcz84OGYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBNRVRBREFUQSA9IHtcclxuICBhdXRob3I6IFwiQWljaGEgTW9raHRhclwiLFxyXG4gIHRpdGxlOiBcIlBvcnRmb2xpbyB8IEFpY2hhIE1va2h0YXJcIixcclxuICBkZXNjcmlwdGlvbjpcclxuICAgIFwiQWljaGEgTW9raHRhciBpcyBhIHBhc3Npb25hdGUgZnJlZWxhbmNlIEZ1bGwtU3RhY2sgRGV2ZWxvcGVyIGRlZGljYXRlZCB0byBidWlsZGluZyBkeW5hbWljIGFuZCB1c2VyLWZyaWVuZGx5IGFwcGxpY2F0aW9ucy5cIixcclxuICBrZXl3b3JkczogW1xyXG4gICAgXCJTaHViaCBQb3J3YWxcIixcclxuICAgIFwiRnJvbnRlbmQgRW5naW5lZXJcIixcclxuICAgIFwiUmVhY3QgTmF0aXZlIERldmVsb3BlclwiLFxyXG4gICAgXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxyXG4gICAgXCJQb3J0Zm9saW9cIixcclxuICAgIFwiRGV2Zm9saW9cIixcclxuICAgIFwiRm9saW9cIixcclxuICBdLmpvaW4oXCIsIFwiKSxcclxuICBpbWFnZTpcclxuICAgIFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHl3ZGh5b2p0L2ltYWdlL3VwbG9hZC92MTcyMTM3ODUxMC9zb2NpYWwtcHJldmlldy5wbmdcIixcclxuICBsYW5ndWFnZTogXCJFbmdsaXNoXCIsXHJcbiAgdGhlbWVDb2xvcjogXCIjMDAwMDAwXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTUVOVUxJTktTID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiSG9tZVwiLFxyXG4gICAgcmVmOiBcImhvbWVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2tpbGxzXCIsXHJcbiAgICByZWY6IFwic2tpbGxzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlByb2plY3RzXCIsXHJcbiAgICByZWY6IFwicHJvamVjdHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiV29ya1wiLFxyXG4gICAgcmVmOiBcIndvcmtcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29udGFjdFwiLFxyXG4gICAgcmVmOiBcImNvbnRhY3RcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRZUEVEX1NUUklOR1MgPSBbXHJcbiAgXCJBIHByYWdtYXRpYyBXZWIgYW5kIE1vYmlsZSBEZXZlbG9wZXIuXCIsXHJcbiAgXCJVSS9VWCBEZXNpZ25lclwiLFxyXG4gIFwiRnJlZWxhbmNlclwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNPQ0lBTF9MSU5LUyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIm1haWxcIixcclxuICAgIHVybDogXCJtb2todGFyYWljaGFhQGdtYWlsLmNvbVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJsaW5rZWRpblwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9haWNoYS1tb2todGFyLTA3MjYwMDI1Mi9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZ2l0aHViXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FpY2hhLW1rclwiLFxyXG4gIH0sXHJcbiAgXHJcbiAgXHJcbl07XHJcbmV4cG9ydCBjb25zdCBTS0lMTFMgPSB7XHJcbiAgICBsYW5ndWFnZXNBbmRUb29sczogW1xyXG4gICAgICBcIkhUTUxcIixcclxuICAgICAgXCJDU1NcIixcclxuICAgICAgXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgIFwiUEhQXCIsXHJcbiAgICAgIFwicHl0aG9uXCIsXHJcbiAgICAgIFwiVHlwZVNjcmlwdFwiLFxyXG4gICAgICBcIk5vZGVqc1wiLFxyXG4gICAgICBcIlZpdGVcIixcclxuICAgICAgXCJGaXJlYmFzZVwiLFxyXG4gICAgICBcIkZpZ21hXCIsXHJcbiAgICAgIFwiRmx1dHRlclwiLFxyXG4gICAgICBcIndvcmRwcmVzc1wiLFxyXG4gICAgXSxcclxuICAgIGxpYnJhcmllc0FuZEZyYW1ld29ya3M6IFtcclxuICAgICAgXCJSZWFjdFwiLFxyXG4gICAgICBcIk5leHRqc1wiLFxyXG4gICAgICBcImxhcmF2ZWxcIixcclxuICAgICAgXCJuZXN0SlNcIixcclxuICAgIF0sXHJcbiAgICBkYXRhYmFzZXM6IFtcIk15U1FMXCIsIFwiTW9uZ29EQlwiXSxcclxuICAgIG90aGVyOiBbXCJHaXRcIl0sXHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBQUk9KRUNUUyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkFzaWFuIFJlc3RhdXJhbnRcIixcclxuICAgIGltYWdlOiBcIi9wcm9qZWN0cy9haXJibmIud2VicFwiLFxyXG4gICAgYmx1ckltYWdlOiBcIi9wcm9qZWN0cy9ibHVyL2FpcmJuYi1ibHVyLndlYnBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFzaWFuIFJlc3RhdXJhbnQgdXNpbmcgRmx1dHRlclwiLFxyXG4gICAgZ3JhZGllbnQ6IFtcIiNGMTQ2NThcIiwgXCIjREMyNTM3XCJdLFxyXG4gICAgdGVjaDogW1wiRmx1dHRlclwiLFwidGFpbHdpbmRjc3NcIiwgXCJtYXBib3hcIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk5ZIGV2ZW50IERpam9uXCIsXHJcbiAgICBpbWFnZTogXCIvcHJvamVjdHMvTllldmVudC53ZWJwXCIsXHJcbiAgICBibHVySW1hZ2U6IFwiL3Byb2plY3RzL2JsdXIvbWVkaXVtLWJsdXIud2VicFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTlkgZXZlbnQgRGlqb25cIixcclxuICAgIGdyYWRpZW50OiBbXCIjMDAwMDY2XCIsIFwiIzY2OTlGRlwiXSxcclxuICAgIHRlY2g6IFtcIkZsdXR0ZXJcIixcIkZpZ21hXCIgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTUFLVEFCSVwiLFxyXG4gICAgaW1hZ2U6IFwiL3Byb2plY3RzL3Rlc2xhLndlYnBcIixcclxuICAgIGJsdXJJbWFnZTogXCIvcHJvamVjdHMvYmx1ci90ZXNsYS53ZWJwXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJsYXd5ZXIgb2ZmaWNlIG1hbmFnZXIgRGVza3RvcCB3aXRoIEVMRUNUUk9OXCIsXHJcbiAgICBncmFkaWVudDogW1wiIzAwMDA2NlwiLCBcIiM2Njk5RkZcIl0sXHJcbiAgICB0ZWNoOiBbXCJyZWFjdFwiLCBcIm5lc3RKU1wiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGxhbm5lclwiLFxyXG4gICAgaW1hZ2U6IFwiL3Byb2plY3RzL2luc2hvcnRzLndlYnBcIixcclxuICAgIGJsdXJJbWFnZTogXCIvcHJvamVjdHMvbWVkaXVtLmJsdXIud2VicFwiLFxyXG4gICAgZGVzY3JpcHRpb246ICAgICAgXCJBbiBpbm5vdmF0aXZlIGUtY29tbWVyY2UgV29yZFByZXNzIHdlYnNpdGUgc3BlY2lhbGl6aW5nIGluIHRoZSBvbmxpbmUgc2FsZSBvZiBwbGFubmVyc1wiLFxyXG5cclxuICAgIGdyYWRpZW50OiBbXCIjMTQyRDQ2XCIsIFwiIzJFNDk2NFwiXSxcclxuICAgIHRlY2g6IFtcIndvcmRwcmVzc1wiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGltb25cIixcclxuICAgIGltYWdlOiBcIi9wcm9qZWN0cy9tZWRpdW0ud2VicFwiLFxyXG4gICAgYmx1ckltYWdlOiBcIi9wcm9qZWN0cy9ibHVyL21lZGl1bS1ibHVyLndlYnBcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxpbW9uIFVJIGJ1aWxkIHdpdGggRmx1dHRlclwiLFxyXG4gICAgZ3JhZGllbnQ6IFtcIiNGRkE2MkVcIiwgXCIjRUE0RDJDXCJdLFxyXG4gICAgdGVjaDogW1wiRmx1dHRlclwiLFwiRmlnbWFcIiBdLFxyXG4gIH0sXHJcbiBcclxuIFxyXG5dO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFdPUksgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBjb21wYW55OiBcIkR1a2FhblwiLFxyXG4vLyAgICAgdGl0bGU6IFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCIsXHJcbi8vICAgICBsb2NhdGlvbjogXCJCYW5nYWxvcmUsIEthcm5hdGFrYVwiLFxyXG4vLyAgICAgcmFuZ2U6IFwiRGVjZW1iZXIgLSBDdXJyZW50XCIsXHJcbi8vICAgICByZXNwb25zaWJpbGl0aWVzOiBbXHJcbi8vICAgICAgIFwiTGVkIGNyZWF0aW9uIG9mIGEgY2FwdGl2YXRpbmcgY3Jvc3MtcGxhdGZvcm0gZS1jb21tZXJjZSBzb2x1dGlvbi5cIixcclxuLy8gICAgICAgXCJFbmhhbmNlZCBVWCB3aXRoIGdhbWlmaWNhdGlvbiBhbmQgcGVyc29uYWxpemVkIHB1c2ggbm90aWZpY2F0aW9ucyBlbnN1cmluZyBhbiBldmVyLWltcHJvdmluZyBzaG9wcGluZyBqb3VybmV5LlwiLFxyXG4vLyAgICAgICBcIlRoZSBhcHAgYm9hc3RzIGEgREFVIGJhc2Ugb2YgMzJrIGFuZCBhbiBleHRlbnNpdmUgTUFVIGNvdW50IG9mIDE4MGsuXCIsXHJcbi8vICAgICBdLFxyXG4vLyAgICAgdXJsOiBcImh0dHBzOi8vbXlkdWthYW4uaW8vXCIsXHJcbi8vICAgICB2aWRlbzogXCIvd29yay9kdWthYW4ubXA0XCIsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogMixcclxuLy8gICAgIGNvbXBhbnk6IFwiQXZpYXRlXCIsXHJcbi8vICAgICB0aXRsZTogXCJGcm9udGVuZCBEZXZlbG9wZXIgSW50ZXJuXCIsXHJcbi8vICAgICBsb2NhdGlvbjogXCJHb2FcIixcclxuLy8gICAgIHJhbmdlOiBcIk1heSAtIE9jdG9iZXIgMjAyMlwiLFxyXG4vLyAgICAgcmVzcG9uc2liaWxpdGllczogW1xyXG4vLyAgICAgICBcIkJ1aWx0IHRoZWlyIGZsYWdzaGlwIHByb2R1Y3QgUS1SYXRlLCBhIHZvaWNlLWJhc2VkIGFwcGxpY2FudCBzY3JlZW5pbmcgcGxhdGZvcm0uXCIsXHJcbi8vICAgICAgIFwiRGV2ZWxvcGVkIHBpeGVsLXBlcmZlY3QgcmVzcG9uc2l2ZSB3ZWIgYXBwbGljYXRpb25zIGFjaGlldmluZyBkYWlseSB0cmFmZmljIG9mIDEwMDAtMjAwMCB1c2Vycy5cIixcclxuLy8gICAgICAgXCJTdWNjZXNzZnVsbHkgcm9sbGVkIG91dCBhbiBlcnJvci1sb2dnaW5nIGFuZCBidWcgcmVwb3J0aW5nIHN5c3RlbSB0aGF0IGN1dCB1c2VyLXJlcG9ydGVkIGJ1Z3MgYnkgMzAlLlwiLFxyXG4vLyAgICAgXSxcclxuLy8gICAgIHVybDogXCJodHRwczovL3d3dy5hdmlhdGUuam9icy9cIixcclxuLy8gICAgIHZpZGVvOiBcIi93b3JrL2F2aWF0ZS5tcDRcIixcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAzLFxyXG4vLyAgICAgY29tcGFueTogXCJTcGFjZW5vc1wiLFxyXG4vLyAgICAgdGl0bGU6IFwiV2ViIERldmVsb3BlciBJbnRlcm5cIixcclxuLy8gICAgIGxvY2F0aW9uOiBcIkJhbmdhbG9yZSwgS2FybmF0YWthXCIsXHJcbi8vICAgICByYW5nZTogXCJTZXB0ZW1iZXIgLSBEZWNlbWJlciAyMDIxXCIsXHJcbi8vICAgICByZXNwb25zaWJpbGl0aWVzOiBbXHJcbi8vICAgICAgIFwiTGVkIHRoZSBGdWxsIFN0YWNrIHJldmFtcCBvbiB0aGUgQWRtaW4gUG9ydGFsLlwiLFxyXG4vLyAgICAgICBcIkRldmVsb3BlZCBhcHAgaW50ZWdyYXRpb24gd2l0aCBSRVNUIEFQSXMsIEdvb2dsZSBNYXBzLCBVc2VyIEF1dGgsIFN0cmlwZSBhbmQgb3RoZXIgbGlicmFyaWVzLlwiLFxyXG4vLyAgICAgICBcIkltcGxlbWVudGVkIENSVUQgZmVhdHVyZXMgZm9yIGFsbCB0aGUgc2VydmljZXMgYW5kIHByb3ZpZGVycy5cIixcclxuLy8gICAgIF0sXHJcbi8vICAgICB1cmw6IFwiaHR0cHM6Ly9zcGFjZW5vcy5jb20vXCIsXHJcbi8vICAgICB2aWRlbzogXCIvd29yay9zcGFjZW5vcy5tcDRcIixcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdPUktfQ09OVEVOVFMgPSB7XHJcbiAgRFVLQUFOOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlN1bW1lciBpbnRlcm5zaGlwXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIiBQZXJmb3JtYW5jZSBPcHRpbWl6YXRpb246IEFuYWx5emluZyBhbmQgZW5oYW5jaW5ndGhlIHBlcmZvcm1hbmNlIG9mIGV4aXN0aW5nIGFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICBjb250ZW50OiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgcHgtNFwiPlxyXG4gICAgICAgQXBwbGljYXRpb24gRGV2ZWxvcG1lbnQ6IERlc2lnbmluZyBhbmQgaW1wbGVtZW50aW5nIGtleSBmZWF0dXJlcyBpbiAuTkVUIEMjIGFwcGxpY2F0aW9ucy5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBcclxuICBdLFxyXG4gIEFWSUFURTogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJTdW1tZXIgaW50ZXJuc2hpcFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkEgcHJvamVjdCB0aGF0IGF1dG9tYXRlcyB0aGUgZ2VuZXJhdGlvbiBhbmQgZGVsaXZlcnkgb2Ygd2Vla2x5IGJ1c2luZXNzIGFjdGl2aXR5IHN1bW1hcmllcyB1c2luZyBWYWxvbW5pYSdzIEFQSS4gSXQgcHJvdmlkZXMgYnVzaW5lc3NlcyB3aXRoIGEgc2VhbWxlc3Mgd2F5IHRvIHJlY2VpdmUgaW5zaWdodHMgb24ga2V5IHBlcmZvcm1hbmNlIGluZGljYXRvcnMgKEtQSXMpIHN1Y2ggYXMgdG90YWwgcmV2ZW51ZSwgdG90YWwgb3JkZXJzLCB0b3RhbCBlbXBsb3llZXMsIGFuZCBhdmVyYWdlIHNhbGVzLiBUaGUgc29sdXRpb24gaXMgYnVpbHQgdXNpbmcgQW5ndWxhciBmb3IgdGhlIGZyb250ZW5kIGFuZCBMYXJhdmVsIGZvciB0aGUgYmFja2VuZCwgZW5zdXJpbmcgYSByb2J1c3QgYW5kIHNjYWxhYmxlIGFwcGxpY2F0aW9uLlwiLFxyXG4gICAgICBjb250ZW50OiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgcHgtNFwiPlxyXG4gICAgICAgICAgICBUaGUgcHJvamVjdCBhaW1zIHRvIGRldmVsb3AgYSBmZWF0dXJlIGZvciBzZW5kaW5nIHdlZWtseSBidXNpbmVzcyBhY3Rpdml0eSBzdW1tYXJpZXMgdmlhIGFuIGV4dGVybmFsIHdlYiBhcHBsaWNhdGlvbi5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgXSxcclxuICBTUEFDRU5PUzogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJFbmQgb2YgeWVhciBwcm9qZWN0XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwib25nb2luZ1wiLFxyXG4gICAgICBjb250ZW50OiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgcHgtNFwiPlxyXG4gICAgICAgIG9uZ29pbmcgICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICAgXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHVEFHID0gXCJHLTVIQ1RMMlRKNVdcIjtcclxuIl0sIm5hbWVzIjpbIk1FVEFEQVRBIiwiYXV0aG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiam9pbiIsImltYWdlIiwibGFuZ3VhZ2UiLCJ0aGVtZUNvbG9yIiwiTUVOVUxJTktTIiwibmFtZSIsInJlZiIsIlRZUEVEX1NUUklOR1MiLCJTT0NJQUxfTElOS1MiLCJ1cmwiLCJTS0lMTFMiLCJsYW5ndWFnZXNBbmRUb29scyIsImxpYnJhcmllc0FuZEZyYW1ld29ya3MiLCJkYXRhYmFzZXMiLCJvdGhlciIsIlBST0pFQ1RTIiwiYmx1ckltYWdlIiwiZ3JhZGllbnQiLCJ0ZWNoIiwiV09SS19DT05URU5UUyIsIkRVS0FBTiIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJBVklBVEUiLCJTUEFDRU5PUyIsIkdUQUciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants.js\n"));

/***/ })

});