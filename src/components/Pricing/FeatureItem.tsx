import { Check } from "lucide-react";

const FeatureItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-3">
      <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary-brand" aria-hidden="true" />
      <span className="text-sm text-foreground">{text}</span>
    </li>
  );
};

export default FeatureItem;
