import threeDots from '../assets/three-dots.png';
import blueArrowBottom from '../assets/blue-arrow-bottom.png';

export default function Colum3() {

    return (
        <section className="w-[283px] h-[888px] gap-[20px] ml-12 rounded-[16px] border-[#E5E6E6] flex flex-col">
            {/* <!-- box-1 --> */}
            <section className="w-[283px] h-[460px] gap-[20px] p-[16px] rounded-[16px] border border-[#E5E6E6] flex flex-col">
                <div className="w-[251px] h-[19px] flex justify-between items-center">
                    <p className="font-bold text-[16px] text-[#242E2C]">Statistic</p>
                    <p className="font-semibold text-[12px] text-[#1E4841] text-[10px] flex items-center mr-1 cursor-pointer">This Month <img src={blueArrowBottom} alt="" className="w-[7px] h-[4px] ml-1" /></p>
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

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                        <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                            <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#1E4841] flex items-center justify-center gap-[10px]">
                                <span className="font-semibold text-[10px] text-[#ECF4E9]">60%</span>
                            </p>
                            <p className="font-medium text-[12px] text-[#242E2C]">Rent & Living</p>
                        </div>
                        <p className="font-semibold text-[12px] text-[#242E2C]">$2,100</p>
                    </div>

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                        <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                            <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#BBF49C] flex items-center justify-center gap-[10px]">
                                <span className="font-semibold text-[10px] text-[#242E2C]">15%</span>
                            </p>
                            <p className="font-medium text-[12px] text-[#242E2C]">Investment</p>
                        </div>
                        <p className="font-semibold text-[12px] text-[#242E2C]">$525</p>
                    </div>

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                        <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                            <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#ECF4E9] flex items-center justify-center gap-[10px]">
                                <span className="font-semibold text-[10px] text-[#242E2C]">12%</span>
                            </p>
                            <p className="font-medium text-[12px] text-[#242E2C]">Education</p>
                        </div>
                        <p className="font-semibold text-[12px] text-[#242E2C]">$420</p>
                    </div>

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                        <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                            <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#E5E6E6] flex items-center justify-center gap-[10px]">
                                <span className="font-semibold text-[10px] text-[#242E2C]">8%</span>
                            </p>
                            <p className="font-medium text-[12px] text-[#242E2C]">Food & Drink</p>
                        </div>
                        <p className="font-semibold text-[12px] text-[#242E2C]">$280</p>
                    </div>

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                        <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                            <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#BCBEBD] flex items-center justify-center gap-[10px]">
                                <span className="font-semibold text-[10px] text-[#242E2C]">5%</span>
                            </p>
                            <p className="font-medium text-[12px] text-[#242E2C]">Entertainment</p>
                        </div>
                        <p className="font-semibold text-[12px] text-[#242E2C]">$175</p>
                    </div>
                </div>

            </section>

            {/* <!-- box-2 --> */}
            <section className="w-[283px] h-[408px] p-[16px] rounded-[16px] border border-[#E5E6E6] flex flex-col gap-[16px]">
                <div className="w-[251px] h-[19px] flex justify-between items-center">
                    <p className="font-bold text-[16px] text-[#242E2C]">Recent Activity</p>
                    <img src={threeDots} alt="" className="cursor-pointer" />
                </div>
                <div className="w-[251px] h-[341px] flex flex-col ">

                    <div className="w-[251px] h-[184px] flex flex-col gap-[12px] ">
                        <p className="font-medium text-[14px] text-[#242E2C]">Today</p>

                        <div className="w-[251px]  flex flex-col">

                            {/* <!-- Row 1 --> */}
                            <div className="h-[45px] flex items-center">
                                <div className="w-[30px] h-full flex flex-col items-center justify-start">
                                    <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                                    <span className="h-[13px] w-[1px] bg-[#BCBEBD] mt-[2px]"></span>
                                </div>
                                <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[10px] ml-3">
                                    <p className="font-semibold text-[12px] text-[#242E2C]">Jamie Smith <span className="font-normal text-[12px]">updated account settings</span></p>
                                    <p className="font-normal text-[10px] text-[#6B7271]">16:05</p>
                                </div>
                            </div>

                            {/* <!-- Row 2 --> */}
                            <div className="h-[45px] flex items-center">
                                <div className="w-[30px] h-full flex flex-col items-center justify-start">
                                    <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                                    <span className="h-[13px] w-[1px] bg-[#BCBEBD] mt-[2px]"></span>
                                </div>
                                <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[12px] ml-3">
                                    <p className="font-semibold text-[12px] text-[#242E2C]">Alex Johnson<span className="font-normal text-[12px]">logged in</span></p>
                                    <p className="font-normal text-[10px] text-[#6B7271]">13:05</p>
                                </div>
                            </div>

                            {/* <!-- Row 3 --> */}
                            <div className="h-[61px] flex items-center">
                                <div className="w-[30px] h-full flex flex-col items-center justify-start">
                                    <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                                </div>
                                <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[10px] ml-3">
                                    <p className="font-semibold text-[12px] text-[#242E2C]">Morgan Lee<span className="font-normal text-[12px]"> added a new savings goal for vacation</span></p>
                                    <p className="font-normal text-[10px] text-[#6B7271]">02:05</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="w-[251px] h-[153px] flex flex-col">
                        <p className="font-medium text-[14px] text-[#242E2C] py-2">Yesterday</p>

                        {/* <!-- Row 1 --> */}
                        <div className="h-[61px] flex items-center">
                            <div className="w-[30px] h-full flex flex-col items-center justify-start">
                                <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                                <span className="h-[29px] w-[1px] bg-[#BCBEBD] mt-[2px]"></span>
                            </div>
                            <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[10px] ml-3">
                                <p className="font-semibold text-[12px] text-[#242E2C]">Taylor Green<span className="font-normal text-[12px]">reviewed recent transactions</span></p>
                                <p className="font-normal text-[10px] text-[#6B7271]">21:05</p>
                            </div>
                        </div>

                        {/* <!-- Row 2 --> */}
                        <div className="h-[61px] flex items-center">
                            <div className="w-[30px] h-full flex flex-col items-center justify-start">
                                <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                            </div>
                            <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[12px] ml-3">
                                <p className="font-semibold text-[12px] text-[#242E2C]">Wilson Baptista<span className="font-normal text-[12px]">transferred funds to emergency fund</span></p>
                                <p className="font-normal text-[10px] text-[#6B7271]">09:05</p>
                            </div>
                        </div>
                    </div>



                </div>

            </section>

        </section>
    )
}