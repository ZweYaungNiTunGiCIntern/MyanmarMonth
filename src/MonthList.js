import React, { useState, useEffect } from 'react';
import MonthCard from './MonthCard';
import { Link } from "react-router-dom";
import NotFound from "./NotFound.js";
import Hello from "./hello.jpg"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MonthList.css'; // Custom CSS file for styling
import Myanmar from './Myanmarculture.jpg'
const MonthList = ({ months, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const totalPages = Math.ceil(months.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, months.length - 1);
  const currentBirds = months.slice(startIndex, endIndex + 1);

  const goToPage = (page) => {
    setCurrentPage(page);
  };   

  return (
    <div className="container px-5 py-5">
      <div className="row justify-content-center d-flex">
        <div className="col-md-6 rounded my-5 py-5 aos-init aos-animate" data-aos="fade-up">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100 border border-dark" src={Hello} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 border border-dark" src={Hello} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-md-6 my-3 aos-init my-5 py-5 aos-animate" data-aos="fade-up">
          <h3 className="my-3 text-center">ရိုးရာပွဲတော်များ</h3>
          <p className="mb-3 mt-5 text-align-center">
            ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံသည် အရှေ့တောင်အာရှတွင် ယဉ်ကျေးမှုအထွန်းကားဆုံးသော နိုင်ငံတစ်နိုင်ငံဖြစ်ပါသည်။ ရှေးခေတ်မြန်မာတို့၏ ဘာသာရေး၊ လူမှုရေး၊ နိုင်ငံရေး၊ ပညာရေးစသည်တို့ကို အခြေခံ၍ ပေါ်ပေါက်လာသော "ဆယ့်နှစ်လရာသီ ရိုးရာပွဲတော်များ" ကို မြန်မာပြက္ခဒိန်ဖြင့် သတ်မှတ်လေ့ရှိသည်။ အဆိုပါပွဲတော်များသည် မြန်မာလူမျိုးတို့ နှစ်ပေါင်း (၁၀ဝဝ)နီးပါး အစဉ်အဆက်ထိန်းသိမ်းလာခဲ့သော ရိုးရာယဉ်ကျေးမှု ဓလေ့ထုံးတမ်းများလည်း ဖြစ်သည်။ ယဉ်ကျေးမှုပွဲတော်များ ကျင်းပခြင်းဖြင့် စွယ်စုံပညာရှင်များ ပေါ်ထွန်းလာစေနိုင်ခြင်း၊ ဘာသာသာသနာထွန်းကားပြန့်ပွားလာစေခြင်း၊ နိုင်ငံတော် တိုးတက်သာယာစေခြင်း စသည့်အကျိုးကျေးဇူးများကိုရရှိစေနိုင်ပါသည်။
          </p>
        </div>
      </div>
      <h2 className="mb-5 mt-5">{title}</h2>
      <div className="row justify-text-between dflex my-5 py-5">
        {currentBirds.map((month) => (
          <div key={month.id} className="col-lg-3 col-md-6 mb-4 aos-init aos-animate" data-aos="fade-up">
            <MonthCard month={month} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => goToPage(currentPage - 1)}>Previous</button>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => goToPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => goToPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default MonthList;
