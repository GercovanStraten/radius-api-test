import React, {useState} from 'react';
import './App.css';
import Listing from './RadiusListing.js'

function App() {

  const [listingProps, setListingProps]= useState({
    latitude: "",
    longitude: "",
    distance: "",
    price: ""
  })

  const [render, setRender] = useState(false);

  function handleChange(event){
    const {placeholder, value} = event.target
    console.log();

    setListingProps(prevValue =>{
      return({
        ...prevValue,
        [placeholder]: value
      }
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Radius API test page</h1>
        <input type="text" placeholder="latitude" value={listingProps.latitude} onChange={handleChange}/>
       <input type="text" placeholder="longitude" value={listingProps.longitude} onChange={handleChange}/>
       <input type="text" placeholder="distance" value={listingProps.distance} onChange={handleChange}/>
       <input type="text" placeholder="price" value={listingProps.price} onChange={handleChange}/>
       <button onClick={()=>{render? setRender(false):setRender(true)}}>Search</button>
       {render && <Listing props={listingProps}/>}
      </header>
    </div>
  );
}

export default App;
