"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heading } from "@/components/typography";
import { useEffect, useRef, useState } from "react";


export const HeroPage = () => {
  const dashboardRef = useRef<HTMLImageElement>(null);

  const [height, setHeight] = useState<number | string>("100vh");
  const fetchHeight = () => {
    if (dashboardRef.current) {
      const rect = dashboardRef.current.getBoundingClientRect();
      const midpointY = rect.top + rect.height / 2;
      setHeight(midpointY);
    }
  };
  useEffect(() => {
    fetchHeight();
  }, []);
  return (
    <>
      <div
        className="absolute left-0 right-0 -z-10 overflow-hidden"
        style={{
          minHeight: height,
          maxHeight: height,
          height: height,
          background: "linear-gradient(to bottom, #F9FAFB ,#EEF2FF)",
        }}
      />
      <div className="z-10">
        <Navbar />
        <div className="h-[220px] w-full" />
        <div className="flex justify-center">
          <FancyButton />
        </div>
        <div className="flex flex-col items-center mt-10">
          <Heading className="leading-[3.75rem] text-[3.75rem] font-[500]">
            Create winning RFP
          </Heading>
          <Heading className="leading-[3.75rem] text-[3.75rem] font-[500]">
            responses with Actuality AI
          </Heading>
        </div>

        <div className="flex flex-col items-center text-[1.3rem] text-[#6B7280] mt-10">
          <p>Automate your RFP responses, streamline team collaboration, and</p>
          <p> win more bids with AI-powered efficiency.</p>
        </div>
        <div className="flex justify-center gap-6 mt-10">
          <BookDemoButton className="p-6 rounded-xl text-lg" />
          <Button
            variant="ghost"
            className="bg-transparent font-semibold text-[#6B7280] border-[1px] border-gray-300 hover:bg-transparent hover:text-gray-700 p-6 rounded-xl text-lg hover:border-[1px] hover:border-gray-500 "
          >
            Request Early Access
          </Button>
        </div>

        <div className="container mx-auto mt-10">
          <img
            ref={dashboardRef}
            alt="dashnoard"
            src="/icons/Dashboard.png"
            className="w-full"
            style={{
              width: "100%",
              height: "100%",
              // objectFit:"contain"
            }}

            // onLoad={fetchHeight}
          />
        </div>
      </div>
    </>
  );
};

const FancyButton = () => {
  return (
    <div className="inline-block rounded-full p-[1px] mx-auto relative overflow-hidden cursor-pointer">
      <button className="  relative   flex items-center p-2 px-4 border rounded-full z-40 bg-[#F9FAFB]">
        <img
          src="/icons/sparkles.png"
          alt="star icon"
          className="mr-2"
          style={{
            width: 24,
            height: 24,
          }}
        />
        <span className="text-[16px] text-[#6B7280]">
          Say hello to Actuality AI
        </span>
      </button>
      <div
        style={{
          animation: "rotateGradient 2s linear infinite",
          background: `conic-gradient(transparent 270deg, blue, transparent)`,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-40%, -40%)",
          aspectRatio: 1,
          width: "100%",
        }}
        // className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-black"
      />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="fixed z-[100000] top-10 left-0 right-0">
      <div className="container  z-100  mx-auto h-[70px] backdrop-blur-md w-full shadow-[2px_-3px_2px_rgba(0,0,0,0.06),-2px_3px_2px_-0px_rgba(0,0,0,0.06)]   p-4 rounded-[1.4rem] flex items-center justify-between bg-transparent">
        {/* <h1 className="text-3xl font-semibold">Actuality</h1> */}
        <img
          src="/icons/actuality.png"
          width="130px"
          height="100px"
          alt="csd"
        />
        <BookDemoButton className="text-[1.1rem] py-6 rounded-xl" />
      </div>
    </div>
  );
};

export const BookDemoButton = ({ className }: { className?: string }) => {
  return (
    <a href="https://calendly.com/rishabh_gupta/30min?month=2025-02" target="_blank" >
    <Button
      className={`bg-gradient-to-b from-[#374151] to-[#1F2937] text-white font-semibold ${className}`}
    >
      Book a demo
    </Button></a>
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
