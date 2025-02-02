import About from './About';
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
    </div>
  );
};

export default Home;
