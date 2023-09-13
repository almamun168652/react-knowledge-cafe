import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className="md:w-1/3">
            <h1 className='m-4 p-4 bg-blue-400 text-center font-semibold'>Reading Time: {readingTime} min</h1>
            <h1 className='m-4 p-4 bg-slate-400 text-center font-semibold'>Book Marks: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark , idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;