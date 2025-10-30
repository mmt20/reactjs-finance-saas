import { MoreVertical } from "lucide-react";
import InvoiceItem from "./InvoiceItem";
const invoiceItems = [
  { iconBg: "#FBADE0", name: "John Client_download.Pdf" },
  { iconBg: "#6893FF", name: "Michele Leos_download.Pdf" },
  { iconBg: "#DFFF9D", name: "John Smith_download.Pdf" },
];
const InvoiceList = () => {
  return (
    <div className="bg-muted rounded-2xl p-6 w-[48%] ml-auto shadow-sm">
      <div className="flex items-center justify-between mb-4 border-b border-border pb-2">
        <h4 className="text-base font-semibold text-foreground">MonthlyInvoice</h4>
        <MoreVertical className="w-5 h-5 text-muted-foreground" />
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
