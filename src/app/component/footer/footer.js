import React from "react";
import { images } from "@/app/assets";
import Image from "next/image";

function FooterSection() {
  return (
    <div className="p-10 flex flex-col container mx-auto my-16 md:p-0 w-full">
      <div className="mb-5">
        <Image alt="" src={images.mynLogo} />
      </div>
      <div className="flex flex-col gap-5 md:justify-between md:flex-row mb-10">
        <div className="flex flex-col">
          <p className="w-fit md:w-[214px] font-normal text-sm">
            A digital outsourced workforce platform providing a full life cycle
            of services; From search and hire, to pay and benefits. Cost-saving
            and value enhancing for the employer, and an efficient low-cost
            payroll system with benefits for the contingent worker.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold">For Job Seekers</h3>
          <ul>
            <li className="font-normal text-base">Live Jobs</li>
            <li className="font-normal text-base">My Work DNA</li>
            <li className="font-normal text-base">Payroll & Advance Pay </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold">For Companies</h3>
          <ul>
            <li className="font-normal text-base">AI Sourcing</li>
            <li className="font-normal text-base">Onboarding & Training </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold">About Myn</h3>
          <ul>
            <li className="font-normal text-base">Blog</li>
            <li className="font-normal text-base">Myn Leadership </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold">Account</h3>
          <ul>
            <li className="font-normal text-base">Myn Portal</li>
            <li className="font-normal text-base">Reset Password</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold">App Download</h3>
          <div className="flex gap-2 items-center"></div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold">App Download</h3>
          <div className="flex gap-2 items-center"></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-5 md:items-center md:flex-row md:justify-center w-full">
        <p className="font-normal text-sm">
          Copyright © 2024 Myn. All rights reserved.
        </p>
        <p className="font-normal text-sm">Terms & Conditions</p>
        <p className="font-normal text-sm">Privacy Policy </p>
        <p className="font-normal text-sm">Use of Cookies</p>
      </div>
    </div>
  );
}

export default FooterSection;
