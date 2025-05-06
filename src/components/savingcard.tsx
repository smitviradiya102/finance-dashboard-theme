import threeDots from '../assets/three-dots.png';

interface savingcards{
    icon:string;
    arrow:string;
    per:number;
    price:string;
    total:string;
}

export default function Savingcard({ icon,per,price,total,arrow }: savingcards) {
    return (
        
        <div className="w-[183.33px] h-[174px] border border-[#E5E6E6] rounded-[16px] p-4 gap-7 flex flex-col">
        <div className="w-[151.33px] h-[36px] flex justify-between items-center">
            <div className="w-[36px] h-[36px] p-[8px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center">
                <img src={icon} alt="" className="w-[16px] h-[16px] cursor-pointer" />
            </div>
            <img src={threeDots} alt="" className="flex self-start cursor-pointer" />
        </div>
        <div className="w-[151.33px] h-[78px] flex flex-col justify-between">
            <div className="w-[49px] h-[12px] rounded-[15px] bg-[#BBF49C] flex items-center justify-center">
                <img src={arrow} alt="" className="pr-2"/>
                <span className="text-[8px] text-[#1E4841] font-medium">{per}%</span>
            </div>
            <p className="font-bold text-[24px] text-[#242E2C]">{price}</p>
            <p className="font-normal text-[12px] text-[#242E2C]">{total}</p>
        </div>
    </div>
    );
  }