import { db } from "./firebaseCon.js"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"



// Add a new document with a generated id.



export async function handleSubmit (name,feed, nick) {



    const docRef = await addDoc(collection(db, "Users"), {
        email: `${name}`,
        messege: `${feed}`,
        nickname: `${nick}`,
        timestamp: serverTimestamp()
    });


    
}

