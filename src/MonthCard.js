import React from 'react';
import { Link } from 'react-router-dom';

const MonthCard = ({ month }) => {
  return (
    <div className="card shadow" style={{ width: '100%', height: '400px',backgroundColor: '#EDEDED' }}>
    <Link to={`/month/${month.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    
      <img src={month.ImagePath} alt={month.BirdMyanmarName} className="card-img-top bird-image" style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} />
        
      <div className="card-body d-flex flex-column justify-content-between">
        
        <div className="blog-preview text-center mt-3">
          <h5 className="mb-2">{month.MonthMm}</h5>
          <h6 className="mb-0 text-muted">{month.FestivalMm}</h6>
        </div>
      </div>
    </Link>
  </div>
  
  );
};

export default MonthCard;