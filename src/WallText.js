import { db } from "./firebaseCon.js"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { Billboard, Text } from "@react-three/drei"
import { useEffect, useRef, useState } from 'react'



var wallText = [];
var nicks = [];


async function getText() {

  

    

    const collectionRef = collection(db, "Users");

    // Create a query against the collection.

    const q = query(collectionRef, orderBy("nickname", "asc"), limit(3));


    const querySnapshot = await getDocs(q);

    

    querySnapshot.forEach((doc) => {

        

        // doc.data() is never undefined for query doc snapshots
        wallText.push(doc.get("messege"));
        nicks.push(doc.get("nickname"));

    });




}





export function Wall() {


    const [dataLoad, setdataLoad] = useState(false)

    
    getText().then(() => {

        setdataLoad(true)

    })

    useEffect(() => {


        console.log("data loaded")
        

    },[dataLoad])

      
    

    const wallRef = useRef()

    return (

        <Billboard

            scale={dataLoad ? 1:0}
            ref={wallRef}
            position={[200, 400, -10]}
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} // Lock the rotation on the z axis (default=false)


        >



            <group


            >


                <Text


                    fontSize={15}


                >


                    {`${wallText[0]} - ${nicks[0]}
${wallText[1]} - ${nicks[1]}
${wallText[2]} - ${nicks[2]}`}



                </Text>



            </group>

        </Billboard>
        
        )


}

