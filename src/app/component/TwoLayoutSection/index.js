import React, { FC } from "react";
// import Image from "next/image";


export const TwoLayoutSection = ({
  imgBanner,
  children,
  classStyle,
  paraClassStyle,
}) => {
  return (
    <div
      className={`${classStyle} container m-auto flex w-full flex-col items-center gap-[60px] px-[28px] py-10 md:flex-row  md:justify-around md:gap-0 md:py-[60px]  lg:flex-row  lg:justify-around lg:gap-0 lg:py-16`}
    >
      {imgBanner ? <div className={imgBanner}></div> : null}
      <div
        className={`${paraClassStyle} flex w-full flex-col gap-[24px] md:w-[420px] lg:w-[420px]`}
      >
        {children}
      </div>
    </div>
  );
};
