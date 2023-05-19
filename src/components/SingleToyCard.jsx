import React from 'react';
import Swal from 'sweetalert2';

const SingleToyCard = ({ toy, setDeleted, deleted }) => {
    // card used in my toys
    const { toyName, photoURL, sellerName, email, price, rating, quantity, _id, description, category } = toy;
    
    const handleEdit = (id)=>{

    }
    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/myToys/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                setDeleted(!deleted)
                Swal.fire(
                    'Toy Deleted',
                    'Your Toy has been deleted successfully.',
                    'success'
                  )
            }
        })
    }
    return (
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
                    <button onClick={()=>handleEdit(_id)} className='btn btn-sm bg-[#5dbea3] hover:bg-cyan-500 border-0'>Edit</button>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-sm bg-[#ffbd03] border-0 hover:bg-red-500'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleToyCard;