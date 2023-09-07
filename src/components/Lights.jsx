const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight color='white' position={[1, 5, 3]} intensity={2.5} />
            <directionalLight color='white' position={[1, 1, 4]} intensity={2.5} />
        </>
    );
};

export default Lights;
