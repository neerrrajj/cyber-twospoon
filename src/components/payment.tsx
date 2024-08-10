import Image from "next/image";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export default function Payment() {
  return (
    <div className="flex flex-col gap-y-12 items-start md:justify-between w-full">
      <div className="flex flex-col gap-y-10 w-full">
        <div className="flex flex-col gap-y-6">
          <h1 className="font-bold text-xl leading-4">Payment</h1>
          <div className="flex items-center justify-start gap-x-14 font-medium text-sm">
            <p className="underline decoration-1 underline-offset-8 cursor-pointer">
              Credit Card
            </p>
            <p className="text-[#717171] cursor-pointer hover:text-black duration-300 ease-in-out">
              Paypal
            </p>
            <p className="text-[#717171] cursor-pointer hover:text-black duration-300 ease-in-out">
              PayPal Credit
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <Image src="/card.png" alt="card.png" width={337} height={190} />
          <div className="flex flex-col gap-y-4">
            <Input
              placeholder="Cardholder Name"
              className="h-12 placeholder:text-[#979797]"
            />
            <Input
              placeholder="Card Number"
              className="h-12 placeholder:text-[#979797]"
            />
            <div className="flex gap-x-4">
              <Input
                placeholder="Exp. Date"
                className="h-12 placeholder:text-[#979797]"
              />
              <Input
                placeholder="CVV"
                className="h-12 placeholder:text-[#979797]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2 items-center w-full">
        <Checkbox id="billing-address" />
        <label
          htmlFor="billing-address"
          className="text-[15px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Same as billing address
        </label>
      </div>
      <div className="flex items-center gap-x-[23px] w-full">
        <Button
          variant="outline"
          className="px-auto md:px-[86px] py-6 w-full border-black font-medium text-base leading-4"
        >
          Back
        </Button>
        <Button className="px-auto md:px-[86px] py-6 w-full text-base leading-4">
          Pay
        </Button>
      </div>
    </div>
  );
}
