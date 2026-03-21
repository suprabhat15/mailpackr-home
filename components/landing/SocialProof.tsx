"use client";

export default function SocialProof() {
  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale animate-fade-in">
            {/* Using text placeholders since actual logos might not exist */}
            <h3 className="text-xl font-bold text-foreground">Acme Corp</h3>
            <h3 className="text-xl font-bold text-foreground">GlobalTech</h3>
            <h3 className="text-xl font-bold text-foreground">Nebula</h3>
            <h3 className="text-xl font-bold text-foreground">CloudScale</h3>
            <h3 className="text-xl font-bold text-foreground">Velocity</h3>
        </div>
      </div>
    </section>
  );
}
