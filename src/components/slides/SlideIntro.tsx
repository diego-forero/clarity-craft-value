import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import { Target, Code, Users } from "lucide-react";
import imgE2E from "@/assets/slide-intro-e2e.png";
import imgTechnical from "@/assets/slide-intro-technical.png";
import imgDeliverables from "@/assets/slide-intro-deliverables.png";

const SlideIntro = () => (
  <SlideLayout>
    <SlideTitle>My Promise as Team Leader</SlideTitle>
    <SlideSubtitle>I make things happen — close to the technical detail, close to the user</SlideSubtitle>

    <div className="grid grid-cols-3 gap-4 flex-1">
      <Card className="flex flex-col gap-2 p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <Target className="text-primary" size={16} />
          </div>
          <h3 className="font-display font-semibold text-foreground text-xs">I understand the system E2E</h3>
        </div>
        <ul className="text-muted-foreground text-[11px] space-y-1 list-disc list-inside">
          <li>Users, flow, data, and constraints</li>
          <li>Answer questions with context (dev, QA, stakeholders)</li>
          <li>Assess impact, risks, and improvement opportunities</li>
        </ul>
        <img src={imgE2E} alt="E2E understanding" className="w-full h-36 object-contain rounded-md opacity-85 mt-auto mb-2" />
      </Card>
      <Card className="flex flex-col gap-2 p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-full bg-slide-accent-green/20 flex items-center justify-center shrink-0">
            <Code className="text-slide-accent-green" size={16} />
          </div>
          <h3 className="font-display font-semibold text-foreground text-xs">Close to the technical detail</h3>
        </div>
        <ul className="text-muted-foreground text-[11px] space-y-1 list-disc list-inside">
          <li>Review PRs and discuss trade-offs</li>
          <li>Pair on complex problems and unblock fast</li>
          <li>Set standards that protect quality</li>
        </ul>
        <img src={imgTechnical} alt="Technical detail" className="w-full h-36 object-contain rounded-md opacity-85 mt-auto mb-2" />
      </Card>
      <Card className="flex flex-col gap-2 p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <Users className="text-primary" size={16} />
          </div>
          <h3 className="font-display font-semibold text-foreground text-xs">I turn vision into deliverables</h3>
        </div>
        <ul className="text-muted-foreground text-[11px] space-y-1 list-disc list-inside">
          <li>Outcomes first: define "what success looks like"</li>
          <li>Clear user stories + acceptance criteria</li>
          <li>Slicing and estimates the whole team understands</li>
        </ul>
        <img src={imgDeliverables} alt="Vision to deliverables" className="w-full h-28 object-contain rounded-md opacity-85 mt-auto" />
      </Card>
    </div>
  </SlideLayout>
);

export default SlideIntro;
