import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { Target, Code, Users } from "lucide-react";
import imgE2E from "@/assets/slide-intro-e2e.png";
import imgTechnical from "@/assets/slide-intro-technical.png";
import imgDeliverables from "@/assets/slide-intro-deliverables.png";

const SlideIntro = () => (
  <SlideLayout>
    <SlideTitle>My Promise as Tech Lead</SlideTitle>
    <SlideSubtitle>A TL with a strong development foundation: close to the technical detail and close to the user</SlideSubtitle>

    <div className="grid grid-cols-3 gap-4 flex-1">
      <Card className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Target className="text-primary" size={22} />
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">I understand the system E2E</h3>
        <p className="text-muted-foreground text-xs">
          User + business + architecture. I see the full flow to make informed decisions.
        </p>
        <img src={imgE2E} alt="E2E understanding" className="w-24 h-24 object-contain rounded-md opacity-85 mt-auto" />
      </Card>
      <Card className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-slide-accent-green/20 flex items-center justify-center">
          <Code className="text-slide-accent-green" size={22} />
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">Close to the technical detail</h3>
        <p className="text-muted-foreground text-xs">
          Solid technical understanding. I can review PRs, discuss trade-offs, and mentor with real context.
        </p>
        <img src={imgTechnical} alt="Technical detail" className="w-24 h-24 object-contain rounded-md opacity-85 mt-auto" />
      </Card>
      <Card className="flex flex-col items-center text-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <Users className="text-primary" size={22} />
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">I turn vision into deliverables</h3>
        <p className="text-muted-foreground text-xs">
          I translate business needs into measurable stories with clear acceptance criteria.
        </p>
        <img src={imgDeliverables} alt="Vision to deliverables" className="w-24 h-24 object-contain rounded-md opacity-85 mt-auto" />
      </Card>
    </div>
  </SlideLayout>
);

export default SlideIntro;
