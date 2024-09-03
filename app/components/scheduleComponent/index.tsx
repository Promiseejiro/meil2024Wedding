import { Button } from "@/components/ui/button";
import { CalendarHeart, MapPinCheckInside } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import rccg2 from "../../../public/assets/rccg2.svg";

const ScheduleComponent = () => {
  return (
    <div className="mx-6 my-10 p-6">
      <h4
        className="border-b-[2px] border-gray-200 border-solid pb-4 text-black text-2xl text-center font-light"
        style={{ fontFamily: "poppins" }}
      >
        Saturday March 30, 2024
      </h4>
      <h4
        className="p-4 text-black text-2xl text-center "
        style={{ fontFamily: "poppins" }}
      >
        Pre-Wedding Shot
      </h4>
      <h4
        className="text-gray-600 text-center "
        style={{ fontFamily: "poppins" }}
      >
        5:00 PM
      </h4>

      <Button
        variant="outline"
        className="rounded-[1.5rem] py-6 px-4 w-full font-bold text-gray-600 text-lg mt-2"
        style={{ fontFamily: "poppins" }}
      >
        <CalendarHeart className="mr-4 " color={` rgb(107 114 128 ) `} />
        Add to calender
      </Button>
      <p
        className="text-black text-lg mt-4"
        style={{
          fontFamily: "poppins",
        }}
      >
        We will capture our love story with a stunning pre-wedding shot. Just
        the two of us and few friend with the media team, against the backdrop.
      </p>
      <p className="text-lg my-4 text-black font-bold">Church Blessing</p>
      <Image
        src={rccg2}
        alt="rccg"
        className="w-full h-auto rounded-[5rem]"
        width={50}
        height={50}
      />

      <div className="flex items-baseline gap-2 mt-2">
        <MapPinCheckInside color="#7f1ac7" />
        <Link
          color="#7f1ac7"
          href="https://maps.app.goo.gl/dZctGaj7bExCqKkw8"
          className="text-lg "
        >
          RCCG, Desire Of Nations Parish
        </Link>
      </div>
    </div>
  );
};

export default ScheduleComponent;
