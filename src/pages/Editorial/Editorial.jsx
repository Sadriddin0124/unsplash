import React, { useEffect } from "react";
import "./Editorial.scss";
import { FaSquarespace } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlineControlCamera } from "react-icons/md";
import useEditorialStore from "../../store/EditorialStore/EditorialStore";
import Pictures from "../../components/Pictures/Pictures";
import Collections from "../../assets/collections.avif"

const Editorial = () => {
  const {collections, getCollections, photos, getPicturesEditorial} = useEditorialStore()
  useEffect(()=> {
    getCollections("collections")
    getPicturesEditorial()
  },[])
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
          <div className="editorial__search">
            <IoSearch className="editorial__icon" />
            <input type="text" placeholder="Search high-resolution images" />
            <MdOutlineControlCamera className="control__icon cursor-pointer" />
          </div>
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
          <div className="editorial__img rounded-md overflow-hidden bg-black cursor-pointer">
            <div className="h-[100%] text-white p-[20px] flex flex-col justify-between">
              <h3 className="text-[12px] font-[700]">Discover Unsplash+</h3>
              <h2 className="text-[18px] font-[600]">Unlimited downloads.</h2>
              <h2 className="text-[18px] font-[600]">Full legal Protections.</h2>
              <h2 className="text-[18px] font-[600]">No ads.</h2>
            </div>
            <img src={Collections} alt="collections" className="w-[100%] h-[156px]"/>
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
