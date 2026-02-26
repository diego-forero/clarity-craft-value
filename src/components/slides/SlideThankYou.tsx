import SlideLayout, { Badge } from "@/components/SlideLayout";
import { Rocket } from "lucide-react";

const SlideThankYou = () => (
  <SlideLayout variant="alt" className="items-center justify-center text-center relative overflow-hidden">
    <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-slide-highlight/30" />
    <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-slide-highlight/15" />

    <Rocket className="text-primary mb-6" size={48} />

    <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
      Thank You
    </h2>

    <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8">
      I don't just plan — I <span className="text-primary font-semibold">make things happen</span>.
    </p>

    <div className="flex gap-3">
      <Badge>Let's build together</Badge>
      <Badge variant="green">Q&A</Badge>
    </div>
  </SlideLayout>
);

export default SlideThankYou;
