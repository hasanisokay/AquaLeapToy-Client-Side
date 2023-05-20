import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleToyCard = ({ toy, setDeleted, deleted }) => {
    // card used in my toys
    const { toyName, photoURL, sellerName, email, price, rating, quantity, _id, description, category } = toy;
    const navigate = useNavigate();
    
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
        console.log(newCategory);
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

    const handleUpdate=(toy)=>{
        navigate(`/update-toy/${toy._id}`)
    }
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
                        <label htmlFor="my-modal-6" className='btn btn-sm bg-[#5dbea3] hover:bg-cyan-500 border-0' onClick={()=>handleUpdate(toy)} >Update</label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-sm bg-[#ffbd03] border-0 hover:bg-red-500'>Delete</button>
                    </div>
                </div>
            </div>
            
            
        </>
    );
};

export default SingleToyCard;