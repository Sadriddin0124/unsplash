import React from "react";
import "./SinglePicture.scss"
import { IoCloseSharp } from "react-icons/io5";
import { GrNext, GrPrevious } from "react-icons/gr";
import {  FaHeart, FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Pictures from "../Pictures/Pictures";

const SinglePicture = ({index, photos, singlePictureStatus, setSinglePictureStatus}) => {
    let single = photos[index]
  return (
    <div onClick={()=>setSinglePictureStatus(false)} className={singlePictureStatus ? "singlepicture" : "hidden"}>
      <div className="single__card">
        <button onClick={()=>setSinglePictureStatus(false)} className="single_close">
            <IoCloseSharp/>
        </button>
        <div className="single__card-top">
            <div className="single__card-left">
                <img src={single?.user?.profile_image?.small} alt={single?.alt__description} />
                <div>
                    <h3>{single?.user?.first_name}</h3>
                    <p>Made to Change</p>
                </div>
            </div>
            <div className="single__card-right">
                <button className="right__btn"><FaHeart/></button>
                <button className="right__btn"><FaPlus/></button>
                <button className="single__download">
                    <p>Download</p>
                    <IoIosArrowDown />
                </button>
            </div>
        </div>
        <img src={single?.urls?.raw} alt="img" />
      </div>
      <div className="slider__btns">
        <button className="prev"><GrPrevious/></button>
        <button className="next"><GrNext/></button>
      </div>
      {/* <Pictures photos={photos}/> */}
    </div>
  );
};

export default SinglePicture;
