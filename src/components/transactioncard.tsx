interface transactioncards {
    name: string;
    transaction_name: string;
    date: string;
    time: string;
    amount: string;
    note: string;
    status: string;
  }
  
  export default function Transactioncard({
    name,
    transaction_name,
    date,
    time,
    amount,
    note,
    status,
  }: transactioncards) {

    const statusColor = status === "Failed" ? "#F73541" : status === "Completed" ? "#1E4841" : "#F2B007";
    const statusWidth = status === "Failed" ? "w-[38px]" : status === "Completed" ? "w-[62px]" : "w-[48px]";
  
    return (
      <div className="w-[554px] flex flex-col border-t border-[#E5E6E6] text-sm">
        <div className="w-[554px] h-[48px] flex justify-between items-center px-[10px] py-[10px]">
          <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
            <span className="font-semibold text-[10px]">{name}</span>
            <span className="font-normal text-[10px] text-[#6B7271]">{transaction_name}</span>
          </p>
          <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
            <span className="font-semibold text-[10px]">{date}</span>
            <span className="font-normal text-[10px] text-[#6B7271]">{time}</span>
          </p>
          <p className="w-[48px] h-[13px] flex flex-col justify-center">
            <span className="font-semibold text-[10px] text-[#6B7271]">${amount}</span>
          </p>
          <p className="w-[130px] h-[26px] flex flex-col justify-center leading-[14px]">
            <span className="font-normal text-[10px] text-[#6B7271]">{note}</span>
          </p>
          <div className="w-[62px] h-[17px] flex flex-col justify-center">
            <div
              className={`${statusWidth} h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]`}
            >
              <span className="font-normal text-[10px] cursor-pointer" style={{ color: statusColor }}>
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  