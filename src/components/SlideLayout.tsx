import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  variant?: "default" | "alt";
  className?: string;
}

const SlideLayout = ({ children, variant = "default", className = "" }: SlideLayoutProps) => {
  return (
    <div
      className={`w-full h-full flex flex-col p-8 md:p-12 ${
        variant === "alt" ? "slide-gradient-alt" : "slide-gradient"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SlideLayout;

export const SlideTitle = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-display font-bold text-2xl md:text-3xl text-foreground mb-1 ${className}`}>
    {children}
  </h2>
);

export const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-muted-foreground text-sm md:text-base mb-6">{children}</p>
);

export const Badge = ({ children, variant = "yellow" }: { children: ReactNode; variant?: "yellow" | "green" | "dim" }) => {
  const cls = variant === "yellow"
    ? "bg-primary/20 text-primary border-primary/30"
    : variant === "green"
    ? "bg-slide-accent-green/20 text-slide-accent-green border-slide-accent-green/30"
    : "bg-muted text-muted-foreground border-border";
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${cls}`}>
      {children}
    </span>
  );
};

export const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`bg-card/60 backdrop-blur-sm border border-border rounded-lg p-4 ${className}`}>
    {children}
  </div>
);
