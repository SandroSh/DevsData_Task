import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'

function App() {
 
  return (
    <>
      <div className="box">
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
      </div>
      <Navbar/>
      <Search/>
    </>
  )
}

export default App
