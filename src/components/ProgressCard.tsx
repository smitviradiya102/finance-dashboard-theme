import threeDots from '../assets/three-dots.png';

interface ProgressCards {
    icon: string;
    title: string;
    saved: string;
    percent: string;
    target: string;
    currency:string;
  }
  
  export default function ProgressCard({ icon, title, saved, percent, target, currency }: ProgressCards) {
    return (
      <div className="w-[251px] h-[103px] gap-[16px] rounded-[12px] border border-[#E5E6E6] p-[14px] flex items-end flex-col">
        <div className="w-[223px] h-[28px] flex justify-between items-center">
          <div className="w-[28px] h-[28px] p-[6px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center gap-[28px]">
            <img src={icon} alt="" />
          </div>
             <p className="font-medium text-[12px] text-[#242E2C] w-[200px] pl-2">{title}</p>
             <img src={threeDots} alt="" className="cursor-pointer" />     
        </div>
  
        <div className="w-[223px] h-[31px] gap-[10px]">
          <div className="w-[223px] h-[8px] bg-[#BBF49C] rounded-[8px]">
            <div className="h-full bg-[#1E4841] rounded-[8px]" style={{ width: percent }}></div>
          </div>
          <div className="flex justify-between items-end mt-1">
            <p className="font-semibold text-[10px] text-[#242E2C] pt-1">{currency}{saved} <span className="text-[#6B7271]">{percent}</span></p>
            <p className="font-normal text-[10px] text-[#6B7271]">Target: <span className="text-[#242E2C]">{currency}{target}</span></p>
          </div>
        </div>
      </div>
    );
  }
  