import './App.css';
import LandingPage from "./components/Cmps/LandingPage/LandingPage";
import Nav from "./components/Cmps/Nav/Nav";
import About from "./components/Cmps/About/About";
import Tecnologies from './components/Tecnologies/Tecnologies';
import Experience from "./components/Cmps/Experience/Experience";
import Contact from "./components/Cmps/Contact/Contact";


function App() {
  return (
<>
<Nav />
<About />
<Tecnologies />
<Experience />
<Contact />
</>
  );
}

export default App;
