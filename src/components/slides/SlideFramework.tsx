import SlideLayout, { SlideTitle, SlideSubtitle, Badge } from "@/components/SlideLayout";
import { Search, ArrowRightLeft, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, label: "Understand", desc: "E2E: user, flow, data, risks, SLAs", color: "text-primary", slideIndex: 4 },
  { icon: ArrowRightLeft, label: "Translate", desc: "Outcomes + well-defined stories + acceptance criteria + clear scope", color: "text-slide-accent-green", slideIndex: 5 },
  { icon: Rocket, label: "Deliver", desc: "Planning, ownership, reviews, pairing, CI/CD", color: "text-primary", slideIndex: 6 },
  { icon: TrendingUp, label: "Improve", desc: "Operate, metrics, feedback, improvement roadmap", color: "text-slide-accent-green", slideIndex: 7 },
];

interface SlideFrameworkProps {
  onNavigate?: (index: number) => void;
}

const SlideFramework = ({ onNavigate }: SlideFrameworkProps) => (
  <SlideLayout variant="alt">
    <SlideTitle>
      Framework: <span className="text-gradient-yellow">Understand → Translate → Deliver → Improve</span>
    </SlideTitle>
    <SlideSubtitle>My mental model for leading — maps directly to the SDLC.</SlideSubtitle>
    <p className="text-muted-foreground text-xs leading-relaxed max-w-2xl font-sans">
      This loop connects user value with system reality. We understand the problem end-to-end, translate it into clear deliverables, execute with quality, and improve using production feedback. The goal is simple: better outcomes, faster learning, and fewer risks.
    </p>
    {/* Visual diagram */}
    <div className="flex-1 flex flex-col items-center justify-center gap-6">
      {/* Circular flow diagram */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-slide-accent-green to-primary opacity-40 -translate-y-1/2" />
        
        <div className="relative flex items-center justify-between">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center gap-2 relative z-10">
              {/* Clickable node */}
              <button
                onClick={() => onNavigate?.(step.slideIndex)}
                className="group flex flex-col items-center gap-3 cursor-pointer transition-transform hover:scale-105 focus:outline-none"
              >
                {/* Icon circle */}
                <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all
                  ${i % 2 === 0 
                    ? "border-primary bg-primary/10 group-hover:bg-primary/25 group-hover:shadow-[0_0_20px_hsl(46_95%_55%/0.3)]" 
                    : "border-slide-accent-green bg-slide-accent-green/10 group-hover:bg-slide-accent-green/25 group-hover:shadow-[0_0_20px_hsl(155_60%_40%/0.3)]"
                  }`}
                >
                  <step.icon className={step.color} size={26} />
                </div>
                {/* Label */}
                <span className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                  {step.label}
                </span>
                <span className="text-muted-foreground text-xs text-center max-w-[140px] leading-tight">
                  {step.desc}
                </span>
              </button>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="absolute -right-8 top-7 text-muted-foreground">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feedback loop arrow — spans full width from Improve back to Understand */}
        <div className="flex justify-center mt-4">
          <div className="relative w-full text-muted-foreground text-xs">
            <svg width="100%" height="32" viewBox="0 0 100 32" preserveAspectRatio="none" fill="none" className="opacity-50">
              <path d="M88 4C92 14 88 28 88 28L12 28C12 28 8 14 12 4" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="2 1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
              <path d="M15 8L12 4L14 0" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs text-primary/60 font-display">continuous feedback loop</span>
          </div>
        </div>
      </div>
    </div>

    {/* SDLC mapping */}
    <div className="mt-2 flex gap-2 flex-wrap items-center">
      <Badge variant="dim">Discovery</Badge>
      <Badge variant="dim">Design</Badge>
      <Badge variant="dim">Build</Badge>
      <Badge variant="dim">Test</Badge>
      <Badge variant="dim">Release</Badge>
      <Badge variant="dim">Operate</Badge>
      <span className="text-muted-foreground text-xs ml-2">← SDLC phases mapped</span>
    </div>
  </SlideLayout>
);

export default SlideFramework;
