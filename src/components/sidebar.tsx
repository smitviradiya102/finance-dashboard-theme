import logo from '../assets/logo.png';
import icon from '../assets/icon.png';
import payment from '../assets/payment.png';
import transactions from '../assets/Transactions.png';
import invoices from '../assets/invoices.png';
import cards from '../assets/cards.png';
import savingPlans from '../assets/saving-plans.png';
import inbox from '../assets/inbox.png';
import promos from '../assets/promos.png';
import insights from '../assets/insights.png';
import arrowBottom from '../assets/arrow-bottom.png';
import lock from '../assets/lock.png';
import symbol from '../assets/symbol.png';


export default function sidebar() {

    return (
        <div>
            <aside className="w-[230px] h-full bg-[#ECF4E9] p-4 flex flex-col items-center gap-2 fixed">

                <div className="w-[125px] h-[38px] gap-[10px] mr-[6px] flex items-center pt-2 cursor-pointer">
                    <img src={logo} alt="Logo" className="w-[22px] h-[22px]" />
                    <p className="text-[#242E2C] font-bold text-[18px]">COINEST</p>
                </div>

                <div className="flex flex-col w-[160px] h-[696px] gap-[8px] mt-5">
                    <div>
                        <div className="flex items-center w-[160px] h-[40px] gap-[12px] pt-[8px] pr-[12px] pb-[8px] pl-[17px] rounded-[24px] bg-[#BBF49C] text-gray-900 font-medium cursor-pointer">
                            <img src={icon} alt="Dashboard Icon" className="w-[16.5px] h-[16.5px] brightness-0" />
                            <span className="font-semibold text-[14px] text-[#242E2C]">Dashboard</span>
                        </div>
                    </div>

                    <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
                        <p className="w-[24px] h-[24px] pt-1"> <img src={payment} alt="" className="group-hover:brightness-0" /> </p>
                        <span className="w-[78px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Payments</span>
                        <div className="w-[14px] h-[14px] ml-2 pt-1">
                            <img src={arrowBottom} alt="" />
                        </div>
                    </div>

                    <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
                        <p className="w-[24px] h-[24px] pt-1"><img src={transactions} alt="" className="group-hover:brightness-0" /></p>
                        <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Transactions</span>
                    </div>

                    <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
                        <p className="w-[24px] h-[24px] pt-1"><img src={invoices} alt="" className="group-hover:brightness-0" /></p>
                        <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Invoices</span>
                    </div>

                    <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
                        <p className="w-[24px] h-[24px] pt-1"><img src={cards} alt="" className="group-hover:brightness-0" /></p>
                        <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Cards</span>
                    </div>

                    <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
                        <p className="w-[24px] h-[24px] pt-1"><img src={savingPlans} alt="" className="group-hover:brightness-0" /></p>
                        <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Saving Plans</span>
                    </div>

                    <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
                        <p className="w-[24px] h-[24px] pt-1"><img src={inbox} alt="" className="group-hover:brightness-0" /></p>
                        <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Investments</span>
                    </div>

                    <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
                        <p className="w-[24px] h-[24px] pt-1"><img src={promos} alt="" className="group-hover:brightness-0" /></p>
                        <span className="w-[72px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Inbox</span>
                        <div className="flex items-center justify-center w-[20px] h-[20px] p-[2px] bg-red-500 text-white text-[10px] rounded-full ml-2">99</div>
                    </div>

                    <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
                        <p className="w-[24px] h-[24px] pt-1"><img src={payment} alt="" className="group-hover:brightness-0" /></p>
                        <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Promos</span>
                    </div>

                    <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200 text-[#242E2C]">
                        <p className="w-[24px] h-[24px] pt-1"><img src={insights} alt="" className="group-hover:brightness-0" /></p>
                        <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Insights</span>
                    </div>
                </div>

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
            </aside>
        </div>
    )
}