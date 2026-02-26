import SlideLayout, { SlideTitle, SlideSubtitle, Card, Badge } from "@/components/SlideLayout";
import { Search, Database, Shield, Clock } from "lucide-react";

const SlideUnderstand = () => (
  <SlideLayout>
    <SlideTitle>
      <span className="text-primary">Understand</span> — Comprender E2E antes de escribir código
    </SlideTitle>
    <SlideSubtitle>Usuario · Flujo · Datos · Riesgos · Constraints · SLAs</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Search className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">User Journey Mapping</h3>
        </div>
        <p className="text-muted-foreground text-xs">Entender quién usa el sistema, qué espera y dónde hay fricción. En Payments: desde el depósito hasta la confirmación.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Database className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Data & System Flows</h3>
        </div>
        <p className="text-muted-foreground text-xs">Mapear flujos de datos, dependencias entre servicios, puntos de fallo y contratos de API.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Shield className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Risks & Constraints</h3>
        </div>
        <p className="text-muted-foreground text-xs">Compliance, regulación, vendor lock-in, SLA de terceros. En bet365: PCI-DSS, payment providers, latency budgets.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Clock className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">NFRs & SLAs</h3>
        </div>
        <p className="text-muted-foreground text-xs">Latencia, throughput, disponibilidad. 2M+ bets/hr → cada ms cuenta en payment processing.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideUnderstand;
