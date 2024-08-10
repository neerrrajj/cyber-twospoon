"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch, FiUser } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";

import { Input } from "./ui/input";
import Logo from "./logo";
import { navItems } from "@/lib/constants";

const navIcons = [
  {
    icon: <GoHeart size={24} />,
    href: "/wishlist",
  },
  {
    icon: <GrCart size={24} />,
    href: "/cart",
  },
  {
    icon: <FiUser size={24} />,
    href: "/user",
  },
];

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathName = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex justify-between items-center border border-[#b5b5b5] w-full py-6 lg:py-4 px-4 sm:px-20 md:px-6 xl:px-40">
      <Logo color="black" />
      <AiOutlineMenu
        className="md:hidden cursor-pointer"
        size={24}
        onClick={toggleSidebar}
      />

      {/* search bar */}
      <div className="hidden md:flex md:w-auto xl:w-[372px] h-14 items-center gap-x-2 bg-[#f5f5f5] p-4 rounded-lg ">
        <FiSearch color="#989898" size={24} />
        <Input
          className="border-none pl-0 bg-inherit placeholder:text-[#656565]/50 focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Search"
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex md:gap-x-8 xl:gap-x-[52px]">
        {navItems.map((navItem) => (
          <li key={navItem.href}>
            <Link
              className={`${
                pathName !== navItem.href ? "text-black/30" : ""
              } hover:text-black duration-300 ease-in-out font-medium`}
              href={navItem.href}
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* icons */}
      <ul className="hidden md:flex gap-x-6 items-center">
        {navIcons.map((navIcon, index) => (
          <li key={index}>
            <Link href={navIcon.href}>{navIcon.icon}</Link>
          </li>
        ))}
      </ul>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg px-4 sm:px-20 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          className="text-neutral-400 text-4xl m-8 fixed right-0"
          onClick={toggleSidebar}
        >
          &times;
        </button>
        <div className="mt-40 flex flex-col items-center gap-y-8 text-center text-lg w-full px-8">
          <div className="flex items-center gap-x-2 bg-[#f5f5f5] h-14 p-4 rounded-lg mb-4 w-full">
            <FiSearch color="#989898" size={24} />
            <Input
              className="border-none pl-0 bg-inherit placeholder:text-[#656565]/50 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Search"
            />
          </div>
          <ul className="flex flex-col gap-y-8">
            {navItems.map((navItem) => (
              <li key={navItem.href}>
                <Link
                  className={`${
                    pathName !== navItem.href ? "text-black/30" : ""
                  } hover:text-black duration-300 ease-in-out font-medium`}
                  href={navItem.href}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-8 mt-4">
            <GoHeart size={28} />
            <GrCart size={28} />
            <FiUser size={28} />
          </div>
        </div>
      </div>
    </nav>
  );
}
