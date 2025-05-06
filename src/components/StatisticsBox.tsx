import { useState } from 'react';
import blueArrowBottom from '../assets/blue-arrow-bottom.png';
import StatisticCard from './StatisticCard';

export default function StatisticBox() {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState("This Month");

  const click = (option : string) => {
    setSelect(option);
    setShow(false); 
  };
  return (
    <section className="w-[283px] h-[460px] gap-[20px] p-[16px] rounded-[16px] border border-[#E5E6E6] flex flex-col">
      <div className="w-[251px] h-[19px] flex justify-between items-center">
        <p className="font-bold text-[16px] text-[#242E2C]">Statistic</p>
        <div
          className="font-semibold text-[12px] text-[#1E4841] flex items-center mr-1 cursor-pointer"
          onClick={() => setShow(!show)} 
        >
          {select}
          <img src={blueArrowBottom} alt="" className="w-[7px] h-[4px] ml-1" />
        </div>

        {show && (
           <div className="absolute top-[120px] right-[220px] bg-white border border-[#E5E6E6] rounded-md shadow-md z-10">
            <div className="cursor-pointer px-3 py-1 hover:bg-gray-100 text-[14px]" onClick={() => click("Last Month")}>Last Month</div>
            <div className="cursor-pointer px-3 py-1 hover:bg-gray-100 text-[14px]" onClick={() => click("This Year")}>This Year</div>
            <div className="cursor-pointer px-3 py-1 hover:bg-gray-100 text-[14px]" onClick={() => click("Last Year")}>Last Year</div>
          </div>
        )}
      </div>

      <div className="w-[251px] h-[28px] flex flex-row">
        <div className="w-[125.5px] h-[28px] pt-[2px] pb-[10px] border-b border-b-[1px] border-b-[#E5E6E6] flex gap-[4px] justify-center items-center cursor-pointer">
          <p className="font-semibold text-[12px] text-[#6B7271]">Income</p>
          <p className="font-normal text-[#6B7271] text-[10px]">($4,800)</p>
        </div>

        <div className="w-[125.5px] h-[28px] pt-[2px] pb-[10px] border-b-[3px] border-b-[#BBF49C] flex gap-[4px] justify-center items-center cursor-pointer">
          <p className="font-semibold text-[12px] text-[#1E4841]">Expense</p>
          <p className="font-normal text-[10px] text-[#1E4841]">($3,500)</p>
        </div>
      </div>

      <div className="w-[251px] h-[148px]"></div>

      <div className="w-[251px] h-[173px] gap-[12px] flex flex-col">
        <StatisticCard percentage="60%" category="Rent & Living" amount="$2,100" color="bg-[#1E4841]" />
        <StatisticCard percentage="15%" category="Investment" amount="$525" color="bg-[#BBF49C]" />
        <StatisticCard percentage="12%" category="Education" amount="$420" color="bg-[#ECF4E9]" />
        <StatisticCard percentage="8%" category="Food & Drink" amount="$280" color="bg-[#E5E6E6]" />
        <StatisticCard percentage="5%" category="Entertainment" amount="$175" color="bg-[#BCBEBD]" />
      </div>
    </section>
  );
}
