import "./App.css";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights";
import { ContactShadows, PresentationControls } from "@react-three/drei";
import { CineonToneMapping } from "three";
import Model from "./components/Model";
import Env from "./components/Env";
import Menu from "./components/Menu";
import { useState } from "react";
import Nav from "./components/Nav";
import Loader from "./components/Loader";
import BtnComprar from "./components/BtnComprar";

function App() {
    const cameraSetting = {
        fov: 30,
        near: 0.1,
        far: 100,
        position: [0, 2, 20],
    };

    const [colorBtn, setColorBtn] = useState("#FFF");
    const [load, setLoad] = useState(false);

    return (
        <>
            <Loader load={load} />
            <Canvas
                shadows
                camera={cameraSetting}
                gl={{
                    antialias: true,
                    toneMapping: CineonToneMapping,
                    outputColorSpace: "srgb",
                    powerPreference: "high-performance",
                }}
            >
                <color args={["#b4b4b4"]} attach='background' />
                <PresentationControls
                    global
                    rotation={[0, 0, 0]}
                    polar={[-0, 0]}
                    azimuth={[-.2, .2]}
                    config={{ mass: 10, tension: 500, friction: 50 }}
                    snap={{
                        rotation: [-0.1, 2.0, 0.1],
                        polar: [-0.4, 0.2],
                        azimuth: [-0.2, 0.5],
                    }}
                >
                    <Model colorBtn={colorBtn} setLoad={setLoad} />
                    {/* <Geometries/> */}
                </PresentationControls>
                <Env />
                <Lights />
                <ContactShadows
                    position-y={-2.75}
                    scale={10}
                    opacity={0.55}
                    blur={2}
                />
            </Canvas>
            
            <Nav load={load} />
            {load ? <BtnComprar/> : null}
            {load ? <Menu setColorBtn={setColorBtn} /> : null}
        </>
    );
}

export default App;
