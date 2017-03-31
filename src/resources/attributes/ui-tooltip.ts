//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT

import {autoinject, customAttribute, bindable} from 'aurelia-framework';
import {UIEvent} from "../utils/ui-event";
import {UIUtils} from "../utils/ui-utils";

@autoinject()
@customAttribute('tooltip')
export class UITooltip {
  static tooltipEl;

  constructor(public element: Element) {
    if (!UITooltip.tooltipEl) {
      let el = UITooltip.tooltipEl = document.createElement('div');
      el.classList.add('ui-tooltip');
      document.body.appendChild(el);
    }
  }

  // aurelia hooks
  // created(owningView: View, myView: View) { }
  // bind(bindingContext: Object, overrideContext: Object) { }
  attached() {
    this.element.addEventListener('mouseenter', () => this.show());
    this.element.addEventListener('mouseleave', () => this.hide());
  }
  detached() { this.hide(); }
  // unbind() { }
  // end aurelia hooks

  @bindable() theme = 'light';
  @bindable({ primaryProperty: true }) message = '';

  private tether;

  show() {
    let el = UITooltip.tooltipEl;
    el.className = 'ui-tooltip ' + this.theme;
    el.innerHTML = this.message;
    this.tether = UIUtils.tether(this.element, el, { resize: false, position: 'tc' });
    UIEvent.queueTask(() => el.classList.add('show'));
  }
  hide() {
    this.tether.dispose();
    UITooltip.tooltipEl.className = 'ui-tooltip';
  }
}
