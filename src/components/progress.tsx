
import piramind from '../assets/piramind.png';
import aroplan from '../assets/aroplan.png';
import home from '../assets/home.png';
import ProgressCard from './ProgressCard';

export default function Progress() {
  return (
    <section className="w-[283px] border border-[#E5E6E6] rounded-[16px] p-4 flex flex-col gap-[16px]">
      <div className="w-[251px] h-[19px] flex justify-between items-center">
        <p className="text-[16px] text-[#242E2C] font-bold">Saving Plans</p>
        <p className="text-[10px] text-[#1E4841] font-medium cursor-pointer">+ Add Plan</p>
      </div>

      <div className="w-[90px] h-[43px] gap-[4px]">
        <p className="text-[10px] text-[#242E2C] font-medium">Total Savings</p>
        <p className="text-[24px] text-[#1E4841] font-bold">$84,500</p>
      </div>

      <ProgressCard icon={piramind} title="Emergency Fund" saved="5,000" percent="50%" target="10,000" currency="$" />
      <ProgressCard icon={aroplan} title="Vacation Fund" saved="5,000" percent="100%" target="5,000"  currency="$"/>
      <ProgressCard icon={home} title="Home Down Payment" saved="7,250" percent="36.25%" target="20,000" currency="$" />
    </section>
  );
}
