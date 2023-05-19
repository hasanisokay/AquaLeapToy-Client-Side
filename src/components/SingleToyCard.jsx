import React, { useState } from 'react';
import Swal from 'sweetalert2';
import CreatableSelect from "react-select/creatable";
const SingleToyCard = ({ toy, setDeleted, deleted }) => {
    // card used in my toys
    const { toyName, photoURL, sellerName, email, price, rating, quantity, _id, description, category } = toy;
    
    const [selectedOption, setSelectedOption] = useState(category);
    const [updatedToyName, setUpdatedToyName] = useState(toyName)
    const [updatedPhotoURL, setUpdatedPhotoURL] = useState(photoURL)
    const [updatedSellerName, setUpdatedSellerName] = useState(sellerName)
    const [updatedPrice, setUpdatedPrice] = useState(price)
    const [updatedRating, setUpdatedRating] = useState(rating)
    const [updatedQuantity, setUpdatedQuantity] = useState(quantity)
    const [updatedDescription, setUpdatedDescription] = useState(description)

    const handleEdit = (id) => {
        const newCategory = selectedOption?.map(o=>o.value) || [];
        const updatedValue = { toyName:updatedToyName, photoURL:updatedPhotoURL, sellerName:updatedSellerName, price:updatedPrice, rating:updatedRating, quantity:updatedQuantity, description:updatedDescription, category: newCategory };
        
        fetch(`http://localhost:5000/updateToys/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(updatedValue)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                setDeleted(!deleted)
            }
            console.log(data);
        })
 
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myToys/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setDeleted(!deleted)
                            Swal.fire(
                                'Toy Deleted',
                                'Your Toy has been deleted successfully.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    const options = [
        { value: "OutdoorToy", label: "OutdoorToy" },
        { value: "Vehicle", label: "Vehicle" },
        { value: "BuildingBlocks", label: "BuildingBlocks" },
        { value: "ArtsAndCrafts", label: "ArtsAndCrafts" },
        { value: "Puzzle", label: "Puzzle" },
        { value: "Doll", label: "Doll" },
        { value: "BoardGames", label: "BoardGames" },
        { value: "Science", label: "Science" },
    ];
    return (
        <>

            <div className="flex gap-4 lg:w-[90%] mx-auto my-4">
                <div>
                    <img src={photoURL} className='h-32 w-80 rounded' alt="" />
                </div>
                <div className='flex justify-between w-full items-center'>
                    <div>
                        <h2 className="font-medium">{toyName}</h2>
                        <p>Description: <span className='font-medium'>{description}</span></p>
                        <p>Quantity: <span className='font-medium'>{quantity}</span></p>
                        <p>Price: <span className='font-medium'>{price}</span></p>
                        <p>Rating: <span className='font-medium'>{rating}</span></p>
                    </div>
                    <div className='flex flex-col gap-4 items-center justify-center'>
                        <label htmlFor="my-modal-6" className='btn btn-sm bg-[#5dbea3] hover:bg-cyan-500 border-0'>Update</label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-sm bg-[#ffbd03] border-0 hover:bg-red-500'>Delete</button>

                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl ">
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name Of the Toy</span>
                            </label>
                            <input type="text" name='toyName' onChange={(e)=>setUpdatedToyName(e.target.value)} defaultValue={toyName} placeholder="Toy Name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Photo URL</span>
                            </label>
                            <input type="url" name='photoURL' defaultValue={photoURL} onChange={(e)=>setUpdatedPhotoURL(e.target.value)} placeholder="Photo URL" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' placeholder="Seller" onChange={(e)=>setUpdatedSellerName(e.target.value)}  required defaultValue={sellerName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" disabled defaultValue={email} className="input input-bordered" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Select Category</span>
                            </label>
                            <CreatableSelect
                                className=""
                                onChange={(e)=>setSelectedOption(e)}
                                options={options}
                                isMulti
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="Price" onChange={(e)=>setUpdatedPrice(e.target.value)}  defaultValue={price} required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name='rating' placeholder="Rating" onChange={(e)=>setUpdatedRating(e.target.value)}  defaultValue={rating} required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Available Quantity" onChange={(e)=>setUpdatedQuantity(e.target.value)}  defaultValue={quantity} required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" onChange={(e)=>setUpdatedDescription(e.target.value)}  defaultValue={description} required className="input input-bordered" />
                        </div>

                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Cancel</label>
                            <label htmlFor="my-modal-6" className="btn" onClick={() => handleEdit(_id)}>Update</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SingleToyCard;