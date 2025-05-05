import threeDots from '../assets/three-dots.png';
import RecentActivitycard from './RecentActivitycard';

export default function RecentActivity() {
  return (
    <section className="w-[283px] h-[408px] p-[16px] rounded-[16px] border border-[#E5E6E6] flex flex-col gap-[16px]">
      <div className="w-[251px] h-[19px] flex justify-between items-center">
        <p className="font-bold text-[16px] text-[#242E2C]">Recent Activity</p>
        <img src={threeDots} alt="" className="cursor-pointer" />
      </div>

      <div className="w-[251px] h-[341px] flex flex-col">
        <div className="w-[251px] h-[184px] flex flex-col gap-[12px]">
          <p className="font-medium text-[14px] text-[#242E2C]">Today</p>

          <RecentActivitycard
            name="Jamie Smith"
            activity="updated account settings"
            time="16:05"
            dayLabel="Today"
          />
          <RecentActivitycard
            name="Alex Johnson"
            activity="logged in"
            time="13:05"
            dayLabel="Today"
          />
          <RecentActivitycard
            name="Morgan Lee"
            activity="added a new savings goal for vacation"
            time="02:05"
            dayLabel="Today"
          />
        </div>

        <div className="w-[251px] h-[153px] flex flex-col">
          <p className="font-medium text-[14px] text-[#242E2C] py-2">Yesterday</p>

          <RecentActivitycard
            name="Taylor Green"
            activity="reviewed recent transactions"
            time="21:05"
            dayLabel="Yesterday"
          />
          <RecentActivitycard
            name="Wilson Baptista"
            activity="transferred funds to emergency fund"
            time="09:05"
            dayLabel="Yesterday"
          />
        </div>
      </div>
    </section>
  );
}
