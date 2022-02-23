import React, { useRef } from "react";
import { useGLTF, useAnimations, Billboard, Text } from "@react-three/drei";
import { Html, useProgress } from '@react-three/drei'

export function Chara(props) {

    const group = useRef();
    const charRef = useRef();
    const { nodes, materials, animations } = useGLTF("/sparoch-ready-glb.glb");
    const { actions } = useAnimations(animations, group);
    return (

        <Billboard

            position={[200, 300, -10]}
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} // Lock the rotation on the z axis (default=false)
            
        >
            <Text fontSize={10}>I'm a billboard</Text>

            


            <group ref={group} {...props} dispose={null}>

                <group name="Scene">

                    <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01} >

                        <primitive object={nodes.mixamorigHips} />

                        <skinnedMesh

                            onClick={() => console.log("You have clicked and finally we have knowed.")}
                            name="Beta_Joints"

                            geometry={nodes.Beta_Joints.geometry}

                            material={materials.Beta_Joints_MAT}

                            skeleton={nodes.Beta_Joints.skeleton}

                        >


                        </skinnedMesh>

                        <skinnedMesh

                            onClick={() => alert("You have clicked and finally we have knowed.")}
                            name="Beta_Surface"

                            geometry={nodes.Beta_Surface.geometry}

                            material={materials["asdf1:Beta_HighLimbsGeoSG2"]}

                            skeleton={nodes.Beta_Surface.skeleton}

                        >
                        </skinnedMesh>

                    </group>

                </group>

            </group>

        </Billboard>



    );


}



useGLTF.preload("/sparoch-ready-glb.glb");


export function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}


export function Test (){
    
    return (

        <mesh
            
            position={[100, 200, -10]}>

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










