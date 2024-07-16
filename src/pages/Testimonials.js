import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'John Doe', message: 'Super expérience!' },
    { id: 2, name: 'Jane Smith', message: 'Très satisfait du service.' }
  ]);

  return (
    <div className="container mt-5 testimonials-page">
      <h1 className="text-center mb-4">Témoignages</h1>
      <Link to="/add-testimonial" className="btn btn-primary mb-4">Ajouter un témoignage</Link>
      <div className="list-group">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="list-group-item">
            <h5>{testimonial.name}</h5>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
