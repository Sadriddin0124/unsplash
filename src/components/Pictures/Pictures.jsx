import React, { useState } from "react";
import "./Pictures.scss";
import { FaHeart } from "react-icons/fa";
import { FaArrowDown, FaPlus } from "react-icons/fa6";
import SinglePicture from "../SinglePicture/SinglePicture";
import Advertise from "../Advertise/Advertise";

const Pictures = ({photos}) => {
  let num = photos.length;
  let length1 = parseInt(num / 3);
  let length2 = parseInt((num / 3) * 2);
  let photosFilter1 = photos.filter((item, index) => index < length1);
  let photosFilter2 = photos.filter(
    (item, index) => index < length2 && length1 <= index
  );
  let photosFilter3 = photos.filter((item, index) => index >= length2);
  const [heartId, setHeartId] = useState("")
  const downloadImage =(item)=> {
    const imageUrl = item.urls.raw
    console.log(item);
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${item.slug}.jpg`); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading the image: ', error);
      });
  }
  const [propIndex, setPropIndex] = useState(0)
  const [pictures, setPictures] = useState([])
  const [singlePictureStatus, setSinglePictureStatus] = useState(false)
  const singlePhoto =(filter, index)=> {
    setPropIndex(index)
    setPictures(filter)
    setSinglePictureStatus(true)
  }
  return (
    <div className="pictures">
      <SinglePicture downloadImage={downloadImage} index={propIndex} setPropIndex={setPropIndex} photos={pictures} setSinglePictureStatus={setSinglePictureStatus} singlePictureStatus={singlePictureStatus}/>
      <div className="pictures__cards">
        <div className="div">
          <Advertise/>
          {photosFilter1?.map((item, index) => {
            return (
              <div key={index} className="pictures__card relative">
                <img
                  src={item?.urls?.raw}
                  alt="pictures"
                  className=" max-w-[100%]"
                />
                <div   className={`picture__card-top`} >
                  <div className="card_item">
                    <p className="text-[14px] text-white">Sponsored</p>
                    <div className="flex gap-[10px]">
                    <button onClick={()=>setHeartId(prev=> prev != item.id + "a" ? prev = item.id + "a" : prev = "")} className={`px-[15px] py-[10px] rounded-md cursor-pointer ${heartId === item.id + "a" ? "bg-red-500 text-white opacity-[1]" : "bg-white "} pictures__btn`}>
                        <FaHeart />
                        </button>
                      <button className="bg-white px-[15px] py-[10px] rounded-md cursor-pointer pictures__btn ">
                      <FaPlus />
                      </button>
                    </div>
                  </div>
                <div className="single__curtain " onClick={()=>singlePhoto(photosFilter1, index)}></div>
                <div className="w-[100%] flex justify-between items-center ">
                  <div className="flex gap-[5px] items-center profile__img">
                    <img src={item?.user?.profile_image?.small} alt="profile" className="rounded-full" />
                    <h1 className="text-white">{item?.user?.first_name}</h1>
                  </div>
                  <button onClick={()=>downloadImage(item)} className="bg-white rounded-md cursor-pointer pictures__btn download__btn">
                    <p>Download</p>
                    <FaArrowDown className="download__icon"/></button>
                </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="div">
        {photosFilter2?.map((item, index) => {
            return (
              <div key={index} className="pictures__card relative">
                <img
                  src={item?.urls?.raw}
                  alt="pictures"
                  className=" max-w-[100%]"
                />
                <div   className={`picture__card-top`} >
                  <div className="card_item">
                    <p className="text-[14px] text-white">Sponsored</p>
                    <div className="flex gap-[10px]">
                    <button onClick={()=>setHeartId(prev=> prev != item.id + "a" ? prev = item.id + "a" : prev = "")} className={`px-[15px] py-[10px] rounded-md cursor-pointer ${heartId === item.id + "a" ? "bg-red-500 text-white opacity-[1]" : "bg-white "} pictures__btn`}>
                        <FaHeart />
                        </button>
                      <button className="bg-white px-[15px] py-[10px] rounded-md cursor-pointer pictures__btn ">
                      <FaPlus />
                      </button>
                    </div>
                  </div>
                <div className="single__curtain " onClick={()=>singlePhoto(photosFilter2, index)}></div>
                <div className="w-[100%] flex justify-between items-center ">
                  <div className="flex gap-[5px] items-center profile__img">
                    <img src={item?.user?.profile_image?.small} alt="profile" className="rounded-full" />
                    <h1 className="text-white">{item?.user?.first_name}</h1>
                  </div>
                  <button onClick={()=>downloadImage(item)} className="bg-white rounded-md cursor-pointer pictures__btn download__btn">
                    <p>Download</p>
                    <FaArrowDown className="download__icon"/></button>
                </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="last__column">
        {photosFilter3?.map((item, index) => {
            return (
              <div key={index} className="pictures__card relative">
                <img
                  src={item?.urls?.raw}
                  alt="pictures"
                  className=" max-w-[100%]"
                />
                <div   className={`picture__card-top`} >
                  <div className="card_item">
                    <p className="text-[14px] text-white">Sponsored</p>
                    <div className="flex gap-[10px]">
                    <button onClick={()=>setHeartId(prev=> prev != item.id + "a" ? prev = item.id + "a" : prev = "")} className={`px-[15px] py-[10px] rounded-md cursor-pointer ${heartId === item.id + "a" ? "bg-red-500 text-white opacity-[1]" : "bg-white "} pictures__btn`}>
                        <FaHeart />
                        </button>
                      <button className="bg-white px-[15px] py-[10px] rounded-md cursor-pointer pictures__btn ">
                      <FaPlus />
                      </button>
                    </div>
                  </div>
                <div className="single__curtain " onClick={()=>singlePhoto(photosFilter3, index)}></div>
                <div className="w-[100%] flex justify-between items-center ">
                  <div className="flex gap-[5px] items-center profile__img">
                    <img src={item?.user?.profile_image?.small} alt="profile" className="rounded-full" />
                    <h1 className="text-white">{item?.user?.first_name}</h1>
                  </div>
                  <button onClick={()=>downloadImage(item)} className="bg-white rounded-md cursor-pointer pictures__btn download__btn">
                    <p>Download</p>
                    <FaArrowDown className="download__icon"/></button>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pictures;
