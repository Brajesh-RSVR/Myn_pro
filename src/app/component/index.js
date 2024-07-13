import React from "react";
import Image from "next/image";

function TwoLayoutSection({ imgBanner, children, classstyle, paraClassStyle }) {
  return (
    <div
      className={`${classstyle} container m-auto px-[28px] py-10 lg:py-16 flex flex-col items-center gap-16 w-full lg:flex-row lg:gap-0 lg:justify-around`}
    >
      <Image src={imgBanner} alt="test" />
      <div
        className={`${paraClassStyle} w-full lg:w-[420px] flex flex-col gap-[24px]`}
      >
        {children}
      </div>
    </div>
  );
}

export default TwoLayoutSection;
