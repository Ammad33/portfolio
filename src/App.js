import logo from './logo.svg';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
       <Banner />
      {/*<Skills />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
