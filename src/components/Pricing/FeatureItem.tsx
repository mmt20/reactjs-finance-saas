import { Check } from "lucide-react";

const FeatureItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-3">
      <Check
        className="text-primary-brand mt-0.5 h-4 w-4 shrink-0"
        aria-hidden="true"
      />
      <span className="text-foreground text-sm">{text}</span>
    </li>
  );
};

export default FeatureItem;
