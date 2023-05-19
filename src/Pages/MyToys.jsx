import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import SingleToyCard from '../components/SingleToyCard';
import Lottie from "lottie-react";
import loadingJson from "../assets/jsonLottieFiles/loading.json"


const MyToys = () => {
    document.title = "AquaLeapToy | MyToys"
    const {user} = useContext(AuthContext);
    const email = user.email;
    const [deleted, setDeleted] = useState(false);
    const [myToys, setMyToys] = useState([]);
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        setLoad(true)
        fetch(`http://localhost:5000/myToys?email=${email}`,{
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setLoad(false)
            setMyToys(data)
        })
    },[deleted])
       
    if(load){
        return <div className='flex justify-center items-center flex-col'>
         <h1 className='mt-8 text-2xl font-semibold'>Loading.... Please Wait</h1>
         <Lottie animationData={loadingJson} className='w-80'/>
         </div>
     }
    return (
        <div >
            <h1 className='text-2xl text-center'>Added Toys: {myToys.length}</h1>
            {myToys.map(toy=><SingleToyCard toy={toy} deleted={deleted} setDeleted={setDeleted} key={toy._id}/>)}            
        </div>
    );
};

export default MyToys;