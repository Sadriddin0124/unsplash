import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Editorial from './pages/Editorial/Editorial'
import CoolTones from './pages/Cool Tones/CoolTones'
import SearchPage from './pages/SearchPage/SearchPage'
import UnsplashImage from './components/Advertise/Advertise'

const App = () => {
  const [searchValue, setSearchValue] = useState("")
  useEffect(()=> {
    let result = localStorage.getItem("search")
    if (result === null) {
      localStorage.setItem("search", "car")
    }
  },[])
  return (
    <div>
      <div className='h-[122px]'>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Editorial searchValue={searchValue} setSearchValue={setSearchValue}/>}></Route>
          <Route path="cooltones" element={<CoolTones />}></Route>
          <Route path="search" element={<SearchPage searchValue={searchValue}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
