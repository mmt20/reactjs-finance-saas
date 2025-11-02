import StatCard from "./StatCard";

const StatsList = () => {
  const stats = [
    {
      title: "Total Profit",
      value: "$350.240",
      change: "+18.23",
      color: "#72A700",
    },
    {
      title: "Total revenue",
      value: "$400.690",
      change: "+28.35",
      color: "#EE1F1F",
    },
    {
      title: "Product sold",
      value: "$200.000",
      change: "+28.35",
      color: "#003FDB",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default StatsList;
