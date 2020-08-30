import React, { useEffect, useState } from 'react';
import Navigation from '../../components/layout/Navigation/Navigation';
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import './CarPage.scss';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/Footer/Footer';
import carImage from './../../assets/img/bmw.jpg';

const CarPage = (props) => {
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/car/${props.match.params.carId}`)
    .then(res => res.json())
    .then(res => {
      console.log(res.data);
      setCar(res.data);
      setLoading(false);
    })
  }, [props.match.params.carId]);

  return (
    <>
      <SimpleReactLightbox>
        <Navigation/>
        <section className="hero-car">
          <div className="container">
            <h1>{car.name}</h1>
            {car.brand} {car.model} {car.year} <br/>
          </div>
        </section>
        <main className="car-page">
          <section className="car-info-section">
            <div className="container">
              <div className="row">
                {loading && (
                  <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
                {!loading && (<>
                  <div className="col-md-6">
                    <h2>{car.name}</h2>
                    Model: {car.model} <br/>
                    Pojemność silnika: {car.engineSize} cm<sup>3</sup><br/>
                    Przebieg: {`${car.mileage.toLocaleString('pl-PL')}km`}<br/>
                    Rok produkcji: {car.year} <br/>
                    Moc: {car.horsePower}KM ({parseInt(car.horsePower * 0.75)} KW)<br/>
                    Skrzynia biegów: {car.gearType}<br/>
                    <span className="price">Cena: {car.price.toLocaleString('pl-PL')}zł</span>

                  </div>
                  <div className="col-md-6">
                    {car.description}
                  </div>
                  <div className="col-lg-12">
                    <div className="images">
                      <SRLWrapper>
                        <a href={carImage} data-attribute="SRL">
                          <img src={carImage} alt={`${car.brand} ${car.model}`}/>
                        </a>
                        <a href={carImage} data-attribute="SRL">
                          <img src={carImage} alt={`${car.brand} ${car.model}`}/>
                        </a>
                      </SRLWrapper>
                    </div>
                  </div>
                </>)}
              </div>
            </div>
          </section>
          <section className="form-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <form>
                    <h2>Zapytaj o ten samochód</h2>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Twój
                        email</label>
                      <input type="email" className="form-control" id="email"
                             placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Wiadomość</label>
                      <textarea className="form-control" id="message" rows="5"/>
                    </div>
                    <Link to={`/car/${car.slug}`} className="btn btn-app-primary">
                      Wyślij zapytanie{' '}
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-envelope-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                        />
                      </svg>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </SimpleReactLightbox>
    </>
  )
};

export default CarPage;