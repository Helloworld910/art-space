import React, { useEffect, useRef, useState } from "react"
import { Billboard, useTexture } from "@react-three/drei"
import { a, useSpring } from "@react-spring/three"
import { analytics } from "./firebaseCon.js"
import { logEvent } from "firebase/analytics";


export function InstaBut() {

    const instaBillRef = useRef()

    const [hoveredSoc, sethoveredSoc] = useState(false)

    const { scaled } = useSpring({ scaled: hoveredSoc ? [1.15, 1.15, 1] : [1, 1, 1] });


    const instaMap_prop = useTexture({

        map: 'insta-color.png'

    })

    useEffect(() => void (document.body.style.cursor = hoveredSoc ? "pointer" : "auto"), [hoveredSoc])


    return (

        <Billboard

            ref={instaBillRef}
            position={[230, 340, -10]}
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} // Lock the rotation on the z axis (default=false)

        >
            <a.mesh

                scale={scaled}

                onPointerOver={() => {

                    sethoveredSoc(true)
                    logEvent(analytics, 'Hovered Insta Button.');




                }}

                onPointerOut={() => {


                    sethoveredSoc(false)

                }}

                onClick={() => {

                    logEvent(analytics, 'Clicked Insta Button.');
                    window.location.href = "https://www.instagram.com/lucy_psa1/"


                }}

            >


                <planeGeometry args={[10, 10]} />

                <meshStandardMaterial

                    {...instaMap_prop}
                    visible={true}

                />


            </a.mesh>

        </Billboard>
         
        )


}