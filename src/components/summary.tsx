import Image from "next/image";

import { cartItems, user } from "@/lib/constants";

const subTotal = cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0);
const estimatedTax = 50;
const estimatedShipping = 29;
const total = subTotal + estimatedTax + estimatedShipping;

export default function Summary() {
  return (
    <div className="flex flex-col gap-y-6 px-6 py-8 w-full border border-[#ebebeb] rounded-[10px]">
      <h1 className="font-medium text-xl">Summary</h1>
      <ul className="flex flex-col gap-y-4">
        {cartItems.map((cartItem, index) => (
          <li
            key={index}
            className="bg-[#f6f6f6] flex gap-x-4 py-4 pl-4 rounded-[13px] w-full"
          >
            <Image src={cartItem.image} alt="image" height={40} width={40} />
            <div className="flex justify-between items-center pr-6 w-full">
              <p className="w-auto 2xl:w-[319px] font-medium">
                {cartItem.name}
              </p>
              <p className="font-bold text-right w-auto">${cartItem.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="font-medium text-sm text-[#545454]">Address</p>
            <p className="py-3 leading-6">{user.address}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-medium text-sm text-[#545454]">
              Shipment method
            </p>
            <p className="leading-6">Free</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex font-medium leading-6">
            <p className="w-full">Subtotal</p>
            <p>${subTotal}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex leading-8">
              <p className="w-full text-[#545454]">Estimated Tax</p>
              <p className=" font-medium">${estimatedTax}</p>
            </div>
            <div className="flex leading-8">
              <p className="w-full text-[#545454] ">
                Estimated shipping & Handling
              </p>
              <p className="font-medium">${estimatedShipping}</p>
            </div>
          </div>
          <div className="flex leading-6">
            <p className="font-medium w-full">Total</p>
            <p className="font-bold">${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
