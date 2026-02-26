import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { Search, Database, Shield, Clock } from "lucide-react";

const SlideUnderstand = () => (
  <SlideLayout>
    <SlideTitle>
      <span className="text-primary">Understand</span> — Comprehend E2E before writing code
    </SlideTitle>
    <SlideSubtitle>User · Flow · Data · Risks · Constraints · SLAs</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Search className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">User Journey Mapping</h3>
        </div>
        <p className="text-muted-foreground text-xs">Understand who uses the system, what they expect, and where friction lies. In Payments: from deposit to confirmation.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Database className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Data & System Flows</h3>
        </div>
        <p className="text-muted-foreground text-xs">Map data flows, service dependencies, failure points, and API contracts.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Shield className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Risks & Constraints</h3>
        </div>
        <p className="text-muted-foreground text-xs">Compliance, regulation, vendor lock-in, third-party SLAs. webhook reliability, retries, idempotency, and provider constraints.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Clock className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Performance & Reliability</h3>
        </div>
        <p className="text-muted-foreground text-xs">Latency, throughput, availability — and what "good" looks like in production, conversion impact → every ms counts in payment processing.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideUnderstand;
