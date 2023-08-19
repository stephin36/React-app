import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
     fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    

    const json = await data.json();
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" 
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }} />
            <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          </div>
          <button className="filter-btn" onClick={ () => {
             const filteredList = listOfRestaurants.filter((list) => list.info.avgRating >= 4.4);
             setFilteredRestaurant(filteredList);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;