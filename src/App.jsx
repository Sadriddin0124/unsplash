import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Editorial from './pages/Editorial/Editorial'
import CoolTones from './pages/Cool Tones/CoolTones'
import SearchPage from './pages/SearchPage/SearchPage'
import useEditorialStore from './store/EditorialStore/EditorialStore'
import UnsplashImage from './components/Advertise/Advertise'

const App = () => {
  const {getPicturesEditorial} = useEditorialStore()
  useEffect(()=> {
    let result = localStorage.getItem("search")
    if (result === null) {
      localStorage.setItem("search", "car")
    }
    let filter = window.location.href.split("/").pop()
    getPicturesEditorial(filter !== "" ? filter : "all")
  },[])
  const [pageValue, setPageValue] = useState("")
  return (
    <div>
      <div className='h-[122px]'>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Editorial/>}></Route>
          <Route path="cooltones" element={<CoolTones />}></Route>
          <Route path="search" element={<SearchPage/>}></Route>
          <Route path="unsplash" element={<UnsplashImage/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App