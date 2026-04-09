import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Lexus } from "./Lexus";
import { Platform } from "./Platform";

export default function LexusStage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const carProps = {
    scale: isMobile ? 0.8 : 1.5,
    position: [0, 0.18, 0],
    rotation: [0, -Math.PI / 9, 0],
  };

  // 🎨 Định nghĩa gradient đồng bộ với tổng thể
  const gradientStyle = {
    background: "radial-gradient(ellipse, #111117 20%, transparent 70%)",
  };

  return (
    // 👇 1. Áp dụng inline style cho container div
    <div
      className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[3/2] rounded-[2rem] overflow-hidden"
      style={gradientStyle}
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        // 👇 2. Quan trọng: Set alpha: true để Canvas trong suốt, lộ background của div cha
        gl={{ alpha: true, preserveDrawingBuffer: true }}
        camera={{ position: [4, 4, 7], fov: 45 }}
        frameloop="demand"
        dpr={[1, 1.5]}
      >
        {/* 🌍 Ánh sáng cơ bản */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />

        {/* 🪞 Environment map - giữ nguyên để xe có độ bóng */}
        <Environment files="/hdr/potsdamer_platz_1k.hdr" background={false} />

        {/* 🪄 Platform & Xe */}
        <Platform rotationSpeed={0.15} />
        <Lexus {...carProps} />

        {/* 🌑 Bóng đổ tiếp xúc */}
        <ContactShadows position={[0, 0, 0]} opacity={0.6} scale={20} blur={1.5} />

        {/* 🎮 Controls */}
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.2}
          enablePan={false}
          enableZoom={!isTablet}
          minDistance={5}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
}
