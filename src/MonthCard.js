import React from 'react';
import { Link } from 'react-router-dom';

const BirdCard = ({ month }) => {
  return (
    <div className="card rounded-5" style={{ width: '100%', height: '400px', backgroundColor: 'rgba(230,230,250, 0.5)' }}>
    <Link to={`/month/${month.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <img src={month.ImagePath} alt={month.BirdMyanmarName} className="card-img-top bird-image rounded-5" style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} />
        </div>
        <div className="blog-preview text-center mt-3">
          <h5 className="mb-2">{month.MonthMm}</h5>
          <h6 className="mb-0 text-muted">{month.FestivalMm}</h6>
        </div>
      </div>
    </Link>
  </div>
  
  );
};

export default BirdCard;