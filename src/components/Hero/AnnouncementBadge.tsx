import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";

const AnnouncementBadge = () => {
  return (
    <Badge className="border border-primary-brand/20 border-b-0 mb-6 bg-primary-brand/10 text-primary-brand hover:bg-primary-brand/20 px-1 py-1 gap-3">
      <span className="bg-primary-brand text-primary rounded-full px-3 py-1 text-sm font-semibold">New</span>
      <span className="flex items-center gap-2 text-primary dark:text-primary-brand">Introducing AI Automation</span>
      <ArrowRight size={16} />
    </Badge>
  );
};

export default AnnouncementBadge;
