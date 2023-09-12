import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";


const Model = ({colorBtn, setLoad}) => {
    const {scene, nodes} = useGLTF("./capa_model.glb");
    const model = useRef()

    console.log(nodes.botones)

    nodes.Capa.material.color = new THREE.Color(colorBtn);
    nodes.botones.material.color = new THREE.Color('#FFF');
    nodes.Capa.material.roughness = 0.7;
    nodes.Capa.material.metalness = 0.2;

  /*   console.log(nodes) */
    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime()
        model.current.rotation.y = Math.sin(time) * 0.2
        
    })
    setLoad(true)
    return <Suspense>
        <primitive ref={model} object={scene} position-y={-2.7} scale={0.43}/>;
    </Suspense>
};

export default Model;
