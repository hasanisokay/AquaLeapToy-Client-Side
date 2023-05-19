import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import SingleToyCard from '../components/SingleToyCard';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const email = user.email;
    const [deleted, setDeleted] = useState(false);
    const [myToys, setMyToys] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myToys?email=${email}`,{
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setMyToys(data)
        })
    },[deleted])
    return (
        <div >
            {myToys.map(toy=><SingleToyCard toy={toy} deleted={deleted} setDeleted={setDeleted} key={toy._id}/>)}            
        </div>
    );
};

export default MyToys;