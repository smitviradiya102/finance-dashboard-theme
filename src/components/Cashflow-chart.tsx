import blueArrowBottom from '../assets/blue-arrow-bottom.png';
export default function Cashflow() {
      
    return (

       <div className="w-[586px] h-[321px] border border-[#E5E6E6] gap-[18px] rounded-[16px] mt-[20px]">
       <div className="justify-center flex">
           <div className="w-[554px] h-[32px] flex justify-between items-center mt-3">
               <p className="text-[#242E2C] text-[16px] font-bold">Cashflow</p>
               <button className="w-[90px] h-[32px] gap-1 rounded-[8px] px-[8px] pt-[8px] pb-[8px] pl-[12px] border border-[#E5E6E6] text-[#1E4841] font-semibold text-[12px] flex flex-row justify-between items-center">
                   This Year  <img src={blueArrowBottom} alt="" className="w-[7.88px] h-[4.38px]" />
               </button>
           </div>
       </div>

       <div className="flex justify-center">
           <div className="w-[554px] h-[43px] flex justify-between mt-3">
               <div>
                   <p className="font-normal text-[10px]">Total Balance</p>
                   <p className="font-bold text-[24px] text-[#1E4841]">$562,000</p>
               </div>

               <div className="flex justify-between items-center pr-2">
                   <div className="w-[8px] h-[8px] rounded-sm bg-[#1E4841] cursor-pointer"></div>
                   <span className="font-semibold text-[12px] text-[#242E2C] pl-1 mr-5">Income</span>
                   <div className="w-[8px] h-[8px] rounded-sm bg-[#BBF49C] cursor-pointer"></div>
                   <span className="font-semibold text-[12px] text-[#242E2C] pl-1">Expense</span>
               </div>
           </div>
       </div>
   </div>
    )
}