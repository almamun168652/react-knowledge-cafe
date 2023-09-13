
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog , handleAddToBookMark , handleMarkAsRead}) => {
    const {id , title , cover , author , author_img , reading_time , posted_date , hashtags} = blog; 
    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-6 items-center'>
                    <img className='w-14 h-14' src={author_img} alt="" />
                    <div>
                        <h1>{author}</h1>
                        <small>{posted_date}</small>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookMark(blog)} className='ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1>Title : {title}</h1>
            {
                hashtags.map((hash , idx) => {
                    return (
                        <span key={idx}><a href="#"> #{hash}</a></span>
                    )
                })
            }
            <br />
            <button onClick={()=> handleMarkAsRead(id, reading_time )} className='text-purple-600 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func, 
    handleMarkAsRead: PropTypes.func
}

export default Blog;