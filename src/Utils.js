import { React, useState } from "react";
import { Html, useProgress } from '@react-three/drei'
import { useFrame }from '@react-three/fiber'


export function Loader() {
    const { progress } = useProgress()
    return (

        <Html center> {progress} % loaded.</Html>
        
        )
    
}


export function Test() {

    const [checkHook, setcheckHook] = useState(false)

    useFrame(({ clock }) => {

        

        if (Math.sin(clock.getElapsedTime()) > 0.99) {
            setcheckHook(true)
        }

        if (Math.sin(clock.getElapsedTime()) < -0.99) {
            setcheckHook(false)
        }
    })


        return (

            <mesh

                position={[200, 340, -10]}>

                <sphereBufferGeometry

                    args={[7, 60, 16, 0, 6.283185307179586, 0, 3.141592653589793]}

                />

                <meshStandardMaterial
                    visible={checkHook}
                    wireframe={false}
                    color={"#a61f16"}
                />

            </mesh>
        )
}
