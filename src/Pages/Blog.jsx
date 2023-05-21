import React, { useContext, useEffect, useState } from 'react';
import { BsPinAngleFill } from "react-icons/bs"
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const Blog = () => {
    document.title = "AquaLeapToy | Blog"
    const {user} = useContext(AuthContext);
    const [blogs, setBlogs] = useState([])
    const [pinned, setPinned] = useState(false);

    const handlePin = (blog) => {
        setPinned(!pinned)
        // saving pin blogs to db
        blog.authorEmail = user.email;
        delete blog._id

        fetch(`https://toy-market-server-virid.vercel.app/add-blog`,{
            method:"PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(blog)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire(
                    'Pinned',
                    'This blog has been added successfully.',
                    'success'
                  )
            }
        })
    }

    // getting all blogs
    useEffect(() => {
        fetch(`https://toy-market-server-virid.vercel.app/blogs`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='mx-10'>
            {blogs.map((blog,id) => <div key={id} className='my-10'>

                <div className='flex gap-4'>
                    <h1 className='font-medium text-xl'>{blog.title}</h1>
                    {user && <BsPinAngleFill title='Pin this blog' className={`w-6 h-6 text-gray-400 cursor-pointer`} onClick={() => handlePin(blog)}></BsPinAngleFill>}
                </div>
                <p className='text-lg'>{blog.details}</p>
            </div>)}

        </div>
    );
};

export default Blog;