import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Lottie from "lottie-react";
import loadingJson from "../assets/jsonLottieFiles/loading.json"
import { useNavigate } from 'react-router-dom';
const AllToys = () => {
    document.title = "AquaLeapToy | AllToys"
    const { loading, setLoading } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    const [totalFound, setTotalFound] = useState(-1)
    const [toysPerPage, setToysPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(0)
    const [totalToys, setTotalToys] = useState(1)
    let totalPages = Math.ceil(totalToys / toysPerPage)
    let pageNumbers = [...Array(totalPages ? totalPages : 20).keys()] || 2;
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault()
        const searchText = e.target.search.value
        console.log(searchText);
        fetch(`http://localhost:5000/toys/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                setTotalFound(data.length)
            })
    }
    const handleToyDetails = (id) => {
        navigate(`/toy-details/${id}`)
    }
    const handleSelectToysPerPage = e => {
        setToysPerPage(e.target.value);
        setCurrentPage(0)
    }
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/totalToys`)
            .then(res => res.json())
            .then(data => {
                setTotalToys(data.result)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/toys?page=${currentPage}&limit=${toysPerPage}`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                setLoading(false)
            })
    }, [currentPage, toysPerPage])



    // useEffect(() => {
    //     fetch("http://localhost:5000/allToys")
    //         .then(res => res.json())
    //         .then(data => setAllToys(data))
    // }, [])
    // const { toyName, photoURL, sellerName, email, price, rating, quantity, _id, description, category } = toy;

    if (loading) {
        return <div className='flex justify-center items-center flex-col'>
            <h1 className='mt-8 text-2xl font-semibold'>Loading.... Please Wait</h1>
            <Lottie animationData={loadingJson} className='w-80' />
        </div>
    }

    return (
        <>
            <form className='flex gap-4 my-6 justify-center' onSubmit={handleSearch}>
                <input type="text" name='search' placeholder="Search for toys" className="input input-bordered input-primary max-w-xs" />
                <div><input type="submit" value={"Search"} className='btn bg-orange-400 border-0' /></div>
            </form>
            {
                (totalFound >= 0) && (
                    <p className='text-lg ml-10'>Total Search Result: <span className='font-bold'>{totalFound}</span> </p>
                )
            }
            <div className='lg:my-8 my-6 lg:mx-8 mx-4 '>
                {allToys.map(toy => <div key={toy._id} className="flex py-4 items-center justify-evenly gap-6 shadow-xl mx-auto my-2">
                    <div > <img src={toy.photoURL} alt="toy" className='h-40 w-96 rounded' /></div>
                    <div className='flex gap-6 mx-10 items-center'>
                        <div>
                            <h2>Name: <span className='font-medium'>{toy.toyName}</span></h2>
                            <h2>Seller: <span className='font-medium'>{toy.sellerName}</span></h2>
                            <p>Price: $<span className='font-medium'>{toy.price}</span></p>
                            <p>Available Quantity: <span className='font-medium'>{toy.quantity}</span></p>
                            <p>Rating: <span className='font-medium'>{toy.rating}</span></p>
                            <p>Category: {toy.category?.map((t, idx) => <span className='mr-1 font-medium' key={idx}>{t}</span>)} </p>
                            <p className='w-[90%]'>{toy.description}</p>
                        </div>
                        <div>
                            <button className="btn bg-orange-400 border-0 " onClick={() => handleToyDetails(toy._id)}>View Details</button>
                        </div>
                    </div>

                </div>)
                }
            </div>
            {(totalFound < 0) && <>
                <div className='flex items-center justify-center gap-8'>
                    <span>Toys Per page: {toysPerPage} </span>
                    <select className=" select select-info  max-w-xs" onChange={handleSelectToysPerPage}>
                        <option defaultValue={""}></option>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
                <div className='text-center my-4'>
                    {
                        pageNumbers?.map(number => <button className={
                            (currentPage === number ? "bg-yellow-500 btn ml-4 hover:bg-blue-500 border-0" : "btn ml-4")}
                            onClick={() => setCurrentPage(number)}
                            key={number}>{number}</button>)
                    }
                </div>
            </>}
        </>
    );
};

export default AllToys;