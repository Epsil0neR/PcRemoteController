function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\r\n  <header>\r\n    <rc-nav-menu class=\"rc-flex-header\"></rc-nav-menu>\r\n  </header>\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-editor-view/control-editor-view.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-editor-view/control-editor-view.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlEditorViewControlEditorViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<rc-control-view\r\n[control]=\"control\"\r\n[style.width.%]=\"'100'\"\r\n></rc-control-view>\r\n\r\n<button\r\n  class=\"btn btn-secondary overlay\"\r\n  (click)=\"onClick();\"\r\n  >\r\n</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-editor/control-editor.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-editor/control-editor.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlEditorControlEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section [hidden]='!data'>\r\n  <main>\r\n    <p>Edit control: {{ control?.name }}</p>\r\n    <ng-template rcControlHost></ng-template>\r\n  </main>\r\n  <footer>\r\n    <div class=\"container-fluid control-editor-controls\">\r\n      <div\r\n        [class.col-4]=\"showDelete\"\r\n        [class.col-6]=\"!showDelete\">\r\n        <button\r\n          class=\"btn btn-lg btn-secondary\"\r\n          (click)=\"submit(false)\">\r\n          Cancel\r\n        </button>\r\n      </div>\r\n      <div\r\n        *ngIf=\"showDelete\"\r\n        class=\"col-4\">\r\n        <button\r\n          *ngIf=\"showDelete\"\r\n          class=\"btn btn-lg btn-danger\"\r\n          (click)='deleteAction()'>\r\n          Delete\r\n        </button>\r\n      </div>\r\n      <div\r\n        [class.col-4]=\"showDelete\"\r\n        [class.col-6]=\"!showDelete\">\r\n        <button\r\n          class=\"btn btn-lg btn-primary\"\r\n          (click)=\"submit(true)\">\r\n          {{textSave}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-view/control-view.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-view/control-view.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsControlViewControlViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template rcControlHost></ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-control/create-control.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-control/create-control.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCreateControlCreateControlComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\r\n  Control type:\r\n  <select [ngModel]=\"type\" (ngModelChange)=\"typeChanged($event)\" class=\"form-control\">\r\n    <option *ngFor=\"let x of controlTypes\" [ngValue]='x.name'>{{x.title}}</option>\r\n  </select>\r\n\r\n  <main\r\n    [hidden]='!!editor.data'></main>\r\n\r\n  <button\r\n    [hidden]='!!editor.data'\r\n    class=\"btn btn-lg btn-secondary\"\r\n    (click)='onCancel()'>Cancel</button>\r\n\r\n  <main [hidden]=\"!editor.data\">\r\n    <rc-control-editor\r\n      [showDelete]='false'\r\n      [textSave]=\"'Add'\"\r\n      (cancel)=\"onCancel()\"\r\n      (save)=\"onSave($event)\"\r\n      ></rc-control-editor>\r\n  </main>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavMenuNavMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" (click)='this.connect()' style.background=\"{{isConnected ? 'lightgreen' : 'red'}}\">Status: {{isConnected ? 'Connected' : \"Closed\"}}</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/create']\">Create</a>\r\n          </li>\r\n          <li *ngFor=\"let p of pages\" class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/p', p.name]\">{{p.title}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-create/page-create.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-create/page-create.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageCreatePageCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <h3>Create page</h3> -->\r\n\r\n<div class=\"form-group\">\r\n  <input [(ngModel)]=\"title\" (keydown.enter)=\"create()\" autofocus placeholder=\"Title\" class=\"form-control form-control-lg\" />\r\n</div>\r\n\r\n<div>\r\n  <button class=\"btn\">Add control</button>\r\n  <button (click)=\"create()\" class=\"btn btn-primary\">Create</button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-editor/page-editor.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-editor/page-editor.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPageEditorPageEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section [hidden]=\"!show || showCreateControl\">\r\n  <main class=\"container-fluid\">\r\n    <div class=\"form-group\">\r\n      <input\r\n        [(ngModel)]=\"title\"\r\n        autofocus\r\n        placeholder=\"Title\"\r\n        class=\"form-control form-control-lg\"\r\n      />\r\n    </div>\r\n    <div [sortablejs]=\"controls\" [sortablejsOptions]=\"{ delay: 100 }\">\r\n      <rc-control-editor-view\r\n        *ngFor=\"let c of controls\"\r\n        [ngClass]=\"c.col | columnClassName\"\r\n        [control]=\"c\"\r\n        (openEditor)=\"openControlEditor(c)\"\r\n      ></rc-control-editor-view>\r\n    </div>\r\n  </main>\r\n  <div class=\"container-fluid editor-controls\">\r\n    <div class=\"col-4\">\r\n      <button (click)=\"addControl()\" class=\"btn btn-lg btn-primary\">Add control</button>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <button (click)=\"navigateToPage()\" class=\"btn btn-lg btn-secondary\">Cancel</button>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <button (click)=\"save()\" class=\"btn btn-lg btn-primary\">Done</button>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<rc-control-editor\r\n  [hidden]=\"show\"\r\n  (cancel)=\"updateControl()\"\r\n  (save)=\"updateControl($event)\"\r\n  (delete)=\"deleteControl($event)\"\r\n></rc-control-editor>\r\n\r\n<rc-create-control\r\n  [hidden]=\"!showCreateControl\"\r\n  (cancel)=\"hideCreateControl()\"\r\n  (submit)=\"createControl($event)\"\r\n></rc-create-control>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPagePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"d-flex bd-highlight\">\r\n    <div class=\"p-2 w-100 bd-highlight\">\r\n      <h3>{{ details?.title }}</h3>\r\n    </div>\r\n    <div class=\"p-2 flex-shrink-1 bd-highlight\">\r\n      <a [routerLink]=\"['/edit', name]\" class=\"align-middle\">Edit</a>\r\n    </div>\r\n  </div>\r\n\r\n  <rc-control-view\r\n    *ngFor=\"let item of details.controls\"\r\n    [control]=\"item\"\r\n    [ngClass]=\"item.col | columnClassName\"\r\n  ></rc-control-view>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/core/components/control-column-editor/control-column-editor.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/components/control-column-editor/control-column-editor.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcCoreComponentsControlColumnEditorControlColumnEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-group\">\r\n  <label >Columns</label>\r\n  <input type=\"number\"\r\n    autofocus\r\n    class=\"form-control\"\r\n    [value]='value'\r\n    (input)='value = $event.target.value'\r\n    [min]='min'\r\n    [max]='max'\r\n    />\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/core/components/icon-selector/icon-selector.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/components/icon-selector/icon-selector.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcCoreComponentsIconSelectorIconSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <input type=\"text\" placeholder=\"Search\" [(ngModel)]=\"filter\" class=\"form-control\" />\r\n  Found: <b>{{ icons.length + (!!showEmpty ? 1 : 0) }}</b> icons.\r\n  <div>\r\n    <div\r\n    *ngIf=\"showEmpty\"\r\n    [class.selected]=\"!icon\"\r\n    (click)='selectIcon()'\r\n    class=\"empty-icon\"></div>\r\n    <fa-icon\r\n      *ngFor=\"let item of icons\"\r\n      [class.selected]=\"icon===item\"\r\n      (click)='selectIcon(item)'\r\n      [icon]=\"item\"\r\n      [title]=\"item.iconName\"\r\n      size=\"3x\"\r\n    ></fa-icon>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/file-system/file-system-component/file-system.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/file-system/file-system-component/file-system.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcFileSystemFileSystemComponentFileSystemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\r\n  class='root'\r\n  [style.maxHeight.px]=\"maxHeight > 0 ? maxHeight : ''\"\r\n  >\r\n\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li\r\n        *ngFor=\"let x of paths\"\r\n        class=\"breadcrumb-item\">\r\n        <a (click)='goToPath(x.url);' href=\"javascript:void(0);\">{{x.title}}</a>\r\n      </li>\r\n    </ol>\r\n  </nav>\r\n\r\n  <div id=\"folders\" class=\"no-selection\">\r\n    <a *ngFor=\"let x of folders\" (click)='goToPath(x.url)'>\r\n      <fa-icon [icon]='iconFolder'></fa-icon>\r\n      {{x.title}}\r\n    </a>\r\n  </div>\r\n  <div class=\"border\"></div>\r\n\r\n  <div id=\"files\" class=\"no-selection\">\r\n    <a *ngFor=\"let x of files\" (click)='exec(x.url)'>\r\n      <fa-icon [icon]='iconFile'></fa-icon>\r\n      {{x.title}}\r\n    </a>\r\n  </div>\r\n  <div class=\"border\"></div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/file-system/file-system-editor-component/file-system-editor.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/file-system/file-system-editor-component/file-system-editor.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcFileSystemFileSystemEditorComponentFileSystemEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<rc-control-column-editor *ngIf=\"!!data\" [(value)]=\"col\"></rc-control-column-editor>\r\n\r\n<div class=\"form-group\">\r\n  <label>Maximum height (0 = infinity) in px</label>\r\n  <input type=\"number\"\r\n    autofocus\r\n    class=\"form-control\"\r\n    [(ngModel)]=\"maxHeight\"\r\n    min=\"0\"\r\n    step=\"5\"\r\n  />\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label>ID (used for sharing content between multiple contols)</label>\r\n  <input type=\"text\"\r\n    maxlength=\"20\"\r\n    class=\"form-control\"\r\n    [(ngModel)]=\"id\"\r\n  />\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/key/key-component/key.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/key/key-component/key.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcKeyKeyComponentKeyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button\r\n  title=\"{{title}}\"\r\n  class=\"btn btn-light\">\r\n  <fa-icon *ngIf=\"!!icon\" [icon]=\"icon\" class=\"fa-3x\"></fa-icon>\r\n  <span *ngIf=\"!icon\">{{title.toUpperCase()}}</span>\r\n</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/key/key-editor-component/key-editor.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/key/key-editor-component/key-editor.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcKeyKeyEditorComponentKeyEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div [hidden]=\"!!showIconPicker\">\r\n  <rc-control-column-editor *ngIf=\"!!data\" [(value)]=\"data.col\"></rc-control-column-editor>\r\n\r\n  <div class=\"form-group\" *ngIf=\"!!data\">\r\n    <label>Key</label>\r\n    <select\r\n      [ngModel]=\"key\"\r\n      (ngModelChange)=\"onKeyChanged($event)\"\r\n      class=\"form-control\">\r\n      <option *ngFor=\"let x of keyCodes\" [ngValue]='x'>{{x.name}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\" *ngIf=\"!!data\">\r\n    <label>Action mode</label>\r\n    <select\r\n      [ngModel]=\"mode\"\r\n      (ngModelChange)=\"onModeChanged($event)\"\r\n      class=\"form-control\">\r\n      <option *ngFor=\"let x of modes | enumToArray\" [ngValue]='x.index'>{{x.name}}</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\" *ngIf=\"!!data && mode === modes.Repeatable\">\r\n    <label>Repeat interval</label>\r\n    <input\r\n      type=\"number\"\r\n      [(ngModel)]=\"repeat\"\r\n      class=\"form-control\"\r\n      min=\"10\"\r\n      step=\"10\"\r\n      />\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"col-3\">\r\n      Icon:\r\n    </label>\r\n    <span class=\"col-3\">\r\n      <fa-icon *ngIf=\"!!icon\" [icon]=\"icon\" class=\"fa-lg\"></fa-icon>\r\n      <span *ngIf=\"!icon\">None</span>\r\n    </span>\r\n    <button class=\"btn btn-primary col-6\" (click)=\"showIconPicker = true\">Change</button>\r\n  </div>\r\n</div>\r\n\r\n<rc-icon-selector\r\n  [hidden]=\"!showIconPicker\"\r\n  showEmpty='true'\r\n  [icon]=\"icon\"\r\n  (iconChange)='changeIcon($event)'\r\n></rc-icon-selector>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/volume/volume-component/volume.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/volume/volume-component/volume.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVolumeVolumeComponentVolumeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input\n  #inp (change)='this.setVolume($event.target.value)'\n  [attr.disabled]=\"isEnabled ? null : ''\"\n  [attr.title]='input.nativeElement.value'\n  class=\"custom-range\"\n  type=\"range\"\n  min=\"0\"\n  max=\"100\"\n  value=\"0\"\n  step=\"1\" />\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/volume/volume-editor-component/volume-editor.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/volume/volume-editor-component/volume-editor.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcVolumeVolumeEditorComponentVolumeEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<rc-control-column-editor *ngIf=\"!!data\" [(value)]=\"data.col\"></rc-control-column-editor>\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  height: 100%;\r\n  display: block;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent(service) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.service = service;
      this.title = 'app';
      window.addEventListener('focus', function (e) {
        if (_this.service.isConnected.getValue()) return;

        _this.service.open();
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-sortablejs */
    "./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/nav-menu/nav-menu.component */
    "./src/app/components/nav-menu/nav-menu.component.ts");
    /* harmony import */


    var _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/page/page.component */
    "./src/app/components/page/page.component.ts");
    /* harmony import */


    var _components_page_editor_page_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/page-editor/page-editor.component */
    "./src/app/components/page-editor/page-editor.component.ts");
    /* harmony import */


    var _components_page_create_page_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/page-create/page-create.component */
    "./src/app/components/page-create/page-create.component.ts");
    /* harmony import */


    var _directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./directives/control-host/control-host.directive */
    "./src/app/directives/control-host/control-host.directive.ts");
    /* harmony import */


    var _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pipes/enum-to-array.pipe */
    "./src/app/pipes/enum-to-array.pipe.ts");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var src_key__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/key */
    "./src/key/index.ts");
    /* harmony import */


    var src_volume__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/volume */
    "./src/volume/index.ts");
    /* harmony import */


    var src_file_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/file-system */
    "./src/file-system/index.ts");
    /* harmony import */


    var _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/control-editor/control-editor.component */
    "./src/app/components/control-editor/control-editor.component.ts");
    /* harmony import */


    var _components_create_control_create_control_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/create-control/create-control.component */
    "./src/app/components/create-control/create-control.component.ts");
    /* harmony import */


    var _components_control_view_control_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/control-view/control-view.component */
    "./src/app/components/control-view/control-view.component.ts");
    /* harmony import */


    var _components_control_editor_view_control_editor_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/control-editor-view/control-editor-view.component */
    "./src/app/components/control-editor-view/control-editor-view.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"], _components_page_editor_page_editor_component__WEBPACK_IMPORTED_MODULE_10__["PageEditorComponent"], _components_page_create_page_create_component__WEBPACK_IMPORTED_MODULE_11__["PageCreateComponent"], _directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_12__["ControlHostDirective"], _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__["EnumToArrayPipe"], _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_18__["ControlEditorComponent"], _components_create_control_create_control_component__WEBPACK_IMPORTED_MODULE_19__["CreateControlComponent"], _components_control_view_control_view_component__WEBPACK_IMPORTED_MODULE_20__["ControlViewComponent"], _components_control_editor_view_control_editor_view_component__WEBPACK_IMPORTED_MODULE_21__["ControlEditorViewComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_sortablejs__WEBPACK_IMPORTED_MODULE_6__["SortablejsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: '',
        component: _components_page_create_page_create_component__WEBPACK_IMPORTED_MODULE_11__["PageCreateComponent"],
        pathMatch: 'full'
      }, {
        path: 'create',
        component: _components_page_create_page_create_component__WEBPACK_IMPORTED_MODULE_11__["PageCreateComponent"]
      }, {
        path: 'edit/:name',
        component: _components_page_editor_page_editor_component__WEBPACK_IMPORTED_MODULE_10__["PageEditorComponent"]
      }, {
        path: 'p/:name',
        component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"]
      }, {
        path: 'icon',
        component: src_core__WEBPACK_IMPORTED_MODULE_14__["IconSelectorComponent"]
      }]), src_core__WEBPACK_IMPORTED_MODULE_14__["CoreModule"].forRoot(), src_key__WEBPACK_IMPORTED_MODULE_15__["KeyModule"].forRoot(), src_volume__WEBPACK_IMPORTED_MODULE_16__["VolumeModule"].forRoot(), src_file_system__WEBPACK_IMPORTED_MODULE_17__["FileSystemModule"].forRoot()],
      providers: [_pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__["EnumToArrayPipe"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/control-editor-view/control-editor-view.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/control-editor-view/control-editor-view.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlEditorViewControlEditorViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding: 2px;\r\n}\r\n\r\n .overlay {\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  opacity: 0.1;\r\n  height: calc(100% - 4px);\r\n  width: calc(100% - 4px);\r\n}\r\n\r\n .overlay:hover {\r\n  opacity: 0.25;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLWVkaXRvci12aWV3L2NvbnRyb2wtZWRpdG9yLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztDQUVDO0VBQ0Msa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7Q0FFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJvbC1lZGl0b3Itdmlldy9jb250cm9sLWVkaXRvci12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbiAub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIG9wYWNpdHk6IDAuMTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XHJcbn1cclxuXHJcbi5vdmVybGF5OmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjI1O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/control-editor-view/control-editor-view.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/control-editor-view/control-editor-view.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ControlEditorViewComponent */

  /***/
  function srcAppComponentsControlEditorViewControlEditorViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlEditorViewComponent", function () {
      return ControlEditorViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ControlEditorViewComponent =
    /*#__PURE__*/
    function () {
      function ControlEditorViewComponent() {
        _classCallCheck(this, ControlEditorViewComponent);

        this._control = null;
        this.openEditor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
      }

      _createClass(ControlEditorViewComponent, [{
        key: "onClick",
        value: function onClick() {
          this.openEditor.emit();
        }
      }, {
        key: "control",
        get: function get() {
          return this._control;
        },
        set: function set(value) {
          this._control = !!value ? value : null;
        }
      }]);

      return ControlEditorViewComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], ControlEditorViewComponent.prototype, "control", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], ControlEditorViewComponent.prototype, "openEditor", void 0);

    ControlEditorViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-control-editor-view',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./control-editor-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-editor-view/control-editor-view.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./control-editor-view.component.css */
      "./src/app/components/control-editor-view/control-editor-view.component.css")).default]
    })], ControlEditorViewComponent);
    /***/
  },

  /***/
  "./src/app/components/control-editor/control-editor.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/control-editor/control-editor.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlEditorControlEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  height: 100%;\r\n  display: block;\r\n}\r\n.control-editor-controls {\r\n  margin: 0 -2px;\r\n}\r\n.control-editor-controls div {\r\n  display: inline-block;\r\n  padding: 0 2px;\r\n}\r\n.control-editor-controls button {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLWVkaXRvci9jb250cm9sLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtZWRpdG9yL2NvbnRyb2wtZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jb250cm9sLWVkaXRvci1jb250cm9scyB7XHJcbiAgbWFyZ2luOiAwIC0ycHg7XHJcbn1cclxuLmNvbnRyb2wtZWRpdG9yLWNvbnRyb2xzIGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMnB4O1xyXG59XHJcbi5jb250cm9sLWVkaXRvci1jb250cm9scyBidXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/control-editor/control-editor.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/control-editor/control-editor.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ControlEditorComponent */

  /***/
  function srcAppComponentsControlEditorControlEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlEditorComponent", function () {
      return ControlEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/directives/control-host/control-host.directive */
    "./src/app/directives/control-host/control-host.directive.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ControlEditorComponent =
    /*#__PURE__*/
    function () {
      function ControlEditorComponent(controlsService) {
        _classCallCheck(this, ControlEditorComponent);

        this.controlsService = controlsService;
        this._control = null;
        this._editor = null;
        this.data = null;
        this.showDelete = true;
        this.textSave = 'Save';
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
      }

      _createClass(ControlEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "load",
        value: function load(control) {
          console.log('Loading control editor for', control);
          this.control = control;
          this.showTypedEditor();
        }
      }, {
        key: "showTypedEditor",
        value: function showTypedEditor() {
          var ref = this.host.viewContainerRef;
          ref.clear();
          if (!this.control) return;
          var editors = this.controlsService.editors(ref, [this.data]);
          this._editor = editors.length > 0 && !!editors[0] ? editors[0] : null;
        }
      }, {
        key: "submit",
        value: function submit(save) {
          // tslint:disable-next-line: triple-equals
          save = save == true;
          var c = this.control;
          this.control = null;

          if (!save) {
            this.cancel.emit();
            return;
          }

          console.log(this._editor);
          var data = !!this._editor ? this._editor.save() : null;
          this.save.emit({
            orig: c,
            changed: data
          });
        }
      }, {
        key: "deleteAction",
        value: function deleteAction() {
          if (!this.control) return;
          var c = this.control;
          this.control = null;
          this.delete.emit(c);
        }
      }, {
        key: "control",
        get: function get() {
          return this._control;
        },
        set: function set(value) {
          if (!value) value = null;
          this._control = value;
          this.data = !!value ? Object.assign({}, value) : null;
        }
      }]);

      return ControlEditorComponent;
    }();

    ControlEditorComponent.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_1__["ControlsService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_2__["ControlHostDirective"], {
      static: true
    }), __metadata("design:type", src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_2__["ControlHostDirective"])], ControlEditorComponent.prototype, "host", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], ControlEditorComponent.prototype, "showDelete", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], ControlEditorComponent.prototype, "textSave", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], ControlEditorComponent.prototype, "cancel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], ControlEditorComponent.prototype, "save", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], ControlEditorComponent.prototype, "delete", void 0);

    ControlEditorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-control-editor',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./control-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-editor/control-editor.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./control-editor.component.css */
      "./src/app/components/control-editor/control-editor.component.css")).default]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_1__["ControlsService"]])], ControlEditorComponent);
    /***/
  },

  /***/
  "./src/app/components/control-view/control-view.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/control-view/control-view.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsControlViewControlViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cm9sLXZpZXcvY29udHJvbC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyb2wtdmlldy9jb250cm9sLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/control-view/control-view.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/control-view/control-view.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ControlViewComponent */

  /***/
  function srcAppComponentsControlViewControlViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlViewComponent", function () {
      return ControlViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/directives/control-host/control-host.directive */
    "./src/app/directives/control-host/control-host.directive.ts");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ControlViewComponent =
    /*#__PURE__*/
    function () {
      function ControlViewComponent(controlsService) {
        _classCallCheck(this, ControlViewComponent);

        this.controlsService = controlsService;
        this._control = null;
      }

      _createClass(ControlViewComponent, [{
        key: "load",
        value: function load() {
          var ref = this.host.viewContainerRef;
          this.controlsService.view(ref, this.control);
        }
      }, {
        key: "control",
        get: function get() {
          return this._control;
        },
        set: function set(value) {
          this._control = !!value ? value : null;
          this.load();
        }
      }]);

      return ControlViewComponent;
    }();

    ControlViewComponent.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_1__["ControlHostDirective"], {
      static: true
    }), __metadata("design:type", src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_1__["ControlHostDirective"])], ControlViewComponent.prototype, "host", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], ControlViewComponent.prototype, "control", null);

    ControlViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-control-view',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./control-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/control-view/control-view.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./control-view.component.css */
      "./src/app/components/control-view/control-view.component.css")).default]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]])], ControlViewComponent);
    /***/
  },

  /***/
  "./src/app/components/create-control/create-control.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/create-control/create-control.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCreateControlCreateControlComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWNvbnRyb2wvY3JlYXRlLWNvbnRyb2wuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/create-control/create-control.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/create-control/create-control.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CreateControlComponent */

  /***/
  function srcAppComponentsCreateControlCreateControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateControlComponent", function () {
      return CreateControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var _control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../control-editor/control-editor.component */
    "./src/app/components/control-editor/control-editor.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CreateControlComponent =
    /*#__PURE__*/
    function () {
      function CreateControlComponent(controlsService) {
        _classCallCheck(this, CreateControlComponent);

        this.controlsService = controlsService;
        this.type = null;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
      }

      _createClass(CreateControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.controlTypes = this.controlsService.getAvailable();
        }
      }, {
        key: "typeChanged",
        value: function typeChanged(name) {
          this.editor.load({
            name: name,
            col: 12
          });
        }
      }, {
        key: "onSave",
        value: function onSave(data) {
          if (!data || !data.changed) return;
          this.submit.emit(data.changed);
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.cancel.emit();
        }
      }]);

      return CreateControlComponent;
    }();

    CreateControlComponent.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_1__["ControlsService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_2__["ControlEditorComponent"], {
      static: true
    }), __metadata("design:type", _control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_2__["ControlEditorComponent"])], CreateControlComponent.prototype, "editor", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], CreateControlComponent.prototype, "type", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], CreateControlComponent.prototype, "cancel", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], CreateControlComponent.prototype, "submit", void 0);

    CreateControlComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-create-control',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./create-control.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-control/create-control.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./create-control.component.css */
      "./src/app/components/create-control/create-control.component.css")).default]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_1__["ControlsService"]])], CreateControlComponent);
    /***/
  },

  /***/
  "./src/app/components/nav-menu/nav-menu.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/nav-menu/nav-menu.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavMenuNavMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLm5hdmJhci1icmFuZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG5odG1sIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/nav-menu/nav-menu.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
    \***********************************************************/

  /*! exports provided: NavMenuComponent */

  /***/
  function srcAppComponentsNavMenuNavMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
      return NavMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NavMenuComponent =
    /*#__PURE__*/
    function () {
      function NavMenuComponent(pagesService, service) {
        _classCallCheck(this, NavMenuComponent);

        this.pagesService = pagesService;
        this.service = service;
        this.isExpanded = false;
        this.isConnected = false;
        this.subscriptions = [];
      }

      _createClass(NavMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.subscriptions.push(this.pagesService.pages.subscribe(function (value) {
            return _this2.pages = value;
          }));
          this.subscriptions.push(this.service.isConnected.subscribe(function (value) {
            return _this2.isConnected = value;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }, {
        key: "connect",
        value: function connect() {
          if (!this.service.isConnected.getValue()) {
            console.log('Connect!');
            this.service.open();
          } else {
            console.log('Disconnect!');
            this.service.close();
          }
        }
      }]);

      return NavMenuComponent;
    }();

    NavMenuComponent.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_1__["PagesService"]
      }, {
        type: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]
      }];
    };

    NavMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-nav-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./nav-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-menu/nav-menu.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./nav-menu.component.css */
      "./src/app/components/nav-menu/nav-menu.component.css")).default]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_1__["PagesService"], src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]])], NavMenuComponent);
    /***/
  },

  /***/
  "./src/app/components/page-create/page-create.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/page-create/page-create.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageCreatePageCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1jcmVhdGUvcGFnZS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/page-create/page-create.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/page-create/page-create.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PageCreateComponent */

  /***/
  function srcAppComponentsPageCreatePageCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageCreateComponent", function () {
      return PageCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PageCreateComponent =
    /*#__PURE__*/
    function () {
      function PageCreateComponent(pagesService) {
        _classCallCheck(this, PageCreateComponent);

        this.pagesService = pagesService;
        this.title = '';
      }

      _createClass(PageCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "create",
        value: function create() {
          console.log('Create: ', this);

          if (!this.title || this.title.trim().length === 0) {
            return;
          }

          var details = this.pagesService.create(this.title);
          console.log('Created: ', details);
        }
      }]);

      return PageCreateComponent;
    }();

    PageCreateComponent.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_1__["PagesService"]
      }];
    };

    PageCreateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-page-create',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./page-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-create/page-create.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./page-create.component.css */
      "./src/app/components/page-create/page-create.component.css")).default]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_1__["PagesService"]])], PageCreateComponent);
    /***/
  },

  /***/
  "./src/app/components/page-editor/page-editor.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/page-editor/page-editor.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPageEditorPageEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  height: 100%;\r\n}\r\n\r\n.editor-controls {\r\n  margin: 0 -2px;\r\n}\r\n\r\n.editor-controls div {\r\n  display: inline-block;\r\n  padding: 0 2px;\r\n}\r\n\r\n.editor-controls button {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLWVkaXRvci9wYWdlLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlLWVkaXRvci9wYWdlLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmVkaXRvci1jb250cm9scyB7XHJcbiAgbWFyZ2luOiAwIC0ycHg7XHJcbn1cclxuLmVkaXRvci1jb250cm9scyBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDJweDtcclxufVxyXG4uZWRpdG9yLWNvbnRyb2xzIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/page-editor/page-editor.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/page-editor/page-editor.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PageEditorComponent */

  /***/
  function srcAppComponentsPageEditorPageEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageEditorComponent", function () {
      return PageEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var _control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../control-editor/control-editor.component */
    "./src/app/components/control-editor/control-editor.component.ts");
    /* harmony import */


    var _create_control_create_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../create-control/create-control.component */
    "./src/app/components/create-control/create-control.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PageEditorComponent =
    /*#__PURE__*/
    function () {
      function PageEditorComponent(router, route, pagesService) {
        _classCallCheck(this, PageEditorComponent);

        this.router = router;
        this.route = route;
        this.pagesService = pagesService;
        this.title = null;
        this.controls = [];
        this.show = true;
        this.showCreateControl = false;
      }

      _createClass(PageEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this3.name = params['name'];

            var details = _this3.pagesService.details(_this3.name);

            if (details === null) {
              console.warn('Page editor could not find %o. Navigating to home...', _this3.name);

              _this3.router.navigate(['/']);
            } else {
              _this3.title = details.title;
              _this3.controls = _toConsumableArray(details.controls);
            }
          });
          this.sub.unsubscribe();
        }
      }, {
        key: "updateControl",
        value: function updateControl(data) {
          this.show = true;
          if (!data || !data.orig) return;
          var ind = this.controls.indexOf(data.orig);

          if (ind < 0) {
            console.log('Failed to update control - origin not found.', data.orig);
            return;
          }

          this.controls[ind] = data.changed;
        }
      }, {
        key: "deleteControl",
        value: function deleteControl(control) {
          this.show = true;
          if (!control) return;
          var ind = this.controls.indexOf(control);

          if (ind < 0) {
            console.log('Failed to delete control - origin not found', control);
            return;
          }

          this.controls.splice(ind, 1);
        }
      }, {
        key: "openControlEditor",
        value: function openControlEditor(control) {
          this.show = false;
          this.controlEditor.load(control);
        }
      }, {
        key: "save",
        value: function save() {
          var details = new src_core__WEBPACK_IMPORTED_MODULE_2__["PageDetails"]();
          details.controls = this.controls;
          details.title = this.title;
          this.pagesService.update(this.name, details);
          this.navigateToPage();
        }
      }, {
        key: "navigateToPage",
        value: function navigateToPage() {
          this.router.navigate(['/', 'p', this.name]);
        }
      }, {
        key: "addControl",
        value: function addControl() {
          this.controlCreator.type = null;
          this.showCreateControl = true;
        }
      }, {
        key: "hideCreateControl",
        value: function hideCreateControl() {
          this.controlCreator.type = null;
          this.showCreateControl = false;
        }
      }, {
        key: "createControl",
        value: function createControl(control) {
          if (!control) return;
          this.hideCreateControl();
          this.controls.push(control);
        }
      }]);

      return PageEditorComponent;
    }();

    PageEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_3__["ControlEditorComponent"], {
      static: true
    }), __metadata("design:type", _control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_3__["ControlEditorComponent"])], PageEditorComponent.prototype, "controlEditor", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_create_control_create_control_component__WEBPACK_IMPORTED_MODULE_4__["CreateControlComponent"], {
      static: true
    }), __metadata("design:type", _create_control_create_control_component__WEBPACK_IMPORTED_MODULE_4__["CreateControlComponent"])], PageEditorComponent.prototype, "controlCreator", void 0);

    PageEditorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-page-editor',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./page-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-editor/page-editor.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./page-editor.component.css */
      "./src/app/components/page-editor/page-editor.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"]])], PageEditorComponent);
    /***/
  },

  /***/
  "./src/app/components/page/page.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/page/page.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPagePageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "rc-control-view {\r\n  display: inline-block;\r\n  padding: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicmMtY29udHJvbC12aWV3IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/page/page.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/page/page.component.ts ***!
    \***************************************************/

  /*! exports provided: PageComponent */

  /***/
  function srcAppComponentsPagePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
      return PageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /**
     * Represents page with controls and listeners.
     * User will navigate in site via this pages.
     */


    var PageComponent =
    /*#__PURE__*/
    function () {
      function PageComponent(route, pagesService, router) {
        _classCallCheck(this, PageComponent);

        this.route = route;
        this.pagesService = pagesService;
        this.router = router;
        this.details = null;
      }

      _createClass(PageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.sub = this.route.params.subscribe(function (params) {
            _this4.name = params['name'];

            var details = _this4.pagesService.details(_this4.name);

            if (details === null) {
              console.warn('Page %o not found. Navigating to home...', _this4.name);

              _this4.router.navigate(['/']);
            } else {
              _this4.details = details;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }]);

      return PageComponent;
    }();

    PageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    PageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-page',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./page.component.css */
      "./src/app/components/page/page.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], PageComponent);
    /***/
  },

  /***/
  "./src/app/directives/control-host/control-host.directive.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/directives/control-host/control-host.directive.ts ***!
    \*******************************************************************/

  /*! exports provided: ControlHostDirective */

  /***/
  function srcAppDirectivesControlHostControlHostDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlHostDirective", function () {
      return ControlHostDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ControlHostDirective = function ControlHostDirective(viewContainerRef) {
      _classCallCheck(this, ControlHostDirective);

      this.viewContainerRef = viewContainerRef;
    };

    ControlHostDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };

    ControlHostDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[rcControlHost]'
    }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])], ControlHostDirective);
    /***/
  },

  /***/
  "./src/app/pipes/enum-to-array.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/enum-to-array.pipe.ts ***!
    \*********************************************/

  /*! exports provided: EnumToArrayPipe */

  /***/
  function srcAppPipesEnumToArrayPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function () {
      return EnumToArrayPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EnumToArrayPipe =
    /*#__PURE__*/
    function () {
      function EnumToArrayPipe() {
        _classCallCheck(this, EnumToArrayPipe);
      }

      _createClass(EnumToArrayPipe, [{
        key: "transform",
        value: function transform(value) {
          return Object.keys(value).filter(function (e) {
            return !isNaN(+e) && typeof value[e] === 'string';
          }).map(function (o) {
            return {
              value: +o,
              name: value[o]
            };
          });
        }
      }]);

      return EnumToArrayPipe;
    }();

    EnumToArrayPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'enumToArray'
    })], EnumToArrayPipe);
    /***/
  },

  /***/
  "./src/core/components/BaseControlComponent.ts":
  /*!*****************************************************!*\
    !*** ./src/core/components/BaseControlComponent.ts ***!
    \*****************************************************/

  /*! exports provided: BaseControlComponent */

  /***/
  function srcCoreComponentsBaseControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseControlComponent", function () {
      return BaseControlComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var BaseControlComponent =
    /*#__PURE__*/
    function () {
      function BaseControlComponent() {
        _classCallCheck(this, BaseControlComponent);

        this._col = 12;
        this.colMax = 12;
        this.colMin = 1;
      }

      _createClass(BaseControlComponent, [{
        key: "col",
        get: function get() {
          return this._col;
        },
        set: function set(v) {
          if (typeof v !== 'number') v = parseInt(v, 10);
          if (v !== 0 && !v) return;
          if (v < this.colMin) v = this.colMin;
          if (v > this.colMax) v = this.colMax;
          this._col = parseInt(v, 10);
        }
      }]);

      return BaseControlComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('col'), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], BaseControlComponent.prototype, "col", null);
    /***/

  },

  /***/
  "./src/core/components/control-column-editor/control-column-editor.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/core/components/control-column-editor/control-column-editor.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcCoreComponentsControlColumnEditorControlColumnEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29yZS9jb21wb25lbnRzL2NvbnRyb2wtY29sdW1uLWVkaXRvci9jb250cm9sLWNvbHVtbi1lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/core/components/control-column-editor/control-column-editor.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/core/components/control-column-editor/control-column-editor.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ControlColumnEditorComponent */

  /***/
  function srcCoreComponentsControlColumnEditorControlColumnEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlColumnEditorComponent", function () {
      return ControlColumnEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ControlColumnEditorComponent =
    /*#__PURE__*/
    function () {
      function ControlColumnEditorComponent() {
        _classCallCheck(this, ControlColumnEditorComponent);

        this._value = 1;
        this._min = 1;
        this._max = 12;
        this.initialized = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * Columns count
       */


      _createClass(ControlColumnEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initialized = true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.initialized = false;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * Columns count
         */
        ,
        set: function set(v) {
          v = parseInt(v, 10);

          if (isNaN(v) || v > this.max) {
            v = this.min;
          } else if (v < this.min) v = this.min;

          this._value = v;
          if (this.initialized) this.valueChange.emit(v);
        }
      }, {
        key: "min",
        get: function get() {
          return this._min;
        },
        set: function set(v) {
          if (typeof v !== 'number') {
            v = parseInt(v, 10);
          }

          if (isNaN(v)) return;
          this._min = v;
          this.value = this.value; // In case value outside boudaries
        }
      }, {
        key: "max",
        get: function get() {
          return this._max;
        },
        set: function set(v) {
          if (typeof v !== 'number') {
            v = parseInt(v, 10);
          }

          if (isNaN(v)) return;
          this._max = v;
          this.value = this.value; // In case value outside boudaries
        }
      }]);

      return ControlColumnEditorComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], ControlColumnEditorComponent.prototype, "value", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], ControlColumnEditorComponent.prototype, "valueChange", void 0);

    ControlColumnEditorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-control-column-editor',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./control-column-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/core/components/control-column-editor/control-column-editor.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./control-column-editor.component.css */
      "./src/core/components/control-column-editor/control-column-editor.component.css")).default]
    }), __metadata("design:paramtypes", [])], ControlColumnEditorComponent);
    /***/
  },

  /***/
  "./src/core/components/icon-selector/icon-selector.component.css":
  /*!***********************************************************************!*\
    !*** ./src/core/components/icon-selector/icon-selector.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcCoreComponentsIconSelectorIconSelectorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "fa-icon, .empty-icon {\r\n  display: inline-block;\r\n  padding: 5px;\r\n  margin: 2px;\r\n  height: 60px;\r\n  min-width: 60px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\nfa-icon:hover, .empty-icon:hover {\r\n  background: lightpink;\r\n  color: red;\r\n}\r\n\r\n.selected {\r\n  background: lightskyblue;\r\n  color: #333333;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3JlL2NvbXBvbmVudHMvaWNvbi1zZWxlY3Rvci9pY29uLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2NvcmUvY29tcG9uZW50cy9pY29uLXNlbGVjdG9yL2ljb24tc2VsZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZhLWljb24sIC5lbXB0eS1pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogMnB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmZhLWljb246aG92ZXIsIC5lbXB0eS1pY29uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodHBpbms7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodHNreWJsdWU7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/core/components/icon-selector/icon-selector.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/core/components/icon-selector/icon-selector.component.ts ***!
    \**********************************************************************/

  /*! exports provided: IconSelectorComponent */

  /***/
  function srcCoreComponentsIconSelectorIconSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconSelectorComponent", function () {
      return IconSelectorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core_utils_findIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core/utils/findIcon */
    "./src/core/utils/findIcon.ts");
    /* harmony import */


    var src_core_pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/core/pipes/IconsFilterPipe */
    "./src/core/pipes/IconsFilterPipe.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var IconSelectorComponent =
    /*#__PURE__*/
    function () {
      function IconSelectorComponent(filterPipe) {
        _classCallCheck(this, IconSelectorComponent);

        this.filterPipe = filterPipe;
        this._filter = '';
        this._showEmpty = false;
        this.icons = [];
        this.icon = null;
        this.iconChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(IconSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._allIcons = Object(src_core_utils_findIcon__WEBPACK_IMPORTED_MODULE_1__["allIcons"])();
          this.filterItems();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._allIcons = null;
          this.filterItems();
        }
      }, {
        key: "filterItems",
        value: function filterItems() {
          if (this._allIcons === null) {
            this.icons = [];
            return;
          }

          this.icons = this.filterPipe.transform(this._allIcons, this.filter);
        }
      }, {
        key: "selectIcon",
        value: function selectIcon(icon) {
          this.iconChange.emit(!!icon ? icon : null);
        }
      }, {
        key: "showEmpty",
        get: function get() {
          return this._showEmpty;
        },
        set: function set(value) {
          if (typeof value === 'boolean') {
            this._showEmpty = value;
          } else if (typeof value === 'string') {
            this._showEmpty = value.toLowerCase() === 'true';
          } else {
            this._showEmpty = !!value;
          }
        }
      }, {
        key: "filter",
        get: function get() {
          return this._filter;
        },
        set: function set(value) {
          this._filter = !!value ? value : '';
          this.filterItems();
        }
      }]);

      return IconSelectorComponent;
    }();

    IconSelectorComponent.ctorParameters = function () {
      return [{
        type: src_core_pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_2__["IconsFilterPipe"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], IconSelectorComponent.prototype, "showEmpty", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], IconSelectorComponent.prototype, "icon", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], IconSelectorComponent.prototype, "iconChange", void 0);

    IconSelectorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-icon-selector',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./icon-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/core/components/icon-selector/icon-selector.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./icon-selector.component.css */
      "./src/core/components/icon-selector/icon-selector.component.css")).default]
    }), __metadata("design:paramtypes", [src_core_pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_2__["IconsFilterPipe"]])], IconSelectorComponent);
    /***/
  },

  /***/
  "./src/core/core.module.ts":
  /*!*********************************!*\
    !*** ./src/core/core.module.ts ***!
    \*********************************/

  /*! exports provided: CoreModule, WebSocketServiceProvider */

  /***/
  function srcCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebSocketServiceProvider", function () {
      return WebSocketServiceProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/web-socket.service */
    "./src/core/services/web-socket.service.ts");
    /* harmony import */


    var _services_pages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/pages.service */
    "./src/core/services/pages.service.ts");
    /* harmony import */


    var _services_informers_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/informers-state.service */
    "./src/core/services/informers-state.service.ts");
    /* harmony import */


    var _services_controls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/controls.service */
    "./src/core/services/controls.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./directives/auto-focus.directive */
    "./src/core/directives/auto-focus.directive.ts");
    /* harmony import */


    var _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/control-column-editor/control-column-editor.component */
    "./src/core/components/control-column-editor/control-column-editor.component.ts");
    /* harmony import */


    var _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pipes/column-class-name.pipe */
    "./src/core/pipes/column-class-name.pipe.ts");
    /* harmony import */


    var _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/icon-selector/icon-selector.component */
    "./src/core/components/icon-selector/icon-selector.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pipes/IconsFilterPipe */
    "./src/core/pipes/IconsFilterPipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes/EnumToArrayPipe */
    "./src/core/pipes/EnumToArrayPipe.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CoreModule_1;

    var CoreModule = CoreModule_1 =
    /*#__PURE__*/
    function () {
      function CoreModule() {
        _classCallCheck(this, CoreModule);
      }

      _createClass(CoreModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: CoreModule_1,
            providers: [_services_controls_service__WEBPACK_IMPORTED_MODULE_5__["ControlsService"], _services_informers_state_service__WEBPACK_IMPORTED_MODULE_4__["InformersStateService"], _services_pages_service__WEBPACK_IMPORTED_MODULE_3__["PagesService"], {
              provide: _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"],
              useFactory: WebSocketServiceProvider
            }]
          };
        }
      }]);

      return CoreModule;
    }();

    CoreModule = CoreModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_8__["AutoFocusDirective"], _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_9__["ControlColumnEditorComponent"], _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_10__["ColumnClassNamePipe"], _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_15__["EnumToArrayPipe"], _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_13__["IconsFilterPipe"], _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_11__["IconSelectorComponent"]],
      imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      providers: [_services_controls_service__WEBPACK_IMPORTED_MODULE_5__["ControlsService"], _services_informers_state_service__WEBPACK_IMPORTED_MODULE_4__["InformersStateService"], _services_pages_service__WEBPACK_IMPORTED_MODULE_3__["PagesService"], _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"], _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_10__["ColumnClassNamePipe"], _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_13__["IconsFilterPipe"], _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_15__["EnumToArrayPipe"]],
      exports: [_directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_8__["AutoFocusDirective"], _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_9__["ControlColumnEditorComponent"], _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_10__["ColumnClassNamePipe"], _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_15__["EnumToArrayPipe"], _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_13__["IconsFilterPipe"], _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_11__["IconSelectorComponent"]]
    })], CoreModule);

    function WebSocketServiceProvider() {
      var l = window.location;
      var url = "ws://".concat(l.hostname, ":6431/Testing");
      console.log('URL: ', url);
      var rv = new _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"](url);
      rv.logRaisingEvent = false;
      rv.open();
      console.log('Created WebSocketService: ', rv);
      return rv;
    }
    /***/

  },

  /***/
  "./src/core/directives/auto-focus.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/core/directives/auto-focus.directive.ts ***!
    \*****************************************************/

  /*! exports provided: AutoFocusDirective */

  /***/
  function srcCoreDirectivesAutoFocusDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function () {
      return AutoFocusDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AutoFocusDirective =
    /*#__PURE__*/
    function () {
      function AutoFocusDirective(el) {
        _classCallCheck(this, AutoFocusDirective);

        this.el = el;
      }

      _createClass(AutoFocusDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this5 = this;

          setTimeout(function () {
            _this5.el.nativeElement.focus();
          }, 500);
        }
      }]);

      return AutoFocusDirective;
    }();

    AutoFocusDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], AutoFocusDirective.prototype, "appAutoFocus", void 0);

    AutoFocusDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[autoFocus]'
    }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], AutoFocusDirective);
    /***/
  },

  /***/
  "./src/core/index.ts":
  /*!***************************!*\
    !*** ./src/core/index.ts ***!
    \***************************/

  /*! exports provided: CoreModule, WebSocketServiceProvider, BaseControlComponent, ControlColumnEditorComponent, IconSelectorComponent, AutoFocusDirective, PageDetails, WebSocketMessage, WebSocketMessageType, ControlsService, InformersStateService, PagesService, WebSocketService, findIcon, allIcons, makeid, ColumnClassNamePipe, EnumToArrayPipe */

  /***/
  function srcCoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core.module */
    "./src/core/core.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebSocketServiceProvider", function () {
      return _core_module__WEBPACK_IMPORTED_MODULE_0__["WebSocketServiceProvider"];
    });
    /* harmony import */


    var _components_BaseControlComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/BaseControlComponent */
    "./src/core/components/BaseControlComponent.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BaseControlComponent", function () {
      return _components_BaseControlComponent__WEBPACK_IMPORTED_MODULE_1__["BaseControlComponent"];
    });
    /* harmony import */


    var _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/control-column-editor/control-column-editor.component */
    "./src/core/components/control-column-editor/control-column-editor.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ControlColumnEditorComponent", function () {
      return _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_2__["ControlColumnEditorComponent"];
    });
    /* harmony import */


    var _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/icon-selector/icon-selector.component */
    "./src/core/components/icon-selector/icon-selector.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IconSelectorComponent", function () {
      return _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_3__["IconSelectorComponent"];
    });
    /* harmony import */


    var _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./directives/auto-focus.directive */
    "./src/core/directives/auto-focus.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function () {
      return _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_4__["AutoFocusDirective"];
    });
    /* harmony import */


    var _models_PageDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./models/PageDetails */
    "./src/core/models/PageDetails.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageDetails", function () {
      return _models_PageDetails__WEBPACK_IMPORTED_MODULE_5__["PageDetails"];
    });
    /* harmony import */


    var _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./models/WebSocketMessage */
    "./src/core/models/WebSocketMessage.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebSocketMessage", function () {
      return _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_6__["WebSocketMessage"];
    });
    /* harmony import */


    var _models_WebSocketMessageType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./models/WebSocketMessageType */
    "./src/core/models/WebSocketMessageType.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebSocketMessageType", function () {
      return _models_WebSocketMessageType__WEBPACK_IMPORTED_MODULE_7__["WebSocketMessageType"];
    });
    /* harmony import */


    var _services_controls_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/controls.service */
    "./src/core/services/controls.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ControlsService", function () {
      return _services_controls_service__WEBPACK_IMPORTED_MODULE_8__["ControlsService"];
    });
    /* harmony import */


    var _services_informers_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/informers-state.service */
    "./src/core/services/informers-state.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InformersStateService", function () {
      return _services_informers_state_service__WEBPACK_IMPORTED_MODULE_9__["InformersStateService"];
    });
    /* harmony import */


    var _services_pages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/pages.service */
    "./src/core/services/pages.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PagesService", function () {
      return _services_pages_service__WEBPACK_IMPORTED_MODULE_10__["PagesService"];
    });
    /* harmony import */


    var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/web-socket.service */
    "./src/core/services/web-socket.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WebSocketService", function () {
      return _services_web_socket_service__WEBPACK_IMPORTED_MODULE_11__["WebSocketService"];
    });
    /* harmony import */


    var _utils_findIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./utils/findIcon */
    "./src/core/utils/findIcon.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "findIcon", function () {
      return _utils_findIcon__WEBPACK_IMPORTED_MODULE_12__["findIcon"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "allIcons", function () {
      return _utils_findIcon__WEBPACK_IMPORTED_MODULE_12__["allIcons"];
    });
    /* harmony import */


    var _utils_makeid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./utils/makeid */
    "./src/core/utils/makeid.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "makeid", function () {
      return _utils_makeid__WEBPACK_IMPORTED_MODULE_13__["makeid"];
    });
    /* harmony import */


    var _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pipes/column-class-name.pipe */
    "./src/core/pipes/column-class-name.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ColumnClassNamePipe", function () {
      return _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_14__["ColumnClassNamePipe"];
    });
    /* harmony import */


    var _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes/EnumToArrayPipe */
    "./src/core/pipes/EnumToArrayPipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function () {
      return _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_15__["EnumToArrayPipe"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/core/models/PageDetails.ts":
  /*!****************************************!*\
    !*** ./src/core/models/PageDetails.ts ***!
    \****************************************/

  /*! exports provided: PageDetails */

  /***/
  function srcCoreModelsPageDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageDetails", function () {
      return PageDetails;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PageDetails =
    /*#__PURE__*/
    function () {
      function PageDetails() {
        _classCallCheck(this, PageDetails);

        this.title = '';
        this.controls = [{
          name: 'key',
          col: 4,
          data: 'VK_F',
          text: 'Fullscreen',
          icon: 'compress',
          mode: 0
        }, {
          name: 'vol',
          col: 8
        }, {
          name: 'key',
          col: 3,
          data: 'LEFT',
          text: 'Left',
          icon: 'angle-double-left',
          mode: 1
        }, {
          name: 'key',
          col: 6,
          data: 'MEDIA_PLAY_PAUSE',
          text: 'Media Play/Pause',
          icon: 'pause',
          mode: 1
        }, {
          name: 'key',
          col: 3,
          data: 'RIGHT',
          text: 'Right',
          icon: 'angle-double-right',
          mode: 1
        }, {
          name: 'fs',
          id: 'movies'
        } // <IKeyControl>{
        //   type: ControlType.Key,
        //   col: 3,
        //   key: 'VOLUME_UP',
        //   text: 'Volume up',
        //   icon: 'volume-up'
        // },
        // <IKeyControl>{
        //   type: ControlType.Key,
        //   col: 3,
        //   key: 'VOLUME_DOWN',
        //   text: 'Volume down',
        //   icon: 'volume-down'
        // },
        // <IKeyControl>{
        //   type: ControlType.Key,
        //   col: 3,
        //   key: 'left',
        //   text: 'Left',
        //   icon: 'arrow-left'
        // },
        // <IKeyControl>{
        //   type: ControlType.Key,
        //   col: 3,
        //   key: 'right',
        //   text: 'Right',
        //   icon: 'arrow-right'
        // },
        // <IKeyControl>{
        //   type: ControlType.Key,
        //   col: 4,
        //   key: 'f',
        //   text: 'Fullscreen',
        //   icon: 'compress'
        // },
        // <IKeyControl>{
        //   type: ControlType.Key,
        //   col: 8,
        //   key: 'space',
        //   text: 'SPACE',
        //   icon: 'pause'
        // },
        // {
        //   type: ControlType.Volume,
        //   col: 12
        // },
        // <IFileSystemControl>{
        //   type: ControlType.FileSystem,
        //   col: 12,
        //   id: '1'
        // }
        ];
      }

      _createClass(PageDetails, [{
        key: "toDto",
        value: function toDto() {
          return {
            title: this.title,
            controls: this.controls.map(this.controlToDto)
          };
        }
      }, {
        key: "toJson",
        value: function toJson() {
          return JSON.stringify(this.toDto());
        }
      }, {
        key: "controlToDto",
        value: function controlToDto(control) {
          return control;
        }
      }], [{
        key: "parse",
        value: function parse(json) {
          if (!json) return null;
          var dto = JSON.parse(json);
          if (!dto) return null;
          var pd = new PageDetails();
          pd.title = dto.title;
          pd.controls = dto.controls.map(this.parseControl);
          return pd;
        }
      }, {
        key: "parseControl",
        value: function parseControl(dto) {
          return dto;
        }
      }]);

      return PageDetails;
    }();
    /***/

  },

  /***/
  "./src/core/models/WebSocketMessage.ts":
  /*!*********************************************!*\
    !*** ./src/core/models/WebSocketMessage.ts ***!
    \*********************************************/

  /*! exports provided: WebSocketMessage */

  /***/
  function srcCoreModelsWebSocketMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebSocketMessage", function () {
      return WebSocketMessage;
    });
    /* harmony import */


    var _WebSocketMessageType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./WebSocketMessageType */
    "./src/core/models/WebSocketMessageType.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var WebSocketMessage =
    /*#__PURE__*/
    function () {
      function WebSocketMessage(data) {
        _classCallCheck(this, WebSocketMessage);

        this.__Type = _WebSocketMessageType__WEBPACK_IMPORTED_MODULE_0__["WebSocketMessageType"].Request;
        this.__ActionName = null;
        this.__Hash = null;
        this.__Data = null;

        if (!!data) {
          this.Type = data.t;
          this.ActionName = !!data.a ? data.a : null;
          this.Hash = !!data.h ? data.h : null;
          this.Data = !!data.d ? data.d : null;
        }
      }

      _createClass(WebSocketMessage, [{
        key: "toDto",
        value: function toDto() {
          var rv = {
            Type: this.Type,
            ActionName: this.ActionName,
            Hash: this.Hash,
            Data: this.Data
          };
          return rv;
        }
      }, {
        key: "Type",
        get: function get() {
          return this.__Type;
        },
        set: function set(value) {
          this.__Type = value;
        }
      }, {
        key: "ActionName",
        get: function get() {
          return this.__ActionName;
        },
        set: function set(value) {
          this.__ActionName = value;
        }
      }, {
        key: "Hash",
        get: function get() {
          return this.__Hash;
        },
        set: function set(value) {
          this.__Hash = value;
        }
      }, {
        key: "Data",
        get: function get() {
          return this.__Data;
        },
        set: function set(value) {
          this.__Data = value;
        }
      }], [{
        key: "parse",
        value: function parse(object) {
          if (object instanceof Object === false) return null;
          var rv = new WebSocketMessage({
            t: object.Type,
            a: object.ActionName,
            h: object.Hash,
            d: object.Data
          });
          return rv;
        }
      }]);

      return WebSocketMessage;
    }();
    /***/

  },

  /***/
  "./src/core/models/WebSocketMessageType.ts":
  /*!*************************************************!*\
    !*** ./src/core/models/WebSocketMessageType.ts ***!
    \*************************************************/

  /*! exports provided: WebSocketMessageType */

  /***/
  function srcCoreModelsWebSocketMessageTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebSocketMessageType", function () {
      return WebSocketMessageType;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var WebSocketMessageType;

    (function (WebSocketMessageType) {
      WebSocketMessageType[WebSocketMessageType["Request"] = 0] = "Request";
      WebSocketMessageType[WebSocketMessageType["Notification"] = 1] = "Notification";
      WebSocketMessageType[WebSocketMessageType["Response"] = 2] = "Response";
      WebSocketMessageType[WebSocketMessageType["Error"] = 3] = "Error";
    })(WebSocketMessageType || (WebSocketMessageType = {}));
    /***/

  },

  /***/
  "./src/core/pipes/EnumToArrayPipe.ts":
  /*!*******************************************!*\
    !*** ./src/core/pipes/EnumToArrayPipe.ts ***!
    \*******************************************/

  /*! exports provided: EnumToArrayPipe */

  /***/
  function srcCorePipesEnumToArrayPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function () {
      return EnumToArrayPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var EnumToArrayPipe =
    /*#__PURE__*/
    function () {
      function EnumToArrayPipe() {
        _classCallCheck(this, EnumToArrayPipe);
      }

      _createClass(EnumToArrayPipe, [{
        key: "transform",
        value: function transform(value) {
          return Object.keys(value).filter(function (e) {
            return !isNaN(+e);
          }).map(function (o) {
            return {
              index: +o,
              name: value[o]
            };
          });
        }
      }]);

      return EnumToArrayPipe;
    }();

    EnumToArrayPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'enumToArray'
    })], EnumToArrayPipe);
    /***/
  },

  /***/
  "./src/core/pipes/IconsFilterPipe.ts":
  /*!*******************************************!*\
    !*** ./src/core/pipes/IconsFilterPipe.ts ***!
    \*******************************************/

  /*! exports provided: IconsFilterPipe */

  /***/
  function srcCorePipesIconsFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsFilterPipe", function () {
      return IconsFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var IconsFilterPipe =
    /*#__PURE__*/
    function () {
      function IconsFilterPipe() {
        _classCallCheck(this, IconsFilterPipe);
      }

      _createClass(IconsFilterPipe, [{
        key: "transform",
        value: function transform(value, filter) {
          filter = !!filter ? filter.toLowerCase() : null;
          var rv = filter === null ? value : value.filter(function (x) {
            return x.iconName.indexOf(filter) >= 0;
          });
          return rv;
        }
      }]);

      return IconsFilterPipe;
    }();

    IconsFilterPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'icons_filter'
    })], IconsFilterPipe);
    /***/
  },

  /***/
  "./src/core/pipes/column-class-name.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/core/pipes/column-class-name.pipe.ts ***!
    \**************************************************/

  /*! exports provided: ColumnClassNamePipe */

  /***/
  function srcCorePipesColumnClassNamePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnClassNamePipe", function () {
      return ColumnClassNamePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ColumnClassNamePipe =
    /*#__PURE__*/
    function () {
      function ColumnClassNamePipe() {
        _classCallCheck(this, ColumnClassNamePipe);
      }

      _createClass(ColumnClassNamePipe, [{
        key: "transform",
        value: function transform(value) {
          if (typeof value !== 'number' || isNaN(value) || value <= 0) return 'col-12';
          return "col-".concat(parseInt(value, 10));
        }
      }]);

      return ColumnClassNamePipe;
    }();

    ColumnClassNamePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'columnClassName'
    })], ColumnClassNamePipe);
    /***/
  },

  /***/
  "./src/core/services/controls.service.ts":
  /*!***********************************************!*\
    !*** ./src/core/services/controls.service.ts ***!
    \***********************************************/

  /*! exports provided: ControlsService */

  /***/
  function srcCoreServicesControlsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlsService", function () {
      return ControlsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ControlsService =
    /*#__PURE__*/
    function () {
      function ControlsService(componentFactoryResolver) {
        _classCallCheck(this, ControlsService);

        this.componentFactoryResolver = componentFactoryResolver;
        this._registrations = [];
      }

      _createClass(ControlsService, [{
        key: "register",
        value: function register(registration) {
          if (!registration) throw new Error('registration is not provided.');
          if (typeof registration.name !== 'string') throw new Error('name parameter must be of type string.');
          if (!!this._registrations.find(function (x) {
            return x.name === registration.name;
          })) throw new Error('name already in use.');
          if (typeof registration.title !== 'string' || registration.title.trim().length === 0) throw new Error('title parameter must be non whitespace string.');

          this._registrations.push(registration);
        }
      }, {
        key: "views",
        value: function views(ref, items) {
          var _this6 = this;

          if (!ref || !items) return [];
          ref.clear();
          var rv = [];
          items.forEach(function (item) {
            var control = _this6.generateView(ref, item);

            if (!!control) rv.push(control);
          });
          return rv;
        }
      }, {
        key: "view",
        value: function view(ref, item) {
          if (!ref || !item) return null;
          ref.clear();
          var control = this.generateView(ref, item);
          return control;
        }
      }, {
        key: "generateView",
        value: function generateView(ref, item) {
          if (!ref || !item) return null;

          var r = this._registrations.find(function (x) {
            return x.name === item.name;
          });

          if (!r) return null;
          var f = this.componentFactoryResolver.resolveComponentFactory(r.viewType);
          var c = ref.createComponent(f);
          var control = c.instance;
          control.load(item);
          return control;
        }
      }, {
        key: "editors",
        value: function editors(ref, items) {
          var _this7 = this;

          if (!ref || !items) return [];
          var rv = [];
          items.forEach(function (item) {
            var control = _this7.generateEditor(ref, item);

            if (!!control) rv.push(control);
          });
          return rv;
        }
      }, {
        key: "editor",
        value: function editor(ref, item) {
          if (!ref || !item) return null;
          ref.clear();
          var control = this.generateEditor(ref, item);
          return control;
        }
      }, {
        key: "generateEditor",
        value: function generateEditor(ref, item) {
          if (!ref || !item) return null;

          var r = this._registrations.find(function (x) {
            return x.name === item.name;
          });

          if (!r) return null;
          var f = this.componentFactoryResolver.resolveComponentFactory(r.editType);
          var c = ref.createComponent(f);
          var control = c.instance;
          control.load(item);
          return control;
        }
        /**
         * Gets a list avaiable registrations.
         *
         * @returns {{ title: string, name: string }[]}
         * @memberof ControlsService
         */

      }, {
        key: "getAvailable",
        value: function getAvailable() {
          return this._registrations.map(function (x) {
            return {
              title: x.title,
              name: x.name
            };
          });
        }
      }]);

      return ControlsService;
    }();

    ControlsService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }];
    };

    ControlsService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])], ControlsService);
    /***/
  },

  /***/
  "./src/core/services/informers-state.service.ts":
  /*!******************************************************!*\
    !*** ./src/core/services/informers-state.service.ts ***!
    \******************************************************/

  /*! exports provided: InformersStateService */

  /***/
  function srcCoreServicesInformersStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformersStateService", function () {
      return InformersStateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/WebSocketMessage */
    "./src/core/models/WebSocketMessage.ts");
    /* harmony import */


    var _web_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web-socket.service */
    "./src/core/services/web-socket.service.ts");
    /* harmony import */


    var _models_WebSocketMessageType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/WebSocketMessageType */
    "./src/core/models/WebSocketMessageType.ts");
    /* harmony import */


    var _utils_makeid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../utils/makeid */
    "./src/core/utils/makeid.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var InformersStateService =
    /*#__PURE__*/
    function () {
      function InformersStateService(service) {
        var _this8 = this;

        _classCallCheck(this, InformersStateService);

        this.service = service;
        this.handlers = {
          'Informer.Sound': function InformerSound(msg) {
            return _this8.onSound(msg);
          }
        };
        this.Sound = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.proceedHandlers();
        this.checkServer();
      }

      _createClass(InformersStateService, [{
        key: "proceedHandlers",
        value: function proceedHandlers() {
          for (var action in this.handlers) {
            if (!this.handlers.hasOwnProperty(action)) continue;
            var handler = this.handlers[action];
            this.service.addMessageHandler(action, handler);
          }
        }
      }, {
        key: "onSound",
        value: function onSound(msg) {
          if (!!msg.Data) this.Sound.next(msg.Data);
        }
      }, {
        key: "checkServer",
        value: function checkServer() {
          if (!this.service.isConnected.getValue()) return;

          for (var action in this.handlers) {
            if (!this.handlers.hasOwnProperty(action)) continue;
            var m = new _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_2__["WebSocketMessage"]({
              a: action,
              t: _models_WebSocketMessageType__WEBPACK_IMPORTED_MODULE_4__["WebSocketMessageType"].Request,
              h: Object(_utils_makeid__WEBPACK_IMPORTED_MODULE_5__["makeid"])()
            });
            this.service.send(m);
          }
        }
      }]);

      return InformersStateService;
    }();

    InformersStateService.ctorParameters = function () {
      return [{
        type: _web_socket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"]
      }];
    };

    InformersStateService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_web_socket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"]])], InformersStateService);
    /***/
  },

  /***/
  "./src/core/services/pages.service.ts":
  /*!********************************************!*\
    !*** ./src/core/services/pages.service.ts ***!
    \********************************************/

  /*! exports provided: PagesService */

  /***/
  function srcCoreServicesPagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesService", function () {
      return PagesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_PageDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/PageDetails */
    "./src/core/models/PageDetails.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PagesService_1;

    var PagesService = PagesService_1 =
    /*#__PURE__*/
    function () {
      function PagesService() {
        _classCallCheck(this, PagesService);

        this.pages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        if (localStorage.getItem(PagesService_1.__key) === null) localStorage.setItem(PagesService_1.__key, JSON.stringify([]));
        this.list();
      }

      _createClass(PagesService, [{
        key: "detailsKey",
        value: function detailsKey(name) {
          var key = "".concat(PagesService_1.__key, ".").concat(name);
          return key;
        }
        /**
         * Lists all available pages in ordered way.
         */

      }, {
        key: "list",
        value: function list() {
          var json = localStorage.getItem(PagesService_1.__key);
          if (typeof json !== 'string') return null;
          var obj = JSON.parse(json);
          if (obj instanceof Array === false) return null;
          var pages = obj;
          var rv = pages.sort(function (a, b) {
            return a.index - b.index;
          });
          this.pages.next(rv);
          return rv;
        }
        /**
         * Gets page with details.
         * @param name
         */

      }, {
        key: "details",
        value: function details(name) {
          if (typeof name !== 'string') return null;
          var list = this.pages.getValue();
          if (list === null || list === undefined) return null;
          name = name.toLowerCase();
          var page = list.find(function (x) {
            return x.name === name;
          });
          if (page === null || page === undefined) return null;
          var key = this.detailsKey(name);
          var json = localStorage.getItem(key);
          if (typeof json !== 'string') return null;

          var rv = _models_PageDetails__WEBPACK_IMPORTED_MODULE_2__["PageDetails"].parse(json);

          return rv;
        }
        /**
         * Creates new page with specified title and optional name.
         * @param title
         * @param name
         */

      }, {
        key: "create",
        value: function create(title) {
          var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          if (typeof title !== 'string') return null;
          if (typeof name !== 'string') name = title.toLowerCase();
          var list = this.pages.getValue(); // TODO: Init list.

          var exists = function exists() {
            return list.find(function (x) {
              return x.name === name;
            }) !== undefined;
          };

          if (exists()) {
            var origName = name;
            var ind = 0;

            do {
              name = "".concat(origName, "-").concat(++ind);
            } while (exists());
          }

          var details = new _models_PageDetails__WEBPACK_IMPORTED_MODULE_2__["PageDetails"]();
          details.title = title; // TODO: Populate details

          var page = {
            title: title,
            name: name,
            index: list.length
          };
          var key = this.detailsKey(name);
          localStorage.setItem(key, details.toJson());
          this.setPage(page);
          return details;
        }
        /**
         * Permanently deletes page by name
         * @param name
         */

      }, {
        key: "delete",
        value: function _delete(name) {
          if (typeof name !== 'string') return null;
          name = name.toLowerCase();
          var pages = this.pages.getValue();
          var rv = pages instanceof Array ? pages.findIndex(function (x) {
            return x.name === name;
          }) : -1;

          if (rv >= 0) {
            pages.splice(rv, 1);
            pages.forEach(function (x, i) {
              if (i < rv) return;
              x.index = i;
            });
            var key = this.detailsKey(name);
            localStorage.removeItem(key);
            this.savePages(pages);
          }

          return rv;
        }
      }, {
        key: "savePages",
        value: function savePages(pages) {
          var json = JSON.stringify(pages);
          localStorage.setItem(PagesService_1.__key, json);
          this.pages.next(pages);
        } //////////////////////////////////////////////////// STOPPED HERE.

        /**
         * Saves page. page.name must be unique, otherwise it will overwrite previous one.
         * @param page
         */

      }, {
        key: "setPage",
        value: function setPage(page) {
          if (page == null) return;
          var pages = this.pages.getValue();
          var ind = pages instanceof Array ? pages.findIndex(function (x) {
            return x.name === page.name;
          }) : -1;
          if (ind >= 0) pages[ind] = page;else pages.push(page);
          this.savePages(pages);
        }
      }, {
        key: "update",
        value: function update(name, details) {
          if (details instanceof _models_PageDetails__WEBPACK_IMPORTED_MODULE_2__["PageDetails"] === false) throw new Error('details argument must be of type PageDetails.');
          var list = this.pages.getValue();
          if (list === null || list === undefined) return false;
          name = name.toLowerCase();
          var page = list.find(function (x) {
            return x.name === name;
          });
          if (page === null || page === undefined) return false;
          var key = this.detailsKey(name);
          var json = localStorage.getItem(key);
          if (typeof json !== 'string') return false;
          page.title = details.title;
          this.savePages(list);
          localStorage.setItem(key, JSON.stringify(details));
          return true;
        }
      }]);

      return PagesService;
    }();

    PagesService.__key = 'rc.pages';
    PagesService = PagesService_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [])], PagesService);
    /***/
  },

  /***/
  "./src/core/services/web-socket.service.ts":
  /*!*************************************************!*\
    !*** ./src/core/services/web-socket.service.ts ***!
    \*************************************************/

  /*! exports provided: WebSocketService */

  /***/
  function srcCoreServicesWebSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebSocketService", function () {
      return WebSocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/WebSocketMessage */
    "./src/core/models/WebSocketMessage.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var WebSocketService =
    /*#__PURE__*/
    function () {
      function WebSocketService(url) {
        var _this9 = this;

        _classCallCheck(this, WebSocketService);

        this.url = url;
        this.__autoReconnectInterval = 5 * 1000; // 5 seconds.

        this.__autoReconnectTries = -1; // Infinite.

        this.__autoReconnectTry = 0; // Current try of reconnect.

        this.__handlers = {};
        this.__messageHandlers = {};
        this.__instnaceHandlers = {
          'close': function close(e) {
            _this9.raiseEvent('close', e);

            if (e.code !== 1000) // 1000 is a CLOSE_NORMAL, on which client don't need to reconnect.
              _this9.reconnect();

            _this9.raiseEvent('connection', false);

            _this9.isConnected.next(false);
          },
          'error': function error(e) {
            _this9.raiseEvent('error', e);

            if (e.code === 'ECONNREFUSED' || e.reason === 'ECONNREFUSED') _this9.reconnect();
          },
          'message': function message(e) {
            _this9.raiseEvent('message.raw', e);

            try {
              var data = JSON.parse(e.data);

              var msg = _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessage"].parse(data);

              if (msg === null) return;

              _this9.raiseEvent('message.received', msg);

              if (!_this9.__filters.every(function (f) {
                return f(msg) !== false;
              })) return;

              _this9.raiseMessage(msg);
            } catch (e) {
              _this9.raiseEvent('error.message', e);

              _this9.raiseEvent('error', e);
            }
          },
          'open': function open(e) {
            _this9.raiseEvent('open', e);

            _this9.raiseEvent('connection', true);

            _this9.isConnected.next(true);
          }
        };
        this.__filters = [];
        this.logRaisingEvent = false;
        this.isConnected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }
      /**
       * Gets or sets auto-reconnect interval in ms. Minimum is 0 -> instant reconnect.
       * @returns {number}
       */


      _createClass(WebSocketService, [{
        key: "addHandler",
        value: function addHandler(name, handler) {
          if (typeof name !== 'string') return;
          if (handler instanceof Function === false) return;
          name = name.toLowerCase();
          if (!this.__handlers.hasOwnProperty(name)) this.__handlers[name] = [];

          this.__handlers[name].push(handler); // TODO: Depending on event type: check if that handler should be invoked instantly.

        }
      }, {
        key: "removeHandler",
        value: function removeHandler(name, handler) {
          if (typeof name !== 'string') return false;
          if (handler instanceof Function === false) return false;
          name = name.toLowerCase();
          if (!this.__handlers.hasOwnProperty(name)) return false;
          var arr = this.__handlers[name];
          if (arr instanceof Array === false) return false;
          var ind = arr.indexOf(handler);
          if (ind < 0) return false;
          arr.splice(ind, 1);
        }
      }, {
        key: "raiseEvent",
        value: function raiseEvent(name) {
          var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          if (typeof name !== 'string') return;
          if (this.logRaisingEvent) console.log('Raise event:', name, data);
          name = name.toLowerCase();
          if (!this.__handlers.hasOwnProperty(name)) return;
          var handlers = this.__handlers[name];
          if (handlers instanceof Array === false) return;
          handlers.forEach(function (h) {
            return h(data);
          });
        }
      }, {
        key: "send",
        value: function send(message) {
          if (message instanceof _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessage"] === false) return;
          var data = JSON.stringify(message.toDto());

          try {
            this.raiseEvent('message.sending', message);
            this.instance.send(data);
            this.raiseEvent('message.sent', message);
          } catch (e) {
            this.raiseEvent('error.message.send', message);
            this.raiseEvent('error.message', {
              e: e,
              message: message
            });
            this.raiseEvent('error', {
              e: e,
              message: message
            });
          }
        }
      }, {
        key: "open",
        value: function open() {
          this.close();

          try {
            this.instance = new WebSocket(this.url);
            this.instanceCreated(this.instance);
            this.__autoReconnectTry = 0;
          } catch (e) {
            console.warn(e);
            this.raiseEvent('error.open', e);
            this.raiseEvent('error.open', {
              e: e,
              message: 'Count not initialize WebSocket.'
            });
          }
        }
      }, {
        key: "close",
        value: function close() {
          if (this.instance instanceof WebSocket) {
            var ws = this.instance;
            this.instance = null;
            ws.close();
            this.instanceClosed(ws);
            this.isConnected.next(false);
          }
        }
        /**
         * Reconnects after autoReconnectInterval elapses.
         */

      }, {
        key: "reconnect",
        value: function reconnect() {
          var _this10 = this;

          this.close(); // Check if auto-reconnect is limited.

          if (this.__autoReconnectTries >= 0 && this.__autoReconnectTry >= this.__autoReconnectTries) return;
          this.__autoReconnectTry++;
          if (this.autoReconnectInterval > 0) setTimeout(function () {
            return _this10.open();
          }, this.autoReconnectInterval);else this.open();
        }
      }, {
        key: "instanceCreated",
        value: function instanceCreated(instance) {
          for (var evt in this.__instnaceHandlers) {
            if (this.__instnaceHandlers.hasOwnProperty(evt) === false) continue;
            var handler = this.__instnaceHandlers[evt];
            instance.addEventListener(evt, handler);
          }
        }
      }, {
        key: "instanceClosed",
        value: function instanceClosed(instance) {
          for (var evt in this.__instnaceHandlers) {
            if (this.__instnaceHandlers.hasOwnProperty(evt) === false) continue;
            var handler = this.__instnaceHandlers[evt];
            instance.removeEventListener(evt, handler);
          }
        }
        /**
         * Adds filter that checks if received message from WebSocket can be handled.
         * @param filter Function that returns should return false to prevent message from handling
         */

      }, {
        key: "addFilter",
        value: function addFilter(filter) {
          if (!(filter instanceof Function)) return;

          this.__filters.push(filter);
        }
        /**
         * Removes filter that checks if received message from WebSocket can be handled.
         * @param filter Function that returns should return false to prevent message from handling
         * @returns How many filters removed. In case same filter was added 2 times -> will return 2.
         */

      }, {
        key: "removeFilter",
        value: function removeFilter(filter) {
          if (!(filter instanceof Function)) return 0;
          var rv = 0;

          var ind = this.__filters.indexOf(filter);

          while (ind >= 0) {
            this.__filters.splice(ind, 1);

            ind = this.__filters.indexOf(filter);
            rv++;
          }

          return rv;
        }
      }, {
        key: "raiseMessage",
        value: function raiseMessage(message) {
          var action = message.ActionName.toLowerCase();
          if (!this.__messageHandlers.hasOwnProperty(action)) return;
          action = action.toLowerCase();
          var handlers = this.__messageHandlers[action];
          if (handlers instanceof Array === false) return;
          handlers.forEach(function (x) {
            return x(message);
          });
        }
      }, {
        key: "addMessageHandler",
        value: function addMessageHandler(action, handler) {
          if (typeof action !== 'string') return;
          if (handler instanceof Function === false) return;
          action = action.toLowerCase();
          if (!this.__messageHandlers.hasOwnProperty(action)) this.__messageHandlers[action] = [];

          this.__messageHandlers[action].push(handler);
        }
      }, {
        key: "removeMessageHandler",
        value: function removeMessageHandler(name, handler) {
          if (typeof name !== 'string') return false;
          if (handler instanceof Function === false) return false;
          name = name.toLowerCase();
          if (!this.__messageHandlers.hasOwnProperty(name)) return false;
          var arr = this.__messageHandlers[name];
          if (arr instanceof Array === false) return false;
          var ind = arr.indexOf(handler);
          if (ind < 0) return false;
          arr.splice(ind, 1);
        }
      }, {
        key: "autoReconnectInterval",
        get: function get() {
          return this.__autoReconnectInterval;
        },
        set: function set(value) {
          if (value !== null && typeof value !== 'number' || isNaN(value)) return;
          if (value < 0) value = 0;
          this.__autoReconnectInterval = value;
        }
        /**
         * Gets or sets auto-reconnect tries count before stopping trying to reconnect.
         * -1 -> Infinity times.
         * @returns {number}
         */

      }, {
        key: "autoReconnectTries",
        get: function get() {
          return this.__autoReconnectTries;
        },
        set: function set(value) {
          if (value !== null && typeof value !== 'number' || isNaN(value)) return;
          if (value < -1) value = -1;
          this.__autoReconnectTries = value;
        }
      }]);

      return WebSocketService;
    }();

    WebSocketService.ctorParameters = function () {
      return [{
        type: String
      }];
    };

    WebSocketService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [String])], WebSocketService);
    /***/
  },

  /***/
  "./src/core/utils/findIcon.ts":
  /*!************************************!*\
    !*** ./src/core/utils/findIcon.ts ***!
    \************************************/

  /*! exports provided: findIcon, allIcons */

  /***/
  function srcCoreUtilsFindIconTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "findIcon", function () {
      return findIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "allIcons", function () {
      return allIcons;
    });
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function findIcon(name) {
      var pack = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["fas"];

      for (var key in pack) {
        if (!pack.hasOwnProperty(key)) continue;
        var icon = pack[key];
        if (icon.iconName === name) return icon;
      }
    }

    function allIcons() {
      var rv = [];
      var pack = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["fas"];

      for (var key in pack) {
        if (!pack.hasOwnProperty(key)) continue;
        var icon = pack[key];
        if (typeof icon.iconName === 'string') rv.push(icon);
      }

      return rv;
    }
    /***/

  },

  /***/
  "./src/core/utils/makeid.ts":
  /*!**********************************!*\
    !*** ./src/core/utils/makeid.ts ***!
    \**********************************/

  /*! exports provided: makeid */

  /***/
  function srcCoreUtilsMakeidTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "makeid", function () {
      return makeid;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function makeid() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false,
      wsHost: 'ws://localhost:6431/Testing'
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/file-system/Services/file-system-paths.service.ts":
  /*!***************************************************************!*\
    !*** ./src/file-system/Services/file-system-paths.service.ts ***!
    \***************************************************************/

  /*! exports provided: FileSystemPathsService */

  /***/
  function srcFileSystemServicesFileSystemPathsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSystemPathsService", function () {
      return FileSystemPathsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FileSystemPathsService_1;

    var FileSystemPathsService = FileSystemPathsService_1 =
    /*#__PURE__*/
    function () {
      function FileSystemPathsService() {
        _classCallCheck(this, FileSystemPathsService);

        this.data = null;
        this.reload();
      }
      /**
       * Relaods data from local storage.
       *
       * @private
       * @memberof FileSystemPathsService
       */


      _createClass(FileSystemPathsService, [{
        key: "reload",
        value: function reload() {
          var s = localStorage.getItem(FileSystemPathsService_1.key);

          if (s !== null) {
            var d = JSON.parse(s);
            var data = {};

            for (var key in d) {
              if (d.hasOwnProperty(key)) {
                var element = d[key];
                if (typeof element === 'string') data[key] = element;
              }
            }

            this.data = data;
          } else {
            this.data = {};
          }
        }
        /**
         * Saves current data to local storage.
         *
         * @private
         * @returns
         * @memberof FileSystemPathsService
         */

      }, {
        key: "save",
        value: function save() {
          if (!this.data) return;
          localStorage.setItem(FileSystemPathsService_1.key, JSON.stringify(this.data));
        }
        /**
         * Gets path for control with specified id.
         *
         * @param {string} id Contol unique id. Must be non-nullable string. Must be non-empty string.
         * @returns {string} Saved path or null if control id previously did not saved any paths.
         * @memberof FileSystemPathsService
         */

      }, {
        key: "getPath",
        value: function getPath(id) {
          if (typeof id !== 'string') throw new Error('id param must be of type string.');
          if (id.length === 0) throw new Error('id param must be non-empty string.');
          if (!this.data.hasOwnProperty(id)) return null;
          return this.data[id];
        }
        /**
         *Saves path for control with specified id.
         *
         * @param {string} id Control unique id. Must be non-nullable string. Must be non-empty string.
         * @param {string} path Path to save. Must be non-nullable string, can be empty string.
         * @memberof FileSystemPathsService
         */

      }, {
        key: "setPath",
        value: function setPath(id, path) {
          if (typeof id !== 'string') throw new Error('id param must be of type string.');
          if (id.length === 0) throw new Error('id param must be non-empty string.');
          if (typeof path !== 'string') throw new Error('path param must be of type string.');
          this.data[id] = path;
          this.save();
        }
        /**
         * Tries to delete path for specified contol id.
         *
         * @param {string} id Control unique id. Must be non-nullable string. Must be non-empty string.
         * @returns {boolean} Returns true if control id had previously stored path, otherwise returns false.
         * @memberof FileSystemPathsService
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          if (typeof id !== 'string') throw new Error('id param must be of type string.');
          if (id.length === 0) throw new Error('id param must be non-empty string.');
          if (!this.data.hasOwnProperty(id)) return false;
          delete this.data[id];
          this.save();
          return true;
        }
        /**
         * Generates new unique id for control.
         *
         * @returns {string}
         * @memberof FileSystemPathsService
         */

      }, {
        key: "generateId",
        value: function generateId() {
          var id;

          do {
            id = Object(src_core__WEBPACK_IMPORTED_MODULE_1__["makeid"])(8);
          } while (this.data.hasOwnProperty(id));

          return id;
        }
        /**
         * Gets all control ids.
         *
         * @returns {string[]}
         * @memberof FileSystemPathsService
         */

      }, {
        key: "getAllIDs",
        value: function getAllIDs() {
          return Object.keys(this.data);
        }
      }]);

      return FileSystemPathsService;
    }();

    FileSystemPathsService.key = 'rc.filesystem.paths';
    FileSystemPathsService = FileSystemPathsService_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [])], FileSystemPathsService);
    /***/
  },

  /***/
  "./src/file-system/file-system-component/file-system.component.css":
  /*!*************************************************************************!*\
    !*** ./src/file-system/file-system-component/file-system.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcFileSystemFileSystemComponentFileSystemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".border {\r\n  height: 1px;\r\n  background: darkgrey;\r\n  margin: 4px;\r\n}\r\n\r\n#folders a,\r\n#files a {\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n.root {\r\n  overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbS1jb21wb25lbnQvZmlsZS1zeXN0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW0tY29tcG9uZW50L2ZpbGUtc3lzdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kOiBkYXJrZ3JleTtcclxuICBtYXJnaW46IDRweDtcclxufVxyXG5cclxuI2ZvbGRlcnMgYSxcclxuI2ZpbGVzIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJvb3Qge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/file-system/file-system-component/file-system.component.ts":
  /*!************************************************************************!*\
    !*** ./src/file-system/file-system-component/file-system.component.ts ***!
    \************************************************************************/

  /*! exports provided: FileSystemComponent */

  /***/
  function srcFileSystemFileSystemComponentFileSystemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSystemComponent", function () {
      return FileSystemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Services/file-system-paths.service */
    "./src/file-system/Services/file-system-paths.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FileSystemComponent =
    /*#__PURE__*/
    function (_src_core__WEBPACK_IM) {
      _inherits(FileSystemComponent, _src_core__WEBPACK_IM);

      function FileSystemComponent(service, pathsService) {
        var _this11;

        _classCallCheck(this, FileSystemComponent);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(FileSystemComponent).call(this));
        _this11.service = service;
        _this11.pathsService = pathsService;
        _this11.messageHandlers = null;
        _this11.initialized = false;
        _this11.files = null;
        _this11.folders = null;
        _this11.paths = null;
        _this11.path = '';
        _this11.maxHeight = 0;
        _this11.iconFolder = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFolder"];
        _this11.iconFile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"];
        _this11.messageHandlers = {
          'FileSystem.List': function FileSystemList(m) {
            return _this11.onFileSystemList(m);
          }
        };
        _this11.socketId = _this11.pathsService.generateId();
        return _this11;
      }

      _createClass(FileSystemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          for (var action in this.messageHandlers) {
            if (!this.messageHandlers.hasOwnProperty(action)) continue;
            var handler = this.messageHandlers[action];
            this.service.addMessageHandler(action, handler);
          }

          this.subscription = this.service.isConnected.subscribe(function (value) {
            if (!value) return;

            _this12.goToPath(!!_this12.path ? _this12.path : '');
          });
          this.initialized = true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.initialized = false;
          this.subscription.unsubscribe();

          for (var action in this.messageHandlers) {
            if (!this.messageHandlers.hasOwnProperty(action)) continue;
            var handler = this.messageHandlers[action];
            this.service.removeMessageHandler(action, handler);
          }
        }
      }, {
        key: "load",
        value: function load(data) {
          this.col = 'col' in data ? data.col : this.colMax; // TODO: use this.col somehow.

          this.id = data.id;
          this.maxHeight = data.maxHeight > 0 ? data.maxHeight : 0;
          this.socketId = !!this.id ? this.id : this.pathsService.generateId(); // Path for control is loaded only if control has unique id.

          this.path = !!this.id ? this.pathsService.getPath(this.id) : '';
          if (!!this.path && this.initialized) this.goToPath(this.path); // TODO

          return true;
        }
      }, {
        key: "onFileSystemList",
        value: function onFileSystemList(m) {
          if (!m || !m.Hash || !m.Hash.startsWith(this.socketId)) return;

          if (m.Type === src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketMessageType"].Response) {
            var r = m.Data;

            if (r === null || r === undefined) {
              this.goToPath('');
              return;
            }

            this.path = !!r.path ? r.path.join('\\') : '';
            var path = !!this.path ? this.path + '\\' : '';

            var map = function map(x) {
              return {
                url: path + x,
                title: x
              };
            };

            this.files = !!r.files ? r.files.map(map) : [];
            this.folders = !!r.folders ? r.folders.map(map) : [];
            this.paths = !!r.path ? r.path.map(function (x, i, arr) {
              var p = arr.slice(0, i + 1);
              return {
                url: p.join('\\'),
                title: x
              };
            }) : [];
            this.paths.unshift({
              url: '',
              title: '..'
            });
            if (!!this.id) // Save path only if unique id is specified.
              this.pathsService.setPath(this.id, this.path);
          }
        }
      }, {
        key: "goToPath",
        value: function goToPath(url) {
          var m = new src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketMessage"]({
            a: 'FileSystem.List',
            t: src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketMessageType"].Request,
            h: "".concat(this.socketId, "-").concat(Object(src_core__WEBPACK_IMPORTED_MODULE_2__["makeid"])()),
            d: url
          });
          this.service.send(m);
        }
      }, {
        key: "exec",
        value: function exec(url) {
          var m = new src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketMessage"]({
            a: 'FileSystem.Exec',
            t: src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketMessageType"].Request,
            h: "".concat(this.socketId, "-").concat(Object(src_core__WEBPACK_IMPORTED_MODULE_2__["makeid"])()),
            d: url
          });
          this.service.send(m);
        }
      }]);

      return FileSystemComponent;
    }(src_core__WEBPACK_IMPORTED_MODULE_2__["BaseControlComponent"]);

    FileSystemComponent.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]
      }, {
        type: _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_3__["FileSystemPathsService"]
      }];
    };

    FileSystemComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-file-system',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./file-system.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/file-system/file-system-component/file-system.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./file-system.component.css */
      "./src/file-system/file-system-component/file-system.component.css")).default]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"], _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_3__["FileSystemPathsService"]])], FileSystemComponent);
    /***/
  },

  /***/
  "./src/file-system/file-system-editor-component/file-system-editor.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/file-system/file-system-editor-component/file-system-editor.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcFileSystemFileSystemEditorComponentFileSystemEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW0tZWRpdG9yLWNvbXBvbmVudC9maWxlLXN5c3RlbS1lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/file-system/file-system-editor-component/file-system-editor.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/file-system/file-system-editor-component/file-system-editor.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: FileSystemEditorComponent */

  /***/
  function srcFileSystemFileSystemEditorComponentFileSystemEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSystemEditorComponent", function () {
      return FileSystemEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FileSystemEditorComponent =
    /*#__PURE__*/
    function () {
      function FileSystemEditorComponent() {
        _classCallCheck(this, FileSystemEditorComponent);

        this.data = null;
      }

      _createClass(FileSystemEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "load",
        value: function load(data) {
          this.data = !!data ? data : null;
          this.col = !!data ? data.col : 0;
          this.id = !!data ? data.id : '';
          this.maxHeight = !!data && data.maxHeight > 0 ? data.maxHeight : 0;
          return true;
        }
      }, {
        key: "save",
        value: function save() {
          var d = this.data;

          if (!!d) {
            if (d.id !== this.id) {// TODO: remove from storage if not used by others.
            }

            d.id = this.id;
            d.col = this.col;
            d.maxHeight = this.maxHeight;
          }

          return d;
        }
      }]);

      return FileSystemEditorComponent;
    }();

    FileSystemEditorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-file-system-editor',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./file-system-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/file-system/file-system-editor-component/file-system-editor.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./file-system-editor.component.css */
      "./src/file-system/file-system-editor-component/file-system-editor.component.css")).default]
    }), __metadata("design:paramtypes", [])], FileSystemEditorComponent);
    /***/
  },

  /***/
  "./src/file-system/file-system.module.ts":
  /*!***********************************************!*\
    !*** ./src/file-system/file-system.module.ts ***!
    \***********************************************/

  /*! exports provided: FileSystemModule */

  /***/
  function srcFileSystemFileSystemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileSystemModule", function () {
      return FileSystemModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var _file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./file-system-component/file-system.component */
    "./src/file-system/file-system-component/file-system.component.ts");
    /* harmony import */


    var _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./file-system-editor-component/file-system-editor.component */
    "./src/file-system/file-system-editor-component/file-system-editor.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Services/file-system-paths.service */
    "./src/file-system/Services/file-system-paths.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FileSystemModule_1;

    var FileSystemModule = FileSystemModule_1 =
    /*#__PURE__*/
    function () {
      function FileSystemModule(controls) {
        _classCallCheck(this, FileSystemModule);

        var reg = {
          name: FileSystemModule_1.controlKey,
          title: 'File System',
          viewType: _file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__["FileSystemComponent"],
          editType: _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__["FileSystemEditorComponent"]
        };
        controls.register(reg);
      }

      _createClass(FileSystemModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: FileSystemModule_1,
            providers: [_Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_6__["FileSystemPathsService"]]
          };
        }
      }]);

      return FileSystemModule;
    }();

    FileSystemModule.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]
      }];
    };

    FileSystemModule.controlKey = 'fs';
    FileSystemModule = FileSystemModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
      providers: [_Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_6__["FileSystemPathsService"]],
      declarations: [_file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__["FileSystemComponent"], _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__["FileSystemEditorComponent"]],
      exports: [_file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__["FileSystemComponent"], _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__["FileSystemEditorComponent"]],
      entryComponents: [_file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__["FileSystemComponent"], _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__["FileSystemEditorComponent"]]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]])], FileSystemModule);
    /***/
  },

  /***/
  "./src/file-system/index.ts":
  /*!**********************************!*\
    !*** ./src/file-system/index.ts ***!
    \**********************************/

  /*! exports provided: FileSystemModule, FileSystemComponent, FileSystemEditorComponent, FileSystemPathsService */

  /***/
  function srcFileSystemIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _file_system_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./file-system.module */
    "./src/file-system/file-system.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileSystemModule", function () {
      return _file_system_module__WEBPACK_IMPORTED_MODULE_0__["FileSystemModule"];
    });
    /* harmony import */


    var _file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./file-system-component/file-system.component */
    "./src/file-system/file-system-component/file-system.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileSystemComponent", function () {
      return _file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_1__["FileSystemComponent"];
    });
    /* harmony import */


    var _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./file-system-editor-component/file-system-editor.component */
    "./src/file-system/file-system-editor-component/file-system-editor.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileSystemEditorComponent", function () {
      return _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_2__["FileSystemEditorComponent"];
    });
    /* harmony import */


    var _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Services/file-system-paths.service */
    "./src/file-system/Services/file-system-paths.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FileSystemPathsService", function () {
      return _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_3__["FileSystemPathsService"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/key/Models/KeyControlMode.ts":
  /*!******************************************!*\
    !*** ./src/key/Models/KeyControlMode.ts ***!
    \******************************************/

  /*! exports provided: KeyControlMode */

  /***/
  function srcKeyModelsKeyControlModeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyControlMode", function () {
      return KeyControlMode;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var KeyControlMode;

    (function (KeyControlMode) {
      KeyControlMode[KeyControlMode["Press"] = 0] = "Press";
      KeyControlMode[KeyControlMode["Long press"] = 1] = "Long press";
      KeyControlMode[KeyControlMode["Repeatable"] = 2] = "Repeatable";
    })(KeyControlMode || (KeyControlMode = {}));
    /***/

  },

  /***/
  "./src/key/Models/KeysList.ts":
  /*!************************************!*\
    !*** ./src/key/Models/KeysList.ts ***!
    \************************************/

  /*! exports provided: KeyCodes */

  /***/
  function srcKeyModelsKeysListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyCodes", function () {
      return KeyCodes;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var KeyCodes = [{
      name: '0',
      value: 'VK_0'
    }, {
      name: '1',
      value: 'VK_1'
    }, {
      name: '2',
      value: 'VK_2'
    }, {
      name: '3',
      value: 'VK_3'
    }, {
      name: '4',
      value: 'VK_4'
    }, {
      name: '5',
      value: 'VK_5'
    }, {
      name: '6',
      value: 'VK_6'
    }, {
      name: '7',
      value: 'VK_7'
    }, {
      name: '8',
      value: 'VK_8'
    }, {
      name: '9',
      value: 'VK_9'
    }, {
      name: 'A',
      value: 'VK_A'
    }, {
      name: 'B',
      value: 'VK_B'
    }, {
      name: 'C',
      value: 'VK_C'
    }, {
      name: 'D',
      value: 'VK_D'
    }, {
      name: 'E',
      value: 'VK_E'
    }, {
      name: 'F',
      value: 'VK_F'
    }, {
      name: 'G',
      value: 'VK_G'
    }, {
      name: 'H',
      value: 'VK_H'
    }, {
      name: 'I',
      value: 'VK_I'
    }, {
      name: 'J',
      value: 'VK_J'
    }, {
      name: 'K',
      value: 'VK_K'
    }, {
      name: 'L',
      value: 'VK_L'
    }, {
      name: 'M',
      value: 'VK_M'
    }, {
      name: 'N',
      value: 'VK_N'
    }, {
      name: 'O',
      value: 'VK_O'
    }, {
      name: 'P',
      value: 'VK_P'
    }, {
      name: 'Q',
      value: 'VK_Q'
    }, {
      name: 'R',
      value: 'VK_R'
    }, {
      name: 'S',
      value: 'VK_S'
    }, {
      name: 'T',
      value: 'VK_T'
    }, {
      name: 'U',
      value: 'VK_U'
    }, {
      name: 'V',
      value: 'VK_V'
    }, {
      name: 'W',
      value: 'VK_W'
    }, {
      name: 'X',
      value: 'VK_X'
    }, {
      name: 'Y',
      value: 'VK_Y'
    }, {
      name: 'Z',
      value: 'VK_Z'
    }, {
      name: 'Numpad 0',
      value: 'NUMPAD0'
    }, {
      name: 'Numpad 1',
      value: 'NUMPAD1'
    }, {
      name: 'Numpad 2',
      value: 'NUMPAD2'
    }, {
      name: 'Numpad 3',
      value: 'NUMPAD3'
    }, {
      name: 'Numpad 4',
      value: 'NUMPAD4'
    }, {
      name: 'Numpad 5',
      value: 'NUMPAD5'
    }, {
      name: 'Numpad 6',
      value: 'NUMPAD6'
    }, {
      name: 'Numpad 7',
      value: 'NUMPAD7'
    }, {
      name: 'Numpad 8',
      value: 'NUMPAD8'
    }, {
      name: 'Numpad 9',
      value: 'NUMPAD9'
    }, {
      name: 'F1',
      value: 'F1'
    }, {
      name: 'F2',
      value: 'F2'
    }, {
      name: 'F3',
      value: 'F3'
    }, {
      name: 'F4',
      value: 'F4'
    }, {
      name: 'F5',
      value: 'F5'
    }, {
      name: 'F6',
      value: 'F6'
    }, {
      name: 'F7',
      value: 'F7'
    }, {
      name: 'F8',
      value: 'F8'
    }, {
      name: 'F9',
      value: 'F9'
    }, {
      name: 'F10',
      value: 'F10'
    }, {
      name: 'F11',
      value: 'F11'
    }, {
      name: 'F12',
      value: 'F12'
    }, {
      name: 'F13',
      value: 'F13'
    }, {
      name: 'F14',
      value: 'F14'
    }, {
      name: 'F15',
      value: 'F15'
    }, {
      name: 'F16',
      value: 'F16'
    }, {
      name: 'F17',
      value: 'F17'
    }, {
      name: 'F18',
      value: 'F18'
    }, {
      name: 'F19',
      value: 'F19'
    }, {
      name: 'F20',
      value: 'F20'
    }, {
      name: 'F21',
      value: 'F21'
    }, {
      name: 'F22',
      value: 'F22'
    }, {
      name: 'F23',
      value: 'F23'
    }, {
      name: 'F24',
      value: 'F24'
    }, {
      name: 'Mouse left',
      value: 'LBUTTON'
    }, {
      name: 'Mouse right',
      value: 'RBUTTON'
    }, {
      name: 'Mouse middle',
      value: 'MBUTTON'
    }, {
      name: 'Mouse 4',
      value: 'XBUTTON1'
    }, {
      name: 'Mouse 5',
      value: 'XBUTTON5'
    }, {
      name: 'Cancel',
      value: 'CANCEL'
    }, {
      name: 'Back',
      value: 'BACK'
    }, {
      name: 'Tab',
      value: 'TAB'
    }, {
      name: 'Clear',
      value: 'CLEAR'
    }, {
      name: 'Return',
      value: 'RETURN'
    }, {
      name: 'Menu',
      value: 'MENU'
    }, {
      name: 'Pause',
      value: 'PAUSE'
    }, {
      name: 'Esc',
      value: 'ESCAPE'
    }, {
      name: 'Space',
      value: 'SPACE'
    }, {
      name: 'Left',
      value: 'LEFT'
    }, {
      name: 'Right',
      value: 'RIGHT'
    }, {
      name: 'Up',
      value: 'UP'
    }, {
      name: 'Down',
      value: 'DOWN'
    }, {
      name: 'Home',
      value: 'HOME'
    }, {
      name: 'End',
      value: 'END'
    }, {
      name: 'Insert',
      value: 'INSERT'
    }, {
      name: 'Delete',
      value: 'DELETE'
    }, {
      name: 'Print',
      value: 'PRINT'
    }, {
      name: 'Windows Left',
      value: 'LWIN'
    }, {
      name: 'Windows Right',
      value: 'RWIN'
    }, {
      name: 'Multiply',
      value: 'MULTIPLY'
    }, {
      name: 'Add',
      value: 'ADD'
    }, {
      name: 'Separator',
      value: 'SEPARATOR'
    }, {
      name: 'Substract',
      value: 'SUBTRACT'
    }, {
      name: 'Decimal',
      value: 'DECIMAL'
    }, {
      name: 'Divide',
      value: 'DIVIDE'
    }, {
      name: 'NumLock',
      value: 'NUMLOCK'
    }, {
      name: 'Scroll',
      value: 'SCROLL'
    }, {
      name: 'Shift',
      value: 'SHIFT'
    }, {
      name: 'Shift Left',
      value: 'LSHIFT'
    }, {
      name: 'Shift Right',
      value: 'RSHIFT'
    }, {
      name: 'Control',
      value: 'CONTROL'
    }, {
      name: 'Control Left',
      value: 'LCONTROL'
    }, {
      name: 'Control Right',
      value: 'RCONTROL'
    }, {
      name: 'Menu Left',
      value: 'LMENU'
    }, {
      name: 'Menu Right',
      value: 'RMENU'
    }, {
      name: 'Volume Mute',
      value: 'VOLUME_MUTE'
    }, {
      name: 'Volume Down',
      value: 'VOLUME_DOWN'
    }, {
      name: 'Volume Up',
      value: 'VOLUME_UP'
    }, {
      name: 'Media Next',
      value: 'MEDIA_NEXT_TRACK'
    }, {
      name: 'Media Prev',
      value: 'MEDIA_PREV_TRACK'
    }, {
      name: 'Media Stop',
      value: 'MEDIA_STOP'
    }, {
      name: 'Media Play/Pause',
      value: 'MEDIA_PLAY_PAUSE'
    }, {
      name: 'Browser Back',
      value: 'BROWSER_BACK'
    }, {
      name: 'Browser Forward',
      value: 'BROWSER_FORWARD'
    }, {
      name: 'Browser Refresh',
      value: 'BROWSER_REFRESH'
    }, {
      name: 'Browser Stop',
      value: 'BROWSER_STOP'
    }, {
      name: 'Browser Search',
      value: 'BROWSER_SEARCH'
    }, {
      name: 'Browser Favorites',
      value: 'BROWSER_FAVORITES'
    }, {
      name: 'Browser Home',
      value: 'BROWSER_HOME'
    }, {
      name: 'Apps',
      value: 'APPS'
    }, {
      name: 'Sleep',
      value: 'SLEEP'
    }];
    /***/
  },

  /***/
  "./src/key/index.ts":
  /*!**************************!*\
    !*** ./src/key/index.ts ***!
    \**************************/

  /*! exports provided: KeyModule, KeyControlMode, KeyComponent, KeyEditorComponent */

  /***/
  function srcKeyIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _key_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./key.module */
    "./src/key/key.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyModule", function () {
      return _key_module__WEBPACK_IMPORTED_MODULE_0__["KeyModule"];
    });
    /* harmony import */


    var _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Models/KeyControlMode */
    "./src/key/Models/KeyControlMode.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyControlMode", function () {
      return _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_1__["KeyControlMode"];
    });
    /* harmony import */


    var _key_component_key_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./key-component/key.component */
    "./src/key/key-component/key.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyComponent", function () {
      return _key_component_key_component__WEBPACK_IMPORTED_MODULE_2__["KeyComponent"];
    });
    /* harmony import */


    var _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./key-editor-component/key-editor.component */
    "./src/key/key-editor-component/key-editor.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "KeyEditorComponent", function () {
      return _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_3__["KeyEditorComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/key/key-component/key.component.css":
  /*!*************************************************!*\
    !*** ./src/key/key-component/key.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcKeyKeyComponentKeyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n  display: block;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n  height: 86px;\r\n}\r\n\r\nbutton > span {\r\n  font-size: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9rZXkva2V5LWNvbXBvbmVudC9rZXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMva2V5L2tleS1jb21wb25lbnQva2V5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4NnB4O1xyXG59XHJcblxyXG5idXR0b24gPiBzcGFuIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/key/key-component/key.component.ts":
  /*!************************************************!*\
    !*** ./src/key/key-component/key.component.ts ***!
    \************************************************/

  /*! exports provided: KeyComponent */

  /***/
  function srcKeyKeyComponentKeyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyComponent", function () {
      return KeyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Models/KeyControlMode */
    "./src/key/Models/KeyControlMode.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var KeyComponent =
    /*#__PURE__*/
    function (_src_core__WEBPACK_IM2) {
      _inherits(KeyComponent, _src_core__WEBPACK_IM2);

      function KeyComponent(webSocketService) {
        var _this13;

        _classCallCheck(this, KeyComponent);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(KeyComponent).call(this));
        _this13.webSocketService = webSocketService;
        /**
         * Data that will be sent to server on click.
         */

        _this13.data = null;
        _this13.title = '';
        _this13.icon = null;
        _this13.showIconWithTitle = false;
        _this13.mode = _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Press;
        _this13.isKeyDown = false;
        _this13.repeat = 100;
        _this13.repeatHandler = null;
        return _this13;
      }

      _createClass(KeyComponent, [{
        key: "load",
        value: function load(data) {
          this.col = 'col' in data ? data.col : this.colMax; // TODO: use this.col somehow.

          this.data = data.data;
          this.title = !!data.text ? data.text : '';
          this.icon = !!data.icon ? Object(src_core__WEBPACK_IMPORTED_MODULE_1__["findIcon"])(data.icon) : null;
          this.showIconWithTitle = data.iconWithText === true;
          this.mode = 'mode' in data ? data.mode : _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Press;
          var r = +data.r;
          this.repeat = !isNaN(r) && r > 0 ? r : 100; // TODO: Load all relevant data.

          return true;
        }
      }, {
        key: "send",
        value: function send(action) {
          var m = new src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessage"]({
            a: action,
            d: this.data,
            t: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessageType"].Request,
            h: Object(src_core__WEBPACK_IMPORTED_MODULE_1__["makeid"])()
          });
          this.webSocketService.send(m);
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.mode === _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Press) this.send('key');
        }
      }, {
        key: "onTouchstart",
        value: function onTouchstart() {
          var _this14 = this;

          if (this.isKeyDown) return;

          switch (this.mode) {
            case _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"]['Long press']:
              this.isKeyDown = true;
              this.send('key.down');
              break;

            case _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Repeatable:
              this.send('key');

              if (this.repeatHandler !== null) {
                clearInterval(this.repeatHandler);
                this.repeatHandler = null;
              }

              this.isKeyDown = true;
              this.repeatHandler = setInterval(function () {
                _this14.send('key');
              }, this.repeat);
          }
        }
      }, {
        key: "onTouchend",
        value: function onTouchend() {
          if (!this.isKeyDown) return;

          switch (this.mode) {
            case _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"]['Long press']:
              this.isKeyDown = false;
              this.send('key.up');
              break;

            case _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Repeatable:
              if (this.repeatHandler !== null) {
                this.isKeyDown = false;
                clearInterval(this.repeatHandler);
                this.repeatHandler = null;
              }

              break;
          }
        }
      }]);

      return KeyComponent;
    }(src_core__WEBPACK_IMPORTED_MODULE_1__["BaseControlComponent"]);

    KeyComponent.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], KeyComponent.prototype, "onClick", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchstart'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], KeyComponent.prototype, "onTouchstart", null);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseup'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchend'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], KeyComponent.prototype, "onTouchend", null);

    KeyComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-key',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./key.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/key/key-component/key.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./key.component.css */
      "./src/key/key-component/key.component.css")).default]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]])], KeyComponent);
    /***/
  },

  /***/
  "./src/key/key-editor-component/key-editor.component.css":
  /*!***************************************************************!*\
    !*** ./src/key/key-editor-component/key-editor.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcKeyKeyEditorComponentKeyEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "fa-icon {\r\n  margin: 0 auto;\r\n\r\n}\r\n\r\nspan.col-3{\r\n  display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9rZXkva2V5LWVkaXRvci1jb21wb25lbnQva2V5LWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2tleS9rZXktZWRpdG9yLWNvbXBvbmVudC9rZXktZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmYS1pY29uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbn1cclxuXHJcbnNwYW4uY29sLTN7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/key/key-editor-component/key-editor.component.ts":
  /*!**************************************************************!*\
    !*** ./src/key/key-editor-component/key-editor.component.ts ***!
    \**************************************************************/

  /*! exports provided: KeyEditorComponent */

  /***/
  function srcKeyKeyEditorComponentKeyEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyEditorComponent", function () {
      return KeyEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Models/KeyControlMode */
    "./src/key/Models/KeyControlMode.ts");
    /* harmony import */


    var _Models_KeysList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Models/KeysList */
    "./src/key/Models/KeysList.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var KeyEditorComponent =
    /*#__PURE__*/
    function () {
      function KeyEditorComponent() {
        _classCallCheck(this, KeyEditorComponent);

        this.repeatMin = 10;
        this.repeatDefault = 100;
        this.keyCodes = _Models_KeysList__WEBPACK_IMPORTED_MODULE_3__["KeyCodes"];
        this.data = null;
        this.key = null;
        this.icon = null;
        this.showIconPicker = false;
        this.mode = _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Press;
        this.modes = _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"];
        this.repeat = this.repeatDefault;
      }

      _createClass(KeyEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "load",
        value: function load(data) {
          if (!!data) {
            this.data = data;
            this.key = this.keyCodes.find(function (x) {
              return x.value === data.data;
            });
            this.icon = !!data.icon ? Object(src_core__WEBPACK_IMPORTED_MODULE_1__["findIcon"])(data.icon) : null;
            this.mode = 'mode' in data ? data.mode : _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Press;
            this.repeat = 'r' in data ? +data.r : this.repeatDefault;

            if (isNaN(+this.repeat)) {
              this.repeat = this.repeatDefault;
            } else if (this.repeat < this.repeatMin) this.repeat = this.repeatMin;
          } else {
            this.data = null;
            this.key = null;
            this.icon = null;
            this.mode = _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Press;
            this.repeat = this.repeatDefault;
          }

          return true;
        }
      }, {
        key: "save",
        value: function save() {
          if (!!this.key) {
            this.data.data = this.key.value;
            this.data.text = this.key.name;
            this.data.icon = !!this.icon ? this.icon.iconName : null;
            this.data.mode = this.mode;
            if (this.mode === _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Repeatable) this.data.r = this.repeat;else delete this.data.r;
          }

          return this.data;
        }
      }, {
        key: "onKeyChanged",
        value: function onKeyChanged(data) {
          this.key = data;
        }
      }, {
        key: "onModeChanged",
        value: function onModeChanged(data) {
          this.mode = data;
        }
      }, {
        key: "changeIcon",
        value: function changeIcon(icon) {
          this.icon = icon;
          this.showIconPicker = false;
        }
      }]);

      return KeyEditorComponent;
    }();

    KeyEditorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-key-editor',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./key-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/key/key-editor-component/key-editor.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./key-editor.component.css */
      "./src/key/key-editor-component/key-editor.component.css")).default]
    }), __metadata("design:paramtypes", [])], KeyEditorComponent);
    /***/
  },

  /***/
  "./src/key/key.module.ts":
  /*!*******************************!*\
    !*** ./src/key/key.module.ts ***!
    \*******************************/

  /*! exports provided: KeyModule */

  /***/
  function srcKeyKeyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyModule", function () {
      return KeyModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var _key_component_key_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./key-component/key.component */
    "./src/key/key-component/key.component.ts");
    /* harmony import */


    var _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./key-editor-component/key-editor.component */
    "./src/key/key-editor-component/key-editor.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var KeyModule_1;

    var KeyModule = KeyModule_1 =
    /*#__PURE__*/
    function () {
      function KeyModule(controls) {
        _classCallCheck(this, KeyModule);

        var reg = {
          name: KeyModule_1.controlKey,
          title: 'Key',
          viewType: _key_component_key_component__WEBPACK_IMPORTED_MODULE_3__["KeyComponent"],
          editType: _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__["KeyEditorComponent"]
        };
        controls.register(reg);
      }

      _createClass(KeyModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: KeyModule_1,
            providers: []
          };
        }
      }]);

      return KeyModule;
    }();

    KeyModule.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]
      }];
    };

    KeyModule.controlKey = 'key';
    KeyModule = KeyModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_key_component_key_component__WEBPACK_IMPORTED_MODULE_3__["KeyComponent"], _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__["KeyEditorComponent"]],
      imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
      exports: [_key_component_key_component__WEBPACK_IMPORTED_MODULE_3__["KeyComponent"], _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__["KeyEditorComponent"]],
      entryComponents: [_key_component_key_component__WEBPACK_IMPORTED_MODULE_3__["KeyComponent"], _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__["KeyEditorComponent"]]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]])], KeyModule);
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/volume/index.ts":
  /*!*****************************!*\
    !*** ./src/volume/index.ts ***!
    \*****************************/

  /*! exports provided: VolumeModule, VolumeComponent, VolumeEditorComponent */

  /***/
  function srcVolumeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _volume_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./volume.module */
    "./src/volume/volume.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VolumeModule", function () {
      return _volume_module__WEBPACK_IMPORTED_MODULE_0__["VolumeModule"];
    });
    /* harmony import */


    var _volume_component_volume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./volume-component/volume.component */
    "./src/volume/volume-component/volume.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VolumeComponent", function () {
      return _volume_component_volume_component__WEBPACK_IMPORTED_MODULE_1__["VolumeComponent"];
    });
    /* harmony import */


    var _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./volume-editor-component/volume-editor.component */
    "./src/volume/volume-editor-component/volume-editor.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VolumeEditorComponent", function () {
      return _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_2__["VolumeEditorComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/volume/volume-component/volume.component.css":
  /*!**********************************************************!*\
    !*** ./src/volume/volume-component/volume.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcVolumeVolumeComponentVolumeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host{\r\n  display: block;\r\n}\r\ninput {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92b2x1bWUvdm9sdW1lLWNvbXBvbmVudC92b2x1bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvdm9sdW1lL3ZvbHVtZS1jb21wb25lbnQvdm9sdW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/volume/volume-component/volume.component.ts":
  /*!*********************************************************!*\
    !*** ./src/volume/volume-component/volume.component.ts ***!
    \*********************************************************/

  /*! exports provided: VolumeComponent */

  /***/
  function srcVolumeVolumeComponentVolumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolumeComponent", function () {
      return VolumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var VolumeComponent =
    /*#__PURE__*/
    function (_src_core__WEBPACK_IM3) {
      _inherits(VolumeComponent, _src_core__WEBPACK_IM3);

      function VolumeComponent(webSocketService, informers) {
        var _this15;

        _classCallCheck(this, VolumeComponent);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(VolumeComponent).call(this));
        _this15.webSocketService = webSocketService;
        _this15.informers = informers;
        _this15.subs = [];
        _this15.isEnabled = false;
        return _this15;
      }

      _createClass(VolumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.subs.push(this.informers.Sound.subscribe(function (value) {
            var input = _this16.input.nativeElement;
            if (!!value) input.value = value.OutputVolume;
            _this16.isEnabled = !!value && !value.OutputIsMuted && _this16.webSocketService.isConnected.getValue();
          }));
          this.subs.push(this.webSocketService.isConnected.subscribe(function (x) {
            var sound = _this16.informers.Sound.getValue();

            _this16.isEnabled = x && !!sound && !sound.OutputIsMuted;
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }, {
        key: "load",
        value: function load(data) {
          // Set column size in super class.
          this.col = 'col' in data ? data.col : this.colMax; // TODO: use this.col somehow.

          return true;
        }
      }, {
        key: "setVolume",
        value: function setVolume(value) {
          if (!this.isEnabled) return;
          var m = new src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessage"]({
            a: 'Sound.Output.Volume',
            d: parseInt(value, 10),
            t: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessageType"].Request,
            h: Object(src_core__WEBPACK_IMPORTED_MODULE_1__["makeid"])()
          });
          this.webSocketService.send(m);
        }
      }]);

      return VolumeComponent;
    }(src_core__WEBPACK_IMPORTED_MODULE_1__["BaseControlComponent"]);

    VolumeComponent.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]
      }, {
        type: src_core__WEBPACK_IMPORTED_MODULE_1__["InformersStateService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inp', {
      static: true
    }), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])], VolumeComponent.prototype, "input", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], VolumeComponent.prototype, "isEnabled", void 0);

    VolumeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-volume',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./volume.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/volume/volume-component/volume.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./volume.component.css */
      "./src/volume/volume-component/volume.component.css")).default]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"], src_core__WEBPACK_IMPORTED_MODULE_1__["InformersStateService"]])], VolumeComponent);
    /***/
  },

  /***/
  "./src/volume/volume-editor-component/volume-editor.component.css":
  /*!************************************************************************!*\
    !*** ./src/volume/volume-editor-component/volume-editor.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcVolumeVolumeEditorComponentVolumeEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdm9sdW1lL3ZvbHVtZS1lZGl0b3ItY29tcG9uZW50L3ZvbHVtZS1lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/volume/volume-editor-component/volume-editor.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/volume/volume-editor-component/volume-editor.component.ts ***!
    \***********************************************************************/

  /*! exports provided: VolumeEditorComponent */

  /***/
  function srcVolumeVolumeEditorComponentVolumeEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolumeEditorComponent", function () {
      return VolumeEditorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var VolumeEditorComponent =
    /*#__PURE__*/
    function () {
      function VolumeEditorComponent() {
        _classCallCheck(this, VolumeEditorComponent);

        this.data = null;
      }

      _createClass(VolumeEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "load",
        value: function load(data) {
          this.data = !!data ? data : null;
          return true;
        }
      }, {
        key: "save",
        value: function save() {
          return this.data;
        }
      }]);

      return VolumeEditorComponent;
    }();

    VolumeEditorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'rc-volume-editor',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./volume-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/volume/volume-editor-component/volume-editor.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./volume-editor.component.css */
      "./src/volume/volume-editor-component/volume-editor.component.css")).default]
    }), __metadata("design:paramtypes", [])], VolumeEditorComponent);
    /***/
  },

  /***/
  "./src/volume/volume.module.ts":
  /*!*************************************!*\
    !*** ./src/volume/volume.module.ts ***!
    \*************************************/

  /*! exports provided: VolumeModule */

  /***/
  function srcVolumeVolumeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VolumeModule", function () {
      return VolumeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/core */
    "./src/core/index.ts");
    /* harmony import */


    var _volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./volume-component/volume.component */
    "./src/volume/volume-component/volume.component.ts");
    /* harmony import */


    var _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./volume-editor-component/volume-editor.component */
    "./src/volume/volume-editor-component/volume-editor.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var VolumeModule_1;

    var VolumeModule = VolumeModule_1 =
    /*#__PURE__*/
    function () {
      function VolumeModule(controls) {
        _classCallCheck(this, VolumeModule);

        var reg = {
          name: VolumeModule_1.controlKey,
          title: 'Volume',
          viewType: _volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__["VolumeComponent"],
          editType: _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__["VolumeEditorComponent"]
        };
        controls.register(reg);
      }

      _createClass(VolumeModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: VolumeModule_1,
            providers: []
          };
        }
      }]);

      return VolumeModule;
    }();

    VolumeModule.ctorParameters = function () {
      return [{
        type: src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]
      }];
    };

    VolumeModule.controlKey = 'vol';
    VolumeModule = VolumeModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__["VolumeComponent"], _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__["VolumeEditorComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
      exports: [_volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__["VolumeComponent"], _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__["VolumeEditorComponent"]],
      entryComponents: [_volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__["VolumeComponent"], _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__["VolumeEditorComponent"]]
    }), __metadata("design:paramtypes", [src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]])], VolumeModule);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\_git\Epsil0neR\PcRemoteController\RemoteController\RemoteController.Client\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map