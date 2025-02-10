import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const faqs = [
  {
    question: "What is Actuality, and how does it improve the RFP response process?",
    answer: "Actuality is an AI-powered platform designed for the Architecture, Engineering, and Construction (AEC) industry to streamline the RFP response process. It automates content generation, integrates with AEC-specific tools, and enhances proposals with immersive visuals, reducing response times and increasing win rates."
  },
  {
    question: "How does Actuality differ from existing RFP software?",
    answer: "Unlike general RFP automation tools, Actuality is tailored for the AEC industry. It integrates with industry-specific software like Procore and Revit, offers AI-driven pricing recommendations, and supports 3D visualization and XR (Extended Reality) to create more compelling proposals."
  },
  {
    question: "What are the key benefits of using Actuality for my business?",
    answer: "Actuality reduces RFP response time from an average of 200 hours to as little as 20 hours, cutting costs significantly. It also improves accuracy, enhances collaboration, and increases the likelihood of winning bids through better-structured, visually engaging proposals."
  },
  {
    question: "Is Actuality scalable for businesses of different sizes?",
    answer: "Yes, Actuality offers tiered subscription plans to accommodate small, mid-sized, and enterprise-level firms. Each plan includes varying levels of AI assistance, collaboration tools, and integrations to fit different business needs."
  },
  {
    question: "How does Actuality integrate with my existing workflow and software?",
    answer: "The platform seamlessly integrates with key AEC software, ensuring a smooth transition without disrupting existing workflows. It also centralizes past proposals and templates, making knowledge management more efficient."
  }
];

export const FAQs = () => {
  return (
    <Accordion type="single" collapsible>
      {faqs.map((v,i) => (
        <AccordionItem
          value={v.question}
          key={v.question}
        >
          <AccordionTrigger
            className={`py-6 text-gray-900  text-[1.3rem]  leading-[1.3rem] font-semibold hover:no-underline ${i == 0 ? `pt-0` : ""}`}
          >
            {v.question}
          </AccordionTrigger>
          <AccordionContent className="text-[#6B7280] text-lg">
            {v.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
