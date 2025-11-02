const AmountSummary = () => {
  return (
    <div className="relative sm:absolute sm:-bottom-7 sm:left-4 bg-muted rounded-t-2xl rounded-b-none p-4 sm:p-6 w-full sm:w-[40%] shadow-sm mt-4 sm:mt-0">
      <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3">$3453.00</div>
      <div className="border-t border-border my-3 sm:my-4"></div>
      <div className="space-y-2">
        <div className="h-2 bg-border rounded-full w-full"></div>
        <div className="h-2 bg-border rounded-full w-4/5"></div>
        <div className="h-2 bg-border rounded-full w-2/3"></div>
      </div>
    </div>
  );
};
export default AmountSummary;
