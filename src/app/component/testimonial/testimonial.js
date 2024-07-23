import Link from "next/link";
import React from "react";

const Testimonial = ({ name, title, quote, className = "" }) => {
  return (
    <div className="w-[337px] h-[684px] md:h-auto md:w-[864px] xl:flex-row relative flex flex-col md:mb-3  md:flex-row lg:flex-row ">
      <div
        className={`w-[337px] md:w-[400px] h-[360px] xl:bg-cover xl:bg-center  2xl:bg-right flex  rounded-2xl bg-cover bg-center bg-no-repeat md:bg-cover md:bg-center ${className}`}
      />
      <div className="w-[337px] h-[360px] md:w-[500px] mt-[-24px] flex shrink flex-col justify-center gap-5 rounded-2xl bg-white px-8 py-6 shadow-lg sm:mt-0 bottom-0 absolute md:right-0 md:gap-3 md:p-5">
        <div className="flex flex-col">
          <h3 className="font-InterBold font-bold text-[24px] leading-[36px] text-dark-900">
            {name}
          </h3>
          <p className="font-InterRegular text-base  font-normal text-purple-700 ">
            {title}
          </p>
        </div>
        <p className="line-clamp-4 font-InterRegular text-xl font-normal leading-[28px] text-dark-700">
          "{quote}"
        </p>
        <div className="flex w-full items-end justify-end gap-3 md:pt-3 lg:pt-[32px]  ">
          <Link href="/employers/contact">button</Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
