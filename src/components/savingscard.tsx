import dolarTop from '../assets/dolar-top.png';
import fileIcon from '../assets/file-icon.png';
import crossTopArrow from '../assets/cross-top-arrow.png';
import crossBottomArrow from '../assets/cross-bottom-arrow.png';
import blueArrowBottom from '../assets/blue-arrow-bottom.png';
import threeDots from '../assets/three-dots.png';
import dolar from '../assets/dolar.png';

export default function Savingcard() {

    return (
        <div>
            {/* <!-- three box in one line --> */}
            <div className="w-full h-[174px] flex flex-row gap-[18px]">
                {/* <!-- first box --> */}
                <div className="w-[183.33px] h-[174px] border border-[#E5E6E6] rounded-[16px] p-4 gap-7 flex flex-col">
                    <div className="w-[151.33px] h-[36px] flex justify-between items-center">
                        <div className="w-[36px] h-[36px] p-[8px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center">
                            <img src={dolar} alt="" className="w-[16px] h-[16px] cursor-pointer" />
                        </div>
                        <img src={threeDots} alt="" className="flex self-start cursor-pointer" />
                    </div>
                    <div className="w-[151.33px] h-[78px] flex flex-col justify-between">
                        <div className="w-[49px] h-[12px] rounded-[15px] bg-[#BBF49C] flex items-center justify-center">
                            <img src={crossTopArrow} alt="" />
                            <span className="text-[8px] text-[#1E4841] font-medium">+ 1.78 %</span>
                        </div>
                        <p className="font-bold text-[24px] text-[#242E2C]">$78,000</p>
                        <p className="font-normal text-[12px] text-[#242E2C]">Total Income</p>
                    </div>
                </div>

                {/* <!-- second box --> */}
                <div className="w-[183.33px] h-[174px] border border-[#E5E6E6] rounded-[16px] p-4 gap-7 flex flex-col">
                    <div className="w-[151.33px] h-[36px] flex justify-between items-center">
                        <div className="w-[36px] h-[36px] p-[8px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center">
                            <img src={dolarTop} alt="" className="w-[16px] h-[16px] cursor-pointer" />
                        </div>
                        <img src={threeDots} alt="" className="flex self-start cursor-pointer" />
                    </div>
                    <div className="w-[151.33px] h-[78px] flex flex-col justify-between">
                        <div className="w-[49px] h-[12px] rounded-[15px] bg-[#FDCED1] flex items-center justify-center">
                            <img src={crossBottomArrow} alt="" />
                            <span className="text-[8px] text-[#F73541] font-medium">- 1.78 %</span>
                        </div>
                        <p className="font-bold text-[24px] text-[#242E2C]">$43,000</p>
                        <p className="font-normal text-[12px] text-[#242E2C]">Total Expense</p>
                    </div>
                </div>

                {/* <!-- third box --> */}
                <div className="w-[183.33px] h-[174px] border border-[#E5E6E6] rounded-[16px] p-4 gap-7 flex flex-col">
                    <div className="w-[151.33px] h-[36px] flex justify-between items-center">
                        <div className="w-[36px] h-[36px] p-[8px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center">
                            <img src={fileIcon} alt="" className="w-[16px] h-[16px] cursor-pointer" />
                        </div>
                        <img src={threeDots} alt="" className="flex self-start cursor-pointer" />
                    </div>
                    <div className="w-[151.33px] h-[78px] flex flex-col justify-between">
                        <div className="w-[49px] h-[12px] rounded-[15px] bg-[#BBF49C] flex items-center justify-center">
                            <img src={crossTopArrow} alt="" />
                            <span className="text-[8px] text-[#1E4841] font-medium">+ 1.24 %</span>
                        </div>
                        <p className="font-bold text-[24px] text-[#242E2C]">$56,000</p>
                        <p className="font-normal text-[12px] text-[#242E2C]">Total Savings</p>
                    </div>
                </div>
            </div>

            {/* <!-- chart --> */}
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
        </div>
    )
}