import InvoiceItem from "./InvoiceItem";
const invoiceItems = [
  { iconBg: "#FBADE0", name: "John Client_download.Pdf" },
  { iconBg: "#6893FF", name: "Michele Leos_download.Pdf" },
  { iconBg: "#DFFF9D", name: "John Smith_download.Pdf" },
];
const InvoiceList = () => {
  return (
    <div className="bg-muted mt-4 ml-0 w-full rounded-2xl p-4 shadow-sm sm:mt-0 sm:ml-auto sm:w-[48%] sm:p-6">
      <div className="border-border mb-4 flex items-center justify-between border-b pb-2">
        <h3 className="text-foreground text-sm font-semibold sm:text-base">
          MonthlyInvoice
        </h3>
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
