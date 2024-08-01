import { Outlet } from "react-router-dom";
import { cn } from "../lib/utils";
import Navigation from "../components/Navigation";

const RootLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-[#F6F7F8] overflow-hidden opacity-100 ">
      <div>
        {" "}
        <Navigation />
      </div>
      <div className=" overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
