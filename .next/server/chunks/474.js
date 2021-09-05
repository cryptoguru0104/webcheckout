exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_WebCheckoutPrevButton; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./assets/icons/prev-icon.svg
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}


/* harmony default export */ var prev_icon = (({
  styles = {},
  ...props
}) => /*#__PURE__*/external_react_default().createElement("svg", _extends({
  width: "11",
  height: "20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), /*#__PURE__*/external_react_default().createElement("path", {
  d: "M10.49 3.2a1.5 1.5 0 10-2.12-2.12l2.12 2.12zM1.57 10L.51 8.94a1.5 1.5 0 000 2.12L1.57 10zm6.8 8.92a1.5 1.5 0 102.12-2.12l-2.12 2.12zm0-17.84L.5 8.94l2.12 2.12L10.5 3.2 8.37 1.08zM.5 11.06l7.86 7.86 2.12-2.12-7.86-7.86-2.12 2.12z",
  fill: "#6F8797"
})));
;// CONCATENATED MODULE: ./components/WebCheckoutPrevButton.jsx






const WebCheckoutPrevButton = ({
  onClick
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "button",
      onClick: onClick,
      className: "jsx-931020261" + " " + "wc-btn-prev",
      children: /*#__PURE__*/jsx_runtime_.jsx(prev_icon, {
        className: "wc-prev-icon"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "931020261",
      children: [".wc-btn-prev.jsx-931020261{position:absolute;width:50px;height:50px;top:-50px;left:-173.7px;padding:14.3px 15.7px;border-radius:100px;background-color:#f6f6f6;box-shadow:2px 4px 4px 2px rgba(0,0,0,0.06);}", ".wc-btn-prev.jsx-931020261:hover{background-color:#eee;cursor:pointer;}", ".wc-prev-icon.jsx-931020261{width:21.4px;height:21.4px;}", "@media (max-width:991px){.wc-btn-prev.jsx-931020261{left:0;}}"]
    })]
  });
};

/* harmony default export */ var components_WebCheckoutPrevButton = (WebCheckoutPrevButton);

/***/ })

};
;