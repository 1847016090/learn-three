import { WebGLRenderer } from "three";
export class TEngine {
  /** @name 挂载容器 */
  private dom: HTMLElement;

  /** @name 渲染器 */
  private renderer: WebGLRenderer;

  constructor(dom: HTMLElement) {
    this.dom = dom;
    this.renderer = new WebGLRenderer();
    this.dom.appendChild(this.renderer.domElement);
    this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);
  }
}
