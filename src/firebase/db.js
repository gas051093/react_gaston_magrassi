import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);



export const getProducts = async () => { 
    const products = [];
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => { 
            products.push({id: doc.id, ...doc.data()})
        })
        return products;
    } catch (err) { 
        console.log(err);
        return [];
    }
}
