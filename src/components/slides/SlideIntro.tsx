import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { Target, Code, Users } from "lucide-react";

const SlideIntro = () => (
  <SlideLayout>
    <SlideTitle>My Promise as Team Lead</SlideTitle>
    <SlideSubtitle>A TL with a strong development foundation: close to the technical detail and close to the user</SlideSubtitle>

    <div className="grid grid-cols-3 gap-4 flex-1">
      <Card className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Target className="text-primary" size={22} />
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">I understand the system E2E</h3>
        <p className="text-muted-foreground text-xs">
          User + business + architecture. I grasp the full flow to make informed decisions.
        </p>
      </Card>
      <Card className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slide-accent-green/20 flex items-center justify-center">
          <Code className="text-slide-accent-green" size={22} />
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">Close to the technical detail</h3>
        <p className="text-muted-foreground text-xs">
          Solid technical understanding. I can review PRs, discuss trade-offs, and mentor with real context.
        </p>
      </Card>
      <Card className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Users className="text-primary" size={22} />
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">I turn vision into deliverables</h3>
        <p className="text-muted-foreground text-xs">
          I translate business needs into measurable stories with clear acceptance criteria.
        </p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideIntro;
