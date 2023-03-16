import {
  Mesh,
  BoxGeometry,
  MeshStandardMaterial,
  Object3D,
  SphereGeometry,
  CylinderGeometry,
} from "three";

// 新增一个立方体
const box = new Mesh(
  new BoxGeometry(1, 1, 1),
  new MeshStandardMaterial({
    // 设置材质颜色
    color: 0xffff00,
  })
);

// 新增一个圆
const sphere = new Mesh(new SphereGeometry(2), new MeshStandardMaterial());
sphere.position.x = -5;

// 新增一个柱体
const cylinder = new Mesh(
  new CylinderGeometry(1, 1, 10, 6),
  new MeshStandardMaterial()
);
cylinder.position.z = -5;

const basicObjectLists: Object3D[] = [];
basicObjectLists.push(box, sphere, cylinder);

export { basicObjectLists };
