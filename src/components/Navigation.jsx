import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import logo from "../assets/TestLogo/TestLogo.png";
import { navLinks } from "../constants/navLinks";
import { Link } from "react-router-dom";
import settingsIcon from "../assets/settingsIcon.jpg";
import moreVertIcon from "../assets/moreVertIcon.jpg";
import { cn } from "../lib/utils";

const Navigation = () => {
  return (
    <nav>
      <MaxWidthWrapper className="rounded-full h-[72px] bg-white mt-4 flex items-center justify-center px-4">
        <div className="w-full flex items-center justify-between">
          {" "}
          <div className="w-[210.5px] h-[48px] mb-2">
            <img
              src={logo}
              alt="logo"
              className="object-contain object-center"
            />
          </div>
          <div>
            <ul className="flex items-center gap-x-10 text-[14px]">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={cn("flex items-center ", {
                    "bg-[#01F0D0] py-2 px-3 rounded-3xl":
                      link.title === "Patients",
                  })}
                >
                  <img src={link.icon} alt="icon" className="mr-1.5" />{" "}
                  <Link>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-3 text-[14px]">
            <div className="h-11 w-11 rounded-full">
              {" "}
              <img
                src=""
                alt="User Image"
                className="object-contain object-center"
              />
            </div>
            <div className="text-[14px] flex flex-col items-start">
              <p className=" text-[#072635]">Dr Name</p>
              <p className="text-[#707070]">General practitioner</p>
            </div>
            <div className="flex gap-x-3 ml-6">
              <img src={settingsIcon} alt="" />
              <img src={moreVertIcon} alt="" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navigation;
