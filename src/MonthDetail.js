import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useParams } from "react-router-dom";
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
        {isPending && <div>Loading..</div>}
        {error && <div>{error}</div>}
        {month && (
           <div className="container px-md-6 py-md-6 px-3 py-3 mx-auto my-5" data-aos="fade-up">
            <div className="mb-5">
                <h1>{month.MonthMm} - {month.MonthEn}</h1>
            </div>
           
           <div className="row justify-content-left month-text"> {/* Add align-items-stretch */}
               <div className="col-md-6 mb-4 justify-content-between ">
                   <img src={process.env.PUBLIC_URL + '/' + month.MonthImage} className="mb-3" style={{width: "500px", height: "300px"}}/>
                    <div className="my-5">
                        <h3 className="mb-3 text-center">{month.FestivalMm}</h3>
                        <h4 className="mt-3 text-center">{month.FestivalEn}</h4>
                    </div>
                    
                   <p className="mt-3">{month.Description}</p>
               </div>
               <div className="col-md-6 text-left">
                    <p>{month.Detail}</p>
               </div>
           </div>
       </div>
       
        )}
    </div>
);

};

export default MonthDetail;
