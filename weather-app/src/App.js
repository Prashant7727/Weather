import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [search, setSearch] = useState("");
  const [apidata, setApidata] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d0394404e2733390e157ed4b74f458fe`
      );
      const data = await res.json();

      if (res.ok) {
        console.log(data);
        setApidata(data);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="d-flex    justify-content-center  pt-5  ">
      
      <div className="bg-secondary ">
        <h3 className="bg-success text-white">Check Weather </h3>
        <input
          type="text"
          name="search"
          className="form-control bg-info "
          placeholder="Enter city"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {apidata ? (
          <div className=" ">
            <p className=" border-dark ">
              <span className="text-white">Name : {apidata.name}</span>
            </p>
            <p className=" border-dark">
              <span className="text-white">Temp : {Math.round(apidata.main.temp - 273.15)} °C</span>
            </p>
            <p className=" border-dark">
              <span className="text-white">
                Max Temp : {Math.round(apidata.main.temp_max - 273.15)} °C
              </span>
            </p>
            <p className=" border-dark">
              <span className="text-white">
                Min Temp : {Math.round(apidata.main.temp_min - 273.15)} °C
              </span>
            </p>

            <p className=" border-dark">
              <span className="text-white">Country code : {apidata.sys.country}</span>
            </p>
            <p className=" border-dark">
              <span className="text-white">Wind Speed : {apidata.wind.speed}</span>
            </p>
          </div>
        ) : (
          <p>Result not found</p>
        )}
      </div>
    </div>
  );
}

export default App;
