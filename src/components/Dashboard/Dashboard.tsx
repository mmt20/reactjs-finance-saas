import BalanceCard from "./BalanceCard.tsx";
import ChartCard from "./chart/ChartCard.tsx";
import EmployeeCard from "./EmployeeCard.tsx";
import StatsList from "./StatsList.tsx";

const Dashboard = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Solid background: Hero background on top, Features background on bottom */}
      <div className="absolute inset-0 flex flex-col">
        <div className="bg-background flex-1" />
        <div className="bg-background2 flex-1" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-6 border-border rounded-2xl border p-6 shadow-[2px_10px_81px_-8px_#00000024] md:p-8 dark:bg-[#161616] dark:shadow-none">
            {/* Top Stats Cards */}
            <StatsList />

            {/* Bottom Section */}
            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
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
