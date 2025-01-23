import './App.css'
import { lazy, Suspense, useContext } from 'react'
import { Context } from './context/Context'
import DashboardRouter from './routes/Dashboard'
import SideBar from './modules/SideBar'
import SideContent from './modules/SideContent'

const LoginRoute = lazy(() => new Promise((resolve) => {
  return setTimeout(() => resolve(import('./routes/Login')),1000)
}))
import LazyFallBack from './components/LazyFallBack'

function App() {
  const {token} = useContext(Context)
    if (token) {
      return(
        <div className="flex w-[1370px] mx-auto">
          <SideBar/>
          <div className="main border flex-1">
            <DashboardRouter/>
          </div>
          <div className='w-[370px]'>
            <SideContent/>
          </div>
        </div>
      )
    }
    else{
      return (<Suspense fallback={<LazyFallBack/>}>
       <LoginRoute/>
      </Suspense>)
    }
}

export default App
