import React, { useEffect, useState } from "react";
import "./Editorial.scss";
import { FaSquarespace } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlineControlCamera } from "react-icons/md";
import useEditorialStore from "../../store/EditorialStore/EditorialStore";
import Pictures from "../../components/Pictures/Pictures";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Editorial = ({searchValue, setSearchValue}) => {
  const navigate = useNavigate()
  const {collections, getCollections, photos, getPicturesEditorial, getPicturesSearch} = useEditorialStore()
  useEffect(()=> {
    getCollections("collections")
    getPicturesEditorial()
  },[])
  const searchImage =(e)=> {
    e.preventDefault()
    setSearchValue(e.target[0].value)
    getPicturesSearch(e.target[0].value)
    navigate("/search")
  }
  const [trendingSearches, setTtrendingSearches] = useState([
    {id: 1, title: "car"},
    {id: 2, title: "rain"},
    {id: 3, title: "snow"},
    {id: 4, title: "nature"},
    {id: 5, title: "forest"},
    {id: 6, title: "flowers"},
  ])
  const QuickSearch =(title)=> {
    getPicturesSearch(title)
    setSearchValue(title)
      navigate("/search")
  }
  return (
    <div className="editorial__container mt-[120px]">
      <header className="editorial__header">
        <div className="editorial__left">
          <h1 className="editorial__title">Unsplash</h1>
          <div className="editorial__left-item">
            <h2 className="editorial__subtitle">
              The internet’s source for visuals. Powered by creators everywhere.
            </h2>
            <div className="editorial__btn">
              <p className=" whitespace-nowrap">Supported by</p>
              <FaSquarespace className="w-[20px] h-[20px]" />
              <h2>SquareSpace</h2>
            </div>
          </div>
          <form onSubmit={searchImage} className="editorial__search">
            <IoSearch className="editorial__icon" />
            <input type="text" placeholder="Search high-resolution images" />
            <MdOutlineControlCamera className="control__icon cursor-pointer" />
          </form>
        </div>
        <div className="editorial__right">
          <div className="collections">
            <div className="flex w-[100%] collections__top">
              <h2 className="collections__title">Collections</h2>
              <button className="collections__btn">See all</button>
            </div>
              <div className="flex flex-col w-[100%] self-start mt-[10px] gap-[15px] h-[100%] justify-between">
              {
                collections?.map((item,index)=> {
                  return <div key={index} className={`flex gap-[8px] px-[8px] ${index > 3 ? "hidden" : ""}`}>
                    <img src={item?.preview_photos[0].urls?.raw} alt="collections" className="w-[32px] h-[32px] object-cover rounded-md"/>
                    <div>
                      <h1 className="text-[15px]">{item?.title}</h1>
                      <h2 className="text-[12px]">by {item?.user?.name}</h2>
                    </div>
                  </div>
                })
              }
              </div>
          </div>
          <div className="editorial__img rounded-xl overflow-hidden border-[1px] cursor-pointer ">
            {
              trendingSearches?.map((item,index)=> {
                return <button onClick={()=>QuickSearch(item.title)} key={index} className="border-[1px] px-[15px] py-[5px] rounded-lg">
                  {item?.title}
                </button>
              })
            }
            <div className="flex gap-[10px] items-center">
            <FaArrowTrendUp/>
            <p className=" underline">See trending searches</p>
            </div>
          </div>
        </div>
      </header>
      <section>
        <Pictures photos={photos}/>
      </section>
    </div>
  );
};

export default Editorial;
