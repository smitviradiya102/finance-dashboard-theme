import piramind from '../assets/piramind.png';
import aroplan from '../assets/aroplan.png';
import home from '../assets/home.png';
import threeDots from '../assets/three-dots.png';

export default function Progress() {

    return (

<section className="w-[283px] h-[475px] border border-[#E5E6E6] rounded-[16px] p-4 flex flex-col gap-[16px]">
<div className="w-[251px] h-[19px] flex justify-between items-center">
  <p className="text-[16px] text-[#242E2C] font-bold">Saving Plans</p>
  <p className="text-[10px] text-[#1E4841] font-medium cursor-pointer">+ Add Plan</p>
</div>
<div className="w-[90px] h-[43px] gap-[4px]">
  <p className="text-[10px] text-[#242E2C] font-medium">Total Savings</p>
  <p className="text-[24px] text-[#1E4841] font-bold">$84,500</p>
</div>

{/* progress-1  */}
<div className="w-[251px] h-[341px] gap-[16px] mt-2">
  <div className="w-[251px] h-[103px] gap-[16px] rounded-[12px] border border-[#E5E6E6] p-[14px] flex items-end flex-col">
    <div className="w-[223px] h-[28px] flex justify-between items-center">
      <div className="w-[28px] h-[28px] p-[6px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center gap-[28px]">
        <img src={piramind} alt="" />
      </div>
      <p className="pr-16 font-medium text-[12px] text-[#242E2C]">Emergency Fund</p>
      <img src={threeDots} alt="" className="cursor-pointer" />
    </div>

    <div className="w-[223px] h-[31px] gap-[10px]">
      <div className="w-[223px] h-[8px] bg-[#BBF49C] rounded-[8px]">
        <div className="h-full bg-[#1E4841] rounded-[8px] w-[65px]"></div>
      </div>
      <div className="flex justify-between items-end mt-1">
        <p className="font-semibold text-[10px] text-[#242E2C] pt-1">$5,000 <span className="font-semibold text-[10px] text-[#6B7271]">50%</span></p>
        <p className="font-normal text-[10px] text-[#6B7271] ">Target <span className="font-normal text-[10px] text-[#242E2C]">Target: $10,000</span></p>
      </div>
    </div>
  </div>
</div>

{/* progress-2 */}
<div className="w-[251px] h-[341px] gap-[16px] ">
  <div className="w-[251px] h-[103px] gap-[16px] rounded-[12px] border border-[#E5E6E6] p-[14px] flex items-end flex-col">
    <div className="w-[223px] h-[28px] flex justify-between items-center">
      <div className="w-[28px] h-[28px] p-[6px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center gap-[28px]">
        <img src={aroplan} alt="" />
      </div>
      <p className="pr-20 pl-1 font-medium text-[12px] text-[#242E2C]">Vacation Fund</p>
      <img src={threeDots} alt="" className="cursor-pointer" />
    </div>

    <div className="w-[223px] h-[31px] gap-[10px] ">
      <div className="w-[223px] h-[8px] bg-[#BBF49C] rounded-[8px]">
        <div className="h-full bg-[#1E4841] rounded-[8px] w-[65px]"></div>
      </div>
      <div className="flex justify-between items-end mt-1">
        <p className="font-semibold text-[10px] text-[#242E2C] pt-1">$5,000 <span className="font-semibold text-[10px] text-[#6B7271]">50%</span></p>
        <p className="font-normal text-[10px] text-[#6B7271] ">Target <span className="font-normal text-[10px] text-[#242E2C]">Target: $5,000</span></p>
      </div>
    </div>
  </div>
</div>

{/* progress-3  */}
<div className="w-[251px] h-[341px] gap-[16px]">
  <div className="w-[251px] h-[103px] gap-[16px] rounded-[12px] border border-[#E5E6E6] p-[14px] flex items-end flex-col">
    <div className="w-[223px] h-[28px] flex justify-between items-center">
      <div className="w-[28px] h-[28px] p-[6px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center gap-[28px]">
        <img src={home} alt="" />
      </div>
      <p className="pr-8 font-medium text-[12px] text-[#242E2C]">Home Down Payment</p>
      <img src={threeDots} alt="" className="cursor-pointer" />
    </div>

    <div className="w-[223px] h-[31px] gap-[10px] ">
      <div className="w-[223px] h-[8px] bg-[#BBF49C] rounded-[8px]">
        <div className="h-full bg-[#1E4841] rounded-[8px] w-[65px]"></div>
      </div>
      <div className="flex justify-between items-end mt-1">
        <p className="font-semibold text-[10px] text-[#242E2C] pt-1">$7,250 <span className="font-semibold text-[10px] text-[#6B7271]">36.25%</span></p>
        <p className="font-normal text-[10px] text-[#6B7271] ">Target <span className="font-normal text-[10px] text-[#242E2C]">Target: $20,000</span></p>
      </div>
    </div>
  </div>
</div>
</section>
    )
}