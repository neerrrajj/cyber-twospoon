"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdTrolley } from "react-icons/md";

const steps = [
  {
    icon: <FaLocationDot color="white" size={14} />,
    level: "Step 1",
    label: "Address",
    href: "/buy/select-address",
  },
  {
    icon: <MdTrolley color="white" />,
    level: "Step 2",
    label: "Shipping",
    href: "/buy/shipping",
  },
  {
    icon: <BsCreditCard2BackFill color="white" size={14} />,
    level: "Step 3",
    label: "Payment",
    href: "/",
  },
];

export default function Steps() {
  const pathName = usePathname();

  return (
    <div className="py-8 md:py-[72px] w-full overflow-x-auto scrollbar-hide">
      <ul className="flex items-center justify-between">
        {steps.map((step, index) => (
          <li key={index}>
            <Link
              href={step.href}
              className={`flex items-center gap-x-2 ${
                pathName !== step.href ? "text-[#b2b2b2]" : ""
              }`}
            >
              <div
                className={`h-6 w-6 rounded-[18px]  flex items-center justify-center ${
                  pathName !== step.href ? "bg-[#b2b2b2]" : "bg-black"
                }`}
              >
                {step.icon}
              </div>
              <div className="flex flex-col items-start w-32">
                <p className="font-medium text-[14px] leading-4">
                  {step.level}
                </p>
                <p className="font-medium text-[19px] leading-6">
                  {step.label}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
