import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [catFact, setCatFact] = useState("");
  const [img, setImg] = useState([]);

  const fetchImage = () => {
    Axios.get("https://api.thecatapi.com/v1/images/search").then((re) => {
      setImg(re.data[0].url);
    });
  };
  console.log(img);
  useEffect(() => {
    fetchImage();
    fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };
  function twoFunctions() {
    fetchCatFact();
    fetchImage();
  }
  return (
    <div className="App">
      <button onClick={twoFunctions}>Generate cat fact</button>
      <p> {catFact}</p>
      <img src={img} alt="random cat picture" />
    </div>
  );
}

export default App;
