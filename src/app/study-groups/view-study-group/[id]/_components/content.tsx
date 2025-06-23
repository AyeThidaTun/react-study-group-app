import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function Contents() {
  return (
    <section className="">
      <h2 className="text-xl font-bold py-5">Description</h2>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. There are
        many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised
        words which do not look even slightly believable. If you are going to
        use a passage of Lorem Ipsum, you need to be sure there is not anything
        embarrassing hidden in the middle of text.
      </span>
      <Separator orientation="horizontal" className="my-10" />

      <h2 className="text-xl font-bold">Frequently Asked Questions (FAQs)</h2>
      <Accordion
        type="single"
        collapsible
        className="w-full py-5"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Who the members are</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Our flagship product combines cutting-edge technology
              with sleek design. Built with premium materials, it offers
              unparalleled performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an
              intuitive user interface designed for both beginners and experts.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What we usually discuss about</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days, while express shipping
              ensures delivery within 1-2 business days.
            </p>
            <p>
              All orders are carefully packaged and fully insured. Track your
              shipment in real-time through our dedicated tracking portal.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Why we created this group</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
            <p>
              Our hassle-free return process includes free return shipping and
              full refunds processed within 48 hours of receiving the returned
              item.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
