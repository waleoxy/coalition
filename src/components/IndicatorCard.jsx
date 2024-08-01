import { cn } from "../lib/utils";

const IndicatorCard = ({ title, value, image, levels }) => {
  return (
    <div
      className={cn(
        "bg-[] h-[242px] w-[220px] shadow-md p-6 pt-4 rounded-[12px]",
        {
          "bg-[#E0F3FA]": title === "Respiratory Rate",
          "bg-[#FFE6E9]": title === "Temperature",
          "bg-[#FFE6F1]": title === "Heart Rate",
        }
      )}
    >
      <div>
        <div className="h-[96px] w-[96px] rounded-full ">
          <img
            src={image}
            alt="img"
            className="object-contain object-center rounded-full"
          />
        </div>
        <div className="mt-2">
          <h6 className="text-[16px] -mb-2">{title}</h6>
          <h4 className="text-[30px] font-extrabold -mt-3">
            {value}
            {title === "Temperature" ? "°F" : "bpm"}{" "}
          </h4>
        </div>
        <div>
          <p className="text-[14px] mt-3">{levels}</p>
        </div>
      </div>
    </div>
  );
};

export default IndicatorCard;
