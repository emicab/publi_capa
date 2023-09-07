import * as THREE from "three";

const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: '#EEA',
  roughness: 0.5,
  metalness: 0.5,
});

const Geometries = () => {
    return (
        <>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} geometry={planeGeometry} material={planeMaterial} />
            <mesh rotation={[0, 0, 0]} position={[0, 0, -10]} geometry={planeGeometry} material={planeMaterial}/>
            <mesh rotation={[0, -Math.PI / 2, 0]} position={[10, 0, 0]} geometry={planeGeometry} material={planeMaterial}/>
            <mesh rotation={[0, Math.PI / 2, 0]} position={[-10, 0, 0]} geometry={planeGeometry} material={planeMaterial}/>
        </>
    );
};

export default Geometries;
