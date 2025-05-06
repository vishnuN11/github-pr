
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header />
     <Footer /> 
    </div>
     
    </>
  )
}

export default App
