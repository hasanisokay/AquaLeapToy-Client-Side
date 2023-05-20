import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CreatableSelect from "react-select/creatable";
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const UpdateToy = () => {
    const navigate = useNavigate()
    const loadedToy= useLoaderData()
    const [toy,setToy] = useState(loadedToy);
    const { toyName, photoURL, sellerName, email, price, rating, quantity, _id, description, category } = toy;
    const {user} = useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState("");

    const handleUpdateToy = (e)=>{
        e.preventDefault()
        const id = _id
        const form = e.target;
        const toyName = form.toyName.value;
        const photoURL = form.photoURL.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const price = parseInt(form.price.value);
        const rating = parseInt(form.rating.value);
        const quantity = parseInt(form.quantity.value);
        const description = form.description.value;
        const time = new Date()
        let updatedCategory
        if(selectedOption!==""){
            updatedCategory = selectedOption.map(c=>c.value)
        }
        else(
            updatedCategory = category
        )
        
        const updatedToy = { toyName, photoURL, sellerName, email, price, rating, quantity, description, time, category:updatedCategory }
     
        fetch(`http://localhost:5000/updateToys/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Toy Updated',
                    'Your Toy has been updated successfully.',
                    'success'
                  )
                  navigate("/my-toys")
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Try again'
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
        <div>
            <form onSubmit={handleUpdateToy} className='lg:w-[70%] mx-auto'>
           
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name Of the Toy</span>
                    </label>
                    <input type="text" name='toyName' placeholder="Toy Name" defaultValue={toyName} required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Photo URL</span>
                    </label>
                    <input type="url" name='photoURL' placeholder="Photo URL" defaultValue={photoURL} required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name='sellerName' placeholder="Seller" defaultValue={sellerName} required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" disabled required defaultValue={user.email} className="input input-bordered" />
                </div>
                <div>
                <label className="label">
                        <span className="label-text">Select Category</span>
                    </label>
                <CreatableSelect
                   className="" 
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    isMulti
                />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name='price' placeholder="Price" defaultValue={price} required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="Rating" defaultValue={rating} required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" name='quantity' placeholder="Available Quantity" defaultValue={quantity} required className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder="Description" defaultValue={description} required className="input input-bordered" />
                </div>
                <div className='mt-4'>
                <input type="submit" value="Update" className='btn' />
                </div>

            </form>
        </div>
    );
};

export default UpdateToy;