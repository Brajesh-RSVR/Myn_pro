import Link from "next/link";
import React from "react";

const Testimonial = ({ name, title, quote, className = "" }) => {
  return (
    <div className="w-[337px] h-[650px] relative flex lg:w-[520px] lg:h-auto xl:w-[600px] 2xl:w-full 2xl:max-w-[864px]">
      <div
        className={`w-[337px] h-[360px] lg:w-[300px] 2xl:w-full 2xl:max-w-[400px] 2xl:min-w-[370px] flex rounded-2xl bg-cover bg-center bg-no-repeat ${className}`}
      />
      <div className="w-[337px] h-[360] lg:w-[340px] 2xl:w-full 2xl:max-w-[500px] 2xl:min-w-[420px] flex flex-col justify-center gap-5 rounded-2xl bg-white px-8 py-6 shadow-lg bottom-0 absolute lg:right-0 lg:top-0">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <h3 className="font-InterBold font-bold text-[24px] leading-[36px] text-dark-900">
              {name}
            </h3>
            <p className="font-InterRegular text-base  font-normal text-purple-700">
              {title} test
            </p>
          </div>
          <p className="line-clamp-4 font-InterRegular text-xl font-normal leading-[28px] text-dark-700">
            "{quote}"
          </p>
        </div>
        <div className="flex w-full items-end justify-end gap-3">
          <Link href="/employers/contact">button</Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
