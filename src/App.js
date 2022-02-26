import './App.css';
import { Loader, Test } from './Utils.js'
import { Flight, CharA } from './Character.js'
import { Canvas, useFrame } from '@react-three/fiber'

import { useRef, Suspense } from 'react';
import { useTexture, Stars } from "@react-three/drei"






function Ring() {

    const ringRef = useRef()


    
    useFrame(({ clock }) => {

        ringRef.current.rotation.y = Math.sin(clock.getElapsedTime());
        ringRef.current.rotation.z = clock.getElapsedTime();
    });


    const ringMap_prop = useTexture({

        aoMap: 'alien-ao.jpg',
 

        map: 'alien-color.jpg',

        normalMap: 'alien-normal.png',
        roughnessMap: 'alien-rough.jpg',

        displacementMap: 'alien-height.png',

        


    })


    return (

        <mesh

            ref={ringRef}
            position={[0, 0, -10]}

        >

            <torusKnotBufferGeometry
                args={[40, 2, 300, 20, 5, 8]}
                

            />

            <meshStandardMaterial


                {...ringMap_prop}

                visible={true}



                wireframe={false}



            />

            


        </mesh>

    )
}

function Center() {

  
    const centerRef = useRef()

    const centerMap_prop = useTexture({

        aoMap: 'center-ao.jpg',
        emissiveMap: 'center-emissive.jpg',
        
        map: 'center-color.jpg',

        normalMap: 'center-normal.png',
        roughnessMap: 'center-rough.jpg',

        displacementMap: 'center-height.png',
        

    })

    return (


        <mesh



            ref={centerRef}

            position={[0, 0, -10]}



        >



            <sphereBufferGeometry


                args={[16, 32, 16, 0, 6.283185307179586, 0, 3.141592653589793]}


            />


            <meshStandardMaterial


                {...centerMap_prop}

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


    const sataMap_prop = useTexture({

        aoMap: 'satA-ao.jpg',
   

        map: 'satA-color.jpg',

        normalMap: 'satA-normal.jpg',
        roughnessMap: 'satA-rough.jpg',

        displacementMap: 'satA-height.jpg',


    })

    
    return (
        <mesh
            ref={satARef}
            position={[0, 0, 0]}>
            
            <sphereBufferGeometry

                args={[7, 32, 16, 0, 6.283185307179586, 0, 3.141592653589793]}

            />

            <meshStandardMaterial

                {...sataMap_prop}
                visible={true}
                wireframe={false}
                
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

    const satbMap_prop = useTexture({

        aoMap: 'satB-ao.jpg',
      

        map: 'satB-color.jpg',

        normalMap: 'satB-normal.png',
        roughnessMap: 'satB-rough.jpg',

        displacementMap: 'satB-height.png',


    })

    return (
        <mesh
            ref={satBRef}
            position={[0, 0, -10]}>

            <sphereBufferGeometry

                args={[6, 32, 16, 0, 6.283185307179586, 0, 3.141592653589793]}

            />

            <meshStandardMaterial

                {...satbMap_prop}
                visible={true}
                wireframe={false}
                
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

    const satcMap_prop = useTexture({

        aoMap: 'satC-ao.jpg',


        map: 'satC-color.jpg',

        normalMap: 'satC-normal.png',
        roughnessMap: 'satC-rough.jpg',

        displacementMap: 'satC-height.png'


    })

    return (
        <mesh
            ref={satCRef}
            position={[0, 0, 0]}>

            <sphereBufferGeometry

                args={[4, 32, 16, 0, 6.283185307179586, 0, 3.141592653589793]}

            />

            <meshStandardMaterial

                {...satcMap_prop}
                visible={true}
                wireframe={false}
                
            />
        </mesh>



    )


}






function App() {

    
  

    return (

        < Canvas

            camera={{aspect: window.innerWidth / window.innerHeight, near: 1, far: 2000, fov: 45, position: [0, 0, 500] }}

        >

            <Suspense fallback={<Loader />}>


                <pointLight



                   
                    intensity={0.3}
                    distance={0}
                    decay={3}
                    position={[200,300,-10]}

                />


                <ambientLight


                    intensity={0.3}

                    color={"#ffffff"}


                />


                <pointLight



                    color={"orange"}
                    intensity={0.1}
                    distance={0}
                    decay={2}
                    position={[0, 0, 0]}

                />


                
                <Flight/>




                <Stars radius={600} />

                <Center />

                <Ring />

                <SatA />
                <SatB />
                <SatC />

                

                <Test />
                <CharA />


            </Suspense>

        </Canvas>


  );
}

export default App;
