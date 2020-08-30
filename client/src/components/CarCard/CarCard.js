import React from 'react';
import './CarCard.scss';
import { Link } from 'react-router-dom';
import carImage from './../../assets/img/bmw.jpg';

const CarCard = ({ car }) => {
  return (
    <div className="card car-card">
      <Link to={`/car/${car.slug}`}>
        <img
          src={carImage}
          className="card-img-top"
          alt={`${car.brand} ${car.model}`}
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        {car.sold && (<span className="badge bg-app-primary">Sprzedane</span>)}
        <p className="card-text">
          Model: {car.model} <br/>
          Pojemność silnika: {car.engineSize} cm<sup>3</sup><br/>
          Przebieg: {`${car.mileage.toLocaleString('pl-PL')}km`}<br/>
          Rok produkcji: {car.year} <br/>
          Moc: {car.horsePower}KM ({parseInt(car.horsePower * 0.75)} KW)
        </p>
        <Link to={`/car/${car.slug}`} className="btn btn-app-primary">Więcej informacji{' '}
          <svg width="1em"
               height="1em"
               viewBox="0 0 16 16"
               className="bi bi-arrow-right-circle-fill"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
};

export default CarCard;