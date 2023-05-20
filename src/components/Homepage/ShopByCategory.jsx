import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const ShopByCategory = ({user}) => {
    const navigate = useNavigate();
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("Pretend Play")
    const handleToyDetails = (id) => {
        if(!user){
            Swal.fire(
                'Login Please',
                'You need to login first to see details',
                'question'
              )
        }
        navigate(`/toy-details/${id}`)
    }
    useEffect(() => {
        fetch(`https://toy-market-server-8mjxd70mo-hasanisokay.vercel.app/category/${activeTab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab])
    return (
        <div>
            <h1 className="font-semibold text-2xl text-transparent text-center bg-clip-text bg-gradient-to-r from-slate-600 to-orange-600 to-4%">Shop By Category</h1>
            <div className='text-center my-4'>
                <button className={` p-3 w-40 rounded-tl-lg rounded-bl-lg transition-colors duration-700 border-r ${activeTab === "Pretend Play" ? 'bg-[#BAD1C2] font-semibold' : 'bg-zinc-400'} `} onClick={() => setActiveTab("Pretend Play")}>Pretend Play Toys</button>
                <button className={` p-3 w-40  transition-colors duration-700 border-r ${activeTab === "Educational" ? 'bg-[#BAD1C2] font-semibold ' : 'bg-zinc-400'} `} onClick={() => setActiveTab("Educational")} >Educational Toys</button>
                <button className={` p-3 w-40 rounded-tr-lg rounded-br-lg transition-colors duration-700 ${activeTab === "OutdoorToy" ? 'bg-[#BAD1C2] font-semibold' : 'bg-zinc-400'} `} onClick={() => setActiveTab("OutdoorToy")} >Outdoor Toys</button></div>

            <div className='grid lg:grid-cols-2 lg:gap-8 gap-4 grid-cols-1 mx-8 my-6'>
                {toys.map(toy => <div key={toy._id}>
                    <div className="card card-compact w-[80%] mx-auto rounded-lg  bg-gradient-to-r from-cyan-500 to-zinc-500 shadow-xl">
                        <img src={toy.photoURL} alt="toy" className='h-64 w-full' />
                        <div className='card-body'>
                        <div>
                            <h2>Name: <span className='font-medium'>{toy.toyName}</span></h2>

                            <p>Price: $<span className='font-medium'>{toy.price}</span></p>

                            <p>Rating: <span className='font-medium'>{toy.rating}</span></p>
                            <p>Category: {toy.category?.map((t, idx) => <span className='mr-1 font-medium' key={idx}>{t}</span>)} </p>
                        </div>
                        <div>
                            <button className="btn bg-red-400 border-0 " onClick={() => handleToyDetails(toy._id)}>View Details</button>
                        </div>
                        </div>
                    </div>

                </div>)}
            </div>
        </div>
    );
};

export default ShopByCategory;