import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Lottie from "lottie-react";
import loadingJson from "../assets/jsonLottieFiles/loading.json"
const ToyDetails = () => {
    document.title = "AquaLeapToy | ToyDetails"
    const { id } = useParams()
    const [toy, setToy] = useState({})
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
        fetch(`http://localhost:5000/toy/${id}`)
            .then(res => res.json())
            .then(data => {

                setToy(data)
                setLoad(false)
            })
    }, [])
    console.log(toy);
    if (load) {
        return <div className='flex justify-center items-center flex-col'>
            <h1 className='mt-8 text-2xl font-semibold'>Loading.... Please Wait</h1>
            <Lottie animationData={loadingJson} className='w-80' />
        </div>
    }
    return (
        <div>
            <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 justify-center items-center w-[90%] mx-auto my-6 shadow-xl">
                <img src={toy.photoURL} alt="toy" className='h-96 rounded w-full' />
                <div className="">
                    <h2>Toy Name: {toy.toyName}</h2>
                    <h2>Seller: {toy.sellerName}</h2>
                    <h2>Seller Email: {toy.email}</h2>
                    <p>Description: {toy.description}</p>
                    <p>Price: ${toy.price}</p>
                    <p>Available Quantity: {toy.quantity}</p>
                    <p>Rating: {toy.rating}</p>
                </div>
            </div>
            {/* picture, toy name, seller name, seller email, price, rating, available quantity, and detail description) */}
        </div>
    );
};

export default ToyDetails;