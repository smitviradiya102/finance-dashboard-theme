import plas from '../assets/plas.png';
import dolar from '../assets/dolar.png';
import history from '../assets/history.png';

interface Iconimgs {
  src: string;
  label: string;
  line: boolean;
}

function Iconimg({ src, label, line }: Iconimgs) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="w-[54.75px] min-w-[45px] min-h-[48px] flex flex-col items-center justify-center gap-[6px]">
        <img src={src}  className="cursor-pointer" />
        <p className="font-semibold text-[10px] text-center text-[#1E4841]">{label}</p>
      </div>
      {line && <div className="w-px h-[48px] bg-[#FBFBFC]" />}
    </div>
  );
}

export default function FourIcon() {
  return (
    <section className="w-[283px] h-[72px] bg-[#ECF4E9] rounded-[16px] flex flex-row items-center justify-center gap-2">
      <Iconimg src={plas} label="Top Up" line={true} />
      <Iconimg src={dolar} label="Transfer" line={true} />
      <Iconimg src={dolar} label="Request" line={true} />
      <Iconimg src={history} label="History" line={false} />
    </section>
  );
}
