import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => { 
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const products = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        return products;
    } catch (err) { 
        console.log(err);
        return [];
    }
}

export const getProduct = async (id) => {
    try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        return docSnap.data();
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
}
    } catch (err) {
        console.log(err);       
    }
}

export const getCategory = async() =>{
    try {
        const products = await getProducts();
        const category = [...new Set(products.map(cat => (cat.category)))]
        return category;
    } catch (err) {
        console.log(err)
        return [];
    }
}
