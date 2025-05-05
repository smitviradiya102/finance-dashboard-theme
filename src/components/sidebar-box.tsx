import lock from '../assets/lock.png';
import symbol from '../assets/symbol.png';

export default function sidebarbox() {

    return (
        <div className="w-[154px] h-[212px] bg-[#1E4841] rounded-[16px] pt-[20px] pr-[16px] pb-[20px] pl-[16px] flex flex-col gap-[20px] relative top-4 content-end mb-6">
        <div className="w-[65px] h-[65px] bg-no-repeat absolute top-0 right-0 translate-x-2"
            style={{ backgroundImage: `url(${symbol})` }}></div>

        <div className="w-[32px] h-[32px] rounded-[8px] bg-[#ECF4E9] flex justify-center items-center cursor-pointer">
            <img src={lock} alt="" className="" />
        </div>
        <p className="w-[123px] h-[48px] font-urbanist font-normal text-[12px] leading-[130%] pt-4 text-[#ECF4E9]">
            Gain full access to your finances with detailed analytics and graphs
        </p>
        <button className="w-[75px] h-[38px] bg-[#BBF49C] rounded-[8px] mt-3 font-medium text-[14px]">
            Get Pro
        </button>
    </div>
)
}