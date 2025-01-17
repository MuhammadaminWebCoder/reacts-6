import './App.css'
import { useContext } from 'react'
import { Context } from './context/Context'
import DashboardRouter from './routes/Dashboard'
import LoginRoute from './routes/Login'
import SideBar from './modules/SideBar'

function App() {
  const {token} = useContext(Context)
    if (token) {
      return(
        <div className="flex w-[1200px] mx-auto">
          <SideBar/>
          <div className="main border flex-1">
            <DashboardRouter/>
          </div>
          <div className='w-[350px]'>
            wd
          </div>
          {/* <SideContent/> */}
        </div>
      )
    }
    else{
      return <LoginRoute/>
    }
}

export default App
