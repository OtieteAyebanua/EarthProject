import "./App.css";
import { Canvas } from "@react-three/fiber";
import Earth from "./component/earth";
import { Stars } from "./component/star";
import { generateStarsInSphere } from "./helpers/generateStars";

const starData = generateStarsInSphere(200, 500);

function App() {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        margin: "auto",
      }}
      camera={{ fov: 50, position: [0, 0, 3] }}
    >
      <color attach="background" args={["#000"]} />
      <Earth />

      <Stars stars={starData} />
    </Canvas>
  );
}

export default App;
