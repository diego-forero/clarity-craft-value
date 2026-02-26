import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { GitBranch, Users, Eye, Workflow } from "lucide-react";

const SlideDeliver = () => (
  <SlideLayout>
    <SlideTitle>
      <span className="text-primary">Deliver</span> — Colaboración y entrega continua
    </SlideTitle>
    <SlideSubtitle>Planning · Ownership · Code Reviews · Pairing · CI/CD</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Users className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Ownership distribuido</h3>
        </div>
        <p className="text-muted-foreground text-xs">Cada desarrollador es owner de sus historias. Yo remuevo blockers, no microgestiono. Autonomía con accountability.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Eye className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Code Reviews como mentoría</h3>
        </div>
        <p className="text-muted-foreground text-xs">PRs no son gatekeeping — son oportunidades de transferencia de conocimiento y mejora de calidad.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <GitBranch className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">CI/CD & Quality Gates</h3>
        </div>
        <p className="text-muted-foreground text-xs">Tests automatizados, linting, coverage. El pipeline protege calidad. Feature flags para releases seguros.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Workflow className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Pairing en problemas complejos</h3>
        </div>
        <p className="text-muted-foreground text-xs">Pairing sessions para onboarding, bugs complejos y decisiones de diseño. Multiplica conocimiento del equipo.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideDeliver;
