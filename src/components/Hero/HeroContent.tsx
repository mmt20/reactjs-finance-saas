interface HeroContentProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const HeroContent = ({ title, description, children }: HeroContentProps) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      {children}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">{title}</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{description}</p>
    </div>
  );
};
