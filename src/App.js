import './App.css';
import './index.css'
import Courses from './components/Courses';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Teachers from './components/Teachers';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <ImageSlider/>
      <Courses />
      <Teachers />
      <Footer />
    </div>
  );
}

export default App;
