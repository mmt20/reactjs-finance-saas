import { Button } from "../common/ui/button";
import { Card } from "../common/ui/card";

const CTACard = () => {
  const handleExploreMore = () => {
    console.log("Explore more clicked");
  };

  return (
    <Card className="bg-card2 border-border flex flex-col justify-between rounded-2xl border p-8 shadow-sm">
      <div>
        <h2 className="text-card-foreground mb-6 text-2xl leading-tight font-bold sm:text-3xl md:text-5xl">
          Optimise expense Management as a team
        </h2>
        <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg">
          Bring harmony to team expenses with budget limits and real-time
          monitoring. Freedom for your staff. Peace of mind for you.
        </p>
      </div>
      <Button onClick={handleExploreMore} className="text-secondary w-fit p-6">
        Explore more
      </Button>
    </Card>
  );
};

export default CTACard;
