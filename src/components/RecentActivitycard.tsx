interface RecentActivitycards {
  name: string;
  activity: string;
  time: string;
  dayLabel: string; 
}

export default function RecentActivitycard({
  name,
  activity,
  time,
  dayLabel,
}: RecentActivitycards) {
  const isToday = dayLabel === "Today";

  return (
    <div className={`${isToday ? 'h-[45px]' : 'h-[61px]'} flex items-center`}>
      <div className="w-[30px] h-full flex flex-col items-center justify-start">
        <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
        <span className={`w-[1px] bg-[#BCBEBD] ${isToday ? 'h-[13px]' : 'h-[29px]'}`}></span>
      </div>
      <div className="w-[207px] h-[61px] gap-[4px] pt-[2px] pb-[10px] ml-3">
        <p className="font-semibold text-[12px] text-[#242E2C]">
          {name} <span className="font-normal text-[12px]">{activity}</span>
        </p>
        <p className="font-normal text-[10px] text-[#6B7271]">{time}</p>
      </div>
    </div>
  );
}
