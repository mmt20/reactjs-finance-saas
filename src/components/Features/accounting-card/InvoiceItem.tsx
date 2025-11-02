import { MoreVertical } from "lucide-react";
import ChatIcon from "@assets/chat.svg?react";

const InvoiceItem = ({ iconBg, name }: { iconBg: string; name: string }) => {
  return (
    <div className="flex items-center gap-3 py-2">
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: iconBg }}
      >
        <ChatIcon className="text-foreground h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-foreground truncate text-sm">{name}</p>
        <div className="bg-border mt-1.5 h-1.5 w-full rounded-full"></div>
      </div>
      <MoreVertical className="text-muted-foreground h-4 w-4" />
    </div>
  );
};
export default InvoiceItem;
