"use client";
import { Button } from "../ui/button";
import { Heading } from "@/components/typography";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { useAnimate } from "motion/react";



export const HeroPage = () => {
  const dashboardRef = useRef<HTMLImageElement>(null);

  const [height, setHeight] = useState<number | string>("100svh");
  const fetchHeight = () => {
    if (dashboardRef.current) {
      const rect = dashboardRef.current.getBoundingClientRect();
      const midpointY = rect.top + rect.height / 2;
      setHeight(midpointY);
      // return midpointY
    }
  };

  useEffect(() => {
    // setHeight(window.innerHeight)
    fetchHeight();
  }, []);
  useLayoutEffect(() => {
    // fetchHeight();
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
        {/* <Navbar1/> */}
        <Navbar />
        {/* 64 24 */}
        <div className="h-[128px] md:h-[200px] w-full" />
      <div className="flex justify-center">
          <FancyButton />
        </div>
        <div className="flex flex-col text-center items-center md:mt-[40px] ">
          <Heading className="text-3xl md:leading-[3.75rem] md:text-[3.75rem] font-[500]">
            Create winning RFP
          </Heading>

          <Heading className="text-3xl md:leading-[3.75rem] md:text-[3.75rem] font-[500]">
            responses with Actuality AI
          </Heading>
        </div>

        <div className="flex flex-col items-center text-center text-lg md:text-[1.3rem] text-[#6B7280] md:mt-[32px]">
          {/* <p>{height.toString()}</p> */}
          <p>
            Automate your RFP responses, streamline team collaboration, and{" "}
            <br className="hidden md:block" /> win more bids with AI-powered
            efficiency.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-[24px] md:mt-[40px]">
          <div className="w-full md:w-auto md:flex-1 md:flex md:justify-end" ><BookDemoButton className="p-6 rounded-xl text-lg w-full md:w-auto" /></div>
          <div className="w-full md:w-auto md:flex-1 md:flex md:justify-start" >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSek1b_opJpYa1AcAnhx5R81Nh2Fl6_n2w8yan93ry_Zyt9blw/viewform"
            target="_blank"
          >
            <Button
              variant="ghost"
              className="md:w-auto w-full p-6 bg-transparent font-semibold text-gray-700 md:text-[#6B7280] border-[1px] border-gray-300 hover:bg-transparent hover:text-gray-700  rounded-xl text-md md:text-lg hover:border-[1px] hover:border-gray-500 "
            >
              Request Early Access
            </Button>
          </a>
          </div>
        </div>

        <div
          className="container mx-auto md:mt-[96px]"
          ref={dashboardRef}
        >
          <img
            alt="dashnoard"
            src="/__0101__new__actuality__/assets/Dashboard.svg"
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
    <div className="inline-block rounded-full w-[200px] h-[36px] p-[1px] mx-auto h relative overflow-hidden cursor-pointer">
      <button className="relative flex items-center w-full h-full py-[0.25rem] md:py-2 px-4 border rounded-full z-40 bg-[#F9FAFB]">
        <img
          src="/__0101__new__actuality__/assets/sparkles.svg"
          alt="star icon"
          className="mr-2 md:w-[24px] md:h-[24px]"
        />
        <span className="text-[14px]">
          Say&nbsp;hello&nbsp;to&nbsp;Actuality&nbsp;AI
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
export const Navbar = () => <>
  <NavbarDektop/>
  <NavbarMobile/>
</>

export const NavbarDektop = () => {
  const [scope, animate] = useAnimate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    // Check screen size on mount and resize
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth > 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  useEffect(() => {
    if (!isLargeScreen) return;
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
        animate(
          scope.current,
          { width: scrolled ? 1248 : 1400 },
          { type: "spring", stiffness: 100 },
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, animate, scope]);
  return (
    <div className="hidden md:block fixed z-[100000] top-[32px] left-0 right-0 md:px-0 px-2 md:pl-[1.1rem] md:pr-[0.2rem]">
      <div
        ref={scope}
        className="container md:w-[1400px] z-100 mx-auto overflow-hidden h-[72px] backdrop-blur-md  shadow-[2px_-3px_2px_rgba(0,0,0,0.06),-2px_3px_2px_-0px_rgba(0,0,0,0.06)]   px-4 rounded-[1rem] md:rounded-[16px] flex items-center justify-between bg-transparent"
      >
        {/* <h1 className="text-3xl font-semibold">Actuality</h1> */}
        <a href="/">
          <img
            src="/__0101__new__actuality__/assets/actuality.svg"
            style={{
              width:118,
              height:52
            }}
            alt="csd"
            className="hidden md:block"
          />
          <img
            src="/__0101__new__actuality__/assets/actuality-mini.svg"
            width="40px"
            height="40px"
            alt="csd"
            className="md:hidden block"
          />
        </a>
        <a
          href="https://calendly.com/rishabh_gupta/30min?month=2025-02"
          target="_blank"
          className={`bg-gradient-to-b from-[#374151] to-[#1F2937] text-[16px] text-white w-[126px] h-[40px] grid place-items-center rounded-[8px]`}
        >
          Book a demo

        </a>
        {/* <BookDemoButton className="text-[1.1rem] py-4 md:py-6 rounded-lg md:rounded-xl w-[126px] h-[40px]" /> */}
      </div>
    </div>
  );
};
export const NavbarMobile = () => {
  return (
    <div className="block md:hidden fixed z-[100000] top-[24px] md:top-10 left-0 right-0 px-[24px]">
      <div className="container z-100 mx-auto h-[56px] backdrop-blur-md  shadow-[2px_-3px_2px_rgba(0,0,0,0.06),-2px_3px_2px_-0px_rgba(0,0,0,0.06)]   px-4 rounded-[1rem] flex items-center justify-between bg-transparent">
        {/* <h1 className="text-3xl font-semibold">Actuality</h1> */}
        <a href="/">
          <img
            src="/__0101__new__actuality__/assets/actuality-mini.svg"
            style={{
              width:24,
              height:24
            }}
            alt="csd"
            className="block"
          />
        </a>

        <a
          href="https://calendly.com/rishabh_gupta/30min?month=2025-02"
          target="_blank"
          className={`bg-gradient-to-b from-[#374151] to-[#1F2937] text-[14px] text-white font-semibold w-[106px] h-[32px] grid place-items-center rounded-[8px]`}
        >
          Book a demo

        </a>
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
