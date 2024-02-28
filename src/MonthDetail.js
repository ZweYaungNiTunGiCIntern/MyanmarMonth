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
  } = useFetch("http://localhost:8000/month/" + id);
  useEffect(() => {
      AOS.init();
  }, []);

  return (
    <div>
        {isPending && <div>Loading..</div>}
        {error && <div>{error}</div>}
        {month && (
           <div className="container px-md-6 py-md-6 px-3 py-3 mx-auto my-5" data-aos="fade-up">
           <div className="row justify-content-center align-items-stretch"> {/* Add align-items-stretch */}
               <div className="col-md-6 mb-4">
                   <img src={process.env.PUBLIC_URL + '/' + month.ImagePath} className="mx-5 my-5" style={{width: "300px", height: "300px"}}/>
                   <p>{month.Description}</p>
               </div>
               <div className="col-md-6">
                    <p>{month.Detail}</p>
               </div>
           </div>
       </div>
       
        )}
    </div>
);

};

export default MonthDetail;
