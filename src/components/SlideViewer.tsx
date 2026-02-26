import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/data/slides";

const SlideViewer = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const navigateTo = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) setCurrent(index);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = slides[current].component;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-border relative">
          <SlideComponent onNavigate={navigateTo} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 pb-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="p-2 rounded-lg bg-secondary text-foreground disabled:opacity-30 hover:bg-slide-highlight transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-primary scale-125" : "bg-muted hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="p-2 rounded-lg bg-secondary text-foreground disabled:opacity-30 hover:bg-slide-highlight transition-colors"
        >
          <ChevronRight size={20} />
        </button>
        <span className="text-muted-foreground text-sm ml-4 font-display">
          {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

export default SlideViewer;
