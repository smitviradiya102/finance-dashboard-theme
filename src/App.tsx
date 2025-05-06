import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Dailylimit from './components/dailylimit'
import Saving from './components/saving'
import Footer from './components/footer'
import Progress from './components/progress'
import Transaction from './components/transaction'
import Sidebarbox from './components/sidebar-box'
import AndrewForbist from './components/andrew-forbist'
import FourIcon from './components/four-icon'
import Cashflow from './components/Cashflow-chart'
import StatisticBox from './components/StatisticsBox';
import RecentActivity from './components/RecentActivityBox';

function App() {

  return (
    <div>
      <main className="h-[1034px] flex bg-[#ECF4E9]">
        <aside className="w-[230px] h-full bg-[#ECF4E9] p-4 flex flex-col items-center gap-2 fixed">
          <Sidebar />
          <Sidebarbox />
        </aside>
        <div className="flex-grow bg-white p-6 rounded-l-[16px] ml-[230px] bg-[#FBFBFC]">
          <Header />
          <div className="h-[888px] flex flex-wrap justify-center gap-5 mt-5">
            <div className="w-full h-[888px]  rounded flex justify-center">
              <div className="w-[283px] h-[888px] bg-white  flex flex-col gap-5">
                <AndrewForbist />
                <Dailylimit />
                <FourIcon />
                <Progress />
              </div>
              <section className="w-[586px] h-[888px] gap-[20px] ml-12 rounded-[16px]">
                <Saving />
                <Cashflow />
                <Transaction />
              </section>
              <section className="w-[283px] h-[888px] gap-[20px] ml-12 rounded-[16px] border-[#E5E6E6] flex flex-col">
              <StatisticBox />
              <RecentActivity />
        </section>
            </div>
            <Footer />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App;




