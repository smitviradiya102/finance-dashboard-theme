
interface ActivityRows {
  name: string;
  activity: string;
  time: string;
  showLine: boolean;
  isLast: boolean;
  height: boolean;
}

export default function RecentActivitycard({
  name,
  activity,
  time,
  showLine,
  isLast,
  height,
}: ActivityRows) {
  return (
    <div className={`flex items-center ${isLast ? 'h-[61px]' : 'h-[45px]'}`}>
      <div className="w-[30px] h-full flex flex-col items-center justify-start mt-2">
        <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
        {showLine && <span className={`w-[1px] bg-[#BCBEBD] mt-[2px]  ${height ? 'h-[29px]' : 'h-[13px]'}`}></span>}
      </div>
      <div className={`w-[207px] h-[45px] gap-[4px] pt-[2px] ml-3`}>
        <p className="font-semibold text-[12px] text-[#242E2C]">
          {name} <span className="font-normal">{activity}</span>
        </p>
        <p className="font-normal text-[10px] text-[#6B7271]">{time}</p>
      </div>
    </div>  
  );
}

