import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PinnedBlogs = () => {
    const {user} = useContext(AuthContext)
    const [savedBlogs, setSavedBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://toy-market-server-virid.vercel.app/saved-blogs?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSavedBlogs(data);
            })
    },[user])
    if(user && savedBlogs !==[]){
        return (
            <div className='mx-10'>
                <h1 className='text-center font-medium text-2xl'>Pinned Blogs</h1>
                {savedBlogs?.map((blog,index)=><div key={blog._id}> <h1 className='font-medium my-2'>{index+1}. {blog.title}</h1> 
                <p>{blog.details.substring(0,500)}...</p>
                </div> )}
            </div>
        );
    }
    return

};

export default PinnedBlogs;