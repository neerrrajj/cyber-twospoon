import Payment from "@/components/payment";
import Summary from "@/components/summary";
import Steps from "@/components/steps";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-20 md:px-6 xl:px-40">
      <Steps />
      <div className="flex md:gap-x-6 xl:gap-x-24 pt-6 pb-[72px] w-full">
        <div className="hidden w-full md:block md:w-1/2">
          <Summary />
        </div>
        <div className="w-full md:w-1/2">
          <Payment />
        </div>
      </div>
    </main>
  );
}
