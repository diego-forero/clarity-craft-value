import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { AlertTriangle, MessageSquare, Wrench, ShieldCheck } from "lucide-react";

const SlideStress = () => (
  <SlideLayout variant="alt">
    <SlideTitle>
      Manejo de estrés: <span className="text-primary">BNS — Bug de Puntos</span>
    </SlideTitle>
    <SlideSubtitle>Repriorización por impacto económico real</SlideSubtitle>

    <div className="grid grid-cols-4 gap-3 flex-1">
      <Card className="flex flex-col gap-2 border-l-2 border-l-destructive">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-destructive" size={18} />
          <h3 className="font-display font-semibold text-foreground text-xs">1. Detectar impacto</h3>
        </div>
        <p className="text-muted-foreground text-xs">Bug en cálculo de puntos: clientes acumulando puntos incorrectos. Impacto económico directo en el negocio.</p>
      </Card>
      <Card className="flex flex-col gap-2 border-l-2 border-l-primary">
        <div className="flex items-center gap-2">
          <MessageSquare className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-xs">2. Comunicar</h3>
        </div>
        <p className="text-muted-foreground text-xs">Escalar inmediatamente. Alinear con producto y negocio. Comunicar timeline realista. Mantener stakeholders informados.</p>
      </Card>
      <Card className="flex flex-col gap-2 border-l-2 border-l-slide-accent-green">
        <div className="flex items-center gap-2">
          <Wrench className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-xs">3. Fix</h3>
        </div>
        <p className="text-muted-foreground text-xs">Root cause analysis. Fix con tests. Data migration para corregir puntos incorrectos. Deploy con validación.</p>
      </Card>
      <Card className="flex flex-col gap-2 border-l-2 border-l-primary">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-xs">4. Prevenir</h3>
        </div>
        <p className="text-muted-foreground text-xs">Post-mortem blameless. Agregar tests de cálculo. Alertas proactivas en discrepancias. Mejorar proceso de QA.</p>
      </Card>
    </div>

    <div className="mt-4 bg-card/40 border border-border rounded-lg p-3">
      <p className="text-muted-foreground text-xs">
        <span className="text-primary font-semibold">Mi enfoque personal ante el estrés:</span> Priorizar por impacto → Comunicar temprano → Dividir el problema → Ejecutar con foco → Prevenir recurrencia. La calma se contagia al equipo.
      </p>
    </div>
  </SlideLayout>
);

export default SlideStress;
