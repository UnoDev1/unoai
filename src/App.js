import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Industries";
import { Services } from "./components/Services";
import { AboutUs } from "./components/about";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Certifications } from './components/certifications';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Services />
      <AboutUs />
      <Contact />
      {/* <Certifications /> */}
      <Footer />
    </div>
  );
}

export default App;
