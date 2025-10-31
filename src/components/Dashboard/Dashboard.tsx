import BalanceCard from "./BalanceCard.tsx";
import ChartCard from "./ChartCard.tsx";
import EmployeeCard from "./EmployeeCard.tsx";
import StatsList from "./StatsList.tsx";

const Dashboard = () => {
  return (
    <div className="relative w-full md:py-16 overflow-hidden">
      {/* Solid background: Hero background on top, Features background on bottom */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1 bg-background" />
        <div className="flex-1 bg-background2 " />
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-6 dark:bg-[#161616] rounded-2xl p-6 md:p-8 shadow-[2px_10px_81px_-8px_#00000024] dark:shadow-none dark:border dark:border-border">
            {/* Top Stats Cards */}
            <StatsList />

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
              <BalanceCard />
              <ChartCard />
              <EmployeeCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
