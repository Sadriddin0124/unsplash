import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import "./Navbar.scss";
import { IoSearch } from "react-icons/io5";
import { MdOutlineControlCamera } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ImBell } from "react-icons/im";
import useEditorialStore from "../../store/EditorialStore/EditorialStore";
import User from "../../assets/user.avif"
const Navbar = ({searchValue, setSearchValue}) => {
  const {search, getPicturesSearch} = useEditorialStore()
  const navigate = useNavigate()
  const url = window.location.href.split("/").pop()
    useEffect(()=>{
    getPicturesSearch()
  },[])
  const navRef = useRef();
  const [navbarLink, setNavbarLink] = useState([
    { id: 1, text: "Cool Tones",path: "/cooltones", search: "cooltones" },
    { id: 2, text: "Wallpaper", search: "wallpaper" },
    { id: 3, text: "Nature", search: "nature" },
    { id: 4, text: "3D Renders", search: "3drenders" },
    { id: 5, text: "Travel", search: "travel" },
    { id: 6, text: "Architecture & Interiors", search: "architecture" },
    { id: 7, text: "Textures & Patterns", search: "textures" },
    { id: 8, text: "Street Photography", search: "streetphotography" },
    { id: 9, text: "Film", search: "film" },
    { id: 10, text: "Experimental", search: "experimental" },
    { id: 11, text: "Animals", search: "animals" },
    { id: 12, text: "Fashion & Beauty", search: "fashion" },
    { id: 13, text: "People", search: "people" },
    { id: 14, text: "Spirituality", search: "spirituality" },
    { id: 15, text: "Business & Work", search: "business" },
    { id: 16, text: "Food & Drink", search: "fooddrink" },
    { id: 17, text: "Health & Wellness", search: "health" },
    { id: 18, text: "Sports", search: "sports" },
    { id: 19, text: "Current Events", search: "current events" },
  ]);
  const handleNav = (scrollAmount) => {
    navRef.current.scrollLeft += scrollAmount;
  };
  const [activeREsult, setActiveResult] = useState(false)
  const searchImage =(e)=> {
    let result = e.target.value
    if(result === ""){
      setActiveResult(false)
    }else{
      setActiveResult(true)
    }
    setSearchValue(result)
  }
  const searchAll =(e)=> {
    e.preventDefault()
    getPicturesSearch(e.target[1].value)
    setSearchValue(e.target[1].value)
    navigate("/search")
    setActiveResult(false)
  }
  return (
    <nav className="navbar fixed bg-white">
      <div className="navbar__top">
        <div className="w-[32px] h-[32px] whitespace-nowrap">
          <span className=" opacity-0">efefr</span>
          <Link to="/" onClick={() => LinkActive({id: 0.1})}>
          <img src={Logo} alt="logo" className="w-[32px] h-[32px] top-[23px] resize-none absolute"/>
          </Link>
        </div>
        <form className="navbar__search" onSubmit={searchAll}>
          <button type="submit">
          <IoSearch className="search__icon cursor-pointer"  />
          </button>
          <input  onChange={searchImage} value={searchValue} type="text" placeholder="Search high-resolution images" />
          <MdOutlineControlCamera className="control__icon cursor-pointer" />
          <div className={` ${activeREsult ? "search__results" : "hidden"}`}>
            {
              search?.map((item,index)=> {
                return <div key={index} className="w-[48%] h-[100%] flex">
                  <img className="w-[100%] h-[100%] object-cover" src={item?.urls?.raw} alt={item?.alt_description} />
                </div>
              })
            }
          </div>
            <Link to="/search" className={`hover:text-black text-[#767676] absolute z-[24] left-0 w-[100%] bg-white p-[10px] text-center top-[345px] border-x-[1px] border-b-[1px] rounded-md rounded-t-none ${activeREsult ? "block" : "hidden"}`}>show more</Link>
        </form>
        <ul className="navbar__list">
          <li className="none__link">
            <Link className="navbar__link">Advertise</Link>
          </li>
          <li className="none__link">
            <Link className="navbar__link">Blog</Link>
          </li>
          <li className="none__link">
            <Link className="navbar__link unsplash">Unsplash+</Link>
          </li>
          <li className="navbar__line"></li>
          <li >
            <button className="navbar__btn">Submit a photo</button>
          </li>
          <li className="navbar__bell">
          <ImBell className="text-[20px] text-[#767676] rotate-[-25deg]"/>
          </li>
          <li className="w-[32px] ">
            <img src={User} alt="user" className="w-[100%] h-[100%] rounded-full"/>
          </li>
          <li className="navbar__menu">
            <MdOutlineMenu className="menu" />
          </li>
        </ul>
      </div>
      <div className={`${url === "search" ? "hidden" : "flex"} navbar__bottom`}>
        <ul className="flex ml-[20px] gap-[20px] navbar__bottom-left">
          <li >
            <Link
            to='/'
              className={`navbar__link  ${
                url === ""
                  ? "border-b-[3px] border-b-[black] pb-[15px] text-black"
                  : ""
              }`}
            >
              Editorial
            </Link>
          </li>
          <li>
            <Link
              className={`navbar__link  ${
                url === "following"
                  ? "border-b-[3px] border-b-[black] pb-[15px] text-black"
                  : ""
              }`}
            >
              Following
            </Link>
          </li>
          <li>
            <Link
              className={`navbar__link  ${
                url === "unsplash+"
                  ? "border-b-[3px] border-b-[black] pb-[15px] xl:pb-[13px] text-black"
                  : ""
              }`}
            >
              Unsplash+
            </Link>
          </li>
          <li className="navbar__line relative z-[4]"></li>
        </ul>
        <ul className="bottom__list px-[40px]" ref={navRef}>
          <div className="absolute bottom-[20px] left-[260px] bg-white left_arrow px-[20px] py-[5px]">
            <IoIosArrowBack
              className="cursor-pointer text-[20px] text-[#767676] "
              onClick={() => handleNav(-300)}
            />
          </div>
          {navbarLink?.map((item, index) => {
            return (
              <li onClick={()=>LinkActive(item)} key={index} className="bottom__list-item relative">
                <span className={`absolute top-[-13px] text-[10px] text-[#767676] ${index === 0 ? "block" : "hidden"}`}>Featured</span>
                <Link to={item.path} className={`bottom__link pb-[10px] border-b-[3px] ${url === item.search ? "border-b-[3px] border-[black] pb-[10px] text-black" : "border-[transparent]"}`}>{item.text}</Link>
              </li>
            );
          })}
          <div className="absolute bottom-[20px] right-[2px] bg-white left_arrow px-[20px] py-[5px]">
            <IoIosArrowForward
              className="cursor-pointer text-[20px] text-[#767676]"
              onClick={() => handleNav(300)}
            />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
