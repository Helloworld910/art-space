import { useState, useRef } from "react"
import { Html, Billboard } from "@react-three/drei"


export function Instructions() {

    const helpRef = useRef()
    const [mobCheck, setmobCheck] = useState(false)

    

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        // Take the user to a different screen here.
        setmobCheck(true)
    }
    
   


    return (

        <Billboard

            scale={mobCheck ? 0:1}
            ref={helpRef}
            position={[0,10,450]}
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} // Lock the rotation on the z axis (default=false)


        >

            <mesh visible={false}>

                <planeGeometry args={[20, 10]} />

                <meshStandardMaterial color={"black"} />
                
                <Html transform>


                    <font size="10" color="white"> Hold LC : Forward<br />Hold RC : Backward </font>


                </Html>

            </mesh>


        </ Billboard>
        
        
        )

    
}