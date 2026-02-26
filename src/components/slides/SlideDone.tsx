import SlideLayout, { SlideTitle, SlideSubtitle, Card, Badge } from "@/components/SlideLayout";
import { CheckCircle2, BarChart3, Target, ListChecks } from "lucide-react";

const SlideDone = () => (
  <SlideLayout>
    <SlideTitle>Definition of Done + Medición de Éxito</SlideTitle>
    <SlideSubtitle>Cómo defino que un producto está completo y que el equipo está siendo exitoso</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Definition of Done</h3>
        </div>
        <ul className="space-y-1.5 text-muted-foreground text-xs">
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Acceptance criteria cumplidos</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Tests automatizados (unit + integration)</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Code review aprobado</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Desplegado en staging + smoke tested</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Documentación actualizada</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Observability (logs, metrics, alerts)</li>
        </ul>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Métricas de éxito del equipo</h3>
        </div>
        <ul className="space-y-1.5 text-muted-foreground text-xs">
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Deployment frequency (weekly+)</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Lead time for changes (&lt;1 week)</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> MTTR (&lt;4 hours)</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Change failure rate (&lt;15%)</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Team engagement & retention</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Business outcomes achieved</li>
        </ul>
      </Card>
    </div>

    <div className="mt-3 flex gap-2">
      <Badge>DORA Metrics</Badge>
      <Badge variant="green">Quality Gates</Badge>
      <Badge variant="dim">Continuous Improvement</Badge>
    </div>
  </SlideLayout>
);

export default SlideDone;
