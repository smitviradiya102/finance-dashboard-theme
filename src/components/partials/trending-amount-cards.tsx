import threeDots from "../../assets/three-dots.png";
import crossBottomArrow from "../../assets/cross-bottom-arrow.png";
import crossTopArrow from "../../assets/cross-top-arrow.png";

interface Props {
    icon: string;
    amount: number;
    change: number;
    label: string;
}

export default function TrandingAmountCards({icon, amount, change, label}: Props) {

    const numberFormat = (value: number): string =>
        new Intl.NumberFormat('en-IN', {
            style   : 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
        }).format(value);

    return (
        <div className="w-[183.33px] h-[174px] border border-[#E5E6E6] rounded-[16px] p-4 gap-7 flex flex-col">
            <div className="w-[151.33px] h-[36px] flex justify-between items-center">
                <div className="w-[36px] h-[36px] p-[8px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center">
                    <img src={icon} alt="" className="w-[16px] h-[16px] cursor-pointer"/>
                </div>
                <img src={threeDots} alt="" className="flex self-start cursor-pointer"/>
            </div>
            <div className="w-[151.33px] h-[78px] flex flex-col justify-between">
                <div
                    className={`w-[49px] h-[12px] rounded-[15px] ${change > 0 ? 'bg-[#BBF49C]' : 'bg-[#FDCED1]'} flex items-center justify-center`}>
                    <img src={change > 0 ? crossTopArrow : crossBottomArrow} alt=""/>
                    <span className={`text-[8px] ${change > 0 ? 'text-[#1E4841]' : 'text-[#F73541]'}  font-medium`}>
                        {change} %
                    </span>
                </div>
                <p className="font-bold text-[24px] text-[#242E2C]">{numberFormat(amount)}</p>
                <p className="font-normal text-[12px] text-[#242E2C]">{label}</p>
            </div>
        </div>
    );
};