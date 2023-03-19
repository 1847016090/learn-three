export class TCanvasTexturedEditor {
  private canvas: HTMLCanvasElement;
  constructor(
    width: number,
    height: number,
    bgColor: string = "rgb(255,255,255)"
  ) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.backgroundColor = bgColor;
  }

  /** @name 绘制 */
  draw(func: (ctx: CanvasRenderingContext2D) => void) {
    const ctx = this.canvas.getContext("2d");
    if (ctx) {
      func(ctx);
      return this;
    } else {
      console.warn("you browser can not support canvas 2d");
      return this;
    }
  }

  /** @name 预览 */
  preview() {
    const canvas = this.canvas;
    canvas.style.position = "fixed";
    canvas.style.top = "8px";
    canvas.style.left = "8px";
    document.body.appendChild(this.canvas);
    return this;
  }
}
