import SlideLayout, { SlideTitle, SlideSubtitle, Card, Badge } from "@/components/SlideLayout";
import { Briefcase, GraduationCap, Globe, Award, Code, Database } from "lucide-react";

const SlideAboutMe = () => (
  <SlideLayout>
    <SlideTitle>
      Diego Forero — <span className="text-gradient-yellow">Who Am I?</span>
    </SlideTitle>
    <SlideSubtitle>
      Tech Lead / Senior Software Engineer · Backend-focused, Full-Stack capable · 7+ years
    </SlideSubtitle>

    <div className="grid grid-cols-3 gap-4 flex-1">
      {/* Col 1 - Profile */}
      <div className="flex flex-col gap-3">
        <Card className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase className="text-primary" size={18} />
            <h3 className="font-display font-semibold text-foreground text-sm">Professional Profile</h3>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Tech Lead with a strong backend foundation — close to the technical detail to understand systems end-to-end, and close to the user to maximise value delivery.
          </p>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Comfortable owning the full lifecycle: from discovery and architecture to CI/CD and post-release observability.
          </p>
        </Card>
        <Card className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <Database className="text-slide-accent-green" size={18} />
            <h3 className="font-display font-semibold text-foreground text-sm">Core Strengths</h3>
          </div>
          <div className="flex flex-wrap gap-1">
            {["E2E Ownership", "Distributed Systems", "Data Pipelines", "Agile/Scrum"].map((s) => (
              <span key={s} className="text-[10px] font-medium px-2 py-0.5 rounded-full border bg-primary/20 text-primary border-primary/30">{s}</span>
            ))}
          </div>
        </Card>
      </div>

      {/* Col 2 - Experience highlights */}
      <Card className="flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          <Award className="text-primary" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Key Experience</h3>
        </div>
        <ul className="space-y-2 text-muted-foreground text-xs">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">▸</span>
            <span><strong className="text-foreground">Canal RCN</strong> — Sr. Software Engineer (Backend focus). Built distributed data pipelines (AWS Glue + Spark, +5M records/day). Payment integrations under PCI DSS.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">▸</span>
            <span><strong className="text-foreground">BananaScript (Tech Lead)</strong> — Led 1–5 dev teams in Scrum. 100% on-time delivery on major milestones. AI-powered MVP in 3 months.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">▸</span>
            <span><strong className="text-foreground">RevStar Consulting (Tech Lead)</strong> — Agile leadership, coding standards that reduced critical bugs by 60%. Coordinated cross-functional teams.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">▸</span>
            <span><strong className="text-foreground">PAYC (Lead Developer)</strong> — Analytics department lead. Power BI integrations, data-driven decision-making at scale.</span>
          </li>
        </ul>
      </Card>

      {/* Col 3 - Skills (visual) */}
      <Card className="flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <Code className="text-slide-accent-green" size={18} />
          <h3 className="font-display font-semibold text-foreground text-sm">Technical Toolkit</h3>
        </div>
        {[
          { label: "Backend", items: ["Node.js", "Python", "Js", "REST", "Microservices"], color: "bg-primary/20 text-primary border-primary/30" },
          { label: "Cloud / AWS", items: ["Lambda", "Glue", "Athena", "S3", "DynamoDB", "SQS"], color: "bg-slide-accent-green/20 text-slide-accent-green border-slide-accent-green/30" },
          { label: "Data", items: ["ETL", "Spark", "Streaming", "Power BI"], color: "bg-primary/20 text-primary border-primary/30" },
          { label: "Frontend", items: ["React", "Angular", "TypeScript"], color: "bg-slide-accent-green/20 text-slide-accent-green border-slide-accent-green/30" },
          { label: "DevOps", items: ["CI/CD", "Terraform", "IaC", "Azure DevOps"], color: "bg-muted text-muted-foreground border-border" },
        ].map((group) => (
          <div key={group.label}>
            <p className="text-foreground text-xs font-semibold mb-1">{group.label}</p>
            <div className="flex flex-wrap gap-1">
              {group.items.map((item) => (
                <span key={item} className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${group.color}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </div>

    <div className="flex gap-2 mt-3">
      <Badge>Strategic Thinking</Badge>
      <Badge variant="green">Problem-Solving</Badge>
      <Badge variant="dim">AWS Serverless</Badge>
      <Badge variant="dim">Data Engineering</Badge>
      <Badge variant="dim">Team Leadership</Badge>
    </div>
  </SlideLayout>
);

export default SlideAboutMe;
