import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";

import Logo from "./logo";
import { assistances, services } from "@/lib/constants";

export const socials = [
  {
    href: "https://twitter.com",
    icon: <FaTwitter className="text-2xl md:text-base" />,
  },
  {
    href: "https://facebook.com",
    icon: <FaFacebookF className="text-2xl md:text-base" />,
  },
  {
    href: "https://tiktok.com",
    icon: <FaTiktok className="text-2xl md:text-base" />,
  },
  {
    href: "https://instagram.com",
    icon: <AiFillInstagram className="text-2xl md:text-base" />,
  },
];

export default function Footer() {
  return (
    <footer className="px-8 py-12 md:py-[104px] md:px-40 flex flex-col items-center md:items-start gap-y-8 md:gap-y-6 bg-black text-white w-full">
      <div className="flex flex-col md:flex-row gap-y-8 flex-wrap md:justify-between items-center md:items-start">
        <div className="flex flex-col items-center md:items-start gap-y-4 md:gap-y-6">
          <Logo color="white" />
          <p className="md:w-96 font-regular text-sm text-center md:text-left text-[#cfcfcf] leading-[170.5%]">
            We are a residential interior design firm located in Portland. Our
            botique-studio offers more than
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-8 md:w-[623px] items-center md:items-start">
          <div className="w-[295.5px]">
            <h1 className="mb-2 font-semibold text-center md:text-left">
              Services
            </h1>
            <ul className="flex flex-col gap-y-2 items-center md:items-start">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="hover:text-white duration-300 ease-in-out font-light leading-8 text-[#cfcfcf] text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[295.5px]">
            <h1 className="mb-2 font-semibold text-center md:text-left">
              Assistance to the buyer
            </h1>
            <ul className="flex flex-col gap-y-2 items-center md:items-start">
              {assistances.map((assistance, index) => (
                <li key={index}>
                  <Link
                    href={assistance.href}
                    className="hover:text-white duration-300 ease-in-out font-light leading-8 text-[#cfcfcf] text-sm "
                  >
                    {assistance.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[173px]">
        <ul className="flex justify-between">
          {socials.map((social, index) => (
            <li key={index} className="">
              <Link href={social.href}>{social.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
