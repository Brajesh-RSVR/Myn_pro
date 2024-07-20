// components/Header.js
"use client";

import Image from "next/image";
import { useState } from "react";
import { images } from "@/app/assets";
import ToggleButton from "../toggleButton/ToggleButton";
import MainBtn from "../buttton/mainBtn";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const menuItems = [
    {
      title: "Live Jobs",
      submenu: [],
    },
    {
      title: "My Work DNA",
      submenu: [],
    },
    {
      title: "About Myn",
      submenu: ["Payroll & Advance Pay", "Financial Advice"],
    },
    {
      title: "Help Centre",
      submenu: [],
    },
  ];

  return (
    <header className="bg-white fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 gap-6 flex items-center">
            <Image
              className={`h-8 w-auto ${isMobileMenuOpen && "blur-sm"}`}
              src={images.mynLogo}
              alt="Logo"
            />
            <div className="hidden lg:block">
              <ToggleButton />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className="text-gray-700 flex gap-1 items-center hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.title}
                    {item.submenu.length > 0 && (
                      <ChevronDownIcon className="size-4 text-black" />
                    )}
                  </button>
                  {item.submenu.length > 0 && openSubMenu === index && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <div
                  className={`py-1 px-5 ${
                    isMobileMenuOpen && "bg-[#E2E2E8] rounded-md py-1 px-5"
                  }`}
                >
                  <Bars3BottomRightIcon className="size-6 text-black" />
                </div>
              </button>
            </div>
            <div className="hidden sm:block">
              <MainBtn
                color="bg-[#93EE5C]"
                title="Join Now"
                Icon={UserCircleIcon}
                iconColor="text-black"
              />
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="h-screen px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleSubMenu(index)}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.title}
                </button>
                {item.submenu.length > 0 && openSubMenu === index && (
                  <div className="pl-4">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
