"use client";

import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { CarouselToolbar } from "./carousel-toolbar";
import { SectionOpulentStart } from "@/components/pitch/section-opulent-start";
import { SectionS1Agent } from "@/components/pitch/section-s1-agent";
import { SectionInsightsReasoning } from "@/components/pitch/section-insights-reasoning";
import { SectionInsightsThemes } from "@/components/pitch/section-insights-themes";
import { SectionInsightsWhatAgents } from "@/components/pitch/section-insights-what-agents";
import { SectionInsightsDomainsBenefits } from "@/components/pitch/section-insights-domains-benefits";
import { SectionInsightsCodingMarket } from "@/components/pitch/section-insights-coding-market";
import { Section12Factor } from "@/components/pitch/section-12factor";
import { Section12FactorChecklist } from "@/components/pitch/section-12factor-checklist";
import { SectionCognition } from "@/components/pitch/section-cognition";
import { SectionFrontier } from "@/components/pitch/section-frontier";
import { SectionWorkshop } from "@/components/pitch/section-workshop";
import { SectionWorkshopCTA } from "@/components/pitch/section-workshop-cta";
import { SectionS7Temporal } from "@/components/pitch/section-s7-temporal";
import { SectionS8Daytona } from "@/components/pitch/section-s8-daytona";
import { SectionS9Optimizations } from "@/components/pitch/section-s9-optimizations";
import { SectionS3Patterns } from "@/components/pitch/section-s3-patterns";
import { SectionS11Evidence } from "@/components/pitch/section-s11-evidence";
import { SectionS6Rollout } from "@/components/pitch/section-s6-rollout";
import { SectionS2Pillars } from "@/components/pitch/section-s2-pillars";
import { SectionS5Cursor } from "@/components/pitch/section-s5-cursor";
import { SectionS10Memory } from "@/components/pitch/section-s10-memory";
import { SectionS12Demo } from "@/components/pitch/section-s12-demo";
import { SectionRubric } from "@/components/pitch/section-rubric";
import { SectionCommands } from "@/components/pitch/section-commands";
import { SectionOpulentEnd } from "@/components/pitch/section-opulent-end";

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
          <SectionOpulentStart />
        </CarouselItem>
        <CarouselItem>
          <SectionS1Agent />
        </CarouselItem>
        <CarouselItem>
          <SectionInsightsReasoning />
        </CarouselItem>
        <CarouselItem>
          <SectionInsightsThemes />
        </CarouselItem>
        <CarouselItem>
          <SectionInsightsWhatAgents />
        </CarouselItem>
        <CarouselItem>
          <SectionInsightsDomainsBenefits />
        </CarouselItem>
        <CarouselItem>
          <SectionInsightsCodingMarket />
        </CarouselItem>
        <CarouselItem>
          <Section12Factor />
        </CarouselItem>
        <CarouselItem>
          <Section12FactorChecklist />
        </CarouselItem>
        <CarouselItem>
          <SectionCognition />
        </CarouselItem>
        <CarouselItem>
          <SectionFrontier />
        </CarouselItem>
        <CarouselItem>
          <SectionS7Temporal />
        </CarouselItem>
        <CarouselItem>
          <SectionS8Daytona />
        </CarouselItem>
        <CarouselItem>
          <SectionWorkshop />
        </CarouselItem>
        <CarouselItem>
          <SectionWorkshopCTA />
        </CarouselItem>
        <CarouselItem>
          <SectionS9Optimizations />
        </CarouselItem>
        <CarouselItem>
          <SectionS3Patterns />
        </CarouselItem>
        <CarouselItem>
          <SectionS11Evidence />
        </CarouselItem>
        <CarouselItem>
          <SectionS6Rollout />
        </CarouselItem>
        <CarouselItem>
          <SectionS2Pillars />
        </CarouselItem>
        <CarouselItem>
          <SectionS10Memory />
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
        <CarouselItem>
          <SectionOpulentEnd />
        </CarouselItem>
      </CarouselContent>
      <CarouselToolbar views={views} />
    </Carousel>
  );
}
