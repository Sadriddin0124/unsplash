import React, { useEffect } from "react";
import Pictures from "../../components/Pictures/Pictures";
import axios from "axios";
import "./CoolTones.scss"
const CoolTones = () => {
  useEffect(() => {
    const client_id = "client_id=59cegTi0aTgwHxhiFv-oqZqz0pWOaD1R2OwH0OUbVi8";
    const BASE_URL = "https://api.unsplash.com";
    axios.get(
      `${BASE_URL}/search/photos?query=advert&_page=1&per_page=30&${client_id}`
    ).then(res=> {
      console.log(res);
    })
  }, []);
  return (
    <div className="cooltones">
      <header className="cooltones__header">
        <div className="cooltones__item">
          <h1 className="cooltones__title">Cool Tones</h1>
          <p className="cooltones__subtitle">Explore the magic of the season with cool tones. Where icy blues, purples, greens and grays paint a serene canvas. Embrace the beauty of cool colors to infuse a sense of tranquility into your images. From frost-kissed landscapes to subtle macro details, let the colour palette of the season be the focus of your compositions.</p>
          <button className="cooltones__btn">Submit to <span className="font-[500]">Cool Tones</span></button>
        </div>
      </header>
      <Pictures />
    </div>
  );
};

export default CoolTones;
