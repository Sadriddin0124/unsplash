import React from 'react'
import { FaArrowDown, FaHeart, FaPlus } from 'react-icons/fa';

const SinglePhotos = ({photos, downloadImage}) => {
    let num = photos.length;
  let length1 = parseInt(num / 3);
  let length2 = parseInt((num / 3) * 2);
  let photosFilter1 = photos.filter((item, index) => index < length1);
  let photosFilter2 = photos.filter(
    (item, index) => index < length2 && length1 <= index
  );
  let photosFilter3 = photos.filter((item, index) => index >= length2);
  return (
  <div className="pictures">
     <div className='pictures__cards'>
     <div className='div'>
      {photosFilter1?.map((item, index) => {
            return (
              <div key={index} className="pictures__card relative">
                <img
                  src={item?.urls?.raw}
                  alt="pictures"
                  className="w-[100%]"
                />
                <div className="picture__card-top">
                  <div className="card_item">
                    <p className="text-[14px] text-white">Sponsored</p>
                    <div className="flex gap-[10px]">
                    <button  className={`px-[15px] py-[10px] rounded-md cursor-pointer bg-white pictures__btn`}>
                        <FaHeart />
                        </button>
                      <button className="bg-white px-[15px] py-[10px] rounded-md cursor-pointer pictures__btn ">
                      <FaPlus />
                      </button>
                    </div>
                  </div>
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
    <div className='div'>
      {photosFilter2?.map((item, index) => {
            return (
              <div key={index} className="pictures__card relative">
                <img
                  src={item?.urls?.raw}
                  alt="pictures"
                  className="w-[100%]"
                />
                <div className="picture__card-top">
                  <div className="card_item">
                    <p className="text-[14px] text-white">Sponsored</p>
                    <div className="flex gap-[10px]">
                    <button  className={`px-[15px] py-[10px] rounded-md cursor-pointer bg-white pictures__btn`}>
                        <FaHeart />
                        </button>
                      <button className="bg-white px-[15px] py-[10px] rounded-md cursor-pointer pictures__btn ">
                      <FaPlus />
                      </button>
                    </div>
                  </div>
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
    <div className='div'>
      {photosFilter3?.map((item, index) => {
            return (
              <div key={index} className="pictures__card relative">
                <img
                  src={item?.urls?.raw}
                  alt="pictures"
                  className="w-[100%]"
                />
                <div className="picture__card-top">
                  <div className="card_item">
                    <p className="text-[14px] text-white">Sponsored</p>
                    <div className="flex gap-[10px]">
                    <button  className={`px-[15px] py-[10px] rounded-md cursor-pointer bg-white pictures__btn`}>
                        <FaHeart />
                        </button>
                      <button className="bg-white px-[15px] py-[10px] rounded-md cursor-pointer pictures__btn ">
                      <FaPlus />
                      </button>
                    </div>
                  </div>
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
  )
}

export default SinglePhotos
