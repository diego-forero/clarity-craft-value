import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { FileText, Scissors, BarChart3, CheckCircle } from "lucide-react";

const SlideTranslate = () => (
  <SlideLayout variant="alt">
    <SlideTitle>
      <span className="text-primary">Translate</span> — From needs to deliverable stories
    </SlideTitle>
    <SlideSubtitle>Outcomes → well-defined stories → acceptance criteria → quality requirements → delivery plan</SlideSubtitle>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <FileText className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Outcomes First</h3>
        </div>
        <p className="text-muted-foreground text-xs">Define what success looks like BEFORE writing stories. Clear business metrics: reduce processing time, improve success rate.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Scissors className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Story Slicing</h3>
        </div>
        <p className="text-muted-foreground text-xs">Vertical slicing: each story delivers independent value. Break work into small end-to-end increments that deliver value early and reduce uncertainty.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Acceptance Criteria</h3>
        </div>
        <p className="text-muted-foreground text-xs">Clear Given/When/Then. The team knows exactly when a story is DONE without ambiguity.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Explicit NFRs</h3>
        </div>
        <p className="text-muted-foreground text-xs">Performance, security, observability as part of the story. Not as an afterthought.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideTranslate;
