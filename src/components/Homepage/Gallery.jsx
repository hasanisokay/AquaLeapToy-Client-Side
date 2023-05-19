import React from 'react';
import toy1 from "../../assets/toys/toy1.jpg"
import toy2 from "../../assets/toys/toy2.jpg"
import toy3 from "../../assets/toys/toy3.jpg"
import toy4 from "../../assets/toys/toy4.jpg"
import toy5 from "../../assets/toys/toy5.jpg"
import toy6 from "../../assets/toys/toy6.jpg"
import toy7 from "../../assets/toys/toy7.jpg"
import toy8 from "../../assets/toys/toy8.jpg"
import toy9 from "../../assets/toys/toy9.jpg"
import { Link } from 'react-router-dom';
const Gallery = () => {
    return (
        <div className='mx-4'>
            <h1 className='text-center my-4 text-orange-600 text-2xl font-medium'>Featured Toy Gallery</h1>
            <p className='text-slate-800 w-5/6 mx-auto'>Step into our captivating Toy Gallery, a visual extravaganza that showcases a stunning collection of toys from various genres and eras. Immerse yourself in a wonderland of play, where imagination knows no bounds. Discover meticulously crafted action figures, enchanting dolls, intricate playsets, and more, each telling its own unique story.</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-1 gap-4'>
                <div className="card mx-auto w-96 bg-base-100 shadow-xl my-4">
                    <figure><img src={toy1}alt="toy" className='h-72 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Rubics cube
                        </h2>
                    </div>
                </div>
                <div className="card  mx-auto w-96 bg-base-100 shadow-xl my-4">
                    <figure><img src={toy2}alt="toy" className='h-72 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Wooden Plane
                        </h2>
                    </div>
                </div>
                <div className="card w-96  mx-auto bg-base-100 shadow-xl my-4">
                    <figure><img src={toy3}alt="toy" className='h-72 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Weidemann Hoftrac
                        </h2>
                    </div>
                </div>
                <div className="card w-96  mx-auto bg-base-100 shadow-xl my-4">
                    <figure><img src={toy4}alt="toy"  className='h-72 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           Tractor
                        </h2>
                    </div>
                </div>
                <div className="card w-96  mx-auto bg-base-100 shadow-xl my-4">
                    <figure><img src={toy5}alt="toy" className='h-72 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Blocks
                        </h2>
                    </div>
                </div>
                <div className="card w-96  mx-auto bg-base-100 shadow-xl my-4">
                    <figure><img src={toy6}alt="toy" className='h-72 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Animal Toys
                        </h2>
                    </div>
                </div>
                <div className="card w-96  mx-auto bg-base-100 shadow-xl my-4">
                    <figure><img src={toy7}alt="toy" className='h-72 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Nature Adventures
                        </h2>
                    </div>
                </div>
                <div className="card w-96  mx-auto bg-base-100 shadow-xl my-4">
                    <figure><img src={toy8}alt="toy" className='h-72 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Science Toys
                        </h2>
                    </div>
                </div>
                <div className="card w-96  mx-auto bg-base-100 shadow-xl my-4">
                    <figure><img src={toy9}alt="toy" className='h-72 w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Baby Girl puppet toys
                        </h2>
                    </div>
                </div>
            </div>
            <div className='text-center mb-4'><Link to={"/all-toys"} className='btn bg-orange-400 border-0 hover:bg-slate-500'>See All Toys</Link></div>
        </div>
    );
};

export default Gallery;