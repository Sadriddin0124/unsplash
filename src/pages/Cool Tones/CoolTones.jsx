import React, { useEffect } from "react";
import Pictures from "../../components/Pictures/Pictures";
import axios from "axios";
import "./CoolTones.scss"
import CoolTonesStore from "../../store/CoolTonesStore/CoolTonesStore";
const CoolTones = () => {
  const { getPicturesCoolTones, cooltones} = CoolTonesStore()
  useEffect(() => {
    
    getPicturesCoolTones()
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
      <Pictures photos={cooltones}/>
    </div>
  );
};

export default CoolTones;
