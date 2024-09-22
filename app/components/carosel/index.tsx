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
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );


  const images=[
   "https://res.cloudinary.com/dxqg5hify/image/upload/v1726125878/0K0A2219_glh10g.png","https://res.cloudinary.com/dxqg5hify/image/upload/v1726125878/0K0A2258_lpogkk.png","https://res.cloudinary.com/dxqg5hify/image/upload/v1726125877/0K0A2263_u5oq1x.png",
   "https://res.cloudinary.com/dxqg5hify/image/upload/v1726125876/0K0A2217_yz8s9t.png",
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="p-0 h-full mx-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      
    >
      <CarouselContent className="w-full border-solid h-full pr-0">{
        images.map((image, index) => (
          <CarouselItem key={index} className="h-full pr-0 w-full rounded-none -ml-1">
              <Card className="p-0 bg-primary h-screen w-full border-1 border-primary rounded-none"   style={{
                    backgroundImage: `url('${image}')`,
                    height: "100vh",
                    // marginTop: "-70px",
                    fontSize: "50px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}>
                {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
                {/* </CardContent> */}
              </Card>
          </CarouselItem>
        ))
        }
     
      </CarouselContent>
    </Carousel>
  );
}
