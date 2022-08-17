import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [gregData, setGregData] = useState([])


  useEffect(() => {
    const getData = async () => {
      let req = await fetch("http://localhost:6001/listings")
      let res = await req.json()
      setGregData(res)
    }
    getData() 
  }, [])

  
  return (
    <div className="app">
      <Header gregSearch={gregData} />
      <ListingsContainer gregData={gregData}/>
    </div>
  );
}

export default App;
 