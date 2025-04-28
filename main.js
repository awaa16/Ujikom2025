import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAbLsq27KJU9tD9pHC8GrPUB7LgEPEQbPU",
  authDomain: "insan-cemerlang-92ee0.firebaseapp.com",
  projectId: "insan-cemerlang-92ee0",
  storageBucket: "insan-cemerlang-92ee0.appspot.com",
  messagingSenderId: "332441427242",
  appId: "1:332441427242:web:73c31309147ef1dab15253",
  measurementId: "G-JW04DZL85R"
};
// Inisialisasi Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function ambildaftartodolist() {
    const refDokumen = collection(db, "todolist");
    const kueri = query(refDokumen, orderBy("nama"));
    const cuplikanKueri = await getDocs(kueri);
    let hasil = [];
    cuplikanKueri.forEach((dok) => {
      hasil.push({
        id: dok.id,
        nama: dok.data().nama,
        prioritas: dok.data().prioritas,
        status: dok.data().status,
        tanggal: dok.data().tanggal,
      });
    });