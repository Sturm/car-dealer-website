import React, { useEffect, useState } from 'react';
import Navigation from '../../components/layout/Navigation/Navigation';
import Hero from '../../components/layout/Hero/Hero';
import './Homepage.scss';
import CarCard from '../../components/CarCard/CarCard';
import Footer from '../../components/layout/Footer/Footer';

const Homepage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cars')
    .then(res => res.json())
    .then(res => {
      setCars(res.data);
      setLoading(false);
    })
  }, []);

  return (<>
      <Navigation/>
      <Hero/>
      <section className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Ostatnie aktualizacje</h2>
            </div>
            {loading && (
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {cars.map(car => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={car._id}>
                <CarCard car={car}/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
};

export default Homepage;