import AccountingCard from "./accounting-card/AccountingCard";
import AnalyticsCard from "./AnalyticsCard";
import CollaborationCard from "./CollaborationCard";
import CTACard from "./CTACard";
import GraphCard from "./GraphCard";

const Features = () => {
  return (
    <section className="py-20 px-4  relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6  ">
          <AnalyticsCard />
          <GraphCard />
          <CollaborationCard />
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AccountingCard />
          <CTACard />
        </div>
      </div>
    </section>
  );
};
export default Features;
