import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import SingleToyCard from '../components/SingleToyCard';
import Lottie from "lottie-react";
import loadingJson from "../assets/jsonLottieFiles/loading.json"


const MyToys = () => {
    document.title = "AquaLeapToy | MyToys"
    const [sortType, setSortType] = useState(null)
    const {user} = useContext(AuthContext);
    const email = user.email;
    const [deleted, setDeleted] = useState(false);
    const [myToys, setMyToys] = useState([]);
    const [load, setLoad] = useState(false)
    
    useEffect(()=>{
        setLoad(true)
        fetch(`https://toy-market-server-8mjxd70mo-hasanisokay.vercel.app/myToys?email=${email}&sort=${sortType}`,{
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
    },[deleted, sortType])
       
    if(load){
        return <div className='flex justify-center items-center flex-col'>
         <h1 className='mt-8 text-2xl font-semibold'>Loading.... Please Wait</h1>
         <Lottie animationData={loadingJson} className='w-80'/>
         </div>
     }
    return (
        <div >
            <h1 className='text-2xl text-center'>Added Toys: {myToys.length}</h1>
            <p>Sort by price: { sortType && (sortType ==="ascending" ? "Lowest First" : "Highest First")}</p>
            <select className=" select select-info  max-w-xs" onChange={(e)=>setSortType(e.target.value)}>
                        <option value={""}></option>
                        <option value={"ascending"}>Lowest First</option>
                        <option value={"descending"}>Highest First</option>
                    </select>
            {myToys.map(toy=> <SingleToyCard toy={toy} deleted={deleted} setDeleted={setDeleted} key={toy._id}></SingleToyCard>)}            
        </div>
    );
};

export default MyToys;