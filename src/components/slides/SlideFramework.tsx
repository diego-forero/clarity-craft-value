import SlideLayout, { SlideTitle, SlideSubtitle, Badge } from "@/components/SlideLayout";
import { Search, ArrowRightLeft, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, label: "Understand", desc: "E2E: usuario, flujo, datos, riesgos, SLAs", color: "text-primary" },
  { icon: ArrowRightLeft, label: "Translate", desc: "Outcomes + historias con AC + NFRs + slicing", color: "text-slide-accent-green" },
  { icon: Rocket, label: "Deliver", desc: "Planning, ownership, reviews, pairing, CI/CD", color: "text-primary" },
  { icon: TrendingUp, label: "Improve", desc: "Operar, métricas, retro, roadmap de mejoras", color: "text-slide-accent-green" },
];

const SlideFramework = () => (
  <SlideLayout variant="alt">
    <SlideTitle>
      Framework: <span className="text-gradient-yellow">Understand → Translate → Deliver → Improve</span>
    </SlideTitle>
    <SlideSubtitle>Mi modelo mental para liderar — mapea directamente al SDLC</SlideSubtitle>

    <div className="flex items-center justify-between flex-1 gap-2">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2 flex-1">
          <div className="bg-card/60 border border-border rounded-lg p-4 flex-1 flex flex-col items-center text-center gap-2">
            <step.icon className={step.color} size={28} />
            <h3 className="font-display font-bold text-foreground text-sm">{step.label}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
          </div>
          {i < steps.length - 1 && <ArrowRight className="text-muted-foreground shrink-0" size={16} />}
        </div>
      ))}
    </div>

    <div className="mt-4 flex gap-2 flex-wrap">
      <Badge variant="dim">Discovery</Badge>
      <Badge variant="dim">Design</Badge>
      <Badge variant="dim">Build</Badge>
      <Badge variant="dim">Test</Badge>
      <Badge variant="dim">Release</Badge>
      <Badge variant="dim">Operate</Badge>
      <span className="text-muted-foreground text-xs self-center ml-2">← SDLC phases mapped</span>
    </div>
  </SlideLayout>
);

export default SlideFramework;
