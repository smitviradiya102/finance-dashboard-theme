
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Dailylimit from './components/dailylimit'
import Savingcard from './components/savingscard'
import Colum3 from './components/colum3'
import Footer from './components/footer'
import Progress from './components/progress'
import Transaction from './components/transaction'


function App() {

  return (
    <div>
      <main className="h-[1034px] flex bg-[#ECF4E9]">
        <Sidebar />
        <div className="flex-grow bg-white p-6 rounded-l-[16px] ml-[230px] bg-[#FBFBFC]">
          <Header />
          <div className="h-[888px] flex flex-wrap justify-center gap-5 mt-5">
            <div className="w-full h-[888px]  rounded flex justify-center">
              <div className="w-[283px] h-[888px] bg-white  flex flex-col gap-5">
                <Dailylimit />
                <Progress />
              </div>
              <section className="w-[586px] h-[888px] gap-[20px] ml-12 rounded-[16px]">
                <Savingcard />
                <Transaction />
              </section>             
              <Colum3 />
            </div>
            <Footer />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App;




