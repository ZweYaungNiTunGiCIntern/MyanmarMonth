import MonthList from "./MonthList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: month,
    error,
    isPending,
  } = useFetch("http://localhost:8000/month");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {month && <MonthList months={month} title="မြန်မာနိုင်ငံတွင် တွေ့ရသော ငှက်များ" />}
    </div>
  );
};

export default Home;


