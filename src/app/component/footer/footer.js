import React from "react";
import { images } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";

function FooterSection() {
  const footerData = [
    {
      title: "For Job Seekers",
      links: [
        { label: "Live Jobs", href: "#" },
        { label: "My Work DNA", href: "#" },
        { label: "Payroll & Advance Pay", href: "#" },
      ],
    },
    {
      title: "For Companies",
      links: [
        { label: "AI Sourcing", href: "#" },
        { label: "Onboarding & Training", href: "#" },
      ],
    },
    {
      title: "About Myn",
      links: [
        { label: "Blog", href: "#" },
        { label: "Myn Leadership", href: "#" },
      ],
    },
    {
      title: "Account",
      links: [
        { label: "Myn Portal", href: "#" },
        { label: "Reset Password", href: "#" },
      ],
    },
  ];

  return (
    <div className="p-10 flex flex-col container mx-auto my-16 lg:p-0 w-full">
      <div className="mb-5">
        <Image alt="" src={images.mynLogo} />
      </div>
      <div className="flex flex-col gap-5 lg:flex-wrap lg:justify-between lg:flex-row mb-10">
        <div className="flex flex-col">
          <p className="w-fit lg:w-[214px] font-normal text-sm">
            A digital outsourced workforce platform providing a full life cycle
            of services; From search and hire, to pay and benefits. Cost-saving
            and value enhancing for the employer, and an efficient low-cost
            payroll system with benefits for the contingent worker.
          </p>
        </div>
        {footerData.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-base font-bold">{section.title}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx} className="font-normal text-base">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col">
          <h3 className="text-base font-bold">App Download</h3>
          <div className="flex gap-2 items-center">
            <Link href="">
              <Image alt="" src={images.googleApp} />
            </Link>
            <Link href="">
              <Image alt="" src={images.playStore} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold">Socials</h3>
          <div className="flex gap-2 items-center">
            <Link href="">
              <Image alt="" src={images.linkedinIcon} />
            </Link>
            <Link href="">
              <Image alt="" src={images.instagramIcon} />
            </Link>
            <Link href="">
              <Image alt="" src={images.YouTube} />
            </Link>
            <Link href="">
              <Image alt="" src={images.faceBook} />
            </Link>
            <Link href="">
              <Image alt="" src={images.twitterIcons} />
            </Link>
            <Link href="">
              <Image alt="" src={images.whatsApp} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:gap-5 lg:items-center lg:flex-row lg:justify-center w-full">
        <p className="font-normal text-sm">
          Copyright © 2024 Myn. All rights reserved.
        </p>
        <Link href="#" className="font-normal text-sm">
          Terms & Conditions
        </Link>
        <Link href="#" className="font-normal text-sm">
          Privacy Policy
        </Link>
        <Link href="#" className="font-normal text-sm">
          Use of Cookies
        </Link>
      </div>
    </div>
  );
}

export default FooterSection;
