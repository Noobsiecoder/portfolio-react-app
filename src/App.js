// TailwindCSS file
import "./styles/main.css";

// Components
import AboutMe from "./components/info/about"; // AboutMe card
import Skills from "./components/skills/skills"; // Skills card
import Blog from "./components/blog/blog"; // Blog card
import Hobbies from "./components/hobbies/hobbies"; // Hobbies card
import Experience from "./components/experience/exp"; // Experience card
import Projects from "./components/projects/projects"; // Projects card

const App = () => {
  return (
    <div className="grid gap-6 md:grid-flow-row md:grid-cols-3">
      <div className="md:col-span-3">
        <AboutMe />
      </div>
      <div className="md:col-span-1">
        <Skills />
      </div>
      <div className="md:col-span-2 md:row-span-2">
        <Blog />
      </div>
      <div className="md:col-span-1 md:row-span-2">
        <Hobbies />
      </div>
      <div className="md:col-span-2">
        <Experience />
      </div>
      <div className="md:col-span-3">
        <Projects />
      </div>
    </div>
  );
};

export default App;
