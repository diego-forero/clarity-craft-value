import SlideLayout, { SlideTitle, SlideSubtitle, Card, Badge } from "@/components/SlideLayout";
import { Briefcase, GraduationCap, Globe, Award, Code, Database } from "lucide-react";

const SlideAboutMe = () => (
  <SlideLayout>
    <SlideTitle>
      Diego Forero — <span className="text-gradient-yellow">Who Am I?</span>
    </SlideTitle>
    <SlideSubtitle>
      Senior Backend Engineer / Tech Lead · 7+ years building & leading in production
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
            Tech Lead with a strong development foundation — close to the technical detail to understand systems end-to-end, and close to the user to maximise value delivery.
          </p>
          <p className="text-muted-foreground text-xs leading-relaxed">
            Comfortable owning the full lifecycle: from discovery and architecture to CI/CD and post-release observability.
          </p>
        </Card>
        <Card className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <Globe className="text-slide-accent-green" size={18} />
            <h3 className="font-display font-semibold text-foreground text-sm">Languages</h3>
          </div>
          <p className="text-muted-foreground text-xs">Spanish (Native) · English (Professional) · French (Basic)</p>
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
            <span><strong className="text-foreground">Canal RCN</strong> — Sr. Software Engineer. Built distributed data pipelines (AWS Glue + Spark, +5M records/day). Payment integrations under PCI DSS.</span>
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

      {/* Col 3 - Skills + Education */}
      <div className="flex flex-col gap-3">
        <Card className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Code className="text-slide-accent-green" size={18} />
            <h3 className="font-display font-semibold text-foreground text-sm">Technical Skills</h3>
          </div>
          <ul className="space-y-1 text-muted-foreground text-xs">
            <li><strong className="text-foreground">Backend:</strong> Node.js · Python · Go · REST APIs · Microservices</li>
            <li><strong className="text-foreground">Cloud:</strong> AWS (Lambda, Glue, Athena, S3, DynamoDB, SQS)</li>
            <li><strong className="text-foreground">Data:</strong> ETL Pipelines · Spark · Streaming · Power BI</li>
            <li><strong className="text-foreground">Frontend:</strong> React · Angular · TypeScript</li>
            <li><strong className="text-foreground">DevOps:</strong> CI/CD · Terraform · Azure DevOps · IaC</li>
          </ul>
        </Card>
        <Card className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="text-primary" size={18} />
            <h3 className="font-display font-semibold text-foreground text-sm">Education</h3>
          </div>
          <p className="text-muted-foreground text-xs">Electronic Engineering — Universidad Nacional de Colombia</p>
          <p className="text-muted-foreground text-xs">Google Professional Cloud Developer</p>
        </Card>
      </div>
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
