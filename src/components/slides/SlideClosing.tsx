import SlideLayout, { SlideTitle, SlideSubtitle, Badge } from "@/components/SlideLayout";
import bet365Logo from "@/assets/bet365-logo.png";
import { CreditCard, Zap, Shield, Users, Heart } from "lucide-react";


const SlideClosing = () => (
  <SlideLayout variant="alt" className="items-center justify-center text-center relative overflow-hidden">
    <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-slide-highlight/40" />
    <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-slide-highlight/20" />

    <img src={bet365Logo} alt="bet365" className="w-20 h-20 rounded-xl mb-4 glow-yellow" />
    <SlideTitle className="text-center">How This Fits bet365 Payments</SlideTitle>
    <SlideSubtitle>My framework applied to the Payments team</SlideSubtitle>

    <div className="grid grid-cols-4 gap-3 max-w-3xl">
      <div className="bg-card/60 border border-border rounded-lg p-3 flex flex-col items-center gap-2">
        <CreditCard className="text-primary" size={22} />
        <p className="text-foreground text-xs font-display font-semibold">Critical Systems</p>
        <p className="text-muted-foreground text-xs">I understand the responsibility of 24/7 payment systems</p>
      </div>
      <div className="bg-card/60 border border-border rounded-lg p-3 flex flex-col items-center gap-2">
        <Zap className="text-slide-accent-green" size={22} />
        <p className="text-foreground text-xs font-display font-semibold">Low Latency</p>
        <p className="text-muted-foreground text-xs">Experience with high-availability and high-performance systems</p>
      </div>
      <div className="bg-card/60 border border-border rounded-lg p-3 flex flex-col items-center gap-2">
        <Shield className="text-primary" size={22} />
        <p className="text-foreground text-xs font-display font-semibold">Technical Domain</p>
        <p className="text-muted-foreground text-xs">Complex integrations, provider APIs, fraud rules, and regulatory constraints</p>
      </div>
      <div className="bg-card/60 border border-border rounded-lg p-3 flex flex-col items-center gap-2">
        <Users className="text-slide-accent-green" size={22} />
        <p className="text-foreground text-xs font-display font-semibold">Team Growth</p>
        <p className="text-muted-foreground text-xs">Mentoring, knowledge distribution, motivated team</p>
      </div>
    </div>

    <div className="flex justify-center mt-3 max-w-3xl">
      <div className="bg-card/60 border border-border rounded-lg p-3 flex flex-col items-center gap-2 w-64">
        <Heart className="text-primary" size={22} />
        <p className="text-foreground text-xs font-display font-semibold">Product I Love</p>
        <p className="text-muted-foreground text-xs">I got to know bet365 and enjoyed the product — I want to help make it even better</p>
      </div>
    </div>

    <div className="flex gap-2 mt-6">
      <Badge>Thank you</Badge>
      <Badge variant="green">Q&A</Badge>
    </div>
  </SlideLayout>
);

export default SlideClosing;
