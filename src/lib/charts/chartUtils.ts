export const generateChartData = () => {
  const hours = [];
  for (let i = 0; i <= 24; i++) {
    const hour = i === 24 ? 0 : i;
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const time = `${displayHour.toString().padStart(2, "0")}:00${period}`;
    const value =
      4500 +
      Math.sin(i * 0.6 - 1) * 1200 +
      Math.cos(i * 0.4) * 600 +
      Math.sin(i * 0.2) * 300;
    hours.push({ time, value: Math.max(2000, Math.min(6500, value)) });
  }
  return hours;
};
