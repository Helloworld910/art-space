import React from "react";
import { Html, useProgress } from '@react-three/drei'



export function Loader() {
    const { progress } = useProgress()
    return (

        <Html center> {progress} % loaded.</Html>
        
        )
    
}


export function Test (){
    
    return (

        <mesh
            
            position={[200, 300, -10]}>

            <sphereBufferGeometry

                args={[7, 32, 16, 0, 6.283185307179586, 0, 3.141592653589793]}

            />

            <meshStandardMaterial

                visible={true}
                wireframe={false}
                color={"orange"}

            />
        </mesh>
        
        
        
        ) 
}










