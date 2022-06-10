// HERO
import Hero from "./components/hero/Hero";
// TEXT
import Text from "./components/text/Text";
// ReactCarusel
import ReactCarusel from "./components/react_carusel/ReactCarusel";
// Toshkent
import Toshkent from "./components/toshkent/Toshkent";
import SmallCarusel from './components/SmallCarusel/SmalCarusel'
import SecondHero from './components/SecondHero/SecondHero';
import Support from './components/Support/Support'
import ThirdHero from './components/ThirdHero/ThirdHero';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
        <Hero/>
        <Text/>
        <ReactCarusel/>
        <Toshkent/>
        <SmallCarusel/>
        <SecondHero/>
        <Support/>
        <ThirdHero/>
        <Footer/>
    </div>
  );
}

export default App;
