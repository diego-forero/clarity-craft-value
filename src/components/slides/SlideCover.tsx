import SlideLayout, { SlideTitle, SlideSubtitle, Badge, Card } from "@/components/SlideLayout";
import bet365Logo from "@/assets/bet365-logo.png";

const SlideCover = () => (
  <SlideLayout className="items-center justify-center text-center relative overflow-hidden">
    {/* Decorative circle */}
    <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-slide-highlight/40" />
    <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-slide-highlight/20" />
    
    <img src={bet365Logo} alt="bet365" className="w-24 h-24 rounded-xl mb-6 glow-yellow" />
    <h1 className="font-display font-black text-3xl md:text-4xl text-foreground mb-3">
      Lead with Clarity
    </h1>
    <p className="text-primary font-display font-semibold text-lg md:text-xl mb-2">
      SDLC Walkthrough
    </p>
    <p className="text-muted-foreground text-sm max-w-md">
      Liderazgo técnico para entregar valor — Software Development Team Leader
    </p>
    <div className="flex gap-2 mt-6">
      <Badge>SDLC</Badge>
      <Badge variant="green">Leadership</Badge>
      <Badge variant="dim">Payments</Badge>
    </div>
  </SlideLayout>
);

export default SlideCover;
