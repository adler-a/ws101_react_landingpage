import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
