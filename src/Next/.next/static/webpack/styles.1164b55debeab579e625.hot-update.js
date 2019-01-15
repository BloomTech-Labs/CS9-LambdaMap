webpackHotUpdate("styles",{

/***/ "./components/Layout/styles.less":
/*!***************************************!*\
  !*** ./components/Layout/styles.less ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Container":"Container__2VxM0","Container__OptionsContainer":"Container__OptionsContainer__3ak-u","OptionsContainer__Button":"OptionsContainer__Button__1uKNV"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1547511693975");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1164b55debeab579e625.hot-update.js.map