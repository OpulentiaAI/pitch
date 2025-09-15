"use client";

import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { CarouselToolbar } from "./carousel-toolbar";
import { SectionS1Agent } from "@/components/pitch/section-s1-agent";
import { SectionS2Pillars } from "@/components/pitch/section-s2-pillars";
import { SectionS3Patterns } from "@/components/pitch/section-s3-patterns";
import { SectionS4Survey } from "@/components/pitch/section-s4-survey";
import { SectionS5Cursor } from "@/components/pitch/section-s5-cursor";
import { SectionS6Rollout } from "@/components/pitch/section-s6-rollout";
import { SectionS7Temporal } from "@/components/pitch/section-s7-temporal";
import { SectionS8Daytona } from "@/components/pitch/section-s8-daytona";
import { SectionS9Optimizations } from "@/components/pitch/section-s9-optimizations";
import { SectionS10Memory } from "@/components/pitch/section-s10-memory";
import { SectionS11Evidence } from "@/components/pitch/section-s11-evidence";
import { SectionS12Demo } from "@/components/pitch/section-s12-demo";
import { SectionRubric } from "@/components/pitch/section-rubric";
import { SectionCommands } from "@/components/pitch/section-commands";

export function PitchCarusel() {
  const [views, setViews] = useState(0);
  const called = useRef(false);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!called.current) {
      setViews(0);
      called.current = true;
    }
  }, [called.current]);

  return (
    <Carousel className="w-full min-h-full relative" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <SectionS1Agent />
        </CarouselItem>
        <CarouselItem>
          <SectionS2Pillars />
        </CarouselItem>
        <CarouselItem>
          <SectionS3Patterns />
        </CarouselItem>
        <CarouselItem>
          <SectionS4Survey />
        </CarouselItem>
        <CarouselItem>
          <SectionS5Cursor />
        </CarouselItem>
        <CarouselItem>
          <SectionS6Rollout />
        </CarouselItem>
        <CarouselItem>
          <SectionS7Temporal />
        </CarouselItem>
        <CarouselItem>
          <SectionS8Daytona />
        </CarouselItem>
        <CarouselItem>
          <SectionS9Optimizations />
        </CarouselItem>
        <CarouselItem>
          <SectionS10Memory />
        </CarouselItem>
        <CarouselItem>
          <SectionS11Evidence />
        </CarouselItem>
        <CarouselItem>
          <SectionS12Demo />
        </CarouselItem>
        <CarouselItem>
          <SectionRubric />
        </CarouselItem>
        <CarouselItem>
          <SectionCommands />
        </CarouselItem>
      </CarouselContent>
      <CarouselToolbar views={views} />
    </Carousel>
  );
}
