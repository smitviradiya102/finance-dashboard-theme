import dolarTop from '../assets/dolar-top.png';
import fileIcon from '../assets/file-icon.png';
import crossTopArrow from '../assets/cross-top-arrow.png';
import crossBottomArrow from '../assets/cross-bottom-arrow.png';
import dolar from '../assets/dolar.png';
import Savingcard from './savingcard';


export default function Saving() {
  return (
    <div className="w-full h-[174px] flex flex-row gap-[18px]">
      <Savingcard icon={dolar} per={+1.78} price="73,000" total="Total Income" arrow={crossTopArrow} currency="$" />
      <Savingcard icon={dolarTop} per={-1.78} price="43,000" total="Total Expense" arrow={crossBottomArrow} currency="$" />
      <Savingcard icon={fileIcon} per={+1.24} price="56,000" total="Total Savings" arrow={crossTopArrow} currency="$" />
    </div>
  );
}
