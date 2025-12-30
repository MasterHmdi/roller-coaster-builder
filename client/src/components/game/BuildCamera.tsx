import { OrbitControls } from "@react-three/drei";
import { useRollerCoaster } from "@/lib/stores/useRollerCoaster";

export function BuildCamera() {
  const { mode, isDraggingPoint } = useRollerCoaster();
  
  if (mode === "ride") return null;
  
  return (
    <OrbitControls
      enabled={!isDraggingPoint}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={5}
      maxDistance={100}
      maxPolarAngle={Math.PI / 2 - 0.1}
      target={[0, 0, 0]}
    />
  );
}
