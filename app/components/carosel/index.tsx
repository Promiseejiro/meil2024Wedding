"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import imagePar from "../../../public/assets/download.jpeg";
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="p-0 h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full border-solid h-full pr-0">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="h-full pr-0 w-full">
            <div>
              <Card className="p-0 bg-primary h-screen w-full">
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                <div
                  className=""
                  style={{
                    backgroundImage: `url('${imagePar}')`,
                    height: "100vh",
                    marginTop: "-70px",
                    fontSize: "50px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                {/* </CardContent> */}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
