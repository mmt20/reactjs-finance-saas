import InvoiceItem from "./InvoiceItem";
const invoiceItems = [
  { iconBg: "#FBADE0", name: "John Client_download.Pdf" },
  { iconBg: "#6893FF", name: "Michele Leos_download.Pdf" },
  { iconBg: "#DFFF9D", name: "John Smith_download.Pdf" },
];
const InvoiceList = () => {
  return (
    <div className="bg-muted rounded-2xl p-4 sm:p-6 w-full sm:w-[48%] ml-0 sm:ml-auto mt-4 sm:mt-0 shadow-sm">
      <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
        <h3 className="text-sm sm:text-base font-semibold text-foreground">MonthlyInvoice</h3>
      </div>
      <div className="space-y-1.5">
        {invoiceItems.map((item, i) => (
          <InvoiceItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
export default InvoiceList;
