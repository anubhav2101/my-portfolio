import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900  body-font">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
}
export default App;
