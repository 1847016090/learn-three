import {
  AmbientLight,
  AxesHelper,
  BoxGeometry,
  GridHelper,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MOUSE,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

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
    const ambientLight = new AmbientLight("rgb(255,255,255)", 1);
    this.scene.add(ambientLight);

    // 添加场景辅助
    const axesHelper: AxesHelper = new AxesHelper(5);
    const gridHelper: GridHelper = new GridHelper(
      30,
      15,
      "rgb(255,255,0)",
      "rgb(255,2550,0)"
    );

    // 添加性能监控器
    const stats = Stats();
    const statsDom = stats.domElement;
    statsDom.style.top = "5px";
    statsDom.style.right = "5px";
    statsDom.style.left = "unset";

    this.scene.add(gridHelper);
    this.scene.add(axesHelper);
    this.scene.add(mesh);

    // this.renderer.setClearColor("#fff");
    // this.renderer.clearColor();

    // this.renderer.render(this.scene, this.camera);

    this.dom.appendChild(statsDom);

    const renderFunc = () => {
      // mesh.position.x += 0.01;
      stats.update();
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(renderFunc);
    };
    this.addOrbitControl();
    renderFunc();
  }
  /** @name 添加轨道控制器 */
  addOrbitControl = () => {
    const control = new OrbitControls(this.camera, this.renderer.domElement);
    // 添加拖动惯性
    // control.enableDamping = true;
    // 设置鼠标左键，中键，右键
    // control.mouseButtons = {
    //   // 将左键干掉
    //   LEFT: null as unknown as MOUSE,
    //   MIDDLE: MOUSE.DOLLY,
    //   RIGHT: MOUSE.ROTATE,
    // };
  };
}
