import axios from "axios";
import React, { useState, useEffect } from "react";

const UnsplashImage = () => {
  const [image, setImage] = useState([]);
  const apiKey = "59cegTi0aTgwHxhiFv-oqZqz0pWOaD1R2OwH0OUbVi8";

  useEffect(() => {
    const client_id = "client_id=59cegTi0aTgwHxhiFv-oqZqz0pWOaD1R2OwH0OUbVi8";
    const BASE_URL = "https://api.unsplash.com";
    axios
      .get(
        `${BASE_URL}/search/photos?query=advert&_page=1&per_page=30&${client_id}`
      )
      .then((res) => {
        console.log(res);
        setImage(res?.data?.results);
      });
  }, [apiKey]);

  return (
    <div className="max-w-[700px] w-[100%] h-[400px] p-[20px] relative mb-[30px]">
      {image?.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-[100%] flex flex-col  ${
              index > 0 ? "hidden" : "block"
            }`}
          >
            <img
              className="absolute w-[100%] object-cover"
              src={item.urls.regular}
              alt={item.alt_description}
            />
            <div className="absolute bottom-0 w-[100%] flex flex-col p-[20px] bg-black">
              <p className=" text-white text-[24px]">
                Photo by {item.user.name}
              </p>
              <button className=" px-[15px] py-[8px] bg-white rounded-md">
                Advertise
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UnsplashImage;
