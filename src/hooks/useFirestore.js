
import { collection, getDocs, query, where  } from "firebase/firestore/lite";
import { useState } from "react";
import { db, auth} from "../firebase";
import { nanoid } from "nanoid";

export const useFirestore = ( ) => {

    const [data, setData] = useState([]);

    const [error, setError] = useState();

    const [loading, setLoading] = useState({});

    const getData = async( ) => {
        try{
            setLoading((prev) => ({...prev, getData:true}));;
            const dataRef = collection(db, "fav-heros");
            const qRef = query (dataRef , where("uid", "==", auth.currentUser.uid));
            const querySnapshot = await getDocs(qRef);
            const dataDB = querySnapshot.docs.map ((doc) => doc.data());
            setData(dataDB);
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally{
            setLoading(prev => ({...prev, getData:false}));
        }
    }

    const addData = async( selectedHero ) => {
        try {
            setLoading(prev => ({...prev, addData:true}));
            const newFav = {
                enabled: true,
                nanoid:nanoid(6),
                origin:selectedHero,
                uid: auth.currentUser.uid
            }
            const docRef = doc(db, "fav-heros", newFav.nanoid)
            await setDoc(docRef, newFav)
            setData([...data, newFav])
        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading( (prev) => ({ ...prev, addData:false } ) );
        }
    }

    const deleteData = async (nanoid) => {
        try {
            setLoading( (prev) => ( { ...prev, [nanoid]: true } ) );
            const docRef = doc(db, "fav-heros", nanoid);
            await deleteDoc(docRef);
            setData( data.filter( (doc) => doc.nanoid !== nanoid) );
        } catch (error) {
            console.log(error);
            setError(error.code);
        } finally {
            setLoading( (prev) => ( { ...prev, [nanoid]: false } ) ) ;
        }
    };

    const searchData = async (nanoid) => {
        try {
            const docRef = doc(db, "fav-heros", nanoid);
            const docSnap = await getDocs(docRef);
            return docSnap;
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    return {
        data , 
        error ,
        loading,
        getData,
        addData,
        deleteData,
        searchData,
    }

}





