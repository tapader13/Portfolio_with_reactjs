import About from './About';
import Contact from './Contact';
import Education from './Education';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skill';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
