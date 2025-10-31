import StarIcon from "@/assets/star.svg?react";

const PopularBadge = () => {
  return (
    <div className="absolute top-5 right-4">
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#112220] text-[#33C6AB] rounded-full text-xs font-semibold border border-[#236456]">
        <StarIcon className="shrink-0" />
        Popular
      </span>
    </div>
  );
};

export default PopularBadge;
