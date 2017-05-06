System.register(["aurelia-framework", "../utils/ui-utils"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, ui_utils_1, UITooltip, UITooltip_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (ui_utils_1_1) {
                ui_utils_1 = ui_utils_1_1;
            }
        ],
        execute: function () {
            UITooltip = UITooltip_1 = (function () {
                function UITooltip(element) {
                    this.element = element;
                    this.theme = 'light';
                    this.message = '';
                    if (!UITooltip_1.tooltipEl) {
                        var el = UITooltip_1.tooltipEl = document.createElement('div');
                        el.classList.add('ui-tooltip');
                        document.body.appendChild(el);
                    }
                }
                UITooltip.prototype.attached = function () {
                    var _this = this;
                    this.element.addEventListener('mouseenter', function () { return _this.show(); });
                    this.element.addEventListener('mouseleave', function () { return _this.hide(); });
                };
                UITooltip.prototype.detached = function () { this.hide(); };
                UITooltip.prototype.show = function () {
                    if (isEmpty(this.message))
                        return;
                    var el = UITooltip_1.tooltipEl;
                    el.className = 'ui-tooltip ' + this.theme;
                    el.innerHTML = this.message;
                    this.tether = ui_utils_1.UIUtils.tether(this.element, el, { resize: false, position: 'tc' });
                    this.timer = setTimeout(function () { return el.classList.add('show'); }, 700);
                };
                UITooltip.prototype.hide = function () {
                    clearTimeout(this.timer);
                    if (this.tether)
                        this.tether.dispose();
                    UITooltip_1.tooltipEl.className = 'ui-tooltip';
                    this.tether = null;
                };
                return UITooltip;
            }());
            __decorate([
                aurelia_framework_1.bindable(),
                __metadata("design:type", Object)
            ], UITooltip.prototype, "theme", void 0);
            __decorate([
                aurelia_framework_1.bindable({ primaryProperty: true }),
                __metadata("design:type", Object)
            ], UITooltip.prototype, "message", void 0);
            UITooltip = UITooltip_1 = __decorate([
                aurelia_framework_1.autoinject(),
                aurelia_framework_1.customAttribute('tooltip'),
                __metadata("design:paramtypes", [Element])
            ], UITooltip);
            exports_1("UITooltip", UITooltip);
        }
    };
});
