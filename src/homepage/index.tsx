import logo from './assets/logo.png';
import icon from './assets/icon.png';
import payment from './assets/payment.png';
import transactions from './assets/Transactions.png';
import invoices from './assets/invoices.png';
import cards from './assets/cards.png';
import savingPlans from './assets/saving-plans.png';
import inbox from './assets/inbox.png';
import promos from './assets/promos.png';
import insights from './assets/insights.png';
import arrowBottom from './assets/arrow-bottom.png';
import lock from './assets/lock.png';
import symbol from './assets/symbol.png';
import search from './assets/search.png';
import chat from './assets/chat.png';
import notification from './assets/notification.png';
import symbol2 from './assets/symbol-2.png';
import union from './assets/Union.png';
import plas from './assets/plas.png';
import dolar from './assets/dolar.png';
import history from './assets/history.png';
import threeDots from './assets/three-dots.png';
import piramind from './assets/piramind.png';
import aroplan from './assets/aroplan.png';
import home from './assets/home.png';
import dolarTop from './assets/dolar-top.png';
import fileIcon from './assets/file-icon.png';
import crossTopArrow from './assets/cross-top-arrow.png';
import crossBottomArrow from './assets/cross-bottom-arrow.png';
import blueArrowBottom from './assets/blue-arrow-bottom.png';
import sidebar from './assets/sidebar.png';
import sortIcon from './assets/Sort.png';
import facebook from './assets/facebook.png';
import twitter from './assets/TwitterLogo.png';
import instagram from './assets/InstagramLogo.png';
import youtube from './assets/YoutubeLogo.png';
import linkedin from './assets/LinkedinLogo.png';



export default function Homepage() {

  return (
    <div>

      <section className="h-[1034px] flex bg-[#ECF4E9]">

        <aside className="w-[230px] h-full bg-[#ECF4E9] p-4 flex flex-col items-center gap-2 fixed">

          <div className="w-[125px] h-[38px] gap-[10px] mr-[6px] flex items-center pt-2 cursor-pointer">
            <img src={logo} alt="Logo" className="w-[22px] h-[22px]" />
            <p className="text-[#242E2C] font-bold text-[18px]">COINEST</p>
          </div>

          <div className="flex flex-col w-[160px] h-[696px] gap-[8px] mt-5">
            <div>
              <div className="flex items-center w-[160px] h-[40px] gap-[12px] pt-[8px] pr-[12px] pb-[8px] pl-[17px] rounded-[24px] bg-[#BBF49C] text-gray-900 font-medium cursor-pointer">
                <img src={icon} alt="Dashboard Icon" className="w-[16.5px] h-[16.5px] brightness-0" />
                <span className="font-semibold text-[14px] text-[#242E2C]">Dashboard</span>
              </div>
            </div>

            <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
              <p className="w-[24px] h-[24px] pt-1"> <img src={payment} alt="" className="group-hover:brightness-0" /> </p>
              <span className="w-[78px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Payments</span>
              <div className="w-[14px] h-[14px] ml-2 pt-1">
                <img src={arrowBottom} alt="" />
              </div>
            </div>

            <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
              <p className="w-[24px] h-[24px] pt-1"><img src={transactions} alt="" className="group-hover:brightness-0" /></p>
              <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Transactions</span>
            </div>

            <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
              <p className="w-[24px] h-[24px] pt-1"><img src={invoices} alt="" className="group-hover:brightness-0" /></p>
              <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Invoices</span>
            </div>

            <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
              <p className="w-[24px] h-[24px] pt-1"><img src={cards} alt="" className="group-hover:brightness-0" /></p>
              <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Cards</span>
            </div>

            <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
              <p className="w-[24px] h-[24px] pt-1"><img src={savingPlans} alt="" className="group-hover:brightness-0" /></p>
              <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Saving Plans</span>
            </div>

            <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
              <p className="w-[24px] h-[24px] pt-1"><img src={inbox} alt="" className="group-hover:brightness-0" /></p>
              <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Investments</span>
            </div>

            <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
              <p className="w-[24px] h-[24px] pt-1"><img src={promos} alt="" className="group-hover:brightness-0" /></p>
              <span className="w-[72px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Inbox</span>
              <div className="flex items-center justify-center w-[20px] h-[20px] p-[2px] bg-red-500 text-white text-[10px] rounded-full ml-2">99</div>
            </div>

            <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200">
              <p className="w-[24px] h-[24px] pt-1"><img src={payment} alt="" className="group-hover:brightness-0" /></p>
              <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Promos</span>
            </div>

            <div className="group w-[160px] h-[40px] flex items-center flex-row gap-2 pl-4 cursor-pointer hover:bg-[#BBF49C] rounded-[24px] transition-all duration-200 text-[#242E2C]">
              <p className="w-[24px] h-[24px] pt-1"><img src={insights} alt="" className="group-hover:brightness-0" /></p>
              <span className="w-[104px] h-[24px] font-semibold text-[14px] text-[#6B7271] group-hover:text-[#242E2C]">Insights</span>
            </div>
          </div>

          <div className="w-[154px] h-[212px] bg-[#1E4841] rounded-[16px] pt-[20px] pr-[16px] pb-[20px] pl-[16px] flex flex-col gap-[20px] relative top-4 content-end mb-6">
            <div className="w-[65px] h-[65px] bg-no-repeat absolute top-0 right-0 translate-x-2"
              style={{ backgroundImage: `url(${symbol})` }}></div>

            <div className="w-[32px] h-[32px] rounded-[8px] bg-[#ECF4E9] flex justify-center items-center cursor-pointer">
              <img src={lock} alt="" className="" />
            </div>
            <p className="w-[123px] h-[48px] font-urbanist font-normal text-[12px] leading-[130%] pt-4 text-[#ECF4E9]">
              Gain full access to your finances with detailed analytics and graphs
            </p>
            <button className="w-[75px] h-[38px] bg-[#BBF49C] rounded-[8px] mt-3 font-medium text-[14px]">
              Get Pro
            </button>
          </div>
        </aside>

        <section className="flex-grow bg-white p-6 rounded-l-[16px] ml-[230px] bg-[#FBFBFC]">
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
          <section className="h-[888px] flex flex-wrap justify-center gap-5 mt-5">
            <div className="w-full h-[888px]  rounded flex justify-center">
              {/* col - 1  */}
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

                {/* last three progress report section  */}
                <section className="w-[283px] h-[475px] border border-[#E5E6E6] rounded-[16px] p-4 flex flex-col gap-[16px]">
                  <div className="w-[251px] h-[19px] flex justify-between items-center">
                    <p className="text-[16px] text-[#242E2C] font-bold">Saving Plans</p>
                    <p className="text-[10px] text-[#1E4841] font-medium cursor-pointer">+ Add Plan</p>
                  </div>
                  <div className="w-[90px] h-[43px] gap-[4px]">
                    <p className="text-[10px] text-[#242E2C] font-medium">Total Savings</p>
                    <p className="text-[24px] text-[#1E4841] font-bold">$84,500</p>
                  </div>

                  {/* progress-1  */}
                  <div className="w-[251px] h-[341px] gap-[16px] mt-2">
                    <div className="w-[251px] h-[103px] gap-[16px] rounded-[12px] border border-[#E5E6E6] p-[14px] flex items-end flex-col">
                      <div className="w-[223px] h-[28px] flex justify-between items-center">
                        <div className="w-[28px] h-[28px] p-[6px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center gap-[28px]">
                          <img src={piramind} alt="" />
                        </div>
                        <p className="pr-16 font-medium text-[12px] text-[#242E2C]">Emergency Fund</p>
                        <img src={threeDots} alt="" className="cursor-pointer" />
                      </div>

                      <div className="w-[223px] h-[31px] gap-[10px]">
                        <div className="w-[223px] h-[8px] bg-[#BBF49C] rounded-[8px]">
                          <div className="h-full bg-[#1E4841] rounded-[8px] w-[65px]"></div>
                        </div>
                        <div className="flex justify-between items-end mt-1">
                          <p className="font-semibold text-[10px] text-[#242E2C] pt-1">$5,000 <span className="font-semibold text-[10px] text-[#6B7271]">50%</span></p>
                          <p className="font-normal text-[10px] text-[#6B7271] ">Target <span className="font-normal text-[10px] text-[#242E2C]">Target: $10,000</span></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* progress-2 */}
                  <div className="w-[251px] h-[341px] gap-[16px] ">
                    <div className="w-[251px] h-[103px] gap-[16px] rounded-[12px] border border-[#E5E6E6] p-[14px] flex items-end flex-col">
                      <div className="w-[223px] h-[28px] flex justify-between items-center">
                        <div className="w-[28px] h-[28px] p-[6px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center gap-[28px]">
                          <img src={aroplan} alt="" />
                        </div>
                        <p className="pr-20 pl-1 font-medium text-[12px] text-[#242E2C]">Vacation Fund</p>
                        <img src={threeDots} alt="" className="cursor-pointer" />
                      </div>

                      <div className="w-[223px] h-[31px] gap-[10px] ">
                        <div className="w-[223px] h-[8px] bg-[#BBF49C] rounded-[8px]">
                          <div className="h-full bg-[#1E4841] rounded-[8px] w-[65px]"></div>
                        </div>
                        <div className="flex justify-between items-end mt-1">
                          <p className="font-semibold text-[10px] text-[#242E2C] pt-1">$5,000 <span className="font-semibold text-[10px] text-[#6B7271]">50%</span></p>
                          <p className="font-normal text-[10px] text-[#6B7271] ">Target <span className="font-normal text-[10px] text-[#242E2C]">Target: $5,000</span></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* progress-3  */}
                  <div className="w-[251px] h-[341px] gap-[16px]">
                    <div className="w-[251px] h-[103px] gap-[16px] rounded-[12px] border border-[#E5E6E6] p-[14px] flex items-end flex-col">
                      <div className="w-[223px] h-[28px] flex justify-between items-center">
                        <div className="w-[28px] h-[28px] p-[6px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center gap-[28px]">
                          <img src={home} alt="" />
                        </div>
                        <p className="pr-8 font-medium text-[12px] text-[#242E2C]">Home Down Payment</p>
                        <img src={threeDots} alt="" className="cursor-pointer" />
                      </div>

                      <div className="w-[223px] h-[31px] gap-[10px] ">
                        <div className="w-[223px] h-[8px] bg-[#BBF49C] rounded-[8px]">
                          <div className="h-full bg-[#1E4841] rounded-[8px] w-[65px]"></div>
                        </div>
                        <div className="flex justify-between items-end mt-1">
                          <p className="font-semibold text-[10px] text-[#242E2C] pt-1">$7,250 <span className="font-semibold text-[10px] text-[#6B7271]">36.25%</span></p>
                          <p className="font-normal text-[10px] text-[#6B7271] ">Target <span className="font-normal text-[10px] text-[#242E2C]">Target: $20,000</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              {/* col-2  */}
              <section className="w-[586px] h-[888px] gap-[20px] ml-12 rounded-[16px]">
                {/* <!-- three box in one line --> */}
                <div className="w-full h-[174px] flex flex-row gap-[18px]">
                  {/* <!-- first box --> */}
                  <div className="w-[183.33px] h-[174px] border border-[#E5E6E6] rounded-[16px] p-4 gap-7 flex flex-col">
                    <div className="w-[151.33px] h-[36px] flex justify-between items-center">
                      <div className="w-[36px] h-[36px] p-[8px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center">
                        <img src={dolar} alt="" className="w-[16px] h-[16px] cursor-pointer" />
                      </div>
                      <img src={threeDots} alt="" className="flex self-start cursor-pointer" />
                    </div>
                    <div className="w-[151.33px] h-[78px] flex flex-col justify-between">
                      <div className="w-[49px] h-[12px] rounded-[15px] bg-[#BBF49C] flex items-center justify-center">
                        <img src={crossTopArrow} alt="" />
                        <span className="text-[8px] text-[#1E4841] font-medium">+ 1.78 %</span>
                      </div>
                      <p className="font-bold text-[24px] text-[#242E2C]">$78,000</p>
                      <p className="font-normal text-[12px] text-[#242E2C]">Total Income</p>
                    </div>
                  </div>

                  {/* <!-- second box --> */}
                  <div className="w-[183.33px] h-[174px] border border-[#E5E6E6] rounded-[16px] p-4 gap-7 flex flex-col">
                    <div className="w-[151.33px] h-[36px] flex justify-between items-center">
                      <div className="w-[36px] h-[36px] p-[8px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center">
                        <img src={dolarTop} alt="" className="w-[16px] h-[16px] cursor-pointer" />
                      </div>
                      <img src={threeDots} alt="" className="flex self-start cursor-pointer" />
                    </div>
                    <div className="w-[151.33px] h-[78px] flex flex-col justify-between">
                      <div className="w-[49px] h-[12px] rounded-[15px] bg-[#FDCED1] flex items-center justify-center">
                        <img src={crossBottomArrow} alt="" />
                        <span className="text-[8px] text-[#F73541] font-medium">- 1.78 %</span>
                      </div>
                      <p className="font-bold text-[24px] text-[#242E2C]">$43,000</p>
                      <p className="font-normal text-[12px] text-[#242E2C]">Total Expense</p>
                    </div>
                  </div>

                  {/* <!-- third box --> */}
                  <div className="w-[183.33px] h-[174px] border border-[#E5E6E6] rounded-[16px] p-4 gap-7 flex flex-col">
                    <div className="w-[151.33px] h-[36px] flex justify-between items-center">
                      <div className="w-[36px] h-[36px] p-[8px] bg-[#ECF4E9] rounded-[8px] flex items-center justify-center">
                        <img src={fileIcon} alt="" className="w-[16px] h-[16px] cursor-pointer" />
                      </div>
                      <img src={threeDots} alt="" className="flex self-start cursor-pointer" />
                    </div>
                    <div className="w-[151.33px] h-[78px] flex flex-col justify-between">
                      <div className="w-[49px] h-[12px] rounded-[15px] bg-[#BBF49C] flex items-center justify-center">
                        <img src={crossTopArrow} alt="" />
                        <span className="text-[8px] text-[#1E4841] font-medium">+ 1.24 %</span>
                      </div>
                      <p className="font-bold text-[24px] text-[#242E2C]">$56,000</p>
                      <p className="font-normal text-[12px] text-[#242E2C]">Total Savings</p>
                    </div>
                  </div>
                </div>

                {/* <!-- chart --> */}
                <div className="w-[586px] h-[321px] border border-[#E5E6E6] gap-[18px] rounded-[16px] mt-[20px]">
                  <div className="justify-center flex">
                    <div className="w-[554px] h-[32px] flex justify-between items-center mt-3">
                      <p className="text-[#242E2C] text-[16px] font-bold">Cashflow</p>
                      <button className="w-[90px] h-[32px] gap-1 rounded-[8px] px-[8px] pt-[8px] pb-[8px] pl-[12px] border border-[#E5E6E6] text-[#1E4841] font-semibold text-[12px] flex flex-row justify-between items-center">
                        This Year  <img src={blueArrowBottom} alt="" className="w-[7.88px] h-[4.38px]" />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-[554px] h-[43px] flex justify-between mt-3">
                      <div>
                        <p className="font-normal text-[10px]">Total Balance</p>
                        <p className="font-bold text-[24px] text-[#1E4841]">$562,000</p>
                      </div>

                      <div className="flex justify-between items-center pr-2">
                        <div className="w-[8px] h-[8px] rounded-sm bg-[#1E4841] cursor-pointer"></div>
                        <span className="font-semibold text-[12px] text-[#242E2C] pl-1 mr-5">Income</span>
                        <div className="w-[8px] h-[8px] rounded-sm bg-[#BBF49C] cursor-pointer"></div>
                        <span className="font-semibold text-[12px] text-[#242E2C] pl-1">Expense</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- recent transaction --> */}
                <div className="w-[586px] h-[353px] gap-4 rounded-[16px] border border-[#E5E6E6] p-4 mt-5">
                  <div className="w-[554px] h-[32px] flex justify-between">
                    <p className="font-bold text-[16px] text-[#242E2C]">Recent Transactions</p>
                    <div className="w-[142px] h-[32px] gap-2">

                      <div className="flex gap-2">
                        <div className="w-[100px] h-[32px] gap-1 rounded-[8px] mr-[2px] p-[8px_12px_8px_8px] border border-[#E5E6E6] flex items-center justify-between cursor-pointer">
                          <span className="text-[#1E4841] text-[12px] font-semibold">This Month</span>
                          <img src={blueArrowBottom} alt="Icon" />
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

                    <div className="w-[554px] flex flex-col border-t border-[#E5E6E6] text-sm">
                      <div className="w-[554px] h-[48px] flex justify-between items-center px-[10px] py-[10px]">
                        <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                          <span className="font-semibold text-[10px]">Electricity Bill</span>
                          <span className="font-normal text-[10px] text-[#6B7271]">Payments</span>
                        </p>
                        <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                          <span className="font-semibold text-[10px]">2028-03-01</span>
                          <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                        </p>
                        <p className="w-[48px] h-[13px] flex flex-col justify-center">
                          <span className="font-semibold text-[10px] text-[#6B7271]">$295.81</span>
                        </p>
                        <p className="w-[130px] h-[26px] flex flex-col justify-center leading-[14px]">
                          <span className="font-normal text-[10px] text-[#6B7271]">Payment for monthly electricity bill</span>
                        </p>
                        <div className="w-[62px] h-[17px] flex flex-col justify-center">
                          <div className="w-[38px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                            <span className="font-normal text-[10px] text-[#F73541] cursor-pointer">Failed</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-[554px] h-[48px] flex justify-between items-center border-t border-[#E5E6E6] px-[10px] py-[10px]">
                        <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                          <span className="font-semibold text-[10px]">Weekly Groceries</span>
                          <span className="font-normal text-[10px] text-[#6B7271]">Shopping</span>
                        </p>
                        <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                          <span className="font-semibold text-[10px]">2028-03-04</span>
                          <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                        </p>
                        <p className="w-[48px] h-[13px] flex flex-col justify-center">
                          <span className="font-semibold text-[10px] text-[#6B7271]">$204.07</span>
                        </p>
                        <p className="w-[130px] h-[26px] flex flex-col justify-center leading-[14px]">
                          <span className="font-normal text-[10px] text-[#6B7271]">Groceries shopping at local supermarket</span>
                        </p>
                        <div className="w-[62px] h-[17px] flex flex-col justify-center">
                          <div className="w-[62px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                            <span className="font-normal text-[10px] text-[#1E4841] cursor-pointer">Completed</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-[554px] flex flex-col border-t border-[#E5E6E6] text-sm">
                        <div className="w-[554px] h-[48px] flex justify-between items-center px-[10px] py-[10px]">
                          <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                            <span className="font-semibold text-[10px]">Movie Night</span>
                            <span className="font-normal text-[10px] text-[#6B7271]">Entertainment</span>
                          </p>
                          <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                            <span className="font-semibold text-[10px]">2028-02-27</span>
                            <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                          </p>
                          <p className="w-[48px] h-[13px] flex flex-col justify-center">
                            <span className="font-semibold text-[10px] text-[#6B7271]">$97.84</span>
                          </p>
                          <p className="w-[130px] h-[13px] flex flex-col justify-center leading-[14px]">
                            <span className="font-normal text-[10px] text-[#6B7271]">Tickets for movie and snacks</span>
                          </p>
                          <div className="w-[62px] h-[17px] flex flex-col justify-center">
                            <div className="w-[47px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                              <span className="font-normal text-[10px] text-[#F2B007] cursor-pointer">Pending</span>
                            </div>
                          </div>
                        </div>

                        <div className="w-[554px] h-[48px] flex justify-between items-center border-t border-[#E5E6E6] px-[10px] py-[10px]">
                          <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                            <span className="font-semibold text-[10px]">Medical Check-up</span>
                            <span className="font-normal text-[10px] text-[#6B7271]">Healthcare</span>
                          </p>
                          <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                            <span className="font-semibold text-[10px]">2028-02-07</span>
                            <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                          </p>
                          <p className="w-[48px] h-[13px] flex flex-col justify-center">
                            <span className="font-semibold text-[10px] text-[#6B7271]">$323.33</span>
                          </p>
                          <p className="w-[130px] h-[26px] flex flex-col justify-center leading-[14px]">
                            <span className="font-normal text-[10px] text-[#6B7271]">Routine health check-up and medications</span>
                          </p>
                          <div className="w-[62px] h-[17px] flex flex-col justify-center">
                            <div className="w-[47px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                              <span className="font-normal text-[10px] text-[#F2B007] cursor-pointer">Pending</span>
                            </div>
                          </div>
                        </div>

                        <div className="w-[554px] h-[48px] flex justify-between items-center border-t border-[#E5E6E6] px-[10px] py-[10px]">
                          <p className="w-[146px] h-[28px] flex flex-col justify-center leading-[14px]">
                            <span className="font-semibold text-[10px]">Dinner at Italian Restaurant</span>
                            <span className="font-normal text-[10px] text-[#6B7271]">Dining Out</span>
                          </p>
                          <p className="w-[68px] h-[28px] flex flex-col justify-center leading-[14px]">
                            <span className="font-semibold text-[10px]">2028-02-11</span>
                            <span className="font-normal text-[10px] text-[#6B7271]">04:28:48</span>
                          </p>
                          <p className="w-[48px] h-[13px] flex flex-col justify-center">
                            <span className="font-semibold text-[10px] text-[#6B7271]">$226.25</span>
                          </p>
                          <p className="w-[130px] h-[26px] flex flex-col justify-center leading-[14px]">
                            <span className="font-normal text-[10px] text-[#6B7271]">Dining out with family at a local Italian restaurant</span>
                          </p>
                          <div className="w-[62px] h-[17px] flex flex-col justify-center">
                            <div className="w-[47px] h-[17px] flex items-center gap-[10px] rounded-[4px] border border-[#E5E6E6] pt-[2px] pr-[6px] pb-[2px] pl-[6px]">
                              <span className="font-normal text-[10px] text-[#F2B007] cursor-pointer">Pending</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- col-3 --> */}
              <section className="w-[283px] h-[888px] gap-[20px] ml-12 rounded-[16px] border-[#E5E6E6] flex flex-col">
                {/* <!-- box-1 --> */}
                <section className="w-[283px] h-[460px] gap-[20px] p-[16px] rounded-[16px] border border-[#E5E6E6] flex flex-col">
                  <div className="w-[251px] h-[19px] flex justify-between items-center">
                    <p className="font-bold text-[16px] text-[#242E2C]">Statistic</p>
                    <p className="font-semibold text-[12px] text-[#1E4841] text-[10px] flex items-center mr-1 cursor-pointer">This Month <img src={blueArrowBottom} alt="" className="w-[7px] h-[4px] ml-1" /></p>
                  </div>

                  <div className="w-[251px] h-[28px] flex flex-row">
                    <div className="w-[125.5px] h-[28px] pt-[2px] pb-[10px] border-b border-b-[1px] border-b-[#E5E6E6] flex gap-[4px] justify-center items-center cursor-pointer">
                      <p className="font-semibold text-[12px] text-[#6B7271]">Income</p>
                      <p className="font-normal text-[#6B7271] text-[10px]">($4,800)</p>
                    </div>

                    <div className="w-[125.5px] h-[28px] pt-[2px] pb-[10px] border-b-[3px] border-b-[#BBF49C] flex gap-[4px] justify-center items-center cursor-pointer">
                      <p className="font-semibold text-[12px] text-[#1E4841]">Expense</p>
                      <p className="font-normal text-[10px] text-[#1E4841]">($3,500)</p>
                    </div>
                  </div>

                  <div className="w-[251px] h-[148px]"></div>
                  <div className="w-[251px] h-[173px] gap-[12px] flex flex-col">

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                      <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                        <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#1E4841] flex items-center justify-center gap-[10px]">
                          <span className="font-semibold text-[10px] text-[#ECF4E9]">60%</span>
                        </p>
                        <p className="font-medium text-[12px] text-[#242E2C]">Rent & Living</p>
                      </div>
                      <p className="font-semibold text-[12px] text-[#242E2C]">$2,100</p>
                    </div>

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                      <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                        <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#BBF49C] flex items-center justify-center gap-[10px]">
                          <span className="font-semibold text-[10px] text-[#242E2C]">15%</span>
                        </p>
                        <p className="font-medium text-[12px] text-[#242E2C]">Investment</p>
                      </div>
                      <p className="font-semibold text-[12px] text-[#242E2C]">$525</p>
                    </div>

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                      <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                        <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#ECF4E9] flex items-center justify-center gap-[10px]">
                          <span className="font-semibold text-[10px] text-[#242E2C]">12%</span>
                        </p>
                        <p className="font-medium text-[12px] text-[#242E2C]">Education</p>
                      </div>
                      <p className="font-semibold text-[12px] text-[#242E2C]">$420</p>
                    </div>

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                      <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                        <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#E5E6E6] flex items-center justify-center gap-[10px]">
                          <span className="font-semibold text-[10px] text-[#242E2C]">8%</span>
                        </p>
                        <p className="font-medium text-[12px] text-[#242E2C]">Food & Drink</p>
                      </div>
                      <p className="font-semibold text-[12px] text-[#242E2C]">$280</p>
                    </div>

                    <div className="w-[251px] h-[25px] flex justify-between items-center">
                      <div className="w-[147px] h-[25px] flex gap-[12px] items-center">
                        <p className="w-[32px] h-[25px] p-[6px] rounded-[8px] bg-[#BCBEBD] flex items-center justify-center gap-[10px]">
                          <span className="font-semibold text-[10px] text-[#242E2C]">5%</span>
                        </p>
                        <p className="font-medium text-[12px] text-[#242E2C]">Entertainment</p>
                      </div>
                      <p className="font-semibold text-[12px] text-[#242E2C]">$175</p>
                    </div>
                  </div>

                </section>

                {/* <!-- box-2 --> */}
                <section className="w-[283px] h-[408px] p-[16px] rounded-[16px] border border-[#E5E6E6] flex flex-col gap-[16px]">
                  <div className="w-[251px] h-[19px] flex justify-between items-center">
                    <p className="font-bold text-[16px] text-[#242E2C]">Recent Activity</p>
                    <img src={threeDots} alt="" className="cursor-pointer" />
                  </div>
                  <div className="w-[251px] h-[341px] flex flex-col ">

                    <div className="w-[251px] h-[184px] flex flex-col gap-[12px] ">
                      <p className="font-medium text-[14px] text-[#242E2C]">Today</p>

                      <div className="w-[251px]  flex flex-col">

                        {/* <!-- Row 1 --> */}
                        <div className="h-[45px] flex items-center">
                          <div className="w-[30px] h-full flex flex-col items-center justify-start">
                            <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                            <span className="h-[13px] w-[1px] bg-[#BCBEBD] mt-[2px]"></span>
                          </div>
                          <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[10px] ml-3">
                            <p className="font-semibold text-[12px] text-[#242E2C]">Jamie Smith <span className="font-normal text-[12px]">updated account settings</span></p>
                            <p className="font-normal text-[10px] text-[#6B7271]">16:05</p>
                          </div>
                        </div>

                        {/* <!-- Row 2 --> */}
                        <div className="h-[45px] flex items-center">
                          <div className="w-[30px] h-full flex flex-col items-center justify-start">
                            <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                            <span className="h-[13px] w-[1px] bg-[#BCBEBD] mt-[2px]"></span>
                          </div>
                          <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[12px] ml-3">
                            <p className="font-semibold text-[12px] text-[#242E2C]">Alex Johnson<span className="font-normal text-[12px]">logged in</span></p>
                            <p className="font-normal text-[10px] text-[#6B7271]">13:05</p>
                          </div>
                        </div>

                        {/* <!-- Row 3 --> */}
                        <div className="h-[61px] flex items-center">
                          <div className="w-[30px] h-full flex flex-col items-center justify-start">
                            <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                          </div>
                          <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[10px] ml-3">
                            <p className="font-semibold text-[12px] text-[#242E2C]">Morgan Lee<span className="font-normal text-[12px]"> added a new savings goal for vacation</span></p>
                            <p className="font-normal text-[10px] text-[#6B7271]">02:05</p>
                          </div>
                        </div>

                      </div>
                    </div>


                    <div className="w-[251px] h-[153px] flex flex-col">
                      <p className="font-medium text-[14px] text-[#242E2C] py-2">Yesterday</p>

                      {/* <!-- Row 1 --> */}
                      <div className="h-[61px] flex items-center">
                        <div className="w-[30px] h-full flex flex-col items-center justify-start">
                          <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                          <span className="h-[29px] w-[1px] bg-[#BCBEBD] mt-[2px]"></span>
                        </div>
                        <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[10px] ml-3">
                          <p className="font-semibold text-[12px] text-[#242E2C]">Taylor Green<span className="font-normal text-[12px]">reviewed recent transactions</span></p>
                          <p className="font-normal text-[10px] text-[#6B7271]">21:05</p>
                        </div>
                      </div>

                      {/* <!-- Row 2 --> */}
                      <div className="h-[61px] flex items-center">
                        <div className="w-[30px] h-full flex flex-col items-center justify-start">
                          <div className="bg-[#BBF49C] w-[30px] h-[30px] rounded-full"></div>
                        </div>
                        <div className="w-[207px] h-[45px] gap-[4px] pt-[2px] pb-[12px] ml-3">
                          <p className="font-semibold text-[12px] text-[#242E2C]">Wilson Baptista<span className="font-normal text-[12px]">transferred funds to emergency fund</span></p>
                          <p className="font-normal text-[10px] text-[#6B7271]">09:05</p>
                        </div>
                      </div>
                    </div>



                  </div>

                </section>

              </section>
            </div>
            <footer className="w-[1246px] h-[24px] flex justify-between">
              <div className="w-[1024px] h-[16px] gap-[20px] flex flex-row">
                <p className="text-[#242E2C] text-[12px] font-medium cursor-pointer">
                  Copyright © 2024 Peterdraw
                </p>
                <div className="text-[#BCBEBD] w-[253px] h-[16px] gap-[16px] flex flex-row">
                  <p className="font-medium text-[12px] cursor-pointer hover:text-[#242E2C]">Privacy Policy</p>
                  <p className="font-medium text-[12px] cursor-pointer hover:text-[#242E2C]">Term and conditions</p>
                  <p className="font-medium text-[12px] cursor-pointer hover:text-[#242E2C]">Contact</p>
                </div>
              </div>

              <div className="w-[168px] h-[24px] flex flex-row justify-between items-center">
                <img src={facebook} alt="Facebook" className="cursor-pointer hover:brightness-0" />
                <img src={twitter} alt="Twitter" className="cursor-pointer hover:brightness-0" />
                <img src={instagram} alt="Instagram" className="cursor-pointer hover:brightness-0" />
                <img src={youtube} alt="YouTube" className="cursor-pointer hover:brightness-0" />
                <img src={linkedin} alt="LinkedIn" className="cursor-pointer hover:brightness-0" />
              </div>
            </footer>

          </section>
        </section>
      </section>
    </div>
  )
}