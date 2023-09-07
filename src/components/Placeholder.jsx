const Placeholder = (props) => {
    return (
        <mesh {...props}>
            <boxGeometry />
            <meshStandardMaterial color={0x827ae6} wireframe />
        </mesh>
    );
};

export default Placeholder;
