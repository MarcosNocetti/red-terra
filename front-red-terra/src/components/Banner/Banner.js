import React from "react";
import { BannerHeader } from "./styled";

const Banner = ({ bottom, img, small }) => {
  return <BannerHeader bottom={bottom} background={img} small={small} />;
};

export default Banner;
