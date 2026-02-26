import { ComponentType } from "react";
import SlideCover from "@/components/slides/SlideCover";
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

export interface Slide {
  component: ComponentType;
  title: string;
}

export const slides: Slide[] = [
  { component: SlideCover, title: "Cover" },
  { component: SlideIntro, title: "Intro + Promesa" },
  { component: SlideFramework, title: "Framework UTDI" },
  { component: SlideUnderstand, title: "Understand" },
  { component: SlideTranslate, title: "Translate" },
  { component: SlideDeliver, title: "Deliver" },
  { component: SlideImprove, title: "Improve" },
  { component: SlideSpellbook, title: "Caso: Spellbook" },
  { component: SlideRCN, title: "Caso: RCN DW" },
  { component: SlideMatas, title: "Integración Matas" },
  { component: SlideStress, title: "Estrés: BNS Bug" },
  { component: SlideDone, title: "Done + Métricas" },
  { component: SlideClosing, title: "Cierre: bet365" },
];
