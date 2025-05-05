import plas from '../assets/plas.png';
import dolar from '../assets/dolar.png';
import history from '../assets/history.png';

export default function FourIcon() {

  return (
    
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
 
     )
    }