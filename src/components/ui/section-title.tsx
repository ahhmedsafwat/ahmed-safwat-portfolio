import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className="relative my-20">
      <h3
        className={cn(
          "w-fit flex gap-1 rounded-full py-8 px-6 md:p-7 text-lg md:text-4xl bg-gradient-to-b from-cards to-background  absolute left-1/2 -translate-x-1/2 -top-1/2 -translate-y-1/2",
          className
        )}
      >
        {title}
      </h3>
      <hr />
    </div>
  );
};

export default SectionTitle;
