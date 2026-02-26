import { ComponentType } from "react";
import SlideCover from "@/components/slides/SlideCover";
import SlideAboutMe from "@/components/slides/SlideAboutMe";
import SlideIntro from "@/components/slides/SlideIntro";
import SlideFramework from "@/components/slides/SlideFramework";
import SlideUnderstand from "@/components/slides/SlideUnderstand";
import SlideTranslate from "@/components/slides/SlideTranslate";
import SlideDeliver from "@/components/slides/SlideDeliver";
import SlideImprove from "@/components/slides/SlideImprove";
import SlideSpellbook from "@/components/slides/SlideSpellbook";
import SlideRCN from "@/components/slides/SlideRCN";
import SlideMatas from "@/components/slides/SlideMatas";
import SlideStress from "@/components/slides/SlideStress";
import SlideDone from "@/components/slides/SlideDone";
import SlideClosing from "@/components/slides/SlideClosing";
import SlideThankYou from "@/components/slides/SlideThankYou";

export interface Slide {
  component: ComponentType<{ onNavigate?: (index: number) => void }>;
  title: string;
}

export const slides: Slide[] = [
  { component: SlideCover, title: "Cover" },
  { component: SlideAboutMe, title: "About Me" },
  { component: SlideIntro, title: "My Promise" },
  { component: SlideFramework, title: "UTDI Framework" },
  { component: SlideUnderstand, title: "Understand" },
  { component: SlideTranslate, title: "Translate" },
  { component: SlideDeliver, title: "Deliver" },
  { component: SlideImprove, title: "Improve" },
  { component: SlideSpellbook, title: "Case: Spellbook" },
  { component: SlideRCN, title: "Case: RCN DW" },
  { component: SlideMatas, title: "Matas Integration" },
  { component: SlideStress, title: "Stress: BNS Bug" },
  { component: SlideDone, title: "Done + Metrics" },
  { component: SlideClosing, title: "Closing: bet365" },
  { component: SlideThankYou, title: "Thank You" },
];
