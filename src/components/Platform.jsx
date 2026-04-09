// src/components/Platform.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Platform({ rotationSpeed = 0.2, ...props }) {
  const platformRef = useRef();

  //   Animation xoay nhẹ platform
  useFrame((state, delta) => {
    if (platformRef.current) {
      platformRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <group ref={platformRef} {...props}>
      {/* 🟤 Mặt kệ chính */}
      <mesh
        position={[0, -0.05, 0]} // Hạ xuống dưới xe một chút
        rotation={[0, -Math.PI / 2, 0]} // Xoay ngang để mặt phẳng nằm ngang
      >
        <cylinderGeometry args={[2.95, 2.95, 0.1, 64]} /> {/* [radiusTop, radiusBottom, height, radialSegments] */}
        <meshStandardMaterial
          color="#111111" // Đen gần tuyệt đối
          roughness={0.8} // Rất nhám (không bóng loáng, đỡ bị phản chiếu trắng)
          metalness={0.1} // Không còn tính kim loại
          polygonOffset
          polygonOffsetFactor={-1}
          polygonOffsetUnits={-1}
        />
      </mesh>

      {/* ⚪ Viền sáng xung quanh */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.95, 3, 64]} /> {/* [innerRadius, outerRadius, thetaSegments] */}
        <meshBasicMaterial color="#aa3bff" toneMapped={false} />
      </mesh>

      {/* 🔵 Ánh sáng viền phát sáng (glow effect) */}
      <pointLight position={[0, 0, 0]} color="#aa3bff" intensity={2} distance={5} />
    </group>
  );
}
