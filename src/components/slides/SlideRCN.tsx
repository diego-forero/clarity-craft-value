import SlideLayout, { SlideTitle, SlideSubtitle, Card, Badge } from "@/components/SlideLayout";
import rcnLogo from "@/assets/rcn-logo.png";
import { Database, ArrowRight, BarChart3 } from "lucide-react";

const SlideRCN = () => (
  <SlideLayout variant="alt">
    <div className="flex items-center gap-4 mb-1">
      <img src={rcnLogo} alt="RCN" className="w-16 h-12 rounded-lg object-contain bg-foreground/10 p-1" />
      <div>
        <SlideTitle>Caso Enterprise: RCN — Data Warehouse / Pipeline</SlideTitle>
        <SlideSubtitle>Data de audiencia móvil en manos del tercero → ownership interno</SlideSubtitle>
      </div>
    </div>

    <div className="flex-1 flex flex-col gap-4">
      {/* Pipeline visual */}
      <Card className="flex items-center justify-between gap-2 text-center">
        {["Extracción API", "Raw (CSV)", "AWS Glue", "Parquet", "Athena", "Power BI"].map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <div className="bg-secondary rounded-md px-3 py-2">
              <p className="text-foreground text-xs font-display font-semibold">{step}</p>
            </div>
            {i < 5 && <ArrowRight className="text-primary shrink-0" size={14} />}
          </div>
        ))}
      </Card>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <div className="flex items-center gap-2 mb-2">
            <Database className="text-primary" size={18} />
            <h3 className="font-display font-semibold text-foreground text-sm">Ownership</h3>
          </div>
          <p className="text-muted-foreground text-xs">Data propia en AWS. Sin dependencia de vendor para analytics. Procesamiento cada 12h.</p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="text-slide-accent-green" size={18} />
            <h3 className="font-display font-semibold text-foreground text-sm">Confiabilidad</h3>
          </div>
          <p className="text-muted-foreground text-xs">Pipeline idempotente. Retry automático. Alertas en fallo. Data quality checks en cada stage.</p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="text-primary" size={18} />
            <h3 className="font-display font-semibold text-foreground text-sm">Decisiones de diseño</h3>
          </div>
          <p className="text-muted-foreground text-xs">Parquet para costo y performance. Athena serverless. Separación bronze/silver/gold layers.</p>
        </Card>
      </div>
    </div>
  </SlideLayout>
);

export default SlideRCN;
