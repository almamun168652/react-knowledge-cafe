
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setbookmarks] = useState([]);
  const [readingTime , setReadingTime] = useState(0);

  const handleAddToBookMark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setbookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id , time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    
    // remove bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setbookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-screen-lg mx-auto'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}



export default App
