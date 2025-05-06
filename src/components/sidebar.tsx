// Sidebar.tsx

import logo from '../assets/logo.png';
import icon from '../assets/icon.png';
import payment from '../assets/payment.png';
import transactions from '../assets/Transactions.png';
import invoices from '../assets/invoices.png';
import cards from '../assets/cards.png';
import savingPlans from '../assets/saving-plans.png';
import inbox from '../assets/inbox.png';
import promos from '../assets/promos.png';
import insights from '../assets/insights.png';
import arrowBottom from '../assets/arrow-bottom.png';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <div>
      <div className="w-[125px] h-[38px] gap-[10px] mr-[6px] flex items-center pt-2 cursor-pointer">
        <img src={logo} alt="Logo" className="w-[22px] h-[22px]" />
        <p className="text-[#242E2C] font-bold text-[18px]">COINEST</p>
      </div>

      <div className="flex flex-col w-[160px] h-[620px] gap-[8px] mt-5">
        <SidebarItem icon={icon} label="Dashboard" />
        <SidebarItem icon={payment} label="Payments" arrow={arrowBottom} />
        <SidebarItem icon={transactions} label="Transactions" />
        <SidebarItem icon={invoices} label="Invoices" />
        <SidebarItem icon={cards} label="Cards" />
        <SidebarItem icon={savingPlans} label="Saving Plans" />
        <SidebarItem icon={inbox} label="Investments" />
        <SidebarItem icon={promos} label="Promos" notificationCount={99} />
        <SidebarItem icon={insights} label="Insights" />
        <SidebarItem icon={inbox} label="Inbox" />
      </div>
    </div>
  );
}
