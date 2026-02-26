import SlideLayout, { SlideTitle, SlideSubtitle, Badge } from "@/components/SlideLayout";
import bet365Logo from "@/assets/bet365-logo.png";
import { CreditCard, Zap, Shield, Users } from "lucide-react";

const SlideClosing = () => (
  <SlideLayout variant="alt" className="items-center justify-center text-center relative overflow-hidden">
    <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-slide-highlight/40" />
    <div className="absolute -left-16 -top-16 w-60 h-60 rounded-full bg-slide-highlight/20" />

    <img src={bet365Logo} alt="bet365" className="w-20 h-20 rounded-xl mb-4 glow-yellow" />
    <SlideTitle className="text-center">Cómo encaja en bet365 Payments</SlideTitle>
    <SlideSubtitle>Mi framework aplicado al equipo de Payments</SlideSubtitle>

    <div className="grid grid-cols-4 gap-3 max-w-3xl">
      <div className="bg-card/60 border border-border rounded-lg p-3 flex flex-col items-center gap-2">
        <CreditCard className="text-primary" size={22} />
        <p className="text-foreground text-xs font-display font-semibold">Critical Systems</p>
        <p className="text-muted-foreground text-xs">Entiendo la responsabilidad de sistemas de pago 24/7</p>
      </div>
      <div className="bg-card/60 border border-border rounded-lg p-3 flex flex-col items-center gap-2">
        <Zap className="text-slide-accent-green" size={22} />
        <p className="text-foreground text-xs font-display font-semibold">Low Latency</p>
        <p className="text-muted-foreground text-xs">Experiencia en sistemas de alta disponibilidad y performance</p>
      </div>
      <div className="bg-card/60 border border-border rounded-lg p-3 flex flex-col items-center gap-2">
        <Shield className="text-primary" size={22} />
        <p className="text-foreground text-xs font-display font-semibold">Compliance</p>
        <p className="text-muted-foreground text-xs">Dominio regulado: PCI-DSS, payment providers, governance</p>
      </div>
      <div className="bg-card/60 border border-border rounded-lg p-3 flex flex-col items-center gap-2">
        <Users className="text-slide-accent-green" size={22} />
        <p className="text-foreground text-xs font-display font-semibold">Team Growth</p>
        <p className="text-muted-foreground text-xs">Mentoría, distribución de conocimiento, equipo motivado</p>
      </div>
    </div>

    <div className="flex gap-2 mt-6">
      <Badge>Thank you</Badge>
      <Badge variant="green">Q&A</Badge>
    </div>
  </SlideLayout>
);

export default SlideClosing;
