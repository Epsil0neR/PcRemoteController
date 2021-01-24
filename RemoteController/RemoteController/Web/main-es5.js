(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+GaQ":
    /*!****************************************!*\
      !*** ./src/core/models/PageDetails.ts ***!
      \****************************************/

    /*! exports provided: PageDetails */

    /***/
    function GaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageDetails", function () {
        return PageDetails;
      });

      var PageDetails = /*#__PURE__*/function () {
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
    "+WQ5":
    /*!**************************************************************!*\
      !*** ./src/key/key-editor-component/key-editor.component.ts ***!
      \**************************************************************/

    /*! exports provided: KeyEditorComponent */

    /***/
    function WQ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyEditorComponent", function () {
        return KeyEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Models/KeyControlMode */
      "M0GX");
      /* harmony import */


      var _Models_KeysList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Models/KeysList */
      "gdmj");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _core_components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/components/icon-selector/icon-selector.component */
      "bykB");
      /* harmony import */


      var _core_components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/components/control-column-editor/control-column-editor.component */
      "OTFJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _core_pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../core/pipes/EnumToArrayPipe */
      "HUBa");

      function KeyEditorComponent_rc_control_column_editor_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rc-control-column-editor", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function KeyEditorComponent_rc_control_column_editor_1_Template_rc_control_column_editor_valueChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.data.col = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.data.col);
        }
      }

      function KeyEditorComponent_div_2_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", x_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r9.name);
        }
      }

      function KeyEditorComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Key");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KeyEditorComponent_div_2_Template_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onKeyChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KeyEditorComponent_div_2_option_4_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.keyCodes);
        }
      }

      function KeyEditorComponent_div_3_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", x_r13.index);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r13.name);
        }
      }

      function KeyEditorComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Action mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KeyEditorComponent_div_3_Template_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.onModeChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KeyEditorComponent_div_3_option_4_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "enumToArray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.mode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r2.modes));
        }
      }

      function KeyEditorComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Repeat interval");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function KeyEditorComponent_div_4_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.repeat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.repeat);
        }
      }

      function KeyEditorComponent_fa_icon_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 14);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.icon);
        }
      }

      function KeyEditorComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var KeyEditorComponent = /*#__PURE__*/function () {
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

            this.showIconPicker = false;
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

      KeyEditorComponent.ɵfac = function KeyEditorComponent_Factory(t) {
        return new (t || KeyEditorComponent)();
      };

      KeyEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: KeyEditorComponent,
        selectors: [["rc-key-editor"]],
        decls: 14,
        vars: 9,
        consts: [[3, "hidden"], [3, "value", "valueChange", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], [1, "col-3"], ["class", "fa-lg", 3, "icon", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-primary", "col-6", 3, "click"], ["showEmpty", "true", 3, "hidden", "icon", "iconChange"], [3, "value", "valueChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["type", "number", "min", "10", "step", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa-lg", 3, "icon"]],
        template: function KeyEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyEditorComponent_rc_control_column_editor_1_Template, 1, 1, "rc-control-column-editor", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KeyEditorComponent_div_2_Template, 5, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KeyEditorComponent_div_3_Template, 6, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KeyEditorComponent_div_4_Template, 4, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Icon: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, KeyEditorComponent_fa_icon_9_Template, 1, 1, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, KeyEditorComponent_span_10_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyEditorComponent_Template_button_click_11_listener() {
              return ctx.showIconPicker = true;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "rc-icon-selector", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("iconChange", function KeyEditorComponent_Template_rc_icon_selector_iconChange_13_listener($event) {
              return ctx.changeIcon($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !!ctx.showIconPicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data && ctx.mode === ctx.modes.Repeatable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showIconPicker)("icon", ctx.icon);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _core_components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_5__["IconSelectorComponent"], _core_components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_6__["ControlColumnEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]],
        pipes: [_core_pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_9__["EnumToArrayPipe"]],
        styles: ["fa-icon[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n\r\n}\r\n\r\nspan.col-3[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleS1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImtleS1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZhLWljb24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxufVxyXG5cclxuc3Bhbi5jb2wtM3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-key-editor',
            templateUrl: './key-editor.component.html',
            styleUrls: ['./key-editor.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
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
      "zUnb");
      /***/
    },

    /***/
    "16mY":
    /*!*******************************************!*\
      !*** ./src/core/pipes/IconsFilterPipe.ts ***!
      \*******************************************/

    /*! exports provided: IconsFilterPipe */

    /***/
    function mY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconsFilterPipe", function () {
        return IconsFilterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var IconsFilterPipe = /*#__PURE__*/function () {
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

      IconsFilterPipe.ɵfac = function IconsFilterPipe_Factory(t) {
        return new (t || IconsFilterPipe)();
      };

      IconsFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "icons_filter",
        type: IconsFilterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsFilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'icons_filter'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "1eB0":
    /*!********************************************!*\
      !*** ./src/core/services/pages.service.ts ***!
      \********************************************/

    /*! exports provided: PagesService */

    /***/
    function eB0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesService", function () {
        return PagesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _models_PageDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/PageDetails */
      "+GaQ");

      var PagesService = /*#__PURE__*/function () {
        function PagesService() {
          _classCallCheck(this, PagesService);

          this.pages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          if (localStorage.getItem(PagesService.__key) === null) localStorage.setItem(PagesService.__key, JSON.stringify([]));
          this.list();
        }

        _createClass(PagesService, [{
          key: "detailsKey",
          value: function detailsKey(name) {
            var key = "".concat(PagesService.__key, ".").concat(name);
            return key;
          }
          /**
           * Lists all available pages in ordered way.
           */

        }, {
          key: "list",
          value: function list() {
            var json = localStorage.getItem(PagesService.__key);
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
            localStorage.setItem(PagesService.__key, json);
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

      PagesService.ɵfac = function PagesService_Factory(t) {
        return new (t || PagesService)();
      };

      PagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PagesService,
        factory: PagesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "2opn":
    /*!***************************************************!*\
      !*** ./src/file-system/Models/IFileSystemList.ts ***!
      \***************************************************/

    /*! no exports provided */

    /***/
    function opn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "36dB":
    /*!*********************************************!*\
      !*** ./src/app/pipes/enum-to-array.pipe.ts ***!
      \*********************************************/

    /*! exports provided: EnumToArrayPipe */

    /***/
    function dB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function () {
        return EnumToArrayPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EnumToArrayPipe = /*#__PURE__*/function () {
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

      EnumToArrayPipe.ɵfac = function EnumToArrayPipe_Factory(t) {
        return new (t || EnumToArrayPipe)();
      };

      EnumToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "enumToArray",
        type: EnumToArrayPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnumToArrayPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'enumToArray'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "3Xa9":
    /*!************************************************!*\
      !*** ./src/key/key-component/key.component.ts ***!
      \************************************************/

    /*! exports provided: KeyComponent */

    /***/
    function Xa9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyComponent", function () {
        return KeyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Models/KeyControlMode */
      "M0GX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      function KeyComponent_fa_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.icon);
        }
      }

      function KeyComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title.toUpperCase());
        }
      }

      var KeyComponent = /*#__PURE__*/function (_src_core__WEBPACK_IM) {
        _inherits(KeyComponent, _src_core__WEBPACK_IM);

        var _super = _createSuper(KeyComponent);

        function KeyComponent(webSocketService) {
          var _this;

          _classCallCheck(this, KeyComponent);

          _this = _super.call(this);
          _this.webSocketService = webSocketService;
          /**
           * Data that will be sent to server on click.
           */

          _this.data = null;
          _this.title = '';
          _this.icon = null;
          _this.showIconWithTitle = false;
          _this.mode = _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"].Press;
          _this.isKeyDown = false;
          _this.repeat = 100;
          _this.repeatHandler = null;
          return _this;
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
            this.repeat = !isNaN(r) && r > 0 ? r : 100; // Load all relevant data.

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
            var _this2 = this;

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
                  _this2.send('key');
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

      KeyComponent.ɵfac = function KeyComponent_Factory(t) {
        return new (t || KeyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]));
      };

      KeyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: KeyComponent,
        selectors: [["rc-key"]],
        hostBindings: function KeyComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyComponent_click_HostBindingHandler() {
              return ctx.onClick();
            })("mousedown", function KeyComponent_mousedown_HostBindingHandler() {
              return ctx.onTouchstart();
            })("touchstart", function KeyComponent_touchstart_HostBindingHandler() {
              return ctx.onTouchstart();
            })("mouseup", function KeyComponent_mouseup_HostBindingHandler() {
              return ctx.onTouchend();
            })("touchend", function KeyComponent_touchend_HostBindingHandler() {
              return ctx.onTouchend();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 3,
        consts: [[1, "btn", "btn-light", 3, "title"], ["class", "fa-3x", 3, "icon", 4, "ngIf"], [4, "ngIf"], [1, "fa-3x", 3, "icon"]],
        template: function KeyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyComponent_fa_icon_1_Template, 1, 1, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KeyComponent_span_2_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.icon);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]],
        styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 86px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImtleS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODZweDtcclxufVxyXG5cclxuYnV0dG9uID4gc3BhbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-key',
            templateUrl: './key.component.html',
            styleUrls: ['./key.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]
          }];
        }, {
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          onTouchstart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchstart']
          }],
          onTouchend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseup']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchend']
          }]
        });
      })();
      /***/

    },

    /***/
    "3zBy":
    /*!************************************************************!*\
      !*** ./src/command/command-component/command.component.ts ***!
      \************************************************************/

    /*! exports provided: CommandComponent */

    /***/
    function zBy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommandComponent", function () {
        return CommandComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      function CommandComponent_fa_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.icon);
        }
      }

      function CommandComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title.toUpperCase());
        }
      }

      var CommandComponent = /*#__PURE__*/function (_src_core__WEBPACK_IM2) {
        _inherits(CommandComponent, _src_core__WEBPACK_IM2);

        var _super2 = _createSuper(CommandComponent);

        function CommandComponent(webSocketService, informers) {
          var _this3;

          _classCallCheck(this, CommandComponent);

          _this3 = _super2.call(this);
          _this3.webSocketService = webSocketService;
          _this3.informers = informers;
          _this3.isCommandAvailable = false;
          _this3.subs = [];
          _this3.command = null;
          _this3.title = '';
          _this3.icon = null;
          _this3.showIconWithTitle = false;

          _this3.messageHandler = function (msg) {
            if (msg.ActionName !== _this3.command) return;
            if (msg.Type !== src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessageType"].Response) return;
            alert("Command '".concat(_this3.command, "' executed. Result: \r\n ").concat(msg.Data));
          };

          return _this3;
        }

        _createClass(CommandComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.subs.push(this.informers.Commands.subscribe(function () {
              _this4.checkCommandAvailability();
            }));
            this.subs.push(this.webSocketService.isConnected.subscribe(function () {
              _this4.checkCommandAvailability();
            }));
            this.webSocketService.removeMessageHandler(this.command, this.messageHandler);
            if (!!this.command) this.webSocketService.addMessageHandler(this.command, this.messageHandler);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.forEach(function (x) {
              return x.unsubscribe();
            });
            this.webSocketService.removeMessageHandler(this.command, this.messageHandler);
          }
        }, {
          key: "load",
          value: function load(data) {
            if (!data) {
              return;
            }

            this.webSocketService.removeMessageHandler(this.command, this.messageHandler);
            this.command = !!data.command ? data.command : null;
            if (!!this.command) this.webSocketService.addMessageHandler(this.command, this.messageHandler);
            this.title = !!data.text ? data.text : '';
            this.icon = !!data.icon ? Object(src_core__WEBPACK_IMPORTED_MODULE_1__["findIcon"])(data.icon) : null;
            this.showIconWithTitle = data.iconWithText === true;
            this.checkCommandAvailability();
            return true;
          }
        }, {
          key: "send",
          value: function send() {
            if (!this.isCommandAvailable) return;
            var m = new src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessage"]({
              a: this.command,
              //d: null,
              t: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessageType"].Request,
              h: Object(src_core__WEBPACK_IMPORTED_MODULE_1__["makeid"])()
            });
            this.webSocketService.send(m);
          }
        }, {
          key: "checkCommandAvailability",
          value: function checkCommandAvailability() {
            if (!this.command || !this.webSocketService.isConnected.getValue()) {
              this.isCommandAvailable = false;
              return;
            }

            var commands = this.informers.Commands.getValue();

            if (!commands) {
              this.isCommandAvailable = false;
              return;
            }

            this.isCommandAvailable = (commands === null || commands === void 0 ? void 0 : commands.Commands.indexOf(this.command)) >= 0;
          }
        }, {
          key: "onClick",
          value: function onClick() {
            this.send();
          }
        }]);

        return CommandComponent;
      }(src_core__WEBPACK_IMPORTED_MODULE_1__["BaseControlComponent"]);

      CommandComponent.ɵfac = function CommandComponent_Factory(t) {
        return new (t || CommandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["InformersStateService"]));
      };

      CommandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CommandComponent,
        selectors: [["rc-command"]],
        hostBindings: function CommandComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommandComponent_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 4,
        consts: [[1, "btn", "btn-light", 3, "disabled", "title"], ["class", "fa-3x", 3, "icon", 4, "ngIf"], [4, "ngIf"], [1, "fa-3x", 3, "icon"]],
        template: function CommandComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommandComponent_fa_icon_1_Template, 1, 1, "fa-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommandComponent_span_2_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isCommandAvailable)("title", !ctx.isCommandAvailable ? "Command is not available" : ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.icon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIconWithTitle);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]],
        styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 86px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJjb21tYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4NnB4O1xyXG59XHJcblxyXG5idXR0b24gPiBzcGFuIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-command',
            templateUrl: './command.component.html',
            styleUrls: ['./command.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]
          }, {
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["InformersStateService"]
          }];
        }, {
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();
      /***/

    },

    /***/
    "4BCP":
    /*!*********************************************!*\
      !*** ./src/core/models/WebSocketMessage.ts ***!
      \*********************************************/

    /*! exports provided: WebSocketMessage */

    /***/
    function BCP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebSocketMessage", function () {
        return WebSocketMessage;
      });
      /* harmony import */


      var _WebSocketMessageType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./WebSocketMessageType */
      "WPaL");

      var WebSocketMessage = /*#__PURE__*/function () {
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
    "9Hs0":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/control-editor-view/control-editor-view.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ControlEditorViewComponent */

    /***/
    function Hs0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlEditorViewComponent", function () {
        return ControlEditorViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _control_view_control_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../control-view/control-view.component */
      "iwkZ");

      var ControlEditorViewComponent = /*#__PURE__*/function () {
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

      ControlEditorViewComponent.ɵfac = function ControlEditorViewComponent_Factory(t) {
        return new (t || ControlEditorViewComponent)();
      };

      ControlEditorViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ControlEditorViewComponent,
        selectors: [["rc-control-editor-view"]],
        inputs: {
          control: "control"
        },
        outputs: {
          openEditor: "openEditor"
        },
        decls: 2,
        vars: 3,
        consts: [[3, "control"], [1, "btn", "btn-secondary", "overlay", 3, "click"]],
        template: function ControlEditorViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rc-control-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlEditorViewComponent_Template_button_click_1_listener() {
              return ctx.onClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "100", "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.control);
          }
        },
        directives: [_control_view_control_view_component__WEBPACK_IMPORTED_MODULE_1__["ControlViewComponent"]],
        styles: ["[_nghost-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n  padding: 2px;\r\n}\r\n\r\n .overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  opacity: 0.1;\r\n  height: calc(100% - 4px);\r\n  width: calc(100% - 4px);\r\n}\r\n\r\n .overlay[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.25;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtZWRpdG9yLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztDQUVDO0VBQ0Msa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7Q0FFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJjb250cm9sLWVkaXRvci12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbiAub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIG9wYWNpdHk6IDAuMTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDRweCk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRweCk7XHJcbn1cclxuXHJcbi5vdmVybGF5OmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjI1O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlEditorViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-control-editor-view',
            templateUrl: './control-editor-view.component.html',
            styleUrls: ['./control-editor-view.component.css']
          }]
        }], null, {
          control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          openEditor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "A0O4":
    /*!*****************************************************************!*\
      !*** ./src/app/components/page-create/page-create.component.ts ***!
      \*****************************************************************/

    /*! exports provided: PageCreateComponent */

    /***/
    function A0O4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageCreateComponent", function () {
        return PageCreateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var PageCreateComponent = /*#__PURE__*/function () {
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

      PageCreateComponent.ɵfac = function PageCreateComponent_Factory(t) {
        return new (t || PageCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["PagesService"]));
      };

      PageCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageCreateComponent,
        selectors: [["rc-page-create"]],
        decls: 7,
        vars: 1,
        consts: [[1, "form-group"], ["autofocus", "", "placeholder", "Title", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "btn"], [1, "btn", "btn-primary", 3, "click"]],
        template: function PageCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PageCreateComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.title = $event;
            })("keydown.enter", function PageCreateComponent_Template_input_keydown_enter_1_listener() {
              return ctx.create();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCreateComponent_Template_button_click_5_listener() {
              return ctx.create();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-page-create',
            templateUrl: 'page-create.component.html',
            styleUrls: ['./page-create.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["PagesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


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
    "B2oK":
    /*!******************************************************!*\
      !*** ./src/file-system/Models/IFileSystemControl.ts ***!
      \******************************************************/

    /*! no exports provided */

    /***/
    function B2oK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "BRCC":
    /*!*******************************************!*\
      !*** ./src/core/models/IControlViewer.ts ***!
      \*******************************************/

    /*! no exports provided */

    /***/
    function BRCC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "EzUw":
    /*!*******************************!*\
      !*** ./src/key/key.module.ts ***!
      \*******************************/

    /*! exports provided: KeyModule */

    /***/
    function EzUw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyModule", function () {
        return KeyModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _key_component_key_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./key-component/key.component */
      "3Xa9");
      /* harmony import */


      var _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./key-editor-component/key-editor.component */
      "+WQ5");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var KeyModule = /*#__PURE__*/function () {
        function KeyModule(controls) {
          _classCallCheck(this, KeyModule);

          var reg = {
            name: KeyModule.controlKey,
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
              ngModule: KeyModule,
              providers: []
            };
          }
        }]);

        return KeyModule;
      }();

      KeyModule.controlKey = 'key';
      KeyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: KeyModule
      });
      KeyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function KeyModule_Factory(t) {
          return new (t || KeyModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]));
        },
        imports: [[_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KeyModule, {
          declarations: [_key_component_key_component__WEBPACK_IMPORTED_MODULE_3__["KeyComponent"], _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__["KeyEditorComponent"]],
          imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
          exports: [_key_component_key_component__WEBPACK_IMPORTED_MODULE_3__["KeyComponent"], _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__["KeyEditorComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_key_component_key_component__WEBPACK_IMPORTED_MODULE_3__["KeyComponent"], _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__["KeyEditorComponent"]],
            imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
            exports: [_key_component_key_component__WEBPACK_IMPORTED_MODULE_3__["KeyComponent"], _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__["KeyEditorComponent"]]
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GgbO":
    /*!**********************************!*\
      !*** ./src/file-system/index.ts ***!
      \**********************************/

    /*! exports provided: FileSystemModule, FileSystemComponent, FileSystemEditorComponent, FileSystemPathsService */

    /***/
    function GgbO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _file_system_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./file-system.module */
      "r/CW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileSystemModule", function () {
        return _file_system_module__WEBPACK_IMPORTED_MODULE_0__["FileSystemModule"];
      });
      /* harmony import */


      var _file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./file-system-component/file-system.component */
      "Qf2G");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileSystemComponent", function () {
        return _file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_1__["FileSystemComponent"];
      });
      /* harmony import */


      var _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./file-system-editor-component/file-system-editor.component */
      "WWRy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileSystemEditorComponent", function () {
        return _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_2__["FileSystemEditorComponent"];
      });
      /* harmony import */


      var _Models_IFileSystemControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Models/IFileSystemControl */
      "B2oK");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _Models_IFileSystemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Models/IFileSystemList */
      "2opn");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Services/file-system-paths.service */
      "V34l");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileSystemPathsService", function () {
        return _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_5__["FileSystemPathsService"];
      });
      /***/

    },

    /***/
    "HQXj":
    /*!******************************************************!*\
      !*** ./src/core/services/informers-state.service.ts ***!
      \******************************************************/

    /*! exports provided: InformersStateService */

    /***/
    function HQXj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InformersStateService", function () {
        return InformersStateService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/WebSocketMessage */
      "4BCP");
      /* harmony import */


      var _web_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./web-socket.service */
      "jmOB");
      /* harmony import */


      var _models_WebSocketMessageType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/WebSocketMessageType */
      "WPaL");
      /* harmony import */


      var _utils_makeid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../utils/makeid */
      "UlaE");

      var InformersStateService = /*#__PURE__*/function () {
        function InformersStateService(service) {
          var _this5 = this;

          _classCallCheck(this, InformersStateService);

          this.service = service;
          this.handlers = {
            'Informer.Sound': function InformerSound(msg) {
              return _this5.onSound(msg);
            },
            'Informer.Commands': function InformerCommands(msg) {
              return _this5.onCommands(msg);
            }
          };
          this.Sound = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.Commands = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
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
          key: "onCommands",
          value: function onCommands(msg) {
            if (!!msg.Data) this.Commands.next(msg.Data);
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

      InformersStateService.ɵfac = function InformersStateService_Factory(t) {
        return new (t || InformersStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"]));
      };

      InformersStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InformersStateService,
        factory: InformersStateService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformersStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_socket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HUBa":
    /*!*******************************************!*\
      !*** ./src/core/pipes/EnumToArrayPipe.ts ***!
      \*******************************************/

    /*! exports provided: EnumToArrayPipe */

    /***/
    function HUBa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function () {
        return EnumToArrayPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EnumToArrayPipe = /*#__PURE__*/function () {
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

      EnumToArrayPipe.ɵfac = function EnumToArrayPipe_Factory(t) {
        return new (t || EnumToArrayPipe)();
      };

      EnumToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "enumToArray",
        type: EnumToArrayPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnumToArrayPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'enumToArray'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "IoWh":
    /*!***********************************************!*\
      !*** ./src/command/Models/ICommandControl.ts ***!
      \***********************************************/

    /*! no exports provided */

    /***/
    function IoWh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "JHfk":
    /*!**************************************************************************!*\
      !*** ./src/command/command-editor-component/command-editor.component.ts ***!
      \**************************************************************************/

    /*! exports provided: CommandEditorCompoent */

    /***/
    function JHfk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommandEditorCompoent", function () {
        return CommandEditorCompoent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _core_components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/components/icon-selector/icon-selector.component */
      "bykB");
      /* harmony import */


      var _core_components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/components/control-column-editor/control-column-editor.component */
      "OTFJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      function CommandEditorCompoent_rc_control_column_editor_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rc-control-column-editor", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CommandEditorCompoent_rc_control_column_editor_1_Template_rc_control_column_editor_valueChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.data.col = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.data.col);
        }
      }

      function CommandEditorCompoent_div_2_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", x_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r8);
        }
      }

      function CommandEditorCompoent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Command");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommandEditorCompoent_div_2_Template_select_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.onCommandChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommandEditorCompoent_div_2_option_4_Template, 2, 2, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.command);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.commands);
        }
      }

      function CommandEditorCompoent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CommandEditorCompoent_div_3_Template_input_change_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.iconWithText = !ctx_r11.iconWithText;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " With text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.iconWithText);
        }
      }

      function CommandEditorCompoent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommandEditorCompoent_div_4_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.text = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.text);
        }
      }

      function CommandEditorCompoent_div_5_fa_icon_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 15);
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r15.icon);
        }
      }

      function CommandEditorCompoent_div_5_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CommandEditorCompoent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Icon: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommandEditorCompoent_div_5_fa_icon_4_Template, 1, 1, "fa-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommandEditorCompoent_div_5_span_5_Template, 2, 0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommandEditorCompoent_div_5_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.showIconPicker = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r4.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.icon);
        }
      }

      var CommandEditorCompoent = /*#__PURE__*/function () {
        function CommandEditorCompoent(informers) {
          _classCallCheck(this, CommandEditorCompoent);

          this.informers = informers;
          this.subs = [];
          this.commands = [];
          this.data = null;
          this.command = null;
          this.icon = null;
          this.showIconPicker = false;
          this.text = null;
          this.iconWithText = false;
        }

        _createClass(CommandEditorCompoent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.subs.push(this.informers.Commands.subscribe(function (value) {
              if (!value) {
                _this6.commands = [];
                _this6.command = null;
                return;
              }

              _this6.commands = value.Commands;
              if (_this6.command != null && _this6.commands.indexOf(_this6.command) < 0) _this6.command = null;
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
            if (!!data) {
              this.data = data;
              this.command = data.command;
              this.icon = !!data.icon ? Object(src_core__WEBPACK_IMPORTED_MODULE_1__["findIcon"])(data.icon) : null;
              this.text = 'text' in data ? data.text : null;
              this.iconWithText = 'iconWithText' in data ? data.iconWithText : false;
            } else {
              this.data = null;
              this.command = null;
              this.icon = null;
              this.text = null;
              this.iconWithText = false;
            }

            this.showIconPicker = false;
            return true;
          }
        }, {
          key: "save",
          value: function save() {
            if (!!this.command) {
              this.data.command = this.command;
              this.data.icon = !!this.icon ? this.icon.iconName : null;
              this.data.text = this.text;
              this.data.iconWithText = this.iconWithText;
            }

            return this.data;
          }
        }, {
          key: "onCommandChange",
          value: function onCommandChange(data) {
            //TODO: Check if data is null or in `commands`.
            this.command = data;
          }
        }, {
          key: "changeIcon",
          value: function changeIcon(icon) {
            this.icon = icon;
            this.showIconPicker = false;
          }
        }]);

        return CommandEditorCompoent;
      }();

      CommandEditorCompoent.ɵfac = function CommandEditorCompoent_Factory(t) {
        return new (t || CommandEditorCompoent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["InformersStateService"]));
      };

      CommandEditorCompoent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CommandEditorCompoent,
        selectors: [["rc-command-editor"]],
        decls: 7,
        vars: 8,
        consts: [[3, "hidden"], [3, "value", "valueChange", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["showEmpty", "true", 3, "hidden", "icon", "iconChange"], [3, "value", "valueChange"], [1, "form-group"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["type", "checkbox", 3, "checked", "change"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-3"], ["class", "fa-lg", 3, "icon", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-primary", "col-6", 3, "click"], [1, "fa-lg", 3, "icon"]],
        template: function CommandEditorCompoent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommandEditorCompoent_rc_control_column_editor_1_Template, 1, 1, "rc-control-column-editor", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommandEditorCompoent_div_2_Template, 5, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CommandEditorCompoent_div_3_Template, 4, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommandEditorCompoent_div_4_Template, 4, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommandEditorCompoent_div_5_Template, 8, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "rc-icon-selector", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("iconChange", function CommandEditorCompoent_Template_rc_icon_selector_iconChange_6_listener($event) {
              return ctx.changeIcon($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !!ctx.showIconPicker);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.iconWithText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showIconPicker)("icon", ctx.icon);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _core_components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_3__["IconSelectorComponent"], _core_components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_4__["ControlColumnEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]],
        styles: ["fa-icon[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n\r\n}\r\n\r\nspan.col-3[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmQtZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjOztBQUVoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJjb21tYW5kLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmEtaWNvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG59XHJcblxyXG5zcGFuLmNvbC0ze1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandEditorCompoent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-command-editor',
            templateUrl: './command-editor.component.html',
            styleUrls: ['./command-editor.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["InformersStateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "JKku":
    /*!******************************!*\
      !*** ./src/command/index.ts ***!
      \******************************/

    /*! exports provided: CommandModule, CommandComponent, CommandEditorCompoent */

    /***/
    function JKku(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _command_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./command.module */
      "mHaX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CommandModule", function () {
        return _command_module__WEBPACK_IMPORTED_MODULE_0__["CommandModule"];
      });
      /* harmony import */


      var _Models_ICommandControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Models/ICommandControl */
      "IoWh");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _command_component_command_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./command-component/command.component */
      "3zBy");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CommandComponent", function () {
        return _command_component_command_component__WEBPACK_IMPORTED_MODULE_2__["CommandComponent"];
      });
      /* harmony import */


      var _command_editor_component_command_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./command-editor-component/command-editor.component */
      "JHfk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CommandEditorCompoent", function () {
        return _command_editor_component_command_editor_component__WEBPACK_IMPORTED_MODULE_3__["CommandEditorCompoent"];
      });
      /***/

    },

    /***/
    "LnWu":
    /*!*****************************************************!*\
      !*** ./src/core/directives/auto-focus.directive.ts ***!
      \*****************************************************/

    /*! exports provided: AutoFocusDirective */

    /***/
    function LnWu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function () {
        return AutoFocusDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AutoFocusDirective = /*#__PURE__*/function () {
        function AutoFocusDirective(el) {
          _classCallCheck(this, AutoFocusDirective);

          this.el = el;
        }

        _createClass(AutoFocusDirective, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this7 = this;

            setTimeout(function () {
              _this7.el.nativeElement.focus();
            }, 500);
          }
        }]);

        return AutoFocusDirective;
      }();

      AutoFocusDirective.ɵfac = function AutoFocusDirective_Factory(t) {
        return new (t || AutoFocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      AutoFocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AutoFocusDirective,
        selectors: [["", "autoFocus", ""]],
        inputs: {
          appAutoFocus: "appAutoFocus"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoFocusDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[autoFocus]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          appAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "M0GX":
    /*!******************************************!*\
      !*** ./src/key/Models/KeyControlMode.ts ***!
      \******************************************/

    /*! exports provided: KeyControlMode */

    /***/
    function M0GX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyControlMode", function () {
        return KeyControlMode;
      });

      var KeyControlMode;

      (function (KeyControlMode) {
        KeyControlMode[KeyControlMode["Press"] = 0] = "Press";
        KeyControlMode[KeyControlMode["Long press"] = 1] = "Long press";
        KeyControlMode[KeyControlMode["Repeatable"] = 2] = "Repeatable";
      })(KeyControlMode || (KeyControlMode = {}));
      /***/

    },

    /***/
    "MCfL":
    /*!*******************************************!*\
      !*** ./src/core/models/IControlEditor.ts ***!
      \*******************************************/

    /*! no exports provided */

    /***/
    function MCfL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "OTFJ":
    /*!**************************************************************************************!*\
      !*** ./src/core/components/control-column-editor/control-column-editor.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ControlColumnEditorComponent */

    /***/
    function OTFJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlColumnEditorComponent", function () {
        return ControlColumnEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ControlColumnEditorComponent = /*#__PURE__*/function () {
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

      ControlColumnEditorComponent.ɵfac = function ControlColumnEditorComponent_Factory(t) {
        return new (t || ControlColumnEditorComponent)();
      };

      ControlColumnEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ControlColumnEditorComponent,
        selectors: [["rc-control-column-editor"]],
        inputs: {
          value: "value"
        },
        outputs: {
          valueChange: "valueChange"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "form-group"], ["type", "number", "autofocus", "", 1, "form-control", 3, "value", "min", "max", "input"]],
        template: function ControlColumnEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Columns");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ControlColumnEditorComponent_Template_input_input_3_listener($event) {
              return ctx.value = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("min", ctx.min)("max", ctx.max);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9sLWNvbHVtbi1lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlColumnEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-control-column-editor',
            templateUrl: './control-column-editor.component.html',
            styleUrls: ['./control-column-editor.component.css']
          }]
        }], function () {
          return [];
        }, {
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Qf2G":
    /*!************************************************************************!*\
      !*** ./src/file-system/file-system-component/file-system.component.ts ***!
      \************************************************************************/

    /*! exports provided: FileSystemComponent */

    /***/
    function Qf2G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSystemComponent", function () {
        return FileSystemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Services/file-system-paths.service */
      "V34l");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      function FileSystemComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileSystemComponent_li_3_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var x_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.goToPath(x_r3.url);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r3.title);
        }
      }

      function FileSystemComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileSystemComponent_a_5_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var x_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.goToPath(x_r6.url);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r6 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.iconFolder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r6.title, " ");
        }
      }

      function FileSystemComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileSystemComponent_a_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var x_r9 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.exec(x_r9.url);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r9 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.iconFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", x_r9.title, " ");
        }
      }

      var FileSystemComponent = /*#__PURE__*/function (_src_core__WEBPACK_IM3) {
        _inherits(FileSystemComponent, _src_core__WEBPACK_IM3);

        var _super3 = _createSuper(FileSystemComponent);

        function FileSystemComponent(service, pathsService) {
          var _this8;

          _classCallCheck(this, FileSystemComponent);

          _this8 = _super3.call(this);
          _this8.service = service;
          _this8.pathsService = pathsService;
          _this8.messageHandlers = null;
          _this8.initialized = false;
          _this8.files = null;
          _this8.folders = null;
          _this8.paths = null;
          _this8.path = '';
          _this8.maxHeight = 0;
          _this8.iconFolder = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFolder"];
          _this8.iconFile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFile"];
          _this8.messageHandlers = {
            'FileSystem.List': function FileSystemList(m) {
              return _this8.onFileSystemList(m);
            }
          };
          _this8.socketId = _this8.pathsService.generateId();
          return _this8;
        }

        _createClass(FileSystemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            for (var action in this.messageHandlers) {
              if (!this.messageHandlers.hasOwnProperty(action)) continue;
              var handler = this.messageHandlers[action];
              this.service.addMessageHandler(action, handler);
            }

            this.subscription = this.service.isConnected.subscribe(function (value) {
              if (!value) return;

              _this9.goToPath(!!_this9.path ? _this9.path : '');
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

      FileSystemComponent.ɵfac = function FileSystemComponent_Factory(t) {
        return new (t || FileSystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_3__["FileSystemPathsService"]));
      };

      FileSystemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FileSystemComponent,
        selectors: [["rc-file-system"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 10,
        vars: 5,
        consts: [[1, "root"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], ["id", "folders", 1, "no-selection"], [3, "click", 4, "ngFor", "ngForOf"], [1, "border"], ["id", "files", 1, "no-selection"], [1, "breadcrumb-item"], ["href", "javascript:void(0);", 3, "click"], [3, "click"], [3, "icon"]],
        template: function FileSystemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FileSystemComponent_li_3_Template, 3, 1, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FileSystemComponent_a_5_Template, 3, 2, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FileSystemComponent_a_8_Template, 3, 2, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx.maxHeight > 0 ? ctx.maxHeight : "", "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.paths);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.folders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]],
        styles: [".border[_ngcontent-%COMP%] {\r\n  height: 1px;\r\n  background: darkgrey;\r\n  margin: 4px;\r\n}\r\n\r\n#folders[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #files[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n.root[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtc3lzdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiZmlsZS1zeXN0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXIge1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IGRhcmtncmV5O1xyXG4gIG1hcmdpbjogNHB4O1xyXG59XHJcblxyXG4jZm9sZGVycyBhLFxyXG4jZmlsZXMgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucm9vdCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSystemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-file-system',
            templateUrl: './file-system.component.html',
            styleUrls: ['./file-system.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]
          }, {
            type: _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_3__["FileSystemPathsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "R0db":
    /*!***********************************************************************!*\
      !*** ./src/app/components/control-editor/control-editor.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ControlEditorComponent */

    /***/
    function R0db(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlEditorComponent", function () {
        return ControlEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/directives/control-host/control-host.directive */
      "mgBC");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ControlEditorComponent_ng_template_4_Template(rf, ctx) {}

      function ControlEditorComponent_div_10_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlEditorComponent_div_10_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.deleteAction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ControlEditorComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ControlEditorComponent_div_10_button_1_Template, 2, 0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showDelete);
        }
      }

      var ControlEditorComponent = /*#__PURE__*/function () {
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
          this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
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
            this["delete"].emit(c);
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

      ControlEditorComponent.ɵfac = function ControlEditorComponent_Factory(t) {
        return new (t || ControlEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["ControlsService"]));
      };

      ControlEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ControlEditorComponent,
        selectors: [["rc-control-editor"]],
        viewQuery: function ControlEditorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_2__["ControlHostDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.host = _t.first);
          }
        },
        inputs: {
          showDelete: "showDelete",
          textSave: "textSave"
        },
        outputs: {
          cancel: "cancel",
          save: "save",
          "delete": "delete"
        },
        decls: 14,
        vars: 12,
        consts: [[3, "hidden"], ["rcControlHost", ""], [1, "container-fluid", "control-editor-controls"], [1, "btn", "btn-lg", "btn-secondary", 3, "click"], ["class", "col-4", 4, "ngIf"], [1, "btn", "btn-lg", "btn-primary", 3, "click"], [1, "col-4"], ["class", "btn btn-lg btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-lg", "btn-danger", 3, "click"]],
        template: function ControlEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ControlEditorComponent_ng_template_4_Template, 0, 0, "ng-template", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlEditorComponent_Template_button_click_8_listener() {
              return ctx.submit(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ControlEditorComponent_div_10_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ControlEditorComponent_Template_button_click_12_listener() {
              return ctx.submit(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit control: ", ctx.control == null ? null : ctx.control.name, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("col-4", ctx.showDelete)("col-6", !ctx.showDelete);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDelete);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("col-4", ctx.showDelete)("col-6", !ctx.showDelete);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.textSave, " ");
          }
        },
        directives: [src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_2__["ControlHostDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: block;\r\n}\r\n.control-editor-controls[_ngcontent-%COMP%] {\r\n  margin: 0 -2px;\r\n}\r\n.control-editor-controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0 2px;\r\n}\r\n.control-editor-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJjb250cm9sLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uY29udHJvbC1lZGl0b3ItY29udHJvbHMge1xyXG4gIG1hcmdpbjogMCAtMnB4O1xyXG59XHJcbi5jb250cm9sLWVkaXRvci1jb250cm9scyBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDJweDtcclxufVxyXG4uY29udHJvbC1lZGl0b3ItY29udHJvbHMgYnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-control-editor',
            templateUrl: './control-editor.component.html',
            styleUrls: ['./control-editor.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["ControlsService"]
          }];
        }, {
          host: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_2__["ControlHostDirective"], {
              "static": true
            }]
          }],
          showDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          textSave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          save: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          "delete": [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "SiSL":
    /*!*****************************************************!*\
      !*** ./src/core/components/BaseControlComponent.ts ***!
      \*****************************************************/

    /*! exports provided: BaseControlComponent */

    /***/
    function SiSL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseControlComponent", function () {
        return BaseControlComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BaseControlComponent = /*#__PURE__*/function () {
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

      BaseControlComponent.ɵfac = function BaseControlComponent_Factory(t) {
        return new (t || BaseControlComponent)();
      };

      BaseControlComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: BaseControlComponent,
        inputs: {
          col: "col"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseControlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
        }], null, {
          col: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['col']
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/nav-menu/nav-menu.component */
      "fvNk");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(service) {
          var _this10 = this;

          _classCallCheck(this, AppComponent);

          this.service = service;
          this.title = 'app';
          window.addEventListener('focus', function (e) {
            if (_this10.service.isConnected.getValue()) return;

            _this10.service.open();
          });
          this.keepWake();
        }

        _createClass(AppComponent, [{
          key: "keepWake",
          value: function keepWake() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this11 = this;

              var wakeLock, n;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      wakeLock = null;
                      n = navigator;

                      if (!('wakeLock' in n)) {
                        _context2.next = 7;
                        break;
                      }

                      _context2.next = 5;
                      return n.wakeLock.request('screen');

                    case 5:
                      wakeLock = _context2.sent;
                      document.addEventListener('visibilitychange', function () {
                        return __awaiter(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  if (!(wakeLock !== null && document.visibilityState === 'visible')) {
                                    _context.next = 4;
                                    break;
                                  }

                                  _context.next = 3;
                                  return n.wakeLock.request('screen');

                                case 3:
                                  wakeLock = _context.sent;

                                case 4:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        consts: [[1, "rc-flex-header"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rc-nav-menu", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n  display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UQXE":
    /*!*****************************!*\
      !*** ./src/volume/index.ts ***!
      \*****************************/

    /*! exports provided: VolumeModule, VolumeComponent, VolumeEditorComponent */

    /***/
    function UQXE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _volume_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./volume.module */
      "eHWG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VolumeModule", function () {
        return _volume_module__WEBPACK_IMPORTED_MODULE_0__["VolumeModule"];
      });
      /* harmony import */


      var _volume_component_volume_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./volume-component/volume.component */
      "nesH");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VolumeComponent", function () {
        return _volume_component_volume_component__WEBPACK_IMPORTED_MODULE_1__["VolumeComponent"];
      });
      /* harmony import */


      var _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./volume-editor-component/volume-editor.component */
      "ekYE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "VolumeEditorComponent", function () {
        return _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_2__["VolumeEditorComponent"];
      });
      /***/

    },

    /***/
    "UlaE":
    /*!**********************************!*\
      !*** ./src/core/utils/makeid.ts ***!
      \**********************************/

    /*! exports provided: makeid */

    /***/
    function UlaE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "makeid", function () {
        return makeid;
      });

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
    "UzkQ":
    /*!***************************!*\
      !*** ./src/core/index.ts ***!
      \***************************/

    /*! exports provided: CoreModule, WebSocketServiceProvider, BaseControlComponent, ControlColumnEditorComponent, IconSelectorComponent, AutoFocusDirective, PageDetails, WebSocketMessage, WebSocketMessageType, ControlsService, InformersStateService, PagesService, WebSocketService, findIcon, allIcons, makeid, ColumnClassNamePipe, EnumToArrayPipe */

    /***/
    function UzkQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./core.module */
      "gOpZ");
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
      "SiSL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseControlComponent", function () {
        return _components_BaseControlComponent__WEBPACK_IMPORTED_MODULE_1__["BaseControlComponent"];
      });
      /* harmony import */


      var _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/control-column-editor/control-column-editor.component */
      "OTFJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ControlColumnEditorComponent", function () {
        return _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_2__["ControlColumnEditorComponent"];
      });
      /* harmony import */


      var _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/icon-selector/icon-selector.component */
      "bykB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconSelectorComponent", function () {
        return _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_3__["IconSelectorComponent"];
      });
      /* harmony import */


      var _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./directives/auto-focus.directive */
      "LnWu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AutoFocusDirective", function () {
        return _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_4__["AutoFocusDirective"];
      });
      /* harmony import */


      var _models_ControlRegistration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./models/ControlRegistration */
      "uR/D");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _models_IControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./models/IControl */
      "qylB");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _models_IControlEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./models/IControlEditor */
      "MCfL");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _models_IControlViewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./models/IControlViewer */
      "BRCC");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _models_IPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./models/IPage */
      "jxvT");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _models_IInformerSound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./models/IInformerSound */
      "nIv7");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _models_PageDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./models/PageDetails */
      "+GaQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PageDetails", function () {
        return _models_PageDetails__WEBPACK_IMPORTED_MODULE_11__["PageDetails"];
      });
      /* harmony import */


      var _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./models/WebSocketMessage */
      "4BCP");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebSocketMessage", function () {
        return _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_12__["WebSocketMessage"];
      });
      /* harmony import */


      var _models_WebSocketMessageType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./models/WebSocketMessageType */
      "WPaL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebSocketMessageType", function () {
        return _models_WebSocketMessageType__WEBPACK_IMPORTED_MODULE_13__["WebSocketMessageType"];
      });
      /* harmony import */


      var _services_controls_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/controls.service */
      "d9zi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ControlsService", function () {
        return _services_controls_service__WEBPACK_IMPORTED_MODULE_14__["ControlsService"];
      });
      /* harmony import */


      var _services_informers_state_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/informers-state.service */
      "HQXj");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "InformersStateService", function () {
        return _services_informers_state_service__WEBPACK_IMPORTED_MODULE_15__["InformersStateService"];
      });
      /* harmony import */


      var _services_pages_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./services/pages.service */
      "1eB0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PagesService", function () {
        return _services_pages_service__WEBPACK_IMPORTED_MODULE_16__["PagesService"];
      });
      /* harmony import */


      var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./services/web-socket.service */
      "jmOB");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "WebSocketService", function () {
        return _services_web_socket_service__WEBPACK_IMPORTED_MODULE_17__["WebSocketService"];
      });
      /* harmony import */


      var _utils_findIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./utils/findIcon */
      "pTOY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "findIcon", function () {
        return _utils_findIcon__WEBPACK_IMPORTED_MODULE_18__["findIcon"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "allIcons", function () {
        return _utils_findIcon__WEBPACK_IMPORTED_MODULE_18__["allIcons"];
      });
      /* harmony import */


      var _utils_makeid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./utils/makeid */
      "UlaE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "makeid", function () {
        return _utils_makeid__WEBPACK_IMPORTED_MODULE_19__["makeid"];
      });
      /* harmony import */


      var _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pipes/column-class-name.pipe */
      "X7fa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ColumnClassNamePipe", function () {
        return _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_20__["ColumnClassNamePipe"];
      });
      /* harmony import */


      var _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pipes/EnumToArrayPipe */
      "HUBa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function () {
        return _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_21__["EnumToArrayPipe"];
      });
      /***/

    },

    /***/
    "V34l":
    /*!***************************************************************!*\
      !*** ./src/file-system/Services/file-system-paths.service.ts ***!
      \***************************************************************/

    /*! exports provided: FileSystemPathsService */

    /***/
    function V34l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSystemPathsService", function () {
        return FileSystemPathsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");

      var FileSystemPathsService = /*#__PURE__*/function () {
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
            var s = localStorage.getItem(FileSystemPathsService.key);

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
            localStorage.setItem(FileSystemPathsService.key, JSON.stringify(this.data));
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

      FileSystemPathsService.ɵfac = function FileSystemPathsService_Factory(t) {
        return new (t || FileSystemPathsService)();
      };

      FileSystemPathsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: FileSystemPathsService,
        factory: FileSystemPathsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSystemPathsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "WPaL":
    /*!*************************************************!*\
      !*** ./src/core/models/WebSocketMessageType.ts ***!
      \*************************************************/

    /*! exports provided: WebSocketMessageType */

    /***/
    function WPaL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebSocketMessageType", function () {
        return WebSocketMessageType;
      });

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
    "WWRy":
    /*!**************************************************************************************!*\
      !*** ./src/file-system/file-system-editor-component/file-system-editor.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: FileSystemEditorComponent */

    /***/
    function WWRy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSystemEditorComponent", function () {
        return FileSystemEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/components/control-column-editor/control-column-editor.component */
      "OTFJ");

      function FileSystemEditorComponent_rc_control_column_editor_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rc-control-column-editor", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FileSystemEditorComponent_rc_control_column_editor_0_Template_rc_control_column_editor_valueChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.col = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.col);
        }
      }

      var FileSystemEditorComponent = /*#__PURE__*/function () {
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

      FileSystemEditorComponent.ɵfac = function FileSystemEditorComponent_Factory(t) {
        return new (t || FileSystemEditorComponent)();
      };

      FileSystemEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FileSystemEditorComponent,
        selectors: [["rc-file-system-editor"]],
        decls: 9,
        vars: 3,
        consts: [[3, "value", "valueChange", 4, "ngIf"], [1, "form-group"], ["type", "number", "autofocus", "", "min", "0", "step", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", "valueChange"]],
        template: function FileSystemEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileSystemEditorComponent_rc_control_column_editor_0_Template, 1, 1, "rc-control-column-editor", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Maximum height (0 = infinity) in px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FileSystemEditorComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.maxHeight = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ID (used for sharing content between multiple contols)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FileSystemEditorComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.maxHeight);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _core_components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_3__["ControlColumnEditorComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXN5c3RlbS1lZGl0b3IuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSystemEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-file-system-editor',
            templateUrl: './file-system-editor.component.html',
            styleUrls: ['./file-system-editor.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "X7fa":
    /*!**************************************************!*\
      !*** ./src/core/pipes/column-class-name.pipe.ts ***!
      \**************************************************/

    /*! exports provided: ColumnClassNamePipe */

    /***/
    function X7fa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnClassNamePipe", function () {
        return ColumnClassNamePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ColumnClassNamePipe = /*#__PURE__*/function () {
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

      ColumnClassNamePipe.ɵfac = function ColumnClassNamePipe_Factory(t) {
        return new (t || ColumnClassNamePipe)();
      };

      ColumnClassNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "columnClassName",
        type: ColumnClassNamePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnClassNamePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'columnClassName'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-sortablejs */
      "PQoX");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/nav-menu/nav-menu.component */
      "fvNk");
      /* harmony import */


      var _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/page/page.component */
      "ycSy");
      /* harmony import */


      var _components_page_editor_page_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/page-editor/page-editor.component */
      "kjm3");
      /* harmony import */


      var _components_page_create_page_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/page-create/page-create.component */
      "A0O4");
      /* harmony import */


      var _directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./directives/control-host/control-host.directive */
      "mgBC");
      /* harmony import */


      var _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pipes/enum-to-array.pipe */
      "36dB");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var src_key__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/key */
      "y2JS");
      /* harmony import */


      var src_volume__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/volume */
      "UQXE");
      /* harmony import */


      var src_file_system__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/file-system */
      "GgbO");
      /* harmony import */


      var src_command__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! src/command */
      "JKku");
      /* harmony import */


      var _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/control-editor/control-editor.component */
      "R0db");
      /* harmony import */


      var _components_create_control_create_control_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/create-control/create-control.component */
      "cBBu");
      /* harmony import */


      var _components_control_view_control_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/control-view/control-view.component */
      "iwkZ");
      /* harmony import */


      var _components_control_editor_view_control_editor_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/control-editor-view/control-editor-view.component */
      "9Hs0");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../core/core.module */
      "gOpZ");
      /* harmony import */


      var _key_key_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../key/key.module */
      "EzUw");
      /* harmony import */


      var _volume_volume_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../volume/volume.module */
      "eHWG");
      /* harmony import */


      var _file_system_file_system_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../file-system/file-system.module */
      "r/CW");
      /* harmony import */


      var _command_command_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../command/command.module */
      "mHaX");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__["EnumToArrayPipe"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
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
        }], {
          relativeLinkResolution: 'legacy'
        }), src_core__WEBPACK_IMPORTED_MODULE_14__["CoreModule"].forRoot(), src_key__WEBPACK_IMPORTED_MODULE_15__["KeyModule"].forRoot(), src_volume__WEBPACK_IMPORTED_MODULE_16__["VolumeModule"].forRoot(), src_file_system__WEBPACK_IMPORTED_MODULE_17__["FileSystemModule"].forRoot(), src_command__WEBPACK_IMPORTED_MODULE_18__["CommandModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"], _components_page_editor_page_editor_component__WEBPACK_IMPORTED_MODULE_10__["PageEditorComponent"], _components_page_create_page_create_component__WEBPACK_IMPORTED_MODULE_11__["PageCreateComponent"], _directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_12__["ControlHostDirective"], _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__["EnumToArrayPipe"], _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_19__["ControlEditorComponent"], _components_create_control_create_control_component__WEBPACK_IMPORTED_MODULE_20__["CreateControlComponent"], _components_control_view_control_view_component__WEBPACK_IMPORTED_MODULE_21__["ControlViewComponent"], _components_control_editor_view_control_editor_view_component__WEBPACK_IMPORTED_MODULE_22__["ControlEditorViewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_sortablejs__WEBPACK_IMPORTED_MODULE_6__["SortablejsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_23__["CoreModule"], _key_key_module__WEBPACK_IMPORTED_MODULE_24__["KeyModule"], _volume_volume_module__WEBPACK_IMPORTED_MODULE_25__["VolumeModule"], _file_system_file_system_module__WEBPACK_IMPORTED_MODULE_26__["FileSystemModule"], _command_command_module__WEBPACK_IMPORTED_MODULE_27__["CommandModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"], _components_page_editor_page_editor_component__WEBPACK_IMPORTED_MODULE_10__["PageEditorComponent"], _components_page_create_page_create_component__WEBPACK_IMPORTED_MODULE_11__["PageCreateComponent"], _directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_12__["ControlHostDirective"], _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__["EnumToArrayPipe"], _components_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_19__["ControlEditorComponent"], _components_create_control_create_control_component__WEBPACK_IMPORTED_MODULE_20__["CreateControlComponent"], _components_control_view_control_view_component__WEBPACK_IMPORTED_MODULE_21__["ControlViewComponent"], _components_control_editor_view_control_editor_view_component__WEBPACK_IMPORTED_MODULE_22__["ControlEditorViewComponent"]],
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
            }], {
              relativeLinkResolution: 'legacy'
            }), src_core__WEBPACK_IMPORTED_MODULE_14__["CoreModule"].forRoot(), src_key__WEBPACK_IMPORTED_MODULE_15__["KeyModule"].forRoot(), src_volume__WEBPACK_IMPORTED_MODULE_16__["VolumeModule"].forRoot(), src_file_system__WEBPACK_IMPORTED_MODULE_17__["FileSystemModule"].forRoot(), src_command__WEBPACK_IMPORTED_MODULE_18__["CommandModule"].forRoot()],
            providers: [_pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__["EnumToArrayPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bykB":
    /*!**********************************************************************!*\
      !*** ./src/core/components/icon-selector/icon-selector.component.ts ***!
      \**********************************************************************/

    /*! exports provided: IconSelectorComponent */

    /***/
    function bykB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconSelectorComponent", function () {
        return IconSelectorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core_utils_findIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core/utils/findIcon */
      "pTOY");
      /* harmony import */


      var src_core_pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core/pipes/IconsFilterPipe */
      "16mY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      function IconSelectorComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconSelectorComponent_div_7_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.selectIcon();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", !ctx_r0.icon);
        }
      }

      function IconSelectorComponent_fa_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IconSelectorComponent_fa_icon_8_Template_fa_icon_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var item_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.selectIcon(item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r1.icon === item_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r4)("title", item_r4.iconName);
        }
      }

      var IconSelectorComponent = /*#__PURE__*/function () {
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

      IconSelectorComponent.ɵfac = function IconSelectorComponent_Factory(t) {
        return new (t || IconSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core_pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_2__["IconsFilterPipe"]));
      };

      IconSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IconSelectorComponent,
        selectors: [["rc-icon-selector"]],
        inputs: {
          showEmpty: "showEmpty",
          icon: "icon"
        },
        outputs: {
          iconChange: "iconChange"
        },
        decls: 9,
        vars: 4,
        consts: [[1, "container-fluid"], ["type", "text", "placeholder", "Search", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "empty-icon", 3, "selected", "click", 4, "ngIf"], ["size", "3x", 3, "selected", "icon", "title", "click", 4, "ngFor", "ngForOf"], [1, "empty-icon", 3, "click"], ["size", "3x", 3, "icon", "title", "click"]],
        template: function IconSelectorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IconSelectorComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.filter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Found: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " icons. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IconSelectorComponent_div_7_Template, 1, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IconSelectorComponent_fa_icon_8_Template, 1, 4, "fa-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icons.length + (!!ctx.showEmpty ? 1 : 0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEmpty);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]],
        styles: ["fa-icon[_ngcontent-%COMP%], .empty-icon[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 5px;\r\n  margin: 2px;\r\n  height: 60px;\r\n  min-width: 80px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%]:hover, .empty-icon[_ngcontent-%COMP%]:hover {\r\n  background: lightpink;\r\n  color: red;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  background: lightskyblue;\r\n  color: #333333;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24tc2VsZWN0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztBQUNoQiIsImZpbGUiOiJpY29uLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmYS1pY29uLCAuZW1wdHktaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDJweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5mYS1pY29uOmhvdmVyLCAuZW1wdHktaWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRwaW5rO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRza3libHVlO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconSelectorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-icon-selector',
            templateUrl: './icon-selector.component.html',
            styleUrls: ['./icon-selector.component.css']
          }]
        }], function () {
          return [{
            type: src_core_pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_2__["IconsFilterPipe"]
          }];
        }, {
          showEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          iconChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "cBBu":
    /*!***********************************************************************!*\
      !*** ./src/app/components/create-control/create-control.component.ts ***!
      \***********************************************************************/

    /*! exports provided: CreateControlComponent */

    /***/
    function cBBu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateControlComponent", function () {
        return CreateControlComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../control-editor/control-editor.component */
      "R0db");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CreateControlComponent_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var x_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", x_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r1.title);
        }
      }

      var CreateControlComponent = /*#__PURE__*/function () {
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

      CreateControlComponent.ɵfac = function CreateControlComponent_Factory(t) {
        return new (t || CreateControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["ControlsService"]));
      };

      CreateControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateControlComponent,
        selectors: [["rc-create-control"]],
        viewQuery: function CreateControlComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_2__["ControlEditorComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
          }
        },
        inputs: {
          type: "type"
        },
        outputs: {
          cancel: "cancel",
          submit: "submit"
        },
        decls: 9,
        vars: 7,
        consts: [[1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "hidden"], [1, "btn", "btn-lg", "btn-secondary", 3, "hidden", "click"], [3, "showDelete", "textSave", "cancel", "save"], [3, "ngValue"]],
        template: function CreateControlComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Control type: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateControlComponent_Template_select_ngModelChange_2_listener($event) {
              return ctx.typeChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateControlComponent_option_3_Template, 2, 2, "option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "main", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateControlComponent_Template_button_click_5_listener() {
              return ctx.onCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "rc-control-editor", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function CreateControlComponent_Template_rc_control_editor_cancel_8_listener() {
              return ctx.onCancel();
            })("save", function CreateControlComponent_Template_rc_control_editor_save_8_listener($event) {
              return ctx.onSave($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controlTypes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !!ctx.editor.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !!ctx.editor.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.editor.data);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showDelete", false)("textSave", "Add");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_2__["ControlEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtY29udHJvbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateControlComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-create-control',
            templateUrl: './create-control.component.html',
            styleUrls: ['./create-control.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["ControlsService"]
          }];
        }, {
          editor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_2__["ControlEditorComponent"], {
              "static": true
            }]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "cY2w":
    /*!***************************************!*\
      !*** ./src/key/Models/IKeyControl.ts ***!
      \***************************************/

    /*! no exports provided */

    /***/
    function cY2w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
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
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "d9zi":
    /*!***********************************************!*\
      !*** ./src/core/services/controls.service.ts ***!
      \***********************************************/

    /*! exports provided: ControlsService */

    /***/
    function d9zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlsService", function () {
        return ControlsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ControlsService = /*#__PURE__*/function () {
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
            var _this12 = this;

            if (!ref || !items) return [];
            ref.clear();
            var rv = [];
            items.forEach(function (item) {
              var control = _this12.generateView(ref, item);

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
            var _this13 = this;

            if (!ref || !items) return [];
            var rv = [];
            items.forEach(function (item) {
              var control = _this13.generateEditor(ref, item);

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

      ControlsService.ɵfac = function ControlsService_Factory(t) {
        return new (t || ControlsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
      };

      ControlsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ControlsService,
        factory: ControlsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "eHWG":
    /*!*************************************!*\
      !*** ./src/volume/volume.module.ts ***!
      \*************************************/

    /*! exports provided: VolumeModule */

    /***/
    function eHWG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolumeModule", function () {
        return VolumeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./volume-component/volume.component */
      "nesH");
      /* harmony import */


      var _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./volume-editor-component/volume-editor.component */
      "ekYE");

      var VolumeModule = /*#__PURE__*/function () {
        function VolumeModule(controls) {
          _classCallCheck(this, VolumeModule);

          var reg = {
            name: VolumeModule.controlKey,
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
              ngModule: VolumeModule,
              providers: []
            };
          }
        }]);

        return VolumeModule;
      }();

      VolumeModule.controlKey = 'vol';
      VolumeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: VolumeModule
      });
      VolumeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function VolumeModule_Factory(t) {
          return new (t || VolumeModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]));
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VolumeModule, {
          declarations: [_volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__["VolumeComponent"], _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__["VolumeEditorComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
          exports: [_volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__["VolumeComponent"], _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__["VolumeEditorComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolumeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__["VolumeComponent"], _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__["VolumeEditorComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
            exports: [_volume_component_volume_component__WEBPACK_IMPORTED_MODULE_3__["VolumeComponent"], _volume_editor_component_volume_editor_component__WEBPACK_IMPORTED_MODULE_4__["VolumeEditorComponent"]]
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ekYE":
    /*!***********************************************************************!*\
      !*** ./src/volume/volume-editor-component/volume-editor.component.ts ***!
      \***********************************************************************/

    /*! exports provided: VolumeEditorComponent */

    /***/
    function ekYE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolumeEditorComponent", function () {
        return VolumeEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _core_components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/components/control-column-editor/control-column-editor.component */
      "OTFJ");

      function VolumeEditorComponent_rc_control_column_editor_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rc-control-column-editor", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function VolumeEditorComponent_rc_control_column_editor_0_Template_rc_control_column_editor_valueChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.data.col = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.data.col);
        }
      }

      var VolumeEditorComponent = /*#__PURE__*/function () {
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

      VolumeEditorComponent.ɵfac = function VolumeEditorComponent_Factory(t) {
        return new (t || VolumeEditorComponent)();
      };

      VolumeEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VolumeEditorComponent,
        selectors: [["rc-volume-editor"]],
        decls: 1,
        vars: 1,
        consts: [[3, "value", "valueChange", 4, "ngIf"], [3, "value", "valueChange"]],
        template: function VolumeEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VolumeEditorComponent_rc_control_column_editor_0_Template, 1, 1, "rc-control-column-editor", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.data);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _core_components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_2__["ControlColumnEditorComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2x1bWUtZWRpdG9yLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolumeEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-volume-editor',
            templateUrl: './volume-editor.component.html',
            styleUrls: ['./volume-editor.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fvNk":
    /*!***********************************************************!*\
      !*** ./src/app/components/nav-menu/nav-menu.component.ts ***!
      \***********************************************************/

    /*! exports provided: NavMenuComponent */

    /***/
    function fvNk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () {
        return NavMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["link-active"];
      };

      var _c1 = function _c1(a1) {
        return ["/p", a1];
      };

      function NavMenuComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, p_r1.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.title);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          show: a0
        };
      };

      var _c3 = function _c3() {
        return {
          exact: true
        };
      };

      var _c4 = function _c4() {
        return ["/"];
      };

      var _c5 = function _c5() {
        return ["/create"];
      };

      var NavMenuComponent = /*#__PURE__*/function () {
        function NavMenuComponent(pagesService, service, elementRef, renderer) {
          _classCallCheck(this, NavMenuComponent);

          this.pagesService = pagesService;
          this.service = service;
          this.elementRef = elementRef;
          this.renderer = renderer;
          this.isExpanded = false;
          this.isConnected = false;
          this.subscriptions = [];
        }

        _createClass(NavMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.subscriptions.push(this.pagesService.pages.subscribe(function (value) {
              return _this14.pages = value;
            }));
            this.subscriptions.push(this.service.isConnected.subscribe(function (value) {
              return _this14.isConnected = value;
            }));
            var sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"](this.renderer.listen('document', 'click', function (evt) {
              if (_this14.isExpanded && !_this14.elementRef.nativeElement.contains(evt.target)) _this14.isExpanded = false;
            }));
            this.subscriptions.push(sub);
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

      NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) {
        return new (t || NavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavMenuComponent,
        selectors: [["rc-nav-menu"]],
        decls: 16,
        vars: 19,
        consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-white", "border-bottom", "box-shadow", "mb-3"], [1, "container"], [1, "navbar-brand", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "flex-sm-row-reverse", 3, "ngClass"], [1, "navbar-nav", "flex-grow"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", "text-dark", 3, "routerLink"], [1, "nav-item", 3, "routerLinkActive"], ["class", "nav-item", 3, "routerLinkActive", 4, "ngFor", "ngForOf"]],
        template: function NavMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_a_click_3_listener() {
              return ctx.connect();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_button_click_5_listener() {
              return ctx.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavMenuComponent_li_15_Template, 3, 6, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.isConnected ? "lightgreen" : "red");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status: ", ctx.isConnected ? "Connected" : "Closed", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx.isExpanded));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: ["a.navbar-brand[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow[_ngcontent-%COMP%] {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRCIsImZpbGUiOiJuYXYtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5uYXZiYXItYnJhbmQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-nav-menu',
            templateUrl: './nav-menu.component.html',
            styleUrls: ['./nav-menu.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
          }, {
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "gOpZ":
    /*!*********************************!*\
      !*** ./src/core/core.module.ts ***!
      \*********************************/

    /*! exports provided: CoreModule, WebSocketServiceProvider */

    /***/
    function gOpZ(module, __webpack_exports__, __webpack_require__) {
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
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/web-socket.service */
      "jmOB");
      /* harmony import */


      var _services_pages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/pages.service */
      "1eB0");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/auth.service */
      "kCMb");
      /* harmony import */


      var _services_informers_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/informers-state.service */
      "HQXj");
      /* harmony import */


      var _services_controls_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/controls.service */
      "d9zi");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./directives/auto-focus.directive */
      "LnWu");
      /* harmony import */


      var _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/control-column-editor/control-column-editor.component */
      "OTFJ");
      /* harmony import */


      var _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pipes/column-class-name.pipe */
      "X7fa");
      /* harmony import */


      var _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/icon-selector/icon-selector.component */
      "bykB");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pipes/IconsFilterPipe */
      "16mY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pipes/EnumToArrayPipe */
      "HUBa");

      var CoreModule = /*#__PURE__*/function () {
        function CoreModule() {
          _classCallCheck(this, CoreModule);
        }

        _createClass(CoreModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: CoreModule,
              providers: [_services_controls_service__WEBPACK_IMPORTED_MODULE_6__["ControlsService"], _services_informers_state_service__WEBPACK_IMPORTED_MODULE_5__["InformersStateService"], _services_pages_service__WEBPACK_IMPORTED_MODULE_3__["PagesService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], {
                provide: _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"],
                useFactory: WebSocketServiceProvider,
                deps: [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]]
              }]
            };
          }
        }]);

        return CoreModule;
      }();

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)();
        },
        providers: [_services_controls_service__WEBPACK_IMPORTED_MODULE_6__["ControlsService"], _services_informers_state_service__WEBPACK_IMPORTED_MODULE_5__["InformersStateService"], _services_pages_service__WEBPACK_IMPORTED_MODULE_3__["PagesService"], _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"], _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_11__["ColumnClassNamePipe"], _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_14__["IconsFilterPipe"], _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_16__["EnumToArrayPipe"]],
        imports: [[_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"].withServerTransition({
          appId: 'ng-cli-universal'
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_9__["AutoFocusDirective"], _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_10__["ControlColumnEditorComponent"], _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_11__["ColumnClassNamePipe"], _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_16__["EnumToArrayPipe"], _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_14__["IconsFilterPipe"], _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_12__["IconSelectorComponent"]],
          imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_9__["AutoFocusDirective"], _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_10__["ControlColumnEditorComponent"], _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_11__["ColumnClassNamePipe"], _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_16__["EnumToArrayPipe"], _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_14__["IconsFilterPipe"], _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_12__["IconSelectorComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_9__["AutoFocusDirective"], _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_10__["ControlColumnEditorComponent"], _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_11__["ColumnClassNamePipe"], _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_16__["EnumToArrayPipe"], _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_14__["IconsFilterPipe"], _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_12__["IconSelectorComponent"]],
            imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"].withServerTransition({
              appId: 'ng-cli-universal'
            }), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [_services_controls_service__WEBPACK_IMPORTED_MODULE_6__["ControlsService"], _services_informers_state_service__WEBPACK_IMPORTED_MODULE_5__["InformersStateService"], _services_pages_service__WEBPACK_IMPORTED_MODULE_3__["PagesService"], _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"], _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_11__["ColumnClassNamePipe"], _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_14__["IconsFilterPipe"], _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_16__["EnumToArrayPipe"]],
            exports: [_directives_auto_focus_directive__WEBPACK_IMPORTED_MODULE_9__["AutoFocusDirective"], _components_control_column_editor_control_column_editor_component__WEBPACK_IMPORTED_MODULE_10__["ControlColumnEditorComponent"], _pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_11__["ColumnClassNamePipe"], _pipes_EnumToArrayPipe__WEBPACK_IMPORTED_MODULE_16__["EnumToArrayPipe"], _pipes_IconsFilterPipe__WEBPACK_IMPORTED_MODULE_14__["IconsFilterPipe"], _components_icon_selector_icon_selector_component__WEBPACK_IMPORTED_MODULE_12__["IconSelectorComponent"]]
          }]
        }], null, null);
      })();

      function WebSocketServiceProvider(authService) {
        var l = window.location;
        var protocol = document.location.protocol == 'https:' ? 'wss:' : 'ws:';
        var url = "".concat(protocol, "//").concat(l.hostname, ":6431/Testing");
        console.log('URL: ', url);
        var rv = new _services_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"](url);
        rv.logRaisingEvent = false;
        rv.open();
        console.log('Created WebSocketService: ', rv); // Link with auth service.

        authService.link(rv);
        return rv;
      }
      /***/

    },

    /***/
    "gdmj":
    /*!************************************!*\
      !*** ./src/key/Models/KeysList.ts ***!
      \************************************/

    /*! exports provided: KeyCodes */

    /***/
    function gdmj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KeyCodes", function () {
        return KeyCodes;
      });

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
    "iwkZ":
    /*!*******************************************************************!*\
      !*** ./src/app/components/control-view/control-view.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ControlViewComponent */

    /***/
    function iwkZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlViewComponent", function () {
        return ControlViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/directives/control-host/control-host.directive */
      "mgBC");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core */
      "UzkQ");

      function ControlViewComponent_ng_template_0_Template(rf, ctx) {}

      var ControlViewComponent = /*#__PURE__*/function () {
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

      ControlViewComponent.ɵfac = function ControlViewComponent_Factory(t) {
        return new (t || ControlViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]));
      };

      ControlViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ControlViewComponent,
        selectors: [["rc-control-view"]],
        viewQuery: function ControlViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_1__["ControlHostDirective"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.host = _t.first);
          }
        },
        inputs: {
          control: "control"
        },
        decls: 1,
        vars: 0,
        consts: [["rcControlHost", ""]],
        template: function ControlViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ControlViewComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
          }
        },
        directives: [src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_1__["ControlHostDirective"]],
        styles: ["[_nghost-%COMP%] {\r\n  display: inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImNvbnRyb2wtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-control-view',
            templateUrl: './control-view.component.html',
            styleUrls: ['./control-view.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]
          }];
        }, {
          host: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_directives_control_host_control_host_directive__WEBPACK_IMPORTED_MODULE_1__["ControlHostDirective"], {
              "static": true
            }]
          }],
          control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "jmOB":
    /*!*************************************************!*\
      !*** ./src/core/services/web-socket.service.ts ***!
      \*************************************************/

    /*! exports provided: WebSocketService */

    /***/
    function jmOB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebSocketService", function () {
        return WebSocketService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/WebSocketMessage */
      "4BCP");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var WebSocketService = /*#__PURE__*/function () {
        function WebSocketService(url) {
          var _this15 = this;

          _classCallCheck(this, WebSocketService);

          this.url = url;
          this.__autoReconnectInterval = 5 * 1000; // 5 seconds.

          this.__autoReconnectTries = -1; // Infinite.

          this.__autoReconnectTry = 0; // Current try of reconnect.

          this.__handlers = {};
          this.__messageHandlers = {};
          this.__instnaceHandlers = {
            'close': function close(e) {
              _this15.raiseEvent('close', e);

              if (e.code !== 1000) // 1000 is a CLOSE_NORMAL, on which client don't need to reconnect.
                _this15.reconnect();

              _this15.raiseEvent('connection', false);

              _this15.isConnected.next(false);
            },
            'error': function error(e) {
              _this15.raiseEvent('error', e);

              if (e.code === 'ECONNREFUSED' || e.reason === 'ECONNREFUSED') _this15.reconnect();
            },
            'message': function message(e) {
              _this15.raiseEvent('message.raw', e);

              try {
                var data = JSON.parse(e.data);

                var msg = _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessage"].parse(data);

                if (msg === null) return;

                _this15.raiseEvent('message.received', msg);

                if (!_this15.__filters.every(function (f) {
                  return f(msg) !== false;
                })) return;

                _this15.raiseMessage(msg);
              } catch (e) {
                _this15.raiseEvent('error.message', e);

                _this15.raiseEvent('error', e);
              }
            },
            'open': function open(e) {
              _this15.raiseEvent('open', e);

              _this15.raiseEvent('connection', true);

              _this15.isConnected.next(true);
            }
          };
          this.__filters = [];
          this.logRaisingEvent = false;
          this.isConnected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.isAuthorized = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
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
            var _this16 = this;

            this.close(); // Check if auto-reconnect is limited.

            if (this.__autoReconnectTries >= 0 && this.__autoReconnectTry >= this.__autoReconnectTries) return;
            this.__autoReconnectTry++;
            if (this.autoReconnectInterval > 0) setTimeout(function () {
              return _this16.open();
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

      WebSocketService.ɵfac = function WebSocketService_Factory(t) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
      };

      WebSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WebSocketService,
        factory: WebSocketService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebSocketService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jxvT":
    /*!**********************************!*\
      !*** ./src/core/models/IPage.ts ***!
      \**********************************/

    /*! no exports provided */

    /***/
    function jxvT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "kCMb":
    /*!*******************************************!*\
      !*** ./src/core/services/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function kCMb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/WebSocketMessage */
      "4BCP");
      /* harmony import */


      var _models_WebSocketMessageType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/WebSocketMessageType */
      "WPaL");
      /* harmony import */


      var _utils_makeid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../utils/makeid */
      "UlaE");

      var AuthService = /*#__PURE__*/function () {
        function AuthService() {
          _classCallCheck(this, AuthService);
        }

        _createClass(AuthService, [{
          key: "setToken",
          value: function setToken(token) {
            if (typeof token === 'string' || token instanceof String) token = token.length > 0 ? token : null;else token = null;
            localStorage.setItem(AuthService.__key, token === null ? '' : token);
          }
        }, {
          key: "clearToken",
          value: function clearToken() {
            localStorage.removeItem(AuthService.__key);
          }
          /**
           * Gets authorization token or null if not authorized.
           */

        }, {
          key: "getToken",
          value: function getToken() {
            var token = localStorage.getItem(AuthService.__key);
            if (typeof token === 'string' || token instanceof String) return token.length > 0 ? token : null;
            return null;
          }
        }, {
          key: "link",
          value: function link(webSocketService) {
            var _this17 = this;

            webSocketService.addMessageHandler(AuthService.ActionAuth, function (m) {
              // Store auth token.
              if (_this17.getToken() === null && m.Data instanceof String || typeof m.Data === 'string') _this17.setToken(m.Data);
              webSocketService.isAuthorized.next(true);
            });
            webSocketService.isConnected.subscribe(function (value) {
              if (value !== true) {
                webSocketService.isAuthorized.next(false);
                return;
              }

              _this17.auth(webSocketService);
            });
          }
        }, {
          key: "auth",
          value: function auth(webSocketService) {
            var token = this.getToken();
            webSocketService.send(new _models_WebSocketMessage__WEBPACK_IMPORTED_MODULE_1__["WebSocketMessage"]({
              a: AuthService.ActionAuth,
              t: _models_WebSocketMessageType__WEBPACK_IMPORTED_MODULE_2__["WebSocketMessageType"].Request,
              d: token,
              h: Object(_utils_makeid__WEBPACK_IMPORTED_MODULE_3__["makeid"])()
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.__key = 'rc.auth';
      AuthService.ActionAuth = 'Auth';

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)();
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "kjm3":
    /*!*****************************************************************!*\
      !*** ./src/app/components/page-editor/page-editor.component.ts ***!
      \*****************************************************************/

    /*! exports provided: PageEditorComponent */

    /***/
    function kjm3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageEditorComponent", function () {
        return PageEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../control-editor/control-editor.component */
      "R0db");
      /* harmony import */


      var _create_control_create_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../create-control/create-control.component */
      "cBBu");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-sortablejs */
      "PQoX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _control_editor_view_control_editor_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../control-editor-view/control-editor-view.component */
      "9Hs0");
      /* harmony import */


      var _core_pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/pipes/column-class-name.pipe */
      "X7fa");

      function PageEditorComponent_rc_control_editor_view_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "rc-control-editor-view", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openEditor", function PageEditorComponent_rc_control_editor_view_5_Template_rc_control_editor_view_openEditor_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var c_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.openControlEditor(c_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "columnClassName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, c_r1.col))("control", c_r1);
        }
      }

      var _c0 = function _c0() {
        return {
          delay: 100
        };
      };

      var PageEditorComponent = /*#__PURE__*/function () {
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
            var _this18 = this;

            this.sub = this.route.params.subscribe(function (params) {
              _this18.name = params['name'];

              var details = _this18.pagesService.details(_this18.name);

              if (details === null) {
                console.warn('Page editor could not find %o. Navigating to home...', _this18.name);

                _this18.router.navigate(['/']);
              } else {
                _this18.title = details.title;
                _this18.controls = _toConsumableArray(details.controls);
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
          key: "delete",
          value: function _delete() {
            var confirmed = confirm('Delete this page?');
            if (!confirmed) return;
            this.pagesService["delete"](this.name);
            this.router.navigate(['/']);
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

      PageEditorComponent.ɵfac = function PageEditorComponent_Factory(t) {
        return new (t || PageEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"]));
      };

      PageEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageEditorComponent,
        selectors: [["rc-page-editor"]],
        viewQuery: function PageEditorComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_3__["ControlEditorComponent"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_create_control_create_control_component__WEBPACK_IMPORTED_MODULE_4__["CreateControlComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.controlEditor = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.controlCreator = _t.first);
          }
        },
        decls: 21,
        vars: 8,
        consts: [[3, "hidden"], [1, "container-fluid"], [1, "form-group"], ["autofocus", "", "placeholder", "Title", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], [3, "sortablejs", "sortablejsOptions"], [3, "ngClass", "control", "openEditor", 4, "ngFor", "ngForOf"], [1, "container-fluid", "editor-controls"], [1, "col-12", 2, "margin", "0 0 4px 0"], [1, "btn", "btn-lg", "btn-primary", 3, "click"], [1, "col-4"], [1, "btn", "btn-lg", "btn-danger", 3, "click"], [1, "btn", "btn-lg", "btn-secondary", 3, "click"], [3, "hidden", "cancel", "save", "delete"], [3, "hidden", "cancel", "submit"], [3, "ngClass", "control", "openEditor"]],
        template: function PageEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PageEditorComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageEditorComponent_rc_control_editor_view_5_Template, 2, 4, "rc-control-editor-view", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageEditorComponent_Template_button_click_8_listener() {
              return ctx.addControl();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageEditorComponent_Template_button_click_11_listener() {
              return ctx["delete"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageEditorComponent_Template_button_click_14_listener() {
              return ctx.navigateToPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageEditorComponent_Template_button_click_17_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "rc-control-editor", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function PageEditorComponent_Template_rc_control_editor_cancel_19_listener() {
              return ctx.updateControl();
            })("save", function PageEditorComponent_Template_rc_control_editor_save_19_listener($event) {
              return ctx.updateControl($event);
            })("delete", function PageEditorComponent_Template_rc_control_editor_delete_19_listener($event) {
              return ctx.deleteControl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "rc-create-control", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancel", function PageEditorComponent_Template_rc_create_control_cancel_20_listener() {
              return ctx.hideCreateControl();
            })("submit", function PageEditorComponent_Template_rc_create_control_submit_20_listener($event) {
              return ctx.createControl($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.show || ctx.showCreateControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sortablejs", ctx.controls)("sortablejsOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showCreateControl);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_sortablejs__WEBPACK_IMPORTED_MODULE_6__["SortablejsDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_3__["ControlEditorComponent"], _create_control_create_control_component__WEBPACK_IMPORTED_MODULE_4__["CreateControlComponent"], _control_editor_view_control_editor_view_component__WEBPACK_IMPORTED_MODULE_8__["ControlEditorViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
        pipes: [_core_pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_9__["ColumnClassNamePipe"]],
        styles: ["[_nghost-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n.editor-controls[_ngcontent-%COMP%] {\r\n  margin: 0 -2px;\r\n}\r\n\r\n.editor-controls[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0 2px;\r\n}\r\n\r\n.editor-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoicGFnZS1lZGl0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5lZGl0b3ItY29udHJvbHMge1xyXG4gIG1hcmdpbjogMCAtMnB4O1xyXG59XHJcbi5lZGl0b3ItY29udHJvbHMgZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAycHg7XHJcbn1cclxuLmVkaXRvci1jb250cm9scyBidXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageEditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-page-editor',
            templateUrl: './page-editor.component.html',
            styleUrls: ['./page-editor.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
          }];
        }, {
          controlEditor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_control_editor_control_editor_component__WEBPACK_IMPORTED_MODULE_3__["ControlEditorComponent"], {
              "static": true
            }]
          }],
          controlCreator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_create_control_create_control_component__WEBPACK_IMPORTED_MODULE_4__["CreateControlComponent"], {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "mHaX":
    /*!***************************************!*\
      !*** ./src/command/command.module.ts ***!
      \***************************************/

    /*! exports provided: CommandModule */

    /***/
    function mHaX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommandModule", function () {
        return CommandModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _command_component_command_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./command-component/command.component */
      "3zBy");
      /* harmony import */


      var _command_editor_component_command_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./command-editor-component/command-editor.component */
      "JHfk");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CommandModule = /*#__PURE__*/function () {
        function CommandModule(controls) {
          _classCallCheck(this, CommandModule);

          var reg = {
            name: CommandModule.controlKey,
            title: 'Command',
            viewType: _command_component_command_component__WEBPACK_IMPORTED_MODULE_3__["CommandComponent"],
            editType: _command_editor_component_command_editor_component__WEBPACK_IMPORTED_MODULE_4__["CommandEditorCompoent"]
          };
          controls.register(reg);
        }

        _createClass(CommandModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: CommandModule,
              providers: []
            };
          }
        }]);

        return CommandModule;
      }();

      CommandModule.controlKey = 'cmd';
      CommandModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CommandModule
      });
      CommandModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CommandModule_Factory(t) {
          return new (t || CommandModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]));
        },
        imports: [[_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommandModule, {
          declarations: [_command_component_command_component__WEBPACK_IMPORTED_MODULE_3__["CommandComponent"], _command_editor_component_command_editor_component__WEBPACK_IMPORTED_MODULE_4__["CommandEditorCompoent"]],
          imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
          exports: [_command_component_command_component__WEBPACK_IMPORTED_MODULE_3__["CommandComponent"], _command_editor_component_command_editor_component__WEBPACK_IMPORTED_MODULE_4__["CommandEditorCompoent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommandModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_command_component_command_component__WEBPACK_IMPORTED_MODULE_3__["CommandComponent"], _command_editor_component_command_editor_component__WEBPACK_IMPORTED_MODULE_4__["CommandEditorCompoent"]],
            imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
            exports: [_command_component_command_component__WEBPACK_IMPORTED_MODULE_3__["CommandComponent"], _command_editor_component_command_editor_component__WEBPACK_IMPORTED_MODULE_4__["CommandEditorCompoent"]]
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mgBC":
    /*!*******************************************************************!*\
      !*** ./src/app/directives/control-host/control-host.directive.ts ***!
      \*******************************************************************/

    /*! exports provided: ControlHostDirective */

    /***/
    function mgBC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlHostDirective", function () {
        return ControlHostDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ControlHostDirective = function ControlHostDirective(viewContainerRef) {
        _classCallCheck(this, ControlHostDirective);

        this.viewContainerRef = viewContainerRef;
      };

      ControlHostDirective.ɵfac = function ControlHostDirective_Factory(t) {
        return new (t || ControlHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
      };

      ControlHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ControlHostDirective,
        selectors: [["", "rcControlHost", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ControlHostDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[rcControlHost]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nIv7":
    /*!*******************************************!*\
      !*** ./src/core/models/IInformerSound.ts ***!
      \*******************************************/

    /*! no exports provided */

    /***/
    function nIv7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "nesH":
    /*!*********************************************************!*\
      !*** ./src/volume/volume-component/volume.component.ts ***!
      \*********************************************************/

    /*! exports provided: VolumeComponent */

    /***/
    function nesH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolumeComponent", function () {
        return VolumeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/core */
      "UzkQ");

      var _c0 = ["inp"];

      var VolumeComponent = /*#__PURE__*/function (_src_core__WEBPACK_IM4) {
        _inherits(VolumeComponent, _src_core__WEBPACK_IM4);

        var _super4 = _createSuper(VolumeComponent);

        function VolumeComponent(webSocketService, informers) {
          var _this19;

          _classCallCheck(this, VolumeComponent);

          _this19 = _super4.call(this);
          _this19.webSocketService = webSocketService;
          _this19.informers = informers;
          _this19.subs = [];
          _this19.isEnabled = false;
          return _this19;
        }

        _createClass(VolumeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.subs.push(this.informers.Sound.subscribe(function (value) {
              var input = _this20.input.nativeElement;
              if (!!value) input.value = value.OutputVolume;
              _this20.isEnabled = !!value && !value.OutputIsMuted && _this20.webSocketService.isConnected.getValue();
            }));
            this.subs.push(this.webSocketService.isConnected.subscribe(function (x) {
              var sound = _this20.informers.Sound.getValue();

              _this20.isEnabled = x && !!sound && !sound.OutputIsMuted;
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

      VolumeComponent.ɵfac = function VolumeComponent_Factory(t) {
        return new (t || VolumeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_1__["InformersStateService"]));
      };

      VolumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VolumeComponent,
        selectors: [["rc-volume"]],
        viewQuery: function VolumeComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        inputs: {
          isEnabled: "isEnabled"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 2,
        consts: [["type", "range", "min", "0", "max", "100", "value", "0", "step", "1", 1, "custom-range", 3, "change"], ["inp", ""]],
        template: function VolumeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VolumeComponent_Template_input_change_0_listener($event) {
              return ctx.setVolume($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isEnabled ? null : "")("title", ctx.input.nativeElement.value);
          }
        },
        styles: ["[_nghost-%COMP%]{\r\n  display: block;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InZvbHVtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VolumeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-volume',
            templateUrl: './volume.component.html',
            styleUrls: ['./volume.component.css']
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]
          }, {
            type: src_core__WEBPACK_IMPORTED_MODULE_1__["InformersStateService"]
          }];
        }, {
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inp', {
              "static": true
            }]
          }],
          isEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "pTOY":
    /*!************************************!*\
      !*** ./src/core/utils/findIcon.ts ***!
      \************************************/

    /*! exports provided: findIcon, allIcons */

    /***/
    function pTOY(module, __webpack_exports__, __webpack_require__) {
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
      "wHSu");

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
    "qylB":
    /*!*************************************!*\
      !*** ./src/core/models/IControl.ts ***!
      \*************************************/

    /*! no exports provided */

    /***/
    function qylB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "r/CW":
    /*!***********************************************!*\
      !*** ./src/file-system/file-system.module.ts ***!
      \***********************************************/

    /*! exports provided: FileSystemModule */

    /***/
    function rCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileSystemModule", function () {
        return FileSystemModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./file-system-component/file-system.component */
      "Qf2G");
      /* harmony import */


      var _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./file-system-editor-component/file-system-editor.component */
      "WWRy");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Services/file-system-paths.service */
      "V34l");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var FileSystemModule = /*#__PURE__*/function () {
        function FileSystemModule(controls) {
          _classCallCheck(this, FileSystemModule);

          var reg = {
            name: FileSystemModule.controlKey,
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
              ngModule: FileSystemModule,
              providers: [_Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_6__["FileSystemPathsService"]]
            };
          }
        }]);

        return FileSystemModule;
      }();

      FileSystemModule.controlKey = 'fs';
      FileSystemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FileSystemModule
      });
      FileSystemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function FileSystemModule_Factory(t) {
          return new (t || FileSystemModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]));
        },
        providers: [_Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_6__["FileSystemPathsService"]],
        imports: [[_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FileSystemModule, {
          declarations: [_file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__["FileSystemComponent"], _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__["FileSystemEditorComponent"]],
          imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
          exports: [_file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__["FileSystemComponent"], _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__["FileSystemEditorComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSystemModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
            providers: [_Services_file_system_paths_service__WEBPACK_IMPORTED_MODULE_6__["FileSystemPathsService"]],
            declarations: [_file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__["FileSystemComponent"], _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__["FileSystemEditorComponent"]],
            exports: [_file_system_component_file_system_component__WEBPACK_IMPORTED_MODULE_3__["FileSystemComponent"], _file_system_editor_component_file_system_editor_component__WEBPACK_IMPORTED_MODULE_4__["FileSystemEditorComponent"]]
          }]
        }], function () {
          return [{
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["ControlsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uR/D":
    /*!************************************************!*\
      !*** ./src/core/models/ControlRegistration.ts ***!
      \************************************************/

    /*! no exports provided */

    /***/
    function uRD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    "y2JS":
    /*!**************************!*\
      !*** ./src/key/index.ts ***!
      \**************************/

    /*! exports provided: KeyModule, KeyControlMode, KeyComponent, KeyEditorComponent */

    /***/
    function y2JS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _key_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./key.module */
      "EzUw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyModule", function () {
        return _key_module__WEBPACK_IMPORTED_MODULE_0__["KeyModule"];
      });
      /* harmony import */


      var _Models_IKeyControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Models/IKeyControl */
      "cY2w");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Models/KeyControlMode */
      "M0GX");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyControlMode", function () {
        return _Models_KeyControlMode__WEBPACK_IMPORTED_MODULE_2__["KeyControlMode"];
      });
      /* harmony import */


      var _key_component_key_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./key-component/key.component */
      "3Xa9");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyComponent", function () {
        return _key_component_key_component__WEBPACK_IMPORTED_MODULE_3__["KeyComponent"];
      });
      /* harmony import */


      var _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./key-editor-component/key-editor.component */
      "+WQ5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "KeyEditorComponent", function () {
        return _key_editor_component_key_editor_component__WEBPACK_IMPORTED_MODULE_4__["KeyEditorComponent"];
      });
      /***/

    },

    /***/
    "ycSy":
    /*!***************************************************!*\
      !*** ./src/app/components/page/page.component.ts ***!
      \***************************************************/

    /*! exports provided: PageComponent */

    /***/
    function ycSy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
        return PageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/core */
      "UzkQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _control_view_control_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../control-view/control-view.component */
      "iwkZ");
      /* harmony import */


      var _core_pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/pipes/column-class-name.pipe */
      "X7fa");

      function PageComponent_rc_control_view_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rc-control-view", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "columnClassName");
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", item_r1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, item_r1.col));
        }
      }

      var _c0 = function _c0(a1) {
        return ["/edit", a1];
      };
      /**
       * Represents page with controls and listeners.
       * User will navigate in site via this pages.
       */


      var PageComponent = /*#__PURE__*/function () {
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
            var _this21 = this;

            this.sub = this.route.params.subscribe(function (params) {
              _this21.name = params['name'];

              var details = _this21.pagesService.details(_this21.name);

              if (details === null) {
                console.warn('Page %o not found. Navigating to home...', _this21.name);

                _this21.router.navigate(['/']);
              } else {
                _this21.details = details;
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

      PageComponent.ɵfac = function PageComponent_Factory(t) {
        return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageComponent,
        selectors: [["rc-page"]],
        decls: 9,
        vars: 5,
        consts: [[1, "container-fluid"], [1, "d-flex", "bd-highlight"], [1, "p-2", "w-100", "bd-highlight"], [1, "p-2", "flex-shrink-1", "bd-highlight"], [1, "align-middle", 3, "routerLink"], [3, "control", "ngClass", 4, "ngFor", "ngForOf"], [3, "control", "ngClass"]],
        template: function PageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PageComponent_rc_control_view_8_Template, 2, 4, "rc-control-view", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.name));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.details.controls);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _control_view_control_view_component__WEBPACK_IMPORTED_MODULE_4__["ControlViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        pipes: [_core_pipes_column_class_name_pipe__WEBPACK_IMPORTED_MODULE_5__["ColumnClassNamePipe"]],
        styles: ["rc-control-view[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2QiLCJmaWxlIjoicGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicmMtY29udHJvbC12aWV3IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'rc-page',
            templateUrl: './page.component.html',
            styleUrls: ['./page.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: src_core__WEBPACK_IMPORTED_MODULE_2__["PagesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! exports provided: getBaseUrl */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
        return getBaseUrl;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      function getBaseUrl() {
        return document.getElementsByTagName('base')[0].href;
      }

      var providers = [{
        provide: 'BASE_URL',
        useFactory: getBaseUrl,
        deps: []
      }];

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"](providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      }); //export { renderModule, renderModuleFactory } from '@angular/platform-server';

      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map