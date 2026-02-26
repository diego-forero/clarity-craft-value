import SlideLayout, { SlideTitle, SlideSubtitle, Badge } from "@/components/SlideLayout";
import bet365Logo from "@/assets/bet365-logo.png";

const SlideCover = () => (
  <SlideLayout className="items-center justify-center text-center relative overflow-hidden">
    <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-slide-highlight/40" />
    <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-slide-highlight/20" />
    
    <img src={bet365Logo} alt="bet365" className="w-20 h-20 rounded-xl mb-5 glow-yellow" />
    <h1 className="font-display font-black text-3xl md:text-4xl text-foreground mb-2">
      Lead with Clarity
    </h1>
    <p className="text-primary font-display font-semibold text-lg md:text-xl mb-1">
      SDLC Walkthrough
    </p>
    <p className="text-muted-foreground text-sm max-w-md mb-4">
      Technical leadership to deliver value — Software Development Team Leader
    </p>
    <p className="text-foreground font-display font-semibold text-base">
      Diego Forero
    </p>
    <p className="text-muted-foreground text-xs">
      Tech Lead / Senior Software Engineer · Backend-focused · 7+ years
    </p>
    <div className="flex gap-2 mt-6">
      <Badge>SDLC</Badge>
      <Badge variant="green">Leadership</Badge>
      <Badge variant="dim">Payments</Badge>
    </div>
  </SlideLayout>
);

export default SlideCover;
