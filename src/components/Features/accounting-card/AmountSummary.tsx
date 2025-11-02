const AmountSummary = () => {
  return (
    <div className="bg-muted relative mt-4 w-full rounded-t-2xl rounded-b-none p-4 shadow-sm sm:absolute sm:-bottom-7 sm:left-4 sm:mt-0 sm:w-[40%] sm:p-6">
      <div className="text-foreground mb-2 text-lg font-bold sm:mb-3 sm:text-xl md:text-2xl lg:text-4xl">
        $3453.00
      </div>
      <div className="border-border my-3 border-t sm:my-4"></div>
      <div className="space-y-2">
        <div className="bg-border h-2 w-full rounded-full"></div>
        <div className="bg-border h-2 w-4/5 rounded-full"></div>
        <div className="bg-border h-2 w-2/3 rounded-full"></div>
      </div>
    </div>
  );
};
export default AmountSummary;
