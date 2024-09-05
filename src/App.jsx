import Navbar from './nav fld/nav'
import Hero from './hero-fld/hero'
import Post from './post fld/post'
import Category from './category fld/category'
import Contact from './contact us fld/contact'
import Allsportsblog from './sports blog/niraj-blog'
import Allspblog from './sports blog/allsportblog/allsp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HomePage from './page/Home'





function App() {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<HomePage />}></Route>
          <Route path='/post' element={<Post />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/sportpage' element={<Allspblog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/blog-detail/:name' element={<Allsportsblog />}></Route>
        </Routes>
        <Contact />
      </BrowserRouter>
    </>
  )
}

export default App
