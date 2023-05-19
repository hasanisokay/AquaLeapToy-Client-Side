import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import CreatableSelect from "react-select/creatable";

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
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
    const handleAddToy = (e) => {
        e.preventDefault()
        const form = e.target;
        const toyName = form.toyName.value;
        const photoURL = form.photoURL.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const time = new Date()
        const category = selectedOption.map(select=>select.value)
        const input = { toyName, photoURL, sellerName, email, price, rating, quantity, description, time, category }
        console.log(input);
    }

    return (
        <div className='lg:my-8 my-4'>
            <h1 className='text-2xl text-center font-semibold'>Add A Toy</h1>
            <p className='text-lg text-center'>Please submit the form below to add a toy.</p>
            <form onSubmit={handleAddToy} className='lg:w-[70%] mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name Of the Toy</span>
                    </label>
                    <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Photo URL</span>
                    </label>
                    <input type="url" name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name='sellerName' placeholder="Seller" defaultValue={user.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" defaultValue={user.email} className="input input-bordered" />
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
                    <input type="number" name='price' placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="Rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" name='quantity' placeholder="Available Quantity" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name='description' placeholder="Description" className="input input-bordered" />
                </div>
                <div className='mt-4'>
                <input type="submit" value="Add Toy" className='btn' />
                </div>

            </form>
        </div>
    );
};

export default AddAToy;