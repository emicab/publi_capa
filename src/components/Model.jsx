import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import Placeholder from "./Placeholder";

const Model = ({colorBtn, setLoad}) => {
    const {scene, nodes} = useGLTF("./capa_model.glb");
    const model = useRef()

    nodes.Capa.material.color = new THREE.Color(colorBtn);

  /*   console.log(nodes) */
    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime()
        model.current.rotation.y = Math.sin(time) * 0.5
        
    })
    setLoad(true)
    return <Suspense>
        <primitive ref={model} object={scene} position-y={-3} />;
    </Suspense>
};

export default Model;
