import React, {useState, useEffect} from 'react';



function Listing(props){

    console.log(props)


    const long = props.props.longitude;
    const lat = props.props.latitude;
    const distance = 10000;
    const price = 50;

    useEffect(()=>{
        fetchItems();
    },[]);

    const [listings, setListings] = useState([]);
  


    const fetchItems = async () => {
        const data = await fetch('https://radiusapi.herokuapp.com/listings?lng='+ long + '&lat='+lat+'&distance='+distance+'&price='+ price);
        
        const items = await data.json();
        console.log(items);
        setListings(items.listings);
        
        
        
    }
  
    console.log(listings);
    


    return (
       
        <div className="ListingHolder">
            {listings.map(item=>{
                console.log(item.oneliner)
                return(
                    <div key={item._id} className="ListingCard">
                        <div className="CardInner">
                            <img className="image" src={item.coverImage} alt=""/>
                            <h1>{item.title}</h1>
                            <h3>{item.oneliner}</h3>
                            <p>€{item.price}</p>
                            <button>JOIN</button>
                        </div>
                        
                    </div>   
                )
            })}
            
        </div>
    )
}

export default Listing;