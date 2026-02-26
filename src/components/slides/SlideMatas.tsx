import SlideLayout, { SlideTitle, SlideSubtitle, Card, Badge } from "@/components/SlideLayout";
import matasLogo from "@/assets/matas-logo.png";
import lipseysLogo from "@/assets/lipseys-logo.png";
import { Link, Shield, FileCheck } from "lucide-react";

const SlideMatas = () => (
  <SlideLayout>
    <SlideTitle>Integración: Mata's + Lipsey's (Mayorista / FFL)</SlideTitle>
    <SlideSubtitle>Oportunidad de negocio en dominio regulado — de restricciones a historias</SlideSubtitle>

    <div className="flex items-center gap-6 mb-4">
      <img src={matasLogo} alt="Mata's Tactical" className="h-10 object-contain bg-foreground/90 rounded-md px-2 py-1" />
      <div className="flex items-center gap-2">
        <Link className="text-primary" size={20} />
        <span className="text-muted-foreground text-sm font-display">Integración</span>
        <Link className="text-primary" size={20} />
      </div>
      <img src={lipseysLogo} alt="Lipsey's" className="h-10 object-contain bg-foreground/90 rounded-md px-2 py-1" />
    </div>

    <div className="grid grid-cols-3 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Shield className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Dominio regulado</h3>
        </div>
        <p className="text-muted-foreground text-xs">FFL compliance, verificación de licencias, restricciones de envío por estado. Constraints como parte del diseño, no afterthought.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <FileCheck className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Story mapping</h3>
        </div>
        <p className="text-muted-foreground text-xs">Catálogo sync con mayorista → verificación FFL → checkout con validación → fulfillment tracking. Cada slice verificable.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Shield className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Reducción de riesgo</h3>
        </div>
        <p className="text-muted-foreground text-xs">Spike técnico primero. Integración en sandbox. Feature flag para rollout gradual. Monitoring de compliance en cada transacción.</p>
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
