import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";

const BASE_URL = "http://localhost:8000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        console.log(data);
        setCities(data);
       
      } catch (err) {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);


  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      <Route path="app" element={<AppLayout />}>
        <Route index element={<CityList isLoading={isLoading} cities={cities} />} />
        <Route path="cities" element={<CityList isLoading={isLoading} cities={cities} />} />
        <Route path="countries" element={<CountryList isLoading={isLoading} cities={cities}/>} />
        <Route path="form" element={<p>Form</p>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
