import search from '../assets/search.png';
import chat from '../assets/chat.png';
import notification from '../assets/notification.png';

export default function Header() {

    return (

        <header className="justify-center flex">
            <div className="flex items-center justify-between w-[1246px] h-[38px]">
                <h1 className="text-[22px] font-bold text-[#1E4841] pb-2">Dashboard</h1>

                <div className="flex items-center gap-[20px]">

                    <div className="flex items-center w-[283px] h-[38px] bg-[#EFF0F0] rounded-[20px] border border-[#EFF0F0] px-[16px] py-[10px] gap-[6px]">
                        <input
                            type="text"
                            placeholder="Search placeholder"
                            className="bg-transparent w-full h-full outline-none text-sm text-black"
                        />
                        <img src={search} alt="Search" className="cursor-pointer" />
                    </div>

                    <div className="flex gap-2 pr-4">
                        <button className="w-[38px] h-[38px] bg-[#ECF4E9] rounded-[20px] flex items-center justify-center">
                            <img src={chat} alt="Chat Icon" />
                        </button>
                        <button className="w-[38px] h-[38px] bg-[#ECF4E9] rounded-[20px] flex items-center justify-center relative">
                            <img src={notification} alt="Notification Icon" />
                            <div className="w-[8px] h-[8px] rounded-full bg-[#F73541] absolute top-[8px] right-[10px]"></div>
                        </button>
                    </div>

                    <p className="font-bold text-[16px] text-[#1E4841]">Andrew Forbist</p>
                    <div className="w-[38px] h-[38px] bg-[#BBF49C] rounded-[20px]"></div>

                </div>
            </div>
        </header>
    )
}
