import { Button } from "../common/ui/button";
import { Card } from "../common/ui/card";

const CTACard = () => {
  const handleExploreMore = () => {
    console.log("Explore more clicked");
  };

  return (
    <Card className="bg-card2 rounded-2xl p-8 shadow-sm border border-border flex flex-col justify-between">
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-card-foreground mb-6 leading-tight">
          Optimise expense Management as a team
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of
          mind for you.
        </p>
      </div>
      <Button onClick={handleExploreMore} className="w-fit text-secondary p-6">
        Explore more
      </Button>
    </Card>
  );
};

export default CTACard;
