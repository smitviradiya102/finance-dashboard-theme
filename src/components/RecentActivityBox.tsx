import ActivityRow from './RecentActivitycard';
import threeDots from '../assets/three-dots.png';

export default function RecentActivity() {
  return (
    <section className="w-[283px] h-[408px] p-[16px] rounded-[16px] border border-[#E5E6E6] flex flex-col gap-[16px]">
      <div className="w-[251px] h-[19px] flex justify-between items-center">
        <p className="font-bold text-[16px] text-[#242E2C]">Recent Activity</p>
        <img src={threeDots} alt="options" className="cursor-pointer" />
      </div>

      {/* Today Section */}
      <div className="flex flex-col w-[251px] h-[184px]">
        <p className="font-medium text-[14px] text-[#242E2C] mb-[12px]">Today</p>
        <ActivityRow
          name="Jamie Smith"
          activity="updated account settings"
          time="16:05"
          showLine={true}
          isLast={false}
          height={false}
        />
        <ActivityRow
          name="Alex Johnson"
          activity="logged in"
          time="13:05"
          showLine={true}
          isLast={false}
          height={false}
        />
        <ActivityRow
          name="Morgan Lee"
          activity="added a new savings goal for vacation"
          time="02:05"
          showLine={false}
          isLast={false}
          height={false}
        />
      </div>

      {/* Yesterday Section */}
      <div className="w-[251px] h-[153px] flex flex-col">
        <p className="font-medium text-[14px] text-[#242E2C] py-2 pt-1">Yesterday</p>
        <ActivityRow
          name="Taylor Green"
          activity="reviewed recent transactions"
          time="21:05"
          showLine={true}
          isLast={true}
          height={true}
        />
        <ActivityRow
          name="Wilson Baptista"
          activity="transferred funds to emergency fund"
          time="09:05"
          showLine={false}
          isLast={true}
          height={false}
        />
      </div>
    </section>
  );
}
