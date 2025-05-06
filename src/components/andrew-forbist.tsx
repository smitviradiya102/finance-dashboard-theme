import symbol2 from '../assets/symbol-2.png';
import union from '../assets/Union.png';

export default function AndrewForbist() {

    return (
      <section className="w-full h-auto min-h-[174px] bg-[#1E4841] rounded-[16px] p-4 flex flex-col gap-[21px] text-white">
        <div className="w-[251px] h-auto flex items-center gap-x-[212px]">
          <img src={symbol2} alt="" />
          <img src={union} alt="" />
        </div>
        <p className="font-bold text-[20px] text-[#ECF4E9]">Andrew Forbist</p>

        <div className="w-[251px] h-[41px] justify-between flex">
          <div>
            <p className="text-[10px] font-normal text-[#ECF4E9]">Balance Amount</p>
            <p className="text-[#FBFBFC] font-bold text-[22px]">$562,000</p>
          </div>

          <div className="pl-12">
            <p className="w-[18px] h-[13px] text-[10px] font-normal pt-2 text-[#ECF4E9]">EXP</p>
            <p className="font-semibold text-[#FBFBFC] text-[12px] pt-3">11/29</p>
          </div>
          <div>
            <p className="w-[20px] h-[13px] text-[10px] font-normal pt-2 text-[#ECF4E9]">CVV</p>
            <p className="font-semibold text-[#FBFBFC] text-[12px] pt-3">323</p>
          </div>
        </div>
      </section>
      
      )
    }