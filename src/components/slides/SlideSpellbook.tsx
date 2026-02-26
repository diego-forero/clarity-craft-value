import SlideLayout, { SlideTitle, SlideSubtitle, Card, Badge } from "@/components/SlideLayout";
import spellbookLogo from "@/assets/spellbook-logo.png";
import { Package, DollarSign, Layers, CheckCircle } from "lucide-react";

const SlideSpellbook = () => (
  <SlideLayout>
    <div className="flex items-center gap-4 mb-1">
      <img src={spellbookLogo} alt="Spellbook" className="w-16 h-16 rounded-lg object-contain bg-foreground/10 p-1" />
      <div>
        <SlideTitle>Caso: Spellbook — E-commerce de coleccionables</SlideTitle>
        <SlideSubtitle>Priorización, pricing sync diario, plan incremental</SlideSubtitle>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 flex-1">
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Package className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Understand</h3>
        </div>
        <p className="text-muted-foreground text-xs">Marketplace de cartas/coleccionables. Priorización: fulfillment de envíos como feature crítica. Pricing dinámico sincronizado con mercado.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Translate</h3>
        </div>
        <p className="text-muted-foreground text-xs">Historias verticales: catálogo → carrito → checkout → envío. Pricing sync como job diario independiente. Slicing por flujo de usuario.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <Layers className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Deliver</h3>
        </div>
        <p className="text-muted-foreground text-xs">Plan incremental: MVP con catálogo y checkout básico. Luego pricing sync. Luego fulfillment avanzado. Entregas cada 2 semanas.</p>
      </Card>
      <Card>
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">En producción</h3>
        </div>
        <p className="text-muted-foreground text-xs">Sistema operando con sync diario de precios. Envíos automatizados. Reducción de trabajo manual en 80%.</p>
      </Card>
    </div>
  </SlideLayout>
);

export default SlideSpellbook;
