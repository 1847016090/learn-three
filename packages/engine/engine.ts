import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";
export class TEngine {
  /** @name 挂载容器 */
  private dom: HTMLElement;

  /** @name 渲染器 */
  private renderer: WebGLRenderer;

  /** @name 相机 */
  private camera: PerspectiveCamera;

  /** @name 场景 */
  private scene: Scene;

  constructor(dom: HTMLElement) {
    this.dom = dom;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      45,
      dom.offsetWidth / dom.offsetHeight,
      0.1,
      1000
    );
    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(new Vector3(0, 0, 0));
    this.camera.up = new Vector3(0, 1, 0);
    this.renderer = new WebGLRenderer({
      antialias: true,
    });
    this.dom.appendChild(this.renderer.domElement);
    this.renderer.setSize(dom.offsetWidth, dom.offsetHeight, true);

    // 新增一个立方体
    const mesh = new Mesh(
      new BoxGeometry(1, 1, 1),
      new MeshStandardMaterial({
        // 设置材质颜色
        color: 0xffff00,
      })
    );

    // 添加环境光
    const ambientLight = new AmbientLight("rgb(255,255,255)", 10);
    this.scene.add(ambientLight);

    this.scene.add(mesh);

    // this.renderer.setClearColor("#fff");
    // this.renderer.clearColor();

    this.renderer.render(this.scene, this.camera);
  }
}
