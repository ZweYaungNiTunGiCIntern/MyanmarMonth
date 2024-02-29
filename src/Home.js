import MonthList from "./MonthList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: month,
    error,
    isPending,
  } = useFetch("https://json-for-bird.vercel.app/month");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {month && <MonthList months={month} title="မြန်မာလများ" />}
    </div>
  );
};

export default Home;


