"use client";

import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  type RefObject,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Same geometry as violin.glb with downscaled textures — plenty for a blurred backdrop.
const MODEL_URL = "/models/violin-lite.glb";
useGLTF.preload(MODEL_URL);

const FILL = 0.92; // fraction of the hero height the violin spans
const REST_SPIN = 2; // rotation (rad) at the top of the page
const SPIN_RANGE = 1.5; // extra rotation (rad) across a full hero scroll
const SCROLL_DAMPING = 4; // higher = snappier response to scroll

type SceneProps = {
  animated: boolean;
  progress: RefObject<number>;
  onReady: () => void;
};

function Violin({ animated, progress, onReady }: SceneProps) {
  const spinRef = useRef<THREE.Group>(null);
  const scroll = useRef(0);
  const { scene } = useGLTF(MODEL_URL);
  const viewportHeight = useThree((s) => s.viewport.height);
  const invalidate = useThree((s) => s.invalidate);

  // Scale to fill the hero and centre on the spin axis; reset first so re-runs don't compound.
  useLayoutEffect(() => {
    scene.scale.setScalar(1);
    scene.position.set(0, 0, 0);
    scene.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const center = scene.parent!.worldToLocal(
      box.getCenter(new THREE.Vector3()),
    );
    const scale =
      (viewportHeight * FILL) / (Math.max(size.x, size.y, size.z) || 1);

    scene.scale.setScalar(scale);
    scene.position.copy(center).multiplyScalar(-scale);
    scroll.current = progress.current ?? 0;
    invalidate();
  }, [scene, viewportHeight, progress, invalidate]);

  useEffect(() => onReady(), [onReady]);

  // Frames are only rendered while scroll is moving the model.
  useEffect(() => {
    if (!animated) return;
    const onScroll = () => invalidate();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [animated, invalidate]);

  useFrame((_, rawDelta) => {
    const spin = spinRef.current;
    if (!spin) return;

    if (animated) {
      const target = progress.current ?? 0;
      // Clamp so the first frame after idling never causes a jump.
      const delta = Math.min(rawDelta, 1 / 20);
      scroll.current = THREE.MathUtils.damp(
        scroll.current,
        target,
        SCROLL_DAMPING,
        delta,
      );
      if (Math.abs(target - scroll.current) > 1e-4) invalidate();
    }

    spin.rotation.y = REST_SPIN + scroll.current * SPIN_RANGE;
  });

  return (
    <group ref={spinRef}>
      {/* Azimuth offset: face the belly toward the camera at rest. */}
      <group rotation={[0, Math.PI / 2, 0]}>
        {/* Corrective tilt: model rests flat by default — stand it upright. */}
        <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
          <primitive object={scene} />
        </group>
      </group>
    </group>
  );
}

export default function ViolinScene({
  animated,
  progress,
  onReady,
}: SceneProps) {
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, 0, 8], fov: 35 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
      onCreated={({ gl, invalidate }) => {
        // Mobile browsers can drop the GL context; redraw once it returns.
        gl.domElement.addEventListener("webglcontextrestored", () =>
          invalidate(),
        );
      }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[2, 4, 5]} intensity={2.6} color="#f3e6d3" />
      {/* Red rim light from behind ties the model to the accent colour. */}
      <directionalLight
        position={[-3, 2, -4]}
        intensity={2.2}
        color="#c23a30"
      />
      <Suspense fallback={null}>
        <Violin animated={animated} progress={progress} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}
