import {
  BookDemoButton,
  ContactButtons,
  HeroPage,
} from "@/components/hero/hero";
import { Heading, SubHeading } from "@/components/typography";
import { subtle } from "node:crypto";
import { FAQs } from "./faq";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div
        className="absolute left-0 right-0 -z-10 overflow-hidden"
        style={{
          minHeight: "110vh",
          maxHeight: "110vh",
          background:
            "linear-gradient(to bottom, #EEF2FF 0%, #F9FAFB 50%, #EEF2FF 90%)",
        }}
      />

      <HeroPage />
      <div className="flex flex-col items-center">
        <Heading className="text-[2.4rem] leading-[2.4rem] mt-10 mb-6">
          Unleash the power of AI for RFP success
        </Heading>
        <SubHeading className="text-2xl text-[#6B7280]">
          Actuality AI is designed specifically for AEC companies to streamline
          and automate the
        </SubHeading>
        <SubHeading className="text-2xl text-[#6B7280]">
          RFP process, giving you the edge to secure more wins.
        </SubHeading>
      </div>

      <div className="flex gap-12  mt-32 mb-20 container mx-auto">
        <AnimationCard
          image="/assets/anim4.svg"
          title="Reduce Response Time"
          subtitle="Automate time-consuming tasks like data entry and document review to cut down response time from days to weeks."
        />
        <AnimationCard
          image="/assets/anim2.svg"
          title="Increase win rates"
          subtitle="Leverage AI-powered insights and industry best practices to craft compelling, error-free proposals that stand out."
        />

        <AnimationCard
          image="/assets/anim2.svg"
          title="Add AEC integrations"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        {/* <AnimationCard
          image="/assets/anim2.svg"
          title="Add AEC integrations"
          subtitle="Easily connect tools like Slack, Google Drive, Salesforce, and Procore. Actuality simplifies RFP responses and pre-construction tasks, boosting efficiency and helping you win more bids."
        /> */}
      </div>

      {/* features */}
      <div className="flex flex-col items-center  mb-32  ">
        <Heading className="text-[2.4rem] leading-[2.4rem] mt-10 mb-6">
          Features that drive results
        </Heading>
        <SubHeading className="text-2xl text-[#6B7280]">
          Empower your team with tools that simplify complexity and elevate
          proposal quality.
        </SubHeading>
        <SubHeading className="text-2xl text-[#6B7280]">
          From AI-driven insights to seamless collaboration, Actuality helps you
          create standout
        </SubHeading>
        <SubHeading className="text-2xl text-[#6B7280]">
          submissions that win more projects with less effort.
        </SubHeading>
      </div>
      <div className="grid grid-cols-2 grid-rows-auto gap-20 container mx-auto">
        <Tmp2 image="/assets/team-selector.png" className="px-8 pt-8 " />
        <Tmp3
          img1="/assets/sparkles.png"
          l1="Content Generation"
          title="Craft compelling proposals effortlessly with AI-powered content generation."
          subtitle="Say goodbye to writer's block and time-consuming research. Our AI-powered content generation tools help you quickly create high-quality, persuasive proposals, freeing up your time to focus on what matters most – winning more projects."
          l2="Generate complete proposal sections in minutes, not hours"
          l3="Trained on thousands of winning AEC proposals"
          l4="Automatic requirement alignment and compliance checking"
          img2="/assets/wand-magic.png"
          img3="/assets/primary.png"
          img4="/assets/double-check.png"
        />
        <Tmp2 image="/assets/colloboration.png" className="px-24 pt-16" />

        <Tmp3
          img1="/icons/users.png"
          l1="Collaboration"
          title="Seamless teamwork. Enhanced efficiency. Win together."
          subtitle="Break down silos and streamline communication with our powerful collaboration tools. Work together seamlessly with your team, subcontractors, and stakeholders in a centralised platform, ensuring everyone is aligned and contributing to a winning proposal."
          l2="Chat, comment, and collaborate directly within proposals"
          l3="Stay informed with instant progress notifications"
          l4="Control access and sharing with granular permissions"
          img2="/icons/messages.png"
          img3="/icons/clock.png"
          img4="/icons/lock.png"
        />
        <Tmp2 image="/assets/knowledgehub.png" className="py-32 px-20" />

        <Tmp3
          img1="/assets/primary.png"
          l1="Collaboration"
          title="Unlock the power of a centralised knowledge hub for RFP success."
          subtitle="Our centralised knowledge hub provides a single source of truth for all your RFP content, including past proposals, technical documentation, and industry best practices. Easily access your collective knowledge to create winning proposals, faster."
          l2="Find winning content in seconds with AI-powered search"
          l3="Access proven templates that consistently win bids"
          l4="Auto-populate proposals with relevant past content"
          img2="/icons/magnifying-glass.png"
          img3="/icons/file-certificate.png"
          img4="/icons/folder-grid.png"
        />
      </div>
      {/* Respond to RFPs 10x faster */}
      <Heading className="text-[2.7rem] leading-[2.5rem] my-36 text-center">
        Respond to RFPs 10x faster
      </Heading>

      <div className="flex gap-24 container mx-auto mb-32 flex-wrap">
        <Tmp4
          image="/icons/trophy.png"
          title="Boost your RFP win rates by up to 40%"
          subtitle="Leverage smart automation to craft responses that align seamlessly with client expectations, giving you a decisive competitive edge."
        />
        <Tmp4
          image="/icons/alarm-clock.png"
          title="Slash your response time from 200 to 20 hours"
          subtitle="Bid on more projects, maximize your opportunities, and keep your team focused on strategic tasks without burning out."
        />
        <Tmp4
          image="/icons/costs.png"
          title="Cut costs by up to 50% per proposal"
          subtitle="Eliminate inefficiencies and cut costs, simultaneously. Streamline your workflow, reduce errors, and optimize resources to save time."
        />
      </div>

      <Heading className="text-[2.7rem] leading-[2.5rem] my-36 text-center">
        Seamless AEC integrations
      </Heading>

      <div className="grid grid-cols-2 grid-row-auto gap-8 container mx-auto mb-36">
        <Tmp5
          image="/icons/puzzle.png"
          title="Plugins"
          subtitle="Effortlessly connect with industry-leading tools like InDesign, Procore, and Revit to streamline your workflow and improve efficiency."
        />
        <Tmp5
          image="/icons/list-check.png"
          title="Smart Content Manager"
          subtitle="Leverage a centralized hub to organize, update, and reuse your best proposal content, saving time and maintaining consistency."
        />
        <Tmp5
          image="/icons/folder-magnifying.png"
          title="Opportunity Finder"
          subtitle="Stay ahead by identifying the most lucrative RFPs tailored to your expertise, ensuring you never miss a winning opportunity."
        />
        <Tmp5
          image="/icons/chart-column.png"
          title="Data-Driven Risk Analysis"
          subtitle="Make smarter decisions with pricing insights and market risk analytics, ensuring every project is both profitable and strategic."
        />
      </div>

      {/* faq */}
      <div className="flex container mx-auto my-32">
        <Heading className="text-[2.7rem] flex-[0.55] leading-[2.5rem]">
          Frequently asked questions
        </Heading>
        <div className="flex-[0.45]">
          <FAQs />
        </div>
      </div>

      <div className="relative container text-white py-24 mb-24 mx-auto rounded-3xl flex flex-col gap-8 justify-center items-center bg-gradient-to-tr from-[#2B3544] to-[#333D4D] ">
        <div className="absolute top-0 bottom-0 right-0 aspect-square">
          <img
            src="/assets/actuality-logo.png"
            style={{
              width: "130%",
              height: "100%",
              transform: "scaleX(1.3)",
            }}
          />
        </div>
        <p className="text-[3rem]">Don't let another opportunity slip away.</p>
        <p className="text-[1.3rem]">
          Schedule a demo today and discover how Actuality AI can help you win
          more work.
        </p>
        <div className="flex justify-center gap-4 items-stretch">
          <BookDemoButton className="p-6 py-[1.74rem] rounded-2xl text-[1.25rem] text-gray-800 bg-[#E5E7EB] hover:opacity-90 hover:text-gray-800 hover:bg-[#E5E7EB]" />
          <Button
            variant="ghost"
            className="p-6 py-[1.7rem] bg-transparent font-semibold border-[1px] border-gray-300 rounded-xl text-lg text-[1.24rem] text-[#E5E7EB]"
          >
            Request Early Access
          </Button>
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
    <div className="flex flex-col gap-6 p-8 rounded-xl border  relative z-20 overflow-hidden">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#f7f8fb] -z-10 opacity-[0.96]"></div>
      <div className="absolute top-0 right-0 bottom-0 aspect-square log-1 -z-20">
        <img
          src={image}
          width="40"
          height="40"
          alt={title}
          style={{
            transform: "scale(1.5)",
            width: "120%",
            height: "120%",
          }}
          className="-z-10"
        />
      </div>
      <img src={image} width="30" height="30" alt={title} />

      <Heading className="text-[1.3rem]  leading-[1.3rem] font-semibold text-[#1F2937]">
        {title}
      </Heading>
      <p className="text-[#6B7280] text-lg">{subtitle}</p>
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
    <div className="flex-1 flex flex-col justify-center text-center items-center gap-10">
      <div className="size-14 grid place-items-center bg-gray-100 rounded-lg">
        <img src={image} width="30" height="30" alt={title} />
      </div>
      <p className="text-[#1F2937] text-[1.8rem] font-semibold leading-[2.2rem]">
        {title}
      </p>
      <p className="text-[#6B7280] text-lg">{subtitle}</p>
    </div>
  );
};

const Tmp2 = ({ image, className }: { image: string; className?: string }) => {
  return (
    <div
      className={`flex-1 bg-gradient-to-b from-white  to-[#0000ff07] rounded-3xl  shadow-sm  ${className}`}
    >
      <img src={image} width="100%" alt="csd" />
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
    <div className="flex-1 flex flex-col gap-8">
      <Tmp1 textClassName="text-lg  font-semibold" title={l1} image={img1} />
      <Heading className="text-[2.2rem] leading-[2.6rem]">{title}</Heading>
      <SubHeading className="text-[1.5rem] leading-[2.1rem]">
        {subtitle}
      </SubHeading>
      <div className="flex flex-col gap-8">
        <Tmp1 title={l2} image={img2} />
        <Tmp1 title={l3} image={img3} />
        <Tmp1 title={l4} image={img4} />
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
      <div className="size-10 grid place-items-center bg-gray-100 rounded-lg">
        <img src={image} width="22" height="22" alt="csd" />
      </div>
      <span className={`text-[#6B7280] text-lg ${textClassName}`}>{title}</span>
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
  image: string;
}) => {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-[#F8FAFB] to-[#0000ff07] flex flex-col  items-center gap-6 px-14 py-8 border-[1px] border-[#E5E7EB  ]">
      <img
        src={image}
        style={{
          width: 184,
          height: 184,
          overflow: "hidden",
        }}
        alt={title}
      />
      <Heading className="text-[1.3rem] font-semibold text-[#1F2937] leading-[1.6rem]">
        {title}
      </Heading>
      <SubHeading className="text-center">{subtitle}</SubHeading>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex container mx-auto pb-28">
      <div className="flex-1 flex flex-col">
        <img
          src="/assets/actuality-dark-logo.png"
          className="mb-6"
          width="30"
          height="40"
          alt="actuality-dark-logo.png"
        />
        <p className="text-[#6B7280] text-lg">
          &#169; 2025 Actuality. All rights reserved.
        </p>
        {/* ©  */}
      </div>

      <div className="flex gap-16">
        <div>
          <p className="mb-6 text-xl text-[#6B7280]">Company</p>
          <p className="text-[#1F2937] text-md mb-2">Home</p>
          <p className="text-[#1F2937] text-md mb-2">Book a demo</p>
        </div>
        <div>
          <p className="mb-6 text-xl text-[#6B7280]">Legal</p>
          <p className="text-[#1F2937] text-md mb-2">Terms of service</p>
          <p className="text-[#1F2937] text-md mb-2">Privacy policy</p>
        </div>

        <img
          src="/assets/linkedin.png"
          alt="linekdin"
          className="log- "
          style={{
            width: "30px",
            height: "35px",
          }}
        />
      </div>
    </div>
  );
};
