import symbol2 from '../assets/symbol-2.png';
import union from '../assets/Union.png';
import plas from '../assets/plas.png';
import dolar from '../assets/dolar.png';
import history from '../assets/history.png';
import threeDots from '../assets/three-dots.png';

export default function Dailylimit() {

  return (

    <section className="w-[283px] h-[888px] bg-white  flex flex-col gap-5">
      {/* green box  */}
      <section className="w-full h-auto min-h-[174px] bg-[#1E4841] rounded-[16px] p-4 flex flex-col gap-[21px] text-white">
        <div className="w-[251px] h-auto flex items-center gap-x-[212px]">
          <img src={symbol2} alt="" />
          <img src={union} alt="" />
        </div>
        <p className="font-bold text-[20px] text-[#ECF4E9]">Andrew Forbist</p>

        <div className="w-[251px] h-[41px] justify-between flex">
          <div>
            <p className="text-[10px] font-normal text-[#ECF4E9]">Balance Amount</p>
            <p className="text-[#FBFBFC] font-bold text-[22px]">$562,000</p>
          </div>

          <div className="pl-12">
            <p className="w-[18px] h-[13px] text-[10px] font-normal pt-2 text-[#ECF4E9]">EXP</p>
            <p className="font-semibold text-[#FBFBFC] text-[12px] pt-3">11/29</p>
          </div>
          <div>
            <p className="w-[20px] h-[13px] text-[10px] font-normal pt-2 text-[#ECF4E9]">CVV</p>
            <p className="font-semibold text-[#FBFBFC] text-[12px] pt-3">323</p>
          </div>
        </div>
      </section>

      {/* img section  */}
      <section className="w-[283px] h-[72px] bg-[#ECF4E9] rounded-[16px] items-center justify-center  flex flex-row gap-2">
        <div className="w-[54.75px] min-w-[45px] min-h-[48px] pt-1 pb-1 flex flex-col items-center justify-center gap-[6px]">
          <img src={plas} alt="Top Up" className=" cursor-pointer" />
          <p className="font-semibold text-[10px] text-center text-[#1E4841]">Top Up</p>
        </div>
        <div className="w-px h-[48px] bg-[#FBFBFC]"></div>
        <div className="w-[54.75px] min-w-[45px] min-h-[48px] pt-1 pb-1 flex flex-col items-center justify-center gap-[6px] ">
          <img src={dolar} alt="" className=" cursor-pointer" />
          <p className="font-semibold text-[10px] text-center text-[#1E4841]">Transfer</p>
        </div>
        <div className="w-px h-[48px] bg-[#FBFBFC]"></div>
        <div className="w-[54.75px] min-w-[45px] min-h-[48px] pt-1 pb-1 flex flex-col items-center justify-center gap-[6px] ">
          <img src={dolar} alt="" className=" cursor-pointer" />
          <p className="font-semibold text-[10px] text-center text-[#1E4841]">Request</p>
        </div>
        <div className="w-px h-[48px] bg-[#FBFBFC]"></div>
        <div className="w-[54.75px] min-w-[45px] min-h-[48px] pt-1 pb-1 flex flex-col items-center justify-center gap-[6px] ">
          <img src={history} alt="" className=" cursor-pointer" />
          <p className="font-semibold text-[10px] text-center text-[#1E4841]">History</p>
        </div>
      </section>

      {/* progress section */}
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
    </section>
  )
}