import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "../components/Landing/Experience";
import { UI } from "../components/Landing/UI";
import './Landing.css'; // Import the CSS file

function Landing() {
  return (
    <>
    <div className="w-screen h-screen bg-gradient-radial from-orange-500 to-gray-900">
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </div>
    </>
  );
}

export default Landing;
