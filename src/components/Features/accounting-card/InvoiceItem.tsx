import { MoreVertical } from "lucide-react";
import ChatIcon from "@assets/chat.svg?react";

const InvoiceItem = ({ iconBg, name }: { iconBg: string; name: string }) => {
  return (
    <div className="flex items-center gap-3 py-2">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        <ChatIcon className="w-4 h-4 text-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground truncate">{name}</p>
        <div className="w-full h-1.5 bg-border rounded-full mt-1.5"></div>
      </div>
      <MoreVertical className="w-4 h-4 text-muted-foreground" />
    </div>
  );
};
export default InvoiceItem;
