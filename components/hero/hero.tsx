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
        <div className="h-36 md:h-[220px] w-full" />
        <div className="flex justify-center">
          <FancyButton />
        </div>
        <div className="flex flex-col items-center mt-10">
          <Heading className="text-3xl md:leading-[3.75rem] md:text-[3.75rem] font-[500]">
            Create winning RFP
          </Heading>
          <Heading className="text-3xl md:leading-[3.75rem] md:text-[3.75rem] font-[500]">
            responses with Actuality AI
          </Heading>
        </div>

        <div className="flex flex-col items-center text-center text-lg md:text-[1.3rem] text-[#6B7280] mt-10">
          <p>
            Automate your RFP responses, streamline team collaboration, and{" "}
            <br className="hidden md:block" /> win more bids with AI-powered
            efficiency.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-10 px-4 md:px-0">
          <BookDemoButton className="p-6 rounded-xl text-lg w-full md:w-auto" />
          <Button
            variant="ghost"
            className="bg-transparent font-semibold text-gray-700 md:text-[#6B7280] border-[1px] border-gray-300 hover:bg-transparent hover:text-gray-700 p-6 rounded-xl text-md md:text-lg hover:border-[1px] hover:border-gray-500 "
          >
            Request Early Access
          </Button>
        </div>

        <div className="container mx-auto mt-10 md:px-0 px-4">
          <img
            ref={dashboardRef}
            alt="dashnoard"
            src="/assets/Dashboard.png"
            className="w-full shadow-[0px_2px_16px_0px_#1F29370D] md:shadow-none"
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
      <button className="relative flex items-center py-[0.25rem] md:py-2 px-4 border rounded-full z-40 bg-[#F9FAFB]">
        <img
          src="/icons/sparkles.png"
          alt="star icon"
          className="mr-2 md:w-[24px] md:h-[24px]"
        />
        <span className="text-[12px] md:text-[16px] text-[#6B7280]">
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

export const Navbar = () => {
  return (
    <div className="fixed  z-[100000] top-4 md:top-10 left-0 right-0 flex justify-center md:px-0 px-2 md:pl-4">
      <div className="container z-100 mx-auto h-[60px] md:h-[70px] backdrop-blur-md w-full shadow-[2px_-3px_2px_rgba(0,0,0,0.06),-2px_3px_2px_-0px_rgba(0,0,0,0.06)]   p-4 rounded-[1rem] md:rounded-[1.4rem] flex items-center justify-between bg-transparent">
        {/* <h1 className="text-3xl font-semibold">Actuality</h1> */}
        <a href="/" >
          <img
            src="/icons/actuality.png"
            width="130px"
            height="100px"
            alt="csd"
            className="hidden md:block"
          />
          <img
            src="/icons/actuality-mini.svg"
            width="40px"
            height="40px"
            alt="csd"
            className="md:hidden block"
          />
        </a>

        <BookDemoButton className="text-[1.1rem] py-4 md:py-6 rounded-lg md:rounded-xl " />
      </div>
    </div>
  );
};

export const BookDemoButton = ({ className }: { className?: string }) => {
  return (
    <a
      href="https://calendly.com/rishabh_gupta/30min?month=2025-02"
      target="_blank"
    >
      <Button
        className={`bg-gradient-to-b from-[#374151] to-[#1F2937] text-white font-semibold ${className}`}
      >
        Book a demo
      </Button>
    </a>
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
