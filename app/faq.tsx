import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQs = () => {
  return (
    <Accordion type="single" collapsible>
      {[1, 2, 3, 4, 5].map((v) => (
        <AccordionItem
          value={v.toString()}
          key={v.toString() + Math.random().toString()}
        >
          <AccordionTrigger
            className={`py-6 text-gray-900  text-[1.3rem]  leading-[1.3rem] font-semibold hover:no-underline ${v == 1 ? `pt-0` : ""}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </AccordionTrigger>
          <AccordionContent className="text-[#6B7280] text-lg">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
