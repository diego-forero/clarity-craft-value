import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { GitBranch, Users, Eye, Workflow } from "lucide-react";

const SlideDeliver = () => (
  <SlideLayout>
    <SlideTitle>
      <span className="text-primary">Deliver</span> — Collaboration and continuous delivery
    </SlideTitle>
    <SlideSubtitle>Planning · Ownership · Code Reviews · Pairing · CI/CD</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Users className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Distributed Ownership</h3>
        </div>
        <p className="text-muted-foreground text-xs">Each developer owns their stories. I remove blockers, not micromanage. Autonomy with accountability.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Eye className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Code Reviews as Mentoring</h3>
        </div>
        <p className="text-muted-foreground text-xs">PRs are not gatekeeping — they are opportunities for knowledge transfer and quality improvement.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <GitBranch className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">CI/CD & Quality Gates</h3>
        </div>
        <p className="text-muted-foreground text-xs">Automated tests, linting, coverage. The pipeline protects quality. Feature flags for safe releases.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Workflow className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Pairing on Complex Problems</h3>
        </div>
        <p className="text-muted-foreground text-xs">Pairing sessions for onboarding, complex bugs, and design decisions. Multiplies team knowledge.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideDeliver;
