"use client";
import { BookDemoButton, HeroPage } from "@/components/hero/hero";
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
      <div className="flex flex-col items-center">
        <Heading className="text-[24px] font-[500] text-center md:text-[40px] md:leading-[52px] leading-[32px]">
          Unleash the power of AI for RFP success
        </Heading>
        <p className="text-[16px] md:text-[18px] leading-[28px] text-[#6B7280] text-center mt-[20px] md:mt-[32px]">
          Actuality AI is designed specifically for AEC companies to streamline
          and automate the <br className="hidden md:block" /> RFP process,
          giving you the edge to secure more wins.
        </p>
      </div>

      <div className="flex gap-[24px] md:gap-[40px] mt-[40px] md:mt-[96px] flex-col md:flex-row container mx-auto ">
        <AnimationCard
          image={anim1}
          animSvg="/__0101__new__actuality__/assets/anims/anim1.svg"
          title="Reduce Response Time"
          subtitle="Automate time-consuming tasks like data entry and document review to cut down response time from days to weeks."
        />
        <AnimationCard
          image={anim2}
          animSvg="/__0101__new__actuality__/assets/anims/anim2.svg"
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
      <div className="flex flex-col items-center mt-[40px] text-center md:mt-[128px]">
        <Heading className="  text-[24px] font-[500] text-center md:text-[40px] md:leading-[52px] leading-[32px]">
          Features that drive results
        </Heading>
        <p className="text-[16px] md:text-[18px] leading-[28px] text-[#6B7280] text-center mt-[20px] md:mt-[32px]">
          Empower your team with tools that simplify complexity and elevate
          proposal quality.
          <br className="hidden md:block" />
          From AI-driven insights to seamless collaboration, Actuality helps you
          create standout
          <br className="hidden md:block" />
          submissions that win more projects with less effort.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-rows-auto md:gap-y-[80px] md:gap-[80px]  container mx-auto  mt-[40px] md:mt-[96px] ">
        <Tmp2 image={anim4} />
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
        <Tmp2 image={anim5} />

        <Tmp3
          img1="/__0101__new__actuality__/assets/collab-users.svg"
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
        <Tmp2 image={anim6} />

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
      <Heading className="mt-[48px] md:mt-[128px] mb-[40px] md:mb-[96px] text-[24px] font-[500] text-center md:text-[40px] md:leading-[52px] leading-[32px]">
        Respond to RFPs 10x faster
      </Heading>

      <Tmp44 />

      <div className="md:hidden flex flex-col md:flex-row gap-12 md:gap-24 container mx-auto  flex-wrap ">
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

      <Heading className="mt-[48px] mb-[40px] md:mt-[128px] mb:mb-[96px] text-[24px] font-[500] text-center md:text-[40px] md:leading-[52px] leading-[32px]">
        Seamless AEC integrations
      </Heading>

      <div className="grid md:grid-cols-2 grid-row-auto gap-[24px] md:gap-[40px] container mx-auto">
        <Tmp5
          image="/__0101__new__actuality__/assets/puzzle-bg.svg"
          imageBg="/__0101__new__actuality__/assets/puzzle-bg.svg"
          title="Plugins"
          subtitle="Effortlessly connect with industry-leading tools like InDesign, Procore, and Revit to streamline your workflow and improve efficiency."
        />
        <Tmp5
          image="/__0101__new__actuality__/assets/list-check.svg"
          imageBg="/__0101__new__actuality__/assets/list-check.svg"
          title="Smart Content Manager"
          subtitle="Leverage a centralized hub to organize, update, and reuse your best proposal content, saving time and maintaining consistency."
        />
        <Tmp5
          image="/__0101__new__actuality__/assets/folder-magnifying-glass.svg"
          imageBg="/__0101__new__actuality__/assets/folder-magnifying-glass.svg"
          title="Opportunity Finder"
          subtitle="Stay ahead by identifying the most lucrative RFPs tailored to your expertise, ensuring you never miss a winning opportunity."
        />
        <Tmp5
          image="/__0101__new__actuality__/assets/chart-column.svg"
          imageBg="/__0101__new__actuality__/assets/chart-column.svg"
          title="Data-Driven Risk Analysis"
          subtitle="Make smarter decisions with pricing insights and market risk analytics, ensuring every project is both profitable and strategic."
        />
      </div>

      {/* faq */}
      <div className="flex flex-col md:flex-row container mx-auto gap-[40px] md:gap-0  mt-[48px] md:mt-[128px]">
        <Heading className="md:text-left flex-[0.55] text-[24px] font-[500] text-center md:text-[40px] md:leading-[52px] leading-[32px]">
          Frequently asked questions
        </Heading>
        <div className="flex-[0.45] ">
          <FAQs />
        </div>
      </div>
      <div className="container mx-auto mt-[48px] md:mt-[128px]  mb-[40px] md:mb-[96px]">
        <div className="relative text-center w-full text-white px-[32px] md:px-0 py-[32px] md:py-[80px] rounded-[12px] md:rounded-[24px] flex flex-col justify-center items-center bg-gradient-to-tr from-[#374151] to-[#1F2937] ">
          <div className="absolute top-0 bottom-0 right-0">
            <img
              src="/__0101__new__actuality__/assets/actuality-mini-white.svg"
              style={{
                width: "100%",
                height: "100%",
              }}
              className="translate-x-[50%] md:translate-x-0 scale-[1]"
            />
          </div>
          <p className="text-[24px] leading-[32px] text-[#F9FAFB] md:text-[40px] md:leading-[52px]">
            Don't let another opportunity slip away.
          </p>
          <p className="mt-[20px] mb-[32px] md:mt-[24px] md:mb-[40px] text-[16px] leading-[24px] text-[#E5E7EB] md:text-[20px] md:leading-[32px]">
            Schedule a demo today and discover how Actuality AI can help you win
            more work.
          </p>
          <div className="flex  flex-col md:flex-row md:justify-center z-[100000] gap-[16px] md:gap-4 items-stretch w-full">
            <div className="w-full md:w-auto md:flex-1 md:flex md:justify-end ">
              <a
                href="https://calendly.com/rishabh_gupta/30min?month=2025-02"
                target="_blank"
                className={`bg-gradient-to-b from-[#E5E7EB] hover:bg-[#E5E7EB] transition-all duration-200 to-[#D1D5DB] text-[#1F2937] font-[500] w-full md:w-[140px] h-[44px] md:h-[48px] text-[16px] md:text-[18px] grid place-items-center rounded-[10px] md:rounded-[14px]`}
              >
                Book a demo
              </a>
            </div>
            <div className="w-full md:w-auto md:flex-1 md:flex md:justify-start ">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSek1b_opJpYa1AcAnhx5R81Nh2Fl6_n2w8yan93ry_Zyt9blw/viewform"
                target="_blank"
                className="text-[#E5E7EB] md:text-[18px]  bg-transparent w-full md:w-[210px] hover:text-gray-500 border-[1px] h-[44px] md:h-[48px]  text-[16px]  grid place-items-center rounded-[10px] md:rounded-[14px] font-[500]"
              >
                Request early access
              </a>
            </div>
          </div>
          {/* <div className="flex  flex-col md:flex-row md:justify-center z-[100000] gap-[16px] md:gap-4 items-stretch w-full">

            <div className="w-full md:w-auto md:flex-1 md:flex md:justify-start" >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSek1b_opJpYa1AcAnhx5R81Nh2Fl6_n2w8yan93ry_Zyt9blw/viewform"
              target="_blank"
              className="w-full md:w-[210px] border-[1px] h-[44px] md:h-[48px] text-[16px]  grid place-items-center rounded-[10px] md:rounded-[14px] "
            >
              Request early access
            </a>
            </div>
          </div> */}
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
  imageBg,
}: {
  title: string;
  subtitle: string;
  image: string;
  imageBg: string;
}) => {
  return (
    <div className="z-[-2] flex flex-col gap-4 md:gap-6 p-6 md:p-[24px] relative overflow-hidden seamless-card">
      {/* <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#f7f8fb] _seamless-card-overlay -z-10 opacity-[0.96]"></div> */}
      {/* <div className="absolute top-0 right-0 bottom-0  aspect-square -z-20 ">
        <div className="min-w-[40px] max-w-[40px] min-h-w-[40px] max-h-[40px]" ></div>
        <img
          src={imageBg}
          // width="40"
          // height="40"
          alt={title}
          style={{
            transform: "scale(1.2)",
            width: "100%",
            height: "100%",
            // position:"relative",
            // top:0,
            // right:0,
            // bottom:0,
            // left:0
          }}
          className="-z-10  "
        />
      </div> */}
      <img
        src={image}
        style={{ width: 24, height: 24 }}
        className=""
        alt={title}
      />

      <Heading className="text-[16px]  leading-[24px] font-[500] text-[#1F2937] md:text-[18px] md:leading-[28px]">
        {title}
      </Heading>
      <p className="text-[#6B7280] text-[14px] md:text-[16px]">{subtitle}</p>
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
    <div className="hidden text-center container mx-auto  md:grid grid-cols-3 gap-x-[64px] grid-rows-auto">
      {assets.map((image) => (
        <div key={image} className="flex justify-center">
          <div className=" min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] md:max-h-[2.5rem] md:min-w-[3.5rem] md:min-h-[3.5rem] md:max-w-[3.5rem] max-h-[3.5rem] grid place-items-center bg-gray-100 rounded-[12px] icon-border-anim-maj">
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
          className=" text-[#1F2937]  text-[24px] leading-[32px] font-[500] mt-[32px] mb-[20px]"
        >
          {title}
        </p>
      ))}

      {subtitles.map((subtitle) => (
        <p key={subtitle} className="text-[#6B7280] text-[16px] leading-[24px]">
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
      <div className="min-w-[40px] min-h-[40px] max-w-[40px] md:max-h-[40px] md:min-w-[3.5rem] md:min-h-[3.5rem] md:max-w-[3.5rem] max-h-[3.5rem] grid place-items-center rounded-lg icon-border-anim-maj">
        <img src={image} className="size-[20px]" alt={title} />
      </div>
      <p className="text-[#1F2937]  text-[20px]  leading-[26px] font-[500] mt-[24px] mb-[16px]">
        {title}
      </p>
      <p className="text-[#6B7280] md:text-md">{subtitle}</p>
    </div>
  );
};

const Tmp2 = ({ image }: { image: any }) => {
  return (
    <div
      className={` md:w-[608px] md:h-[512px] mb-[32px] md:mb-0 flex-1  overflow-hidden  rounded-xl md:rounded-[24px] features-card`}
    >
      {/* <div className="md:w-[608px] md:h-[512px] overflow-hidden p--[0.5px]"> */}
      <Lottie animationData={image} loop={true} autoplay={true} />
      {/* </div> */}
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
    <div className="mb-[40px]  md:mb-0 flex-1  flex flex-col justify-center ">
      <Tmp1
        textClassName="text-[#6B7280] text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]"
        title={l1}
        image={img1}
      />
      <p className="text-[#1F2937] text-[600] md:mt-[32px] md:mb-[24px] mt-[24px] mb-[20px] text-[24px] leading-[32px] md:text-[30px] md:leading-[40px]">
        {title}
      </p>
      {/*  md:flex-1 md:flex md:flex-col md:justify-center   */}
      <p className="text-[#6B7280]  md:text-[18px] md:leading-[28px] text-[16px] leading-[24px] mb-[32px] md:mb-0">
        {subtitle}
      </p>
      <div className="flex flex-col gap-[20px] md:gap-y-[20px] md:mt-[32px]">
        <Tmp1
          title={l2}
          image={img2}
          textClassName="text-[16px] leading-[24px]"
        />
        <Tmp1
          title={l3}
          image={img3}
          textClassName="text-[16px] leading-[24px]"
        />
        <Tmp1
          title={l4}
          image={img4}
          textClassName="text-[16px] leading-[24px]"
        />
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
    <div className="flex gap-[20px] items-center">
      <div className="relative min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] md:min-w-[36px] md:min-h-[36px] md:max-w-[36px] md:max-h-[36px] icon-border-anim-mini grid place-items-center rounded-[8px] ">
        {/* <div className="absolute inset-0 rounded-[8px] p-[1px]  -z-10 "></div> */}
        <img
          src={image}
          style={{
            width: 16,
            height: 16,
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
  animSvg,
}: {
  title: string;
  subtitle: string;
  image: any;
  animSvg?: string;
}) => {
  return (
    <div className="rounded-md md:rounded-[16px] md:w-1/3 flex flex-col gap-4 md:gap-0 items-center px-6 py-6 md:px-[32px] md:py-[32px] unleash-card">
      <div className="w-[184px]  h-[184px] overflow-hidden md:mb-[32px] ">
        {animSvg ? (
          <img
            src={animSvg}
            alt={animSvg}
            style={{
              height: 184,
              width: 184,
            }}
          />
        ) : (
          <Lottie animationData={image} loop={true} autoplay={true} />
        )}
      </div>
      <Heading className="text-[1.3rem] font-[500] text-[#1F2937] md:text-[18px] md:leading-[28px]  md:mb-[18px]">
        {title}
      </Heading>
      <p className="text-center text-[#6B7280] md:text-[16px]  text-[400] md:leading-[24px]  ">
        {subtitle}
      </p>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row container mx-auto  mb-[24px] md:mb-[96px]">
      <div className="flex-1 mt-6 md:mt-0 flex order-last md:order-first ">
        <div className="flex-1 ">
          <a href="/">
            <img
              src="/__0101__new__actuality__/assets/actuality-mini.svg"
              className="hidden md:block mb-[15px] md:mb-[24px]"
              style={{
                width: 28,
                height: 28,
              }}
              alt="actuality-dark-logo.png"
            />
            <img
              src="/__0101__new__actuality__/assets/actuality-mini.svg"
              className="block md:hidden mb-[15px] md:mb-[24px]"
              style={{
                width: 24,
                height: 24,
              }}
              alt="actuality-dark-logo.png"
            />
          </a>
          <p className="text-[#6B7280] text-[16px]">
            &#169; 2025 Actuality. All rights reserved.
          </p>
        </div>
        <div className="block md:hidden">
          <LinkedIn />
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        <div className="md:mr-[30px] mb-[24px] md:mb-0 md:w-[168px]">
          <p className="mb-[16px] md:mb-[20px] text-[16px] leading-[24px] text-[#6B7280] ">
            Company
          </p>
          <a href="/">
            <p className="text-[#1F2937] mb-[4px] md:mb-2 text-[16px] leading-[24px]">
              Home
            </p>
          </a>
          <a
            href="https://calendly.com/rishabh_gupta/30min?month=2025-02"
            target="_blank"
          >
            {" "}
            <p className="text-[#1F2937] text-[16px] leading-[24px] md:mb-2">
              Book a demo
            </p>
          </a>
        </div>
        <div className=" m-40px] md:mb-0 md:w-[168px]">
          <p className="mb-[16px] md:mb-[20px] text-[#6B7280] text-[16px] leading-[24px]">
            Legal
          </p>
          <a href="https://rfp.actuality.live//terms-of-service">
            <p className="text-[#1F2937] text-[16px] leading-[24px] mb-[4px] md:mb-2">
              Terms of service
            </p>
          </a>
          <a href="https://rfp.actuality.live//privacy-policy">
            <p className="text-[#1F2937] text-[16px] leading-[24px] mb-2">
              Privacy policy
            </p>{" "}
          </a>
        </div>

        <div className="hidden md:block md:ml-[24px]">
          <LinkedIn />
        </div>
      </div>
    </div>
  );
};

const LinkedIn = () => {
  return (
    <a
      href="https://www.linkedin.com/company/actuality-live/"
      target="_blank"
      className="size-[20px] md:size-[24px]"
    >
      <img
        src="/__0101__new__actuality__/assets/linkedin.svg"
        alt="linekdin"
        style={{
          width: "24px",
          height: "24px",
        }}
        className="block md:hidden"
      />
      <img
        className="hidden md:block"
        src="/__0101__new__actuality__/assets/linkedin.svg"
        alt="linekdin"
        style={{
          width: "28px",
          height: "28px",
        }}
      />
    </a>
  );
};
