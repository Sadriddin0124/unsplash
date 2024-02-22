import React, { useRef, useState } from "react";
import "./SinglePicture.scss"
import { IoCloseSharp } from "react-icons/io5";
import { GrNext, GrPrevious } from "react-icons/gr";
import {  FaHeart, FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import SinglePhotos from "./Singlephotos/SinglePhotos";

const SinglePicture = ({index, photos, singlePictureStatus, setSinglePictureStatus, downloadImage, setPropIndex}) => {
    let single = photos[index]
    const [scroll, setScroll]= useState(0)
    const scrollRef = useRef()
    const handleScroll =()=> {
      const { scrollTop } = scrollRef.current;
      setScroll(scrollTop)
    }
  return (
    <div  className={singlePictureStatus ? "singlepicture flex" : "hidden"}>
      <div className="blackcurtain" onClick={()=>setSinglePictureStatus(false)}></div>
        <button onClick={()=>setSinglePictureStatus(false)} className="single_close">
            <IoCloseSharp/>
        </button>
      <div ref={scrollRef} onScroll={handleScroll} className={`single__card ${scroll > 10 ? "z-[50] rounded-none top-0 transition-all" : "transition-all"}`}>
        <div className="single__card-top">
            <div className="single__card-left">
                <img src={single?.user?.profile_image?.small} alt={single?.alt__description} />
                <div>
                    <h3>{single?.user?.first_name}</h3>
                    <p>{single?.sponsorship?.tagline}</p>
                </div>
            </div>
            <div className="single__card-right">
                <div className="flex gap-[10px]">
                <button className="right__btn"><FaHeart/></button>
                <button className="right__btn self-start"><FaPlus/></button>
                </div>
                <button className="single__download" onClick={()=>downloadImage(single)}>
                    <p>Download</p>
                    <IoIosArrowDown />
                </button>
            </div>
        </div>
        <img className="img" src={single?.urls?.raw} alt="img" />
        <SinglePhotos photos={photos} downloadImage={downloadImage}/>
      </div>
      <div className="slider__btns">
        <button className="prev" disabled={index === 0 ? true : false} onClick={()=>setPropIndex(prev=> prev - 1)}><GrPrevious/></button>
        <button className="next" onClick={()=>setPropIndex(prev=> prev + 1)}><GrNext/></button>
      </div>
    </div>
  );
};

export default SinglePicture;
