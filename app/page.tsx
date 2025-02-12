"use client";
import {
  BookDemoButton,
  HeroPage,
} from "@/components/hero/hero";
import { Heading } from "@/components/typography";

import { FAQs } from "./faq";
import { Button } from "@/components/ui/button";
import { OrgLogos } from "@/components/OrgLogos";
import anim1 from "../public/__0101__new__actuality__/assets/anims/anim1.json";
import anim2 from "../public/__0101__new__actuality__/assets/anims/anim2.json";
import anim3 from "../public/__0101__new__actuality__/assets/anims/anim3.json";
import anim4 from "../public/__0101__new__actuality__/assets/anims/anim4.json";
import anim5 from "../public/__0101__new__actuality__/assets/anims/anim5.json";
import anim6 from "../public/__0101__new__actuality__/assets/anims/anim6.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function Home() {
  return (
    <>
      <HeroPage />

      <OrgLogos />
      <div className="flex flex-col items-center mt-8 md:mt-24 ">
        <Heading className="text-2xl font-semibold md:font-normal text-center md:text-[2.7rem] md:leading-[2.5rem] mb-6">
          Unleash the power of AI for RFP success
        </Heading>
        <p className="text-md text-[#6B7280] text-center">
          Actuality AI is designed specifically for AEC companies to streamline
          and automate the <br className="hidden md:block" /> RFP process,
          giving you the edge to secure more wins.
        </p>
      </div>

      <div className="flex gap-8 md:gap-12 mt-12 md:mt-24 flex-col md:flex-row container mx-auto ">
        <AnimationCard
          image={anim1}
          title="Reduce Response Time"
          subtitle="Automate time-consuming tasks like data entry and document review to cut down response time from days to weeks."
        />
        <AnimationCard
          image={anim2}
          title="Increase win rates"
          subtitle="Leverage AI-powered insights and industry best practices to craft compelling, error-free proposals that stand out."
        />

        <AnimationCard
          image={anim3}
          title="Add AEC integrations"
          subtitle="Easily connect tools like Slack, Google Drive, Salesforce, and Procore. Actuality simplifies RFP responses and pre-construction tasks, boosting efficiency and helping you win more bids."
        />
      </div>

      {/* features */}
      <div className="flex flex-col items-center mt-12 md:mt-24 text-center ">
        <Heading className="text-2xl font-semibold md:text-[2.7rem] md:leading-[2.5rem]  mb-6">
          Features that drive results
        </Heading>
        <p className="text-md text-[#6B7280]">
          Empower your team with tools that simplify complexity and elevate
          proposal quality.
          <br className="hidden md:block" />
          From AI-driven insights to seamless collaboration, Actuality helps you
          create standout
          <br className="hidden md:block" />
          submissions that win more projects with less effort.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-rows-auto  md:gap-20 gap-y-8 md:gap-y-24 container mx-auto  mt-12 md:mt-28 ">
        <Tmp2 image={anim4} className="px-8 pt-8 " />
        <Tmp3
          img1="/__0101__new__actuality__/assets/sparkles-dark.svg"
          l1="Content Generation"
          title="Craft compelling proposals effortlessly with AI-powered content generation."
          subtitle="Say goodbye to writer's block and time-consuming research. Our AI-powered content generation tools help you quickly create high-quality, persuasive proposals, freeing up your time to focus on what matters most – winning more projects."
          l2="Generate complete proposal sections in minutes, not hours"
          l3="Trained on thousands of winning AEC proposals"
          l4="Automatic requirement alignment and compliance checking"
          img2="/__0101__new__actuality__/assets/wand-magic.svg"
          img3="/__0101__new__actuality__/assets/brain-circuit.svg"
          img4="/__0101__new__actuality__/assets/check-double.svg"
        />
        <Tmp2 image={anim5} className="px-24 pt-16" />

        <Tmp3
          img1="/__0101__new__actuality__/assets/Primary.svg"
          l1="Collaboration"
          title="Seamless teamwork. Enhanced efficiency. Win together."
          subtitle="Break down silos and streamline communication with our powerful collaboration tools. Work together seamlessly with your team, subcontractors, and stakeholders in a centralised platform, ensuring everyone is aligned and contributing to a winning proposal."
          l2="Chat, comment, and collaborate directly within proposals"
          l3="Stay informed with instant progress notifications"
          l4="Control access and sharing with granular permissions"
          img2="/__0101__new__actuality__/assets/chat.svg"
          img3="/__0101__new__actuality__/assets/clock.svg"
          img4="/__0101__new__actuality__/assets/lock.svg"
        />
        <Tmp2 image={anim6} className="py-32 px-20" />

        <Tmp3
          img1="/__0101__new__actuality__/assets/brain-circuit.svg"
          l1="Collaboration"
          title="Unlock the power of a centralised knowledge hub for RFP success."
          subtitle="Our centralised knowledge hub provides a single source of truth for all your RFP content, including past proposals, technical documentation, and industry best practices. Easily access your collective knowledge to create winning proposals, faster."
          l2="Find winning content in seconds with AI-powered search"
          l3="Access proven templates that consistently win bids"
          l4="Auto-populate proposals with relevant past content"
          img2="/__0101__new__actuality__/assets/magnifying-glass.svg"
          img3="/__0101__new__actuality__/assets/file-certificate.svg"
          img4="/__0101__new__actuality__/assets/folder-grid.svg"
        />
      </div>
      {/* Respond to RFPs 10x faster */}
      <Heading className="text-2xl font-semibold  md:text-[2.7rem] md:leading-[2.5rem] mt-16 mb-8 md:my-36 text-center ">
        Respond to RFPs 10x faster
      </Heading>

      <Tmp44 />


      <div className="md:hidden flex flex-col md:flex-row gap-12 md:gap-24 container mx-auto mb-16 md:mb-32 flex-wrap md:px-0 px-[24px]">
        <Tmp4
          image="/__0101__new__actuality__/assets/trophy.svg"
          title="Boost your RFP win rates by up to 40%"
          subtitle="Leverage smart automation to craft responses that align seamlessly with client expectations, giving you a decisive competitive edge."
        />
        <Tmp4
          image="/__0101__new__actuality__/assets/alarm-clock.svg"
          title="Slash your response time from 200 to 20 hours"
          subtitle="Bid on more projects, maximize your opportunities, and keep your team focused on strategic tasks without burning out."
        />
        <Tmp4
          image="/__0101__new__actuality__/assets/costs.svg"
          title="Cut costs by up to 50% per proposal"
          subtitle="Eliminate inefficiencies and cut costs, simultaneously. Streamline your workflow, reduce errors, and optimize resources to save time."
        />
      </div>

      <Heading className="text-2xl font-semibold md:font-normal md:text-[2.7rem] md:leading-[2.5rem]  mb-12 md:my-36 text-center ">
        Seamless AEC integrations
      </Heading>

      <div className="grid md:grid-cols-2 grid-row-auto gap-4 md:gap-8 container mx-auto md:mb-36  ">
        <Tmp5
          image="/__0101__new__actuality__/assets/puzzle.svg"
          title="Plugins"
          subtitle="Effortlessly connect with industry-leading tools like InDesign, Procore, and Revit to streamline your workflow and improve efficiency."
        />
        <Tmp5
          image="/__0101__new__actuality__/assets/list-check.svg"
          title="Smart Content Manager"
          subtitle="Leverage a centralized hub to organize, update, and reuse your best proposal content, saving time and maintaining consistency."
        />
        <Tmp5
          image="/__0101__new__actuality__/assets/folder-magnifying-glass.svg"
          title="Opportunity Finder"
          subtitle="Stay ahead by identifying the most lucrative RFPs tailored to your expertise, ensuring you never miss a winning opportunity."
        />
        <Tmp5
          image="/__0101__new__actuality__/assets/chart-column.svg"
          title="Data-Driven Risk Analysis"
          subtitle="Make smarter decisions with pricing insights and market risk analytics, ensuring every project is both profitable and strategic."
        />
      </div>

      {/* faq */}
      <div className="flex flex-col md:flex-row container mx-auto my-12 md:my-32  gap-12 md:gap-0  ">
        <Heading className="text-2xl font-semibold md:font-normal text-center md:text-left md:text-[2.7rem] flex-[0.55] md:leading-[2.5rem]">
          Frequently asked questions
        </Heading>
        <div className="flex-[0.45]">
          <FAQs />
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="relative text-center w-full text-white  p-4 py-8 md:px-0 md:py-24 mb-12 md:mb-24 rounded-xl md:rounded-3xl flex flex-col gap-4 md:gap-8 justify-center items-center bg-gradient-to-tr from-[#2B3544] to-[#333D4D] ">
          <div className="absolute top-0 bottom-0 right-0 aspect-square">
            <img
              src="/__0101__new__actuality__/assets/actuality-mini-white.svg"
              style={{
                width: "130%",
                height: "100%",
              }}
              className="translate-x-[45%] md:translate-x-0 scale-130"
            />
          </div>
          <p className="text-3xl md:text-[3rem]">
            Don't let another opportunity slip away.
          </p>
          <p className="text-md text-gray-200 md:text-[1.3rem]">
            Schedule a demo today and discover how Actuality AI can help you win
            more work.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center z-[100000] gap-2 md:gap-4 items-stretch w-full">
            <BookDemoButton className="cursor-pointer w-full p-6 md:p-6 md:py-[1.74rem] rounded-xl md:rounded-2xl text-lg md:text-[1.25rem] text-gray-800 bg-[#E5E7EB] hover:opacity-90 hover:text-gray-800 hover:bg-[#E5E7EB]" />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSek1b_opJpYa1AcAnhx5R81Nh2Fl6_n2w8yan93ry_Zyt9blw/viewform"
              target="_blank"
              className="block"
            >
              <Button
                variant="ghost"
                className="md:w-auto w-full p-6 md:py-[1.7rem] bg-transparent font-semibold border-[1px] border-gray-300 rounded-xl text-md md:text-lg md:text-[1.24rem] text-[#E5E7EB]"
              >
                Request Early Access
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const Tmp5 = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) => {
  return (
    <div className="z-[-2] flex flex-col gap-4 md:gap-6 p-6 md:p-8 rounded-xl border  relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#f7f8fb] -z-10 opacity-[0.96]"></div>
      <div className="absolute top-0 right-0 bottom-0  aspect-square -z-20">
        {/* <div className="min-w-[40px] max-w-[40px] min-h-w-[40px] max-h-[40px]" ></div> */}
        <img
          src={image}
          // width="40"
          // height="40"
          alt={title}
          style={{
            transform: "scale(1.5)",
            width: "120%",
            height: "120%",
          }}
          className="-z-10 seamless_imgs"
        />
      </div>
      <img src={image} style={{width:24, height:24}} alt={title} />

      <Heading className="text-[1.3rem]  leading-[1.3rem] font-semibold text-[#1F2937]">
        {title}
      </Heading>
      <p className="text-[#6B7280] text-md md:text-lg">{subtitle}</p>
    </div>
  );
};

/*
<Tmp4
  image="/__0101__new__actuality__/assets/trophy.png"
  title="Boost your RFP win rates by up to 40%"
  subtitle="Leverage smart automation to craft responses that align seamlessly with client expectations, giving you a decisive competitive edge."
/>
<Tmp4
  image="/__0101__new__actuality__/assets/alarm-clock.png"
  title="Slash your response time from 200 to 20 hours"
  subtitle="Bid on more projects, maximize your opportunities, and keep your team focused on strategic tasks without burning out."
/>
<Tmp4
  image="/__0101__new__actuality__/assets/costs.png"
  title="Cut costs by up to 50% per proposal"
  subtitle="Eliminate inefficiencies and cut costs, simultaneously. Streamline your workflow, reduce errors, and optimize resources to save time."
/>
*/

const assets = [
  "/__0101__new__actuality__/assets/trophy.svg",
  "/__0101__new__actuality__/assets/alarm-clock.svg",
  "/__0101__new__actuality__/assets/costs.svg",
];
const titles = [
  "Boost your RFP win rates by up to 40%",
  "Slash your response time from 200 to 20 hours",
  "Cut costs by up to 50% per proposal",
];
const subtitles = [
  "Leverage smart automation to craft responses that align seamlessly with client expectations, giving you a decisive competitive edge.",
  "Bid on more projects, maximize your opportunities, and keep your team focused on strategic tasks without burning out.",
  "Eliminate inefficiencies and cut costs, simultaneously. Streamline your workflow, reduce errors, and optimize resources to save time.",
];
const Tmp44 = () => {
  return (
    <div className="hidden text-center container mx-auto mb-16 md:mb-32 px-4 md:px-0 md:grid grid-cols-3 gap-x-12 grid-rows-auto">
      {assets.map((image) => (
        <div key={image} className="flex justify-center">
          {" "}
          <div className=" min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] md:max-h-[2.5rem] md:min-w-[3.5rem] md:min-h-[3.5rem] md:max-w-[3.5rem] max-h-[3.5rem] grid place-items-center bg-gray-100 rounded-lg">
            <img
              src={image}
              className="size-[20px] md:size-[30px]"
              alt={image}
            />
          </div>
        </div>
      ))}

      {titles.map((title) => (
        <p
          key={title}
          className=" text-[#1F2937]  text-xl md:text-[1.5rem] font-semibold leading-[2.2rem] my-2 md:my-10"
        >
          {title}
        </p>
      ))}

      {subtitles.map((subtitle) => (
        <p key={subtitle} className="text-[#6B7280] md:text-md">
          {subtitle}
        </p>
      ))}
    </div>
  );
};
const Tmp4 = ({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex-1 flex flex-col text-center items-center ">
      <div className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] md:max-h-[2.5rem] md:min-w-[3.5rem] md:min-h-[3.5rem] md:max-w-[3.5rem] max-h-[3.5rem] grid place-items-center bg-gray-100 rounded-lg">
        <img src={image} className="size-[20px] md:size-[30px]" alt={title} />
      </div>
      <p className="text-[#1F2937]  text-xl md:text-[1.5rem] font-semibold leading-[2.2rem] my-2 md:my-10">
        {title}
      </p>
      <p className="text-[#6B7280] md:text-md">{subtitle}</p>
    </div>
  );
};

const Tmp2 = ({ image, className }: { image: any; className?: string }) => {
  return (
    <div
      className={` md:w-[608px] flex-1 bg-gradient-to-b from-[#F9FAFB] overflow-hidden border to-[#0000ff07] rounded-xl md:rounded-3xl  shadow-sm  `}
    >
      <div className="md:w-[608px] md:h-[512px] overflow-hidden">
        <Lottie animationData={image} loop={true} autoplay={true} />
      </div>
      {/* <img src={image} width="100%" alt="csd" /> */}
    </div>
  );
};

const Tmp3 = ({
  img1,
  img2,
  img3,
  img4,
  title,
  subtitle,
  l1,
  l2,
  l3,
  l4,
}: {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  title: string;
  subtitle: string;
  l1: string;
  l2: string;
  l3: string;
  l4: string;
}) => {
  return (
    <div className="flex-1 flex flex-col gap-4 md:gap-8 ">
      <Tmp1 textClassName="text-lg font-semibold" title={l1} image={img1} />
      <Heading className="text-xl font-semibold md:font-normal md:text-[2.2rem] md:leading-[2.6rem]">
        {title}
      </Heading>
      <p className="text-[#6B7280] text-sm md:text-md md:flex-1 md:flex md:flex-col md:justify-center   ">
        {subtitle}
      </p>
      <div className="flex flex-col gap-2 md:gap-8">
        <Tmp1 title={l2} image={img2} textClassName="text-sm md:text-md" />
        <Tmp1 title={l3} image={img3} textClassName="text-sm md:text-md" />
        <Tmp1 title={l4} image={img4} textClassName="text-sm md:text-md" />
      </div>
    </div>
  );
};
const Tmp1 = ({
  image,
  title,
  textClassName,
}: {
  image: string;
  title: string;
  textClassName?: string;
}) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="min-w-[2.5rem]  min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] grid place-items-center bg-gray-100 rounded-lg">
        <img
          src={image}
          style={{
            width: 20,
            height: 20,
          }}
          alt="csd"
        />
      </div>
      <span className={`text-[#6B7280] md:text-md ${textClassName}`}>
        {title}
      </span>
    </div>
  );
};

const AnimationCard = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: any;
}) => {
  return (
    <div className="rounded-md md:rounded-3xl md:w-1/3 bg-gradient-to-b from-[#F8FAFB] to-[#0000ff07] flex flex-col  items-center gap-4 md:gap-6 px-6 py-6 md:px-14 md:py-8 border-[1px] border-[#E5E7EB]">
      <div className="w-[184px]  h-[184px] overflow-hidden">
        <Lottie animationData={image} loop={true} autoplay={true} />
      </div>
      <Heading className="text-[1.3rem] font-semibold text-[#1F2937] leading-[1.6rem]">
        {title}
      </Heading>
      <p className="text-center text-[#6B7280] text-md md:text-xl">
        {subtitle}
      </p>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row container mx-auto pb-8 md:pb-28 ">
      <div className="flex-1 mt-6 md:mt-0 flex order-last md:order-first ">
        <div className="flex-1">
          <a href="/">
            <img
              src="/__0101__new__actuality__/assets/actuality-mini.svg"
              className="mb-4 md:mb-6"
              width="30"
              height="40"
              alt="actuality-dark-logo.png"
            />
          </a>
          <p className="text-[#6B7280] md:text-lg">
            &#169; 2025 Actuality. All rights reserved.
          </p>
        </div>
        <div className="block md:hidden">
          <LinkedIn />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-16">
        <div>
          <p className="mb-2 md:mb-6 text-xl text-[#6B7280]">Company</p>
          <a href="/">
            <p className="text-[#1F2937] text-md mb-2">Home</p>
          </a>
          <a
            href="https://calendly.com/rishabh_gupta/30min?month=2025-02"
            target="_blank"
          >
            {" "}
            <p className="text-[#1F2937] text-md mb-2">Book a demo</p>
          </a>
        </div>
        <div>
          <p className="mb-2 md:mb-6 text-xl text-[#6B7280]">Legal</p>
          <a href="https://rfp.actuality.live/terms-of-service">
            <p className="text-[#1F2937] text-md mb-2">Terms of service</p>
          </a>
          <a href="https://rfp.actuality.live/privacy-policy">
            <p className="text-[#1F2937] text-md mb-2">Privacy policy</p>{" "}
          </a>
        </div>

        <div className="hidden md:block">
          <LinkedIn />
        </div>
      </div>
    </div>
  );
};

const LinkedIn = () => {
  return (
    <a href="https://www.linkedin.com/company/actuality-live/" target="_blank">
      <img
        src="/__0101__new__actuality__/assets/linkedin.svg"
        alt="linekdin"
        style={{
          width: "30px",
          height: "33px",
        }}
      />
    </a>
  );
};
