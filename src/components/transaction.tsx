import { useState } from 'react';
import sidebar from '../assets/sidebar.png';
import sortIcon from '../assets/Sort.png';
import blueArrowBottom from '../assets/blue-arrow-bottom.png';
import Transactioncard from './transactioncard';

export default function Transaction() {
    const [show, setShow] = useState(false);
    const [select, setSelect] = useState("This Month");

    const click = (option :string) => {
        setSelect(option);
        setShow(false);
    };
    return (

        <div className="w-[586px] h-[353px] gap-4 rounded-[16px] border border-[#E5E6E6] p-4 mt-5">
            <div className="w-[554px] h-[32px] flex justify-between">
                <p className="font-bold text-[16px] text-[#242E2C]">Recent Transactions</p>
                <div className="w-[142px] h-[32px] gap-2">

                    <div className="flex gap-2">
                    <div className="relative">
                            <button
                                className="w-[100px] h-[32px] gap-1 rounded-[8px] mr-[2px] p-[8px_12px_8px_8px] border border-[#E5E6E6] flex items-center justify-between cursor-pointer"
                                onClick={() => setShow(!show)}
                            >
                                <span className="text-[#1E4841] text-[12px] font-semibold">{select}</span>
                                <img src={blueArrowBottom} alt="Icon" />
                            </button>

                            {show && (
                                <div className="absolute top-[38px] right-0 bg-white border border-[#E5E6E6] rounded-md shadow-md z-10">
                                    <div className="cursor-pointer px-3 py-1 hover:bg-gray-100 text-[14px]" onClick={() => click("This Month")}>This Month</div>
                                    <div className="cursor-pointer px-3 py-1 hover:bg-gray-100 text-[14px]" onClick={() => click("Last Month")}>Last Month</div>
                                    <div className="cursor-pointer px-3 py-1 hover:bg-gray-100 text-[14px]" onClick={() => click("This Year")}>This Year</div>
                                    <div className="cursor-pointer px-3 py-1 hover:bg-gray-100 text-[14px]" onClick={() => click("Last Year")}>Last Year</div>
                                </div>
                            )}
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

                <Transactioncard name='Electricity Bill' transaction_name='Payments' date='2028-03-01' time='04:28:48' amount='295.81' note='
                 Payment for monthly electricity bill' status='Failed' />
                <Transactioncard name='Weekly Groceries' transaction_name='Shopping' date='2028-03-04' time='04:28:48' amount='204.07' note='
                 Groceries shopping at local supermarket' status='Completed' />
                <Transactioncard name='Movie Night' transaction_name='Entertainment' date='2028-02-27' time='04:28:48' amount='97.84' note='Tickets for movie and snacks' status='Pending' />
                <Transactioncard name='Medical Check-upl' transaction_name='Healthcare
                 
                 ' date='2028-02-07' time='04:28:48' amount='323.33' note='Routine health check-up and medications' status='Pending' />
                <Transactioncard name='Dinner at Italian Restaurant' transaction_name='Dining Out' date='2028-02-11' time='04:28:48' amount='226.25' note='
                   Dining out with family at a local Italian restaurant' status='Pending' />

            </div>
        </div>
    
    )
}