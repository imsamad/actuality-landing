"use client";
import { Button } from "../ui/button";
import { Heading } from "@/components/typography";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { transform, useAnimate } from "motion/react";

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
        className="absolute left-0 right-0 -z-10 overflow-hidden rounded-b-[16px] md:px-[32px]"
        style={{
          minHeight: height,
          maxHeight: height,
          height: height,
        }}
      >
        <div style={{
          width:"100%",
          height:"100%",
          background: "linear-gradient(to bottom, #F9FAFB ,#EEF2FF)",}} className="rounded-b-[16px]" />
      </div>
      <div className="z-10">
        {/* <Navbar1/> */}
        <Navbar />
        {/* 64 24 */}
        <div className="h-[128px] md:h-[200px] w-full" />
        <div className="flex justify-center">
          <FancyButton />
        </div>
        <div className="flex flex-col text-center items-center mt-[24px] md:mt-[40px] ">
          <Heading className="md:text-[60px] md:leading-[72px] text-[32px] leading-[40px]">
            Create winning RFP
          </Heading>

          <Heading className="md:text-[60px] md:leading-[72px] text-[32px] leading-[40px]">
            responses with Actuality AI
          </Heading>
        </div>

        <div className="flex flex-col items-center text-center font-[400] text-[#6B7280] md:text-[20px] md:leading-[32px] mt-[20px] md:mt-[32px]">
          {/* <p>{height.toString()}</p> */}
          <p>
            Automate your RFP responses, streamline team collaboration, and{" "}
            <br className="hidden md:block" /> win more bids with AI-powered
            efficiency.
          </p>
        </div>
        {/* <div className="w-full flex flex-col md:flex-row justify-center gap-[16px] mt-[24px] md:gap-[24px] md:mt-[40px] log-1">
          <div className="w-full md:w-auto md:flex-1 md:flex md:justify-end log-1">
            <a
              href="https://calendly.com/rishabh_gupta/30min?month=2025-02"
              target="_blank"
              className={`w-full btn1 md:w-[140px] h-[44px] md:h-[48px] bg-gradient-to-b from-[#374151] to-[#1F2937] text-[16px] md:text-[18px] text-white grid place-items-center rounded-[10px] md:rounded-[14px] font-[500]`}
            >
              Book a demo
            </a>
          </div>
          <div className="w-full md:w-auto md:flex-1 md:flex md:justify-start log-1">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSek1b_opJpYa1AcAnhx5R81Nh2Fl6_n2w8yan93ry_Zyt9blw/viewform"
              target="_blank"
              className="w-full md:w-[210px] hover:text-gray-500 border-[1px] h-[44px] md:h-[48px] bg-transparent text-gray-700 text-[16px] md:text-[18px] grid place-items-center rounded-[10px] md:rounded-[14px] font-[500]"
            >
              Request Early Access
            </a>
          </div>
        </div> */}
         <div className="w-full flex flex-col md:flex-row justify-center gap-[16px] mt-[24px] md:gap-[24px] md:mt-[40px] ">
          <div className="w-full md:w-auto md:flex-auto md:flex md:justify-end  ">
            <a
              href="https://calendly.com/rishabh_gupta/30min?month=2025-02"
              target="_blank"
              className={`w-full btn1 md:w-[140px] h-[44px] md:h-[48px] bg-gradient-to-b from-[#374151] to-[#1F2937] text-[16px] md:text-[18px] text-white grid place-items-center rounded-[10px] md:rounded-[14px] font-[500]`}
            >
              Book a demo
            </a>
          </div>
          <div className="w-full md:w-auto md:flex-auto md:flex md:justify-start ">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSek1b_opJpYa1AcAnhx5R81Nh2Fl6_n2w8yan93ry_Zyt9blw/viewform"
              target="_blank"
              className="w-full md:w-[210px] hover:text-gray-500 border-[1px] h-[44px] md:h-[48px] bg-transparent text-gray-700 text-[16px] md:text-[18px] grid place-items-center rounded-[10px] md:rounded-[14px] font-[500]"
            >
              Request early access
            </a>
          </div>
        </div>
        <div
          className="container mx-auto mt-[40px] md:mt-[96px] shadow-[0px_4px_32px_rgba(31,41,55,0.05)]
"
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
    <div className="inline-block rounded-full w-[220px] h-[36px] p-[1px] mx-auto  relative overflow-hidden cursor-pointer ">
      <button className="relative flex items-center justify-center w-full h-full py-[0.25rem] px-4  border rounded-full z-40 bg-[#F9FAFB] md:px-[12px] md:py-[8px]">
        <img
          src="/__0101__new__actuality__/assets/sparkles.svg"
          alt="star icon"
          className="mr-2 md:w-[24px] md:h-[24px] "
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
export const Navbar = () => (
  <>
    <NavbarDesktop />
    <NavbarMobile />
  </>
);

export const NavbarDesktop = () => {
  // const [scope, animate] = useAnimate();
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isLargeScreen, setIsLargeScreen] = useState(true);

  // useEffect(() => {
  //   // Check screen size on mount and resize
  //   const checkScreenSize = () => setIsLargeScreen(window.innerWidth > 768);
  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);

  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, []);

  // useEffect(() => {
  //   if (!isLargeScreen || !scope || !scope.current) return;

  //   const handleScroll = () => {
  //     const scrolled = window.scrollY > 10;
  //     if (scrolled !== isScrolled) {
  //       setIsScrolled(scrolled);
  //       animate(
  //         scope.current,
  //         { transform: scrolled ? "translateX(0)" : "translateX(-76px)" },
  //         { type: "spring", stiffness: 0 }
  //       );
  //       animate(
  //         scope.current,
  //         { width: scrolled ? 1248 : 1400 },
  //         // { transform: scrolled ? "translateX(0)" : "translateX(-76px)" },
  //         { type: "spring", stiffness: 500 }
  //       );
  //       // Animate width first, then transform separately
  //       // Promise.all([
  //       //   animate(
  //       //     scope.current,
  //       //     { transform: scrolled ? "translateX(0)" : "translateX(-76px)" },
  //       //     { type: "spring", stiffness: 500 }
  //       //   ),
  //       // ]).then(() => {
  //       //   animate(
  //       //     scope.current,
  //       //     { width: scrolled ? 1248 : 1400 },
  //       //     // { transform: scrolled ? "translateX(0)" : "translateX(-76px)" },
  //       //     { type: "spring", stiffness: 500 }
  //       //   );
  //       // });
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isScrolled, animate, scope, isLargeScreen]);

  return (
    <div
      // ref={scope}
      className="fixed p-[16px] border-transparent border-t-[1px] shadow-[2px_-3px_2px_rgba(0,0,0,0.06),-2px_3px_2px_-0px_rgba(0,0,0,0.06)] border-t-[rgba(229,231,235,0.6)] border-b-[rgba(229,231,235,1)] rounded-[16px] top-[32px] z-[10000] w-[1248px] backdrop-blur-md hidden md:flex items-center justify-between"
    >
      <a href="/">
        <img
          src="/__0101__new__actuality__/assets/actuality.svg"
          style={{
            // width: 118,
            // height: 52,
          }}
          alt="csd"
        />
      </a>

      <a
        href="https://calendly.com/rishabh_gupta/30min?month=2025-02"
        target="_blank"
        className="bg-gradient-to-b  from-[#374151] font-[500] to-[#1F2937] shadow-[2px_-3px_2px_rgba(0,0,0,0.06),-2px_3px_2px_rgba(0,0,0,0.06)] text-[16px] text-white w-[126px] h-[40px] grid place-items-center rounded-[8px] btn1"
      >
        Book a demo
      </a>
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
              width: 24,
              height: 24,
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
