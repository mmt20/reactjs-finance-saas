const AmountSummary = () => {
  return (
    <div className="absolute -bottom-7 left-4 bg-muted rounded-t-2xl rounded-b-none p-6 w-[40%] shadow-sm">
      <div className="text-4xl font-bold text-foreground mb-3">$3453.00</div>
      <div className="border-t border-border my-4"></div>
      <div className="space-y-2">
        <div className="h-2 bg-border rounded-full w-full"></div>
        <div className="h-2 bg-border rounded-full w-4/5"></div>
        <div className="h-2 bg-border rounded-full w-2/3"></div>
      </div>
    </div>
  );
};
export default AmountSummary;
