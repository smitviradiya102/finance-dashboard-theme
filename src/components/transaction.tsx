import sidebar from '../assets/sidebar.png';
import sortIcon from '../assets/Sort.png';
import blueArrowBottom from '../assets/blue-arrow-bottom.png';

export default function Transaction() {
    return(

      <div className="w-[586px] h-[353px] gap-4 rounded-[16px] border border-[#E5E6E6] p-4 mt-5">
                <div className="w-[554px] h-[32px] flex justify-between">
                    <p className="font-bold text-[16px] text-[#242E2C]">Recent Transactions</p>
                    <div className="w-[142px] h-[32px] gap-2">

                        <div className="flex gap-2">
                            <div className="w-[100px] h-[32px] gap-1 rounded-[8px] mr-[2px] p-[8px_12px_8px_8px] border border-[#E5E6E6] flex items-center justify-between cursor-pointer">
                                <span className="text-[#1E4841] text-[12px] font-semibold">This Month</span>
                                <img src={blueArrowBottom} alt="Icon" />
                            </div>

                            <div className="w-[32px] h-[32px] rounded-[8px] border border-[#E5E6E6] p-2 flex items-center justify-center cursor-pointer">
                                <img src={sidebar} alt="" className="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-[554px] h-[273px] mt-4">
                    <div className="w-[554px] h-[33px] flex justify-between items-center pt-[10px] pr-[10px] pb-[10px] pl-[10px] border-t border-[#ECF4E9] bg-[#ECF4E9]">
                        <p className="w-[146px] h-[13px] font-normal text-[#6B7271] text-[10px] flex items-center">Transaction Name <img src={sortIcon} alt="" className="w-[12px] h-[12px]" /></p>
                        <p className="w-[68px] h-[13px] font-normal text-[#6B7271] text-[10px] flex items-center">Date & Time <img src={sortIcon} alt="" className="w-[12px] h-[12px]" /></p>
                        <p className="w-[48px] h-[13px] font-normal text-[#6B7271] text-[10px] flex items-center">Amount <img src={sortIcon} alt="" className="w-[12px] h-[12px]" /></p>
                        <p className="w-[130px] h-[13px] font-normal text-[#6B7271] text-[10px] flex items-center">Note <img src={sortIcon} alt="" className="w-[12px] h-[12px]" /></p>
                        <p className="w-[62px] h-[13px] font-normal text-[#6B7271] text-[10px] flex items-center">Status <img src={sortIcon} alt="" className="w-[12px] h-[12px]" /></p>
                    </div>

                    <div className="w-[554px] flex flex-col border-t border-[#E5E6E6] text-sm">
                        <div className="w-[554px] h-[48px] flex justify-between items-center px-[10px] py-[10px]">
                            <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                                <span className="font-semibold text-[10px]">Electricity Bill</span>
                                <span className="font-normal text-[10px] text-[#6B7271]">Payments</span>
                            </p>
                            <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                                <span className="font-semibold text-[10px]">2028-03-01</span>
                                <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                            </p>
                            <p className="w-[48px] h-[13px] flex flex-col justify-center">
                                <span className="font-semibold text-[10px] text-[#6B7271]">$295.81</span>
                            </p>
                            <p className="w-[130px] h-[26px] flex flex-col justify-center leading-[14px]">
                                <span className="font-normal text-[10px] text-[#6B7271]">Payment for monthly electricity bill</span>
                            </p>
                            <div className="w-[62px] h-[17px] flex flex-col justify-center">
                                <div className="w-[38px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                                    <span className="font-normal text-[10px] text-[#F73541] cursor-pointer">Failed</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-[554px] h-[48px] flex justify-between items-center border-t border-[#E5E6E6] px-[10px] py-[10px]">
                            <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                                <span className="font-semibold text-[10px]">Weekly Groceries</span>
                                <span className="font-normal text-[10px] text-[#6B7271]">Shopping</span>
                            </p>
                            <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                                <span className="font-semibold text-[10px]">2028-03-04</span>
                                <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                            </p>
                            <p className="w-[48px] h-[13px] flex flex-col justify-center">
                                <span className="font-semibold text-[10px] text-[#6B7271]">$204.07</span>
                            </p>
                            <p className="w-[130px] h-[26px] flex flex-col justify-center leading-[14px]">
                                <span className="font-normal text-[10px] text-[#6B7271]">Groceries shopping at local supermarket</span>
                            </p>
                            <div className="w-[62px] h-[17px] flex flex-col justify-center">
                                <div className="w-[62px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                                    <span className="font-normal text-[10px] text-[#1E4841] cursor-pointer">Completed</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-[554px] flex flex-col border-t border-[#E5E6E6] text-sm">
                            <div className="w-[554px] h-[48px] flex justify-between items-center px-[10px] py-[10px]">
                                <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                                    <span className="font-semibold text-[10px]">Movie Night</span>
                                    <span className="font-normal text-[10px] text-[#6B7271]">Entertainment</span>
                                </p>
                                <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                                    <span className="font-semibold text-[10px]">2028-02-27</span>
                                    <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                                </p>
                                <p className="w-[48px] h-[13px] flex flex-col justify-center">
                                    <span className="font-semibold text-[10px] text-[#6B7271]">$97.84</span>
                                </p>
                                <p className="w-[130px] h-[13px] flex flex-col justify-center leading-[14px]">
                                    <span className="font-normal text-[10px] text-[#6B7271]">Tickets for movie and snacks</span>
                                </p>
                                <div className="w-[62px] h-[17px] flex flex-col justify-center">
                                    <div className="w-[47px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                                        <span className="font-normal text-[10px] text-[#F2B007] cursor-pointer">Pending</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[554px] h-[48px] flex justify-between items-center border-t border-[#E5E6E6] px-[10px] py-[10px]">
                                <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                                    <span className="font-semibold text-[10px]">Medical Check-up</span>
                                    <span className="font-normal text-[10px] text-[#6B7271]">Healthcare</span>
                                </p>
                                <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                                    <span className="font-semibold text-[10px]">2028-02-07</span>
                                    <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                                </p>
                                <p className="w-[48px] h-[13px] flex flex-col justify-center">
                                    <span className="font-semibold text-[10px] text-[#6B7271]">$323.33</span>
                                </p>
                                <p className="w-[130px] h-[26px] flex flex-col justify-center leading-[14px]">
                                    <span className="font-normal text-[10px] text-[#6B7271]">Routine health check-up and medications</span>
                                </p>
                                <div className="w-[62px] h-[17px] flex flex-col justify-center">
                                    <div className="w-[47px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                                        <span className="font-normal text-[10px] text-[#F2B007] cursor-pointer">Pending</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[554px] h-[48px] flex justify-between items-center border-t border-[#E5E6E6] px-[10px] py-[10px]">
                                <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                                    <span className="font-semibold text-[10px]">Dinner at Italian Restaurant</span>
                                    <span className="font-normal text-[10px] text-[#6B7271]">Dining Out</span>
                                </p>
                                <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                                    <span className="font-semibold text-[10px]">2028-02-11</span>
                                    <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                                </p>
                                <p className="w-[48px] h-[13px] flex flex-col justify-center">
                                    <span className="font-semibold text-[10px] text-[#6B7271]">$226.25</span>
                                </p>
                                <p className="w-[130px] h-[26px] flex flex-col justify-center leading-[14px]">
                                    <span className="font-normal text-[10px] text-[#6B7271]">Dining out with family at a local Italian restaurant</span>
                                </p>
                                <div className="w-[62px] h-[17px] flex flex-col justify-center">
                                    <div className="w-[47px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                                        <span className="font-normal text-[10px] text-[#F2B007] cursor-pointer">Pending</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}