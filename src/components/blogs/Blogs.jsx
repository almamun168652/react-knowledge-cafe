import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMark , handleMarkAsRead}) => {

    const [blogs , setBlogs] = useState([]);

    useEffect(()=> {

        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));

    } , [])



    return (
        <div className="md:w-2/3">



            <h1 className="p-4 my-4 bg-slate-300 text-center font-semibold">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => {
                    return (
                        <Blog handleMarkAsRead={handleMarkAsRead} handleAddToBookMark={handleAddToBookMark} key={blog.id} blog={blog}></Blog>
                    )
                })
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark: PropTypes.func, 
    handleMarkAsRead: PropTypes.func
}

export default Blogs;