import './App.css';
import NavBar from './Components/NavigationBar/NavBar';
import HeroSection from './Components/Hero/HeroSection';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <About />
      <Footer/>
    </div>
  );
}

export default App;
