import SlideLayout, { SlideTitle, SlideSubtitle, Card, Badge } from "@/components/SlideLayout";
import { CheckCircle2, BarChart3 } from "lucide-react";

const SlideDone = () => (
  <SlideLayout>
    <SlideTitle>Definition of Done + Measuring Success</SlideTitle>
    <SlideSubtitle>How I define product completion and measure team success</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Definition of Done</h3>
        </div>
        <ul className="space-y-1.5 text-muted-foreground text-xs">
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Acceptance criteria met</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Automated tests (unit + integration)</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Code review approved</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Deployed to staging + smoke tested</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Documentation updated</li>
          <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Observability (logs, metrics, alerts)</li>
        </ul>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Team Success Metrics</h3>
        </div>
        <ul className="space-y-1.5 text-muted-foreground text-xs">
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Delivery cadence: regular releases (weekly / bi-weekly)</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Cycle time: time from "work started" to "in production" stays predictable</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> QA rework rate: fewer stories sent back from QA (clearer stories, better testing)</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Production quality: fewer bugs reaching production; fewer hotfixes and rollbacks</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Incident recovery time: how fast we restore normal service when something breaks</li>
          <li className="flex items-start gap-2"><span className="text-slide-accent-green mt-0.5">→</span> Impact delivered: measurable outcomes achieved (success rate, drop-off reduction, faster confirmations)</li>
        </ul>
      </Card>
    </div>

    <div className="mt-3 flex gap-2">
      <Badge>Delivery Metrics</Badge>
      <Badge variant="green">Quality Gates</Badge>
      <Badge variant="dim">Continuous Improvement</Badge>
    </div>
  </SlideLayout>
);

export default SlideDone;
