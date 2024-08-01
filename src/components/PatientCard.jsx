import moreVertIcon from "../assets/moreVertIcon.jpg";
import { cn } from "../lib/utils";

const PatientCard = ({ image, fullName, gender, age }) => {
  return (
    <div
      className={cn("px-4 flex items-center justify-between max-w-[367px]", {
        "bg-[#D8FCF7]": fullName === "Jessica Taylor",
      })}
    >
      <div className="flex items-center gap-x-3 w-full">
        <div className="h-12 w-12 rounded-full">
          <img
            src={image}
            alt="image"
            className="object-contain object-center"
          />
        </div>
        <div className="text-[14px] flex flex-col">
          <p className="text-[#072635] font-bold -mb-5">{fullName}</p>
          <div className="text-[#707070] py-0">
            <span>{gender}</span>
            <span>{age}</span>
          </div>
        </div>
      </div>{" "}
      <div className="h-[3.71px w-[18px] ">
        <img src={moreVertIcon} alt="icon" className="rotate-90" />
      </div>
    </div>
  );
};

export default PatientCard;
