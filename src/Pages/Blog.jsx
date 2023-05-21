import React, { useEffect, useState } from 'react';

const Blog = () => {
    document.title = "AquaLeapToy | Blog"
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch(`https://toy-market-server-virid.vercel.app/blogs`)
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='mx-10'>
            {blogs.map(blog=><div key={blog._id} className='my-4'>
                <h1 className='font-medium text-xl'>{blog.title}</h1>
                <p className='text-lg'>{blog.details}</p>
            </div>)}

        </div>
    );
};

export default Blog;