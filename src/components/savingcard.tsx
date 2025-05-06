import threeDots from '../assets/three-dots.png';

interface SavingCards {
  icon: string;
  arrow: string;
  per: number;
  price: string;
  total: string;
}

export default function SavingCard({ icon, per, price, total, arrow }: SavingCards) {
  const bgColor = per >= 0 ? '#BBF49C' : '#FDCED1';
  const textColor = per >= 0 ? '#1E4841' : '#F73541';

  return (
    <div className="w-[183.33px] h-[174px] border border-[#E5E6E6] rounded-[16px] p-4 gap-7 flex flex-col">
      <div className="w-[151.33px] h-[36px] flex justify-between items-center">
        <div className="w-[36px] h-[36px] p-[8px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center">
          <img src={icon} alt="icon" className="w-[16px] h-[16px] cursor-pointer" />
        </div>
        <img src={threeDots} alt="options" className="flex self-start cursor-pointer" />
      </div>

      <div className="w-[151.33px] h-[78px] flex flex-col justify-between">
        <div
          className="w-[49px] h-[12px] rounded-[15px] flex items-center justify-center"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <img src={arrow} alt="arrow" className="pr-2" />
          <span className="text-[8px] font-medium">{per}%</span>
        </div>

        <p className="font-bold text-[24px] text-[#242E2C]">{price}</p>
        <p className="font-normal text-[12px] text-[#242E2C]">{total}</p>
      </div>
    </div>
  );
}
