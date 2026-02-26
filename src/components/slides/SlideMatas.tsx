import SlideLayout, { SlideTitle, SlideSubtitle, Card, Badge } from "@/components/SlideLayout";
import matasLogo from "@/assets/matas-logo.png";
import lipseysLogo from "@/assets/lipseys-logo.png";
import { Link, Shield, FileCheck } from "lucide-react";

const SlideMatas = () => (
  <SlideLayout>
    <SlideTitle>Integration: Mata's + Lipsey's (Wholesaler / FFL)</SlideTitle>
    <SlideSubtitle>Business opportunity in a regulated domain — from constraints to stories</SlideSubtitle>

    <div className="flex items-center gap-6 mb-4">
      <img src={matasLogo} alt="Mata's Tactical" className="h-10 object-contain bg-foreground/90 rounded-md px-2 py-1" />
      <div className="flex items-center gap-2">
        <Link className="text-primary" size={20} />
        <span className="text-muted-foreground text-sm font-display">Integration</span>
        <Link className="text-primary" size={20} />
      </div>
      <img src={lipseysLogo} alt="Lipsey's" className="h-10 object-contain bg-foreground/90 rounded-md px-2 py-1" />
    </div>

    <div className="grid grid-cols-3 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Shield className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Regulated Domain</h3>
        </div>
        <p className="text-muted-foreground text-xs">FFL compliance, licence verification, state-based shipping restrictions. Constraints as part of the design, not an afterthought.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <FileCheck className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Story Mapping</h3>
        </div>
        <p className="text-muted-foreground text-xs">Catalogue sync with wholesaler → FFL verification → checkout with validation → fulfilment tracking. Each slice verifiable.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Shield className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Risk Reduction</h3>
        </div>
        <p className="text-muted-foreground text-xs">Technical spike first. Sandbox integration. Feature flag for gradual rollout. Compliance monitoring on every transaction.</p>
      </Card>
    </div>

    <div className="mt-3 flex gap-2">
      <Badge>Regulated Domain</Badge>
      <Badge variant="green">API Integration</Badge>
      <Badge variant="dim">Risk Mitigation</Badge>
    </div>
  </SlideLayout>
);

export default SlideMatas;
