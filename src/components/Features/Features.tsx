import AccountingCard from "./accounting-card/AccountingCard";
import AnalyticsCard from "./AnalyticsCard";
import CollaborationCard from "./CollaborationCard";
import CTACard from "./CTACard";
import GraphCard from "./GraphCard";

const Features = () => {
  return (
    <section className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Top 3 Cards */}
        <div className="mb-6 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-4 md:justify-items-start">
          <AnalyticsCard />
          <GraphCard />
          <CollaborationCard />
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:justify-items-start">
          <AccountingCard />
          <CTACard />
        </div>
      </div>
    </section>
  );
};
export default Features;
