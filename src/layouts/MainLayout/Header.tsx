"use client";

import Link from "next/link";
import React, { useState } from "react";
import { mainMenuItems } from "./menuItems";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import logo from "@/assets/images/logo.png"

const Header = () => {
    const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-black ">
    <nav className=" shadow lg:px-10 px-5 lg:py-5 py-2">
      <div className="w-full md:hidden flex items-center justify-between">
        <Link href={"/"} className="lg:w-full w-16">
        <Image priority src={logo} alt="logo" width={100} height={100} className="w-full "/>
        </Link>
        <button
          className={`p-2 border rounded-lg
             ${toggleNav ? "hidden" : "block"}`}
          onClick={() => setToggleNav(true)}
        >
          <span>
            <HiMenuAlt1 />
          </span>
        </button>
        <button
          className={`p-2 border rounded-lg
             ${!toggleNav ? "hidden" : "block"}`}
          onClick={() => setToggleNav(false)}
        >
          <span>
            <RxCross2 />
          </span>
        </button>
      </div>

      <ul
        className={`md:flex flex-col md:flex-row items-center justify-between
         ${toggleNav ? "flex" : "hidden"}`}
      >
        <li className="hidden md:block">
          <Link href={"/"}>
          <Image src={logo} alt="logo" width={100} height={100} />

          </Link>
        </li>
        <div className="flex flex-col md:flex-row items-center lg:justify-between">
          {mainMenuItems.map((item, index) => (
            <div
              key={index}
              className="relative transition-all"
            >
              <Link
                href={item.link}
                className="text-white hover:underline text-xs lg:text-base"
              >
                <li className="py-3 lg:px-4 px-3 hover:underline transition-all">
                  {item.name}
                </li>
              </Link>
            </div>
          ))}
        </div>
      </ul>
    </nav>
  </header>
  )
}

export default Header   