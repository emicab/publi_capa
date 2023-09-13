import  * as THREE  from 'three';
import { useGLTF } from "@react-three/drei";
import React from "react";

const Env = () => {
    const {scene, nodes} = useGLTF("./env_model.glb");

    nodes.env.material.color = new THREE.Color("#626262");
    nodes.env.material.roughness = 0.8;
    

    return <primitive object={scene} position-y={-3} />;
};

export default Env;
