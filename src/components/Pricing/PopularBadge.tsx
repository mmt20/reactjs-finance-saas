import StarIcon from "@/assets/star.svg?react";

const PopularBadge = () => {
  return (
    <div className="absolute top-5 right-4">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#236456] bg-[#112220] px-3 py-1.5 text-xs font-semibold text-[#33C6AB]">
        <StarIcon className="shrink-0" />
        Popular
      </span>
    </div>
  );
};

export default PopularBadge;
