import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

function Box(){
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="blue" />
        </mesh>
    )
}

export default function Car(){
    return (
        <div className="Car">
            <Canvas>
                <OrbitControls/>
                <ambientLight intensity={0.5}/>
                <spotLight position={[10,15,10]} angle={0.3} />
                <Box />
            </Canvas>
        </div>
    );
}
