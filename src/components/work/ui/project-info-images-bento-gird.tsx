import { Images } from "@/lib/type";
import { cn } from "@/lib/utils";

export const ProjectInfoImages = (images: Images) => {
  const { desktop, home, mobile, rest, desktopLight, mobileLight } = images;

  return (
    <div className="grid gap-4 sm:gap-8 grid-cols-12 px-4 auto-rows-auto ">
      <div className="col-span-12 rounded-lg overflow-hidden ">
        <img src={home} alt="" />
      </div>
      <div className={"grid grid-cols-2 gap-4 sm:gap-6 col-span-12 "}>
        {rest.map((img, index) => (
          <div
            key={img}
            className="rounded-lg overflow-hidden bg-white grid place-items-center "
          >
            <img src={img} alt={`preview image number ${index}`} />
          </div>
        ))}
      </div>
      {mobile && (
        <div className="col-span-4 rounded-lg overflow-hidden bg-white grid place-items-center">
          <img src={mobile} alt="mobile image of the project" />
        </div>
      )}
      {desktop && (
        <div className="col-span-8 rounded-lg overflow-hidden bg-white grid place-items-center">
          <img src={desktop} alt="desktop image of the project" />
        </div>
      )}
      {mobileLight && (
        <div
          className={cn(
            "col-span-4 rounded-lg overflow-hidden bg-white grid place-items-center"
          )}
        >
          <img src={mobileLight} alt="light mode mobile image of the project" />
        </div>
      )}
      {desktopLight && (
        <div className="col-span-8 rounded-lg overflow-hidden bg-white grid place-items-center">
          <img
            src={desktopLight}
            alt="light mode desktop image of the project"
          />
        </div>
      )}
    </div>
  );
};
