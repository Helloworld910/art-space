import { useRef } from "react"
import { Billboard, Text } from "@react-three/drei"


export function Instructions() {

    const helpRef = useRef()
    var mobCheck = false

    

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        // Take the user to a different screen here.
        mobCheck = true
    }
    
   


    return (

        <Billboard

            scale={1}
            ref={helpRef}
            position={[0,10,450]}
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} // Lock the rotation on the z axis (default=false)


        >


            <Text

                visible={mobCheck ? false : true}
                fontSize={1}
                font={"Philosopher"}
                color={"white"}
                textAlign={"center"}>

                {`Hold LC : Forward
Hold RC : Backward`}


            </Text>


            <Text
                visible={mobCheck ? true : false}
                fontSize={1}
                font={"Philosopher"}
                color={"white"}
                textAlign={"center"}>

                {`You are on Auto-forward.
Touch : Set Direction.`}


            </Text>



        </ Billboard>
        
        
        )

    
}