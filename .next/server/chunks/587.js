exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 456:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);





const WebCheckoutNextButton = ({
  onClick,
  goal = null,
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
      type: "button",
      onClick: onClick,
      disabled: !goal,
      className: "jsx-1790902566" + " " + "wc-option-item wc-btn-next",
      children: children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1790902566",
      children: [".wc-btn-next.jsx-1790902566{display:block;height:55px;padding:0;background-color:#06b89d;opacity:1;text-align:center;font-size:16px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;color:#fdfdfd;box-shadow:none;}", ".wc-btn-next.jsx-1790902566:hover.jsx-1790902566:not([disabled]){background-color:#06b89d;opacity:0.7;}", ".wc-btn-next[disabled].jsx-1790902566{background-color:#06b89d;opacity:0.5;}", "@media (max-width:559px){.wc-option-item.wc-btn-next.jsx-1790902566{padding-left:0;}}"]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (WebCheckoutNextButton);

/***/ }),

/***/ 238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);





const WebCheckoutProgress = ({
  percent = 0
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["3171328002", [percent]]]) + " " + "wc-progress",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["3171328002", [percent]]]) + " " + "wc-progress-bar"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3171328002",
      dynamic: [percent],
      children: [".wc-progress.__jsx-style-dynamic-selector{position:fixed;left:0;top:0;width:100%;height:26px;background-color:#fdfdfd;z-index:10;}", `.wc-progress-bar.__jsx-style-dynamic-selector{position:absolute;width:103px;height:26px;background-color:#6f8797;-webkit-transition:width 2s;transition:width 2s;width:${percent}%;}`]
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (WebCheckoutProgress);

/***/ })

};
;