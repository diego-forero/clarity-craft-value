import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { Activity, RefreshCw, LineChart, Lightbulb } from "lucide-react";

const SlideImprove = () => (
  <SlideLayout variant="alt">
    <SlideTitle>
      <span className="text-primary">Improve</span> — Operate, measure, iterate
    </SlideTitle>
    <SlideSubtitle>Metrics · Retrospectives · Continuous improvement roadmap</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Activity className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Observability</h3>
        </div>
        <p className="text-muted-foreground text-xs">Logs, metrics, alerts. Dashboards to understand system health in real time. Know what "healthy" looks like before something breaks.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <LineChart className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Delivery Metrics</h3>
        </div>
        <p className="text-muted-foreground text-xs">Track cycle time, deployment frequency, and failure rates. Use data to identify bottlenecks, celebrate progress, and drive continuous improvement.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <RefreshCw className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Actionable Retrospectives</h3>
        </div>
        <p className="text-muted-foreground text-xs">Not just identifying problems — each retro produces at most 2 concrete actions assigned with a deadline.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Tech Debt Backlog</h3>
        </div>
        <p className="text-muted-foreground text-xs">Maintain a prioritised tech debt backlog. Reserve dedicated capacity each sprint to pay it down consistently.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideImprove;
