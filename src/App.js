import './App.css';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from "three"
import { useRef, Suspense } from 'react';
import { useTexture, FlyControls, Stars } from "@react-three/drei"






function Ring() {

    const ringRef = useRef()

    const ringMap_prop = useTexture({
        map: 'alien-color.jpg',
        
        normalMap: 'alien-normal.jpg',


        roughnessMap: 'alien-rough.jpg',

        
        aoMap: 'alien-ao.jpg',

        bumpMap: 'alien-displacement.jpg',
        specularMap: 'alien-emissive.jpg'


    })


    useFrame(({ clock }) => {

        ringRef.current.rotation.y = Math.sin(clock.getElapsedTime());
        ringRef.current.rotation.z = clock.getElapsedTime();
    });


    return (

        <mesh

            ref={ringRef}
            position={[0, 0, -10]}

        >

            <torusKnotBufferGeometry
                args={[40, 2, 300, 20, 5, 8]}
                

            />

            <meshPhongMaterial


                {...ringMap_prop}

                visible={true}



                wireframe={false}



            />

            


        </mesh>

    )
}

function Center() {

  
    const centerRef = useRef()

    const sunmap_prop = useTexture({
        map: 'center-color.jpg',
        aoMap: 'center-ao.jpg',
        normalMap: 'center-normal-opengl.png',
        roughnessMap: 'center-roughness.jpg',
        bumpMap: 'center-height.png',
        specularMap: 'center-emissive.jpg'

    })

    return (


        <mesh



            ref={centerRef}

            position={[0, 0, -10]}



        >



            <sphereBufferGeometry


                args={[16, 32, 16, 0, 6.283185307179586, 0, 3.141592653589793]}


            />


            <meshPhongMaterial


                {...sunmap_prop}

                visible={true}



                wireframe={false}

                

            />
        </mesh>

    )

}

function SatA() {

    const satARef = useRef()

    useFrame(({ clock }) => {

        satARef.current.position.x = Math.sin(clock.getElapsedTime()+4) *70
        satARef.current.position.z = -10 + Math.cos(clock.getElapsedTime()+4) *70
    });


    
    return (
        <mesh
            ref={satARef}
            position={[0, 0, 0]}>
            
            <sphereBufferGeometry

                args={[7, 32, 16, 0, 6.283185307179586, 0, 3.141592653589793]}

            />

            <meshBasicMaterial
                visible={true}
                wireframe={false}
                color={"violet"}
            />
        </mesh>

        
        
        )


}


function SatB() {

    const satBRef = useRef()

    useFrame(({ clock }) => {

        satBRef.current.position.y = Math.sin(clock.getElapsedTime()+2) * 150
        satBRef.current.position.x = Math.cos(clock.getElapsedTime()+2) * 100
    });



    return (
        <mesh
            ref={satBRef}
            position={[0, 0, -10]}>

            <sphereBufferGeometry

                args={[6, 32, 16, 0, 6.283185307179586, 0, 3.141592653589793]}

            />

            <meshBasicMaterial
                visible={true}
                wireframe={false}
                color={"orange"}
            />
        </mesh>



    )


}




function SatC() {

    const satCRef = useRef()

    useFrame(({ clock }) => {

        satCRef.current.position.y = Math.cos(clock.getElapsedTime()+1) * 120
        satCRef.current.position.z = -10 + Math.sin(clock.getElapsedTime()+1) * 70
    });



    return (
        <mesh
            ref={satCRef}
            position={[0, 0, 0]}>

            <sphereBufferGeometry

                args={[4, 32, 16, 0, 6.283185307179586, 0, 3.141592653589793]}

            />

            <meshBasicMaterial
                visible={true}
                wireframe={false}
                color={"yellow"}
            />
        </mesh>



    )


}




function App() {

    return (

        < Canvas


            camera={{ aspect: window.innerWidth / window.innerHeight, fov: 45, position: [0, 0, 500], near: 1, far: 2000 }}



        >


            <Suspense fallback={null}>

                <pointLight

                    color={"#d94409"}
                    intensity={1}
                    distance={0}
                    decay={2}
                    position={[0,0,-10]}

                />


                <ambientLight


                    intensity={0.1}

                    color={"#ffffff"}


                />

                

                <FlyControls



                    movementSpeed={20}

                    rollSpeed={1}




                />


                <Stars />


                <Center />



                <Ring />


                <SatA />

                <SatB />
                <SatC />

            </Suspense>

        </Canvas>


  );
}

export default App;
