import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { Target, Code, Users } from "lucide-react";

const SlideIntro = () => (
  <SlideLayout>
    <SlideTitle>Mi promesa como Team Lead</SlideTitle>
    <SlideSubtitle>TL con base fuerte de desarrollo: cerca del detalle técnico y del usuario</SlideSubtitle>

    <div className="grid grid-cols-3 gap-4 flex-1">
      <Card className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Target className="text-primary" size={22} />
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">Entiendo el sistema E2E</h3>
        <p className="text-muted-foreground text-xs">
          Usuario + negocio + arquitectura. Comprendo el flujo completo para tomar decisiones informadas.
        </p>
      </Card>
      <Card className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slide-accent-green/20 flex items-center justify-center">
          <Code className="text-slide-accent-green" size={22} />
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">Cerca del detalle técnico</h3>
        <p className="text-muted-foreground text-xs">
          Solid technical understanding. Puedo revisar PRs, debatir trade-offs y mentorear con contexto real.
        </p>
      </Card>
      <Card className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Users className="text-primary" size={22} />
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">Convierto visión en entregables</h3>
        <p className="text-muted-foreground text-xs">
          Traduzco necesidades de negocio en historias medibles con criterios de aceptación claros.
        </p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideIntro;
