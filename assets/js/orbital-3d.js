/* =========================================================
   AtomLab 9 — orbital-3d.js
   s/p/d orbitallerinin açısal (sınır yüzey) fonksiyonlarından
   gerçek zamanlı 3B mesh üreten, döndürülebilir görselleştirici.
   Three.js (yerel vendor) kullanır — CDN bağımlılığı yoktur.
   ========================================================= */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/** Her orbitalin açısal fonksiyonu f(theta, phi); işareti lob rengini belirler.
 * theta: kutup ekseninden (sahne-y) açı [0, PI]; phi: azimut [0, 2PI]. */
const ANGULAR = {
  "1s":     () => 1,
  "2s":     () => 1,
  "2pz":    (th)      => Math.cos(th),
  "2px":    (th, ph)  => Math.sin(th) * Math.cos(ph),
  "2py":    (th, ph)  => Math.sin(th) * Math.sin(ph),
  "3dz2":   (th)      => (3 * Math.cos(th) * Math.cos(th) - 1) / 2,
  "3dxz":   (th, ph)  => Math.sin(th) * Math.cos(th) * Math.cos(ph),
  "3dyz":   (th, ph)  => Math.sin(th) * Math.cos(th) * Math.sin(ph),
  "3dx2y2": (th, ph)  => Math.sin(th) * Math.sin(th) * Math.cos(2 * ph),
  "3dxy":   (th, ph)  => Math.sin(th) * Math.sin(th) * Math.sin(2 * ph),
};

export const ORBITAL_INFO = {
  "1s":     { label: "1s", shape: "Küre", desc: "Tüm yönlerde eşit olasılık; işaret değişimi (düğüm düzlemi) yoktur.", subshell: "1s", capacity: 2 },
  "2s":     { label: "2s", shape: "Küre (+ iç radyal düğüm)", desc: "Açısal olarak 1s ile aynı küresel sınır yüzeyine sahiptir; aradaki fark (bir radyal düğüm küresi) bu sınır-yüzey gösteriminde görünmez.", subshell: "2s", capacity: 2 },
  "2pz":    { label: "2pz", shape: "Halter (iki lob)", desc: "Dikey eksende iki lob; ekvator düzleminde bir düğüm düzlemi vardır.", subshell: "2p", capacity: 2 },
  "2px":    { label: "2px", shape: "Halter (iki lob)", desc: "x eksenine göre yönelmiş iki lob.", subshell: "2p", capacity: 2 },
  "2py":    { label: "2py", shape: "Halter (iki lob)", desc: "y eksenine göre yönelmiş iki lob.", subshell: "2p", capacity: 2 },
  "3dz2":   { label: "3dz²", shape: "Halter + halka", desc: "Eksen boyunca iki lob ve ekvator çevresinde bir halka (torus) — diğer d orbitallerinden farklı bir görünümü vardır.", subshell: "3d", capacity: 2 },
  "3dxz":   { label: "3dxz", shape: "Dört yapraklı yonca", desc: "Eksenler arasında (45°) uzanan dört lob.", subshell: "3d", capacity: 2 },
  "3dyz":   { label: "3dyz", shape: "Dört yapraklı yonca", desc: "Eksenler arasında (45°) uzanan dört lob.", subshell: "3d", capacity: 2 },
  "3dx2y2": { label: "3dx²-y²", shape: "Dört yapraklı yonca", desc: "Dört lob doğrudan eksenler üzerinde uzanır.", subshell: "3d", capacity: 2 },
  "3dxy":   { label: "3dxy", shape: "Dört yapraklı yonca", desc: "Dört lob eksenler arasında (45°) uzanır.", subshell: "3d", capacity: 2 },
};

const POS_COLOR = new THREE.Color(0x6d5bff);
const NEG_COLOR = new THREE.Color(0xffb020);

function buildOrbitalGeometry(key, scale) {
  const f = ANGULAR[key] || ANGULAR["1s"];
  const thetaSeg = 56, phiSeg = 56;
  const positions = [];
  const colors = [];
  const grid = [];
  for (let i = 0; i <= thetaSeg; i++) {
    const theta = (i / thetaSeg) * Math.PI;
    const row = [];
    for (let j = 0; j <= phiSeg; j++) {
      const phi = (j / phiSeg) * Math.PI * 2;
      const val = f(theta, phi);
      const r = Math.max(0.015, Math.abs(val)) * scale;
      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.cos(theta);
      const z = r * Math.sin(theta) * Math.sin(phi);
      positions.push(x, y, z);
      const col = val >= 0 ? POS_COLOR : NEG_COLOR;
      colors.push(col.r, col.g, col.b);
      row.push(positions.length / 3 - 1);
    }
    grid.push(row);
  }
  const indices = [];
  for (let i = 0; i < thetaSeg; i++) {
    for (let j = 0; j < phiSeg; j++) {
      const a = grid[i][j], b = grid[i + 1][j], c = grid[i + 1][j + 1], d = grid[i][j + 1];
      indices.push(a, b, d, b, c, d);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/** WebGL kullanılamadığında gösterilen basit 2B yedek (fallback) görünüm. */
function mountFallback(container) {
  const NS = "http://www.w3.org/2000/svg";
  container.innerHTML = "";
  const wrap = document.createElement("div");
  wrap.style.cssText = "display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; gap:10px; color:#a199c9; font-family:Arial,sans-serif; font-size:12px; text-align:center; padding:14px;";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 200 140");
  svg.setAttribute("width", "160");
  svg.setAttribute("height", "112");
  wrap.appendChild(svg);
  const msg = document.createElement("div");
  msg.textContent = "Bu tarayıcıda 3B render (WebGL) kullanılamıyor — basitleştirilmiş 2B önizleme gösteriliyor.";
  wrap.appendChild(msg);
  container.appendChild(wrap);

  function draw(family) {
    svg.innerHTML = "";
    const cx = 100, cy = 70;
    const mk = (attrs) => { const el = document.createElementNS(NS, "circle"); for (const k in attrs) el.setAttribute(k, attrs[k]); return el; };
    if (family === "s") {
      svg.appendChild(mk({ cx, cy, r: 46, fill: "#6d5bff", opacity: 0.75 }));
    } else if (family === "p") {
      svg.appendChild(mk({ cx, cy: cy-32, r: 30, fill: "#6d5bff", opacity: 0.8 }));
      svg.appendChild(mk({ cx, cy: cy+32, r: 30, fill: "#ffb020", opacity: 0.8 }));
    } else {
      const petals = [[0,-1],[0,1],[1,0],[-1,0]];
      petals.forEach(([dx,dy], i) => {
        svg.appendChild(mk({ cx: cx+dx*34, cy: cy+dy*34, r: 24, fill: i%2===0 ? "#6d5bff" : "#ffb020", opacity: 0.8 }));
      });
    }
    svg.appendChild(mk({ cx, cy, r: 5, fill: "#ff5b9d" }));
  }
  draw("p");
  return { setOrbital: (key) => draw(key.includes("d") ? "d" : key.includes("p") ? "p" : "s"), dispose: () => {} };
}

/** Bir konteynere döndürülebilir (sürükle) 3B orbital görselleştiricisi bağlar.
 * WebGL kullanılamıyorsa otomatik olarak basit bir 2B önizlemeye düşer. */
export function mountOrbitalViewer(container, initialKey = "2pz") {
  const width = container.clientWidth || 400, height = container.clientHeight || 260;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(3.4, 2.3, 3.4);

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch (err) {
    console.warn("AtomLab 9: WebGL kullanılamıyor, 2B yedek görünüme geçiliyor.", err);
    return mountFallback(container);
  }
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.1;
  controls.minDistance = 1.5;
  controls.maxDistance = 9;

  scene.add(new THREE.AmbientLight(0xffffff, 0.75));
  const dl = new THREE.DirectionalLight(0xffffff, 0.9);
  dl.position.set(4, 6, 4);
  scene.add(dl);
  const dl2 = new THREE.DirectionalLight(0x6d5bff, 0.3);
  dl2.position.set(-4, -3, -2);
  scene.add(dl2);

  const axes = new THREE.Group();
  const axisMat = new THREE.LineBasicMaterial({ color: 0x4a4470, transparent: true, opacity: 0.6 });
  [
    [[-2.3,0,0],[2.3,0,0]], [[0,-2.3,0],[0,2.3,0]], [[0,0,-2.3],[0,0,2.3]],
  ].forEach(pts => {
    const g = new THREE.BufferGeometry().setFromPoints(pts.map(p => new THREE.Vector3(...p)));
    axes.add(new THREE.Line(g, axisMat));
  });
  scene.add(axes);

  const nucleus = new THREE.Mesh(
    new THREE.SphereGeometry(0.06, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xff5b9d })
  );
  scene.add(nucleus);

  let mesh = null;
  function setOrbital(key) {
    if (mesh) { scene.remove(mesh); mesh.geometry.dispose(); mesh.material.dispose(); }
    const geo = buildOrbitalGeometry(key, 1.7);
    const mat = new THREE.MeshStandardMaterial({
      vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: 0.86,
      roughness: 0.45, metalness: 0.05,
    });
    mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
  }
  setOrbital(initialKey);

  let raf;
  function animate() {
    controls.update();
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  }
  animate();

  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  let ro;
  if (typeof ResizeObserver !== "undefined") {
    ro = new ResizeObserver(resize);
    ro.observe(container);
  }

  function dispose() {
    cancelAnimationFrame(raf);
    if (ro) ro.disconnect();
    controls.dispose();
    renderer.dispose();
    if (mesh) { mesh.geometry.dispose(); mesh.material.dispose(); }
  }

  return { setOrbital, dispose };
}
