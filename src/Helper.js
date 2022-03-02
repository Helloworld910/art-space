import { useState } from "react"
import { Html } from "@react-three/drei"


export function Instructions() {

    var mobCheck = useState(false)

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        // Take the user to a different screen here.
        mobCheck = true
    }
    


    return (


        <sprite position={[-10, 10, 10]} scale={1}>

            <Html>

                <font size="20" color="green"> Hold LC : Forward<br />Hold RC : Backward </font>

            </Html>


            <spriteMaterial />

        </sprite>

            
        
        
        )

    
}