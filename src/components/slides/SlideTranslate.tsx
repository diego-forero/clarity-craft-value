import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { FileText, Scissors, BarChart3, CheckCircle } from "lucide-react";

const SlideTranslate = () => (
  <SlideLayout variant="alt">
    <SlideTitle>
      <span className="text-primary">Translate</span> — De necesidad a historias entregables
    </SlideTitle>
    <SlideSubtitle>Outcomes → User Stories + AC + NFRs + Story Slicing + Estimación</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <FileText className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Outcomes First</h3>
        </div>
        <p className="text-muted-foreground text-xs">Definir qué éxito luce ANTES de escribir historias. Métricas de negocio claras: reducir tiempo de procesamiento, mejorar success rate.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Scissors className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Story Slicing</h3>
        </div>
        <p className="text-muted-foreground text-xs">Vertical slicing: cada historia entrega valor independiente. Thin end-to-end slices que validan asunciones temprano.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Acceptance Criteria</h3>
        </div>
        <p className="text-muted-foreground text-xs">Given/When/Then claros. El equipo sabe exactamente cuándo una historia está DONE sin ambigüedad.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">NFRs explícitos</h3>
        </div>
        <p className="text-muted-foreground text-xs">Performance, security, observability como parte de la historia. No como afterthought.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideTranslate;
