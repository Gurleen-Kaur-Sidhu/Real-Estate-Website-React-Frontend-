import './App.css';
import Footer from './components/footer/Footer';
import NavbarComponent from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import FreeValuationForm from './pages/FreeValuationForm';
import Review from './pages/Review';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Testimonial from './pages/Testimonial';

function App() {
  return (
    <BrowserRouter>
      <>
        <ScrollToTop /> 
        <NavbarComponent />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/freevaluation' element={<FreeValuationForm />} />
          <Route path='/review' element={<Review />} />
          <Route path='/testimonial' element={<Testimonial />} />

          <Route path='*' element={<NotFound />} />
        </Routes>

        <ToastContainer position="top-right" autoClose={12000} hideProgressBar />

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
