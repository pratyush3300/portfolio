import Navbar from "./components/navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import SocialLinks from "./components/Contact/socialLink";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills />
      <Works />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
