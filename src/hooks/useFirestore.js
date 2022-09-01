
import { collection, getDocs, query, where  } from "firebase/firestore/lite";
import { useState } from "react";
import { db, auth} from "../firebase";



export const useFirestore = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState({});

    const getData = async() => {
        try{
            setLoading((prev) => ({...prev, getData:true}));;
            const dataRef = collection(db, "heros");
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

    return {
        data , 
        error ,
        loading,
        getData,
    }

}

