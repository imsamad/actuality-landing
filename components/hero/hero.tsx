"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heading } from "@/components/typography";

export const HeroPage = () => {
  return (
    <div className="z-10">
      <Navbar />
      <div className="h-[220px] w-full" />
      <FancyButton />
      <div className="flex flex-col items-center  mt-10">
        <Heading className="leading-[4.5rem] text-[4.4rem] font-medium">
          Create winning RFP
        </Heading>
        <Heading className="leading-[4.5rem] text-[4.4rem] font-medium">
          responses with Actuality AI
        </Heading>
      </div>

      <div className="flex flex-col items-center text-2xl text-[#6B7280] mt-10">
        <p>Automate your RFP responses, streamline team collaboration, and</p>
        <p> win more bids with AI-powered efficiency.</p>
      </div>
      <ContactButtons />

      <div className="container mx-auto">
        <img
          alt="dashnoard"
          src="/assets/Dashboard.png"
          className="mt-8 w-full"
          style={{
            width: "100%",
            height: "100%",
            // objectFit:"contain"
          }}
        />
      </div>
    </div>
  );
};

const FancyButton = () => {
  return (
    <button className="flex items-center p-2 px-4 mx-auto border rounded-full">
      <Image
        src="/icons/stars.png"
        alt="star icon"
        className="mr-2"
        width="15"
        height="15"
      />
      <span className="text-[14px] text-[#6B7280]">
        Say hello to Actuality AI
      </span>
    </button>
  );
};

const Navbar = () => {
  return (
    <div className="fixed top-10  left-0 right-0">
      <div className="container mx-auto h-[70px] backdrop-blur-md w-full shadow-[0_-4px_6px_rgba(0,0,0,0.07),0_4px_6px_-1px_rgba(0,0,0,0.07)]   p-4 rounded-[1.3rem] flex items-center justify-between border-gray-300 bg-transparent">
        {/* <h1 className="text-3xl font-semibold">Actuality</h1> */}
        <img
          src="/icons/actuality-logo.png"
          width="130px"
          height="100px"
          alt="csd"
        />
        <BookDemoButton />
      </div>
    </div>
  );
};

export const BookDemoButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={`bg-gradient-to-b from-[#374151] to-[#1F2937] text-white font-semibold ${className}`}
    >
      Book a demo
    </Button>
  );
};

export const ContactButtons = () => {
  return (
    <div className="flex justify-center gap-6 mt-10">

      <BookDemoButton className="p-6 rounded-xl text-lg" />
      <Button
        variant="ghost"
        className="bg-transparent font-semibold text-[#6B7280] border-[1px] border-gray-300 hover:bg-transparent hover:text-gray-700 p-6 rounded-xl text-lg hover:border-[1px] hover:border-gray-500 "
      >
        Request Early Access
      </Button>
    </div>
  );
};
