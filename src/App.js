import './App.css';
import './index.css'
import Courses from './components/Courses';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Teachers from './components/Teachers';
import { Helmet } from 'react-helmet';



function App() {
  return (<>
    <Helmet>
      <meta property="og:title" content={"Career Developers"} />
      <meta property="og:description" content={"Azamgarh Best educational coaching center , best coaching in azamgarh , azamgarh"} />
      {/* <meta property="og:image" content={URL of the image you want to use} /> */}
      {/* <meta property="og:url" content={URL of your page} /> */}
      {/* <meta property="og:type" content="website" /> */}
    </Helmet>
    <div >
      <Navbar />
      <Hero />
      <Courses />
      <Teachers/>
      <Footer />
    </div>
  </>
  );
}

export default App;
