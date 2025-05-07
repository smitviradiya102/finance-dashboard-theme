interface SidebarItems {
    icon: string;
    label: string;
    notificationCount?: number;
    arrow?: string; // arrow is optional
  }
  
  export default function SidebarItem({
    icon,
    label,
    notificationCount,
    arrow,
  }: SidebarItems) {
    return (
      <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
        <p className="w-[24px] h-[24px] pt-1">
          <img src={icon} alt={label} className="group-hover:brightness-0" />
        </p>
        <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">
          {label}
        </span>
  
        {notificationCount && (
          <div className="flex items-center justify-center w-[25px] h-[20px] p-[1px] bg-red-500 text-white text-[10px] rounded-full mr-2">
            {notificationCount}
          </div>
        )}
  
        {arrow && (
          <div className="w-[14px] h-[14px] pt-1 mr-2">
            <img src={arrow} alt="Arrow" />
          </div>
        )}
      </div>
    );
  }
  