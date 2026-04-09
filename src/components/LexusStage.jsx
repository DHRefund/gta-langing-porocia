import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Lexus } from "./Lexus"; // Import component xe
import { Platform } from "./Platform"; // Import component platform
import { Grid } from "@react-three/drei";
//shadow
export default function LexusStage() {
  return (
    <div style={{ width: "60vw", height: "60vh", background: "#111" }} className="border border-green-500">
      <Canvas camera={{ position: [5, 2, 8], fov: 45 }} frameloop="demand" dpr={[1, 1.5]}>
        {/* 🌍 Ánh sáng & Environment */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow shadow-mapSize={[1024, 1024]} />
        {/* 🪞 Environment reflection cho xe bóng đẹp */}
        <Environment files="/hdr/potsdamer_platz_1k.hdr" background={false} />
        {/* 📐 Grid helper tại gốc tọa độ */}
        {/* <Grid
          position={[0, 0, 0]}
          args={[10, 10]} // [size, divisions] - lưới 10x10
          cellSize={1} // kích thước mỗi ô
          cellThickness={0.5}
          cellColor="#000000"
          sectionSize={5} // kích thước section lớn hơn
          sectionThickness={1}
          sectionColor="#888888"
          fadeDistance={25}
          fadeStrength={1}
          infiniteGrid
        /> */}
        {/* 🪄 Platform xoay */}
        <Platform rotationSpeed={0.15} />
        {/* 🚗 Model Lexus */}
        <Lexus
          position={[0, 0.18, 0]} // Hạ xe xuống chút vì model có scale 0.01
          rotation={[0, Math.PI / 4, 0]} // Xoay 45 độ để nhìn đẹp
          scale={1.5} // Phóng to thêm cho dễ nhìn
        />
        {/* 🌑 Bóng đổ tiếp xúc */}
        <ContactShadows position={[0, 0, 0]} opacity={0.6} scale={20} blur={1.5} />
        {/* 🎮 Controls xoay/zoom */}
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.2} // Không cho camera chui xuống đất
          // maxPolarAngle={Math.PI}
          enablePan={false}
          // autoRotate
          // autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
