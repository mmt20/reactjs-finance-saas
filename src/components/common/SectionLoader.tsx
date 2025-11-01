import { Spinner } from "./ui/spinner";

const SectionLoader = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <Spinner className="h-12 w-12" />
    </div>
  );
};

export default SectionLoader;
