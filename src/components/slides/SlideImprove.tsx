import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { Activity, RefreshCw, LineChart, Lightbulb } from "lucide-react";

const SlideImprove = () => (
  <SlideLayout variant="alt">
    <SlideTitle>
      <span className="text-primary">Improve</span> — Operar, medir, iterar
    </SlideTitle>
    <SlideSubtitle>Métricas · Retrospectivas · Roadmap de mejoras continuas</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Activity className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Observability</h3>
        </div>
        <p className="text-muted-foreground text-xs">Logs, métricas, alertas. Dashboards para entender salud del sistema en tiempo real. SLIs/SLOs claros.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <LineChart className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">DORA Metrics</h3>
        </div>
        <p className="text-muted-foreground text-xs">Deployment frequency, lead time, MTTR, change failure rate. Medición objetiva de la efectividad del equipo.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <RefreshCw className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Retrospectivas accionables</h3>
        </div>
        <p className="text-muted-foreground text-xs">No solo identificar problemas — cada retro produce máximo 2 acciones concretas asignadas con fecha.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Tech Debt Backlog</h3>
        </div>
        <p className="text-muted-foreground text-xs">Mantener un backlog de deuda técnica priorizado. 20% del sprint capacity para mejoras continuas.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideImprove;
