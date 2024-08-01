const PersoanInfoCard = ({ title, icon, value }) => {
  return (
    <div className="flex w-full justify-start items-center gap-x-6">
      <div className="h-[42px] w-[42px]">
        <img src={icon} alt="icon" />
      </div>
      <div className="text-[14px] flex flex-col">
        <h5 className="font-normal -mb-2">{title}</h5>
        <h6 className="font-bold -mt-2">{value}</h6>
      </div>
    </div>
  );
};

export default PersoanInfoCard;
