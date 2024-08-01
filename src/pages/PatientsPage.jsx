import MaxWidthWrapper from "../layout/MaxWidthWrapper";
import PatientCard from "../components/PatientCard";
import searchIcon from "../assets/searchIcon.jpg";
import { useLoaderData } from "react-router-dom";
import {
  dataInfoSerializer,
  graphDataSerializer,
} from "../lib/graph/dataSerializer";
import BloodPressureChart from "../components/graph";
import ArrowUp from "../assets/ArrowUp.jpg";
import IndicatorCard from "../components/IndicatorCard";
import respiratoryImage from "../assets/respiratoryRate.jpg";
import temperatureImage from "../assets/temperature.jpg";
import HeartBPM from "../assets/HeartBPM.jpg";
import PersoanInfoCard from "../components/PersoanInfoCard";
import BirthIcon from "../assets/BirthIcon.jpg";
import FemaleIcon from "../assets/FemaleIcon.jpg";
import PhoneIcon from "../assets/PhoneIcon.jpg";
import InsuranceIcon from "../assets/InsuranceIcon.jpg";
import downloadIcon from "../assets/downloadIcon.jpg";

const PatientsPage = () => {
  const loaderData = useLoaderData();

  const serializedGraphData = graphDataSerializer(loaderData, "Jessica Taylor");
  const serializedInfoData = dataInfoSerializer(loaderData, "Jessica Taylor");

  const personaInfo = [
    {
      id: 0,
      icon: BirthIcon,
      value: serializedInfoData.date_of_birth,
      title: "Date of Birth",
    },
    {
      id: 1,
      icon: FemaleIcon,
      value: serializedInfoData.gender,
      title: "Gender",
    },
    {
      id: 2,
      icon: PhoneIcon,
      value: serializedInfoData.phone_number,
      title: "Contact info.",
    },
    {
      id: 3,
      icon: PhoneIcon,
      value: serializedInfoData.emergency_contact,
      title: "Emergency Contacts",
    },
    {
      id: 4,
      icon: InsuranceIcon,
      value: serializedInfoData.insurance_type,
      title: "Insurance Provider",
    },
  ];

  console.log("ser", serializedInfoData);

  return (
    <div className="w-full">
      <MaxWidthWrapper className="text-4xl text-black mt-3 px-0 ">
        <div className="grid grid-cols-4 gap-x-3 bg-background">
          <section className="col-span-1 bg-white h-full max-w-[367px] shadow-md">
            <div className="flex items-center justify-between px-4">
              <h5 className="text-[24px] font-extrabold text-[#072635] ">
                Patients
              </h5>
              <img src={searchIcon} alt="search-logo" />
            </div>
            <div className="h-[950px] overflow-y-auto py-4 flex flex-col gap-y-4">
              {loaderData.map((data, i) => (
                <PatientCard
                  key={i}
                  age={data.age}
                  fullName={data.name}
                  gender={data.gender}
                  image={data.profile_picture}
                />
              ))}
            </div>
          </section>
          <section className="col-span-2  h-full border-none">
            <div className="bg-white shadow-md">
              <h5 className="text-[24px] font-extrabold p-4 ">
                Diagnosis History
              </h5>
              <div className="min-h-[298px] h-full max-w-[726px] flex items-center px-4">
                <div className="w-full h-full  grid grid-cols-4 bg-[#F4F0FE]">
                  <div className="min-h-[298px] h-[298px] col-span-3">
                    <h6 className="text-[18px] font-extrabold pl-6 flex items-center justify-between">
                      Blood Pressure
                      <span className="mr-8">
                        <select className="text-[14px] text-[#072635] font-normal">
                          <option>Last 6 months</option>
                        </select>
                      </span>
                    </h6>
                    <BloodPressureChart graphData={serializedGraphData} />
                  </div>

                  <div className="col-span-1 flex flex-col items-start  w-[208px] text-[14px]">
                    <div className="text-[14px] flex flex-col border-b-2">
                      <h6 className="text-[14px] font-bold flex items-center gap-x-1 -mb-1">
                        <p className="bg-[#E66FD2] h-[14px] w-[14px] rounded-[7px]"></p>{" "}
                        Systolic
                      </h6>
                      <p className="text-[22px] font-bold -mt-1">160</p>
                      <p className="flex items-center gap-x-1">
                        {" "}
                        <span>
                          <img src={ArrowUp} alt="" />
                        </span>
                        Higher than average
                      </p>
                    </div>
                    <div className="text-[14px] flex flex-col -mt-1">
                      <h6 className="text-[14px] font-bold flex items-center gap-x-1 -mb-1">
                        <p className="bg-[#8C6FE6] h-[14px] w-[14px] rounded-[7px]"></p>{" "}
                        Diastolic
                      </h6>
                      <p className="text-[22px] font-bold -mt-1">78</p>
                      <p className="flex items-center gap-x-1">
                        {" "}
                        <span className="rotate-180">
                          <img src={ArrowUp} alt="" />
                        </span>
                        Lower than average
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 grid grid-cols-3">
                <IndicatorCard
                  title="Respiratory Rate"
                  value={serializedGraphData[0].respiratoryRate.value}
                  image={respiratoryImage}
                  levels={serializedGraphData[0].respiratoryRate.levels}
                />
                <IndicatorCard
                  title={"Temperature"}
                  value={serializedGraphData[0].temperature.value}
                  image={temperatureImage}
                  levels={serializedGraphData[0].temperature.levels}
                />
                <IndicatorCard
                  title={"Heart Rate"}
                  value={serializedGraphData[0].heartRate.value}
                  image={HeartBPM}
                  levels={serializedGraphData[0].heartRate.levels}
                />
              </div>
            </div>
            <div className="px-4 bg-white mt-6 pt-4 shadow-md">
              <h5 className="font-extrabold text-[24px] mb-4 text-[#072635]">
                Diagnostic List
              </h5>
              <div className="px-1 mr-2 mt-10 pb-8">
                <header className="grid grid-cols-6 text-[14px] text-[#072635] h-[48px] rounded-full bg-[#F6F7F8] px-4 content-center font-extrabold ">
                  <span className="text-left col-span-2">
                    Problem/Diagnosis
                  </span>
                  <span className="text-left col-span-3">Description</span>
                  <span className="text-left col-span-1">Status</span>
                </header>

                {serializedInfoData.diagnostic_list.map((ser) => (
                  <div className="grid grid-cols-6 text-[14px] text=[#072635] px-4">
                    <p className="col-span-2">{ser.name}</p>
                    <p className="col-span-3">{ser.description}</p>
                    <p className="col-span-1">{ser.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="col-span-1  h-full w-full max-w-[367px]">
            <div className="flex flex-col items-center gap-x-3 w-full bg-white shadow-md">
              <div className="flex flex-col items-center p-8">
                <div className="h-[200px] w-[200px] rounded-full">
                  <img
                    src={serializedInfoData.profile_picture}
                    alt="image"
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <span className="text-[24px] text-[#072635] font-extrabold mt-4 ml-4">
                  {serializedInfoData.name}
                </span>
              </div>
              <div className="text-[14px] flex flex-col w-full px-6 -my-2">
                {personaInfo.map((pInfo) => (
                  <PersoanInfoCard
                    title={pInfo.title}
                    icon={pInfo.icon}
                    value={pInfo.value}
                  />
                ))}
              </div>
              <button className="bg-[#01F0D0]  w-[220px] h-[41px] rounded-[41px] mt-8 text-[#072635] text-[14px] font-bold">
                Show All Information
              </button>
            </div>{" "}
            <div className="px-4 bg-white mt-6 pt-4 shadow-md">
              <h5 className="font-extrabold text-[24px] mb-4 text-[#072635]">
                Lab Results
              </h5>
              <div className="px-1 mr-2 mt-5 overflow-y-auto pb-8">
                {serializedInfoData.lab_results.map((ser) => (
                  <div className="flex items-center justify-between text-[14px] text=[#072635] px-4">
                    <p className="col-span-2">{ser}</p>
                    <img src={downloadIcon} alt="icon" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PatientsPage;
