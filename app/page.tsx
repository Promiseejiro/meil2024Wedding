import Image from "next/image";
import { CarouselPlugin } from "./components/carosel";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { CalendarHeart, MapPinCheckInside } from "lucide-react";
import Link from "next/link";
import miel from "../public/assets/miel.svg";
import { stories, faqs } from "./data/data";
import Title from "./components/SectionTitle";
import ScheduleComponent from "./components/scheduleComponent";
export default function Home() {
  return (
    <main className="block md:flex h-screen w-full bg-[#faf8f5] md:overflow-hidden">
      <div className="w-full md:w-[60%] md:static ">
        <CarouselPlugin />
      </div>
      <div className="w-full md:w-[40%] md:overflow-y-scroll py-32 text-primary px-0">
        <div className="px-4">
          <h2 className="text-5xl text-center ">Saturday</h2>
          <h2 className="text-5xl text-center"> June 29, 2024</h2>
          <h3 className="text-3xl text-center py-4">Yola, Nigeria</h3>
          <h5 className="text-center ">65 days 12 hrs 10 mins ago</h5>
          <div className="flex items-center justify-center mt-6">
            <Button
              variant="outline"
              className="m-auto px-8 rounded-none text-lg"
            >
              RSVS
            </Button>
          </div>
        </div>
        <Image
          src={miel}
          className="w-full h-auto"
          alt="miel"
          height={50}
          width={50}
        />

        <div>
          <Title text="Story" />
          {stories.map((piece: string, index: number) => (
            <p
              className="p-4 md:p-6 text-lg text-black"
              style={{
                fontFamily: "poppins",
              }}
              key={index}
            >
              {piece}
            </p>
          ))}
        </div>
        <div>
          <Title text="FAQ's" />
          {faqs.map((faq: { ques: string; ans: string }, index: number) => (
            <div key={index} className="p-4">
              <h5
                className="text-xl text-black"
                style={{
                  fontFamily: "poppins",
                }}
              >
                {faq.ques}
              </h5>
              <p
                className="text-xl text-black"
                style={{
                  fontFamily: "poppins",
                }}
              >
                {faq.ans}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Title text="Schedule" />
          <ScheduleComponent />
          <ScheduleComponent />
          <ScheduleComponent />
        </div>
        <div>
          <Title text="Couples pictures" />
        </div>
        <div>
          <Title text="Gifts" />
          <p
            className="p-4 md:p-6 text-lg text-black text-center"
            style={{
              fontFamily: "poppins",
            }}
          >
            Here is a link to our wedding expense list...
          </p>
          <p
            className="p-4 md:p-6 text-lg text-black text-center"
            style={{
              fontFamily: "poppins",
            }}
          >
            We would be incredibly grateful for your generosity and support
            during our wedding. If you wish to bless us in this way, please feel
            free to contact Segun at 08104788898, or you can simply send your
            contribution to the following account:
          </p>
          <p
            className="p-4 md:p-6 text-lg text-black text-center"
            style={{
              fontFamily: "poppins",
            }}
          >
            For Naira Account: Account Name:Akanbi Segun Damilare Account
            Number: 0763841443 Access Bank Plc.
          </p>
          <p
            className="p-4 md:p-6 text-lg text-black text-center"
            style={{
              fontFamily: "poppins",
            }}
          >
            For Dollar Account: Account Name:Akanbi Segun Damilare Account
            Number: 1489270931 Access Bank Plc.
          </p>
          <p
            className="p-4 md:p-6 text-lg text-black text-center"
            style={{
              fontFamily: "poppins",
            }}
          >
            God bless your Generosity in Jesus’s Name.
          </p>
        </div>
      </div>
    </main>
  );
}
