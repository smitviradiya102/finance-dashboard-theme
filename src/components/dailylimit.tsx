import threeDots from '../assets/three-dots.png';

export default function Dailylimit() {

  return (

      <section className="w-[283px] min-h-[107px] rounded-[16px] border border-[#E5E6E6] p-4 flex flex-col gap-5">
        <p className="w-[251px] min-h-[19px] flex justify-between items-center font-bold text-[16px] text-[#242E2C] ">
          Daily Limit
          <img src={threeDots} alt="" className="w-[18px] h-[18px] cursor-pointer" />
        </p>
        <div className="w-[251px] h-[40px] gap-[12px] flex flex-col">
          <div className="w-[251px] h-[20px] flex justify-between items-center">
            <p className="text-[12px] text-[#242E2C] font-semibold">$2,500.00 <span className="text-[10px] text-[#242E2C] font-normal">spent of $20,000.00</span></p>
            <p className="text-[12px] text-[#242E2C] font-semibold  ">12.5%</p>
          </div>
          <div className="w-[251px] h-[8px] bg-[#BBF49C] rounded-[8px]">
            <div className="h-full bg-[#1E4841] rounded-[8px] w-[55px]"></div>
          </div>
        </div>
      </section>

  )
}