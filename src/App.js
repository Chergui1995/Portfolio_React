import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import AddTestimonial from './pages/AddTestimonial';
import NotFound from './pages/NotFound';
import ProjectDetails from './pages/ProjectDetails';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/add-testimonial" element={<AddTestimonial />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
