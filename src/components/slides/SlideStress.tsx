import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { AlertTriangle, MessageSquare, Wrench, ShieldCheck } from "lucide-react";

const SlideStress = () => (
  <SlideLayout variant="alt">
    <SlideTitle>
      Stress Management: <span className="text-primary">BNS — Points Bug</span>
    </SlideTitle>
    <SlideSubtitle>Re-prioritisation driven by real economic impact</SlideSubtitle>

    <div className="grid grid-cols-4 gap-3 flex-1">
      <Card className="flex flex-col gap-2 border-l-2 border-l-destructive">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-destructive" size={18} />
          <h3 className="font-display font-semibold text-foreground text-xs">1. Detect Impact</h3>
        </div>
        <p className="text-muted-foreground text-xs">Points calculation bug: customers accumulating incorrect points. Direct economic impact on the business.</p>
      </Card>
      <Card className="flex flex-col gap-2 border-l-2 border-l-primary">
        <div className="flex items-center gap-2">
          <MessageSquare className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-xs">2. Communicate</h3>
        </div>
        <p className="text-muted-foreground text-xs">Escalate immediately. Align with product and business. Communicate realistic timeline. Keep stakeholders informed.</p>
      </Card>
      <Card className="flex flex-col gap-2 border-l-2 border-l-slide-accent-green">
        <div className="flex items-center gap-2">
          <Wrench className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-xs">3. Fix</h3>
        </div>
        <p className="text-muted-foreground text-xs">Root cause analysis. Fix with tests. Data migration to correct wrong points. Deploy with validation.</p>
      </Card>
      <Card className="flex flex-col gap-2 border-l-2 border-l-primary">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-xs">4. Prevent</h3>
        </div>
        <p className="text-muted-foreground text-xs">Blameless post-mortem. Add calculation tests. Proactive alerts on discrepancies. Improve QA process.</p>
      </Card>
    </div>

    <div className="mt-4 bg-card/40 border border-border rounded-lg p-3">
      <p className="text-muted-foreground text-xs">
        <span className="text-primary font-semibold">My personal approach to stress:</span> Prioritise by impact → Communicate early → Break the problem down → Execute with focus → Prevent recurrence. Calm is contagious to the team.
      </p>
    </div>
  </SlideLayout>
);

export default SlideStress;
