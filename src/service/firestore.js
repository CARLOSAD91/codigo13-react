// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCGY217DaKn9NoFdES_-Ch00Ye-KS1LNYc",
  authDomain: "codigo13-739a4.firebaseapp.com",
  projectId: "codigo13-739a4",
  storageBucket: "codigo13-739a4.appspot.com",
  messagingSenderId: "21080353798",
  appId: "1:21080353798:web:84860205a60e308a296787",
  measurementId: "G-RJZPVW7RSS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Iniciar fiterstore
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getProductsClothes = async () => {
  // paso1: traer la coleccion de datos
  const collectionClothe = collection(db, "product_clothes")
  // paso2: traer los documentos de la coleccion
  const documentosClothes = await getDocs(collectionClothe)
  // paso3: crear un arrglo que guarde los documentos que estamos obteniendo
  const clothes = documentosClothes.docs.map(doc => doc.data())
  return clothes;
}
