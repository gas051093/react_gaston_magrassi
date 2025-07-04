import { getFirestore, collection, getDocs, getDoc, doc, query, addDoc, where } from "firebase/firestore";
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
        const product = {id: docSnap.id, ...docSnap.data()}
        return product
        } else {
            alert("Producto no encontrado");
            return []
}
    } catch (err) {
        console.log(err);  
        return []
    }
}
export const filterProducts = async (filter) => { 
    try {
        const q = query(collection(db, "products"), where("category", "==", filter));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        return products;
    } catch (err) { 
        console.log(err)
        return [];
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

export const createOrder = async (order) => { 
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        return docRef.id
    } catch (err) { 
        console.log(err)
        return null
    }
}