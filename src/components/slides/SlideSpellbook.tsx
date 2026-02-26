import SlideLayout, { SlideTitle, SlideSubtitle, Card } from "@/components/SlideLayout";
import spellbookLogo from "@/assets/spellbook-logo.png";
import { Package, DollarSign, Layers, CheckCircle } from "lucide-react";

const SlideSpellbook = () => (
  <SlideLayout>
    <div className="flex items-center gap-4 mb-1">
      <img src={spellbookLogo} alt="Spellbook" className="w-16 h-16 rounded-lg object-contain bg-foreground/10 p-1" />
      <div>
        <SlideTitle>Case Study: Spellbook — Collectibles E-commerce</SlideTitle>
        <SlideSubtitle>Prioritisation, daily pricing sync, incremental plan</SlideSubtitle>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Package className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Understand</h3>
        </div>
        <p className="text-muted-foreground text-xs">Collectibles marketplace. Prioritisation: shipping fulfilment as a critical feature. Dynamic pricing synced with the market.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Translate</h3>
        </div>
        <p className="text-muted-foreground text-xs">Vertical stories: catalogue → cart → checkout → shipping. Pricing sync as an independent daily job. Slicing by user flow.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Layers className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Deliver</h3>
        </div>
        <p className="text-muted-foreground text-xs">Incremental plan: MVP with catalogue and basic checkout. Then pricing sync. Then advanced fulfilment. Deliveries every 2 weeks.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">In Production</h3>
        </div>
        <p className="text-muted-foreground text-xs">System running with daily price sync. Automated shipping. 80% reduction in manual work.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideSpellbook;
