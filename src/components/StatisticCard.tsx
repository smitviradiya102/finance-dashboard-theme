interface StatisticCards {
    percentage: string;
    category: string;
    amount: string;
    color: string;
  }
  
  export default function StatisticCard({ percentage, category, amount, color }: StatisticCards) {
    const statusColor = percentage === "60%" ? "#ECF4E9" : "#242E2C";
    return (
      <div className="w-[251px] h-[25px] flex justify-between items-center">
        <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
          <p className={`w-[32px] h-[25px] p-[6px] rounded-[8px] ${color} flex items-center justify-center gap-[10px]`}>
            <span className="font-semibold text-[10px] text-[#242E2C]" style={{ color: statusColor }}>{percentage}</span>
          </p>
          <p className="font-medium text-[12px] text-[#242E2C]">{category}</p>
        </div>
        <p className="font-semibold text-[12px] text-[#242E2C]">{amount}</p>
      </div>
    );
  }
  