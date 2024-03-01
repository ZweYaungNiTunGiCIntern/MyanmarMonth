import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useParams , Link } from "react-router-dom";
import useFetch from "./useFetch";

const MonthDetail = () => {
  const { id } = useParams();
  const {
    data: month,
    error,
    isPending,
  } = useFetch("https://json-for-bird.vercel.app/month/" + id);
  useEffect(() => {
      AOS.init();
  }, []);

  return (
    <div>
    {isPending && <div style={{ height: '100vh' }}>Loading..</div>}
    {error && <div>{error}</div>}
    {month && (
        <div className="container-fluid px-md-5 py-5 mx-md-5 my-5" data-aos="fade-up">
            <div className="mx-3 my-3">
                <h1>{month.MonthMm} - {month.MonthEn}</h1>
            </div>
            
            <div className="row justify-content-center align-items-stretch"> {/* Center content horizontally and stretch items */}
                <div className="col-md-6 mb-4">
                    <img src={process.env.PUBLIC_URL + '/' + month.MonthImage} className="mb-3 img-fluid" alt="Month" />
                    <div className="my-5">
                        <h3 className="mb-3 text-center">{month.FestivalMm}</h3>
                        <h4 className="mt-3 text-center">{month.FestivalEn}</h4>
                    </div>
                    <p className="mt-3">{month.Description}</p>
                    
                </div>
                <div className="col-md-6 text-left">
                    <p>{month.Detail}</p>
                </div>
                <div className="d-flex justify-content-center">
                        <Link to="/month" className="btn rounded-pill my-4 text-light" style={{ backgroundColor: '#709090', color: '#333' }}>Back</Link>
                    </div>
            </div>
        </div>
    )}
</div>
);

};

export default MonthDetail;
